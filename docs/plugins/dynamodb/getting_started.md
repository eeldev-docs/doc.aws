---
sidebar_position: 2
sidebar_label: Getting Started
description: Create the DynamoDB client object and call your first DynamoDB node.
---

# Getting Started

1. [Create an IAM user](/creating_user) with permission to use DynamoDB, or get temporary credentials from a [Cognito identity pool](/plugins/cognito/sign_in).
2. Call **Create Dynamo Db Object** with the credentials and a Client Configuration with the **Region** of your tables. See [Initializing the Plugin](/initializing_plugin).
3. Store the **Dynamo DB Client Object** from the callback in a variable.
4. Pass it to the DynamoDB nodes, for example **List Tables**. See [Using the Plugin](/using_plugin).

When you are done, call **Destroy Dynamo Db Object**.

:::tip
Limit the IAM policy to the tables and actions the game needs, for example `dynamodb:GetItem` and `dynamodb:PutItem` on one table. If players write their own data, use Cognito and the `dynamodb:LeadingKeys` condition so each player can only change their own items.
:::

Next: [Reading and Writing Items](/plugins/dynamodb/items)
