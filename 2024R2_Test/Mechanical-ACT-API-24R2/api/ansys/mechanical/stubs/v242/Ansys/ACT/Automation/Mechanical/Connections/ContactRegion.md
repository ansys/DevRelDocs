# `ContactRegion`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------|-----------------------------------------------------------------------------------|
| `SearchConnectionsForDuplicatePairs`   | Run the SearchConnectionsForDuplicatePairs action.                                |
| `FlipContactTarget`                    | Run the FlipContactTarget action.                                                 |
| `SetDefaultAPDLNames`                  | Run the SetDefaultAPDLNames action.                                               |
| `SaveContactRegionSettings`            | Run the SaveContactRegionSettings action.                                         |
| `LoadContactRegionSettings`            | Run the LoadContactRegionSettings action.                                         |
| `ResetToDefault`                       | Run the ResetToDefault action.                                                    |
| `ResetToDefault`                       | Run the ResetToDefault action with optional verification dialog.                  |
| `PromoteToNamedSelection`              | Run the PromoteToNamedSelection action.                                           |
| `PromoteToRemotePoint`                 | Run the PromoteToRemotePoint action.                                              |
| `AddCommandSnippet`                    | Creates a new CommandSnippet                                                      |
| `AddPythonCodeEventBased`              | Creates a new PythonCodeEventBased                                                |
| `RenameBasedOnDefinition`              | Run the RenameBasedOnDefinition action.                                           |
| `Delete`                               | Run the Delete action.                                                            |
| `GetChildren`                          | Gets the list of children, filtered by type.                                      |
| `GetChildren`                          | Gets the list of children, filtered by type.                                      |
| `AddComment`                           | Creates a new child Comment.                                                      |
| `AddFigure`                            | Creates a new child Figure.                                                       |
| `AddImage`                             | Creates a new child Image.                                                        |
| `Activate`                             | Activate the current object.                                                      |
| `CopyTo`                               | Copies all visible properties from this object to another.                        |
| `Duplicate`                            | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`              | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`                  | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`                       | Get a property by its unique name.                                                |
| `PropertyByAPIName`                    | Get a property by its API name.                                                   |
| `CreateParameter`                      | Creates a new parameter for a Property.                                           |
| `GetParameter`                         | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`                      | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------|---------------------------------------------------------------|
| `ContactAPDLName`                   | Gets or sets the ContactAPDLName.                             |
| `TargetAPDLName`                    | Gets or sets the TargetAPDLName.                              |
| `SourceLocation`                    | Gets or sets the SourceLocation.                              |
| `TargetLocation`                    | Gets or sets the TargetLocation.                              |
| `AutomaticNormalStiffness`          | Gets or sets the AutomaticNormalStiffness.                    |
| `BeamMaterialName`                  | Gets or sets the BeamMaterialName.                            |
| `BeamBeamDetection`                 | Gets or sets the BeamBeamDetection.                           |
| `InternalObject`                    | Gets the internal object. For advanced usage only.            |
| `Material`                          | Gets or sets the Material.                                    |
| `StabilizationDampingFactor`        | Gets or sets the StabilizationDampingFactor.                  |
| `DecayConstant`                     | Gets or sets the DecayConstant.                               |
| `DynamicCoefficient`                | Gets or sets the DynamicCoefficient.                          |
| `ElasticSlipToleranceFactor`        | Gets or sets the ElasticSlipToleranceFactor.                  |
| `FrictionCoefficient`               | Gets or sets the FrictionCoefficient.                         |
| `InitialClearanceFactor`            | Gets or sets the InitialClearanceFactor.                      |
| `NormalForceExponent`               | Gets or sets the NormalForceExponent.                         |
| `NormalStiffnessFactor`             | Gets or sets the NormalStiffnessFactor.                       |
| `NormalStressExponent`              | Gets or sets the NormalStressExponent.                        |
| `PenetrationToleranceFactor`        | Gets or sets the PenetrationToleranceFactor.                  |
| `PinballFactor`                     | Gets or sets the PinballFactor.                               |
| `PressureAtZeroPenetrationFactor`   | Gets or sets the PressureAtZeroPenetrationFactor.             |
| `RestitutionFactor`                 | Gets or sets the RestitutionFactor.                           |
| `ShearForceExponent`                | Gets or sets the ShearForceExponent.                          |
| `ShearStressExponent`               | Gets or sets the ShearStressExponent.                         |
| `ContactBodies`                     | Gets the ContactBodies.                                       |
| `TargetBodies`                      | Gets the TargetBodies.                                        |
| `AutomaticDetectionValue`           | Gets the AutomaticDetectionValue.                             |
| `BeamRadius`                        | Gets or sets the BeamRadius.                                  |
| `ThreadAngle`                       | Gets or sets the ThreadAngle.                                 |
| `MeanPitchDiameter`                 | Gets or sets the MeanPitchDiameter.                           |
| `PitchDistance`                     | Gets or sets the PitchDistance.                               |
| `BondedMaximumOffset`               | Gets or sets the BondedMaximumOffset.                         |
| `ElasticSlipToleranceValue`         | Gets or sets the ElasticSlipToleranceValue.                   |
| `ElectricCapacitanceValue`          | Gets or sets the ElectricCapacitanceValue.                    |
| `ElectricConductanceValue`          | Gets or sets the ElectricConductanceValue.                    |
| `InitialClearanceValue`             | Gets or sets the InitialClearanceValue.                       |
| `NormalForceLimit`                  | Gets or sets the NormalForceLimit.                            |
| `NormalStiffnessValue`              | Gets or sets the NormalStiffnessValue.                        |
| `NormalStressLimit`                 | Gets or sets the NormalStressLimit.                           |
| `PenetrationToleranceValue`         | Gets or sets the PenetrationToleranceValue.                   |
| `PinballRadius`                     | Gets or sets the PinballRadius.                               |
| `PressureAtZeroPenetrationValue`    | Gets or sets the PressureAtZeroPenetrationValue.              |
| `ShearForceLimit`                   | Gets or sets the ShearForceLimit.                             |
| `ShearStressLimit`                  | Gets or sets the ShearStressLimit.                            |
| `ThermalConductanceValue`           | Gets or sets the ThermalConductanceValue.                     |
| `TrimTolerance`                     | Gets or sets the TrimTolerance.                               |
| `UserOffset`                        | Gets or sets the UserOffset.                                  |
| `LineLineDetection`                 | Gets or sets the LineLineDetection.                           |
| `BeamBeamModel`                     | Gets or sets the BeamBeamModel.                               |
| `Handedness`                        | Gets or sets the Handedness.                                  |
| `ThreadType`                        | Gets or sets the ThreadType.                                  |
| `Breakable`                         | Gets or sets the Breakable.                                   |
| `ConstraintType`                    | Gets or sets the ConstraintType.                              |
| `ContactGeometryCorrection`         | Gets or sets the ContactGeometryCorrection.                   |
| `ContactFormulation`                | Gets or sets the ContactFormulation.                          |
| `ContactOrientation`                | Gets or sets the ContactOrientation.                          |
| `ContactShellFace`                  | Gets or sets the ContactShellFace.                            |
| `ContactType`                       | Gets or sets the ContactType.                                 |
| `ContinuousDistanceComputation`     | Gets or sets the ContinuousDistanceComputation.               |
| `DetectionMethod`                   | Gets or sets the DetectionMethod.                             |
| `EdgeContactType`                   | Gets or sets the EdgeContactType.                             |
| `InitialClearance`                  | Gets or sets the InitialClearance.                            |
| `InterfaceTreatment`                | Gets or sets the InterfaceTreatment.                          |
| `ScopeMode`                         | Gets the ScopeMode.                                           |
| `NormalStiffnessValueType`          | Gets or sets the NormalStiffnessValueType.                    |
| `PinballRegion`                     | Gets or sets the PinballRegion.                               |
| `PressureAtZeroPenetration`         | Gets or sets the PressureAtZeroPenetration.                   |
| `RBDContactDetection`               | Gets or sets the RBDContactDetection.                         |
| `SmallSliding`                      | Gets or sets the SmallSliding.                                |
| `Behavior`                          | Gets or sets the Behavior.                                    |
| `TargetGeometryCorrection`          | Gets or sets the TargetGeometryCorrection.                    |
| `TargetOrientation`                 | Gets or sets the TargetOrientation.                           |
| `TargetShellFace`                   | Gets or sets the TargetShellFace.                             |
| `TimeStepControls`                  | Gets or sets the TimeStepControls.                            |
| `TrimContact`                       | Gets or sets the TrimContact.                                 |
| `UpdateStiffness`                   | Gets or sets the UpdateStiffness.                             |
| `ElasticSlipTolerance`              | Gets or sets the ElasticSlipTolerance.                        |
| `PenetrationTolerance`              | Gets or sets the PenetrationTolerance.                        |
| `DisplayElementNormal`              | Gets or sets the DisplayElementNormal.                        |
| `FlipContact`                       | Gets or sets the FlipContact.                                 |
| `FlipTarget`                        | Gets or sets the FlipTarget.                                  |
| `Protected`                         | Gets or sets the Protected.                                   |
| `ShellThicknessEffect`              | Gets or sets the ShellThicknessEffect.                        |
| `Suppressed`                        | Gets or sets the Suppressed.                                  |
| `AutomaticElectricCapacitance`      | Gets or sets the AutomaticElectricCapacitance.                |
| `AutomaticElectricConductance`      | Gets or sets the AutomaticElectricConductance.                |
| `AutomaticThermalConductance`       | Gets or sets the AutomaticThermalConductance.                 |
| `ContactCenterPoint`                | Gets or sets the ContactCenterPoint.                          |
| `ContactEndingPoint`                | Gets or sets the ContactEndingPoint.                          |
| `ContactStartingPoint`              | Gets or sets the ContactStartingPoint.                        |
| `SharedSourceBody`                  | Gets or sets the SharedSourceBody.                            |
| `SharedTargetBody`                  | Gets or sets the SharedTargetBody.                            |
| `TargetCenterPoint`                 | Gets or sets the TargetCenterPoint.                           |
| `TargetEndingPoint`                 | Gets or sets the TargetEndingPoint.                           |
| `TargetStartingPoint`               | Gets or sets the TargetStartingPoint.                         |
| `SharedSourceReverseNormalLocation` | Gets or sets the SharedSourceReverseNormalLocation.           |
| `SharedTargetReverseNormalLocation` | Gets or sets the SharedTargetReverseNormalLocation.           |
| `DataModelObjectCategory`           | Gets the current DataModelObject's category.                  |
| `Children`                          | Gets the list of children.                                    |
| `Comments`                          | Gets the list of associated comments.                         |
| `Figures`                           | Gets the list of associated figures.                          |
| `Images`                            | Gets the list of associated images.                           |
| `ReadOnly`                          | Gets or sets the ReadOnly.                                    |
| `InternalObject`                    | Gets the internal object. For advanced usage only.            |
| `Properties`                        | Gets the list of properties for this object.                  |
| `VisibleProperties`                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* ContactRegion.ContactAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactAPDLName.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TargetAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetAPDLName.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.SourceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceLocation.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TargetLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetLocation.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.AutomaticNormalStiffness *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticNormalStiffness.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.BeamMaterialName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamMaterialName.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.BeamBeamDetection *: [Ansys.Mechanical.DataModel.Enums.BeamBeamContactDetectionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/BeamBeamContactDetectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BeamBeamContactDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamBeamDetection.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactRegionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.StabilizationDampingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationDampingFactor.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.DecayConstant *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DecayConstant.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.DynamicCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ElasticSlipToleranceFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticSlipToleranceFactor.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.FrictionCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrictionCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.InitialClearanceFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialClearanceFactor.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.NormalForceExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalForceExponent.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.NormalStiffnessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStiffnessFactor.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.NormalStressExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStressExponent.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.PenetrationToleranceFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationToleranceFactor.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.PinballFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballFactor.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.PressureAtZeroPenetrationFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PressureAtZeroPenetrationFactor.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.RestitutionFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RestitutionFactor.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ShearForceExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearForceExponent.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ShearStressExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearStressExponent.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ContactBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ContactBodies.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TargetBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TargetBodies.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.AutomaticDetectionValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AutomaticDetectionValue.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.BeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamRadius.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ThreadAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThreadAngle.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.MeanPitchDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeanPitchDiameter.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.PitchDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PitchDistance.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.BondedMaximumOffset *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BondedMaximumOffset.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ElasticSlipToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticSlipToleranceValue.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ElectricCapacitanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricCapacitanceValue.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ElectricConductanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricConductanceValue.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.InitialClearanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialClearanceValue.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.NormalForceLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalForceLimit.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.NormalStiffnessValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStiffnessValue.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.NormalStressLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStressLimit.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.PenetrationToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationToleranceValue.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.PinballRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRadius.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.PressureAtZeroPenetrationValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PressureAtZeroPenetrationValue.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ShearForceLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearForceLimit.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ShearStressLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearStressLimit.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ThermalConductanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductanceValue.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TrimTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TrimTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.UserOffset *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UserOffset.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.LineLineDetection *: [Ansys.Mechanical.DataModel.Enums.LineLineContactDetectionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LineLineContactDetectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LineLineContactDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LineLineDetection.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.BeamBeamModel *: [Ansys.Mechanical.DataModel.Enums.BeamBeamModel](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/BeamBeamModel.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BeamBeamModel) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamBeamModel.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.Handedness *: [Ansys.Mechanical.DataModel.Enums.ContactBoltThreadHand](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactBoltThreadHand.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactBoltThreadHand) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Handedness.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ThreadType *: [Ansys.Mechanical.DataModel.Enums.ContactBoltThreadType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactBoltThreadType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactBoltThreadType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThreadType.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.Breakable *: [Ansys.Mechanical.DataModel.Enums.BondedBreakableType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/BondedBreakableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BondedBreakableType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Breakable.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ConstraintType *: [Ansys.Mechanical.DataModel.Enums.ContactConstraintType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactConstraintType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactConstraintType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintType.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ContactGeometryCorrection *: [Ansys.Mechanical.DataModel.Enums.ContactCorrection](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactCorrection.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactCorrection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactGeometryCorrection.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ContactFormulation *: [Ansys.Mechanical.DataModel.Enums.ContactFormulation](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactFormulation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactFormulation.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ContactOrientation *: [Ansys.Mechanical.DataModel.Enums.ContactOrientation](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactOrientation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactOrientation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactOrientation.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ContactShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactShellFace.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ContactType *: [Ansys.Mechanical.DataModel.Enums.ContactType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactType.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ContinuousDistanceComputation *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContinuousDistanceComputation.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.DetectionMethod *: [Ansys.Mechanical.DataModel.Enums.ContactDetectionPoint](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactDetectionPoint.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactDetectionPoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DetectionMethod.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.EdgeContactType *: [Ansys.Mechanical.DataModel.Enums.EdgeContactType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EdgeContactType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EdgeContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeContactType.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.InitialClearance *: [Ansys.Mechanical.DataModel.Enums.InitialClearanceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/InitialClearanceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.InitialClearanceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialClearance.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.InterfaceTreatment *: [Ansys.Mechanical.DataModel.Enums.ContactInitialEffect](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactInitialEffect.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactInitialEffect) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InterfaceTreatment.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.NormalStiffnessValueType *: [Ansys.Mechanical.DataModel.Enums.ElementControlsNormalStiffnessType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ElementControlsNormalStiffnessType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ElementControlsNormalStiffnessType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStiffnessValueType.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.PinballRegion *: [Ansys.Mechanical.DataModel.Enums.ContactPinballType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactPinballType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactPinballType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.PressureAtZeroPenetration *: [Ansys.Mechanical.DataModel.Enums.PressureAtZeroPenetrationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/PressureAtZeroPenetrationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PressureAtZeroPenetrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PressureAtZeroPenetration.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.RBDContactDetection *: [Ansys.Mechanical.DataModel.Enums.DSRBDContactDetection](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DSRBDContactDetection.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DSRBDContactDetection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RBDContactDetection.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.SmallSliding *: [Ansys.Mechanical.DataModel.Enums.ContactSmallSlidingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactSmallSlidingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactSmallSlidingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SmallSliding.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.Behavior *: [Ansys.Mechanical.DataModel.Enums.ContactBehavior](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TargetGeometryCorrection *: [Ansys.Mechanical.DataModel.Enums.TargetCorrection](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TargetCorrection.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TargetCorrection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetGeometryCorrection.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TargetOrientation *: [Ansys.Mechanical.DataModel.Enums.TargetOrientation](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TargetOrientation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TargetOrientation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetOrientation.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TargetShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetShellFace.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TimeStepControls *: [Ansys.Mechanical.DataModel.Enums.ContactTimeStepControls](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactTimeStepControls.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactTimeStepControls) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeStepControls.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TrimContact *: [Ansys.Mechanical.DataModel.Enums.ContactTrimType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactTrimType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactTrimType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TrimContact.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.UpdateStiffness *: [Ansys.Mechanical.DataModel.Enums.UpdateContactStiffness](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/UpdateContactStiffness.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.UpdateContactStiffness) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpdateStiffness.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ElasticSlipTolerance *: [Ansys.Mechanical.DataModel.Enums.ContactElasticSlipToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactElasticSlipToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactElasticSlipToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticSlipTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.PenetrationTolerance *: [Ansys.Mechanical.DataModel.Enums.ContactPenetrationToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactPenetrationToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactPenetrationToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.DisplayElementNormal *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayElementNormal.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.FlipContact *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FlipContact.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.FlipTarget *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FlipTarget.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.Protected *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Protected.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ShellThicknessEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellThicknessEffect.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.AutomaticElectricCapacitance *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticElectricCapacitance.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.AutomaticElectricConductance *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticElectricConductance.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.AutomaticThermalConductance *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticThermalConductance.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ContactCenterPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactCenterPoint.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ContactEndingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactEndingPoint.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ContactStartingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactStartingPoint.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.SharedSourceBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedSourceBody.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.SharedTargetBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedTargetBody.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TargetCenterPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetCenterPoint.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TargetEndingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetEndingPoint.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TargetStartingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetStartingPoint.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.SharedSourceReverseNormalLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedSourceReverseNormalLocation.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.SharedTargetReverseNormalLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedTargetReverseNormalLocation.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### ContactRegion.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

### ContactRegion.FlipContactTarget()

Run the FlipContactTarget action.

<!-- !! processed by numpydoc !! -->

### ContactRegion.SetDefaultAPDLNames()

Run the SetDefaultAPDLNames action.

<!-- !! processed by numpydoc !! -->

### ContactRegion.SaveContactRegionSettings(fName: System.String)

Run the SaveContactRegionSettings action.

<!-- !! processed by numpydoc !! -->

### ContactRegion.LoadContactRegionSettings(fName: System.String)

Run the LoadContactRegionSettings action.

<!-- !! processed by numpydoc !! -->

### ContactRegion.ResetToDefault()

Run the ResetToDefault action.

<!-- !! processed by numpydoc !! -->

### ContactRegion.ResetToDefault(b_Verify: System.Boolean)

Run the ResetToDefault action with optional verification dialog.

<!-- !! processed by numpydoc !! -->

### ContactRegion.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### ContactRegion.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

### ContactRegion.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### ContactRegion.AddPythonCodeEventBased()

Creates a new PythonCodeEventBased

<!-- !! processed by numpydoc !! -->

### ContactRegion.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### ContactRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ContactRegion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactRegion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ContactRegion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ContactRegion.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### ContactRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ContactRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ContactRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ContactRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ContactRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ContactRegion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ContactRegion.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### ContactRegion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ContactRegion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ContactRegion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

