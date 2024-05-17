import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { Container, Row, Col, Nav, Navbar, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('feedbacks');
  const [selectedUser, setSelectedUser] = useState(null);
  const [userFeedback, setUserFeedback] = useState(null);
  const navigate = useNavigate(); 

  const fetchData = async (category) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3001/${category}`);
      setData(response.data);
      setLoading(false);
      setCategory(category);
      setSelectedUser(null);
      setUserFeedback(null);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData('feedbacks');
  }, []);

  const handleUserClick = async (user) => {
    setSelectedUser(user);
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3001/user-feedback/${user._id}`);
      setUserFeedback(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Container fluid className="dashboard-container">
      <Row>
        <Col md={2} className="sidebar">
          <Nav className="flex-column">
            <Nav.Link onClick={() => fetchData('users')}>Users</Nav.Link>
            <Nav.Link onClick={() => fetchData('feedbacks')}>One Month Team</Nav.Link>
            <Nav.Link onClick={() => fetchData('twomonths-feedback')}>Two Month's Team</Nav.Link>
            <Nav.Link onClick={() => fetchData('teacher-feedbacks')}>Three Month's Team</Nav.Link>
          </Nav>
        </Col>
        <Col md={10} className="content">
          <Navbar bg="light" expand="lg" className="mb-4">
            <Navbar.Brand>Dashboard</Navbar.Brand>
            <Button onClick={handleLogout} variant="danger" style={{ width: '80px' }}>Logout</Button> 
          </Navbar>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : category === 'users' ? (
            <>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((user, index) => (
                    <tr key={index} onClick={() => handleUserClick(user)}>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              {selectedUser && userFeedback && (
                <div>
                  <h4>Feedback for {selectedUser.name}</h4>
                  <pre>{JSON.stringify(userFeedback, null, 2)}</pre>
                </div>
              )}
            </>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Applicant Name</th>
                  <th>Batch Number</th>
                  <th>Project Name</th>
                  <th>Satisfaction</th>
                  <th>Improvement</th>
                  <th>Suggestions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.applicantName}</td>
                    <td>{item.batchNumber}</td>
                    <td>{item.projectName}</td>
                    <td>{item.satisfaction}</td>
                    <td>{item.improvement.join(', ')}</td>
                    <td>{item.suggestions}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
