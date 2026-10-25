---
sidebar_position: 2
sidebar_label: Getting Started
description: Create the S3 client object and call your first S3 node.
---

# Getting Started

1. [Create an IAM user](/creating_user) with permission to use S3, or get temporary credentials from a [Cognito identity pool](/plugins/cognito/sign_in).
2. Call **Create Aws S3 Object** with the credentials, a Client Configuration with the **Region** of your bucket, and a **Payload Signing Policy**. See [Initializing the Plugin](/initializing_plugin).
3. Store the **S3 Client Object** from the callback in a variable.
4. Pass it to the S3 nodes, for example **List Buckets** or **Get Object**. See [Using the Plugin](/using_plugin).

When you are done, call **Destroy S3 Object**.

## Payload Signing Policy
| Value | Description |
|---|---|
| Request Dependent | Each request decides if its body is signed. Use this if you are unsure. |
| Always | Always sign the body. Safest, but uploads are slower because the whole file is hashed first. |
| Never | Never sign the body. Faster uploads over HTTPS. |

## Region
Use the region of the bucket. If you don't know it, **Get Bucket Location** returns it.

:::tip
Limit the IAM policy to the buckets and actions the game needs, for example `s3:GetObject` on `arn:aws:s3:::my-game-content/*`.
:::

Next: [Uploading and Downloading](/plugins/s3/files)
