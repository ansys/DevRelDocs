# `Bearing`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Bearing"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.Bearing

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Bearing.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Bearing.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#Bearing.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#Bearing.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Bearing.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Bearing.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Bearing.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Bearing.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Bearing.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Bearing.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Bearing.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Bearing.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Bearing.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Bearing.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#Bearing.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PromoteToRemotePoint`](#Bearing.PromoteToRemotePoint)       | Run the PromoteToRemotePoint action.                                              |
| [`PropertyByAPIName`](#Bearing.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Bearing.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Bearing.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#Bearing.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AnsBCType`](#Bearing.AnsBCType)                                                     | Gets the AnsBCType.                                                                                                                                                                                                                          |
| [`Children`](#Bearing.Children)                                                       | Gets the list of children.                                                                                                                                                                                                                   |
| [`Comments`](#Bearing.Comments)                                                       | Gets the list of associated comments.                                                                                                                                                                                                        |
| [`ConnectionType`](#Bearing.ConnectionType)                                           | Gets or sets the ConnectionType.                                                                                                                                                                                                             |
| [`DampingC11`](#Bearing.DampingC11)                                                   | Gets the DampingC11.                                                                                                                                                                                                                         |
| [`DampingC12`](#Bearing.DampingC12)                                                   | Gets the DampingC12.                                                                                                                                                                                                                         |
| [`DampingC21`](#Bearing.DampingC21)                                                   | Gets the DampingC21.                                                                                                                                                                                                                         |
| [`DampingC22`](#Bearing.DampingC22)                                                   | Gets the DampingC22.                                                                                                                                                                                                                         |
| [`DataModelObjectCategory`](#Bearing.DataModelObjectCategory)                         | Gets the current DataModelObject’s category.                                                                                                                                                                                                 |
| [`Figures`](#Bearing.Figures)                                                         | Gets the list of associated figures.                                                                                                                                                                                                         |
| [`Images`](#Bearing.Images)                                                           | Gets the list of associated images.                                                                                                                                                                                                          |
| [`InternalObject`](#Bearing.InternalObject)                                           | Gets the internal object. For advanced usage only.                                                                                                                                                                                           |
| [`MobileBeamCoincidentLengthFactor`](#Bearing.MobileBeamCoincidentLengthFactor)       | Gets or sets the Coincident Length Factor on mobile side that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when the Behavior property is set to “Beam”. Default: 1.    |
| [`MobileBeamMaterial`](#Bearing.MobileBeamMaterial)                                   | Gets or sets the MobileBeamMaterial.                                                                                                                                                                                                         |
| [`MobileBeamRadius`](#Bearing.MobileBeamRadius)                                       | Gets or sets the MobileBeamRadius.                                                                                                                                                                                                           |
| [`MobileBehavior`](#Bearing.MobileBehavior)                                           | Gets or sets the MobileBehavior.                                                                                                                                                                                                             |
| [`MobileBody`](#Bearing.MobileBody)                                                   | Gets the MobileBody.                                                                                                                                                                                                                         |
| [`MobileCoordinateSystem`](#Bearing.MobileCoordinateSystem)                           | Gets or sets the MobileCoordinateSystem.                                                                                                                                                                                                     |
| [`MobileLocation`](#Bearing.MobileLocation)                                           | Gets or sets the MobileLocation.                                                                                                                                                                                                             |
| [`MobilePinballSize`](#Bearing.MobilePinballSize)                                     | Gets or sets the MobilePinballSize.                                                                                                                                                                                                          |
| [`MobileXCoordinate`](#Bearing.MobileXCoordinate)                                     | Gets or sets the MobileXCoordinate.                                                                                                                                                                                                          |
| [`MobileYCoordinate`](#Bearing.MobileYCoordinate)                                     | Gets or sets the MobileYCoordinate.                                                                                                                                                                                                          |
| [`MobileZCoordinate`](#Bearing.MobileZCoordinate)                                     | Gets or sets the MobileZCoordinate.                                                                                                                                                                                                          |
| [`Properties`](#Bearing.Properties)                                                   | Gets the list of properties for this object.                                                                                                                                                                                                 |
| [`ReadOnly`](#Bearing.ReadOnly)                                                       | Gets or sets the ReadOnly.                                                                                                                                                                                                                   |
| [`ReferenceBeamCoincidentLengthFactor`](#Bearing.ReferenceBeamCoincidentLengthFactor) | Gets or sets the Coincident Length Factor on reference side that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when the Behavior property is set to “Beam”. Default: 1. |
| [`ReferenceBeamMaterial`](#Bearing.ReferenceBeamMaterial)                             | Gets or sets the ReferenceBeamMaterial.                                                                                                                                                                                                      |
| [`ReferenceBeamRadius`](#Bearing.ReferenceBeamRadius)                                 | Gets or sets the ReferenceBeamRadius.                                                                                                                                                                                                        |
| [`ReferenceBehavior`](#Bearing.ReferenceBehavior)                                     | Gets or sets the ReferenceBehavior.                                                                                                                                                                                                          |
| [`ReferenceBodyName`](#Bearing.ReferenceBodyName)                                     | Gets the ReferenceBodyName.                                                                                                                                                                                                                  |
| [`ReferenceCoordinateSystem`](#Bearing.ReferenceCoordinateSystem)                     | Gets or sets the ReferenceCoordinateSystem.                                                                                                                                                                                                  |
| [`ReferenceLocation`](#Bearing.ReferenceLocation)                                     | Gets or sets the ReferenceLocation.                                                                                                                                                                                                          |
| [`ReferencePinballRegion`](#Bearing.ReferencePinballRegion)                           | Gets or sets the ReferencePinballRegion.                                                                                                                                                                                                     |
| [`ReferenceRotationPlane`](#Bearing.ReferenceRotationPlane)                           | Gets or sets the ReferenceRotationPlane.                                                                                                                                                                                                     |
| [`ReferenceSet`](#Bearing.ReferenceSet)                                               | Gets the ReferenceSet.                                                                                                                                                                                                                       |
| [`ReferenceXCoordinate`](#Bearing.ReferenceXCoordinate)                               | Gets or sets the ReferenceXCoordinate.                                                                                                                                                                                                       |
| [`ReferenceYCoordinate`](#Bearing.ReferenceYCoordinate)                               | Gets or sets the ReferenceYCoordinate.                                                                                                                                                                                                       |
| [`ReferenceZCoordinate`](#Bearing.ReferenceZCoordinate)                               | Gets or sets the ReferenceZCoordinate.                                                                                                                                                                                                       |
| [`StiffnessK11`](#Bearing.StiffnessK11)                                               | Gets the StiffnessK11.                                                                                                                                                                                                                       |
| [`StiffnessK12`](#Bearing.StiffnessK12)                                               | Gets the StiffnessK12.                                                                                                                                                                                                                       |
| [`StiffnessK21`](#Bearing.StiffnessK21)                                               | Gets the StiffnessK21.                                                                                                                                                                                                                       |
| [`StiffnessK22`](#Bearing.StiffnessK22)                                               | Gets the StiffnessK22.                                                                                                                                                                                                                       |
| [`Suppressed`](#Bearing.Suppressed)                                                   | Gets or sets the Suppressed.                                                                                                                                                                                                                 |
| [`VisibleProperties`](#Bearing.VisibleProperties)                                     | Gets the list of properties that are visible for this object.                                                                                                                                                                                |

<a id="property-detail"></a>

## Property detail

<a id="Bearing.AnsBCType"></a>

### *property* Bearing.AnsBCType *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AnsBCType.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Children"></a>

### *property* Bearing.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Comments"></a>

### *property* Bearing.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ConnectionType"></a>

### *property* Bearing.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.ConnectionScopingType](../../../../Mechanical/DataModel/Enums/ConnectionScopingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConnectionScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.DampingC11"></a>

### *property* Bearing.DampingC11 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingC11.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.DampingC12"></a>

### *property* Bearing.DampingC12 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingC12.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.DampingC21"></a>

### *property* Bearing.DampingC21 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingC21.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.DampingC22"></a>

### *property* Bearing.DampingC22 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingC22.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.DataModelObjectCategory"></a>

### *property* Bearing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Figures"></a>

### *property* Bearing.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Images"></a>

### *property* Bearing.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.InternalObject"></a>

### *property* Bearing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBearingAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileBeamCoincidentLengthFactor"></a>

### *property* Bearing.MobileBeamCoincidentLengthFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coincident Length Factor on mobile side that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when the Behavior property is set to “Beam”. Default: 1.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileBeamMaterial"></a>

### *property* Bearing.MobileBeamMaterial *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileBeamRadius"></a>

### *property* Bearing.MobileBeamRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileBehavior"></a>

### *property* Bearing.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileBody"></a>

### *property* Bearing.MobileBody *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MobileBody.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileCoordinateSystem"></a>

### *property* Bearing.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileLocation"></a>

### *property* Bearing.MobileLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobilePinballSize"></a>

### *property* Bearing.MobilePinballSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobilePinballSize.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileXCoordinate"></a>

### *property* Bearing.MobileXCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileYCoordinate"></a>

### *property* Bearing.MobileYCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileZCoordinate"></a>

### *property* Bearing.MobileZCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Properties"></a>

### *property* Bearing.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReadOnly"></a>

### *property* Bearing.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceBeamCoincidentLengthFactor"></a>

### *property* Bearing.ReferenceBeamCoincidentLengthFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coincident Length Factor on reference side that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when the Behavior property is set to “Beam”. Default: 1.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceBeamMaterial"></a>

### *property* Bearing.ReferenceBeamMaterial *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceBeamRadius"></a>

### *property* Bearing.ReferenceBeamRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceBehavior"></a>

### *property* Bearing.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceBodyName"></a>

### *property* Bearing.ReferenceBodyName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceBodyName.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceCoordinateSystem"></a>

### *property* Bearing.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceLocation"></a>

### *property* Bearing.ReferenceLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferencePinballRegion"></a>

### *property* Bearing.ReferencePinballRegion *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceRotationPlane"></a>

### *property* Bearing.ReferenceRotationPlane *: [Ansys.Mechanical.DataModel.Enums.RotationPlane](../../../../Mechanical/DataModel/Enums/RotationPlane.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RotationPlane) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceRotationPlane.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceSet"></a>

### *property* Bearing.ReferenceSet *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceSet.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceXCoordinate"></a>

### *property* Bearing.ReferenceXCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceYCoordinate"></a>

### *property* Bearing.ReferenceYCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceZCoordinate"></a>

### *property* Bearing.ReferenceZCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.StiffnessK11"></a>

### *property* Bearing.StiffnessK11 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StiffnessK11.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.StiffnessK12"></a>

### *property* Bearing.StiffnessK12 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StiffnessK12.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.StiffnessK21"></a>

### *property* Bearing.StiffnessK21 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StiffnessK21.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.StiffnessK22"></a>

### *property* Bearing.StiffnessK22 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StiffnessK22.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Suppressed"></a>

### *property* Bearing.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.VisibleProperties"></a>

### *property* Bearing.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Bearing.Activate"></a>

### Bearing.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.AddCommandSnippet"></a>

### Bearing.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](../CommandSnippet.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Bearing.AddComment"></a>

### Bearing.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.AddFigure"></a>

### Bearing.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.AddImage"></a>

### Bearing.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Bearing.CopyTo"></a>

### Bearing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.CreateParameter"></a>

### Bearing.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Delete"></a>

### Bearing.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Duplicate"></a>

### Bearing.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetChildren"></a>

### Bearing.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetParameter"></a>

### Bearing.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GroupAllSimilarChildren"></a>

### Bearing.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GroupSimilarObjects"></a>

### Bearing.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.PromoteToNamedSelection"></a>

### Bearing.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.PromoteToRemotePoint"></a>

### Bearing.PromoteToRemotePoint() → Iterable[[Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.RemotePoint)]

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.PropertyByAPIName"></a>

### Bearing.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Bearing.PropertyByName"></a>

### Bearing.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.RemoveParameter"></a>

### Bearing.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.RenameBasedOnDefinition"></a>

### Bearing.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

