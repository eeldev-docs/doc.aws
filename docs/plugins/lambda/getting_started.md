---
sidebar_position: 2
sidebar_label: Getting Started
description: Create the Lambda client object and call your first Lambda node.
---

# Getting Started

1. [Create an IAM user](/creating_user) with permission to use Lambda, or get temporary credentials from a [Cognito identity pool](/plugins/cognito/sign_in).
2. Call **Create Lambda Object** with the credentials and a Client Configuration with the **Region** of your functions. See [Initializing the Plugin](/initializing_plugin).
3. Store the **Lambda Client Object** from the callback in a variable.
4. Pass it to the Lambda nodes, for example **Invoke** or **List Functions**. See [Using the Plugin](/using_plugin).

When you are done, call **Destroy Lambda Object**.

:::tip
If the game only calls functions, only allow `lambda:InvokeFunction` on those functions in the IAM policy.
:::

Next: [Invoking Functions](/plugins/lambda/invoking)
