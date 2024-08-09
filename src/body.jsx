import React, { useState, useEffect } from 'react';

const DummyAlumni = [
  { company: 'Walmart', designation: 'Software Dvelopment Engineer' },
  { company: 'Deloitte', designation: 'Solution Delivery Analyst' },
  { company: 'HCL Software', designation: 'Product Manager' },
  { company: 'Oracle', designation: 'Software Development Engineer' },
  { company: 'PwC', designation: 'Tech Consultant' },
  { company: 'Cisco', designation: 'Big Data Analytics Engineer' },
  { company: 'IBM', designation: 'Software Development Engineer' },
  { company: 'SAP Labs', designation: 'Software Development Engineer' },
  { company: 'PwC', designation: 'Associate consultant' },
  { company: 'Epsilon', designation: 'Software Development Engineer' },
  { company: 'Schneider Electric', designation: 'Full Stack Developer' },
  { company: 'Cloudera', designation: 'Software Development Engineer' },
  { company: 'Schneider Electric', designation: 'Full Stack developer' },
  { company: 'Mercedes Benz Research and Development', designation: 'Data Engineer' },
  { company: 'PwC', designation: 'Associate' },
  { company: 'Paypal', designation: 'Target Corporation' },
  { company: 'GE', designation: 'Software Dvelopment Engineer' },
  { company: 'Allo Health', designation: 'Software Development Engineer' },
  { company: 'GSK', designation: 'Software Development Engineer' },
  { company: 'Autodesk', designation: 'Software Development Engineer' },
  { company: 'Target', designation: 'Software Development Engineer' },
  { company: 'KPMG India', designation: 'Data Analyst' },
  { company: 'Arcesium', designation: 'Software Development Engineer' },
  { company: 'Games 24x7', designation: 'Software Development Engineer' },
  { company: 'Hewlett-Packard Enterprise', designation: 'Data Scientist' },
  { company: 'Change Jar Technologies', designation: 'Software Development Engineer' },
  { company: 'LAM Research', designation: 'IT Engineer' },
  { company: 'Hewlett-Packard Enterprise', designation: 'Software Dvelopment Engineer' },
  { company: 'Consillio', designation: 'Software Dvelopment Engineer' },
  { company: 'Blue Yonder', designation: 'Software Dvelopment Engineer' },
  { company: 'Indian Navy', designation: 'Sub Lieutenant' },
  { company: 'IIT Kanpur', designation: 'PhD' },
  { company: 'Zebra Technologies', designation: 'Software Dvelopment Engineer' },
  { company: 'Commvault', designation: 'Software Dvelopment Engineer' },
  { company: 'Tejas Networks', designation: 'Software Dvelopment Engineer' },
  { company: 'Akamai Technologies', designation: 'Software Dvelopment Engineer' },
  { company: 'Zebra Technologies', designation: 'Software Dvelopment Engineer' },
  { company: 'CGI', designation: 'Software Dvelopment Engineer' },
  { company: 'Hewlett Packard Enterprise', designation: 'Cloud Dveloper' },
  { company: 'TruckX', designation: 'Senior Software Dvelopment Engineer' },
  { company: 'IBM', designation: 'Software Dvelopment Engineer' },
  { company: 'Universal automation solutions private limited', designation: 'Software Dvelopment Engineer' },
  { company: 'Reliance', designation: 'Software Dvelopment Engineer' },
  { company: 'Tesco', designation: 'Software Dvelopment Engineer' },
  { company: 'Mercedes Benz Research and Development ', designation: 'Software Dvelopment Engineer' },
  { company: 'Via Play Group', designation: 'Data Engineer' },
  { company: 'Sense', designation: 'Software Dvelopment Engineer' },
  { company: 'Hero-Vired', designation: 'Product Manager' }
];

const Body = () => {
  const [company, setCompany] = useState('');
  const [searchType, setSearchType] = useState('learn');
  const [message, setMessage] = useState('');
  const [foundAlumni, setFoundAlumni] = useState([]);
  const [redirectLink, setRedirectLink] = useState('');

  useEffect(() => {
    if (redirectLink) {
      window.location.href = redirectLink;
    }
  }, [redirectLink]);

  const handleFormOption = () => {
   if (searchType === 'prepare') {
      window.location.href = 'https://nucleusfusioninterview10-3qwg2d3jn-vm6s-projects.vercel.app/';
    }
  };



  const uniqueCompanies = [...new Set(DummyAlumni.map(alumnus => alumnus.company))];
  const isButtonDisabled = !company.trim();

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <section style={styles.searchSection}>
          <h1 style={styles.heading}>Student Search</h1>
          <div style={styles.radioGroup}>
         
            <label style={styles.radioLabel}>
              <input
                type="radio"
                value="prepare"
                checked={searchType === 'prepare'}
                onChange={(e) => setSearchType(e.target.value)}
                style={styles.radioInput}
              />
              <span style={styles.radioText}>Connect to a PES Alumni for your preferred organization</span>
            </label>
          </div>
          <input
            type="text"
            list="companySuggestions"
            placeholder="Search by Organization Name...."
            style={styles.input}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <datalist id="companySuggestions">
            {uniqueCompanies.map((company, index) => (
              <option key={index} value={company} />
            ))}
          </datalist>
          <div style={styles.optionsSection}>
            <button 
              style={{ ...styles.button, backgroundColor: isButtonDisabled ? '#ccc' : '#007BFF' }}
              onClick={handleFormOption}
              disabled={isButtonDisabled}
            >
              Send Details via Form
            </button>
           
          </div>
          {message && <p style={styles.message}>{message}</p>}
          <div style={styles.contentRow}>
            {foundAlumni.length > 0 && (
              foundAlumni.map((alumnus, index) => (
                <div key={index} style={styles.textContainer}>
                  <p><strong>Company:</strong> {alumnus.company}</p>
                  <p><strong>Designation:</strong> {alumnus.designation}</p>
                </div>
              ))
            )}
          </div>
        </section>
        <section style={styles.companySection}>
          <h2 style={styles.companyHeading}>Organizations our mentors are a part of:</h2>
          <div style={styles.companyList}>
            {uniqueCompanies.map((company, index) => (
              <div key={index} style={styles.companyContainer}>
                <strong>{company}</strong>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    padding: '2rem',
    boxSizing: 'border-box',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: '2rem',
  },
  searchSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'LightCyan',
    padding: '2rem',
    borderRadius: '0.75rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '1200px',
    boxSizing: 'border-box',
  },
  heading: {
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#333',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: '1rem',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  radioInput: {
    marginRight: '0.5rem',
  },
  radioText: {
    color: 'blue',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  optionsSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    width: '100%',
  },
  button: {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '0.5rem',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  message: {
    marginTop: '1rem',
    color: '#ff0000',
  },
  contentRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
  textContainer: {
    margin: '0.5rem',
    padding: '0.5rem',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
  },
  companySection: {
    marginTop: '2rem',
    width: '100%',
    maxWidth: '1200px',
    boxSizing: 'border-box',
  },
  companyHeading: {
    marginBottom: '1rem',
    textAlign: 'center',
    color: 'blue',
  },
  companyList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '0.5rem',
    color: 'purple',
  },
  companyContainer: {
    padding: '0.5rem',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
  },
};

export default Body;
