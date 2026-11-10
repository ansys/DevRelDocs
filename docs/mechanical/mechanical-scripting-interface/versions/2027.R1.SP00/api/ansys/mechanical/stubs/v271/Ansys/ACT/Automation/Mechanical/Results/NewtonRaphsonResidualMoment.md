# `NewtonRaphsonResidualMoment`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualMoment"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualMoment(internalObject: Any)

<a id="NewtonRaphsonResidualMoment"></a>

### *class* NewtonRaphsonResidualMoment(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a NewtonRaphsonResidualMoment.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#NewtonRaphsonResidualMoment.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#NewtonRaphsonResidualMoment.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#NewtonRaphsonResidualMoment.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#NewtonRaphsonResidualMoment.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#NewtonRaphsonResidualMoment.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#NewtonRaphsonResidualMoment.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#NewtonRaphsonResidualMoment.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#NewtonRaphsonResidualMoment.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#NewtonRaphsonResidualMoment.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#NewtonRaphsonResidualMoment.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#NewtonRaphsonResidualMoment.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#NewtonRaphsonResidualMoment.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#NewtonRaphsonResidualMoment.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#NewtonRaphsonResidualMoment.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#NewtonRaphsonResidualMoment.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#NewtonRaphsonResidualMoment.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#NewtonRaphsonResidualMoment.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#NewtonRaphsonResidualMoment.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#NewtonRaphsonResidualMoment.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#NewtonRaphsonResidualMoment.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#NewtonRaphsonResidualMoment.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#NewtonRaphsonResidualMoment.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#NewtonRaphsonResidualMoment.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#NewtonRaphsonResidualMoment.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#NewtonRaphsonResidualMoment.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#NewtonRaphsonResidualMoment.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#NewtonRaphsonResidualMoment.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#NewtonRaphsonResidualMoment.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#NewtonRaphsonResidualMoment.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#NewtonRaphsonResidualMoment.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#NewtonRaphsonResidualMoment.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#NewtonRaphsonResidualMoment.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#NewtonRaphsonResidualMoment.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#NewtonRaphsonResidualMoment.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#NewtonRaphsonResidualMoment.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#NewtonRaphsonResidualMoment.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#NewtonRaphsonResidualMoment.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#NewtonRaphsonResidualMoment.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#NewtonRaphsonResidualMoment.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#NewtonRaphsonResidualMoment.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#NewtonRaphsonResidualMoment.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#NewtonRaphsonResidualMoment.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#NewtonRaphsonResidualMoment.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#NewtonRaphsonResidualMoment.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#NewtonRaphsonResidualMoment.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#NewtonRaphsonResidualMoment.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#NewtonRaphsonResidualMoment.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#NewtonRaphsonResidualMoment.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#NewtonRaphsonResidualMoment.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#NewtonRaphsonResidualMoment.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#NewtonRaphsonResidualMoment.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#NewtonRaphsonResidualMoment.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#NewtonRaphsonResidualMoment.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#NewtonRaphsonResidualMoment.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#NewtonRaphsonResidualMoment.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#NewtonRaphsonResidualMoment.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#NewtonRaphsonResidualMoment.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#NewtonRaphsonResidualMoment.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#NewtonRaphsonResidualMoment.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#NewtonRaphsonResidualMoment.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#NewtonRaphsonResidualMoment.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#NewtonRaphsonResidualMoment.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#NewtonRaphsonResidualMoment.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#NewtonRaphsonResidualMoment.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                           | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#NewtonRaphsonResidualMoment.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#NewtonRaphsonResidualMoment.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#NewtonRaphsonResidualMoment.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#NewtonRaphsonResidualMoment.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#NewtonRaphsonResidualMoment.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#NewtonRaphsonResidualMoment.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`GlobalIDs`](#NewtonRaphsonResidualMoment.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#NewtonRaphsonResidualMoment.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#NewtonRaphsonResidualMoment.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#NewtonRaphsonResidualMoment.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#NewtonRaphsonResidualMoment.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#NewtonRaphsonResidualMoment.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#NewtonRaphsonResidualMoment.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#NewtonRaphsonResidualMoment.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#NewtonRaphsonResidualMoment.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#NewtonRaphsonResidualMoment.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#NewtonRaphsonResidualMoment.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#NewtonRaphsonResidualMoment.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#NewtonRaphsonResidualMoment.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#NewtonRaphsonResidualMoment.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#NewtonRaphsonResidualMoment.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#NewtonRaphsonResidualMoment.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#NewtonRaphsonResidualMoment.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#NewtonRaphsonResidualMoment.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#NewtonRaphsonResidualMoment.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#NewtonRaphsonResidualMoment.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#NewtonRaphsonResidualMoment.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#NewtonRaphsonResidualMoment.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#NewtonRaphsonResidualMoment.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#NewtonRaphsonResidualMoment.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#NewtonRaphsonResidualMoment.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Name`](#NewtonRaphsonResidualMoment.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                              | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#NewtonRaphsonResidualMoment.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#NewtonRaphsonResidualMoment.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#NewtonRaphsonResidualMoment.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#NewtonRaphsonResidualMoment.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                               | Path property.                                                                                           |
| [`PlotData`](#NewtonRaphsonResidualMoment.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#NewtonRaphsonResidualMoment.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#NewtonRaphsonResidualMoment.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#NewtonRaphsonResidualMoment.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#NewtonRaphsonResidualMoment.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#NewtonRaphsonResidualMoment.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#NewtonRaphsonResidualMoment.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#NewtonRaphsonResidualMoment.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#NewtonRaphsonResidualMoment.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#NewtonRaphsonResidualMoment.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#NewtonRaphsonResidualMoment.State)                                                           | State property.                                                                                          |
| [`Substep`](#NewtonRaphsonResidualMoment.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#NewtonRaphsonResidualMoment.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                      | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                                 | SurfaceCoating property.                                                                                 |
| [`TabularData`](#NewtonRaphsonResidualMoment.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#NewtonRaphsonResidualMoment.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#NewtonRaphsonResidualMoment.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#NewtonRaphsonResidualMoment.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#NewtonRaphsonResidualMoment.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#NewtonRaphsonResidualMoment.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#NewtonRaphsonResidualMoment.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#NewtonRaphsonResidualMoment.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#NewtonRaphsonResidualMoment.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#NewtonRaphsonResidualMoment.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#NewtonRaphsonResidualMoment.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#NewtonRaphsonResidualMoment.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#NewtonRaphsonResidualMoment.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#NewtonRaphsonResidualMoment.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#NewtonRaphsonResidualMoment.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#NewtonRaphsonResidualMoment.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#NewtonRaphsonResidualMoment.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#NewtonRaphsonResidualMoment.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#NewtonRaphsonResidualMoment.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#NewtonRaphsonResidualMoment.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#NewtonRaphsonResidualMoment.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#NewtonRaphsonResidualMoment.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#NewtonRaphsonResidualMoment.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#NewtonRaphsonResidualMoment.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#NewtonRaphsonResidualMoment.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="NewtonRaphsonResidualMoment.AttachedRefs"></a>

### *property* NewtonRaphsonResidualMoment.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Average"></a>

### *property* NewtonRaphsonResidualMoment.Average *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.By"></a>

### *property* NewtonRaphsonResidualMoment.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.CalculateTimeHistory"></a>

### *property* NewtonRaphsonResidualMoment.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Children"></a>

### *property* NewtonRaphsonResidualMoment.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.ClsId"></a>

### *property* NewtonRaphsonResidualMoment.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.CombinationNumber"></a>

### *property* NewtonRaphsonResidualMoment.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Comments"></a>

### *property* NewtonRaphsonResidualMoment.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.CoordinateSystem"></a>

### *property* NewtonRaphsonResidualMoment.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.CrackFrontNumber"></a>

### *property* NewtonRaphsonResidualMoment.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.DataModelObjectCategory"></a>

### *property* NewtonRaphsonResidualMoment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.DisplayOption"></a>

### *property* NewtonRaphsonResidualMoment.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.DisplayTime"></a>

### *property* NewtonRaphsonResidualMoment.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.DpfEvaluation"></a>

### *property* NewtonRaphsonResidualMoment.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Figures"></a>

### *property* NewtonRaphsonResidualMoment.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GlobalIDs"></a>

### *property* NewtonRaphsonResidualMoment.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GraphControlsXAxis"></a>

### *property* NewtonRaphsonResidualMoment.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GroupingFolder"></a>

### *property* NewtonRaphsonResidualMoment.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.IconName"></a>

### *property* NewtonRaphsonResidualMoment.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Identifier"></a>

### *property* NewtonRaphsonResidualMoment.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Images"></a>

### *property* NewtonRaphsonResidualMoment.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.InternalObject"></a>

### *property* NewtonRaphsonResidualMoment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.IsSolved"></a>

### *property* NewtonRaphsonResidualMoment.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.ItemType"></a>

### *property* NewtonRaphsonResidualMoment.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.IterationNumber"></a>

### *property* NewtonRaphsonResidualMoment.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.LoadStep"></a>

### *property* NewtonRaphsonResidualMoment.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.LoadStepForMaximumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualMoment.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.LoadStepForMaximumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualMoment.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.LoadStepForMinimumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualMoment.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.LoadStepForMinimumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualMoment.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.LoadStepNumber"></a>

### *property* NewtonRaphsonResidualMoment.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Location"></a>

### *property* NewtonRaphsonResidualMoment.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Maximum"></a>

### *property* NewtonRaphsonResidualMoment.Maximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.MaximumOccursOn"></a>

### *property* NewtonRaphsonResidualMoment.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.MaximumOfMaximumOverTime"></a>

### *property* NewtonRaphsonResidualMoment.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.MaximumOfMinimumOverTime"></a>

### *property* NewtonRaphsonResidualMoment.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Minimum"></a>

### *property* NewtonRaphsonResidualMoment.Minimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.MinimumOccursOn"></a>

### *property* NewtonRaphsonResidualMoment.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.MinimumOfMaximumOverTime"></a>

### *property* NewtonRaphsonResidualMoment.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.MinimumOfMinimumOverTime"></a>

### *property* NewtonRaphsonResidualMoment.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Name"></a>

### *property* NewtonRaphsonResidualMoment.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.NamedSelections"></a>

### *property* NewtonRaphsonResidualMoment.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.ObjectId"></a>

### *property* NewtonRaphsonResidualMoment.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.ObjectState"></a>

### *property* NewtonRaphsonResidualMoment.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.ObjectTags"></a>

### *property* NewtonRaphsonResidualMoment.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Parent"></a>

### *property* NewtonRaphsonResidualMoment.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Path"></a>

### *property* NewtonRaphsonResidualMoment.Path *: [Ansys.ACT.Automation.Mechanical.Path](../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.PlotData"></a>

### *property* NewtonRaphsonResidualMoment.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Properties"></a>

### *property* NewtonRaphsonResidualMoment.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.RPMSelection"></a>

### *property* NewtonRaphsonResidualMoment.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.ResultType"></a>

### *property* NewtonRaphsonResidualMoment.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.RpmSetNumber"></a>

### *property* NewtonRaphsonResidualMoment.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.ScopingMethod"></a>

### *property* NewtonRaphsonResidualMoment.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.SeparateDataByEntity"></a>

### *property* NewtonRaphsonResidualMoment.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.SetNumber"></a>

### *property* NewtonRaphsonResidualMoment.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.SolutionCombinationDriver"></a>

### *property* NewtonRaphsonResidualMoment.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.SolverComponentIDs"></a>

### *property* NewtonRaphsonResidualMoment.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.State"></a>

### *property* NewtonRaphsonResidualMoment.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Substep"></a>

### *property* NewtonRaphsonResidualMoment.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Suppressed"></a>

### *property* NewtonRaphsonResidualMoment.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Surface"></a>

### *property* NewtonRaphsonResidualMoment.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.SurfaceCoating"></a>

### *property* NewtonRaphsonResidualMoment.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.TabularData"></a>

### *property* NewtonRaphsonResidualMoment.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Time"></a>

### *property* NewtonRaphsonResidualMoment.Time *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.TimeForMaximumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualMoment.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.TimeForMaximumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualMoment.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.TimeForMinimumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualMoment.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.TimeForMinimumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualMoment.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Total"></a>

### *property* NewtonRaphsonResidualMoment.Total *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.VisibleProperties"></a>

### *property* NewtonRaphsonResidualMoment.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.WaterfallDisplayFilterBy"></a>

### *property* NewtonRaphsonResidualMoment.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.WaterfallDisplayFrequencySelection"></a>

### *property* NewtonRaphsonResidualMoment.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.WaterfallDisplayInterpolateData"></a>

### *property* NewtonRaphsonResidualMoment.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.WaterfallDisplayLowerBand"></a>

### *property* NewtonRaphsonResidualMoment.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.WaterfallDisplayMaxRPM"></a>

### *property* NewtonRaphsonResidualMoment.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.WaterfallDisplayMinRPM"></a>

### *property* NewtonRaphsonResidualMoment.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.WaterfallDisplayModeSelection"></a>

### *property* NewtonRaphsonResidualMoment.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.WaterfallDisplayOrderSelection"></a>

### *property* NewtonRaphsonResidualMoment.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.WaterfallDisplayRpmSelection"></a>

### *property* NewtonRaphsonResidualMoment.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.WaterfallDisplayScopeToOrderLines"></a>

### *property* NewtonRaphsonResidualMoment.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.WaterfallDisplayTimeSelection"></a>

### *property* NewtonRaphsonResidualMoment.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.WaterfallDisplayUpperBand"></a>

### *property* NewtonRaphsonResidualMoment.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.WaterfallDisplayXAxisMaximum"></a>

### *property* NewtonRaphsonResidualMoment.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.WaterfallDisplayXAxisMinimum"></a>

### *property* NewtonRaphsonResidualMoment.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.WaterfallDisplayYAxisMaximum"></a>

### *property* NewtonRaphsonResidualMoment.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.WaterfallDisplayYAxisMinimum"></a>

### *property* NewtonRaphsonResidualMoment.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.WaterfallShowTextOnMosaic"></a>

### *property* NewtonRaphsonResidualMoment.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NewtonRaphsonResidualMoment.Activate"></a>

### NewtonRaphsonResidualMoment.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.AddAlert"></a>

### NewtonRaphsonResidualMoment.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.AddComment"></a>

### NewtonRaphsonResidualMoment.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.AddConvergence"></a>

### NewtonRaphsonResidualMoment.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.AddFigure"></a>

### NewtonRaphsonResidualMoment.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.AddImage"></a>

### NewtonRaphsonResidualMoment.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.BodyWhereMaximumOccurs"></a>

### NewtonRaphsonResidualMoment.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.ClearGeneratedData"></a>

### NewtonRaphsonResidualMoment.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Copy"></a>

### NewtonRaphsonResidualMoment.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.CopyTo"></a>

### NewtonRaphsonResidualMoment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.CreateObjRef"></a>

### NewtonRaphsonResidualMoment.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.CreateParameter"></a>

### NewtonRaphsonResidualMoment.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.CreateResultsAtAllSets"></a>

### NewtonRaphsonResidualMoment.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Cut"></a>

### NewtonRaphsonResidualMoment.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Delete"></a>

### NewtonRaphsonResidualMoment.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Duplicate"></a>

### NewtonRaphsonResidualMoment.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.DuplicateWithoutResults"></a>

### NewtonRaphsonResidualMoment.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Equals"></a>

### NewtonRaphsonResidualMoment.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.EvaluateAllResults"></a>

### NewtonRaphsonResidualMoment.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.ExportAnimation"></a>

### NewtonRaphsonResidualMoment.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.ExportToSTLFile"></a>

### NewtonRaphsonResidualMoment.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.ExportToTextFile"></a>

### NewtonRaphsonResidualMoment.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### NewtonRaphsonResidualMoment.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.FetchRemoteResult"></a>

### NewtonRaphsonResidualMoment.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.FetchRemoteResults"></a>

### NewtonRaphsonResidualMoment.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetAPIName"></a>

### NewtonRaphsonResidualMoment.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetAllProperties"></a>

### NewtonRaphsonResidualMoment.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetChildren"></a>

### NewtonRaphsonResidualMoment.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### NewtonRaphsonResidualMoment.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetDetailsView"></a>

### NewtonRaphsonResidualMoment.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetEnumName"></a>

### NewtonRaphsonResidualMoment.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetHashCode"></a>

### NewtonRaphsonResidualMoment.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetIconFile"></a>

### NewtonRaphsonResidualMoment.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetLifetimeService"></a>

### NewtonRaphsonResidualMoment.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetNodalValues"></a>

### NewtonRaphsonResidualMoment.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetObjectData"></a>

### NewtonRaphsonResidualMoment.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetParameter"></a>

### NewtonRaphsonResidualMoment.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetPath"></a>

### NewtonRaphsonResidualMoment.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetPropertyName"></a>

### NewtonRaphsonResidualMoment.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetPropertyValue"></a>

### NewtonRaphsonResidualMoment.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetQuantityName"></a>

### NewtonRaphsonResidualMoment.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetVisibleProperties"></a>

### NewtonRaphsonResidualMoment.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetVisiblePropertyNames"></a>

### NewtonRaphsonResidualMoment.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GroupAllSimilarChildren"></a>

### NewtonRaphsonResidualMoment.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GroupSimilarObjects"></a>

### NewtonRaphsonResidualMoment.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.InitializeLifetimeService"></a>

### NewtonRaphsonResidualMoment.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.IsPropertyEditable"></a>

### NewtonRaphsonResidualMoment.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NewtonRaphsonResidualMoment.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.IsPropertyVisible"></a>

### NewtonRaphsonResidualMoment.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NewtonRaphsonResidualMoment.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Paste"></a>

### NewtonRaphsonResidualMoment.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.PromoteToNamedSelection"></a>

### NewtonRaphsonResidualMoment.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.PropertyByAPIName"></a>

### NewtonRaphsonResidualMoment.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.PropertyById"></a>

### NewtonRaphsonResidualMoment.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.PropertyByName"></a>

### NewtonRaphsonResidualMoment.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.RemoveFromGroup"></a>

### NewtonRaphsonResidualMoment.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.RemoveParameter"></a>

### NewtonRaphsonResidualMoment.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.RenameBasedOnDefinition"></a>

### NewtonRaphsonResidualMoment.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.RetrieveRemoteDPFResults"></a>

### NewtonRaphsonResidualMoment.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.RetrieveResult"></a>

### NewtonRaphsonResidualMoment.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

