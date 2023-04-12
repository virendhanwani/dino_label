import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useDropzone, FileWithPath } from 'react-dropzone';
import { getMessage } from '../utils/api';
import { isAuthenticated } from '../utils/auth';
import { Container, Row, Col } from 'reactstrap';


const useStyles = makeStyles((theme) => ({
  link: {
    color: '#61dafb',
  },
  column: {
    margin: '10px',
    backgroundColor: 'rgba(0,0,0,0.5) !important',
    // border: '2px dashed #D3D3D3',
    minHeight: '50vh',
    backdropFilter: "blur(10px)",
    boxShadow: '10px 10px 10px rgba(30,30,30,0.5)',
  },
  buttonRight: {
    display: 'flex !important',
    justifyContent: 'right !important',
  },
  glassBack: {
    backgroundImage:'linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))',
    backdropFilter: "blur(10px)",
    boxShadow: '10px 10px 10px rgba(30,30,30,0.5)',
  },
  gradient: {
    backgroundImage: 'radial-gradient(circle at 10% 20%, rgb(87, 108, 117) 0%, rgb(37, 50, 55) 100.2%)',
  }

}));

export const Home: FC = () => {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const classes = useStyles();

  const queryBackend = async () => {
    try {
      const message = await getMessage();
      setMessage(message);
    } catch (err) {
      setError(String(err));
    }
  };

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const {ref, ...rootProps} = getRootProps()

  
  return (
    <>
      {/* {!message && !error && (
        <a className={classes.link} href="#" onClick={() => queryBackend()}>
          Click to make request to backend
        </a>
      )}
      {message && (
        <p>
          <code>{message}</code>
        </p>
      )}
      {error && (
        <p>
          Error: <code>{error}</code>
        </p>
      )} */}
      <Container style={{overflowY: 'scroll'}}>
        <h6>
          xs=“2“
        </h6>
        <Row xs="2">
          <Col className="bg-light border">
            Column
          </Col>
          <Col className="bg-light border">
            Column
          </Col>
          <Col className="bg-light border">
            Column
          </Col>
          <Col className="bg-light border">
            Column
          </Col>
        </Row>
        </Container>
      <a className={classes.link} href="/admin">
        Admin Dashboard
      </a>
      <a className={classes.link} href="/protected">
        Protected Route
      </a>
      {isAuthenticated() ? (
        <a className={classes.link} href="/logout">
          Logout
        </a>
      ) : (
        <>
          <a className={classes.link} href="/login">
            Login
          </a>
          <a className={classes.link} href="/signup">
            Sign Up
          </a>
        </>
      )}
    </>
  );
};
