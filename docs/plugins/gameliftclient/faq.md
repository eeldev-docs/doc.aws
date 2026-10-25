---
sidebar_position: 8
sidebar_label: FAQ & Troubleshooting
description: Answers to common questions and problems with the GameLift Client plugin.
---

# FAQ & Troubleshooting

## A node fails with "Client object is not valid"
The node was called before the client object was ready, or with an empty variable. Call the node after the **Callback** of **Create Game Lift Object**, with the object you stored there. See [Getting Started](/plugins/gameliftclient/getting_started).

## I get ACCESS_DENIED or UNAUTHORIZED
The IAM user doesn't have permission for the action. Add the GameLift actions you use to its policy. See [Creating a User](/creating_user).

## I get INVALID_CLIENT_TOKEN_ID or SIGNATURE_DOES_NOT_MATCH
The access key or secret key is wrong, or the session token is missing for temporary credentials.

## My fleets are not found
Check the **Region** in the Client Configuration. Fleets are only found in the region they were created in.

## Create Game Session fails with FLEET_CAPACITY_EXCEEDED
No server process on the fleet is free. Check that the fleet is **ACTIVE**, that the servers have called Init Sdk, and that the fleet has enough instances or processes. On an Anywhere fleet, check that a server is running and connected.

## The player can't connect to the server
- Connect within 60 seconds of **Create Player Session**, or the player session times out.
- Add the player session id to the URL, for example `?PlayerSessionId=psess-...`, if the server validates player sessions.
- Check that the port is open in the fleet's port settings, or in the firewall for an Anywhere fleet.

## Can I use the plugin in a shipped game client?
Yes, but don't ship long-lived access keys. Use temporary credentials from a Cognito identity pool with a policy that only allows the actions players need, or call GameLift from your own backend.
