---
sidebar_position: 1
sidebar_label: Introduction
description: The Polly plugin turns text into speech with Amazon Polly and plays it in Unreal Engine.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Polly

The Polly plugin lets you use Amazon Polly from Blueprint. Polly turns text into lifelike speech. The plugin gives you the speech as a sound that you can play like any other sound in Unreal Engine.

## Features
- **Synthesize Speech** returns the speech as a **Polly Audio** sound wave that you can play directly.
- **Speech marks** with word, sentence, viseme and SSML timings, for example for lip sync or subtitles.
- **SSML** for pauses, emphasis and pronunciation.
- **Voices**: Describe Voices lists the voices for a language.
- **Lexicons** for custom pronunciation, and **speech synthesis tasks** for long texts saved to S3.
- All nodes have the same names as in the [Polly API Reference](https://docs.aws.amazon.com/polly/latest/dg/API_Reference.html).

<Tabs>
  <TabItem value="image" label="Image" default>
    ![Polly Blueprint nodes](../../../static/img/polly/4dafe919-1694-441e-b1c2-eb0fbcc1db28.jpg)
  </TabItem>
  <TabItem value="image2" label="Image 2">
    ![Polly Blueprint nodes](../../../static/img/polly/7fb37d5d-bf2d-4f55-9982-666b2a6ae718.jpg)
  </TabItem>
  <TabItem value="image3" label="Image 3">
    ![Polly Blueprint nodes](../../../static/img/polly/8fd3821a-4566-4286-8fd8-d9b217be4731.jpg)
  </TabItem>
</Tabs>

## Requirements
| | |
|---|---|
| Target platforms | Windows, Linux, Mac, Android, iOS |
| Unreal Engine | See the [Fab listing](https://www.fab.com/listings/776e973a-f20c-4530-a31e-c53bd0337b40) for the supported engine versions |

## Where to go next
1. [Install the plugin](/installing_plugin)
2. [Getting Started](/plugins/polly/getting_started)
3. [Text to Speech](/plugins/polly/text_to_speech)
