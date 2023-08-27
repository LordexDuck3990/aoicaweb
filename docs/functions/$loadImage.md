---
title: $loadImage
description: $loadImage will load image to the canvas.
id: loadImage
---

# $loadImage

It loads image to canvas.

---

## Usage

```
$loadImage[canvas;id;type;path]
```

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| canvas | string | Name of the canvas. | yes |
| id | string | ID of the image. | yes |
| type | string | Type of the image. (url/file) | yes |
| path | string | Path to image. (url/file) | yes |

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