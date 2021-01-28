import Axios from 'axios';

const baseURL = 'https://api.bitbucket.org/2.0/repositories/';

interface BBCredentials {
  username: string;
  password: string;
}

function throwMissingEnvVariable(missingEnvVariable: string): string {
  throw new Error(`Missing environment variable "${missingEnvVariable}"`);
}

export function getCredentials(): BBCredentials {
  const {
    BB_USERNAME: username = throwMissingEnvVariable('BB_USERNAME'),
    BB_PASSWORD: password = throwMissingEnvVariable('BB_PASSWORD'),
  } = process.env;

  return {
    username,
    password,
  };
}

export const axios = Axios.create({ baseURL });
