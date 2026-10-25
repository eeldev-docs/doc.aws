---
sidebar_position: 6
sidebar_label: Game Mode
description: Use the GameLift Server Game Mode to accept and remove player sessions automatically.
---

# Game Mode

The plugin includes **GameLift Server Game Mode**, a Game Mode that validates players against GameLift when they connect. Use it as the parent class of your own Game Mode.

## Validating player sessions
GameLift expects the server to accept each player session when the player connects, and to remove it when the player leaves. Turn on **Validate Player Sessions** in your Game Mode's Class Defaults, and the Game Mode does this for you:

1. In **PreLogin** it reads the player session id from the connect URL and calls **Accept Player Session**. If the id is missing or GameLift rejects it, the player is not allowed to join.
2. In **Logout** it calls **Remove Player Session** for the player.

| Property | Default | Description |
|---|---|---|
| Validate Player Sessions | Off | Accept player sessions on login and remove them on logout. |
| Player Session Id Option | `PlayerSessionId` | The name of the URL option that has the player session id. |

## Connecting from the client
The client gets the IP address, port and player session id from **Create Player Session** in the [GameLift Client](/plugins/gameliftclient/intro) plugin, or from a matchmaking ticket. Add the player session id as an option when it opens the level:

```
open 1.2.3.4:7777?PlayerSessionId=psess-1234abcd-...
```

In Blueprint, put the address in **Open Level (by Name)** and `PlayerSessionId=psess-...` in **Options**.

## Your own checks
Override these in your Game Mode Blueprint.

| Function | Description |
|---|---|
| Validate Player Login | Return an empty string to let the player join, or an error message to reject the player. It is called after the player session has been accepted. |
| PreLogin | Called with the connect options, the address and the error message so far. Use it to read the options. Use Validate Player Login to reject a player. |
| Get Player Session Id | Returns the player session id of a Player Controller, or an empty string if the player joined without one. |

:::info
When Validate Player Sessions is off, the Game Mode still remembers the player session id of each player, so Get Player Session Id works. It doesn't call Accept Player Session or Remove Player Session.
:::
