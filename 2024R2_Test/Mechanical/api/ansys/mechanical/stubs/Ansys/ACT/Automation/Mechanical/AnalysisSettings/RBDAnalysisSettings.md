# RBDAnalysisSettings

### *class* RBDAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> RBDAnalysisSettings class.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetStepEndTime`](#RBDAnalysisSettings.GetStepEndTime)                     | Gets the Step End Time at a given solution step.                                  |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`InternalObject`](#id0)                                                                                                    | InternalObject property.                                               |
|-----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
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
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)      | Gets the current DataModelObject’s category.                           |
| [`Children`](#RBDAnalysisSettings.Children)                                                                                 | Gets the list of children.                                             |
| [`Comments`](#RBDAnalysisSettings.Comments)                                                                                 | Gets the list of associated comments.                                  |
| [`Figures`](#RBDAnalysisSettings.Figures)                                                                                   | Gets the list of associated figures.                                   |
| [`Images`](#RBDAnalysisSettings.Images)                                                                                     | Gets the list of associated images.                                    |
| [`Properties`](#RBDAnalysisSettings.Properties)                                                                             | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#RBDAnalysisSettings.VisibleProperties)                                                               | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AnalysisSettings import RBDAnalysisSettings
```

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

### *property* RBDAnalysisSettings.TimeIntegrationType *: [Ansys.Mechanical.DataModel.Enums.RBDTimeIntegrationType](../../../../Mechanical/DataModel/Enums/RBDTimeIntegrationType.md#RBDTimeIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Integration Method.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.PositionCorrection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PositionCorrection.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.VelocityCorrection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityCorrection.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.CorrectionType *: [Ansys.Mechanical.DataModel.Enums.RBDCorrectionType](../../../../Mechanical/DataModel/Enums/RBDCorrectionType.md#RBDCorrectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CorrectionType.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.AssemblyType *: [Ansys.Mechanical.DataModel.Enums.RBDCorrectionType](../../../../Mechanical/DataModel/Enums/RBDCorrectionType.md#RBDCorrectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AssemblyType.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.DropoffTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DropoffTolerance.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.RelativeAssemblyTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelativeAssemblyTolerance activity.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.RelativeAssemblyToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelativeAssemblyToleranceValue.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.EnergyAccuracyTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyAccuracyTolerance activity.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.EnergyAccuracyToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyAccuracyToleranceValue.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.NumericalDampingTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDamping activity.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.NumericalDampingValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDampingValue.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.ForceResidualTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceResidualTolerance activity.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.ForceResidualToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceResidualToleranceValue.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.ConstraintEquationResidualTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintEquationResidualTolerance activity.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.ConstraintEquationResidualToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintEquationResidualToleranceValue.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.VelocityConstraintEquationResidualTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityConstraintEquationResidualTolerance activity.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.VelocityConstraintEquationResidualToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintEquationResidualToleranceValue.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.PerformStaticAnalysis *: [Ansys.Mechanical.DataModel.Enums.RBDDoStaticAnalysisType](../../../../Mechanical/DataModel/Enums/RBDDoStaticAnalysisType.md#RBDDoStaticAnalysisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the .

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* RBDAnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* RBDAnalysisSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

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

### RBDAnalysisSettings.SetAutomaticTimeStepping(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#AutomaticTimeStepping))

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

### RBDAnalysisSettings.SetStoreResultAt(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../Mechanical/DataModel/Enums/TimePointsOptions.md#TimePointsOptions))

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

### RBDAnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### RBDAnalysisSettings.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

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

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

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
