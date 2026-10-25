---
sidebar_position: 3
sidebar_label: Invoking Functions
description: Call a Lambda function with a JSON body and read its response.
---

# Invoking Functions

Call **Invoke** with:

| Field | Value |
|---|---|
| Function Name | The function name or ARN. Add `:alias` or `:version` to call a specific alias or version, for example `GrantReward:live`. |
| Invocation Type | `RequestResponse` waits for the function and returns its response. `Event` starts the function and returns right away, without a response. `DryRun` only checks that you are allowed to call it. Not set means `RequestResponse`. |
| Log Type | `Tail` returns the last 4 KB of the function's log in **Log Result**, base64-encoded. |
| Client Context | Optional base64-encoded JSON that the function gets as context. |
| Body | The event that the function gets, as JSON. |

For example, with this body:

```json
{ "playerId": "Player1", "reward": "gold_chest" }
```

the function gets `event.playerId` and `event.reward` in Node.js, or `event["playerId"]` in Python.

## The result
| Field | Description |
|---|---|
| Status Code | `200` for `RequestResponse`, `202` for `Event`, `204` for `DryRun`. |
| Payload | What the function returned, usually JSON. Parse it with a JSON plugin or Unreal's JSON Blueprint Utilities. |
| Function Error | `Unhandled` if the function threw an error. The node still reports **Success**, so check this field. The error is in **Payload**. |
| Log Result | The log, if **Log Type** is `Tail`. |
| Executed Version | The version of the function that ran. |
