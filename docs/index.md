---
sidebar_position: 1
---

# Introduction

<img src="/img/banner.png" />

---

# Setup

#### 1. Install aoi.canvas package:

```bash
npm install aoi.canvas
```

#### 2. Import the aoi.canvas library into your project:

```js
const aoicanvas = require("aoi.canvas");
```

#### 3. Load Aoi Canvas with the required parameters:

```js
aoicanvas.load({
  client: client, // aoi.js Bot object.
  Util: Util, // To make aoi.canvas parser work. ($sendMessage, $channelSendMessage, $interactionReply, etc)
  DownloadFolder: "./folder/", // Folder for $downloadCanvas and $downloadGIF, optional.
  ErrorsType: "console" // AoiCanvas errors type, optional. (console/message/none)
});
```

***4. You are ready to use Aoi Canvas with your aoi.js Bot!***

---

# Example

```js
const { AoiClient, Util } = require("aoi.js");
const aoicanvas = require("aoi.canvas");
 
const client = new AoiClient({
  token: "Discord Bot Token",
  prefix: "Discord Bot Prefix",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue",
    },
  },
});
 
aoicanvas.load({
  client: client, // the aoi.js bot
  Util: Util, // To make aoi.canvas parser work. ($sendMessage, $channelSendMessage, $interactionReply, etc)
  DownloadFolder: "./aoicanvas/", // download folder for $downloadCanvas and $downloadGIF
  ErrorsType: "console" // errors type (console/message)
});
 
// Ping Command Example
bot.command({
  name: "ping",
  code: `Pong! $pingms`
});

// Pro Avatar Command Example
bot.command({
    name: "pro",
    code: `
    $sendCanvas[pro]
    $drawText[pro;Pro;225;450]
    $setShadow[pro;20]
    $canvasColor[pro;#FFFFFF;shadow]
    $font[pro;50px Arial]
    $canvasColor[pro;#000000]
    $drawImage[pro;avatar;0;0;512;512]
    $loadImage[pro;avatar;url;$nonEscape[$authorAvatar]]
    $createCanvas[pro;512;512]
    `
});
 
// Leref Pro Command Example
bot.command({
  name: "leref",
  code: `
  $sendCanvas[lerefPro;msg]
  $lerefPro
  `
});
```

<3