// Feel free to use something else than 'axios', for example 'ky'
import axios, { AxiosPromise } from 'axios';

// Documentation is at https://developer.github.com/v3/
const BASE_URL = 'https://api.github.com';

export interface IGitRepository{
  name: string;
  html_url: string;
  created_at: string;
  description: string | null;
  stargazers_count: number;
};

export interface IGitUser{
  login: string;
  name: string | null;
  location: string | null;
  avatar_url: string;
  html_url: string;
}

export interface IGitOrg{
  login: string;
  description: string | null;
  avatar_url: string;
}

function getRepos(username: string) {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return axios.get<IGitRepository[]>(url).then(response => response.data);
}

function getUserData(username: string) {
  return axios
    .all([
      axios.get(`${BASE_URL}/users/${username}`),
      axios.get(`${BASE_URL}/users/${username}/orgs`)
    ])
    .then(([user, orgs]) => ({
      user: user.data as IGitUser,
      orgs: orgs.data as IGitOrg[]
    }));
}

export { getRepos, getUserData };
