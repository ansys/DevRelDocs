# `LayeredSectionWorksheet`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.LayeredSectionWorksheet

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

LayeredSectionWorksheet class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------|------------------------------------------------------------------------|
| `AddThicknessLayer`         | Add a row to the LayeredSectionWorksheet                               |
| `InsertThicknessLayerAbove` | Insert a new layer to the LayeredSectionWorksheet                      |
| `InsertThicknessLayerBelow` | Insert a new layer to the LayeredSectionWorksheet                      |
| `DeleteRow`                 | Delete a row from the LayeredSectionWorksheet                          |
| `SetThickness`              | Set the thickness for the LayeredSection at the row index specifiied.  |
| `SetAngle`                  | Set the angle for the LayeredSection at the row index specifiied.      |
| `SetMaterial`               | Set the material for the LayeredSection at the row index specifiied.   |
| `GetThickness`              | Gets the thickness for the LayeredSection at the row index specifiied. |
| `GetAngle`                  | Gets the angle for the LayeredSection at the row index specifiied.     |
| `GetMaterial`               | Gets the material for the LayeredSection at the row index specifiied.  |

### Properties

| Name | Description |
|--------------|-------------------------------------------------------|
| `RowCount`   | Gets the number of entries (rows) in the worksheet.   |

<a id="property-detail"></a>

## Property detail

### *property* LayeredSectionWorksheet.RowCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of entries (rows) in the worksheet.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### LayeredSectionWorksheet.AddThicknessLayer(materialname: System.String, thickness: System.Double, angle: System.Double)

```text
Add a row to the LayeredSectionWorksheet
New layers are added as the top most layer in the Z direction.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.
```

<!-- !! processed by numpydoc !! -->

### LayeredSectionWorksheet.InsertThicknessLayerAbove(materialname: System.String, thickness: System.Double, angle: System.Double, index: System.Int32)

```text
Insert a new layer to the LayeredSectionWorksheet
The new layer will be inserted above the layer indicated by the given index.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.
```

<!-- !! processed by numpydoc !! -->

### LayeredSectionWorksheet.InsertThicknessLayerBelow(materialname: System.String, thickness: System.Double, angle: System.Double, index: System.Int32)

```text
Insert a new layer to the LayeredSectionWorksheet
The new layer will be inserted below the layer indicated by the given index.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.
```

<!-- !! processed by numpydoc !! -->

### LayeredSectionWorksheet.DeleteRow(index: System.Int32)

```text
Delete a row from the LayeredSectionWorksheet
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.
```

<!-- !! processed by numpydoc !! -->

### LayeredSectionWorksheet.SetThickness(index: System.Int32, thickness: System.Double)

```text
Set the thickness for the LayeredSection at the row index specifiied.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.
```

<!-- !! processed by numpydoc !! -->

### LayeredSectionWorksheet.SetAngle(index: System.Int32, angle: System.Double)

```text
Set the angle for the LayeredSection at the row index specifiied.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.
```

<!-- !! processed by numpydoc !! -->

### LayeredSectionWorksheet.SetMaterial(index: System.Int32, materialname: System.String)

```text
Set the material for the LayeredSection at the row index specifiied.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.
```

<!-- !! processed by numpydoc !! -->

### LayeredSectionWorksheet.GetThickness(index: System.Int32)

```text
Gets the thickness for the LayeredSection at the row index specifiied.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.
```

<!-- !! processed by numpydoc !! -->

### LayeredSectionWorksheet.GetAngle(index: System.Int32)

```text
Gets the angle for the LayeredSection at the row index specifiied.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.
```

<!-- !! processed by numpydoc !! -->

### LayeredSectionWorksheet.GetMaterial(index: System.Int32)

```text
Gets the material for the LayeredSection at the row index specifiied.
LayeredSectionWorksheet indices are zero based and ordered in the Z direction.
```

<!-- !! processed by numpydoc !! -->

