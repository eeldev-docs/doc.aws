---
sidebar_position: 2
sidebar_label: Getting Started
description: Create the Polly client object and call your first Polly node.
---

# Getting Started

1. [Create an IAM user](/creating_user) with permission to use Polly, or get temporary credentials from a [Cognito identity pool](/plugins/cognito/sign_in).
2. Call **Create Polly Object** with the credentials and a Client Configuration with a **Region** where Polly is available. Not all voices and engines are available in all regions.
3. Store the **Polly Client Object** from the callback in a variable.
4. Pass it to the Polly nodes, for example **Describe Voices** or **Synthesize Speech**. See [Using the Plugin](/using_plugin).

When you are done, call **Destroy Polly Object**.

:::tip
If the game only creates speech, only allow `polly:SynthesizeSpeech` and `polly:DescribeVoices` in the IAM policy.
:::

Next: [Text to Speech](/plugins/polly/text_to_speech)
