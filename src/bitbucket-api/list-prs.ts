import { getRepoDetails, axios } from './utils';

export async function listPullRequests() {
  const { workspace, repoName } = await getRepoDetails();
  const { data: pullRequests } = await axios.get(`${workspace}/${repoName}/pullrequests?state=OPEN`);

  return pullRequests;
}
