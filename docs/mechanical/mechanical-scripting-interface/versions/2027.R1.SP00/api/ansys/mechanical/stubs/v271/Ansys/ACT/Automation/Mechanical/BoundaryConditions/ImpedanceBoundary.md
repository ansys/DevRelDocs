# `ImpedanceBoundary`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ImpedanceBoundary"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ImpedanceBoundary(internalObject: Any)

<a id="ImpedanceBoundary"></a>

### *class* ImpedanceBoundary(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ImpedanceBoundary.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ImpedanceBoundary.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ImpedanceBoundary.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ImpedanceBoundary.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ImpedanceBoundary.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ImpedanceBoundary.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ImpedanceBoundary.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ImpedanceBoundary.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ImpedanceBoundary.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ImpedanceBoundary.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ImpedanceBoundary.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ImpedanceBoundary.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ImpedanceBoundary.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ImpedanceBoundary.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ImpedanceBoundary.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ImpedanceBoundary.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ImpedanceBoundary.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ImpedanceBoundary.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ImpedanceBoundary.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ImpedanceBoundary.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ImpedanceBoundary.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ImpedanceBoundary.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ImpedanceBoundary.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ImpedanceBoundary.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ImpedanceBoundary.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ImpedanceBoundary.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ImpedanceBoundary.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ImpedanceBoundary.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ImpedanceBoundary.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ImpedanceBoundary.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ImpedanceBoundary.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ImpedanceBoundary.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ImpedanceBoundary.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ImpedanceBoundary.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#ImpedanceBoundary.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#ImpedanceBoundary.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ImpedanceBoundary.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ImpedanceBoundary.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ImpedanceBoundary.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ImpedanceBoundary.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ImpedanceBoundary.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#ImpedanceBoundary.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#ImpedanceBoundary.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#ImpedanceBoundary.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ImpedanceBoundary.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#ImpedanceBoundary.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ImpedanceBoundary.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#ImpedanceBoundary.IconName)                                 | IconName property.                                            |
| [`Images`](#ImpedanceBoundary.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#ImpedanceBoundary.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#ImpedanceBoundary.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#ImpedanceBoundary.Location)                                 | Gets or sets the Location.                                    |
| [`MaterialImpedance`](#ImpedanceBoundary.MaterialImpedance)               | Gets or sets the MaterialImpedance.                           |
| [`Name`](#ImpedanceBoundary.Name)                                         | Name property.                                                |
| [`ObjectId`](#ImpedanceBoundary.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#ImpedanceBoundary.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#ImpedanceBoundary.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#ImpedanceBoundary.Parent)                                     | Parent property.                                              |
| [`Properties`](#ImpedanceBoundary.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ImpedanceBoundary.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`ReferencePressure`](#ImpedanceBoundary.ReferencePressure)               | Gets or sets the ReferencePressure.                           |
| [`ReferenceVelocity`](#ImpedanceBoundary.ReferenceVelocity)               | Gets or sets the ReferenceVelocity.                           |
| [`SharedRefBody`](#ImpedanceBoundary.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#ImpedanceBoundary.State)                                       | State property.                                               |
| [`Suppressed`](#ImpedanceBoundary.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#ImpedanceBoundary.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#ImpedanceBoundary.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImpedanceBoundary.AttachedRefs"></a>

### *property* ImpedanceBoundary.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Children"></a>

### *property* ImpedanceBoundary.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.ClsId"></a>

### *property* ImpedanceBoundary.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Comments"></a>

### *property* ImpedanceBoundary.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.DataModelObjectCategory"></a>

### *property* ImpedanceBoundary.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Figures"></a>

### *property* ImpedanceBoundary.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GroupingFolder"></a>

### *property* ImpedanceBoundary.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.IconName"></a>

### *property* ImpedanceBoundary.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Images"></a>

### *property* ImpedanceBoundary.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.ImportableObjectSourceId"></a>

### *property* ImpedanceBoundary.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.InternalObject"></a>

### *property* ImpedanceBoundary.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Location"></a>

### *property* ImpedanceBoundary.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.MaterialImpedance"></a>

### *property* ImpedanceBoundary.MaterialImpedance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaterialImpedance.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Name"></a>

### *property* ImpedanceBoundary.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.ObjectId"></a>

### *property* ImpedanceBoundary.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.ObjectState"></a>

### *property* ImpedanceBoundary.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.ObjectTags"></a>

### *property* ImpedanceBoundary.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Parent"></a>

### *property* ImpedanceBoundary.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Properties"></a>

### *property* ImpedanceBoundary.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.ReadOnly"></a>

### *property* ImpedanceBoundary.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.ReferencePressure"></a>

### *property* ImpedanceBoundary.ReferencePressure *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferencePressure.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.ReferenceVelocity"></a>

### *property* ImpedanceBoundary.ReferenceVelocity *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceVelocity.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.SharedRefBody"></a>

### *property* ImpedanceBoundary.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.State"></a>

### *property* ImpedanceBoundary.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Suppressed"></a>

### *property* ImpedanceBoundary.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.TransferableObjectId"></a>

### *property* ImpedanceBoundary.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.VisibleProperties"></a>

### *property* ImpedanceBoundary.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImpedanceBoundary.Activate"></a>

### ImpedanceBoundary.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.AddComment"></a>

### ImpedanceBoundary.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.AddFigure"></a>

### ImpedanceBoundary.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.AddImage"></a>

### ImpedanceBoundary.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Copy"></a>

### ImpedanceBoundary.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.CopyTo"></a>

### ImpedanceBoundary.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.CreateObjRef"></a>

### ImpedanceBoundary.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.CreateParameter"></a>

### ImpedanceBoundary.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Cut"></a>

### ImpedanceBoundary.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Delete"></a>

### ImpedanceBoundary.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Duplicate"></a>

### ImpedanceBoundary.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Equals"></a>

### ImpedanceBoundary.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetAPIName"></a>

### ImpedanceBoundary.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetAllProperties"></a>

### ImpedanceBoundary.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetChildren"></a>

### ImpedanceBoundary.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ImpedanceBoundary.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetDetailsView"></a>

### ImpedanceBoundary.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetEnumName"></a>

### ImpedanceBoundary.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetHashCode"></a>

### ImpedanceBoundary.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetIconFile"></a>

### ImpedanceBoundary.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetLifetimeService"></a>

### ImpedanceBoundary.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetObjectData"></a>

### ImpedanceBoundary.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetParameter"></a>

### ImpedanceBoundary.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetPath"></a>

### ImpedanceBoundary.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetPropertyName"></a>

### ImpedanceBoundary.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetPropertyValue"></a>

### ImpedanceBoundary.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetVisibleProperties"></a>

### ImpedanceBoundary.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetVisiblePropertyNames"></a>

### ImpedanceBoundary.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GroupAllSimilarChildren"></a>

### ImpedanceBoundary.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GroupSimilarObjects"></a>

### ImpedanceBoundary.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.InitializeLifetimeService"></a>

### ImpedanceBoundary.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.IsPropertyEditable"></a>

### ImpedanceBoundary.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImpedanceBoundary.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.IsPropertyVisible"></a>

### ImpedanceBoundary.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImpedanceBoundary.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Paste"></a>

### ImpedanceBoundary.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.PromoteToNamedSelection"></a>

### ImpedanceBoundary.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.PropertyByAPIName"></a>

### ImpedanceBoundary.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.PropertyById"></a>

### ImpedanceBoundary.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.PropertyByName"></a>

### ImpedanceBoundary.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.RemoveFromGroup"></a>

### ImpedanceBoundary.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.RemoveParameter"></a>

### ImpedanceBoundary.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

