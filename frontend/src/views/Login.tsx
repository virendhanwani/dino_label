import React, { FC, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';

import { login, isAuthenticated } from '../utils/auth';


export const Login: FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (_: React.MouseEvent) => {
    setError('');
    try {
      const data = await login(email, password);

      if (data) {
        history.push('/');
      }
    } catch (err) {
      if (err instanceof Error) {
        // handle errors thrown from frontend
        setError(err.message);
      } else {
        // handle errors thrown from backend
        setError(String(err));
      }
    }
  };

  return isAuthenticated() ? (
    <Redirect to="/" />
  ) : (
    <></>
  );
};
