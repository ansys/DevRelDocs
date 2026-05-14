# `ContactRegion`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.ContactRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactRegion.Activate)                                                     | Activate the current object.                                                      |
| [`AddCommandSnippet`](#ContactRegion.AddCommandSnippet)                                   | Creates a new CommandSnippet                                                      |
| [`AddComment`](#ContactRegion.AddComment)                                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](#ContactRegion.AddFigure)                                                   | Creates a new child Figure.                                                       |
| [`AddImage`](#ContactRegion.AddImage)                                                     | Creates a new child Image.                                                        |
| [`AddPythonCodeEventBased`](#ContactRegion.AddPythonCodeEventBased)                       | Creates a new PythonCodeEventBased                                                |
| [`CopyTo`](#ContactRegion.CopyTo)                                                         | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactRegion.CreateParameter)                                       | Creates a new parameter for a Property.                                           |
| [`Delete`](#ContactRegion.Delete)                                                         | Run the Delete action.                                                            |
| [`Duplicate`](#ContactRegion.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                    |
| [`FlipContactTarget`](#ContactRegion.FlipContactTarget)                                   | Run the FlipContactTarget action.                                                 |
| [`GetChildren`](#ContactRegion.GetChildren)                                               | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactRegion.GetParameter)                                             | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactRegion.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactRegion.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                               |
| [`LoadContactRegionSettings`](#ContactRegion.LoadContactRegionSettings)                   | Run the LoadContactRegionSettings action.                                         |
| [`PromoteToNamedSelection`](#ContactRegion.PromoteToNamedSelection)                       | Run the PromoteToNamedSelection action.                                           |
| [`PromoteToRemotePoint`](#ContactRegion.PromoteToRemotePoint)                             | Run the PromoteToRemotePoint action.                                              |
| [`PropertyByAPIName`](#ContactRegion.PropertyByAPIName)                                   | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactRegion.PropertyByName)                                         | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactRegion.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ContactRegion.RenameBasedOnDefinition)                       | Run the RenameBasedOnDefinition action.                                           |
| [`ResetToDefault`](#ContactRegion.ResetToDefault)                                         | Run the ResetToDefault action.                                                    |
| [`SaveContactRegionSettings`](#ContactRegion.SaveContactRegionSettings)                   | Run the SaveContactRegionSettings action.                                         |
| [`SearchConnectionsForDuplicatePairs`](#ContactRegion.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                |
| [`SetDefaultAPDLNames`](#ContactRegion.SetDefaultAPDLNames)                               | Run the SetDefaultAPDLNames action.                                               |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AutomaticDetectionValue`](#ContactRegion.AutomaticDetectionValue)                     | Gets the AutomaticDetectionValue.                             |
| [`AutomaticElectricCapacitance`](#ContactRegion.AutomaticElectricCapacitance)           | Gets or sets the AutomaticElectricCapacitance.                |
| [`AutomaticElectricConductance`](#ContactRegion.AutomaticElectricConductance)           | Gets or sets the AutomaticElectricConductance.                |
| [`AutomaticNormalStiffness`](#ContactRegion.AutomaticNormalStiffness)                   | Gets or sets the AutomaticNormalStiffness.                    |
| [`AutomaticThermalConductance`](#ContactRegion.AutomaticThermalConductance)             | Gets or sets the AutomaticThermalConductance.                 |
| [`BeamBeamDetection`](#ContactRegion.BeamBeamDetection)                                 | Gets or sets the BeamBeamDetection.                           |
| [`BeamBeamModel`](#ContactRegion.BeamBeamModel)                                         | Gets or sets the BeamBeamModel.                               |
| [`BeamMaterialName`](#ContactRegion.BeamMaterialName)                                   | Gets or sets the BeamMaterialName.                            |
| [`BeamRadius`](#ContactRegion.BeamRadius)                                               | Gets or sets the BeamRadius.                                  |
| [`Behavior`](#ContactRegion.Behavior)                                                   | Gets or sets the Behavior.                                    |
| [`BondedMaximumOffset`](#ContactRegion.BondedMaximumOffset)                             | Gets or sets the BondedMaximumOffset.                         |
| [`Breakable`](#ContactRegion.Breakable)                                                 | Gets or sets the Breakable.                                   |
| [`Children`](#ContactRegion.Children)                                                   | Gets the list of children.                                    |
| [`Comments`](#ContactRegion.Comments)                                                   | Gets the list of associated comments.                         |
| [`ConstraintType`](#ContactRegion.ConstraintType)                                       | Gets or sets the ConstraintType.                              |
| [`ContactAPDLName`](#ContactRegion.ContactAPDLName)                                     | Gets or sets the ContactAPDLName.                             |
| [`ContactBodies`](#ContactRegion.ContactBodies)                                         | Gets the ContactBodies.                                       |
| [`ContactCenterPoint`](#ContactRegion.ContactCenterPoint)                               | Gets or sets the ContactCenterPoint.                          |
| [`ContactEndingPoint`](#ContactRegion.ContactEndingPoint)                               | Gets or sets the ContactEndingPoint.                          |
| [`ContactFormulation`](#ContactRegion.ContactFormulation)                               | Gets or sets the ContactFormulation.                          |
| [`ContactGeometryCorrection`](#ContactRegion.ContactGeometryCorrection)                 | Gets or sets the ContactGeometryCorrection.                   |
| [`ContactOrientation`](#ContactRegion.ContactOrientation)                               | Gets or sets the ContactOrientation.                          |
| [`ContactShellFace`](#ContactRegion.ContactShellFace)                                   | Gets or sets the ContactShellFace.                            |
| [`ContactStartingPoint`](#ContactRegion.ContactStartingPoint)                           | Gets or sets the ContactStartingPoint.                        |
| [`ContactType`](#ContactRegion.ContactType)                                             | ContactType property.                                         |
| [`ContinuousDistanceComputation`](#ContactRegion.ContinuousDistanceComputation)         | Gets or sets the ContinuousDistanceComputation.               |
| [`DataModelObjectCategory`](#ContactRegion.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                  |
| [`DecayConstant`](#ContactRegion.DecayConstant)                                         | Gets or sets the DecayConstant.                               |
| [`DetectionMethod`](#ContactRegion.DetectionMethod)                                     | Gets or sets the DetectionMethod.                             |
| [`DisplayElementNormal`](#ContactRegion.DisplayElementNormal)                           | Gets or sets the DisplayElementNormal.                        |
| [`DynamicCoefficient`](#ContactRegion.DynamicCoefficient)                               | Gets or sets the DynamicCoefficient.                          |
| [`EdgeContactType`](#ContactRegion.EdgeContactType)                                     | Gets or sets the EdgeContactType.                             |
| [`ElasticSlipTolerance`](#ContactRegion.ElasticSlipTolerance)                           | Gets or sets the ElasticSlipTolerance.                        |
| [`ElasticSlipToleranceFactor`](#ContactRegion.ElasticSlipToleranceFactor)               | Gets or sets the ElasticSlipToleranceFactor.                  |
| [`ElasticSlipToleranceValue`](#ContactRegion.ElasticSlipToleranceValue)                 | Gets or sets the ElasticSlipToleranceValue.                   |
| [`ElectricCapacitanceValue`](#ContactRegion.ElectricCapacitanceValue)                   | Gets or sets the ElectricCapacitanceValue.                    |
| [`ElectricConductanceValue`](#ContactRegion.ElectricConductanceValue)                   | Gets or sets the ElectricConductanceValue.                    |
| [`Figures`](#ContactRegion.Figures)                                                     | Gets the list of associated figures.                          |
| [`FlipContact`](#ContactRegion.FlipContact)                                             | Gets or sets the FlipContact.                                 |
| [`FlipTarget`](#ContactRegion.FlipTarget)                                               | Gets or sets the FlipTarget.                                  |
| [`FrictionCoefficient`](#ContactRegion.FrictionCoefficient)                             | Gets or sets the FrictionCoefficient.                         |
| [`Handedness`](#ContactRegion.Handedness)                                               | Gets or sets the Handedness.                                  |
| [`Images`](#ContactRegion.Images)                                                       | Gets the list of associated images.                           |
| [`InitialClearance`](#ContactRegion.InitialClearance)                                   | Gets or sets the InitialClearance.                            |
| [`InitialClearanceFactor`](#ContactRegion.InitialClearanceFactor)                       | Gets or sets the InitialClearanceFactor.                      |
| [`InitialClearanceValue`](#ContactRegion.InitialClearanceValue)                         | Gets or sets the InitialClearanceValue.                       |
| [`InterfaceTreatment`](#ContactRegion.InterfaceTreatment)                               | Gets or sets the InterfaceTreatment.                          |
| [`InternalObject`](#ContactRegion.InternalObject)                                       | Gets the internal object. For advanced usage only.            |
| [`LineLineDetection`](#ContactRegion.LineLineDetection)                                 | Gets or sets the LineLineDetection.                           |
| [`Material`](#ContactRegion.Material)                                                   | Gets or sets the Material.                                    |
| [`MeanPitchDiameter`](#ContactRegion.MeanPitchDiameter)                                 | Gets or sets the MeanPitchDiameter.                           |
| [`NormalForceExponent`](#ContactRegion.NormalForceExponent)                             | Gets or sets the NormalForceExponent.                         |
| [`NormalForceLimit`](#ContactRegion.NormalForceLimit)                                   | Gets or sets the NormalForceLimit.                            |
| [`NormalStiffnessFactor`](#ContactRegion.NormalStiffnessFactor)                         | Gets or sets the NormalStiffnessFactor.                       |
| [`NormalStiffnessValue`](#ContactRegion.NormalStiffnessValue)                           | Gets or sets the NormalStiffnessValue.                        |
| [`NormalStiffnessValueType`](#ContactRegion.NormalStiffnessValueType)                   | Gets or sets the NormalStiffnessValueType.                    |
| [`NormalStressExponent`](#ContactRegion.NormalStressExponent)                           | Gets or sets the NormalStressExponent.                        |
| [`NormalStressLimit`](#ContactRegion.NormalStressLimit)                                 | Gets or sets the NormalStressLimit.                           |
| [`PenetrationTolerance`](#ContactRegion.PenetrationTolerance)                           | Gets or sets the PenetrationTolerance.                        |
| [`PenetrationToleranceFactor`](#ContactRegion.PenetrationToleranceFactor)               | Gets or sets the PenetrationToleranceFactor.                  |
| [`PenetrationToleranceValue`](#ContactRegion.PenetrationToleranceValue)                 | Gets or sets the PenetrationToleranceValue.                   |
| [`PinballFactor`](#ContactRegion.PinballFactor)                                         | Gets or sets the PinballFactor.                               |
| [`PinballRadius`](#ContactRegion.PinballRadius)                                         | Gets or sets the PinballRadius.                               |
| [`PinballRegion`](#ContactRegion.PinballRegion)                                         | Gets or sets the PinballRegion.                               |
| [`PitchDistance`](#ContactRegion.PitchDistance)                                         | Gets or sets the PitchDistance.                               |
| [`PressureAtZeroPenetration`](#ContactRegion.PressureAtZeroPenetration)                 | Gets or sets the PressureAtZeroPenetration.                   |
| [`PressureAtZeroPenetrationFactor`](#ContactRegion.PressureAtZeroPenetrationFactor)     | Gets or sets the PressureAtZeroPenetrationFactor.             |
| [`PressureAtZeroPenetrationValue`](#ContactRegion.PressureAtZeroPenetrationValue)       | Gets or sets the PressureAtZeroPenetrationValue.              |
| [`Properties`](#ContactRegion.Properties)                                               | Gets the list of properties for this object.                  |
| [`Protected`](#ContactRegion.Protected)                                                 | Gets or sets the Protected.                                   |
| [`RBDContactDetection`](#ContactRegion.RBDContactDetection)                             | Gets or sets the RBDContactDetection.                         |
| [`ReadOnly`](#ContactRegion.ReadOnly)                                                   | Gets or sets the ReadOnly.                                    |
| [`RestitutionFactor`](#ContactRegion.RestitutionFactor)                                 | Gets or sets the RestitutionFactor.                           |
| [`ScopeMode`](#ContactRegion.ScopeMode)                                                 | Gets the ScopeMode.                                           |
| [`SharedSourceBody`](#ContactRegion.SharedSourceBody)                                   | Gets or sets the SharedSourceBody.                            |
| [`SharedSourceReverseNormalLocation`](#ContactRegion.SharedSourceReverseNormalLocation) | Gets or sets the SharedSourceReverseNormalLocation.           |
| [`SharedTargetBody`](#ContactRegion.SharedTargetBody)                                   | Gets or sets the SharedTargetBody.                            |
| [`SharedTargetReverseNormalLocation`](#ContactRegion.SharedTargetReverseNormalLocation) | Gets or sets the SharedTargetReverseNormalLocation.           |
| [`ShearForceExponent`](#ContactRegion.ShearForceExponent)                               | Gets or sets the ShearForceExponent.                          |
| [`ShearForceLimit`](#ContactRegion.ShearForceLimit)                                     | Gets or sets the ShearForceLimit.                             |
| [`ShearStressExponent`](#ContactRegion.ShearStressExponent)                             | Gets or sets the ShearStressExponent.                         |
| [`ShearStressLimit`](#ContactRegion.ShearStressLimit)                                   | Gets or sets the ShearStressLimit.                            |
| [`ShellThicknessEffect`](#ContactRegion.ShellThicknessEffect)                           | Gets or sets the ShellThicknessEffect.                        |
| [`SmallSliding`](#ContactRegion.SmallSliding)                                           | Gets or sets the SmallSliding.                                |
| [`SourceLocation`](#ContactRegion.SourceLocation)                                       | Gets or sets the SourceLocation.                              |
| [`StabilizationDampingFactor`](#ContactRegion.StabilizationDampingFactor)               | Gets or sets the StabilizationDampingFactor.                  |
| [`Suppressed`](#ContactRegion.Suppressed)                                               | Gets or sets the Suppressed.                                  |
| [`TargetAPDLName`](#ContactRegion.TargetAPDLName)                                       | Gets or sets the TargetAPDLName.                              |
| [`TargetBodies`](#ContactRegion.TargetBodies)                                           | Gets the TargetBodies.                                        |
| [`TargetCenterPoint`](#ContactRegion.TargetCenterPoint)                                 | Gets or sets the TargetCenterPoint.                           |
| [`TargetEndingPoint`](#ContactRegion.TargetEndingPoint)                                 | Gets or sets the TargetEndingPoint.                           |
| [`TargetGeometryCorrection`](#ContactRegion.TargetGeometryCorrection)                   | Gets or sets the TargetGeometryCorrection.                    |
| [`TargetLocation`](#ContactRegion.TargetLocation)                                       | Gets or sets the TargetLocation.                              |
| [`TargetOrientation`](#ContactRegion.TargetOrientation)                                 | Gets or sets the TargetOrientation.                           |
| [`TargetShellFace`](#ContactRegion.TargetShellFace)                                     | Gets or sets the TargetShellFace.                             |
| [`TargetStartingPoint`](#ContactRegion.TargetStartingPoint)                             | Gets or sets the TargetStartingPoint.                         |
| [`ThermalConductanceValue`](#ContactRegion.ThermalConductanceValue)                     | Gets or sets the ThermalConductanceValue.                     |
| [`ThreadAngle`](#ContactRegion.ThreadAngle)                                             | Gets or sets the ThreadAngle.                                 |
| [`ThreadType`](#ContactRegion.ThreadType)                                               | Gets or sets the ThreadType.                                  |
| [`TimeStepControls`](#ContactRegion.TimeStepControls)                                   | Gets or sets the TimeStepControls.                            |
| [`TrimContact`](#ContactRegion.TrimContact)                                             | Gets or sets the TrimContact.                                 |
| [`TrimTolerance`](#ContactRegion.TrimTolerance)                                         | Gets or sets the TrimTolerance.                               |
| [`UpdateStiffness`](#ContactRegion.UpdateStiffness)                                     | Gets or sets the UpdateStiffness.                             |
| [`UserOffset`](#ContactRegion.UserOffset)                                               | Gets or sets the UserOffset.                                  |
| [`VisibleProperties`](#ContactRegion.VisibleProperties)                                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactRegion.AutomaticDetectionValue"></a>

### *property* ContactRegion.AutomaticDetectionValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AutomaticDetectionValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.AutomaticElectricCapacitance"></a>

### *property* ContactRegion.AutomaticElectricCapacitance *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticElectricCapacitance.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.AutomaticElectricConductance"></a>

### *property* ContactRegion.AutomaticElectricConductance *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticElectricConductance.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.AutomaticNormalStiffness"></a>

### *property* ContactRegion.AutomaticNormalStiffness *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticNormalStiffness.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.AutomaticThermalConductance"></a>

### *property* ContactRegion.AutomaticThermalConductance *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticThermalConductance.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.BeamBeamDetection"></a>

### *property* ContactRegion.BeamBeamDetection *: [Ansys.Mechanical.DataModel.Enums.BeamBeamContactDetectionType](../../../../Mechanical/DataModel/Enums/BeamBeamContactDetectionType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.BeamBeamContactDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamBeamDetection.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.BeamBeamModel"></a>

### *property* ContactRegion.BeamBeamModel *: [Ansys.Mechanical.DataModel.Enums.BeamBeamModel](../../../../Mechanical/DataModel/Enums/BeamBeamModel.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.BeamBeamModel) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamBeamModel.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.BeamMaterialName"></a>

### *property* ContactRegion.BeamMaterialName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamMaterialName.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.BeamRadius"></a>

### *property* ContactRegion.BeamRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.Behavior"></a>

### *property* ContactRegion.Behavior *: [Ansys.Mechanical.DataModel.Enums.ContactBehavior](../../../../Mechanical/DataModel/Enums/ContactBehavior.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.BondedMaximumOffset"></a>

### *property* ContactRegion.BondedMaximumOffset *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BondedMaximumOffset.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.Breakable"></a>

### *property* ContactRegion.Breakable *: [Ansys.Mechanical.DataModel.Enums.BondedBreakableType](../../../../Mechanical/DataModel/Enums/BondedBreakableType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.BondedBreakableType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Breakable.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.Children"></a>

### *property* ContactRegion.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.Comments"></a>

### *property* ContactRegion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ConstraintType"></a>

### *property* ContactRegion.ConstraintType *: [Ansys.Mechanical.DataModel.Enums.ContactConstraintType](../../../../Mechanical/DataModel/Enums/ContactConstraintType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactConstraintType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintType.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ContactAPDLName"></a>

### *property* ContactRegion.ContactAPDLName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ContactBodies"></a>

### *property* ContactRegion.ContactBodies *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ContactBodies.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ContactCenterPoint"></a>

### *property* ContactRegion.ContactCenterPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactCenterPoint.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ContactEndingPoint"></a>

### *property* ContactRegion.ContactEndingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactEndingPoint.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ContactFormulation"></a>

### *property* ContactRegion.ContactFormulation *: [Ansys.Mechanical.DataModel.Enums.ContactFormulation](../../../../Mechanical/DataModel/Enums/ContactFormulation.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactFormulation.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ContactGeometryCorrection"></a>

### *property* ContactRegion.ContactGeometryCorrection *: [Ansys.Mechanical.DataModel.Enums.ContactCorrection](../../../../Mechanical/DataModel/Enums/ContactCorrection.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactCorrection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactGeometryCorrection.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ContactOrientation"></a>

### *property* ContactRegion.ContactOrientation *: [Ansys.Mechanical.DataModel.Enums.ContactOrientation](../../../../Mechanical/DataModel/Enums/ContactOrientation.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactOrientation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ContactShellFace"></a>

### *property* ContactRegion.ContactShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactShellFace.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ContactStartingPoint"></a>

### *property* ContactRegion.ContactStartingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactStartingPoint.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ContactType"></a>

### *property* ContactRegion.ContactType *: [Ansys.Mechanical.DataModel.Enums.ContactType](../../../../Mechanical/DataModel/Enums/ContactType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

ContactType property.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ContinuousDistanceComputation"></a>

### *property* ContactRegion.ContinuousDistanceComputation *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContinuousDistanceComputation.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.DataModelObjectCategory"></a>

### *property* ContactRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.DecayConstant"></a>

### *property* ContactRegion.DecayConstant *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DecayConstant.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.DetectionMethod"></a>

### *property* ContactRegion.DetectionMethod *: [Ansys.Mechanical.DataModel.Enums.ContactDetectionPoint](../../../../Mechanical/DataModel/Enums/ContactDetectionPoint.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactDetectionPoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DetectionMethod.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.DisplayElementNormal"></a>

### *property* ContactRegion.DisplayElementNormal *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayElementNormal.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.DynamicCoefficient"></a>

### *property* ContactRegion.DynamicCoefficient *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.EdgeContactType"></a>

### *property* ContactRegion.EdgeContactType *: [Ansys.Mechanical.DataModel.Enums.EdgeContactType](../../../../Mechanical/DataModel/Enums/EdgeContactType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.EdgeContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeContactType.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ElasticSlipTolerance"></a>

### *property* ContactRegion.ElasticSlipTolerance *: [Ansys.Mechanical.DataModel.Enums.ContactElasticSlipToleranceType](../../../../Mechanical/DataModel/Enums/ContactElasticSlipToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactElasticSlipToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticSlipTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ElasticSlipToleranceFactor"></a>

### *property* ContactRegion.ElasticSlipToleranceFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticSlipToleranceFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ElasticSlipToleranceValue"></a>

### *property* ContactRegion.ElasticSlipToleranceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticSlipToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ElectricCapacitanceValue"></a>

### *property* ContactRegion.ElectricCapacitanceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricCapacitanceValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ElectricConductanceValue"></a>

### *property* ContactRegion.ElectricConductanceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricConductanceValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.Figures"></a>

### *property* ContactRegion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.FlipContact"></a>

### *property* ContactRegion.FlipContact *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FlipContact.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.FlipTarget"></a>

### *property* ContactRegion.FlipTarget *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FlipTarget.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.FrictionCoefficient"></a>

### *property* ContactRegion.FrictionCoefficient *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrictionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.Handedness"></a>

### *property* ContactRegion.Handedness *: [Ansys.Mechanical.DataModel.Enums.ContactBoltThreadHand](../../../../Mechanical/DataModel/Enums/ContactBoltThreadHand.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactBoltThreadHand) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Handedness.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.Images"></a>

### *property* ContactRegion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.InitialClearance"></a>

### *property* ContactRegion.InitialClearance *: [Ansys.Mechanical.DataModel.Enums.InitialClearanceType](../../../../Mechanical/DataModel/Enums/InitialClearanceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.InitialClearanceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialClearance.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.InitialClearanceFactor"></a>

### *property* ContactRegion.InitialClearanceFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialClearanceFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.InitialClearanceValue"></a>

### *property* ContactRegion.InitialClearanceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialClearanceValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.InterfaceTreatment"></a>

### *property* ContactRegion.InterfaceTreatment *: [Ansys.Mechanical.DataModel.Enums.ContactInitialEffect](../../../../Mechanical/DataModel/Enums/ContactInitialEffect.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactInitialEffect) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InterfaceTreatment.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.InternalObject"></a>

### *property* ContactRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactRegionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.LineLineDetection"></a>

### *property* ContactRegion.LineLineDetection *: [Ansys.Mechanical.DataModel.Enums.LineLineContactDetectionType](../../../../Mechanical/DataModel/Enums/LineLineContactDetectionType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LineLineContactDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LineLineDetection.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.Material"></a>

### *property* ContactRegion.Material *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.MeanPitchDiameter"></a>

### *property* ContactRegion.MeanPitchDiameter *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeanPitchDiameter.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.NormalForceExponent"></a>

### *property* ContactRegion.NormalForceExponent *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalForceExponent.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.NormalForceLimit"></a>

### *property* ContactRegion.NormalForceLimit *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalForceLimit.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.NormalStiffnessFactor"></a>

### *property* ContactRegion.NormalStiffnessFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStiffnessFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.NormalStiffnessValue"></a>

### *property* ContactRegion.NormalStiffnessValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStiffnessValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.NormalStiffnessValueType"></a>

### *property* ContactRegion.NormalStiffnessValueType *: [Ansys.Mechanical.DataModel.Enums.ElementControlsNormalStiffnessType](../../../../Mechanical/DataModel/Enums/ElementControlsNormalStiffnessType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ElementControlsNormalStiffnessType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStiffnessValueType.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.NormalStressExponent"></a>

### *property* ContactRegion.NormalStressExponent *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStressExponent.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.NormalStressLimit"></a>

### *property* ContactRegion.NormalStressLimit *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStressLimit.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.PenetrationTolerance"></a>

### *property* ContactRegion.PenetrationTolerance *: [Ansys.Mechanical.DataModel.Enums.ContactPenetrationToleranceType](../../../../Mechanical/DataModel/Enums/ContactPenetrationToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactPenetrationToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.PenetrationToleranceFactor"></a>

### *property* ContactRegion.PenetrationToleranceFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationToleranceFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.PenetrationToleranceValue"></a>

### *property* ContactRegion.PenetrationToleranceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.PinballFactor"></a>

### *property* ContactRegion.PinballFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.PinballRadius"></a>

### *property* ContactRegion.PinballRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRadius.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.PinballRegion"></a>

### *property* ContactRegion.PinballRegion *: [Ansys.Mechanical.DataModel.Enums.ContactPinballType](../../../../Mechanical/DataModel/Enums/ContactPinballType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactPinballType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.PitchDistance"></a>

### *property* ContactRegion.PitchDistance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PitchDistance.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.PressureAtZeroPenetration"></a>

### *property* ContactRegion.PressureAtZeroPenetration *: [Ansys.Mechanical.DataModel.Enums.PressureAtZeroPenetrationType](../../../../Mechanical/DataModel/Enums/PressureAtZeroPenetrationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.PressureAtZeroPenetrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PressureAtZeroPenetration.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.PressureAtZeroPenetrationFactor"></a>

### *property* ContactRegion.PressureAtZeroPenetrationFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PressureAtZeroPenetrationFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.PressureAtZeroPenetrationValue"></a>

### *property* ContactRegion.PressureAtZeroPenetrationValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PressureAtZeroPenetrationValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.Properties"></a>

### *property* ContactRegion.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.Protected"></a>

### *property* ContactRegion.Protected *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Protected.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.RBDContactDetection"></a>

### *property* ContactRegion.RBDContactDetection *: [Ansys.Mechanical.DataModel.Enums.DSRBDContactDetection](../../../../Mechanical/DataModel/Enums/DSRBDContactDetection.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DSRBDContactDetection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RBDContactDetection.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ReadOnly"></a>

### *property* ContactRegion.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.RestitutionFactor"></a>

### *property* ContactRegion.RestitutionFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RestitutionFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ScopeMode"></a>

### *property* ContactRegion.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.SharedSourceBody"></a>

### *property* ContactRegion.SharedSourceBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedSourceBody.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.SharedSourceReverseNormalLocation"></a>

### *property* ContactRegion.SharedSourceReverseNormalLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedSourceReverseNormalLocation.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.SharedTargetBody"></a>

### *property* ContactRegion.SharedTargetBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedTargetBody.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.SharedTargetReverseNormalLocation"></a>

### *property* ContactRegion.SharedTargetReverseNormalLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedTargetReverseNormalLocation.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ShearForceExponent"></a>

### *property* ContactRegion.ShearForceExponent *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearForceExponent.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ShearForceLimit"></a>

### *property* ContactRegion.ShearForceLimit *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearForceLimit.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ShearStressExponent"></a>

### *property* ContactRegion.ShearStressExponent *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearStressExponent.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ShearStressLimit"></a>

### *property* ContactRegion.ShearStressLimit *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearStressLimit.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ShellThicknessEffect"></a>

### *property* ContactRegion.ShellThicknessEffect *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellThicknessEffect.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.SmallSliding"></a>

### *property* ContactRegion.SmallSliding *: [Ansys.Mechanical.DataModel.Enums.ContactSmallSlidingType](../../../../Mechanical/DataModel/Enums/ContactSmallSlidingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactSmallSlidingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SmallSliding.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.SourceLocation"></a>

### *property* ContactRegion.SourceLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceLocation.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.StabilizationDampingFactor"></a>

### *property* ContactRegion.StabilizationDampingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationDampingFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.Suppressed"></a>

### *property* ContactRegion.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.TargetAPDLName"></a>

### *property* ContactRegion.TargetAPDLName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.TargetBodies"></a>

### *property* ContactRegion.TargetBodies *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TargetBodies.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.TargetCenterPoint"></a>

### *property* ContactRegion.TargetCenterPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetCenterPoint.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.TargetEndingPoint"></a>

### *property* ContactRegion.TargetEndingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetEndingPoint.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.TargetGeometryCorrection"></a>

### *property* ContactRegion.TargetGeometryCorrection *: [Ansys.Mechanical.DataModel.Enums.TargetCorrection](../../../../Mechanical/DataModel/Enums/TargetCorrection.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TargetCorrection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetGeometryCorrection.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.TargetLocation"></a>

### *property* ContactRegion.TargetLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetLocation.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.TargetOrientation"></a>

### *property* ContactRegion.TargetOrientation *: [Ansys.Mechanical.DataModel.Enums.TargetOrientation](../../../../Mechanical/DataModel/Enums/TargetOrientation.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TargetOrientation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.TargetShellFace"></a>

### *property* ContactRegion.TargetShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetShellFace.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.TargetStartingPoint"></a>

### *property* ContactRegion.TargetStartingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetStartingPoint.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ThermalConductanceValue"></a>

### *property* ContactRegion.ThermalConductanceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductanceValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ThreadAngle"></a>

### *property* ContactRegion.ThreadAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThreadAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ThreadType"></a>

### *property* ContactRegion.ThreadType *: [Ansys.Mechanical.DataModel.Enums.ContactBoltThreadType](../../../../Mechanical/DataModel/Enums/ContactBoltThreadType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactBoltThreadType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThreadType.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.TimeStepControls"></a>

### *property* ContactRegion.TimeStepControls *: [Ansys.Mechanical.DataModel.Enums.ContactTimeStepControls](../../../../Mechanical/DataModel/Enums/ContactTimeStepControls.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactTimeStepControls) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeStepControls.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.TrimContact"></a>

### *property* ContactRegion.TrimContact *: [Ansys.Mechanical.DataModel.Enums.ContactTrimType](../../../../Mechanical/DataModel/Enums/ContactTrimType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactTrimType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TrimContact.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.TrimTolerance"></a>

### *property* ContactRegion.TrimTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TrimTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.UpdateStiffness"></a>

### *property* ContactRegion.UpdateStiffness *: [Ansys.Mechanical.DataModel.Enums.UpdateContactStiffness](../../../../Mechanical/DataModel/Enums/UpdateContactStiffness.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.UpdateContactStiffness) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpdateStiffness.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.UserOffset"></a>

### *property* ContactRegion.UserOffset *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UserOffset.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.VisibleProperties"></a>

### *property* ContactRegion.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactRegion.Activate"></a>

### ContactRegion.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.AddCommandSnippet"></a>

### ContactRegion.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](../CommandSnippet.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.AddComment"></a>

### ContactRegion.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.AddFigure"></a>

### ContactRegion.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.AddImage"></a>

### ContactRegion.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.AddPythonCodeEventBased"></a>

### ContactRegion.AddPythonCodeEventBased() → [Ansys.ACT.Automation.Mechanical.PythonCodeEventBased](../PythonCodeEventBased.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.PythonCodeEventBased)

Creates a new PythonCodeEventBased

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.CopyTo"></a>

### ContactRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.CreateParameter"></a>

### ContactRegion.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.Delete"></a>

### ContactRegion.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.Duplicate"></a>

### ContactRegion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.FlipContactTarget"></a>

### ContactRegion.FlipContactTarget() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FlipContactTarget action.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.GetChildren"></a>

### ContactRegion.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.GetParameter"></a>

### ContactRegion.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.GroupAllSimilarChildren"></a>

### ContactRegion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.GroupSimilarObjects"></a>

### ContactRegion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.LoadContactRegionSettings"></a>

### ContactRegion.LoadContactRegionSettings(fName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the LoadContactRegionSettings action.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.PromoteToNamedSelection"></a>

### ContactRegion.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.PromoteToRemotePoint"></a>

### ContactRegion.PromoteToRemotePoint() → Iterable[[Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.RemotePoint)]

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.PropertyByAPIName"></a>

### ContactRegion.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.PropertyByName"></a>

### ContactRegion.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.RemoveParameter"></a>

### ContactRegion.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.RenameBasedOnDefinition"></a>

### ContactRegion.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.ResetToDefault"></a>

### ContactRegion.ResetToDefault() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ResetToDefault action.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.SaveContactRegionSettings"></a>

### ContactRegion.SaveContactRegionSettings(fName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the SaveContactRegionSettings action.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.SearchConnectionsForDuplicatePairs"></a>

### ContactRegion.SearchConnectionsForDuplicatePairs() → [None](https://docs.python.org/3/library/constants.html#None)

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

<a id="ContactRegion.SetDefaultAPDLNames"></a>

### ContactRegion.SetDefaultAPDLNames() → [None](https://docs.python.org/3/library/constants.html#None)

Run the SetDefaultAPDLNames action.

<!-- !! processed by numpydoc !! -->

