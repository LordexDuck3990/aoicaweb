---
title: Image
description: Adds image to the canvas.
id: image
---

# Image

Adds image to the canvas. 

---

## Usage

```
{image:type?:path:x?:y?:width?:height?:radius?}
``` 

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| type | string | Type of path (url/local) | no |
| path | string | The path to image. | yes |
| x | number | The x position. | no |
| y | number | The y position. | no |
| width | number | The width of image. | no |
| height | number | The height of image. | no |
| radius | number | Corners radius of image. (size affects) | no |

## More Info

It just loads the image and draws it.

You can also:
- use `%circle%` as radius to make it automatically circle.

## Example(s)
 
```js
bot.command({
    name: "c-av",
    code: `
    $sendCanvas[test]
    $canvasBuilder[
        {settings:test:100:100}
        {image:url:$replaceText[$nonEscape[$authorAvatar];:;&COLON&]:0:0:100:100:%circle%}
    ]
    `
});

```

### Showcase

![Preview](img/settings.png) 