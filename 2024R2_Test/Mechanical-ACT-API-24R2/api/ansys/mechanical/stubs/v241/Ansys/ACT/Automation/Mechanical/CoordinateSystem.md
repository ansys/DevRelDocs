# `CoordinateSystem`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------|-----------------------------------------------------------------------------------|
| `AddTransformation`                       | Adds a new transformation.                                                        |
| `RemoveTransformation`                    | Removes a tranformation.                                                          |
| `SetOriginLocation`                       | Changes the origin location.                                                      |
| `SetTransformationValue`                  | Sets the value of a transformation.                                               |
| `GetTransformationValue`                  | Gets the value of a transformation.                                               |
| `MoveTransformationUp`                    | Moves a transformation up.                                                        |
| `MoveTransformationDown`                  | Moves a transformation down.                                                      |
| `SetPrimaryAxisUsingCenterOfMass`         | Sets the primary axis using a 1 or 2 point selection and the center of mass       |
| `FlipX`                                   | Flips the X Axis of the coordinate system                                         |
| `FlipY`                                   | Flips the Y Axis of the coordinate system                                         |
| `FlipZ`                                   | Flips the Z Axis of the coordinate system                                         |
| `OffsetX`                                 | Creates an offset in the X Axis direction of the coordinate system                |
| `OffsetX`                                 | Creates an offset in the X Axis direction of the coordinate system                |
| `OffsetY`                                 | Creates an offset in the Y Axis direction of the coordinate system                |
| `OffsetY`                                 | Creates an offset in the Y Axis direction of the coordinate system                |
| `OffsetZ`                                 | Creates an offset in the Z Axis direction of the coordinate system                |
| `OffsetZ`                                 | Creates an offset in the Z Axis direction of the coordinate system                |
| `RotateX`                                 | Creates a rotation about the X Axis of the coordinate system                      |
| `RotateX`                                 | Creates a rotation about the X Axis of the coordinate system                      |
| `RotateY`                                 | Creates a rotation about the Y Axis of the coordinate system                      |
| `RotateY`                                 | Creates a rotation about the Y Axis of the coordinate system                      |
| `RotateZ`                                 | Creates a rotation about the Z Axis of the coordinate system                      |
| `RotateZ`                                 | Creates a rotation about the Z Axis of the coordinate system                      |
| `SetCoordinateSystemOriginAtCenterOfMass` | SetCoordinateSystemOriginAtCenterOfMass method.                                   |
| `CreateConstructionSurface`               | Run the CreateConstructionSurface action.                                         |
| `CreateSectionPlane`                      | Run the CreateSectionPlane action.                                                |
| `Delete`                                  | Run the Delete action.                                                            |
| `GetChildren`                             | Gets the list of children, filtered by type.                                      |
| `GetChildren`                             | Gets the list of children, filtered by type.                                      |
| `AddComment`                              | Creates a new child Comment.                                                      |
| `AddFigure`                               | Creates a new child Figure.                                                       |
| `AddImage`                                | Creates a new child Image.                                                        |
| `Activate`                                | Activate the current object.                                                      |
| `CopyTo`                                  | Copies all visible properties from this object to another.                        |
| `Duplicate`                               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`                 | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`                     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`                          | Get a property by its unique name.                                                |
| `PropertyByAPIName`                       | Get a property by its API name.                                                   |
| `CreateParameter`                         | Creates a new parameter for a Property.                                           |
| `GetParameter`                            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`                         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------|-----------------------------------------------------------------------|
| `TransformationCount`          | Gets the number of transformations.                                   |
| `IsGlobal`                     | Gets the IsGlobal.                                                    |
| `OriginLocation`               | Gets or sets the origin location.                                     |
| `OriginX`                      | Gets or sets the origin X coordinate.                                 |
| `OriginY`                      | Gets or sets the origin Y coordinate.                                 |
| `OriginZ`                      | Gets or sets the origin Z coordinate.                                 |
| `OriginDefineBy`               | Gets or sets the origin define by.                                    |
| `PrimaryAxisDirection`         | Gets or sets the Principal Axis Direction.                            |
| `SecondaryAxisDirection`       | Gets the Secondary Axis Direction.                                    |
| `PrimaryAxisLocation`          | Gets or sets the principal axis geometry selection.                   |
| `SecondaryAxisLocation`        | Gets or sets the orientation about principal axis geometry selection. |
| `CoordinateSystemType`         | Gets or sets the CoordinateSystemType.                                |
| `APDLName`                     | Gets or sets the APDLName.                                            |
| `InternalObject`               | Gets the internal object. For advanced usage only.                    |
| `CoordinateSystemID`           | Gets or sets the CoordinateSystemID.                                  |
| `TransformedConfiguration`     | Gets the TransformedConfiguration.                                    |
| `XAxisData`                    | Gets the XAxisData.                                                   |
| `YAxisData`                    | Gets the YAxisData.                                                   |
| `ZAxisData`                    | Gets the ZAxisData.                                                   |
| `CoordinateSystemIDGeneration` | Gets or sets the CoordinateSystemIDGeneration.                        |
| `PrimaryAxis`                  | Gets or sets the PrimaryAxis.                                         |
| `PrimaryAxisDefineBy`          | Gets or sets the PrimaryAxisDefineBy.                                 |
| `SecondaryAxis`                | Gets or sets the SecondaryAxis.                                       |
| `SecondaryAxisDefineBy`        | Gets or sets the SecondaryAxisDefineBy.                               |
| `GloballyAvailable`            | Gets or sets the GloballyAvailable.                                   |
| `Suppressed`                   | Gets or sets the Suppressed.                                          |
| `DataModelObjectCategory`      | Gets the current DataModelObject's category.                          |
| `Children`                     | Gets the list of children.                                            |
| `Comments`                     | Gets the list of associated comments.                                 |
| `Figures`                      | Gets the list of associated figures.                                  |
| `Images`                       | Gets the list of associated images.                                   |
| `ReadOnly`                     | Gets or sets the ReadOnly.                                            |
| `InternalObject`               | Gets the internal object. For advanced usage only.                    |
| `Properties`                   | Gets the list of properties for this object.                          |
| `VisibleProperties`            | Gets the list of properties that are visible for this object.         |

