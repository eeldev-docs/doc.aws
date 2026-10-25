---
sidebar_position: 7
sidebar_label: Logging
description: Turn on verbose logging for the GameLift Client plugin.
---

# Logging

The plugin logs to the `LogAwsGameLift` category. Errors are always logged. To see everything the plugin does, add this to `Config/DefaultEngine.ini`:

```ini
[Core.Log]
LogAwsGameLift=Verbose
```

You can also turn it on for one run from the command line:

```
-LogCmds="LogAwsGameLift Verbose"
```
