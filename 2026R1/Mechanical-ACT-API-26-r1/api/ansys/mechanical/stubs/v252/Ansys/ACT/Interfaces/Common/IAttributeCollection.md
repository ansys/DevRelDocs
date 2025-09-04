# `IAttributeCollection`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.IAttributeCollection"></a>

#### *class* Ansys.ACT.Interfaces.Common.IAttributeCollection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a collection of attributes.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------|---------------------------------------------------------------------------|
| [`Contains`](#IAttributeCollection.Contains)             | Checks if the collection contains the attribute identified by its name.   |
| [`GetStringValue`](#IAttributeCollection.GetStringValue) | Returns the string value of the attribute identified by its name.         |
| [`GetValue`](#IAttributeCollection.GetValue)             | Returns the value of the attribute identified by its name.                |
| [`Remove`](#IAttributeCollection.Remove)                 | Removes the attribute identified by its name.                             |
| [`SetValue`](#IAttributeCollection.SetValue)             | Sets the value of an attribute identified by its name.                    |

### Properties

| Name | Description |
|----------------------------------------|-----------------------------------|
| [`Item`](#IAttributeCollection.Item)   | Item property.                    |
| [`Keys`](#IAttributeCollection.Keys)   | Gets the list of attribute names. |

<a id="property-detail"></a>

## Property detail

<a id="IAttributeCollection.Item"></a>

### *property* IAttributeCollection.Item *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="IAttributeCollection.Keys"></a>

### *property* IAttributeCollection.Keys *: System.Collections.Generic.ICollection[[str](https://docs.python.org/3/library/stdtypes.html#str)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of attribute names.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="IAttributeCollection.Contains"></a>

### IAttributeCollection.Contains(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Checks if the collection contains the attribute identified by its name.

<!-- !! processed by numpydoc !! -->

<a id="IAttributeCollection.GetStringValue"></a>

### IAttributeCollection.GetStringValue(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

Returns the string value of the attribute identified by its name.

<!-- !! processed by numpydoc !! -->

<a id="IAttributeCollection.GetValue"></a>

### IAttributeCollection.GetValue(name: [str](https://docs.python.org/3/library/stdtypes.html#str), defaultValue: Any) → Any

Returns the value of the attribute identified by its name.

<!-- !! processed by numpydoc !! -->

<a id="IAttributeCollection.Remove"></a>

### IAttributeCollection.Remove(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Removes the attribute identified by its name.

<!-- !! processed by numpydoc !! -->

<a id="IAttributeCollection.SetValue"></a>

### IAttributeCollection.SetValue(name: [str](https://docs.python.org/3/library/stdtypes.html#str), value: Any) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the value of an attribute identified by its name.

<!-- !! processed by numpydoc !! -->

