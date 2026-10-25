---
sidebar_position: 1
slug: /
sidebar_label: Home
description: Documentation for the eelDev AWS plugins for Unreal Engine.
---

# AWS Plugins for Unreal Engine

The eelDev AWS plugins let you use Amazon Web Services from Blueprint and C++ in Unreal Engine. Each plugin is sold separately and contains its own copy of the AWS SDK, so you only add the services you need.

| Plugin | Used for |
|---|---|
| [Cognito](/plugins/cognito/intro) | Sign-up, sign-in and user management with user pools, and temporary AWS credentials with identity pools. |
| [DynamoDB](/plugins/dynamodb/intro) | Reading and writing items in a NoSQL database. |
| [GameLift Client](/plugins/gameliftclient/intro) | The GameLift service API: game sessions, player sessions, matchmaking, fleets. |
| [GameLift Server](/plugins/gameliftserver/intro) | Running your dedicated server on GameLift. |
| [Lambda](/plugins/lambda/intro) | Calling your own serverless functions. |
| [Polly](/plugins/polly/intro) | Turning text into speech that you can play in the game. |
| [S3](/plugins/s3/intro) | Uploading and downloading files. |

## How the plugins work
All plugins work the same way:

1. [Create an IAM user](/creating_user) with permission to use the service.
2. [Install the plugin](/installing_plugin) in your project.
3. [Create the client object](/initializing_plugin) with your credentials and region.
4. [Call the nodes](/using_plugin). They have the same names as the actions in the AWS API documentation.

:::note
This documentation is not affiliated with or hosted by AWS or Amazon.
:::
