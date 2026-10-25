---
sidebar_position: 4
sidebar_label: Logging
description: Turn on verbose logging for the Lambda plugin.
---

# Logging

The plugin logs to the `LogAwsLambda` category. Errors are always logged. To see everything the plugin does, add this to `Config/DefaultEngine.ini`:

```ini
[Core.Log]
LogAwsLambda=Verbose
```
