import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="mb-4 text-success">TaskTracker - Your Ultimate To-Do List App</h1>
          <p>
            In the fast-paced world we live in, staying organized is key to managing daily tasks and achieving productivity.
            Enter TaskTracker, your go-to to-do list app designed to streamline your life and keep you on top of your responsibilities.
          </p>

          <h2 className="mb-4 text-success">Key Features:</h2>
          <ul>
            <li>Intuitive User Interface: TaskTracker boasts a user-friendly interface that makes creating, editing, and organizing tasks a breeze.</li>
            <li>Task Categorization: Organize your tasks with customizable categories.</li>
            <li>Due Date Reminders: Never miss a deadline again.</li>
            <li>Collaboration Made Easy: TaskTracker allows you to collaborate with others effortlessly.</li>
            <li>Cross-Platform Sync: Access your to-do lists anytime, anywhere.</li>
            <li>Progress Tracking: Monitor your productivity with the app's progress tracking feature.</li>
            <li>Notes and Attachments: TaskTracker allows you to attach notes and files.</li>
          </ul>

          <h2 className="mb-4 text-success">Get Started Today:</h2>
          <p>
            Download TaskTracker now and take the first step towards a more organized and productive life.
            Whether you're a professional balancing work tasks or a student managing assignments, TaskTracker is the tool you need to turn your to-do list into a done list.
          </p>
          <p><strong>TaskTracker – because every task matters.</strong></p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
