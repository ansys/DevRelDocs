# LayeredSectionWorksheet

### *class* LayeredSectionWorksheet

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> LayeredSectionWorksheet class.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddThicknessLayer`](#LayeredSectionWorksheet.AddThicknessLayer)                 | Add a row to the LayeredSectionWorksheet                               |
|-----------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InsertThicknessLayerAbove`](#LayeredSectionWorksheet.InsertThicknessLayerAbove) | Insert a new layer to the LayeredSectionWorksheet                      |
| [`InsertThicknessLayerBelow`](#LayeredSectionWorksheet.InsertThicknessLayerBelow) | Insert a new layer to the LayeredSectionWorksheet                      |
| [`DeleteRow`](#LayeredSectionWorksheet.DeleteRow)                                 | Delete a row from the LayeredSectionWorksheet                          |
| [`SetThickness`](#LayeredSectionWorksheet.SetThickness)                           | Set the thickness for the LayeredSection at the row index specifiied.  |
| [`SetAngle`](#LayeredSectionWorksheet.SetAngle)                                   | Set the angle for the LayeredSection at the row index specifiied.      |
| [`SetMaterial`](#LayeredSectionWorksheet.SetMaterial)                             | Set the material for the LayeredSection at the row index specifiied.   |
| [`GetThickness`](#LayeredSectionWorksheet.GetThickness)                           | Gets the thickness for the LayeredSection at the row index specifiied. |
| [`GetAngle`](#LayeredSectionWorksheet.GetAngle)                                   | Gets the angle for the LayeredSection at the row index specifiied.     |
| [`GetMaterial`](#LayeredSectionWorksheet.GetMaterial)                             | Gets the material for the LayeredSection at the row index specifiied.  |

### Properties

| [`RowCount`](#LayeredSectionWorksheet.RowCount)   | Gets the number of entries (rows) in the worksheet.   |
|---------------------------------------------------|-------------------------------------------------------|

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import LayeredSectionWorksheet
```

## Property detail

### *property* LayeredSectionWorksheet.RowCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of entries (rows) in the worksheet.

<!-- !! processed by numpydoc !! -->

## Method detail

### LayeredSectionWorksheet.AddThicknessLayer(materialname: System.String, thickness: System.Double, angle: System.Double)

Add a row to the LayeredSectionWorksheet
New layers are added as the top most layer in the Z direction.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

### LayeredSectionWorksheet.InsertThicknessLayerAbove(materialname: System.String, thickness: System.Double, angle: System.Double, index: System.Int32)

Insert a new layer to the LayeredSectionWorksheet
The new layer will be inserted above the layer indicated by the given index.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

### LayeredSectionWorksheet.InsertThicknessLayerBelow(materialname: System.String, thickness: System.Double, angle: System.Double, index: System.Int32)

Insert a new layer to the LayeredSectionWorksheet
The new layer will be inserted below the layer indicated by the given index.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

### LayeredSectionWorksheet.DeleteRow(index: System.Int32)

Delete a row from the LayeredSectionWorksheet
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

### LayeredSectionWorksheet.SetThickness(index: System.Int32, thickness: System.Double)

Set the thickness for the LayeredSection at the row index specifiied.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

### LayeredSectionWorksheet.SetAngle(index: System.Int32, angle: System.Double)

Set the angle for the LayeredSection at the row index specifiied.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

### LayeredSectionWorksheet.SetMaterial(index: System.Int32, materialname: System.String)

Set the material for the LayeredSection at the row index specifiied.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

### LayeredSectionWorksheet.GetThickness(index: System.Int32)

Gets the thickness for the LayeredSection at the row index specifiied.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

### LayeredSectionWorksheet.GetAngle(index: System.Int32)

Gets the angle for the LayeredSection at the row index specifiied.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

### LayeredSectionWorksheet.GetMaterial(index: System.Int32)

Gets the material for the LayeredSection at the row index specifiied.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->
