<a id="externaldatafilecollection"></a>

# ExternalDataFileCollection

<a id="ExternalDataFileCollection"></a>

### *class* ExternalDataFileCollection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
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

| Name | Summary |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`SaveFilesWithProject`](#ExternalDataFileCollection.SaveFilesWithProject)   | Gets or sets the flag controlling if the external data files will be copied to the project directory.   |
| [`Item`](#ExternalDataFileCollection.Item)                                   | Item property.                                                                                          |
| [`Count`](#ExternalDataFileCollection.Count)                                 | Gets the number of external data files.                                                                 |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import ExternalDataFileCollection
```

<a id="property-detail"></a>

## Property detail

<a id="ExternalDataFileCollection.SaveFilesWithProject"></a>

### *property* ExternalDataFileCollection.SaveFilesWithProject *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the flag controlling if the external data files will be copied to the project directory.
If this flag is set to False, the external data files will directly reference the file path.
The default is False.

<!-- !! processed by numpydoc !! -->

<a id="ExternalDataFileCollection.Item"></a>

### *property* ExternalDataFileCollection.Item *: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalDataFileCollection.Count"></a>

### *property* ExternalDataFileCollection.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of external data files.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ExternalDataFileCollection.Add"></a>

### ExternalDataFileCollection.Add(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile))

<a id="ExternalDataFileCollection.Clear"></a>

### ExternalDataFileCollection.Clear()

<a id="ExternalDataFileCollection.Contains"></a>

### ExternalDataFileCollection.Contains(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile))

<a id="ExternalDataFileCollection.CopyTo"></a>

### ExternalDataFileCollection.CopyTo(array: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile), arrayIndex: System.Int32)

CopyTo method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalDataFileCollection.GetEnumerator"></a>

### ExternalDataFileCollection.GetEnumerator()

<a id="ExternalDataFileCollection.IndexOf"></a>

### ExternalDataFileCollection.IndexOf(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile))

<a id="ExternalDataFileCollection.Insert"></a>

### ExternalDataFileCollection.Insert(index: System.Int32, item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile))

<a id="ExternalDataFileCollection.Remove"></a>

### ExternalDataFileCollection.Remove(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile))

<a id="ExternalDataFileCollection.RemoveAt"></a>

### ExternalDataFileCollection.RemoveAt(index: System.Int32)