<a id="property-detail"></a>

## Property detail

### *property* CoordinateSystem.TransformationCount *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of transformations.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.IsGlobal *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsGlobal.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.OriginLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the origin location.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.OriginX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the origin X coordinate.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.OriginY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the origin Y coordinate.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.OriginZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the origin Z coordinate.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.OriginDefineBy *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType](../../../Mechanical/DataModel/Enums/CoordinateSystemAlignmentType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the origin define by.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.PrimaryAxisDirection *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Principal Axis Direction.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.SecondaryAxisDirection *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Secondary Axis Direction.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.PrimaryAxisLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the principal axis geometry selection.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.SecondaryAxisLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the orientation about principal axis geometry selection.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.CoordinateSystemType *: Ansys.ACT.Interfaces.Analysis.CoordinateSystemTypeEnum | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemType.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.APDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the APDLName.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCoordinateSystemAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.CoordinateSystemID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemID.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.TransformedConfiguration *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TransformedConfiguration.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.XAxisData *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxisData.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.YAxisData *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxisData.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.ZAxisData *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxisData.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.CoordinateSystemIDGeneration *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemIDGeneration.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.PrimaryAxis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PrimaryAxis.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.PrimaryAxisDefineBy *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType](../../../Mechanical/DataModel/Enums/CoordinateSystemAlignmentType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PrimaryAxisDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.SecondaryAxis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SecondaryAxis.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.SecondaryAxisDefineBy *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType](../../../Mechanical/DataModel/Enums/CoordinateSystemAlignmentType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SecondaryAxisDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.GloballyAvailable *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GloballyAvailable.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### CoordinateSystem.AddTransformation(trans: [Ansys.Mechanical.DataModel.Enums.TransformationType](../../../Mechanical/DataModel/Enums/TransformationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TransformationType), axis: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType))

Adds a new transformation.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.RemoveTransformation(index: System.UInt32)

Removes a tranformation.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.SetOriginLocation(originX: Ansys.Core.Units.Quantity, originY: Ansys.Core.Units.Quantity, originZ: Ansys.Core.Units.Quantity)

Changes the origin location.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.SetTransformationValue(index: System.UInt32, value: System.Object)

Sets the value of a transformation.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.GetTransformationValue(index: System.UInt32)

Gets the value of a transformation.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.MoveTransformationUp(index: System.UInt32)

Moves a transformation up.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.MoveTransformationDown(index: System.UInt32)

Moves a transformation down.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.SetPrimaryAxisUsingCenterOfMass()

Sets the primary axis using a 1 or 2 point selection and the center of mass

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.FlipX()

Flips the X Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.FlipY()

Flips the Y Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.FlipZ()

Flips the Z Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.OffsetX()

Creates an offset in the X Axis direction of the coordinate system

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.OffsetX(value: System.Object)

Creates an offset in the X Axis direction of the coordinate system

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.OffsetY()

Creates an offset in the Y Axis direction of the coordinate system

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.OffsetY(value: System.Object)

Creates an offset in the Y Axis direction of the coordinate system

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.OffsetZ()

Creates an offset in the Z Axis direction of the coordinate system

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.OffsetZ(value: System.Object)

Creates an offset in the Z Axis direction of the coordinate system

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.RotateX()

Creates a rotation about the X Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.RotateX(value: System.Object)

Creates a rotation about the X Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.RotateY()

Creates a rotation about the Y Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.RotateY(value: System.Object)

Creates a rotation about the Y Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.RotateZ()

Creates a rotation about the Z Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.RotateZ(value: System.Object)

Creates a rotation about the Z Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.SetCoordinateSystemOriginAtCenterOfMass(geoBodies: System.Collections.Generic.IList[Ansys.ACT.Interfaces.Geometry.IBaseGeoBody], pointMasses: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.PointMass](PointMass.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.PointMass)], distributedMasses: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.DistributedMass](DistributedMass.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.DistributedMass)])

SetCoordinateSystemOriginAtCenterOfMass method.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.CreateConstructionSurface()

Run the CreateConstructionSurface action.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.CreateSectionPlane()

Run the CreateSectionPlane action.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

