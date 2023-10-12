---
title: Settings
index: 1
description: Used to interact with canvases. (required in builder)
id: settings
---

# Settings

Used to interact with canvases. **(REQUIRED)** 

---

## Usage

```
{settings:canvas:width?:height?}
```

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| canvas | string | Name of the canvas. | yes |
| width | number | Width of the canvas. | no |
| height | number | Height of the canvas. | no |

## More Info

Just needs to interact with canvases.

You can also:
- dont use width parameter (if edit canvas)
- dont use height parameter (if edit canvas)

## Example(s)

```js
bot.command({
    name: "c-av",
    code: `
    $sendCanvas[test]
    $canvasBuilder[
        {settings:test:100:100}
        {image:url:$replaceText[$nonEscape[$authorAvatar];:;&COLON&]:0:0:100:100:%circle%}
    ]
    `
});

```

### Showcase

![](img/settings.png)