# `LayeredSectionWorksheet`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.LayeredSectionWorksheet

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

LayeredSectionWorksheet class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`AddThicknessLayer`](#LayeredSectionWorksheet.AddThicknessLayer)                 | Add a row to the LayeredSectionWorksheet                               |
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

| Name | Description |
|---------------------------------------------------|-------------------------------------------------------|
| [`RowCount`](#LayeredSectionWorksheet.RowCount)   | Gets the number of entries (rows) in the worksheet.   |

<a id="property-detail"></a>

## Property detail

<a id="LayeredSectionWorksheet.RowCount"></a>

### *property* LayeredSectionWorksheet.RowCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of entries (rows) in the worksheet.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LayeredSectionWorksheet.AddThicknessLayer"></a>

### LayeredSectionWorksheet.AddThicknessLayer(materialname: System.String, thickness: System.Double, angle: System.Double)

Add a row to the LayeredSectionWorksheet
New layers are added as the top most layer in the Z direction.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSectionWorksheet.InsertThicknessLayerAbove"></a>

### LayeredSectionWorksheet.InsertThicknessLayerAbove(materialname: System.String, thickness: System.Double, angle: System.Double, index: System.Int32)

Insert a new layer to the LayeredSectionWorksheet
The new layer will be inserted above the layer indicated by the given index.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSectionWorksheet.InsertThicknessLayerBelow"></a>

### LayeredSectionWorksheet.InsertThicknessLayerBelow(materialname: System.String, thickness: System.Double, angle: System.Double, index: System.Int32)

Insert a new layer to the LayeredSectionWorksheet
The new layer will be inserted below the layer indicated by the given index.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSectionWorksheet.DeleteRow"></a>

### LayeredSectionWorksheet.DeleteRow(index: System.Int32)

Delete a row from the LayeredSectionWorksheet
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSectionWorksheet.SetThickness"></a>

### LayeredSectionWorksheet.SetThickness(index: System.Int32, thickness: System.Double)

Set the thickness for the LayeredSection at the row index specifiied.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSectionWorksheet.SetAngle"></a>

### LayeredSectionWorksheet.SetAngle(index: System.Int32, angle: System.Double)

Set the angle for the LayeredSection at the row index specifiied.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSectionWorksheet.SetMaterial"></a>

### LayeredSectionWorksheet.SetMaterial(index: System.Int32, materialname: System.String)

Set the material for the LayeredSection at the row index specifiied.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSectionWorksheet.GetThickness"></a>

### LayeredSectionWorksheet.GetThickness(index: System.Int32)

Gets the thickness for the LayeredSection at the row index specifiied.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSectionWorksheet.GetAngle"></a>

### LayeredSectionWorksheet.GetAngle(index: System.Int32)

Gets the angle for the LayeredSection at the row index specifiied.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSectionWorksheet.GetMaterial"></a>

### LayeredSectionWorksheet.GetMaterial(index: System.Int32)

Gets the material for the LayeredSection at the row index specifiied.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.

<!-- !! processed by numpydoc !! -->

