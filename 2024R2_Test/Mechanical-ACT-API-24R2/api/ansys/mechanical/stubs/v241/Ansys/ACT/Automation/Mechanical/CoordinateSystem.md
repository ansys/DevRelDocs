# `CoordinateSystem`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddTransformation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.AddTransformation)                                             | Adds a new transformation.                                                        |
| [`RemoveTransformation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.RemoveTransformation)                                       | Removes a tranformation.                                                          |
| [`SetOriginLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.SetOriginLocation)                                             | Changes the origin location.                                                      |
| [`SetTransformationValue`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.SetTransformationValue)                                   | Sets the value of a transformation.                                               |
| [`GetTransformationValue`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.GetTransformationValue)                                   | Gets the value of a transformation.                                               |
| [`MoveTransformationUp`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.MoveTransformationUp)                                       | Moves a transformation up.                                                        |
| [`MoveTransformationDown`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.MoveTransformationDown)                                   | Moves a transformation down.                                                      |
| [`SetPrimaryAxisUsingCenterOfMass`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.SetPrimaryAxisUsingCenterOfMass)                 | Sets the primary axis using a 1 or 2 point selection and the center of mass       |
| [`FlipX`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.FlipX)                                                                     | Flips the X Axis of the coordinate system                                         |
| [`FlipY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.FlipY)                                                                     | Flips the Y Axis of the coordinate system                                         |
| [`FlipZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.FlipZ)                                                                     | Flips the Z Axis of the coordinate system                                         |
| [`OffsetX`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#id1)                                                                                      | Creates an offset in the X Axis direction of the coordinate system                |
| [`OffsetX`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#id1)                                                                                      | Creates an offset in the X Axis direction of the coordinate system                |
| [`OffsetY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#id2)                                                                                      | Creates an offset in the Y Axis direction of the coordinate system                |
| [`OffsetY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#id2)                                                                                      | Creates an offset in the Y Axis direction of the coordinate system                |
| [`OffsetZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#id3)                                                                                      | Creates an offset in the Z Axis direction of the coordinate system                |
| [`OffsetZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#id3)                                                                                      | Creates an offset in the Z Axis direction of the coordinate system                |
| [`RotateX`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#id4)                                                                                      | Creates a rotation about the X Axis of the coordinate system                      |
| [`RotateX`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#id4)                                                                                      | Creates a rotation about the X Axis of the coordinate system                      |
| [`RotateY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#id5)                                                                                      | Creates a rotation about the Y Axis of the coordinate system                      |
| [`RotateY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#id5)                                                                                      | Creates a rotation about the Y Axis of the coordinate system                      |
| [`RotateZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#id6)                                                                                      | Creates a rotation about the Z Axis of the coordinate system                      |
| [`RotateZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#id6)                                                                                      | Creates a rotation about the Z Axis of the coordinate system                      |
| [`SetCoordinateSystemOriginAtCenterOfMass`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.SetCoordinateSystemOriginAtCenterOfMass) | SetCoordinateSystemOriginAtCenterOfMass method.                                   |
| [`CreateConstructionSurface`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.CreateConstructionSurface)                             | Run the CreateConstructionSurface action.                                         |
| [`CreateSectionPlane`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.CreateSectionPlane)                                           | Run the CreateSectionPlane action.                                                |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.Delete)                                                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#id7)                                                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#id7)                                                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.AddComment)                                                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.AddFigure)                                                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.AddImage)                                                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.Activate)                                                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.CopyTo)                                                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.Duplicate)                                                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.GroupAllSimilarChildren)                                 | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.GroupSimilarObjects)                                         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.PropertyByName)                                                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.PropertyByAPIName)                                             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.CreateParameter)                                                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.GetParameter)                                                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.RemoveParameter)                                                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`TransformationCount`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.TransformationCount)                   | Gets the number of transformations.                                   |
| [`IsGlobal`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.IsGlobal)                                         | Gets the IsGlobal.                                                    |
| [`OriginLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.OriginLocation)                             | Gets or sets the origin location.                                     |
| [`OriginX`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.OriginX)                                           | Gets or sets the origin X coordinate.                                 |
| [`OriginY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.OriginY)                                           | Gets or sets the origin Y coordinate.                                 |
| [`OriginZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.OriginZ)                                           | Gets or sets the origin Z coordinate.                                 |
| [`OriginDefineBy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.OriginDefineBy)                             | Gets or sets the origin define by.                                    |
| [`PrimaryAxisDirection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.PrimaryAxisDirection)                 | Gets or sets the Principal Axis Direction.                            |
| [`SecondaryAxisDirection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.SecondaryAxisDirection)             | Gets the Secondary Axis Direction.                                    |
| [`PrimaryAxisLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.PrimaryAxisLocation)                   | Gets or sets the principal axis geometry selection.                   |
| [`SecondaryAxisLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.SecondaryAxisLocation)               | Gets or sets the orientation about principal axis geometry selection. |
| [`CoordinateSystemType`](../../../../../v242/Ansys/ACT/Common/CoordinateSystem.md#CoordinateSystem.CoordinateSystemType)                                | Gets or sets the CoordinateSystemType.                                |
| [`APDLName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.APDLName)                                         | Gets or sets the APDLName.                                            |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#id0)                                                         | Gets the internal object. For advanced usage only.                    |
| [`CoordinateSystemID`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.CoordinateSystemID)                     | Gets or sets the CoordinateSystemID.                                  |
| [`TransformedConfiguration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.TransformedConfiguration)         | Gets the TransformedConfiguration.                                    |
| [`XAxisData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.XAxisData)                                       | Gets the XAxisData.                                                   |
| [`YAxisData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.YAxisData)                                       | Gets the YAxisData.                                                   |
| [`ZAxisData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.ZAxisData)                                       | Gets the ZAxisData.                                                   |
| [`CoordinateSystemIDGeneration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.CoordinateSystemIDGeneration) | Gets or sets the CoordinateSystemIDGeneration.                        |
| [`PrimaryAxis`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.PrimaryAxis)                                   | Gets or sets the PrimaryAxis.                                         |
| [`PrimaryAxisDefineBy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.PrimaryAxisDefineBy)                   | Gets or sets the PrimaryAxisDefineBy.                                 |
| [`SecondaryAxis`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.SecondaryAxis)                               | Gets or sets the SecondaryAxis.                                       |
| [`SecondaryAxisDefineBy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.SecondaryAxisDefineBy)               | Gets or sets the SecondaryAxisDefineBy.                               |
| [`GloballyAvailable`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.GloballyAvailable)                       | Gets or sets the GloballyAvailable.                                   |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.Suppressed)                                     | Gets or sets the Suppressed.                                          |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.DataModelObjectCategory)           | Gets the current DataModelObject’s category.                          |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.Children)                                         | Gets the list of children.                                            |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.Comments)                                         | Gets the list of associated comments.                                 |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.Figures)                                           | Gets the list of associated figures.                                  |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.Images)                                             | Gets the list of associated images.                                   |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.ReadOnly)                                         | Gets or sets the ReadOnly.                                            |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#id0)                                                         | Gets the internal object. For advanced usage only.                    |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.Properties)                                     | Gets the list of properties for this object.                          |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#CoordinateSystem.VisibleProperties)                       | Gets the list of properties that are visible for this object.         |

<a id="property-detail"></a>

## Property detail

<a id="CoordinateSystem.TransformationCount"></a>

### *property* CoordinateSystem.TransformationCount *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of transformations.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.IsGlobal"></a>

### *property* CoordinateSystem.IsGlobal *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsGlobal.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.OriginLocation"></a>

### *property* CoordinateSystem.OriginLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the origin location.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.OriginX"></a>

### *property* CoordinateSystem.OriginX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the origin X coordinate.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.OriginY"></a>

### *property* CoordinateSystem.OriginY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the origin Y coordinate.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.OriginZ"></a>

### *property* CoordinateSystem.OriginZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the origin Z coordinate.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.OriginDefineBy"></a>

### *property* CoordinateSystem.OriginDefineBy *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType](../../../Mechanical/DataModel/Enums/CoordinateSystemAlignmentType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the origin define by.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.PrimaryAxisDirection"></a>

### *property* CoordinateSystem.PrimaryAxisDirection *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Principal Axis Direction.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.SecondaryAxisDirection"></a>

### *property* CoordinateSystem.SecondaryAxisDirection *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Secondary Axis Direction.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.PrimaryAxisLocation"></a>

### *property* CoordinateSystem.PrimaryAxisLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the principal axis geometry selection.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.SecondaryAxisLocation"></a>

### *property* CoordinateSystem.SecondaryAxisLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the orientation about principal axis geometry selection.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.CoordinateSystemType"></a>

### *property* CoordinateSystem.CoordinateSystemType *: Ansys.ACT.Interfaces.Analysis.CoordinateSystemTypeEnum | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemType.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.APDLName"></a>

### *property* CoordinateSystem.APDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the APDLName.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.InternalObject"></a>

### *property* CoordinateSystem.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCoordinateSystemAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.CoordinateSystemID"></a>

### *property* CoordinateSystem.CoordinateSystemID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemID.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.TransformedConfiguration"></a>

### *property* CoordinateSystem.TransformedConfiguration *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TransformedConfiguration.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.XAxisData"></a>

### *property* CoordinateSystem.XAxisData *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxisData.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.YAxisData"></a>

### *property* CoordinateSystem.YAxisData *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxisData.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.ZAxisData"></a>

### *property* CoordinateSystem.ZAxisData *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxisData.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.CoordinateSystemIDGeneration"></a>

### *property* CoordinateSystem.CoordinateSystemIDGeneration *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemIDGeneration.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.PrimaryAxis"></a>

### *property* CoordinateSystem.PrimaryAxis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PrimaryAxis.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.PrimaryAxisDefineBy"></a>

### *property* CoordinateSystem.PrimaryAxisDefineBy *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType](../../../Mechanical/DataModel/Enums/CoordinateSystemAlignmentType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PrimaryAxisDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.SecondaryAxis"></a>

### *property* CoordinateSystem.SecondaryAxis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SecondaryAxis.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.SecondaryAxisDefineBy"></a>

### *property* CoordinateSystem.SecondaryAxisDefineBy *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType](../../../Mechanical/DataModel/Enums/CoordinateSystemAlignmentType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAlignmentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SecondaryAxisDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.GloballyAvailable"></a>

### *property* CoordinateSystem.GloballyAvailable *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GloballyAvailable.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.Suppressed"></a>

### *property* CoordinateSystem.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.DataModelObjectCategory"></a>

### *property* CoordinateSystem.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.Children"></a>

### *property* CoordinateSystem.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.Comments"></a>

### *property* CoordinateSystem.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.Figures"></a>

### *property* CoordinateSystem.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.Images"></a>

### *property* CoordinateSystem.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.ReadOnly"></a>

### *property* CoordinateSystem.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CoordinateSystem.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.Properties"></a>

### *property* CoordinateSystem.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.VisibleProperties"></a>

### *property* CoordinateSystem.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CoordinateSystem.AddTransformation"></a>

### CoordinateSystem.AddTransformation(trans: [Ansys.Mechanical.DataModel.Enums.TransformationType](../../../Mechanical/DataModel/Enums/TransformationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TransformationType), axis: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType))

Adds a new transformation.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.RemoveTransformation"></a>

### CoordinateSystem.RemoveTransformation(index: System.UInt32)

Removes a tranformation.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.SetOriginLocation"></a>

### CoordinateSystem.SetOriginLocation(originX: Ansys.Core.Units.Quantity, originY: Ansys.Core.Units.Quantity, originZ: Ansys.Core.Units.Quantity)

Changes the origin location.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.SetTransformationValue"></a>

### CoordinateSystem.SetTransformationValue(index: System.UInt32, value: System.Object)

Sets the value of a transformation.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.GetTransformationValue"></a>

### CoordinateSystem.GetTransformationValue(index: System.UInt32)

Gets the value of a transformation.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.MoveTransformationUp"></a>

### CoordinateSystem.MoveTransformationUp(index: System.UInt32)

Moves a transformation up.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.MoveTransformationDown"></a>

### CoordinateSystem.MoveTransformationDown(index: System.UInt32)

Moves a transformation down.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.SetPrimaryAxisUsingCenterOfMass"></a>

### CoordinateSystem.SetPrimaryAxisUsingCenterOfMass()

Sets the primary axis using a 1 or 2 point selection and the center of mass

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.FlipX"></a>

### CoordinateSystem.FlipX()

Flips the X Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.FlipY"></a>

### CoordinateSystem.FlipY()

Flips the Y Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.FlipZ"></a>

### CoordinateSystem.FlipZ()

Flips the Z Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.OffsetX"></a>

### CoordinateSystem.OffsetX()

Creates an offset in the X Axis direction of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CoordinateSystem.OffsetX(value: System.Object)

Creates an offset in the X Axis direction of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.OffsetY"></a>

### CoordinateSystem.OffsetY()

Creates an offset in the Y Axis direction of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### CoordinateSystem.OffsetY(value: System.Object)

Creates an offset in the Y Axis direction of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.OffsetZ"></a>

### CoordinateSystem.OffsetZ()

Creates an offset in the Z Axis direction of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="id3"></a>

### CoordinateSystem.OffsetZ(value: System.Object)

Creates an offset in the Z Axis direction of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.RotateX"></a>

### CoordinateSystem.RotateX()

Creates a rotation about the X Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="id4"></a>

### CoordinateSystem.RotateX(value: System.Object)

Creates a rotation about the X Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.RotateY"></a>

### CoordinateSystem.RotateY()

Creates a rotation about the Y Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### CoordinateSystem.RotateY(value: System.Object)

Creates a rotation about the Y Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.RotateZ"></a>

### CoordinateSystem.RotateZ()

Creates a rotation about the Z Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### CoordinateSystem.RotateZ(value: System.Object)

Creates a rotation about the Z Axis of the coordinate system

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.SetCoordinateSystemOriginAtCenterOfMass"></a>

### CoordinateSystem.SetCoordinateSystemOriginAtCenterOfMass(geoBodies: System.Collections.Generic.IList[Ansys.ACT.Interfaces.Geometry.IBaseGeoBody], pointMasses: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.PointMass](PointMass.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.PointMass)], distributedMasses: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.DistributedMass](DistributedMass.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.DistributedMass)])

SetCoordinateSystemOriginAtCenterOfMass method.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.CreateConstructionSurface"></a>

### CoordinateSystem.CreateConstructionSurface()

Run the CreateConstructionSurface action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.CreateSectionPlane"></a>

### CoordinateSystem.CreateSectionPlane()

Run the CreateSectionPlane action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.Delete"></a>

### CoordinateSystem.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.GetChildren"></a>

### CoordinateSystem.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### CoordinateSystem.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.AddComment"></a>

### CoordinateSystem.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.AddFigure"></a>

### CoordinateSystem.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.AddImage"></a>

### CoordinateSystem.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.Activate"></a>

### CoordinateSystem.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.CopyTo"></a>

### CoordinateSystem.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.Duplicate"></a>

### CoordinateSystem.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.GroupAllSimilarChildren"></a>

### CoordinateSystem.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.GroupSimilarObjects"></a>

### CoordinateSystem.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.PropertyByName"></a>

### CoordinateSystem.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.PropertyByAPIName"></a>

### CoordinateSystem.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.CreateParameter"></a>

### CoordinateSystem.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.GetParameter"></a>

### CoordinateSystem.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystem.RemoveParameter"></a>

### CoordinateSystem.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

