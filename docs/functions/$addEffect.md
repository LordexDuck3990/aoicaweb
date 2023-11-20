---
title: $addEffect
description: $addEffect will set current effect in the canvas.
id: addeffect
---

It adds effect in canvas.

## Usage

```php
$addEffect[canvas;filter;value]
```

**Effects: blur, grayscale, sepia, brightness, contrast, invert, saturate**

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| canvas | string | Name of the canvas. | true |
| filter | string | Filter. | true |
| value | number | Value of filter. | true |

## Example(s)

This example will send new blurred/neon color canvas.

```js
bot.command({
    name: "dark-b-color",
    code: `
    $sendCanvas[somename]
    $fillRect[somename;0;0;512;512]
    $addEffect[somename;grayscale;50]
    $addEffect[somename;blur;10]
    $canvasColor[somename;$message[1]]
    $createCanvas[somename]
    $onlyIf[$isValidHex[$message[1]]==true;Please provide a valid hex.]
    `
});
``` 

### Showcase

![showcase](https://github.com/LordexDuck3990/aoicaweb/blob/master/docs/functions/img/dark-b-color.png?raw=true)