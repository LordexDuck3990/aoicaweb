---
title: $drawImage
description: $drawImage will draw image by loaded image id to the canvas.
id: drawImage
---

# $drawImage

It draws image in canvas.

---

## Usage

```
$drawImage[canvas;id;x;y;width;height;radius?]
```

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| canvas | string | Name of the canvas. | yes |
| id | string | ID of the image. | yes |
| x | number | The x position. | yes |
| y | number | The y position. | yes |
| width | number | Image width. | yes |
| height | number | Image height. | yes |
| radius | number | Corners radius of image. (size affects) | no | 

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