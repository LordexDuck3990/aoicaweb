---
title: StrokeText
description: Adds text outlines to the canvas.
id: stroketext
---

# StrokeText

Adds some text outlines to the canvas. 

---

## Usage

```
{stroketext:text:font:color?:x?:y?:strokecolor?:strokesize?}
``` 

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| text | string | The text. | yes |
| font | string | The path to image. | yes |
| color | hex | The text color. | no |
| x | number | The x position. | no |
| y | number | The y position. | no |
| strokesize | number | The size of stroke. | no |

## More Info

It just draws text outlines.

You can also:
- use `center` as x
- use `center` as y

## Example(s)
 
```js
bot.command({
    name: "cat",
    code: `
    $sendCanvas[cat]
    $canvasBuilder[
        {settings:cat:512:512}
        {image:url:$replaceText[$nonEscape[$get[url]];:;&COLON&]:0:0}
        {shadow:7.5:#FFFFFF}
        {text:Meow &COLON&3:50px Arial::center:400}
        {stroketext:Meow &COLON&3:50px Arial:#FFFFFF:center:400:1}
    ]
    $let[url;$jsonRequest[https://ild.vercel.app/api/cat;image]]
    `
});

```

### Showcase

![Preview](img/s-cat.png)