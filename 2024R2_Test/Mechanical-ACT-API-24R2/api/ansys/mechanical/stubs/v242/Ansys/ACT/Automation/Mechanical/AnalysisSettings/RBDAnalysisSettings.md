# `RBDAnalysisSettings`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.AnalysisSettings.RBDAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

RBDAnalysisSettings class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------|-----------------------------------------------------------------------------------|
| `GetStepEndTime`           | Gets the Step End Time at a given solution step.                                  |
| `SetStepEndTime`           | Sets the Step End Time for a given solution step.                                 |
| `GetAutomaticTimeStepping` | Gets the Automatic Time Stepping at a given solution step.                        |
| `SetAutomaticTimeStepping` | Sets the Automatic Time Stepping for a given solution step.                       |
| `GetCarryOverTimeStep`     | Gets the Carry Over Time Step at a given solution step.                           |
| `SetCarryOverTimeStep`     | Sets the Carry Over Time Step for a given solution step.                          |
| `GetInitialTimeStep`       | Gets the Initial Time Step at a given solution step.                              |
| `SetInitialTimeStep`       | Sets the Initial Time Step for a given solution step.                             |
| `GetMinimumTimeStep`       | Gets the Minimum Time Step at a given solution step.                              |
| `SetMinimumTimeStep`       | Sets the Minimum Time Step for a given solution step.                             |
| `GetMaximumTimeStep`       | Gets the Maximum Time Step at a given solution step.                              |
| `SetMaximumTimeStep`       | Sets the Maximum Time Step for a given solution step.                             |
| `GetTimeStep`              | Gets the (fixed) Time Step at a given solution step.                              |
| `SetTimeStep`              | Sets the (fixed) Time Step for a given solution step.                             |
| `GetStoreResultAt`         | Gets the StoreResultAt setting at a given solution step.                          |
| `SetStoreResultAt`         | Sets the StoreResultAt setting for a given solution step.                         |
| `GetStoreResultAtValue`    | Gets the StoreResultAtValue setting at a given solution step.                     |
| `SetStoreResultAtValue`    | Sets the StoreResultAtValue setting for a given solution step.                    |
| `DeleteAllRestartPoints`   | DeleteAllRestartPoints method.                                                    |
| `GetChildren`              | Gets the list of children, filtered by type.                                      |
| `GetChildren`              | Gets the list of children, filtered by type.                                      |
| `AddComment`               | Creates a new child Comment.                                                      |
| `AddFigure`                | Creates a new child Figure.                                                       |
| `AddImage`                 | Creates a new child Image.                                                        |
| `Activate`                 | Activate the current object.                                                      |
| `CopyTo`                   | Copies all visible properties from this object to another.                        |
| `Duplicate`                | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`  | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`      | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`           | Get a property by its unique name.                                                |
| `PropertyByAPIName`        | Get a property by its API name.                                                   |
| `CreateParameter`          | Creates a new parameter for a Property.                                           |
| `GetParameter`             | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`          | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------|------------------------------------------------------------------------|
| `InternalObject`                                   | InternalObject property.                                               |
| `NumberOfSteps`                                    | Gets or sets the NumberOfSteps.                                        |
| `CurrentStepNumber`                                | Gets or sets the CurrentStepNumber.                                    |
| `TimeIntegrationType`                              | Gets or sets the Integration Method.                                   |
| `PositionCorrection`                               | Gets or sets the PositionCorrection.                                   |
| `VelocityCorrection`                               | Gets or sets the VelocityCorrection.                                   |
| `CorrectionType`                                   | Gets or sets the CorrectionType.                                       |
| `AssemblyType`                                     | Gets or sets the AssemblyType.                                         |
| `DropoffTolerance`                                 | Gets or sets the DropoffTolerance.                                     |
| `RelativeAssemblyTolerance`                        | Gets or sets the RelativeAssemblyTolerance activity.                   |
| `RelativeAssemblyToleranceValue`                   | Gets or sets the RelativeAssemblyToleranceValue.                       |
| `EnergyAccuracyTolerance`                          | Gets or sets the EnergyAccuracyTolerance activity.                     |
| `EnergyAccuracyToleranceValue`                     | Gets or sets the EnergyAccuracyToleranceValue.                         |
| `NumericalDampingTolerance`                        | Gets or sets the NumericalDamping activity.                            |
| `NumericalDampingValue`                            | Gets or sets the NumericalDampingValue.                                |
| `ForceResidualTolerance`                           | Gets or sets the ForceResidualTolerance activity.                      |
| `ForceResidualToleranceValue`                      | Gets or sets the ForceResidualToleranceValue.                          |
| `ConstraintEquationResidualTolerance`              | Gets or sets the ConstraintEquationResidualTolerance activity.         |
| `ConstraintEquationResidualToleranceValue`         | Gets or sets the ConstraintEquationResidualToleranceValue.             |
| `VelocityConstraintEquationResidualTolerance`      | Gets or sets the VelocityConstraintEquationResidualTolerance activity. |
| `VelocityConstraintEquationResidualToleranceValue` | Gets or sets the ConstraintEquationResidualToleranceValue.             |
| `PerformStaticAnalysis`                            | Gets or sets the .                                                     |
| `Graph`                                            | Graph property.                                                        |
| `InternalObject`                                   | Gets the internal object. For advanced usage only.                     |
| `ScratchSolverFilesDirectory`                      | Gets the ScratchSolverFilesDirectory.                                  |
| `SolverFilesDirectory`                             | Gets the SolverFilesDirectory.                                         |
| `DataModelObjectCategory`                          | Gets the current DataModelObject's category.                           |
| `Children`                                         | Gets the list of children.                                             |
| `Comments`                                         | Gets the list of associated comments.                                  |
| `Figures`                                          | Gets the list of associated figures.                                   |
| `Images`                                           | Gets the list of associated images.                                    |
| `Properties`                                       | Gets the list of properties for this object.                           |
| `VisibleProperties`                                | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

