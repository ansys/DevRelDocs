<a id="module-ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData"></a>

<a id="the-externaldata-package"></a>

# The `ExternalData` package

<a id="summary"></a>

## Summary

### Enums

| Name | Summary |
|---------------------------------------------------------|------------------------------------------------------------------------------|
| [`LengthUnit`](LengthUnit.md#LengthUnit)                | Specifies how to interpret the variable data source.                         |
| [`ImportFormat`](../Table/ImportFormat.md#ImportFormat) | Specifies how to interpret the variable data source.                         |
| [`VariableType`](../Table/VariableType.md#VariableType) | An enumeration of the different variable types supported by the tabular data |

<a id="description"></a>

## Description

ExternalData subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="ExternalData.LengthUnit"></a>

### *class* ExternalData.LengthUnit

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies how to interpret the variable data source.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|------------------------------------------|----|
| [`meter`](#ExternalData.meter)           |    |
| [`centimeter`](#ExternalData.centimeter) |    |
| [`foot`](#ExternalData.foot)             |    |
| [`inch`](#ExternalData.inch)             |    |
| [`millimeter`](#ExternalData.millimeter) |    |
| [`micrometer`](#ExternalData.micrometer) |    |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData import LengthUnit
```

<a id="attribute-detail"></a>

## Attribute detail

<a id="ExternalData.meter"></a>

### ExternalData.meter *= 0*

<a id="ExternalData.centimeter"></a>

### ExternalData.centimeter *= 1*

<a id="ExternalData.foot"></a>

### ExternalData.foot *= 2*

<a id="ExternalData.inch"></a>

### ExternalData.inch *= 3*

<a id="ExternalData.millimeter"></a>

### ExternalData.millimeter *= 4*

<a id="ExternalData.micrometer"></a>

### ExternalData.micrometer *= 5*

<a id="ExternalData.ImportFormat"></a>

### *class* ExternalData.ImportFormat

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies how to interpret the variable data source.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|------------------------------------------|----|
| [`Delimited`](#ExternalData.Delimited)   |    |
| [`FixedWidth`](#ExternalData.FixedWidth) |    |
| [`MAPDL`](#ExternalData.MAPDL)           |    |
| [`AXDT`](#ExternalData.AXDT)             |    |
| [`ECAD`](#ExternalData.ECAD)             |    |
| [`ICEPAK`](#ExternalData.ICEPAK)         |    |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData import ImportFormat
```

<a id="id2"></a>

## Attribute detail

<a id="ExternalData.Delimited"></a>

### ExternalData.Delimited *= 0*

<a id="ExternalData.FixedWidth"></a>

### ExternalData.FixedWidth *= 1*

<a id="ExternalData.MAPDL"></a>

### ExternalData.MAPDL *= 2*

<a id="ExternalData.AXDT"></a>

### ExternalData.AXDT *= 3*

<a id="ExternalData.ECAD"></a>

### ExternalData.ECAD *= 4*

<a id="ExternalData.ICEPAK"></a>

### ExternalData.ICEPAK *= 5*

<a id="ExternalData.VariableType"></a>

### *class* ExternalData.VariableType

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> An enumeration of the different variable types supported by the tabular data

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|---------------------------------------------------------------------------------------------------------|----|
| [`XCoordinate`](#ExternalData.XCoordinate)                                                              |    |
| [`YCoordinate`](#ExternalData.YCoordinate)                                                              |    |
| [`ZCoordinate`](#ExternalData.ZCoordinate)                                                              |    |
| [`NodeId`](#ExternalData.NodeId)                                                                        |    |
| [`ElementId`](#ExternalData.ElementId)                                                                  |    |
| [`Temperature`](../../../../ACT/Automation/Mechanical/BoundaryConditions/Temperature.md#Temperature)    |    |
| [`Pressure`](../../../../ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure)             |    |
| [`HeatTransferCoefficient`](#ExternalData.HeatTransferCoefficient)                                      |    |
| [`HeatFlux`](../../../../ACT/Automation/Mechanical/BoundaryConditions/HeatFlux.md#HeatFlux)             |    |
| [`HeatGeneration`](#ExternalData.HeatGeneration)                                                        |    |
| [`HeatRate`](#ExternalData.HeatRate)                                                                    |    |
| [`Thickness`](../../../../ACT/Automation/Mechanical/Thickness.md#Thickness)                             |    |
| [`Displacement`](../../../../ACT/Automation/Mechanical/BoundaryConditions/Displacement.md#Displacement) |    |
| [`Force`](../../../../ACT/Automation/Mechanical/BoundaryConditions/Force.md#Force)                      |    |
| [`Velocity`](../../../../ACT/Automation/Mechanical/BoundaryConditions/Velocity.md#Velocity)             |    |
| [`Stress`](#ExternalData.Stress)                                                                        |    |
| [`Strain`](#ExternalData.Strain)                                                                        |    |
| [`BodyForceDensity`](#ExternalData.BodyForceDensity)                                                    |    |
| [`OrientationAngle`](#ExternalData.OrientationAngle)                                                    |    |
| [`UserField`](#ExternalData.UserField)                                                                  |    |

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData import VariableType
```

<a id="id4"></a>

## Attribute detail

<a id="ExternalData.XCoordinate"></a>

### ExternalData.XCoordinate *= 0*

<a id="ExternalData.YCoordinate"></a>

### ExternalData.YCoordinate *= 1*

<a id="ExternalData.ZCoordinate"></a>

### ExternalData.ZCoordinate *= 2*

<a id="ExternalData.NodeId"></a>

### ExternalData.NodeId *= 3*

<a id="ExternalData.ElementId"></a>

### ExternalData.ElementId *= 4*

<a id="ExternalData.Temperature"></a>

### ExternalData.Temperature *= 5*

<a id="ExternalData.Pressure"></a>

### ExternalData.Pressure *= 6*

<a id="ExternalData.HeatTransferCoefficient"></a>

### ExternalData.HeatTransferCoefficient *= 7*

<a id="ExternalData.HeatFlux"></a>

### ExternalData.HeatFlux *= 8*

<a id="ExternalData.HeatGeneration"></a>

### ExternalData.HeatGeneration *= 9*

<a id="ExternalData.HeatRate"></a>

### ExternalData.HeatRate *= 10*

<a id="ExternalData.Thickness"></a>

### ExternalData.Thickness *= 11*

<a id="ExternalData.Displacement"></a>

### ExternalData.Displacement *= 12*

<a id="ExternalData.Force"></a>

### ExternalData.Force *= 13*

<a id="ExternalData.Velocity"></a>

### ExternalData.Velocity *= 14*

<a id="ExternalData.Stress"></a>

### ExternalData.Stress *= 15*

<a id="ExternalData.Strain"></a>

### ExternalData.Strain *= 16*

<a id="ExternalData.BodyForceDensity"></a>

### ExternalData.BodyForceDensity *= 17*

<a id="ExternalData.OrientationAngle"></a>

### ExternalData.OrientationAngle *= 18*

<a id="ExternalData.UserField"></a>

### ExternalData.UserField *= 19*
