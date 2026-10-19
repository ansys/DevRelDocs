# `BatchConnectionsWorksheet`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BatchConnectionsWorksheet"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BatchConnectionsWorksheet

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|----------------------------------------------------------|
| [`AddRow`](#BatchConnectionsWorksheet.AddRow)                                   | Add a row to the MeshControlWorksheet                    |
| [`ClearGenerateMesh`](#BatchConnectionsWorksheet.ClearGenerateMesh)             | Clear Mesh                                               |
| [`DeleteAllRows`](#BatchConnectionsWorksheet.DeleteAllRows)                     | Delete All Rows                                          |
| [`DeleteRow`](#BatchConnectionsWorksheet.DeleteRow)                             | Delete a row from the MeshControlWorksheet               |
| [`GenerateAtRow`](#BatchConnectionsWorksheet.GenerateAtRow)                     | Generate Mesh At Row                                     |
| [`GenerateMesh`](#BatchConnectionsWorksheet.GenerateMesh)                       | Geneate Mesh                                             |
| [`GetActiveState`](#BatchConnectionsWorksheet.GetActiveState)                   | Gets the Active State property at row index              |
| [`GetConnectionOption`](#BatchConnectionsWorksheet.GetConnectionOption)         | Gets the current set cconnection option at the row index |
| [`GetConnectionTolerances`](#BatchConnectionsWorksheet.GetConnectionTolerances) | Gets the list of connection tolerances at the row index  |
| [`GetNamedSelection`](#BatchConnectionsWorksheet.GetNamedSelection)             | Gets the NamedSelection at row index                     |
| [`GetNamedSelectionId`](#BatchConnectionsWorksheet.GetNamedSelectionId)         | Gets the ID of the NamedSelection at row index           |
| [`RefreshWorksheet`](#BatchConnectionsWorksheet.RefreshWorksheet)               | RefreshWorksheet method.                                 |
| [`SetActiveState`](#BatchConnectionsWorksheet.SetActiveState)                   | Sets the Active State property at row index              |
| [`SetConnectionOption`](#BatchConnectionsWorksheet.SetConnectionOption)         | Sets the connection option at row index                  |
| [`SetConnectionTolerances`](#BatchConnectionsWorksheet.SetConnectionTolerances) | Sets the connection tolerance list at row index          |
| [`SetNamedSelection`](#BatchConnectionsWorksheet.SetNamedSelection)             | Sets the NamedSelection at row index                     |
| [`SetNamedSelectionId`](#BatchConnectionsWorksheet.SetNamedSelectionId)         | Sets the NamedSelection by ID at row index               |
| [`StartRecording`](#BatchConnectionsWorksheet.StartRecording)                   | Start Recording                                          |
| [`StopRecording`](#BatchConnectionsWorksheet.StopRecording)                     | Stop Recording                                           |

### Properties

| Name | Description |
|-----------------------------------------------------|------------------------------|
| [`RowCount`](#BatchConnectionsWorksheet.RowCount)   | Gets the number of entries   |

<a id="property-detail"></a>

## Property detail

<a id="BatchConnectionsWorksheet.RowCount"></a>

### *property* BatchConnectionsWorksheet.RowCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of entries

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BatchConnectionsWorksheet.AddRow"></a>

### BatchConnectionsWorksheet.AddRow() → [int](https://docs.python.org/3/builtins/functions.html#int)

Add a row to the MeshControlWorksheet

<!-- !! processed by numpydoc !! -->

<a id="BatchConnectionsWorksheet.ClearGenerateMesh"></a>

### BatchConnectionsWorksheet.ClearGenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clear Mesh

<!-- !! processed by numpydoc !! -->

<a id="BatchConnectionsWorksheet.DeleteAllRows"></a>

### BatchConnectionsWorksheet.DeleteAllRows() → [None](https://docs.python.org/3/builtins/constants.html#None)

Delete All Rows

<!-- !! processed by numpydoc !! -->

<a id="BatchConnectionsWorksheet.DeleteRow"></a>

### BatchConnectionsWorksheet.DeleteRow(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Delete a row from the MeshControlWorksheet

<!-- !! processed by numpydoc !! -->

<a id="BatchConnectionsWorksheet.GenerateAtRow"></a>

### BatchConnectionsWorksheet.GenerateAtRow(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate Mesh At Row

<!-- !! processed by numpydoc !! -->

<a id="BatchConnectionsWorksheet.GenerateMesh"></a>

### BatchConnectionsWorksheet.GenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Geneate Mesh

<!-- !! processed by numpydoc !! -->

<a id="BatchConnectionsWorksheet.GetActiveState"></a>

### BatchConnectionsWorksheet.GetActiveState(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets the Active State property at row index

<!-- !! processed by numpydoc !! -->

<a id="BatchConnectionsWorksheet.GetConnectionOption"></a>

### BatchConnectionsWorksheet.GetConnectionOption(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [int](https://docs.python.org/3/builtins/functions.html#int)

Gets the current set cconnection option at the row index

<!-- !! processed by numpydoc !! -->

<a id="BatchConnectionsWorksheet.GetConnectionTolerances"></a>

### BatchConnectionsWorksheet.GetConnectionTolerances(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Gets the list of connection tolerances at the row index

<!-- !! processed by numpydoc !! -->

<a id="BatchConnectionsWorksheet.GetNamedSelection"></a>

### BatchConnectionsWorksheet.GetNamedSelection(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)

Gets the NamedSelection at row index

<!-- !! processed by numpydoc !! -->

<a id="BatchConnectionsWorksheet.GetNamedSelectionId"></a>

### BatchConnectionsWorksheet.GetNamedSelectionId(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [int](https://docs.python.org/3/builtins/functions.html#int)

Gets the ID of the NamedSelection at row index

<!-- !! processed by numpydoc !! -->

<a id="BatchConnectionsWorksheet.RefreshWorksheet"></a>

### BatchConnectionsWorksheet.RefreshWorksheet() → [None](https://docs.python.org/3/builtins/constants.html#None)

RefreshWorksheet method.

<!-- !! processed by numpydoc !! -->

<a id="BatchConnectionsWorksheet.SetActiveState"></a>

### BatchConnectionsWorksheet.SetActiveState(index: [int](https://docs.python.org/3/builtins/functions.html#int), value: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the Active State property at row index

<!-- !! processed by numpydoc !! -->

<a id="BatchConnectionsWorksheet.SetConnectionOption"></a>

### BatchConnectionsWorksheet.SetConnectionOption(index: [int](https://docs.python.org/3/builtins/functions.html#int), value: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the connection option at row index

<!-- !! processed by numpydoc !! -->

<a id="BatchConnectionsWorksheet.SetConnectionTolerances"></a>

### BatchConnectionsWorksheet.SetConnectionTolerances(index: [int](https://docs.python.org/3/builtins/functions.html#int), value: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the connection tolerance list at row index

<!-- !! processed by numpydoc !! -->

<a id="BatchConnectionsWorksheet.SetNamedSelection"></a>

### BatchConnectionsWorksheet.SetNamedSelection(index: [int](https://docs.python.org/3/builtins/functions.html#int), value: [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the NamedSelection at row index

<!-- !! processed by numpydoc !! -->

<a id="BatchConnectionsWorksheet.SetNamedSelectionId"></a>

### BatchConnectionsWorksheet.SetNamedSelectionId(index: [int](https://docs.python.org/3/builtins/functions.html#int), value: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the NamedSelection by ID at row index

<!-- !! processed by numpydoc !! -->

<a id="BatchConnectionsWorksheet.StartRecording"></a>

### BatchConnectionsWorksheet.StartRecording() → [None](https://docs.python.org/3/builtins/constants.html#None)

Start Recording

<!-- !! processed by numpydoc !! -->

<a id="BatchConnectionsWorksheet.StopRecording"></a>

### BatchConnectionsWorksheet.StopRecording() → [None](https://docs.python.org/3/builtins/constants.html#None)

Stop Recording

<!-- !! processed by numpydoc !! -->

