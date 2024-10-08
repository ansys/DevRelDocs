# `Column`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Column"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Column

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Column class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`Add`](#Column.Add)                               |                                                             |
| [`ChangeVariableType`](#Column.ChangeVariableType) | Contains the business logic for changing the variable type. |
| [`Clear`](#Column.Clear)                           |                                                             |
| [`Contains`](#Column.Contains)                     |                                                             |
| [`CopyTo`](#Column.CopyTo)                         |                                                             |
| [`GetEnumerator`](#Column.GetEnumerator)           |                                                             |
| [`IndexOf`](#Column.IndexOf)                       |                                                             |
| [`Insert`](#Column.Insert)                         |                                                             |
| [`Remove`](#Column.Remove)                         |                                                             |
| [`RemoveAt`](#Column.RemoveAt)                     |                                                             |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| [`Count`](#Column.Count)                                   | Count property.                  |
| [`DataType`](#Column.DataType)                             | DataType property.               |
| [`IsFixedSize`](#Column.IsFixedSize)                       | IsFixedSize property.            |
| [`IsIndependent`](#Column.IsIndependent)                   | IsIndependent property.          |
| [`IsReadOnly`](#Column.IsReadOnly)                         | IsReadOnly property.             |
| [`IsSynchronized`](#Column.IsSynchronized)                 | IsSynchronized property.         |
| [`Item`](#Column.Item)                                     | Item property.                   |
| [`Name`](#Column.Name)                                     | Name property.                   |
| [`QuantityName`](#Column.QuantityName)                     | QuantityName property.           |
| [`SyncRoot`](#Column.SyncRoot)                             | SyncRoot property.               |
| [`Unit`](#Column.Unit)                                     | Unit property.                   |
| [`Values`](#Column.Values)                                 | Values property.                 |
| [`VariableClassification`](#Column.VariableClassification) | VariableClassification property. |
| [`VariableType`](#Column.VariableType)                     | VariableType property.           |

<a id="property-detail"></a>

## Property detail

<a id="Column.Count"></a>

### *property* Column.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Count property.

<!-- !! processed by numpydoc !! -->

<a id="Column.DataType"></a>

### *property* Column.DataType *: System.Type | [None](https://docs.python.org/3/library/constants.html#None)*

DataType property.

<!-- !! processed by numpydoc !! -->

<a id="Column.IsFixedSize"></a>

### *property* Column.IsFixedSize *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IsFixedSize property.

<!-- !! processed by numpydoc !! -->

<a id="Column.IsIndependent"></a>

### *property* Column.IsIndependent *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IsIndependent property.

<!-- !! processed by numpydoc !! -->

<a id="Column.IsReadOnly"></a>

### *property* Column.IsReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IsReadOnly property.

<!-- !! processed by numpydoc !! -->

<a id="Column.IsSynchronized"></a>

### *property* Column.IsSynchronized *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IsSynchronized property.

<!-- !! processed by numpydoc !! -->

<a id="Column.Item"></a>

### *property* Column.Item *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="Column.Name"></a>

### *property* Column.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Column.QuantityName"></a>

### *property* Column.QuantityName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

QuantityName property.

<!-- !! processed by numpydoc !! -->

<a id="Column.SyncRoot"></a>

### *property* Column.SyncRoot *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

SyncRoot property.

<!-- !! processed by numpydoc !! -->

<a id="Column.Unit"></a>

### *property* Column.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Unit property.

<!-- !! processed by numpydoc !! -->

<a id="Column.Values"></a>

### *property* Column.Values *: System.Collections.ICollection | [None](https://docs.python.org/3/library/constants.html#None)*

Values property.

<!-- !! processed by numpydoc !! -->

<a id="Column.VariableClassification"></a>

### *property* Column.VariableClassification *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../../../../../v242/Ansys/Mechanical/DataModel/MechanicalEnums/Table/VariableClassification.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableClassification property.

<!-- !! processed by numpydoc !! -->

<a id="Column.VariableType"></a>

### *property* Column.VariableType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../../../../../v242/Ansys/Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Column.Add"></a>

### Column.Add(value: System.Object)

<a id="Column.ChangeVariableType"></a>

### Column.ChangeVariableType(newVariableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../../../../../v242/Ansys/Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType), newVariableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../../../../../v242/Ansys/Mechanical/DataModel/MechanicalEnums/Table/VariableClassification.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification), newUnit: System.String)

Contains the business logic for changing the variable type.

<!-- !! processed by numpydoc !! -->

<a id="Column.Clear"></a>

### Column.Clear()

<a id="Column.Contains"></a>

### Column.Contains(value: System.Object)

<a id="Column.CopyTo"></a>

### Column.CopyTo(array: System.Array, destinationStartIndex: System.Int32)

<a id="Column.GetEnumerator"></a>

### Column.GetEnumerator()

<a id="Column.IndexOf"></a>

### Column.IndexOf(value: System.Object)

<a id="Column.Insert"></a>

### Column.Insert(index: System.Int32, value: System.Object)

<a id="Column.Remove"></a>

### Column.Remove(value: System.Object)

<a id="Column.RemoveAt"></a>

### Column.RemoveAt(index: System.Int32)


