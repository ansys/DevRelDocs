<a id="module-ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference"></a>

<a id="the-geometryimportpreference-package"></a>

# The `GeometryImportPreference` package

<a id="summary"></a>

## Summary

### Enums

| Name | Summary |
|------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| [`AnalysisType`](AnalysisType.md#AnalysisType)                               | Specifies the type of analysis to target during import.                                      |
| [`ComparePartsOnUpdate`](ComparePartsOnUpdate.md#ComparePartsOnUpdate)       | Specifies how to enable mesh preservation on parts during update.                            |
| [`ComparePartsTolerance`](ComparePartsTolerance.md#ComparePartsTolerance)    | Specifies the tolerance to use when comparing parts. This provides comparison robustness due |
| [`FacetQuality`](FacetQuality.md#FacetQuality)                               | Used to specify the quality of the facet for the import.                                     |
| [`Format`](Format.md#Format)                                                 | Specifies how to interpret the geometry file.                                                |
| [`MixedImportResolution`](MixedImportResolution.md#MixedImportResolution)    | Describes how parts of mixed dimension will be treated, i.e., to be imported as components   |
| [`Parameters`](Parameters.md#Parameters)                                     | Defines how parameters in the CAD source are processed.                                      |
| [`StitchSurfacesOnImport`](StitchSurfacesOnImport.md#StitchSurfacesOnImport) | Used to specify if and how to join surfaces when imported.                                   |

<a id="description"></a>

## Description

GeometryImportPreference subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="GeometryImportPreference.AnalysisType"></a>

### *class* GeometryImportPreference.AnalysisType

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies the type of analysis to target during import.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|------------------------------------------------|----|
| [`Type3D`](#GeometryImportPreference.Type3D)   |    |
| [`Type2D`](#GeometryImportPreference.Type2D)   |    |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference import AnalysisType
```

<a id="attribute-detail"></a>

## Attribute detail

<a id="GeometryImportPreference.Type3D"></a>

### GeometryImportPreference.Type3D *= 0*

<a id="GeometryImportPreference.Type2D"></a>

### GeometryImportPreference.Type2D *= 1*

<a id="GeometryImportPreference.ComparePartsOnUpdate"></a>

### *class* GeometryImportPreference.ComparePartsOnUpdate

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies how to enable mesh preservation on parts during update.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|------------------------------------------------------------------|----|
| [`None_`](#id17)                                                 |    |
| [`Associatively`](#GeometryImportPreference.Associatively)       |    |
| [`NonAssociatively`](#GeometryImportPreference.NonAssociatively) |    |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference import ComparePartsOnUpdate
```

<a id="id2"></a>

## Attribute detail

<a id="GeometryImportPreference.None_"></a>

### GeometryImportPreference.None_ *= 0*

<a id="GeometryImportPreference.Associatively"></a>

### GeometryImportPreference.Associatively *= 1*

<a id="GeometryImportPreference.NonAssociatively"></a>

### GeometryImportPreference.NonAssociatively *= 2*

<a id="GeometryImportPreference.ComparePartsTolerance"></a>

### *class* GeometryImportPreference.ComparePartsTolerance

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies the tolerance to use when comparing parts. This provides comparison robustness due
> : to differences/errors in floating-point number representations. Actual geometric
>   modifications are not intended to be captured via tolerance loosening.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|----------------------------------------------|----|
| [`Tight`](#GeometryImportPreference.Tight)   |    |
| [`Normal`](#id0)                             |    |
| [`Loose`](#GeometryImportPreference.Loose)   |    |

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference import ComparePartsTolerance
```

<a id="id4"></a>

## Attribute detail

<a id="GeometryImportPreference.Tight"></a>

### GeometryImportPreference.Tight *= 2*

<a id="GeometryImportPreference.Normal"></a>

### GeometryImportPreference.Normal *= 1*

<a id="GeometryImportPreference.Loose"></a>

### GeometryImportPreference.Loose *= 0*

<a id="GeometryImportPreference.FacetQuality"></a>

### *class* GeometryImportPreference.FacetQuality

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Used to specify the quality of the facet for the import.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|--------------------------------------------------------|----|
| [`VeryCoarse`](#GeometryImportPreference.VeryCoarse)   |    |
| [`Coarse`](#GeometryImportPreference.Coarse)           |    |
| [`Normal`](#id0)                                       |    |
| [`Fine`](#GeometryImportPreference.Fine)               |    |
| [`VeryFine`](#GeometryImportPreference.VeryFine)       |    |
| [`Source`](#GeometryImportPreference.Source)           |    |

<a id="id5"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference import FacetQuality
```

<a id="id6"></a>

## Attribute detail

<a id="GeometryImportPreference.VeryCoarse"></a>

### GeometryImportPreference.VeryCoarse *= 1*

<a id="GeometryImportPreference.Coarse"></a>

### GeometryImportPreference.Coarse *= 2*

<a id="id0"></a>

### GeometryImportPreference.Normal *= 3*

<a id="GeometryImportPreference.Fine"></a>

### GeometryImportPreference.Fine *= 4*

<a id="GeometryImportPreference.VeryFine"></a>

### GeometryImportPreference.VeryFine *= 5*

<a id="GeometryImportPreference.Source"></a>

### GeometryImportPreference.Source *= 6*

<a id="GeometryImportPreference.Format"></a>

### *class* GeometryImportPreference.Format

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies how to interpret the geometry file.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|------------------------------------------------------|----|
| [`Automatic`](#GeometryImportPreference.Automatic)   |    |

<a id="id7"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference import Format
```

<a id="id8"></a>

## Attribute detail

<a id="GeometryImportPreference.Automatic"></a>

### GeometryImportPreference.Automatic *= 0*

<a id="GeometryImportPreference.MixedImportResolution"></a>

### *class* GeometryImportPreference.MixedImportResolution

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Describes how parts of mixed dimension will be treated, i.e., to be imported as components
> of assemblies which have parts of different dimension.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|-----------------------------------------------------------------------|----|
| [`None_`](#id17)                                                      |    |
| [`Solid`](../../../../ACT/Automation/Mechanical/Solid.md#Solid)       |    |
| [`Surface`](../../../../ACT/Automation/Mechanical/Surface.md#Surface) |    |
| [`Line`](#GeometryImportPreference.Line)                              |    |
| [`SolidSurface`](#GeometryImportPreference.SolidSurface)              |    |
| [`SurfaceLine`](#GeometryImportPreference.SurfaceLine)                |    |

<a id="id9"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference import MixedImportResolution
```

<a id="id10"></a>

## Attribute detail

<a id="id11"></a>

### GeometryImportPreference.None_ *= 0*

<a id="GeometryImportPreference.Solid"></a>

### GeometryImportPreference.Solid *= 1*

<a id="GeometryImportPreference.Surface"></a>

### GeometryImportPreference.Surface *= 2*

<a id="GeometryImportPreference.Line"></a>

### GeometryImportPreference.Line *= 3*

<a id="GeometryImportPreference.SolidSurface"></a>

### GeometryImportPreference.SolidSurface *= 5*

<a id="GeometryImportPreference.SurfaceLine"></a>

### GeometryImportPreference.SurfaceLine *= 8*

<a id="GeometryImportPreference.Parameters"></a>

### *class* GeometryImportPreference.Parameters

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Defines how parameters in the CAD source are processed.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|--------------------------------------------------------|----|
| [`None_`](#id17)                                       |    |
| [`Independent`](#GeometryImportPreference.Independent) |    |
| [`All`](#GeometryImportPreference.All)                 |    |

<a id="id12"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference import Parameters
```

<a id="id13"></a>

## Attribute detail

<a id="id14"></a>

### GeometryImportPreference.None_ *= 0*

<a id="GeometryImportPreference.Independent"></a>

### GeometryImportPreference.Independent *= 1*

<a id="GeometryImportPreference.All"></a>

### GeometryImportPreference.All *= 3*

<a id="GeometryImportPreference.StitchSurfacesOnImport"></a>

### *class* GeometryImportPreference.StitchSurfacesOnImport

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Used to specify if and how to join surfaces when imported.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|------------------------------------------------|----|
| [`None_`](#id17)                               |    |
| [`Program`](#GeometryImportPreference.Program) |    |
| [`User`](#GeometryImportPreference.User)       |    |

<a id="id15"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference import StitchSurfacesOnImport
```

<a id="id16"></a>

## Attribute detail

<a id="id17"></a>

### GeometryImportPreference.None_ *= 0*

<a id="GeometryImportPreference.Program"></a>

### GeometryImportPreference.Program *= 1*

<a id="GeometryImportPreference.User"></a>

### GeometryImportPreference.User *= 2*
