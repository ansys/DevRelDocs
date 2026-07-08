# `SolutionInformation`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SolutionInformation"></a>

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

### *property* SolutionInformation.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Comments"></a>

### *property* SolutionInformation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Component"></a>

### *property* SolutionInformation.Component *: [Ansys.Mechanical.DataModel.Enums.OptimizationResponseConstraintComponentType](../../../Mechanical/DataModel/Enums/OptimizationResponseConstraintComponentType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.OptimizationResponseConstraintComponentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Component.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.DataModelObjectCategory"></a>

### *property* SolutionInformation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Display"></a>

### *property* SolutionInformation.Display *: [Ansys.Mechanical.DataModel.Enums.FEConnectionDisplay](../../../Mechanical/DataModel/Enums/FEConnectionDisplay.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FEConnectionDisplay) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* SolutionInformation.DisplayType *: [Ansys.Mechanical.DataModel.Enums.FEConnectionDisplayType](../../../Mechanical/DataModel/Enums/FEConnectionDisplayType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FEConnectionDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayType.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.DrawConnectionsAttachedTo"></a>

### *property* SolutionInformation.DrawConnectionsAttachedTo *: [Ansys.Mechanical.DataModel.Enums.NodeSelection](../../../Mechanical/DataModel/Enums/NodeSelection.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NodeSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DrawConnectionsAttachedTo.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.EnvironmentSelection"></a>

### *property* SolutionInformation.EnvironmentSelection *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Figures"></a>

### *property* SolutionInformation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.IdentifyElementViolations"></a>

### *property* SolutionInformation.IdentifyElementViolations *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IdentifyElementViolations.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Images"></a>

### *property* SolutionInformation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.InternalObject"></a>

### *property* SolutionInformation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSolutionInfoToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.LineColor"></a>

### *property* SolutionInformation.LineColor *: [Ansys.Mechanical.DataModel.Enums.FEConnectionLineColor](../../../Mechanical/DataModel/Enums/FEConnectionLineColor.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FEConnectionLineColor) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LineColor.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.LineThickness"></a>

### *property* SolutionInformation.LineThickness *: [Ansys.Mechanical.DataModel.Enums.FEConnectionLineThicknessType](../../../Mechanical/DataModel/Enums/FEConnectionLineThicknessType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FEConnectionLineThicknessType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* SolutionInformation.ResponseConstraint *: [Ansys.ACT.Automation.Mechanical.ResponseConstraint](ResponseConstraint.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ResponseConstraint) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* SolutionInformation.SolutionOutput *: [Ansys.Mechanical.DataModel.Enums.SolutionOutputType](../../../Mechanical/DataModel/Enums/SolutionOutputType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionOutputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionOutput.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.StepNumber"></a>

### *property* SolutionInformation.StepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepNumber.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.StepSelectionMode"></a>

### *property* SolutionInformation.StepSelectionMode *: [Ansys.Mechanical.DataModel.Enums.SeqSelectionMode](../../../Mechanical/DataModel/Enums/SeqSelectionMode.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SeqSelectionMode) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelectionMode.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.SummaryType"></a>

### *property* SolutionInformation.SummaryType *: [Ansys.Mechanical.DataModel.Enums.PFactorResultType](../../../Mechanical/DataModel/Enums/PFactorResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.PFactorResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### SolutionInformation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddAddedMass"></a>

### SolutionInformation.AddAddedMass()

Creates a new AddedMassTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddArtificialEnergy"></a>

### SolutionInformation.AddArtificialEnergy()

Creates a new ArtificialEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddChattering"></a>

### SolutionInformation.AddChattering()

Creates a new ContactChatteringTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddClosedPenetration"></a>

### SolutionInformation.AddClosedPenetration()

Creates a new ContactClosedPenetrationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddComment"></a>

### SolutionInformation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactDepth"></a>

### SolutionInformation.AddContactDepth()

Creates a new ContactDepthTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactEnergy"></a>

### SolutionInformation.AddContactEnergy()

Creates a new ContactEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactForce"></a>

### SolutionInformation.AddContactForce()

Creates a new ContactForceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactHeatFlux"></a>

### SolutionInformation.AddContactHeatFlux()

Creates a new ContactHeatFluxTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactMaxTangentialFluidPressure"></a>

### SolutionInformation.AddContactMaxTangentialFluidPressure()

Creates a new ContactMaxTangentialFluidPressureTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactMaximumNormalStiffness"></a>

### SolutionInformation.AddContactMaximumNormalStiffness()

Creates a new ContactMaximumNormalStiffnessTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactMinimumNormalStiffness"></a>

### SolutionInformation.AddContactMinimumNormalStiffness()

Creates a new ContactMinimumNormalStiffnessTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactPairForceConvergenceNorm"></a>

### SolutionInformation.AddContactPairForceConvergenceNorm()

Creates a new ContactPairForceConvergenceNormTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactPressure"></a>

### SolutionInformation.AddContactPressure()

Creates a new ContactPressureTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactingArea"></a>

