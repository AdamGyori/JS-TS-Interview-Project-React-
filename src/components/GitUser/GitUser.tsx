import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { IGitUser } from '../../api/github-api' 
import { Card } from '@material-ui/core';
import "./gitUser.css";



interface GitUserProps {
    user: IGitUser;
}

export function GitUser(props: GitUserProps) {
  

  return (
    <div className="Profil">
      <img src={props.user.avatar_url} alt="avatar" width="100" height="100" className="ProfilImage"></img>
      <div>
      <h3><a href={props.user.html_url} target="_blank">{props.user.login}</a></h3>
      <p><b>Location:</b> {props.user.location}</p>
      <p><b>Name:</b> {props.user.name}</p>
      </div>
    </div>
  );
}