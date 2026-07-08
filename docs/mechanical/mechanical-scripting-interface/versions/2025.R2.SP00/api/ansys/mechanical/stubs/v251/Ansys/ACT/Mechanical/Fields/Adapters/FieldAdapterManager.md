# `FieldAdapterManager`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Adapters.FieldAdapterManager"></a>

#### *class* Ansys.ACT.Mechanical.Fields.Adapters.FieldAdapterManager

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Static class that operates like a factory to create field adapters from Mechanical objects.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|-------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| [`RegisterNewAdapter`](#FieldAdapterManager.RegisterNewAdapter)   | Register the instance object that defines a type of field adapter.                  |
| [`UnregisterAdapter`](#FieldAdapterManager.UnregisterAdapter)     | Removes the instance object that defines a type of field adapter from this manager. |

### Properties

| Name | Description |
|-------------------------------------------------------------------|----------------------------------------------------|
| [`AdapterDefinitions`](#FieldAdapterManager.AdapterDefinitions)   | Gets the collection of adapters in this manager.   |

<a id="property-detail"></a>

## Property detail

<a id="FieldAdapterManager.AdapterDefinitions"></a>

### *property* FieldAdapterManager.AdapterDefinitions *: List[Ansys.ACT.Mechanical.Fields.Adapters.FieldAdapter.IDefinition] | [None](https://docs.python.org/3/library/constants.html#None)*

* **Classmethod:**

Gets the collection of adapters in this manager.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FieldAdapterManager.RegisterNewAdapter"></a>

### *classmethod* FieldAdapterManager.RegisterNewAdapter(definition: Ansys.ACT.Mechanical.Fields.Adapters.FieldAdapter.IDefinition)

Register the instance object that defines a type of field adapter.

<!-- !! processed by numpydoc !! -->

<a id="FieldAdapterManager.UnregisterAdapter"></a>

### *classmethod* FieldAdapterManager.UnregisterAdapter(index: [int](https://docs.python.org/3/library/functions.html#int))

Removes the instance object that defines a type of field adapter from this manager.

<!-- !! processed by numpydoc !! -->

