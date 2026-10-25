---
sidebar_position: 7
sidebar_label: Blueprint Nodes
description: All Blueprint nodes, events and types in the GameLift Server plugin.
---

# Blueprint Nodes

All nodes are in the **AWS > GameLift > Server** category. Most of them call the [Server SDK action](https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-server-sdk5-cpp-actions.html) with the same name.

## Return values
The nodes run right away and return **true** on success. On failure they return **false** and set:

| Output | Description |
|---|---|
| Error Type | The Server SDK error, for example `GAMELIFT_SERVER_NOT_INITIALIZED` or `PROCESS_NOT_ACTIVE`. |
| Error Message | The error message from the Server SDK. |

## GameLift Server Object
Create a Blueprint with this class as the parent. See [Using the Plugin](/plugins/gameliftserver/using_plugin).

### Functions
| Node | Description |
|---|---|
| Init Sdk | Initializes the Server SDK with the Server Parameters and calls ProcessReady. |
| Destroy GameLift Server | Calls Process Ending, shuts down the Server SDK and stops sending events to the Server Object. |
| Activate Game Session | Tells GameLift the server is ready for players. Call it from Start Game Session if you override it. |
| Process Ending | Tells GameLift the server process is shutting down. |
| Get Game Session Id | The id of the game session on this server, if one is active. |
| Get Termination Time | When GameLift will shut down the server process, in epoch seconds, or `-1` if no shutdown is scheduled. Use it in Process Terminate. |
| Accept Player Session | Validates a player session id when a player connects. |
| Remove Player Session | Tells GameLift a player has left. |
| Describe Player Sessions | Gets player sessions by player session id, game session id or player id. Use **Limit** and **Next Token** to page through the results. |
| Update Player Session Creation Policy | `ACCEPT_ALL` or `DENY_ALL` new player sessions for the game session. |
| Start Match Backfill | Asks FlexMatch to find players for open slots. Returns the backfill **Ticket Id**. The result comes to Update Game Session. |
| Stop Match Backfill | Cancels a backfill request. |
| Get Compute Certificate | The path to the TLS certificate and the compute name. Needs a fleet with certificate generation turned on. |
| Get Fleet Role Credentials | Temporary AWS credentials for the fleet's IAM role: access key id, secret access key, session token and expiration. Use them to call other AWS services from the server. |

### Events
| Event | Description |
|---|---|
| Start Game Session | GameLift placed a game session on this server. |
| Update Game Session | Matchmaker data was updated by a backfill, or a backfill failed. |
| Process Terminate | GameLift is shutting down the server process. |
| Server Health Check | Return false if the server is unhealthy. |

See [Server events](/plugins/gameliftserver/using_plugin#server-events) for what they do by default.

### Properties
| Property | Description |
|---|---|
| Server Parameters | Web Socket Url, Fleet Id, Process Id, Host Id, Auth Token, Aws Region, Access Key, Secret Key and Session Token. Leave empty on managed EC2 fleets. |
| Log File Path | The folder of the log file GameLift uploads when the game session ends. |
| Log File Name | The name of the log file. |

## GameLift Server Game Mode
See [Game Mode](/plugins/gameliftserver/game_mode).

| Node | Description |
|---|---|
| Validate Player Login | Override to reject a player with an error message. |
| PreLogin | Override to read the connect options. |
| Get Player Session Id | The player session id of a Player Controller. |

## Types
| Type | Description |
|---|---|
| Server Game Session | Game session id, name, fleet id, maximum player session count, status, game properties, IP address, DNS name, port, game session data and matchmaker data. |
| Server Update Game Session | The updated game session and the **Update Reason**: `MATCHMAKING_DATA_UPDATED`, `BACKFILL_FAILED`, `BACKFILL_TIMED_OUT` or `BACKFILL_CANCELLED`. |
| Server Player Session | Player session id, player id, game session id, fleet id, creation and termination time, status, IP address, DNS name, port and player data. |
| Start Match Backfill Request Server | Ticket id, matchmaking configuration ARN, game session ARN and the current players with their attributes and latencies. |
