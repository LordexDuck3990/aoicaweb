---
title: $rotate
description: $rotate will rotate the canvas.
id: rotate
---

# $rotate

It rotates the canvas.

---

## Usage

```
$rotate[canvas;angle]
```

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| canvas | string | Name of the canvas. | yes |
| angle | number | Angle. | yes |

## Example(s)

It will send new canvas with rotated author avatar.

```js
bot.command({
    name: "rotated",
    code: `
    $sendCanvas[somename]
    $drawImage[somename;avatar;0;0;512;512]
    $rotate[somename;$message[1]]
    $loadImage[somename;avatar;url;$nonEscape[$authorAvatar]]
    $createCanvas[somename]
    $onlyIf[$isNumber[$message[1]]==true;Please provide a number.]
    `
});
```

### Showcase

![](img/rotated.png)