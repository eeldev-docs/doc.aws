---
sidebar_position: 4
sidebar_label: Logging
description: Turn on verbose logging for the Cognito plugin.
---

# Logging

The plugin logs to three categories:

| Category | Used by |
|---|---|
| `LogCognito` | User pool nodes |
| `LogCognitoIdentity` | Identity pool nodes |
| `LogCognitoPlatform` | Creating the client objects |

Errors are always logged. To see everything the plugin does, add this to `Config/DefaultEngine.ini`:

```ini
[Core.Log]
LogCognito=Verbose
LogCognitoIdentity=Verbose
LogCognitoPlatform=Verbose
```
