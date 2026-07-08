# `Spring`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.Spring

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Spring.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Spring.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#Spring.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#Spring.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Spring.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Spring.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Spring.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Spring.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Spring.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Spring.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Spring.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Spring.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Spring.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Spring.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#Spring.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PromoteToRemotePoint`](#Spring.PromoteToRemotePoint)       | Run the PromoteToRemotePoint action.                                              |
| [`PropertyByAPIName`](#Spring.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Spring.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Spring.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#Spring.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|-------------------------------------------------------------------------|
| [`Children`](#Spring.Children)                                             | Gets the list of children.                                              |
| [`Comments`](#Spring.Comments)                                             | Gets the list of associated comments.                                   |
| [`DataModelObjectCategory`](#Spring.DataModelObjectCategory)               | Gets the current DataModelObject’s category.                            |
| [`Figures`](#Spring.Figures)                                               | Gets the list of associated figures.                                    |
| [`FreeLength`](#Spring.FreeLength)                                         | Gets or sets the FreeLength.                                            |
| [`Images`](#Spring.Images)                                                 | Gets the list of associated images.                                     |
| [`InternalObject`](#Spring.InternalObject)                                 | Gets the internal object. For advanced usage only.                      |
| [`Load`](#Spring.Load)                                                     | Gets or sets the Load.                                                  |
| [`LongitudinalDamping`](#Spring.LongitudinalDamping)                       | Gets or sets the LongitudinalDamping.                                   |
| [`LongitudinalStiffness`](#Spring.LongitudinalStiffness)                   | Gets or sets the constant longitudinal stiffness (expressed in N/m).    |
| [`Material`](#Spring.Material)                                             | Gets or sets the Material.                                              |
| [`MobileAppliedBy`](#Spring.MobileAppliedBy)                               | Gets or sets the MobileAppliedBy.                                       |
| [`MobileBeamMaterial`](#Spring.MobileBeamMaterial)                         | Gets or sets the MobileBeamMaterial.                                    |
| [`MobileBeamRadius`](#Spring.MobileBeamRadius)                             | Gets or sets the MobileBeamRadius.                                      |
| [`MobileBehavior`](#Spring.MobileBehavior)                                 | Gets or sets the MobileBehavior.                                        |
| [`MobileBody`](#Spring.MobileBody)                                         | Gets the MobileBody.                                                    |
| [`MobileCoordinateSystem`](#Spring.MobileCoordinateSystem)                 | Gets or sets the MobileCoordinateSystem.                                |
| [`MobileLocation`](#Spring.MobileLocation)                                 | Gets or sets the MobileLocation.                                        |
| [`MobileNodeId`](#Spring.MobileNodeId)                                     | Returns Mobile Node Id.                                                 |
| [`MobilePinballRegion`](#Spring.MobilePinballRegion)                       | Gets or sets the MobilePinballRegion.                                   |
| [`MobileScopeLocation`](#Spring.MobileScopeLocation)                       | Gets or sets the MobileScopeLocation.                                   |
| [`MobileXCoordinate`](#Spring.MobileXCoordinate)                           | Gets or sets the MobileXCoordinate.                                     |
| [`MobileYCoordinate`](#Spring.MobileYCoordinate)                           | Gets or sets the MobileYCoordinate.                                     |
| [`MobileZCoordinate`](#Spring.MobileZCoordinate)                           | Gets or sets the MobileZCoordinate.                                     |
| [`NonLinearLongitudinalStiffness`](#Spring.NonLinearLongitudinalStiffness) | Gets the non linear longitudinal stiffness defined in the tabular data. |
| [`PreloadType`](#Spring.PreloadType)                                       | Gets or sets the PreloadType.                                           |
| [`Properties`](#Spring.Properties)                                         | Gets the list of properties for this object.                            |
| [`ReadOnly`](#Spring.ReadOnly)                                             | Gets or sets the ReadOnly.                                              |
| [`ReferenceAppliedBy`](#Spring.ReferenceAppliedBy)                         | Gets or sets the ReferenceAppliedBy.                                    |
| [`ReferenceBeamMaterial`](#Spring.ReferenceBeamMaterial)                   | Gets or sets the ReferenceBeamMaterial.                                 |
| [`ReferenceBeamRadius`](#Spring.ReferenceBeamRadius)                       | Gets or sets the ReferenceBeamRadius.                                   |
| [`ReferenceBehavior`](#Spring.ReferenceBehavior)                           | Gets or sets the ReferenceBehavior.                                     |
| [`ReferenceBody`](#Spring.ReferenceBody)                                   | Gets the ReferenceBody.                                                 |
| [`ReferenceCoordinateSystem`](#Spring.ReferenceCoordinateSystem)           | Gets or sets the ReferenceCoordinateSystem.                             |
| [`ReferenceLocation`](#Spring.ReferenceLocation)                           | Gets or sets the ReferenceLocation.                                     |
| [`ReferenceNodeId`](#Spring.ReferenceNodeId)                               | Returns Reference Node Id.                                              |
| [`ReferencePinballRegion`](#Spring.ReferencePinballRegion)                 | Gets or sets the ReferencePinballRegion.                                |
| [`ReferenceScopeLocation`](#Spring.ReferenceScopeLocation)                 | Gets or sets the ReferenceScopeLocation.                                |
| [`ReferenceXCoordinate`](#Spring.ReferenceXCoordinate)                     | Gets or sets the ReferenceXCoordinate.                                  |
| [`ReferenceYCoordinate`](#Spring.ReferenceYCoordinate)                     | Gets or sets the ReferenceYCoordinate.                                  |
| [`ReferenceZCoordinate`](#Spring.ReferenceZCoordinate)                     | Gets or sets the ReferenceZCoordinate.                                  |
| [`Rotation`](#Spring.Rotation)                                             | Gets or sets the Rotation.                                              |
| [`Scope`](#Spring.Scope)                                                   | Gets or sets the Scope.                                                 |
| [`SpringBehavior`](#Spring.SpringBehavior)                                 | Gets or sets the SpringBehavior.                                        |
| [`SpringElementAPDLName`](#Spring.SpringElementAPDLName)                   | Gets or sets the SpringElementAPDLName.                                 |
| [`SpringLength`](#Spring.SpringLength)                                     | Gets the SpringLength.                                                  |
| [`SpringType`](#Spring.SpringType)                                         | Gets or sets the SpringType.                                            |
| [`Suppressed`](#Spring.Suppressed)                                         | Gets or sets the Suppressed.                                            |
| [`Torque`](#Spring.Torque)                                                 | Gets or sets the Torque.                                                |
| [`TorsionalDamping`](#Spring.TorsionalDamping)                             | Gets or sets the TorsionalDamping.                                      |
| [`TorsionalStiffness`](#Spring.TorsionalStiffness)                         | Gets or sets the TorsionalStiffness.                                    |
| [`Visible`](#Spring.Visible)                                               | Gets or sets the Visible.                                               |
| [`VisibleProperties`](#Spring.VisibleProperties)                           | Gets the list of properties that are visible for this object.           |

<a id="property-detail"></a>

## Property detail

<a id="Spring.Children"></a>

### *property* Spring.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Comments"></a>

### *property* Spring.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Spring.DataModelObjectCategory"></a>

### *property* Spring.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Figures"></a>

### *property* Spring.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Spring.FreeLength"></a>

### *property* Spring.FreeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FreeLength.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Images"></a>

### *property* Spring.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Spring.InternalObject"></a>

### *property* Spring.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSpringAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Load"></a>

### *property* Spring.Load *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Load.

<!-- !! processed by numpydoc !! -->

<a id="Spring.LongitudinalDamping"></a>

### *property* Spring.LongitudinalDamping *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LongitudinalDamping.

<!-- !! processed by numpydoc !! -->

<a id="Spring.LongitudinalStiffness"></a>

### *property* Spring.LongitudinalStiffness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the constant longitudinal stiffness (expressed in N/m).

<!-- !! processed by numpydoc !! -->

<a id="Spring.Material"></a>

### *property* Spring.Material *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileAppliedBy"></a>

### *property* Spring.MobileAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileBeamMaterial"></a>

### *property* Spring.MobileBeamMaterial *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileBeamRadius"></a>

### *property* Spring.MobileBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileBehavior"></a>

### *property* Spring.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileBody"></a>

### *property* Spring.MobileBody *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MobileBody.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileCoordinateSystem"></a>

### *property* Spring.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileLocation"></a>

### *property* Spring.MobileLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileNodeId"></a>

### *property* Spring.MobileNodeId *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns Mobile Node Id.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobilePinballRegion"></a>

### *property* Spring.MobilePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobilePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileScopeLocation"></a>

### *property* Spring.MobileScopeLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileScopeLocation.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileXCoordinate"></a>

### *property* Spring.MobileXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileYCoordinate"></a>

### *property* Spring.MobileYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileZCoordinate"></a>

### *property* Spring.MobileZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Spring.NonLinearLongitudinalStiffness"></a>

### *property* Spring.NonLinearLongitudinalStiffness *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the non linear longitudinal stiffness defined in the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="Spring.PreloadType"></a>

### *property* Spring.PreloadType *: [Ansys.Mechanical.DataModel.Enums.SpringPreloadType](../../../../Mechanical/DataModel/Enums/SpringPreloadType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SpringPreloadType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreloadType.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Properties"></a>

### *property* Spring.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReadOnly"></a>

### *property* Spring.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceAppliedBy"></a>

### *property* Spring.ReferenceAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceBeamMaterial"></a>

### *property* Spring.ReferenceBeamMaterial *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceBeamRadius"></a>

### *property* Spring.ReferenceBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceBehavior"></a>

### *property* Spring.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceBody"></a>

### *property* Spring.ReferenceBody *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceBody.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceCoordinateSystem"></a>

### *property* Spring.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceLocation"></a>

### *property* Spring.ReferenceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceNodeId"></a>

### *property* Spring.ReferenceNodeId *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns Reference Node Id.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferencePinballRegion"></a>

### *property* Spring.ReferencePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceScopeLocation"></a>

### *property* Spring.ReferenceScopeLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceScopeLocation.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceXCoordinate"></a>

### *property* Spring.ReferenceXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceYCoordinate"></a>

### *property* Spring.ReferenceYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceZCoordinate"></a>

### *property* Spring.ReferenceZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Rotation"></a>

### *property* Spring.Rotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Rotation.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Scope"></a>

### *property* Spring.Scope *: [Ansys.Mechanical.DataModel.Enums.SpringScopingType](../../../../Mechanical/DataModel/Enums/SpringScopingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SpringScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Scope.

<!-- !! processed by numpydoc !! -->

<a id="Spring.SpringBehavior"></a>

### *property* Spring.SpringBehavior *: [Ansys.Mechanical.DataModel.Enums.SpringBehavior](../../../../Mechanical/DataModel/Enums/SpringBehavior.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SpringBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Spring.SpringElementAPDLName"></a>

### *property* Spring.SpringElementAPDLName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringElementAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="Spring.SpringLength"></a>

### *property* Spring.SpringLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SpringLength.

<!-- !! processed by numpydoc !! -->

<a id="Spring.SpringType"></a>

### *property* Spring.SpringType *: [Ansys.Mechanical.DataModel.Enums.SpringType](../../../../Mechanical/DataModel/Enums/SpringType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SpringType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringType.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Suppressed"></a>

### *property* Spring.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Torque"></a>

### *property* Spring.Torque *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Torque.

<!-- !! processed by numpydoc !! -->

<a id="Spring.TorsionalDamping"></a>

### *property* Spring.TorsionalDamping *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TorsionalDamping.

<!-- !! processed by numpydoc !! -->

<a id="Spring.TorsionalStiffness"></a>

### *property* Spring.TorsionalStiffness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TorsionalStiffness.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Visible"></a>

### *property* Spring.Visible *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

<a id="Spring.VisibleProperties"></a>

### *property* Spring.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Spring.Activate"></a>

### Spring.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Spring.AddCommandSnippet"></a>

### Spring.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Spring.AddComment"></a>

### Spring.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Spring.AddFigure"></a>

### Spring.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Spring.AddImage"></a>

### Spring.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Spring.CopyTo"></a>

### Spring.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Spring.CreateParameter"></a>

### Spring.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Delete"></a>

### Spring.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Duplicate"></a>

### Spring.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Spring.GetChildren"></a>

### Spring.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Spring.GetParameter"></a>

### Spring.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Spring.GroupAllSimilarChildren"></a>

### Spring.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Spring.GroupSimilarObjects"></a>

### Spring.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Spring.PromoteToNamedSelection"></a>

### Spring.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Spring.PromoteToRemotePoint"></a>

### Spring.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="Spring.PropertyByAPIName"></a>

### Spring.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Spring.PropertyByName"></a>

### Spring.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Spring.RemoveParameter"></a>

### Spring.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Spring.RenameBasedOnDefinition"></a>

### Spring.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

