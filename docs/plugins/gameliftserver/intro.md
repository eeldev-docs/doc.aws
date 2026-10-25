---
sidebar_position: 1
sidebar_label: Introduction
description: The GameLift Server plugin integrates the Amazon GameLift Server SDK 5 with your Unreal Engine dedicated server.
---

# GameLift Server

The GameLift Server plugin runs on your dedicated server and connects it to Amazon GameLift. It reports to GameLift when the server is ready, receives game sessions, answers health checks and shuts the server down when GameLift asks it to.

The plugin is built on the **Amazon GameLift Server SDK 5.3.0**.

## Features
- **Initialize the server** on a managed EC2 fleet or a GameLift Anywhere fleet. See [Using the Plugin](/plugins/gameliftserver/using_plugin) and [GameLift Anywhere](/plugins/gameliftserver/gamelift_anywhere).
- **Server events** that you override in Blueprint: Start Game Session, Update Game Session, Process Terminate and Server Health Check.
- **Player session validation** in the included **GameLift Server Game Mode**, which accepts and removes player sessions for you. See [Game Mode](/plugins/gameliftserver/game_mode).
- **FlexMatch backfill** with Start Match Backfill and Stop Match Backfill.
- **Player sessions**: Accept Player Session, Remove Player Session, Describe Player Sessions and Update Player Session Creation Policy.
- **Fleet IAM role credentials** with Get Fleet Role Credentials, so the server can call other AWS services without stored keys.
- **Compute certificate** with Get Compute Certificate, for TLS on fleets with certificate generation turned on.
- All nodes have the same names as the [Server SDK actions](https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-server-sdk5-cpp-actions.html) in the AWS documentation.

## Server plugin or Client plugin?
| Plugin | Runs on | Used for |
|---|---|---|
| GameLift Server | The dedicated server | Talking to GameLift from the server process: ready, game sessions, health checks, player sessions, backfill. |
| [GameLift Client](/plugins/gameliftclient/intro) | A backend, tool or game client | The GameLift service API: creating game sessions and player sessions, matchmaking, fleets, builds, Anywhere computes. |

You only need the Server plugin if something else creates your game sessions, for example your own backend or the AWS console.

You need both plugins for [GameLift Anywhere](/plugins/gameliftserver/gamelift_anywhere) when the server registers itself, because only the Client plugin can register a compute and get an auth token.

## Requirements
| | |
|---|---|
| Target platforms | Windows and Linux. On Mac, Android and iOS the plugin builds, but the GameLift calls do nothing. |
| Build | A dedicated server target. See the Unreal Engine documentation on how to build one. |
| Server SDK | Amazon GameLift Server SDK 5.3.0, included in the plugin |
| Unreal Engine | See the [Fab listing](https://www.fab.com/listings/cd85240d-69d1-4810-980c-e9f2bae2d544) for the supported engine versions |

:::note
This documentation is not affiliated with or hosted by AWS or Amazon.
:::

## Where to go next
1. [Install the plugin](/plugins/gameliftserver/installing_plugin)
2. [Initialize the server](/plugins/gameliftserver/using_plugin)
3. [Validate players with the Game Mode](/plugins/gameliftserver/game_mode)
4. Look up a node in [Blueprint Nodes](/plugins/gameliftserver/blueprint_nodes)
