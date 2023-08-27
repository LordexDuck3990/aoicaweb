---
title: $fillRect
description: $fillRect will fill rect in canvas.
id: fillRect
---

# $fillRect

It fills rect in canvas.

---

## Usage

```
$fillRect[canvas;x;y;width;height;radius?]
```

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| canvas | string | Name of the canvas. | yes |
| x | number | X position of the rect. | yes |
| y | number | Y position of the rect. | yes |
| width | number | Width of the rect. | yes |
| height | number | Height of the rect. | yes |
| radius | number | Corners radius of the rect. (size affects) | no |

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

![](img/color.png)