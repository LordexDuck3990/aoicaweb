---
title: $setShadow
description: $setShadow will add shadow to the canvas.
id: setShadow
---

# $setShadow

It adds shadow to the canvas.

---

## Usage

```
$setShadow[canvas;size;color]
```

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| canvas | string | Name of the canvas. | yes |
| size | number | Size of shadow. | yes |
| color | hex | Color. | yes |

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