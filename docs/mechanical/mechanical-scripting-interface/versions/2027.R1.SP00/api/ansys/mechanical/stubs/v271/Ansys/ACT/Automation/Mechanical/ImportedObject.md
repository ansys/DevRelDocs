# `ImportedObject`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedObject(obj: Any, externalModelDataCollObj: [Ansys.ACT.Automation.Mechanical.ExternalModelDataColl](ExternalModelDataColl.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ExternalModelDataColl))

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a row object in Imported Objects.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`GetPromotedObject`](#ImportedObject.GetPromotedObject)               | Get the promoted row object                                               |
| [`GetPropertyNames`](#ImportedObject.GetPropertyNames)                 | This method gives the complete list of property names that are supported. |
| [`GetPropertyValue`](#ImportedObject.GetPropertyValue)                 | Get the data for a given property name                                    |
| [`GetPropertyValueAsString`](#ImportedObject.GetPropertyValueAsString) | Data in string format that is present on the columns                      |
| [`SetPropertyValue`](#ImportedObject.SetPropertyValue)                 | Set the data for a given property name                                    |

### Properties

| Name | Description |
|--------------------------------------------------------|-------------------------------------------------------------------|
| [`Active`](#ImportedObject.Active)                     | This property sets the object to active or inactive status        |
| [`InternalObject`](#ImportedObject.InternalObject)     | Gets the internal object. For advanced usage only.                |
| [`ParentCollection`](#ImportedObject.ParentCollection) | Returns the collection to which the imported object belongs.      |
| [`Row`](#ImportedObject.Row)                           | Returns the index of an imported object in the parent collection. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedObject.Active"></a>

### *property* ImportedObject.Active *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property sets the object to active or inactive status

<!-- !! processed by numpydoc !! -->

<a id="ImportedObject.InternalObject"></a>

### *property* ImportedObject.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSWorksheetRowDataAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedObject.ParentCollection"></a>

### *property* ImportedObject.ParentCollection *: [Ansys.ACT.Automation.Mechanical.ExternalModelDataColl](ExternalModelDataColl.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ExternalModelDataColl) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the collection to which the imported object belongs.

<!-- !! processed by numpydoc !! -->

<a id="ImportedObject.Row"></a>

### *property* ImportedObject.Row *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the index of an imported object in the parent collection.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedObject.GetPromotedObject"></a>

### ImportedObject.GetPromotedObject(oPromoteOption: Any) → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Get the promoted row object

<!-- !! processed by numpydoc !! -->

<a id="ImportedObject.GetPropertyNames"></a>

### ImportedObject.GetPropertyNames() → Iterable[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

This method gives the complete list of property names that are supported.

<!-- !! processed by numpydoc !! -->

<a id="ImportedObject.GetPropertyValue"></a>

### ImportedObject.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

Get the data for a given property name

<!-- !! processed by numpydoc !! -->

<a id="ImportedObject.GetPropertyValueAsString"></a>

### ImportedObject.GetPropertyValueAsString(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Data in string format that is present on the columns

<!-- !! processed by numpydoc !! -->

<a id="ImportedObject.SetPropertyValue"></a>

### ImportedObject.SetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set the data for a given property name

<!-- !! processed by numpydoc !! -->

