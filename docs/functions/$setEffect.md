---
title: $setEffect
description: $setEffect will set current effect in the canvas.
id: seteffect
---

# $setEffect

It sets effect in canvas.

---

## Usage

```
$setEffect[canvas;filter;value]
```

**Effects: blur, grayscale, sepia, brightness, contrast, invert, saturate, none**
use none if you want to remove effect to next things.

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| canvas | string | Name of the canvas. | yes |
| filter | string | Filter. | yes |
| value | number | Value of filter. | yes |

## Example(s)

It will send new blurred/neon color canvas.

```js
bot.command({
    name: "bcolor",
    code: `
    $sendCanvas[somename]
    $fillRect[somename;0;0;512;512]
    $setEffect[somename;blur;10]
    $canvasColor[somename;$message[1]]
    $createCanvas[somename]
    $onlyIf[$isValidHex[$message[1]]==true;Please provide a valid hex.]
    `
});
``` 

### Showcase

![](img/bcolor.png)