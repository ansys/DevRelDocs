# `HeatFlux`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.HeatFlux"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.HeatFlux(internalObject: Any)

<a id="HeatFlux"></a>

### *class* HeatFlux(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a HeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#HeatFlux.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#HeatFlux.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#HeatFlux.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#HeatFlux.AddImage)                                             | Creates a new child Image.                                                                  |
| [`Copy`](#HeatFlux.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#HeatFlux.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#HeatFlux.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#HeatFlux.CreateParameter)                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#HeatFlux.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#HeatFlux.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#HeatFlux.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#HeatFlux.Equals)                                                 | Equals method.                                                                              |
| [`GetAPIName`](#HeatFlux.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#HeatFlux.GetActivateAtLoadStep)                   | Gets whether the heat flux is active at the specified load step.                            |
| [`GetAllProperties`](#HeatFlux.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#HeatFlux.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetComponentActivateAtLoadStep`](#HeatFlux.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                                      |
| [`GetDetailsView`](#HeatFlux.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#HeatFlux.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#HeatFlux.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#HeatFlux.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#HeatFlux.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#HeatFlux.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#HeatFlux.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#HeatFlux.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#HeatFlux.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#HeatFlux.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#HeatFlux.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#HeatFlux.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#HeatFlux.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#HeatFlux.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#HeatFlux.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#HeatFlux.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#HeatFlux.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#HeatFlux.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#HeatFlux.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#HeatFlux.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#HeatFlux.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#HeatFlux.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#HeatFlux.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#HeatFlux.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#HeatFlux.SetActivateAtLoadStep)                   | Sets whether the heat flux is active at the specified load step.                            |
| [`SetComponentActivateAtLoadStep`](#HeatFlux.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                                      |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#HeatFlux.AttachedRefs)                               | AttachedRefs property.                                        |
| [`Children`](#HeatFlux.Children)                                       | Gets the list of children.                                    |
| [`ClsId`](#HeatFlux.ClsId)                                             | ClsId property.                                               |
| [`Comments`](#HeatFlux.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#HeatFlux.DataModelObjectCategory)         | Gets the current DataModelObject's category.                  |
| [`Figures`](#HeatFlux.Figures)                                         | Gets the list of associated figures.                          |
| [`GraphControlsXAxis`](#HeatFlux.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                          |
| [`GroupingFolder`](#HeatFlux.GroupingFolder)                           | GroupingFolder property.                                      |
| [`IconName`](#HeatFlux.IconName)                                       | IconName property.                                            |
| [`Images`](#HeatFlux.Images)                                           | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#HeatFlux.ImportableObjectSourceId)       | ImportableObjectSourceId property.                            |
| [`IndependentVariable`](#HeatFlux.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#HeatFlux.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`Location`](#HeatFlux.Location)                                       | Gets or sets the Location.                                    |
| [`Magnitude`](#HeatFlux.Magnitude)                                     | Gets the Magnitude.                                           |
| [`Name`](#HeatFlux.Name)                                               | Name property.                                                |
| [`NumberOfSegments`](#HeatFlux.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`ObjectId`](#HeatFlux.ObjectId)                                       | ObjectId property.                                            |
| [`ObjectState`](#HeatFlux.ObjectState)                                 | ObjectState property.                                         |
| [`ObjectTags`](#HeatFlux.ObjectTags)                                   | ObjectTags property.                                          |
| [`Parent`](#HeatFlux.Parent)                                           | Parent property.                                              |
| [`Properties`](#HeatFlux.Properties)                                   | Gets the list of properties for this object.                  |
| [`ReadOnly`](#HeatFlux.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#HeatFlux.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`State`](#HeatFlux.State)                                             | State property.                                               |
| [`Suppressed`](#HeatFlux.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`TableAssignment`](#HeatFlux.TableAssignment)                         | Gets or sets the TableAssignment.                             |
| [`TransferableObjectId`](#HeatFlux.TransferableObjectId)               | TransferableObjectId property.                                |
| [`VisibleProperties`](#HeatFlux.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XYZFunctionCoordinateSystem`](#HeatFlux.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |

<a id="property-detail"></a>

## Property detail

<a id="HeatFlux.AttachedRefs"></a>

### *property* HeatFlux.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Children"></a>

### *property* HeatFlux.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.ClsId"></a>

### *property* HeatFlux.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Comments"></a>

### *property* HeatFlux.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.DataModelObjectCategory"></a>

### *property* HeatFlux.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Figures"></a>

### *property* HeatFlux.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GraphControlsXAxis"></a>

### *property* HeatFlux.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GroupingFolder"></a>

### *property* HeatFlux.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.IconName"></a>

### *property* HeatFlux.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Images"></a>

### *property* HeatFlux.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.ImportableObjectSourceId"></a>

### *property* HeatFlux.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.IndependentVariable"></a>

### *property* HeatFlux.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.InternalObject"></a>

### *property* HeatFlux.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Location"></a>

### *property* HeatFlux.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Magnitude"></a>

### *property* HeatFlux.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Name"></a>

### *property* HeatFlux.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.NumberOfSegments"></a>

### *property* HeatFlux.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.ObjectId"></a>

### *property* HeatFlux.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.ObjectState"></a>

### *property* HeatFlux.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.ObjectTags"></a>

### *property* HeatFlux.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Parent"></a>

### *property* HeatFlux.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Properties"></a>

### *property* HeatFlux.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.ReadOnly"></a>

### *property* HeatFlux.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.SharedRefBody"></a>

### *property* HeatFlux.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.State"></a>

### *property* HeatFlux.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Suppressed"></a>

### *property* HeatFlux.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.TableAssignment"></a>

### *property* HeatFlux.TableAssignment *: [Ansys.ACT.Automation.Mechanical.Table](../Table.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Table) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TableAssignment.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.TransferableObjectId"></a>

### *property* HeatFlux.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.VisibleProperties"></a>

### *property* HeatFlux.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.XYZFunctionCoordinateSystem"></a>

### *property* HeatFlux.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="HeatFlux.Activate"></a>

### HeatFlux.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.AddComment"></a>

### HeatFlux.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.AddFigure"></a>

### HeatFlux.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.AddImage"></a>

### HeatFlux.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Copy"></a>

### HeatFlux.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.CopyTo"></a>

### HeatFlux.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.CreateObjRef"></a>

### HeatFlux.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.CreateParameter"></a>

### HeatFlux.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Cut"></a>

### HeatFlux.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Delete"></a>

### HeatFlux.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Duplicate"></a>

### HeatFlux.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Equals"></a>

### HeatFlux.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetAPIName"></a>

### HeatFlux.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetActivateAtLoadStep"></a>

### HeatFlux.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the heat flux is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetAllProperties"></a>

### HeatFlux.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetChildren"></a>

### HeatFlux.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### HeatFlux.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetComponentActivateAtLoadStep"></a>

### HeatFlux.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetDetailsView"></a>

### HeatFlux.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetEnumName"></a>

### HeatFlux.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetHashCode"></a>

### HeatFlux.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetIconFile"></a>

### HeatFlux.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetLifetimeService"></a>

### HeatFlux.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetObjectData"></a>

### HeatFlux.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetParameter"></a>

### HeatFlux.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetPath"></a>

### HeatFlux.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetPropertyName"></a>

### HeatFlux.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetPropertyValue"></a>

### HeatFlux.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetVisibleProperties"></a>

### HeatFlux.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetVisiblePropertyNames"></a>

### HeatFlux.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GroupAllSimilarChildren"></a>

### HeatFlux.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GroupSimilarObjects"></a>

### HeatFlux.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.InitializeLifetimeService"></a>

### HeatFlux.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.IsPropertyEditable"></a>

### HeatFlux.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### HeatFlux.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.IsPropertyVisible"></a>

### HeatFlux.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### HeatFlux.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Paste"></a>

### HeatFlux.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.PromoteToNamedSelection"></a>

### HeatFlux.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.PropertyByAPIName"></a>

### HeatFlux.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.PropertyById"></a>

### HeatFlux.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.PropertyByName"></a>

### HeatFlux.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.RemoveFromGroup"></a>

### HeatFlux.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.RemoveParameter"></a>

### HeatFlux.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.SetActivateAtLoadStep"></a>

### HeatFlux.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the heat flux is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.SetComponentActivateAtLoadStep"></a>

### HeatFlux.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

