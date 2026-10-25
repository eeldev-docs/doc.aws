---
sidebar_position: 2
sidebar_label: Creating a User
description: Create an IAM user and an access key for the eelDev AWS plugins.
---

# Creating a User

The plugins call AWS with the credentials of an IAM user. This page creates a user with an access key. The screenshots use GameLift, but the steps are the same for every service.

:::tip
For a shipped game client, don't use a long-lived access key. Use temporary credentials from a [Cognito identity pool](/plugins/cognito/sign_in), or call AWS from your own backend.
:::

## Open IAM
Log in to the [AWS Console](https://console.aws.amazon.com/) and open **IAM**.

![Open IAM](../static/img/iam.png)

## Create the user
Click **Users**, then **Create user**.

![Users](../static/img/iam_2.png)

![Create user](../static/img/iam_3.png)

Give the user a name.

![User name](../static/img/iam_4.png)

Select **Attach policies directly**, then review and create the user.

![Attach policies directly](../static/img/iam_5.png)

![Review and create](../static/img/iam_6.png)

## Give the user permissions
Open the user you created, click **Add permissions** and **Create inline policy**.

![Open the user](../static/img/iam_7.png)

![Create inline policy](../static/img/iam_8.png)

Search for the service you want to use, for example GameLift, S3 or DynamoDB.

![Select the service](../static/img/iam_9.png)

Select the actions and resources the user needs.

:::danger
The screenshots allow **all** actions on **all** resources. That is only for testing. In a release, only allow the actions and resources your game actually uses.
:::

![Select actions](../static/img/iam_10.png)

![Select resources](../static/img/iam_11.png)

Review and create the policy.

![Review and create the policy](../static/img/iam_12.png)

## Create an access key
Open **Security credentials** and click **Create access key**.

![Security credentials](../static/img/iam_13.png)

![Create access key](../static/img/iam_14.png)

Read the warning about access keys and continue.

![Access key warning](../static/img/iam_15.png)

![Access key options](../static/img/iam_16.png)

Download the `.csv` file. The **Access Key Id** and **Secret Key** in it are what you use when you [create the client object](/initializing_plugin). The secret key can't be shown again later.

![Download the keys](../static/img/iam_17.png)
