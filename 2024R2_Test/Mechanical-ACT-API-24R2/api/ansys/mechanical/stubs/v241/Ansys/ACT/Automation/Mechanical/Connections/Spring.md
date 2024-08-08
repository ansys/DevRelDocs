# `Spring`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Spring.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`PromoteToRemotePoint`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.PromoteToRemotePoint)         | Run the PromoteToRemotePoint action.                                              |
| [`AddCommandSnippet`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.AddCommandSnippet)               | Creates a new CommandSnippet                                                      |
| [`RenameBasedOnDefinition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#id1)                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#id1)                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`NonLinearLongitudinalStiffness`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.NonLinearLongitudinalStiffness)   | Gets the non linear longitudinal stiffness defined in the tabular data.   |
| [`LongitudinalStiffness`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.LongitudinalStiffness)                     | Gets or sets the constant longitudinal stiffness (expressed in N/m).      |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#id0)                                                     | Gets the internal object. For advanced usage only.                        |
| [`Material`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.Material)                                               | Gets or sets the Material.                                                |
| [`MobileBeamMaterial`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.MobileBeamMaterial)                           | Gets or sets the MobileBeamMaterial.                                      |
| [`MobileBody`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.MobileBody)                                           | Gets the MobileBody.                                                      |
| [`ReferenceBeamMaterial`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.ReferenceBeamMaterial)                     | Gets or sets the ReferenceBeamMaterial.                                   |
| [`ReferenceBody`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.ReferenceBody)                                     | Gets the ReferenceBody.                                                   |
| [`SpringElementAPDLName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.SpringElementAPDLName)                     | Gets or sets the SpringElementAPDLName.                                   |
| [`MobileBeamRadius`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.MobileBeamRadius)                               | Gets or sets the MobileBeamRadius.                                        |
| [`MobileXCoordinate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.MobileXCoordinate)                             | Gets or sets the MobileXCoordinate.                                       |
| [`MobileYCoordinate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.MobileYCoordinate)                             | Gets or sets the MobileYCoordinate.                                       |
| [`MobileZCoordinate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.MobileZCoordinate)                             | Gets or sets the MobileZCoordinate.                                       |
| [`ReferenceBeamRadius`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.ReferenceBeamRadius)                         | Gets or sets the ReferenceBeamRadius.                                     |
| [`ReferenceXCoordinate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.ReferenceXCoordinate)                       | Gets or sets the ReferenceXCoordinate.                                    |
| [`ReferenceYCoordinate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.ReferenceYCoordinate)                       | Gets or sets the ReferenceYCoordinate.                                    |
| [`ReferenceZCoordinate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.ReferenceZCoordinate)                       | Gets or sets the ReferenceZCoordinate.                                    |
| [`SpringLength`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.SpringLength)                                       | Gets the SpringLength.                                                    |
| [`LongitudinalDamping`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.LongitudinalDamping)                         | Gets or sets the LongitudinalDamping.                                     |
| [`MobilePinballRegion`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.MobilePinballRegion)                         | Gets or sets the MobilePinballRegion.                                     |
| [`FreeLength`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.FreeLength)                                           | Gets or sets the FreeLength.                                              |
| [`Load`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.Load)                                                       | Gets or sets the Load.                                                    |
| [`Rotation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.Rotation)                                               | Gets or sets the Rotation.                                                |
| [`Torque`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.Torque)                                                   | Gets or sets the Torque.                                                  |
| [`ReferencePinballRegion`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.ReferencePinballRegion)                   | Gets or sets the ReferencePinballRegion.                                  |
| [`TorsionalDamping`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.TorsionalDamping)                               | Gets or sets the TorsionalDamping.                                        |
| [`TorsionalStiffness`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.TorsionalStiffness)                           | Gets or sets the TorsionalStiffness.                                      |
| [`MobileAppliedBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.MobileAppliedBy)                                 | Gets or sets the MobileAppliedBy.                                         |
| [`ReferenceAppliedBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.ReferenceAppliedBy)                           | Gets or sets the ReferenceAppliedBy.                                      |
| [`SpringBehavior`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.SpringBehavior)                                   | Gets or sets the SpringBehavior.                                          |
| [`MobileBehavior`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.MobileBehavior)                                   | Gets or sets the MobileBehavior.                                          |
| [`PreloadType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.PreloadType)                                         | Gets or sets the PreloadType.                                             |
| [`ReferenceBehavior`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.ReferenceBehavior)                             | Gets or sets the ReferenceBehavior.                                       |
| [`Scope`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.Scope)                                                     | Gets or sets the Scope.                                                   |
| [`SpringType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.SpringType)                                           | Gets or sets the SpringType.                                              |
| [`Visible`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.Visible)                                                 | Gets or sets the Visible.                                                 |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.Suppressed)                                           | Gets or sets the Suppressed.                                              |
| [`MobileCoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.MobileCoordinateSystem)                   | Gets or sets the MobileCoordinateSystem.                                  |
| [`ReferenceCoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.ReferenceCoordinateSystem)             | Gets or sets the ReferenceCoordinateSystem.                               |
| [`MobileLocation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.MobileLocation)                                   | Gets or sets the MobileLocation.                                          |
| [`MobileScopeLocation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.MobileScopeLocation)                         | Gets or sets the MobileScopeLocation.                                     |
| [`ReferenceLocation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.ReferenceLocation)                             | Gets or sets the ReferenceLocation.                                       |
| [`ReferenceScopeLocation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.ReferenceScopeLocation)                   | Gets or sets the ReferenceScopeLocation.                                  |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.DataModelObjectCategory)                 | Gets the current DataModelObject's category.                              |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.Children)                                               | Gets the list of children.                                                |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.Comments)                                               | Gets the list of associated comments.                                     |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.Figures)                                                 | Gets the list of associated figures.                                      |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.Images)                                                   | Gets the list of associated images.                                       |
| [`ReadOnly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.ReadOnly)                                               | Gets or sets the ReadOnly.                                                |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#id0)                                                     | Gets the internal object. For advanced usage only.                        |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.Properties)                                           | Gets the list of properties for this object.                              |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#Spring.VisibleProperties)                             | Gets the list of properties that are visible for this object.             |

