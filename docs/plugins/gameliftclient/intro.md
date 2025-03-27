---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

## Features
- Use AWS Amazon GameLift in Unreal Engine

## What is the difference between the Server plugin and the Client plugin?
- The Server plugin will be running on your dedicated server instance and is used to communicate with the AWS GameLift Service. It will listen and recieve commands from the gamelift service when it's time to shut down, etc.
- The Client plugin is used for GameLift Matchmaking features, it's used by game clients to request matchmaking functionality from GameLift and to tell gamelift if new servers need to be allocated, etc.

## Do I need both Server and Client plugins?
- As described above you may only need one the plugins depending on your needs, if you're going to manually managing your gamelift server instances you only need the Server Plugin (if you're not going to use GameLift matchmaking features etc)
- Both Client and Server plugins are required if you're going to use GameLift Anywhere (this is a new functionality that enables you to host gamelift servers on your own home server).

<Tabs>
  <TabItem value="image" label="Image" default>
    ![Image](../../../static/img/gameliftclient/19318e32-225c-4988-965d-e6dad3de0bdf.jpg)
  </TabItem>
  <TabItem value="image2" label="Image 2">
    ![Image](../../../static/img/gameliftclient/80dfac9a-ac26-4af3-a330-24eba1f83f9c.jpg)
  </TabItem>
  <TabItem value="image3" label="Image 3">
    ![Image](../../../static/img/gameliftclient/91fa397f-bc54-4f5c-9e73-fdb72295b0b5.jpg)
  </TabItem>
</Tabs>

## Purchase
- https://www.fab.com/listings/44f68159-2c76-47f0-947f-86a980a0b410

# AWS (Amazon) Documentation
- https://docs.aws.amazon.com/sns/latest/api/Welcome.html