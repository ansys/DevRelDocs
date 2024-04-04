# ExternalDataFileCollection

### *class* ExternalDataFileCollection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Add`](#ExternalDataFileCollection.Add)                     |                |
|--------------------------------------------------------------|----------------|
| [`Clear`](#ExternalDataFileCollection.Clear)                 |                |
| [`Contains`](#ExternalDataFileCollection.Contains)           |                |
| [`CopyTo`](#ExternalDataFileCollection.CopyTo)               | CopyTo method. |
| [`GetEnumerator`](#ExternalDataFileCollection.GetEnumerator) |                |
| [`IndexOf`](#ExternalDataFileCollection.IndexOf)             |                |
| [`Insert`](#ExternalDataFileCollection.Insert)               |                |
| [`Remove`](#ExternalDataFileCollection.Remove)               |                |
| [`RemoveAt`](#ExternalDataFileCollection.RemoveAt)           |                |

### Properties

| [`SaveFilesWithProject`](#ExternalDataFileCollection.SaveFilesWithProject)   | Gets or sets the flag controlling if the external data files will be copied to the project directory.   |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`Item`](#ExternalDataFileCollection.Item)                                   | Item property.                                                                                          |
| [`Count`](#ExternalDataFileCollection.Count)                                 | Gets the number of external data files.                                                                 |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import ExternalDataFileCollection
```

## Property detail

### *property* ExternalDataFileCollection.SaveFilesWithProject *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the flag controlling if the external data files will be copied to the project directory.
If this flag is set to False, the external data files will directly reference the file path.
The default is False.

<!-- !! processed by numpydoc !! -->

### *property* ExternalDataFileCollection.Item *: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

### *property* ExternalDataFileCollection.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of external data files.

<!-- !! processed by numpydoc !! -->

## Method detail

### ExternalDataFileCollection.Add(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile))

### ExternalDataFileCollection.Clear()

### ExternalDataFileCollection.Contains(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile))

### ExternalDataFileCollection.CopyTo(array: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile), arrayIndex: System.Int32)

CopyTo method.

<!-- !! processed by numpydoc !! -->

### ExternalDataFileCollection.GetEnumerator()

### ExternalDataFileCollection.IndexOf(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile))

### ExternalDataFileCollection.Insert(index: System.Int32, item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile))

### ExternalDataFileCollection.Remove(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile))

### ExternalDataFileCollection.RemoveAt(index: System.Int32)
