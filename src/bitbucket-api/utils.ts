import Axios, { AxiosBasicCredentials } from 'axios';
import simpleGit from 'simple-git';

interface RepoDetails {
  workspace: string;
  repoName: string;
  currentBranch: string;
}

/**
 * Throws an excpetion with the missing variable name
 * does not return anything - this is just to fool typescript
 *
 * @param      {string}  missingEnvVariable  The missing environment variable name
 */
function throwMissingEnvVariable(missingEnvVariable: string): string {
  throw new Error(`Missing environment variable "${missingEnvVariable}"`);
}

/**
 * Gets bitbucket credentials from environment variable
 *
 * @return     {BBCredentials}  The credentials.
 */
function getCredentials(): AxiosBasicCredentials {
  const {
    BB_USERNAME: username = throwMissingEnvVariable('BB_USERNAME'),
    BB_PASSWORD: password = throwMissingEnvVariable('BB_PASSWORD'),
  } = process.env;

  return {
    username,
    password,
  };
}

export async function getRepoDetails(): Promise<RepoDetails> {
  const git = simpleGit(process.cwd());
  const isRepo = await git.checkIsRepo();

  if (!isRepo) {
    throw new Error('Please run this command from inside a Bitbucket repository!');
  }

  const [remote] = await git.getRemotes(true);
  const remoteUrl = remote?.refs?.push;

  const [, urlPart] = remoteUrl.split(':');
  const [workspace, repoName] = urlPart.split('/');

  const { current } = await git.status();

  return {
    workspace,
    repoName: repoName.replace('.git', ''),
    currentBranch: current ?? '',
  };
}

/**
 * An axios instance configured with the bitbucket API base URL
 */
const baseURL = 'https://api.bitbucket.org/2.0/repositories/';
export const axios = Axios.create({ baseURL, auth: getCredentials() });
