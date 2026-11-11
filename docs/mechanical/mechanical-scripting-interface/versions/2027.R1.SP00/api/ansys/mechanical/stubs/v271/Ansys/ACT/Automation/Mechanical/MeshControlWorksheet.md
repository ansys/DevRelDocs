# `MeshControlWorksheet`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshControlWorksheet"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControlWorksheet

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|------------------------------------------------|
| [`AddRow`](#MeshControlWorksheet.AddRow)                           | Add a row to the MeshControlWorksheet          |
| [`ClearGenerateMesh`](#MeshControlWorksheet.ClearGenerateMesh)     | Clear Mesh                                     |
| [`DeleteAllRows`](#MeshControlWorksheet.DeleteAllRows)             | Delete All Rows                                |
| [`DeleteRow`](#MeshControlWorksheet.DeleteRow)                     | Delete a row from the MeshControlWorksheet     |
| [`GenerateAtRow`](#MeshControlWorksheet.GenerateAtRow)             | Generate Mesh At Row                           |
| [`GenerateMesh`](#MeshControlWorksheet.GenerateMesh)               | Geneate Mesh                                   |
| [`GetActiveState`](#MeshControlWorksheet.GetActiveState)           | Gets the Active State property at row index    |
| [`GetNamedSelection`](#MeshControlWorksheet.GetNamedSelection)     | Gets the NamedSelection at row index           |
| [`GetNamedSelectionId`](#MeshControlWorksheet.GetNamedSelectionId) | Gets the ID of the NamedSelection at row index |
| [`RefreshWorksheet`](#MeshControlWorksheet.RefreshWorksheet)       | RefreshWorksheet method.                       |
| [`SetActiveState`](#MeshControlWorksheet.SetActiveState)           | Sets the Active State property at row index    |
| [`SetNamedSelection`](#MeshControlWorksheet.SetNamedSelection)     | Sets the NamedSelection at row index           |
| [`SetNamedSelectionId`](#MeshControlWorksheet.SetNamedSelectionId) | Sets the NamedSelection by ID at row index     |
| [`StartRecording`](#MeshControlWorksheet.StartRecording)           | Start Recording                                |
| [`StopRecording`](#MeshControlWorksheet.StopRecording)             | Stop Recording                                 |

### Properties

| Name | Description |
|------------------------------------------------|------------------------------|
| [`RowCount`](#MeshControlWorksheet.RowCount)   | Gets the number of entries   |

<a id="property-detail"></a>

## Property detail

<a id="MeshControlWorksheet.RowCount"></a>

### *property* MeshControlWorksheet.RowCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of entries

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshControlWorksheet.AddRow"></a>

### MeshControlWorksheet.AddRow() → [int](https://docs.python.org/3/builtins/functions.html#int)

Add a row to the MeshControlWorksheet

<!-- !! processed by numpydoc !! -->

<a id="MeshControlWorksheet.ClearGenerateMesh"></a>

### MeshControlWorksheet.ClearGenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clear Mesh

<!-- !! processed by numpydoc !! -->

<a id="MeshControlWorksheet.DeleteAllRows"></a>

### MeshControlWorksheet.DeleteAllRows() → [None](https://docs.python.org/3/builtins/constants.html#None)

Delete All Rows

<!-- !! processed by numpydoc !! -->

<a id="MeshControlWorksheet.DeleteRow"></a>

### MeshControlWorksheet.DeleteRow(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Delete a row from the MeshControlWorksheet

<!-- !! processed by numpydoc !! -->

<a id="MeshControlWorksheet.GenerateAtRow"></a>

### MeshControlWorksheet.GenerateAtRow(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate Mesh At Row

<!-- !! processed by numpydoc !! -->

<a id="MeshControlWorksheet.GenerateMesh"></a>

### MeshControlWorksheet.GenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Geneate Mesh

<!-- !! processed by numpydoc !! -->

<a id="MeshControlWorksheet.GetActiveState"></a>

### MeshControlWorksheet.GetActiveState(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets the Active State property at row index

<!-- !! processed by numpydoc !! -->

<a id="MeshControlWorksheet.GetNamedSelection"></a>

### MeshControlWorksheet.GetNamedSelection(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)

Gets the NamedSelection at row index

<!-- !! processed by numpydoc !! -->

<a id="MeshControlWorksheet.GetNamedSelectionId"></a>

### MeshControlWorksheet.GetNamedSelectionId(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [int](https://docs.python.org/3/builtins/functions.html#int)

Gets the ID of the NamedSelection at row index

<!-- !! processed by numpydoc !! -->

<a id="MeshControlWorksheet.RefreshWorksheet"></a>

### MeshControlWorksheet.RefreshWorksheet() → [None](https://docs.python.org/3/builtins/constants.html#None)

RefreshWorksheet method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControlWorksheet.SetActiveState"></a>

### MeshControlWorksheet.SetActiveState(index: [int](https://docs.python.org/3/builtins/functions.html#int), value: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the Active State property at row index

<!-- !! processed by numpydoc !! -->

<a id="MeshControlWorksheet.SetNamedSelection"></a>

### MeshControlWorksheet.SetNamedSelection(index: [int](https://docs.python.org/3/builtins/functions.html#int), value: [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the NamedSelection at row index

<!-- !! processed by numpydoc !! -->

<a id="MeshControlWorksheet.SetNamedSelectionId"></a>

### MeshControlWorksheet.SetNamedSelectionId(index: [int](https://docs.python.org/3/builtins/functions.html#int), value: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the NamedSelection by ID at row index

<!-- !! processed by numpydoc !! -->

<a id="MeshControlWorksheet.StartRecording"></a>

### MeshControlWorksheet.StartRecording() → [None](https://docs.python.org/3/builtins/constants.html#None)

Start Recording

<!-- !! processed by numpydoc !! -->

<a id="MeshControlWorksheet.StopRecording"></a>

### MeshControlWorksheet.StopRecording() → [None](https://docs.python.org/3/builtins/constants.html#None)

Stop Recording

<!-- !! processed by numpydoc !! -->

