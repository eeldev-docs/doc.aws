---
sidebar_position: 2
sidebar_label: Getting Started
description: Create the Cognito client objects and call your first Cognito node.
---

# Getting Started

Cognito has two AWS services, and the plugin has a client object for each:

| Client object | Create node | Used for |
|---|---|---|
| Cognito Idp Platform | **Create Cognito Idp Platform** | User pools: sign-up, sign-in, users, groups. The nodes in **AWS > Cognito**. |
| Cognito Identity Platform | **Create Cognito Identity Platform** | Identity pools: Get Id, Get Credentials For Identity, Get Open Id Token and the identity pool management nodes. The nodes in **AWS > Cognito > Identity**. |

Create the ones you need. Each takes **Credentials**, a **Client Configuration** and a **Callback**. See [Initializing the Plugin](/initializing_plugin).

## Credentials
- **Player actions** such as Sign Up, Confirm Sign Up, Initiate Auth, Forgot Password, Get Id and Get Credentials For Identity don't need AWS credentials. Leave **Credentials** empty for them, so you don't ship an access key in the game.
- **Admin actions** (the nodes that start with Admin) and the user pool and identity pool management nodes need an IAM user with Cognito permissions. Only use them from a backend or a tool.

## Region
Set **Region** in the Client Configuration to the region of your user pool or identity pool, for example `eu-north-1`. The region is part of the pool id: `eu-north-1_AbCdEfGhI`.

## Call a node
Pass the client object and a request to the node, and use the **Callback**. See [Using the Plugin](/using_plugin) for the outputs.

When you are done, call **Destroy Cognito Idp Object** or **Destroy Cognito Identity Object**.

Next: [Sign-up and sign-in](/plugins/cognito/sign_in)
