---
sidebar_position: 2
---

# Creating a User

### Login to AWS Console: https://console.aws.amazon.com/

### Go to IAM
![Image](../static/img/iam.png)

### Click on Users
![Image](../static/img/iam_2.png)

### Click on Create user
![Image](../static/img/iam_3.png)

## Give your user a name
![Image](../static/img/iam_4.png)

## Select "Attach policies directly"
![Image](../static/img/iam_5.png)

## Review the user and click on Create user 
![Image](../static/img/iam_6.png)

## Click on the user we just created
![Image](../static/img/iam_7.png)

## Click on "Add permissions" and "Create inline policy"
![Image](../static/img/iam_8.png)

## Search for the service you want to add, ie gamelift
![Image](../static/img/iam_9.png)

## Select all permissions and Allow
:::danger
In this example we're granting ALL permissions to the gamelift user and the gamelift service, this is not recommended for a release build of your product, for better security select only the permissions that is required for your particular case. **This is for demonstration purposes only!**
:::
![Image](../static/img/iam_10.png)

## Select "All" resources and click on Next
:::danger
In this example we're granting ALL permissions to the gamelift user and the gamelift service, this is not recommended for a release build of your product, for better security select only the permissions that is required for your particular case. **This is for demonstration purposes only!**
:::
![Image](../static/img/iam_11.png)

## Review and create
![Image](../static/img/iam_12.png)

## Click on Security Credentials
![Image](../static/img/iam_13.png)

## Create an access key
![Image](../static/img/iam_14.png)

## Make sure you read and understand the consequences of access keys
![Image](../static/img/iam_15.png)

![Image](../static/img/iam_16.png)

## Make sure you save the keys by downloading the .cvs file
- These values will be used when initializing the aws plugin

![Image](../static/img/iam_17.png)