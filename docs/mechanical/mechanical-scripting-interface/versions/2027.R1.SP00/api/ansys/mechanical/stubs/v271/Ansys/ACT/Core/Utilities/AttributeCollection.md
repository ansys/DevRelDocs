# `AttributeCollection`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Core.Utilities.AttributeCollection"></a>

#### *class* Ansys.ACT.Core.Utilities.AttributeCollection

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

A collection of attributes.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`Clone`](#AttributeCollection.Clone)                                             | Create a clone of the currection collection.                               |
| [`Contains`](#AttributeCollection.Contains)                                       | Check if the collection contains an attribute.                             |
| [`FillDynamicAttributes`](#AttributeCollection.FillDynamicAttributes)             | Fill the dynamic attributes of the collection with the given               |
| [`FillStaticAttributesFromXml`](#AttributeCollection.FillStaticAttributesFromXml) | Fill the static attributes of the collection with the given XmlNode.       |
| [`GetEnumerator`](#AttributeCollection.GetEnumerator)                             | GetEnumerator method.                                                      |
| [`GetObjectData`](#AttributeCollection.GetObjectData)                             | GetObjectData method.                                                      |
| [`GetStringValue`](#AttributeCollection.GetStringValue)                           | Gets an attribute value by its name.                                       |
| [`GetValue`](#AttributeCollection.GetValue)                                       | Gets an attribute value by its name.                                       |
| [`PostDeserialization`](#AttributeCollection.PostDeserialization)                 | PostDeserialization method.                                                |
| [`Remove`](#AttributeCollection.Remove)                                           | Remove an attribute. The attribute cannot be removed if it was declared as |
| [`SetValue`](#AttributeCollection.SetValue)                                       | Set an attribute value.                                                    |

### Properties

| Name | Description |
|---------------------------------------|---------------------------------------------------|
| [`Item`](#AttributeCollection.Item)   | Item property.                                    |
| [`Keys`](#AttributeCollection.Keys)   | The list of the available keys in the collection. |

<a id="property-detail"></a>

## Property detail

<a id="AttributeCollection.Item"></a>

### *property* AttributeCollection.Item *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="AttributeCollection.Keys"></a>

### *property* AttributeCollection.Keys *: System.Collections.Generic.ICollection[[str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

The list of the available keys in the collection.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AttributeCollection.Clone"></a>

### AttributeCollection.Clone() → [Ansys.ACT.Core.Utilities.AttributeCollection](#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Utilities.AttributeCollection)

Create a clone of the currection collection.

<!-- !! processed by numpydoc !! -->

<a id="AttributeCollection.Contains"></a>

### AttributeCollection.Contains(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Check if the collection contains an attribute.

<!-- !! processed by numpydoc !! -->

<a id="AttributeCollection.FillDynamicAttributes"></a>

### AttributeCollection.FillDynamicAttributes(other: [Ansys.ACT.Core.Utilities.AttributeCollection](#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Utilities.AttributeCollection)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Fill the dynamic attributes of the collection with the given
AttributeCollection.
```

<!-- !! processed by numpydoc !! -->

<a id="AttributeCollection.FillStaticAttributesFromXml"></a>

### AttributeCollection.FillStaticAttributesFromXml(dataModel: Ansys.ACT.Core.XmlDataModel.Attributes) → [None](https://docs.python.org/3/builtins/constants.html#None)

Fill the static attributes of the collection with the given XmlNode.

<!-- !! processed by numpydoc !! -->

<a id="AttributeCollection.GetEnumerator"></a>

### AttributeCollection.GetEnumerator() → Iterator[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict)[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="AttributeCollection.GetObjectData"></a>

### AttributeCollection.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AttributeCollection.GetStringValue"></a>

### AttributeCollection.GetStringValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Gets an attribute value by its name.

<!-- !! processed by numpydoc !! -->

<a id="AttributeCollection.GetValue"></a>

### AttributeCollection.GetValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), defaultValue: Any) → Any

### AttributeCollection.GetValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

Gets an attribute value by its name.

<!-- !! processed by numpydoc !! -->

<a id="AttributeCollection.PostDeserialization"></a>

### AttributeCollection.PostDeserialization() → [None](https://docs.python.org/3/builtins/constants.html#None)

PostDeserialization method.

<!-- !! processed by numpydoc !! -->

<a id="AttributeCollection.Remove"></a>

### AttributeCollection.Remove(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

```text
Remove an attribute. The attribute cannot be removed if it was declared as
static attribute.
```

<!-- !! processed by numpydoc !! -->

<a id="AttributeCollection.SetValue"></a>

### AttributeCollection.SetValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set an attribute value.

<!-- !! processed by numpydoc !! -->

