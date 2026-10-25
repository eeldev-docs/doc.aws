/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const productSwitcher = `
<details class="eel-product-switcher">
  <summary>AWS</summary>
  <div class="eel-product-switcher__menu">
    <a class="eel-product-switcher__item" href="https://steamcore-pro.eeldev.com">SteamCore PRO</a>
    <a class="eel-product-switcher__item" href="https://serveradmincore.eeldev.com">Server Admin Core</a>
    <a class="eel-product-switcher__item" href="https://hostmigrationcore.eeldev.com">HostMigrationCore</a>
    <a class="eel-product-switcher__item" href="https://eoscore.eeldev.com">EOSCore</a>
    <a class="eel-product-switcher__item" href="https://eventdispatcher.eeldev.com">EventDispatcher</a>
    <a class="eel-product-switcher__item" href="https://foliageplugin.eeldev.com">Foliage Plugin</a>
    <a class="eel-product-switcher__item" href="https://cls.eeldev.com">CommonLoadingScreen</a>
    <a class="eel-product-switcher__item eel-product-switcher__item--active" href="/">AWS</a>
    <a class="eel-product-switcher__item" href="https://eeldev.com" target="_blank" rel="noopener noreferrer">All eelDev plugins ↗</a>
  </div>
</details>`;

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  steamCoreSidebar: [
    {
      type: 'html',
      value: productSwitcher,
      defaultStyle: false,
    },
    {
      type: 'doc',
      id: 'introduction'
    },
    {
      type: 'category',
      label: 'Plugins',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Cognito',
          link: {type: 'doc', id: 'plugins/cognito/intro'},
          items: [
            'plugins/cognito/intro',
            'plugins/cognito/getting_started',
            'plugins/cognito/sign_in',
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
            'plugins/dynamodb/items',
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
            'plugins/gameliftclient/installing_plugin',
            'plugins/gameliftclient/updating_plugin',
            'plugins/gameliftclient/getting_started',
            'plugins/gameliftclient/sessions_and_matchmaking',
            'plugins/gameliftclient/blueprint_nodes',
            'plugins/gameliftclient/logging',
            'plugins/gameliftclient/faq',
            'plugins/gameliftclient/purchase',
            {
              type: 'link',
              label: 'Example Project',
              href: 'https://github.com/eeldev-ue4/GameLift_Client/releases'
            },
            {
              type: 'link',
              label: 'API Documentation',
              href: 'https://docs.aws.amazon.com/gamelift/latest/apireference/Welcome.html'
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
            'plugins/gameliftserver/installing_plugin',
            'plugins/gameliftserver/updating_plugin',
            'plugins/gameliftserver/using_plugin',
            'plugins/gameliftserver/gamelift_anywhere',
            'plugins/gameliftserver/game_mode',
            'plugins/gameliftserver/blueprint_nodes',
            'plugins/gameliftserver/logging',
            'plugins/gameliftserver/faq',
            'plugins/gameliftserver/purchase',
            {
              type: 'link',
              label: 'Example Project',
              href: 'https://github.com/eeldev-ue4/GameLift_Server/releases'
            },
            {
              type: 'link',
              label: 'API Documentation',
              href: 'https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-server-sdk5-cpp-actions.html'
            },
            /** 
            {
              type: 'category',
              label: 'Video Tutorials',
              items: [
                'plugins/gameliftclient/videos/gamelift_anywhere',
                'plugins/gameliftclient/videos/gamelift_server',
              ],
            },*/
          ],
        },
        {
          type: 'category',
          label: 'Lambda',
          link: {type: 'doc', id: 'plugins/lambda/intro'},
          items: [
            'plugins/lambda/intro',
            'plugins/lambda/getting_started',
            'plugins/lambda/invoking',
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
              href: 'https://docs.aws.amazon.com/lambda/latest/api/welcome.html'
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
            'plugins/polly/text_to_speech',
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
              href: 'https://docs.aws.amazon.com/polly/latest/dg/API_Reference.html'
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
            'plugins/s3/files',
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
              href: 'https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html'
            },
          ],
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="eel-sidebar-section">General Docs</div>',
      defaultStyle: false,
    },
    {
      type: 'doc',
      id: 'creating_user'
    },
    {
      type: 'doc',
      id: 'installing_plugin'
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
