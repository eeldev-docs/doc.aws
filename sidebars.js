/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  steamCoreSidebar: [
    {
      type: 'doc',
      id: 'introduction'
    },
    {
      type: 'html',
      value: '<hr />',
      defaultStyle: false,
    },
    {
      type: 'category',
      label: 'Plugins',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Cloudtrail',
          link: {type: 'doc', id: 'plugins/cloudtrail/intro'},
          items: [
            
            'plugins/cloudtrail/intro',
            'plugins/cloudtrail/getting_started',
            'plugins/cloudtrail/logging',
            'plugins/cloudtrail/purchase',
            {
              type: 'link',
              label: 'Example Project',
              href: 'https://github.com/eeldev-ue4/CloudTrail_Example/releases'
            },
            {
              type: 'link',
              label: 'API Documentation',
              href: 'https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/Welcome.html'
            },
          ],
        },
        {
          type: 'category',
          label: 'Cloudwatch',
          link: {type: 'doc', id: 'plugins/cloudwatch/intro'},
          items: [
            'plugins/cloudwatch/intro',
            'plugins/cloudwatch/getting_started',
            'plugins/cloudwatch/logging',
            'plugins/cloudwatch/purchase',
            {
              type: 'link',
              label: 'Example Project',
              href: 'https://github.com/eeldev-ue4/CloudWatch_Example/releases'
            },
            {
              type: 'link',
              label: 'API Documentation',
              href: 'https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/Welcome.html'
            },
          ],
        },
        {
          type: 'category',
          label: 'Cognito',
          link: {type: 'doc', id: 'plugins/cognito/intro'},
          items: [
            'plugins/cognito/intro',
            'plugins/cognito/getting_started',
            'plugins/cognito/logging',
            'plugins/cognito/purchase',
            {
              type: 'link',
              label: 'Example Project',
              href: 'https://github.com/eeldev-ue4/Cognito_Example/releases'
            },
            {
              type: 'link',
              label: 'API Documentation',
              href: 'https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/Welcome.html'
            },
          ],
        },
        {
          type: 'category',
          label: 'DynamoDB',
          link: {type: 'doc', id: 'plugins/dynamodb/intro'},
          items: [
            'plugins/dynamodb/intro',
            'plugins/dynamodb/getting_started',
            'plugins/dynamodb/logging',
            'plugins/dynamodb/purchase',
            {
              type: 'link',
              label: 'Example Project',
              href: 'https://github.com/eeldev-ue4/DynamoDB_Example/releases'
            },
            {
              type: 'link',
              label: 'API Documentation',
              href: 'https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/Welcome.html'
            },
          ],
        },
        {
          type: 'category',
          label: 'GameLift Client',
          link: {type: 'doc', id: 'plugins/gameliftclient/intro'},
          items: [
            'plugins/gameliftclient/intro',
            'plugins/gameliftclient/getting_started',
            'plugins/gameliftclient/logging',
            'plugins/gameliftclient/purchase',
            {
              type: 'link',
              label: 'Example Project',
              href: 'https://github.com/eeldev-ue4/GameLift_Client/releases'
            },
            {
              type: 'link',
              label: 'API Documentation',
              href: 'https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/Welcome.html'
            },
            {
              type: 'category',
              label: 'Video Tutorials',
              items: [
                'plugins/gameliftclient/videos/gamelift_anywhere',
                'plugins/gameliftclient/videos/gamelift_server',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'GameLift Server',
          link: {type: 'doc', id: 'plugins/gameliftserver/intro'},
          items: [
            'plugins/gameliftserver/intro',
            'plugins/gameliftserver/using_plugin',
            'plugins/gameliftserver/installing_plugin',
            'plugins/gameliftserver/updating_plugin',
            'plugins/gameliftserver/logging',
            'plugins/gameliftserver/purchase',
            {
              type: 'link',
              label: 'Example Project',
              href: 'https://github.com/eeldev-ue4/GameLift_Server/releases'
            },
            {
              type: 'link',
              label: 'API Documentation',
              href: 'https://docs.aws.amazon.com/gamelift/'
            },
            {
              type: 'category',
              label: 'Video Tutorials',
              items: [
                'plugins/gameliftclient/videos/gamelift_anywhere',
                'plugins/gameliftclient/videos/gamelift_server',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Lambda',
          link: {type: 'doc', id: 'plugins/lambda/intro'},
          items: [
            'plugins/lambda/intro',
            'plugins/lambda/getting_started',
            'plugins/lambda/logging',
            'plugins/lambda/purchase',
            {
              type: 'link',
              label: 'Example Project',
              href: 'https://github.com/eeldev-ue4/Lambda_Example/releases'
            },
            {
              type: 'link',
              label: 'API Documentation',
              href: 'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html'
            },
          ],
        },
        {
          type: 'category',
          label: 'Polly',
          link: {type: 'doc', id: 'plugins/polly/intro'},
          items: [
            'plugins/polly/intro',
            'plugins/polly/getting_started',
            'plugins/polly/logging',
            'plugins/polly/purchase',
            {
              type: 'link',
              label: 'Example Project',
              href: 'https://github.com/eeldev-ue4/Polly_Example/releases'
            },
            {
              type: 'link',
              label: 'API Documentation',
              href: 'https://docs.aws.amazon.com/polly/latest/dg/what-is.html'
            },
          ],
        },
        {
          type: 'category',
          label: 'S3',
          link: {type: 'doc', id: 'plugins/s3/intro'},
          items: [
            'plugins/s3/intro',
            'plugins/s3/getting_started',
            'plugins/s3/large_files',    
            'plugins/s3/logging',
            'plugins/s3/purchase',
            {
              type: 'link',
              label: 'Example Project',
              href: 'https://github.com/eeldev-ue4/S3_Example/releases'
            },
            {
              type: 'link',
              label: 'API Documentation',
              href: 'https://docs.aws.amazon.com/s3/latest/api/welcome.html'
            },
          ],
        },
        {
          type: 'category',
          label: 'Secrets Manager',
          link: {type: 'doc', id: 'plugins/secretsmanager/intro'},
          items: [
            'plugins/secretsmanager/intro',
            'plugins/secretsmanager/getting_started',
            'plugins/secretsmanager/logging',
            'plugins/secretsmanager/purchase',
            {
              type: 'link',
              label: 'Example Project',
              href: 'https://github.com/eeldev-ue4/Secrets_Example/releases'
            },
            {
              type: 'link',
              label: 'API Documentation',
              href: 'https://docs.aws.amazon.com/secretsmanager/latest/apireference/Welcome.html'
            },
          ],
        },
        {
          type: 'category',
          label: 'SNS',
          link: {type: 'doc', id: 'plugins/sns/intro'},
          items: [
            'plugins/sns/intro',
            'plugins/sns/getting_started',
            'plugins/sns/logging',
            'plugins/sns/purchase',
            {
              type: 'link',
              label: 'Example Project',
              href: 'https://github.com/eeldev-ue4/SNS_Example/releases'
            },
            {
              type: 'link',
              label: 'API Documentation',
              href: 'https://docs.aws.amazon.com/sns/latest/api/welcome.html'
            },
          ],
        },
        {
          type: 'category',
          label: 'SQS',
          link: {type: 'doc', id: 'plugins/sqs/intro'},
          items: [
            'plugins/sqs/intro',
            'plugins/sqs/getting_started',
            'plugins/sqs/logging',
            'plugins/sqs/purchase',
            {
              type: 'link',
              label: 'Example Project',
              href: 'https://github.com/eeldev-ue4/SQS_Example/releases'
            },
            {
              type: 'link',
              label: 'API Documentation',
              href: 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/Welcome.html'
            },
          ],
        },
        {
          type: 'category',
          label: 'STS',
          link: {type: 'doc', id: 'plugins/sts/intro'},
          items: [
            'plugins/sts/intro',
            'plugins/sts/getting_started',
            'plugins/sts/logging',
            'plugins/sts/purchase',
            {
              type: 'link',
              label: 'Example Project',
              href: 'https://github.com/eeldev-ue4/STS_Example/releases'
            },
            {
              type: 'link',
              label: 'API Documentation',
              href: 'https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html'
            },
          ],
        },
        {
          type: 'category',
          label: 'Translate',
          link: {type: 'doc', id: 'plugins/translate/intro'},
          items: [
            'plugins/translate/intro',
            'plugins/translate/getting_started',
            'plugins/translate/logging',
            'plugins/translate/purchase',
            {
              type: 'link',
              label: 'Example Project',
              href: 'https://github.com/eeldev-ue4/Translate_Example/releases'
            },
            {
              type: 'link',
              label: 'API Documentation',
              href: 'https://docs.aws.amazon.com/translate/latest/APIReference/welcome.html'
            },
          ],
        },
      ],
    },
    {
      type: 'html',
      value: '<hr />',
      defaultStyle: false,
    },
    {
      type: 'html',
      value: 'General Docs',
      defaultStyle: true,
    },
    {
      type: 'doc',
      id: 'creating_user'
    },
    {
      type: 'doc',
      id: 'initializing_plugin'
    },
    {
      type: 'doc',
      id: 'using_plugin'
    },
  ],
};

module.exports = sidebars;
