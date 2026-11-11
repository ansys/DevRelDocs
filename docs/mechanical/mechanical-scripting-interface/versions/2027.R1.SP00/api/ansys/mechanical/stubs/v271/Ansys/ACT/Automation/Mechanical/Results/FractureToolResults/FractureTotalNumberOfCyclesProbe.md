# `FractureTotalNumberOfCyclesProbe`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureTotalNumberOfCyclesProbe"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureTotalNumberOfCyclesProbe(internalObject: Any)

<a id="FractureTotalNumberOfCyclesProbe"></a>

### *class* FractureTotalNumberOfCyclesProbe(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FractureTotalNumberOfCyclesProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Activate`](#FractureTotalNumberOfCyclesProbe.Activate)                                   | Activate the current object.                                                                   |
| [`AddComment`](#FractureTotalNumberOfCyclesProbe.AddComment)                               | Creates a new child Comment.                                                                   |
| [`AddFigure`](#FractureTotalNumberOfCyclesProbe.AddFigure)                                 | Creates a new child Figure.                                                                    |
| [`AddImage`](#FractureTotalNumberOfCyclesProbe.AddImage)                                   | Creates a new child Image.                                                                     |
| [`ClearGeneratedData`](#FractureTotalNumberOfCyclesProbe.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                             |
| [`Copy`](#FractureTotalNumberOfCyclesProbe.Copy)                                           | Copies the current DataModelObject.                                                            |
| [`CopyTo`](#FractureTotalNumberOfCyclesProbe.CopyTo)                                       | Copies all visible properties from this object to another.                                     |
| [`CreateObjRef`](#FractureTotalNumberOfCyclesProbe.CreateObjRef)                           | CreateObjRef method.                                                                           |
| [`CreateParameter`](#FractureTotalNumberOfCyclesProbe.CreateParameter)                     | Creates a new parameter for a Property.                                                        |
| [`Cut`](#FractureTotalNumberOfCyclesProbe.Cut)                                             | Cuts the current DataModelObject.                                                              |
| [`Delete`](#FractureTotalNumberOfCyclesProbe.Delete)                                       | Run the Delete action.                                                                         |
| [`Duplicate`](#FractureTotalNumberOfCyclesProbe.Duplicate)                                 | Creates a copy of the current DataModelObject.                                                 |
| [`DuplicateWithoutResults`](#FractureTotalNumberOfCyclesProbe.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                        |
| [`Equals`](#FractureTotalNumberOfCyclesProbe.Equals)                                       | Equals method.                                                                                 |
| [`EvaluateAllResults`](#FractureTotalNumberOfCyclesProbe.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                             |
| [`ExportAnimation`](#FractureTotalNumberOfCyclesProbe.ExportAnimation)                     | Run the ExportAnimation action.                                                                |
| [`GetAPIName`](#FractureTotalNumberOfCyclesProbe.GetAPIName)                               | GetAPIName method.                                                                             |
| [`GetAllProperties`](#FractureTotalNumberOfCyclesProbe.GetAllProperties)                   | GetAllProperties method.                                                                       |
| [`GetChildren`](#FractureTotalNumberOfCyclesProbe.GetChildren)                             | Gets the list of children, filtered by type.                                                   |
| [`GetDetailsView`](#FractureTotalNumberOfCyclesProbe.GetDetailsView)                       | GetDetailsView method.                                                                         |
| [`GetEnumName`](#FractureTotalNumberOfCyclesProbe.GetEnumName)                             | Enum name bound to value                                                                       |
| [`GetHashCode`](#FractureTotalNumberOfCyclesProbe.GetHashCode)                             | GetHashCode method.                                                                            |
| [`GetIconFile`](#FractureTotalNumberOfCyclesProbe.GetIconFile)                             | GetIconFile method.                                                                            |
| [`GetLifetimeService`](#FractureTotalNumberOfCyclesProbe.GetLifetimeService)               | GetLifetimeService method.                                                                     |
| [`GetObjectData`](#FractureTotalNumberOfCyclesProbe.GetObjectData)                         | GetObjectData method.                                                                          |
| [`GetParameter`](#FractureTotalNumberOfCyclesProbe.GetParameter)                           | Gets the parameter corresponding to the given property.                                        |
| [`GetPath`](#FractureTotalNumberOfCyclesProbe.GetPath)                                     | GetPath method.                                                                                |
| [`GetPropertyName`](#FractureTotalNumberOfCyclesProbe.GetPropertyName)                     | GetPropertyName method.                                                                        |
| [`GetPropertyValue`](#FractureTotalNumberOfCyclesProbe.GetPropertyValue)                   | GetPropertyValue method.                                                                       |
| [`GetVisibleProperties`](#FractureTotalNumberOfCyclesProbe.GetVisibleProperties)           | GetVisibleProperties method.                                                                   |
| [`GetVisiblePropertyNames`](#FractureTotalNumberOfCyclesProbe.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                                |
| [`GroupAllSimilarChildren`](#FractureTotalNumberOfCyclesProbe.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                        |
| [`GroupSimilarObjects`](#FractureTotalNumberOfCyclesProbe.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                            |
| [`InitializeLifetimeService`](#FractureTotalNumberOfCyclesProbe.InitializeLifetimeService) | InitializeLifetimeService method.                                                              |
| [`IsPropertyEditable`](#FractureTotalNumberOfCyclesProbe.IsPropertyEditable)               | IsPropertyEditable method.                                                                     |
| [`IsPropertyVisible`](#FractureTotalNumberOfCyclesProbe.IsPropertyVisible)                 | IsPropertyVisible method.                                                                      |
| [`Paste`](#FractureTotalNumberOfCyclesProbe.Paste)                                         | Pastes to the current DataModelObject context.                                                 |
| [`PropertyByAPIName`](#FractureTotalNumberOfCyclesProbe.PropertyByAPIName)                 | Get a property by its API name.                                                                |
| [`PropertyById`](#FractureTotalNumberOfCyclesProbe.PropertyById)                           | PropertyById method.                                                                           |
| [`PropertyByName`](#FractureTotalNumberOfCyclesProbe.PropertyByName)                       | Get a property by its unique name.                                                             |
| [`RemoveFromGroup`](#FractureTotalNumberOfCyclesProbe.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.    |
| [`RemoveParameter`](#FractureTotalNumberOfCyclesProbe.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.              |
| [`RenameBasedOnDefinition`](#FractureTotalNumberOfCyclesProbe.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                        |
| [`RetrieveResult`](#FractureTotalNumberOfCyclesProbe.RetrieveResult)                       | Evaluates the individual probe result without evaluating all the results in the same solution. |
| [`SnapToMeshNodes`](#FractureTotalNumberOfCyclesProbe.SnapToMeshNodes)                     | Snap the coordinates of probe result to the mesh nodes.                                        |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ActiveContour`](#FractureTotalNumberOfCyclesProbe.ActiveContour)                           | Gets or sets the ActiveContour.                                                                                                                                            |
| [`AttachedRefs`](#FractureTotalNumberOfCyclesProbe.AttachedRefs)                             | AttachedRefs property.                                                                                                                                                     |
| [`BeamSelection`](#FractureTotalNumberOfCyclesProbe.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`BoundaryConditionSelection`](#FractureTotalNumberOfCyclesProbe.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'. |
| [`By`](#FractureTotalNumberOfCyclesProbe.By)                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets.                                                                   |
| [`Children`](#FractureTotalNumberOfCyclesProbe.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`ClsId`](#FractureTotalNumberOfCyclesProbe.ClsId)                                           | ClsId property.                                                                                                                                                            |
| [`Comments`](#FractureTotalNumberOfCyclesProbe.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`ContactRegionSelection`](#FractureTotalNumberOfCyclesProbe.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`CoordinateSystemSelection`](#FractureTotalNumberOfCyclesProbe.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`CrackLengthPercentage`](#FractureTotalNumberOfCyclesProbe.CrackLengthPercentage)           | Gets or sets the CrackLengthPercentage.                                                                                                                                    |
| [`DataModelObjectCategory`](#FractureTotalNumberOfCyclesProbe.DataModelObjectCategory)       | Gets the current DataModelObject's category.                                                                                                                               |
| [`DisplayTime`](#FractureTotalNumberOfCyclesProbe.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`DpfEvaluation`](#FractureTotalNumberOfCyclesProbe.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Figures`](#FractureTotalNumberOfCyclesProbe.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`GeometryLocation`](#FractureTotalNumberOfCyclesProbe.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`GroupingFolder`](#FractureTotalNumberOfCyclesProbe.GroupingFolder)                         | GroupingFolder property.                                                                                                                                                   |
| [`IconName`](#FractureTotalNumberOfCyclesProbe.IconName)                                     | IconName property.                                                                                                                                                         |
| [`Images`](#FractureTotalNumberOfCyclesProbe.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#FractureTotalNumberOfCyclesProbe.InternalObject)                         | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`IsSolved`](#FractureTotalNumberOfCyclesProbe.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`IterationNumber`](#FractureTotalNumberOfCyclesProbe.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#FractureTotalNumberOfCyclesProbe.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#FractureTotalNumberOfCyclesProbe.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`LocationMethod`](#FractureTotalNumberOfCyclesProbe.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`MaximumTotal`](#FractureTotalNumberOfCyclesProbe.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumValueOverTime`](#FractureTotalNumberOfCyclesProbe.MaximumValueOverTime)             | Gets the MaximumValueOverTime.                                                                                                                                             |
| [`MaximumXAxis`](#FractureTotalNumberOfCyclesProbe.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#FractureTotalNumberOfCyclesProbe.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#FractureTotalNumberOfCyclesProbe.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MeshConnectionSelection`](#FractureTotalNumberOfCyclesProbe.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`MinimumTotal`](#FractureTotalNumberOfCyclesProbe.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumValueOverTime`](#FractureTotalNumberOfCyclesProbe.MinimumValueOverTime)             | Gets the MinimumValueOverTime.                                                                                                                                             |
| [`MinimumXAxis`](#FractureTotalNumberOfCyclesProbe.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#FractureTotalNumberOfCyclesProbe.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#FractureTotalNumberOfCyclesProbe.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Name`](#FractureTotalNumberOfCyclesProbe.Name)                                             | Name property.                                                                                                                                                             |
| [`ObjectId`](#FractureTotalNumberOfCyclesProbe.ObjectId)                                     | ObjectId property.                                                                                                                                                         |
| [`ObjectState`](#FractureTotalNumberOfCyclesProbe.ObjectState)                               | ObjectState property.                                                                                                                                                      |
| [`ObjectTags`](#FractureTotalNumberOfCyclesProbe.ObjectTags)                                 | ObjectTags property.                                                                                                                                                       |
| [`Orientation`](#FractureTotalNumberOfCyclesProbe.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`Parent`](#FractureTotalNumberOfCyclesProbe.Parent)                                         | Parent property.                                                                                                                                                           |
| [`Properties`](#FractureTotalNumberOfCyclesProbe.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`RPMSelection`](#FractureTotalNumberOfCyclesProbe.RPMSelection)                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                   |
| [`RemotePointSelection`](#FractureTotalNumberOfCyclesProbe.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`ResultProbeValue`](#FractureTotalNumberOfCyclesProbe.ResultProbeValue)                     | Gets the ResultProbeValue.                                                                                                                                                 |
| [`ResultSelection`](#FractureTotalNumberOfCyclesProbe.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`RpmSetNumber`](#FractureTotalNumberOfCyclesProbe.RpmSetNumber)                             | Gets or sets the RpmSetNumber.                                                                                                                                             |
| [`SolverID`](#FractureTotalNumberOfCyclesProbe.SolverID)                                     | Gets or sets the Solver ID used to evaluate the FractureToolProbe from the associated result file.                                                                         |
| [`SpatialResolution`](#FractureTotalNumberOfCyclesProbe.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`SpringSelection`](#FractureTotalNumberOfCyclesProbe.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`State`](#FractureTotalNumberOfCyclesProbe.State)                                           | State property.                                                                                                                                                            |
| [`Substep`](#FractureTotalNumberOfCyclesProbe.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`Summation`](#FractureTotalNumberOfCyclesProbe.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`Suppressed`](#FractureTotalNumberOfCyclesProbe.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`SurfaceSelection`](#FractureTotalNumberOfCyclesProbe.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`TabularData`](#FractureTotalNumberOfCyclesProbe.TabularData)                               | Gets the tabular data of the result probe. Use a to get index to each column of the tabular data.                                                                          |
| [`Time`](#FractureTotalNumberOfCyclesProbe.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#FractureTotalNumberOfCyclesProbe.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`Type`](#FractureTotalNumberOfCyclesProbe.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`VisibleProperties`](#FractureTotalNumberOfCyclesProbe.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |
| [`XAxis`](#FractureTotalNumberOfCyclesProbe.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#FractureTotalNumberOfCyclesProbe.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#FractureTotalNumberOfCyclesProbe.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="FractureTotalNumberOfCyclesProbe.ActiveContour"></a>

### *property* FractureTotalNumberOfCyclesProbe.ActiveContour *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ActiveContour.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.AttachedRefs"></a>

### *property* FractureTotalNumberOfCyclesProbe.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.BeamSelection"></a>

### *property* FractureTotalNumberOfCyclesProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.BoundaryConditionSelection"></a>

### *property* FractureTotalNumberOfCyclesProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.By"></a>

### *property* FractureTotalNumberOfCyclesProbe.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Children"></a>

### *property* FractureTotalNumberOfCyclesProbe.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.ClsId"></a>

### *property* FractureTotalNumberOfCyclesProbe.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Comments"></a>

### *property* FractureTotalNumberOfCyclesProbe.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.ContactRegionSelection"></a>

### *property* FractureTotalNumberOfCyclesProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.CoordinateSystemSelection"></a>

### *property* FractureTotalNumberOfCyclesProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.CrackLengthPercentage"></a>

### *property* FractureTotalNumberOfCyclesProbe.CrackLengthPercentage *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackLengthPercentage.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.DataModelObjectCategory"></a>

### *property* FractureTotalNumberOfCyclesProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.DisplayTime"></a>

### *property* FractureTotalNumberOfCyclesProbe.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.DpfEvaluation"></a>

### *property* FractureTotalNumberOfCyclesProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Figures"></a>

### *property* FractureTotalNumberOfCyclesProbe.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GeometryLocation"></a>

### *property* FractureTotalNumberOfCyclesProbe.GeometryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GroupingFolder"></a>

### *property* FractureTotalNumberOfCyclesProbe.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.IconName"></a>

### *property* FractureTotalNumberOfCyclesProbe.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Images"></a>

### *property* FractureTotalNumberOfCyclesProbe.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.InternalObject"></a>

### *property* FractureTotalNumberOfCyclesProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.IsSolved"></a>

### *property* FractureTotalNumberOfCyclesProbe.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.IterationNumber"></a>

### *property* FractureTotalNumberOfCyclesProbe.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.LoadStep"></a>

### *property* FractureTotalNumberOfCyclesProbe.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.LoadStepNumber"></a>

### *property* FractureTotalNumberOfCyclesProbe.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.LocationMethod"></a>

### *property* FractureTotalNumberOfCyclesProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.MaximumTotal"></a>

### *property* FractureTotalNumberOfCyclesProbe.MaximumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.MaximumValueOverTime"></a>

### *property* FractureTotalNumberOfCyclesProbe.MaximumValueOverTime *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.MaximumXAxis"></a>

### *property* FractureTotalNumberOfCyclesProbe.MaximumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.MaximumYAxis"></a>

### *property* FractureTotalNumberOfCyclesProbe.MaximumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.MaximumZAxis"></a>

### *property* FractureTotalNumberOfCyclesProbe.MaximumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.MeshConnectionSelection"></a>

### *property* FractureTotalNumberOfCyclesProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.MinimumTotal"></a>

### *property* FractureTotalNumberOfCyclesProbe.MinimumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.MinimumValueOverTime"></a>

### *property* FractureTotalNumberOfCyclesProbe.MinimumValueOverTime *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.MinimumXAxis"></a>

### *property* FractureTotalNumberOfCyclesProbe.MinimumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.MinimumYAxis"></a>

### *property* FractureTotalNumberOfCyclesProbe.MinimumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.MinimumZAxis"></a>

### *property* FractureTotalNumberOfCyclesProbe.MinimumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Name"></a>

### *property* FractureTotalNumberOfCyclesProbe.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.ObjectId"></a>

### *property* FractureTotalNumberOfCyclesProbe.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.ObjectState"></a>

### *property* FractureTotalNumberOfCyclesProbe.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.ObjectTags"></a>

### *property* FractureTotalNumberOfCyclesProbe.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Orientation"></a>

### *property* FractureTotalNumberOfCyclesProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Parent"></a>

### *property* FractureTotalNumberOfCyclesProbe.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Properties"></a>

### *property* FractureTotalNumberOfCyclesProbe.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.RPMSelection"></a>

### *property* FractureTotalNumberOfCyclesProbe.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.RemotePointSelection"></a>

### *property* FractureTotalNumberOfCyclesProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.ResultProbeValue"></a>

### *property* FractureTotalNumberOfCyclesProbe.ResultProbeValue *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultProbeValue.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.ResultSelection"></a>

### *property* FractureTotalNumberOfCyclesProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.RpmSetNumber"></a>

### *property* FractureTotalNumberOfCyclesProbe.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.SolverID"></a>

### *property* FractureTotalNumberOfCyclesProbe.SolverID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Solver ID used to evaluate the FractureToolProbe from the associated result file.
: An exception is thrown if the ScopingMethod of the parent fracture tool is not set to ResultFileItem
  or if the Fracture result data does not contain the specified Solver ID.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.SpatialResolution"></a>

### *property* FractureTotalNumberOfCyclesProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.SpringSelection"></a>

### *property* FractureTotalNumberOfCyclesProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.State"></a>

### *property* FractureTotalNumberOfCyclesProbe.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Substep"></a>

### *property* FractureTotalNumberOfCyclesProbe.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Summation"></a>

### *property* FractureTotalNumberOfCyclesProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Suppressed"></a>

### *property* FractureTotalNumberOfCyclesProbe.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.SurfaceSelection"></a>

### *property* FractureTotalNumberOfCyclesProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.TabularData"></a>

### *property* FractureTotalNumberOfCyclesProbe.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result probe. Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Time"></a>

### *property* FractureTotalNumberOfCyclesProbe.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Total"></a>

### *property* FractureTotalNumberOfCyclesProbe.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Type"></a>

### *property* FractureTotalNumberOfCyclesProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.VisibleProperties"></a>

### *property* FractureTotalNumberOfCyclesProbe.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.XAxis"></a>

### *property* FractureTotalNumberOfCyclesProbe.XAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.YAxis"></a>

### *property* FractureTotalNumberOfCyclesProbe.YAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.ZAxis"></a>

### *property* FractureTotalNumberOfCyclesProbe.ZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FractureTotalNumberOfCyclesProbe.Activate"></a>

### FractureTotalNumberOfCyclesProbe.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.AddComment"></a>

### FractureTotalNumberOfCyclesProbe.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.AddFigure"></a>

### FractureTotalNumberOfCyclesProbe.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.AddImage"></a>

### FractureTotalNumberOfCyclesProbe.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.ClearGeneratedData"></a>

### FractureTotalNumberOfCyclesProbe.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Copy"></a>

### FractureTotalNumberOfCyclesProbe.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.CopyTo"></a>

### FractureTotalNumberOfCyclesProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.CreateObjRef"></a>

### FractureTotalNumberOfCyclesProbe.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.CreateParameter"></a>

### FractureTotalNumberOfCyclesProbe.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Cut"></a>

### FractureTotalNumberOfCyclesProbe.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Delete"></a>

### FractureTotalNumberOfCyclesProbe.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Duplicate"></a>

### FractureTotalNumberOfCyclesProbe.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.DuplicateWithoutResults"></a>

### FractureTotalNumberOfCyclesProbe.DuplicateWithoutResults() → Ansys.ACT.Automation.Mechanical.DataModelObject

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Equals"></a>

### FractureTotalNumberOfCyclesProbe.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.EvaluateAllResults"></a>

### FractureTotalNumberOfCyclesProbe.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.ExportAnimation"></a>

### FractureTotalNumberOfCyclesProbe.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GetAPIName"></a>

### FractureTotalNumberOfCyclesProbe.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GetAllProperties"></a>

### FractureTotalNumberOfCyclesProbe.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GetChildren"></a>

### FractureTotalNumberOfCyclesProbe.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FractureTotalNumberOfCyclesProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GetDetailsView"></a>

### FractureTotalNumberOfCyclesProbe.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GetEnumName"></a>

### FractureTotalNumberOfCyclesProbe.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GetHashCode"></a>

### FractureTotalNumberOfCyclesProbe.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GetIconFile"></a>

### FractureTotalNumberOfCyclesProbe.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GetLifetimeService"></a>

### FractureTotalNumberOfCyclesProbe.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GetObjectData"></a>

### FractureTotalNumberOfCyclesProbe.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GetParameter"></a>

### FractureTotalNumberOfCyclesProbe.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GetPath"></a>

### FractureTotalNumberOfCyclesProbe.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GetPropertyName"></a>

### FractureTotalNumberOfCyclesProbe.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GetPropertyValue"></a>

### FractureTotalNumberOfCyclesProbe.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GetVisibleProperties"></a>

### FractureTotalNumberOfCyclesProbe.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GetVisiblePropertyNames"></a>

### FractureTotalNumberOfCyclesProbe.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GroupAllSimilarChildren"></a>

### FractureTotalNumberOfCyclesProbe.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.GroupSimilarObjects"></a>

### FractureTotalNumberOfCyclesProbe.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.InitializeLifetimeService"></a>

### FractureTotalNumberOfCyclesProbe.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.IsPropertyEditable"></a>

### FractureTotalNumberOfCyclesProbe.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FractureTotalNumberOfCyclesProbe.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.IsPropertyVisible"></a>

### FractureTotalNumberOfCyclesProbe.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FractureTotalNumberOfCyclesProbe.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.Paste"></a>

### FractureTotalNumberOfCyclesProbe.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.PropertyByAPIName"></a>

### FractureTotalNumberOfCyclesProbe.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.PropertyById"></a>

### FractureTotalNumberOfCyclesProbe.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.PropertyByName"></a>

### FractureTotalNumberOfCyclesProbe.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.RemoveFromGroup"></a>

### FractureTotalNumberOfCyclesProbe.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.RemoveParameter"></a>

### FractureTotalNumberOfCyclesProbe.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.RenameBasedOnDefinition"></a>

### FractureTotalNumberOfCyclesProbe.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.RetrieveResult"></a>

### FractureTotalNumberOfCyclesProbe.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual probe result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

<a id="FractureTotalNumberOfCyclesProbe.SnapToMeshNodes"></a>

### FractureTotalNumberOfCyclesProbe.SnapToMeshNodes() → [None](https://docs.python.org/3/builtins/constants.html#None)

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

