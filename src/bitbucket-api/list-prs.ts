import { getCredentials, axios } from './utils';

export async function listPullRequests() {
  const { username, password } = getCredentials();
  try {
    const pullRequests = await axios.get('zencitytech/zencity-community/pullrequests', {
      auth: {
        username,
        password,
      },
    });

    return pullRequests;
  } catch (e) {
    console.log('*******************************************');
    console.log(e);
    console.log('*******************************************');
  }
}
