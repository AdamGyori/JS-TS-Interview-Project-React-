import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { IGitRepository } from '../../api/github-api' 
import { GitUser } from '../GitUser/GitUser';
import { Card } from '@material-ui/core';
import { Container } from '@material-ui/core';
import "./gitUserWrapper.css";



export const GitUserWrapper:React.FC = ({children}) => {
  

  return (
      <Card className="GitUserWrapper">
        {children}
      </Card>
  );
}

