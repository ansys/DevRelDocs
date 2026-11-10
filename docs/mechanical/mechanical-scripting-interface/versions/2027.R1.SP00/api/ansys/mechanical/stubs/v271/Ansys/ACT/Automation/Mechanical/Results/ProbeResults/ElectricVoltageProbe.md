# `ElectricVoltageProbe`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ElectricVoltageProbe"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ElectricVoltageProbe(internalObject: Any)

<a id="ElectricVoltageProbe"></a>

### *class* ElectricVoltageProbe(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ElectricVoltageProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Activate`](#ElectricVoltageProbe.Activate)                                   | Activate the current object.                                                                   |
| [`AddComment`](#ElectricVoltageProbe.AddComment)                               | Creates a new child Comment.                                                                   |
| [`AddFigure`](#ElectricVoltageProbe.AddFigure)                                 | Creates a new child Figure.                                                                    |
| [`AddImage`](#ElectricVoltageProbe.AddImage)                                   | Creates a new child Image.                                                                     |
| [`ClearGeneratedData`](#ElectricVoltageProbe.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                             |
| [`Copy`](#ElectricVoltageProbe.Copy)                                           | Copies the current DataModelObject.                                                            |
| [`CopyTo`](#ElectricVoltageProbe.CopyTo)                                       | Copies all visible properties from this object to another.                                     |
| [`CreateObjRef`](#ElectricVoltageProbe.CreateObjRef)                           | CreateObjRef method.                                                                           |
| [`CreateParameter`](#ElectricVoltageProbe.CreateParameter)                     | Creates a new parameter for a Property.                                                        |
| [`Cut`](#ElectricVoltageProbe.Cut)                                             | Cuts the current DataModelObject.                                                              |
| [`Delete`](#ElectricVoltageProbe.Delete)                                       | Run the Delete action.                                                                         |
| [`Duplicate`](#ElectricVoltageProbe.Duplicate)                                 | Creates a copy of the current DataModelObject.                                                 |
| [`DuplicateWithoutResults`](#ElectricVoltageProbe.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                        |
| [`Equals`](#ElectricVoltageProbe.Equals)                                       | Equals method.                                                                                 |
| [`EvaluateAllResults`](#ElectricVoltageProbe.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                             |
| [`ExportAnimation`](#ElectricVoltageProbe.ExportAnimation)                     | Run the ExportAnimation action.                                                                |
| [`GetAPIName`](#ElectricVoltageProbe.GetAPIName)                               | GetAPIName method.                                                                             |
| [`GetAllProperties`](#ElectricVoltageProbe.GetAllProperties)                   | GetAllProperties method.                                                                       |
| [`GetChildren`](#ElectricVoltageProbe.GetChildren)                             | Gets the list of children, filtered by type.                                                   |
| [`GetDetailsView`](#ElectricVoltageProbe.GetDetailsView)                       | GetDetailsView method.                                                                         |
| [`GetEnumName`](#ElectricVoltageProbe.GetEnumName)                             | Enum name bound to value                                                                       |
| [`GetHashCode`](#ElectricVoltageProbe.GetHashCode)                             | GetHashCode method.                                                                            |
| [`GetIconFile`](#ElectricVoltageProbe.GetIconFile)                             | GetIconFile method.                                                                            |
| [`GetLifetimeService`](#ElectricVoltageProbe.GetLifetimeService)               | GetLifetimeService method.                                                                     |
| [`GetObjectData`](#ElectricVoltageProbe.GetObjectData)                         | GetObjectData method.                                                                          |
| [`GetParameter`](#ElectricVoltageProbe.GetParameter)                           | Gets the parameter corresponding to the given property.                                        |
| [`GetPath`](#ElectricVoltageProbe.GetPath)                                     | GetPath method.                                                                                |
| [`GetPropertyName`](#ElectricVoltageProbe.GetPropertyName)                     | GetPropertyName method.                                                                        |
| [`GetPropertyValue`](#ElectricVoltageProbe.GetPropertyValue)                   | GetPropertyValue method.                                                                       |
| [`GetVisibleProperties`](#ElectricVoltageProbe.GetVisibleProperties)           | GetVisibleProperties method.                                                                   |
| [`GetVisiblePropertyNames`](#ElectricVoltageProbe.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                                |
| [`GroupAllSimilarChildren`](#ElectricVoltageProbe.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                        |
| [`GroupSimilarObjects`](#ElectricVoltageProbe.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                            |
| [`InitializeLifetimeService`](#ElectricVoltageProbe.InitializeLifetimeService) | InitializeLifetimeService method.                                                              |
| [`IsPropertyEditable`](#ElectricVoltageProbe.IsPropertyEditable)               | IsPropertyEditable method.                                                                     |
| [`IsPropertyVisible`](#ElectricVoltageProbe.IsPropertyVisible)                 | IsPropertyVisible method.                                                                      |
| [`Paste`](#ElectricVoltageProbe.Paste)                                         | Pastes to the current DataModelObject context.                                                 |
| [`PropertyByAPIName`](#ElectricVoltageProbe.PropertyByAPIName)                 | Get a property by its API name.                                                                |
| [`PropertyById`](#ElectricVoltageProbe.PropertyById)                           | PropertyById method.                                                                           |
| [`PropertyByName`](#ElectricVoltageProbe.PropertyByName)                       | Get a property by its unique name.                                                             |
| [`RemoveFromGroup`](#ElectricVoltageProbe.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.    |
| [`RemoveParameter`](#ElectricVoltageProbe.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.              |
| [`RenameBasedOnDefinition`](#ElectricVoltageProbe.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                        |
| [`RetrieveResult`](#ElectricVoltageProbe.RetrieveResult)                       | Evaluates the individual probe result without evaluating all the results in the same solution. |
| [`SnapToMeshNodes`](#ElectricVoltageProbe.SnapToMeshNodes)                     | Snap the coordinates of probe result to the mesh nodes.                                        |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#ElectricVoltageProbe.AttachedRefs)                             | AttachedRefs property.                                                                                                                                                     |
| [`BeamSelection`](#ElectricVoltageProbe.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`BoundaryConditionSelection`](#ElectricVoltageProbe.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'. |
| [`By`](#ElectricVoltageProbe.By)                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets.                                                                   |
| [`Children`](#ElectricVoltageProbe.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`ClsId`](#ElectricVoltageProbe.ClsId)                                           | ClsId property.                                                                                                                                                            |
| [`Comments`](#ElectricVoltageProbe.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`ContactRegionSelection`](#ElectricVoltageProbe.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`CoordinateSystemSelection`](#ElectricVoltageProbe.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`DataModelObjectCategory`](#ElectricVoltageProbe.DataModelObjectCategory)       | Gets the current DataModelObject's category.                                                                                                                               |
| [`DisplayTime`](#ElectricVoltageProbe.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`DpfEvaluation`](#ElectricVoltageProbe.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Figures`](#ElectricVoltageProbe.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`GeometryLocation`](#ElectricVoltageProbe.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`GroupingFolder`](#ElectricVoltageProbe.GroupingFolder)                         | GroupingFolder property.                                                                                                                                                   |
| [`IconName`](#ElectricVoltageProbe.IconName)                                     | IconName property.                                                                                                                                                         |
| [`Images`](#ElectricVoltageProbe.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#ElectricVoltageProbe.InternalObject)                         | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`IsSolved`](#ElectricVoltageProbe.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`IterationNumber`](#ElectricVoltageProbe.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#ElectricVoltageProbe.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#ElectricVoltageProbe.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`LocationMethod`](#ElectricVoltageProbe.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`MaximumTotal`](#ElectricVoltageProbe.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumVoltageProbe`](#ElectricVoltageProbe.MaximumVoltageProbe)               | Gets the MaximumVoltageProbe.                                                                                                                                              |
| [`MaximumXAxis`](#ElectricVoltageProbe.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#ElectricVoltageProbe.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#ElectricVoltageProbe.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MeshConnectionSelection`](#ElectricVoltageProbe.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`MinimumTotal`](#ElectricVoltageProbe.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumVoltageProbe`](#ElectricVoltageProbe.MinimumVoltageProbe)               | Gets the MinimumVoltageProbe.                                                                                                                                              |
| [`MinimumXAxis`](#ElectricVoltageProbe.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#ElectricVoltageProbe.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#ElectricVoltageProbe.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Name`](#ElectricVoltageProbe.Name)                                             | Name property.                                                                                                                                                             |
| [`ObjectId`](#ElectricVoltageProbe.ObjectId)                                     | ObjectId property.                                                                                                                                                         |
| [`ObjectState`](#ElectricVoltageProbe.ObjectState)                               | ObjectState property.                                                                                                                                                      |
| [`ObjectTags`](#ElectricVoltageProbe.ObjectTags)                                 | ObjectTags property.                                                                                                                                                       |
| [`Orientation`](#ElectricVoltageProbe.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`Parent`](#ElectricVoltageProbe.Parent)                                         | Parent property.                                                                                                                                                           |
| [`Properties`](#ElectricVoltageProbe.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`RPMSelection`](#ElectricVoltageProbe.RPMSelection)                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                   |
| [`RemotePointSelection`](#ElectricVoltageProbe.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`ResultSelection`](#ElectricVoltageProbe.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`RpmSetNumber`](#ElectricVoltageProbe.RpmSetNumber)                             | Gets or sets the RpmSetNumber.                                                                                                                                             |
| [`SpatialResolution`](#ElectricVoltageProbe.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`SpringSelection`](#ElectricVoltageProbe.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`State`](#ElectricVoltageProbe.State)                                           | State property.                                                                                                                                                            |
| [`Substep`](#ElectricVoltageProbe.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`Summation`](#ElectricVoltageProbe.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`Suppressed`](#ElectricVoltageProbe.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`SurfaceSelection`](#ElectricVoltageProbe.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`TabularData`](#ElectricVoltageProbe.TabularData)                               | Gets the tabular data of the result probe. Use a to get index to each column of the tabular data.                                                                          |
| [`Time`](#ElectricVoltageProbe.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#ElectricVoltageProbe.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`Type`](#ElectricVoltageProbe.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`VisibleProperties`](#ElectricVoltageProbe.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |
| [`VoltageProbe`](#ElectricVoltageProbe.VoltageProbe)                             | Gets the VoltageProbe.                                                                                                                                                     |
| [`XAxis`](#ElectricVoltageProbe.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#ElectricVoltageProbe.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#ElectricVoltageProbe.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="ElectricVoltageProbe.AttachedRefs"></a>

### *property* ElectricVoltageProbe.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.BeamSelection"></a>

### *property* ElectricVoltageProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.BoundaryConditionSelection"></a>

### *property* ElectricVoltageProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.By"></a>

### *property* ElectricVoltageProbe.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Children"></a>

### *property* ElectricVoltageProbe.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.ClsId"></a>

### *property* ElectricVoltageProbe.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Comments"></a>

### *property* ElectricVoltageProbe.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.ContactRegionSelection"></a>

### *property* ElectricVoltageProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.CoordinateSystemSelection"></a>

### *property* ElectricVoltageProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.DataModelObjectCategory"></a>

### *property* ElectricVoltageProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.DisplayTime"></a>

### *property* ElectricVoltageProbe.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.DpfEvaluation"></a>

### *property* ElectricVoltageProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Figures"></a>

### *property* ElectricVoltageProbe.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GeometryLocation"></a>

### *property* ElectricVoltageProbe.GeometryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GroupingFolder"></a>

### *property* ElectricVoltageProbe.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.IconName"></a>

### *property* ElectricVoltageProbe.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Images"></a>

### *property* ElectricVoltageProbe.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.InternalObject"></a>

### *property* ElectricVoltageProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.IsSolved"></a>

### *property* ElectricVoltageProbe.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.IterationNumber"></a>

### *property* ElectricVoltageProbe.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.LoadStep"></a>

### *property* ElectricVoltageProbe.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.LoadStepNumber"></a>

### *property* ElectricVoltageProbe.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.LocationMethod"></a>

### *property* ElectricVoltageProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MaximumTotal"></a>

### *property* ElectricVoltageProbe.MaximumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MaximumVoltageProbe"></a>

### *property* ElectricVoltageProbe.MaximumVoltageProbe *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumVoltageProbe.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MaximumXAxis"></a>

### *property* ElectricVoltageProbe.MaximumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MaximumYAxis"></a>

### *property* ElectricVoltageProbe.MaximumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MaximumZAxis"></a>

### *property* ElectricVoltageProbe.MaximumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MeshConnectionSelection"></a>

### *property* ElectricVoltageProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MinimumTotal"></a>

### *property* ElectricVoltageProbe.MinimumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MinimumVoltageProbe"></a>

### *property* ElectricVoltageProbe.MinimumVoltageProbe *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumVoltageProbe.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MinimumXAxis"></a>

### *property* ElectricVoltageProbe.MinimumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MinimumYAxis"></a>

### *property* ElectricVoltageProbe.MinimumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MinimumZAxis"></a>

### *property* ElectricVoltageProbe.MinimumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Name"></a>

### *property* ElectricVoltageProbe.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.ObjectId"></a>

### *property* ElectricVoltageProbe.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.ObjectState"></a>

### *property* ElectricVoltageProbe.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.ObjectTags"></a>

### *property* ElectricVoltageProbe.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Orientation"></a>

### *property* ElectricVoltageProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Parent"></a>

### *property* ElectricVoltageProbe.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Properties"></a>

### *property* ElectricVoltageProbe.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.RPMSelection"></a>

### *property* ElectricVoltageProbe.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.RemotePointSelection"></a>

### *property* ElectricVoltageProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.ResultSelection"></a>

### *property* ElectricVoltageProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.RpmSetNumber"></a>

### *property* ElectricVoltageProbe.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.SpatialResolution"></a>

### *property* ElectricVoltageProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.SpringSelection"></a>

### *property* ElectricVoltageProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.State"></a>

### *property* ElectricVoltageProbe.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Substep"></a>

### *property* ElectricVoltageProbe.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Summation"></a>

### *property* ElectricVoltageProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Suppressed"></a>

### *property* ElectricVoltageProbe.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.SurfaceSelection"></a>

### *property* ElectricVoltageProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.TabularData"></a>

### *property* ElectricVoltageProbe.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result probe. Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Time"></a>

### *property* ElectricVoltageProbe.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Total"></a>

### *property* ElectricVoltageProbe.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Type"></a>

### *property* ElectricVoltageProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.VisibleProperties"></a>

### *property* ElectricVoltageProbe.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.VoltageProbe"></a>

### *property* ElectricVoltageProbe.VoltageProbe *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the VoltageProbe.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.XAxis"></a>

### *property* ElectricVoltageProbe.XAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.YAxis"></a>

### *property* ElectricVoltageProbe.YAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.ZAxis"></a>

### *property* ElectricVoltageProbe.ZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElectricVoltageProbe.Activate"></a>

### ElectricVoltageProbe.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.AddComment"></a>

### ElectricVoltageProbe.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.AddFigure"></a>

### ElectricVoltageProbe.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.AddImage"></a>

### ElectricVoltageProbe.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.ClearGeneratedData"></a>

### ElectricVoltageProbe.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Copy"></a>

### ElectricVoltageProbe.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.CopyTo"></a>

### ElectricVoltageProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.CreateObjRef"></a>

### ElectricVoltageProbe.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.CreateParameter"></a>

### ElectricVoltageProbe.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Cut"></a>

### ElectricVoltageProbe.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Delete"></a>

### ElectricVoltageProbe.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Duplicate"></a>

### ElectricVoltageProbe.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.DuplicateWithoutResults"></a>

### ElectricVoltageProbe.DuplicateWithoutResults() → Ansys.ACT.Automation.Mechanical.DataModelObject

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Equals"></a>

### ElectricVoltageProbe.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.EvaluateAllResults"></a>

### ElectricVoltageProbe.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.ExportAnimation"></a>

### ElectricVoltageProbe.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GetAPIName"></a>

### ElectricVoltageProbe.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GetAllProperties"></a>

### ElectricVoltageProbe.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GetChildren"></a>

### ElectricVoltageProbe.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ElectricVoltageProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GetDetailsView"></a>

### ElectricVoltageProbe.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GetEnumName"></a>

### ElectricVoltageProbe.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GetHashCode"></a>

### ElectricVoltageProbe.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GetIconFile"></a>

### ElectricVoltageProbe.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GetLifetimeService"></a>

### ElectricVoltageProbe.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GetObjectData"></a>

### ElectricVoltageProbe.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GetParameter"></a>

### ElectricVoltageProbe.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GetPath"></a>

### ElectricVoltageProbe.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GetPropertyName"></a>

### ElectricVoltageProbe.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GetPropertyValue"></a>

### ElectricVoltageProbe.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GetVisibleProperties"></a>

### ElectricVoltageProbe.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GetVisiblePropertyNames"></a>

### ElectricVoltageProbe.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GroupAllSimilarChildren"></a>

### ElectricVoltageProbe.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GroupSimilarObjects"></a>

### ElectricVoltageProbe.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.InitializeLifetimeService"></a>

### ElectricVoltageProbe.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.IsPropertyEditable"></a>

### ElectricVoltageProbe.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ElectricVoltageProbe.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.IsPropertyVisible"></a>

### ElectricVoltageProbe.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ElectricVoltageProbe.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Paste"></a>

### ElectricVoltageProbe.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.PropertyByAPIName"></a>

### ElectricVoltageProbe.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.PropertyById"></a>

### ElectricVoltageProbe.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.PropertyByName"></a>

### ElectricVoltageProbe.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.RemoveFromGroup"></a>

### ElectricVoltageProbe.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.RemoveParameter"></a>

### ElectricVoltageProbe.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.RenameBasedOnDefinition"></a>

### ElectricVoltageProbe.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.RetrieveResult"></a>

### ElectricVoltageProbe.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual probe result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.SnapToMeshNodes"></a>

### ElectricVoltageProbe.SnapToMeshNodes() → [None](https://docs.python.org/3/builtins/constants.html#None)

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

