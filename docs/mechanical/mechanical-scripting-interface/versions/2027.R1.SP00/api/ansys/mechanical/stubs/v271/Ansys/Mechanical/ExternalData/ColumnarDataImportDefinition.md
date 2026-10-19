# `ColumnarDataImportDefinition`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition"></a>

#### *class* Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition(index: [int](https://docs.python.org/3/builtins/functions.html#int), variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType](../DataModel/MechanicalEnums/ExternalData/VariableType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType), unit: [str](https://docs.python.org/3/builtins/stdtypes.html#str), name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), userFieldVariable: [str](https://docs.python.org/3/builtins/stdtypes.html#str))

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

A simple class to hold the import definitions for how a column from a data source in
columnar format should be processed.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`Index`](#ColumnarDataImportDefinition.Index)               | Gets or sets the specified data source column index from which this variable will be   |
| [`Name`](#ColumnarDataImportDefinition.Name)                 | Gets or sets an identifier for the data source column.                                 |
| [`Unit`](#ColumnarDataImportDefinition.Unit)                 | Gets or sets the unit of the column.                                                   |
| [`UserFieldVariable`](#ColumnarDataImportDefinition.UserFieldVariable)                               | Gets or sets the user field variable type as a string for the column.                  |
| [`VariableType`](#ColumnarDataImportDefinition.VariableType) | Gets or sets the variable type of the column.                                          |

<a id="property-detail"></a>

## Property detail

<a id="ColumnarDataImportDefinition.Index"></a>

### *property* ColumnarDataImportDefinition.Index *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the specified data source column index from which this variable will be
imported.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataImportDefinition.Name"></a>

### *property* ColumnarDataImportDefinition.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets an identifier for the data source column.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataImportDefinition.Unit"></a>

### *property* ColumnarDataImportDefinition.Unit *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the unit of the column.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataImportDefinition.UserFieldVariable"></a>

### *property* ColumnarDataImportDefinition.UserFieldVariable *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the user field variable type as a string for the column.

This property is only used when VariableType is UserField.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataImportDefinition.VariableType"></a>

### *property* ColumnarDataImportDefinition.VariableType *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType](../DataModel/MechanicalEnums/ExternalData/VariableType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the variable type of the column.

<!-- !! processed by numpydoc !! -->

