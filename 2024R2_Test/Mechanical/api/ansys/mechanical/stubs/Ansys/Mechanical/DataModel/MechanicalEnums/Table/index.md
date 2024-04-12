<a id="module-ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.Table"></a>

<a id="the-table-package"></a>

# The `Table` package

<a id="summary"></a>

## Summary

### Enums

| Name | Summary |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`ImportFormat`](ImportFormat.md#ImportFormat)                               | Specifies how to interpret the variable data source.                                  |
| [`VariableClassification`](VariableClassification.md#VariableClassification) | This enum represents the classification of variables that can be represented by Table |
| [`VariableType`](VariableType.md#VariableType)                               | An enumeration of the different variable types supported by the tabular data          |

<a id="description"></a>

## Description

Table subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Table.ImportFormat"></a>

### *class* Table.ImportFormat

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies how to interpret the variable data source.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|-----------------------------------|----|
| [`Delimited`](#Table.Delimited)   |    |
| [`FixedWidth`](#Table.FixedWidth) |    |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.Table import ImportFormat
```

<a id="attribute-detail"></a>

## Attribute detail

<a id="Table.Delimited"></a>

### Table.Delimited *= 1*

<a id="Table.FixedWidth"></a>

### Table.FixedWidth *= 2*

<a id="Table.VariableClassification"></a>

### *class* Table.VariableClassification

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> This enum represents the classification of variables that can be represented by Table
> variables/columns. It directly correlates to the IDL-defined enum

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|---------------------------------------|----|
| [`Independent`](#Table.Independent)   |    |
| [`Real`](#Table.Real)                 |    |
| [`Real_i`](#Table.Real_i)             |    |
| [`Real_j`](#Table.Real_j)             |    |
| [`Real_k`](#Table.Real_k)             |    |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.Table import VariableClassification
```

<a id="id2"></a>

## Attribute detail

<a id="Table.Independent"></a>

### Table.Independent *= 1*

<a id="Table.Real"></a>

### Table.Real *= 2*

<a id="Table.Real_i"></a>

### Table.Real_i *= 201*

<a id="Table.Real_j"></a>

### Table.Real_j *= 202*

<a id="Table.Real_k"></a>

### Table.Real_k *= 203*

<a id="Table.VariableType"></a>

### *class* Table.VariableType

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> An enumeration of the different variable types supported by the tabular data

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|------------------------------------------------------------------------------------------------------|----|
| [`ID`](#Table.ID)                                                                                    |    |
| [`Pressure`](../../../../ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure)          |    |
| [`Temperature`](../../../../ACT/Automation/Mechanical/BoundaryConditions/Temperature.md#Temperature) |    |
| [`ThetaCoordinate`](#Table.ThetaCoordinate)                                                          |    |
| [`Time`](#Table.Time)                                                                                |    |
| [`XCoordinate`](#Table.XCoordinate)                                                                  |    |
| [`YCoordinate`](#Table.YCoordinate)                                                                  |    |
| [`ZCoordinate`](#Table.ZCoordinate)                                                                  |    |

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.Table import VariableType
```

<a id="id4"></a>

## Attribute detail

<a id="Table.ID"></a>

### Table.ID *= 3*

<a id="Table.Pressure"></a>

### Table.Pressure *= 4*

<a id="Table.Temperature"></a>

### Table.Temperature *= 6*

<a id="Table.ThetaCoordinate"></a>

### Table.ThetaCoordinate *= 7*

<a id="Table.Time"></a>

### Table.Time *= 8*

<a id="Table.XCoordinate"></a>

### Table.XCoordinate *= 9*

<a id="Table.YCoordinate"></a>

### Table.YCoordinate *= 10*

<a id="Table.ZCoordinate"></a>

### Table.ZCoordinate *= 11*
