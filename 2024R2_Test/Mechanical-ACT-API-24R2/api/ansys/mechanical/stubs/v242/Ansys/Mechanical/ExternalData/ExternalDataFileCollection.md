# `ExternalDataFileCollection`



#### *class* ansys.mechanical.stubs.v242.Ansys.Mechanical.ExternalData.ExternalDataFileCollection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

T:Ansys.Mechanical.ExternalData.ExternalDataFileCollection is a class that provides foundational behavior for
holding external data files.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------|----------------|
| `Add`           |                |
| `Clear`         |                |
| `Contains`      |                |
| `CopyTo`        | CopyTo method. |
| `GetEnumerator` |                |
| `IndexOf`       |                |
| `Insert`        |                |
| `Remove`        |                |
| `RemoveAt`      |                |

### Properties

| Name | Description |
|--------------------------|---------------------------------------------------------------------------------------------------------|
| `SaveFilesWithProject`   | Gets or sets the flag controlling if the external data files will be copied to the project directory.   |
| `Item`                   | Item property.                                                                                          |
| `Count`                  | Gets the number of external data files.                                                                 |

<a id="property-detail"></a>

## Property detail

### *property* ExternalDataFileCollection.SaveFilesWithProject *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the flag controlling if the external data files will be copied to the project directory.
If this flag is set to False, the external data files will directly reference the file path.
The default is False.

<!-- !! processed by numpydoc !! -->

### *property* ExternalDataFileCollection.Item *: [Ansys.Mechanical.ExternalData.ExternalDataFile](../../../../v241/Ansys/Mechanical/ExternalData/ExternalDataFile.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.ExternalData.ExternalDataFile) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

### *property* ExternalDataFileCollection.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of external data files.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### ExternalDataFileCollection.Add(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](../../../../v241/Ansys/Mechanical/ExternalData/ExternalDataFile.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.ExternalData.ExternalDataFile))

### ExternalDataFileCollection.Clear()

### ExternalDataFileCollection.Contains(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](../../../../v241/Ansys/Mechanical/ExternalData/ExternalDataFile.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.ExternalData.ExternalDataFile))

### ExternalDataFileCollection.CopyTo(array: [Ansys.Mechanical.ExternalData.ExternalDataFile](../../../../v241/Ansys/Mechanical/ExternalData/ExternalDataFile.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.ExternalData.ExternalDataFile), arrayIndex: System.Int32)

CopyTo method.

<!-- !! processed by numpydoc !! -->

### ExternalDataFileCollection.GetEnumerator()

### ExternalDataFileCollection.IndexOf(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](../../../../v241/Ansys/Mechanical/ExternalData/ExternalDataFile.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.ExternalData.ExternalDataFile))

### ExternalDataFileCollection.Insert(index: System.Int32, item: [Ansys.Mechanical.ExternalData.ExternalDataFile](../../../../v241/Ansys/Mechanical/ExternalData/ExternalDataFile.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.ExternalData.ExternalDataFile))

### ExternalDataFileCollection.Remove(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](../../../../v241/Ansys/Mechanical/ExternalData/ExternalDataFile.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.ExternalData.ExternalDataFile))

### ExternalDataFileCollection.RemoveAt(index: System.Int32)


