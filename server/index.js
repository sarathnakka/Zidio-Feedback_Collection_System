const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const UserModel = require('./models/User')
const FeedbackModel = require('./models/feedback');
const TeacherFeedbackModel = require('./models/teacherFeedback');
const TwoMonthsFeedbackModel = require('./models/TwoMonthsFeedback');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

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
  const { applicantName, batchNumber, projectName, satisfaction, improvement, suggestions } = req.body;
  
  const newFeedback = new FeedbackModel({
      applicantName,
      batchNumber,
      projectName,
      satisfaction,
      improvement,
      suggestions
  });
  
  newFeedback.save()
      .then(() => res.status(200).json({ message: 'One months Feedback submitted successfully' }))
      .catch(err => res.status(500).json({ error: err.message }));
});


app.post('/submit-teacher-feedback', (req, res) => {
  const { applicantName, batchNumber, projectName, satisfaction, improvement, suggestions } = req.body;
  
  const newTeacherFeedback = new TeacherFeedbackModel({
    applicantName,
    batchNumber,
    projectName,
    satisfaction,
    improvement,
    suggestions
  });

  newTeacherFeedback.save()
    .then(() => res.status(200).json({ message: 'Three months feedback submitted successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/submit-twomonths-feedback', (req, res) => {
  const { applicantName, batchNumber, projectName, satisfaction, improvement, suggestions } = req.body;
  
  const newFeedback = new TwoMonthsFeedbackModel({
    applicantName,
    batchNumber,
    projectName,
    satisfaction,
    improvement,
    suggestions
  });
  
  newFeedback.save()
    .then(() => res.status(200).json({ message: 'Two months feedback submitted successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/submit-twomonths-feedback', (req, res) => {
  const { applicantName, batchNumber, projectName, satisfaction, improvement, suggestions } = req.body;
  
  const newFeedback = new TwoMonthsFeedback({
    applicantName,
    batchNumber,
    projectName,
    satisfaction,
    improvement,
    suggestions
  });
  
  newFeedback.save()
    .then(() => res.status(200).json({ message: 'Two months feedback submitted successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
});
  
// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile', 'email'] }));

//   passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:3001/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
   
//     return done(null, profile);
//   }
// ));

// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/signup');
//   });


app.get('/users',  async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/user-feedback/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const userFeedback = await FeedbackModel.find({ userId: userId });
    res.json(userFeedback);
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

app.get('/twomonths-feedback', async (req, res) => { 
  try {
    const twoMonthsFeedbacks = await TwoMonthsFeedbackModel.find();
    res.json(twoMonthsFeedbacks);
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
