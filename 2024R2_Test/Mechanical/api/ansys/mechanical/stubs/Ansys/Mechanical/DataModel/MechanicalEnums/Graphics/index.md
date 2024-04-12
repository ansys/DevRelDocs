<a id="module-ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.Graphics"></a>

<a id="the-graphics-package"></a>

# The `Graphics` package

<a id="summary"></a>

## Summary

### Enums

| Name | Summary |
|------------------------------------------------------------------|-----------------------------------|
| [`CappingType`](CappingType.md#CappingType)                      | Specifies the CappingType.        |
| [`ContourView`](ContourView.md#ContourView)                      | Specifies the ContourView.        |
| [`DeformationScaling`](DeformationScaling.md#DeformationScaling) | Specifies the DeformationScaling. |
| [`ExtraModelDisplay`](ExtraModelDisplay.md#ExtraModelDisplay)    | Specifies the ExtraModelDisplay.  |
| [`GeometryView`](GeometryView.md#GeometryView)                   | Specifies the GeometryView.       |
| [`ScopingDisplay`](ScopingDisplay.md#ScopingDisplay)             | Specifies the ScopingDisplay.     |

<a id="description"></a>

## Description

Graphics subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Graphics.CappingType"></a>

### *class* Graphics.CappingType

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies the CappingType.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|------------------------------|----|
| [`Iso`](#Graphics.Iso)       |    |
| [`Top`](#Graphics.Top)       |    |
| [`Bottom`](#Graphics.Bottom) |    |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.Graphics import CappingType
```

<a id="attribute-detail"></a>

## Attribute detail

<a id="Graphics.Iso"></a>

### Graphics.Iso *= 0*

<a id="Graphics.Top"></a>

### Graphics.Top

<a id="Graphics.Bottom"></a>

### Graphics.Bottom *= 1*

<a id="Graphics.ContourView"></a>

### *class* Graphics.ContourView

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies the ContourView.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|------------------------------------------------|----|
| [`SmoothContours`](#Graphics.SmoothContours)   |    |
| [`ContourBands`](#Graphics.ContourBands)       |    |
| [`Isolines`](#Graphics.Isolines)               |    |
| [`SolidFill`](#Graphics.SolidFill)             |    |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.Graphics import ContourView
```

<a id="id2"></a>

## Attribute detail

<a id="Graphics.SmoothContours"></a>

### Graphics.SmoothContours *= 0*

<a id="Graphics.ContourBands"></a>

### Graphics.ContourBands *= 1*

<a id="Graphics.Isolines"></a>

### Graphics.Isolines *= 2*

<a id="Graphics.SolidFill"></a>

### Graphics.SolidFill *= 3*

<a id="Graphics.DeformationScaling"></a>

### *class* Graphics.DeformationScaling

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies the DeformationScaling.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|------------------------------|----|
| [`True_`](#Graphics.True_)   |    |
| [`Auto`](#Graphics.Auto)     |    |

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.Graphics import DeformationScaling
```

<a id="id4"></a>

## Attribute detail

<a id="Graphics.True_"></a>

### Graphics.True_ *= 0*

<a id="Graphics.Auto"></a>

### Graphics.Auto *= 1*

<a id="Graphics.ExtraModelDisplay"></a>

### *class* Graphics.ExtraModelDisplay

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies the ExtraModelDisplay.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|--------------------------------------------------------|----|
| [`NoWireframe`](#Graphics.NoWireframe)                 |    |
| [`UndeformedWireframe`](#Graphics.UndeformedWireframe) |    |
| [`UndeformedModel`](#Graphics.UndeformedModel)         |    |
| [`ShowElements`](#Graphics.ShowElements)               |    |

<a id="id5"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.Graphics import ExtraModelDisplay
```

<a id="id6"></a>

## Attribute detail

<a id="Graphics.NoWireframe"></a>

### Graphics.NoWireframe *= 0*

<a id="Graphics.UndeformedWireframe"></a>

### Graphics.UndeformedWireframe *= 1*

<a id="Graphics.UndeformedModel"></a>

### Graphics.UndeformedModel *= 2*

<a id="Graphics.ShowElements"></a>

### Graphics.ShowElements *= 3*

<a id="Graphics.GeometryView"></a>

### *class* Graphics.GeometryView

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies the GeometryView.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|--------------------------------------------------|----|
| [`Exterior`](#Graphics.Exterior)                 |    |
| [`Isosurface`](#Graphics.Isosurface)             |    |
| [`CappedIsosurface`](#Graphics.CappedIsosurface) |    |
| [`SlicePlane`](#Graphics.SlicePlane)             |    |

<a id="id7"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.Graphics import GeometryView
```

<a id="id8"></a>

## Attribute detail

<a id="Graphics.Exterior"></a>

### Graphics.Exterior *= 0*

<a id="Graphics.Isosurface"></a>

### Graphics.Isosurface *= 1*

<a id="Graphics.CappedIsosurface"></a>

### Graphics.CappedIsosurface *= 2*

<a id="Graphics.SlicePlane"></a>

### Graphics.SlicePlane *= 3*

<a id="Graphics.ScopingDisplay"></a>

### *class* Graphics.ScopingDisplay

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies the ScopingDisplay.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|--------------------------------------------|----|
| [`ScopedBodies`](#Graphics.ScopedBodies)   |    |
| [`AllBodies`](#Graphics.AllBodies)         |    |
| [`ResultOnly`](#Graphics.ResultOnly)       |    |

<a id="id9"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.Graphics import ScopingDisplay
```

<a id="id10"></a>

## Attribute detail

<a id="Graphics.ScopedBodies"></a>

### Graphics.ScopedBodies *= 0*

<a id="Graphics.AllBodies"></a>

### Graphics.AllBodies *= 1*

<a id="Graphics.ResultOnly"></a>

### Graphics.ResultOnly *= 2*
