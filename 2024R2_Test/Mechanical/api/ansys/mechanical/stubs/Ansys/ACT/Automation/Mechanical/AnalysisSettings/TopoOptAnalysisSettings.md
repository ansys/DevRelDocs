# TopoOptAnalysisSettings

### *class* TopoOptAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TopoOptAnalysisSettings.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`DeleteAllRestartPoints`](#TopoOptAnalysisSettings.DeleteAllRestartPoints)   | DeleteAllRestartPoints method.                                                    |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#TopoOptAnalysisSettings.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#TopoOptAnalysisSettings.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TopoOptAnalysisSettings.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#TopoOptAnalysisSettings.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#TopoOptAnalysisSettings.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#TopoOptAnalysisSettings.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#TopoOptAnalysisSettings.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TopoOptAnalysisSettings.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#TopoOptAnalysisSettings.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#TopoOptAnalysisSettings.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#TopoOptAnalysisSettings.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#TopoOptAnalysisSettings.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#TopoOptAnalysisSettings.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ExportDesignProperties`](#TopoOptAnalysisSettings.ExportDesignProperties)                                            | Gets or sets the ExportDesignProperties.                      |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ExportDesignPropertiesFileFormat`](#TopoOptAnalysisSettings.ExportDesignPropertiesFileFormat)                        | Gets or sets the ExportDesignPropertiesFileFormat.            |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`ConvergenceAccuracy`](#TopoOptAnalysisSettings.ConvergenceAccuracy)                                                  | Gets or sets the ConvergenceAccuracy.                         |
| [`TopoOptInitialDensity`](#TopoOptAnalysisSettings.TopoOptInitialDensity)                                              | Gets or sets the TopoOptInitialDensity.                       |
| [`MaxNumOfIntermediateFiles`](#TopoOptAnalysisSettings.MaxNumOfIntermediateFiles)                                      | Gets or sets the MaxNumOfIntermediateFiles.                   |
| [`MaximumNumberOfIterations`](#TopoOptAnalysisSettings.MaximumNumberOfIterations)                                      | Gets or sets the MaximumNumberOfIterations.                   |
| [`MinimumNormalizedDensity`](#TopoOptAnalysisSettings.MinimumNormalizedDensity)                                        | Gets or sets the MinimumNormalizedDensity.                    |
| [`StoreResultsAtValue`](#TopoOptAnalysisSettings.StoreResultsAtValue)                                                  | Gets or sets the StoreResultsAtValue.                         |
| [`PenaltyFactor`](#TopoOptAnalysisSettings.PenaltyFactor)                                                              | Gets or sets the PenaltyFactor.                               |
| [`Algorithm`](#TopoOptAnalysisSettings.Algorithm)                                                                      | Gets or sets the Algorithm.                                   |
| [`StoreResultsAt`](#TopoOptAnalysisSettings.StoreResultsAt)                                                            | Gets or sets the StoreResultsAt.                              |
| [`FutureAnalysis`](#TopoOptAnalysisSettings.FutureAnalysis)                                                            | Gets or sets the FutureAnalysis.                              |
| [`MultiOptimTypeStrategy`](#TopoOptAnalysisSettings.MultiOptimTypeStrategy)                                            | Gets or sets the MultiOptimTypeStrategy.                      |
| [`OptimizationOutputLog`](#TopoOptAnalysisSettings.OptimizationOutputLog)                                              | Gets or sets the OptimizationOutputLog.                       |
| [`RegionOfAMOverhangConstraint`](#TopoOptAnalysisSettings.RegionOfAMOverhangConstraint)                                | Gets or sets the RegionOfAMOverhangConstraint.                |
| [`RegionOfManufacturingConstraint`](#TopoOptAnalysisSettings.RegionOfManufacturingConstraint)                          | Gets or sets the RegionOfManufacturingConstraint.             |
| [`RegionOfMinMemberSize`](#TopoOptAnalysisSettings.RegionOfMinMemberSize)                                              | Gets or sets the RegionOfMinMemberSize.                       |
| [`SolverUnitSystem`](#TopoOptAnalysisSettings.SolverUnitSystem)                                                        | Gets or sets the SolverUnitSystem.                            |
| [`SolverType`](../../../../Mechanical/DataModel/Enums/SolverType.md#SolverType)                                        | Gets or sets the SolverType.                                  |
| [`SolverUnits`](#TopoOptAnalysisSettings.SolverUnits)                                                                  | Gets or sets the SolverUnits.                                 |
| [`Filter`](#TopoOptAnalysisSettings.Filter)                                                                            | Gets or sets the Filter.                                      |
| [`DeleteUnneededFiles`](#TopoOptAnalysisSettings.DeleteUnneededFiles)                                                  | Gets or sets the DeleteUnneededFiles.                         |
| [`ExportKnockdownFilePath`](#TopoOptAnalysisSettings.ExportKnockdownFilePath)                                          | Gets or sets the ExportKnockdownFilePath.                     |
| [`SaveMAPDLDB`](#TopoOptAnalysisSettings.SaveMAPDLDB)                                                                  | Gets or sets the SaveMAPDLDB.                                 |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Graph`](#TopoOptAnalysisSettings.Graph)                                                                              | Graph property.                                               |
| [`ScratchSolverFilesDirectory`](#TopoOptAnalysisSettings.ScratchSolverFilesDirectory)                                  | Gets the ScratchSolverFilesDirectory.                         |
| [`SolverFilesDirectory`](#TopoOptAnalysisSettings.SolverFilesDirectory)                                                | Gets the SolverFilesDirectory.                                |
| [`Children`](#TopoOptAnalysisSettings.Children)                                                                        | Gets the list of children.                                    |
| [`Comments`](#TopoOptAnalysisSettings.Comments)                                                                        | Gets the list of associated comments.                         |
| [`Figures`](#TopoOptAnalysisSettings.Figures)                                                                          | Gets the list of associated figures.                          |
| [`Images`](#TopoOptAnalysisSettings.Images)                                                                            | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#TopoOptAnalysisSettings.Properties)                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#TopoOptAnalysisSettings.VisibleProperties)                                                      | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AnalysisSettings import TopoOptAnalysisSettings
```

## Property detail

### *property* TopoOptAnalysisSettings.ExportDesignProperties *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationExportDesignProperties](../../../../Mechanical/DataModel/Enums/TopoOptimizationExportDesignProperties.md#TopoOptimizationExportDesignProperties) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportDesignProperties.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.ExportDesignPropertiesFileFormat *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationExportDesignPropertiesFileFormat](../../../../Mechanical/DataModel/Enums/TopoOptimizationExportDesignPropertiesFileFormat.md#TopoOptimizationExportDesignPropertiesFileFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportDesignPropertiesFileFormat.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisSettings | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.ConvergenceAccuracy *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConvergenceAccuracy.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.TopoOptInitialDensity *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopoOptInitialDensity.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.MaxNumOfIntermediateFiles *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxNumOfIntermediateFiles.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.MaximumNumberOfIterations *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumNumberOfIterations.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.MinimumNormalizedDensity *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumNormalizedDensity.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.StoreResultsAtValue *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAtValue.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.PenaltyFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenaltyFactor.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.Algorithm *: [Ansys.Mechanical.DataModel.Enums.AlgorithmType](../../../../Mechanical/DataModel/Enums/AlgorithmType.md#AlgorithmType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Algorithm.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.StoreResultsAt *: [Ansys.Mechanical.DataModel.Enums.IterationOptions](../../../../Mechanical/DataModel/Enums/IterationOptions.md#IterationOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAt.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.FutureAnalysis *: [Ansys.Mechanical.DataModel.Enums.FutureIntentType](../../../../Mechanical/DataModel/Enums/FutureIntentType.md#FutureIntentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FutureAnalysis.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.MultiOptimTypeStrategy *: [Ansys.Mechanical.DataModel.Enums.MultiOptimTypeStrategyType](../../../../Mechanical/DataModel/Enums/MultiOptimTypeStrategyType.md#MultiOptimTypeStrategyType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiOptimTypeStrategy.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.OptimizationOutputLog *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationOutputLog](../../../../Mechanical/DataModel/Enums/TopoOptimizationOutputLog.md#TopoOptimizationOutputLog) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OptimizationOutputLog.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.RegionOfAMOverhangConstraint *: [Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType](../../../../Mechanical/DataModel/Enums/ExclusionParticipantType.md#ExclusionParticipantType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RegionOfAMOverhangConstraint.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.RegionOfManufacturingConstraint *: [Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType](../../../../Mechanical/DataModel/Enums/ExclusionParticipantType.md#ExclusionParticipantType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RegionOfManufacturingConstraint.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.RegionOfMinMemberSize *: [Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType](../../../../Mechanical/DataModel/Enums/ExclusionParticipantType.md#ExclusionParticipantType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RegionOfMinMemberSize.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.SolverType *: [Ansys.Mechanical.DataModel.Enums.OptimizationSolverType](../../../../Mechanical/DataModel/Enums/OptimizationSolverType.md#OptimizationSolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverType.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.Filter *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationDensityFilter](../../../../Mechanical/DataModel/Enums/TopoOptimizationDensityFilter.md#TopoOptimizationDensityFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Filter.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.DeleteUnneededFiles *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeleteUnneededFiles.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.ExportKnockdownFilePath *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportKnockdownFilePath.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.SaveMAPDLDB *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveMAPDLDB.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.ScratchSolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* TopoOptAnalysisSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### TopoOptAnalysisSettings.DeleteAllRestartPoints()

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

### TopoOptAnalysisSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### TopoOptAnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### TopoOptAnalysisSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### TopoOptAnalysisSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### TopoOptAnalysisSettings.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### TopoOptAnalysisSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### TopoOptAnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### TopoOptAnalysisSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### TopoOptAnalysisSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### TopoOptAnalysisSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### TopoOptAnalysisSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### TopoOptAnalysisSettings.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### TopoOptAnalysisSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### TopoOptAnalysisSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### TopoOptAnalysisSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
