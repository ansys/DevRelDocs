# `MorphingRegionWorksheet`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheet"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheet(worksheet: Ansys.Common.Interop.DSObjectsAuto.IDSMorphFieldWorksheetDefinition)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

A class to manage a list of 'MorphingRegionWorksheetRow'.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Add`](#MorphingRegionWorksheet.Add)                         | Adds a MorphingRegionWorksheetRow at the end in the worksheet.                           |
| [`Clear`](#MorphingRegionWorksheet.Clear)                     | Removes all the MorphingRegionWorksheetRow items in the definition.                      |
| [`Contains`](#MorphingRegionWorksheet.Contains)               | Determines whether the worksheet contains a specific MorphingRegionWorksheetRow.         |
| [`CopyTo`](#MorphingRegionWorksheet.CopyTo)                   | CopyTo method.                                                                           |
| [`CreateAndAddRow`](#MorphingRegionWorksheet.CreateAndAddRow) | Create a MorphingRegionWorksheetRow and add it to the list.                              |
| [`GetEnumerator`](#MorphingRegionWorksheet.GetEnumerator)     | Returns an enumerator that iterates through the worksheet.                               |
| [`IndexOf`](#MorphingRegionWorksheet.IndexOf)                 | Gives the index where the specified MorphingRegionWorksheetRow exists in the definition. |
| [`Insert`](#MorphingRegionWorksheet.Insert)                   | Inserts a MorphingRegionWorksheetRow at a specified index in the definition.             |
| [`Remove`](#MorphingRegionWorksheet.Remove)                   | Removes an MorphingRegionWorksheetRow from the definition.                               |
| [`RemoveAt`](#MorphingRegionWorksheet.RemoveAt)               | Removes the MorphingRegionWorksheetRow at a specified index in the definition.           |

### Properties

| Name | Description |
|-----------------------------------------------------|---------------------------------------------------------------------------|
| [`Count`](#MorphingRegionWorksheet.Count)           | Gives the number of MorphingRegionWorksheetRow items in the definition.   |
| [`IsReadOnly`](#MorphingRegionWorksheet.IsReadOnly) | Check if the definition is read-only                                      |
| [`Item`](#MorphingRegionWorksheet.Item)             | Item property.                                                            |

<a id="property-detail"></a>

## Property detail

<a id="MorphingRegionWorksheet.Count"></a>

### *property* MorphingRegionWorksheet.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gives the number of MorphingRegionWorksheetRow items in the definition.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegionWorksheet.IsReadOnly"></a>

### *property* MorphingRegionWorksheet.IsReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Check if the definition is read-only

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegionWorksheet.Item"></a>

### *property* MorphingRegionWorksheet.Item *: [Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow](MorphingRegionWorksheetRow.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MorphingRegionWorksheet.Add"></a>

### MorphingRegionWorksheet.Add(item: [Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow](MorphingRegionWorksheetRow.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Adds a MorphingRegionWorksheetRow at the end in the worksheet.
Usage:
    MorphingRegionWorksheet.Add(Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow())
```

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegionWorksheet.Clear"></a>

### MorphingRegionWorksheet.Clear() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes all the MorphingRegionWorksheetRow items in the definition.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegionWorksheet.Contains"></a>

### MorphingRegionWorksheet.Contains(item: [Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow](MorphingRegionWorksheetRow.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Determines whether the worksheet contains a specific MorphingRegionWorksheetRow.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegionWorksheet.CopyTo"></a>

### MorphingRegionWorksheet.CopyTo(array: [Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow](MorphingRegionWorksheetRow.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow), arrayIndex: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

CopyTo method.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegionWorksheet.CreateAndAddRow"></a>

### MorphingRegionWorksheet.CreateAndAddRow() → [Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow](MorphingRegionWorksheetRow.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow)

```text
Create a MorphingRegionWorksheetRow and add it to the list.
Usage:
    row = MorphingRegionWorksheet.CreateAndAddRow()
```

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegionWorksheet.GetEnumerator"></a>

### MorphingRegionWorksheet.GetEnumerator() → Iterator[[Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow](MorphingRegionWorksheetRow.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow)]

Returns an enumerator that iterates through the worksheet.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegionWorksheet.IndexOf"></a>

### MorphingRegionWorksheet.IndexOf(item: [Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow](MorphingRegionWorksheetRow.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow)) → [int](https://docs.python.org/3/builtins/functions.html#int)

```text
Gives the index where the specified MorphingRegionWorksheetRow exists in the definition.
Returns -1 if the term is not found in the definition.
```

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegionWorksheet.Insert"></a>

### MorphingRegionWorksheet.Insert(index: [int](https://docs.python.org/3/builtins/functions.html#int), item: [Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow](MorphingRegionWorksheetRow.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Inserts a MorphingRegionWorksheetRow at a specified index in the definition.
Returns IndexOutOfRangeException for invalid index.
Usage:
    MorphingRegionWorksheet.Insert(1, Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow())
```

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegionWorksheet.Remove"></a>

### MorphingRegionWorksheet.Remove(item: [Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow](MorphingRegionWorksheetRow.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

```text
Removes an MorphingRegionWorksheetRow from the definition.
Usage:
    MorphingRegionWorksheet.Remove(MorphingRegionWorksheetRow)
```

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegionWorksheet.RemoveAt"></a>

### MorphingRegionWorksheet.RemoveAt(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Removes the MorphingRegionWorksheetRow at a specified index in the definition.
Returns IndexOutOfRangeException for invalid index.
```

<!-- !! processed by numpydoc !! -->

