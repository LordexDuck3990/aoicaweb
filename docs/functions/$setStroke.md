---
title: $setStroke
description: $setStroke will add stroke to the canvas.
id: setStroke
---

It adds stroke to the canvas.

## Usage

```php
$setStroke[canvas;color;size]
```

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| canvas | string | Name of the canvas. | true |
| size | number | Size of stroke. | true |

## Example(s)

This will make canvas with name "pro" and pro image of author.

```js
bot.command({
    name: "c-av",
    code: `
    $sendCanvas[a]
    $setStroke[a;15]
    $drawImage[a;avatar;60;50;400;400;205]
    $canvasColor[a;#FFFFFF;stoke]
    $loadImage[a;avatar;url;$nonEscape[$authorAvatar]]
    $createCanvas[a;512;512]
    `
});
```

### Showcase

![showcase](https://github.com/LordexDuck3990/aoicaweb/blob/master/docs/functions/img/c-av.png?raw=true)