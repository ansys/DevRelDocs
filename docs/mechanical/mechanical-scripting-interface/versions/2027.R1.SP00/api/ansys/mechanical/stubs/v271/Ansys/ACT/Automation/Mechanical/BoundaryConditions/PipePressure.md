# `PipePressure`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PipePressure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.PipePressure(internalObject: Any)

<a id="PipePressure"></a>

### *class* PipePressure(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PipePressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PipePressure.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#PipePressure.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#PipePressure.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#PipePressure.AddImage)                                             | Creates a new child Image.                                                                  |
| [`Copy`](#PipePressure.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PipePressure.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PipePressure.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PipePressure.CreateParameter)                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PipePressure.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PipePressure.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#PipePressure.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PipePressure.Equals)                                                 | Equals method.                                                                              |
| [`GetAPIName`](#PipePressure.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#PipePressure.GetActivateAtLoadStep)                   | Gets whether the pipe pressure is active at the specified load step.                        |
| [`GetAllProperties`](#PipePressure.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#PipePressure.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetComponentActivateAtLoadStep`](#PipePressure.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                                      |
| [`GetDetailsView`](#PipePressure.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PipePressure.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#PipePressure.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#PipePressure.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PipePressure.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PipePressure.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#PipePressure.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PipePressure.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#PipePressure.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PipePressure.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#PipePressure.GetQuantityName)                               | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#PipePressure.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PipePressure.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PipePressure.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PipePressure.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PipePressure.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PipePressure.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PipePressure.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#PipePressure.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#PipePressure.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#PipePressure.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#PipePressure.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#PipePressure.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PipePressure.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PipePressure.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#PipePressure.SetActivateAtLoadStep)                   | Sets whether the pipe pressure is active at the specified load step.                        |
| [`SetComponentActivateAtLoadStep`](#PipePressure.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                                      |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#PipePressure.AttachedRefs)                               | AttachedRefs property.                                                                                                  |
| [`Children`](#PipePressure.Children)                                       | Gets the list of children.                                                                                              |
| [`ClsId`](#PipePressure.ClsId)                                             | ClsId property.                                                                                                         |
| [`Comments`](#PipePressure.Comments)                                       | Gets the list of associated comments.                                                                                   |
| [`DataModelObjectCategory`](#PipePressure.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                                            |
| [`Figures`](#PipePressure.Figures)                                         | Gets the list of associated figures.                                                                                    |
| [`GraphControlsXAxis`](#PipePressure.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                                                                                    |
| [`GroupingFolder`](#PipePressure.GroupingFolder)                           | GroupingFolder property.                                                                                                |
| [`IconName`](#PipePressure.IconName)                                       | IconName property.                                                                                                      |
| [`Images`](#PipePressure.Images)                                           | Gets the list of associated images.                                                                                     |
| [`ImportableObjectSourceId`](#PipePressure.ImportableObjectSourceId)       | ImportableObjectSourceId property.                                                                                      |
| [`IndependentVariable`](#PipePressure.IndependentVariable)                 | Gets or sets the IndependentVariable.                                                                                   |
| [`InternalObject`](#PipePressure.InternalObject)                           | Gets the internal object. For advanced usage only.                                                                      |
| [`LoadVectorAssignment`](#PipePressure.LoadVectorAssignment)               | Gets or sets whether the LoadVectorAssignment is LoadVectorAssignment_ProgramControlled or LoadVectorAssignment_Manual. |
| [`LoadVectorNumber`](#PipePressure.LoadVectorNumber)                       | Gets or sets the load vector number for the pipe pressure.                                                              |
| [`Loading`](#PipePressure.Loading)                                         | Gets or sets the Loading.                                                                                               |
| [`Location`](#PipePressure.Location)                                       | Gets or sets the Location.                                                                                              |
| [`Magnitude`](#PipePressure.Magnitude)                                     | Gets the Magnitude.                                                                                                     |
| [`Name`](#PipePressure.Name)                                               | Name property.                                                                                                          |
| [`NumberOfSegments`](#PipePressure.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                                                                                      |
| [`ObjectId`](#PipePressure.ObjectId)                                       | ObjectId property.                                                                                                      |
| [`ObjectState`](#PipePressure.ObjectState)                                 | ObjectState property.                                                                                                   |
| [`ObjectTags`](#PipePressure.ObjectTags)                                   | ObjectTags property.                                                                                                    |
| [`Parent`](#PipePressure.Parent)                                           | Parent property.                                                                                                        |
| [`PhaseAngle`](#PipePressure.PhaseAngle)                                   | Gets or sets the PhaseAngle.                                                                                            |
| [`Properties`](#PipePressure.Properties)                                   | Gets the list of properties for this object.                                                                            |
| [`RangeMaximum`](#PipePressure.RangeMaximum)                               | Gets or sets the RangeMaximum.                                                                                          |
| [`RangeMinimum`](#PipePressure.RangeMinimum)                               | Gets or sets the RangeMinimum.                                                                                          |
| [`ReadOnly`](#PipePressure.ReadOnly)                                       | Gets or sets the ReadOnly.                                                                                              |
| [`SharedRefBody`](#PipePressure.SharedRefBody)                             | Gets or sets the SharedRefBody.                                                                                         |
| [`State`](#PipePressure.State)                                             | State property.                                                                                                         |
| [`Suppressed`](#PipePressure.Suppressed)                                   | Gets or sets the Suppressed.                                                                                            |
| [`TransferableObjectId`](#PipePressure.TransferableObjectId)               | TransferableObjectId property.                                                                                          |
| [`VisibleProperties`](#PipePressure.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                                           |
| [`XYZFunctionCoordinateSystem`](#PipePressure.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                                                                           |

<a id="property-detail"></a>

## Property detail

<a id="PipePressure.AttachedRefs"></a>

### *property* PipePressure.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Children"></a>

### *property* PipePressure.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.ClsId"></a>

### *property* PipePressure.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Comments"></a>

### *property* PipePressure.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.DataModelObjectCategory"></a>

### *property* PipePressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Figures"></a>

### *property* PipePressure.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GraphControlsXAxis"></a>

### *property* PipePressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GroupingFolder"></a>

### *property* PipePressure.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.IconName"></a>

### *property* PipePressure.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Images"></a>

### *property* PipePressure.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.ImportableObjectSourceId"></a>

### *property* PipePressure.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.IndependentVariable"></a>

### *property* PipePressure.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.InternalObject"></a>

### *property* PipePressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.LoadVectorAssignment"></a>

### *property* PipePressure.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the LoadVectorAssignment is LoadVectorAssignment_ProgramControlled or LoadVectorAssignment_Manual.
: Default: LoadVectorAssignment_ProgramControlled.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.LoadVectorNumber"></a>

### *property* PipePressure.LoadVectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the pipe pressure.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Loading"></a>

### *property* PipePressure.Loading *: [Ansys.Mechanical.DataModel.Enums.PipeLoadingType](../../../../Mechanical/DataModel/Enums/PipeLoadingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PipeLoadingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Loading.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Location"></a>

### *property* PipePressure.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Magnitude"></a>

### *property* PipePressure.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Name"></a>

### *property* PipePressure.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.NumberOfSegments"></a>

### *property* PipePressure.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.ObjectId"></a>

### *property* PipePressure.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.ObjectState"></a>

### *property* PipePressure.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.ObjectTags"></a>

### *property* PipePressure.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Parent"></a>

### *property* PipePressure.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.PhaseAngle"></a>

### *property* PipePressure.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Properties"></a>

### *property* PipePressure.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.RangeMaximum"></a>

### *property* PipePressure.RangeMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.RangeMinimum"></a>

### *property* PipePressure.RangeMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.ReadOnly"></a>

### *property* PipePressure.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.SharedRefBody"></a>

### *property* PipePressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.State"></a>

### *property* PipePressure.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Suppressed"></a>

### *property* PipePressure.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.TransferableObjectId"></a>

### *property* PipePressure.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.VisibleProperties"></a>

### *property* PipePressure.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.XYZFunctionCoordinateSystem"></a>

### *property* PipePressure.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PipePressure.Activate"></a>

### PipePressure.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.AddComment"></a>

### PipePressure.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.AddFigure"></a>

### PipePressure.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.AddImage"></a>

### PipePressure.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Copy"></a>

### PipePressure.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.CopyTo"></a>

### PipePressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.CreateObjRef"></a>

### PipePressure.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.CreateParameter"></a>

### PipePressure.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Cut"></a>

### PipePressure.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Delete"></a>

### PipePressure.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Duplicate"></a>

### PipePressure.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Equals"></a>

### PipePressure.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetAPIName"></a>

### PipePressure.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetActivateAtLoadStep"></a>

### PipePressure.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the pipe pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetAllProperties"></a>

### PipePressure.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetChildren"></a>

### PipePressure.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PipePressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetComponentActivateAtLoadStep"></a>

### PipePressure.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetDetailsView"></a>

### PipePressure.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetEnumName"></a>

### PipePressure.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetHashCode"></a>

### PipePressure.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetIconFile"></a>

### PipePressure.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetLifetimeService"></a>

### PipePressure.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetObjectData"></a>

### PipePressure.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetParameter"></a>

### PipePressure.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetPath"></a>

### PipePressure.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetPropertyName"></a>

### PipePressure.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetPropertyValue"></a>

### PipePressure.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetQuantityName"></a>

### PipePressure.GetQuantityName() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetVisibleProperties"></a>

### PipePressure.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetVisiblePropertyNames"></a>

### PipePressure.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GroupAllSimilarChildren"></a>

### PipePressure.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GroupSimilarObjects"></a>

### PipePressure.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.InitializeLifetimeService"></a>

### PipePressure.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.IsPropertyEditable"></a>

### PipePressure.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PipePressure.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.IsPropertyVisible"></a>

### PipePressure.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PipePressure.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Paste"></a>

### PipePressure.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.PromoteToNamedSelection"></a>

### PipePressure.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.PropertyByAPIName"></a>

### PipePressure.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.PropertyById"></a>

### PipePressure.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.PropertyByName"></a>

### PipePressure.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.RemoveFromGroup"></a>

### PipePressure.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.RemoveParameter"></a>

### PipePressure.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.SetActivateAtLoadStep"></a>

### PipePressure.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the pipe pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.SetComponentActivateAtLoadStep"></a>

### PipePressure.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

