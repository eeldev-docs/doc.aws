---
sidebar_position: 6
sidebar_label: Blueprint Nodes
description: All Blueprint nodes in the GameLift Client plugin, grouped by what they do.
---

# Blueprint Nodes

Every GameLift action is an async node in the **AWS > GameLift** category, with the same name as in the [GameLift API Reference](https://docs.aws.amazon.com/gamelift/latest/apireference/Welcome.html). Each node takes the **Game Lift Object** and a **Request**, and calls **Callback** with **Success**, **Result**, **Error Type** and **Error Message**. See [Getting Started](/plugins/gameliftclient/getting_started#3-call-a-node).

## Client object and utilities
| Node | Description |
|---|---|
| Create Game Lift Object | Creates the client object with credentials and a client configuration. Calls the callback when it is ready. |
| Destroy Game Lift Object | Frees the client object. |
| Construct Player Id | Creates a random player id. |
| Get Player Id | The player id created by Construct Player Id. |
| Get Log File Path Name | The path, file name and extension of the game's log file. |
| Get Game Port From World | The port of the world's URL. |
| AWS UUID | Creates a random UUID. |

## Game sessions
| Node | |
|---|---|
| Create Game Session | Starts a new game session on a fleet. |
| Describe Game Sessions | Gets game sessions by id, fleet or alias. |
| Describe Game Session Details | Gets game sessions with their protection policy. |
| Search Game Sessions | Finds game sessions with a filter and sort expression. |
| Update Game Session | Changes the name, maximum players, creation policy or protection. |
| Get Game Session Log Url | The URL of the log file uploaded by the server. |
| Start Game Session Placement | Places a new game session through a queue. |
| Describe Game Session Placement | Gets the status of a placement. |
| Stop Game Session Placement | Cancels a placement. |

## Player sessions
| Node | |
|---|---|
| Create Player Session | Reserves a slot for one player in a game session. |
| Create Player Sessions | Reserves slots for several players. |
| Describe Player Sessions | Gets player sessions by id, game session or player. |

## Matchmaking (FlexMatch)
| Node | |
|---|---|
| Start Matchmaking | Creates a matchmaking ticket. |
| Describe Matchmaking | Gets the status of tickets. |
| Accept Match | Accepts or rejects a proposed match for players. |
| Stop Matchmaking | Cancels a ticket. |
| Start Match Backfill | Finds new players for an existing game session. |
| Create Matchmaking Configuration, Describe Matchmaking Configurations, Update Matchmaking Configuration, Delete Matchmaking Configuration | Manage matchmaking configurations. |
| Create Matchmaking Rule Set, Describe Matchmaking Rule Sets, Validate Matchmaking Rule Set, Delete Matchmaking Rule Set | Manage rule sets. |

## Queues
Create Game Session Queue, Describe Game Session Queues, Update Game Session Queue, Delete Game Session Queue.

## Fleets
| Node | |
|---|---|
| Create Fleet, Delete Fleet, List Fleets | Create, delete and list fleets. |
| Describe Fleet Attributes, Update Fleet Attributes | Fleet settings. |
| Describe Fleet Capacity, Update Fleet Capacity | Desired, minimum and maximum instances. |
| Describe Fleet Utilization, Describe Fleet Events | Usage and events. |
| Describe Fleet Port Settings, Update Fleet Port Settings | Inbound ports. |
| Describe Runtime Configuration, Update Runtime Configuration | Server processes and launch parameters. |
| Create Fleet Locations, Delete Fleet Locations | Remote locations of a fleet. |
| Describe Fleet Location Attributes, Describe Fleet Location Capacity, Describe Fleet Location Utilization | Per location. |
| Start Fleet Actions, Stop Fleet Actions | Pause or resume auto scaling. |
| Put Scaling Policy, Describe Scaling Policies, Delete Scaling Policy | Auto scaling. |
| Describe Instances, Get Instance Access, Describe EC2 Instance Limits | EC2 instances. |

## GameLift Anywhere and computes
| Node | |
|---|---|
| Create Location, List Locations, Delete Location | Custom locations. |
| Register Compute, Deregister Compute | Add or remove a machine in an Anywhere fleet. |
| Describe Compute, List Compute | Computes in a fleet. |
| Get Compute Auth Token | The auth token a server needs for Init Sdk. See [GameLift Anywhere](/plugins/gameliftserver/gamelift_anywhere). |
| Get Compute Access | Credentials to connect to a compute. |

## Builds, scripts and aliases
| Node | |
|---|---|
| Create Build, Describe Build, List Builds, Update Build, Delete Build, Request Upload Credentials | Server builds. |
| Create Script, Describe Script, List Scripts, Update Script, Delete Script | Realtime scripts. |
| Create Alias, Describe Alias, List Aliases, Update Alias, Resolve Alias, Delete Alias | Aliases that point to a fleet. |

## FleetIQ
| Node | |
|---|---|
| Create Game Server Group, Describe Game Server Group, List Game Server Groups, Update Game Server Group, Delete Game Server Group | Game server groups. |
| Suspend Game Server Group, Resume Game Server Group | Pause or resume group activity. |
| Describe Game Server Instances | Instances in a group. |
| Register Game Server, Deregister Game Server, Describe Game Server, List Game Servers, Update Game Server, Claim Game Server | Game servers. |

## VPC peering and tags
Create Vpc Peering Authorization, Describe Vpc Peering Authorizations, Delete Vpc Peering Authorization, Create Vpc Peering Connection, Describe Vpc Peering Connections, Delete Vpc Peering Connection, Tag Resource, Untag Resource, List Tags For Resource.

## Error types
**Error Type** is one of the AWS errors below, or `UNKNOWN`.

| Error Type | Meaning |
|---|---|
| `ACCESS_DENIED`, `UNAUTHORIZED` | The IAM user doesn't have permission for the action. |
| `INVALID_CLIENT_TOKEN_ID`, `INVALID_ACCESS_KEY_ID`, `SIGNATURE_DOES_NOT_MATCH` | Wrong access key or secret key. |
| `REQUEST_TIME_TOO_SKEWED` | The computer's clock is wrong. |
| `NETWORK_CONNECTION`, `REQUEST_TIMEOUT` | GameLift could not be reached. |
| `THROTTLING`, `SLOW_DOWN` | Too many requests. Wait and try again. |
| `INVALID_REQUEST`, `INVALID_PARAMETER_VALUE`, `MISSING_PARAMETER`, `VALIDATION` | A field in the request is wrong or missing. |
| `NOT_FOUND`, `RESOURCE_NOT_FOUND` | The fleet, game session or other resource doesn't exist. |
| `CONFLICT` | The resource is in a state that doesn't allow the action. |
| `FLEET_CAPACITY_EXCEEDED` | No server process is free to host a new game session. |
| `GAME_SESSION_FULL` | The game session has no free player slots. |
| `INVALID_FLEET_STATUS`, `INVALID_GAME_SESSION_STATUS` | The fleet or game session isn't active. |
| `LIMIT_EXCEEDED` | An AWS service limit was reached. |
| `NOT_READY` | The resource isn't ready yet. |
| `TERMINAL_ROUTING_STRATEGY` | The alias has a terminal routing strategy. |
| `UNSUPPORTED_REGION` | GameLift isn't available in the region. |
| `IDEMPOTENT_PARAMETER_MISMATCH` | An idempotency token or id was reused with different values. |
| `INTERNAL_FAILURE`, `INTERNAL_SERVICE`, `SERVICE_UNAVAILABLE` | A problem on the AWS side. Try again. |
