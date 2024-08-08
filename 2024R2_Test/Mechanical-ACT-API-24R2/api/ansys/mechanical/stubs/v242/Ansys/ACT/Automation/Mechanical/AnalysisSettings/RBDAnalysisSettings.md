# `RBDAnalysisSettings`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.AnalysisSettings.RBDAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

RBDAnalysisSettings class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetStepEndTime`](#RBDAnalysisSettings.GetStepEndTime)                     | Gets the Step End Time at a given solution step.                                  |
| [`SetStepEndTime`](#RBDAnalysisSettings.SetStepEndTime)                     | Sets the Step End Time for a given solution step.                                 |
| [`GetAutomaticTimeStepping`](#RBDAnalysisSettings.GetAutomaticTimeStepping) | Gets the Automatic Time Stepping at a given solution step.                        |
| [`SetAutomaticTimeStepping`](#RBDAnalysisSettings.SetAutomaticTimeStepping) | Sets the Automatic Time Stepping for a given solution step.                       |
| [`GetCarryOverTimeStep`](#RBDAnalysisSettings.GetCarryOverTimeStep)         | Gets the Carry Over Time Step at a given solution step.                           |
| [`SetCarryOverTimeStep`](#RBDAnalysisSettings.SetCarryOverTimeStep)         | Sets the Carry Over Time Step for a given solution step.                          |
| [`GetInitialTimeStep`](#RBDAnalysisSettings.GetInitialTimeStep)             | Gets the Initial Time Step at a given solution step.                              |
| [`SetInitialTimeStep`](#RBDAnalysisSettings.SetInitialTimeStep)             | Sets the Initial Time Step for a given solution step.                             |
| [`GetMinimumTimeStep`](#RBDAnalysisSettings.GetMinimumTimeStep)             | Gets the Minimum Time Step at a given solution step.                              |
| [`SetMinimumTimeStep`](#RBDAnalysisSettings.SetMinimumTimeStep)             | Sets the Minimum Time Step for a given solution step.                             |
| [`GetMaximumTimeStep`](#RBDAnalysisSettings.GetMaximumTimeStep)             | Gets the Maximum Time Step at a given solution step.                              |
| [`SetMaximumTimeStep`](#RBDAnalysisSettings.SetMaximumTimeStep)             | Sets the Maximum Time Step for a given solution step.                             |
| [`GetTimeStep`](#RBDAnalysisSettings.GetTimeStep)                           | Gets the (fixed) Time Step at a given solution step.                              |
| [`SetTimeStep`](#RBDAnalysisSettings.SetTimeStep)                           | Sets the (fixed) Time Step for a given solution step.                             |
| [`GetStoreResultAt`](#RBDAnalysisSettings.GetStoreResultAt)                 | Gets the StoreResultAt setting at a given solution step.                          |
| [`SetStoreResultAt`](#RBDAnalysisSettings.SetStoreResultAt)                 | Sets the StoreResultAt setting for a given solution step.                         |
| [`GetStoreResultAtValue`](#RBDAnalysisSettings.GetStoreResultAtValue)       | Gets the StoreResultAtValue setting at a given solution step.                     |
| [`SetStoreResultAtValue`](#RBDAnalysisSettings.SetStoreResultAtValue)       | Sets the StoreResultAtValue setting for a given solution step.                    |
| [`DeleteAllRestartPoints`](#RBDAnalysisSettings.DeleteAllRestartPoints)     | DeleteAllRestartPoints method.                                                    |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RBDAnalysisSettings.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#RBDAnalysisSettings.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#RBDAnalysisSettings.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#RBDAnalysisSettings.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#RBDAnalysisSettings.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RBDAnalysisSettings.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RBDAnalysisSettings.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RBDAnalysisSettings.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RBDAnalysisSettings.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RBDAnalysisSettings.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#RBDAnalysisSettings.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RBDAnalysisSettings.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RBDAnalysisSettings.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                    | InternalObject property.                                               |
| [`NumberOfSteps`](#RBDAnalysisSettings.NumberOfSteps)                                                                       | Gets or sets the NumberOfSteps.                                        |
| [`CurrentStepNumber`](#RBDAnalysisSettings.CurrentStepNumber)                                                               | Gets or sets the CurrentStepNumber.                                    |
| [`TimeIntegrationType`](#RBDAnalysisSettings.TimeIntegrationType)                                                           | Gets or sets the Integration Method.                                   |
| [`PositionCorrection`](#RBDAnalysisSettings.PositionCorrection)                                                             | Gets or sets the PositionCorrection.                                   |
| [`VelocityCorrection`](#RBDAnalysisSettings.VelocityCorrection)                                                             | Gets or sets the VelocityCorrection.                                   |
| [`CorrectionType`](#RBDAnalysisSettings.CorrectionType)                                                                     | Gets or sets the CorrectionType.                                       |
| [`AssemblyType`](#RBDAnalysisSettings.AssemblyType)                                                                         | Gets or sets the AssemblyType.                                         |
| [`DropoffTolerance`](#RBDAnalysisSettings.DropoffTolerance)                                                                 | Gets or sets the DropoffTolerance.                                     |
| [`RelativeAssemblyTolerance`](#RBDAnalysisSettings.RelativeAssemblyTolerance)                                               | Gets or sets the RelativeAssemblyTolerance activity.                   |
| [`RelativeAssemblyToleranceValue`](#RBDAnalysisSettings.RelativeAssemblyToleranceValue)                                     | Gets or sets the RelativeAssemblyToleranceValue.                       |
| [`EnergyAccuracyTolerance`](#RBDAnalysisSettings.EnergyAccuracyTolerance)                                                   | Gets or sets the EnergyAccuracyTolerance activity.                     |
| [`EnergyAccuracyToleranceValue`](#RBDAnalysisSettings.EnergyAccuracyToleranceValue)                                         | Gets or sets the EnergyAccuracyToleranceValue.                         |
| [`NumericalDampingTolerance`](#RBDAnalysisSettings.NumericalDampingTolerance)                                               | Gets or sets the NumericalDamping activity.                            |
| [`NumericalDampingValue`](#RBDAnalysisSettings.NumericalDampingValue)                                                       | Gets or sets the NumericalDampingValue.                                |
| [`ForceResidualTolerance`](#RBDAnalysisSettings.ForceResidualTolerance)                                                     | Gets or sets the ForceResidualTolerance activity.                      |
| [`ForceResidualToleranceValue`](#RBDAnalysisSettings.ForceResidualToleranceValue)                                           | Gets or sets the ForceResidualToleranceValue.                          |
| [`ConstraintEquationResidualTolerance`](#RBDAnalysisSettings.ConstraintEquationResidualTolerance)                           | Gets or sets the ConstraintEquationResidualTolerance activity.         |
| [`ConstraintEquationResidualToleranceValue`](#RBDAnalysisSettings.ConstraintEquationResidualToleranceValue)                 | Gets or sets the ConstraintEquationResidualToleranceValue.             |
| [`VelocityConstraintEquationResidualTolerance`](#RBDAnalysisSettings.VelocityConstraintEquationResidualTolerance)           | Gets or sets the VelocityConstraintEquationResidualTolerance activity. |
| [`VelocityConstraintEquationResidualToleranceValue`](#RBDAnalysisSettings.VelocityConstraintEquationResidualToleranceValue) | Gets or sets the ConstraintEquationResidualToleranceValue.             |
| [`PerformStaticAnalysis`](#RBDAnalysisSettings.PerformStaticAnalysis)                                                       | Gets or sets the .                                                     |
| [`Graph`](#RBDAnalysisSettings.Graph)                                                                                       | Graph property.                                                        |
| [`InternalObject`](#id0)                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`ScratchSolverFilesDirectory`](#RBDAnalysisSettings.ScratchSolverFilesDirectory)                                           | Gets the ScratchSolverFilesDirectory.                                  |
| [`SolverFilesDirectory`](#RBDAnalysisSettings.SolverFilesDirectory)                                                         | Gets the SolverFilesDirectory.                                         |
| [`DataModelObjectCategory`](#RBDAnalysisSettings.DataModelObjectCategory)                                                   | Gets the current DataModelObjectâ€™s category.                           |
| [`Children`](#RBDAnalysisSettings.Children)                                                                                 | Gets the list of children.                                             |
| [`Comments`](#RBDAnalysisSettings.Comments)                                                                                 | Gets the list of associated comments.                                  |
| [`Figures`](#RBDAnalysisSettings.Figures)                                                                                   | Gets the list of associated figures.                                   |
| [`Images`](#RBDAnalysisSettings.Images)                                                                                     | Gets the list of associated images.                                    |
| [`Properties`](#RBDAnalysisSettings.Properties)                                                                             | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#RBDAnalysisSettings.VisibleProperties)                                                               | Gets the list of properties that are visible for this object.          |

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

### *property* RBDAnalysisSettings.TimeIntegrationType *: [Ansys.Mechanical.DataModel.Enums.RBDTimeIntegrationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDTimeIntegrationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDTimeIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* RBDAnalysisSettings.CorrectionType *: [Ansys.Mechanical.DataModel.Enums.RBDCorrectionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDCorrectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDCorrectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CorrectionType.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.AssemblyType"></a>

### *property* RBDAnalysisSettings.AssemblyType *: [Ansys.Mechanical.DataModel.Enums.RBDCorrectionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDCorrectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDCorrectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AssemblyType.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.DropoffTolerance"></a>

### *property* RBDAnalysisSettings.DropoffTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DropoffTolerance.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.RelativeAssemblyTolerance"></a>

### *property* RBDAnalysisSettings.RelativeAssemblyTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelativeAssemblyTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.RelativeAssemblyToleranceValue"></a>

### *property* RBDAnalysisSettings.RelativeAssemblyToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelativeAssemblyToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.EnergyAccuracyTolerance"></a>

### *property* RBDAnalysisSettings.EnergyAccuracyTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyAccuracyTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.EnergyAccuracyToleranceValue"></a>

### *property* RBDAnalysisSettings.EnergyAccuracyToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyAccuracyToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.NumericalDampingTolerance"></a>

### *property* RBDAnalysisSettings.NumericalDampingTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDamping activity.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.NumericalDampingValue"></a>

### *property* RBDAnalysisSettings.NumericalDampingValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDampingValue.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.ForceResidualTolerance"></a>

### *property* RBDAnalysisSettings.ForceResidualTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceResidualTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.ForceResidualToleranceValue"></a>

### *property* RBDAnalysisSettings.ForceResidualToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceResidualToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.ConstraintEquationResidualTolerance"></a>

### *property* RBDAnalysisSettings.ConstraintEquationResidualTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintEquationResidualTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.ConstraintEquationResidualToleranceValue"></a>

### *property* RBDAnalysisSettings.ConstraintEquationResidualToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintEquationResidualToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.VelocityConstraintEquationResidualTolerance"></a>

### *property* RBDAnalysisSettings.VelocityConstraintEquationResidualTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityConstraintEquationResidualTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.VelocityConstraintEquationResidualToleranceValue"></a>

### *property* RBDAnalysisSettings.VelocityConstraintEquationResidualToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintEquationResidualToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.PerformStaticAnalysis"></a>

### *property* RBDAnalysisSettings.PerformStaticAnalysis *: [Ansys.Mechanical.DataModel.Enums.RBDDoStaticAnalysisType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDDoStaticAnalysisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDDoStaticAnalysisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the .

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Graph"></a>

### *property* RBDAnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../../../v241/Ansys/Mechanical/Graphics/AnalysisSettingsGraph.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* RBDAnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Children"></a>

### *property* RBDAnalysisSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Comments"></a>

### *property* RBDAnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Figures"></a>

### *property* RBDAnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Images"></a>

### *property* RBDAnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### RBDAnalysisSettings.SetAutomaticTimeStepping(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AutomaticTimeStepping.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping))

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

### RBDAnalysisSettings.SetStoreResultAt(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TimePointsOptions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimePointsOptions))

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

### RBDAnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

