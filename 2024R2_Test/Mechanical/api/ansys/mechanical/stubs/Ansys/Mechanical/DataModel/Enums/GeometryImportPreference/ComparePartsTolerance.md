<a id="comparepartstolerance"></a>

# ComparePartsTolerance

<a id="ComparePartsTolerance"></a>

### *class* ComparePartsTolerance

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies the tolerance to use when comparing parts. This provides comparison robustness due
> : to differences/errors in floating-point number representations. Actual geometric
>   modifications are not intended to be captured via tolerance loosening.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Attributes

| Name | Summary |
|-------------------------------------------|----|
| [`Tight`](#ComparePartsTolerance.Tight)   |    |
| [`Normal`](#ComparePartsTolerance.Normal) |    |
| [`Loose`](#ComparePartsTolerance.Loose)   |    |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference import ComparePartsTolerance
```

<a id="attribute-detail"></a>

## Attribute detail

<a id="ComparePartsTolerance.Tight"></a>

### ComparePartsTolerance.Tight *= 2*

<a id="ComparePartsTolerance.Normal"></a>

### ComparePartsTolerance.Normal *= 1*

<a id="ComparePartsTolerance.Loose"></a>

### ComparePartsTolerance.Loose *= 0*
