---
sidebar_position: 2
sidebar_label: Installing the Plugin
description: How to install the GameLift Client plugin from Fab into your Unreal Engine project.
---

# Installing the Plugin

Install the plugin to your engine from the Epic Games Launcher.

![Install the plugin from the Epic Games Launcher](../../../static/img/gameliftclient/installing/1.png)

## Move the plugin to your project
The launcher installs the plugin in the engine's Marketplace folder, for example:

```
C:\Program Files\Epic Games\UE_5.x\Engine\Plugins\Marketplace
```

Move the plugin folder to the **Plugins** folder of your project. Create the Plugins folder if your project doesn't have one.

:::warning
**Move** the plugin, do not copy it. If the plugin is in both the engine and the project, the engine may load the wrong one.
:::

![Move the plugin to the project's Plugins folder](../../../static/img/gameliftclient/installing/2.png)

## Clean the plugin
Delete the **Binaries** and **Intermediate** folders inside the plugin folder, so the plugin is built together with your project.

![Delete the Binaries and Intermediate folders](../../../static/img/gameliftclient/installing/3.png)

## Enable the plugin
Open your project, go to **Edit > Plugins**, search for **GameLiftClient** and enable it. Restart the editor when asked.

Next: [Getting Started](/plugins/gameliftclient/getting_started)
