import { Command /* , flags */ } from '@oclif/command';
import open from 'open';
import { createNewPullRequest } from '../bitbucket-api';

export default class NewPullRequest extends Command {
  static description = 'Creates a new pull request';

  static examples = [`$ bb new-pr main`];

  static args = [{ name: 'destination' }];

  async catch(err: Error) {
    this.error(err.message);
  }

  async run() {
    const {
      args: { destination = 'master' },
    } = this.parse(NewPullRequest);

    this.log(`Creating new pull request into '${destination}'`);

    // TODO: add check that branch has remote and is not behind before openning PR

    const href = await createNewPullRequest(destination);
    await open(href);
  }
}
