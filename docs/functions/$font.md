---
title: $font
description: $font will change the current font of the canvas.
id: font
---

It changes the current font of the canvas.

## Usage

```php
$font[canvas;font]
```

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| canvas | string | Name of the canvas. | true |
| font | string | The font in "{size}px {font name}" format. | true |

## Example(s)

This will make canvas with name "pro" and pro image of author.

```js
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
```

### Showcase

![showcase](https://github.com/LordexDuck3990/aoicaweb/blob/master/docs/functions/img/pro.png?raw=true)