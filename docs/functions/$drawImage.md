---
title: $drawImage
description: $drawImage will draw image by loaded image id to the canvas.
id: drawImage
---

It draws image in canvas.

## Usage

```php
$drawImage[canvas;id;x;y;width;height;radius?]
```

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| canvas | string | Name of the canvas. | true |
| id | string | ID of the image. | true |
| x | number | The x position. | true |
| y | number | The y position. | true |
| width | number | Image width. | true |
| height | number | Image height. | true |
| radius | number | Corners radius of image. (size affects) | false | 

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