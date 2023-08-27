---
title: $drawText
description: $drawText will draw text in the canvas.
id: drawText
---

# $drawText

It draws text in canvas.

---

## Usage

```
$drawText[canvas;text;x;y]
```

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| canvas | string | Name of the canvas. | yes |
| text | string | Text to draw. | yes |
| x | number | X position of the text. | yes |
| y | number | Y position of the text. | yes |

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