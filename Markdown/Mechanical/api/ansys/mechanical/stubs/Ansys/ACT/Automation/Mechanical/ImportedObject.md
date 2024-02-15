# ImportedObject

### *class* ImportedObject

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a row object in Imported Objects.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetPropertyValueAsString`](#ImportedObject.GetPropertyValueAsString)   | Data in string format that is present on the columns                      |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`SetPropertyValue`](#ImportedObject.SetPropertyValue)                   | Set the data for a give property name                                     |
| [`GetPropertyNames`](#ImportedObject.GetPropertyNames)                   | This method gives the complete list of property names that are supported. |

### Properties

| [`InternalObject`](#ImportedObject.InternalObject)   | Gets the internal object. For advanced usage only.         |
|------------------------------------------------------|------------------------------------------------------------|
| [`Active`](#ImportedObject.Active)                   | This property sets the object to active or inactive status |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ImportedObject
```

## Property detail

### *property* ImportedObject.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSWorksheetRowDataAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedObject.Active *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

This property sets the object to active or inactive status

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedObject.GetPropertyValueAsString(name: System.String)

Data in string format that is present on the columns

<!-- !! processed by numpydoc !! -->

### ImportedObject.SetPropertyValue(name: System.String, value: System.Object)

Set the data for a give property name

<!-- !! processed by numpydoc !! -->

### ImportedObject.GetPropertyNames()

This method gives the complete list of property names that are supported.

<!-- !! processed by numpydoc !! -->
