---
title: AddFont
description: Adds font to the canvas.
id: addfont
---

# AddFont

Adds font to the canvas.

---

## Usage

```
{addfont:font:path}
``` 

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| font | string | The font name. | yes |
| path | string | The path to font. | yes |

## More Info

It just adds font to canvas.

## Example(s)
 
```js
// Warning: In this example i used installed font.
bot.command({
    name: "cat",
    code: `
    $sendCanvas[cat]
    $canvasBuilder[
        {settings:cat:512:512}
        {image:url:$replaceText[$nonEscape[$get[url]];:;&COLON&]:0:0}
        {shadow:7.5:#FFFFFF}
        {addfont:Futura:./Futura.ttf}
        {text:Meow &COLON&3:100px Futura::center:400}
        {stroketext:Meow &COLON&3:100px Futura:#FFFFFF:center:400:1}
    ]
    $let[url;$jsonRequest[https://ild.vercel.app/api/cat;image]]
    `
});
``` 

### Showcase

![Preview](img/futura-cat.png)