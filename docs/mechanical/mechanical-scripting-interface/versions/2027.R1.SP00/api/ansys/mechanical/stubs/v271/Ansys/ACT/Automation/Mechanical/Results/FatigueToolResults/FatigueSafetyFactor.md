# `FatigueSafetyFactor`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueSafetyFactor"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueSafetyFactor(internalObject: Any)

<a id="FatigueSafetyFactor"></a>

### *class* FatigueSafetyFactor(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FatigueSafetyFactor.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FatigueSafetyFactor.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#FatigueSafetyFactor.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#FatigueSafetyFactor.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#FatigueSafetyFactor.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#FatigueSafetyFactor.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#FatigueSafetyFactor.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#FatigueSafetyFactor.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#FatigueSafetyFactor.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#FatigueSafetyFactor.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FatigueSafetyFactor.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FatigueSafetyFactor.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FatigueSafetyFactor.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#FatigueSafetyFactor.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#FatigueSafetyFactor.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FatigueSafetyFactor.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#FatigueSafetyFactor.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#FatigueSafetyFactor.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#FatigueSafetyFactor.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#FatigueSafetyFactor.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#FatigueSafetyFactor.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#FatigueSafetyFactor.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#FatigueSafetyFactor.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#FatigueSafetyFactor.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#FatigueSafetyFactor.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#FatigueSafetyFactor.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#FatigueSafetyFactor.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FatigueSafetyFactor.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FatigueSafetyFactor.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FatigueSafetyFactor.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FatigueSafetyFactor.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FatigueSafetyFactor.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FatigueSafetyFactor.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#FatigueSafetyFactor.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#FatigueSafetyFactor.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FatigueSafetyFactor.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FatigueSafetyFactor.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FatigueSafetyFactor.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FatigueSafetyFactor.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#FatigueSafetyFactor.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#FatigueSafetyFactor.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FatigueSafetyFactor.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FatigueSafetyFactor.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FatigueSafetyFactor.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FatigueSafetyFactor.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FatigueSafetyFactor.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FatigueSafetyFactor.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FatigueSafetyFactor.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#FatigueSafetyFactor.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#FatigueSafetyFactor.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FatigueSafetyFactor.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FatigueSafetyFactor.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FatigueSafetyFactor.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FatigueSafetyFactor.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#FatigueSafetyFactor.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#FatigueSafetyFactor.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#FatigueSafetyFactor.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#FatigueSafetyFactor.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#FatigueSafetyFactor.Average)                                                       | Gets the Average.                                                                                        |
| [`AverageAcrossBodies`](#FatigueSafetyFactor.AverageAcrossBodies)                               | Gets or sets the AverageAcrossBodies.                                                                    |
| [`By`](#FatigueSafetyFactor.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#FatigueSafetyFactor.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#FatigueSafetyFactor.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#FatigueSafetyFactor.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#FatigueSafetyFactor.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#FatigueSafetyFactor.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#FatigueSafetyFactor.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#FatigueSafetyFactor.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DesignLife`](#FatigueSafetyFactor.DesignLife)                                                 | Gets or sets the DesignLife.                                                                             |
| [`DisplayOption`](#FatigueSafetyFactor.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#FatigueSafetyFactor.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#FatigueSafetyFactor.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#FatigueSafetyFactor.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`GlobalIDs`](#FatigueSafetyFactor.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#FatigueSafetyFactor.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#FatigueSafetyFactor.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#FatigueSafetyFactor.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#FatigueSafetyFactor.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#FatigueSafetyFactor.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#FatigueSafetyFactor.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#FatigueSafetyFactor.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#FatigueSafetyFactor.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#FatigueSafetyFactor.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#FatigueSafetyFactor.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#FatigueSafetyFactor.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#FatigueSafetyFactor.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#FatigueSafetyFactor.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#FatigueSafetyFactor.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#FatigueSafetyFactor.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#FatigueSafetyFactor.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#FatigueSafetyFactor.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#FatigueSafetyFactor.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#FatigueSafetyFactor.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#FatigueSafetyFactor.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Method`](#FatigueSafetyFactor.Method)                                                         | Gets the Method.                                                                                         |
| [`Minimum`](#FatigueSafetyFactor.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#FatigueSafetyFactor.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#FatigueSafetyFactor.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#FatigueSafetyFactor.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Name`](#FatigueSafetyFactor.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                   | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#FatigueSafetyFactor.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#FatigueSafetyFactor.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#FatigueSafetyFactor.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#FatigueSafetyFactor.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                    | Path property.                                                                                           |
| [`PlotData`](#FatigueSafetyFactor.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#FatigueSafetyFactor.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#FatigueSafetyFactor.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#FatigueSafetyFactor.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#FatigueSafetyFactor.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#FatigueSafetyFactor.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#FatigueSafetyFactor.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#FatigueSafetyFactor.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#FatigueSafetyFactor.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#FatigueSafetyFactor.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#FatigueSafetyFactor.State)                                                           | State property.                                                                                          |
| [`Substep`](#FatigueSafetyFactor.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#FatigueSafetyFactor.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                           | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                      | SurfaceCoating property.                                                                                 |
| [`TabularData`](#FatigueSafetyFactor.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#FatigueSafetyFactor.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#FatigueSafetyFactor.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#FatigueSafetyFactor.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#FatigueSafetyFactor.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#FatigueSafetyFactor.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#FatigueSafetyFactor.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#FatigueSafetyFactor.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#FatigueSafetyFactor.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#FatigueSafetyFactor.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#FatigueSafetyFactor.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#FatigueSafetyFactor.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#FatigueSafetyFactor.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#FatigueSafetyFactor.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#FatigueSafetyFactor.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#FatigueSafetyFactor.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#FatigueSafetyFactor.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#FatigueSafetyFactor.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#FatigueSafetyFactor.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#FatigueSafetyFactor.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#FatigueSafetyFactor.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#FatigueSafetyFactor.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#FatigueSafetyFactor.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#FatigueSafetyFactor.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#FatigueSafetyFactor.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="FatigueSafetyFactor.AttachedRefs"></a>

### *property* FatigueSafetyFactor.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Average"></a>

### *property* FatigueSafetyFactor.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.AverageAcrossBodies"></a>

### *property* FatigueSafetyFactor.AverageAcrossBodies *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.By"></a>

### *property* FatigueSafetyFactor.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.CalculateTimeHistory"></a>

### *property* FatigueSafetyFactor.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Children"></a>

### *property* FatigueSafetyFactor.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.ClsId"></a>

### *property* FatigueSafetyFactor.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.CombinationNumber"></a>

### *property* FatigueSafetyFactor.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Comments"></a>

### *property* FatigueSafetyFactor.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.CoordinateSystem"></a>

### *property* FatigueSafetyFactor.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.CrackFrontNumber"></a>

### *property* FatigueSafetyFactor.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.DataModelObjectCategory"></a>

### *property* FatigueSafetyFactor.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.DesignLife"></a>

### *property* FatigueSafetyFactor.DesignLife *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.DisplayOption"></a>

### *property* FatigueSafetyFactor.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.DisplayTime"></a>

### *property* FatigueSafetyFactor.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.DpfEvaluation"></a>

### *property* FatigueSafetyFactor.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Figures"></a>

### *property* FatigueSafetyFactor.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GlobalIDs"></a>

### *property* FatigueSafetyFactor.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GraphControlsXAxis"></a>

### *property* FatigueSafetyFactor.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GroupingFolder"></a>

### *property* FatigueSafetyFactor.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.IconName"></a>

### *property* FatigueSafetyFactor.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Identifier"></a>

### *property* FatigueSafetyFactor.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Images"></a>

### *property* FatigueSafetyFactor.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.InternalObject"></a>

### *property* FatigueSafetyFactor.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.IsSolved"></a>

### *property* FatigueSafetyFactor.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.ItemType"></a>

### *property* FatigueSafetyFactor.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.IterationNumber"></a>

### *property* FatigueSafetyFactor.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.LoadStep"></a>

### *property* FatigueSafetyFactor.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.LoadStepForMaximumOfMaximumValues"></a>

### *property* FatigueSafetyFactor.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.LoadStepForMaximumOfMinimumValues"></a>

### *property* FatigueSafetyFactor.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.LoadStepForMinimumOfMaximumValues"></a>

### *property* FatigueSafetyFactor.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.LoadStepForMinimumOfMinimumValues"></a>

### *property* FatigueSafetyFactor.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.LoadStepNumber"></a>

### *property* FatigueSafetyFactor.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Location"></a>

### *property* FatigueSafetyFactor.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Maximum"></a>

### *property* FatigueSafetyFactor.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.MaximumOccursOn"></a>

### *property* FatigueSafetyFactor.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.MaximumOfMaximumOverTime"></a>

### *property* FatigueSafetyFactor.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.MaximumOfMinimumOverTime"></a>

### *property* FatigueSafetyFactor.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Method"></a>

### *property* FatigueSafetyFactor.Method *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Minimum"></a>

### *property* FatigueSafetyFactor.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.MinimumOccursOn"></a>

### *property* FatigueSafetyFactor.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.MinimumOfMaximumOverTime"></a>

### *property* FatigueSafetyFactor.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.MinimumOfMinimumOverTime"></a>

### *property* FatigueSafetyFactor.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Name"></a>

### *property* FatigueSafetyFactor.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.NamedSelections"></a>

### *property* FatigueSafetyFactor.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.ObjectId"></a>

### *property* FatigueSafetyFactor.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.ObjectState"></a>

### *property* FatigueSafetyFactor.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.ObjectTags"></a>

### *property* FatigueSafetyFactor.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Parent"></a>

### *property* FatigueSafetyFactor.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Path"></a>

### *property* FatigueSafetyFactor.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.PlotData"></a>

### *property* FatigueSafetyFactor.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Properties"></a>

### *property* FatigueSafetyFactor.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.RPMSelection"></a>

### *property* FatigueSafetyFactor.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.ResultType"></a>

### *property* FatigueSafetyFactor.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.RpmSetNumber"></a>

### *property* FatigueSafetyFactor.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.ScopingMethod"></a>

### *property* FatigueSafetyFactor.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.SeparateDataByEntity"></a>

### *property* FatigueSafetyFactor.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.SetNumber"></a>

### *property* FatigueSafetyFactor.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.SolutionCombinationDriver"></a>

### *property* FatigueSafetyFactor.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.SolverComponentIDs"></a>

### *property* FatigueSafetyFactor.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.State"></a>

### *property* FatigueSafetyFactor.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Substep"></a>

### *property* FatigueSafetyFactor.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Suppressed"></a>

### *property* FatigueSafetyFactor.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Surface"></a>

### *property* FatigueSafetyFactor.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.SurfaceCoating"></a>

### *property* FatigueSafetyFactor.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.TabularData"></a>

### *property* FatigueSafetyFactor.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Time"></a>

### *property* FatigueSafetyFactor.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.TimeForMaximumOfMaximumValues"></a>

### *property* FatigueSafetyFactor.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.TimeForMaximumOfMinimumValues"></a>

### *property* FatigueSafetyFactor.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.TimeForMinimumOfMaximumValues"></a>

### *property* FatigueSafetyFactor.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.TimeForMinimumOfMinimumValues"></a>

### *property* FatigueSafetyFactor.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Total"></a>

### *property* FatigueSafetyFactor.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.VisibleProperties"></a>

### *property* FatigueSafetyFactor.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.WaterfallDisplayFilterBy"></a>

### *property* FatigueSafetyFactor.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.WaterfallDisplayFrequencySelection"></a>

### *property* FatigueSafetyFactor.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.WaterfallDisplayInterpolateData"></a>

### *property* FatigueSafetyFactor.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.WaterfallDisplayLowerBand"></a>

### *property* FatigueSafetyFactor.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.WaterfallDisplayMaxRPM"></a>

### *property* FatigueSafetyFactor.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.WaterfallDisplayMinRPM"></a>

### *property* FatigueSafetyFactor.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.WaterfallDisplayModeSelection"></a>

### *property* FatigueSafetyFactor.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.WaterfallDisplayOrderSelection"></a>

### *property* FatigueSafetyFactor.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.WaterfallDisplayRpmSelection"></a>

### *property* FatigueSafetyFactor.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.WaterfallDisplayScopeToOrderLines"></a>

### *property* FatigueSafetyFactor.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.WaterfallDisplayTimeSelection"></a>

### *property* FatigueSafetyFactor.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.WaterfallDisplayUpperBand"></a>

### *property* FatigueSafetyFactor.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.WaterfallDisplayXAxisMaximum"></a>

### *property* FatigueSafetyFactor.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.WaterfallDisplayXAxisMinimum"></a>

### *property* FatigueSafetyFactor.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.WaterfallDisplayYAxisMaximum"></a>

### *property* FatigueSafetyFactor.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.WaterfallDisplayYAxisMinimum"></a>

### *property* FatigueSafetyFactor.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.WaterfallShowTextOnMosaic"></a>

### *property* FatigueSafetyFactor.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueSafetyFactor.Activate"></a>

### FatigueSafetyFactor.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.AddAlert"></a>

### FatigueSafetyFactor.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.AddComment"></a>

### FatigueSafetyFactor.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.AddConvergence"></a>

### FatigueSafetyFactor.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.AddFigure"></a>

### FatigueSafetyFactor.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.AddImage"></a>

### FatigueSafetyFactor.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.BodyWhereMaximumOccurs"></a>

### FatigueSafetyFactor.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.ClearGeneratedData"></a>

### FatigueSafetyFactor.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Copy"></a>

### FatigueSafetyFactor.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.CopyTo"></a>

### FatigueSafetyFactor.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.CreateObjRef"></a>

### FatigueSafetyFactor.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.CreateParameter"></a>

### FatigueSafetyFactor.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.CreateResultsAtAllSets"></a>

### FatigueSafetyFactor.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Cut"></a>

### FatigueSafetyFactor.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Delete"></a>

### FatigueSafetyFactor.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Duplicate"></a>

### FatigueSafetyFactor.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.DuplicateWithoutResults"></a>

### FatigueSafetyFactor.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Equals"></a>

### FatigueSafetyFactor.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.EvaluateAllResults"></a>

### FatigueSafetyFactor.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.ExportAnimation"></a>

### FatigueSafetyFactor.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.ExportToSTLFile"></a>

### FatigueSafetyFactor.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.ExportToTextFile"></a>

### FatigueSafetyFactor.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### FatigueSafetyFactor.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.FetchRemoteResult"></a>

### FatigueSafetyFactor.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.FetchRemoteResults"></a>

### FatigueSafetyFactor.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetAPIName"></a>

### FatigueSafetyFactor.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetAllProperties"></a>

### FatigueSafetyFactor.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetChildren"></a>

### FatigueSafetyFactor.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FatigueSafetyFactor.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetDetailsView"></a>

### FatigueSafetyFactor.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetEnumName"></a>

### FatigueSafetyFactor.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetHashCode"></a>

### FatigueSafetyFactor.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetIconFile"></a>

### FatigueSafetyFactor.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetLifetimeService"></a>

### FatigueSafetyFactor.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetNodalValues"></a>

### FatigueSafetyFactor.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetObjectData"></a>

### FatigueSafetyFactor.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetParameter"></a>

### FatigueSafetyFactor.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetPath"></a>

### FatigueSafetyFactor.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetPropertyName"></a>

### FatigueSafetyFactor.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetPropertyValue"></a>

### FatigueSafetyFactor.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetQuantityName"></a>

### FatigueSafetyFactor.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetVisibleProperties"></a>

### FatigueSafetyFactor.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetVisiblePropertyNames"></a>

### FatigueSafetyFactor.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GroupAllSimilarChildren"></a>

### FatigueSafetyFactor.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GroupSimilarObjects"></a>

### FatigueSafetyFactor.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.InitializeLifetimeService"></a>

### FatigueSafetyFactor.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.IsPropertyEditable"></a>

### FatigueSafetyFactor.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FatigueSafetyFactor.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.IsPropertyVisible"></a>

### FatigueSafetyFactor.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FatigueSafetyFactor.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Paste"></a>

### FatigueSafetyFactor.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.PromoteToNamedSelection"></a>

### FatigueSafetyFactor.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.PropertyByAPIName"></a>

### FatigueSafetyFactor.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.PropertyById"></a>

### FatigueSafetyFactor.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.PropertyByName"></a>

### FatigueSafetyFactor.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.RemoveFromGroup"></a>

### FatigueSafetyFactor.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.RemoveParameter"></a>

### FatigueSafetyFactor.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.RenameBasedOnDefinition"></a>

### FatigueSafetyFactor.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.RetrieveRemoteDPFResults"></a>

### FatigueSafetyFactor.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.RetrieveResult"></a>

### FatigueSafetyFactor.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

