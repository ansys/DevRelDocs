# `ImportedObject`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ImportedObject"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedObject

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a row object in Imported Objects.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| [`GetPropertyNames`](#ImportedObject.GetPropertyNames)                 | This method gives the complete list of property names that are supported.   |
| [`GetPropertyValueAsString`](#ImportedObject.GetPropertyValueAsString) | Data in string format that is present on the columns                        |
| [`SetPropertyValue`](#ImportedObject.SetPropertyValue)                 | Set the data for a give property name                                       |

### Properties

| Name | Description |
|----------------------------------------------------|--------------------------------------------------------------|
| [`Active`](#ImportedObject.Active)                 | This property sets the object to active or inactive status   |
| [`InternalObject`](#ImportedObject.InternalObject) | Gets the internal object. For advanced usage only.           |

<a id="property-detail"></a>

## Property detail

<a id="ImportedObject.Active"></a>

### *property* ImportedObject.Active *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

This property sets the object to active or inactive status

<!-- !! processed by numpydoc !! -->

<a id="ImportedObject.InternalObject"></a>

### *property* ImportedObject.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSWorksheetRowDataAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedObject.GetPropertyNames"></a>

### ImportedObject.GetPropertyNames()

This method gives the complete list of property names that are supported.

<!-- !! processed by numpydoc !! -->

<a id="ImportedObject.GetPropertyValueAsString"></a>

### ImportedObject.GetPropertyValueAsString(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Data in string format that is present on the columns

<!-- !! processed by numpydoc !! -->

<a id="ImportedObject.SetPropertyValue"></a>

### ImportedObject.SetPropertyValue(name: [str](https://docs.python.org/3/library/stdtypes.html#str), value: Any)

Set the data for a give property name

<!-- !! processed by numpydoc !! -->

