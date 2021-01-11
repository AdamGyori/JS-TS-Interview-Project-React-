import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { IGitOrg } from '../../api/github-api' 
import { Avatar, Card, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';



interface GitOrgProps {
    orgs: IGitOrg;
}

export function GitOrg(props: GitOrgProps) {
  

  return (
    <List>
      <ListItem>
        <ListItemAvatar>
        <Avatar alt="organization" src={props.orgs.avatar_url}/>
        </ListItemAvatar>
        <ListItemText primary={props.orgs.login} secondary={props.orgs.description} />
      </ListItem>
    </List>
  );
}