oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @bindu-moe/toolchain
$ bindu COMMAND
running command...
$ bindu (--version)
@bindu-moe/toolchain/0.0.1 darwin-arm64 node-v22.12.0
$ bindu --help [COMMAND]
USAGE
  $ bindu COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bindu bundle`](#bindu-bundle)
* [`bindu help [COMMANDS]`](#bindu-help-commands)
* [`bindu logcat`](#bindu-logcat)
* [`bindu migrate`](#bindu-migrate)
* [`bindu plugins`](#bindu-plugins)
* [`bindu plugins:install PLUGIN...`](#bindu-pluginsinstall-plugin)
* [`bindu plugins:inspect PLUGIN...`](#bindu-pluginsinspect-plugin)
* [`bindu plugins:install PLUGIN...`](#bindu-pluginsinstall-plugin-1)
* [`bindu plugins:link PLUGIN`](#bindu-pluginslink-plugin)
* [`bindu plugins:uninstall PLUGIN...`](#bindu-pluginsuninstall-plugin)
* [`bindu plugins:uninstall PLUGIN...`](#bindu-pluginsuninstall-plugin-1)
* [`bindu plugins:uninstall PLUGIN...`](#bindu-pluginsuninstall-plugin-2)
* [`bindu plugins update`](#bindu-plugins-update)
* [`bindu serve`](#bindu-serve)
* [`bindu test [SOURCE]`](#bindu-test-source)

## `bindu bundle`

Builds all the sources in the repository and generates a versioning file

```
USAGE
  $ bindu bundle [-h] [--folder <value>] [--use-node-fs]

FLAGS
  -h, --help        Show CLI help.
  --folder=<value>  Subfolder to output to
  --use-node-fs     For more info, check
                    https://github.com/Paperback-iOS/paperback-toolchain/pull/4#issuecomment-1791566399

DESCRIPTION
  Builds all the sources in the repository and generates a versioning file
```

_See code: [src/commands/bundle.ts](https://github.com/Paperback-iOS/toolchain/blob/v0.0.1/src/commands/bundle.ts)_

## `bindu help [COMMANDS]`

Display help for bindu.

```
USAGE
  $ bindu help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for bindu.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/src/commands/help.ts)_

## `bindu logcat`

describe the command here

```
USAGE
  $ bindu logcat [--ip <value>] [--port <value>]

FLAGS
  --ip=<value>    [default: localhost]
  --port=<value>  [default: 27015]

DESCRIPTION
  describe the command here
```

_See code: [src/commands/logcat.ts](https://github.com/Paperback-iOS/toolchain/blob/v0.0.1/src/commands/logcat.ts)_

## `bindu migrate`

Migrate 0.7 sources to 0.8

```
USAGE
  $ bindu migrate

DESCRIPTION
  Migrate 0.7 sources to 0.8

EXAMPLES
  $ bindu migrate
```

_See code: [src/commands/migrate.ts](https://github.com/Paperback-iOS/toolchain/blob/v0.0.1/src/commands/migrate.ts)_

## `bindu plugins`

List installed plugins.

```
USAGE
  $ bindu plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ bindu plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `bindu plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ bindu plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ bindu plugins add

EXAMPLES
  $ bindu plugins:install myplugin 

  $ bindu plugins:install https://github.com/someuser/someplugin

  $ bindu plugins:install someuser/someplugin
```

## `bindu plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ bindu plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ bindu plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/inspect.ts)_

## `bindu plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ bindu plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ bindu plugins add

EXAMPLES
  $ bindu plugins:install myplugin 

  $ bindu plugins:install https://github.com/someuser/someplugin

  $ bindu plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/install.ts)_

## `bindu plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ bindu plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ bindu plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/link.ts)_

## `bindu plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bindu plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bindu plugins unlink
  $ bindu plugins remove
```

## `bindu plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bindu plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bindu plugins unlink
  $ bindu plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/uninstall.ts)_

## `bindu plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bindu plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bindu plugins unlink
  $ bindu plugins remove
```

## `bindu plugins update`

Update installed plugins.

```
USAGE
  $ bindu plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/update.ts)_

## `bindu serve`

Build the sources and start a local server

```
USAGE
  $ bindu serve [-h] [-p <value>] [-w] [--use-node-fs]

FLAGS
  -h, --help          Show CLI help.
  -p, --port=<value>  [default: 8080]
  -w, --watch         Rebuild sources on typescript file changes within directory
  --use-node-fs       For more info, check
                      https://github.com/Paperback-iOS/paperback-toolchain/pull/4#issuecomment-1791566399

DESCRIPTION
  Build the sources and start a local server
```

_See code: [src/commands/serve.ts](https://github.com/Paperback-iOS/toolchain/blob/v0.0.1/src/commands/serve.ts)_

## `bindu test [SOURCE]`

describe the command here

```
USAGE
  $ bindu test [SOURCE] [--ip <value>] [--port <value>] [--use-node-fs]

ARGUMENTS
  SOURCE  (optional) The source to test

FLAGS
  --ip=<value>
  --port=<value>  [default: 27015]
  --use-node-fs   For more info, check
                  https://github.com/Paperback-iOS/paperback-toolchain/pull/4#issuecomment-1791566399

DESCRIPTION
  describe the command here
```

_See code: [src/commands/test.ts](https://github.com/Paperback-iOS/toolchain/blob/v0.0.1/src/commands/test.ts)_
<!-- commandsstop -->
