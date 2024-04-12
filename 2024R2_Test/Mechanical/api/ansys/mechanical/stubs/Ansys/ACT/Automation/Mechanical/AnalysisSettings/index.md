<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AnalysisSettings"></a>

<a id="the-analysissettings-package"></a>

# The `AnalysisSettings` package

<a id="summary"></a>

## Summary

### Classes

| [`TopoOptAnalysisSettings`](TopoOptAnalysisSettings.md#TopoOptAnalysisSettings)   | Defines a TopoOptAnalysisSettings.                      |
|-----------------------------------------------------------------------------------|---------------------------------------------------------|
| [`AnalysisSettings`](AnalysisSettings.md#AnalysisSettings)                        | Defines a AnalysisSettings.                             |
| [`ANSYSAnalysisSettings`](ANSYSAnalysisSettings.md#ANSYSAnalysisSettings)         | Defines a ANSYSAnalysisSettings.                        |
| [`EXDAnalysisSettings`](EXDAnalysisSettings.md#EXDAnalysisSettings)               | Defines Analysis Settings for Explicit Dynamics System. |
| [`RBDAnalysisSettings`](RBDAnalysisSettings.md#RBDAnalysisSettings)               | RBDAnalysisSettings class.                              |

<a id="description"></a>

## Description

AnalysisSettings subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="AnalysisSettings.TopoOptAnalysisSettings"></a>

### *class* AnalysisSettings.TopoOptAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TopoOptAnalysisSettings.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`DeleteAllRestartPoints`](#id142)   | DeleteAllRestartPoints method.                                                    |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id144)              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id144)              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id145)               | Creates a new child Comment.                                                      |
| [`AddFigure`](#id146)                | Creates a new child Figure.                                                       |
| [`AddImage`](#id147)                 | Creates a new child Image.                                                        |
| [`Activate`](#id148)                 | Activate the current object.                                                      |
| [`CopyTo`](#id149)                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id150)                | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id151)  | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id152)      | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id153)           | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id154)        | Get a property by its API name.                                                   |
| [`CreateParameter`](#id155)          | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id156)             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id157)          | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ExportDesignProperties`](#AnalysisSettings.ExportDesignProperties)                                                   | Gets or sets the ExportDesignProperties.                      |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ExportDesignPropertiesFileFormat`](#AnalysisSettings.ExportDesignPropertiesFileFormat)                               | Gets or sets the ExportDesignPropertiesFileFormat.            |
| [`InternalObject`](#id117)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`ConvergenceAccuracy`](#AnalysisSettings.ConvergenceAccuracy)                                                         | Gets or sets the ConvergenceAccuracy.                         |
| [`TopoOptInitialDensity`](#AnalysisSettings.TopoOptInitialDensity)                                                     | Gets or sets the TopoOptInitialDensity.                       |
| [`MaxNumOfIntermediateFiles`](#AnalysisSettings.MaxNumOfIntermediateFiles)                                             | Gets or sets the MaxNumOfIntermediateFiles.                   |
| [`MaximumNumberOfIterations`](#AnalysisSettings.MaximumNumberOfIterations)                                             | Gets or sets the MaximumNumberOfIterations.                   |
| [`MinimumNormalizedDensity`](#AnalysisSettings.MinimumNormalizedDensity)                                               | Gets or sets the MinimumNormalizedDensity.                    |
| [`StoreResultsAtValue`](#AnalysisSettings.StoreResultsAtValue)                                                         | Gets or sets the StoreResultsAtValue.                         |
| [`PenaltyFactor`](#AnalysisSettings.PenaltyFactor)                                                                     | Gets or sets the PenaltyFactor.                               |
| [`Algorithm`](#AnalysisSettings.Algorithm)                                                                             | Gets or sets the Algorithm.                                   |
| [`StoreResultsAt`](#id36)                                                                                              | Gets or sets the StoreResultsAt.                              |
| [`FutureAnalysis`](#id37)                                                                                              | Gets or sets the FutureAnalysis.                              |
| [`MultiOptimTypeStrategy`](#AnalysisSettings.MultiOptimTypeStrategy)                                                   | Gets or sets the MultiOptimTypeStrategy.                      |
| [`OptimizationOutputLog`](#AnalysisSettings.OptimizationOutputLog)                                                     | Gets or sets the OptimizationOutputLog.                       |
| [`RegionOfAMOverhangConstraint`](#AnalysisSettings.RegionOfAMOverhangConstraint)                                       | Gets or sets the RegionOfAMOverhangConstraint.                |
| [`RegionOfManufacturingConstraint`](#AnalysisSettings.RegionOfManufacturingConstraint)                                 | Gets or sets the RegionOfManufacturingConstraint.             |
| [`RegionOfMinMemberSize`](#AnalysisSettings.RegionOfMinMemberSize)                                                     | Gets or sets the RegionOfMinMemberSize.                       |
| [`SolverUnitSystem`](#id38)                                                                                            | Gets or sets the SolverUnitSystem.                            |
| [`SolverType`](../../../../Mechanical/DataModel/Enums/SolverType.md#SolverType)                                        | Gets or sets the SolverType.                                  |
| [`SolverUnits`](#id40)                                                                                                 | Gets or sets the SolverUnits.                                 |
| [`Filter`](#AnalysisSettings.Filter)                                                                                   | Gets or sets the Filter.                                      |
| [`DeleteUnneededFiles`](#id41)                                                                                         | Gets or sets the DeleteUnneededFiles.                         |
| [`ExportKnockdownFilePath`](#AnalysisSettings.ExportKnockdownFilePath)                                                 | Gets or sets the ExportKnockdownFilePath.                     |
| [`SaveMAPDLDB`](#id42)                                                                                                 | Gets or sets the SaveMAPDLDB.                                 |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Graph`](#id116)                                                                                                      | Graph property.                                               |
| [`ScratchSolverFilesDirectory`](#id118)                                                                                | Gets the ScratchSolverFilesDirectory.                         |
| [`SolverFilesDirectory`](#id119)                                                                                       | Gets the SolverFilesDirectory.                                |
| [`Children`](#id121)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id122)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id123)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id124)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id117)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id125)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id126)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AnalysisSettings import TopoOptAnalysisSettings
```

<a id="property-detail"></a>

## Property detail

<a id="AnalysisSettings.ExportDesignProperties"></a>

### *property* AnalysisSettings.ExportDesignProperties *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationExportDesignProperties](../../../../Mechanical/DataModel/Enums/TopoOptimizationExportDesignProperties.md#TopoOptimizationExportDesignProperties) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportDesignProperties.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ExportDesignPropertiesFileFormat"></a>

### *property* AnalysisSettings.ExportDesignPropertiesFileFormat *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationExportDesignPropertiesFileFormat](../../../../Mechanical/DataModel/Enums/TopoOptimizationExportDesignPropertiesFileFormat.md#TopoOptimizationExportDesignPropertiesFileFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportDesignPropertiesFileFormat.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.InternalObject"></a>

### *property* AnalysisSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisSettings | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ConvergenceAccuracy"></a>

### *property* AnalysisSettings.ConvergenceAccuracy *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConvergenceAccuracy.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.TopoOptInitialDensity"></a>

### *property* AnalysisSettings.TopoOptInitialDensity *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopoOptInitialDensity.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MaxNumOfIntermediateFiles"></a>

### *property* AnalysisSettings.MaxNumOfIntermediateFiles *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxNumOfIntermediateFiles.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MaximumNumberOfIterations"></a>

### *property* AnalysisSettings.MaximumNumberOfIterations *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumNumberOfIterations.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MinimumNormalizedDensity"></a>

### *property* AnalysisSettings.MinimumNormalizedDensity *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumNormalizedDensity.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.StoreResultsAtValue"></a>

### *property* AnalysisSettings.StoreResultsAtValue *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAtValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.PenaltyFactor"></a>

### *property* AnalysisSettings.PenaltyFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenaltyFactor.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Algorithm"></a>

### *property* AnalysisSettings.Algorithm *: [Ansys.Mechanical.DataModel.Enums.AlgorithmType](../../../../Mechanical/DataModel/Enums/AlgorithmType.md#AlgorithmType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Algorithm.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.StoreResultsAt"></a>

### *property* AnalysisSettings.StoreResultsAt *: [Ansys.Mechanical.DataModel.Enums.IterationOptions](../../../../Mechanical/DataModel/Enums/IterationOptions.md#IterationOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAt.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.FutureAnalysis"></a>

### *property* AnalysisSettings.FutureAnalysis *: [Ansys.Mechanical.DataModel.Enums.FutureIntentType](../../../../Mechanical/DataModel/Enums/FutureIntentType.md#FutureIntentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FutureAnalysis.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MultiOptimTypeStrategy"></a>

### *property* AnalysisSettings.MultiOptimTypeStrategy *: [Ansys.Mechanical.DataModel.Enums.MultiOptimTypeStrategyType](../../../../Mechanical/DataModel/Enums/MultiOptimTypeStrategyType.md#MultiOptimTypeStrategyType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiOptimTypeStrategy.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.OptimizationOutputLog"></a>

### *property* AnalysisSettings.OptimizationOutputLog *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationOutputLog](../../../../Mechanical/DataModel/Enums/TopoOptimizationOutputLog.md#TopoOptimizationOutputLog) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OptimizationOutputLog.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RegionOfAMOverhangConstraint"></a>

### *property* AnalysisSettings.RegionOfAMOverhangConstraint *: [Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType](../../../../Mechanical/DataModel/Enums/ExclusionParticipantType.md#ExclusionParticipantType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RegionOfAMOverhangConstraint.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RegionOfManufacturingConstraint"></a>

### *property* AnalysisSettings.RegionOfManufacturingConstraint *: [Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType](../../../../Mechanical/DataModel/Enums/ExclusionParticipantType.md#ExclusionParticipantType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RegionOfManufacturingConstraint.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RegionOfMinMemberSize"></a>

### *property* AnalysisSettings.RegionOfMinMemberSize *: [Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType](../../../../Mechanical/DataModel/Enums/ExclusionParticipantType.md#ExclusionParticipantType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RegionOfMinMemberSize.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SolverUnitSystem"></a>

### *property* AnalysisSettings.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SolverType"></a>

### *property* AnalysisSettings.SolverType *: [Ansys.Mechanical.DataModel.Enums.OptimizationSolverType](../../../../Mechanical/DataModel/Enums/OptimizationSolverType.md#OptimizationSolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SolverUnits"></a>

### *property* AnalysisSettings.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Filter"></a>

### *property* AnalysisSettings.Filter *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationDensityFilter](../../../../Mechanical/DataModel/Enums/TopoOptimizationDensityFilter.md#TopoOptimizationDensityFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Filter.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.DeleteUnneededFiles"></a>

### *property* AnalysisSettings.DeleteUnneededFiles *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeleteUnneededFiles.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ExportKnockdownFilePath"></a>

### *property* AnalysisSettings.ExportKnockdownFilePath *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportKnockdownFilePath.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SaveMAPDLDB"></a>

### *property* AnalysisSettings.SaveMAPDLDB *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveMAPDLDB.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.DataModelObjectCategory"></a>

### *property* AnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Graph"></a>

### *property* AnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ScratchSolverFilesDirectory"></a>

### *property* AnalysisSettings.ScratchSolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SolverFilesDirectory"></a>

### *property* AnalysisSettings.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Children"></a>

### *property* AnalysisSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Comments"></a>

### *property* AnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Figures"></a>

### *property* AnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Images"></a>

### *property* AnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AnalysisSettings.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Properties"></a>

### *property* AnalysisSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.VisibleProperties"></a>

### *property* AnalysisSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AnalysisSettings.DeleteAllRestartPoints"></a>

### AnalysisSettings.DeleteAllRestartPoints()

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetChildren"></a>

### AnalysisSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AddComment"></a>

### AnalysisSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AddFigure"></a>

### AnalysisSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AddImage"></a>

### AnalysisSettings.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Activate"></a>

### AnalysisSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CopyTo"></a>

### AnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Duplicate"></a>

### AnalysisSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GroupAllSimilarChildren"></a>

### AnalysisSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GroupSimilarObjects"></a>

### AnalysisSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.PropertyByName"></a>

### AnalysisSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.PropertyByAPIName"></a>

### AnalysisSettings.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CreateParameter"></a>

### AnalysisSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetParameter"></a>

### AnalysisSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RemoveParameter"></a>

### AnalysisSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AnalysisSettings"></a>

### *class* AnalysisSettings.AnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AnalysisSettings.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`DeleteAllRestartPoints`](#id142)   | DeleteAllRestartPoints method.                                                    |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id144)              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id144)              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id145)               | Creates a new child Comment.                                                      |
| [`AddFigure`](#id146)                | Creates a new child Figure.                                                       |
| [`AddImage`](#id147)                 | Creates a new child Image.                                                        |
| [`Activate`](#id148)                 | Activate the current object.                                                      |
| [`CopyTo`](#id149)                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id150)                | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id151)  | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id152)      | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id153)           | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id154)        | Get a property by its API name.                                                   |
| [`CreateParameter`](#id155)          | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id156)             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id157)          | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Graph`](#id116)                                                                                                      | Graph property.                                               |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id117)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`ScratchSolverFilesDirectory`](#id118)                                                                                | Gets the ScratchSolverFilesDirectory.                         |
| [`SolverFilesDirectory`](#id119)                                                                                       | Gets the SolverFilesDirectory.                                |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id121)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id122)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id123)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id124)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id117)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id125)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id126)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AnalysisSettings import AnalysisSettings
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* AnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* AnalysisSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisSettings | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* AnalysisSettings.ScratchSolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* AnalysisSettings.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* AnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* AnalysisSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* AnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* AnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* AnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* AnalysisSettings.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* AnalysisSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* AnalysisSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

## Method detail

<a id="id17"></a>

### AnalysisSettings.DeleteAllRestartPoints()

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### AnalysisSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### AnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### AnalysisSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### AnalysisSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### AnalysisSettings.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### AnalysisSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### AnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### AnalysisSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### AnalysisSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### AnalysisSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### AnalysisSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### AnalysisSettings.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### AnalysisSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### AnalysisSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### AnalysisSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ANSYSAnalysisSettings"></a>

### *class* AnalysisSettings.ANSYSAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ANSYSAnalysisSettings.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetStepEndTime`](#id128)                                                                                   | Gets the Step End Time at a given solution step.                                       |
|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`SetStepEndTime`](#id129)                                                                                   | Sets the Step End Time for a given solution step.                                      |
| [`GetAutomaticTimeStepping`](#id130)                                                                         | Gets the Automatic Time Stepping at a given solution step.                             |
| [`SetAutomaticTimeStepping`](#id131)                                                                         | Sets the Automatic Time Stepping for a given solution step.                            |
| [`GetForceConvergenceType`](#AnalysisSettings.GetForceConvergenceType)                                       | Gets the Force Convergence Tolerance Type at a given solution step.                    |
| [`SetForceConvergenceType`](#AnalysisSettings.SetForceConvergenceType)                                       | Sets the Force Convergence Tolerance Type for a given solution step.                   |
| [`GetForceConvergenceTolerance`](#AnalysisSettings.GetForceConvergenceTolerance)                             | Gets the Force Convergence Tolerance as a percentage at a given solution step.         |
| [`SetForceConvergenceTolerance`](#AnalysisSettings.SetForceConvergenceTolerance)                             | Sets the Force Convergence Tolerance as a percentage for a given solution step.        |
| [`GetForceConvergenceValue`](#AnalysisSettings.GetForceConvergenceValue)                                     | Gets the Force Convergence Value at a given solution step.                             |
| [`SetForceConvergenceValue`](#AnalysisSettings.SetForceConvergenceValue)                                     | Sets the Force Convergence Value for a given solution step.                            |
| [`GetForceConvergenceMinimumReference`](#AnalysisSettings.GetForceConvergenceMinimumReference)               | Gets the Force Convergence Minimum Reference at a given solution step.                 |
| [`SetForceConvergenceMinimumReference`](#AnalysisSettings.SetForceConvergenceMinimumReference)               | Sets the Force Convergence Minimum Reference for a given solution step.                |
| [`GetMomentConvergenceType`](#AnalysisSettings.GetMomentConvergenceType)                                     | Gets the Moment Convergence Tolerance type at a given solution step.                   |
| [`SetMomentConvergenceType`](#AnalysisSettings.SetMomentConvergenceType)                                     | Sets the Moment Convergence Tolerance type for a given solution step.                  |
| [`GetMomentConvergenceTolerance`](#AnalysisSettings.GetMomentConvergenceTolerance)                           | Gets the Moment Convergence Tolerance as a percentage at a given solution step.        |
| [`SetMomentConvergenceTolerance`](#AnalysisSettings.SetMomentConvergenceTolerance)                           | Sets the Moment Convergence Tolerance as a percentage for a given solution step.       |
| [`GetMomentConvergenceValue`](#AnalysisSettings.GetMomentConvergenceValue)                                   | Gets the Moment Convergence Value at a given solution step.                            |
| [`SetMomentConvergenceValue`](#AnalysisSettings.SetMomentConvergenceValue)                                   | Sets the Moment Convergence Value for a given solution step.                           |
| [`GetMomentConvergenceMinimumReference`](#AnalysisSettings.GetMomentConvergenceMinimumReference)             | Gets the Moment Convergence Minimum Reference at a given solution step.                |
| [`SetMomentConvergenceMinimumReference`](#AnalysisSettings.SetMomentConvergenceMinimumReference)             | Sets the Moment Convergence Minimum Reference for a given solution step.               |
| [`GetDisplacementConvergenceType`](#AnalysisSettings.GetDisplacementConvergenceType)                         | Gets the Displacement Convergence Tolerance type at a given solution step.             |
| [`SetDisplacementConvergenceType`](#AnalysisSettings.SetDisplacementConvergenceType)                         | Sets the Displacement Convergence Tolerance type for a given solution step.            |
| [`GetDisplacementConvergenceTolerance`](#AnalysisSettings.GetDisplacementConvergenceTolerance)               | Gets the Displacement Convergence Tolerance as a percentage at a given solution step.  |
| [`SetDisplacementConvergenceTolerance`](#AnalysisSettings.SetDisplacementConvergenceTolerance)               | Sets the Displacement Convergence Tolerance as a percentage for a given solution step. |
| [`GetDisplacementConvergenceValue`](#AnalysisSettings.GetDisplacementConvergenceValue)                       | Gets the Displacement Convergence Value at a given solution step.                      |
| [`SetDisplacementConvergenceValue`](#AnalysisSettings.SetDisplacementConvergenceValue)                       | Sets the Displacement Convergence Value for a given solution step.                     |
| [`GetDisplacementConvergenceMinimumReference`](#AnalysisSettings.GetDisplacementConvergenceMinimumReference) | Gets the Displacement Convergence Minimum Reference at a given solution step.          |
| [`SetDisplacementConvergenceMinimumReference`](#AnalysisSettings.SetDisplacementConvergenceMinimumReference) | Sets the Displacement Convergence Minimum Reference for a given solution step.         |
| [`GetRotationConvergenceType`](#AnalysisSettings.GetRotationConvergenceType)                                 | Gets the Rotation Convergence Tolerance type at a given solution step.                 |
| [`SetRotationConvergenceType`](#AnalysisSettings.SetRotationConvergenceType)                                 | Sets the Rotation Convergence Tolerance type for a given solution step.                |
| [`GetRotationConvergenceTolerance`](#AnalysisSettings.GetRotationConvergenceTolerance)                       | Gets the Rotation Convergence Tolerance as a percentage at a given solution step.      |
| [`SetRotationConvergenceTolerance`](#AnalysisSettings.SetRotationConvergenceTolerance)                       | Sets the Rotation Convergence Tolerance as a percentage for a given solution step.     |
| [`GetRotationConvergenceValue`](#AnalysisSettings.GetRotationConvergenceValue)                               | Gets the Rotation Convergence Value at a given solution step.                          |
| [`SetRotationConvergenceValue`](#AnalysisSettings.SetRotationConvergenceValue)                               | Sets the Rotation Convergence Value for a given solution step.                         |
| [`GetRotationConvergenceMinimumReference`](#AnalysisSettings.GetRotationConvergenceMinimumReference)         | Gets the Rotation Convergence Minimum Reference at a given solution step.              |
| [`SetRotationConvergenceMinimumReference`](#AnalysisSettings.SetRotationConvergenceMinimumReference)         | Sets the Rotation Convergence Minimum Reference for a given solution step.             |
| [`SetTemperatureConvergenceType`](#AnalysisSettings.SetTemperatureConvergenceType)                           | Sets the Temperature Convergence Tolerance type for a given solution step.             |
| [`SetTemperatureConvergenceTolerance`](#AnalysisSettings.SetTemperatureConvergenceTolerance)                 | Sets the Temperature Convergence Tolerance as a percentage for a given solution step.  |
| [`SetTemperatureConvergenceValue`](#AnalysisSettings.SetTemperatureConvergenceValue)                         | Sets the Temperature Convergence Value for a given solution step.                      |
| [`SetTemperatureConvergenceInputValue`](#AnalysisSettings.SetTemperatureConvergenceInputValue)               | Sets the Temperature Convergence Input Value for a given solution step.                |
| [`SetTemperatureConvergenceMinimumReference`](#AnalysisSettings.SetTemperatureConvergenceMinimumReference)   | Sets the Temperature Convergence Minimum Reference for a given solution step.          |
| [`SetHeatConvergenceType`](#AnalysisSettings.SetHeatConvergenceType)                                         | Sets the Heat Convergence Tolerance type for a given solution step.                    |
| [`SetHeatConvergenceTolerance`](#AnalysisSettings.SetHeatConvergenceTolerance)                               | Sets the Heat Convergence Tolerance as a percentage for a given solution step.         |
| [`SetHeatConvergenceValue`](#AnalysisSettings.SetHeatConvergenceValue)                                       | Sets the Heat Convergence Value for a given solution step.                             |
| [`SetHeatConvergenceMinimumReference`](#AnalysisSettings.SetHeatConvergenceMinimumReference)                 | Sets the Heat Convergence Minimum Reference for a given solution step.                 |
| [`SetVoltageConvergenceType`](#AnalysisSettings.SetVoltageConvergenceType)                                   | Sets the Voltage Convergence Tolerance type for a given solution step.                 |
| [`SetVoltageConvergenceTolerance`](#AnalysisSettings.SetVoltageConvergenceTolerance)                         | Sets the Voltage Convergence Tolerance as a percentage for a given solution step.      |
| [`SetVoltageConvergenceValue`](#AnalysisSettings.SetVoltageConvergenceValue)                                 | Sets the Voltage Convergence Value for a given solution step.                          |
| [`SetVoltageConvergenceMinimumReference`](#AnalysisSettings.SetVoltageConvergenceMinimumReference)           | Sets the Voltage Convergence Minimum Reference for a given solution step.              |
| [`SetChargeConvergenceType`](#AnalysisSettings.SetChargeConvergenceType)                                     | Sets the Charge Convergence Tolerance type for a given solution step.                  |
| [`SetChargeConvergenceTolerance`](#AnalysisSettings.SetChargeConvergenceTolerance)                           | Sets the Charge Convergence Tolerance as a percentage for a given solution step.       |
| [`SetChargeConvergenceValue`](#AnalysisSettings.SetChargeConvergenceValue)                                   | Sets the Charge Convergence Value for a given solution step.                           |
| [`SetChargeConvergenceMinimumReference`](#AnalysisSettings.SetChargeConvergenceMinimumReference)             | Sets the Charge Convergence Minimum Reference for a given solution step.               |
| [`SetEnergyConvergenceType`](#AnalysisSettings.SetEnergyConvergenceType)                                     | Sets the Energy Convergence Tolerance type for a given solution step.                  |
| [`SetEnergyConvergenceTolerance`](#AnalysisSettings.SetEnergyConvergenceTolerance)                           | Sets the Energy Convergence Tolerance as a percentage for a given solution step.       |
| [`SetEnergyConvergenceValue`](#AnalysisSettings.SetEnergyConvergenceValue)                                   | Sets the Energy Convergence Value for a given solution step.                           |
| [`SetEnergyConvergenceMinimumReference`](#AnalysisSettings.SetEnergyConvergenceMinimumReference)             | Sets the Energy Convergence Minimum Reference for a given solution step.               |
| [`SetCurrentConvergenceType`](#AnalysisSettings.SetCurrentConvergenceType)                                   | Sets the Current Convergence Tolerance type for a given solution step.                 |
| [`SetCurrentConvergenceTolerance`](#AnalysisSettings.SetCurrentConvergenceTolerance)                         | Sets the Current Convergence Tolerance as a percentage for a given solution step.      |
| [`SetCurrentConvergenceValue`](#AnalysisSettings.SetCurrentConvergenceValue)                                 | Sets the Current Convergence Value for a given solution step.                          |
| [`SetCurrentConvergenceMinimumReference`](#AnalysisSettings.SetCurrentConvergenceMinimumReference)           | Sets the Current Convergence Minimum Reference for a given solution step.              |
| [`SetEmagAMPSConvergenceType`](#AnalysisSettings.SetEmagAMPSConvergenceType)                                 | Sets the EmagAMPS Convergence Tolerance type for a given solution step.                |
| [`SetEmagAMPSConvergenceTolerance`](#AnalysisSettings.SetEmagAMPSConvergenceTolerance)                       | Sets the EmagAMPS Convergence Tolerance as a percentage for a given solution step.     |
| [`SetEmagAMPSConvergenceValue`](#AnalysisSettings.SetEmagAMPSConvergenceValue)                               | Sets the EmagAMPS Convergence Value for a given solution step.                         |
| [`SetEmagAMPSConvergenceMinimumReference`](#AnalysisSettings.SetEmagAMPSConvergenceMinimumReference)         | Sets the EmagAMPS Convergence Minimum Reference for a given solution step.             |
| [`SetEmagCSGConvergenceType`](#AnalysisSettings.SetEmagCSGConvergenceType)                                   | Sets the EmagCSG Convergence Tolerance type for a given solution step.                 |
| [`SetEmagCSGConvergenceTolerance`](#AnalysisSettings.SetEmagCSGConvergenceTolerance)                         | Sets the EmagCSG Convergence Tolerance as a percentage for a given solution step.      |
| [`SetEmagCSGConvergenceValue`](#AnalysisSettings.SetEmagCSGConvergenceValue)                                 | Sets the EmagCSG Convergence Value for a given solution step.                          |
| [`SetEmagCSGConvergenceMinimumReference`](#AnalysisSettings.SetEmagCSGConvergenceMinimumReference)           | Sets the EmagCSG Convergence Minimum Reference for a given solution step.              |
| [`GetTemperatureConvergenceType`](#AnalysisSettings.GetTemperatureConvergenceType)                           | Gets the Temperature Convergence Tolerance type at a given solution step.              |
| [`GetTemperatureConvergenceTolerance`](#AnalysisSettings.GetTemperatureConvergenceTolerance)                 | Gets the Temperature Convergence Tolerance as a percentage at a given solution step.   |
| [`GetTemperatureConvergenceValue`](#AnalysisSettings.GetTemperatureConvergenceValue)                         | Gets the Temperature Convergence Value at a given solution step.                       |
| [`GetTemperatureConvergenceInputValue`](#AnalysisSettings.GetTemperatureConvergenceInputValue)               | Gets the Temperature Convergence Input Value at a given solution step.                 |
| [`GetTemperatureConvergenceMinimumReference`](#AnalysisSettings.GetTemperatureConvergenceMinimumReference)   | Gets the Temperature Convergence Minimum Reference at a given solution step.           |
| [`GetHeatConvergenceType`](#AnalysisSettings.GetHeatConvergenceType)                                         | Gets the Heat Convergence Tolerance type at a given solution step.                     |
| [`GetHeatConvergenceTolerance`](#AnalysisSettings.GetHeatConvergenceTolerance)                               | Gets the Heat Convergence Tolerance as a percentage at a given solution step.          |
| [`GetHeatConvergenceValue`](#AnalysisSettings.GetHeatConvergenceValue)                                       | Gets the Heat Convergence Value at a given solution step.                              |
| [`GetHeatConvergenceMinimumReference`](#AnalysisSettings.GetHeatConvergenceMinimumReference)                 | Gets the Heat Convergence Minimum Reference at a given solution step.                  |
| [`GetVoltageConvergenceType`](#AnalysisSettings.GetVoltageConvergenceType)                                   | Gets the Voltage Convergence Tolerance type at a given solution step.                  |
| [`GetVoltageConvergenceTolerance`](#AnalysisSettings.GetVoltageConvergenceTolerance)                         | Gets the Voltage Convergence Tolerance as a percentage at a given solution step.       |
| [`GetVoltageConvergenceValue`](#AnalysisSettings.GetVoltageConvergenceValue)                                 | Gets the Voltage Convergence Value at a given solution step.                           |
| [`GetVoltageConvergenceMinimumReference`](#AnalysisSettings.GetVoltageConvergenceMinimumReference)           | Gets the Voltage Convergence Minimum Reference at a given solution step.               |
| [`GetCurrentConvergenceType`](#AnalysisSettings.GetCurrentConvergenceType)                                   | Gets the Current Convergence Tolerance type at a given solution step.                  |
| [`GetCurrentConvergenceTolerance`](#AnalysisSettings.GetCurrentConvergenceTolerance)                         | Gets the Current Convergence Tolerance as a percentage at a given solution step.       |
| [`GetCurrentConvergenceValue`](#AnalysisSettings.GetCurrentConvergenceValue)                                 | Gets the Current Convergence Value at a given solution step.                           |
| [`GetCurrentConvergenceMinimumReference`](#AnalysisSettings.GetCurrentConvergenceMinimumReference)           | Gets the Current Convergence Minimum Reference at a given solution step.               |
| [`GetEmagAMPSConvergenceType`](#AnalysisSettings.GetEmagAMPSConvergenceType)                                 | Gets the EmagAMPS Convergence Tolerance type at a given solution step.                 |
| [`GetEmagAMPSConvergenceTolerance`](#AnalysisSettings.GetEmagAMPSConvergenceTolerance)                       | Gets the EmagAMPS Convergence Tolerance as a percentage at a given solution step.      |
| [`GetEmagAMPSConvergenceValue`](#AnalysisSettings.GetEmagAMPSConvergenceValue)                               | Gets the EmagAMPS Convergence Value at a given solution step.                          |
| [`GetEmagAMPSConvergenceMinimumReference`](#AnalysisSettings.GetEmagAMPSConvergenceMinimumReference)         | Gets the EmagAMPS Convergence Minimum Reference at a given solution step.              |
| [`GetEmagCSGConvergenceType`](#AnalysisSettings.GetEmagCSGConvergenceType)                                   | Gets the EmagCSG Convergence Tolerance type at a given solution step.                  |
| [`GetEmagCSGConvergenceTolerance`](#AnalysisSettings.GetEmagCSGConvergenceTolerance)                         | Gets the EmagCSG Convergence Tolerance as a percentage at a given solution step.       |
| [`GetEmagCSGConvergenceValue`](#AnalysisSettings.GetEmagCSGConvergenceValue)                                 | Gets the EmagCSG Convergence Value at a given solution step.                           |
| [`GetEmagCSGConvergenceMinimumReference`](#AnalysisSettings.GetEmagCSGConvergenceMinimumReference)           | Gets the EmagCSG Convergence Minimum Reference at a given solution step.               |
| [`GetEnergyConvergenceType`](#AnalysisSettings.GetEnergyConvergenceType)                                     | Gets the Energy Convergence Tolerance type at a given solution step.                   |
| [`GetEnergyConvergenceTolerance`](#AnalysisSettings.GetEnergyConvergenceTolerance)                           | Gets the Energy Convergence Tolerance as a percentage at a given solution step.        |
| [`GetEnergyConvergenceValue`](#AnalysisSettings.GetEnergyConvergenceValue)                                   | Gets the Energy Convergence Value at a given solution step.                            |
| [`GetEnergyConvergenceMinimumReference`](#AnalysisSettings.GetEnergyConvergenceMinimumReference)             | Gets the Energy Convergence Minimum Reference at a given solution step.                |
| [`GetLineSearch`](#AnalysisSettings.GetLineSearch)                                                           | Gets the Line Search at a given solution step.                                         |
| [`SetLineSearch`](#AnalysisSettings.SetLineSearch)                                                           | Sets the Line Search for a given solution step.                                        |
| [`GetStabilization`](#AnalysisSettings.GetStabilization)                                                     | Gets the Stabilization at a given solution step.                                       |
| [`SetStabilization`](#AnalysisSettings.SetStabilization)                                                     | Sets the Stabilization for a given solution step.                                      |
| [`GetStabilizationMethod`](#AnalysisSettings.GetStabilizationMethod)                                         | Gets the Stabilization Method at a given solution step.                                |
| [`SetStabilizationMethod`](#AnalysisSettings.SetStabilizationMethod)                                         | Sets the Stabilization Method for a given solution step.                               |
| [`GetStabilizationEnergyDissipationRatio`](#AnalysisSettings.GetStabilizationEnergyDissipationRatio)         | Gets the Stabilization Energy Dissipation Ratio at a given solution step.              |
| [`SetStabilizationEnergyDissipationRatio`](#AnalysisSettings.SetStabilizationEnergyDissipationRatio)         | Sets the Stabilization Energy Dissipation Ratio for a given solution step.             |
| [`GetStabilizationDampingFactor`](#AnalysisSettings.GetStabilizationDampingFactor)                           | Gets the Stabilization Damping Factor at a given solution step.                        |
| [`SetStabilizationDampingFactor`](#AnalysisSettings.SetStabilizationDampingFactor)                           | Sets the Stabilization Damping Factor for a given solution step.                       |
| [`GetStabilizationFirstSubstepOption`](#AnalysisSettings.GetStabilizationFirstSubstepOption)                 | Gets the Stabilization First Substep Option at a given solution step.                  |
| [`SetStabilizationFirstSubstepOption`](#AnalysisSettings.SetStabilizationFirstSubstepOption)                 | Sets the Stabilization First Substep Option for a given solution step.                 |
| [`GetStabilizationForceLimit`](#AnalysisSettings.GetStabilizationForceLimit)                                 | Gets the Stabilization Force Limit at a given solution step.                           |
| [`SetStabilizationForceLimit`](#AnalysisSettings.SetStabilizationForceLimit)                                 | Sets the Stabilization Force Limit for a given solution step.                          |
| [`GetStoreResultsAt`](#AnalysisSettings.GetStoreResultsAt)                                                   | Gets the Store Results At at a given solution step.                                    |
| [`SetStoreResultsAt`](#AnalysisSettings.SetStoreResultsAt)                                                   | Sets the Store Results At for a given solution step.                                   |
| [`GetStoreResulsAtValue`](#AnalysisSettings.GetStoreResulsAtValue)                                           | Gets the Store Results At Value at a given solution step.                              |
| [`SetStoreResulsAtValue`](#AnalysisSettings.SetStoreResulsAtValue)                                           | Sets the Store Results At Value for a given solution step.                             |
| [`GetDefineBy`](#AnalysisSettings.GetDefineBy)                                                               | Gets the Define By at a given solution step.                                           |
| [`SetDefineBy`](#AnalysisSettings.SetDefineBy)                                                               | Sets the Define By for a given solution step.                                          |
| [`GetCarryOverTimeStep`](#id132)                                                                             | Gets the Carry Over Time Step at a given solution step.                                |
| [`SetCarryOverTimeStep`](#id133)                                                                             | Sets the Carry Over Time Step for a given solution step.                               |
| [`GetInitialTimeStep`](#id134)                                                                               | Gets the Initial Time Step at a given solution step.                                   |
| [`SetInitialTimeStep`](#id135)                                                                               | Sets the Initial Time Step for a given solution step.                                  |
| [`GetMinimumTimeStep`](#id136)                                                                               | Gets the Minimum Time Step at a given solution step.                                   |
| [`SetMinimumTimeStep`](#id137)                                                                               | Sets the Minimum Time Step for a given solution step.                                  |
| [`GetMaximumTimeStep`](#id138)                                                                               | Gets the Maximum Time Step at a given solution step.                                   |
| [`SetMaximumTimeStep`](#id139)                                                                               | Sets the Maximum Time Step for a given solution step.                                  |
| [`GetInitialSubsteps`](#AnalysisSettings.GetInitialSubsteps)                                                 | Gets the Initial Substeps at a given solution step.                                    |
| [`SetInitialSubsteps`](#AnalysisSettings.SetInitialSubsteps)                                                 | Sets the Initial Substeps for a given solution step.                                   |
| [`GetMinimumSubsteps`](#AnalysisSettings.GetMinimumSubsteps)                                                 | Gets the Minimum Substeps at a given solution step.                                    |
| [`SetMinimumSubsteps`](#AnalysisSettings.SetMinimumSubsteps)                                                 | Sets the Minimum Substeps for a given solution step.                                   |
| [`GetMaximumSubsteps`](#AnalysisSettings.GetMaximumSubsteps)                                                 | Gets the Maximum Substeps at a given solution step.                                    |
| [`SetMaximumSubsteps`](#AnalysisSettings.SetMaximumSubsteps)                                                 | Sets the Maximum Substeps for a given solution step.                                   |
| [`SetNumberOfSubSteps`](#AnalysisSettings.SetNumberOfSubSteps)                                               | Sets the Number of Substeps for a given solution step.                                 |
| [`GetNumberOfSubSteps`](#AnalysisSettings.GetNumberOfSubSteps)                                               | Gets the Number of Substeps for a given solution step.                                 |
| [`SetTimeStep`](#id141)                                                                                      | Sets the Time Step for a given solution step.                                          |
| [`GetTimeStep`](#id140)                                                                                      | Sets the Time Step for a given solution step.                                          |
| [`SetTimeIntegration`](#AnalysisSettings.SetTimeIntegration)                                                 | Sets the TimeIntegration for a given solution step.                                    |
| [`SetStructuralOnly`](#AnalysisSettings.SetStructuralOnly)                                                   | Sets the TimeIntegration Structural for a given solution step.                         |
| [`SetThermalOnly`](#AnalysisSettings.SetThermalOnly)                                                         | Sets the TimeIntegration Thermal for a given solution step.                            |
| [`GetTimeIntegration`](#AnalysisSettings.GetTimeIntegration)                                                 | Gets the TimeIntegration for a given solution step.                                    |
| [`GetStructuralOnly`](#AnalysisSettings.GetStructuralOnly)                                                   | Gets the TimeIntegration Structural for a given solution step.                         |
| [`GetThermalOnly`](#AnalysisSettings.GetThermalOnly)                                                         | Sets the TimeIntegration Thermal for a given solution step.                            |
| [`GetStepName`](#AnalysisSettings.GetStepName)                                                               | Gets the Step name at a given step.                                                    |
| [`SetStepName`](#AnalysisSettings.SetStepName)                                                               | Sets the Step name at a given step.                                                    |
| [`GetAMStepType`](#AnalysisSettings.GetAMStepType)                                                           | Gets the AM Process Step Type at a given step.                                         |
| [`CopyTo`](#id149)                                                                                           | CopyTo method.                                                                         |
| [`SetCreepEffects`](#AnalysisSettings.SetCreepEffects)                                                       | Sets the Creep Effects for a given solution step.                                      |
| [`GetCreepEffects`](#AnalysisSettings.GetCreepEffects)                                                       | Gets the Creep Effects for a given solution step.                                      |
| [`SetCreepLimitRatio`](#AnalysisSettings.SetCreepLimitRatio)                                                 | Sets the Creep Limit Ratio for a given solution step.                                  |
| [`GetCreepLimitRatio`](#AnalysisSettings.GetCreepLimitRatio)                                                 | Gets the Creep Limit Ratio for a given solution step.                                  |
| [`DeleteAllRestartPoints`](#id142)                                                                           | DeleteAllRestartPoints method.                                                         |
| [`GetChildren`](#id144)                                                                                      | Gets the list of children, filtered by type.                                           |
| [`GetChildren`](#id144)                                                                                      | Gets the list of children, filtered by type.                                           |
| [`AddComment`](#id145)                                                                                       | Creates a new child Comment.                                                           |
| [`AddFigure`](#id146)                                                                                        | Creates a new child Figure.                                                            |
| [`AddImage`](#id147)                                                                                         | Creates a new child Image.                                                             |
| [`Activate`](#id148)                                                                                         | Activate the current object.                                                           |
| [`Duplicate`](#id150)                                                                                        | Creates a copy of the current DataModelObject.                                         |
| [`GroupAllSimilarChildren`](#id151)                                                                          | Run the GroupAllSimilarChildren action.                                                |
| [`GroupSimilarObjects`](#id152)                                                                              | Run the GroupSimilarObjects action.                                                    |
| [`PropertyByName`](#id153)                                                                                   | Get a property by its unique name.                                                     |
| [`PropertyByAPIName`](#id154)                                                                                | Get a property by its API name.                                                        |
| [`CreateParameter`](#id155)                                                                                  | Creates a new parameter for a Property.                                                |
| [`GetParameter`](#id156)                                                                                     | Gets the parameter corresponding to the given property.                                |
| [`RemoveParameter`](#id157)                                                                                  | Removes the parameter from the parameter set corresponding to the given property.      |

### Properties

| [`StepName`](#AnalysisSettings.StepName)                                                                                     | Gets or sets the Step Name.                                                                         |
|------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| [`AMStepType`](#AnalysisSettings.AMStepType)                                                                                 | Gets or sets the AM Process Step Type.                                                              |
| [`AMSubstepsToApplyHeats`](#AnalysisSettings.AMSubstepsToApplyHeats)                                                         | Gets or sets the AM Substeps to Apply Heat.                                                         |
| [`AMSubstepsBetweenHeating`](#AnalysisSettings.AMSubstepsBetweenHeating)                                                     | Gets or sets the AM Substeps Between Heating.                                                       |
| [`AMCooldownNumberOfSubsteps`](#AnalysisSettings.AMCooldownNumberOfSubsteps)                                                 | Gets or sets the AM Cooldown Number of Substeps.                                                    |
| [`CooldownTimeType`](#AnalysisSettings.CooldownTimeType)                                                                     | Gets or sets the AM Cooldown Time Type.                                                             |
| [`CooldownTime`](#AnalysisSettings.CooldownTime)                                                                             | Gets or sets the AM Cooldown Time.                                                                  |
| [`LayersToBuild`](#AnalysisSettings.LayersToBuild)                                                                           | Gets or sets the AM Layers to Build.                                                                |
| [`ReferenceTemperatureType`](#AnalysisSettings.ReferenceTemperatureType)                                                     | Gets or sets the AM Reference Temperature Type.                                                     |
| [`ReferenceTemperature`](#AnalysisSettings.ReferenceTemperature)                                                             | Gets or sets the AM Reference Temperature.                                                          |
| [`RelaxationTemperatureType`](#AnalysisSettings.RelaxationTemperatureType)                                                   | Gets or sets the AM Relaxation Temperature Type.                                                    |
| [`NumberOfRestartPoints`](#AnalysisSettings.NumberOfRestartPoints)                                                           | Gets Number of Restart Points.                                                                      |
| [`CurrentRestartPoint`](#AnalysisSettings.CurrentRestartPoint)                                                               | Gets or sets the Current Restart Point.                                                             |
| [`AggressiveRemeshing`](#AnalysisSettings.AggressiveRemeshing)                                                               | Gets or sets the AggressiveRemeshing.                                                               |
| [`SpinSoftening`](#AnalysisSettings.SpinSoftening)                                                                           | Gets or sets the SpinSoftening.                                                                     |
| [`UserDefinedFrequencySteps`](#AnalysisSettings.UserDefinedFrequencySteps)                                                   | Gets or sets the UserDefinedFrequencySteps.                                                         |
| [`InternalObject`](#id117)                                                                                                   | Gets the internal object. For advanced usage only.                                                  |
| [`MassCoefficient`](#AnalysisSettings.MassCoefficient)                                                                       | Gets or sets the MassCoefficient.                                                                   |
| [`StiffnessCoefficient`](#id79)                                                                                              | Gets or sets the StiffnessCoefficient.                                                              |
| [`DampingRatio`](#AnalysisSettings.DampingRatio)                                                                             | Gets or sets the DampingRatio.                                                                      |
| [`ConstantDampingRatio`](#AnalysisSettings.ConstantDampingRatio)                                                             | Gets or sets the ConstantDampingRatio.                                                              |
| [`StructuralDampingCoefficient`](#AnalysisSettings.StructuralDampingCoefficient)                                             | Gets or sets the StructuralDampingCoefficient.                                                      |
| [`ContactSplitMaxNum`](#AnalysisSettings.ContactSplitMaxNum)                                                                 | Gets or sets the ContactSplitMaxNum.                                                                |
| [`ChargeConvergenceTolerance`](#AnalysisSettings.ChargeConvergenceTolerance)                                                 | Gets or sets the ChargeConvergenceTolerance.                                                        |
| [`CurrentConvergenceTolerance`](#AnalysisSettings.CurrentConvergenceTolerance)                                               | Gets or sets the CurrentConvergenceTolerance.                                                       |
| [`EmagAMPSConvergenceTolerance`](#AnalysisSettings.EmagAMPSConvergenceTolerance)                                             | Gets or sets the EmagAMPSConvergenceTolerance.                                                      |
| [`EmagCSGConvergenceTolerance`](#AnalysisSettings.EmagCSGConvergenceTolerance)                                               | Gets or sets the EmagCSGConvergenceTolerance.                                                       |
| [`EnergyConvergenceTolerance`](#AnalysisSettings.EnergyConvergenceTolerance)                                                 | Gets or sets the EnergyConvergenceTolerance.                                                        |
| [`HeatConvergenceTolerance`](#AnalysisSettings.HeatConvergenceTolerance)                                                     | Gets or sets the HeatConvergenceTolerance.                                                          |
| [`TemperatureConvergenceTolerance`](#AnalysisSettings.TemperatureConvergenceTolerance)                                       | Gets or sets the TemperatureConvergenceTolerance.                                                   |
| [`VoltageConvergenceTolerance`](#AnalysisSettings.VoltageConvergenceTolerance)                                               | Gets or sets the VoltageConvergenceTolerance.                                                       |
| [`CreepLimitRatio`](#AnalysisSettings.CreepLimitRatio)                                                                       | Gets or sets the CreepLimitRatio.                                                                   |
| [`CurrentStepNumberHarmonic`](#AnalysisSettings.CurrentStepNumberHarmonic)                                                   | Gets or sets the CurrentStepNumberHarmonic.                                                         |
| [`CurrentStepNumber`](#id114)                                                                                                | Gets or sets the CurrentStepNumber.                                                                 |
| [`EngineOrderofExcitation`](#AnalysisSettings.EngineOrderofExcitation)                                                       | Gets or sets the EngineOrderofExcitation.                                                           |
| [`MaximumHarmonicIndex`](#AnalysisSettings.MaximumHarmonicIndex)                                                             | Gets or sets the MaximumHarmonicIndex.                                                              |
| [`MinimumHarmonicIndex`](#AnalysisSettings.MinimumHarmonicIndex)                                                             | Gets or sets the MinimumHarmonicIndex.                                                              |
| [`HarmonicIndexInterval`](#AnalysisSettings.HarmonicIndexInterval)                                                           | Gets or sets the HarmonicIndexInterval.                                                             |
| [`ClusterNumber`](#AnalysisSettings.ClusterNumber)                                                                           | Gets or sets the ClusterNumber.                                                                     |
| [`SolutionIntervals`](#AnalysisSettings.SolutionIntervals)                                                                   | Gets or sets the SolutionIntervals.                                                                 |
| [`KrylovSubspaceDimension`](#AnalysisSettings.KrylovSubspaceDimension)                                                       | Gets or sets the KrylovSubspaceDimension.                                                           |
| [`KrylovResidualTolerance`](#AnalysisSettings.KrylovResidualTolerance)                                                       | Gets or sets the KrylovResidualTolerance.                                                           |
| [`InitialSubsteps`](#AnalysisSettings.InitialSubsteps)                                                                       | Gets or sets the InitialSubsteps.                                                                   |
| [`InverseOptionEndStep`](#AnalysisSettings.InverseOptionEndStep)                                                             | Gets or sets the InverseOptionEndStep.                                                              |
| [`MaximumSubsteps`](#AnalysisSettings.MaximumSubsteps)                                                                       | Gets or sets the MaximumSubsteps.                                                                   |
| [`MeshLoadStepValue`](#AnalysisSettings.MeshLoadStepValue)                                                                   | Gets or sets the MeshLoadStepValue.                                                                 |
| [`MinimumSubsteps`](#AnalysisSettings.MinimumSubsteps)                                                                       | Gets or sets the MinimumSubsteps.                                                                   |
| [`ModalNumberOfPoints`](#AnalysisSettings.ModalNumberOfPoints)                                                               | Gets or sets the ModalNumberOfPoints.                                                               |
| [`ModeSignificanceLevel`](#AnalysisSettings.ModeSignificanceLevel)                                                           | Gets or sets the ModeSignificanceLevel.                                                             |
| [`GlobalSizeRatioQualityImprovement`](#AnalysisSettings.GlobalSizeRatioQualityImprovement)                                   | Gets or sets the GlobalSizeRatioQualityImprovement.                                                 |
| [`GlobalSizeRatioQualityRefinement`](#AnalysisSettings.GlobalSizeRatioQualityRefinement)                                     | Gets or sets the GlobalSizeRatioQualityRefinement.                                                  |
| [`NumberOfSculptedLayersQualityImprovement`](#AnalysisSettings.NumberOfSculptedLayersQualityImprovement)                     | Gets or sets the NumberOfSculptedLayersQualityImprovement.                                          |
| [`NumberOfSculptedLayersRefinement`](#AnalysisSettings.NumberOfSculptedLayersRefinement)                                     | Gets or sets the NumberOfSculptedLayersRefinement.                                                  |
| [`RemeshingToleranceQualityImprovement`](#AnalysisSettings.RemeshingToleranceQualityImprovement)                             | Gets or sets the RemeshingToleranceQualityImprovement.                                              |
| [`RemeshingToleranceRefinement`](#AnalysisSettings.RemeshingToleranceRefinement)                                             | Gets or sets the RemeshingToleranceRefinement.                                                      |
| [`StoreResulsAtValue`](#AnalysisSettings.StoreResulsAtValue)                                                                 | Gets or sets the StoreResulsAtValue.                                                                |
| [`NumberOfModesToUse`](#AnalysisSettings.NumberOfModesToUse)                                                                 | Gets or sets the NumberOfModesToUse.                                                                |
| [`NumberOfRPMs`](#AnalysisSettings.NumberOfRPMs)                                                                             | Gets or sets the NumberOfRPMs.                                                                      |
| [`NumberOfSteps`](#id113)                                                                                                    | Gets or sets the NumberOfSteps.                                                                     |
| [`NumberOfSubSteps`](#AnalysisSettings.NumberOfSubSteps)                                                                     | Gets or sets the NumberOfSubSteps.                                                                  |
| [`NumericalDampingValue`](#id115)                                                                                            | Gets or sets the NumericalDampingValue.                                                             |
| [`NumLoadVectors`](#AnalysisSettings.NumLoadVectors)                                                                         | Gets or sets the NumLoadVectors.                                                                    |
| [`MaximumModesToFind`](#AnalysisSettings.MaximumModesToFind)                                                                 | Gets or sets the MaximumModesToFind.                                                                |
| [`NumberOfZones`](#AnalysisSettings.NumberOfZones)                                                                           | Gets or sets the NumberOfZones.                                                                     |
| [`AxisymmetryDivisions`](#AnalysisSettings.AxisymmetryDivisions)                                                             | Gets or sets the AxisymmetryDivisions.                                                              |
| [`HemicubeResolution`](#AnalysisSettings.HemicubeResolution)                                                                 | Gets or sets the HemicubeResolution.                                                                |
| [`FluxConvergence`](#AnalysisSettings.FluxConvergence)                                                                       | Gets or sets the FluxConvergence.                                                                   |
| [`MaximumIteration`](#AnalysisSettings.MaximumIteration)                                                                     | Gets or sets the MaximumIteration.                                                                  |
| [`OverRelaxation`](#AnalysisSettings.OverRelaxation)                                                                         | Gets or sets the OverRelaxation.                                                                    |
| [`ReformulationTolerance`](#AnalysisSettings.ReformulationTolerance)                                                         | Gets or sets the ReformulationTolerance.                                                            |
| [`RestartAtLoadStep`](#AnalysisSettings.RestartAtLoadStep)                                                                   | Gets the RestartAtLoadStep.                                                                         |
| [`RestartAtSubstep`](#AnalysisSettings.RestartAtSubstep)                                                                     | Gets the RestartAtSubstep.                                                                          |
| [`RestartAtTime`](#AnalysisSettings.RestartAtTime)                                                                           | Gets the RestartAtTime.                                                                             |
| [`RpmClusterNumber`](#AnalysisSettings.RpmClusterNumber)                                                                     | Gets or sets the RpmClusterNumber.                                                                  |
| [`RpmSolutionIntervals`](#AnalysisSettings.RpmSolutionIntervals)                                                             | Gets or sets the RpmSolutionIntervals.                                                              |
| [`MaximumPointsToSavePerStep`](#AnalysisSettings.MaximumPointsToSavePerStep)                                                 | Gets or sets the MaximumPointsToSavePerStep.                                                        |
| [`SaveSpecifiedLoadStep`](#AnalysisSettings.SaveSpecifiedLoadStep)                                                           | Gets or sets the SaveSpecifiedLoadStep.                                                             |
| [`LoadStepValue`](#AnalysisSettings.LoadStepValue)                                                                           | Gets or sets the LoadStepValue.                                                                     |
| [`SignificanceThreshold`](#AnalysisSettings.SignificanceThreshold)                                                           | Gets or sets the SignificanceThreshold.                                                             |
| [`StabilizationDampingFactor`](#AnalysisSettings.StabilizationDampingFactor)                                                 | Gets or sets the StabilizationDampingFactor.                                                        |
| [`StabilizationEnergyDissipationRatio`](#AnalysisSettings.StabilizationEnergyDissipationRatio)                               | Gets or sets the StabilizationEnergyDissipationRatio.                                               |
| [`StabilizationForceLimit`](#AnalysisSettings.StabilizationForceLimit)                                                       | Gets or sets the StabilizationForceLimit.                                                           |
| [`TransientApplicationUserDefined`](#AnalysisSettings.TransientApplicationUserDefined)                                       | Gets or sets the TransientApplicationUserDefined.                                                   |
| [`SpringStiffnessFactor`](#AnalysisSettings.SpringStiffnessFactor)                                                           | Gets or sets the SpringStiffnessFactor.                                                             |
| [`RelaxationTemperature`](#AnalysisSettings.RelaxationTemperature)                                                           | Gets or sets the RelaxationTemperature.                                                             |
| [`Frequency`](#AnalysisSettings.Frequency)                                                                                   | Gets or sets the Frequency.                                                                         |
| [`CentralFrequency`](#AnalysisSettings.CentralFrequency)                                                                     | Gets or sets the CentralFrequency.                                                                  |
| [`ChargeConvergenceMinimumReference`](#AnalysisSettings.ChargeConvergenceMinimumReference)                                   | Gets or sets the ChargeConvergenceMinimumReference.                                                 |
| [`ChargeConvergenceValue`](#AnalysisSettings.ChargeConvergenceValue)                                                         | Gets or sets the ChargeConvergenceValue.                                                            |
| [`CurrentConvergenceMinimumReference`](#AnalysisSettings.CurrentConvergenceMinimumReference)                                 | Gets or sets the CurrentConvergenceMinimumReference.                                                |
| [`CurrentConvergenceValue`](#AnalysisSettings.CurrentConvergenceValue)                                                       | Gets or sets the CurrentConvergenceValue.                                                           |
| [`DisplacementConvergenceMinimumReference`](#AnalysisSettings.DisplacementConvergenceMinimumReference)                       | Gets or sets the DisplacementConvergenceMinimumReference.                                           |
| [`DisplacementConvergenceTolerance`](#AnalysisSettings.DisplacementConvergenceTolerance)                                     | Gets or sets the DisplacementConvergenceTolerance.                                                  |
| [`DisplacementConvergenceValue`](#AnalysisSettings.DisplacementConvergenceValue)                                             | Gets or sets the DisplacementConvergenceValue.                                                      |
| [`EmagAMPSConvergenceMinimumReference`](#AnalysisSettings.EmagAMPSConvergenceMinimumReference)                               | Gets or sets the EmagAMPSConvergenceMinimumReference.                                               |
| [`EmagAMPSConvergenceValue`](#AnalysisSettings.EmagAMPSConvergenceValue)                                                     | Gets or sets the EmagAMPSConvergenceValue.                                                          |
| [`EmagCSGConvergenceMinimumReference`](#AnalysisSettings.EmagCSGConvergenceMinimumReference)                                 | Gets or sets the EmagCSGConvergenceMinimumReference.                                                |
| [`EmagCSGConvergenceValue`](#AnalysisSettings.EmagCSGConvergenceValue)                                                       | Gets or sets the EmagCSGConvergenceValue.                                                           |
| [`EnergyConvergenceMinimumReference`](#AnalysisSettings.EnergyConvergenceMinimumReference)                                   | Gets or sets the EnergyConvergenceMinimumReference.                                                 |
| [`EnergyConvergenceValue`](#AnalysisSettings.EnergyConvergenceValue)                                                         | Gets or sets the EnergyConvergenceValue.                                                            |
| [`ForceConvergenceMinimumReference`](#AnalysisSettings.ForceConvergenceMinimumReference)                                     | Gets or sets the ForceConvergenceMinimumReference.                                                  |
| [`ForceConvergenceTolerance`](#AnalysisSettings.ForceConvergenceTolerance)                                                   | Gets or sets the ForceConvergenceTolerance.                                                         |
| [`ForceConvergenceValue`](#AnalysisSettings.ForceConvergenceValue)                                                           | Gets or sets the ForceConvergenceValue.                                                             |
| [`HeatConvergenceMinimumReference`](#AnalysisSettings.HeatConvergenceMinimumReference)                                       | Gets or sets the HeatConvergenceMinimumReference.                                                   |
| [`HeatConvergenceValue`](#AnalysisSettings.HeatConvergenceValue)                                                             | Gets or sets the HeatConvergenceValue.                                                              |
| [`MomentConvergenceMinimumReference`](#AnalysisSettings.MomentConvergenceMinimumReference)                                   | Gets or sets the MomentConvergenceMinimumReference.                                                 |
| [`MomentConvergenceTolerance`](#AnalysisSettings.MomentConvergenceTolerance)                                                 | Gets or sets the MomentConvergenceTolerance.                                                        |
| [`MomentConvergenceValue`](#AnalysisSettings.MomentConvergenceValue)                                                         | Gets or sets the MomentConvergenceValue.                                                            |
| [`RotationConvergenceMinimumReference`](#AnalysisSettings.RotationConvergenceMinimumReference)                               | Gets or sets the RotationConvergenceMinimumReference.                                               |
| [`RotationConvergenceTolerance`](#AnalysisSettings.RotationConvergenceTolerance)                                             | Gets or sets the RotationConvergenceTolerance.                                                      |
| [`TemperatureConvergenceMinimumReference`](#AnalysisSettings.TemperatureConvergenceMinimumReference)                         | Gets or sets the TemperatureConvergenceMinimumReference.                                            |
| [`TemperatureConvergenceInputValue`](#AnalysisSettings.TemperatureConvergenceInputValue)                                     | Gets or sets the TemperatureConvergenceInputValue.                                                  |
| [`VoltageConvergenceMinimumReference`](#AnalysisSettings.VoltageConvergenceMinimumReference)                                 | Gets or sets the VoltageConvergenceMinimumReference.                                                |
| [`VoltageConvergenceValue`](#AnalysisSettings.VoltageConvergenceValue)                                                       | Gets or sets the VoltageConvergenceValue.                                                           |
| [`RemovalDirection`](#AnalysisSettings.RemovalDirection)                                                                     | Gets or sets the RemovalDirection.                                                                  |
| [`RemovalStepSize`](#AnalysisSettings.RemovalStepSize)                                                                       | Gets or sets the RemovalStepSize.                                                                   |
| [`StepEndTime`](#AnalysisSettings.StepEndTime)                                                                               | Gets or sets the StepEndTime.                                                                       |
| [`MinimumElementSize`](#AnalysisSettings.MinimumElementSize)                                                                 | Gets or sets the Minimum Element Size property for Geometry Based Adaptivity.                       |
| [`RangeMaximum`](#AnalysisSettings.RangeMaximum)                                                                             | Gets or sets the Range Maximum property in Options group of Analysis Settings in Harmonic Analysis. |
| [`RangeMinimum`](#AnalysisSettings.RangeMinimum)                                                                             | Gets or sets the Range Minimum property in Options group of Analysis Settings in Harmonic Analysis. |
| [`KrylovSubspaceFrequency`](#AnalysisSettings.KrylovSubspaceFrequency)                                                       | Gets or sets the KrylovSubspaceFrequency.                                                           |
| [`ModalRangeMaximum`](#AnalysisSettings.ModalRangeMaximum)                                                                   | Gets or sets the ModalRangeMaximum.                                                                 |
| [`ModalRangeMinimum`](#AnalysisSettings.ModalRangeMinimum)                                                                   | Gets or sets the ModalRangeMinimum.                                                                 |
| [`InitialTimeStep`](#id76)                                                                                                   | Gets or sets the InitialTimeStep.                                                                   |
| [`SearchRangeMaximum`](#AnalysisSettings.SearchRangeMaximum)                                                                 | Gets or sets the Range Maximum property in Options group of Analysis Settings in Modal Analysis.    |
| [`MaximumTimeStep`](#id78)                                                                                                   | Gets or sets the MaximumTimeStep.                                                                   |
| [`SearchRangeMinimum`](#AnalysisSettings.SearchRangeMinimum)                                                                 | Gets or sets the Range Minimum property in Options group of Analysis Settings in Modal Analysis.    |
| [`MinimumTimeStep`](#id77)                                                                                                   | Gets or sets the MinimumTimeStep.                                                                   |
| [`BoundaryAngle`](#AnalysisSettings.BoundaryAngle)                                                                           | Gets or sets the BoundaryAngle.                                                                     |
| [`EdgeSplittingAngle`](#AnalysisSettings.EdgeSplittingAngle)                                                                 | Gets or sets the EdgeSplittingAngle.                                                                |
| [`SolverTolerance`](#AnalysisSettings.SolverTolerance)                                                                       | Gets or sets the SolverTolerance.                                                                   |
| [`RpmValue`](#AnalysisSettings.RpmValue)                                                                                     | Gets or sets the RpmValue.                                                                          |
| [`RpmCentralFrequency`](#AnalysisSettings.RpmCentralFrequency)                                                               | Gets or sets the RpmCentralFrequency.                                                               |
| [`RpmRangeMaximum`](#AnalysisSettings.RpmRangeMaximum)                                                                       | Gets or sets the RpmRangeMaximum.                                                                   |
| [`RpmRangeMinimum`](#AnalysisSettings.RpmRangeMinimum)                                                                       | Gets or sets the RpmRangeMinimum.                                                                   |
| [`TimeStep`](#AnalysisSettings.TimeStep)                                                                                     | Gets or sets the TimeStep.                                                                          |
| [`SpringStiffnessValue`](#AnalysisSettings.SpringStiffnessValue)                                                             | Gets or sets the SpringStiffnessValue.                                                              |
| [`BaseRemovalType`](#AnalysisSettings.BaseRemovalType)                                                                       | Gets or sets the BaseRemovalType.                                                                   |
| [`StiffnessCoefficientDefineBy`](#AnalysisSettings.StiffnessCoefficientDefineBy)                                             | Gets or sets the StiffnessCoefficientDefineBy.                                                      |
| [`CacheResultsInMemory`](../../../../Mechanical/DataModel/Enums/CacheResultsInMemory.md#CacheResultsInMemory)                | Gets or sets the CacheResultsInMemory.                                                              |
| [`ParticipationFactor`](#AnalysisSettings.ParticipationFactor)                                                               | Gets or sets the ParticipationFactor.                                                               |
| [`StoreResultsAt`](#id36)                                                                                                    | Gets or sets the StoreResultsAt.                                                                    |
| [`ConstantDamping`](#AnalysisSettings.ConstantDamping)                                                                       | Gets or sets the ConstantDamping.                                                                   |
| [`ContactSplit`](#AnalysisSettings.ContactSplit)                                                                             | Gets or sets the ContactSplit.                                                                      |
| [`ContactSummary`](#AnalysisSettings.ContactSummary)                                                                         | Gets or sets the ContactSummary.                                                                    |
| [`ChargeConvergence`](#AnalysisSettings.ChargeConvergence)                                                                   | Gets or sets the ChargeConvergence.                                                                 |
| [`CurrentConvergence`](#AnalysisSettings.CurrentConvergence)                                                                 | Gets or sets the CurrentConvergence.                                                                |
| [`DisplacementConvergence`](#AnalysisSettings.DisplacementConvergence)                                                       | Gets or sets the DisplacementConvergence.                                                           |
| [`AMPSConvergence`](#AnalysisSettings.AMPSConvergence)                                                                       | Gets or sets the AMPSConvergence.                                                                   |
| [`CSGConvergence`](#AnalysisSettings.CSGConvergence)                                                                         | Gets or sets the CSGConvergence.                                                                    |
| [`EnergyConvergence`](#AnalysisSettings.EnergyConvergence)                                                                   | Gets or sets the EnergyConvergence.                                                                 |
| [`ForceConvergence`](#AnalysisSettings.ForceConvergence)                                                                     | Gets or sets the ForceConvergence.                                                                  |
| [`HeatConvergence`](#AnalysisSettings.HeatConvergence)                                                                       | Gets or sets the HeatConvergence.                                                                   |
| [`MomentConvergence`](#AnalysisSettings.MomentConvergence)                                                                   | Gets or sets the MomentConvergence.                                                                 |
| [`RotationConvergence`](#AnalysisSettings.RotationConvergence)                                                               | Gets or sets the RotationConvergence.                                                               |
| [`TemperatureConvergence`](#AnalysisSettings.TemperatureConvergence)                                                         | Gets or sets the TemperatureConvergence.                                                            |
| [`TemperatureConvergenceValue`](#AnalysisSettings.TemperatureConvergenceValue)                                               | Gets or sets the TemperatureConvergenceValue.                                                       |
| [`VoltageConvergence`](#AnalysisSettings.VoltageConvergence)                                                                 | Gets or sets the VoltageConvergence.                                                                |
| [`CoriolisEffectApplied`](#AnalysisSettings.CoriolisEffectApplied)                                                           | Gets or sets the CoriolisEffectApplied.                                                             |
| [`CreepEffects`](#AnalysisSettings.CreepEffects)                                                                             | Gets or sets the CreepEffects.                                                                      |
| [`HarmonicIndexRange`](#AnalysisSettings.HarmonicIndexRange)                                                                 | Gets or sets the HarmonicIndexRange.                                                                |
| [`DampingDefineBy`](../../../../Mechanical/DataModel/Enums/DampingDefineBy.md#DampingDefineBy)                               | Gets or sets the DampingDefineBy.                                                                   |
| [`FarFieldRadiationSurface`](#AnalysisSettings.FarFieldRadiationSurface)                                                     | Gets or sets the FarFieldRadiationSurface.                                                          |
| [`ExpandResultsFrom`](#AnalysisSettings.ExpandResultsFrom)                                                                   | Gets or sets the ExpandResultsFrom.                                                                 |
| [`FrequencySpacing`](#AnalysisSettings.FrequencySpacing)                                                                     | Gets or sets the FrequencySpacing.                                                                  |
| [`FutureAnalysis`](#id37)                                                                                                    | Gets or sets the FutureAnalysis.                                                                    |
| [`GeneralMiscellaneousOption`](#AnalysisSettings.GeneralMiscellaneousOption)                                                 | Gets or sets the GeneralMiscellaneousOption.                                                        |
| [`MultistepType`](#AnalysisSettings.MultistepType)                                                                           | Gets or sets the MultistepType.                                                                     |
| [`ModalFrequencyRange`](#AnalysisSettings.ModalFrequencyRange)                                                               | Gets or sets the ModalFrequencyRange.                                                               |
| [`StoreResultsAtAllFrequencies`](#AnalysisSettings.StoreResultsAtAllFrequencies)                                             | Gets or sets the StoreResultsAtAllFrequencies.                                                      |
| [`SolutionMethod`](#AnalysisSettings.SolutionMethod)                                                                         | Gets or sets the SolutionMethod.                                                                    |
| [`IncludeNegativeLoadMultiplier`](#AnalysisSettings.IncludeNegativeLoadMultiplier)                                           | Gets or sets the IncludeNegativeLoadMultiplier.                                                     |
| [`LineSearch`](#AnalysisSettings.LineSearch)                                                                                 | Gets or sets the LineSearch.                                                                        |
| [`GenerateMeshRestartPoints`](#AnalysisSettings.GenerateMeshRestartPoints)                                                   | Gets or sets the GenerateMeshRestartPoints.                                                         |
| [`MeshRetainFilesAfterFullSolve`](#AnalysisSettings.MeshRetainFilesAfterFullSolve)                                           | Gets or sets the MeshRetainFilesAfterFullSolve.                                                     |
| [`MeshSaveAtLoadStep`](#AnalysisSettings.MeshSaveAtLoadStep)                                                                 | Gets or sets the MeshSaveAtLoadStep.                                                                |
| [`MeshSaveAtSubstep`](#AnalysisSettings.MeshSaveAtSubstep)                                                                   | Gets or sets the MeshSaveAtSubstep.                                                                 |
| [`ModeReuse`](#AnalysisSettings.ModeReuse)                                                                                   | Gets or sets the ModeReuse.                                                                         |
| [`ModesCombinationType`](../../../../Mechanical/DataModel/Enums/ModesCombinationType.md#ModesCombinationType)                | Gets or sets the ModesCombinationType.                                                              |
| [`ModeSelectionMethod`](../../../../Mechanical/DataModel/Enums/ModeSelectionMethod.md#ModeSelectionMethod)                   | Gets or sets the ModeSelectionMethod.                                                               |
| [`OnDemandExpansionOption`](#AnalysisSettings.OnDemandExpansionOption)                                                       | Gets or sets the OnDemandExpansionOption.                                                           |
| [`NewtonRaphsonOption`](#AnalysisSettings.NewtonRaphsonOption)                                                               | Gets or sets the NewtonRaphsonOption.                                                               |
| [`NodalForces`](#AnalysisSettings.NodalForces)                                                                               | Gets or sets the NodalForces.                                                                       |
| [`ProjectToGeometry`](#AnalysisSettings.ProjectToGeometry)                                                                   | Gets or sets the ProjectToGeometry.                                                                 |
| [`RefinementAlgorithm`](#AnalysisSettings.RefinementAlgorithm)                                                               | Gets or sets the RefinementAlgorithm.                                                               |
| [`RemeshingGradient`](#AnalysisSettings.RemeshingGradient)                                                                   | Gets or sets the RemeshingGradient.                                                                 |
| [`NonLinearFormulation`](#AnalysisSettings.NonLinearFormulation)                                                             | Gets or sets the NonLinearFormulation.                                                              |
| [`NumericalDamping`](#AnalysisSettings.NumericalDamping)                                                                     | Gets or sets the NumericalDamping.                                                                  |
| [`Expansion`](#AnalysisSettings.Expansion)                                                                                   | Gets the Expansion.                                                                                 |
| [`ViewFactorMethod`](#AnalysisSettings.ViewFactorMethod)                                                                     | Gets or sets the ViewFactorMethod.                                                                  |
| [`RadiositySolver`](#AnalysisSettings.RadiositySolver)                                                                       | Gets or sets the RadiositySolver.                                                                   |
| [`CombineRestartFiles`](#AnalysisSettings.CombineRestartFiles)                                                               | Gets or sets the CombineRestartFiles.                                                               |
| [`GenerateRestartPoints`](#AnalysisSettings.GenerateRestartPoints)                                                           | Gets or sets the GenerateRestartPoints.                                                             |
| [`RetainFilesAfterFullSolve`](#AnalysisSettings.RetainFilesAfterFullSolve)                                                   | Gets or sets the RetainFilesAfterFullSolve.                                                         |
| [`RestartType`](../../../../Mechanical/DataModel/Enums/RestartType.md#RestartType)                                           | Gets or sets the RestartType.                                                                       |
| [`ResultFileCompression`](#AnalysisSettings.ResultFileCompression)                                                           | Gets or sets the ResultFileCompression.                                                             |
| [`RpmFrequencySpacing`](#AnalysisSettings.RpmFrequencySpacing)                                                               | Gets or sets the RpmFrequencySpacing.                                                               |
| [`SaveAtLoadStep`](#AnalysisSettings.SaveAtLoadStep)                                                                         | Gets or sets the SaveAtLoadStep.                                                                    |
| [`SaveAtSubstep`](#AnalysisSettings.SaveAtSubstep)                                                                           | Gets or sets the SaveAtSubstep.                                                                     |
| [`ScatteredFieldFormulation`](../../../../Mechanical/DataModel/Enums/ScatteredFieldFormulation.md#ScatteredFieldFormulation) | Gets or sets the ScatteredFieldFormulation.                                                         |
| [`ScatteringOutputType`](../../../../Mechanical/DataModel/Enums/ScatteringOutputType.md#ScatteringOutputType)                | Gets or sets the ScatteringOutputType.                                                              |
| [`SolverUnitSystem`](#id38)                                                                                                  | Gets or sets the SolverUnitSystem.                                                                  |
| [`SolverPivotChecking`](../../../../Mechanical/DataModel/Enums/SolverPivotChecking.md#SolverPivotChecking)                   | Gets or sets the SolverPivotChecking.                                                               |
| [`SolverType`](../../../../Mechanical/DataModel/Enums/SolverType.md#SolverType)                                              | Gets or sets the SolverType.                                                                        |
| [`SolverUnits`](#id40)                                                                                                       | Gets or sets the SolverUnits.                                                                       |
| [`SpectrumType`](../../../../Mechanical/DataModel/Enums/SpectrumType.md#SpectrumType)                                        | Gets or sets the SpectrumType.                                                                      |
| [`Stabilization`](#AnalysisSettings.Stabilization)                                                                           | Gets or sets the Stabilization.                                                                     |
| [`StabilizationActivationForFirstSubstep`](#AnalysisSettings.StabilizationActivationForFirstSubstep)                         | Gets or sets the StabilizationActivationForFirstSubstep.                                            |
| [`StabilizationMethod`](../../../../Mechanical/DataModel/Enums/StabilizationMethod.md#StabilizationMethod)                   | Gets or sets the StabilizationMethod.                                                               |
| [`StoreModalResults`](#AnalysisSettings.StoreModalResults)                                                                   | Gets or sets the StoreModalResults.                                                                 |
| [`DefineBy`](#AnalysisSettings.DefineBy)                                                                                     | Gets or sets the DefineBy.                                                                          |
| [`TransientApplication`](#AnalysisSettings.TransientApplication)                                                             | Gets or sets the TransientApplication.                                                              |
| [`AutomaticTimeStepping`](../../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#AutomaticTimeStepping)             | Gets or sets the AutomaticTimeStepping.                                                             |
| [`RetainModesymFileAfterSolve`](#AnalysisSettings.RetainModesymFileAfterSolve)                                               | Gets or sets the RetainModesymFileAfterSolve.                                                       |
| [`WeakSprings`](#AnalysisSettings.WeakSprings)                                                                               | Gets or sets the WeakSprings.                                                                       |
| [`SpringStiffness`](#AnalysisSettings.SpringStiffness)                                                                       | Gets or sets the SpringStiffness.                                                                   |
| [`IgnoreAcousticDamping`](#AnalysisSettings.IgnoreAcousticDamping)                                                           | Gets or sets the IgnoreAcousticDamping.                                                             |
| [`CalculateAcceleration`](#AnalysisSettings.CalculateAcceleration)                                                           | Gets or sets the CalculateAcceleration.                                                             |
| [`BackStress`](#AnalysisSettings.BackStress)                                                                                 | Gets or sets the BackStress.                                                                        |
| [`ContactMiscellaneous`](#AnalysisSettings.ContactMiscellaneous)                                                             | Gets or sets the ContactMiscellaneous.                                                              |
| [`CStarIntegral`](#AnalysisSettings.CStarIntegral)                                                                           | Gets or sets the CStarIntegral.                                                                     |
| [`ElementCurrentDensity`](#AnalysisSettings.ElementCurrentDensity)                                                           | Gets or sets the ElementCurrentDensity.                                                             |
| [`FieldIntensityandFluxDensity`](#AnalysisSettings.FieldIntensityandFluxDensity)                                             | Gets or sets the FieldIntensityandFluxDensity.                                                      |
| [`ElectromagneticNodalForces`](#AnalysisSettings.ElectromagneticNodalForces)                                                 | Gets or sets the ElectromagneticNodalForces.                                                        |
| [`ContactData`](#AnalysisSettings.ContactData)                                                                               | Gets or sets the ContactData.                                                                       |
| [`CalculateVolumeEnergy`](#AnalysisSettings.CalculateVolumeEnergy)                                                           | Gets or sets the CalculateVolumeEnergy.                                                             |
| [`NonlinearData`](#AnalysisSettings.NonlinearData)                                                                           | Gets or sets the NonlinearData.                                                                     |
| [`CalculateEnergy`](#AnalysisSettings.CalculateEnergy)                                                                       | Gets or sets the CalculateEnergy.                                                                   |
| [`CalculateEulerAngles`](#AnalysisSettings.CalculateEulerAngles)                                                             | Gets or sets the CalculateEulerAngles.                                                              |
| [`HeatGenerationRate`](#AnalysisSettings.HeatGenerationRate)                                                                 | Gets or sets the HeatGenerationRate.                                                                |
| [`JIntegral`](#AnalysisSettings.JIntegral)                                                                                   | Gets or sets the JIntegral.                                                                         |
| [`MaterialForce`](#AnalysisSettings.MaterialForce)                                                                           | Gets or sets the MaterialForce.                                                                     |
| [`CalculateReactions`](#AnalysisSettings.CalculateReactions)                                                                 | Gets or sets the CalculateReactions.                                                                |
| [`SIFS`](#AnalysisSettings.SIFS)                                                                                             | Gets or sets the SIFS.                                                                              |
| [`Strain`](#AnalysisSettings.Strain)                                                                                         | Gets or sets the Strain.                                                                            |
| [`Stress`](#AnalysisSettings.Stress)                                                                                         | Gets or sets the Stress.                                                                            |
| [`CalculateThermalFlux`](#AnalysisSettings.CalculateThermalFlux)                                                             | Gets or sets the CalculateThermalFlux.                                                              |
| [`TStress`](#AnalysisSettings.TStress)                                                                                       | Gets or sets the TStress.                                                                           |
| [`CalculateVelocity`](#AnalysisSettings.CalculateVelocity)                                                                   | Gets or sets the CalculateVelocity.                                                                 |
| [`CalculateVelocityAndAcceleration`](#AnalysisSettings.CalculateVelocityAndAcceleration)                                     | Gets or sets the CalculateVelocityAndAcceleration.                                                  |
| [`CampbellDiagram`](../Results/ResultTrackers/CampbellDiagram.md#CampbellDiagram)                                            | Gets or sets the CampbellDiagram.                                                                   |
| [`CarryOverTimeStep`](#AnalysisSettings.CarryOverTimeStep)                                                                   | Gets or sets the CarryOverTimeStep.                                                                 |
| [`DeleteUnneededFiles`](#id41)                                                                                               | Gets or sets the DeleteUnneededFiles.                                                               |
| [`CyclicModeSuperposition`](#AnalysisSettings.CyclicModeSuperposition)                                                       | Gets or sets the CyclicModeSuperposition.                                                           |
| [`Damped`](#AnalysisSettings.Damped)                                                                                         | Gets or sets the Damped.                                                                            |
| [`EqvDampingRatioFromModal`](#AnalysisSettings.EqvDampingRatioFromModal)                                                     | Gets or sets the EqvDampingRatioFromModal.                                                          |
| [`ExcludeInsignificantModes`](#AnalysisSettings.ExcludeInsignificantModes)                                                   | Gets or sets the ExcludeInsignificantModes.                                                         |
| [`ExportHighStrains`](#AnalysisSettings.ExportHighStrains)                                                                   | Gets or sets the ExportHighStrains.                                                                 |
| [`ExportLayerEndTemperature`](#AnalysisSettings.ExportLayerEndTemperature)                                                   | Gets or sets the ExportLayerEndTemperature.                                                         |
| [`ExportRecoaterInterference`](#AnalysisSettings.ExportRecoaterInterference)                                                 | Gets or sets the ExportRecoaterInterference.                                                        |
| [`FractureSolverControls`](#AnalysisSettings.FractureSolverControls)                                                         | Gets or sets the FractureSolverControls.                                                            |
| [`GeneralMiscellaneous`](#AnalysisSettings.GeneralMiscellaneous)                                                             | Gets or sets the GeneralMiscellaneous.                                                              |
| [`ClusterResults`](#AnalysisSettings.ClusterResults)                                                                         | Gets or sets the ClusterResults.                                                                    |
| [`UserDefinedFrequencies`](#AnalysisSettings.UserDefinedFrequencies)                                                         | Gets or sets the UserDefinedFrequencies.                                                            |
| [`Multistep`](#AnalysisSettings.Multistep)                                                                                   | Gets or sets the Multistep.                                                                         |
| [`IncludeResidualVector`](#AnalysisSettings.IncludeResidualVector)                                                           | Gets or sets the IncludeResidualVector.                                                             |
| [`InverseOption`](#AnalysisSettings.InverseOption)                                                                           | Gets or sets the InverseOption.                                                                     |
| [`KeepModalResults`](#AnalysisSettings.KeepModalResults)                                                                     | Gets or sets the KeepModalResults.                                                                  |
| [`KeepPreStressLoadPattern`](#AnalysisSettings.KeepPreStressLoadPattern)                                                     | Gets or sets the KeepPreStressLoadPattern.                                                          |
| [`NonLinearSolution`](#AnalysisSettings.NonLinearSolution)                                                                   | Gets the NonLinearSolution.                                                                         |
| [`QuasiStaticSolution`](#AnalysisSettings.QuasiStaticSolution)                                                               | Gets or sets the QuasiStaticSolution.                                                               |
| [`LimitSearchToRange`](#AnalysisSettings.LimitSearchToRange)                                                                 | Gets or sets the LimitSearchToRange.                                                                |
| [`SaveMAPDLDB`](#id42)                                                                                                       | Gets or sets the SaveMAPDLDB.                                                                       |
| [`StoreComplexSolution`](#AnalysisSettings.StoreComplexSolution)                                                             | Gets or sets the StoreComplexSolution.                                                              |
| [`InertiaRelief`](#AnalysisSettings.InertiaRelief)                                                                           | Gets or sets the InertiaRelief.                                                                     |
| [`LargeDeflection`](#AnalysisSettings.LargeDeflection)                                                                       | Gets or sets the LargeDeflection.                                                                   |
| [`TimeIntegration`](#AnalysisSettings.TimeIntegration)                                                                       | Gets or sets the TimeIntegration.                                                                   |
| [`ElectricOnly`](#AnalysisSettings.ElectricOnly)                                                                             | Gets or sets the ElectricOnly.                                                                      |
| [`StructuralOnly`](#AnalysisSettings.StructuralOnly)                                                                         | Gets or sets the StructuralOnly.                                                                    |
| [`ThermalOnly`](#AnalysisSettings.ThermalOnly)                                                                               | Gets or sets the ThermalOnly.                                                                       |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)       | Gets the current DataModelObject’s category.                                                        |
| [`Graph`](#id116)                                                                                                            | Graph property.                                                                                     |
| [`ScratchSolverFilesDirectory`](#id118)                                                                                      | Gets the ScratchSolverFilesDirectory.                                                               |
| [`SolverFilesDirectory`](#id119)                                                                                             | Gets the SolverFilesDirectory.                                                                      |
| [`Children`](#id121)                                                                                                         | Gets the list of children.                                                                          |
| [`Comments`](#id122)                                                                                                         | Gets the list of associated comments.                                                               |
| [`Figures`](#id123)                                                                                                          | Gets the list of associated figures.                                                                |
| [`Images`](#id124)                                                                                                           | Gets the list of associated images.                                                                 |
| [`InternalObject`](#id117)                                                                                                   | Gets the internal object. For advanced usage only.                                                  |
| [`Properties`](#id125)                                                                                                       | Gets the list of properties for this object.                                                        |
| [`VisibleProperties`](#id126)                                                                                                | Gets the list of properties that are visible for this object.                                       |

<a id="id33"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AnalysisSettings import ANSYSAnalysisSettings
```

<a id="id34"></a>

## Property detail

<a id="AnalysisSettings.StepName"></a>

### *property* AnalysisSettings.StepName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Step Name.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AMStepType"></a>

### *property* AnalysisSettings.AMStepType *: [Ansys.Mechanical.DataModel.Enums.AMProcessStepType](../../../../Mechanical/DataModel/Enums/AMProcessStepType.md#AMProcessStepType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Process Step Type.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AMSubstepsToApplyHeats"></a>

### *property* AnalysisSettings.AMSubstepsToApplyHeats *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Substeps to Apply Heat.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AMSubstepsBetweenHeating"></a>

### *property* AnalysisSettings.AMSubstepsBetweenHeating *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Substeps Between Heating.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AMCooldownNumberOfSubsteps"></a>

### *property* AnalysisSettings.AMCooldownNumberOfSubsteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Cooldown Number of Substeps.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CooldownTimeType"></a>

### *property* AnalysisSettings.CooldownTimeType *: [Ansys.Mechanical.DataModel.Enums.AMCooldownTimeType](../../../../Mechanical/DataModel/Enums/AMCooldownTimeType.md#AMCooldownTimeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Cooldown Time Type.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CooldownTime"></a>

### *property* AnalysisSettings.CooldownTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Cooldown Time.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.LayersToBuild"></a>

### *property* AnalysisSettings.LayersToBuild *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Layers to Build.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ReferenceTemperatureType"></a>

### *property* AnalysisSettings.ReferenceTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMReferenceTemperatureType](../../../../Mechanical/DataModel/Enums/AMReferenceTemperatureType.md#AMReferenceTemperatureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Reference Temperature Type.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ReferenceTemperature"></a>

### *property* AnalysisSettings.ReferenceTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Reference Temperature.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RelaxationTemperatureType"></a>

### *property* AnalysisSettings.RelaxationTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMRelaxationTemperatureType](../../../../Mechanical/DataModel/Enums/AMRelaxationTemperatureType.md#AMRelaxationTemperatureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Relaxation Temperature Type.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.NumberOfRestartPoints"></a>

### *property* AnalysisSettings.NumberOfRestartPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets Number of Restart Points.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CurrentRestartPoint"></a>

### *property* AnalysisSettings.CurrentRestartPoint *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Current Restart Point.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AggressiveRemeshing"></a>

### *property* AnalysisSettings.AggressiveRemeshing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AggressiveRemeshing.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SpinSoftening"></a>

### *property* AnalysisSettings.SpinSoftening *: [Ansys.Mechanical.DataModel.Enums.SpinSofteningType](../../../../Mechanical/DataModel/Enums/SpinSofteningType.md#SpinSofteningType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpinSoftening.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.UserDefinedFrequencySteps"></a>

### *property* AnalysisSettings.UserDefinedFrequencySteps *: System.Collections.Generic.IList[Ansys.Core.Units.Quantity] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UserDefinedFrequencySteps.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* AnalysisSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisSettings | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MassCoefficient"></a>

### *property* AnalysisSettings.MassCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.StiffnessCoefficient"></a>

### *property* AnalysisSettings.StiffnessCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.DampingRatio"></a>

### *property* AnalysisSettings.DampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ConstantDampingRatio"></a>

### *property* AnalysisSettings.ConstantDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstantDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.StructuralDampingCoefficient"></a>

### *property* AnalysisSettings.StructuralDampingCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StructuralDampingCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ContactSplitMaxNum"></a>

### *property* AnalysisSettings.ContactSplitMaxNum *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSplitMaxNum.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ChargeConvergenceTolerance"></a>

### *property* AnalysisSettings.ChargeConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChargeConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CurrentConvergenceTolerance"></a>

### *property* AnalysisSettings.CurrentConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EmagAMPSConvergenceTolerance"></a>

### *property* AnalysisSettings.EmagAMPSConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagAMPSConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EmagCSGConvergenceTolerance"></a>

### *property* AnalysisSettings.EmagCSGConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagCSGConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EnergyConvergenceTolerance"></a>

### *property* AnalysisSettings.EnergyConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.HeatConvergenceTolerance"></a>

### *property* AnalysisSettings.HeatConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.TemperatureConvergenceTolerance"></a>

### *property* AnalysisSettings.TemperatureConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.VoltageConvergenceTolerance"></a>

### *property* AnalysisSettings.VoltageConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CreepLimitRatio"></a>

### *property* AnalysisSettings.CreepLimitRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CreepLimitRatio.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CurrentStepNumberHarmonic"></a>

### *property* AnalysisSettings.CurrentStepNumberHarmonic *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStepNumberHarmonic.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CurrentStepNumber"></a>

### *property* AnalysisSettings.CurrentStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EngineOrderofExcitation"></a>

### *property* AnalysisSettings.EngineOrderofExcitation *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EngineOrderofExcitation.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MaximumHarmonicIndex"></a>

### *property* AnalysisSettings.MaximumHarmonicIndex *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumHarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MinimumHarmonicIndex"></a>

### *property* AnalysisSettings.MinimumHarmonicIndex *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumHarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.HarmonicIndexInterval"></a>

### *property* AnalysisSettings.HarmonicIndexInterval *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndexInterval.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ClusterNumber"></a>

### *property* AnalysisSettings.ClusterNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ClusterNumber.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SolutionIntervals"></a>

### *property* AnalysisSettings.SolutionIntervals *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionIntervals.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.KrylovSubspaceDimension"></a>

### *property* AnalysisSettings.KrylovSubspaceDimension *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KrylovSubspaceDimension.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.KrylovResidualTolerance"></a>

### *property* AnalysisSettings.KrylovResidualTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KrylovResidualTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.InitialSubsteps"></a>

### *property* AnalysisSettings.InitialSubsteps *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialSubsteps.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.InverseOptionEndStep"></a>

### *property* AnalysisSettings.InverseOptionEndStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InverseOptionEndStep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MaximumSubsteps"></a>

### *property* AnalysisSettings.MaximumSubsteps *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumSubsteps.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MeshLoadStepValue"></a>

### *property* AnalysisSettings.MeshLoadStepValue *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshLoadStepValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MinimumSubsteps"></a>

### *property* AnalysisSettings.MinimumSubsteps *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumSubsteps.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ModalNumberOfPoints"></a>

### *property* AnalysisSettings.ModalNumberOfPoints *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalNumberOfPoints.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ModeSignificanceLevel"></a>

### *property* AnalysisSettings.ModeSignificanceLevel *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeSignificanceLevel.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GlobalSizeRatioQualityImprovement"></a>

### *property* AnalysisSettings.GlobalSizeRatioQualityImprovement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalSizeRatioQualityImprovement.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GlobalSizeRatioQualityRefinement"></a>

### *property* AnalysisSettings.GlobalSizeRatioQualityRefinement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalSizeRatioQualityRefinement.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.NumberOfSculptedLayersQualityImprovement"></a>

### *property* AnalysisSettings.NumberOfSculptedLayersQualityImprovement *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSculptedLayersQualityImprovement.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.NumberOfSculptedLayersRefinement"></a>

### *property* AnalysisSettings.NumberOfSculptedLayersRefinement *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSculptedLayersRefinement.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RemeshingToleranceQualityImprovement"></a>

### *property* AnalysisSettings.RemeshingToleranceQualityImprovement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshingToleranceQualityImprovement.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RemeshingToleranceRefinement"></a>

### *property* AnalysisSettings.RemeshingToleranceRefinement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshingToleranceRefinement.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.StoreResulsAtValue"></a>

### *property* AnalysisSettings.StoreResulsAtValue *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResulsAtValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.NumberOfModesToUse"></a>

### *property* AnalysisSettings.NumberOfModesToUse *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfModesToUse.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.NumberOfRPMs"></a>

### *property* AnalysisSettings.NumberOfRPMs *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfRPMs.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.NumberOfSteps"></a>

### *property* AnalysisSettings.NumberOfSteps *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSteps.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.NumberOfSubSteps"></a>

### *property* AnalysisSettings.NumberOfSubSteps *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSubSteps.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.NumericalDampingValue"></a>

### *property* AnalysisSettings.NumericalDampingValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDampingValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.NumLoadVectors"></a>

### *property* AnalysisSettings.NumLoadVectors *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumLoadVectors.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MaximumModesToFind"></a>

### *property* AnalysisSettings.MaximumModesToFind *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumModesToFind.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.NumberOfZones"></a>

### *property* AnalysisSettings.NumberOfZones *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfZones.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AxisymmetryDivisions"></a>

### *property* AnalysisSettings.AxisymmetryDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AxisymmetryDivisions.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.HemicubeResolution"></a>

### *property* AnalysisSettings.HemicubeResolution *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HemicubeResolution.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.FluxConvergence"></a>

### *property* AnalysisSettings.FluxConvergence *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluxConvergence.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MaximumIteration"></a>

### *property* AnalysisSettings.MaximumIteration *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumIteration.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.OverRelaxation"></a>

### *property* AnalysisSettings.OverRelaxation *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OverRelaxation.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ReformulationTolerance"></a>

### *property* AnalysisSettings.ReformulationTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReformulationTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RestartAtLoadStep"></a>

### *property* AnalysisSettings.RestartAtLoadStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RestartAtLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RestartAtSubstep"></a>

### *property* AnalysisSettings.RestartAtSubstep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RestartAtSubstep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RestartAtTime"></a>

### *property* AnalysisSettings.RestartAtTime *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RestartAtTime.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RpmClusterNumber"></a>

### *property* AnalysisSettings.RpmClusterNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmClusterNumber.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RpmSolutionIntervals"></a>

### *property* AnalysisSettings.RpmSolutionIntervals *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmSolutionIntervals.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MaximumPointsToSavePerStep"></a>

### *property* AnalysisSettings.MaximumPointsToSavePerStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumPointsToSavePerStep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SaveSpecifiedLoadStep"></a>

### *property* AnalysisSettings.SaveSpecifiedLoadStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveSpecifiedLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.LoadStepValue"></a>

### *property* AnalysisSettings.LoadStepValue *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SignificanceThreshold"></a>

### *property* AnalysisSettings.SignificanceThreshold *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SignificanceThreshold.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.StabilizationDampingFactor"></a>

### *property* AnalysisSettings.StabilizationDampingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationDampingFactor.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.StabilizationEnergyDissipationRatio"></a>

### *property* AnalysisSettings.StabilizationEnergyDissipationRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationEnergyDissipationRatio.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.StabilizationForceLimit"></a>

### *property* AnalysisSettings.StabilizationForceLimit *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationForceLimit.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.TransientApplicationUserDefined"></a>

### *property* AnalysisSettings.TransientApplicationUserDefined *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransientApplicationUserDefined.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SpringStiffnessFactor"></a>

### *property* AnalysisSettings.SpringStiffnessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringStiffnessFactor.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RelaxationTemperature"></a>

### *property* AnalysisSettings.RelaxationTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelaxationTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Frequency"></a>

### *property* AnalysisSettings.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CentralFrequency"></a>

### *property* AnalysisSettings.CentralFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CentralFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ChargeConvergenceMinimumReference"></a>

### *property* AnalysisSettings.ChargeConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChargeConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ChargeConvergenceValue"></a>

### *property* AnalysisSettings.ChargeConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChargeConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CurrentConvergenceMinimumReference"></a>

### *property* AnalysisSettings.CurrentConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CurrentConvergenceValue"></a>

### *property* AnalysisSettings.CurrentConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.DisplacementConvergenceMinimumReference"></a>

### *property* AnalysisSettings.DisplacementConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.DisplacementConvergenceTolerance"></a>

### *property* AnalysisSettings.DisplacementConvergenceTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.DisplacementConvergenceValue"></a>

### *property* AnalysisSettings.DisplacementConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EmagAMPSConvergenceMinimumReference"></a>

### *property* AnalysisSettings.EmagAMPSConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagAMPSConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EmagAMPSConvergenceValue"></a>

### *property* AnalysisSettings.EmagAMPSConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagAMPSConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EmagCSGConvergenceMinimumReference"></a>

### *property* AnalysisSettings.EmagCSGConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagCSGConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EmagCSGConvergenceValue"></a>

### *property* AnalysisSettings.EmagCSGConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagCSGConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EnergyConvergenceMinimumReference"></a>

### *property* AnalysisSettings.EnergyConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EnergyConvergenceValue"></a>

### *property* AnalysisSettings.EnergyConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ForceConvergenceMinimumReference"></a>

### *property* AnalysisSettings.ForceConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ForceConvergenceTolerance"></a>

### *property* AnalysisSettings.ForceConvergenceTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ForceConvergenceValue"></a>

### *property* AnalysisSettings.ForceConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.HeatConvergenceMinimumReference"></a>

### *property* AnalysisSettings.HeatConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.HeatConvergenceValue"></a>

### *property* AnalysisSettings.HeatConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MomentConvergenceMinimumReference"></a>

### *property* AnalysisSettings.MomentConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MomentConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MomentConvergenceTolerance"></a>

### *property* AnalysisSettings.MomentConvergenceTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MomentConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MomentConvergenceValue"></a>

### *property* AnalysisSettings.MomentConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MomentConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RotationConvergenceMinimumReference"></a>

### *property* AnalysisSettings.RotationConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RotationConvergenceTolerance"></a>

### *property* AnalysisSettings.RotationConvergenceTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.TemperatureConvergenceMinimumReference"></a>

### *property* AnalysisSettings.TemperatureConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.TemperatureConvergenceInputValue"></a>

### *property* AnalysisSettings.TemperatureConvergenceInputValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergenceInputValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.VoltageConvergenceMinimumReference"></a>

### *property* AnalysisSettings.VoltageConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.VoltageConvergenceValue"></a>

### *property* AnalysisSettings.VoltageConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RemovalDirection"></a>

### *property* AnalysisSettings.RemovalDirection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemovalDirection.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RemovalStepSize"></a>

### *property* AnalysisSettings.RemovalStepSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemovalStepSize.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.StepEndTime"></a>

### *property* AnalysisSettings.StepEndTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepEndTime.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MinimumElementSize"></a>

### *property* AnalysisSettings.MinimumElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Minimum Element Size property for Geometry Based Adaptivity.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RangeMaximum"></a>

### *property* AnalysisSettings.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Range Maximum property in Options group of Analysis Settings in Harmonic Analysis.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RangeMinimum"></a>

### *property* AnalysisSettings.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Range Minimum property in Options group of Analysis Settings in Harmonic Analysis.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.KrylovSubspaceFrequency"></a>

### *property* AnalysisSettings.KrylovSubspaceFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KrylovSubspaceFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ModalRangeMaximum"></a>

### *property* AnalysisSettings.ModalRangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalRangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ModalRangeMinimum"></a>

### *property* AnalysisSettings.ModalRangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalRangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.InitialTimeStep"></a>

### *property* AnalysisSettings.InitialTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SearchRangeMaximum"></a>

### *property* AnalysisSettings.SearchRangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Range Maximum property in Options group of Analysis Settings in Modal Analysis.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MaximumTimeStep"></a>

### *property* AnalysisSettings.MaximumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SearchRangeMinimum"></a>

### *property* AnalysisSettings.SearchRangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Range Minimum property in Options group of Analysis Settings in Modal Analysis.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MinimumTimeStep"></a>

### *property* AnalysisSettings.MinimumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.BoundaryAngle"></a>

### *property* AnalysisSettings.BoundaryAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryAngle.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EdgeSplittingAngle"></a>

### *property* AnalysisSettings.EdgeSplittingAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeSplittingAngle.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SolverTolerance"></a>

### *property* AnalysisSettings.SolverTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RpmValue"></a>

### *property* AnalysisSettings.RpmValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RpmCentralFrequency"></a>

### *property* AnalysisSettings.RpmCentralFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmCentralFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RpmRangeMaximum"></a>

### *property* AnalysisSettings.RpmRangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmRangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RpmRangeMinimum"></a>

### *property* AnalysisSettings.RpmRangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmRangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.TimeStep"></a>

### *property* AnalysisSettings.TimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeStep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SpringStiffnessValue"></a>

### *property* AnalysisSettings.SpringStiffnessValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringStiffnessValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.BaseRemovalType"></a>

### *property* AnalysisSettings.BaseRemovalType *: [Ansys.Mechanical.DataModel.Enums.AMBaseRemovalType](../../../../Mechanical/DataModel/Enums/AMBaseRemovalType.md#AMBaseRemovalType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BaseRemovalType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.StiffnessCoefficientDefineBy"></a>

### *property* AnalysisSettings.StiffnessCoefficientDefineBy *: [Ansys.Mechanical.DataModel.Enums.DampingType](../../../../Mechanical/DataModel/Enums/DampingType.md#DampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessCoefficientDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CacheResultsInMemory"></a>

### *property* AnalysisSettings.CacheResultsInMemory *: [Ansys.Mechanical.DataModel.Enums.CacheResultsInMemory](../../../../Mechanical/DataModel/Enums/CacheResultsInMemory.md#CacheResultsInMemory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CacheResultsInMemory.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ParticipationFactor"></a>

### *property* AnalysisSettings.ParticipationFactor *: [Ansys.Mechanical.DataModel.Enums.CalculateParticipationFactorResult](../../../../Mechanical/DataModel/Enums/CalculateParticipationFactorResult.md#CalculateParticipationFactorResult) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ParticipationFactor.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* AnalysisSettings.StoreResultsAt *: [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../Mechanical/DataModel/Enums/TimePointsOptions.md#TimePointsOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAt.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ConstantDamping"></a>

### *property* AnalysisSettings.ConstantDamping *: [Ansys.Mechanical.DataModel.Enums.ConstantDampingType](../../../../Mechanical/DataModel/Enums/ConstantDampingType.md#ConstantDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstantDamping.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ContactSplit"></a>

### *property* AnalysisSettings.ContactSplit *: [Ansys.Mechanical.DataModel.Enums.ContactSplitType](../../../../Mechanical/DataModel/Enums/ContactSplitType.md#ContactSplitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSplit.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ContactSummary"></a>

### *property* AnalysisSettings.ContactSummary *: [Ansys.Mechanical.DataModel.Enums.ContactSummaryType](../../../../Mechanical/DataModel/Enums/ContactSummaryType.md#ContactSummaryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSummary.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ChargeConvergence"></a>

### *property* AnalysisSettings.ChargeConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChargeConvergence.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CurrentConvergence"></a>

### *property* AnalysisSettings.CurrentConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentConvergence.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.DisplacementConvergence"></a>

### *property* AnalysisSettings.DisplacementConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementConvergence.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AMPSConvergence"></a>

### *property* AnalysisSettings.AMPSConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AMPSConvergence.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CSGConvergence"></a>

### *property* AnalysisSettings.CSGConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CSGConvergence.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EnergyConvergence"></a>

### *property* AnalysisSettings.EnergyConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyConvergence.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ForceConvergence"></a>

### *property* AnalysisSettings.ForceConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceConvergence.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.HeatConvergence"></a>

### *property* AnalysisSettings.HeatConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatConvergence.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MomentConvergence"></a>

### *property* AnalysisSettings.MomentConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MomentConvergence.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RotationConvergence"></a>

### *property* AnalysisSettings.RotationConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationConvergence.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.TemperatureConvergence"></a>

### *property* AnalysisSettings.TemperatureConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergence.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.TemperatureConvergenceValue"></a>

### *property* AnalysisSettings.TemperatureConvergenceValue *: [Ansys.Mechanical.DataModel.Enums.NonLinearValueType](../../../../Mechanical/DataModel/Enums/NonLinearValueType.md#NonLinearValueType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.VoltageConvergence"></a>

### *property* AnalysisSettings.VoltageConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageConvergence.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CoriolisEffectApplied"></a>

### *property* AnalysisSettings.CoriolisEffectApplied *: [Ansys.Mechanical.DataModel.Enums.CoriolisEffectType](../../../../Mechanical/DataModel/Enums/CoriolisEffectType.md#CoriolisEffectType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoriolisEffectApplied.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CreepEffects"></a>

### *property* AnalysisSettings.CreepEffects *: [Ansys.Mechanical.DataModel.Enums.Creep](../../../../Mechanical/DataModel/Enums/Creep.md#Creep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CreepEffects.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.HarmonicIndexRange"></a>

### *property* AnalysisSettings.HarmonicIndexRange *: [Ansys.Mechanical.DataModel.Enums.CyclicHarmonicIndex](../../../../Mechanical/DataModel/Enums/CyclicHarmonicIndex.md#CyclicHarmonicIndex) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndexRange.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.DampingDefineBy"></a>

### *property* AnalysisSettings.DampingDefineBy *: [Ansys.Mechanical.DataModel.Enums.DampingDefineBy](../../../../Mechanical/DataModel/Enums/DampingDefineBy.md#DampingDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DampingDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.FarFieldRadiationSurface"></a>

### *property* AnalysisSettings.FarFieldRadiationSurface *: [Ansys.Mechanical.DataModel.Enums.FarFieldRadiationSurfaceType](../../../../Mechanical/DataModel/Enums/FarFieldRadiationSurfaceType.md#FarFieldRadiationSurfaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FarFieldRadiationSurface.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ExpandResultsFrom"></a>

### *property* AnalysisSettings.ExpandResultsFrom *: [Ansys.Mechanical.DataModel.Enums.ExpandResultFrom](../../../../Mechanical/DataModel/Enums/ExpandResultFrom.md#ExpandResultFrom) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExpandResultsFrom.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.FrequencySpacing"></a>

### *property* AnalysisSettings.FrequencySpacing *: [Ansys.Mechanical.DataModel.Enums.FrequencySpacingType](../../../../Mechanical/DataModel/Enums/FrequencySpacingType.md#FrequencySpacingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencySpacing.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* AnalysisSettings.FutureAnalysis *: [Ansys.Mechanical.DataModel.Enums.FutureIntentType](../../../../Mechanical/DataModel/Enums/FutureIntentType.md#FutureIntentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FutureAnalysis.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GeneralMiscellaneousOption"></a>

### *property* AnalysisSettings.GeneralMiscellaneousOption *: [Ansys.Mechanical.DataModel.Enums.GeneralMiscellaneousOptionType](../../../../Mechanical/DataModel/Enums/GeneralMiscellaneousOptionType.md#GeneralMiscellaneousOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneralMiscellaneousOption.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MultistepType"></a>

### *property* AnalysisSettings.MultistepType *: [Ansys.Mechanical.DataModel.Enums.HarmonicMultiStepType](../../../../Mechanical/DataModel/Enums/HarmonicMultiStepType.md#HarmonicMultiStepType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultistepType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ModalFrequencyRange"></a>

### *property* AnalysisSettings.ModalFrequencyRange *: [Ansys.Mechanical.DataModel.Enums.ModalFrequencyRangeType](../../../../Mechanical/DataModel/Enums/ModalFrequencyRangeType.md#ModalFrequencyRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.StoreResultsAtAllFrequencies"></a>

### *property* AnalysisSettings.StoreResultsAtAllFrequencies *: [Ansys.Mechanical.DataModel.Enums.HarmonicMSUPStorage](../../../../Mechanical/DataModel/Enums/HarmonicMSUPStorage.md#HarmonicMSUPStorage) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAtAllFrequencies.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SolutionMethod"></a>

### *property* AnalysisSettings.SolutionMethod *: [Ansys.Mechanical.DataModel.Enums.HarmonicMethod](../../../../Mechanical/DataModel/Enums/HarmonicMethod.md#HarmonicMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionMethod.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.IncludeNegativeLoadMultiplier"></a>

### *property* AnalysisSettings.IncludeNegativeLoadMultiplier *: [Ansys.Mechanical.DataModel.Enums.SolverControlsIncludeNegativeLoadMultiplier](../../../../Mechanical/DataModel/Enums/SolverControlsIncludeNegativeLoadMultiplier.md#SolverControlsIncludeNegativeLoadMultiplier) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IncludeNegativeLoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.LineSearch"></a>

### *property* AnalysisSettings.LineSearch *: [Ansys.Mechanical.DataModel.Enums.LineSearchType](../../../../Mechanical/DataModel/Enums/LineSearchType.md#LineSearchType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LineSearch.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GenerateMeshRestartPoints"></a>

### *property* AnalysisSettings.GenerateMeshRestartPoints *: [Ansys.Mechanical.DataModel.Enums.MeshRestartControlsType](../../../../Mechanical/DataModel/Enums/MeshRestartControlsType.md#MeshRestartControlsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateMeshRestartPoints.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MeshRetainFilesAfterFullSolve"></a>

### *property* AnalysisSettings.MeshRetainFilesAfterFullSolve *: [Ansys.Mechanical.DataModel.Enums.MeshRestartRetainFilesType](../../../../Mechanical/DataModel/Enums/MeshRestartRetainFilesType.md#MeshRestartRetainFilesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshRetainFilesAfterFullSolve.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MeshSaveAtLoadStep"></a>

### *property* AnalysisSettings.MeshSaveAtLoadStep *: [Ansys.Mechanical.DataModel.Enums.MeshRestartSaveAtLoadStep](../../../../Mechanical/DataModel/Enums/MeshRestartSaveAtLoadStep.md#MeshRestartSaveAtLoadStep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshSaveAtLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MeshSaveAtSubstep"></a>

### *property* AnalysisSettings.MeshSaveAtSubstep *: [Ansys.Mechanical.DataModel.Enums.MeshRestartSaveAtSubstep](../../../../Mechanical/DataModel/Enums/MeshRestartSaveAtSubstep.md#MeshRestartSaveAtSubstep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshSaveAtSubstep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ModeReuse"></a>

### *property* AnalysisSettings.ModeReuse *: [Ansys.Mechanical.DataModel.Enums.SolverControlsModeReuse](../../../../Mechanical/DataModel/Enums/SolverControlsModeReuse.md#SolverControlsModeReuse) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeReuse.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ModesCombinationType"></a>

### *property* AnalysisSettings.ModesCombinationType *: [Ansys.Mechanical.DataModel.Enums.ModesCombinationType](../../../../Mechanical/DataModel/Enums/ModesCombinationType.md#ModesCombinationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModesCombinationType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ModeSelectionMethod"></a>

### *property* AnalysisSettings.ModeSelectionMethod *: [Ansys.Mechanical.DataModel.Enums.ModeSelectionMethod](../../../../Mechanical/DataModel/Enums/ModeSelectionMethod.md#ModeSelectionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeSelectionMethod.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.OnDemandExpansionOption"></a>

### *property* AnalysisSettings.OnDemandExpansionOption *: [Ansys.Mechanical.DataModel.Enums.OnDemandExpansionType](../../../../Mechanical/DataModel/Enums/OnDemandExpansionType.md#OnDemandExpansionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OnDemandExpansionOption.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.NewtonRaphsonOption"></a>

### *property* AnalysisSettings.NewtonRaphsonOption *: [Ansys.Mechanical.DataModel.Enums.NewtonRaphsonType](../../../../Mechanical/DataModel/Enums/NewtonRaphsonType.md#NewtonRaphsonType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NewtonRaphsonOption.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.NodalForces"></a>

### *property* AnalysisSettings.NodalForces *: [Ansys.Mechanical.DataModel.Enums.OutputControlsNodalForcesType](../../../../Mechanical/DataModel/Enums/OutputControlsNodalForcesType.md#OutputControlsNodalForcesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalForces.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ProjectToGeometry"></a>

### *property* AnalysisSettings.ProjectToGeometry *: [Ansys.Mechanical.DataModel.Enums.NLADControlProjectToGeometry](../../../../Mechanical/DataModel/Enums/NLADControlProjectToGeometry.md#NLADControlProjectToGeometry) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectToGeometry.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RefinementAlgorithm"></a>

### *property* AnalysisSettings.RefinementAlgorithm *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityControlsRefinementAlgorithmType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityControlsRefinementAlgorithmType.md#NonlinearAdaptivityControlsRefinementAlgorithmType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RefinementAlgorithm.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RemeshingGradient"></a>

### *property* AnalysisSettings.RemeshingGradient *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityControlsRemeshingGradientType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityControlsRemeshingGradientType.md#NonlinearAdaptivityControlsRemeshingGradientType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshingGradient.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.NonLinearFormulation"></a>

### *property* AnalysisSettings.NonLinearFormulation *: [Ansys.Mechanical.DataModel.Enums.NonLinearFormulationType](../../../../Mechanical/DataModel/Enums/NonLinearFormulationType.md#NonLinearFormulationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonLinearFormulation.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.NumericalDamping"></a>

### *property* AnalysisSettings.NumericalDamping *: [Ansys.Mechanical.DataModel.Enums.TransientDampingType](../../../../Mechanical/DataModel/Enums/TransientDampingType.md#TransientDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDamping.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Expansion"></a>

### *property* AnalysisSettings.Expansion *: [Ansys.Mechanical.DataModel.Enums.ExpandResultsSubType](../../../../Mechanical/DataModel/Enums/ExpandResultsSubType.md#ExpandResultsSubType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Expansion.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ViewFactorMethod"></a>

### *property* AnalysisSettings.ViewFactorMethod *: [Ansys.Mechanical.DataModel.Enums.RadiosityViewFactorType](../../../../Mechanical/DataModel/Enums/RadiosityViewFactorType.md#RadiosityViewFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViewFactorMethod.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RadiositySolver"></a>

### *property* AnalysisSettings.RadiositySolver *: [Ansys.Mechanical.DataModel.Enums.RadiositySolverType](../../../../Mechanical/DataModel/Enums/RadiositySolverType.md#RadiositySolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadiositySolver.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CombineRestartFiles"></a>

### *property* AnalysisSettings.CombineRestartFiles *: [Ansys.Mechanical.DataModel.Enums.CombineRestartFilesType](../../../../Mechanical/DataModel/Enums/CombineRestartFilesType.md#CombineRestartFilesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CombineRestartFiles.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GenerateRestartPoints"></a>

### *property* AnalysisSettings.GenerateRestartPoints *: [Ansys.Mechanical.DataModel.Enums.RestartControlsType](../../../../Mechanical/DataModel/Enums/RestartControlsType.md#RestartControlsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateRestartPoints.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RetainFilesAfterFullSolve"></a>

### *property* AnalysisSettings.RetainFilesAfterFullSolve *: [Ansys.Mechanical.DataModel.Enums.RestartRetainFilesType](../../../../Mechanical/DataModel/Enums/RestartRetainFilesType.md#RestartRetainFilesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RetainFilesAfterFullSolve.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RestartType"></a>

### *property* AnalysisSettings.RestartType *: [Ansys.Mechanical.DataModel.Enums.RestartType](../../../../Mechanical/DataModel/Enums/RestartType.md#RestartType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RestartType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ResultFileCompression"></a>

### *property* AnalysisSettings.ResultFileCompression *: [Ansys.Mechanical.DataModel.Enums.ResultFileCompressionType](../../../../Mechanical/DataModel/Enums/ResultFileCompressionType.md#ResultFileCompressionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultFileCompression.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RpmFrequencySpacing"></a>

### *property* AnalysisSettings.RpmFrequencySpacing *: [Ansys.Mechanical.DataModel.Enums.FrequencySpacingType](../../../../Mechanical/DataModel/Enums/FrequencySpacingType.md#FrequencySpacingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmFrequencySpacing.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SaveAtLoadStep"></a>

### *property* AnalysisSettings.SaveAtLoadStep *: [Ansys.Mechanical.DataModel.Enums.RestartSaveAtLoadStep](../../../../Mechanical/DataModel/Enums/RestartSaveAtLoadStep.md#RestartSaveAtLoadStep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveAtLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SaveAtSubstep"></a>

### *property* AnalysisSettings.SaveAtSubstep *: [Ansys.Mechanical.DataModel.Enums.RestartSaveAtSubstep](../../../../Mechanical/DataModel/Enums/RestartSaveAtSubstep.md#RestartSaveAtSubstep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveAtSubstep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ScatteredFieldFormulation"></a>

### *property* AnalysisSettings.ScatteredFieldFormulation *: [Ansys.Mechanical.DataModel.Enums.ScatteredFieldFormulation](../../../../Mechanical/DataModel/Enums/ScatteredFieldFormulation.md#ScatteredFieldFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScatteredFieldFormulation.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ScatteringOutputType"></a>

### *property* AnalysisSettings.ScatteringOutputType *: [Ansys.Mechanical.DataModel.Enums.ScatteringOutputType](../../../../Mechanical/DataModel/Enums/ScatteringOutputType.md#ScatteringOutputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScatteringOutputType.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* AnalysisSettings.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SolverPivotChecking"></a>

### *property* AnalysisSettings.SolverPivotChecking *: [Ansys.Mechanical.DataModel.Enums.SolverPivotChecking](../../../../Mechanical/DataModel/Enums/SolverPivotChecking.md#SolverPivotChecking) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverPivotChecking.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* AnalysisSettings.SolverType *: [Ansys.Mechanical.DataModel.Enums.SolverType](../../../../Mechanical/DataModel/Enums/SolverType.md#SolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverType.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* AnalysisSettings.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SpectrumType"></a>

### *property* AnalysisSettings.SpectrumType *: [Ansys.Mechanical.DataModel.Enums.SpectrumType](../../../../Mechanical/DataModel/Enums/SpectrumType.md#SpectrumType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpectrumType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Stabilization"></a>

### *property* AnalysisSettings.Stabilization *: [Ansys.Mechanical.DataModel.Enums.StabilizationType](../../../../Mechanical/DataModel/Enums/StabilizationType.md#StabilizationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Stabilization.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.StabilizationActivationForFirstSubstep"></a>

### *property* AnalysisSettings.StabilizationActivationForFirstSubstep *: [Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption](../../../../Mechanical/DataModel/Enums/StabilizationFirstSubstepOption.md#StabilizationFirstSubstepOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationActivationForFirstSubstep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.StabilizationMethod"></a>

### *property* AnalysisSettings.StabilizationMethod *: [Ansys.Mechanical.DataModel.Enums.StabilizationMethod](../../../../Mechanical/DataModel/Enums/StabilizationMethod.md#StabilizationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationMethod.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.StoreModalResults"></a>

### *property* AnalysisSettings.StoreModalResults *: [Ansys.Mechanical.DataModel.Enums.StoreModalResult](../../../../Mechanical/DataModel/Enums/StoreModalResult.md#StoreModalResult) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreModalResults.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.DefineBy"></a>

### *property* AnalysisSettings.DefineBy *: [Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType](../../../../Mechanical/DataModel/Enums/TimeStepDefineByType.md#TimeStepDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.TransientApplication"></a>

### *property* AnalysisSettings.TransientApplication *: [Ansys.Mechanical.DataModel.Enums.TransientApplicationType](../../../../Mechanical/DataModel/Enums/TransientApplicationType.md#TransientApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransientApplication.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AutomaticTimeStepping"></a>

### *property* AnalysisSettings.AutomaticTimeStepping *: [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#AutomaticTimeStepping) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticTimeStepping.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RetainModesymFileAfterSolve"></a>

### *property* AnalysisSettings.RetainModesymFileAfterSolve *: [Ansys.Mechanical.DataModel.Enums.UseExistingModesymFile](../../../../Mechanical/DataModel/Enums/UseExistingModesymFile.md#UseExistingModesymFile) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RetainModesymFileAfterSolve.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.WeakSprings"></a>

### *property* AnalysisSettings.WeakSprings *: [Ansys.Mechanical.DataModel.Enums.WeakSpringsType](../../../../Mechanical/DataModel/Enums/WeakSpringsType.md#WeakSpringsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeakSprings.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SpringStiffness"></a>

### *property* AnalysisSettings.SpringStiffness *: [Ansys.Mechanical.DataModel.Enums.SpringsStiffnessType](../../../../Mechanical/DataModel/Enums/SpringsStiffnessType.md#SpringsStiffnessType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringStiffness.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.IgnoreAcousticDamping"></a>

### *property* AnalysisSettings.IgnoreAcousticDamping *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IgnoreAcousticDamping.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CalculateAcceleration"></a>

### *property* AnalysisSettings.CalculateAcceleration *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateAcceleration.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.BackStress"></a>

### *property* AnalysisSettings.BackStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BackStress.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ContactMiscellaneous"></a>

### *property* AnalysisSettings.ContactMiscellaneous *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactMiscellaneous.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CStarIntegral"></a>

### *property* AnalysisSettings.CStarIntegral *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CStarIntegral.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ElementCurrentDensity"></a>

### *property* AnalysisSettings.ElementCurrentDensity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementCurrentDensity.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.FieldIntensityandFluxDensity"></a>

### *property* AnalysisSettings.FieldIntensityandFluxDensity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FieldIntensityandFluxDensity.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ElectromagneticNodalForces"></a>

### *property* AnalysisSettings.ElectromagneticNodalForces *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectromagneticNodalForces.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ContactData"></a>

### *property* AnalysisSettings.ContactData *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactData.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CalculateVolumeEnergy"></a>

### *property* AnalysisSettings.CalculateVolumeEnergy *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateVolumeEnergy.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.NonlinearData"></a>

### *property* AnalysisSettings.NonlinearData *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearData.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CalculateEnergy"></a>

### *property* AnalysisSettings.CalculateEnergy *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateEnergy.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CalculateEulerAngles"></a>

### *property* AnalysisSettings.CalculateEulerAngles *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateEulerAngles.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.HeatGenerationRate"></a>

### *property* AnalysisSettings.HeatGenerationRate *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatGenerationRate.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.JIntegral"></a>

### *property* AnalysisSettings.JIntegral *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JIntegral.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MaterialForce"></a>

### *property* AnalysisSettings.MaterialForce *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialForce.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CalculateReactions"></a>

### *property* AnalysisSettings.CalculateReactions *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateReactions.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SIFS"></a>

### *property* AnalysisSettings.SIFS *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SIFS.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Strain"></a>

### *property* AnalysisSettings.Strain *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Strain.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Stress"></a>

### *property* AnalysisSettings.Stress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Stress.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CalculateThermalFlux"></a>

### *property* AnalysisSettings.CalculateThermalFlux *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateThermalFlux.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.TStress"></a>

### *property* AnalysisSettings.TStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TStress.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CalculateVelocity"></a>

### *property* AnalysisSettings.CalculateVelocity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateVelocity.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CalculateVelocityAndAcceleration"></a>

### *property* AnalysisSettings.CalculateVelocityAndAcceleration *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateVelocityAndAcceleration.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CampbellDiagram"></a>

### *property* AnalysisSettings.CampbellDiagram *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CampbellDiagram.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CarryOverTimeStep"></a>

### *property* AnalysisSettings.CarryOverTimeStep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CarryOverTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* AnalysisSettings.DeleteUnneededFiles *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeleteUnneededFiles.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CyclicModeSuperposition"></a>

### *property* AnalysisSettings.CyclicModeSuperposition *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicModeSuperposition.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Damped"></a>

### *property* AnalysisSettings.Damped *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Damped.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EqvDampingRatioFromModal"></a>

### *property* AnalysisSettings.EqvDampingRatioFromModal *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EqvDampingRatioFromModal.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ExcludeInsignificantModes"></a>

### *property* AnalysisSettings.ExcludeInsignificantModes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExcludeInsignificantModes.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ExportHighStrains"></a>

### *property* AnalysisSettings.ExportHighStrains *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportHighStrains.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ExportLayerEndTemperature"></a>

### *property* AnalysisSettings.ExportLayerEndTemperature *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportLayerEndTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ExportRecoaterInterference"></a>

### *property* AnalysisSettings.ExportRecoaterInterference *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportRecoaterInterference.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.FractureSolverControls"></a>

### *property* AnalysisSettings.FractureSolverControls *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureSolverControls.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GeneralMiscellaneous"></a>

### *property* AnalysisSettings.GeneralMiscellaneous *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneralMiscellaneous.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ClusterResults"></a>

### *property* AnalysisSettings.ClusterResults *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ClusterResults.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.UserDefinedFrequencies"></a>

### *property* AnalysisSettings.UserDefinedFrequencies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UserDefinedFrequencies.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Multistep"></a>

### *property* AnalysisSettings.Multistep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Multistep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.IncludeResidualVector"></a>

### *property* AnalysisSettings.IncludeResidualVector *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IncludeResidualVector.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.InverseOption"></a>

### *property* AnalysisSettings.InverseOption *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InverseOption.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.KeepModalResults"></a>

### *property* AnalysisSettings.KeepModalResults *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeepModalResults.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.KeepPreStressLoadPattern"></a>

### *property* AnalysisSettings.KeepPreStressLoadPattern *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeepPreStressLoadPattern.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.NonLinearSolution"></a>

### *property* AnalysisSettings.NonLinearSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NonLinearSolution.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.QuasiStaticSolution"></a>

### *property* AnalysisSettings.QuasiStaticSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the QuasiStaticSolution.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.LimitSearchToRange"></a>

### *property* AnalysisSettings.LimitSearchToRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitSearchToRange.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* AnalysisSettings.SaveMAPDLDB *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveMAPDLDB.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.StoreComplexSolution"></a>

### *property* AnalysisSettings.StoreComplexSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreComplexSolution.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.InertiaRelief"></a>

### *property* AnalysisSettings.InertiaRelief *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InertiaRelief.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.LargeDeflection"></a>

### *property* AnalysisSettings.LargeDeflection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargeDeflection.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.TimeIntegration"></a>

### *property* AnalysisSettings.TimeIntegration *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeIntegration.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ElectricOnly"></a>

### *property* AnalysisSettings.ElectricOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricOnly.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.StructuralOnly"></a>

### *property* AnalysisSettings.StructuralOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StructuralOnly.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ThermalOnly"></a>

### *property* AnalysisSettings.ThermalOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalOnly.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* AnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* AnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* AnalysisSettings.ScratchSolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* AnalysisSettings.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* AnalysisSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* AnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* AnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* AnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* AnalysisSettings.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* AnalysisSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* AnalysisSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

## Method detail

<a id="AnalysisSettings.GetStepEndTime"></a>

### AnalysisSettings.GetStepEndTime(stepNumber: System.UInt32)

Gets the Step End Time at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetStepEndTime"></a>

### AnalysisSettings.SetStepEndTime(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Step End Time for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetAutomaticTimeStepping"></a>

### AnalysisSettings.GetAutomaticTimeStepping(stepNumber: System.UInt32)

Gets the Automatic Time Stepping at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetAutomaticTimeStepping"></a>

### AnalysisSettings.SetAutomaticTimeStepping(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#AutomaticTimeStepping))

Sets the Automatic Time Stepping for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetForceConvergenceType"></a>

### AnalysisSettings.GetForceConvergenceType(stepNumber: System.UInt32)

Gets the Force Convergence Tolerance Type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetForceConvergenceType"></a>

### AnalysisSettings.SetForceConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Force Convergence Tolerance Type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetForceConvergenceTolerance"></a>

### AnalysisSettings.GetForceConvergenceTolerance(stepNumber: System.UInt32)

Gets the Force Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetForceConvergenceTolerance"></a>

### AnalysisSettings.SetForceConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Force Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetForceConvergenceValue"></a>

### AnalysisSettings.GetForceConvergenceValue(stepNumber: System.UInt32)

Gets the Force Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetForceConvergenceValue"></a>

### AnalysisSettings.SetForceConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Force Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetForceConvergenceMinimumReference"></a>

### AnalysisSettings.GetForceConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Force Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetForceConvergenceMinimumReference"></a>

### AnalysisSettings.SetForceConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Force Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetMomentConvergenceType"></a>

### AnalysisSettings.GetMomentConvergenceType(stepNumber: System.UInt32)

Gets the Moment Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetMomentConvergenceType"></a>

### AnalysisSettings.SetMomentConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Moment Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetMomentConvergenceTolerance"></a>

### AnalysisSettings.GetMomentConvergenceTolerance(stepNumber: System.UInt32)

Gets the Moment Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetMomentConvergenceTolerance"></a>

### AnalysisSettings.SetMomentConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Moment Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetMomentConvergenceValue"></a>

### AnalysisSettings.GetMomentConvergenceValue(stepNumber: System.UInt32)

Gets the Moment Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetMomentConvergenceValue"></a>

### AnalysisSettings.SetMomentConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Moment Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetMomentConvergenceMinimumReference"></a>

### AnalysisSettings.GetMomentConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Moment Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetMomentConvergenceMinimumReference"></a>

### AnalysisSettings.SetMomentConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Moment Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetDisplacementConvergenceType"></a>

### AnalysisSettings.GetDisplacementConvergenceType(stepNumber: System.UInt32)

Gets the Displacement Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetDisplacementConvergenceType"></a>

### AnalysisSettings.SetDisplacementConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Displacement Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetDisplacementConvergenceTolerance"></a>

### AnalysisSettings.GetDisplacementConvergenceTolerance(stepNumber: System.UInt32)

Gets the Displacement Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetDisplacementConvergenceTolerance"></a>

### AnalysisSettings.SetDisplacementConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Displacement Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetDisplacementConvergenceValue"></a>

### AnalysisSettings.GetDisplacementConvergenceValue(stepNumber: System.UInt32)

Gets the Displacement Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetDisplacementConvergenceValue"></a>

### AnalysisSettings.SetDisplacementConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Displacement Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetDisplacementConvergenceMinimumReference"></a>

### AnalysisSettings.GetDisplacementConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Displacement Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetDisplacementConvergenceMinimumReference"></a>

### AnalysisSettings.SetDisplacementConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Displacement Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetRotationConvergenceType"></a>

### AnalysisSettings.GetRotationConvergenceType(stepNumber: System.UInt32)

Gets the Rotation Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetRotationConvergenceType"></a>

### AnalysisSettings.SetRotationConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Rotation Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetRotationConvergenceTolerance"></a>

### AnalysisSettings.GetRotationConvergenceTolerance(stepNumber: System.UInt32)

Gets the Rotation Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetRotationConvergenceTolerance"></a>

### AnalysisSettings.SetRotationConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Rotation Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetRotationConvergenceValue"></a>

### AnalysisSettings.GetRotationConvergenceValue(stepNumber: System.UInt32)

Gets the Rotation Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetRotationConvergenceValue"></a>

### AnalysisSettings.SetRotationConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Rotation Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetRotationConvergenceMinimumReference"></a>

### AnalysisSettings.GetRotationConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Rotation Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetRotationConvergenceMinimumReference"></a>

### AnalysisSettings.SetRotationConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Rotation Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetTemperatureConvergenceType"></a>

### AnalysisSettings.SetTemperatureConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Temperature Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetTemperatureConvergenceTolerance"></a>

### AnalysisSettings.SetTemperatureConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Temperature Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetTemperatureConvergenceValue"></a>

### AnalysisSettings.SetTemperatureConvergenceValue(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.NonLinearValueType](../../../../Mechanical/DataModel/Enums/NonLinearValueType.md#NonLinearValueType))

Sets the Temperature Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetTemperatureConvergenceInputValue"></a>

### AnalysisSettings.SetTemperatureConvergenceInputValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Temperature Convergence Input Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetTemperatureConvergenceMinimumReference"></a>

### AnalysisSettings.SetTemperatureConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Temperature Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetHeatConvergenceType"></a>

### AnalysisSettings.SetHeatConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Heat Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetHeatConvergenceTolerance"></a>

### AnalysisSettings.SetHeatConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Heat Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetHeatConvergenceValue"></a>

### AnalysisSettings.SetHeatConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Heat Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetHeatConvergenceMinimumReference"></a>

### AnalysisSettings.SetHeatConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Heat Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetVoltageConvergenceType"></a>

### AnalysisSettings.SetVoltageConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Voltage Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetVoltageConvergenceTolerance"></a>

### AnalysisSettings.SetVoltageConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Voltage Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetVoltageConvergenceValue"></a>

### AnalysisSettings.SetVoltageConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Voltage Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetVoltageConvergenceMinimumReference"></a>

### AnalysisSettings.SetVoltageConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Voltage Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetChargeConvergenceType"></a>

### AnalysisSettings.SetChargeConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Charge Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetChargeConvergenceTolerance"></a>

### AnalysisSettings.SetChargeConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Charge Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetChargeConvergenceValue"></a>

### AnalysisSettings.SetChargeConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Charge Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetChargeConvergenceMinimumReference"></a>

### AnalysisSettings.SetChargeConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Charge Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetEnergyConvergenceType"></a>

### AnalysisSettings.SetEnergyConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Energy Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetEnergyConvergenceTolerance"></a>

### AnalysisSettings.SetEnergyConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Energy Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetEnergyConvergenceValue"></a>

### AnalysisSettings.SetEnergyConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Energy Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetEnergyConvergenceMinimumReference"></a>

### AnalysisSettings.SetEnergyConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Energy Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetCurrentConvergenceType"></a>

### AnalysisSettings.SetCurrentConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Current Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetCurrentConvergenceTolerance"></a>

### AnalysisSettings.SetCurrentConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Current Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetCurrentConvergenceValue"></a>

### AnalysisSettings.SetCurrentConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Current Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetCurrentConvergenceMinimumReference"></a>

### AnalysisSettings.SetCurrentConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Current Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetEmagAMPSConvergenceType"></a>

### AnalysisSettings.SetEmagAMPSConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the EmagAMPS Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetEmagAMPSConvergenceTolerance"></a>

### AnalysisSettings.SetEmagAMPSConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the EmagAMPS Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetEmagAMPSConvergenceValue"></a>

### AnalysisSettings.SetEmagAMPSConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the EmagAMPS Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetEmagAMPSConvergenceMinimumReference"></a>

### AnalysisSettings.SetEmagAMPSConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the EmagAMPS Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetEmagCSGConvergenceType"></a>

### AnalysisSettings.SetEmagCSGConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the EmagCSG Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetEmagCSGConvergenceTolerance"></a>

### AnalysisSettings.SetEmagCSGConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the EmagCSG Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetEmagCSGConvergenceValue"></a>

### AnalysisSettings.SetEmagCSGConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the EmagCSG Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetEmagCSGConvergenceMinimumReference"></a>

### AnalysisSettings.SetEmagCSGConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the EmagCSG Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetTemperatureConvergenceType"></a>

### AnalysisSettings.GetTemperatureConvergenceType(stepNumber: System.UInt32)

Gets the Temperature Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetTemperatureConvergenceTolerance"></a>

### AnalysisSettings.GetTemperatureConvergenceTolerance(stepNumber: System.UInt32)

Gets the Temperature Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetTemperatureConvergenceValue"></a>

### AnalysisSettings.GetTemperatureConvergenceValue(stepNumber: System.UInt32)

Gets the Temperature Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetTemperatureConvergenceInputValue"></a>

### AnalysisSettings.GetTemperatureConvergenceInputValue(stepNumber: System.UInt32)

Gets the Temperature Convergence Input Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetTemperatureConvergenceMinimumReference"></a>

### AnalysisSettings.GetTemperatureConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Temperature Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetHeatConvergenceType"></a>

### AnalysisSettings.GetHeatConvergenceType(stepNumber: System.UInt32)

Gets the Heat Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetHeatConvergenceTolerance"></a>

### AnalysisSettings.GetHeatConvergenceTolerance(stepNumber: System.UInt32)

Gets the Heat Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetHeatConvergenceValue"></a>

### AnalysisSettings.GetHeatConvergenceValue(stepNumber: System.UInt32)

Gets the Heat Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetHeatConvergenceMinimumReference"></a>

### AnalysisSettings.GetHeatConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Heat Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetVoltageConvergenceType"></a>

### AnalysisSettings.GetVoltageConvergenceType(stepNumber: System.UInt32)

Gets the Voltage Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetVoltageConvergenceTolerance"></a>

### AnalysisSettings.GetVoltageConvergenceTolerance(stepNumber: System.UInt32)

Gets the Voltage Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetVoltageConvergenceValue"></a>

### AnalysisSettings.GetVoltageConvergenceValue(stepNumber: System.UInt32)

Gets the Voltage Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetVoltageConvergenceMinimumReference"></a>

### AnalysisSettings.GetVoltageConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Voltage Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetCurrentConvergenceType"></a>

### AnalysisSettings.GetCurrentConvergenceType(stepNumber: System.UInt32)

Gets the Current Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetCurrentConvergenceTolerance"></a>

### AnalysisSettings.GetCurrentConvergenceTolerance(stepNumber: System.UInt32)

Gets the Current Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetCurrentConvergenceValue"></a>

### AnalysisSettings.GetCurrentConvergenceValue(stepNumber: System.UInt32)

Gets the Current Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetCurrentConvergenceMinimumReference"></a>

### AnalysisSettings.GetCurrentConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Current Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetEmagAMPSConvergenceType"></a>

### AnalysisSettings.GetEmagAMPSConvergenceType(stepNumber: System.UInt32)

Gets the EmagAMPS Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetEmagAMPSConvergenceTolerance"></a>

### AnalysisSettings.GetEmagAMPSConvergenceTolerance(stepNumber: System.UInt32)

Gets the EmagAMPS Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetEmagAMPSConvergenceValue"></a>

### AnalysisSettings.GetEmagAMPSConvergenceValue(stepNumber: System.UInt32)

Gets the EmagAMPS Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetEmagAMPSConvergenceMinimumReference"></a>

### AnalysisSettings.GetEmagAMPSConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the EmagAMPS Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetEmagCSGConvergenceType"></a>

### AnalysisSettings.GetEmagCSGConvergenceType(stepNumber: System.UInt32)

Gets the EmagCSG Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetEmagCSGConvergenceTolerance"></a>

### AnalysisSettings.GetEmagCSGConvergenceTolerance(stepNumber: System.UInt32)

Gets the EmagCSG Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetEmagCSGConvergenceValue"></a>

### AnalysisSettings.GetEmagCSGConvergenceValue(stepNumber: System.UInt32)

Gets the EmagCSG Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetEmagCSGConvergenceMinimumReference"></a>

### AnalysisSettings.GetEmagCSGConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the EmagCSG Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetEnergyConvergenceType"></a>

### AnalysisSettings.GetEnergyConvergenceType(stepNumber: System.UInt32)

Gets the Energy Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetEnergyConvergenceTolerance"></a>

### AnalysisSettings.GetEnergyConvergenceTolerance(stepNumber: System.UInt32)

Gets the Energy Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetEnergyConvergenceValue"></a>

### AnalysisSettings.GetEnergyConvergenceValue(stepNumber: System.UInt32)

Gets the Energy Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetEnergyConvergenceMinimumReference"></a>

### AnalysisSettings.GetEnergyConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Energy Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetLineSearch"></a>

### AnalysisSettings.GetLineSearch(stepNumber: System.UInt32)

Gets the Line Search at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetLineSearch"></a>

### AnalysisSettings.SetLineSearch(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.LineSearchType](../../../../Mechanical/DataModel/Enums/LineSearchType.md#LineSearchType))

Sets the Line Search for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetStabilization"></a>

### AnalysisSettings.GetStabilization(stepNumber: System.UInt32)

Gets the Stabilization at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetStabilization"></a>

### AnalysisSettings.SetStabilization(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.StabilizationType](../../../../Mechanical/DataModel/Enums/StabilizationType.md#StabilizationType))

Sets the Stabilization for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetStabilizationMethod"></a>

### AnalysisSettings.GetStabilizationMethod(stepNumber: System.UInt32)

Gets the Stabilization Method at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetStabilizationMethod"></a>

### AnalysisSettings.SetStabilizationMethod(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.StabilizationMethod](../../../../Mechanical/DataModel/Enums/StabilizationMethod.md#StabilizationMethod))

Sets the Stabilization Method for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetStabilizationEnergyDissipationRatio"></a>

### AnalysisSettings.GetStabilizationEnergyDissipationRatio(stepNumber: System.UInt32)

Gets the Stabilization Energy Dissipation Ratio at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetStabilizationEnergyDissipationRatio"></a>

### AnalysisSettings.SetStabilizationEnergyDissipationRatio(stepNumber: System.UInt32, value: System.Double)

Sets the Stabilization Energy Dissipation Ratio for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetStabilizationDampingFactor"></a>

### AnalysisSettings.GetStabilizationDampingFactor(stepNumber: System.UInt32)

Gets the Stabilization Damping Factor at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetStabilizationDampingFactor"></a>

### AnalysisSettings.SetStabilizationDampingFactor(stepNumber: System.UInt32, value: System.Double)

Sets the Stabilization Damping Factor for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetStabilizationFirstSubstepOption"></a>

### AnalysisSettings.GetStabilizationFirstSubstepOption(stepNumber: System.UInt32)

Gets the Stabilization First Substep Option at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetStabilizationFirstSubstepOption"></a>

### AnalysisSettings.SetStabilizationFirstSubstepOption(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption](../../../../Mechanical/DataModel/Enums/StabilizationFirstSubstepOption.md#StabilizationFirstSubstepOption))

Sets the Stabilization First Substep Option for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetStabilizationForceLimit"></a>

### AnalysisSettings.GetStabilizationForceLimit(stepNumber: System.UInt32)

Gets the Stabilization Force Limit at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetStabilizationForceLimit"></a>

### AnalysisSettings.SetStabilizationForceLimit(stepNumber: System.UInt32, value: System.Double)

Sets the Stabilization Force Limit for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetStoreResultsAt"></a>

### AnalysisSettings.GetStoreResultsAt(stepNumber: System.UInt32)

Gets the Store Results At at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetStoreResultsAt"></a>

### AnalysisSettings.SetStoreResultsAt(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../Mechanical/DataModel/Enums/TimePointsOptions.md#TimePointsOptions))

Sets the Store Results At for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetStoreResulsAtValue"></a>

### AnalysisSettings.GetStoreResulsAtValue(stepNumber: System.UInt32)

Gets the Store Results At Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetStoreResulsAtValue"></a>

### AnalysisSettings.SetStoreResulsAtValue(stepNumber: System.UInt32, value: System.UInt32)

Sets the Store Results At Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetDefineBy"></a>

### AnalysisSettings.GetDefineBy(stepNumber: System.UInt32)

Gets the Define By at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetDefineBy"></a>

### AnalysisSettings.SetDefineBy(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType](../../../../Mechanical/DataModel/Enums/TimeStepDefineByType.md#TimeStepDefineByType))

Sets the Define By for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetCarryOverTimeStep"></a>

### AnalysisSettings.GetCarryOverTimeStep(stepNumber: System.UInt32)

Gets the Carry Over Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetCarryOverTimeStep"></a>

### AnalysisSettings.SetCarryOverTimeStep(stepNumber: System.UInt32, value: System.Boolean)

Sets the Carry Over Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetInitialTimeStep"></a>

### AnalysisSettings.GetInitialTimeStep(stepNumber: System.UInt32)

Gets the Initial Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetInitialTimeStep"></a>

### AnalysisSettings.SetInitialTimeStep(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Initial Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetMinimumTimeStep"></a>

### AnalysisSettings.GetMinimumTimeStep(stepNumber: System.UInt32)

Gets the Minimum Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetMinimumTimeStep"></a>

### AnalysisSettings.SetMinimumTimeStep(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Minimum Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetMaximumTimeStep"></a>

### AnalysisSettings.GetMaximumTimeStep(stepNumber: System.UInt32)

Gets the Maximum Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetMaximumTimeStep"></a>

### AnalysisSettings.SetMaximumTimeStep(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Maximum Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetInitialSubsteps"></a>

### AnalysisSettings.GetInitialSubsteps(stepNumber: System.UInt32)

Gets the Initial Substeps at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetInitialSubsteps"></a>

### AnalysisSettings.SetInitialSubsteps(stepNumber: System.UInt32, value: System.UInt32)

Sets the Initial Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetMinimumSubsteps"></a>

### AnalysisSettings.GetMinimumSubsteps(stepNumber: System.UInt32)

Gets the Minimum Substeps at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetMinimumSubsteps"></a>

### AnalysisSettings.SetMinimumSubsteps(stepNumber: System.UInt32, value: System.UInt32)

Sets the Minimum Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetMaximumSubsteps"></a>

### AnalysisSettings.GetMaximumSubsteps(stepNumber: System.UInt32)

Gets the Maximum Substeps at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetMaximumSubsteps"></a>

### AnalysisSettings.SetMaximumSubsteps(stepNumber: System.UInt32, value: System.UInt32)

Sets the Maximum Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetNumberOfSubSteps"></a>

### AnalysisSettings.SetNumberOfSubSteps(stepNumber: System.UInt32, value: System.UInt32)

Sets the Number of Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetNumberOfSubSteps"></a>

### AnalysisSettings.GetNumberOfSubSteps(stepNumber: System.UInt32)

Gets the Number of Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetTimeStep"></a>

### AnalysisSettings.SetTimeStep(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetTimeStep"></a>

### AnalysisSettings.GetTimeStep(stepNumber: System.UInt32)

Sets the Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetTimeIntegration"></a>

### AnalysisSettings.SetTimeIntegration(stepNumber: System.UInt32, value: System.Boolean)

Sets the TimeIntegration for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetStructuralOnly"></a>

### AnalysisSettings.SetStructuralOnly(stepNumber: System.UInt32, value: System.Boolean)

Sets the TimeIntegration Structural for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetThermalOnly"></a>

### AnalysisSettings.SetThermalOnly(stepNumber: System.UInt32, value: System.Boolean)

Sets the TimeIntegration Thermal for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetTimeIntegration"></a>

### AnalysisSettings.GetTimeIntegration(stepNumber: System.UInt32)

Gets the TimeIntegration for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetStructuralOnly"></a>

### AnalysisSettings.GetStructuralOnly(stepNumber: System.UInt32)

Gets the TimeIntegration Structural for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetThermalOnly"></a>

### AnalysisSettings.GetThermalOnly(stepNumber: System.UInt32)

Sets the TimeIntegration Thermal for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetStepName"></a>

### AnalysisSettings.GetStepName(stepNumber: System.UInt32)

Gets the Step name at a given step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetStepName"></a>

### AnalysisSettings.SetStepName(stepNumber: System.UInt32, value: System.String)

Sets the Step name at a given step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetAMStepType"></a>

### AnalysisSettings.GetAMStepType(stepNumber: System.UInt32)

Gets the AM Process Step Type at a given step.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### AnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

CopyTo method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetCreepEffects"></a>

### AnalysisSettings.SetCreepEffects(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.Creep](../../../../Mechanical/DataModel/Enums/Creep.md#Creep))

Sets the Creep Effects for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetCreepEffects"></a>

### AnalysisSettings.GetCreepEffects(stepNumber: System.UInt32)

Gets the Creep Effects for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetCreepLimitRatio"></a>

### AnalysisSettings.SetCreepLimitRatio(stepNumber: System.UInt32, value: System.Double)

Sets the Creep Limit Ratio for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetCreepLimitRatio"></a>

### AnalysisSettings.GetCreepLimitRatio(stepNumber: System.UInt32)

Gets the Creep Limit Ratio for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### AnalysisSettings.DeleteAllRestartPoints()

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### AnalysisSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### AnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### AnalysisSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### AnalysisSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### AnalysisSettings.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### AnalysisSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### AnalysisSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### AnalysisSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### AnalysisSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### AnalysisSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### AnalysisSettings.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### AnalysisSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### AnalysisSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### AnalysisSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EXDAnalysisSettings"></a>

### *class* AnalysisSettings.EXDAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines Analysis Settings for Explicit Dynamics System.
> Note: Cycles in the UI are referred to as TimeSteps in API

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetStepEndTime`](#id128)                                                     | Gets the Step End Time at a given solution step.                                  |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetStepEndTime`](#id129)                                                     | Sets the Step End Time for a given solution step.                                 |
| [`GetLoadStepType`](#AnalysisSettings.GetLoadStepType)                         | Gets the  LoadStepType for a step.                                                |
| [`SetLoadStepType`](#AnalysisSettings.SetLoadStepType)                         | Sets the LoadStepType for a step.                                                 |
| [`getADRConvergenceMethod`](#AnalysisSettings.getADRConvergenceMethod)         | Gets the Covergence Method for ADR loadstep.                                      |
| [`setADRConvergenceMethod`](#AnalysisSettings.setADRConvergenceMethod)         | Sets the Covergence Method for ADR loadstep.                                      |
| [`getADRConvergenceTolerance`](#AnalysisSettings.getADRConvergenceTolerance)   | Gets the Covergence Tolerance for ADR loadstep.                                   |
| [`setADRConvergenceTolerance`](#AnalysisSettings.setADRConvergenceTolerance)   | Sets the Covergence Tolerance for ADR loadstep.                                   |
| [`getADRMaximumIterations`](#AnalysisSettings.getADRMaximumIterations)         | Gets the Maximum Iterations for ADR loadstep.                                     |
| [`setADRMaximumIterations`](#AnalysisSettings.setADRMaximumIterations)         | Sets the Maximum Iterations for ADR loadstep.                                     |
| [`GetAutomaticMassScalingType`](#AnalysisSettings.GetAutomaticMassScalingType) | Gets the  AutomaticMassScalingType for a load step.                               |
| [`SetAutomaticMassScalingType`](#AnalysisSettings.SetAutomaticMassScalingType) | Sets the  AutomaticMassScalingType for a load step.                               |
| [`GetMassScalingMinTimeStep`](#AnalysisSettings.GetMassScalingMinTimeStep)     | Gets the  MassScalingMinTimeStep for a load step.                                 |
| [`SetMassScalingMinTimeStep`](#AnalysisSettings.SetMassScalingMinTimeStep)     | Sets the  MassScalingMinTimeStep for a load step.                                 |
| [`GetStaticDamping`](#AnalysisSettings.GetStaticDamping)                       | Gets the StaticDamping.                                                           |
| [`SetStaticDamping`](#AnalysisSettings.SetStaticDamping)                       | Sets the StaticDamping.                                                           |
| [`GetSaveResultsOnType`](#AnalysisSettings.GetSaveResultsOnType)               | Gets the  Save Results Type for a load step.                                      |
| [`SetSaveResultsOnType`](#AnalysisSettings.SetSaveResultsOnType)               | Sets the  Save Results Type for a load step.                                      |
| [`GetSaveResultsOnTime`](#AnalysisSettings.GetSaveResultsOnTime)               | Gets the Time increment for Save Results On for a load step.                      |
| [`SetSaveResultsOnTime`](#AnalysisSettings.SetSaveResultsOnTime)               | Set the Time increment for Save Results On for a load step.                       |
| [`GetSaveResultsOnTimeSteps`](#AnalysisSettings.GetSaveResultsOnTimeSteps)     | Gets the Cycle increment for Save Results On for a load step.                     |
| [`SetSaveResultsOnTimeSteps`](#AnalysisSettings.SetSaveResultsOnTimeSteps)     | Sets the Cycle increment for Save Results On for a load step.                     |
| [`GetSaveResultsOnPoints`](#AnalysisSettings.GetSaveResultsOnPoints)           | Gets the Points increment for Save Results On for a load step.                    |
| [`SetSaveResultsOnPoints`](#AnalysisSettings.SetSaveResultsOnPoints)           | Set the Points increment for Save Results On for a load step.                     |
| [`GetSaveRestartsOnType`](#AnalysisSettings.GetSaveRestartsOnType)             | Gets the  Save Restarts Type for a load step.                                     |
| [`SetSaveRestartsOnType`](#AnalysisSettings.SetSaveRestartsOnType)             | Sets the  Save Restarts Type for a load step.                                     |
| [`GetSaveRestartsOnTime`](#AnalysisSettings.GetSaveRestartsOnTime)             | Gets the Time increment for Save Restarts On for a load step.                     |
| [`SetSaveRestartsOnTime`](#AnalysisSettings.SetSaveRestartsOnTime)             | Set the Time increment for Save Restarts On for a load step.                      |
| [`GetSaveRestartsOnTimeSteps`](#AnalysisSettings.GetSaveRestartsOnTimeSteps)   | Gets the Cycle increment for Save Restarts On for a load step.                    |
| [`SetSaveRestartsOnTimeSteps`](#AnalysisSettings.SetSaveRestartsOnTimeSteps)   | Set the Cycle increment for Save Restarts On for a load step.                     |
| [`GetSaveRestartsOnPoints`](#AnalysisSettings.GetSaveRestartsOnPoints)         | Gets the Points increment for Save Restarts On Points for a load step.            |
| [`SetSaveRestartsOnPoints`](#AnalysisSettings.SetSaveRestartsOnPoints)         | Set the Points increment for Save Restarts On for a load step.                    |
| [`GetSaveProbeDataOnType`](#AnalysisSettings.GetSaveProbeDataOnType)           | Gets the  Save ProbeData Type for a load step.                                    |
| [`SetSaveProbeDataOnType`](#AnalysisSettings.SetSaveProbeDataOnType)           | Sets the  Save ProbeData Type for a load step.                                    |
| [`GetSaveProbeDataOnTime`](#AnalysisSettings.GetSaveProbeDataOnTime)           | Gets the Time increment for Save ProbeData On for a load step.                    |
| [`SetSaveProbeDataOnTime`](#AnalysisSettings.SetSaveProbeDataOnTime)           | Set the Time increment for Save ProbeData On for a load step.                     |
| [`GetSaveProbeDataOnTimeSteps`](#AnalysisSettings.GetSaveProbeDataOnTimeSteps) | Gets the Cycle increment for Save ProbeData On for a load step.                   |
| [`SetSaveProbeDataOnTimeSteps`](#AnalysisSettings.SetSaveProbeDataOnTimeSteps) | Set the Cycle increment for Save ProbeData On for a load step.                    |
| [`DeleteAllRestartPoints`](#id142)                                             | DeleteAllRestartPoints method.                                                    |
| [`GetChildren`](#id144)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id144)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id145)                                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#id146)                                                          | Creates a new child Figure.                                                       |
| [`AddImage`](#id147)                                                           | Creates a new child Image.                                                        |
| [`Activate`](#id148)                                                           | Activate the current object.                                                      |
| [`CopyTo`](#id149)                                                             | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id150)                                                          | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id151)                                            | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id152)                                                | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id153)                                                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id154)                                                  | Get a property by its API name.                                                   |
| [`CreateParameter`](#id155)                                                    | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id156)                                                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id157)                                                    | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id117)                                                                                             | Gets the Internal Object. For advanced usage only.                   |
|------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| [`PreferenceType`](#AnalysisSettings.PreferenceType)                                                                   | Gets or sets the PreferenceType                                      |
| [`NumberOfSteps`](#id113)                                                                                              | Gets or sets the NumberOfSteps.                                      |
| [`CurrentStepNumber`](#id114)                                                                                          | Gets or sets the CurrentStepNumber.                                  |
| [`ResumeFromTimeStep`](#AnalysisSettings.ResumeFromTimeStep)                                                           | Gets or sets the ResumeFromCycle.                                    |
| [`MaximumTimeSteps`](#AnalysisSettings.MaximumTimeSteps)                                                               | Gets or sets the MaximumNumberofCycles.                              |
| [`MaximumEnergyError`](#AnalysisSettings.MaximumEnergyError)                                                           | Gets or sets the  MaximumEnergyError.                                |
| [`ReferenceEnergyTimeStep`](#AnalysisSettings.ReferenceEnergyTimeStep)                                                 | Gets or sets the ReferenceEnergyCycle.                               |
| [`InitialTimeStep`](#id76)                                                                                             | Gets or sets the InitialTimeStep.                                    |
| [`MinimumTimeStep`](#id77)                                                                                             | Gets or sets the MinimumTimeStep.                                    |
| [`MaximumTimeStep`](#id78)                                                                                             | Gets or sets the MaximumTimeStep.                                    |
| [`TimeStepSafetyFactor`](#AnalysisSettings.TimeStepSafetyFactor)                                                       | Gets or sets the  TimeStepSafetyFactor.                              |
| [`CharZoneDimensionType`](#AnalysisSettings.CharZoneDimensionType)                                                     | Gets or sets the  CharZoneDimensionType.                             |
| [`StepawareMassScalingType`](#AnalysisSettings.StepawareMassScalingType)                                               | Gets or Sets the Step aware Mass Scaling Controls.                   |
| [`AutomaticMassScalingType`](#AnalysisSettings.AutomaticMassScalingType)                                               | Gets or sets the  AutomaticMassScaling.                              |
| [`MassScalingMinTimeStep`](#AnalysisSettings.MassScalingMinTimeStep)                                                   | Gets or sets the  MassScalingMinTimeStep.                            |
| [`MassScalingMaxElem`](#AnalysisSettings.MassScalingMaxElem)                                                           | Gets or sets the  MassScalingMaxElem.                                |
| [`MassScalingMaxPart`](#AnalysisSettings.MassScalingMaxPart)                                                           | Gets or sets the  MassScalingMaxPart.                                |
| [`MassScalingUpdateFreq`](#AnalysisSettings.MassScalingUpdateFreq)                                                     | Gets or sets the  MassScalingUpdateFreq.                             |
| [`SolverPrecisionType`](#AnalysisSettings.SolverPrecisionType)                                                         | Gets or sets the  SolverPrecisionType.                               |
| [`SolveUnits`](#AnalysisSettings.SolveUnits)                                                                           | Gets or sets the  SolveUnits.                                        |
| [`BeamSolutionType`](../../../../Mechanical/DataModel/Enums/BeamSolutionType.md#BeamSolutionType)                      | Gets or sets the  BeamSolutionType.                                  |
| [`BeamTimeStepSafetyFactor`](#AnalysisSettings.BeamTimeStepSafetyFactor)                                               | Gets or sets the  BeamTimeStepSafetyFactor.                          |
| [`HexIntegrationType`](../../../../Mechanical/DataModel/Enums/HexIntegrationType.md#HexIntegrationType)                | Gets or sets the  HexIntegrationType.                                |
| [`ShellSublayers`](#AnalysisSettings.ShellSublayers)                                                                   | Gets or sets the  ShellSublayers.                                    |
| [`ShellShearCorrectionFactor`](#AnalysisSettings.ShellShearCorrectionFactor)                                           | Gets or sets the  ShellShearCorrectionFactor.                        |
| [`ShellWarpCorrection`](#AnalysisSettings.ShellWarpCorrection)                                                         | Gets or sets the  ShellWarpCorrection.                               |
| [`ShellThicknessUpdateType`](#AnalysisSettings.ShellThicknessUpdateType)                                               | Gets or sets the  ShellThicknessUpdateType.                          |
| [`PusoCoefficient`](#AnalysisSettings.PusoCoefficient)                                                                 | Gets or sets the  PusoCoefficient.                                   |
| [`TetPressureIntegrationType`](#AnalysisSettings.TetPressureIntegrationType)                                           | Gets or sets the  TetIntegrationType.                                |
| [`ShellInertiaUpdateType`](#AnalysisSettings.ShellInertiaUpdateType)                                                   | Gets or sets the  ShellInertiaUpdateType.                            |
| [`DensityUpdateType`](#AnalysisSettings.DensityUpdateType)                                                             | Gets or sets the  DensityUpdateType.                                 |
| [`SphMinTimeStep`](#AnalysisSettings.SphMinTimeStep)                                                                   | Gets or sets the  Minimum Timestep for SPH.                          |
| [`SPHMinDensityFactor`](#AnalysisSettings.SPHMinDensityFactor)                                                         | Gets or sets the  Minimum Density Factor for SPH.                    |
| [`SPHMaxDensityFactor`](#AnalysisSettings.SPHMaxDensityFactor)                                                         | Gets or sets the  Maximum Density Factor for SPH.                    |
| [`SPHNodeDensityCutoffOption`](#AnalysisSettings.SPHNodeDensityCutoffOption)                                           | Gets or sets the  SPHNodeDensityCutoffOption.                        |
| [`DetonationBurnType`](#AnalysisSettings.DetonationBurnType)                                                           | Gets or sets the  DetonationBurnType.                                |
| [`MinimumVelocity`](#AnalysisSettings.MinimumVelocity)                                                                 | Gets or sets the  MinimumVelocity.                                   |
| [`MaximumVelocity`](#AnalysisSettings.MaximumVelocity)                                                                 | Gets or sets the  MaximumVelocity.                                   |
| [`RadiusCutoff`](#AnalysisSettings.RadiusCutoff)                                                                       | Gets or sets the  RadiusCutoff.                                      |
| [`MinimumStrainCutOff`](#AnalysisSettings.MinimumStrainCutOff)                                                         | Gets or sets the  MinimumStrainCutOff.                               |
| [`EulerSizeDefType`](#AnalysisSettings.EulerSizeDefType)                                                               | Gets or sets the  EulerSizeDefType.                                  |
| [`EulerDomainType`](#AnalysisSettings.EulerDomainType)                                                                 | Gets or sets the  EulerDomainType.                                   |
| [`EulerDisplayBox`](#AnalysisSettings.EulerDisplayBox)                                                                 | Gets or sets the  EulerDisplayBox.                                   |
| [`EulerDomScopeDefType`](#AnalysisSettings.EulerDomScopeDefType)                                                       | Gets or sets the  EulerDomScopeDefType.                              |
| [`EulerXScaleFactor`](#AnalysisSettings.EulerXScaleFactor)                                                             | Gets or sets the  EulerXScaleFactor.                                 |
| [`EulerYScaleFactor`](#AnalysisSettings.EulerYScaleFactor)                                                             | Gets or sets the  EulerYScaleFactor.                                 |
| [`EulerZScaleFactor`](#AnalysisSettings.EulerZScaleFactor)                                                             | Gets or sets the  EulerZScaleFactor.                                 |
| [`EulerXOrigin`](#AnalysisSettings.EulerXOrigin)                                                                       | Gets or sets the  EulerXOrigin.                                      |
| [`EulerYOrigin`](#AnalysisSettings.EulerYOrigin)                                                                       | Gets or sets the  EulerYOrigin.                                      |
| [`EulerZOrigin`](#AnalysisSettings.EulerZOrigin)                                                                       | Gets or sets the  EulerZOrigin.                                      |
| [`EulerXDim`](#AnalysisSettings.EulerXDim)                                                                             | Gets or sets the  EulerXDim.                                         |
| [`EulerYDim`](#AnalysisSettings.EulerYDim)                                                                             | Gets or sets the  EulerYDim.                                         |
| [`EulerZDim`](#AnalysisSettings.EulerZDim)                                                                             | Gets or sets the  EulerZDim.                                         |
| [`EulerResolutionDefType`](#AnalysisSettings.EulerResolutionDefType)                                                   | Gets or sets the  EulerResolutionDefType.                            |
| [`EulerGradedDefinition`](#AnalysisSettings.EulerGradedDefinition)                                                     | Gets or sets the  EulerGradedDefinition.                             |
| [`EulerGradeIncrement`](#AnalysisSettings.EulerGradeIncrement)                                                         | Gets or sets the  EulerGradeIncrement.                               |
| [`EulerGradeNumberOfTimes`](#AnalysisSettings.EulerGradeNumberOfTimes)                                                 | Gets or sets the  EulerGradeNumberOfTimes.                           |
| [`EulerCellSize`](#AnalysisSettings.EulerCellSize)                                                                     | Gets or sets the  EulerCellSize.                                     |
| [`EulerTotalCells`](#AnalysisSettings.EulerTotalCells)                                                                 | Gets or sets the  EulerTotalCells.                                   |
| [`EulerXZones`](#AnalysisSettings.EulerXZones)                                                                         | Gets or sets the  EulerXZones.                                       |
| [`EulerYZones`](#AnalysisSettings.EulerYZones)                                                                         | Gets or sets the  EulerYZones.                                       |
| [`EulerZZones`](#AnalysisSettings.EulerZZones)                                                                         | Gets or sets the  EulerZZones.                                       |
| [`EulerBoundLowerX`](#AnalysisSettings.EulerBoundLowerX)                                                               | Gets or sets the  EulerBoundLowerX.                                  |
| [`EulerBoundLowerY`](#AnalysisSettings.EulerBoundLowerY)                                                               | Gets or sets the  EulerBoundLowerY.                                  |
| [`EulerBoundLowerZ`](#AnalysisSettings.EulerBoundLowerZ)                                                               | Gets or sets the  EulerBoundLowerZ.                                  |
| [`EulerBoundUpperX`](#AnalysisSettings.EulerBoundUpperX)                                                               | Gets or sets the  EulerBoundUpperX.                                  |
| [`EulerBoundUpperY`](#AnalysisSettings.EulerBoundUpperY)                                                               | Gets or sets the  EulerBoundUpperY.                                  |
| [`EulerBoundUpperZ`](#AnalysisSettings.EulerBoundUpperZ)                                                               | Gets or sets the  EulerBoundUpperZ.                                  |
| [`EulerTrackType`](#AnalysisSettings.EulerTrackType)                                                                   | Gets the  EulerTrackType.                                            |
| [`EulerPropertyXmin`](#AnalysisSettings.EulerPropertyXmin)                                                             | Gets or sets the  EulerPropertyXmin.                                 |
| [`EulerPropertyYmin`](#AnalysisSettings.EulerPropertyYmin)                                                             | Gets or sets the  EulerPropertyYmin.                                 |
| [`EulerPropertyZmin`](#AnalysisSettings.EulerPropertyZmin)                                                             | Gets or sets the  EulerPropertyZmin.                                 |
| [`EulerPropertyXsize`](#AnalysisSettings.EulerPropertyXsize)                                                           | Gets or sets the  EulerPropertyXsize.                                |
| [`EulerPropertyYsize`](#AnalysisSettings.EulerPropertyYsize)                                                           | Gets or sets the  EulerPropertyYsize.                                |
| [`EulerPropertyZsize`](#AnalysisSettings.EulerPropertyZsize)                                                           | Gets or sets the  EulerPropertyZsize.                                |
| [`EulerPropertyXres`](#AnalysisSettings.EulerPropertyXres)                                                             | Gets or sets the  EulerPropertyXres.                                 |
| [`EulerPropertyYres`](#AnalysisSettings.EulerPropertyYres)                                                             | Gets or sets the  EulerPropertyYres.                                 |
| [`EulerPropertyZres`](#AnalysisSettings.EulerPropertyZres)                                                             | Gets or sets the  EulerPropertyZres.                                 |
| [`EulerPropertyDisplayBox`](#AnalysisSettings.EulerPropertyDisplayBox)                                                 | Gets or sets the  EulerPropertyDisplayBox.                           |
| [`LinearArtificialViscosity`](#AnalysisSettings.LinearArtificialViscosity)                                             | Gets or sets the LinearArtificialViscosity.                          |
| [`QuadraticArtificialViscosity`](#AnalysisSettings.QuadraticArtificialViscosity)                                       | Gets or sets the QuadraticArtificialViscosity.                       |
| [`LinearViscosityExpansionType`](#AnalysisSettings.LinearViscosityExpansionType)                                       | Gets or sets the LinearViscosityExpansionType.                       |
| [`ArtificialViscosityForShellsType`](#AnalysisSettings.ArtificialViscosityForShellsType)                               | Gets or sets the ArtificialViscosityForShellsType.                   |
| [`LinearViscositySPH`](#AnalysisSettings.LinearViscositySPH)                                                           | Gets or sets the Linear Artificial Viscosity for SPH.                |
| [`QuadratricViscositySPH`](#AnalysisSettings.QuadratricViscositySPH)                                                   | Gets or sets the Quadratic Artificial Viscosity for SPH.             |
| [`HourglassDampingType`](../../../../Mechanical/DataModel/Enums/HourglassDampingType.md#HourglassDampingType)          | Gets or sets the HourglassDampingType.                               |
| [`StiffnessCoefficient`](#id79)                                                                                        | Gets or sets the StiffnessCoefficient.                               |
| [`ViscousCoefficient`](#AnalysisSettings.ViscousCoefficient)                                                           | Gets or sets the ViscousCoefficient.                                 |
| [`ViscousCoefficientFB`](#AnalysisSettings.ViscousCoefficientFB)                                                       | Gets or sets the ViscousCoefficientFB.                               |
| [`ErosionOnGeomStrainType`](#AnalysisSettings.ErosionOnGeomStrainType)                                                 | Gets or sets the ErosionOnGeomStrainType.                            |
| [`ErosionGeomStrainLimit`](#AnalysisSettings.ErosionGeomStrainLimit)                                                   | Gets or sets the ErosionGeomStrainLimit                              |
| [`ErosionOnMaterialFailureType`](#AnalysisSettings.ErosionOnMaterialFailureType)                                       | Gets or sets the ErosionOnMaterialFailureType                        |
| [`ErosionOnMinElemTimestepType`](#AnalysisSettings.ErosionOnMinElemTimestepType)                                       | Gets or sets the ErosionOnMinElemTimestepType                        |
| [`ErosionMinElemTimestep`](#AnalysisSettings.ErosionMinElemTimestep)                                                   | Gets or sets the ErosionMinElemTimestep                              |
| [`ErosionRetainIntertiaType`](#AnalysisSettings.ErosionRetainIntertiaType)                                             | Gets or sets the ErosionRetainIntertiaType                           |
| [`StepawareOutputControlsType`](#AnalysisSettings.StepawareOutputControlsType)                                         | Gets or Sets the Step aware Output Controls.                         |
| [`OutputContactForcesOnType`](#AnalysisSettings.OutputContactForcesOnType)                                             | Gets or Sets OutputContactForces Increment Type.                     |
| [`OutputContactForcesOnTime`](#AnalysisSettings.OutputContactForcesOnTime)                                             | Gets or Sets the Time increment for OutputContactForcesOnTime.       |
| [`OutputContactForcesOnTimeSteps`](#AnalysisSettings.OutputContactForcesOnTimeSteps)                                   | Gets or Sets the Cycle increment for OutputContactForcesOnTimeSteps. |
| [`OutputContactForcesOnPoints`](#AnalysisSettings.OutputContactForcesOnPoints)                                         | Gets or Sets the Points increment for OutputContactForcesOnPoints.   |
| [`SavePrintSummaryOnType`](#AnalysisSettings.SavePrintSummaryOnType)                                                   | Gets or Sets SavePrintSummaryOnType.                                 |
| [`SavePrintSummaryOnTime`](#AnalysisSettings.SavePrintSummaryOnTime)                                                   | Gets or Sets the Time increment for SavePrintSummaryOnTime.          |
| [`SavePrintSummaryOnTimeSteps`](#AnalysisSettings.SavePrintSummaryOnTimeSteps)                                         | Gets or Sets Cycle increment for SavePrintSummaryOnTimeSteps.        |
| [`OutputRemapFile`](#AnalysisSettings.OutputRemapFile)                                                                 | Gets or Sets the Output Remap File Type.                             |
| [`SaveUserEditOnType`](#AnalysisSettings.SaveUserEditOnType)                                                           | Gets or Sets SaveUserEditOnType.                                     |
| [`SaveUserEditOnTime`](#AnalysisSettings.SaveUserEditOnTime)                                                           | Gets or Sets Time increment for SaveUserEditOnTime.                  |
| [`SaveUserEditOnTimeSteps`](#AnalysisSettings.SaveUserEditOnTimeSteps)                                                 | Gets or Sets Cycle increment for SaveUserEditOnTimeSteps.            |
| [`Graph`](#id116)                                                                                                      | Graph property.                                                      |
| [`InternalObject`](#id117)                                                                                             | Gets the internal object. For advanced usage only.                   |
| [`ScratchSolverFilesDirectory`](#id118)                                                                                | Gets the ScratchSolverFilesDirectory.                                |
| [`SolverFilesDirectory`](#id119)                                                                                       | Gets the SolverFilesDirectory.                                       |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                         |
| [`Children`](#id121)                                                                                                   | Gets the list of children.                                           |
| [`Comments`](#id122)                                                                                                   | Gets the list of associated comments.                                |
| [`Figures`](#id123)                                                                                                    | Gets the list of associated figures.                                 |
| [`Images`](#id124)                                                                                                     | Gets the list of associated images.                                  |
| [`Properties`](#id125)                                                                                                 | Gets the list of properties for this object.                         |
| [`VisibleProperties`](#id126)                                                                                          | Gets the list of properties that are visible for this object.        |

<a id="id71"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AnalysisSettings import EXDAnalysisSettings
```

<a id="id72"></a>

## Property detail

<a id="id73"></a>

### *property* AnalysisSettings.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Internal Object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.PreferenceType"></a>

### *property* AnalysisSettings.PreferenceType *: [Ansys.Mechanical.DataModel.Enums.EXDPreferenceType](../../../../Mechanical/DataModel/Enums/EXDPreferenceType.md#EXDPreferenceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreferenceType

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### *property* AnalysisSettings.NumberOfSteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSteps.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### *property* AnalysisSettings.CurrentStepNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ResumeFromTimeStep"></a>

### *property* AnalysisSettings.ResumeFromTimeStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResumeFromCycle.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MaximumTimeSteps"></a>

### *property* AnalysisSettings.MaximumTimeSteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumNumberofCycles.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MaximumEnergyError"></a>

### *property* AnalysisSettings.MaximumEnergyError *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MaximumEnergyError.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ReferenceEnergyTimeStep"></a>

### *property* AnalysisSettings.ReferenceEnergyTimeStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceEnergyCycle.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### *property* AnalysisSettings.InitialTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### *property* AnalysisSettings.MinimumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### *property* AnalysisSettings.MaximumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.TimeStepSafetyFactor"></a>

### *property* AnalysisSettings.TimeStepSafetyFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  TimeStepSafetyFactor.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CharZoneDimensionType"></a>

### *property* AnalysisSettings.CharZoneDimensionType *: [Ansys.Mechanical.DataModel.Enums.EXDCharZoneDimensionType](../../../../Mechanical/DataModel/Enums/EXDCharZoneDimensionType.md#EXDCharZoneDimensionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  CharZoneDimensionType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.StepawareMassScalingType"></a>

### *property* AnalysisSettings.StepawareMassScalingType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Step aware Mass Scaling Controls.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AutomaticMassScalingType"></a>

### *property* AnalysisSettings.AutomaticMassScalingType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  AutomaticMassScaling.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MassScalingMinTimeStep"></a>

### *property* AnalysisSettings.MassScalingMinTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MassScalingMinTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MassScalingMaxElem"></a>

### *property* AnalysisSettings.MassScalingMaxElem *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MassScalingMaxElem.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MassScalingMaxPart"></a>

### *property* AnalysisSettings.MassScalingMaxPart *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MassScalingMaxPart.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MassScalingUpdateFreq"></a>

### *property* AnalysisSettings.MassScalingUpdateFreq *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MassScalingUpdateFreq.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SolverPrecisionType"></a>

### *property* AnalysisSettings.SolverPrecisionType *: [Ansys.Mechanical.DataModel.Enums.EXDSolverPrecisionType](../../../../Mechanical/DataModel/Enums/EXDSolverPrecisionType.md#EXDSolverPrecisionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  SolverPrecisionType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SolveUnits"></a>

### *property* AnalysisSettings.SolveUnits *: [Ansys.Mechanical.DataModel.Enums.EXDSolveUnitsType](../../../../Mechanical/DataModel/Enums/EXDSolveUnitsType.md#EXDSolveUnitsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  SolveUnits.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.BeamSolutionType"></a>

### *property* AnalysisSettings.BeamSolutionType *: [Ansys.Mechanical.DataModel.Enums.EXDBeamSolutionType](../../../../Mechanical/DataModel/Enums/EXDBeamSolutionType.md#EXDBeamSolutionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  BeamSolutionType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.BeamTimeStepSafetyFactor"></a>

### *property* AnalysisSettings.BeamTimeStepSafetyFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  BeamTimeStepSafetyFactor.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.HexIntegrationType"></a>

### *property* AnalysisSettings.HexIntegrationType *: [Ansys.Mechanical.DataModel.Enums.EXDHexIntegrationType](../../../../Mechanical/DataModel/Enums/EXDHexIntegrationType.md#EXDHexIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  HexIntegrationType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ShellSublayers"></a>

### *property* AnalysisSettings.ShellSublayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellSublayers.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ShellShearCorrectionFactor"></a>

### *property* AnalysisSettings.ShellShearCorrectionFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellShearCorrectionFactor.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ShellWarpCorrection"></a>

### *property* AnalysisSettings.ShellWarpCorrection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellWarpCorrection.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ShellThicknessUpdateType"></a>

### *property* AnalysisSettings.ShellThicknessUpdateType *: [Ansys.Mechanical.DataModel.Enums.EXDShellThicknessUpdateType](../../../../Mechanical/DataModel/Enums/EXDShellThicknessUpdateType.md#EXDShellThicknessUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellThicknessUpdateType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.PusoCoefficient"></a>

### *property* AnalysisSettings.PusoCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  PusoCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.TetPressureIntegrationType"></a>

### *property* AnalysisSettings.TetPressureIntegrationType *: [Ansys.Mechanical.DataModel.Enums.EXDTetPressureIntegrationType](../../../../Mechanical/DataModel/Enums/EXDTetPressureIntegrationType.md#EXDTetPressureIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  TetIntegrationType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ShellInertiaUpdateType"></a>

### *property* AnalysisSettings.ShellInertiaUpdateType *: [Ansys.Mechanical.DataModel.Enums.EXDShellInertiaUpdateType](../../../../Mechanical/DataModel/Enums/EXDShellInertiaUpdateType.md#EXDShellInertiaUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellInertiaUpdateType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.DensityUpdateType"></a>

### *property* AnalysisSettings.DensityUpdateType *: [Ansys.Mechanical.DataModel.Enums.EXDDensityUpdateType](../../../../Mechanical/DataModel/Enums/EXDDensityUpdateType.md#EXDDensityUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  DensityUpdateType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SphMinTimeStep"></a>

### *property* AnalysisSettings.SphMinTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  Minimum Timestep for SPH.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SPHMinDensityFactor"></a>

### *property* AnalysisSettings.SPHMinDensityFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  Minimum Density Factor for SPH.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SPHMaxDensityFactor"></a>

### *property* AnalysisSettings.SPHMaxDensityFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  Maximum Density Factor for SPH.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SPHNodeDensityCutoffOption"></a>

### *property* AnalysisSettings.SPHNodeDensityCutoffOption *: [Ansys.Mechanical.DataModel.Enums.EXDSPHNodeDensityCutoffOption](../../../../Mechanical/DataModel/Enums/EXDSPHNodeDensityCutoffOption.md#EXDSPHNodeDensityCutoffOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  SPHNodeDensityCutoffOption.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.DetonationBurnType"></a>

### *property* AnalysisSettings.DetonationBurnType *: [Ansys.Mechanical.DataModel.Enums.EXDDetonationBurnType](../../../../Mechanical/DataModel/Enums/EXDDetonationBurnType.md#EXDDetonationBurnType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  DetonationBurnType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MinimumVelocity"></a>

### *property* AnalysisSettings.MinimumVelocity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MinimumVelocity.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MaximumVelocity"></a>

### *property* AnalysisSettings.MaximumVelocity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MaximumVelocity.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RadiusCutoff"></a>

### *property* AnalysisSettings.RadiusCutoff *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  RadiusCutoff.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.MinimumStrainCutOff"></a>

### *property* AnalysisSettings.MinimumStrainCutOff *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MinimumStrainCutOff.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerSizeDefType"></a>

### *property* AnalysisSettings.EulerSizeDefType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerSizeDefType](../../../../Mechanical/DataModel/Enums/EXDEulerSizeDefType.md#EXDEulerSizeDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerSizeDefType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerDomainType"></a>

### *property* AnalysisSettings.EulerDomainType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerDomainType](../../../../Mechanical/DataModel/Enums/EXDEulerDomainType.md#EXDEulerDomainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerDomainType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerDisplayBox"></a>

### *property* AnalysisSettings.EulerDisplayBox *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerDisplayBox.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerDomScopeDefType"></a>

### *property* AnalysisSettings.EulerDomScopeDefType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerDomScopeDefType](../../../../Mechanical/DataModel/Enums/EXDEulerDomScopeDefType.md#EXDEulerDomScopeDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerDomScopeDefType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerXScaleFactor"></a>

### *property* AnalysisSettings.EulerXScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerXScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerYScaleFactor"></a>

### *property* AnalysisSettings.EulerYScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerYScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerZScaleFactor"></a>

### *property* AnalysisSettings.EulerZScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerXOrigin"></a>

### *property* AnalysisSettings.EulerXOrigin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerXOrigin.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerYOrigin"></a>

### *property* AnalysisSettings.EulerYOrigin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerYOrigin.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerZOrigin"></a>

### *property* AnalysisSettings.EulerZOrigin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerZOrigin.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerXDim"></a>

### *property* AnalysisSettings.EulerXDim *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerXDim.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerYDim"></a>

### *property* AnalysisSettings.EulerYDim *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerYDim.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerZDim"></a>

### *property* AnalysisSettings.EulerZDim *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerZDim.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerResolutionDefType"></a>

### *property* AnalysisSettings.EulerResolutionDefType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerResolutionDefType](../../../../Mechanical/DataModel/Enums/EXDEulerResolutionDefType.md#EXDEulerResolutionDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerResolutionDefType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerGradedDefinition"></a>

### *property* AnalysisSettings.EulerGradedDefinition *: [Ansys.Mechanical.DataModel.Enums.EXDEulerGradedDefinition](../../../../Mechanical/DataModel/Enums/EXDEulerGradedDefinition.md#EXDEulerGradedDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerGradedDefinition.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerGradeIncrement"></a>

### *property* AnalysisSettings.EulerGradeIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerGradeIncrement.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerGradeNumberOfTimes"></a>

### *property* AnalysisSettings.EulerGradeNumberOfTimes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerGradeNumberOfTimes.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerCellSize"></a>

### *property* AnalysisSettings.EulerCellSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerCellSize.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerTotalCells"></a>

### *property* AnalysisSettings.EulerTotalCells *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerTotalCells.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerXZones"></a>

### *property* AnalysisSettings.EulerXZones *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerXZones.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerYZones"></a>

### *property* AnalysisSettings.EulerYZones *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerYZones.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerZZones"></a>

### *property* AnalysisSettings.EulerZZones *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerZZones.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerBoundLowerX"></a>

### *property* AnalysisSettings.EulerBoundLowerX *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundLowerX.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerBoundLowerY"></a>

### *property* AnalysisSettings.EulerBoundLowerY *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundLowerY.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerBoundLowerZ"></a>

### *property* AnalysisSettings.EulerBoundLowerZ *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundLowerZ.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerBoundUpperX"></a>

### *property* AnalysisSettings.EulerBoundUpperX *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundUpperX.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerBoundUpperY"></a>

### *property* AnalysisSettings.EulerBoundUpperY *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundUpperY.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerBoundUpperZ"></a>

### *property* AnalysisSettings.EulerBoundUpperZ *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundUpperZ.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerTrackType"></a>

### *property* AnalysisSettings.EulerTrackType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerTrackType](../../../../Mechanical/DataModel/Enums/EXDEulerTrackType.md#EXDEulerTrackType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the  EulerTrackType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerPropertyXmin"></a>

### *property* AnalysisSettings.EulerPropertyXmin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyXmin.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerPropertyYmin"></a>

### *property* AnalysisSettings.EulerPropertyYmin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyYmin.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerPropertyZmin"></a>

### *property* AnalysisSettings.EulerPropertyZmin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyZmin.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerPropertyXsize"></a>

### *property* AnalysisSettings.EulerPropertyXsize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyXsize.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerPropertyYsize"></a>

### *property* AnalysisSettings.EulerPropertyYsize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyYsize.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerPropertyZsize"></a>

### *property* AnalysisSettings.EulerPropertyZsize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyZsize.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerPropertyXres"></a>

### *property* AnalysisSettings.EulerPropertyXres *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyXres.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerPropertyYres"></a>

### *property* AnalysisSettings.EulerPropertyYres *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyYres.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerPropertyZres"></a>

### *property* AnalysisSettings.EulerPropertyZres *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyZres.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EulerPropertyDisplayBox"></a>

### *property* AnalysisSettings.EulerPropertyDisplayBox *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyDisplayBox.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.LinearArtificialViscosity"></a>

### *property* AnalysisSettings.LinearArtificialViscosity *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LinearArtificialViscosity.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.QuadraticArtificialViscosity"></a>

### *property* AnalysisSettings.QuadraticArtificialViscosity *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the QuadraticArtificialViscosity.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.LinearViscosityExpansionType"></a>

### *property* AnalysisSettings.LinearViscosityExpansionType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LinearViscosityExpansionType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ArtificialViscosityForShellsType"></a>

### *property* AnalysisSettings.ArtificialViscosityForShellsType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ArtificialViscosityForShellsType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.LinearViscositySPH"></a>

### *property* AnalysisSettings.LinearViscositySPH *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linear Artificial Viscosity for SPH.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.QuadratricViscositySPH"></a>

### *property* AnalysisSettings.QuadratricViscositySPH *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Quadratic Artificial Viscosity for SPH.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.HourglassDampingType"></a>

### *property* AnalysisSettings.HourglassDampingType *: [Ansys.Mechanical.DataModel.Enums.EXDHourglassDampingType](../../../../Mechanical/DataModel/Enums/EXDHourglassDampingType.md#EXDHourglassDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HourglassDampingType.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### *property* AnalysisSettings.StiffnessCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ViscousCoefficient"></a>

### *property* AnalysisSettings.ViscousCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViscousCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ViscousCoefficientFB"></a>

### *property* AnalysisSettings.ViscousCoefficientFB *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViscousCoefficientFB.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ErosionOnGeomStrainType"></a>

### *property* AnalysisSettings.ErosionOnGeomStrainType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionOnGeomStrainType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ErosionGeomStrainLimit"></a>

### *property* AnalysisSettings.ErosionGeomStrainLimit *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionGeomStrainLimit

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ErosionOnMaterialFailureType"></a>

### *property* AnalysisSettings.ErosionOnMaterialFailureType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionOnMaterialFailureType

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ErosionOnMinElemTimestepType"></a>

### *property* AnalysisSettings.ErosionOnMinElemTimestepType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionOnMinElemTimestepType

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ErosionMinElemTimestep"></a>

### *property* AnalysisSettings.ErosionMinElemTimestep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionMinElemTimestep

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ErosionRetainIntertiaType"></a>

### *property* AnalysisSettings.ErosionRetainIntertiaType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionRetainIntertiaType

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.StepawareOutputControlsType"></a>

### *property* AnalysisSettings.StepawareOutputControlsType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Step aware Output Controls.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.OutputContactForcesOnType"></a>

### *property* AnalysisSettings.OutputContactForcesOnType *: [Ansys.Mechanical.DataModel.Enums.EXDOutputContactForcesOnType](../../../../Mechanical/DataModel/Enums/EXDOutputContactForcesOnType.md#EXDOutputContactForcesOnType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets OutputContactForces Increment Type.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.OutputContactForcesOnTime"></a>

### *property* AnalysisSettings.OutputContactForcesOnTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Time increment for OutputContactForcesOnTime.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.OutputContactForcesOnTimeSteps"></a>

### *property* AnalysisSettings.OutputContactForcesOnTimeSteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Cycle increment for OutputContactForcesOnTimeSteps.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.OutputContactForcesOnPoints"></a>

### *property* AnalysisSettings.OutputContactForcesOnPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Points increment for OutputContactForcesOnPoints.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SavePrintSummaryOnType"></a>

### *property* AnalysisSettings.SavePrintSummaryOnType *: [Ansys.Mechanical.DataModel.Enums.EXDSavePrintSummaryOnType](../../../../Mechanical/DataModel/Enums/EXDSavePrintSummaryOnType.md#EXDSavePrintSummaryOnType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets SavePrintSummaryOnType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SavePrintSummaryOnTime"></a>

### *property* AnalysisSettings.SavePrintSummaryOnTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Time increment for SavePrintSummaryOnTime.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SavePrintSummaryOnTimeSteps"></a>

### *property* AnalysisSettings.SavePrintSummaryOnTimeSteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets Cycle increment for SavePrintSummaryOnTimeSteps.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.OutputRemapFile"></a>

### *property* AnalysisSettings.OutputRemapFile *: Ansys.Mechanical.DataModel.Enums.EXDOutputRemapFileOnType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Output Remap File Type.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SaveUserEditOnType"></a>

### *property* AnalysisSettings.SaveUserEditOnType *: [Ansys.Mechanical.DataModel.Enums.EXDSaveUserEditOnType](../../../../Mechanical/DataModel/Enums/EXDSaveUserEditOnType.md#EXDSaveUserEditOnType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets SaveUserEditOnType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SaveUserEditOnTime"></a>

### *property* AnalysisSettings.SaveUserEditOnTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets Time increment for SaveUserEditOnTime.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SaveUserEditOnTimeSteps"></a>

### *property* AnalysisSettings.SaveUserEditOnTimeSteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets Cycle increment for SaveUserEditOnTimeSteps.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### *property* AnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### *property* AnalysisSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisSettings | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### *property* AnalysisSettings.ScratchSolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### *property* AnalysisSettings.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### *property* AnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### *property* AnalysisSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

### *property* AnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### *property* AnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### *property* AnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### *property* AnalysisSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### *property* AnalysisSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

## Method detail

<a id="id92"></a>

### AnalysisSettings.GetStepEndTime(stepNumber: System.Int32)

Gets the Step End Time at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### AnalysisSettings.SetStepEndTime(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the Step End Time for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetLoadStepType"></a>

### AnalysisSettings.GetLoadStepType(stepNumber: System.Int32)

Gets the  LoadStepType for a step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetLoadStepType"></a>

### AnalysisSettings.SetLoadStepType(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.EXDLoadStepType](../../../../Mechanical/DataModel/Enums/EXDLoadStepType.md#EXDLoadStepType))

Sets the LoadStepType for a step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.getADRConvergenceMethod"></a>

### AnalysisSettings.getADRConvergenceMethod(stepNumber: System.Int32)

Gets the Covergence Method for ADR loadstep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.setADRConvergenceMethod"></a>

### AnalysisSettings.setADRConvergenceMethod(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.EXDADRConvergenceMethod](../../../../Mechanical/DataModel/Enums/EXDADRConvergenceMethod.md#EXDADRConvergenceMethod))

Sets the Covergence Method for ADR loadstep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.getADRConvergenceTolerance"></a>

### AnalysisSettings.getADRConvergenceTolerance(stepNumber: System.Int32)

Gets the Covergence Tolerance for ADR loadstep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.setADRConvergenceTolerance"></a>

### AnalysisSettings.setADRConvergenceTolerance(stepNumber: System.Int32, value: System.Double)

Sets the Covergence Tolerance for ADR loadstep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.getADRMaximumIterations"></a>

### AnalysisSettings.getADRMaximumIterations(stepNumber: System.Int32)

Gets the Maximum Iterations for ADR loadstep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.setADRMaximumIterations"></a>

### AnalysisSettings.setADRMaximumIterations(stepNumber: System.Int32, value: System.Int32)

Sets the Maximum Iterations for ADR loadstep.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetAutomaticMassScalingType"></a>

### AnalysisSettings.GetAutomaticMassScalingType(stepNumber: System.Int32)

Gets the  AutomaticMassScalingType for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetAutomaticMassScalingType"></a>

### AnalysisSettings.SetAutomaticMassScalingType(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.EXDAutomaticMassScalingType](../../../../Mechanical/DataModel/Enums/EXDAutomaticMassScalingType.md#EXDAutomaticMassScalingType))

Sets the  AutomaticMassScalingType for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetMassScalingMinTimeStep"></a>

### AnalysisSettings.GetMassScalingMinTimeStep(stepNumber: System.Int32)

Gets the  MassScalingMinTimeStep for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetMassScalingMinTimeStep"></a>

### AnalysisSettings.SetMassScalingMinTimeStep(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the  MassScalingMinTimeStep for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetStaticDamping"></a>

### AnalysisSettings.GetStaticDamping(stepNumber: System.Int32)

Gets the StaticDamping.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetStaticDamping"></a>

### AnalysisSettings.SetStaticDamping(stepNumber: System.Int32, value: System.Double)

Sets the StaticDamping.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetSaveResultsOnType"></a>

### AnalysisSettings.GetSaveResultsOnType(stepNumber: System.Int32)

Gets the  Save Results Type for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetSaveResultsOnType"></a>

### AnalysisSettings.SetSaveResultsOnType(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.EXDSaveResultsOnType](../../../../Mechanical/DataModel/Enums/EXDSaveResultsOnType.md#EXDSaveResultsOnType))

Sets the  Save Results Type for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetSaveResultsOnTime"></a>

### AnalysisSettings.GetSaveResultsOnTime(stepNumber: System.Int32)

Gets the Time increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetSaveResultsOnTime"></a>

### AnalysisSettings.SetSaveResultsOnTime(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Set the Time increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetSaveResultsOnTimeSteps"></a>

### AnalysisSettings.GetSaveResultsOnTimeSteps(stepNumber: System.Int32)

Gets the Cycle increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetSaveResultsOnTimeSteps"></a>

### AnalysisSettings.SetSaveResultsOnTimeSteps(stepNumber: System.Int32, value: System.Int32)

Sets the Cycle increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetSaveResultsOnPoints"></a>

### AnalysisSettings.GetSaveResultsOnPoints(stepNumber: System.Int32)

Gets the Points increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetSaveResultsOnPoints"></a>

### AnalysisSettings.SetSaveResultsOnPoints(stepNumber: System.Int32, value: System.Int32)

Set the Points increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetSaveRestartsOnType"></a>

### AnalysisSettings.GetSaveRestartsOnType(stepNumber: System.Int32)

Gets the  Save Restarts Type for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetSaveRestartsOnType"></a>

### AnalysisSettings.SetSaveRestartsOnType(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.EXDSaveRestartsOnType](../../../../Mechanical/DataModel/Enums/EXDSaveRestartsOnType.md#EXDSaveRestartsOnType))

Sets the  Save Restarts Type for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetSaveRestartsOnTime"></a>

### AnalysisSettings.GetSaveRestartsOnTime(stepNumber: System.Int32)

Gets the Time increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetSaveRestartsOnTime"></a>

### AnalysisSettings.SetSaveRestartsOnTime(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Set the Time increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetSaveRestartsOnTimeSteps"></a>

### AnalysisSettings.GetSaveRestartsOnTimeSteps(stepNumber: System.Int32)

Gets the Cycle increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetSaveRestartsOnTimeSteps"></a>

### AnalysisSettings.SetSaveRestartsOnTimeSteps(stepNumber: System.Int32, value: System.Int32)

Set the Cycle increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetSaveRestartsOnPoints"></a>

### AnalysisSettings.GetSaveRestartsOnPoints(stepNumber: System.Int32)

Gets the Points increment for Save Restarts On Points for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetSaveRestartsOnPoints"></a>

### AnalysisSettings.SetSaveRestartsOnPoints(stepNumber: System.Int32, value: System.Int32)

Set the Points increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetSaveProbeDataOnType"></a>

### AnalysisSettings.GetSaveProbeDataOnType(stepNumber: System.Int32)

Gets the  Save ProbeData Type for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetSaveProbeDataOnType"></a>

### AnalysisSettings.SetSaveProbeDataOnType(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.EXDSaveProbeDataOnType](../../../../Mechanical/DataModel/Enums/EXDSaveProbeDataOnType.md#EXDSaveProbeDataOnType))

Sets the  Save ProbeData Type for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetSaveProbeDataOnTime"></a>

### AnalysisSettings.GetSaveProbeDataOnTime(stepNumber: System.Int32)

Gets the Time increment for Save ProbeData On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetSaveProbeDataOnTime"></a>

### AnalysisSettings.SetSaveProbeDataOnTime(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Set the Time increment for Save ProbeData On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetSaveProbeDataOnTimeSteps"></a>

### AnalysisSettings.GetSaveProbeDataOnTimeSteps(stepNumber: System.Int32)

Gets the Cycle increment for Save ProbeData On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetSaveProbeDataOnTimeSteps"></a>

### AnalysisSettings.SetSaveProbeDataOnTimeSteps(stepNumber: System.Int32, value: System.Int32)

Set the Cycle increment for Save ProbeData On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### AnalysisSettings.DeleteAllRestartPoints()

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### AnalysisSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### AnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### AnalysisSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### AnalysisSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### AnalysisSettings.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### AnalysisSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### AnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### AnalysisSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### AnalysisSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### AnalysisSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### AnalysisSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### AnalysisSettings.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### AnalysisSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### AnalysisSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### AnalysisSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RBDAnalysisSettings"></a>

### *class* AnalysisSettings.RBDAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> RBDAnalysisSettings class.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetStepEndTime`](#id128)                                         | Gets the Step End Time at a given solution step.                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetStepEndTime`](#id129)                                         | Sets the Step End Time for a given solution step.                                 |
| [`GetAutomaticTimeStepping`](#id130)                               | Gets the Automatic Time Stepping at a given solution step.                        |
| [`SetAutomaticTimeStepping`](#id131)                               | Sets the Automatic Time Stepping for a given solution step.                       |
| [`GetCarryOverTimeStep`](#id132)                                   | Gets the Carry Over Time Step at a given solution step.                           |
| [`SetCarryOverTimeStep`](#id133)                                   | Sets the Carry Over Time Step for a given solution step.                          |
| [`GetInitialTimeStep`](#id134)                                     | Gets the Initial Time Step at a given solution step.                              |
| [`SetInitialTimeStep`](#id135)                                     | Sets the Initial Time Step for a given solution step.                             |
| [`GetMinimumTimeStep`](#id136)                                     | Gets the Minimum Time Step at a given solution step.                              |
| [`SetMinimumTimeStep`](#id137)                                     | Sets the Minimum Time Step for a given solution step.                             |
| [`GetMaximumTimeStep`](#id138)                                     | Gets the Maximum Time Step at a given solution step.                              |
| [`SetMaximumTimeStep`](#id139)                                     | Sets the Maximum Time Step for a given solution step.                             |
| [`GetTimeStep`](#id140)                                            | Gets the (fixed) Time Step at a given solution step.                              |
| [`SetTimeStep`](#id141)                                            | Sets the (fixed) Time Step for a given solution step.                             |
| [`GetStoreResultAt`](#AnalysisSettings.GetStoreResultAt)           | Gets the StoreResultAt setting at a given solution step.                          |
| [`SetStoreResultAt`](#AnalysisSettings.SetStoreResultAt)           | Sets the StoreResultAt setting for a given solution step.                         |
| [`GetStoreResultAtValue`](#AnalysisSettings.GetStoreResultAtValue) | Gets the StoreResultAtValue setting at a given solution step.                     |
| [`SetStoreResultAtValue`](#AnalysisSettings.SetStoreResultAtValue) | Sets the StoreResultAtValue setting for a given solution step.                    |
| [`DeleteAllRestartPoints`](#id142)                                 | DeleteAllRestartPoints method.                                                    |
| [`GetChildren`](#id144)                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id144)                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id145)                                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#id146)                                              | Creates a new child Figure.                                                       |
| [`AddImage`](#id147)                                               | Creates a new child Image.                                                        |
| [`Activate`](#id148)                                               | Activate the current object.                                                      |
| [`CopyTo`](#id149)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id150)                                              | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id151)                                | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id152)                                    | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id153)                                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id154)                                      | Get a property by its API name.                                                   |
| [`CreateParameter`](#id155)                                        | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id156)                                           | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id157)                                        | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id117)                                                                                               | InternalObject property.                                               |
|--------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`NumberOfSteps`](#id113)                                                                                                | Gets or sets the NumberOfSteps.                                        |
| [`CurrentStepNumber`](#id114)                                                                                            | Gets or sets the CurrentStepNumber.                                    |
| [`TimeIntegrationType`](#AnalysisSettings.TimeIntegrationType)                                                           | Gets or sets the Integration Method.                                   |
| [`PositionCorrection`](#AnalysisSettings.PositionCorrection)                                                             | Gets or sets the PositionCorrection.                                   |
| [`VelocityCorrection`](#AnalysisSettings.VelocityCorrection)                                                             | Gets or sets the VelocityCorrection.                                   |
| [`CorrectionType`](#AnalysisSettings.CorrectionType)                                                                     | Gets or sets the CorrectionType.                                       |
| [`AssemblyType`](#AnalysisSettings.AssemblyType)                                                                         | Gets or sets the AssemblyType.                                         |
| [`DropoffTolerance`](#AnalysisSettings.DropoffTolerance)                                                                 | Gets or sets the DropoffTolerance.                                     |
| [`RelativeAssemblyTolerance`](#AnalysisSettings.RelativeAssemblyTolerance)                                               | Gets or sets the RelativeAssemblyTolerance activity.                   |
| [`RelativeAssemblyToleranceValue`](#AnalysisSettings.RelativeAssemblyToleranceValue)                                     | Gets or sets the RelativeAssemblyToleranceValue.                       |
| [`EnergyAccuracyTolerance`](#AnalysisSettings.EnergyAccuracyTolerance)                                                   | Gets or sets the EnergyAccuracyTolerance activity.                     |
| [`EnergyAccuracyToleranceValue`](#AnalysisSettings.EnergyAccuracyToleranceValue)                                         | Gets or sets the EnergyAccuracyToleranceValue.                         |
| [`NumericalDampingTolerance`](#AnalysisSettings.NumericalDampingTolerance)                                               | Gets or sets the NumericalDamping activity.                            |
| [`NumericalDampingValue`](#id115)                                                                                        | Gets or sets the NumericalDampingValue.                                |
| [`ForceResidualTolerance`](#AnalysisSettings.ForceResidualTolerance)                                                     | Gets or sets the ForceResidualTolerance activity.                      |
| [`ForceResidualToleranceValue`](#AnalysisSettings.ForceResidualToleranceValue)                                           | Gets or sets the ForceResidualToleranceValue.                          |
| [`ConstraintEquationResidualTolerance`](#AnalysisSettings.ConstraintEquationResidualTolerance)                           | Gets or sets the ConstraintEquationResidualTolerance activity.         |
| [`ConstraintEquationResidualToleranceValue`](#AnalysisSettings.ConstraintEquationResidualToleranceValue)                 | Gets or sets the ConstraintEquationResidualToleranceValue.             |
| [`VelocityConstraintEquationResidualTolerance`](#AnalysisSettings.VelocityConstraintEquationResidualTolerance)           | Gets or sets the VelocityConstraintEquationResidualTolerance activity. |
| [`VelocityConstraintEquationResidualToleranceValue`](#AnalysisSettings.VelocityConstraintEquationResidualToleranceValue) | Gets or sets the ConstraintEquationResidualToleranceValue.             |
| [`PerformStaticAnalysis`](#AnalysisSettings.PerformStaticAnalysis)                                                       | Gets or sets the .                                                     |
| [`Graph`](#id116)                                                                                                        | Graph property.                                                        |
| [`InternalObject`](#id117)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`ScratchSolverFilesDirectory`](#id118)                                                                                  | Gets the ScratchSolverFilesDirectory.                                  |
| [`SolverFilesDirectory`](#id119)                                                                                         | Gets the SolverFilesDirectory.                                         |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)   | Gets the current DataModelObject’s category.                           |
| [`Children`](#id121)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id122)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id123)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id124)                                                                                                       | Gets the list of associated images.                                    |
| [`Properties`](#id125)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id126)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id110"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AnalysisSettings import RBDAnalysisSettings
```

<a id="id111"></a>

## Property detail

<a id="id112"></a>

### *property* AnalysisSettings.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

InternalObject property.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* AnalysisSettings.NumberOfSteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSteps.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* AnalysisSettings.CurrentStepNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.TimeIntegrationType"></a>

### *property* AnalysisSettings.TimeIntegrationType *: [Ansys.Mechanical.DataModel.Enums.RBDTimeIntegrationType](../../../../Mechanical/DataModel/Enums/RBDTimeIntegrationType.md#RBDTimeIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Integration Method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.PositionCorrection"></a>

### *property* AnalysisSettings.PositionCorrection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PositionCorrection.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.VelocityCorrection"></a>

### *property* AnalysisSettings.VelocityCorrection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityCorrection.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CorrectionType"></a>

### *property* AnalysisSettings.CorrectionType *: [Ansys.Mechanical.DataModel.Enums.RBDCorrectionType](../../../../Mechanical/DataModel/Enums/RBDCorrectionType.md#RBDCorrectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CorrectionType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AssemblyType"></a>

### *property* AnalysisSettings.AssemblyType *: [Ansys.Mechanical.DataModel.Enums.RBDCorrectionType](../../../../Mechanical/DataModel/Enums/RBDCorrectionType.md#RBDCorrectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AssemblyType.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.DropoffTolerance"></a>

### *property* AnalysisSettings.DropoffTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DropoffTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RelativeAssemblyTolerance"></a>

### *property* AnalysisSettings.RelativeAssemblyTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelativeAssemblyTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RelativeAssemblyToleranceValue"></a>

### *property* AnalysisSettings.RelativeAssemblyToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelativeAssemblyToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EnergyAccuracyTolerance"></a>

### *property* AnalysisSettings.EnergyAccuracyTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyAccuracyTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.EnergyAccuracyToleranceValue"></a>

### *property* AnalysisSettings.EnergyAccuracyToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyAccuracyToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.NumericalDampingTolerance"></a>

### *property* AnalysisSettings.NumericalDampingTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDamping activity.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* AnalysisSettings.NumericalDampingValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDampingValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ForceResidualTolerance"></a>

### *property* AnalysisSettings.ForceResidualTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceResidualTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ForceResidualToleranceValue"></a>

### *property* AnalysisSettings.ForceResidualToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceResidualToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ConstraintEquationResidualTolerance"></a>

### *property* AnalysisSettings.ConstraintEquationResidualTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintEquationResidualTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ConstraintEquationResidualToleranceValue"></a>

### *property* AnalysisSettings.ConstraintEquationResidualToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintEquationResidualToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.VelocityConstraintEquationResidualTolerance"></a>

### *property* AnalysisSettings.VelocityConstraintEquationResidualTolerance *: [Ansys.Mechanical.DataModel.Enums.RBDProgramControlType](../../../../Mechanical/DataModel/Enums/RBDProgramControlType.md#RBDProgramControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityConstraintEquationResidualTolerance activity.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.VelocityConstraintEquationResidualToleranceValue"></a>

### *property* AnalysisSettings.VelocityConstraintEquationResidualToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintEquationResidualToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.PerformStaticAnalysis"></a>

### *property* AnalysisSettings.PerformStaticAnalysis *: [Ansys.Mechanical.DataModel.Enums.RBDDoStaticAnalysisType](../../../../Mechanical/DataModel/Enums/RBDDoStaticAnalysisType.md#RBDDoStaticAnalysisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the .

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* AnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* AnalysisSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisSettings | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* AnalysisSettings.ScratchSolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* AnalysisSettings.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* AnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* AnalysisSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* AnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* AnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* AnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* AnalysisSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* AnalysisSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

## Method detail

<a id="id128"></a>

### AnalysisSettings.GetStepEndTime(stepNumber: System.Int32)

Gets the Step End Time at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### AnalysisSettings.SetStepEndTime(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the Step End Time for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### AnalysisSettings.GetAutomaticTimeStepping(stepNumber: System.Int32)

Gets the Automatic Time Stepping at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### AnalysisSettings.SetAutomaticTimeStepping(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#AutomaticTimeStepping))

Sets the Automatic Time Stepping for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### AnalysisSettings.GetCarryOverTimeStep(stepNumber: System.Int32)

Gets the Carry Over Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### AnalysisSettings.SetCarryOverTimeStep(stepNumber: System.Int32, value: System.Boolean)

Sets the Carry Over Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### AnalysisSettings.GetInitialTimeStep(stepNumber: System.Int32)

Gets the Initial Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### AnalysisSettings.SetInitialTimeStep(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the Initial Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### AnalysisSettings.GetMinimumTimeStep(stepNumber: System.Int32)

Gets the Minimum Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### AnalysisSettings.SetMinimumTimeStep(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the Minimum Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### AnalysisSettings.GetMaximumTimeStep(stepNumber: System.Int32)

Gets the Maximum Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### AnalysisSettings.SetMaximumTimeStep(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the Maximum Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### AnalysisSettings.GetTimeStep(stepNumber: System.Int32)

Gets the (fixed) Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### AnalysisSettings.SetTimeStep(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the (fixed) Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetStoreResultAt"></a>

### AnalysisSettings.GetStoreResultAt(stepNumber: System.Int32)

Gets the StoreResultAt setting at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetStoreResultAt"></a>

### AnalysisSettings.SetStoreResultAt(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../Mechanical/DataModel/Enums/TimePointsOptions.md#TimePointsOptions))

Sets the StoreResultAt setting for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetStoreResultAtValue"></a>

### AnalysisSettings.GetStoreResultAtValue(stepNumber: System.Int32)

Gets the StoreResultAtValue setting at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SetStoreResultAtValue"></a>

### AnalysisSettings.SetStoreResultAtValue(stepNumber: System.Int32, value: System.Int32)

Sets the StoreResultAtValue setting for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### AnalysisSettings.DeleteAllRestartPoints()

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### AnalysisSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### AnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### AnalysisSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### AnalysisSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### AnalysisSettings.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### AnalysisSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### AnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### AnalysisSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### AnalysisSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### AnalysisSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### AnalysisSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### AnalysisSettings.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### AnalysisSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### AnalysisSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### AnalysisSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
