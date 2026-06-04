# `SolutionInformation`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SolutionInformation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.SolutionInformation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SolutionInformation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#SolutionInformation.Activate)                                                         | Activate the current object.                                                      |
| [`AddAddedMass`](#SolutionInformation.AddAddedMass)                                                 | Creates a new AddedMassTracker                                                    |
| [`AddArtificialEnergy`](#SolutionInformation.AddArtificialEnergy)                                   | Creates a new ArtificialEnergyTracker                                             |
| [`AddChattering`](#SolutionInformation.AddChattering)                                               | Creates a new ContactChatteringTracker                                            |
| [`AddClosedPenetration`](#SolutionInformation.AddClosedPenetration)                                 | Creates a new ContactClosedPenetrationTracker                                     |
| [`AddComment`](#SolutionInformation.AddComment)                                                     | Creates a new child Comment.                                                      |
| [`AddContactDepth`](#SolutionInformation.AddContactDepth)                                           | Creates a new ContactDepthTracker                                                 |
| [`AddContactEnergy`](#SolutionInformation.AddContactEnergy)                                         | Creates a new ContactEnergyTracker                                                |
| [`AddContactForce`](#SolutionInformation.AddContactForce)                                           | Creates a new ContactForceTracker                                                 |
| [`AddContactHeatFlux`](#SolutionInformation.AddContactHeatFlux)                                     | Creates a new ContactHeatFluxTracker                                              |
| [`AddContactMaxTangentialFluidPressure`](#SolutionInformation.AddContactMaxTangentialFluidPressure) | Creates a new ContactMaxTangentialFluidPressureTracker                            |
| [`AddContactMaximumNormalStiffness`](#SolutionInformation.AddContactMaximumNormalStiffness)         | Creates a new ContactMaximumNormalStiffnessTracker                                |
| [`AddContactMinimumNormalStiffness`](#SolutionInformation.AddContactMinimumNormalStiffness)         | Creates a new ContactMinimumNormalStiffnessTracker                                |
| [`AddContactPairForceConvergenceNorm`](#SolutionInformation.AddContactPairForceConvergenceNorm)     | Creates a new ContactPairForceConvergenceNormTracker                              |
| [`AddContactPressure`](#SolutionInformation.AddContactPressure)                                     | Creates a new ContactPressureTracker                                              |
| [`AddContactingArea`](#SolutionInformation.AddContactingArea)                                       | Creates a new ContactingAreaTracker                                               |
| [`AddDampingEnergy`](#SolutionInformation.AddDampingEnergy)                                         | Creates a new DampingEnergyTracker                                                |
| [`AddDeformationPlotTracker`](#SolutionInformation.AddDeformationPlotTracker)                       | Creates a new TotalDeformation Plot Tracker.                                      |
| [`AddDensity`](#SolutionInformation.AddDensity)                                                     | Creates a new DensityTracker                                                      |
| [`AddDirectionalAcceleration`](#SolutionInformation.AddDirectionalAcceleration)                     | Creates a new DirectionalAccelerationTracker                                      |
| [`AddDirectionalDeformation`](#SolutionInformation.AddDirectionalDeformation)                       | Creates a new DirectionalDeformationTracker                                       |
| [`AddDirectionalVelocity`](#SolutionInformation.AddDirectionalVelocity)                             | Creates a new DirectionalVelocityTracker                                          |
| [`AddEffectiveStrain`](#SolutionInformation.AddEffectiveStrain)                                     | Creates a new EffectiveStrainTracker                                              |
| [`AddEffectiveStress`](#SolutionInformation.AddEffectiveStress)                                     | Creates a new EffectiveStressTracker                                              |
| [`AddElasticSlip`](#SolutionInformation.AddElasticSlip)                                             | Creates a new ContactElasticSlipTracker                                           |
| [`AddErodedInternalEnergy`](#SolutionInformation.AddErodedInternalEnergy)                           | Creates a new ErodedInternalEnergyTracker                                         |
| [`AddErodedKineticEnergy`](#SolutionInformation.AddErodedKineticEnergy)                             | Creates a new ErodedKineticEnergyTracker                                          |
| [`AddExternalForce`](#SolutionInformation.AddExternalForce)                                         | Creates a new ExternalForceTracker                                                |
| [`AddFigure`](#SolutionInformation.AddFigure)                                                       | Creates a new child Figure.                                                       |
| [`AddFluidPressure`](#SolutionInformation.AddFluidPressure)                                         | Creates a new ContactFluidPressureTracker                                         |
| [`AddForceReaction`](#SolutionInformation.AddForceReaction)                                         | Creates a new ForceReactionTracker                                                |
| [`AddFrictionalDissipationEnergy`](#SolutionInformation.AddFrictionalDissipationEnergy)             | Creates a new ContactFrictionalDissipationEnergyTracker                           |
| [`AddFrictionalStress`](#SolutionInformation.AddFrictionalStress)                                   | Creates a new ContactFrictionalStressTracker                                      |
| [`AddGap`](#SolutionInformation.AddGap)                                                             | Creates a new ContactGapTracker                                                   |
| [`AddHourglassEnergy`](#SolutionInformation.AddHourglassEnergy)                                     | Creates a new HourglassEnergyTracker                                              |
| [`AddImage`](#SolutionInformation.AddImage)                                                         | Creates a new child Image.                                                        |
| [`AddInternalEnergy`](#SolutionInformation.AddInternalEnergy)                                       | Creates a new InternalEnergyTracker                                               |
| [`AddKineticEnergy`](#SolutionInformation.AddKineticEnergy)                                         | Creates a new KineticEnergyTracker                                                |
| [`AddLSDYNAGeneralTracker`](#SolutionInformation.AddLSDYNAGeneralTracker)                           | Creates a new LSDYNAGeneralTracker                                                |
| [`AddLatticeDensity`](#SolutionInformation.AddLatticeDensity)                                       | Creates a new LatticeDensity                                                      |
| [`AddLatticeElementalDensity`](#SolutionInformation.AddLatticeElementalDensity)                     | Creates a new LatticeElementalDensity                                             |
| [`AddMaximumDampingPressure`](#SolutionInformation.AddMaximumDampingPressure)                       | Creates a new ContactMaximumDampingPressureTracker                                |
| [`AddMaximumGeometricSlidingDistance`](#SolutionInformation.AddMaximumGeometricSlidingDistance)     | Creates a new ContactMaximumGeometricSlidingDistanceTracker                       |
| [`AddMaximumTangentialStiffness`](#SolutionInformation.AddMaximumTangentialStiffness)               | Creates a new ContactMaximumTangentialStiffnessTracker                            |
| [`AddMinimumGeometricSlidingDistance`](#SolutionInformation.AddMinimumGeometricSlidingDistance)     | Creates a new ContactMinimumGeometricSlidingDistanceTracker                       |
| [`AddMinimumTangentialStiffness`](#SolutionInformation.AddMinimumTangentialStiffness)               | Creates a new ContactMinimumTangentialStiffnessTracker                            |
| [`AddMomentReaction`](#SolutionInformation.AddMomentReaction)                                       | Creates a new MomentReactionTracker                                               |
| [`AddMomentum`](#SolutionInformation.AddMomentum)                                                   | Creates a new MomentumTracker                                                     |
| [`AddNonLinearStabilizationEnergy`](#SolutionInformation.AddNonLinearStabilizationEnergy)           | Creates a new NonLinearStabilizationEnergyTracker                                 |
| [`AddNumberContacting`](#SolutionInformation.AddNumberContacting)                                   | Creates a new NumberContactingTracker                                             |
| [`AddNumberSticking`](#SolutionInformation.AddNumberSticking)                                       | Creates a new ContactNumberStickingTracker                                        |
| [`AddNumberWithLargePenetration`](#SolutionInformation.AddNumberWithLargePenetration)               | Creates a new ContactNumberWithLargePenetrationTracker                            |
| [`AddNumberWithTooMuchSliding`](#SolutionInformation.AddNumberWithTooMuchSliding)                   | Creates a new ContactNumberWithTooMuchSlidingTracker                              |
| [`AddPenetration`](#SolutionInformation.AddPenetration)                                             | Creates a new ContactPenetrationTracker                                           |
| [`AddPlasticWork`](#SolutionInformation.AddPlasticWork)                                             | Creates a new PlasticWorkTracker                                                  |
| [`AddPosition`](#SolutionInformation.AddPosition)                                                   | Creates a new PositionTracker                                                     |
| [`AddPossibleOverconstraint`](#SolutionInformation.AddPossibleOverconstraint)                       | Creates a new ContactPossibleOverconstraintTracker                                |
| [`AddPressure`](#SolutionInformation.AddPressure)                                                   | Creates a new PressureTracker                                                     |
| [`AddResultingPinball`](#SolutionInformation.AddResultingPinball)                                   | Creates a new ContactResultingPinballTracker                                      |
| [`AddRigidBodyVelocity`](#SolutionInformation.AddRigidBodyVelocity)                                 | Creates a new RigidBodyVelocityTracker                                            |
| [`AddSlidingDistance`](#SolutionInformation.AddSlidingDistance)                                     | Creates a new ContactSlidingDistanceTracker                                       |
| [`AddSlidingIndication`](#SolutionInformation.AddSlidingIndication)                                 | Creates a new ContactSlidingIndicationTracker                                     |
| [`AddSpringTrackerDampingForce`](#SolutionInformation.AddSpringTrackerDampingForce)                 | Creates a new SpringDampingForceTracker                                           |
| [`AddSpringTrackerElasticForce`](#SolutionInformation.AddSpringTrackerElasticForce)                 | Creates a new SpringElasticForceTracker                                           |
| [`AddSpringTrackerElongation`](#SolutionInformation.AddSpringTrackerElongation)                     | Creates a new SpringElongationTracker                                             |
| [`AddSpringTrackerVelocity`](#SolutionInformation.AddSpringTrackerVelocity)                         | Creates a new SpringVelocityTracker                                               |
| [`AddStabilizationEnergy`](#SolutionInformation.AddStabilizationEnergy)                             | Creates a new ContactStabilizationEnergyTracker                                   |
| [`AddStiffnessEnergy`](#SolutionInformation.AddStiffnessEnergy)                                     | Creates a new StiffnessEnergyTracker                                              |
| [`AddStrainEnergy`](#SolutionInformation.AddStrainEnergy)                                           | Creates a new ContactStrainEnergyTracker                                          |
| [`AddStrainPlotTracker`](#SolutionInformation.AddStrainPlotTracker)                                 | Creates a new EquivalentElasticStrainRST Plot Tracker.                            |
| [`AddStressPlotTracker`](#SolutionInformation.AddStressPlotTracker)                                 | Creates a new EquivalentStress Plot Tracker.                                      |
| [`AddTangentialDampingStress`](#SolutionInformation.AddTangentialDampingStress)                     | Creates a new ContactTangentialDampingStressTracker                               |
| [`AddTemperature`](#SolutionInformation.AddTemperature)                                             | Creates a new TemperatureTracker                                                  |
| [`AddTemperaturePlotTracker`](#SolutionInformation.AddTemperaturePlotTracker)                       | Creates a new TemperatureResult Plot Tracker.                                     |
| [`AddTopologyDensity`](#SolutionInformation.AddTopologyDensity)                                     | Creates a new TopologyDensity                                                     |
| [`AddTopologyElementalDensity`](#SolutionInformation.AddTopologyElementalDensity)                   | Creates a new TopologyElementalDensity                                            |
| [`AddTopologyMultiDensity`](#SolutionInformation.AddTopologyMultiDensity)                           | Creates a new TopologyMultiDensity                                                |
| [`AddTotalEnergy`](#SolutionInformation.AddTotalEnergy)                                             | Creates a new TotalEnergyTracker                                                  |
| [`AddTotalForceFromContactPressureX`](#SolutionInformation.AddTotalForceFromContactPressureX)       | Creates a new ContactTotalForceFromContactPressureXTracker                        |
| [`AddTotalForceFromContactPressureY`](#SolutionInformation.AddTotalForceFromContactPressureY)       | Creates a new ContactTotalForceFromContactPressureYTracker                        |
| [`AddTotalForceFromContactPressureZ`](#SolutionInformation.AddTotalForceFromContactPressureZ)       | Creates a new ContactTotalForceFromContactPressureZTracker                        |
| [`AddTotalForceFromTangentialStressX`](#SolutionInformation.AddTotalForceFromTangentialStressX)     | Creates a new ContactTotalForceFromTangentialStressXTracker                       |
| [`AddTotalForceFromTangentialStressY`](#SolutionInformation.AddTotalForceFromTangentialStressY)     | Creates a new ContactTotalForceFromTangentialStressYTracker                       |
| [`AddTotalForceFromTangentialStressZ`](#SolutionInformation.AddTotalForceFromTangentialStressZ)     | Creates a new ContactTotalForceFromTangentialStressZTracker                       |
| [`AddTotalMassAverageVelocity`](#SolutionInformation.AddTotalMassAverageVelocity)                   | Creates a new TotalMassAverageVelocityTracker                                     |
| [`AddVolumeLossDueToWear`](#SolutionInformation.AddVolumeLossDueToWear)                             | Creates a new ContactVolumeLossDueToWearTracker                                   |
| [`CopyTo`](#SolutionInformation.CopyTo)                                                             | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#SolutionInformation.CreateParameter)                                           | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#SolutionInformation.Duplicate)                                                       | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllContactTrackers`](#SolutionInformation.EvaluateAllContactTrackers)                     | Run the EvaluateAllContactTrackers action.                                        |
| [`GetChildren`](#SolutionInformation.GetChildren)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#SolutionInformation.GetParameter)                                                 | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#SolutionInformation.GroupAllSimilarChildren)                           | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SolutionInformation.GroupSimilarObjects)                                   | Run the GroupSimilarObjects action.                                               |
| [`ImportResultTrackersFromFile`](#SolutionInformation.ImportResultTrackersFromFile)                 | Import Result Trackers from File.                                                 |
| [`PropertyByAPIName`](#SolutionInformation.PropertyByAPIName)                                       | Get a property by its API name.                                                   |
| [`PropertyByName`](#SolutionInformation.PropertyByName)                                             | Get a property by its unique name.                                                |
| [`RemoveParameter`](#SolutionInformation.RemoveParameter)                                           | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#SolutionInformation.RenameBasedOnDefinition)                           | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ActivateVisibility`](#SolutionInformation.ActivateVisibility)               | Gets or sets the ActivateVisibility.                          |
| [`Children`](#SolutionInformation.Children)                                   | Gets the list of children.                                    |
| [`Comments`](#SolutionInformation.Comments)                                   | Gets the list of associated comments.                         |
| [`Component`](#SolutionInformation.Component)                                 | Gets or sets the Component.                                   |
| [`DataModelObjectCategory`](#SolutionInformation.DataModelObjectCategory)     | Gets the current DataModelObject’s category.                  |
| [`Display`](#SolutionInformation.Display)                                     | Gets or sets the Display.                                     |
| [`DisplayFilterDuringSolve`](#SolutionInformation.DisplayFilterDuringSolve)   | Gets or sets the DisplayFilterDuringSolve.                    |
| [`DisplayPoints`](#SolutionInformation.DisplayPoints)                         | Gets or sets the DisplayPoints.                               |
| [`DisplayType`](#SolutionInformation.DisplayType)                             | Gets or sets the DisplayType.                                 |
| [`DrawConnectionsAttachedTo`](#SolutionInformation.DrawConnectionsAttachedTo) | Gets or sets the DrawConnectionsAttachedTo.                   |
| [`EnvironmentSelection`](#SolutionInformation.EnvironmentSelection)           | Gets or Sets the EnvironmentSelection to an Analysis object.  |
| [`Figures`](#SolutionInformation.Figures)                                     | Gets the list of associated figures.                          |
| [`IdentifyElementViolations`](#SolutionInformation.IdentifyElementViolations) | Gets or sets the IdentifyElementViolations.                   |
| [`Images`](#SolutionInformation.Images)                                       | Gets the list of associated images.                           |
| [`InternalObject`](#SolutionInformation.InternalObject)                       | Gets the internal object. For advanced usage only.            |
| [`LineColor`](#SolutionInformation.LineColor)                                 | Gets or sets the LineColor.                                   |
| [`LineThickness`](#SolutionInformation.LineThickness)                         | Gets or sets the LineThickness.                               |
| [`ModeNumber`](#SolutionInformation.ModeNumber)                               | Gets or sets the ModeNumber.                                  |
| [`NewtonRaphsonResiduals`](#SolutionInformation.NewtonRaphsonResiduals)       | Gets or sets the NewtonRaphsonResiduals.                      |
| [`Properties`](#SolutionInformation.Properties)                               | Gets the list of properties for this object.                  |
| [`ResponseConstraint`](#SolutionInformation.ResponseConstraint)               | Gets or sets the ResponseConstraint.                          |
| [`ShowChargeResiduals`](#SolutionInformation.ShowChargeResiduals)             | Gets or sets the ShowChargeResiduals.                         |
| [`ShowHeatResiduals`](#SolutionInformation.ShowHeatResiduals)                 | Gets or sets the ShowHeatResiduals.                           |
| [`ShowMomentResiduals`](#SolutionInformation.ShowMomentResiduals)             | Gets or sets the ShowMomentResiduals.                         |
| [`SolutionOutput`](#SolutionInformation.SolutionOutput)                       | Gets or sets the SolutionOutput.                              |
| [`StepNumber`](#SolutionInformation.StepNumber)                               | Gets or sets the StepNumber.                                  |
| [`StepSelectionMode`](#SolutionInformation.StepSelectionMode)                 | Gets or sets the StepSelectionMode.                           |
| [`SummaryType`](#SolutionInformation.SummaryType)                             | Gets or sets the SummaryType.                                 |
| [`UpdateInterval`](#SolutionInformation.UpdateInterval)                       | Gets or sets the UpdateInterval.                              |
| [`VisibleOnResults`](#SolutionInformation.VisibleOnResults)                   | Gets or sets the VisibleOnResults.                            |
| [`VisibleProperties`](#SolutionInformation.VisibleProperties)                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SolutionInformation.ActivateVisibility"></a>

### *property* SolutionInformation.ActivateVisibility *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActivateVisibility.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Children"></a>

### *property* SolutionInformation.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Comments"></a>

### *property* SolutionInformation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Component"></a>

### *property* SolutionInformation.Component *: [Ansys.Mechanical.DataModel.Enums.OptimizationResponseConstraintComponentType](../../../Mechanical/DataModel/Enums/OptimizationResponseConstraintComponentType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.OptimizationResponseConstraintComponentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Component.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.DataModelObjectCategory"></a>

### *property* SolutionInformation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Display"></a>

### *property* SolutionInformation.Display *: [Ansys.Mechanical.DataModel.Enums.FEConnectionDisplay](../../../Mechanical/DataModel/Enums/FEConnectionDisplay.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FEConnectionDisplay) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Display.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.DisplayFilterDuringSolve"></a>

### *property* SolutionInformation.DisplayFilterDuringSolve *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayFilterDuringSolve.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.DisplayPoints"></a>

### *property* SolutionInformation.DisplayPoints *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayPoints.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.DisplayType"></a>

### *property* SolutionInformation.DisplayType *: [Ansys.Mechanical.DataModel.Enums.FEConnectionDisplayType](../../../Mechanical/DataModel/Enums/FEConnectionDisplayType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FEConnectionDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayType.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.DrawConnectionsAttachedTo"></a>

### *property* SolutionInformation.DrawConnectionsAttachedTo *: [Ansys.Mechanical.DataModel.Enums.NodeSelection](../../../Mechanical/DataModel/Enums/NodeSelection.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NodeSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DrawConnectionsAttachedTo.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.EnvironmentSelection"></a>

### *property* SolutionInformation.EnvironmentSelection *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Figures"></a>

### *property* SolutionInformation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.IdentifyElementViolations"></a>

### *property* SolutionInformation.IdentifyElementViolations *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IdentifyElementViolations.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Images"></a>

### *property* SolutionInformation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.InternalObject"></a>

### *property* SolutionInformation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSolutionInfoToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.LineColor"></a>

### *property* SolutionInformation.LineColor *: [Ansys.Mechanical.DataModel.Enums.FEConnectionLineColor](../../../Mechanical/DataModel/Enums/FEConnectionLineColor.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FEConnectionLineColor) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LineColor.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.LineThickness"></a>

### *property* SolutionInformation.LineThickness *: [Ansys.Mechanical.DataModel.Enums.FEConnectionLineThicknessType](../../../Mechanical/DataModel/Enums/FEConnectionLineThicknessType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FEConnectionLineThicknessType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LineThickness.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.ModeNumber"></a>

### *property* SolutionInformation.ModeNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeNumber.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.NewtonRaphsonResiduals"></a>

### *property* SolutionInformation.NewtonRaphsonResiduals *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NewtonRaphsonResiduals.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Properties"></a>

### *property* SolutionInformation.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.ResponseConstraint"></a>

### *property* SolutionInformation.ResponseConstraint *: [Ansys.ACT.Automation.Mechanical.ResponseConstraint](ResponseConstraint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ResponseConstraint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResponseConstraint.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.ShowChargeResiduals"></a>

### *property* SolutionInformation.ShowChargeResiduals *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowChargeResiduals.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.ShowHeatResiduals"></a>

### *property* SolutionInformation.ShowHeatResiduals *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowHeatResiduals.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.ShowMomentResiduals"></a>

### *property* SolutionInformation.ShowMomentResiduals *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowMomentResiduals.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.SolutionOutput"></a>

### *property* SolutionInformation.SolutionOutput *: [Ansys.Mechanical.DataModel.Enums.SolutionOutputType](../../../Mechanical/DataModel/Enums/SolutionOutputType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionOutputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionOutput.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.StepNumber"></a>

### *property* SolutionInformation.StepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepNumber.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.StepSelectionMode"></a>

### *property* SolutionInformation.StepSelectionMode *: [Ansys.Mechanical.DataModel.Enums.SeqSelectionMode](../../../Mechanical/DataModel/Enums/SeqSelectionMode.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SeqSelectionMode) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelectionMode.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.SummaryType"></a>

### *property* SolutionInformation.SummaryType *: [Ansys.Mechanical.DataModel.Enums.PFactorResultType](../../../Mechanical/DataModel/Enums/PFactorResultType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.PFactorResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SummaryType.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.UpdateInterval"></a>

### *property* SolutionInformation.UpdateInterval *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpdateInterval.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.VisibleOnResults"></a>

### *property* SolutionInformation.VisibleOnResults *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VisibleOnResults.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.VisibleProperties"></a>

### *property* SolutionInformation.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SolutionInformation.Activate"></a>

### SolutionInformation.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddAddedMass"></a>

### SolutionInformation.AddAddedMass() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.AddedMassTracker](Results/ResultTrackers/AddedMassTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.AddedMassTracker)

Creates a new AddedMassTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddArtificialEnergy"></a>

### SolutionInformation.AddArtificialEnergy() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ArtificialEnergyTracker](Results/ResultTrackers/ArtificialEnergyTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ArtificialEnergyTracker)

Creates a new ArtificialEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddChattering"></a>

### SolutionInformation.AddChattering() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactChatteringTracker](Results/ResultTrackers/ContactChatteringTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactChatteringTracker)

Creates a new ContactChatteringTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddClosedPenetration"></a>

### SolutionInformation.AddClosedPenetration() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactClosedPenetrationTracker](Results/ResultTrackers/ContactClosedPenetrationTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactClosedPenetrationTracker)

Creates a new ContactClosedPenetrationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddComment"></a>

### SolutionInformation.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactDepth"></a>

### SolutionInformation.AddContactDepth() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactDepthTracker](Results/ResultTrackers/ContactDepthTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactDepthTracker)

Creates a new ContactDepthTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactEnergy"></a>

### SolutionInformation.AddContactEnergy() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactEnergyTracker](Results/ResultTrackers/ContactEnergyTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactEnergyTracker)

Creates a new ContactEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactForce"></a>

### SolutionInformation.AddContactForce() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactForceTracker](Results/ResultTrackers/ContactForceTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactForceTracker)

Creates a new ContactForceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactHeatFlux"></a>

### SolutionInformation.AddContactHeatFlux() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactHeatFluxTracker](Results/ResultTrackers/ContactHeatFluxTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactHeatFluxTracker)

Creates a new ContactHeatFluxTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactMaxTangentialFluidPressure"></a>

### SolutionInformation.AddContactMaxTangentialFluidPressure() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMaxTangentialFluidPressureTracker](Results/ResultTrackers/ContactMaxTangentialFluidPressureTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMaxTangentialFluidPressureTracker)

Creates a new ContactMaxTangentialFluidPressureTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactMaximumNormalStiffness"></a>

### SolutionInformation.AddContactMaximumNormalStiffness() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMaximumNormalStiffnessTracker](Results/ResultTrackers/ContactMaximumNormalStiffnessTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMaximumNormalStiffnessTracker)

Creates a new ContactMaximumNormalStiffnessTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactMinimumNormalStiffness"></a>

### SolutionInformation.AddContactMinimumNormalStiffness() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMinimumNormalStiffnessTracker](Results/ResultTrackers/ContactMinimumNormalStiffnessTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMinimumNormalStiffnessTracker)

Creates a new ContactMinimumNormalStiffnessTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactPairForceConvergenceNorm"></a>

### SolutionInformation.AddContactPairForceConvergenceNorm() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactPairForceConvergenceNormTracker](Results/ResultTrackers/ContactPairForceConvergenceNormTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactPairForceConvergenceNormTracker)

Creates a new ContactPairForceConvergenceNormTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactPressure"></a>

### SolutionInformation.AddContactPressure() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactPressureTracker](Results/ResultTrackers/ContactPressureTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactPressureTracker)

Creates a new ContactPressureTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactingArea"></a>

### SolutionInformation.AddContactingArea() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactingAreaTracker](Results/ResultTrackers/ContactingAreaTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactingAreaTracker)

Creates a new ContactingAreaTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddDampingEnergy"></a>

### SolutionInformation.AddDampingEnergy() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.DampingEnergyTracker](Results/ResultTrackers/DampingEnergyTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.DampingEnergyTracker)

Creates a new DampingEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddDeformationPlotTracker"></a>

### SolutionInformation.AddDeformationPlotTracker() → [Ansys.ACT.Automation.Mechanical.Results.DeformationResults.TotalDeformation](Results/DeformationResults/TotalDeformation.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.TotalDeformation)

Creates a new TotalDeformation Plot Tracker.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddDensity"></a>

### SolutionInformation.AddDensity() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.DensityTracker](Results/ResultTrackers/DensityTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.DensityTracker)

Creates a new DensityTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddDirectionalAcceleration"></a>

### SolutionInformation.AddDirectionalAcceleration() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.DirectionalAccelerationTracker](Results/ResultTrackers/DirectionalAccelerationTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.DirectionalAccelerationTracker)

Creates a new DirectionalAccelerationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddDirectionalDeformation"></a>

### SolutionInformation.AddDirectionalDeformation() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.DirectionalDeformationTracker](Results/ResultTrackers/DirectionalDeformationTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.DirectionalDeformationTracker)

Creates a new DirectionalDeformationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddDirectionalVelocity"></a>

### SolutionInformation.AddDirectionalVelocity() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.DirectionalVelocityTracker](Results/ResultTrackers/DirectionalVelocityTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.DirectionalVelocityTracker)

Creates a new DirectionalVelocityTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddEffectiveStrain"></a>

### SolutionInformation.AddEffectiveStrain() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.EffectiveStrainTracker](Results/ResultTrackers/EffectiveStrainTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.EffectiveStrainTracker)

Creates a new EffectiveStrainTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddEffectiveStress"></a>

### SolutionInformation.AddEffectiveStress() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.EffectiveStressTracker](Results/ResultTrackers/EffectiveStressTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.EffectiveStressTracker)

Creates a new EffectiveStressTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddElasticSlip"></a>

### SolutionInformation.AddElasticSlip() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactElasticSlipTracker](Results/ResultTrackers/ContactElasticSlipTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactElasticSlipTracker)

Creates a new ContactElasticSlipTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddErodedInternalEnergy"></a>

### SolutionInformation.AddErodedInternalEnergy() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ErodedInternalEnergyTracker](Results/ResultTrackers/ErodedInternalEnergyTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ErodedInternalEnergyTracker)

Creates a new ErodedInternalEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddErodedKineticEnergy"></a>

### SolutionInformation.AddErodedKineticEnergy() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ErodedKineticEnergyTracker](Results/ResultTrackers/ErodedKineticEnergyTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ErodedKineticEnergyTracker)

Creates a new ErodedKineticEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddExternalForce"></a>

### SolutionInformation.AddExternalForce() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ExternalForceTracker](Results/ResultTrackers/ExternalForceTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ExternalForceTracker)

Creates a new ExternalForceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddFigure"></a>

### SolutionInformation.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddFluidPressure"></a>

### SolutionInformation.AddFluidPressure() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactFluidPressureTracker](Results/ResultTrackers/ContactFluidPressureTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactFluidPressureTracker)

Creates a new ContactFluidPressureTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddForceReaction"></a>

### SolutionInformation.AddForceReaction() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ForceReactionTracker](Results/ResultTrackers/ForceReactionTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ForceReactionTracker)

Creates a new ForceReactionTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddFrictionalDissipationEnergy"></a>

### SolutionInformation.AddFrictionalDissipationEnergy() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactFrictionalDissipationEnergyTracker](Results/ResultTrackers/ContactFrictionalDissipationEnergyTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactFrictionalDissipationEnergyTracker)

Creates a new ContactFrictionalDissipationEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddFrictionalStress"></a>

### SolutionInformation.AddFrictionalStress() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactFrictionalStressTracker](Results/ResultTrackers/ContactFrictionalStressTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactFrictionalStressTracker)

Creates a new ContactFrictionalStressTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddGap"></a>

### SolutionInformation.AddGap() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactGapTracker](Results/ResultTrackers/ContactGapTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactGapTracker)

Creates a new ContactGapTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddHourglassEnergy"></a>

### SolutionInformation.AddHourglassEnergy() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.HourglassEnergyTracker](Results/ResultTrackers/HourglassEnergyTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.HourglassEnergyTracker)

Creates a new HourglassEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddImage"></a>

### SolutionInformation.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddInternalEnergy"></a>

### SolutionInformation.AddInternalEnergy() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.InternalEnergyTracker](Results/ResultTrackers/InternalEnergyTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.InternalEnergyTracker)

Creates a new InternalEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddKineticEnergy"></a>

### SolutionInformation.AddKineticEnergy() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.KineticEnergyTracker](Results/ResultTrackers/KineticEnergyTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.KineticEnergyTracker)

Creates a new KineticEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddLSDYNAGeneralTracker"></a>

### SolutionInformation.AddLSDYNAGeneralTracker() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.LSDYNAGeneralTracker](Results/ResultTrackers/LSDYNAGeneralTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.LSDYNAGeneralTracker)

Creates a new LSDYNAGeneralTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddLatticeDensity"></a>

### SolutionInformation.AddLatticeDensity() → [Ansys.ACT.Automation.Mechanical.Results.LatticeDensity](Results/LatticeDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.LatticeDensity)

Creates a new LatticeDensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddLatticeElementalDensity"></a>

### SolutionInformation.AddLatticeElementalDensity() → [Ansys.ACT.Automation.Mechanical.Results.LatticeElementalDensity](Results/LatticeElementalDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.LatticeElementalDensity)

Creates a new LatticeElementalDensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMaximumDampingPressure"></a>

### SolutionInformation.AddMaximumDampingPressure() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMaximumDampingPressureTracker](Results/ResultTrackers/ContactMaximumDampingPressureTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMaximumDampingPressureTracker)

Creates a new ContactMaximumDampingPressureTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMaximumGeometricSlidingDistance"></a>

### SolutionInformation.AddMaximumGeometricSlidingDistance() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMaximumGeometricSlidingDistanceTracker](Results/ResultTrackers/ContactMaximumGeometricSlidingDistanceTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMaximumGeometricSlidingDistanceTracker)

Creates a new ContactMaximumGeometricSlidingDistanceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMaximumTangentialStiffness"></a>

### SolutionInformation.AddMaximumTangentialStiffness() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMaximumTangentialStiffnessTracker](Results/ResultTrackers/ContactMaximumTangentialStiffnessTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMaximumTangentialStiffnessTracker)

Creates a new ContactMaximumTangentialStiffnessTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMinimumGeometricSlidingDistance"></a>

### SolutionInformation.AddMinimumGeometricSlidingDistance() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMinimumGeometricSlidingDistanceTracker](Results/ResultTrackers/ContactMinimumGeometricSlidingDistanceTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMinimumGeometricSlidingDistanceTracker)

Creates a new ContactMinimumGeometricSlidingDistanceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMinimumTangentialStiffness"></a>

### SolutionInformation.AddMinimumTangentialStiffness() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMinimumTangentialStiffnessTracker](Results/ResultTrackers/ContactMinimumTangentialStiffnessTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMinimumTangentialStiffnessTracker)

Creates a new ContactMinimumTangentialStiffnessTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMomentReaction"></a>

### SolutionInformation.AddMomentReaction() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.MomentReactionTracker](Results/ResultTrackers/MomentReactionTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.MomentReactionTracker)

Creates a new MomentReactionTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMomentum"></a>

### SolutionInformation.AddMomentum() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.MomentumTracker](Results/ResultTrackers/MomentumTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.MomentumTracker)

Creates a new MomentumTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddNonLinearStabilizationEnergy"></a>

### SolutionInformation.AddNonLinearStabilizationEnergy() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.NonLinearStabilizationEnergyTracker](Results/ResultTrackers/NonLinearStabilizationEnergyTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.NonLinearStabilizationEnergyTracker)

Creates a new NonLinearStabilizationEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddNumberContacting"></a>

### SolutionInformation.AddNumberContacting() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.NumberContactingTracker](Results/ResultTrackers/NumberContactingTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.NumberContactingTracker)

Creates a new NumberContactingTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddNumberSticking"></a>

### SolutionInformation.AddNumberSticking() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactNumberStickingTracker](Results/ResultTrackers/ContactNumberStickingTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactNumberStickingTracker)

Creates a new ContactNumberStickingTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddNumberWithLargePenetration"></a>

### SolutionInformation.AddNumberWithLargePenetration() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactNumberWithLargePenetrationTracker](Results/ResultTrackers/ContactNumberWithLargePenetrationTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactNumberWithLargePenetrationTracker)

Creates a new ContactNumberWithLargePenetrationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddNumberWithTooMuchSliding"></a>

### SolutionInformation.AddNumberWithTooMuchSliding() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactNumberWithTooMuchSlidingTracker](Results/ResultTrackers/ContactNumberWithTooMuchSlidingTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactNumberWithTooMuchSlidingTracker)

Creates a new ContactNumberWithTooMuchSlidingTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddPenetration"></a>

### SolutionInformation.AddPenetration() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactPenetrationTracker](Results/ResultTrackers/ContactPenetrationTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactPenetrationTracker)

Creates a new ContactPenetrationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddPlasticWork"></a>

### SolutionInformation.AddPlasticWork() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.PlasticWorkTracker](Results/ResultTrackers/PlasticWorkTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.PlasticWorkTracker)

Creates a new PlasticWorkTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddPosition"></a>

### SolutionInformation.AddPosition() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.PositionTracker](Results/ResultTrackers/PositionTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.PositionTracker)

Creates a new PositionTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddPossibleOverconstraint"></a>

### SolutionInformation.AddPossibleOverconstraint() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactPossibleOverconstraintTracker](Results/ResultTrackers/ContactPossibleOverconstraintTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactPossibleOverconstraintTracker)

Creates a new ContactPossibleOverconstraintTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddPressure"></a>

### SolutionInformation.AddPressure() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.PressureTracker](Results/ResultTrackers/PressureTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.PressureTracker)

Creates a new PressureTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddResultingPinball"></a>

### SolutionInformation.AddResultingPinball() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactResultingPinballTracker](Results/ResultTrackers/ContactResultingPinballTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactResultingPinballTracker)

Creates a new ContactResultingPinballTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddRigidBodyVelocity"></a>

### SolutionInformation.AddRigidBodyVelocity() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.RigidBodyVelocityTracker](Results/ResultTrackers/RigidBodyVelocityTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.RigidBodyVelocityTracker)

Creates a new RigidBodyVelocityTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddSlidingDistance"></a>

### SolutionInformation.AddSlidingDistance() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactSlidingDistanceTracker](Results/ResultTrackers/ContactSlidingDistanceTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactSlidingDistanceTracker)

Creates a new ContactSlidingDistanceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddSlidingIndication"></a>

### SolutionInformation.AddSlidingIndication() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactSlidingIndicationTracker](Results/ResultTrackers/ContactSlidingIndicationTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactSlidingIndicationTracker)

Creates a new ContactSlidingIndicationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddSpringTrackerDampingForce"></a>

### SolutionInformation.AddSpringTrackerDampingForce() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.SpringDampingForceTracker](Results/ResultTrackers/SpringDampingForceTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.SpringDampingForceTracker)

Creates a new SpringDampingForceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddSpringTrackerElasticForce"></a>

### SolutionInformation.AddSpringTrackerElasticForce() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.SpringElasticForceTracker](Results/ResultTrackers/SpringElasticForceTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.SpringElasticForceTracker)

Creates a new SpringElasticForceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddSpringTrackerElongation"></a>

### SolutionInformation.AddSpringTrackerElongation() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.SpringElongationTracker](Results/ResultTrackers/SpringElongationTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.SpringElongationTracker)

Creates a new SpringElongationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddSpringTrackerVelocity"></a>

### SolutionInformation.AddSpringTrackerVelocity() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.SpringVelocityTracker](Results/ResultTrackers/SpringVelocityTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.SpringVelocityTracker)

Creates a new SpringVelocityTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddStabilizationEnergy"></a>

### SolutionInformation.AddStabilizationEnergy() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactStabilizationEnergyTracker](Results/ResultTrackers/ContactStabilizationEnergyTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactStabilizationEnergyTracker)

Creates a new ContactStabilizationEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddStiffnessEnergy"></a>

### SolutionInformation.AddStiffnessEnergy() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.StiffnessEnergyTracker](Results/ResultTrackers/StiffnessEnergyTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.StiffnessEnergyTracker)

Creates a new StiffnessEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddStrainEnergy"></a>

### SolutionInformation.AddStrainEnergy() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactStrainEnergyTracker](Results/ResultTrackers/ContactStrainEnergyTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactStrainEnergyTracker)

Creates a new ContactStrainEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddStrainPlotTracker"></a>

### SolutionInformation.AddStrainPlotTracker() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentElasticStrainRST](Results/StrainResults/EquivalentElasticStrainRST.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentElasticStrainRST)

Creates a new EquivalentElasticStrainRST Plot Tracker.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddStressPlotTracker"></a>

### SolutionInformation.AddStressPlotTracker() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.EquivalentStress](Results/StressResults/EquivalentStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.EquivalentStress)

Creates a new EquivalentStress Plot Tracker.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTangentialDampingStress"></a>

### SolutionInformation.AddTangentialDampingStress() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTangentialDampingStressTracker](Results/ResultTrackers/ContactTangentialDampingStressTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTangentialDampingStressTracker)

Creates a new ContactTangentialDampingStressTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTemperature"></a>

### SolutionInformation.AddTemperature() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.TemperatureTracker](Results/ResultTrackers/TemperatureTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.TemperatureTracker)

Creates a new TemperatureTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTemperaturePlotTracker"></a>

### SolutionInformation.AddTemperaturePlotTracker() → [Ansys.ACT.Automation.Mechanical.Results.ThermalResults.TemperatureResult](Results/ThermalResults/TemperatureResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ThermalResults.TemperatureResult)

Creates a new TemperatureResult Plot Tracker.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTopologyDensity"></a>

### SolutionInformation.AddTopologyDensity() → [Ansys.ACT.Automation.Mechanical.Results.TopologyDensity](Results/TopologyDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.TopologyDensity)

Creates a new TopologyDensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTopologyElementalDensity"></a>

### SolutionInformation.AddTopologyElementalDensity() → [Ansys.ACT.Automation.Mechanical.Results.TopologyElementalDensity](Results/TopologyElementalDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.TopologyElementalDensity)

Creates a new TopologyElementalDensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTopologyMultiDensity"></a>

### SolutionInformation.AddTopologyMultiDensity() → [Ansys.ACT.Automation.Mechanical.Results.TopologyMultiDensity](Results/TopologyMultiDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.TopologyMultiDensity)

Creates a new TopologyMultiDensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalEnergy"></a>

### SolutionInformation.AddTotalEnergy() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.TotalEnergyTracker](Results/ResultTrackers/TotalEnergyTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.TotalEnergyTracker)

Creates a new TotalEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalForceFromContactPressureX"></a>

### SolutionInformation.AddTotalForceFromContactPressureX() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTotalForceFromContactPressureXTracker](Results/ResultTrackers/ContactTotalForceFromContactPressureXTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTotalForceFromContactPressureXTracker)

Creates a new ContactTotalForceFromContactPressureXTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalForceFromContactPressureY"></a>

### SolutionInformation.AddTotalForceFromContactPressureY() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTotalForceFromContactPressureYTracker](Results/ResultTrackers/ContactTotalForceFromContactPressureYTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTotalForceFromContactPressureYTracker)

Creates a new ContactTotalForceFromContactPressureYTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalForceFromContactPressureZ"></a>

### SolutionInformation.AddTotalForceFromContactPressureZ() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTotalForceFromContactPressureZTracker](Results/ResultTrackers/ContactTotalForceFromContactPressureZTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTotalForceFromContactPressureZTracker)

Creates a new ContactTotalForceFromContactPressureZTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalForceFromTangentialStressX"></a>

### SolutionInformation.AddTotalForceFromTangentialStressX() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTotalForceFromTangentialStressXTracker](Results/ResultTrackers/ContactTotalForceFromTangentialStressXTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTotalForceFromTangentialStressXTracker)

Creates a new ContactTotalForceFromTangentialStressXTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalForceFromTangentialStressY"></a>

### SolutionInformation.AddTotalForceFromTangentialStressY() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTotalForceFromTangentialStressYTracker](Results/ResultTrackers/ContactTotalForceFromTangentialStressYTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTotalForceFromTangentialStressYTracker)

Creates a new ContactTotalForceFromTangentialStressYTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalForceFromTangentialStressZ"></a>

### SolutionInformation.AddTotalForceFromTangentialStressZ() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTotalForceFromTangentialStressZTracker](Results/ResultTrackers/ContactTotalForceFromTangentialStressZTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTotalForceFromTangentialStressZTracker)

Creates a new ContactTotalForceFromTangentialStressZTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalMassAverageVelocity"></a>

### SolutionInformation.AddTotalMassAverageVelocity() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.TotalMassAverageVelocityTracker](Results/ResultTrackers/TotalMassAverageVelocityTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.TotalMassAverageVelocityTracker)

Creates a new TotalMassAverageVelocityTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddVolumeLossDueToWear"></a>

### SolutionInformation.AddVolumeLossDueToWear() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactVolumeLossDueToWearTracker](Results/ResultTrackers/ContactVolumeLossDueToWearTracker.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactVolumeLossDueToWearTracker)

Creates a new ContactVolumeLossDueToWearTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.CopyTo"></a>

### SolutionInformation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.CreateParameter"></a>

### SolutionInformation.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Duplicate"></a>

### SolutionInformation.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.EvaluateAllContactTrackers"></a>

### SolutionInformation.EvaluateAllContactTrackers() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllContactTrackers action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.GetChildren"></a>

### SolutionInformation.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.GetParameter"></a>

### SolutionInformation.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.GroupAllSimilarChildren"></a>

### SolutionInformation.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.GroupSimilarObjects"></a>

### SolutionInformation.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.ImportResultTrackersFromFile"></a>

### SolutionInformation.ImportResultTrackersFromFile(fileName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Import Result Trackers from File.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.PropertyByAPIName"></a>

### SolutionInformation.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.PropertyByName"></a>

### SolutionInformation.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.RemoveParameter"></a>

### SolutionInformation.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.RenameBasedOnDefinition"></a>

### SolutionInformation.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

