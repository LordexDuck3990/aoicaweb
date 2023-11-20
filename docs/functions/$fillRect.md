---
title: $fillRect
description: $fillRect will fill rect in canvas.
id: fillRect
---

It fills rect in canvas.

## Usage

```php
$fillRect[canvas;x;y;width;height;radius?]
```

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| canvas | string | Name of the canvas. | true |
| x | number | X position of the rect. | true |
| y | number | Y position of the rect. | true |
| width | number | Width of the rect. | true |
| height | number | Height of the rect. | true |
| radius | number | Corners radius of the rect. (size affects) | false |

## Example(s)

It will send new color canvas.

```js
bot.command({
    name: "color",
    code: `
    $sendCanvas[somename]
    $fillRect[somename;0;0;512;512]
    $canvasColor[somename;$message[1]]
    $createCanvas[somename]
    $onlyIf[$isValidHex[$message[1]]==true;Please provide a valid hex.]
    `
});
``` 

### Showcase

![showcase](https://github.com/LordexDuck3990/aoicaweb/blob/master/docs/functions/img/color.png?raw=true)