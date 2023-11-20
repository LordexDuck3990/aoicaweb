---
title: $sendCanvas
description: $sendCanvas will send the canvas.
id: sendCanvas
---

It sends the canvas.

## Usage

```php
$sendCanvas[canvas;type?(msg/image/footer/author/thumbnail);index?]
```

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| canvas | string | Name of the canvas. | true |
| type | string | Type. | false |
| index | number | Index of embed. | false |

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