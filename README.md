@eidellev/bitbucket-cli
=======================

Do common bitbucket tasks from the command line

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@eidellev/bitbucket-cli.svg)](https://npmjs.org/package/@eidellev/bitbucket-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@eidellev/bitbucket-cli.svg)](https://npmjs.org/package/@eidellev/bitbucket-cli)
[![License](https://img.shields.io/npm/l/@eidellev/bitbucket-cli.svg)](https://github.com/eidellev/bitbucket-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @eidellev/bitbucket-cli
$ bb COMMAND
running command...
$ bb (-v|--version|version)
@eidellev/bitbucket-cli/0.0.0 darwin-x64 node-v12.16.1
$ bb --help [COMMAND]
USAGE
  $ bb COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bb hello [FILE]`](#bb-hello-file)
* [`bb help [COMMAND]`](#bb-help-command)

## `bb hello [FILE]`

describe the command here

```
USAGE
  $ bb hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ bb hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/eidellev/bitbucket-cli/blob/v0.0.0/src/commands/hello.ts)_

## `bb help [COMMAND]`

display help for bb

```
USAGE
  $ bb help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_
<!-- commandsstop -->
