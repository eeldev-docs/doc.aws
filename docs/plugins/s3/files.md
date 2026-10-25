---
sidebar_position: 3
sidebar_label: Uploading and Downloading
description: Upload files with Put Object and download them with Get Object in the S3 plugin.
---

# Uploading and Downloading

## Upload a file
Call **Put Object** with:

| Field | Value |
|---|---|
| File | The full path to the file on disk, for example from **Project Saved Directory** and the file name. |
| Bucket | The bucket. |
| Key | The name of the object in the bucket, for example `saves/Player1/slot1.sav`. |
| Metadata | Optional key-value pairs stored with the object. |

The node fails with `File ... not found` if the file doesn't exist.

## Download a file
Call **Get Object** with:

| Field | Value |
|---|---|
| Bucket | The bucket. |
| Key | The object to download. |
| File Save Path | The folder to save the file in, for example **Project Saved Directory** + `Downloads`. |
| Custom File Name | Optional. If empty, the file is saved with the **Key** as name. A key with `/` creates subfolders. |
| Range | Optional, to download part of the file. See [Downloading Large Files](/plugins/s3/large_files). |

The folders are created if they don't exist.

:::warning
Always set **File Save Path**. If it is empty, the file is saved relative to the working directory of the game, which is usually not where you want it.

The plugin refuses to write outside **File Save Path**, for example when a key contains `../`. The node then fails with `Refusing to write outside of FileSavePath`.
:::

## List files
**List Objects V2** lists the objects in a bucket. Set **Prefix** to list one folder, for example `saves/Player1/`. It returns at most 1000 objects per call. If **Is Truncated** is true, call it again with **Continuation Token** set to the **Next Continuation Token** from the result.

## Check if a file exists
**Head Object** returns the size, last modified time and metadata of an object without downloading it. It fails with `RESOURCE_NOT_FOUND` if the object doesn't exist.
