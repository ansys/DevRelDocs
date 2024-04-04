# ContactRegion

### *class* ContactRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactRegion.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`SearchConnectionsForDuplicatePairs`](#ContactRegion.SearchConnectionsForDuplicatePairs)   | Run the SearchConnectionsForDuplicatePairs action.                                |
|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`FlipContactTarget`](#ContactRegion.FlipContactTarget)                                     | Run the FlipContactTarget action.                                                 |
| [`SetDefaultAPDLNames`](#ContactRegion.SetDefaultAPDLNames)                                 | Run the SetDefaultAPDLNames action.                                               |
| [`SaveContactRegionSettings`](#ContactRegion.SaveContactRegionSettings)                     | Run the SaveContactRegionSettings action.                                         |
| [`LoadContactRegionSettings`](#ContactRegion.LoadContactRegionSettings)                     | Run the LoadContactRegionSettings action.                                         |
| [`ResetToDefault`](#id1)                                                                    | Run the ResetToDefault action.                                                    |
| [`ResetToDefault`](#id1)                                                                    | Run the ResetToDefault action with optional verification dialog.                  |
| [`PromoteToNamedSelection`](#ContactRegion.PromoteToNamedSelection)                         | Run the PromoteToNamedSelection action.                                           |
| [`PromoteToRemotePoint`](#ContactRegion.PromoteToRemotePoint)                               | Run the PromoteToRemotePoint action.                                              |
| [`AddCommandSnippet`](#ContactRegion.AddCommandSnippet)                                     | Creates a new CommandSnippet                                                      |
| [`AddPythonCodeEventBased`](#ContactRegion.AddPythonCodeEventBased)                         | Creates a new PythonCodeEventBased                                                |
| [`RenameBasedOnDefinition`](#ContactRegion.RenameBasedOnDefinition)                         | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactRegion.Delete)                                                           | Run the Delete action.                                                            |
| [`GetChildren`](#id2)                                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id2)                                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactRegion.AddComment)                                                   | Creates a new child Comment.                                                      |
| [`AddFigure`](#ContactRegion.AddFigure)                                                     | Creates a new child Figure.                                                       |
| [`AddImage`](#ContactRegion.AddImage)                                                       | Creates a new child Image.                                                        |
| [`Activate`](#ContactRegion.Activate)                                                       | Activate the current object.                                                      |
| [`CopyTo`](#ContactRegion.CopyTo)                                                           | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactRegion.Duplicate)                                                     | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactRegion.GroupAllSimilarChildren)                         | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactRegion.GroupSimilarObjects)                                 | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactRegion.PropertyByName)                                           | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactRegion.PropertyByAPIName)                                     | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactRegion.CreateParameter)                                         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactRegion.GetParameter)                                               | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactRegion.RemoveParameter)                                         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ContactAPDLName`](#ContactRegion.ContactAPDLName)                                                                    | Gets or sets the ContactAPDLName.                             |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`TargetAPDLName`](#ContactRegion.TargetAPDLName)                                                                      | Gets or sets the TargetAPDLName.                              |
| [`SourceLocation`](#ContactRegion.SourceLocation)                                                                      | Gets or sets the SourceLocation.                              |
| [`TargetLocation`](#ContactRegion.TargetLocation)                                                                      | Gets or sets the TargetLocation.                              |
| [`AutomaticNormalStiffness`](#ContactRegion.AutomaticNormalStiffness)                                                  | Gets or sets the AutomaticNormalStiffness.                    |
| [`BeamMaterialName`](#ContactRegion.BeamMaterialName)                                                                  | Gets or sets the BeamMaterialName.                            |
| [`BeamBeamDetection`](#ContactRegion.BeamBeamDetection)                                                                | Gets or sets the BeamBeamDetection.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Material`](../Material.md#Material)                                                                                  | Gets or sets the Material.                                    |
| [`StabilizationDampingFactor`](#ContactRegion.StabilizationDampingFactor)                                              | Gets or sets the StabilizationDampingFactor.                  |
| [`DecayConstant`](#ContactRegion.DecayConstant)                                                                        | Gets or sets the DecayConstant.                               |
| [`DynamicCoefficient`](#ContactRegion.DynamicCoefficient)                                                              | Gets or sets the DynamicCoefficient.                          |
| [`ElasticSlipToleranceFactor`](#ContactRegion.ElasticSlipToleranceFactor)                                              | Gets or sets the ElasticSlipToleranceFactor.                  |
| [`FrictionCoefficient`](#ContactRegion.FrictionCoefficient)                                                            | Gets or sets the FrictionCoefficient.                         |
| [`InitialClearanceFactor`](#ContactRegion.InitialClearanceFactor)                                                      | Gets or sets the InitialClearanceFactor.                      |
| [`NormalForceExponent`](#ContactRegion.NormalForceExponent)                                                            | Gets or sets the NormalForceExponent.                         |
| [`NormalStiffnessFactor`](#ContactRegion.NormalStiffnessFactor)                                                        | Gets or sets the NormalStiffnessFactor.                       |
| [`NormalStressExponent`](#ContactRegion.NormalStressExponent)                                                          | Gets or sets the NormalStressExponent.                        |
| [`PenetrationToleranceFactor`](#ContactRegion.PenetrationToleranceFactor)                                              | Gets or sets the PenetrationToleranceFactor.                  |
| [`PinballFactor`](#ContactRegion.PinballFactor)                                                                        | Gets or sets the PinballFactor.                               |
| [`PressureAtZeroPenetrationFactor`](#ContactRegion.PressureAtZeroPenetrationFactor)                                    | Gets or sets the PressureAtZeroPenetrationFactor.             |
| [`RestitutionFactor`](#ContactRegion.RestitutionFactor)                                                                | Gets or sets the RestitutionFactor.                           |
| [`ShearForceExponent`](#ContactRegion.ShearForceExponent)                                                              | Gets or sets the ShearForceExponent.                          |
| [`ShearStressExponent`](#ContactRegion.ShearStressExponent)                                                            | Gets or sets the ShearStressExponent.                         |
| [`ContactBodies`](#ContactRegion.ContactBodies)                                                                        | Gets the ContactBodies.                                       |
| [`TargetBodies`](#ContactRegion.TargetBodies)                                                                          | Gets the TargetBodies.                                        |
| [`AutomaticDetectionValue`](#ContactRegion.AutomaticDetectionValue)                                                    | Gets the AutomaticDetectionValue.                             |
| [`BeamRadius`](#ContactRegion.BeamRadius)                                                                              | Gets or sets the BeamRadius.                                  |
| [`ThreadAngle`](#ContactRegion.ThreadAngle)                                                                            | Gets or sets the ThreadAngle.                                 |
| [`MeanPitchDiameter`](#ContactRegion.MeanPitchDiameter)                                                                | Gets or sets the MeanPitchDiameter.                           |
| [`PitchDistance`](#ContactRegion.PitchDistance)                                                                        | Gets or sets the PitchDistance.                               |
| [`BondedMaximumOffset`](#ContactRegion.BondedMaximumOffset)                                                            | Gets or sets the BondedMaximumOffset.                         |
| [`ElasticSlipToleranceValue`](#ContactRegion.ElasticSlipToleranceValue)                                                | Gets or sets the ElasticSlipToleranceValue.                   |
| [`ElectricCapacitanceValue`](#ContactRegion.ElectricCapacitanceValue)                                                  | Gets or sets the ElectricCapacitanceValue.                    |
| [`ElectricConductanceValue`](#ContactRegion.ElectricConductanceValue)                                                  | Gets or sets the ElectricConductanceValue.                    |
| [`InitialClearanceValue`](#ContactRegion.InitialClearanceValue)                                                        | Gets or sets the InitialClearanceValue.                       |
| [`NormalForceLimit`](#ContactRegion.NormalForceLimit)                                                                  | Gets or sets the NormalForceLimit.                            |
| [`NormalStiffnessValue`](#ContactRegion.NormalStiffnessValue)                                                          | Gets or sets the NormalStiffnessValue.                        |
| [`NormalStressLimit`](#ContactRegion.NormalStressLimit)                                                                | Gets or sets the NormalStressLimit.                           |
| [`PenetrationToleranceValue`](#ContactRegion.PenetrationToleranceValue)                                                | Gets or sets the PenetrationToleranceValue.                   |
| [`PinballRadius`](#ContactRegion.PinballRadius)                                                                        | Gets or sets the PinballRadius.                               |
| [`PressureAtZeroPenetrationValue`](#ContactRegion.PressureAtZeroPenetrationValue)                                      | Gets or sets the PressureAtZeroPenetrationValue.              |
| [`ShearForceLimit`](#ContactRegion.ShearForceLimit)                                                                    | Gets or sets the ShearForceLimit.                             |
| [`ShearStressLimit`](#ContactRegion.ShearStressLimit)                                                                  | Gets or sets the ShearStressLimit.                            |
| [`ThermalConductanceValue`](#ContactRegion.ThermalConductanceValue)                                                    | Gets or sets the ThermalConductanceValue.                     |
| [`TrimTolerance`](#ContactRegion.TrimTolerance)                                                                        | Gets or sets the TrimTolerance.                               |
| [`UserOffset`](#ContactRegion.UserOffset)                                                                              | Gets or sets the UserOffset.                                  |
| [`LineLineDetection`](#ContactRegion.LineLineDetection)                                                                | Gets or sets the LineLineDetection.                           |
| [`BeamBeamModel`](../../../../Mechanical/DataModel/Enums/BeamBeamModel.md#BeamBeamModel)                               | Gets or sets the BeamBeamModel.                               |
| [`Handedness`](#ContactRegion.Handedness)                                                                              | Gets or sets the Handedness.                                  |
| [`ThreadType`](#ContactRegion.ThreadType)                                                                              | Gets or sets the ThreadType.                                  |
| [`Breakable`](#ContactRegion.Breakable)                                                                                | Gets or sets the Breakable.                                   |
| [`ConstraintType`](#ContactRegion.ConstraintType)                                                                      | Gets or sets the ConstraintType.                              |
| [`ContactGeometryCorrection`](#ContactRegion.ContactGeometryCorrection)                                                | Gets or sets the ContactGeometryCorrection.                   |
| [`ContactFormulation`](../../../../Mechanical/DataModel/Enums/ContactFormulation.md#ContactFormulation)                | Gets or sets the ContactFormulation.                          |
| [`ContactOrientation`](../../../../Mechanical/DataModel/Enums/ContactOrientation.md#ContactOrientation)                | Gets or sets the ContactOrientation.                          |
| [`ContactShellFace`](#ContactRegion.ContactShellFace)                                                                  | Gets or sets the ContactShellFace.                            |
| [`ContactType`](../../../../Mechanical/DataModel/Enums/ContactType.md#ContactType)                                     | Gets or sets the ContactType.                                 |
| [`ContinuousDistanceComputation`](#ContactRegion.ContinuousDistanceComputation)                                        | Gets or sets the ContinuousDistanceComputation.               |
| [`DetectionMethod`](#ContactRegion.DetectionMethod)                                                                    | Gets or sets the DetectionMethod.                             |
| [`EdgeContactType`](../../../../Mechanical/DataModel/Enums/EdgeContactType.md#EdgeContactType)                         | Gets or sets the EdgeContactType.                             |
| [`InitialClearance`](#ContactRegion.InitialClearance)                                                                  | Gets or sets the InitialClearance.                            |
| [`InterfaceTreatment`](#ContactRegion.InterfaceTreatment)                                                              | Gets or sets the InterfaceTreatment.                          |
| [`ScopeMode`](#ContactRegion.ScopeMode)                                                                                | Gets the ScopeMode.                                           |
| [`NormalStiffnessValueType`](#ContactRegion.NormalStiffnessValueType)                                                  | Gets or sets the NormalStiffnessValueType.                    |
| [`PinballRegion`](#ContactRegion.PinballRegion)                                                                        | Gets or sets the PinballRegion.                               |
| [`PressureAtZeroPenetration`](#ContactRegion.PressureAtZeroPenetration)                                                | Gets or sets the PressureAtZeroPenetration.                   |
| [`RBDContactDetection`](#ContactRegion.RBDContactDetection)                                                            | Gets or sets the RBDContactDetection.                         |
| [`SmallSliding`](#ContactRegion.SmallSliding)                                                                          | Gets or sets the SmallSliding.                                |
| [`Behavior`](#ContactRegion.Behavior)                                                                                  | Gets or sets the Behavior.                                    |
| [`TargetGeometryCorrection`](#ContactRegion.TargetGeometryCorrection)                                                  | Gets or sets the TargetGeometryCorrection.                    |
| [`TargetOrientation`](../../../../Mechanical/DataModel/Enums/TargetOrientation.md#TargetOrientation)                   | Gets or sets the TargetOrientation.                           |
| [`TargetShellFace`](#ContactRegion.TargetShellFace)                                                                    | Gets or sets the TargetShellFace.                             |
| [`TimeStepControls`](#ContactRegion.TimeStepControls)                                                                  | Gets or sets the TimeStepControls.                            |
| [`TrimContact`](#ContactRegion.TrimContact)                                                                            | Gets or sets the TrimContact.                                 |
| [`UpdateStiffness`](#ContactRegion.UpdateStiffness)                                                                    | Gets or sets the UpdateStiffness.                             |
| [`ElasticSlipTolerance`](#ContactRegion.ElasticSlipTolerance)                                                          | Gets or sets the ElasticSlipTolerance.                        |
| [`PenetrationTolerance`](#ContactRegion.PenetrationTolerance)                                                          | Gets or sets the PenetrationTolerance.                        |
| [`DisplayElementNormal`](#ContactRegion.DisplayElementNormal)                                                          | Gets or sets the DisplayElementNormal.                        |
| [`FlipContact`](#ContactRegion.FlipContact)                                                                            | Gets or sets the FlipContact.                                 |
| [`FlipTarget`](#ContactRegion.FlipTarget)                                                                              | Gets or sets the FlipTarget.                                  |
| [`Protected`](#ContactRegion.Protected)                                                                                | Gets or sets the Protected.                                   |
| [`ShellThicknessEffect`](#ContactRegion.ShellThicknessEffect)                                                          | Gets or sets the ShellThicknessEffect.                        |
| [`Suppressed`](#ContactRegion.Suppressed)                                                                              | Gets or sets the Suppressed.                                  |
| [`AutomaticElectricCapacitance`](#ContactRegion.AutomaticElectricCapacitance)                                          | Gets or sets the AutomaticElectricCapacitance.                |
| [`AutomaticElectricConductance`](#ContactRegion.AutomaticElectricConductance)                                          | Gets or sets the AutomaticElectricConductance.                |
| [`AutomaticThermalConductance`](#ContactRegion.AutomaticThermalConductance)                                            | Gets or sets the AutomaticThermalConductance.                 |
| [`ContactCenterPoint`](#ContactRegion.ContactCenterPoint)                                                              | Gets or sets the ContactCenterPoint.                          |
| [`ContactEndingPoint`](#ContactRegion.ContactEndingPoint)                                                              | Gets or sets the ContactEndingPoint.                          |
| [`ContactStartingPoint`](#ContactRegion.ContactStartingPoint)                                                          | Gets or sets the ContactStartingPoint.                        |
| [`SharedSourceBody`](#ContactRegion.SharedSourceBody)                                                                  | Gets or sets the SharedSourceBody.                            |
| [`SharedTargetBody`](#ContactRegion.SharedTargetBody)                                                                  | Gets or sets the SharedTargetBody.                            |
| [`TargetCenterPoint`](#ContactRegion.TargetCenterPoint)                                                                | Gets or sets the TargetCenterPoint.                           |
| [`TargetEndingPoint`](#ContactRegion.TargetEndingPoint)                                                                | Gets or sets the TargetEndingPoint.                           |
| [`TargetStartingPoint`](#ContactRegion.TargetStartingPoint)                                                            | Gets or sets the TargetStartingPoint.                         |
| [`SharedSourceReverseNormalLocation`](#ContactRegion.SharedSourceReverseNormalLocation)                                | Gets or sets the SharedSourceReverseNormalLocation.           |
| [`SharedTargetReverseNormalLocation`](#ContactRegion.SharedTargetReverseNormalLocation)                                | Gets or sets the SharedTargetReverseNormalLocation.           |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ContactRegion.Children)                                                                                  | Gets the list of children.                                    |
| [`Comments`](#ContactRegion.Comments)                                                                                  | Gets the list of associated comments.                         |
| [`Figures`](#ContactRegion.Figures)                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#ContactRegion.Images)                                                                                      | Gets the list of associated images.                           |
| [`ReadOnly`](#ContactRegion.ReadOnly)                                                                                  | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactRegion.Properties)                                                                              | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactRegion.VisibleProperties)                                                                | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import ContactRegion
```

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

### *property* ContactRegion.BeamBeamDetection *: [Ansys.Mechanical.DataModel.Enums.BeamBeamContactDetectionType](../../../../Mechanical/DataModel/Enums/BeamBeamContactDetectionType.md#BeamBeamContactDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ContactRegion.LineLineDetection *: [Ansys.Mechanical.DataModel.Enums.LineLineContactDetectionType](../../../../Mechanical/DataModel/Enums/LineLineContactDetectionType.md#LineLineContactDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LineLineDetection.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.BeamBeamModel *: [Ansys.Mechanical.DataModel.Enums.BeamBeamModel](../../../../Mechanical/DataModel/Enums/BeamBeamModel.md#BeamBeamModel) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamBeamModel.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.Handedness *: [Ansys.Mechanical.DataModel.Enums.ContactBoltThreadHand](../../../../Mechanical/DataModel/Enums/ContactBoltThreadHand.md#ContactBoltThreadHand) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Handedness.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ThreadType *: [Ansys.Mechanical.DataModel.Enums.ContactBoltThreadType](../../../../Mechanical/DataModel/Enums/ContactBoltThreadType.md#ContactBoltThreadType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThreadType.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.Breakable *: [Ansys.Mechanical.DataModel.Enums.BondedBreakableType](../../../../Mechanical/DataModel/Enums/BondedBreakableType.md#BondedBreakableType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Breakable.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ConstraintType *: [Ansys.Mechanical.DataModel.Enums.ContactConstraintType](../../../../Mechanical/DataModel/Enums/ContactConstraintType.md#ContactConstraintType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintType.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ContactGeometryCorrection *: [Ansys.Mechanical.DataModel.Enums.ContactCorrection](../../../../Mechanical/DataModel/Enums/ContactCorrection.md#ContactCorrection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactGeometryCorrection.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ContactFormulation *: [Ansys.Mechanical.DataModel.Enums.ContactFormulation](../../../../Mechanical/DataModel/Enums/ContactFormulation.md#ContactFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactFormulation.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ContactOrientation *: [Ansys.Mechanical.DataModel.Enums.ContactOrientation](../../../../Mechanical/DataModel/Enums/ContactOrientation.md#ContactOrientation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactOrientation.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ContactShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactShellFace.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ContactType *: [Ansys.Mechanical.DataModel.Enums.ContactType](../../../../Mechanical/DataModel/Enums/ContactType.md#ContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactType.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ContinuousDistanceComputation *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContinuousDistanceComputation.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.DetectionMethod *: [Ansys.Mechanical.DataModel.Enums.ContactDetectionPoint](../../../../Mechanical/DataModel/Enums/ContactDetectionPoint.md#ContactDetectionPoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DetectionMethod.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.EdgeContactType *: [Ansys.Mechanical.DataModel.Enums.EdgeContactType](../../../../Mechanical/DataModel/Enums/EdgeContactType.md#EdgeContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeContactType.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.InitialClearance *: [Ansys.Mechanical.DataModel.Enums.InitialClearanceType](../../../../Mechanical/DataModel/Enums/InitialClearanceType.md#InitialClearanceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialClearance.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.InterfaceTreatment *: [Ansys.Mechanical.DataModel.Enums.ContactInitialEffect](../../../../Mechanical/DataModel/Enums/ContactInitialEffect.md#ContactInitialEffect) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InterfaceTreatment.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.NormalStiffnessValueType *: [Ansys.Mechanical.DataModel.Enums.ElementControlsNormalStiffnessType](../../../../Mechanical/DataModel/Enums/ElementControlsNormalStiffnessType.md#ElementControlsNormalStiffnessType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStiffnessValueType.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.PinballRegion *: [Ansys.Mechanical.DataModel.Enums.ContactPinballType](../../../../Mechanical/DataModel/Enums/ContactPinballType.md#ContactPinballType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.PressureAtZeroPenetration *: [Ansys.Mechanical.DataModel.Enums.PressureAtZeroPenetrationType](../../../../Mechanical/DataModel/Enums/PressureAtZeroPenetrationType.md#PressureAtZeroPenetrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PressureAtZeroPenetration.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.RBDContactDetection *: [Ansys.Mechanical.DataModel.Enums.DSRBDContactDetection](../../../../Mechanical/DataModel/Enums/DSRBDContactDetection.md#DSRBDContactDetection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RBDContactDetection.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.SmallSliding *: [Ansys.Mechanical.DataModel.Enums.ContactSmallSlidingType](../../../../Mechanical/DataModel/Enums/ContactSmallSlidingType.md#ContactSmallSlidingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SmallSliding.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.Behavior *: [Ansys.Mechanical.DataModel.Enums.ContactBehavior](../../../../Mechanical/DataModel/Enums/ContactBehavior.md#ContactBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TargetGeometryCorrection *: [Ansys.Mechanical.DataModel.Enums.TargetCorrection](../../../../Mechanical/DataModel/Enums/TargetCorrection.md#TargetCorrection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetGeometryCorrection.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TargetOrientation *: [Ansys.Mechanical.DataModel.Enums.TargetOrientation](../../../../Mechanical/DataModel/Enums/TargetOrientation.md#TargetOrientation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetOrientation.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TargetShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetShellFace.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TimeStepControls *: [Ansys.Mechanical.DataModel.Enums.ContactTimeStepControls](../../../../Mechanical/DataModel/Enums/ContactTimeStepControls.md#ContactTimeStepControls) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeStepControls.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TrimContact *: [Ansys.Mechanical.DataModel.Enums.ContactTrimType](../../../../Mechanical/DataModel/Enums/ContactTrimType.md#ContactTrimType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TrimContact.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.UpdateStiffness *: [Ansys.Mechanical.DataModel.Enums.UpdateContactStiffness](../../../../Mechanical/DataModel/Enums/UpdateContactStiffness.md#UpdateContactStiffness) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpdateStiffness.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ElasticSlipTolerance *: [Ansys.Mechanical.DataModel.Enums.ContactElasticSlipToleranceType](../../../../Mechanical/DataModel/Enums/ContactElasticSlipToleranceType.md#ContactElasticSlipToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticSlipTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.PenetrationTolerance *: [Ansys.Mechanical.DataModel.Enums.ContactPenetrationToleranceType](../../../../Mechanical/DataModel/Enums/ContactPenetrationToleranceType.md#ContactPenetrationToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ContactRegion.ContactCenterPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactCenterPoint.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ContactEndingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactEndingPoint.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.ContactStartingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactStartingPoint.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.SharedSourceBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedSourceBody.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.SharedTargetBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedTargetBody.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TargetCenterPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetCenterPoint.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TargetEndingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetEndingPoint.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.TargetStartingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetStartingPoint.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.SharedSourceReverseNormalLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedSourceReverseNormalLocation.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.SharedTargetReverseNormalLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedTargetReverseNormalLocation.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ContactRegion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### ContactRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactRegion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ContactRegion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ContactRegion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

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

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

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
