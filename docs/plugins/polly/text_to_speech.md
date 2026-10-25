---
sidebar_position: 3
sidebar_label: Text to Speech
description: Create speech with Synthesize Speech and play it in Unreal Engine.
---

# Text to Speech

## 1. Create a Polly Audio object
Call **Construct Polly Audio**. It returns a **Polly Audio** object, which is a sound wave that the speech is written to. Store it in a variable.

## 2. Synthesize the speech
Call **Synthesize Speech** with:

| Field | Value |
|---|---|
| Polly Audio | The object from Construct Polly Audio. |
| Text | The text to speak, or SSML if **Text Type** is `ssml`. |
| Text Type | `text` or `ssml`. |
| Voice Id | The voice, for example `Joanna`. Use **Describe Voices** to list the voices for a language. |
| Engine | `standard` or `neural`. Neural voices sound more natural, but not all voices have them. |
| Language Code | Only needed for voices that speak more than one language. |
| Output Format | `pcm` for audio, `json` for speech marks. |
| Sample Rate | `16000 (High)` or `8000 (Low)`. |

:::warning
The node fails with `You must provide a valid PollyAudio Object, don't forget to call ConstructPollyAudio` if **Polly Audio** is empty and the output format is `pcm`.
:::

## 3. Play it
When the callback reports success, the **Polly Audio** in the result has the speech. Play it with **Play Sound 2D**, **Spawn Sound at Location** or an Audio Component, like any other sound. **Get Duration** returns its length in seconds.

When you no longer need the sound, call **Destroy Polly Audio**.

## Speech marks
Speech marks tell you when each word, sentence or viseme starts in the audio. Use them for subtitles or lip sync.

Call **Synthesize Speech** a second time with the same text and voice, **Output Format** `json`, and the **Speech Mark Types** you want, for example `word` and `viseme`. The result has the marks in **Json String**, one JSON object per line:

```json
{"time":6,"type":"word","start":0,"end":5,"value":"Hello"}
```

`time` is in milliseconds from the start of the audio.

## SSML
With **Text Type** `ssml` you can control the speech:

```xml
<speak>Welcome back. <break time="500ms"/> You have <emphasis>three</emphasis> new quests.</speak>
```

See [Supported SSML tags](https://docs.aws.amazon.com/polly/latest/dg/supportedtags.html) in the AWS documentation.
