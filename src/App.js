import React, { useState } from 'react';
import './App.css'; 

const employees = [
  {
    name: 'Name: Mitchel Starc 22',
    title: 'Title: Software Engineer',
    image: require('./starc.png'),
    expertise: 'Expertise: Frontend Development',
    experience: 'Experience: 5 years',
    details: 'Details: Starc has been leading our frontend team, working with React and Vue.'
  },
  {
    name: 'Name: Rohit Sharma BRS',
    title: 'Title: Product Manager',
    image: require('./hitman.png'),
    expertise: 'Expertise: Product Strategy',
    experience: 'Experience: 8 years',
    details: 'Details: has managed multiple product launches and focuses on user experience.'
  },
  {
    name: 'Dale Steyn 1031',
    title: 'Title: Designer',
    image: require('./steyn.png'),
    expertise: 'Experitse: UX/UI Design',
    experience: 'Experience: 4 years',
    details: 'Details: Bob specializes in user interface design and digital branding.'
  }
];

const EmployeeDetails = ({ employee, onClose }) => (
  <div className="modal">
    <div className="modal-content">
      <img src={employee.image} alt={employee.name} className="modal-image" />
      <h2>{employee.name}</h2>
      <p className="expertise">{employee.expertise}</p>
      <p>{employee.experience} of experience</p>
      <p>{employee.details}</p>
      <button onClick={onClose} className="close-button">Close</button>
    </div>
  </div>
);

const Employee = ({ employee }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="employee-card">
      <div className="card-content">
        <img src={employee.image} alt={employee.name} className="employee-image" />
        <h2>{employee.name}</h2>
        <h3>{employee.title}</h3>
        <button onClick={() => setShowDetails(true)} className="info-button">
          More Info
        </button>
      </div>
      {showDetails && <EmployeeDetails employee={employee} onClose={() => setShowDetails(false)} />}
    </div>
  );
};

const App = () => (
  <div className="employees-container">
    {employees.map(employee => (
      <Employee key={employee.name} employee={employee} />
    ))}
  </div>
);

export default App;
