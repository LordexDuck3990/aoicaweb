---
title: $setStroke
description: $setStroke will add stroke to the canvas.
id: setStroke
---

# $setStroke

It adds stroke to the canvas.

---

## Usage

```
$setStroke[canvas;color;size]
```

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| canvas | string | Name of the canvas. | yes |
| color | hex | Color. | yes |
| size | number | Size of stroke. | yes |

## Example(s)

This will make canvas with name "pro" and pro image of author.

```js
bot.command({
    name: "c-av",
    code: `
    $sendCanvas[a]
    $setStroke[a;#FFFFFF;15]
    $drawImage[a;avatar;60;50;400;400;205]
    $loadImage[a;avatar;url;$nonEscape[$authorAvatar]]
    $createCanvas[a;512;512]
    `
});
```

### Showcase

![](img/c-av.png)
