---
sidebar_position: 5
sidebar_label: Game Sessions & Matchmaking
description: Create game sessions and player sessions, or use FlexMatch, to get players into a GameLift server.
---

# Game Sessions & Matchmaking

A player joins a GameLift server in two steps: a **game session** is started on a server, and the player gets a **player session** in it. The player then connects to the server's IP address and port with the player session id.

There are three ways to do this.

## Create a game session directly
1. **Create Game Session** with the **Fleet Id** (or **Alias Id**) and the **Maximum Player Session Count**. For an Anywhere fleet, also set the custom **Location**. GameLift picks a server and calls **Start Game Session** on it.
2. The game session starts as `ACTIVATING`. Wait until it is `ACTIVE`, with **Describe Game Sessions**, before you add players.
3. **Create Player Session** with the **Game Session Id** and a **Player Id**. The result has the **Player Session Id**, **IP Address**, **DNS Name** and **Port**.
4. Connect to the server with the player session id in the URL:

```
open 1.2.3.4:7777?PlayerSessionId=psess-1234abcd-...
```

The player must connect within 60 seconds, or the player session times out.

Use **Search Game Sessions** to find an existing game session with free slots instead of creating a new one.

## Use a queue
**Start Game Session Placement** asks a game session queue to find the best fleet and location for a new game session. Check the placement with **Describe Game Session Placement** until its status is `FULFILLED`. The result has the IP address, port and the player sessions for the players you passed in.

## Use FlexMatch matchmaking
1. **Start Matchmaking** with the **Configuration Name** and the players. Give each player a **Player Id** and, if your rule set uses them, attributes and latencies.
2. Check the ticket with **Describe Matchmaking** every few seconds. The status goes through `QUEUED`, `SEARCHING` and `PLACING`.
3. If the configuration requires acceptance, the status becomes `REQUIRES_ACCEPTANCE`. Each player answers with **Accept Match**.
4. When the status is `COMPLETED`, the ticket's **Game Session Connection Info** has the IP address, port and a **Player Session Id** for each player. Connect as above.
5. If the status is `FAILED`, `TIMED_OUT` or `CANCELLED`, start a new ticket. **Stop Matchmaking** cancels a ticket.

:::info
AWS recommends matchmaking event notifications through SNS instead of polling Describe Matchmaking for many players. If you poll, don't poll a ticket more often than every 10 seconds.
:::

## Player Ids
GameLift needs a unique Player Id for each player. **Construct Player Id** creates a random id, and **Get Player Id** returns the last one created. In a live game, use your own account id, for example from Cognito or your platform.
