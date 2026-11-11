# `FatigueEquivalentAlternativeStress`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueEquivalentAlternativeStress"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueEquivalentAlternativeStress(internalObject: Any)

<a id="FatigueEquivalentAlternativeStress"></a>

### *class* FatigueEquivalentAlternativeStress(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FatigueEquivalentAlternativeStress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FatigueEquivalentAlternativeStress.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#FatigueEquivalentAlternativeStress.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#FatigueEquivalentAlternativeStress.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#FatigueEquivalentAlternativeStress.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#FatigueEquivalentAlternativeStress.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#FatigueEquivalentAlternativeStress.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#FatigueEquivalentAlternativeStress.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#FatigueEquivalentAlternativeStress.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#FatigueEquivalentAlternativeStress.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FatigueEquivalentAlternativeStress.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FatigueEquivalentAlternativeStress.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FatigueEquivalentAlternativeStress.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#FatigueEquivalentAlternativeStress.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#FatigueEquivalentAlternativeStress.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FatigueEquivalentAlternativeStress.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#FatigueEquivalentAlternativeStress.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#FatigueEquivalentAlternativeStress.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#FatigueEquivalentAlternativeStress.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#FatigueEquivalentAlternativeStress.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#FatigueEquivalentAlternativeStress.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#FatigueEquivalentAlternativeStress.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#FatigueEquivalentAlternativeStress.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#FatigueEquivalentAlternativeStress.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#FatigueEquivalentAlternativeStress.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#FatigueEquivalentAlternativeStress.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#FatigueEquivalentAlternativeStress.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FatigueEquivalentAlternativeStress.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FatigueEquivalentAlternativeStress.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FatigueEquivalentAlternativeStress.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FatigueEquivalentAlternativeStress.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FatigueEquivalentAlternativeStress.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FatigueEquivalentAlternativeStress.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#FatigueEquivalentAlternativeStress.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#FatigueEquivalentAlternativeStress.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FatigueEquivalentAlternativeStress.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FatigueEquivalentAlternativeStress.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FatigueEquivalentAlternativeStress.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FatigueEquivalentAlternativeStress.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#FatigueEquivalentAlternativeStress.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#FatigueEquivalentAlternativeStress.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FatigueEquivalentAlternativeStress.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FatigueEquivalentAlternativeStress.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FatigueEquivalentAlternativeStress.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FatigueEquivalentAlternativeStress.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FatigueEquivalentAlternativeStress.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FatigueEquivalentAlternativeStress.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FatigueEquivalentAlternativeStress.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#FatigueEquivalentAlternativeStress.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#FatigueEquivalentAlternativeStress.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FatigueEquivalentAlternativeStress.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FatigueEquivalentAlternativeStress.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FatigueEquivalentAlternativeStress.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FatigueEquivalentAlternativeStress.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#FatigueEquivalentAlternativeStress.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#FatigueEquivalentAlternativeStress.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#FatigueEquivalentAlternativeStress.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#FatigueEquivalentAlternativeStress.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#FatigueEquivalentAlternativeStress.Average)                                                       | Gets the Average.                                                                                        |
| [`AverageAcrossBodies`](#FatigueEquivalentAlternativeStress.AverageAcrossBodies)                               | Gets or sets the AverageAcrossBodies.                                                                    |
| [`By`](#FatigueEquivalentAlternativeStress.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#FatigueEquivalentAlternativeStress.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#FatigueEquivalentAlternativeStress.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#FatigueEquivalentAlternativeStress.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#FatigueEquivalentAlternativeStress.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#FatigueEquivalentAlternativeStress.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                               | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#FatigueEquivalentAlternativeStress.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#FatigueEquivalentAlternativeStress.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DesignLife`](#FatigueEquivalentAlternativeStress.DesignLife)                                                 | Gets or sets the DesignLife.                                                                             |
| [`DisplayOption`](#FatigueEquivalentAlternativeStress.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#FatigueEquivalentAlternativeStress.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#FatigueEquivalentAlternativeStress.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#FatigueEquivalentAlternativeStress.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`GlobalIDs`](#FatigueEquivalentAlternativeStress.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#FatigueEquivalentAlternativeStress.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#FatigueEquivalentAlternativeStress.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#FatigueEquivalentAlternativeStress.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#FatigueEquivalentAlternativeStress.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#FatigueEquivalentAlternativeStress.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#FatigueEquivalentAlternativeStress.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#FatigueEquivalentAlternativeStress.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#FatigueEquivalentAlternativeStress.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#FatigueEquivalentAlternativeStress.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#FatigueEquivalentAlternativeStress.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#FatigueEquivalentAlternativeStress.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#FatigueEquivalentAlternativeStress.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#FatigueEquivalentAlternativeStress.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#FatigueEquivalentAlternativeStress.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#FatigueEquivalentAlternativeStress.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#FatigueEquivalentAlternativeStress.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#FatigueEquivalentAlternativeStress.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#FatigueEquivalentAlternativeStress.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#FatigueEquivalentAlternativeStress.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#FatigueEquivalentAlternativeStress.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Method`](#FatigueEquivalentAlternativeStress.Method)                                                         | Gets the Method.                                                                                         |
| [`Minimum`](#FatigueEquivalentAlternativeStress.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#FatigueEquivalentAlternativeStress.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#FatigueEquivalentAlternativeStress.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#FatigueEquivalentAlternativeStress.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Name`](#FatigueEquivalentAlternativeStress.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                                  | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#FatigueEquivalentAlternativeStress.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#FatigueEquivalentAlternativeStress.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#FatigueEquivalentAlternativeStress.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#FatigueEquivalentAlternativeStress.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                                   | Path property.                                                                                           |
| [`PlotData`](#FatigueEquivalentAlternativeStress.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#FatigueEquivalentAlternativeStress.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#FatigueEquivalentAlternativeStress.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#FatigueEquivalentAlternativeStress.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#FatigueEquivalentAlternativeStress.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#FatigueEquivalentAlternativeStress.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#FatigueEquivalentAlternativeStress.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#FatigueEquivalentAlternativeStress.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#FatigueEquivalentAlternativeStress.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#FatigueEquivalentAlternativeStress.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#FatigueEquivalentAlternativeStress.State)                                                           | State property.                                                                                          |
| [`Substep`](#FatigueEquivalentAlternativeStress.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#FatigueEquivalentAlternativeStress.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                          | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                                     | SurfaceCoating property.                                                                                 |
| [`TabularData`](#FatigueEquivalentAlternativeStress.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#FatigueEquivalentAlternativeStress.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#FatigueEquivalentAlternativeStress.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#FatigueEquivalentAlternativeStress.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#FatigueEquivalentAlternativeStress.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#FatigueEquivalentAlternativeStress.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#FatigueEquivalentAlternativeStress.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#FatigueEquivalentAlternativeStress.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#FatigueEquivalentAlternativeStress.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#FatigueEquivalentAlternativeStress.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#FatigueEquivalentAlternativeStress.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#FatigueEquivalentAlternativeStress.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#FatigueEquivalentAlternativeStress.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#FatigueEquivalentAlternativeStress.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#FatigueEquivalentAlternativeStress.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#FatigueEquivalentAlternativeStress.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#FatigueEquivalentAlternativeStress.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#FatigueEquivalentAlternativeStress.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#FatigueEquivalentAlternativeStress.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#FatigueEquivalentAlternativeStress.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#FatigueEquivalentAlternativeStress.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#FatigueEquivalentAlternativeStress.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#FatigueEquivalentAlternativeStress.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#FatigueEquivalentAlternativeStress.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#FatigueEquivalentAlternativeStress.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="FatigueEquivalentAlternativeStress.AttachedRefs"></a>

### *property* FatigueEquivalentAlternativeStress.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Average"></a>

### *property* FatigueEquivalentAlternativeStress.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.AverageAcrossBodies"></a>

### *property* FatigueEquivalentAlternativeStress.AverageAcrossBodies *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.By"></a>

### *property* FatigueEquivalentAlternativeStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.CalculateTimeHistory"></a>

### *property* FatigueEquivalentAlternativeStress.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Children"></a>

### *property* FatigueEquivalentAlternativeStress.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.ClsId"></a>

### *property* FatigueEquivalentAlternativeStress.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.CombinationNumber"></a>

### *property* FatigueEquivalentAlternativeStress.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Comments"></a>

### *property* FatigueEquivalentAlternativeStress.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.CoordinateSystem"></a>

### *property* FatigueEquivalentAlternativeStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.CrackFrontNumber"></a>

### *property* FatigueEquivalentAlternativeStress.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.DataModelObjectCategory"></a>

### *property* FatigueEquivalentAlternativeStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.DesignLife"></a>

### *property* FatigueEquivalentAlternativeStress.DesignLife *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.DisplayOption"></a>

### *property* FatigueEquivalentAlternativeStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.DisplayTime"></a>

### *property* FatigueEquivalentAlternativeStress.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.DpfEvaluation"></a>

### *property* FatigueEquivalentAlternativeStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Figures"></a>

### *property* FatigueEquivalentAlternativeStress.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GlobalIDs"></a>

### *property* FatigueEquivalentAlternativeStress.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GraphControlsXAxis"></a>

### *property* FatigueEquivalentAlternativeStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GroupingFolder"></a>

### *property* FatigueEquivalentAlternativeStress.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.IconName"></a>

### *property* FatigueEquivalentAlternativeStress.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Identifier"></a>

### *property* FatigueEquivalentAlternativeStress.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Images"></a>

### *property* FatigueEquivalentAlternativeStress.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.InternalObject"></a>

### *property* FatigueEquivalentAlternativeStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.IsSolved"></a>

### *property* FatigueEquivalentAlternativeStress.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.ItemType"></a>

### *property* FatigueEquivalentAlternativeStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.IterationNumber"></a>

### *property* FatigueEquivalentAlternativeStress.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.LoadStep"></a>

### *property* FatigueEquivalentAlternativeStress.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* FatigueEquivalentAlternativeStress.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* FatigueEquivalentAlternativeStress.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* FatigueEquivalentAlternativeStress.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* FatigueEquivalentAlternativeStress.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.LoadStepNumber"></a>

### *property* FatigueEquivalentAlternativeStress.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Location"></a>

### *property* FatigueEquivalentAlternativeStress.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Maximum"></a>

### *property* FatigueEquivalentAlternativeStress.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.MaximumOccursOn"></a>

### *property* FatigueEquivalentAlternativeStress.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.MaximumOfMaximumOverTime"></a>

### *property* FatigueEquivalentAlternativeStress.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.MaximumOfMinimumOverTime"></a>

### *property* FatigueEquivalentAlternativeStress.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Method"></a>

### *property* FatigueEquivalentAlternativeStress.Method *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Minimum"></a>

### *property* FatigueEquivalentAlternativeStress.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.MinimumOccursOn"></a>

### *property* FatigueEquivalentAlternativeStress.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.MinimumOfMaximumOverTime"></a>

### *property* FatigueEquivalentAlternativeStress.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.MinimumOfMinimumOverTime"></a>

### *property* FatigueEquivalentAlternativeStress.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Name"></a>

### *property* FatigueEquivalentAlternativeStress.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.NamedSelections"></a>

### *property* FatigueEquivalentAlternativeStress.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.ObjectId"></a>

### *property* FatigueEquivalentAlternativeStress.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.ObjectState"></a>

### *property* FatigueEquivalentAlternativeStress.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.ObjectTags"></a>

### *property* FatigueEquivalentAlternativeStress.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Parent"></a>

### *property* FatigueEquivalentAlternativeStress.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Path"></a>

### *property* FatigueEquivalentAlternativeStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.PlotData"></a>

### *property* FatigueEquivalentAlternativeStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Properties"></a>

### *property* FatigueEquivalentAlternativeStress.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.RPMSelection"></a>

### *property* FatigueEquivalentAlternativeStress.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.ResultType"></a>

### *property* FatigueEquivalentAlternativeStress.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.RpmSetNumber"></a>

### *property* FatigueEquivalentAlternativeStress.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.ScopingMethod"></a>

### *property* FatigueEquivalentAlternativeStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.SeparateDataByEntity"></a>

### *property* FatigueEquivalentAlternativeStress.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.SetNumber"></a>

### *property* FatigueEquivalentAlternativeStress.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.SolutionCombinationDriver"></a>

### *property* FatigueEquivalentAlternativeStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.SolverComponentIDs"></a>

### *property* FatigueEquivalentAlternativeStress.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.State"></a>

### *property* FatigueEquivalentAlternativeStress.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Substep"></a>

### *property* FatigueEquivalentAlternativeStress.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Suppressed"></a>

### *property* FatigueEquivalentAlternativeStress.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Surface"></a>

### *property* FatigueEquivalentAlternativeStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.SurfaceCoating"></a>

### *property* FatigueEquivalentAlternativeStress.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.TabularData"></a>

### *property* FatigueEquivalentAlternativeStress.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Time"></a>

### *property* FatigueEquivalentAlternativeStress.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.TimeForMaximumOfMaximumValues"></a>

### *property* FatigueEquivalentAlternativeStress.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.TimeForMaximumOfMinimumValues"></a>

### *property* FatigueEquivalentAlternativeStress.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.TimeForMinimumOfMaximumValues"></a>

### *property* FatigueEquivalentAlternativeStress.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.TimeForMinimumOfMinimumValues"></a>

### *property* FatigueEquivalentAlternativeStress.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Total"></a>

### *property* FatigueEquivalentAlternativeStress.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.VisibleProperties"></a>

### *property* FatigueEquivalentAlternativeStress.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.WaterfallDisplayFilterBy"></a>

### *property* FatigueEquivalentAlternativeStress.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.WaterfallDisplayFrequencySelection"></a>

### *property* FatigueEquivalentAlternativeStress.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.WaterfallDisplayInterpolateData"></a>

### *property* FatigueEquivalentAlternativeStress.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.WaterfallDisplayLowerBand"></a>

### *property* FatigueEquivalentAlternativeStress.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.WaterfallDisplayMaxRPM"></a>

### *property* FatigueEquivalentAlternativeStress.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.WaterfallDisplayMinRPM"></a>

### *property* FatigueEquivalentAlternativeStress.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.WaterfallDisplayModeSelection"></a>

### *property* FatigueEquivalentAlternativeStress.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.WaterfallDisplayOrderSelection"></a>

### *property* FatigueEquivalentAlternativeStress.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.WaterfallDisplayRpmSelection"></a>

### *property* FatigueEquivalentAlternativeStress.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.WaterfallDisplayScopeToOrderLines"></a>

### *property* FatigueEquivalentAlternativeStress.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.WaterfallDisplayTimeSelection"></a>

### *property* FatigueEquivalentAlternativeStress.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.WaterfallDisplayUpperBand"></a>

### *property* FatigueEquivalentAlternativeStress.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.WaterfallDisplayXAxisMaximum"></a>

### *property* FatigueEquivalentAlternativeStress.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.WaterfallDisplayXAxisMinimum"></a>

### *property* FatigueEquivalentAlternativeStress.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.WaterfallDisplayYAxisMaximum"></a>

### *property* FatigueEquivalentAlternativeStress.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.WaterfallDisplayYAxisMinimum"></a>

### *property* FatigueEquivalentAlternativeStress.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.WaterfallShowTextOnMosaic"></a>

### *property* FatigueEquivalentAlternativeStress.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueEquivalentAlternativeStress.Activate"></a>

### FatigueEquivalentAlternativeStress.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.AddAlert"></a>

### FatigueEquivalentAlternativeStress.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.AddComment"></a>

### FatigueEquivalentAlternativeStress.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.AddConvergence"></a>

### FatigueEquivalentAlternativeStress.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.AddFigure"></a>

### FatigueEquivalentAlternativeStress.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.AddImage"></a>

### FatigueEquivalentAlternativeStress.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.BodyWhereMaximumOccurs"></a>

### FatigueEquivalentAlternativeStress.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.ClearGeneratedData"></a>

### FatigueEquivalentAlternativeStress.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Copy"></a>

### FatigueEquivalentAlternativeStress.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.CopyTo"></a>

### FatigueEquivalentAlternativeStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.CreateObjRef"></a>

### FatigueEquivalentAlternativeStress.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.CreateParameter"></a>

### FatigueEquivalentAlternativeStress.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.CreateResultsAtAllSets"></a>

### FatigueEquivalentAlternativeStress.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Cut"></a>

### FatigueEquivalentAlternativeStress.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Delete"></a>

### FatigueEquivalentAlternativeStress.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Duplicate"></a>

### FatigueEquivalentAlternativeStress.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.DuplicateWithoutResults"></a>

### FatigueEquivalentAlternativeStress.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Equals"></a>

### FatigueEquivalentAlternativeStress.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.EvaluateAllResults"></a>

### FatigueEquivalentAlternativeStress.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.ExportAnimation"></a>

### FatigueEquivalentAlternativeStress.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.ExportToSTLFile"></a>

### FatigueEquivalentAlternativeStress.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.ExportToTextFile"></a>

### FatigueEquivalentAlternativeStress.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### FatigueEquivalentAlternativeStress.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.FetchRemoteResult"></a>

### FatigueEquivalentAlternativeStress.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.FetchRemoteResults"></a>

### FatigueEquivalentAlternativeStress.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetAPIName"></a>

### FatigueEquivalentAlternativeStress.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetAllProperties"></a>

### FatigueEquivalentAlternativeStress.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetChildren"></a>

### FatigueEquivalentAlternativeStress.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FatigueEquivalentAlternativeStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetDetailsView"></a>

### FatigueEquivalentAlternativeStress.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetEnumName"></a>

### FatigueEquivalentAlternativeStress.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetHashCode"></a>

### FatigueEquivalentAlternativeStress.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetIconFile"></a>

### FatigueEquivalentAlternativeStress.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetLifetimeService"></a>

### FatigueEquivalentAlternativeStress.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetNodalValues"></a>

### FatigueEquivalentAlternativeStress.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetObjectData"></a>

### FatigueEquivalentAlternativeStress.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetParameter"></a>

### FatigueEquivalentAlternativeStress.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetPath"></a>

### FatigueEquivalentAlternativeStress.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetPropertyName"></a>

### FatigueEquivalentAlternativeStress.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetPropertyValue"></a>

### FatigueEquivalentAlternativeStress.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetQuantityName"></a>

### FatigueEquivalentAlternativeStress.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetVisibleProperties"></a>

### FatigueEquivalentAlternativeStress.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetVisiblePropertyNames"></a>

### FatigueEquivalentAlternativeStress.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GroupAllSimilarChildren"></a>

### FatigueEquivalentAlternativeStress.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GroupSimilarObjects"></a>

### FatigueEquivalentAlternativeStress.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.InitializeLifetimeService"></a>

### FatigueEquivalentAlternativeStress.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.IsPropertyEditable"></a>

### FatigueEquivalentAlternativeStress.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FatigueEquivalentAlternativeStress.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.IsPropertyVisible"></a>

### FatigueEquivalentAlternativeStress.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FatigueEquivalentAlternativeStress.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Paste"></a>

### FatigueEquivalentAlternativeStress.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.PromoteToNamedSelection"></a>

### FatigueEquivalentAlternativeStress.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.PropertyByAPIName"></a>

### FatigueEquivalentAlternativeStress.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.PropertyById"></a>

### FatigueEquivalentAlternativeStress.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.PropertyByName"></a>

### FatigueEquivalentAlternativeStress.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.RemoveFromGroup"></a>

### FatigueEquivalentAlternativeStress.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.RemoveParameter"></a>

### FatigueEquivalentAlternativeStress.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.RenameBasedOnDefinition"></a>

### FatigueEquivalentAlternativeStress.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.RetrieveRemoteDPFResults"></a>

### FatigueEquivalentAlternativeStress.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.RetrieveResult"></a>

### FatigueEquivalentAlternativeStress.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

