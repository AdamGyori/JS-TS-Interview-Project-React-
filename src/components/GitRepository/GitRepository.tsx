import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { IGitRepository } from '../../api/github-api' 
import "./gitRepository.css";
import { Avatar, Card, Chip, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';

interface GitRepositoryProps {
    repository: IGitRepository;
}

export function GitRepository(props: GitRepositoryProps) {
  

  return (
    <List>
      <ListItem>
        <ListItemText primary={<a href={props.repository.html_url} target="_blank">{props.repository.name}</a>} secondary={props.repository.description} />
        <Chip label={props.repository.stargazers_count}  icon={<StarBorderIcon />} variant="outlined" />
      </ListItem>
    </List>
  );
}