---
sidebar_position: 3
sidebar_label: Sign-up and Sign-in
description: Let players create an account, sign in and get temporary AWS credentials with the Cognito plugin.
---

# Sign-up and Sign-in

This page shows the usual flow for a game: the player creates an account in a user pool, signs in, and gets temporary AWS credentials from an identity pool.

## Before you start
In the AWS console:
1. Create a **user pool**.
2. Create an **app client** in the user pool and turn on the **ALLOW_USER_PASSWORD_AUTH** auth flow.
3. If you want AWS credentials for the player, create an **identity pool** with the user pool as identity provider, and give its authenticated role the permissions the player needs.

## Client secret
If the app client has a client secret, every sign-up and sign-in request needs a **Secret Hash**. Create it with **Generate Secret Hash** from the client secret, the user name and the client id.

:::warning
A client secret in a game client can be extracted. For a game client, create the app client **without** a client secret.
:::

## Sign up
Call **Sign Up** with:

| Field | Value |
|---|---|
| Client Id | The app client id. |
| Username | The player's user name or e-mail, depending on the user pool settings. |
| Password | The password. It must follow the user pool's password policy. |
| User Attributes | For example `email`. |

Cognito sends a confirmation code to the player. Call **Confirm Sign Up** with the client id, the user name and the code. Use **Resend Confirmation Code** if the code didn't arrive.

## Sign in
Call **Initiate Auth** with:

| Field | Value |
|---|---|
| Auth Flow | `USER_PASSWORD_AUTH` |
| Client Id | The app client id. |
| Auth Parameters | `USERNAME` and `PASSWORD`, and `SECRET_HASH` if the app client has a client secret. |

If the sign-in succeeds, **Authentication Result** contains the **Id Token**, **Access Token** and **Refresh Token**.

If the result has a **Challenge Name** instead, for example `NEW_PASSWORD_REQUIRED` or `SOFTWARE_TOKEN_MFA`, answer it with **Respond To Auth Challenge** and the **Session** from the result.

To sign in again later without the password, call **Initiate Auth** with Auth Flow `REFRESH_TOKEN_AUTH` and `REFRESH_TOKEN` in Auth Parameters.

## Get AWS credentials
With the identity pool and the **Cognito Identity Platform** object:

1. Call **Get Id** with the **Identity Pool Id** and **Logins**. The key in Logins is `cognito-idp.<region>.amazonaws.com/<user pool id>` and the value is the **Id Token**.
2. Call **Get Credentials For Identity** with the **Identity Id** from Get Id and the same Logins.
3. The result has **Access Key Id**, **Secret Key** and **Session Token**. Use them as **Credentials** when you create the client object of another plugin, for example S3 or DynamoDB.

The credentials expire after about an hour. Get new ones before the **Expiration** time.

## Other player actions
| Node | Used for |
|---|---|
| Get User | The signed-in player's attributes. Needs the **Access Token**. |
| Update User Attributes | Changes the player's attributes. |
| Change Password | Changes the password. Needs the **Access Token**. |
| Forgot Password, Confirm Forgot Password | Resets a forgotten password with a code. |
| Global Sign Out | Signs the player out on all devices. |
