# `PipeTemperature`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PipeTemperature"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.PipeTemperature(internalObject: Any)

<a id="PipeTemperature"></a>

### *class* PipeTemperature(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PipeTemperature.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PipeTemperature.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#PipeTemperature.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#PipeTemperature.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#PipeTemperature.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#PipeTemperature.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PipeTemperature.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PipeTemperature.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PipeTemperature.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PipeTemperature.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PipeTemperature.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#PipeTemperature.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PipeTemperature.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#PipeTemperature.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#PipeTemperature.GetActivateAtLoadStep)         | Gets whether the pipe temperature is active at the specified load step.                     |
| [`GetAllProperties`](#PipeTemperature.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#PipeTemperature.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PipeTemperature.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PipeTemperature.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PipeTemperature.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PipeTemperature.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PipeTemperature.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PipeTemperature.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PipeTemperature.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PipeTemperature.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PipeTemperature.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PipeTemperature.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PipeTemperature.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PipeTemperature.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PipeTemperature.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PipeTemperature.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PipeTemperature.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PipeTemperature.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PipeTemperature.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PipeTemperature.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#PipeTemperature.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#PipeTemperature.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PipeTemperature.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PipeTemperature.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PipeTemperature.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PipeTemperature.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#PipeTemperature.SetActivateAtLoadStep)         | Sets whether the pipe temperature is active at the specified load step.                     |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#PipeTemperature.AttachedRefs)                               | AttachedRefs property.                                        |
| [`Children`](#PipeTemperature.Children)                                       | Gets the list of children.                                    |
| [`ClsId`](#PipeTemperature.ClsId)                                             | ClsId property.                                               |
| [`Comments`](#PipeTemperature.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PipeTemperature.DataModelObjectCategory)         | Gets the current DataModelObject's category.                  |
| [`Figures`](#PipeTemperature.Figures)                                         | Gets the list of associated figures.                          |
| [`GraphControlsXAxis`](#PipeTemperature.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                          |
| [`GroupingFolder`](#PipeTemperature.GroupingFolder)                           | GroupingFolder property.                                      |
| [`IconName`](#PipeTemperature.IconName)                                       | IconName property.                                            |
| [`Images`](#PipeTemperature.Images)                                           | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#PipeTemperature.ImportableObjectSourceId)       | ImportableObjectSourceId property.                            |
| [`IndependentVariable`](#PipeTemperature.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#PipeTemperature.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`Loading`](#PipeTemperature.Loading)                                         | Gets or sets the Loading.                                     |
| [`Location`](#PipeTemperature.Location)                                       | Gets or sets the Location.                                    |
| [`Magnitude`](#PipeTemperature.Magnitude)                                     | Gets the Magnitude.                                           |
| [`Name`](#PipeTemperature.Name)                                               | Name property.                                                |
| [`NumberOfSegments`](#PipeTemperature.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`ObjectId`](#PipeTemperature.ObjectId)                                       | ObjectId property.                                            |
| [`ObjectState`](#PipeTemperature.ObjectState)                                 | ObjectState property.                                         |
| [`ObjectTags`](#PipeTemperature.ObjectTags)                                   | ObjectTags property.                                          |
| [`Parent`](#PipeTemperature.Parent)                                           | Parent property.                                              |
| [`Properties`](#PipeTemperature.Properties)                                   | Gets the list of properties for this object.                  |
| [`RangeMaximum`](#PipeTemperature.RangeMaximum)                               | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#PipeTemperature.RangeMinimum)                               | Gets or sets the RangeMinimum.                                |
| [`ReadOnly`](#PipeTemperature.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#PipeTemperature.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`State`](#PipeTemperature.State)                                             | State property.                                               |
| [`Suppressed`](#PipeTemperature.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#PipeTemperature.TransferableObjectId)               | TransferableObjectId property.                                |
| [`VisibleProperties`](#PipeTemperature.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XYZFunctionCoordinateSystem`](#PipeTemperature.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |

<a id="property-detail"></a>

## Property detail

<a id="PipeTemperature.AttachedRefs"></a>

### *property* PipeTemperature.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Children"></a>

### *property* PipeTemperature.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.ClsId"></a>

### *property* PipeTemperature.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Comments"></a>

### *property* PipeTemperature.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.DataModelObjectCategory"></a>

### *property* PipeTemperature.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Figures"></a>

### *property* PipeTemperature.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GraphControlsXAxis"></a>

### *property* PipeTemperature.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GroupingFolder"></a>

### *property* PipeTemperature.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.IconName"></a>

### *property* PipeTemperature.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Images"></a>

### *property* PipeTemperature.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.ImportableObjectSourceId"></a>

### *property* PipeTemperature.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.IndependentVariable"></a>

### *property* PipeTemperature.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.InternalObject"></a>

### *property* PipeTemperature.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Loading"></a>

### *property* PipeTemperature.Loading *: [Ansys.Mechanical.DataModel.Enums.PipeLoadingType](../../../../Mechanical/DataModel/Enums/PipeLoadingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PipeLoadingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Loading.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Location"></a>

### *property* PipeTemperature.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Magnitude"></a>

### *property* PipeTemperature.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Name"></a>

### *property* PipeTemperature.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.NumberOfSegments"></a>

### *property* PipeTemperature.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.ObjectId"></a>

### *property* PipeTemperature.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.ObjectState"></a>

### *property* PipeTemperature.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.ObjectTags"></a>

### *property* PipeTemperature.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Parent"></a>

### *property* PipeTemperature.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Properties"></a>

### *property* PipeTemperature.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.RangeMaximum"></a>

### *property* PipeTemperature.RangeMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.RangeMinimum"></a>

### *property* PipeTemperature.RangeMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.ReadOnly"></a>

### *property* PipeTemperature.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.SharedRefBody"></a>

### *property* PipeTemperature.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.State"></a>

### *property* PipeTemperature.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Suppressed"></a>

### *property* PipeTemperature.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.TransferableObjectId"></a>

### *property* PipeTemperature.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.VisibleProperties"></a>

### *property* PipeTemperature.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.XYZFunctionCoordinateSystem"></a>

### *property* PipeTemperature.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PipeTemperature.Activate"></a>

### PipeTemperature.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.AddComment"></a>

### PipeTemperature.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.AddFigure"></a>

### PipeTemperature.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.AddImage"></a>

### PipeTemperature.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Copy"></a>

### PipeTemperature.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.CopyTo"></a>

### PipeTemperature.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.CreateObjRef"></a>

### PipeTemperature.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.CreateParameter"></a>

### PipeTemperature.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Cut"></a>

### PipeTemperature.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Delete"></a>

### PipeTemperature.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Duplicate"></a>

### PipeTemperature.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Equals"></a>

### PipeTemperature.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetAPIName"></a>

### PipeTemperature.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetActivateAtLoadStep"></a>

### PipeTemperature.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the pipe temperature is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetAllProperties"></a>

### PipeTemperature.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetChildren"></a>

### PipeTemperature.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PipeTemperature.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetDetailsView"></a>

### PipeTemperature.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetEnumName"></a>

### PipeTemperature.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetHashCode"></a>

### PipeTemperature.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetIconFile"></a>

### PipeTemperature.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetLifetimeService"></a>

### PipeTemperature.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetObjectData"></a>

### PipeTemperature.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetParameter"></a>

### PipeTemperature.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetPath"></a>

### PipeTemperature.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetPropertyName"></a>

### PipeTemperature.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetPropertyValue"></a>

### PipeTemperature.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetVisibleProperties"></a>

### PipeTemperature.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetVisiblePropertyNames"></a>

### PipeTemperature.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GroupAllSimilarChildren"></a>

### PipeTemperature.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GroupSimilarObjects"></a>

### PipeTemperature.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.InitializeLifetimeService"></a>

### PipeTemperature.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.IsPropertyEditable"></a>

### PipeTemperature.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PipeTemperature.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.IsPropertyVisible"></a>

### PipeTemperature.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PipeTemperature.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Paste"></a>

### PipeTemperature.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.PromoteToNamedSelection"></a>

### PipeTemperature.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.PropertyByAPIName"></a>

### PipeTemperature.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.PropertyById"></a>

### PipeTemperature.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.PropertyByName"></a>

### PipeTemperature.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.RemoveFromGroup"></a>

### PipeTemperature.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.RemoveParameter"></a>

### PipeTemperature.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.SetActivateAtLoadStep"></a>

### PipeTemperature.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the pipe temperature is active at the specified load step.

<!-- !! processed by numpydoc !! -->

