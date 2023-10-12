---
title: RadialGradient
description: Makes radial gradient to the canvas.
id: radialgradient
---

# RadialGradient

It creates **radial** gradient.

---

## Usage

```
{radialgradient:id:startX:startY:endX:endY:...colorStop(s)}
``` 

## Parameters

| Field | Type | Description | Required |
| ----- | ---- | ----------- | :------: |
| id | string | The gradient id. | yes |
| startX | number | Gradient start x position. | yes |
| startY | number | Gradient start y position. | yes |
| startRadius | number | Gradient start y position. | yes |
| endX | number | Gradient end x position | yes |
| endY | number | Gradient end y position | yes |
| endRadius | number | Gradient end y position | yes |
| colorStops | position:color | Gradient color stops. | yes |

## More Info

It just creates **radial** gradient.

If you want to use it, put ``gradientID=yourGradientID`` in color parameter. (works almost everywhere)

## Example(s)

nothing here :<