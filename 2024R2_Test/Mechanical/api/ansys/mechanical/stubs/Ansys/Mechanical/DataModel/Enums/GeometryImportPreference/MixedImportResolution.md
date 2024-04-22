<a id="mixedimportresolution"></a>

# MixedImportResolution

<a id="MixedImportResolution"></a>

### *class* MixedImportResolution

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Describes how parts of mixed dimension will be treated, i.e., to be imported as components
> of assemblies which have parts of different dimension.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Attributes

| Name | Summary |
|-----------------------------------------------------------------------|----|
| [`None_`](#MixedImportResolution.None_)                               |    |
| [`Solid`](../../../../ACT/Automation/Mechanical/Solid.md#Solid)       |    |
| [`Surface`](../../../../ACT/Automation/Mechanical/Surface.md#Surface) |    |
| [`Line`](#MixedImportResolution.Line)                                 |    |
| [`SolidSurface`](#MixedImportResolution.SolidSurface)                 |    |
| [`SurfaceLine`](#MixedImportResolution.SurfaceLine)                   |    |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference import MixedImportResolution
```

<a id="attribute-detail"></a>

## Attribute detail

<a id="MixedImportResolution.None_"></a>

### MixedImportResolution.None_ *= 0*

<a id="MixedImportResolution.Solid"></a>

### MixedImportResolution.Solid *= 1*

<a id="MixedImportResolution.Surface"></a>

### MixedImportResolution.Surface *= 2*

<a id="MixedImportResolution.Line"></a>

### MixedImportResolution.Line *= 3*

<a id="MixedImportResolution.SolidSurface"></a>

### MixedImportResolution.SolidSurface *= 5*

<a id="MixedImportResolution.SurfaceLine"></a>

### MixedImportResolution.SurfaceLine *= 8*
