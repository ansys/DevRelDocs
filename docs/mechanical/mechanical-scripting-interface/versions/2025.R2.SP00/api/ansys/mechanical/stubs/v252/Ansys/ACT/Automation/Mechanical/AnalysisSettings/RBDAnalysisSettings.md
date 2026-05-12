# `RBDAnalysisSettings`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AnalysisSettings.RBDAnalysisSettings"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AnalysisSettings.RBDAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#RBDAnalysisSettings.Activate)                                 | Activate the current object.                                                      |
| [`AddComment`](#RBDAnalysisSettings.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#RBDAnalysisSettings.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#RBDAnalysisSettings.AddImage)                                 | Creates a new child Image.                                                        |
| [`CopyTo`](#RBDAnalysisSettings.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#RBDAnalysisSettings.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`DeleteAllRestartPoints`](#RBDAnalysisSettings.DeleteAllRestartPoints)     | DeleteAllRestartPoints method.                                                    |
| [`Duplicate`](#RBDAnalysisSettings.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GetAutomaticTimeStepping`](#RBDAnalysisSettings.GetAutomaticTimeStepping) | Gets the Automatic Time Stepping at a given solution step.                        |
| [`GetCarryOverTimeStep`](#RBDAnalysisSettings.GetCarryOverTimeStep)         | Gets the Carry Over Time Step at a given solution step.                           |
| [`GetChildren`](#RBDAnalysisSettings.GetChildren)                           | Gets the list of children, filtered by type.                                      |
| [`GetInitialTimeStep`](#RBDAnalysisSettings.GetInitialTimeStep)             | Gets the Initial Time Step at a given solution step.                              |
| [`GetMaximumTimeStep`](#RBDAnalysisSettings.GetMaximumTimeStep)             | Gets the Maximum Time Step at a given solution step.                              |
| [`GetMinimumTimeStep`](#RBDAnalysisSettings.GetMinimumTimeStep)             | Gets the Minimum Time Step at a given solution step.                              |
| [`GetParameter`](#RBDAnalysisSettings.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`GetStepEndTime`](#RBDAnalysisSettings.GetStepEndTime)                     | Gets the Step End Time at a given solution step.                                  |
| [`GetStoreResultAt`](#RBDAnalysisSettings.GetStoreResultAt)                 | Gets the StoreResultAt setting at a given solution step.                          |
| [`GetStoreResultAtValue`](#RBDAnalysisSettings.GetStoreResultAtValue)       | Gets the StoreResultAtValue setting at a given solution step.                     |
| [`GetTimeStep`](#RBDAnalysisSettings.GetTimeStep)                           | Gets the (fixed) Time Step at a given solution step.                              |
| [`GroupAllSimilarChildren`](#RBDAnalysisSettings.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RBDAnalysisSettings.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#RBDAnalysisSettings.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`PropertyByName`](#RBDAnalysisSettings.PropertyByName)                     | Get a property by its unique name.                                                |
| [`RemoveParameter`](#RBDAnalysisSettings.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetAutomaticTimeStepping`](#RBDAnalysisSettings.SetAutomaticTimeStepping) | Sets the Automatic Time Stepping for a given solution step.                       |
| [`SetCarryOverTimeStep`](#RBDAnalysisSettings.SetCarryOverTimeStep)         | Sets the Carry Over Time Step for a given solution step.                          |
| [`SetInitialTimeStep`](#RBDAnalysisSettings.SetInitialTimeStep)             | Sets the Initial Time Step for a given solution step.                             |
| [`SetMaximumTimeStep`](#RBDAnalysisSettings.SetMaximumTimeStep)             | Sets the Maximum Time Step for a given solution step.                             |
| [`SetMinimumTimeStep`](#RBDAnalysisSettings.SetMinimumTimeStep)             | Sets the Minimum Time Step for a given solution step.                             |
| [`SetStepEndTime`](#RBDAnalysisSettings.SetStepEndTime)                     | Sets the Step End Time for a given solution step.                                 |
| [`SetStoreResultAt`](#RBDAnalysisSettings.SetStoreResultAt)                 | Sets the StoreResultAt setting for a given solution step.                         |
| [`SetStoreResultAtValue`](#RBDAnalysisSettings.SetStoreResultAtValue)       | Sets the StoreResultAtValue setting for a given solution step.                    |
| [`SetTimeStep`](#RBDAnalysisSettings.SetTimeStep)                           | Sets the (fixed) Time Step for a given solution step.                             |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`AssemblyType`](#RBDAnalysisSettings.AssemblyType)                                                                         | Gets or sets the AssemblyType.                                         |
| [`Children`](#RBDAnalysisSettings.Children)                                                                                 | Gets the list of children.                                             |
| [`Comments`](#RBDAnalysisSettings.Comments)                                                                                 | Gets the list of associated comments.                                  |
| [`ConstraintEquationResidualTolerance`](#RBDAnalysisSettings.ConstraintEquationResidualTolerance)                           | Gets or sets the ConstraintEquationResidualTolerance activity.         |
| [`ConstraintEquationResidualToleranceValue`](#RBDAnalysisSettings.ConstraintEquationResidualToleranceValue)                 | Gets or sets the ConstraintEquationResidualToleranceValue.             |
| [`CorrectionType`](#RBDAnalysisSettings.CorrectionType)                                                                     | Gets or sets the CorrectionType.                                       |
| [`CurrentStepNumber`](#RBDAnalysisSettings.CurrentStepNumber)                                                               | Gets or sets the CurrentStepNumber.                                    |
| [`DataModelObjectCategory`](#RBDAnalysisSettings.DataModelObjectCategory)                                                   | Gets the current DataModelObject’s category.                           |
| [`DropoffTolerance`](#RBDAnalysisSettings.DropoffTolerance)                                                                 | Gets or sets the DropoffTolerance.                                     |
| [`EnergyAccuracyTolerance`](#RBDAnalysisSettings.EnergyAccuracyTolerance)                                                   | Gets or sets the EnergyAccuracyTolerance activity.                     |
| [`EnergyAccuracyToleranceValue`](#RBDAnalysisSettings.EnergyAccuracyToleranceValue)                                         | Gets or sets the EnergyAccuracyToleranceValue.                         |
| [`Figures`](#RBDAnalysisSettings.Figures)                                                                                   | Gets the list of associated figures.                                   |
| [`ForceResidualTolerance`](#RBDAnalysisSettings.ForceResidualTolerance)                                                     | Gets or sets the ForceResidualTolerance activity.                      |
| [`ForceResidualToleranceValue`](#RBDAnalysisSettings.ForceResidualToleranceValue)                                           | Gets or sets the ForceResidualToleranceValue.                          |
| [`Graph`](#RBDAnalysisSettings.Graph)                                                                                       | Graph property.                                                        |
| [`Images`](#RBDAnalysisSettings.Images)                                                                                     | Gets the list of associated images.                                    |
| [`InternalObject`](#RBDAnalysisSettings.InternalObject)                                                                     | InternalObject property.                                               |
| [`NumberOfSteps`](#RBDAnalysisSettings.NumberOfSteps)                                                                       | Gets or sets the NumberOfSteps.                                        |
| [`NumericalDampingTolerance`](#RBDAnalysisSettings.NumericalDampingTolerance)                                               | Gets or sets the NumericalDamping activity.                            |
| [`NumericalDampingValue`](#RBDAnalysisSettings.NumericalDampingValue)                                                       | Gets or sets the NumericalDampingValue.                                |
| [`PerformStaticAnalysis`](#RBDAnalysisSettings.PerformStaticAnalysis)                                                       | Gets or sets the .                                                     |
| [`PositionCorrection`](#RBDAnalysisSettings.PositionCorrection)                                                             | Gets or sets the PositionCorrection.                                   |
| [`Properties`](#RBDAnalysisSettings.Properties)                                                                             | Gets the list of properties for this object.                           |
| [`RelativeAssemblyTolerance`](#RBDAnalysisSettings.RelativeAssemblyTolerance)                                               | Gets or sets the RelativeAssemblyTolerance activity.                   |
| [`RelativeAssemblyToleranceValue`](#RBDAnalysisSettings.RelativeAssemblyToleranceValue)                                     | Gets or sets the RelativeAssemblyToleranceValue.                       |
| [`ScratchSolverFilesDirectory`](#RBDAnalysisSettings.ScratchSolverFilesDirectory)                                           | Gets the ScratchSolverFilesDirectory.                                  |
| [`SolverFilesDirectory`](#RBDAnalysisSettings.SolverFilesDirectory)                                                         | Gets the SolverFilesDirectory.                                         |
| [`TimeIntegrationType`](#RBDAnalysisSettings.TimeIntegrationType)                                                           | Gets or sets the Integration Method.                                   |
| [`VelocityConstraintEquationResidualTolerance`](#RBDAnalysisSettings.VelocityConstraintEquationResidualTolerance)           | Gets or sets the VelocityConstraintEquationResidualTolerance activity. |
| [`VelocityConstraintEquationResidualToleranceValue`](#RBDAnalysisSettings.VelocityConstraintEquationResidualToleranceValue) | Gets or sets the ConstraintEquationResidualToleranceValue.             |
| [`VelocityCorrection`](#RBDAnalysisSettings.VelocityCorrection)                                                             | Gets or sets the VelocityCorrection.                                   |
| [`VisibleProperties`](#RBDAnalysisSettings.VisibleProperties)                                                               | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="RBDAnalysisSettings.AssemblyType"></a>

### *property* RBDAnalysisSettings.AssemblyType *: [Ansys.Mechanical.DataModel.Enums.RBDCorrectionType](../../../../Mechanical/DataModel/Enums/RBDCorrectionType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RBDCorrectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AssemblyType.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Children"></a>

### *property* RBDAnalysisSettings.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Comments"></a>

### *property* RBDAnalysisSettings.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.ConstraintEquationResidualTolerance"></a>

### *property* RBDAnalysisSettings.ConstraintEquationResidualTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintEquationResidualTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.ConstraintEquationResidualToleranceValue"></a>

### *property* RBDAnalysisSettings.ConstraintEquationResidualToleranceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintEquationResidualToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.CorrectionType"></a>

### *property* RBDAnalysisSettings.CorrectionType *: [Ansys.Mechanical.DataModel.Enums.RBDCorrectionType](../../../../Mechanical/DataModel/Enums/RBDCorrectionType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RBDCorrectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CorrectionType.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.CurrentStepNumber"></a>

### *property* RBDAnalysisSettings.CurrentStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.DataModelObjectCategory"></a>

### *property* RBDAnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.DropoffTolerance"></a>

### *property* RBDAnalysisSettings.DropoffTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DropoffTolerance.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.EnergyAccuracyTolerance"></a>

### *property* RBDAnalysisSettings.EnergyAccuracyTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyAccuracyTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.EnergyAccuracyToleranceValue"></a>

### *property* RBDAnalysisSettings.EnergyAccuracyToleranceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyAccuracyToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Figures"></a>

### *property* RBDAnalysisSettings.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.ForceResidualTolerance"></a>

### *property* RBDAnalysisSettings.ForceResidualTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceResidualTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.ForceResidualToleranceValue"></a>

### *property* RBDAnalysisSettings.ForceResidualToleranceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceResidualToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Graph"></a>

### *property* RBDAnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Images"></a>

### *property* RBDAnalysisSettings.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.InternalObject"></a>

### *property* RBDAnalysisSettings.InternalObject *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

InternalObject property.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.NumberOfSteps"></a>

### *property* RBDAnalysisSettings.NumberOfSteps *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSteps.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.NumericalDampingTolerance"></a>

### *property* RBDAnalysisSettings.NumericalDampingTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDamping activity.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.NumericalDampingValue"></a>

### *property* RBDAnalysisSettings.NumericalDampingValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDampingValue.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.PerformStaticAnalysis"></a>

### *property* RBDAnalysisSettings.PerformStaticAnalysis *: [Ansys.Mechanical.DataModel.Enums.RBDDoStaticAnalysisType](../../../../Mechanical/DataModel/Enums/RBDDoStaticAnalysisType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RBDDoStaticAnalysisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the .

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.PositionCorrection"></a>

### *property* RBDAnalysisSettings.PositionCorrection *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PositionCorrection.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Properties"></a>

### *property* RBDAnalysisSettings.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.RelativeAssemblyTolerance"></a>

### *property* RBDAnalysisSettings.RelativeAssemblyTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelativeAssemblyTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.RelativeAssemblyToleranceValue"></a>

### *property* RBDAnalysisSettings.RelativeAssemblyToleranceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelativeAssemblyToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.ScratchSolverFilesDirectory"></a>

### *property* RBDAnalysisSettings.ScratchSolverFilesDirectory *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SolverFilesDirectory"></a>

### *property* RBDAnalysisSettings.SolverFilesDirectory *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.TimeIntegrationType"></a>

### *property* RBDAnalysisSettings.TimeIntegrationType *: [Ansys.Mechanical.DataModel.Enums.RBDTimeIntegrationType](../../../../Mechanical/DataModel/Enums/RBDTimeIntegrationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RBDTimeIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Integration Method.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.VelocityConstraintEquationResidualTolerance"></a>

### *property* RBDAnalysisSettings.VelocityConstraintEquationResidualTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityConstraintEquationResidualTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.VelocityConstraintEquationResidualToleranceValue"></a>

### *property* RBDAnalysisSettings.VelocityConstraintEquationResidualToleranceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintEquationResidualToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.VelocityCorrection"></a>

### *property* RBDAnalysisSettings.VelocityCorrection *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityCorrection.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.VisibleProperties"></a>

### *property* RBDAnalysisSettings.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RBDAnalysisSettings.Activate"></a>

### RBDAnalysisSettings.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.AddComment"></a>

### RBDAnalysisSettings.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.AddFigure"></a>

### RBDAnalysisSettings.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.AddImage"></a>

### RBDAnalysisSettings.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.CopyTo"></a>

### RBDAnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.CreateParameter"></a>

### RBDAnalysisSettings.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.DeleteAllRestartPoints"></a>

### RBDAnalysisSettings.DeleteAllRestartPoints() → [None](https://docs.python.org/3/library/constants.html#None)

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.Duplicate"></a>

### RBDAnalysisSettings.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetAutomaticTimeStepping"></a>

### RBDAnalysisSettings.GetAutomaticTimeStepping(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping)

Gets the Automatic Time Stepping at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetCarryOverTimeStep"></a>

### RBDAnalysisSettings.GetCarryOverTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Gets the Carry Over Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetChildren"></a>

### RBDAnalysisSettings.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetInitialTimeStep"></a>

### RBDAnalysisSettings.GetInitialTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Initial Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetMaximumTimeStep"></a>

### RBDAnalysisSettings.GetMaximumTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Maximum Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetMinimumTimeStep"></a>

### RBDAnalysisSettings.GetMinimumTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Minimum Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetParameter"></a>

### RBDAnalysisSettings.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetStepEndTime"></a>

### RBDAnalysisSettings.GetStepEndTime(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Step End Time at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetStoreResultAt"></a>

### RBDAnalysisSettings.GetStoreResultAt(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../Mechanical/DataModel/Enums/TimePointsOptions.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TimePointsOptions)

Gets the StoreResultAt setting at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetStoreResultAtValue"></a>

### RBDAnalysisSettings.GetStoreResultAtValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [int](https://docs.python.org/3/library/functions.html#int)

Gets the StoreResultAtValue setting at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GetTimeStep"></a>

### RBDAnalysisSettings.GetTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the (fixed) Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GroupAllSimilarChildren"></a>

### RBDAnalysisSettings.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.GroupSimilarObjects"></a>

### RBDAnalysisSettings.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.PropertyByAPIName"></a>

### RBDAnalysisSettings.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.PropertyByName"></a>

### RBDAnalysisSettings.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.RemoveParameter"></a>

### RBDAnalysisSettings.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SetAutomaticTimeStepping"></a>

### RBDAnalysisSettings.SetAutomaticTimeStepping(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Automatic Time Stepping for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SetCarryOverTimeStep"></a>

### RBDAnalysisSettings.SetCarryOverTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Carry Over Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SetInitialTimeStep"></a>

### RBDAnalysisSettings.SetInitialTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Initial Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SetMaximumTimeStep"></a>

### RBDAnalysisSettings.SetMaximumTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Maximum Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SetMinimumTimeStep"></a>

### RBDAnalysisSettings.SetMinimumTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Minimum Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SetStepEndTime"></a>

### RBDAnalysisSettings.SetStepEndTime(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Step End Time for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SetStoreResultAt"></a>

### RBDAnalysisSettings.SetStoreResultAt(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../Mechanical/DataModel/Enums/TimePointsOptions.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TimePointsOptions)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the StoreResultAt setting for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SetStoreResultAtValue"></a>

### RBDAnalysisSettings.SetStoreResultAtValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the StoreResultAtValue setting for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="RBDAnalysisSettings.SetTimeStep"></a>

### RBDAnalysisSettings.SetTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the (fixed) Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

