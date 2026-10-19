# `ColumnarDataImportDefinition`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.Table.ColumnarDataImportDefinition"></a>

#### *class* Ansys.Mechanical.Table.ColumnarDataImportDefinition(index: [int](https://docs.python.org/3/builtins/functions.html#int), variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../DataModel/MechanicalEnums/Table/VariableType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../DataModel/MechanicalEnums/Table/VariableClassification.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification), unit: [str](https://docs.python.org/3/builtins/stdtypes.html#str), name: [str](https://docs.python.org/3/builtins/stdtypes.html#str))

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

A simple class to hold the import definitions for how a column from a data source in
columnar format should be processed.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|------------------------------------------------------------------------------------------------------|-------------------------------------------|
| [`GenerateFromComImportDefinition`](#ColumnarDataImportDefinition.GenerateFromComImportDefinition)   | GenerateFromComImportDefinition method.   |
| [`SaveAsComImportDefinition`](#ColumnarDataImportDefinition.SaveAsComImportDefinition)               | SaveAsComImportDefinition method.         |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`Index`](#ColumnarDataImportDefinition.Index)                                   | Gets or sets the specified data source column index from which this variable will be   |
| [`InternalVariableType`](#ColumnarDataImportDefinition.InternalVariableType)     | InternalVariableType property.                                                         |
| [`Name`](#ColumnarDataImportDefinition.Name)                                     | Gets or sets an identifier for the data source column.                                 |
| [`Unit`](#ColumnarDataImportDefinition.Unit)                                     | Gets or sets the unit of the column.                                                   |
| [`VariableClassification`](#ColumnarDataImportDefinition.VariableClassification) | Gets or sets the variable classification of the column.                                |
| [`VariableType`](#ColumnarDataImportDefinition.VariableType)                     | Gets or sets the variable type of the column.                                          |

<a id="property-detail"></a>

## Property detail

<a id="ColumnarDataImportDefinition.Index"></a>

### *property* ColumnarDataImportDefinition.Index *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the specified data source column index from which this variable will be
imported.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataImportDefinition.InternalVariableType"></a>

### *property* ColumnarDataImportDefinition.InternalVariableType *: Ansys.Mechanical.DataModel.MechanicalEnums.Table.InternalVariableType | [None](https://docs.python.org/3/builtins/constants.html#None)*

InternalVariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataImportDefinition.Name"></a>

### *property* ColumnarDataImportDefinition.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets an identifier for the data source column.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataImportDefinition.Unit"></a>

### *property* ColumnarDataImportDefinition.Unit *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the unit of the column.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataImportDefinition.VariableClassification"></a>

### *property* ColumnarDataImportDefinition.VariableClassification *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../DataModel/MechanicalEnums/Table/VariableClassification.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the variable classification of the column.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataImportDefinition.VariableType"></a>

### *property* ColumnarDataImportDefinition.VariableType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../DataModel/MechanicalEnums/Table/VariableType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the variable type of the column.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ColumnarDataImportDefinition.GenerateFromComImportDefinition"></a>

### *classmethod* ColumnarDataImportDefinition.GenerateFromComImportDefinition(comImportDefinition: Ansys.Common.Interop.AnsStdObjects.DSTableImportSettingsColumnarDataImportDefinition) → [Ansys.Mechanical.Table.ColumnarDataImportDefinition](#ansys.mechanical.stubs.v271.Ansys.Mechanical.Table.ColumnarDataImportDefinition)

GenerateFromComImportDefinition method.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataImportDefinition.SaveAsComImportDefinition"></a>

### *classmethod* ColumnarDataImportDefinition.SaveAsComImportDefinition(importDefinition: [Ansys.Mechanical.Table.ColumnarDataImportDefinition](#ansys.mechanical.stubs.v271.Ansys.Mechanical.Table.ColumnarDataImportDefinition)) → Ansys.Common.Interop.AnsStdObjects.DSTableImportSettingsColumnarDataImportDefinition

SaveAsComImportDefinition method.

<!-- !! processed by numpydoc !! -->

