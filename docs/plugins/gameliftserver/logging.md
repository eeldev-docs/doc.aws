---
sidebar_position: 8
sidebar_label: Logging
description: Turn on verbose logging for the GameLift Server plugin.
---

# Logging

The plugin logs to the `LogAwsGameLiftServer` category. Errors are always logged. To see everything the plugin does, add this to `Config/DefaultEngine.ini`:

```ini
[Core.Log]
LogAwsGameLiftServer=Verbose
```

You can also turn it on for one run from the command line:

```
-LogCmds="LogAwsGameLiftServer Verbose"
```

The Server SDK writes its own log to the file set by **Log File Path** and **Log File Name** on the Server Object.
