import { Box, Button, CircularProgress } from '@material-ui/core';
import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from "react-dom";
import { getRepos, getUserData, IGitOrg, IGitRepository, IGitUser } from './api/github-api';
import { MainComponent } from "./components/MainComponent/MainComponent";
import { NameForm } from './components/NameForm/NameForm';
import { GitRepository } from './components/GitRepository/GitRepository'
import { GitUser } from './components/GitUser/GitUser';
import { GitOrg } from './components/GitOrgs/GitOrgs'
import { GitRepositoryWrapper } from './components/GitRepositoryWrapper/GitRepositoryWrapper';
import "./App.css";
import { MiddleArea } from './components/MiddleArea/MiddleArea';
import { GitUserWrapper } from './components/GitUserWrapper/GitUserWrapper';
import { walkUpBindingElementsAndPatterns } from 'typescript';





function App() {
  const [userName, setUserName] = useState("");
  const [loadingRepos, setLoadingRepos] = useState(false);
  const [loadingUserData, setLoadingUserData] = useState(false);
  const [userData, setUserData] = useState<IGitUser>();
  const [orgData, setOrgData] = useState<IGitOrg[]>([]);
  const [repositories, setRepositories] = useState<IGitRepository[]>([]);

  
    const loadRepos = async (uName: string) => {
      setLoadingRepos(true);
      try {
      const result = await getRepos(uName);
      setRepositories(result);
      }
      catch (err) {
        alert("User not found!");
      }
      setLoadingRepos(false);
    }

    const loadUserData = async (uName: string) => {
      setLoadingUserData(true);
      try {
      const result = await getUserData(uName);
      setUserData(result.user);
      setOrgData(result.orgs);
      }
      catch(err){}
      setLoadingUserData(false);
    }
  
    let loader = false;
  function handleClick() {
    loadRepos(userName);
    loadUserData(userName);
  }
  
  const x = 5;
  const y = 10;
  return (
    <MainComponent>

        <div className="Caption">
        <h2> UI web application that retrieves and displays the user repositories and organisations in Github.</h2>
        </div>
      <div className="Top">
        <NameForm userName={userName} setUserName={setUserName} /> <Button onClick={handleClick} variant="contained">Submit</Button>
      </div>

      
      : <MiddleArea>

        
        
      {(userName !== "" && loadingUserData) 
      ? <div className="loader"></div>
      :   <GitUserWrapper>
          {userData ?
            <GitUser user={userData} />
            :
            <h2>Here will be your data.</h2>
          }

          {orgData.map((organization) => (
            <GitOrg key={organization.login} orgs={organization} />
          ))}
        </GitUserWrapper>
      }
          
          {(userName !== "" && loadingRepos) 
        ? <div className="loader"></div>
        : <GitRepositoryWrapper>
          {(repositories.length === 0) &&
            <h2>Here will be your repositories.</h2>}
          {repositories.map((repo) => (
            <GitRepository key={repo.name} repository={repo} />
          ))}
        </GitRepositoryWrapper>
        }
      </MiddleArea>
    
    </MainComponent>

  );
}


export default App;



