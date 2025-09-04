# `ExternalDataFileCollection`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.ExternalData.ExternalDataFileCollection"></a>

#### *class* Ansys.Mechanical.ExternalData.ExternalDataFileCollection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

T:Ansys.Mechanical.ExternalData.ExternalDataFileCollection is a class that provides foundational behavior for
holding external data files.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------|----------------|
| [`Add`](#ExternalDataFileCollection.Add)                     |                |
| [`Clear`](#ExternalDataFileCollection.Clear)                 |                |
| [`Contains`](#ExternalDataFileCollection.Contains)           |                |
| [`CopyTo`](#ExternalDataFileCollection.CopyTo)               | CopyTo method. |
| [`GetEnumerator`](#ExternalDataFileCollection.GetEnumerator) |                |
| [`IndexOf`](#ExternalDataFileCollection.IndexOf)             |                |
| [`Insert`](#ExternalDataFileCollection.Insert)               |                |
| [`Remove`](#ExternalDataFileCollection.Remove)               |                |
| [`RemoveAt`](#ExternalDataFileCollection.RemoveAt)           |                |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| [`Count`](#ExternalDataFileCollection.Count)                               | Gets the number of external data files.                                                               |
| [`Item`](#ExternalDataFileCollection.Item)                                 | Item property.                                                                                        |
| [`SaveFilesWithProject`](#ExternalDataFileCollection.SaveFilesWithProject) | Gets or sets the flag controlling if the external data files will be copied to the project directory. |

<a id="property-detail"></a>

## Property detail

<a id="ExternalDataFileCollection.Count"></a>

### *property* ExternalDataFileCollection.Count *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of external data files.

<!-- !! processed by numpydoc !! -->

<a id="ExternalDataFileCollection.Item"></a>

### *property* ExternalDataFileCollection.Item *: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.ExternalData.ExternalDataFile) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalDataFileCollection.SaveFilesWithProject"></a>

### *property* ExternalDataFileCollection.SaveFilesWithProject *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the flag controlling if the external data files will be copied to the project directory.
If this flag is set to False, the external data files will directly reference the file path.
The default is False.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ExternalDataFileCollection.Add"></a>

### ExternalDataFileCollection.Add(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.ExternalData.ExternalDataFile)) → [None](https://docs.python.org/3/library/constants.html#None)

<a id="ExternalDataFileCollection.Clear"></a>

### ExternalDataFileCollection.Clear() → [None](https://docs.python.org/3/library/constants.html#None)

<a id="ExternalDataFileCollection.Contains"></a>

### ExternalDataFileCollection.Contains(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.ExternalData.ExternalDataFile)) → [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ExternalDataFileCollection.CopyTo"></a>

### ExternalDataFileCollection.CopyTo(array: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.ExternalData.ExternalDataFile), arrayIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

CopyTo method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalDataFileCollection.GetEnumerator"></a>

### ExternalDataFileCollection.GetEnumerator() → Iterator[[Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.ExternalData.ExternalDataFile)]

<a id="ExternalDataFileCollection.IndexOf"></a>

### ExternalDataFileCollection.IndexOf(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.ExternalData.ExternalDataFile)) → [int](https://docs.python.org/3/library/functions.html#int)

<a id="ExternalDataFileCollection.Insert"></a>

### ExternalDataFileCollection.Insert(index: [int](https://docs.python.org/3/library/functions.html#int), item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.ExternalData.ExternalDataFile)) → [None](https://docs.python.org/3/library/constants.html#None)

<a id="ExternalDataFileCollection.Remove"></a>

### ExternalDataFileCollection.Remove(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.ExternalData.ExternalDataFile)) → [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ExternalDataFileCollection.RemoveAt"></a>

### ExternalDataFileCollection.RemoveAt(index: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)


