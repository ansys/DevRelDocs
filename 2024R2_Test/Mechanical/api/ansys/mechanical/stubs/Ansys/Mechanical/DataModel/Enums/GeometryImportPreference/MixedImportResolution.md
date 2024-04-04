# MixedImportResolution

### *class* MixedImportResolution

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Describes how parts of mixed dimension will be treated, i.e., to be imported as components
> of assemblies which have parts of different dimension.

> <!-- !! processed by numpydoc !! -->

## Overview

### Attributes

| [`None_`](#MixedImportResolution.None_)                               |    |
|-----------------------------------------------------------------------|----|
| [`Solid`](../../../../ACT/Automation/Mechanical/Solid.md#Solid)       |    |
| [`Surface`](../../../../ACT/Automation/Mechanical/Surface.md#Surface) |    |
| [`Line`](#MixedImportResolution.Line)                                 |    |
| [`SolidSurface`](#MixedImportResolution.SolidSurface)                 |    |
| [`SurfaceLine`](#MixedImportResolution.SurfaceLine)                   |    |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference import MixedImportResolution
```

## Attribute detail

### MixedImportResolution.None_ *= 0*

### MixedImportResolution.Solid *= 1*

### MixedImportResolution.Surface *= 2*

### MixedImportResolution.Line *= 3*

### MixedImportResolution.SolidSurface *= 5*

### MixedImportResolution.SurfaceLine *= 8*
