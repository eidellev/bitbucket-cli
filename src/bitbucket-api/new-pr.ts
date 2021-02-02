import { getRepoDetails, axios } from './utils';

interface Response {
  links: {
    html: {
      href: string;
    };
  };
}

export async function createNewPullRequest(destination: string) {
  const { currentBranch, workspace, repoName } = await getRepoDetails();

  const payload = {
    title: currentBranch,
    source: {
      branch: {
        name: currentBranch,
      },
    },
    destination: {
      branch: {
        name: destination,
      },
    },
  };

  const {
    data: {
      links: {
        html: { href },
      },
    },
  } = await axios.post<Response>(`${workspace}/${repoName}/pullrequests`, payload);

  return href;
}
