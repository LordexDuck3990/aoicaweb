---
title: Gradients
description: Gradients guide.
id: gradients
---

# Gradients

In **aoi.canvas**, you can create and apply gradients to enhance the visual appeal of your designs. Gradients allow you to smoothly transition between colors. There are two types of gradients you can use: linear and radial gradients.

## Linear Gradient

To apply a linear gradient, you can use the `lineargradient=` in color/strokecolor parameter, specifying the starting and ending points and color stops:

### Usage

```
lineargradient=startX/startY/endX/endY/...colorStops
```

The color stops can be more than 1.

### Parameters

| Field | Type | Description |
| ----- | ---- | ----------- |
| startX | number | Gradient start x position. |
| startY | number | Gradient start y position. |
| endX | number | Gradient end x position |
| endY | number | Gradient end y position |
| colorStops | position/color | Gradient color stops. |

### Examples

**In builder:** `{rect:lineargradient=0/0/512/0/0/red/1/blue:0:0:512:512}`

**In functions:** `$fillRect[yourCanvasIDlol;0;0;512;512] $canvasColor[yourCanvasIDlol;lineargradient=0/0/512/0/0/red/1/blue]`

## Radial Gradients

To apply a radial gradient, you can use the `radialgradient=` in color/strokecolor parameter, specifying the starting and ending points and color stops:

### Usage

```
radialgradient=startX/startY/startRadius/endX/endY/endRadius/...colorStops
```

The color stops can be more than 1.

### Parameters

| Field | Type | Description |
| ----- | ---- | ----------- |
| startX | number | Gradient start x position. |
| startY | number | Gradient start y position. |
| startRadius | number | Gradient start radius |
| endX | number | Gradient end x position |
| endY | number | Gradient end y position |
| endRadius | number | Gradient end radius |
| colorStops | position/color | Gradient color stops. |

### Examples

**In builder:** `{rect:radialgradient=0/0/0/512/0/100/0/red/1/blue:0:0:512:512}`

**In functions:** `$fillRect[yourCanvasIDlol;0;0;512;512] $canvasColor[yourCanvasIDlol;radialgradient=0/0/0/512/0/100/0/red/1/blue]`
