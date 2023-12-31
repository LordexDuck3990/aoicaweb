---
title: $addFont
description: $addFont will add font to the canvas.
id: addFont
---

It adds font to the canvas.

## Usage

```php
$addFont[canvas;font;path]
```

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| canvas | string | Name of the canvas. | true |
| font | string | Font name. | true |
| path | string | Path to font. | true |

## Example(s)

This will make canvas with name "pro" and pro image of author but with custom font.

```js
// Warning: Its with custom font and you have to have it, and if you dont have it wont work.
// Its example, you can use any font you have in your repository.

bot.command({
    name: "fpro",
    code: `
    $sendCanvas[pro]
    $drawText[pro;Pro;225;450]
    $setShadow[pro;20]
    $canvasColor[pro;#FFFFFF;shadow]
    $font[pro;50px Futura]
    $canvasColor[pro;#000000]
    $drawImage[pro;avatar;0;0;512;512]
    $loadImage[pro;avatar;url;$nonEscape[$authorAvatar]]
    $addFont[pro;Futura;./Futura.ttf]
    $createCanvas[pro;512;512]
    `
});
``` 

### Showcase

**With custom font:**

![](img/fpro.png)

**Not custom font:**

![showcase](https://github.com/LordexDuck3990/aoicaweb/blob/master/docs/functions/img/pro.png?raw=true)