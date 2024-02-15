# FieldAdapterManager

### *class* FieldAdapterManager

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Static class that operates like a factory to create field adapters from Mechanical objects.

> <!-- !! processed by numpydoc !! -->

## Overview

### Constructors

| [`RegisterNewAdapter`](#FieldAdapterManager.RegisterNewAdapter)   | Register the instance object that defines a type of field adapter.                  |
|-------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| [`UnregisterAdapter`](#FieldAdapterManager.UnregisterAdapter)     | Removes the instance object that defines a type of field adapter from this manager. |

### Properties

| [`AdapterDefinitions`](#FieldAdapterManager.AdapterDefinitions)   | Gets the collection of adapters in this manager.   |
|-------------------------------------------------------------------|----------------------------------------------------|

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters import FieldAdapterManager
```

## Property detail

### *property* FieldAdapterManager.AdapterDefinitions *: System.Collections.Generic.IList[Ansys.ACT.Mechanical.Fields.Adapters.FieldAdapter.IDefinition] | [None](https://docs.python.org/3/library/constants.html#None)*

* **Classmethod:**

Gets the collection of adapters in this manager.

<!-- !! processed by numpydoc !! -->

## Method detail

### *classmethod* FieldAdapterManager.RegisterNewAdapter(definition: Ansys.ACT.Mechanical.Fields.Adapters.FieldAdapter.IDefinition)

Register the instance object that defines a type of field adapter.

<!-- !! processed by numpydoc !! -->

### *classmethod* FieldAdapterManager.UnregisterAdapter(index: System.Int32)

Removes the instance object that defines a type of field adapter from this manager.

<!-- !! processed by numpydoc !! -->
