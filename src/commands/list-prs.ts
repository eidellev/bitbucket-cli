import { Command /*, flags*/ } from '@oclif/command';
import { listPullRequests } from '../bitbucket-api';

export default class ListPullRequests extends Command {
  static description = 'Prints a list of pull requests for current repository';

  static examples = [
    `$ bb list-prs
hello world from ./src/hello.ts!
`,
  ];

  // static flags = {
  //   help: flags.help({ char: 'h' }),
  //   // flag with a value (-n, --name=VALUE)
  //   name: flags.string({ char: 'n', description: 'name to print' }),
  //   // flag with no value (-f, --force)
  //   force: flags.boolean({ char: 'f' }),
  // };

  // static args = [{ name: 'file' }];

  async catch(err: Error) {
    this.error(err.message);
  }

  async run() {
    // const { args, flags } = this.parse(Hello);
    // const name = flags.name ?? 'world';
    // this.log(`hello ${name} from ./src/commands/hello.ts`);
    // if (args.file && flags.force) {
    // this.log(`you input --force and --file: ${args.file}`);
    // }
    const pullRequests = await listPullRequests();
    console.log(pullRequests);
  }
}
