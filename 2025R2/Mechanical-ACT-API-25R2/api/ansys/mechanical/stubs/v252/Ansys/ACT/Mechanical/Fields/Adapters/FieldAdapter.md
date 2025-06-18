# `FieldAdapter`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Adapters.FieldAdapter"></a>

#### *class* Ansys.ACT.Mechanical.Fields.Adapters.FieldAdapter

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Base class for objects that handle the interface between the generic boundary condition wrapper and the various types of concrete object implemented in Mechanical.

<!-- !! processed by numpydoc !! -->

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

<a id="property-detail"></a>

## Property detail

<a id="FieldAdapter.FieldProvider"></a>

### *property* FieldAdapter.FieldProvider *: Ansys.Common.Interop.DSObjects.IDSBCInformation | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the wrapped object from Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FieldAdapter.ChangeFieldDefinitionType"></a>

### FieldAdapter.ChangeFieldDefinitionType(fieldType: Ansys.Common.Interop.CAERepObjects.AnsBCLVType, newType: Ansys.Common.Interop.AnsMaterial.kEDDataType) → [None](https://docs.python.org/3/library/constants.html#None)

Changes the definition type for a field of the wrapped object from Mechanical.

<!-- !! processed by numpydoc !! -->

