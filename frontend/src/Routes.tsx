import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

import { Home, Login, SignUp, Protected, PrivateRoute, Topnav } from './views';
import { Admin } from './admin';
import { logout } from './utils/auth';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#282c34',
    minHeight: '10vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
}));

export const Routes: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Switch>
      <Route path="/admin">
        <Admin />
      </Route>

      <div>
        {/* <header className={classes.header}>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route
            path="/logout"
            render={() => {
              logout();
              history.push('/');
              return null;
            }}
          />
          <PrivateRoute path="/protected" component={Protected} />        
        </header> */}
        <Route exact path="/" component={Topnav} />
        <body>
          <Route exact path="/" component={Home} />
        </body>
      </div>
    </Switch>
  );
};
