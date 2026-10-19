# `Temperature`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Temperature"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Temperature(internalObject: Any)

<a id="Temperature"></a>

### *class* Temperature(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Temperature.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Temperature.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Temperature.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Temperature.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Temperature.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Temperature.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Temperature.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Temperature.CreateParameter)                     | CreateParameter method.                                                                     |
| [`Cut`](#Temperature.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Temperature.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Temperature.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Temperature.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#Temperature.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#Temperature.GetActivateAtLoadStep)         | Gets whether the temperature is active at the specified load step.                          |
| [`GetAllProperties`](#Temperature.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Temperature.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Temperature.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Temperature.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Temperature.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Temperature.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Temperature.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Temperature.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Temperature.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Temperature.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Temperature.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Temperature.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Temperature.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Temperature.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Temperature.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Temperature.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Temperature.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Temperature.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Temperature.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Temperature.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#Temperature.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#Temperature.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Temperature.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Temperature.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Temperature.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Temperature.RemoveParameter)                     | RemoveParameter method.                                                                     |
| [`SetActivateAtLoadStep`](#Temperature.SetActivateAtLoadStep)         | Sets whether the temperature is active at the specified load step.                          |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ApplyToEntireBody`](#Temperature.ApplyToEntireBody)                     | Gets or sets the ApplyToEntireBody.                           |
| [`AttachedRefs`](#Temperature.AttachedRefs)                               | AttachedRefs property.                                        |
| [`Children`](#Temperature.Children)                                       | Gets the list of children.                                    |
| [`ClsId`](#Temperature.ClsId)                                             | ClsId property.                                               |
| [`Comments`](#Temperature.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Temperature.DataModelObjectCategory)         | Gets the current DataModelObject's category.                  |
| [`DefineBy`](#Temperature.DefineBy)                                       | Gets the DefineBy.                                            |
| [`Figures`](#Temperature.Figures)                                         | Gets the list of associated figures.                          |
| [`GraphControlsXAxis`](#Temperature.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                          |
| [`GroupingFolder`](#Temperature.GroupingFolder)                           | GroupingFolder property.                                      |
| [`IconName`](#Temperature.IconName)                                       | IconName property.                                            |
| [`Images`](#Temperature.Images)                                           | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#Temperature.ImportableObjectSourceId)       | ImportableObjectSourceId property.                            |
| [`IndependentVariable`](#Temperature.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#Temperature.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`Location`](#Temperature.Location)                                       | Gets or sets the Location.                                    |
| [`Magnitude`](#Temperature.Magnitude)                                     | Gets or sets the Magnitude.                                   |
| [`Name`](#Temperature.Name)                                               | Name property.                                                |
| [`NumberOfSegments`](#Temperature.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`ObjectId`](#Temperature.ObjectId)                                       | ObjectId property.                                            |
| [`ObjectState`](#Temperature.ObjectState)                                 | ObjectState property.                                         |
| [`ObjectTags`](#Temperature.ObjectTags)                                   | ObjectTags property.                                          |
| [`Parent`](#Temperature.Parent)                                           | Parent property.                                              |
| [`Properties`](#Temperature.Properties)                                   | Gets the list of properties for this object.                  |
| [`RangeMaximum`](#Temperature.RangeMaximum)                               | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#Temperature.RangeMinimum)                               | Gets or sets the RangeMinimum.                                |
| [`ReadOnly`](#Temperature.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#Temperature.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`ShellFace`](#Temperature.ShellFace)                                     | Gets or sets the ShellFace.                                   |
| [`State`](#Temperature.State)                                             | State property.                                               |
| [`Suppressed`](#Temperature.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`TableAssignment`](#Temperature.TableAssignment)                         | Gets or sets the TableAssignment.                             |
| [`TransferableObjectId`](#Temperature.TransferableObjectId)               | TransferableObjectId property.                                |
| [`VisibleProperties`](#Temperature.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XYZFunctionCoordinateSystem`](#Temperature.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |

<a id="property-detail"></a>

## Property detail

<a id="Temperature.ApplyToEntireBody"></a>

### *property* Temperature.ApplyToEntireBody *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ApplyToEntireBody.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.AttachedRefs"></a>

### *property* Temperature.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Children"></a>

### *property* Temperature.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.ClsId"></a>

### *property* Temperature.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Comments"></a>

### *property* Temperature.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.DataModelObjectCategory"></a>

### *property* Temperature.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.DefineBy"></a>

### *property* Temperature.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Figures"></a>

### *property* Temperature.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GraphControlsXAxis"></a>

### *property* Temperature.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GroupingFolder"></a>

### *property* Temperature.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.IconName"></a>

### *property* Temperature.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Images"></a>

### *property* Temperature.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.ImportableObjectSourceId"></a>

### *property* Temperature.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.IndependentVariable"></a>

### *property* Temperature.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.InternalObject"></a>

### *property* Temperature.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Location"></a>

### *property* Temperature.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Magnitude"></a>

### *property* Temperature.Magnitude *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Name"></a>

### *property* Temperature.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.NumberOfSegments"></a>

### *property* Temperature.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.ObjectId"></a>

### *property* Temperature.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.ObjectState"></a>

### *property* Temperature.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.ObjectTags"></a>

### *property* Temperature.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Parent"></a>

### *property* Temperature.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Properties"></a>

### *property* Temperature.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.RangeMaximum"></a>

### *property* Temperature.RangeMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.RangeMinimum"></a>

### *property* Temperature.RangeMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.ReadOnly"></a>

### *property* Temperature.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.SharedRefBody"></a>

### *property* Temperature.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.ShellFace"></a>

### *property* Temperature.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShellFace.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.State"></a>

### *property* Temperature.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Suppressed"></a>

### *property* Temperature.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.TableAssignment"></a>

### *property* Temperature.TableAssignment *: [Ansys.ACT.Automation.Mechanical.Table](../Table.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Table) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TableAssignment.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.TransferableObjectId"></a>

### *property* Temperature.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.VisibleProperties"></a>

### *property* Temperature.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.XYZFunctionCoordinateSystem"></a>

### *property* Temperature.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Temperature.Activate"></a>

### Temperature.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.AddComment"></a>

### Temperature.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.AddFigure"></a>

### Temperature.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.AddImage"></a>

### Temperature.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Copy"></a>

### Temperature.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.CopyTo"></a>

### Temperature.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.CreateObjRef"></a>

### Temperature.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.CreateParameter"></a>

### Temperature.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Cut"></a>

### Temperature.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Delete"></a>

### Temperature.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Duplicate"></a>

### Temperature.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Equals"></a>

### Temperature.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetAPIName"></a>

### Temperature.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetActivateAtLoadStep"></a>

### Temperature.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the temperature is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetAllProperties"></a>

### Temperature.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetChildren"></a>

### Temperature.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Temperature.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetDetailsView"></a>

### Temperature.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetEnumName"></a>

### Temperature.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetHashCode"></a>

### Temperature.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetIconFile"></a>

### Temperature.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetLifetimeService"></a>

### Temperature.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetObjectData"></a>

### Temperature.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetParameter"></a>

### Temperature.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetPath"></a>

### Temperature.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetPropertyName"></a>

### Temperature.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetPropertyValue"></a>

### Temperature.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetVisibleProperties"></a>

### Temperature.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetVisiblePropertyNames"></a>

### Temperature.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GroupAllSimilarChildren"></a>

### Temperature.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GroupSimilarObjects"></a>

### Temperature.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.InitializeLifetimeService"></a>

### Temperature.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.IsPropertyEditable"></a>

### Temperature.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Temperature.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.IsPropertyVisible"></a>

### Temperature.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Temperature.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Paste"></a>

### Temperature.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.PromoteToNamedSelection"></a>

### Temperature.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.PropertyByAPIName"></a>

### Temperature.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Temperature.PropertyById"></a>

### Temperature.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.PropertyByName"></a>

### Temperature.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.RemoveFromGroup"></a>

### Temperature.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.RemoveParameter"></a>

### Temperature.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

RemoveParameter method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.SetActivateAtLoadStep"></a>

### Temperature.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the temperature is active at the specified load step.

<!-- !! processed by numpydoc !! -->

