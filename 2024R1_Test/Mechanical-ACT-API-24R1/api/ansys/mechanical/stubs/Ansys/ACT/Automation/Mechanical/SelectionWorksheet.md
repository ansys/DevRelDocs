# SelectionWorksheet

<a id="SelectionWorksheet"></a>

### *class* SelectionWorksheet

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> SelectionWorksheet class.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [`Generate`](#SelectionWorksheet.Generate)                                         | Generate the selection from the worksheet.                      |
| [`AddRow`](#SelectionWorksheet.AddRow)                                             | Adds a Row to the worksheet.                                    |
| [`DeleteRow`](#SelectionWorksheet.DeleteRow)                                       | Deletes a row from the worksheet at index.                      |
| [`SetCriterion`](#SelectionWorksheet.SetCriterion)                                 | Sets the worksheet Criterion property at index.                 |
| [`SetAction`](#SelectionWorksheet.SetAction)                                       | Sets the worksheet Action property at index.                    |
| [`SetCoordinateSystemSelection`](#SelectionWorksheet.SetCoordinateSystemSelection) | Sets the worksheet CoordinateSystemSelection property at index. |
| [`SetCriterionActive`](#SelectionWorksheet.SetCriterionActive)                     | Sets the worksheet CriterionActive property at index.           |
| [`SetEntityType`](#SelectionWorksheet.SetEntityType)                               | Sets the worksheet GeometryType property at index.              |
| [`SetLowerBound`](#SelectionWorksheet.SetLowerBound)                               | Sets the worksheet LowerBound property at index.                |
| [`SetOperator`](#SelectionWorksheet.SetOperator)                                   | Sets the worksheet Operator property at index.                  |
| [`SetStringValue`](#SelectionWorksheet.SetStringValue)                             | Sets the worksheet StringValue property at index.               |
| [`SetTag`](#SelectionWorksheet.SetTag)                                             | Sets the worksheet Tag property at index.                       |
| [`SetUpperBound`](#SelectionWorksheet.SetUpperBound)                               | Sets the worksheet UpperBound property at index.                |
| [`SetValue`](#SelectionWorksheet.SetValue)                                         | Sets the worksheet Value property at index.                     |
| [`GetEdgeTypeValue`](#SelectionWorksheet.GetEdgeTypeValue)                         | Gets the worksheet Edge Type Value property at index.           |
| [`SetEdgeTypeValue`](#SelectionWorksheet.SetEdgeTypeValue)                         | Sets the worksheet Edge Type Value property at index.           |
| [`SetFaceTypeValue`](#SelectionWorksheet.SetFaceTypeValue)                         | Sets the worksheet Face Type Value property at index.           |
| [`GetFaceTypeValue`](#SelectionWorksheet.GetFaceTypeValue)                         | Gets the worksheet Face Type Value property at index.           |
| [`SetBodyTypeValue`](#SelectionWorksheet.SetBodyTypeValue)                         | Sets the worksheet Body Type Value property at index.           |
| [`GetBodyTypeValue`](#SelectionWorksheet.GetBodyTypeValue)                         | Gets the worksheet Body Type Value property at index.           |
| [`SetMeshElementTypeValue`](#SelectionWorksheet.SetMeshElementTypeValue)           | Sets the worksheet Mesh Element Type Value property at index.   |
| [`GetMeshElementTypeValue`](#SelectionWorksheet.GetMeshElementTypeValue)           | Gets the worksheet Mesh Element Type Value property at index.   |
| [`GetCriterion`](#SelectionWorksheet.GetCriterion)                                 | Gets the worksheet Criterion property at index.                 |
| [`GetAction`](#SelectionWorksheet.GetAction)                                       | Gets the worksheet Action property at index.                    |
| [`GetCoordinateSystemSelection`](#SelectionWorksheet.GetCoordinateSystemSelection) | Gets the worksheet CoordinateSystemSelection property at index. |
| [`GetCriterionActive`](#SelectionWorksheet.GetCriterionActive)                     | Gets the worksheet CriterionActive property at index.           |
| [`GetGeometryType`](#SelectionWorksheet.GetGeometryType)                           | Gets the worksheet GeometryType property at index.              |
| [`GetLowerBound`](#SelectionWorksheet.GetLowerBound)                               | Gets the worksheet LowerBound property at index.                |
| [`GetOperator`](#SelectionWorksheet.GetOperator)                                   | Gets the worksheet Operator property at index.                  |
| [`GetStringValue`](#SelectionWorksheet.GetStringValue)                             | Gets the worksheet StringValue property at index.               |
| [`GetTag`](#SelectionWorksheet.GetTag)                                             | Gets the worksheet Tag property at index.                       |
| [`GetUpperBound`](#SelectionWorksheet.GetUpperBound)                               | Gets the worksheet UpperBound property at index.                |
| [`GetValue`](#SelectionWorksheet.GetValue)                                         | Gets the worksheet Value property at index.                     |

### Properties

| Name |
| ---------------------------------------------- |
| [`RowCount`](#SelectionWorksheet.RowCount) |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import SelectionWorksheet
```

<a id="property-detail"></a>

## Property detail

<a id="SelectionWorksheet.RowCount"></a>

### *property* SelectionWorksheet.RowCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SelectionWorksheet.Generate"></a>

### SelectionWorksheet.Generate()

Generate the selection from the worksheet.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.AddRow"></a>

### SelectionWorksheet.AddRow()

Adds a Row to the worksheet.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.DeleteRow"></a>

### SelectionWorksheet.DeleteRow(index: System.Int32)

Deletes a row from the worksheet at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.SetCriterion"></a>

### SelectionWorksheet.SetCriterion(index: System.Int32, value: Ansys.Mechanical.DataModel.Enums.NamedSelectionWorksheetCriterion)

Sets the worksheet Criterion property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.SetAction"></a>

### SelectionWorksheet.SetAction(index: System.Int32, newVal: Ansys.Mechanical.DataModel.Enums.NamedSelectionWorksheetAction)

Sets the worksheet Action property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.SetCoordinateSystemSelection"></a>

### SelectionWorksheet.SetCoordinateSystemSelection(index: System.Int32, newVal: System.UInt32)

Sets the worksheet CoordinateSystemSelection property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.SetCriterionActive"></a>

### SelectionWorksheet.SetCriterionActive(index: System.Int32, newVal: System.Boolean)

Sets the worksheet CriterionActive property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.SetEntityType"></a>

### SelectionWorksheet.SetEntityType(index: System.Int32, newVal: Ansys.Mechanical.DataModel.Enums.NamedSelectionWorksheetEntityType)

Sets the worksheet GeometryType property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.SetLowerBound"></a>

### SelectionWorksheet.SetLowerBound(index: System.Int32, newVal: System.Double)

Sets the worksheet LowerBound property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.SetOperator"></a>

### SelectionWorksheet.SetOperator(index: System.Int32, newVal: [Ansys.Mechanical.DataModel.Enums.NamedSelectionWorksheetOperator](../../../Mechanical/DataModel/Enums/NamedSelectionWorksheetOperator.md#NamedSelectionWorksheetOperator))

Sets the worksheet Operator property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.SetStringValue"></a>

### SelectionWorksheet.SetStringValue(index: System.Int32, newVal: System.String)

Sets the worksheet StringValue property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.SetTag"></a>

### SelectionWorksheet.SetTag(index: System.UInt32, newVal: System.String)

Sets the worksheet Tag property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.SetUpperBound"></a>

### SelectionWorksheet.SetUpperBound(index: System.Int32, newVal: System.Double)

Sets the worksheet UpperBound property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.SetValue"></a>

### SelectionWorksheet.SetValue(index: System.Int32, newVal: System.Double)

Sets the worksheet Value property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.GetEdgeTypeValue"></a>

### SelectionWorksheet.GetEdgeTypeValue(index: System.Int32)

Gets the worksheet Edge Type Value property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.SetEdgeTypeValue"></a>

### SelectionWorksheet.SetEdgeTypeValue(index: System.Int32, newVal: Ansys.Mechanical.DataModel.Enums.NamedSelectionWorksheetEdgeTypeValues)

Sets the worksheet Edge Type Value property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.SetFaceTypeValue"></a>

### SelectionWorksheet.SetFaceTypeValue(index: System.Int32, newVal: Ansys.Mechanical.DataModel.Enums.NamedSelectionWorksheetFaceTypeValues)

Sets the worksheet Face Type Value property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.GetFaceTypeValue"></a>

### SelectionWorksheet.GetFaceTypeValue(index: System.Int32)

Gets the worksheet Face Type Value property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.SetBodyTypeValue"></a>

### SelectionWorksheet.SetBodyTypeValue(index: System.Int32, newVal: Ansys.Mechanical.DataModel.Enums.NamedSelectionWorksheetBodyTypeValues)

Sets the worksheet Body Type Value property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.GetBodyTypeValue"></a>

### SelectionWorksheet.GetBodyTypeValue(index: System.Int32)

Gets the worksheet Body Type Value property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.SetMeshElementTypeValue"></a>

### SelectionWorksheet.SetMeshElementTypeValue(index: System.Int32, newVal: [Ansys.Mechanical.DataModel.Enums.MeshElementShape](../../../Mechanical/DataModel/Enums/MeshElementShape.md#MeshElementShape))

Sets the worksheet Mesh Element Type Value property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.GetMeshElementTypeValue"></a>

### SelectionWorksheet.GetMeshElementTypeValue(index: System.Int32)

Gets the worksheet Mesh Element Type Value property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.GetCriterion"></a>

### SelectionWorksheet.GetCriterion(index: System.Int32)

Gets the worksheet Criterion property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.GetAction"></a>

### SelectionWorksheet.GetAction(index: System.Int32)

Gets the worksheet Action property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.GetCoordinateSystemSelection"></a>

### SelectionWorksheet.GetCoordinateSystemSelection(index: System.Int32)

Gets the worksheet CoordinateSystemSelection property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.GetCriterionActive"></a>

### SelectionWorksheet.GetCriterionActive(index: System.Int32)

Gets the worksheet CriterionActive property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.GetGeometryType"></a>

### SelectionWorksheet.GetGeometryType(index: System.Int32)

Gets the worksheet GeometryType property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.GetLowerBound"></a>

### SelectionWorksheet.GetLowerBound(index: System.Int32)

Gets the worksheet LowerBound property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.GetOperator"></a>

### SelectionWorksheet.GetOperator(index: System.Int32)

Gets the worksheet Operator property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.GetStringValue"></a>

### SelectionWorksheet.GetStringValue(index: System.Int32)

Gets the worksheet StringValue property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.GetTag"></a>

### SelectionWorksheet.GetTag(index: System.UInt32)

Gets the worksheet Tag property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.GetUpperBound"></a>

### SelectionWorksheet.GetUpperBound(index: System.Int32)

Gets the worksheet UpperBound property at index.

<!-- !! processed by numpydoc !! -->

<a id="SelectionWorksheet.GetValue"></a>

### SelectionWorksheet.GetValue(index: System.Int32)

Gets the worksheet Value property at index.

<!-- !! processed by numpydoc !! -->
