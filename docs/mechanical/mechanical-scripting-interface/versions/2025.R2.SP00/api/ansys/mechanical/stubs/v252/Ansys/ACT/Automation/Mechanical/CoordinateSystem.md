# `CoordinateSystem`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CoordinateSystem

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CoordinateSystem.Activate)                                                               | Activate the current object.                                                      |
| [`AddComment`](#CoordinateSystem.AddComment)                                                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CoordinateSystem.AddFigure)                                                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CoordinateSystem.AddImage)                                                               | Creates a new child Image.                                                        |
| [`AddTransformation`](#CoordinateSystem.AddTransformation)                                             | Adds a new transformation.                                                        |
| [`CopyTo`](#CoordinateSystem.CopyTo)                                                                   | Copies all visible properties from this object to another.                        |
| [`CreateConstructionSurface`](#CoordinateSystem.CreateConstructionSurface)                             | Run the CreateConstructionSurface action.                                         |
| [`CreateParameter`](#CoordinateSystem.CreateParameter)                                                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CoordinateSystem.Delete)                                                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CoordinateSystem.Duplicate)                                                             | Creates a copy of the current DataModelObject.                                    |
| [`FlipX`](#CoordinateSystem.FlipX)                                                                     | Flips the X Axis of the coordinate system                                         |
| [`FlipY`](#CoordinateSystem.FlipY)                                                                     | Flips the Y Axis of the coordinate system                                         |
| [`FlipZ`](#CoordinateSystem.FlipZ)                                                                     | Flips the Z Axis of the coordinate system                                         |
| [`GetChildren`](#CoordinateSystem.GetChildren)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CoordinateSystem.GetParameter)                                                       | Gets the parameter corresponding to the given property.                           |
| [`GetTransformationValue`](#CoordinateSystem.GetTransformationValue)                                   | Gets the value of a transformation.                                               |
| [`GroupAllSimilarChildren`](#CoordinateSystem.GroupAllSimilarChildren)                                 | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CoordinateSystem.GroupSimilarObjects)                                         | Run the GroupSimilarObjects action.                                               |
| [`MoveTransformationDown`](#CoordinateSystem.MoveTransformationDown)                                   | Moves a transformation down.                                                      |
| [`MoveTransformationUp`](#CoordinateSystem.MoveTransformationUp)                                       | Moves a transformation up.                                                        |
| [`OffsetX`](#CoordinateSystem.OffsetX)                                                                 | Creates an offset in the X Axis direction of the coordinate system                |
| [`OffsetY`](#CoordinateSystem.OffsetY)                                                                 | Creates an offset in the Y Axis direction of the coordinate system                |
| [`OffsetZ`](#CoordinateSystem.OffsetZ)                                                                 | Creates an offset in the Z Axis direction of the coordinate system                |
| [`PropertyByAPIName`](#CoordinateSystem.PropertyByAPIName)                                             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CoordinateSystem.PropertyByName)                                                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CoordinateSystem.RemoveParameter)                                                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RemoveTransformation`](#CoordinateSystem.RemoveTransformation)                                       | Removes a tranformation.                                                          |
| [`RotateX`](#CoordinateSystem.RotateX)                                                                 | Creates a rotation about the X Axis of the coordinate system                      |
| [`RotateY`](#CoordinateSystem.RotateY)                                                                 | Creates a rotation about the Y Axis of the coordinate system                      |
| [`RotateZ`](#CoordinateSystem.RotateZ)                                                                 | Creates a rotation about the Z Axis of the coordinate system                      |
| [`SetCoordinateSystemOriginAtCenterOfMass`](#CoordinateSystem.SetCoordinateSystemOriginAtCenterOfMass) | SetCoordinateSystemOriginAtCenterOfMass method.                                   |
| [`SetOriginLocation`](#CoordinateSystem.SetOriginLocation)                                             | Changes the origin location.                                                      |
| [`SetPrimaryAxisUsingCenterOfMass`](#CoordinateSystem.SetPrimaryAxisUsingCenterOfMass)                 | Sets the primary axis using a 1 or 2 point selection and the center of mass       |
| [`SetTransformationValue`](#CoordinateSystem.SetTransformationValue)                                   | Sets the value of a transformation.                                               |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`APDLName`](#CoordinateSystem.APDLName)                                                         | Gets or sets the APDLName.                                            |
| [`Children`](#CoordinateSystem.Children)                                                         | Gets the list of children.                                            |
| [`Comments`](#CoordinateSystem.Comments)                                                         | Gets the list of associated comments.                                 |
| [`CoordinateSystemID`](#CoordinateSystem.CoordinateSystemID)                                     | Gets or sets the CoordinateSystemID.                                  |
| [`CoordinateSystemIDGeneration`](#CoordinateSystem.CoordinateSystemIDGeneration)                 | Gets or sets the CoordinateSystemIDGeneration.                        |
| [`CoordinateSystemType`](#CoordinateSystem.CoordinateSystemType) | Gets or sets the CoordinateSystemType.                                |
| [`DataModelObjectCategory`](#CoordinateSystem.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                          |
| [`Figures`](#CoordinateSystem.Figures)                                                           | Gets the list of associated figures.                                  |
| [`GloballyAvailable`](#CoordinateSystem.GloballyAvailable)                                       | Gets or sets the GloballyAvailable.                                   |
| [`Images`](#CoordinateSystem.Images)                                                             | Gets the list of associated images.                                   |
| [`InternalObject`](#CoordinateSystem.InternalObject)                                             | Gets the internal object. For advanced usage only.                    |
| [`IsGlobal`](#CoordinateSystem.IsGlobal)                                                         | Gets the IsGlobal.                                                    |
| [`OriginDefineBy`](#CoordinateSystem.OriginDefineBy)                                             | Gets or sets the origin define by.                                    |
| [`OriginLocation`](#CoordinateSystem.OriginLocation)                                             | Gets or sets the origin location.                                     |
| [`OriginX`](#CoordinateSystem.OriginX)                                                           | Gets or sets the origin X coordinate.                                 |
| [`OriginY`](#CoordinateSystem.OriginY)                                                           | Gets or sets the origin Y coordinate.                                 |
| [`OriginZ`](#CoordinateSystem.OriginZ)                                                           | Gets or sets the origin Z coordinate.                                 |
| [`PrimaryAxis`](#CoordinateSystem.PrimaryAxis)                                                   | Gets or sets the PrimaryAxis.                                         |
| [`PrimaryAxisDefineBy`](#CoordinateSystem.PrimaryAxisDefineBy)                                   | Gets or sets the PrimaryAxisDefineBy.                                 |
| [`PrimaryAxisDirection`](#CoordinateSystem.PrimaryAxisDirection)                                 | Gets or sets the Principal Axis Direction.                            |
| [`PrimaryAxisLocation`](#CoordinateSystem.PrimaryAxisLocation)                                   | Gets or sets the principal axis geometry selection.                   |
| [`Properties`](#CoordinateSystem.Properties)                                                     | Gets the list of properties for this object.                          |
| [`ReadOnly`](#CoordinateSystem.ReadOnly)                                                         | Gets or sets the ReadOnly.                                            |
| [`SecondaryAxis`](#CoordinateSystem.SecondaryAxis)                                               | Gets or sets the SecondaryAxis.                                       |
| [`SecondaryAxisDefineBy`](#CoordinateSystem.SecondaryAxisDefineBy)                               | Gets or sets the SecondaryAxisDefineBy.                               |
| [`SecondaryAxisDirection`](#CoordinateSystem.SecondaryAxisDirection)                             | Gets the Secondary Axis Direction.                                    |
| [`SecondaryAxisLocation`](#CoordinateSystem.SecondaryAxisLocation)                               | Gets or sets the orientation about principal axis geometry selection. |
| [`Suppressed`](#CoordinateSystem.Suppressed)                                                     | Gets or sets the Suppressed.                                          |
| [`TransformationCount`](#CoordinateSystem.TransformationCount)                                   | Gets the number of transformations.                                   |
| [`TransformedConfiguration`](#CoordinateSystem.TransformedConfiguration)                         | Gets the TransformedConfiguration.                                    |
| [`VisibleProperties`](#CoordinateSystem.VisibleProperties)                                       | Gets the list of properties that are visible for this object.         |
| [`XAxisData`](#CoordinateSystem.XAxisData)                                                       | Gets the XAxisData.                                                   |
| [`YAxisData`](#CoordinateSystem.YAxisData)                                                       | Gets the YAxisData.                                                   |
| [`ZAxisData`](#CoordinateSystem.ZAxisData)                                                       | Gets the ZAxisData.                                                   |

<a id="property-detail"></a>

## Property detail

<a id="CoordinateSystem.APDLName"></a>

### *property* CoordinateSystem.APDLName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the APDLName.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.Children"></a>

### *property* CoordinateSystem.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.Comments"></a>

### *property* CoordinateSystem.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.CoordinateSystemID"></a>

### *property* CoordinateSystem.CoordinateSystemID *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemID.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.CoordinateSystemIDGeneration"></a>

### *property* CoordinateSystem.CoordinateSystemIDGeneration *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemIDGeneration.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.CoordinateSystemType"></a>

### *property* CoordinateSystem.CoordinateSystemType *: Ansys.ACT.Interfaces.Analysis.CoordinateSystemTypeEnum | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemType.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.DataModelObjectCategory"></a>

### *property* CoordinateSystem.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.Figures"></a>

### *property* CoordinateSystem.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.GloballyAvailable"></a>

### *property* CoordinateSystem.GloballyAvailable *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GloballyAvailable.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.Images"></a>

### *property* CoordinateSystem.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.InternalObject"></a>

### *property* CoordinateSystem.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCoordinateSystemAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.IsGlobal"></a>

### *property* CoordinateSystem.IsGlobal *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsGlobal.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.OriginDefineBy"></a>

### *property* CoordinateSystem.OriginDefineBy *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType](../../../Mechanical/DataModel/Enums/CoordinateSystemAlignmentType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the origin define by.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.OriginLocation"></a>

### *property* CoordinateSystem.OriginLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the origin location.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.OriginX"></a>

### *property* CoordinateSystem.OriginX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the origin X coordinate.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.OriginY"></a>

### *property* CoordinateSystem.OriginY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the origin Y coordinate.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.OriginZ"></a>

### *property* CoordinateSystem.OriginZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the origin Z coordinate.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.PrimaryAxis"></a>

### *property* CoordinateSystem.PrimaryAxis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PrimaryAxis.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.PrimaryAxisDefineBy"></a>

### *property* CoordinateSystem.PrimaryAxisDefineBy *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType](../../../Mechanical/DataModel/Enums/CoordinateSystemAlignmentType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PrimaryAxisDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.PrimaryAxisDirection"></a>

### *property* CoordinateSystem.PrimaryAxisDirection *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Principal Axis Direction.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.PrimaryAxisLocation"></a>

### *property* CoordinateSystem.PrimaryAxisLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the principal axis geometry selection.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.Properties"></a>

### *property* CoordinateSystem.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.ReadOnly"></a>

### *property* CoordinateSystem.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.SecondaryAxis"></a>

### *property* CoordinateSystem.SecondaryAxis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SecondaryAxis.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.SecondaryAxisDefineBy"></a>

### *property* CoordinateSystem.SecondaryAxisDefineBy *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType](../../../Mechanical/DataModel/Enums/CoordinateSystemAlignmentType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SecondaryAxisDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.SecondaryAxisDirection"></a>

### *property* CoordinateSystem.SecondaryAxisDirection *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Secondary Axis Direction.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.SecondaryAxisLocation"></a>

### *property* CoordinateSystem.SecondaryAxisLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the orientation about principal axis geometry selection.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.Suppressed"></a>

### *property* CoordinateSystem.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.TransformationCount"></a>

### *property* CoordinateSystem.TransformationCount *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of transformations.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.TransformedConfiguration"></a>

### *property* CoordinateSystem.TransformedConfiguration *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TransformedConfiguration.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.VisibleProperties"></a>

### *property* CoordinateSystem.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.XAxisData"></a>

### *property* CoordinateSystem.XAxisData *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxisData.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.YAxisData"></a>

### *property* CoordinateSystem.YAxisData *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxisData.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.ZAxisData"></a>

### *property* CoordinateSystem.ZAxisData *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxisData.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CoordinateSystem.Activate"></a>

### CoordinateSystem.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.AddComment"></a>

### CoordinateSystem.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.AddFigure"></a>

### CoordinateSystem.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.AddImage"></a>

### CoordinateSystem.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.AddTransformation"></a>

### CoordinateSystem.AddTransformation(trans: [Ansys.Mechanical.DataModel.Enums.TransformationType](../../../Mechanical/DataModel/Enums/TransformationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TransformationType), axis: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType)) → [None](https://docs.python.org/3/library/constants.html#None)

Adds a new transformation.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.CopyTo"></a>

### CoordinateSystem.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.CreateConstructionSurface"></a>

### CoordinateSystem.CreateConstructionSurface() → [None](https://docs.python.org/3/library/constants.html#None)

Run the CreateConstructionSurface action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.CreateParameter"></a>

### CoordinateSystem.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.Delete"></a>

### CoordinateSystem.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.Duplicate"></a>

### CoordinateSystem.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.FlipX"></a>

### CoordinateSystem.FlipX() → [None](https://docs.python.org/3/library/constants.html#None)

Flips the X Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.FlipY"></a>

### CoordinateSystem.FlipY() → [None](https://docs.python.org/3/library/constants.html#None)

Flips the Y Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.FlipZ"></a>

### CoordinateSystem.FlipZ() → [None](https://docs.python.org/3/library/constants.html#None)

Flips the Z Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.GetChildren"></a>

### CoordinateSystem.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.GetParameter"></a>

### CoordinateSystem.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.GetTransformationValue"></a>

### CoordinateSystem.GetTransformationValue(index: [int](https://docs.python.org/3/library/functions.html#int)) → Any

Gets the value of a transformation.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.GroupAllSimilarChildren"></a>

### CoordinateSystem.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.GroupSimilarObjects"></a>

### CoordinateSystem.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.MoveTransformationDown"></a>

### CoordinateSystem.MoveTransformationDown(index: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Moves a transformation down.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.MoveTransformationUp"></a>

### CoordinateSystem.MoveTransformationUp(index: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Moves a transformation up.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.OffsetX"></a>

### CoordinateSystem.OffsetX() → [None](https://docs.python.org/3/library/constants.html#None)

Creates an offset in the X Axis direction of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.OffsetY"></a>

### CoordinateSystem.OffsetY() → [None](https://docs.python.org/3/library/constants.html#None)

Creates an offset in the Y Axis direction of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.OffsetZ"></a>

### CoordinateSystem.OffsetZ() → [None](https://docs.python.org/3/library/constants.html#None)

Creates an offset in the Z Axis direction of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.PropertyByAPIName"></a>

### CoordinateSystem.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.PropertyByName"></a>

### CoordinateSystem.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.RemoveParameter"></a>

### CoordinateSystem.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.RemoveTransformation"></a>

### CoordinateSystem.RemoveTransformation(index: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes a tranformation.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.RotateX"></a>

### CoordinateSystem.RotateX() → [None](https://docs.python.org/3/library/constants.html#None)

Creates a rotation about the X Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.RotateY"></a>

### CoordinateSystem.RotateY() → [None](https://docs.python.org/3/library/constants.html#None)

Creates a rotation about the Y Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.RotateZ"></a>

### CoordinateSystem.RotateZ() → [None](https://docs.python.org/3/library/constants.html#None)

Creates a rotation about the Z Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.SetCoordinateSystemOriginAtCenterOfMass"></a>

### CoordinateSystem.SetCoordinateSystemOriginAtCenterOfMass(geoBodies: List[Ansys.ACT.Interfaces.Geometry.IBaseGeoBody], pointMasses: List[[Ansys.ACT.Automation.Mechanical.PointMass](PointMass.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.PointMass)], distributedMasses: List[[Ansys.ACT.Automation.Mechanical.DistributedMass](DistributedMass.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.DistributedMass)]) → [None](https://docs.python.org/3/library/constants.html#None)

SetCoordinateSystemOriginAtCenterOfMass method.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.SetOriginLocation"></a>

### CoordinateSystem.SetOriginLocation(originX: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity), originY: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity), originZ: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Changes the origin location.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.SetPrimaryAxisUsingCenterOfMass"></a>

### CoordinateSystem.SetPrimaryAxisUsingCenterOfMass() → [None](https://docs.python.org/3/library/constants.html#None)

Sets the primary axis using a 1 or 2 point selection and the center of mass

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.SetTransformationValue"></a>

### CoordinateSystem.SetTransformationValue(index: [int](https://docs.python.org/3/library/functions.html#int), value: Any) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the value of a transformation.

<!-- !! processed by numpydoc !! -->

