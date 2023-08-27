---
title: $createCanvas
description: $createCanvas will create new canvas.
id: createCanvas
---

# $createCanvas

It creates new canvas.

---

## Usage

```
$createCanvas[canvas;width?;height?]
```

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| canvas | string | Name of the new canvas. | yes |
| width | number | Width of the canvas. | no |
| height | number | Height of the canvas. | no |

## Example(s)

This will make canvas with name "pro" and pro image of author.

```js
bot.command({
    name: "pro",
    code: `
    $sendCanvas[pro]
    $drawText[pro;Pro;225;450]
    $setShadow[pro;20;#FFFFFF]
    $font[pro;50px Arial]
    $canvasColor[pro;#000000]
    $drawImage[pro;avatar;0;0;512;512]
    $loadImage[pro;avatar;url;$nonEscape[$authorAvatar]]
    $createCanvas[pro;512;512]
    `
});
```

### Showcase

![](img/pro.png)