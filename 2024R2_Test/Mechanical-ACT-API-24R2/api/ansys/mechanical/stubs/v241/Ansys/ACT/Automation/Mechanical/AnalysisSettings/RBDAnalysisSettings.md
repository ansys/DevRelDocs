# `RBDAnalysisSettings`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisSettings.RBDAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

RBDAnalysisSettings class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetStepEndTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.GetStepEndTime)                     | Gets the Step End Time at a given solution step.                                  |
| [`SetStepEndTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.SetStepEndTime)                     | Sets the Step End Time for a given solution step.                                 |
| [`GetAutomaticTimeStepping`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.GetAutomaticTimeStepping) | Gets the Automatic Time Stepping at a given solution step.                        |
| [`SetAutomaticTimeStepping`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.SetAutomaticTimeStepping) | Sets the Automatic Time Stepping for a given solution step.                       |
| [`GetCarryOverTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.GetCarryOverTimeStep)         | Gets the Carry Over Time Step at a given solution step.                           |
| [`SetCarryOverTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.SetCarryOverTimeStep)         | Sets the Carry Over Time Step for a given solution step.                          |
| [`GetInitialTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.GetInitialTimeStep)             | Gets the Initial Time Step at a given solution step.                              |
| [`SetInitialTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.SetInitialTimeStep)             | Sets the Initial Time Step for a given solution step.                             |
| [`GetMinimumTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.GetMinimumTimeStep)             | Gets the Minimum Time Step at a given solution step.                              |
| [`SetMinimumTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.SetMinimumTimeStep)             | Sets the Minimum Time Step for a given solution step.                             |
| [`GetMaximumTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.GetMaximumTimeStep)             | Gets the Maximum Time Step at a given solution step.                              |
| [`SetMaximumTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.SetMaximumTimeStep)             | Sets the Maximum Time Step for a given solution step.                             |
| [`GetTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.GetTimeStep)                           | Gets the (fixed) Time Step at a given solution step.                              |
| [`SetTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.SetTimeStep)                           | Sets the (fixed) Time Step for a given solution step.                             |
| [`GetStoreResultAt`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.GetStoreResultAt)                 | Gets the StoreResultAt setting at a given solution step.                          |
| [`SetStoreResultAt`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.SetStoreResultAt)                 | Sets the StoreResultAt setting for a given solution step.                         |
| [`GetStoreResultAtValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.GetStoreResultAtValue)       | Gets the StoreResultAtValue setting at a given solution step.                     |
| [`SetStoreResultAtValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.SetStoreResultAtValue)       | Sets the StoreResultAtValue setting for a given solution step.                    |
| [`DeleteAllRestartPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.DeleteAllRestartPoints)     | DeleteAllRestartPoints method.                                                    |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#id0)                                                                                                    | InternalObject property.                                               |
| [`NumberOfSteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.NumberOfSteps)                                                                       | Gets or sets the NumberOfSteps.                                        |
| [`CurrentStepNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.CurrentStepNumber)                                                               | Gets or sets the CurrentStepNumber.                                    |
| [`TimeIntegrationType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.TimeIntegrationType)                                                           | Gets or sets the Integration Method.                                   |
| [`PositionCorrection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.PositionCorrection)                                                             | Gets or sets the PositionCorrection.                                   |
| [`VelocityCorrection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.VelocityCorrection)                                                             | Gets or sets the VelocityCorrection.                                   |
| [`CorrectionType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.CorrectionType)                                                                     | Gets or sets the CorrectionType.                                       |
| [`AssemblyType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.AssemblyType)                                                                         | Gets or sets the AssemblyType.                                         |
| [`DropoffTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.DropoffTolerance)                                                                 | Gets or sets the DropoffTolerance.                                     |
| [`RelativeAssemblyTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.RelativeAssemblyTolerance)                                               | Gets or sets the RelativeAssemblyTolerance activity.                   |
| [`RelativeAssemblyToleranceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.RelativeAssemblyToleranceValue)                                     | Gets or sets the RelativeAssemblyToleranceValue.                       |
| [`EnergyAccuracyTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.EnergyAccuracyTolerance)                                                   | Gets or sets the EnergyAccuracyTolerance activity.                     |
| [`EnergyAccuracyToleranceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.EnergyAccuracyToleranceValue)                                         | Gets or sets the EnergyAccuracyToleranceValue.                         |
| [`NumericalDampingTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.NumericalDampingTolerance)                                               | Gets or sets the NumericalDamping activity.                            |
| [`NumericalDampingValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.NumericalDampingValue)                                                       | Gets or sets the NumericalDampingValue.                                |
| [`ForceResidualTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.ForceResidualTolerance)                                                     | Gets or sets the ForceResidualTolerance activity.                      |
| [`ForceResidualToleranceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.ForceResidualToleranceValue)                                           | Gets or sets the ForceResidualToleranceValue.                          |
| [`ConstraintEquationResidualTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.ConstraintEquationResidualTolerance)                           | Gets or sets the ConstraintEquationResidualTolerance activity.         |
| [`ConstraintEquationResidualToleranceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.ConstraintEquationResidualToleranceValue)                 | Gets or sets the ConstraintEquationResidualToleranceValue.             |
| [`VelocityConstraintEquationResidualTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.VelocityConstraintEquationResidualTolerance)           | Gets or sets the VelocityConstraintEquationResidualTolerance activity. |
| [`VelocityConstraintEquationResidualToleranceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.VelocityConstraintEquationResidualToleranceValue) | Gets or sets the ConstraintEquationResidualToleranceValue.             |
| [`PerformStaticAnalysis`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.PerformStaticAnalysis)                                                       | Gets or sets the .                                                     |
| [`Graph`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.Graph)                                                                                       | Graph property.                                                        |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#id0)                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`ScratchSolverFilesDirectory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.ScratchSolverFilesDirectory)                                           | Gets the ScratchSolverFilesDirectory.                                  |
| [`SolverFilesDirectory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.SolverFilesDirectory)                                                         | Gets the SolverFilesDirectory.                                         |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.DataModelObjectCategory)                                                   | Gets the current DataModelObjectâ€™s category.                           |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.Children)                                                                                 | Gets the list of children.                                             |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.Comments)                                                                                 | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.Figures)                                                                                   | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.Images)                                                                                     | Gets the list of associated images.                                    |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.Properties)                                                                             | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/RBDAnalysisSettings.md#RBDAnalysisSettings.VisibleProperties)                                                               | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="RBDAnalysisSettings.InternalObject"></a>

### *property* RBDAnalysisSettings.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

InternalObject property.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.NumberOfSteps"></a>

### *property* RBDAnalysisSettings.NumberOfSteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSteps.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.CurrentStepNumber"></a>

### *property* RBDAnalysisSettings.CurrentStepNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.TimeIntegrationType"></a>

### *property* RBDAnalysisSettings.TimeIntegrationType *: [Ansys.Mechanical.DataModel.Enums.RBDTimeIntegrationType](../../../../Mechanical/DataModel/Enums/RBDTimeIntegrationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDTimeIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Integration Method.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.PositionCorrection"></a>

### *property* RBDAnalysisSettings.PositionCorrection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PositionCorrection.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.VelocityCorrection"></a>

### *property* RBDAnalysisSettings.VelocityCorrection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityCorrection.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.CorrectionType"></a>

### *property* RBDAnalysisSettings.CorrectionType *: [Ansys.Mechanical.DataModel.Enums.RBDCorrectionType](../../../../Mechanical/DataModel/Enums/RBDCorrectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDCorrectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CorrectionType.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.AssemblyType"></a>

### *property* RBDAnalysisSettings.AssemblyType *: [Ansys.Mechanical.DataModel.Enums.RBDCorrectionType](../../../../Mechanical/DataModel/Enums/RBDCorrectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDCorrectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AssemblyType.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.DropoffTolerance"></a>

### *property* RBDAnalysisSettings.DropoffTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DropoffTolerance.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.RelativeAssemblyTolerance"></a>

### *property* RBDAnalysisSettings.RelativeAssemblyTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelativeAssemblyTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.RelativeAssemblyToleranceValue"></a>

### *property* RBDAnalysisSettings.RelativeAssemblyToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelativeAssemblyToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.EnergyAccuracyTolerance"></a>

### *property* RBDAnalysisSettings.EnergyAccuracyTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyAccuracyTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.EnergyAccuracyToleranceValue"></a>

### *property* RBDAnalysisSettings.EnergyAccuracyToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyAccuracyToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.NumericalDampingTolerance"></a>

### *property* RBDAnalysisSettings.NumericalDampingTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDamping activity.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.NumericalDampingValue"></a>

### *property* RBDAnalysisSettings.NumericalDampingValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDampingValue.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.ForceResidualTolerance"></a>

### *property* RBDAnalysisSettings.ForceResidualTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceResidualTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.ForceResidualToleranceValue"></a>

### *property* RBDAnalysisSettings.ForceResidualToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceResidualToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.ConstraintEquationResidualTolerance"></a>

### *property* RBDAnalysisSettings.ConstraintEquationResidualTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintEquationResidualTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.ConstraintEquationResidualToleranceValue"></a>

### *property* RBDAnalysisSettings.ConstraintEquationResidualToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintEquationResidualToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.VelocityConstraintEquationResidualTolerance"></a>

### *property* RBDAnalysisSettings.VelocityConstraintEquationResidualTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityConstraintEquationResidualTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.VelocityConstraintEquationResidualToleranceValue"></a>

### *property* RBDAnalysisSettings.VelocityConstraintEquationResidualToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintEquationResidualToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.PerformStaticAnalysis"></a>

### *property* RBDAnalysisSettings.PerformStaticAnalysis *: [Ansys.Mechanical.DataModel.Enums.RBDDoStaticAnalysisType](../../../../Mechanical/DataModel/Enums/RBDDoStaticAnalysisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDDoStaticAnalysisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the .

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Graph"></a>

### *property* RBDAnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* RBDAnalysisSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisSettings | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.ScratchSolverFilesDirectory"></a>

### *property* RBDAnalysisSettings.ScratchSolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SolverFilesDirectory"></a>

### *property* RBDAnalysisSettings.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.DataModelObjectCategory"></a>

### *property* RBDAnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Children"></a>

### *property* RBDAnalysisSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Comments"></a>

### *property* RBDAnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Figures"></a>

### *property* RBDAnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Images"></a>

### *property* RBDAnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Properties"></a>

### *property* RBDAnalysisSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.VisibleProperties"></a>

### *property* RBDAnalysisSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RBDAnalysisSettings.GetStepEndTime"></a>

### RBDAnalysisSettings.GetStepEndTime(stepNumber: System.Int32)

Gets the Step End Time at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SetStepEndTime"></a>

### RBDAnalysisSettings.SetStepEndTime(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the Step End Time for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetAutomaticTimeStepping"></a>

### RBDAnalysisSettings.GetAutomaticTimeStepping(stepNumber: System.Int32)

Gets the Automatic Time Stepping at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SetAutomaticTimeStepping"></a>

### RBDAnalysisSettings.SetAutomaticTimeStepping(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping))

Sets the Automatic Time Stepping for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetCarryOverTimeStep"></a>

### RBDAnalysisSettings.GetCarryOverTimeStep(stepNumber: System.Int32)

Gets the Carry Over Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SetCarryOverTimeStep"></a>

### RBDAnalysisSettings.SetCarryOverTimeStep(stepNumber: System.Int32, value: System.Boolean)

Sets the Carry Over Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetInitialTimeStep"></a>

### RBDAnalysisSettings.GetInitialTimeStep(stepNumber: System.Int32)

Gets the Initial Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SetInitialTimeStep"></a>

### RBDAnalysisSettings.SetInitialTimeStep(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the Initial Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetMinimumTimeStep"></a>

### RBDAnalysisSettings.GetMinimumTimeStep(stepNumber: System.Int32)

Gets the Minimum Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SetMinimumTimeStep"></a>

### RBDAnalysisSettings.SetMinimumTimeStep(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the Minimum Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetMaximumTimeStep"></a>

### RBDAnalysisSettings.GetMaximumTimeStep(stepNumber: System.Int32)

Gets the Maximum Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SetMaximumTimeStep"></a>

### RBDAnalysisSettings.SetMaximumTimeStep(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the Maximum Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetTimeStep"></a>

### RBDAnalysisSettings.GetTimeStep(stepNumber: System.Int32)

Gets the (fixed) Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SetTimeStep"></a>

### RBDAnalysisSettings.SetTimeStep(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the (fixed) Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetStoreResultAt"></a>

### RBDAnalysisSettings.GetStoreResultAt(stepNumber: System.Int32)

Gets the StoreResultAt setting at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SetStoreResultAt"></a>

### RBDAnalysisSettings.SetStoreResultAt(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../Mechanical/DataModel/Enums/TimePointsOptions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimePointsOptions))

Sets the StoreResultAt setting for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetStoreResultAtValue"></a>

### RBDAnalysisSettings.GetStoreResultAtValue(stepNumber: System.Int32)

Gets the StoreResultAtValue setting at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SetStoreResultAtValue"></a>

### RBDAnalysisSettings.SetStoreResultAtValue(stepNumber: System.Int32, value: System.Int32)

Sets the StoreResultAtValue setting for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.DeleteAllRestartPoints"></a>

### RBDAnalysisSettings.DeleteAllRestartPoints()

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetChildren"></a>

### RBDAnalysisSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### RBDAnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.AddComment"></a>

### RBDAnalysisSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.AddFigure"></a>

### RBDAnalysisSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.AddImage"></a>

### RBDAnalysisSettings.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Activate"></a>

### RBDAnalysisSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.CopyTo"></a>

### RBDAnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Duplicate"></a>

### RBDAnalysisSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GroupAllSimilarChildren"></a>

### RBDAnalysisSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GroupSimilarObjects"></a>

### RBDAnalysisSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.PropertyByName"></a>

### RBDAnalysisSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.PropertyByAPIName"></a>

### RBDAnalysisSettings.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.CreateParameter"></a>

### RBDAnalysisSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetParameter"></a>

### RBDAnalysisSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.RemoveParameter"></a>

### RBDAnalysisSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

