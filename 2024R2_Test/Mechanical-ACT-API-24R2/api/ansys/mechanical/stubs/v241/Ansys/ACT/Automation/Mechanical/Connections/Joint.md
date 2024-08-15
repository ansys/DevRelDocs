# `Joint`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Joint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Joint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------|-----------------------------------------------------------------------------------|
| `PromoteToNamedSelection`   | Run the PromoteToNamedSelection action.                                           |
| `PromoteToRemotePoint`      | Run the PromoteToRemotePoint action.                                              |
| `AddCommandSnippet`         | Creates a new CommandSnippet                                                      |
| `FlipReferenceMobile`       | Run the FlipReferenceMobile action.                                               |
| `RenameBasedOnDefinition`   | Run the RenameBasedOnDefinition action.                                           |
| `Delete`                    | Run the Delete action.                                                            |
| `GetChildren`               | Gets the list of children, filtered by type.                                      |
| `GetChildren`               | Gets the list of children, filtered by type.                                      |
| `AddComment`                | Creates a new child Comment.                                                      |
| `AddFigure`                 | Creates a new child Figure.                                                       |
| `AddImage`                  | Creates a new child Image.                                                        |
| `Activate`                  | Activate the current object.                                                      |
| `CopyTo`                    | Copies all visible properties from this object to another.                        |
| `Duplicate`                 | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`   | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`       | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`            | Get a property by its unique name.                                                |
| `PropertyByAPIName`         | Get a property by its API name.                                                   |
| `CreateParameter`           | Creates a new parameter for a Property.                                           |
| `GetParameter`              | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------|---------------------------------------------------------------------------|
| `BushingWorksheet`          | Returns the Bushing Coeffients worksheet associated with Bushing Joint.   |
| `InternalObject`            | Gets the internal object. For advanced usage only.                        |
| `FrictionCoefficient`       | Gets or sets the FrictionCoefficient.                                     |
| `JointElementAPDLName`      | Gets or sets the JointElementAPDLName.                                    |
| `RestitutionFactor`         | Gets or sets the RestitutionFactor.                                       |
| `MobileBeamMaterial`        | Gets or sets the MobileBeamMaterial.                                      |
| `MobileBody`                | Gets the MobileBody.                                                      |
| `ReferenceBeamMaterial`     | Gets or sets the ReferenceBeamMaterial.                                   |
| `ReferenceBody`             | Gets the ReferenceBody.                                                   |
| `EffectiveLength`           | Gets or sets the EffectiveLength.                                         |
| `InnerRadius`               | Gets or sets the InnerRadius.                                             |
| `OuterRadius`               | Gets or sets the OuterRadius.                                             |
| `Radius`                    | Gets or sets the Radius.                                                  |
| `MobilePinballRegion`       | Gets or sets the MobilePinballRegion.                                     |
| `ReferencePinballRegion`    | Gets or sets the ReferencePinballRegion.                                  |
| `RadialGapHeight`           | Gets or sets the RadialGapHeight.                                         |
| `RadialGapInnerDiameter`    | Gets or sets the RadialGapInnerDiameter.                                  |
| `RadialOuterDiameter`       | Gets or sets the RadialOuterDiameter.                                     |
| `ScrewPitch`                | Gets or sets the ScrewPitch.                                              |
| `RXMaximum`                 | Gets or sets the RXMaximum.                                               |
| `RXMinimum`                 | Gets or sets the RXMinimum.                                               |
| `RYMaximum`                 | Gets or sets the RYMaximum.                                               |
| `RYMinimum`                 | Gets or sets the RYMinimum.                                               |
| `RZMaximum`                 | Gets or sets the RZMaximum.                                               |
| `RZMinimum`                 | Gets or sets the RZMinimum.                                               |
| `XMaximum`                  | Gets or sets the XMaximum.                                                |
| `XMinimum`                  | Gets or sets the XMinimum.                                                |
| `YMaximum`                  | Gets or sets the YMaximum.                                                |
| `YMinimum`                  | Gets or sets the YMinimum.                                                |
| `ZMaximum`                  | Gets or sets the ZMaximum.                                                |
| `ZMinimum`                  | Gets or sets the ZMinimum.                                                |
| `TorsionalDamping`          | Gets or sets the TorsionalDamping.                                        |
| `TorsionalStiffness`        | Gets or sets the TorsionalStiffness.                                      |
| `MobileBeamRadius`          | Gets or sets the MobileBeamRadius.                                        |
| `ReferenceBeamRadius`       | Gets or sets the ReferenceBeamRadius.                                     |
| `GeneralPrimitiveType`      | Gets or sets the GeneralPrimitiveType.                                    |
| `InitialPosition`           | Gets or sets the InitialPosition.                                         |
| `MobileBehavior`            | Gets or sets the MobileBehavior.                                          |
| `ReferenceBehavior`         | Gets or sets the ReferenceBehavior.                                       |
| `Formulation`               | Gets or sets the Formulation.                                             |
| `JointFrictionType`         | Gets or sets the JointFrictionType.                                       |
| `MobileFormulation`         | Gets or sets the MobileFormulation.                                       |
| `RadialGapType`             | Gets or sets the RadialGapType.                                           |
| `ReferenceFormulation`      | Gets or sets the ReferenceFormulation.                                    |
| `ConnectionType`            | Gets or sets the ConnectionType.                                          |
| `RXMaximumType`             | Gets or sets the RXMaximumType.                                           |
| `RXMinimumType`             | Gets or sets the RXMinimumType.                                           |
| `RYMaximumType`             | Gets or sets the RYMaximumType.                                           |
| `RYMinimumType`             | Gets or sets the RYMinimumType.                                           |
| `RZMaximumType`             | Gets or sets the RZMaximumType.                                           |
| `RZMinimumType`             | Gets or sets the RZMinimumType.                                           |
| `XMaximumType`              | Gets or sets the XMaximumType.                                            |
| `XMinimumType`              | Gets or sets the XMinimumType.                                            |
| `YMaximumType`              | Gets or sets the YMaximumType.                                            |
| `YMinimumType`              | Gets or sets the YMinimumType.                                            |
| `ZMaximumType`              | Gets or sets the ZMaximumType.                                            |
| `ZMinimumType`              | Gets or sets the ZMinimumType.                                            |
| `Type`                      | Gets or sets the Type.                                                    |
| `MobileAppliedBy`           | Gets or sets the MobileAppliedBy.                                         |
| `ReferenceAppliedBy`        | Gets or sets the ReferenceAppliedBy.                                      |
| `Rotations`                 | Gets or sets the Rotations.                                               |
| `SolverElementType`         | Gets or sets the SolverElementType.                                       |
| `TranslationX`              | Gets or sets the TranslationX.                                            |
| `TranslationY`              | Gets or sets the TranslationY.                                            |
| `TranslationZ`              | Gets or sets the TranslationZ.                                            |
| `MobileRelaxationMethod`    | Gets or sets the MobileRelaxationMethod.                                  |
| `ReferenceRelaxationMethod` | Gets or sets the ReferenceRelaxationMethod.                               |
| `Suppressed`                | Gets or sets the Suppressed.                                              |
| `SuppressedForSolve`        | Gets the SuppressedForSolve.                                              |
| `ElementCoordinateSystem`   | Gets or sets the ElementCoordinateSystem.                                 |
| `MobileCoordinateSystem`    | Gets or sets the MobileCoordinateSystem.                                  |
| `ReferenceCoordinateSystem` | Gets or sets the ReferenceCoordinateSystem.                               |
| `MobileLocation`            | Gets or sets the MobileLocation.                                          |
| `CurveOrientationSurface`   | Gets or sets the CurveOrientationSurface.                                 |
| `ReferenceLocation`         | Gets or sets the ReferenceLocation.                                       |
| `DataModelObjectCategory`   | Gets the current DataModelObject's category.                              |
| `Children`                  | Gets the list of children.                                                |
| `Comments`                  | Gets the list of associated comments.                                     |
| `Figures`                   | Gets the list of associated figures.                                      |
| `Images`                    | Gets the list of associated images.                                       |
| `ReadOnly`                  | Gets or sets the ReadOnly.                                                |
| `InternalObject`            | Gets the internal object. For advanced usage only.                        |
| `Properties`                | Gets the list of properties for this object.                              |
| `VisibleProperties`         | Gets the list of properties that are visible for this object.             |

<a id="property-detail"></a>

## Property detail

### *property* Joint.BushingWorksheet *: Ansys.ACT.Interfaces.Common.IWorksheet | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the Bushing Coeffients worksheet associated with Bushing Joint.

<!-- !! processed by numpydoc !! -->

### *property* Joint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSJointAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Joint.FrictionCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrictionCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* Joint.JointElementAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JointElementAPDLName.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RestitutionFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RestitutionFactor.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobileBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamMaterial.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobileBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MobileBody.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferenceBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamMaterial.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferenceBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceBody.

<!-- !! processed by numpydoc !! -->

### *property* Joint.EffectiveLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EffectiveLength.

<!-- !! processed by numpydoc !! -->

### *property* Joint.InnerRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InnerRadius.

<!-- !! processed by numpydoc !! -->

### *property* Joint.OuterRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OuterRadius.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Radius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobilePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobilePinballRegion.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferencePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePinballRegion.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RadialGapHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialGapHeight.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RadialGapInnerDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialGapInnerDiameter.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RadialOuterDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialOuterDiameter.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ScrewPitch *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScrewPitch.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RXMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RXMaximum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RXMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RXMinimum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RYMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RYMaximum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RYMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RYMinimum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RZMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RZMaximum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RZMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RZMinimum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.XMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XMaximum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.XMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XMinimum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.YMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YMaximum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.YMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YMinimum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ZMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZMaximum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ZMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZMinimum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.TorsionalDamping *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TorsionalDamping.

<!-- !! processed by numpydoc !! -->

### *property* Joint.TorsionalStiffness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TorsionalStiffness.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobileBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamRadius.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferenceBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamRadius.

<!-- !! processed by numpydoc !! -->

### *property* Joint.GeneralPrimitiveType *: [Ansys.Mechanical.DataModel.Enums.JointGeneralPrimitiveType](../../../../Mechanical/DataModel/Enums/JointGeneralPrimitiveType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointGeneralPrimitiveType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneralPrimitiveType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.InitialPosition *: [Ansys.Mechanical.DataModel.Enums.JointInitialPosition](../../../../Mechanical/DataModel/Enums/JointInitialPosition.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointInitialPosition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialPosition.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Formulation *: [Ansys.Mechanical.DataModel.Enums.JointFormulation](../../../../Mechanical/DataModel/Enums/JointFormulation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

### *property* Joint.JointFrictionType *: [Ansys.Mechanical.DataModel.Enums.JointFrictionType](../../../../Mechanical/DataModel/Enums/JointFrictionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointFrictionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JointFrictionType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobileFormulation *: [Ansys.Mechanical.DataModel.Enums.RemotePointFormulation](../../../../Mechanical/DataModel/Enums/RemotePointFormulation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemotePointFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileFormulation.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RadialGapType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialGapType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferenceFormulation *: [Ansys.Mechanical.DataModel.Enums.RemotePointFormulation](../../../../Mechanical/DataModel/Enums/RemotePointFormulation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemotePointFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceFormulation.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.JointScopingType](../../../../Mechanical/DataModel/Enums/JointScopingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RXMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RXMaximumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RXMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RXMinimumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RYMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RYMaximumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RYMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RYMinimumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RZMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RZMaximumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RZMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RZMinimumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.XMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XMaximumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.XMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XMinimumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.YMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YMaximumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.YMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YMinimumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ZMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZMaximumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ZMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZMinimumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Type *: [Ansys.Mechanical.DataModel.Enums.JointType](../../../../Mechanical/DataModel/Enums/JointType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobileAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileAppliedBy.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferenceAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceAppliedBy.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Rotations *: [Ansys.Mechanical.DataModel.Enums.JointRotationDOFType](../../../../Mechanical/DataModel/Enums/JointRotationDOFType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointRotationDOFType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Rotations.

<!-- !! processed by numpydoc !! -->

### *property* Joint.SolverElementType *: [Ansys.Mechanical.DataModel.Enums.JointSolverElementType](../../../../Mechanical/DataModel/Enums/JointSolverElementType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointSolverElementType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverElementType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.TranslationX *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationX.

<!-- !! processed by numpydoc !! -->

### *property* Joint.TranslationY *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationY.

<!-- !! processed by numpydoc !! -->

### *property* Joint.TranslationZ *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationZ.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobileRelaxationMethod *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileRelaxationMethod.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferenceRelaxationMethod *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceRelaxationMethod.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Joint.SuppressedForSolve *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SuppressedForSolve.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ElementCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobileLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

### *property* Joint.CurveOrientationSurface *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurveOrientationSurface.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferenceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

### *property* Joint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Joint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Joint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### Joint.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### Joint.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

### Joint.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### Joint.FlipReferenceMobile()

Run the FlipReferenceMobile action.

<!-- !! processed by numpydoc !! -->

### Joint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### Joint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Joint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Joint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Joint.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Joint.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Joint.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### Joint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Joint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Joint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Joint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Joint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Joint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Joint.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### Joint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Joint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Joint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

