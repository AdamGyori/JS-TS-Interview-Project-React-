import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { IGitRepository } from '../../api/github-api' 
import { GitRepository } from '../GitRepository/GitRepository';
import { Card } from '@material-ui/core';
import "./gitRepositoryWrapper.css";


export const GitRepositoryWrapper:React.FC = ({children}) => {
  

  return (
      <Card className="GitRepositoryWrapper">
        {children}
      </Card>
  );
}




