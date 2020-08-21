import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { useStyles } from './style';

function SearchAppBar({ history }) {
  const classes = useStyles();

  return (
    <AppBar className={classes.AppBar}>
      <Toolbar>
        <div >
        <Button color="inherit" onClick={() => history.push('/cosmic/marketing-relationnel')}>Marketing Relationnel</Button>
          <div>
             </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(SearchAppBar);
