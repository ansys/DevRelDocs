# BatchConnectionsWorksheet

### *class* BatchConnectionsWorksheet

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> BatchConnectionsWorksheet class.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddRow`](#BatchConnectionsWorksheet.AddRow)                                   | Add a row to the MeshControlWorksheet                    |
|---------------------------------------------------------------------------------|----------------------------------------------------------|
| [`DeleteRow`](#BatchConnectionsWorksheet.DeleteRow)                             | Delete a row from the MeshControlWorksheet               |
| [`GetActiveState`](#BatchConnectionsWorksheet.GetActiveState)                   | Gets the Active State property at row index              |
| [`SetActiveState`](#BatchConnectionsWorksheet.SetActiveState)                   | Sets the Active State property at row index              |
| [`GetNamedSelectionId`](#BatchConnectionsWorksheet.GetNamedSelectionId)         | Gets the ID of the NamedSelection at row index           |
| [`GetNamedSelection`](#BatchConnectionsWorksheet.GetNamedSelection)             | Gets the NamedSelection at row index                     |
| [`GetConnectionTolerances`](#BatchConnectionsWorksheet.GetConnectionTolerances) | Gets the list of connection tolerances at the row index  |
| [`GetConnectionOption`](#BatchConnectionsWorksheet.GetConnectionOption)         | Gets the current set cconnection option at the row index |
| [`SetNamedSelectionId`](#BatchConnectionsWorksheet.SetNamedSelectionId)         | Sets the NamedSelection by ID at row index               |
| [`SetNamedSelection`](#BatchConnectionsWorksheet.SetNamedSelection)             | Sets the NamedSelection at row index                     |
| [`SetConnectionTolerances`](#BatchConnectionsWorksheet.SetConnectionTolerances) | Sets the connection tolerance list at row index          |
| [`SetConnectionOption`](#BatchConnectionsWorksheet.SetConnectionOption)         | Sets the connection option at row index                  |
| [`GenerateMesh`](#BatchConnectionsWorksheet.GenerateMesh)                       | Geneate Mesh                                             |
| [`ClearGenerateMesh`](#BatchConnectionsWorksheet.ClearGenerateMesh)             | Clear Mesh                                               |
| [`GenerateAtRow`](#BatchConnectionsWorksheet.GenerateAtRow)                     | Generate Mesh At Row                                     |
| [`DeleteAllRows`](#BatchConnectionsWorksheet.DeleteAllRows)                     | Delete All Rows                                          |

### Properties

| [`RowCount`](#BatchConnectionsWorksheet.RowCount)   | Gets the number of entries   |
|-----------------------------------------------------|------------------------------|

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import BatchConnectionsWorksheet
```

## Property detail

### *property* BatchConnectionsWorksheet.RowCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of entries

<!-- !! processed by numpydoc !! -->

## Method detail

### BatchConnectionsWorksheet.AddRow()

Add a row to the MeshControlWorksheet

<!-- !! processed by numpydoc !! -->

### BatchConnectionsWorksheet.DeleteRow(index: System.Int32)

Delete a row from the MeshControlWorksheet

<!-- !! processed by numpydoc !! -->

### BatchConnectionsWorksheet.GetActiveState(index: System.Int32)

Gets the Active State property at row index

<!-- !! processed by numpydoc !! -->

### BatchConnectionsWorksheet.SetActiveState(index: System.Int32, value: System.Boolean)

Sets the Active State property at row index

<!-- !! processed by numpydoc !! -->

### BatchConnectionsWorksheet.GetNamedSelectionId(index: System.Int32)

Gets the ID of the NamedSelection at row index

<!-- !! processed by numpydoc !! -->

### BatchConnectionsWorksheet.GetNamedSelection(index: System.Int32)

Gets the NamedSelection at row index

<!-- !! processed by numpydoc !! -->

### BatchConnectionsWorksheet.GetConnectionTolerances(index: System.Int32)

Gets the list of connection tolerances at the row index

<!-- !! processed by numpydoc !! -->

### BatchConnectionsWorksheet.GetConnectionOption(index: System.Int32)

Gets the current set cconnection option at the row index

<!-- !! processed by numpydoc !! -->

### BatchConnectionsWorksheet.SetNamedSelectionId(index: System.Int32, value: System.UInt32)

Sets the NamedSelection by ID at row index

<!-- !! processed by numpydoc !! -->

### BatchConnectionsWorksheet.SetNamedSelection(index: System.Int32, value: [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#NamedSelection))

Sets the NamedSelection at row index

<!-- !! processed by numpydoc !! -->

### BatchConnectionsWorksheet.SetConnectionTolerances(index: System.Int32, value: System.String)

Sets the connection tolerance list at row index

<!-- !! processed by numpydoc !! -->

### BatchConnectionsWorksheet.SetConnectionOption(index: System.Int32, value: System.Int32)

Sets the connection option at row index

<!-- !! processed by numpydoc !! -->

### BatchConnectionsWorksheet.GenerateMesh()

Geneate Mesh

<!-- !! processed by numpydoc !! -->

### BatchConnectionsWorksheet.ClearGenerateMesh()

Clear Mesh

<!-- !! processed by numpydoc !! -->

### BatchConnectionsWorksheet.GenerateAtRow(index: System.Int32)

Generate Mesh At Row

<!-- !! processed by numpydoc !! -->

### BatchConnectionsWorksheet.DeleteAllRows()

Delete All Rows

<!-- !! processed by numpydoc !! -->