<a id="property-detail"></a>

## Property detail

<a id="Spring.NonLinearLongitudinalStiffness"></a>

### *property* Spring.NonLinearLongitudinalStiffness *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the non linear longitudinal stiffness defined in the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="Spring.LongitudinalStiffness"></a>

### *property* Spring.LongitudinalStiffness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the constant longitudinal stiffness (expressed in N/m).

<!-- !! processed by numpydoc !! -->

<a id="Spring.InternalObject"></a>

### *property* Spring.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSpringAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Material"></a>

### *property* Spring.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileBeamMaterial"></a>

### *property* Spring.MobileBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileBody"></a>

### *property* Spring.MobileBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MobileBody.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceBeamMaterial"></a>

### *property* Spring.ReferenceBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceBody"></a>

### *property* Spring.ReferenceBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceBody.

<!-- !! processed by numpydoc !! -->

<a id="Spring.SpringElementAPDLName"></a>

### *property* Spring.SpringElementAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringElementAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileBeamRadius"></a>

### *property* Spring.MobileBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamRadius.

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

<a id="Spring.ReferenceBeamRadius"></a>

### *property* Spring.ReferenceBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamRadius.

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

<a id="Spring.SpringLength"></a>

### *property* Spring.SpringLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SpringLength.

<!-- !! processed by numpydoc !! -->

<a id="Spring.LongitudinalDamping"></a>

### *property* Spring.LongitudinalDamping *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LongitudinalDamping.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobilePinballRegion"></a>

### *property* Spring.MobilePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobilePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Spring.FreeLength"></a>

### *property* Spring.FreeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FreeLength.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Load"></a>

### *property* Spring.Load *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Load.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Rotation"></a>

### *property* Spring.Rotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Rotation.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Torque"></a>

### *property* Spring.Torque *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Torque.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferencePinballRegion"></a>

### *property* Spring.ReferencePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Spring.TorsionalDamping"></a>

### *property* Spring.TorsionalDamping *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TorsionalDamping.

<!-- !! processed by numpydoc !! -->

<a id="Spring.TorsionalStiffness"></a>

### *property* Spring.TorsionalStiffness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TorsionalStiffness.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileAppliedBy"></a>

### *property* Spring.MobileAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceAppliedBy"></a>

### *property* Spring.ReferenceAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Spring.SpringBehavior"></a>

### *property* Spring.SpringBehavior *: [Ansys.Mechanical.DataModel.Enums.SpringBehavior](../../../../Mechanical/DataModel/Enums/SpringBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpringBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileBehavior"></a>

### *property* Spring.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Spring.PreloadType"></a>

### *property* Spring.PreloadType *: [Ansys.Mechanical.DataModel.Enums.SpringPreloadType](../../../../Mechanical/DataModel/Enums/SpringPreloadType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpringPreloadType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreloadType.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceBehavior"></a>

### *property* Spring.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Scope"></a>

### *property* Spring.Scope *: [Ansys.Mechanical.DataModel.Enums.SpringScopingType](../../../../Mechanical/DataModel/Enums/SpringScopingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpringScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Scope.

<!-- !! processed by numpydoc !! -->

<a id="Spring.SpringType"></a>

### *property* Spring.SpringType *: [Ansys.Mechanical.DataModel.Enums.SpringType](../../../../Mechanical/DataModel/Enums/SpringType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpringType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringType.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Visible"></a>

### *property* Spring.Visible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Suppressed"></a>

### *property* Spring.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileCoordinateSystem"></a>

### *property* Spring.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceCoordinateSystem"></a>

### *property* Spring.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileLocation"></a>

### *property* Spring.MobileLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

<a id="Spring.MobileScopeLocation"></a>

### *property* Spring.MobileScopeLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileScopeLocation.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceLocation"></a>

### *property* Spring.ReferenceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReferenceScopeLocation"></a>

### *property* Spring.ReferenceScopeLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceScopeLocation.

<!-- !! processed by numpydoc !! -->

<a id="Spring.DataModelObjectCategory"></a>

### *property* Spring.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Children"></a>

### *property* Spring.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Comments"></a>

### *property* Spring.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Figures"></a>

### *property* Spring.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Images"></a>

### *property* Spring.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Spring.ReadOnly"></a>

### *property* Spring.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Spring.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Properties"></a>

### *property* Spring.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Spring.VisibleProperties"></a>

### *property* Spring.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Spring.PromoteToNamedSelection"></a>

### Spring.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Spring.PromoteToRemotePoint"></a>

### Spring.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="Spring.AddCommandSnippet"></a>

### Spring.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Spring.RenameBasedOnDefinition"></a>

### Spring.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Delete"></a>

### Spring.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Spring.GetChildren"></a>

### Spring.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Spring.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### Spring.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Activate"></a>

### Spring.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Spring.CopyTo"></a>

### Spring.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Spring.Duplicate"></a>

### Spring.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Spring.GroupAllSimilarChildren"></a>

### Spring.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Spring.GroupSimilarObjects"></a>

### Spring.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Spring.PropertyByName"></a>

### Spring.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Spring.PropertyByAPIName"></a>

### Spring.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Spring.CreateParameter"></a>

### Spring.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Spring.GetParameter"></a>

### Spring.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Spring.RemoveParameter"></a>

### Spring.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