### SolutionInformation.AddContactingArea()

Creates a new ContactingAreaTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddDampingEnergy"></a>

### SolutionInformation.AddDampingEnergy()

Creates a new DampingEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddDeformationPlotTracker"></a>

### SolutionInformation.AddDeformationPlotTracker()

Creates a new TotalDeformation Plot Tracker.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddDensity"></a>

### SolutionInformation.AddDensity()

Creates a new DensityTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddDirectionalAcceleration"></a>

### SolutionInformation.AddDirectionalAcceleration()

Creates a new DirectionalAccelerationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddDirectionalDeformation"></a>

### SolutionInformation.AddDirectionalDeformation()

Creates a new DirectionalDeformationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddDirectionalVelocity"></a>

### SolutionInformation.AddDirectionalVelocity()

Creates a new DirectionalVelocityTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddEffectiveStrain"></a>

### SolutionInformation.AddEffectiveStrain()

Creates a new EffectiveStrainTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddEffectiveStress"></a>

### SolutionInformation.AddEffectiveStress()

Creates a new EffectiveStressTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddElasticSlip"></a>

### SolutionInformation.AddElasticSlip()

Creates a new ContactElasticSlipTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddErodedInternalEnergy"></a>

### SolutionInformation.AddErodedInternalEnergy()

Creates a new ErodedInternalEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddErodedKineticEnergy"></a>

### SolutionInformation.AddErodedKineticEnergy()

Creates a new ErodedKineticEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddExternalForce"></a>

### SolutionInformation.AddExternalForce()

Creates a new ExternalForceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddFigure"></a>

### SolutionInformation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddFluidPressure"></a>

### SolutionInformation.AddFluidPressure()

Creates a new ContactFluidPressureTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddForceReaction"></a>

### SolutionInformation.AddForceReaction()

Creates a new ForceReactionTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddFrictionalDissipationEnergy"></a>

### SolutionInformation.AddFrictionalDissipationEnergy()

Creates a new ContactFrictionalDissipationEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddFrictionalStress"></a>

### SolutionInformation.AddFrictionalStress()

Creates a new ContactFrictionalStressTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddGap"></a>

### SolutionInformation.AddGap()

Creates a new ContactGapTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddHourglassEnergy"></a>

### SolutionInformation.AddHourglassEnergy()

Creates a new HourglassEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddImage"></a>

### SolutionInformation.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddInternalEnergy"></a>

### SolutionInformation.AddInternalEnergy()

Creates a new InternalEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddKineticEnergy"></a>

### SolutionInformation.AddKineticEnergy()

Creates a new KineticEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddLSDYNAGeneralTracker"></a>

### SolutionInformation.AddLSDYNAGeneralTracker()

Creates a new LSDYNAGeneralTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddLatticeDensity"></a>

### SolutionInformation.AddLatticeDensity()

Creates a new LatticeDensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddLatticeElementalDensity"></a>

### SolutionInformation.AddLatticeElementalDensity()

Creates a new LatticeElementalDensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMaximumDampingPressure"></a>

### SolutionInformation.AddMaximumDampingPressure()

Creates a new ContactMaximumDampingPressureTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMaximumGeometricSlidingDistance"></a>

### SolutionInformation.AddMaximumGeometricSlidingDistance()

Creates a new ContactMaximumGeometricSlidingDistanceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMaximumTangentialStiffness"></a>

### SolutionInformation.AddMaximumTangentialStiffness()

Creates a new ContactMaximumTangentialStiffnessTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMinimumGeometricSlidingDistance"></a>

### SolutionInformation.AddMinimumGeometricSlidingDistance()

Creates a new ContactMinimumGeometricSlidingDistanceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMinimumTangentialStiffness"></a>

### SolutionInformation.AddMinimumTangentialStiffness()

Creates a new ContactMinimumTangentialStiffnessTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMomentReaction"></a>

### SolutionInformation.AddMomentReaction()

Creates a new MomentReactionTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMomentum"></a>

### SolutionInformation.AddMomentum()

Creates a new MomentumTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddNonLinearStabilizationEnergy"></a>

### SolutionInformation.AddNonLinearStabilizationEnergy()

Creates a new NonLinearStabilizationEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddNumberContacting"></a>

### SolutionInformation.AddNumberContacting()

Creates a new NumberContactingTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddNumberSticking"></a>

### SolutionInformation.AddNumberSticking()

Creates a new ContactNumberStickingTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddNumberWithLargePenetration"></a>

### SolutionInformation.AddNumberWithLargePenetration()

Creates a new ContactNumberWithLargePenetrationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddNumberWithTooMuchSliding"></a>

### SolutionInformation.AddNumberWithTooMuchSliding()

Creates a new ContactNumberWithTooMuchSlidingTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddPenetration"></a>

### SolutionInformation.AddPenetration()

Creates a new ContactPenetrationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddPlasticWork"></a>

### SolutionInformation.AddPlasticWork()

Creates a new PlasticWorkTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddPosition"></a>

