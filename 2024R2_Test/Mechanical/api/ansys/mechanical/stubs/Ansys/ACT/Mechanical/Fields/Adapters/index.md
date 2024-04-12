<a id="module-ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters"></a>

<a id="the-adapters-package"></a>

# The `Adapters` package

<a id="summary"></a>

## Summary

### Interfaces

| Name | Summary |
|-----------------------------------------------|--------------------------|
| [`IDefinition`](IDefinition.md#IDefinition)   | IDefinition interface.   |

### Classes

| Name | Summary |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AAPCustomLoadAdapter`](AAPCustomLoadAdapter.md#AAPCustomLoadAdapter)          | AAPCustomLoadAdapter class.                                                                                                                                         |
| [`DSThicknessAdapter`](DSThicknessAdapter.md#DSThicknessAdapter)                | Adapter dedicated to IDSThicknessAuto objects.                                                                                                                      |
| [`DSTopoConstraintAdapter`](DSTopoConstraintAdapter.md#DSTopoConstraintAdapter) | Adapter dedicated to IDSRSLoad objects.                                                                                                                             |
| [`DSPSDLoadAdapter`](DSPSDLoadAdapter.md#DSPSDLoadAdapter)                      | Adapter dedicated to IDSRSLoad objects.                                                                                                                             |
| [`DSRSLoadAdapter`](DSRSLoadAdapter.md#DSRSLoadAdapter)                         | Adapter dedicated to IDSRSLoad objects.                                                                                                                             |
| [`DSBoltPretensionAdapter`](DSBoltPretensionAdapter.md#DSBoltPretensionAdapter) | Adapter dedicated to IDSBoltPretensionAuto objects.                                                                                                                 |
| [`DSJointLoadAdapter`](DSJointLoadAdapter.md#DSJointLoadAdapter)                | Adapter dedicated to IDSJointConditionAuto objects.                                                                                                                 |
| [`DSRotationAdapter`](DSRotationAdapter.md#DSRotationAdapter)                   | Adapter dedicated to IDSRotationAuto objects.                                                                                                                       |
| [`DSAccelerationAdapter`](DSAccelerationAdapter.md#DSAccelerationAdapter)       | Adapter dedicated to IDSAccelerationAuto objects.                                                                                                                   |
| [`DSBearingAdapter`](DSBearingAdapter.md#DSBearingAdapter)                      | Adapter dedicated to IDSBearingAuto objects.                                                                                                                        |
| [`DSLoadAdapter`](DSLoadAdapter.md#DSLoadAdapter)                               | Adapter dedicated to IDSLoadAuto objects.                                                                                                                           |
| [`DSSpringAdapter`](DSSpringAdapter.md#DSSpringAdapter)                         | Adapter dedicated to IDSSpringAuto objects.                                                                                                                         |
| [`FieldAdapter`](FieldAdapter.md#FieldAdapter)                                  | Base class for objects that handle the interface between the generic boundary condition wrapper and the various types of concrete object implemented in Mechanical. |
| [`FieldAdapterManager`](FieldAdapterManager.md#FieldAdapterManager)             | Static class that operates like a factory to create field adapters from Mechanical objects.                                                                         |
| [`Keywords`](Keywords.md#Keywords)                                              | Keywords class.                                                                                                                                                     |

<a id="description"></a>

## Description

Adapters subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Adapters.AAPCustomLoadAdapter"></a>

### *class* Adapters.AAPCustomLoadAdapter

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> AAPCustomLoadAdapter class.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|----------------------------------------|-------------------------------------|
| [`ChangeFieldDefinitionType`](#id59)   | ChangeFieldDefinitionType method.   |

### Properties

| Name | Summary |
|----------------------------|--------------------------------------------|
| [`FieldProvider`](#id57)   | Gets the wrapped object from Mechanical.   |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters import AAPCustomLoadAdapter
```

<a id="property-detail"></a>

## Property detail

<a id="Adapters.FieldProvider"></a>

### *property* Adapters.FieldProvider *: Ansys.Common.Interop.DSObjects.IDSBCInformation | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the wrapped object from Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Adapters.ChangeFieldDefinitionType"></a>

### Adapters.ChangeFieldDefinitionType(fieldType: Ansys.Common.Interop.CAERepObjects.AnsBCLVType, newType: Ansys.Common.Interop.AnsMaterial.kEDDataType)

ChangeFieldDefinitionType method.

<!-- !! processed by numpydoc !! -->

<a id="Adapters.DSThicknessAdapter"></a>

### *class* Adapters.DSThicknessAdapter

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Adapter dedicated to IDSThicknessAuto objects.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|----------------------------------------|-------------------------------------|
| [`ChangeFieldDefinitionType`](#id59)   | ChangeFieldDefinitionType method.   |

### Properties

| Name | Summary |
|----------------------------|--------------------------------------------|
| [`FieldProvider`](#id57)   | Gets the wrapped object from Mechanical.   |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters import DSThicknessAdapter
```

<a id="id2"></a>

## Property detail

<a id="id0"></a>

### *property* Adapters.FieldProvider *: Ansys.Common.Interop.DSObjects.IDSBCInformation | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the wrapped object from Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="id3"></a>

## Method detail

<a id="id4"></a>

### Adapters.ChangeFieldDefinitionType(componentType: Ansys.Common.Interop.CAERepObjects.AnsBCLVType, newType: Ansys.Common.Interop.AnsMaterial.kEDDataType)

ChangeFieldDefinitionType method.

<!-- !! processed by numpydoc !! -->

<a id="Adapters.DSTopoConstraintAdapter"></a>

### *class* Adapters.DSTopoConstraintAdapter

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Adapter dedicated to IDSRSLoad objects.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|----------------------------------------|-------------------------------------|
| [`ChangeFieldDefinitionType`](#id59)   | ChangeFieldDefinitionType method.   |

### Properties

| Name | Summary |
|----------------------------|--------------------------------------------|
| [`FieldProvider`](#id57)   | Gets the wrapped object from Mechanical.   |

<a id="id5"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters import DSTopoConstraintAdapter
```

<a id="id6"></a>

## Property detail

<a id="id7"></a>

### *property* Adapters.FieldProvider *: Ansys.Common.Interop.DSObjects.IDSBCInformation | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the wrapped object from Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

## Method detail

<a id="id9"></a>

### Adapters.ChangeFieldDefinitionType(componentType: Ansys.Common.Interop.CAERepObjects.AnsBCLVType, newType: Ansys.Common.Interop.AnsMaterial.kEDDataType)

ChangeFieldDefinitionType method.

<!-- !! processed by numpydoc !! -->

<a id="Adapters.DSPSDLoadAdapter"></a>

### *class* Adapters.DSPSDLoadAdapter

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Adapter dedicated to IDSRSLoad objects.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|----------------------------------------|-------------------------------------|
| [`ChangeFieldDefinitionType`](#id59)   | ChangeFieldDefinitionType method.   |

### Properties

| Name | Summary |
|----------------------------|--------------------------------------------|
| [`FieldProvider`](#id57)   | Gets the wrapped object from Mechanical.   |

<a id="id10"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters import DSPSDLoadAdapter
```

<a id="id11"></a>

## Property detail

<a id="id12"></a>

### *property* Adapters.FieldProvider *: Ansys.Common.Interop.DSObjects.IDSBCInformation | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the wrapped object from Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

## Method detail

<a id="id14"></a>

### Adapters.ChangeFieldDefinitionType(componentType: Ansys.Common.Interop.CAERepObjects.AnsBCLVType, newType: Ansys.Common.Interop.AnsMaterial.kEDDataType)

ChangeFieldDefinitionType method.

<!-- !! processed by numpydoc !! -->

<a id="Adapters.DSRSLoadAdapter"></a>

### *class* Adapters.DSRSLoadAdapter

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Adapter dedicated to IDSRSLoad objects.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|----------------------------------------|-------------------------------------|
| [`ChangeFieldDefinitionType`](#id59)   | ChangeFieldDefinitionType method.   |

### Properties

| Name | Summary |
|----------------------------|--------------------------------------------|
| [`FieldProvider`](#id57)   | Gets the wrapped object from Mechanical.   |

<a id="id15"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters import DSRSLoadAdapter
```

<a id="id16"></a>

## Property detail

<a id="id17"></a>

### *property* Adapters.FieldProvider *: Ansys.Common.Interop.DSObjects.IDSBCInformation | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the wrapped object from Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

## Method detail

<a id="id19"></a>

### Adapters.ChangeFieldDefinitionType(componentType: Ansys.Common.Interop.CAERepObjects.AnsBCLVType, newType: Ansys.Common.Interop.AnsMaterial.kEDDataType)

ChangeFieldDefinitionType method.

<!-- !! processed by numpydoc !! -->

<a id="Adapters.DSBoltPretensionAdapter"></a>

### *class* Adapters.DSBoltPretensionAdapter

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Adapter dedicated to IDSBoltPretensionAuto objects.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|----------------------------------------|-------------------------------------|
| [`ChangeFieldDefinitionType`](#id59)   | ChangeFieldDefinitionType method.   |

### Properties

| Name | Summary |
|----------------------------|--------------------------------------------|
| [`FieldProvider`](#id57)   | Gets the wrapped object from Mechanical.   |

<a id="id20"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters import DSBoltPretensionAdapter
```

<a id="id21"></a>

## Property detail

<a id="id22"></a>

### *property* Adapters.FieldProvider *: Ansys.Common.Interop.DSObjects.IDSBCInformation | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the wrapped object from Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

## Method detail

<a id="id24"></a>

### Adapters.ChangeFieldDefinitionType(componentType: Ansys.Common.Interop.CAERepObjects.AnsBCLVType, newType: Ansys.Common.Interop.AnsMaterial.kEDDataType)

ChangeFieldDefinitionType method.

<!-- !! processed by numpydoc !! -->

<a id="Adapters.DSJointLoadAdapter"></a>

### *class* Adapters.DSJointLoadAdapter

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Adapter dedicated to IDSJointConditionAuto objects.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|----------------------------------------|-------------------------------------|
| [`ChangeFieldDefinitionType`](#id59)   | ChangeFieldDefinitionType method.   |

### Properties

| Name | Summary |
|----------------------------|--------------------------------------------|
| [`FieldProvider`](#id57)   | Gets the wrapped object from Mechanical.   |

<a id="id25"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters import DSJointLoadAdapter
```

<a id="id26"></a>

## Property detail

<a id="id27"></a>

### *property* Adapters.FieldProvider *: Ansys.Common.Interop.DSObjects.IDSBCInformation | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the wrapped object from Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

## Method detail

<a id="id29"></a>

### Adapters.ChangeFieldDefinitionType(componentType: Ansys.Common.Interop.CAERepObjects.AnsBCLVType, newType: Ansys.Common.Interop.AnsMaterial.kEDDataType)

ChangeFieldDefinitionType method.

<!-- !! processed by numpydoc !! -->

<a id="Adapters.DSRotationAdapter"></a>

### *class* Adapters.DSRotationAdapter

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Adapter dedicated to IDSRotationAuto objects.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|----------------------------------------|-------------------------------------|
| [`ChangeFieldDefinitionType`](#id59)   | ChangeFieldDefinitionType method.   |

### Properties

| Name | Summary |
|----------------------------|--------------------------------------------|
| [`FieldProvider`](#id57)   | Gets the wrapped object from Mechanical.   |

<a id="id30"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters import DSRotationAdapter
```

<a id="id31"></a>

## Property detail

<a id="id32"></a>

### *property* Adapters.FieldProvider *: Ansys.Common.Interop.DSObjects.IDSBCInformation | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the wrapped object from Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

## Method detail

<a id="id34"></a>

### Adapters.ChangeFieldDefinitionType(componentType: Ansys.Common.Interop.CAERepObjects.AnsBCLVType, newType: Ansys.Common.Interop.AnsMaterial.kEDDataType)

ChangeFieldDefinitionType method.

<!-- !! processed by numpydoc !! -->

<a id="Adapters.DSAccelerationAdapter"></a>

### *class* Adapters.DSAccelerationAdapter

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Adapter dedicated to IDSAccelerationAuto objects.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|----------------------------------------|-------------------------------------|
| [`ChangeFieldDefinitionType`](#id59)   | ChangeFieldDefinitionType method.   |

### Properties

| Name | Summary |
|----------------------------|--------------------------------------------|
| [`FieldProvider`](#id57)   | Gets the wrapped object from Mechanical.   |

<a id="id35"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters import DSAccelerationAdapter
```

<a id="id36"></a>

## Property detail

<a id="id37"></a>

### *property* Adapters.FieldProvider *: Ansys.Common.Interop.DSObjects.IDSBCInformation | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the wrapped object from Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

## Method detail

<a id="id39"></a>

### Adapters.ChangeFieldDefinitionType(componentType: Ansys.Common.Interop.CAERepObjects.AnsBCLVType, newType: Ansys.Common.Interop.AnsMaterial.kEDDataType)

ChangeFieldDefinitionType method.

<!-- !! processed by numpydoc !! -->

<a id="Adapters.DSBearingAdapter"></a>

### *class* Adapters.DSBearingAdapter

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Adapter dedicated to IDSBearingAuto objects.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|----------------------------------------|-------------------------------------|
| [`ChangeFieldDefinitionType`](#id59)   | ChangeFieldDefinitionType method.   |

### Properties

| Name | Summary |
|----------------------------|--------------------------------------------|
| [`FieldProvider`](#id57)   | Gets the wrapped object from Mechanical.   |

<a id="id40"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters import DSBearingAdapter
```

<a id="id41"></a>

## Property detail

<a id="id42"></a>

### *property* Adapters.FieldProvider *: Ansys.Common.Interop.DSObjects.IDSBCInformation | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the wrapped object from Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

## Method detail

<a id="id44"></a>

### Adapters.ChangeFieldDefinitionType(componentType: Ansys.Common.Interop.CAERepObjects.AnsBCLVType, newType: Ansys.Common.Interop.AnsMaterial.kEDDataType)

ChangeFieldDefinitionType method.

<!-- !! processed by numpydoc !! -->

<a id="Adapters.DSLoadAdapter"></a>

### *class* Adapters.DSLoadAdapter

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Adapter dedicated to IDSLoadAuto objects.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|----------------------------------------|-------------------------------------|
| [`ChangeFieldDefinitionType`](#id59)   | ChangeFieldDefinitionType method.   |

### Properties

| Name | Summary |
|----------------------------|--------------------------------------------|
| [`FieldProvider`](#id57)   | Gets the wrapped object from Mechanical.   |

<a id="id45"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters import DSLoadAdapter
```

<a id="id46"></a>

## Property detail

<a id="id47"></a>

### *property* Adapters.FieldProvider *: Ansys.Common.Interop.DSObjects.IDSBCInformation | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the wrapped object from Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

## Method detail

<a id="id49"></a>

### Adapters.ChangeFieldDefinitionType(componentType: Ansys.Common.Interop.CAERepObjects.AnsBCLVType, newType: Ansys.Common.Interop.AnsMaterial.kEDDataType)

ChangeFieldDefinitionType method.

<!-- !! processed by numpydoc !! -->

<a id="Adapters.DSSpringAdapter"></a>

### *class* Adapters.DSSpringAdapter

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Adapter dedicated to IDSSpringAuto objects.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|----------------------------------------|-------------------------------------|
| [`ChangeFieldDefinitionType`](#id59)   | ChangeFieldDefinitionType method.   |

### Properties

| Name | Summary |
|----------------------------|--------------------------------------------|
| [`FieldProvider`](#id57)   | Gets the wrapped object from Mechanical.   |

<a id="id50"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters import DSSpringAdapter
```

<a id="id51"></a>

## Property detail

<a id="id52"></a>

### *property* Adapters.FieldProvider *: Ansys.Common.Interop.DSObjects.IDSBCInformation | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the wrapped object from Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

## Method detail

<a id="id54"></a>

### Adapters.ChangeFieldDefinitionType(componentType: Ansys.Common.Interop.CAERepObjects.AnsBCLVType, newType: Ansys.Common.Interop.AnsMaterial.kEDDataType)

ChangeFieldDefinitionType method.

<!-- !! processed by numpydoc !! -->

<a id="Adapters.FieldAdapter"></a>

### *class* Adapters.FieldAdapter

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Base class for objects that handle the interface between the generic boundary condition wrapper and the various types of concrete object implemented in Mechanical.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|----------------------------------------|----------------------------------------------------------------------------------|
| [`ChangeFieldDefinitionType`](#id59)   | Changes the definition type for a field of the wrapped object from Mechanical.   |

### Properties

| Name | Summary |
|----------------------------|--------------------------------------------|
| [`FieldProvider`](#id57)   | Gets the wrapped object from Mechanical.   |

<a id="id55"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters import FieldAdapter
```

<a id="id56"></a>

## Property detail

<a id="id57"></a>

### *property* Adapters.FieldProvider *: Ansys.Common.Interop.DSObjects.IDSBCInformation | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the wrapped object from Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

## Method detail

<a id="id59"></a>

### Adapters.ChangeFieldDefinitionType(fieldType: Ansys.Common.Interop.CAERepObjects.AnsBCLVType, newType: Ansys.Common.Interop.AnsMaterial.kEDDataType)

Changes the definition type for a field of the wrapped object from Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="Adapters.FieldAdapterManager"></a>

### *class* Adapters.FieldAdapterManager

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Static class that operates like a factory to create field adapters from Mechanical objects.

> <!-- !! processed by numpydoc !! -->

### Constructors

| Name | Summary |
|--------------------------------------------------------|-------------------------------------------------------------------------------------|
| [`RegisterNewAdapter`](#Adapters.RegisterNewAdapter)   | Register the instance object that defines a type of field adapter.                  |
| [`UnregisterAdapter`](#Adapters.UnregisterAdapter)     | Removes the instance object that defines a type of field adapter from this manager. |

### Properties

| Name | Summary |
|--------------------------------------------------------|----------------------------------------------------|
| [`AdapterDefinitions`](#Adapters.AdapterDefinitions)   | Gets the collection of adapters in this manager.   |

<a id="id60"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters import FieldAdapterManager
```

<a id="id61"></a>

## Property detail

<a id="Adapters.AdapterDefinitions"></a>

### *property* Adapters.AdapterDefinitions *: System.Collections.Generic.IList[Ansys.ACT.Mechanical.Fields.Adapters.FieldAdapter.IDefinition] | [None](https://docs.python.org/3/library/constants.html#None)*

* **Classmethod:**

Gets the collection of adapters in this manager.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

## Method detail

<a id="Adapters.RegisterNewAdapter"></a>

### *classmethod* Adapters.RegisterNewAdapter(definition: Ansys.ACT.Mechanical.Fields.Adapters.FieldAdapter.IDefinition)

Register the instance object that defines a type of field adapter.

<!-- !! processed by numpydoc !! -->

<a id="Adapters.UnregisterAdapter"></a>

### *classmethod* Adapters.UnregisterAdapter(index: System.Int32)

Removes the instance object that defines a type of field adapter from this manager.

<!-- !! processed by numpydoc !! -->

<a id="Adapters.Keywords"></a>

### *class* Adapters.Keywords

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Keywords class.

> <!-- !! processed by numpydoc !! -->

### Constructors

| Name | Summary |
|--------------------------|---------------|
| [`Get`](#Adapters.Get)   | Get method.   |

<a id="id63"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters import Keywords
```

<a id="id64"></a>

## Method detail

<a id="Adapters.Get"></a>

### *classmethod* Adapters.Get(type: Ansys.Common.Interop.AnsMaterial.kEDDataType)

Get method.

<!-- !! processed by numpydoc !! -->

<a id="Adapters.IDefinition"></a>

### *class* Adapters.IDefinition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> IDefinition interface.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|------------------------------|---------------------------------------------------------------|
| [`Adapt`](#Adapters.Adapt)   | Creates an adapter for a given load object from Mechanical.   |

<a id="id65"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters import IDefinition
```

<a id="id66"></a>

## Method detail

<a id="Adapters.Adapt"></a>

### Adapters.Adapt(load: Ansys.Common.Interop.DSObjects.IDSBCInformation)

Creates an adapter for a given load object from Mechanical.

<!-- !! processed by numpydoc !! -->
