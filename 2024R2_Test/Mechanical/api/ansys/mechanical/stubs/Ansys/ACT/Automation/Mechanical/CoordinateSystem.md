# CoordinateSystem

### *class* CoordinateSystem

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CoordinateSystem.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddTransformation`](#CoordinateSystem.AddTransformation)                                             | Adds a new transformation.                                                        |
|--------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RemoveTransformation`](#CoordinateSystem.RemoveTransformation)                                       | Removes a tranformation.                                                          |
| [`SetOriginLocation`](#CoordinateSystem.SetOriginLocation)                                             | Changes the origin location.                                                      |
| [`SetTransformationValue`](#CoordinateSystem.SetTransformationValue)                                   | Sets the value of a transformation.                                               |
| [`GetTransformationValue`](#CoordinateSystem.GetTransformationValue)                                   | Gets the value of a transformation.                                               |
| [`MoveTransformationUp`](#CoordinateSystem.MoveTransformationUp)                                       | Moves a transformation up.                                                        |
| [`MoveTransformationDown`](#CoordinateSystem.MoveTransformationDown)                                   | Moves a transformation down.                                                      |
| [`SetPrimaryAxisUsingCenterOfMass`](#CoordinateSystem.SetPrimaryAxisUsingCenterOfMass)                 | Sets the primary axis using a 1 or 2 point selection and the center of mass       |
| [`FlipX`](#CoordinateSystem.FlipX)                                                                     | Flips the X Axis of the coordinate system                                         |
| [`FlipY`](#CoordinateSystem.FlipY)                                                                     | Flips the Y Axis of the coordinate system                                         |
| [`FlipZ`](#CoordinateSystem.FlipZ)                                                                     | Flips the Z Axis of the coordinate system                                         |
| [`OffsetX`](#id1)                                                                                      | Creates an offset in the X Axis direction of the coordinate system                |
| [`OffsetX`](#id1)                                                                                      | Creates an offset in the X Axis direction of the coordinate system                |
| [`OffsetY`](#id2)                                                                                      | Creates an offset in the Y Axis direction of the coordinate system                |
| [`OffsetY`](#id2)                                                                                      | Creates an offset in the Y Axis direction of the coordinate system                |
| [`OffsetZ`](#id3)                                                                                      | Creates an offset in the Z Axis direction of the coordinate system                |
| [`OffsetZ`](#id3)                                                                                      | Creates an offset in the Z Axis direction of the coordinate system                |
| [`RotateX`](#id4)                                                                                      | Creates a rotation about the X Axis of the coordinate system                      |
| [`RotateX`](#id4)                                                                                      | Creates a rotation about the X Axis of the coordinate system                      |
| [`RotateY`](#id5)                                                                                      | Creates a rotation about the Y Axis of the coordinate system                      |
| [`RotateY`](#id5)                                                                                      | Creates a rotation about the Y Axis of the coordinate system                      |
| [`RotateZ`](#id6)                                                                                      | Creates a rotation about the Z Axis of the coordinate system                      |
| [`RotateZ`](#id6)                                                                                      | Creates a rotation about the Z Axis of the coordinate system                      |
| [`SetCoordinateSystemOriginAtCenterOfMass`](#CoordinateSystem.SetCoordinateSystemOriginAtCenterOfMass) | SetCoordinateSystemOriginAtCenterOfMass method.                                   |
| [`CreateConstructionSurface`](#CoordinateSystem.CreateConstructionSurface)                             | Run the CreateConstructionSurface action.                                         |
| [`CreateSectionPlane`](#CoordinateSystem.CreateSectionPlane)                                           | Run the CreateSectionPlane action.                                                |
| [`Delete`](#CoordinateSystem.Delete)                                                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id7)                                                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id7)                                                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CoordinateSystem.AddComment)                                                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CoordinateSystem.AddFigure)                                                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CoordinateSystem.AddImage)                                                               | Creates a new child Image.                                                        |
| [`Activate`](#CoordinateSystem.Activate)                                                               | Activate the current object.                                                      |
| [`CopyTo`](#CoordinateSystem.CopyTo)                                                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CoordinateSystem.Duplicate)                                                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CoordinateSystem.GroupAllSimilarChildren)                                 | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CoordinateSystem.GroupSimilarObjects)                                         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CoordinateSystem.PropertyByName)                                                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CoordinateSystem.PropertyByAPIName)                                             | Get a property by its API name.                                                   |
| [`CreateParameter`](#CoordinateSystem.CreateParameter)                                                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CoordinateSystem.GetParameter)                                                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CoordinateSystem.RemoveParameter)                                                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`TransformationCount`](#CoordinateSystem.TransformationCount)                                                      | Gets the number of transformations.                                   |
|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`IsGlobal`](#CoordinateSystem.IsGlobal)                                                                            | Gets the IsGlobal.                                                    |
| [`OriginLocation`](#CoordinateSystem.OriginLocation)                                                                | Gets or sets the origin location.                                     |
| [`OriginX`](#CoordinateSystem.OriginX)                                                                              | Gets or sets the origin X coordinate.                                 |
| [`OriginY`](#CoordinateSystem.OriginY)                                                                              | Gets or sets the origin Y coordinate.                                 |
| [`OriginZ`](#CoordinateSystem.OriginZ)                                                                              | Gets or sets the origin Z coordinate.                                 |
| [`OriginDefineBy`](#CoordinateSystem.OriginDefineBy)                                                                | Gets or sets the origin define by.                                    |
| [`PrimaryAxisDirection`](#CoordinateSystem.PrimaryAxisDirection)                                                    | Gets or sets the Principal Axis Direction.                            |
| [`SecondaryAxisDirection`](#CoordinateSystem.SecondaryAxisDirection)                                                | Gets the Secondary Axis Direction.                                    |
| [`PrimaryAxisLocation`](#CoordinateSystem.PrimaryAxisLocation)                                                      | Gets or sets the principal axis geometry selection.                   |
| [`SecondaryAxisLocation`](#CoordinateSystem.SecondaryAxisLocation)                                                  | Gets or sets the orientation about principal axis geometry selection. |
| [`CoordinateSystemType`](../../../Mechanical/DataModel/Enums/CoordinateSystemType.md#CoordinateSystemType)          | Gets or sets the CoordinateSystemType.                                |
| [`APDLName`](#CoordinateSystem.APDLName)                                                                            | Gets or sets the APDLName.                                            |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                    |
| [`CoordinateSystemID`](#CoordinateSystem.CoordinateSystemID)                                                        | Gets or sets the CoordinateSystemID.                                  |
| [`TransformedConfiguration`](#CoordinateSystem.TransformedConfiguration)                                            | Gets the TransformedConfiguration.                                    |
| [`XAxisData`](#CoordinateSystem.XAxisData)                                                                          | Gets the XAxisData.                                                   |
| [`YAxisData`](#CoordinateSystem.YAxisData)                                                                          | Gets the YAxisData.                                                   |
| [`ZAxisData`](#CoordinateSystem.ZAxisData)                                                                          | Gets the ZAxisData.                                                   |
| [`CoordinateSystemIDGeneration`](#CoordinateSystem.CoordinateSystemIDGeneration)                                    | Gets or sets the CoordinateSystemIDGeneration.                        |
| [`PrimaryAxis`](#CoordinateSystem.PrimaryAxis)                                                                      | Gets or sets the PrimaryAxis.                                         |
| [`PrimaryAxisDefineBy`](#CoordinateSystem.PrimaryAxisDefineBy)                                                      | Gets or sets the PrimaryAxisDefineBy.                                 |
| [`SecondaryAxis`](#CoordinateSystem.SecondaryAxis)                                                                  | Gets or sets the SecondaryAxis.                                       |
| [`SecondaryAxisDefineBy`](#CoordinateSystem.SecondaryAxisDefineBy)                                                  | Gets or sets the SecondaryAxisDefineBy.                               |
| [`GloballyAvailable`](#CoordinateSystem.GloballyAvailable)                                                          | Gets or sets the GloballyAvailable.                                   |
| [`Suppressed`](#CoordinateSystem.Suppressed)                                                                        | Gets or sets the Suppressed.                                          |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                          |
| [`Children`](#CoordinateSystem.Children)                                                                            | Gets the list of children.                                            |
| [`Comments`](#CoordinateSystem.Comments)                                                                            | Gets the list of associated comments.                                 |
| [`Figures`](#CoordinateSystem.Figures)                                                                              | Gets the list of associated figures.                                  |
| [`Images`](#CoordinateSystem.Images)                                                                                | Gets the list of associated images.                                   |
| [`ReadOnly`](#CoordinateSystem.ReadOnly)                                                                            | Gets or sets the ReadOnly.                                            |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                    |
| [`Properties`](#CoordinateSystem.Properties)                                                                        | Gets the list of properties for this object.                          |
| [`VisibleProperties`](#CoordinateSystem.VisibleProperties)                                                          | Gets the list of properties that are visible for this object.         |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import CoordinateSystem
```

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

### *property* CoordinateSystem.OriginDefineBy *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType](../../../Mechanical/DataModel/Enums/CoordinateSystemAlignmentType.md#CoordinateSystemAlignmentType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* CoordinateSystem.CoordinateSystemIDGeneration *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemIDGeneration.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.PrimaryAxis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PrimaryAxis.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.PrimaryAxisDefineBy *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType](../../../Mechanical/DataModel/Enums/CoordinateSystemAlignmentType.md#CoordinateSystemAlignmentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PrimaryAxisDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.SecondaryAxis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SecondaryAxis.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.SecondaryAxisDefineBy *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType](../../../Mechanical/DataModel/Enums/CoordinateSystemAlignmentType.md#CoordinateSystemAlignmentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SecondaryAxisDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.GloballyAvailable *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GloballyAvailable.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystem.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

## Method detail

### CoordinateSystem.AddTransformation(trans: [Ansys.Mechanical.DataModel.Enums.TransformationType](../../../Mechanical/DataModel/Enums/TransformationType.md#TransformationType), axis: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#CoordinateSystemAxisType))

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

### CoordinateSystem.SetCoordinateSystemOriginAtCenterOfMass(geoBodies: System.Collections.Generic.IList[Ansys.ACT.Interfaces.Geometry.IBaseGeoBody], pointMasses: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.PointMass](PointMass.md#PointMass)], distributedMasses: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.DistributedMass](DistributedMass.md#DistributedMass)])

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

### CoordinateSystem.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### CoordinateSystem.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

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

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

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
