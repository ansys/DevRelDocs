# `TopoOptAnalysisSettings`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisSettings.TopoOptAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TopoOptAnalysisSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`DeleteAllRestartPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.DeleteAllRestartPoints)   | DeleteAllRestartPoints method.                                                    |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ExportDesignProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.ExportDesignProperties)                     | Gets or sets the ExportDesignProperties.                      |
| [`ExportDesignPropertiesFileFormat`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.ExportDesignPropertiesFileFormat) | Gets or sets the ExportDesignPropertiesFileFormat.            |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#id0)                                                                        | Gets the internal object. For advanced usage only.            |
| [`ConvergenceAccuracy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.ConvergenceAccuracy)                           | Gets or sets the ConvergenceAccuracy.                         |
| [`TopoOptInitialDensity`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.TopoOptInitialDensity)                       | Gets or sets the TopoOptInitialDensity.                       |
| [`MaxNumOfIntermediateFiles`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.MaxNumOfIntermediateFiles)               | Gets or sets the MaxNumOfIntermediateFiles.                   |
| [`MaximumNumberOfIterations`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.MaximumNumberOfIterations)               | Gets or sets the MaximumNumberOfIterations.                   |
| [`MinimumNormalizedDensity`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.MinimumNormalizedDensity)                 | Gets or sets the MinimumNormalizedDensity.                    |
| [`StoreResultsAtValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.StoreResultsAtValue)                           | Gets or sets the StoreResultsAtValue.                         |
| [`PenaltyFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.PenaltyFactor)                                       | Gets or sets the PenaltyFactor.                               |
| [`Algorithm`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.Algorithm)                                               | Gets or sets the Algorithm.                                   |
| [`StoreResultsAt`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.StoreResultsAt)                                     | Gets or sets the StoreResultsAt.                              |
| [`FutureAnalysis`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.FutureAnalysis)                                     | Gets or sets the FutureAnalysis.                              |
| [`MultiOptimTypeStrategy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.MultiOptimTypeStrategy)                     | Gets or sets the MultiOptimTypeStrategy.                      |
| [`OptimizationOutputLog`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.OptimizationOutputLog)                       | Gets or sets the OptimizationOutputLog.                       |
| [`RegionOfAMOverhangConstraint`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.RegionOfAMOverhangConstraint)         | Gets or sets the RegionOfAMOverhangConstraint.                |
| [`RegionOfManufacturingConstraint`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.RegionOfManufacturingConstraint)   | Gets or sets the RegionOfManufacturingConstraint.             |
| [`RegionOfMinMemberSize`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.RegionOfMinMemberSize)                       | Gets or sets the RegionOfMinMemberSize.                       |
| [`SolverUnitSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.SolverUnitSystem)                                 | Gets or sets the SolverUnitSystem.                            |
| [`SolverType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.SolverType)                                             | Gets or sets the SolverType.                                  |
| [`SolverUnits`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.SolverUnits)                                           | Gets or sets the SolverUnits.                                 |
| [`Filter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.Filter)                                                     | Gets or sets the Filter.                                      |
| [`DeleteUnneededFiles`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.DeleteUnneededFiles)                           | Gets or sets the DeleteUnneededFiles.                         |
| [`ExportKnockdownFilePath`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.ExportKnockdownFilePath)                   | Gets or sets the ExportKnockdownFilePath.                     |
| [`SaveMAPDLDB`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.SaveMAPDLDB)                                           | Gets or sets the SaveMAPDLDB.                                 |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.DataModelObjectCategory)                   | Gets the current DataModelObjectâ€™s category.                  |
| [`Graph`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.Graph)                                                       | Graph property.                                               |
| [`ScratchSolverFilesDirectory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.ScratchSolverFilesDirectory)           | Gets the ScratchSolverFilesDirectory.                         |
| [`SolverFilesDirectory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.SolverFilesDirectory)                         | Gets the SolverFilesDirectory.                                |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.Children)                                                 | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.Comments)                                                 | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.Figures)                                                   | Gets the list of associated figures.                          |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.Images)                                                     | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#id0)                                                                        | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.Properties)                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/TopoOptAnalysisSettings.md#TopoOptAnalysisSettings.VisibleProperties)                               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TopoOptAnalysisSettings.ExportDesignProperties"></a>

### *property* TopoOptAnalysisSettings.ExportDesignProperties *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationExportDesignProperties](../../../../Mechanical/DataModel/Enums/TopoOptimizationExportDesignProperties.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TopoOptimizationExportDesignProperties) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportDesignProperties.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.ExportDesignPropertiesFileFormat"></a>

### *property* TopoOptAnalysisSettings.ExportDesignPropertiesFileFormat *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationExportDesignPropertiesFileFormat](../../../../Mechanical/DataModel/Enums/TopoOptimizationExportDesignPropertiesFileFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TopoOptimizationExportDesignPropertiesFileFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportDesignPropertiesFileFormat.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.InternalObject"></a>

### *property* TopoOptAnalysisSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisSettings | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.ConvergenceAccuracy"></a>

### *property* TopoOptAnalysisSettings.ConvergenceAccuracy *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConvergenceAccuracy.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.TopoOptInitialDensity"></a>

### *property* TopoOptAnalysisSettings.TopoOptInitialDensity *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopoOptInitialDensity.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.MaxNumOfIntermediateFiles"></a>

### *property* TopoOptAnalysisSettings.MaxNumOfIntermediateFiles *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxNumOfIntermediateFiles.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.MaximumNumberOfIterations"></a>

### *property* TopoOptAnalysisSettings.MaximumNumberOfIterations *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumNumberOfIterations.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.MinimumNormalizedDensity"></a>

### *property* TopoOptAnalysisSettings.MinimumNormalizedDensity *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumNormalizedDensity.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.StoreResultsAtValue"></a>

### *property* TopoOptAnalysisSettings.StoreResultsAtValue *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAtValue.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.PenaltyFactor"></a>

### *property* TopoOptAnalysisSettings.PenaltyFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenaltyFactor.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Algorithm"></a>

### *property* TopoOptAnalysisSettings.Algorithm *: [Ansys.Mechanical.DataModel.Enums.AlgorithmType](../../../../Mechanical/DataModel/Enums/AlgorithmType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AlgorithmType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Algorithm.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.StoreResultsAt"></a>

### *property* TopoOptAnalysisSettings.StoreResultsAt *: [Ansys.Mechanical.DataModel.Enums.IterationOptions](../../../../Mechanical/DataModel/Enums/IterationOptions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.IterationOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAt.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.FutureAnalysis"></a>

### *property* TopoOptAnalysisSettings.FutureAnalysis *: [Ansys.Mechanical.DataModel.Enums.FutureIntentType](../../../../Mechanical/DataModel/Enums/FutureIntentType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FutureIntentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FutureAnalysis.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.MultiOptimTypeStrategy"></a>

### *property* TopoOptAnalysisSettings.MultiOptimTypeStrategy *: [Ansys.Mechanical.DataModel.Enums.MultiOptimTypeStrategyType](../../../../Mechanical/DataModel/Enums/MultiOptimTypeStrategyType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MultiOptimTypeStrategyType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiOptimTypeStrategy.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.OptimizationOutputLog"></a>

### *property* TopoOptAnalysisSettings.OptimizationOutputLog *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationOutputLog](../../../../Mechanical/DataModel/Enums/TopoOptimizationOutputLog.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TopoOptimizationOutputLog) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OptimizationOutputLog.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.RegionOfAMOverhangConstraint"></a>

### *property* TopoOptAnalysisSettings.RegionOfAMOverhangConstraint *: [Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType](../../../../Mechanical/DataModel/Enums/ExclusionParticipantType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RegionOfAMOverhangConstraint.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.RegionOfManufacturingConstraint"></a>

### *property* TopoOptAnalysisSettings.RegionOfManufacturingConstraint *: [Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType](../../../../Mechanical/DataModel/Enums/ExclusionParticipantType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RegionOfManufacturingConstraint.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.RegionOfMinMemberSize"></a>

### *property* TopoOptAnalysisSettings.RegionOfMinMemberSize *: [Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType](../../../../Mechanical/DataModel/Enums/ExclusionParticipantType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RegionOfMinMemberSize.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.SolverUnitSystem"></a>

### *property* TopoOptAnalysisSettings.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.SolverType"></a>

### *property* TopoOptAnalysisSettings.SolverType *: [Ansys.Mechanical.DataModel.Enums.OptimizationSolverType](../../../../Mechanical/DataModel/Enums/OptimizationSolverType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.OptimizationSolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverType.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.SolverUnits"></a>

### *property* TopoOptAnalysisSettings.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Filter"></a>

### *property* TopoOptAnalysisSettings.Filter *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationDensityFilter](../../../../Mechanical/DataModel/Enums/TopoOptimizationDensityFilter.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TopoOptimizationDensityFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Filter.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.DeleteUnneededFiles"></a>

### *property* TopoOptAnalysisSettings.DeleteUnneededFiles *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeleteUnneededFiles.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.ExportKnockdownFilePath"></a>

### *property* TopoOptAnalysisSettings.ExportKnockdownFilePath *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportKnockdownFilePath.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.SaveMAPDLDB"></a>

### *property* TopoOptAnalysisSettings.SaveMAPDLDB *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveMAPDLDB.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.DataModelObjectCategory"></a>

### *property* TopoOptAnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Graph"></a>

### *property* TopoOptAnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.ScratchSolverFilesDirectory"></a>

### *property* TopoOptAnalysisSettings.ScratchSolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.SolverFilesDirectory"></a>

### *property* TopoOptAnalysisSettings.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Children"></a>

### *property* TopoOptAnalysisSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Comments"></a>

### *property* TopoOptAnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Figures"></a>

### *property* TopoOptAnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Images"></a>

### *property* TopoOptAnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* TopoOptAnalysisSettings.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Properties"></a>

### *property* TopoOptAnalysisSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.VisibleProperties"></a>

### *property* TopoOptAnalysisSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TopoOptAnalysisSettings.DeleteAllRestartPoints"></a>

### TopoOptAnalysisSettings.DeleteAllRestartPoints()

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetChildren"></a>

### TopoOptAnalysisSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### TopoOptAnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.AddComment"></a>

### TopoOptAnalysisSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.AddFigure"></a>

### TopoOptAnalysisSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.AddImage"></a>

### TopoOptAnalysisSettings.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Activate"></a>

### TopoOptAnalysisSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.CopyTo"></a>

### TopoOptAnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Duplicate"></a>

### TopoOptAnalysisSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GroupAllSimilarChildren"></a>

### TopoOptAnalysisSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GroupSimilarObjects"></a>

### TopoOptAnalysisSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.PropertyByName"></a>

### TopoOptAnalysisSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.PropertyByAPIName"></a>

### TopoOptAnalysisSettings.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.CreateParameter"></a>

### TopoOptAnalysisSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetParameter"></a>

### TopoOptAnalysisSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.RemoveParameter"></a>

### TopoOptAnalysisSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

