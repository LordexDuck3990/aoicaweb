---
title: $setEffect
description: $setEffect will set current effect in the canvas.
id: seteffect
---

It sets effect in canvas.

## Usage

```php
$setEffect[canvas;filter;value]
```

**Effects: blur, grayscale, sepia, brightness, contrast, invert, saturate, none**
use none if you want to remove effect to next things.

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| canvas | string | Name of the canvas. | true |
| filter | string | Filter. | true |
| value | number | Value of filter. | true |

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

![showcase](https://github.com/LordexDuck3990/aoicaweb/blob/master/docs/functions/img/bcolor.png?raw=true)