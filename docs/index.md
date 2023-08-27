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
  bot: bot, // aoi.js Bot object.
  DownloadFolder: "./folder/", // Folder for $downloadCanvas and $downloadGIF, optional.
  ErrorsType: "console" // AoiCanvas errors type, optional. (console/message/none)
});
```

***4. You are ready to use Aoi Canvas with your aoi.js Bot!***

---

# Example

```js
const { AoiClient } = require("aoi.js");
const aoicanvas = require("aoi.canvas");
 
const bot = new AoiClient({
  token: "BOT TOKEN",
  prefix: "BOT PREFIX",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue"
    }
  }
});
 
aoicanvas.load({
  bot: bot, // the aoi.js bot
  DownloadFolder: "./aoicanvas/", // download folder for $downloadCanvas and $downloadGIF
  ErrorsType: "console" // errors type (console/message)
});
 
// Ping Command Example
bot.command({
  name: "ping",
  code: `Pong! $pingms`
});
 
// Leref Command Example (The best)
bot.command({
  name: "leref",
  code: `
  $sendCanvas[lerefPro;msg]
  $lerefPro
  `
});
```

