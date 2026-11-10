# `EnergyDissipatedPerUnitVolume`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.DamageResults.EnergyDissipatedPerUnitVolume"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.DamageResults.EnergyDissipatedPerUnitVolume(internalObject: Any)

<a id="EnergyDissipatedPerUnitVolume"></a>

### *class* EnergyDissipatedPerUnitVolume(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a EnergyDissipatedPerUnitVolume.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#EnergyDissipatedPerUnitVolume.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#EnergyDissipatedPerUnitVolume.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#EnergyDissipatedPerUnitVolume.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#EnergyDissipatedPerUnitVolume.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#EnergyDissipatedPerUnitVolume.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#EnergyDissipatedPerUnitVolume.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#EnergyDissipatedPerUnitVolume.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#EnergyDissipatedPerUnitVolume.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#EnergyDissipatedPerUnitVolume.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#EnergyDissipatedPerUnitVolume.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#EnergyDissipatedPerUnitVolume.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#EnergyDissipatedPerUnitVolume.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#EnergyDissipatedPerUnitVolume.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#EnergyDissipatedPerUnitVolume.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#EnergyDissipatedPerUnitVolume.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#EnergyDissipatedPerUnitVolume.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#EnergyDissipatedPerUnitVolume.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#EnergyDissipatedPerUnitVolume.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#EnergyDissipatedPerUnitVolume.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#EnergyDissipatedPerUnitVolume.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#EnergyDissipatedPerUnitVolume.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#EnergyDissipatedPerUnitVolume.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#EnergyDissipatedPerUnitVolume.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#EnergyDissipatedPerUnitVolume.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#EnergyDissipatedPerUnitVolume.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#EnergyDissipatedPerUnitVolume.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#EnergyDissipatedPerUnitVolume.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#EnergyDissipatedPerUnitVolume.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#EnergyDissipatedPerUnitVolume.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#EnergyDissipatedPerUnitVolume.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#EnergyDissipatedPerUnitVolume.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#EnergyDissipatedPerUnitVolume.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#EnergyDissipatedPerUnitVolume.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#EnergyDissipatedPerUnitVolume.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#EnergyDissipatedPerUnitVolume.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#EnergyDissipatedPerUnitVolume.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#EnergyDissipatedPerUnitVolume.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#EnergyDissipatedPerUnitVolume.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#EnergyDissipatedPerUnitVolume.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#EnergyDissipatedPerUnitVolume.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#EnergyDissipatedPerUnitVolume.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#EnergyDissipatedPerUnitVolume.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#EnergyDissipatedPerUnitVolume.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#EnergyDissipatedPerUnitVolume.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#EnergyDissipatedPerUnitVolume.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#EnergyDissipatedPerUnitVolume.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#EnergyDissipatedPerUnitVolume.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#EnergyDissipatedPerUnitVolume.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#EnergyDissipatedPerUnitVolume.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#EnergyDissipatedPerUnitVolume.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#EnergyDissipatedPerUnitVolume.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#EnergyDissipatedPerUnitVolume.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#EnergyDissipatedPerUnitVolume.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#EnergyDissipatedPerUnitVolume.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#EnergyDissipatedPerUnitVolume.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#EnergyDissipatedPerUnitVolume.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#EnergyDissipatedPerUnitVolume.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#EnergyDissipatedPerUnitVolume.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#EnergyDissipatedPerUnitVolume.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#EnergyDissipatedPerUnitVolume.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#EnergyDissipatedPerUnitVolume.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#EnergyDissipatedPerUnitVolume.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#EnergyDissipatedPerUnitVolume.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#EnergyDissipatedPerUnitVolume.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                          | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#EnergyDissipatedPerUnitVolume.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DamageResultType`](#EnergyDissipatedPerUnitVolume.DamageResultType)                                     | Gets the DamageResultType.                                                                               |
| [`DataModelObjectCategory`](#EnergyDissipatedPerUnitVolume.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#EnergyDissipatedPerUnitVolume.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#EnergyDissipatedPerUnitVolume.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#EnergyDissipatedPerUnitVolume.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#EnergyDissipatedPerUnitVolume.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`GlobalIDs`](#EnergyDissipatedPerUnitVolume.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#EnergyDissipatedPerUnitVolume.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#EnergyDissipatedPerUnitVolume.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#EnergyDissipatedPerUnitVolume.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#EnergyDissipatedPerUnitVolume.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#EnergyDissipatedPerUnitVolume.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#EnergyDissipatedPerUnitVolume.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#EnergyDissipatedPerUnitVolume.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#EnergyDissipatedPerUnitVolume.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#EnergyDissipatedPerUnitVolume.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#EnergyDissipatedPerUnitVolume.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#EnergyDissipatedPerUnitVolume.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#EnergyDissipatedPerUnitVolume.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#EnergyDissipatedPerUnitVolume.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#EnergyDissipatedPerUnitVolume.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#EnergyDissipatedPerUnitVolume.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#EnergyDissipatedPerUnitVolume.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#EnergyDissipatedPerUnitVolume.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#EnergyDissipatedPerUnitVolume.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#EnergyDissipatedPerUnitVolume.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#EnergyDissipatedPerUnitVolume.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#EnergyDissipatedPerUnitVolume.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#EnergyDissipatedPerUnitVolume.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#EnergyDissipatedPerUnitVolume.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#EnergyDissipatedPerUnitVolume.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Mode`](#EnergyDissipatedPerUnitVolume.Mode)                                                             | Gets or sets the Mode.                                                                                   |
| [`Name`](#EnergyDissipatedPerUnitVolume.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                             | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#EnergyDissipatedPerUnitVolume.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#EnergyDissipatedPerUnitVolume.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#EnergyDissipatedPerUnitVolume.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#EnergyDissipatedPerUnitVolume.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                              | Path property.                                                                                           |
| [`Plies`](#EnergyDissipatedPerUnitVolume.Plies)                                                           | Plies property.                                                                                          |
| [`PlotData`](#EnergyDissipatedPerUnitVolume.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Ply`](#EnergyDissipatedPerUnitVolume.Ply)                                                               | Gets or sets the Ply selection.                                                                          |
| [`Position`](#Position)                                                        | Gets or sets the surface location where the result is evaluated. Default: TopAndBottom.                  |
| [`Properties`](#EnergyDissipatedPerUnitVolume.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#EnergyDissipatedPerUnitVolume.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#EnergyDissipatedPerUnitVolume.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#EnergyDissipatedPerUnitVolume.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#EnergyDissipatedPerUnitVolume.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#EnergyDissipatedPerUnitVolume.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#EnergyDissipatedPerUnitVolume.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#EnergyDissipatedPerUnitVolume.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#EnergyDissipatedPerUnitVolume.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#EnergyDissipatedPerUnitVolume.State)                                                           | State property.                                                                                          |
| [`Substep`](#EnergyDissipatedPerUnitVolume.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#EnergyDissipatedPerUnitVolume.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                     | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                                | SurfaceCoating property.                                                                                 |
| [`TabularData`](#EnergyDissipatedPerUnitVolume.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#EnergyDissipatedPerUnitVolume.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#EnergyDissipatedPerUnitVolume.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#EnergyDissipatedPerUnitVolume.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#EnergyDissipatedPerUnitVolume.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#EnergyDissipatedPerUnitVolume.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#EnergyDissipatedPerUnitVolume.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#EnergyDissipatedPerUnitVolume.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#EnergyDissipatedPerUnitVolume.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#EnergyDissipatedPerUnitVolume.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#EnergyDissipatedPerUnitVolume.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#EnergyDissipatedPerUnitVolume.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#EnergyDissipatedPerUnitVolume.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#EnergyDissipatedPerUnitVolume.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#EnergyDissipatedPerUnitVolume.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#EnergyDissipatedPerUnitVolume.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#EnergyDissipatedPerUnitVolume.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#EnergyDissipatedPerUnitVolume.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#EnergyDissipatedPerUnitVolume.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#EnergyDissipatedPerUnitVolume.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#EnergyDissipatedPerUnitVolume.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#EnergyDissipatedPerUnitVolume.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#EnergyDissipatedPerUnitVolume.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#EnergyDissipatedPerUnitVolume.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#EnergyDissipatedPerUnitVolume.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="EnergyDissipatedPerUnitVolume.AttachedRefs"></a>

### *property* EnergyDissipatedPerUnitVolume.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Average"></a>

### *property* EnergyDissipatedPerUnitVolume.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.By"></a>

### *property* EnergyDissipatedPerUnitVolume.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.CalculateTimeHistory"></a>

### *property* EnergyDissipatedPerUnitVolume.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Children"></a>

### *property* EnergyDissipatedPerUnitVolume.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.ClsId"></a>

### *property* EnergyDissipatedPerUnitVolume.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.CombinationNumber"></a>

### *property* EnergyDissipatedPerUnitVolume.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Comments"></a>

### *property* EnergyDissipatedPerUnitVolume.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.CoordinateSystem"></a>

### *property* EnergyDissipatedPerUnitVolume.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.CrackFrontNumber"></a>

### *property* EnergyDissipatedPerUnitVolume.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.DamageResultType"></a>

### *property* EnergyDissipatedPerUnitVolume.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DamageResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.DataModelObjectCategory"></a>

### *property* EnergyDissipatedPerUnitVolume.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.DisplayOption"></a>

### *property* EnergyDissipatedPerUnitVolume.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.DisplayTime"></a>

### *property* EnergyDissipatedPerUnitVolume.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.DpfEvaluation"></a>

### *property* EnergyDissipatedPerUnitVolume.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Figures"></a>

### *property* EnergyDissipatedPerUnitVolume.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GlobalIDs"></a>

### *property* EnergyDissipatedPerUnitVolume.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GraphControlsXAxis"></a>

### *property* EnergyDissipatedPerUnitVolume.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GroupingFolder"></a>

### *property* EnergyDissipatedPerUnitVolume.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.IconName"></a>

### *property* EnergyDissipatedPerUnitVolume.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Identifier"></a>

### *property* EnergyDissipatedPerUnitVolume.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Images"></a>

### *property* EnergyDissipatedPerUnitVolume.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.InternalObject"></a>

### *property* EnergyDissipatedPerUnitVolume.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.IsSolved"></a>

### *property* EnergyDissipatedPerUnitVolume.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.ItemType"></a>

### *property* EnergyDissipatedPerUnitVolume.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.IterationNumber"></a>

### *property* EnergyDissipatedPerUnitVolume.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.LoadStep"></a>

### *property* EnergyDissipatedPerUnitVolume.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.LoadStepForMaximumOfMaximumValues"></a>

### *property* EnergyDissipatedPerUnitVolume.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.LoadStepForMaximumOfMinimumValues"></a>

### *property* EnergyDissipatedPerUnitVolume.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.LoadStepForMinimumOfMaximumValues"></a>

### *property* EnergyDissipatedPerUnitVolume.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.LoadStepForMinimumOfMinimumValues"></a>

### *property* EnergyDissipatedPerUnitVolume.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.LoadStepNumber"></a>

### *property* EnergyDissipatedPerUnitVolume.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Location"></a>

### *property* EnergyDissipatedPerUnitVolume.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Maximum"></a>

### *property* EnergyDissipatedPerUnitVolume.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.MaximumOccursOn"></a>

### *property* EnergyDissipatedPerUnitVolume.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.MaximumOfMaximumOverTime"></a>

### *property* EnergyDissipatedPerUnitVolume.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.MaximumOfMinimumOverTime"></a>

### *property* EnergyDissipatedPerUnitVolume.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Minimum"></a>

### *property* EnergyDissipatedPerUnitVolume.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.MinimumOccursOn"></a>

### *property* EnergyDissipatedPerUnitVolume.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.MinimumOfMaximumOverTime"></a>

### *property* EnergyDissipatedPerUnitVolume.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.MinimumOfMinimumOverTime"></a>

### *property* EnergyDissipatedPerUnitVolume.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Mode"></a>

### *property* EnergyDissipatedPerUnitVolume.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Name"></a>

### *property* EnergyDissipatedPerUnitVolume.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.NamedSelections"></a>

### *property* EnergyDissipatedPerUnitVolume.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.ObjectId"></a>

### *property* EnergyDissipatedPerUnitVolume.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.ObjectState"></a>

### *property* EnergyDissipatedPerUnitVolume.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.ObjectTags"></a>

### *property* EnergyDissipatedPerUnitVolume.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Parent"></a>

### *property* EnergyDissipatedPerUnitVolume.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Path"></a>

### *property* EnergyDissipatedPerUnitVolume.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Plies"></a>

### *property* EnergyDissipatedPerUnitVolume.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.PlotData"></a>

### *property* EnergyDissipatedPerUnitVolume.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Ply"></a>

### *property* EnergyDissipatedPerUnitVolume.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Position"></a>

### *property* EnergyDissipatedPerUnitVolume.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the surface location where the result is evaluated. Default: TopAndBottom.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Properties"></a>

### *property* EnergyDissipatedPerUnitVolume.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.RPMSelection"></a>

### *property* EnergyDissipatedPerUnitVolume.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.ResultType"></a>

### *property* EnergyDissipatedPerUnitVolume.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.RpmSetNumber"></a>

### *property* EnergyDissipatedPerUnitVolume.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.ScopingMethod"></a>

### *property* EnergyDissipatedPerUnitVolume.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.SeparateDataByEntity"></a>

### *property* EnergyDissipatedPerUnitVolume.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.SetNumber"></a>

### *property* EnergyDissipatedPerUnitVolume.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.SolutionCombinationDriver"></a>

### *property* EnergyDissipatedPerUnitVolume.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.SolverComponentIDs"></a>

### *property* EnergyDissipatedPerUnitVolume.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.State"></a>

### *property* EnergyDissipatedPerUnitVolume.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Substep"></a>

### *property* EnergyDissipatedPerUnitVolume.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Suppressed"></a>

### *property* EnergyDissipatedPerUnitVolume.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Surface"></a>

### *property* EnergyDissipatedPerUnitVolume.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.SurfaceCoating"></a>

### *property* EnergyDissipatedPerUnitVolume.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.TabularData"></a>

### *property* EnergyDissipatedPerUnitVolume.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Time"></a>

### *property* EnergyDissipatedPerUnitVolume.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.TimeForMaximumOfMaximumValues"></a>

### *property* EnergyDissipatedPerUnitVolume.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.TimeForMaximumOfMinimumValues"></a>

### *property* EnergyDissipatedPerUnitVolume.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.TimeForMinimumOfMaximumValues"></a>

### *property* EnergyDissipatedPerUnitVolume.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.TimeForMinimumOfMinimumValues"></a>

### *property* EnergyDissipatedPerUnitVolume.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Total"></a>

### *property* EnergyDissipatedPerUnitVolume.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.VisibleProperties"></a>

### *property* EnergyDissipatedPerUnitVolume.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.WaterfallDisplayFilterBy"></a>

### *property* EnergyDissipatedPerUnitVolume.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.WaterfallDisplayFrequencySelection"></a>

### *property* EnergyDissipatedPerUnitVolume.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.WaterfallDisplayInterpolateData"></a>

### *property* EnergyDissipatedPerUnitVolume.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.WaterfallDisplayLowerBand"></a>

### *property* EnergyDissipatedPerUnitVolume.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.WaterfallDisplayMaxRPM"></a>

### *property* EnergyDissipatedPerUnitVolume.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.WaterfallDisplayMinRPM"></a>

### *property* EnergyDissipatedPerUnitVolume.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.WaterfallDisplayModeSelection"></a>

### *property* EnergyDissipatedPerUnitVolume.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.WaterfallDisplayOrderSelection"></a>

### *property* EnergyDissipatedPerUnitVolume.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.WaterfallDisplayRpmSelection"></a>

### *property* EnergyDissipatedPerUnitVolume.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.WaterfallDisplayScopeToOrderLines"></a>

### *property* EnergyDissipatedPerUnitVolume.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.WaterfallDisplayTimeSelection"></a>

### *property* EnergyDissipatedPerUnitVolume.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.WaterfallDisplayUpperBand"></a>

### *property* EnergyDissipatedPerUnitVolume.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.WaterfallDisplayXAxisMaximum"></a>

### *property* EnergyDissipatedPerUnitVolume.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.WaterfallDisplayXAxisMinimum"></a>

### *property* EnergyDissipatedPerUnitVolume.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.WaterfallDisplayYAxisMaximum"></a>

### *property* EnergyDissipatedPerUnitVolume.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.WaterfallDisplayYAxisMinimum"></a>

### *property* EnergyDissipatedPerUnitVolume.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.WaterfallShowTextOnMosaic"></a>

### *property* EnergyDissipatedPerUnitVolume.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EnergyDissipatedPerUnitVolume.Activate"></a>

### EnergyDissipatedPerUnitVolume.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.AddAlert"></a>

### EnergyDissipatedPerUnitVolume.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.AddComment"></a>

### EnergyDissipatedPerUnitVolume.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.AddConvergence"></a>

### EnergyDissipatedPerUnitVolume.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.AddFigure"></a>

### EnergyDissipatedPerUnitVolume.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.AddImage"></a>

### EnergyDissipatedPerUnitVolume.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.BodyWhereMaximumOccurs"></a>

### EnergyDissipatedPerUnitVolume.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.ClearGeneratedData"></a>

### EnergyDissipatedPerUnitVolume.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Copy"></a>

### EnergyDissipatedPerUnitVolume.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.CopyTo"></a>

### EnergyDissipatedPerUnitVolume.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.CreateObjRef"></a>

### EnergyDissipatedPerUnitVolume.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.CreateParameter"></a>

### EnergyDissipatedPerUnitVolume.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.CreateResultsAtAllSets"></a>

### EnergyDissipatedPerUnitVolume.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Cut"></a>

### EnergyDissipatedPerUnitVolume.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Delete"></a>

### EnergyDissipatedPerUnitVolume.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Duplicate"></a>

### EnergyDissipatedPerUnitVolume.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.DuplicateWithoutResults"></a>

### EnergyDissipatedPerUnitVolume.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Equals"></a>

### EnergyDissipatedPerUnitVolume.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.EvaluateAllResults"></a>

### EnergyDissipatedPerUnitVolume.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.ExportAnimation"></a>

### EnergyDissipatedPerUnitVolume.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.ExportToSTLFile"></a>

### EnergyDissipatedPerUnitVolume.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.ExportToTextFile"></a>

### EnergyDissipatedPerUnitVolume.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### EnergyDissipatedPerUnitVolume.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.FetchRemoteResult"></a>

### EnergyDissipatedPerUnitVolume.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.FetchRemoteResults"></a>

### EnergyDissipatedPerUnitVolume.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetAPIName"></a>

### EnergyDissipatedPerUnitVolume.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetAllProperties"></a>

### EnergyDissipatedPerUnitVolume.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetChildren"></a>

### EnergyDissipatedPerUnitVolume.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### EnergyDissipatedPerUnitVolume.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetDetailsView"></a>

### EnergyDissipatedPerUnitVolume.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetEnumName"></a>

### EnergyDissipatedPerUnitVolume.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetHashCode"></a>

### EnergyDissipatedPerUnitVolume.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetIconFile"></a>

### EnergyDissipatedPerUnitVolume.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetLifetimeService"></a>

### EnergyDissipatedPerUnitVolume.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetNodalValues"></a>

### EnergyDissipatedPerUnitVolume.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetObjectData"></a>

### EnergyDissipatedPerUnitVolume.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetParameter"></a>

### EnergyDissipatedPerUnitVolume.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetPath"></a>

### EnergyDissipatedPerUnitVolume.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetPropertyName"></a>

### EnergyDissipatedPerUnitVolume.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetPropertyValue"></a>

### EnergyDissipatedPerUnitVolume.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetQuantityName"></a>

### EnergyDissipatedPerUnitVolume.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetVisibleProperties"></a>

### EnergyDissipatedPerUnitVolume.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetVisiblePropertyNames"></a>

### EnergyDissipatedPerUnitVolume.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GroupAllSimilarChildren"></a>

### EnergyDissipatedPerUnitVolume.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GroupSimilarObjects"></a>

### EnergyDissipatedPerUnitVolume.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.InitializeLifetimeService"></a>

### EnergyDissipatedPerUnitVolume.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.IsPropertyEditable"></a>

### EnergyDissipatedPerUnitVolume.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EnergyDissipatedPerUnitVolume.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.IsPropertyVisible"></a>

### EnergyDissipatedPerUnitVolume.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EnergyDissipatedPerUnitVolume.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Paste"></a>

### EnergyDissipatedPerUnitVolume.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.PromoteToNamedSelection"></a>

### EnergyDissipatedPerUnitVolume.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.PropertyByAPIName"></a>

### EnergyDissipatedPerUnitVolume.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.PropertyById"></a>

### EnergyDissipatedPerUnitVolume.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.PropertyByName"></a>

### EnergyDissipatedPerUnitVolume.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.RemoveFromGroup"></a>

### EnergyDissipatedPerUnitVolume.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.RemoveParameter"></a>

### EnergyDissipatedPerUnitVolume.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.RenameBasedOnDefinition"></a>

### EnergyDissipatedPerUnitVolume.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.RetrieveRemoteDPFResults"></a>

### EnergyDissipatedPerUnitVolume.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.RetrieveResult"></a>

### EnergyDissipatedPerUnitVolume.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

