# `TopoOptAnalysisSettings`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AnalysisSettings.TopoOptAnalysisSettings"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AnalysisSettings.TopoOptAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TopoOptAnalysisSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#TopoOptAnalysisSettings.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#TopoOptAnalysisSettings.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#TopoOptAnalysisSettings.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TopoOptAnalysisSettings.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#TopoOptAnalysisSettings.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#TopoOptAnalysisSettings.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`DeleteAllRestartPoints`](#TopoOptAnalysisSettings.DeleteAllRestartPoints)   | DeleteAllRestartPoints method.                                                    |
| [`Duplicate`](#TopoOptAnalysisSettings.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#TopoOptAnalysisSettings.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#TopoOptAnalysisSettings.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#TopoOptAnalysisSettings.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TopoOptAnalysisSettings.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#TopoOptAnalysisSettings.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#TopoOptAnalysisSettings.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#TopoOptAnalysisSettings.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Algorithm`](#TopoOptAnalysisSettings.Algorithm)                                               | Gets or sets the Algorithm.                                   |
| [`Children`](#TopoOptAnalysisSettings.Children)                                                 | Gets the list of children.                                    |
| [`Comments`](#TopoOptAnalysisSettings.Comments)                                                 | Gets the list of associated comments.                         |
| [`ConvergenceAccuracy`](#TopoOptAnalysisSettings.ConvergenceAccuracy)                           | Gets or sets the ConvergenceAccuracy.                         |
| [`DataModelObjectCategory`](#TopoOptAnalysisSettings.DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                  |
| [`DeleteUnneededFiles`](#TopoOptAnalysisSettings.DeleteUnneededFiles)                           | Gets or sets the DeleteUnneededFiles.                         |
| [`ExportDesignProperties`](#TopoOptAnalysisSettings.ExportDesignProperties)                     | Gets or sets the ExportDesignProperties.                      |
| [`ExportDesignPropertiesFileFormat`](#TopoOptAnalysisSettings.ExportDesignPropertiesFileFormat) | Gets or sets the ExportDesignPropertiesFileFormat.            |
| [`ExportKnockdownFilePath`](#TopoOptAnalysisSettings.ExportKnockdownFilePath)                   | Gets or sets the ExportKnockdownFilePath.                     |
| [`Figures`](#TopoOptAnalysisSettings.Figures)                                                   | Gets the list of associated figures.                          |
| [`Filter`](#TopoOptAnalysisSettings.Filter)                                                     | Gets or sets the Filter.                                      |
| [`FutureAnalysis`](#TopoOptAnalysisSettings.FutureAnalysis)                                     | Gets or sets the FutureAnalysis.                              |
| [`Graph`](#TopoOptAnalysisSettings.Graph)                                                       | Graph property.                                               |
| [`Images`](#TopoOptAnalysisSettings.Images)                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#TopoOptAnalysisSettings.InternalObject)                                     | Gets the internal object. For advanced usage only.            |
| [`MaxNumOfIntermediateFiles`](#TopoOptAnalysisSettings.MaxNumOfIntermediateFiles)               | Gets or sets the MaxNumOfIntermediateFiles.                   |
| [`MaximumNumberOfIterations`](#TopoOptAnalysisSettings.MaximumNumberOfIterations)               | Gets or sets the MaximumNumberOfIterations.                   |
| [`MinimumNormalizedDensity`](#TopoOptAnalysisSettings.MinimumNormalizedDensity)                 | Gets or sets the MinimumNormalizedDensity.                    |
| [`MultiOptimTypeStrategy`](#TopoOptAnalysisSettings.MultiOptimTypeStrategy)                     | Gets or sets the MultiOptimTypeStrategy.                      |
| [`OptimizationOutputLog`](#TopoOptAnalysisSettings.OptimizationOutputLog)                       | Gets or sets the OptimizationOutputLog.                       |
| [`PenaltyFactor`](#TopoOptAnalysisSettings.PenaltyFactor)                                       | Gets or sets the PenaltyFactor.                               |
| [`Properties`](#TopoOptAnalysisSettings.Properties)                                             | Gets the list of properties for this object.                  |
| [`RegionOfAMOverhangConstraint`](#TopoOptAnalysisSettings.RegionOfAMOverhangConstraint)         | Gets or sets the RegionOfAMOverhangConstraint.                |
| [`RegionOfManufacturingConstraint`](#TopoOptAnalysisSettings.RegionOfManufacturingConstraint)   | Gets or sets the RegionOfManufacturingConstraint.             |
| [`RegionOfMinMemberSize`](#TopoOptAnalysisSettings.RegionOfMinMemberSize)                       | Gets or sets the RegionOfMinMemberSize.                       |
| [`SaveMAPDLDB`](#TopoOptAnalysisSettings.SaveMAPDLDB)                                           | Gets or sets the SaveMAPDLDB.                                 |
| [`ScratchSolverFilesDirectory`](#TopoOptAnalysisSettings.ScratchSolverFilesDirectory)           | Gets the ScratchSolverFilesDirectory.                         |
| [`SolverFilesDirectory`](#TopoOptAnalysisSettings.SolverFilesDirectory)                         | Gets the SolverFilesDirectory.                                |
| [`SolverType`](#TopoOptAnalysisSettings.SolverType)                                             | Gets or sets the SolverType.                                  |
| [`SolverUnitSystem`](#TopoOptAnalysisSettings.SolverUnitSystem)                                 | Gets or sets the SolverUnitSystem.                            |
| [`SolverUnits`](#TopoOptAnalysisSettings.SolverUnits)                                           | Gets or sets the SolverUnits.                                 |
| [`StoreResultsAt`](#TopoOptAnalysisSettings.StoreResultsAt)                                     | Gets or sets the StoreResultsAt.                              |
| [`StoreResultsAtValue`](#TopoOptAnalysisSettings.StoreResultsAtValue)                           | Gets or sets the StoreResultsAtValue.                         |
| [`TopoOptInitialDensity`](#TopoOptAnalysisSettings.TopoOptInitialDensity)                       | Gets or sets the TopoOptInitialDensity.                       |
| [`VisibleProperties`](#TopoOptAnalysisSettings.VisibleProperties)                               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TopoOptAnalysisSettings.Algorithm"></a>

### *property* TopoOptAnalysisSettings.Algorithm *: [Ansys.Mechanical.DataModel.Enums.AlgorithmType](../../../../Mechanical/DataModel/Enums/AlgorithmType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.AlgorithmType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Algorithm.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Children"></a>

### *property* TopoOptAnalysisSettings.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Comments"></a>

### *property* TopoOptAnalysisSettings.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.ConvergenceAccuracy"></a>

### *property* TopoOptAnalysisSettings.ConvergenceAccuracy *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConvergenceAccuracy.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.DataModelObjectCategory"></a>

### *property* TopoOptAnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.DeleteUnneededFiles"></a>

### *property* TopoOptAnalysisSettings.DeleteUnneededFiles *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeleteUnneededFiles.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.ExportDesignProperties"></a>

### *property* TopoOptAnalysisSettings.ExportDesignProperties *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationExportDesignProperties](../../../../Mechanical/DataModel/Enums/TopoOptimizationExportDesignProperties.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TopoOptimizationExportDesignProperties) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportDesignProperties.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.ExportDesignPropertiesFileFormat"></a>

### *property* TopoOptAnalysisSettings.ExportDesignPropertiesFileFormat *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationExportDesignPropertiesFileFormat](../../../../Mechanical/DataModel/Enums/TopoOptimizationExportDesignPropertiesFileFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TopoOptimizationExportDesignPropertiesFileFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportDesignPropertiesFileFormat.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.ExportKnockdownFilePath"></a>

### *property* TopoOptAnalysisSettings.ExportKnockdownFilePath *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportKnockdownFilePath.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Figures"></a>

### *property* TopoOptAnalysisSettings.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Filter"></a>

### *property* TopoOptAnalysisSettings.Filter *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationDensityFilter](../../../../Mechanical/DataModel/Enums/TopoOptimizationDensityFilter.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TopoOptimizationDensityFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Filter.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.FutureAnalysis"></a>

### *property* TopoOptAnalysisSettings.FutureAnalysis *: [Ansys.Mechanical.DataModel.Enums.FutureIntentType](../../../../Mechanical/DataModel/Enums/FutureIntentType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FutureIntentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FutureAnalysis.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Graph"></a>

### *property* TopoOptAnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Images"></a>

### *property* TopoOptAnalysisSettings.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.InternalObject"></a>

### *property* TopoOptAnalysisSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisSettings | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.MaxNumOfIntermediateFiles"></a>

### *property* TopoOptAnalysisSettings.MaxNumOfIntermediateFiles *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxNumOfIntermediateFiles.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.MaximumNumberOfIterations"></a>

### *property* TopoOptAnalysisSettings.MaximumNumberOfIterations *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumNumberOfIterations.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.MinimumNormalizedDensity"></a>

### *property* TopoOptAnalysisSettings.MinimumNormalizedDensity *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumNormalizedDensity.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.MultiOptimTypeStrategy"></a>

### *property* TopoOptAnalysisSettings.MultiOptimTypeStrategy *: [Ansys.Mechanical.DataModel.Enums.MultiOptimTypeStrategyType](../../../../Mechanical/DataModel/Enums/MultiOptimTypeStrategyType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MultiOptimTypeStrategyType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiOptimTypeStrategy.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.OptimizationOutputLog"></a>

### *property* TopoOptAnalysisSettings.OptimizationOutputLog *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationOutputLog](../../../../Mechanical/DataModel/Enums/TopoOptimizationOutputLog.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TopoOptimizationOutputLog) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OptimizationOutputLog.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.PenaltyFactor"></a>

### *property* TopoOptAnalysisSettings.PenaltyFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenaltyFactor.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Properties"></a>

### *property* TopoOptAnalysisSettings.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.RegionOfAMOverhangConstraint"></a>

### *property* TopoOptAnalysisSettings.RegionOfAMOverhangConstraint *: [Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType](../../../../Mechanical/DataModel/Enums/ExclusionParticipantType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RegionOfAMOverhangConstraint.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.RegionOfManufacturingConstraint"></a>

### *property* TopoOptAnalysisSettings.RegionOfManufacturingConstraint *: [Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType](../../../../Mechanical/DataModel/Enums/ExclusionParticipantType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RegionOfManufacturingConstraint.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.RegionOfMinMemberSize"></a>

### *property* TopoOptAnalysisSettings.RegionOfMinMemberSize *: [Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType](../../../../Mechanical/DataModel/Enums/ExclusionParticipantType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RegionOfMinMemberSize.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.SaveMAPDLDB"></a>

### *property* TopoOptAnalysisSettings.SaveMAPDLDB *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveMAPDLDB.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.ScratchSolverFilesDirectory"></a>

### *property* TopoOptAnalysisSettings.ScratchSolverFilesDirectory *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.SolverFilesDirectory"></a>

### *property* TopoOptAnalysisSettings.SolverFilesDirectory *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.SolverType"></a>

### *property* TopoOptAnalysisSettings.SolverType *: [Ansys.Mechanical.DataModel.Enums.OptimizationSolverType](../../../../Mechanical/DataModel/Enums/OptimizationSolverType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.OptimizationSolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverType.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.SolverUnitSystem"></a>

### *property* TopoOptAnalysisSettings.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.SolverUnits"></a>

### *property* TopoOptAnalysisSettings.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.StoreResultsAt"></a>

### *property* TopoOptAnalysisSettings.StoreResultsAt *: [Ansys.Mechanical.DataModel.Enums.IterationOptions](../../../../Mechanical/DataModel/Enums/IterationOptions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.IterationOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAt.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.StoreResultsAtValue"></a>

### *property* TopoOptAnalysisSettings.StoreResultsAtValue *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAtValue.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.TopoOptInitialDensity"></a>

### *property* TopoOptAnalysisSettings.TopoOptInitialDensity *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopoOptInitialDensity.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.VisibleProperties"></a>

### *property* TopoOptAnalysisSettings.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TopoOptAnalysisSettings.Activate"></a>

### TopoOptAnalysisSettings.Activate()

Activate the current object.

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

### TopoOptAnalysisSettings.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.CopyTo"></a>

### TopoOptAnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.CreateParameter"></a>

### TopoOptAnalysisSettings.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.DeleteAllRestartPoints"></a>

### TopoOptAnalysisSettings.DeleteAllRestartPoints()

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Duplicate"></a>

### TopoOptAnalysisSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetChildren"></a>

### TopoOptAnalysisSettings.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetParameter"></a>

### TopoOptAnalysisSettings.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GroupAllSimilarChildren"></a>

### TopoOptAnalysisSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GroupSimilarObjects"></a>

### TopoOptAnalysisSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.PropertyByAPIName"></a>

### TopoOptAnalysisSettings.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.PropertyByName"></a>

### TopoOptAnalysisSettings.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.RemoveParameter"></a>

### TopoOptAnalysisSettings.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

