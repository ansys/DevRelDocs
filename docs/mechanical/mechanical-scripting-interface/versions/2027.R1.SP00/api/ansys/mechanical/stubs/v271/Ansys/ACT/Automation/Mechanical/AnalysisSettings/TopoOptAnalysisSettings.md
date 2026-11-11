# `TopoOptAnalysisSettings`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisSettings.TopoOptAnalysisSettings"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AnalysisSettings.TopoOptAnalysisSettings(internalObject: Any)

<a id="TopoOptAnalysisSettings"></a>

### *class* TopoOptAnalysisSettings(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a TopoOptAnalysisSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#TopoOptAnalysisSettings.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#TopoOptAnalysisSettings.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#TopoOptAnalysisSettings.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#TopoOptAnalysisSettings.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#TopoOptAnalysisSettings.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#TopoOptAnalysisSettings.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#TopoOptAnalysisSettings.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#TopoOptAnalysisSettings.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#TopoOptAnalysisSettings.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`DeleteAllRestartPoints`](#TopoOptAnalysisSettings.DeleteAllRestartPoints)       | DeleteAllRestartPoints method.                                                              |
| [`Duplicate`](#TopoOptAnalysisSettings.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#TopoOptAnalysisSettings.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#TopoOptAnalysisSettings.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#TopoOptAnalysisSettings.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#TopoOptAnalysisSettings.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#TopoOptAnalysisSettings.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#TopoOptAnalysisSettings.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#TopoOptAnalysisSettings.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#TopoOptAnalysisSettings.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#TopoOptAnalysisSettings.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#TopoOptAnalysisSettings.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#TopoOptAnalysisSettings.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#TopoOptAnalysisSettings.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#TopoOptAnalysisSettings.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#TopoOptAnalysisSettings.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#TopoOptAnalysisSettings.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#TopoOptAnalysisSettings.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#TopoOptAnalysisSettings.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#TopoOptAnalysisSettings.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#TopoOptAnalysisSettings.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#TopoOptAnalysisSettings.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#TopoOptAnalysisSettings.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#TopoOptAnalysisSettings.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#TopoOptAnalysisSettings.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#TopoOptAnalysisSettings.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#TopoOptAnalysisSettings.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#TopoOptAnalysisSettings.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#TopoOptAnalysisSettings.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Algorithm`](#TopoOptAnalysisSettings.Algorithm)                                               | Gets or sets the Algorithm.                                   |
| [`AttachedRefs`](#TopoOptAnalysisSettings.AttachedRefs)                                         | AttachedRefs property.                                        |
| [`Children`](#TopoOptAnalysisSettings.Children)                                                 | Gets the list of children.                                    |
| [`ClsId`](#TopoOptAnalysisSettings.ClsId)                                                       | ClsId property.                                               |
| [`Comments`](#TopoOptAnalysisSettings.Comments)                                                 | Gets the list of associated comments.                         |
| [`ConvergenceAccuracy`](#TopoOptAnalysisSettings.ConvergenceAccuracy)                           | Gets or sets the ConvergenceAccuracy.                         |
| [`DataModelObjectCategory`](#TopoOptAnalysisSettings.DataModelObjectCategory)                   | Gets the current DataModelObject's category.                  |
| [`DeleteUnneededFiles`](#TopoOptAnalysisSettings.DeleteUnneededFiles)                           | Gets or sets the DeleteUnneededFiles.                         |
| [`ExportDesignProperties`](#TopoOptAnalysisSettings.ExportDesignProperties)                     | Gets or sets the ExportDesignProperties.                      |
| [`ExportDesignPropertiesFileFormat`](#TopoOptAnalysisSettings.ExportDesignPropertiesFileFormat) | Gets or sets the ExportDesignPropertiesFileFormat.            |
| [`ExportKnockdownFilePath`](#TopoOptAnalysisSettings.ExportKnockdownFilePath)                   | Gets or sets the ExportKnockdownFilePath.                     |
| [`Figures`](#TopoOptAnalysisSettings.Figures)                                                   | Gets the list of associated figures.                          |
| [`Filter`](#TopoOptAnalysisSettings.Filter)                                                     | Gets or sets the Filter.                                      |
| [`FutureAnalysis`](#TopoOptAnalysisSettings.FutureAnalysis)                                     | Gets or sets the FutureAnalysis.                              |
| [`Graph`](#TopoOptAnalysisSettings.Graph)                                                       | Graph property.                                               |
| [`GroupingFolder`](#TopoOptAnalysisSettings.GroupingFolder)                                     | GroupingFolder property.                                      |
| [`IconName`](#TopoOptAnalysisSettings.IconName)                                                 | IconName property.                                            |
| [`Images`](#TopoOptAnalysisSettings.Images)                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#TopoOptAnalysisSettings.InternalObject)                                     | Gets the internal object. For advanced usage only.            |
| [`MaxNumOfIntermediateFiles`](#TopoOptAnalysisSettings.MaxNumOfIntermediateFiles)               | Gets or sets the MaxNumOfIntermediateFiles.                   |
| [`MaximumNumberOfIterations`](#TopoOptAnalysisSettings.MaximumNumberOfIterations)               | Gets or sets the MaximumNumberOfIterations.                   |
| [`MinimumNormalizedDensity`](#TopoOptAnalysisSettings.MinimumNormalizedDensity)                 | Gets or sets the MinimumNormalizedDensity.                    |
| [`MultiOptimTypeStrategy`](#TopoOptAnalysisSettings.MultiOptimTypeStrategy)                     | Gets or sets the MultiOptimTypeStrategy.                      |
| [`Name`](#TopoOptAnalysisSettings.Name)                                                         | Name property.                                                |
| [`ObjectId`](#TopoOptAnalysisSettings.ObjectId)                                                 | ObjectId property.                                            |
| [`ObjectState`](#TopoOptAnalysisSettings.ObjectState)                                           | ObjectState property.                                         |
| [`ObjectTags`](#TopoOptAnalysisSettings.ObjectTags)                                             | ObjectTags property.                                          |
| [`OptimizationOutputLog`](#TopoOptAnalysisSettings.OptimizationOutputLog)                       | Gets or sets the OptimizationOutputLog.                       |
| [`Parent`](#TopoOptAnalysisSettings.Parent)                                                     | Parent property.                                              |
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
| [`State`](#TopoOptAnalysisSettings.State)                                                       | State property.                                               |
| [`StoreResultsAt`](#TopoOptAnalysisSettings.StoreResultsAt)                                     | Gets or sets the StoreResultsAt.                              |
| [`StoreResultsAtValue`](#TopoOptAnalysisSettings.StoreResultsAtValue)                           | Gets or sets the StoreResultsAtValue.                         |
| [`SurfaceStress`](#TopoOptAnalysisSettings.SurfaceStress)                                       | Gets or sets the SurfaceStress.                               |
| [`TopoOptInitialDensity`](#TopoOptAnalysisSettings.TopoOptInitialDensity)                       | Gets or sets the TopoOptInitialDensity.                       |
| [`VisibleProperties`](#TopoOptAnalysisSettings.VisibleProperties)                               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TopoOptAnalysisSettings.Algorithm"></a>

### *property* TopoOptAnalysisSettings.Algorithm *: [Ansys.Mechanical.DataModel.Enums.AlgorithmType](../../../../Mechanical/DataModel/Enums/AlgorithmType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AlgorithmType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Algorithm.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.AttachedRefs"></a>

### *property* TopoOptAnalysisSettings.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Children"></a>

### *property* TopoOptAnalysisSettings.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.ClsId"></a>

### *property* TopoOptAnalysisSettings.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Comments"></a>

### *property* TopoOptAnalysisSettings.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.ConvergenceAccuracy"></a>

### *property* TopoOptAnalysisSettings.ConvergenceAccuracy *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ConvergenceAccuracy.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.DataModelObjectCategory"></a>

### *property* TopoOptAnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.DeleteUnneededFiles"></a>

### *property* TopoOptAnalysisSettings.DeleteUnneededFiles *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeleteUnneededFiles.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.ExportDesignProperties"></a>

### *property* TopoOptAnalysisSettings.ExportDesignProperties *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationExportDesignProperties](../../../../Mechanical/DataModel/Enums/TopoOptimizationExportDesignProperties.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopoOptimizationExportDesignProperties) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExportDesignProperties.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.ExportDesignPropertiesFileFormat"></a>

### *property* TopoOptAnalysisSettings.ExportDesignPropertiesFileFormat *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationExportDesignPropertiesFileFormat](../../../../Mechanical/DataModel/Enums/TopoOptimizationExportDesignPropertiesFileFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopoOptimizationExportDesignPropertiesFileFormat) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExportDesignPropertiesFileFormat.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.ExportKnockdownFilePath"></a>

### *property* TopoOptAnalysisSettings.ExportKnockdownFilePath *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExportKnockdownFilePath.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Figures"></a>

### *property* TopoOptAnalysisSettings.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Filter"></a>

### *property* TopoOptAnalysisSettings.Filter *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationDensityFilter](../../../../Mechanical/DataModel/Enums/TopoOptimizationDensityFilter.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopoOptimizationDensityFilter) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filter.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.FutureAnalysis"></a>

### *property* TopoOptAnalysisSettings.FutureAnalysis *: [Ansys.Mechanical.DataModel.Enums.FutureIntentType](../../../../Mechanical/DataModel/Enums/FutureIntentType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FutureIntentType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FutureAnalysis.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Graph"></a>

### *property* TopoOptAnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnalysisSettingsGraph) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GroupingFolder"></a>

### *property* TopoOptAnalysisSettings.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.IconName"></a>

### *property* TopoOptAnalysisSettings.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Images"></a>

### *property* TopoOptAnalysisSettings.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.InternalObject"></a>

### *property* TopoOptAnalysisSettings.InternalObject *: Ansys.Common.Interop.DSAnalysisSettingsObjects.IDSAnalysisSettings | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.MaxNumOfIntermediateFiles"></a>

### *property* TopoOptAnalysisSettings.MaxNumOfIntermediateFiles *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaxNumOfIntermediateFiles.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.MaximumNumberOfIterations"></a>

### *property* TopoOptAnalysisSettings.MaximumNumberOfIterations *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumNumberOfIterations.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.MinimumNormalizedDensity"></a>

### *property* TopoOptAnalysisSettings.MinimumNormalizedDensity *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumNormalizedDensity.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.MultiOptimTypeStrategy"></a>

### *property* TopoOptAnalysisSettings.MultiOptimTypeStrategy *: [Ansys.Mechanical.DataModel.Enums.MultiOptimTypeStrategyType](../../../../Mechanical/DataModel/Enums/MultiOptimTypeStrategyType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultiOptimTypeStrategyType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MultiOptimTypeStrategy.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Name"></a>

### *property* TopoOptAnalysisSettings.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.ObjectId"></a>

### *property* TopoOptAnalysisSettings.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.ObjectState"></a>

### *property* TopoOptAnalysisSettings.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.ObjectTags"></a>

### *property* TopoOptAnalysisSettings.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.OptimizationOutputLog"></a>

### *property* TopoOptAnalysisSettings.OptimizationOutputLog *: [Ansys.Mechanical.DataModel.Enums.TopoOptimizationOutputLog](../../../../Mechanical/DataModel/Enums/TopoOptimizationOutputLog.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopoOptimizationOutputLog) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OptimizationOutputLog.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Parent"></a>

### *property* TopoOptAnalysisSettings.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.PenaltyFactor"></a>

### *property* TopoOptAnalysisSettings.PenaltyFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PenaltyFactor.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Properties"></a>

### *property* TopoOptAnalysisSettings.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.RegionOfAMOverhangConstraint"></a>

### *property* TopoOptAnalysisSettings.RegionOfAMOverhangConstraint *: [Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType](../../../../Mechanical/DataModel/Enums/ExclusionParticipantType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RegionOfAMOverhangConstraint.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.RegionOfManufacturingConstraint"></a>

### *property* TopoOptAnalysisSettings.RegionOfManufacturingConstraint *: [Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType](../../../../Mechanical/DataModel/Enums/ExclusionParticipantType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RegionOfManufacturingConstraint.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.RegionOfMinMemberSize"></a>

### *property* TopoOptAnalysisSettings.RegionOfMinMemberSize *: [Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType](../../../../Mechanical/DataModel/Enums/ExclusionParticipantType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExclusionParticipantType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RegionOfMinMemberSize.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.SaveMAPDLDB"></a>

### *property* TopoOptAnalysisSettings.SaveMAPDLDB *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SaveMAPDLDB.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.ScratchSolverFilesDirectory"></a>

### *property* TopoOptAnalysisSettings.ScratchSolverFilesDirectory *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.SolverFilesDirectory"></a>

### *property* TopoOptAnalysisSettings.SolverFilesDirectory *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.SolverType"></a>

### *property* TopoOptAnalysisSettings.SolverType *: [Ansys.Mechanical.DataModel.Enums.OptimizationSolverType](../../../../Mechanical/DataModel/Enums/OptimizationSolverType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.OptimizationSolverType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverType.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.SolverUnitSystem"></a>

### *property* TopoOptAnalysisSettings.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.SolverUnits"></a>

### *property* TopoOptAnalysisSettings.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.State"></a>

### *property* TopoOptAnalysisSettings.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.StoreResultsAt"></a>

### *property* TopoOptAnalysisSettings.StoreResultsAt *: [Ansys.Mechanical.DataModel.Enums.IterationOptions](../../../../Mechanical/DataModel/Enums/IterationOptions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.IterationOptions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StoreResultsAt.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.StoreResultsAtValue"></a>

### *property* TopoOptAnalysisSettings.StoreResultsAtValue *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StoreResultsAtValue.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.SurfaceStress"></a>

### *property* TopoOptAnalysisSettings.SurfaceStress *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SurfaceStress.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.TopoOptInitialDensity"></a>

### *property* TopoOptAnalysisSettings.TopoOptInitialDensity *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TopoOptInitialDensity.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.VisibleProperties"></a>

### *property* TopoOptAnalysisSettings.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TopoOptAnalysisSettings.Activate"></a>

### TopoOptAnalysisSettings.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.AddComment"></a>

### TopoOptAnalysisSettings.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.AddFigure"></a>

### TopoOptAnalysisSettings.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.AddImage"></a>

### TopoOptAnalysisSettings.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Copy"></a>

### TopoOptAnalysisSettings.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.CopyTo"></a>

### TopoOptAnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.CreateObjRef"></a>

### TopoOptAnalysisSettings.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.CreateParameter"></a>

### TopoOptAnalysisSettings.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Cut"></a>

### TopoOptAnalysisSettings.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.DeleteAllRestartPoints"></a>

### TopoOptAnalysisSettings.DeleteAllRestartPoints() → [None](https://docs.python.org/3/builtins/constants.html#None)

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Duplicate"></a>

### TopoOptAnalysisSettings.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Equals"></a>

### TopoOptAnalysisSettings.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetAPIName"></a>

### TopoOptAnalysisSettings.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetAllProperties"></a>

### TopoOptAnalysisSettings.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetChildren"></a>

### TopoOptAnalysisSettings.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### TopoOptAnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetDetailsView"></a>

### TopoOptAnalysisSettings.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetEnumName"></a>

### TopoOptAnalysisSettings.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetHashCode"></a>

### TopoOptAnalysisSettings.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetIconFile"></a>

### TopoOptAnalysisSettings.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetLifetimeService"></a>

### TopoOptAnalysisSettings.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetObjectData"></a>

### TopoOptAnalysisSettings.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetParameter"></a>

### TopoOptAnalysisSettings.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetPath"></a>

### TopoOptAnalysisSettings.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetPropertyName"></a>

### TopoOptAnalysisSettings.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetPropertyValue"></a>

### TopoOptAnalysisSettings.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetVisibleProperties"></a>

### TopoOptAnalysisSettings.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GetVisiblePropertyNames"></a>

### TopoOptAnalysisSettings.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GroupAllSimilarChildren"></a>

### TopoOptAnalysisSettings.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.GroupSimilarObjects"></a>

### TopoOptAnalysisSettings.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.InitializeLifetimeService"></a>

### TopoOptAnalysisSettings.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.IsPropertyEditable"></a>

### TopoOptAnalysisSettings.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TopoOptAnalysisSettings.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.IsPropertyVisible"></a>

### TopoOptAnalysisSettings.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TopoOptAnalysisSettings.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.Paste"></a>

### TopoOptAnalysisSettings.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.PropertyByAPIName"></a>

### TopoOptAnalysisSettings.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.PropertyById"></a>

### TopoOptAnalysisSettings.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.PropertyByName"></a>

### TopoOptAnalysisSettings.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.RemoveFromGroup"></a>

### TopoOptAnalysisSettings.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="TopoOptAnalysisSettings.RemoveParameter"></a>

### TopoOptAnalysisSettings.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

