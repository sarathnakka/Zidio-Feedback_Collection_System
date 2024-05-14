const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const UserModel = require('./models/User')
const FeedbackModel = require('./models/feedback');
const TeacherFeedbackModel = require('./models/teacherFeedback');

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(cookieParser())

mongoose.connect('mongodb://127.0.0.1:27017/feedbacksystem');

// const varifyUser = (req, res, next) => {
//     const token = req.cookies.token;
//     if(!token) {
//         return res.status(401).json({ error: 'Token is missing' });
//     } else {
//         jwt.verify(token, "jwt-secret-key", (err, decoded) => {
//             if(err) {
//                 return res.status(403).json({ error: 'Invalid token' });
//             } else {
//                 if(decoded.role === "admin") {
//                     next()
//                 } else {
//                     return res.status(403).json({ error: 'Not authorized' });
//                 }
//             }
//         })
//     }
// }

app.get('/dashboard',  (req, res) => {
    res.json("Success")
})

app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({name, email, password: hash})
        .then(user => res.json("Success"))
        .catch(err => res.json(err))
    }).catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, (err, response) => {
                if(response) {
                  const token = jwt.sign({email: user.email, role: user.role},
                        "jwt-secret-key", {expiresIn: '1d'})  
                    res.cookie('token', token, { httpOnly: true, sameSite: 'strict' })
                    return res.json({Status: "Success", role: user.role})
                }else {
                    return res.json("The password is incorrect")
                }
            })
        } else {
            return res.json("No record existed")
        }
    })
})

app.post('/submit-feedback', (req, res) => {
    const { teacherName, rating, review } = req.body;
    
    const newFeedback = new FeedbackModel({
        teacherName,
        rating,
        review
    });
    
    newFeedback.save()
        .then(() => res.status(200).json({ message: 'Feedback submitted successfully' }))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/submit-teacher-feedback', (req, res) => {
    const { studentName, section, rating, review } = req.body;
  
    const newTeacherFeedback = new TeacherFeedbackModel({
      studentName,
      section,
      review
    });
  
    newTeacherFeedback.save()
      .then(() => res.status(200).json({ message: 'Teacher feedback submitted successfully' }))
      .catch(err => res.status(500).json({ error: err.message }));
  });

app.get('/users',  async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/feedbacks',  async (req, res) => {
  try {
    const feedbacks = await FeedbackModel.find();
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/teacher-feedbacks',  async (req, res) => {
  try {
    const teacherFeedbacks = await TeacherFeedbackModel.find();
    res.json(teacherFeedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running `);
});
