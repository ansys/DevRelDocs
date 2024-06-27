# FieldAdapter

<a id="FieldAdapter"></a>

### *class* FieldAdapter

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Base class for objects that handle the interface between the generic boundary condition wrapper and the various types of concrete object implemented in Mechanical.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`ChangeFieldDefinitionType`](#FieldAdapter.ChangeFieldDefinitionType)   | Changes the definition type for a field of the wrapped object from Mechanical.   |

### Properties

| Name | Description |
|--------------------------------------------------|--------------------------------------------|
| [`FieldProvider`](#FieldAdapter.FieldProvider)   | Gets the wrapped object from Mechanical.   |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters import FieldAdapter
```

<a id="property-detail"></a>

## Property detail

<a id="FieldAdapter.FieldProvider"></a>

### *property* FieldAdapter.FieldProvider *: Ansys.Common.Interop.DSObjects.IDSBCInformation | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the wrapped object from Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FieldAdapter.ChangeFieldDefinitionType"></a>

### FieldAdapter.ChangeFieldDefinitionType(fieldType: Ansys.Common.Interop.CAERepObjects.AnsBCLVType, newType: Ansys.Common.Interop.AnsMaterial.kEDDataType)

Changes the definition type for a field of the wrapped object from Mechanical.

<!-- !! processed by numpydoc !! -->
