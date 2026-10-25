---
sidebar_position: 9
sidebar_label: FAQ & Troubleshooting
description: Answers to common questions and problems with the GameLift Server plugin.
---

# FAQ & Troubleshooting

## Init Sdk fails
Turn on [verbose logging](/plugins/gameliftserver/logging) and look for `Server SDK Failed to Initialize` in the log.
- **On a managed EC2 fleet**, leave all Server Parameters empty. GameLift sets them on the instance.
- **On an Anywhere fleet**, check that Web Socket Url, Fleet Id, Host Id, Process Id and Auth Token are all set, and that the auth token has not expired. See [GameLift Anywhere](/plugins/gameliftserver/gamelift_anywhere).
- Running the server in the editor or outside a fleet doesn't work without Anywhere parameters, because there is no GameLift to connect to.

## My events are never called
- Store the Server Object in a variable. The plugin only keeps a weak reference to it, so an object that nothing references is garbage collected.
- Start Game Session is only called when a game session is created on the fleet, for example with **Create Game Session** in the Client plugin.

## The game session never becomes active
If you override **Start Game Session**, you must call **Activate Game Session** yourself. The default event does it for you.

## Players are rejected when they join
With **Validate Player Sessions** on, the player must connect with a valid player session id in the URL, for example `?PlayerSessionId=psess-...`. A player session expires if the player doesn't connect within 60 seconds of Create Player Session. See [Game Mode](/plugins/gameliftserver/game_mode).

## GameLift reports the wrong port
The plugin reports the port of the server's world. Start each server process with `-port=` in the fleet's runtime configuration when you run several processes on one instance.

## Where are the GameLift logs?
The Server SDK writes to the file set by **Log File Path** and **Log File Name**, which is `Saved/Logs/gamelift_log.txt` by default. GameLift uploads it when the game session ends. Get it with **Get Game Session Log Url** in the Client plugin.
