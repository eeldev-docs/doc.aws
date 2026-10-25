---
sidebar_position: 5
sidebar_label: Logging
description: Turn on verbose logging for the S3 plugin.
---

# Logging

The plugin logs to the `LogAwsS3` category. Errors are always logged. To see everything the plugin does, for example the final file name of a download, add this to `Config/DefaultEngine.ini`:

```ini
[Core.Log]
LogAwsS3=Verbose
```