### *property* RBDAnalysisSettings.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

InternalObject property.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.NumberOfSteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSteps.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.CurrentStepNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.TimeIntegrationType *: [Ansys.Mechanical.DataModel.Enums.RBDTimeIntegrationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDTimeIntegrationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDTimeIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Integration Method.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.PositionCorrection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PositionCorrection.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.VelocityCorrection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityCorrection.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.CorrectionType *: [Ansys.Mechanical.DataModel.Enums.RBDCorrectionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDCorrectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDCorrectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CorrectionType.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.AssemblyType *: [Ansys.Mechanical.DataModel.Enums.RBDCorrectionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDCorrectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDCorrectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AssemblyType.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.DropoffTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DropoffTolerance.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.RelativeAssemblyTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelativeAssemblyTolerance activity.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.RelativeAssemblyToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelativeAssemblyToleranceValue.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.EnergyAccuracyTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyAccuracyTolerance activity.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.EnergyAccuracyToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyAccuracyToleranceValue.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.NumericalDampingTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDamping activity.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.NumericalDampingValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDampingValue.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.ForceResidualTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceResidualTolerance activity.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.ForceResidualToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceResidualToleranceValue.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.ConstraintEquationResidualTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintEquationResidualTolerance activity.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.ConstraintEquationResidualToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintEquationResidualToleranceValue.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.VelocityConstraintEquationResidualTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDProgramControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityConstraintEquationResidualTolerance activity.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.VelocityConstraintEquationResidualToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintEquationResidualToleranceValue.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.PerformStaticAnalysis *: [Ansys.Mechanical.DataModel.Enums.RBDDoStaticAnalysisType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RBDDoStaticAnalysisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RBDDoStaticAnalysisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the .

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../../../v241/Ansys/Mechanical/Graphics/AnalysisSettingsGraph.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisSettings | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.ScratchSolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### RBDAnalysisSettings.GetStepEndTime(stepNumber: System.Int32)

Gets the Step End Time at a given solution step.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.SetStepEndTime(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the Step End Time for a given solution step.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.GetAutomaticTimeStepping(stepNumber: System.Int32)

Gets the Automatic Time Stepping at a given solution step.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.SetAutomaticTimeStepping(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AutomaticTimeStepping.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping))

Sets the Automatic Time Stepping for a given solution step.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.GetCarryOverTimeStep(stepNumber: System.Int32)

Gets the Carry Over Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.SetCarryOverTimeStep(stepNumber: System.Int32, value: System.Boolean)

Sets the Carry Over Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.GetInitialTimeStep(stepNumber: System.Int32)

Gets the Initial Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.SetInitialTimeStep(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the Initial Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.GetMinimumTimeStep(stepNumber: System.Int32)

Gets the Minimum Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.SetMinimumTimeStep(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the Minimum Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.GetMaximumTimeStep(stepNumber: System.Int32)

Gets the Maximum Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.SetMaximumTimeStep(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the Maximum Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.GetTimeStep(stepNumber: System.Int32)

Gets the (fixed) Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.SetTimeStep(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the (fixed) Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.GetStoreResultAt(stepNumber: System.Int32)

Gets the StoreResultAt setting at a given solution step.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.SetStoreResultAt(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TimePointsOptions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimePointsOptions))

Sets the StoreResultAt setting for a given solution step.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.GetStoreResultAtValue(stepNumber: System.Int32)

Gets the StoreResultAtValue setting at a given solution step.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.SetStoreResultAtValue(stepNumber: System.Int32, value: System.Int32)

Sets the StoreResultAtValue setting for a given solution step.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.DeleteAllRestartPoints()

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