### SolutionInformation.AddPosition()

Creates a new PositionTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddPossibleOverconstraint"></a>

### SolutionInformation.AddPossibleOverconstraint()

Creates a new ContactPossibleOverconstraintTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddPressure"></a>

### SolutionInformation.AddPressure()

Creates a new PressureTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddResultingPinball"></a>

### SolutionInformation.AddResultingPinball()

Creates a new ContactResultingPinballTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddRigidBodyVelocity"></a>

### SolutionInformation.AddRigidBodyVelocity()

Creates a new RigidBodyVelocityTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddSlidingDistance"></a>

### SolutionInformation.AddSlidingDistance()

Creates a new ContactSlidingDistanceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddSlidingIndication"></a>

### SolutionInformation.AddSlidingIndication()

Creates a new ContactSlidingIndicationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddSpringTrackerDampingForce"></a>

### SolutionInformation.AddSpringTrackerDampingForce()

Creates a new SpringDampingForceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddSpringTrackerElasticForce"></a>

### SolutionInformation.AddSpringTrackerElasticForce()

Creates a new SpringElasticForceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddSpringTrackerElongation"></a>

### SolutionInformation.AddSpringTrackerElongation()

Creates a new SpringElongationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddSpringTrackerVelocity"></a>

### SolutionInformation.AddSpringTrackerVelocity()

Creates a new SpringVelocityTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddStabilizationEnergy"></a>

### SolutionInformation.AddStabilizationEnergy()

Creates a new ContactStabilizationEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddStiffnessEnergy"></a>

### SolutionInformation.AddStiffnessEnergy()

Creates a new StiffnessEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddStrainEnergy"></a>

### SolutionInformation.AddStrainEnergy()

Creates a new ContactStrainEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddStrainPlotTracker"></a>

### SolutionInformation.AddStrainPlotTracker()

Creates a new EquivalentElasticStrainRST Plot Tracker.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddStressPlotTracker"></a>

### SolutionInformation.AddStressPlotTracker()

Creates a new EquivalentStress Plot Tracker.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTangentialDampingStress"></a>

### SolutionInformation.AddTangentialDampingStress()

Creates a new ContactTangentialDampingStressTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTemperature"></a>

### SolutionInformation.AddTemperature()

Creates a new TemperatureTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTemperaturePlotTracker"></a>

### SolutionInformation.AddTemperaturePlotTracker()

Creates a new TemperatureResult Plot Tracker.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTopologyDensity"></a>

### SolutionInformation.AddTopologyDensity()

Creates a new TopologyDensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTopologyElementalDensity"></a>

### SolutionInformation.AddTopologyElementalDensity()

Creates a new TopologyElementalDensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalEnergy"></a>

### SolutionInformation.AddTotalEnergy()

Creates a new TotalEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalForceFromContactPressureX"></a>

### SolutionInformation.AddTotalForceFromContactPressureX()

Creates a new ContactTotalForceFromContactPressureXTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalForceFromContactPressureY"></a>

### SolutionInformation.AddTotalForceFromContactPressureY()

Creates a new ContactTotalForceFromContactPressureYTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalForceFromContactPressureZ"></a>

### SolutionInformation.AddTotalForceFromContactPressureZ()

Creates a new ContactTotalForceFromContactPressureZTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalForceFromTangentialStressX"></a>

### SolutionInformation.AddTotalForceFromTangentialStressX()

Creates a new ContactTotalForceFromTangentialStressXTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalForceFromTangentialStressY"></a>

### SolutionInformation.AddTotalForceFromTangentialStressY()

Creates a new ContactTotalForceFromTangentialStressYTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalForceFromTangentialStressZ"></a>

### SolutionInformation.AddTotalForceFromTangentialStressZ()

Creates a new ContactTotalForceFromTangentialStressZTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalMassAverageVelocity"></a>

### SolutionInformation.AddTotalMassAverageVelocity()

Creates a new TotalMassAverageVelocityTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddVolumeLossDueToWear"></a>

### SolutionInformation.AddVolumeLossDueToWear()

Creates a new ContactVolumeLossDueToWearTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.CopyTo"></a>

### SolutionInformation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.CreateParameter"></a>

### SolutionInformation.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Duplicate"></a>

### SolutionInformation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.EvaluateAllContactTrackers"></a>

### SolutionInformation.EvaluateAllContactTrackers()

Run the EvaluateAllContactTrackers action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.GetChildren"></a>

### SolutionInformation.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.GetParameter"></a>

### SolutionInformation.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.GroupAllSimilarChildren"></a>

### SolutionInformation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.GroupSimilarObjects"></a>

### SolutionInformation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.ImportResultTrackersFromFile"></a>

### SolutionInformation.ImportResultTrackersFromFile(fileName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Import Result Trackers from File.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.PropertyByAPIName"></a>

### SolutionInformation.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.PropertyByName"></a>

### SolutionInformation.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.RemoveParameter"></a>

### SolutionInformation.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.RenameBasedOnDefinition"></a>

### SolutionInformation.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

