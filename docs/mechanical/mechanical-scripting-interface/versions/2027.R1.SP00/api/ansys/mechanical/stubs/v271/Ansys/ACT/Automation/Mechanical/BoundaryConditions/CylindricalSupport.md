# `CylindricalSupport`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.CylindricalSupport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.CylindricalSupport(internalObject: Any)

<a id="CylindricalSupport"></a>

### *class* CylindricalSupport(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CylindricalSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CylindricalSupport.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#CylindricalSupport.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#CylindricalSupport.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#CylindricalSupport.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#CylindricalSupport.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CylindricalSupport.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CylindricalSupport.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CylindricalSupport.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CylindricalSupport.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CylindricalSupport.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#CylindricalSupport.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CylindricalSupport.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#CylindricalSupport.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CylindricalSupport.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#CylindricalSupport.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CylindricalSupport.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CylindricalSupport.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#CylindricalSupport.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#CylindricalSupport.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CylindricalSupport.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CylindricalSupport.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#CylindricalSupport.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CylindricalSupport.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#CylindricalSupport.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CylindricalSupport.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CylindricalSupport.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CylindricalSupport.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CylindricalSupport.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CylindricalSupport.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CylindricalSupport.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CylindricalSupport.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CylindricalSupport.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#CylindricalSupport.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#CylindricalSupport.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#CylindricalSupport.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#CylindricalSupport.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#CylindricalSupport.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CylindricalSupport.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CylindricalSupport.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#CylindricalSupport.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Axial`](#CylindricalSupport.Axial)                                       | Gets or sets the Axial.                                       |
| [`Children`](#CylindricalSupport.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#CylindricalSupport.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#CylindricalSupport.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CylindricalSupport.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#CylindricalSupport.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#CylindricalSupport.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#CylindricalSupport.IconName)                                 | IconName property.                                            |
| [`Images`](#CylindricalSupport.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#CylindricalSupport.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#CylindricalSupport.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#CylindricalSupport.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#CylindricalSupport.Name)                                         | Name property.                                                |
| [`ObjectId`](#CylindricalSupport.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#CylindricalSupport.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#CylindricalSupport.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#CylindricalSupport.Parent)                                     | Parent property.                                              |
| [`Properties`](#CylindricalSupport.Properties)                             | Gets the list of properties for this object.                  |
| [`Radial`](#CylindricalSupport.Radial)                                     | Gets or sets the Radial.                                      |
| [`ReadOnly`](#CylindricalSupport.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#CylindricalSupport.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#CylindricalSupport.State)                                       | State property.                                               |
| [`Suppressed`](#CylindricalSupport.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`Tangential`](#CylindricalSupport.Tangential)                             | Gets or sets the Tangential.                                  |
| [`TransferableObjectId`](#CylindricalSupport.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#CylindricalSupport.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CylindricalSupport.AttachedRefs"></a>

### *property* CylindricalSupport.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Axial"></a>

### *property* CylindricalSupport.Axial *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Axial.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Children"></a>

### *property* CylindricalSupport.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.ClsId"></a>

### *property* CylindricalSupport.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Comments"></a>

### *property* CylindricalSupport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.DataModelObjectCategory"></a>

### *property* CylindricalSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Figures"></a>

### *property* CylindricalSupport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GroupingFolder"></a>

### *property* CylindricalSupport.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.IconName"></a>

### *property* CylindricalSupport.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Images"></a>

### *property* CylindricalSupport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.ImportableObjectSourceId"></a>

### *property* CylindricalSupport.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.InternalObject"></a>

### *property* CylindricalSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Location"></a>

### *property* CylindricalSupport.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Name"></a>

### *property* CylindricalSupport.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.ObjectId"></a>

### *property* CylindricalSupport.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.ObjectState"></a>

### *property* CylindricalSupport.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.ObjectTags"></a>

### *property* CylindricalSupport.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Parent"></a>

### *property* CylindricalSupport.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Properties"></a>

### *property* CylindricalSupport.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Radial"></a>

### *property* CylindricalSupport.Radial *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Radial.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.ReadOnly"></a>

### *property* CylindricalSupport.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.SharedRefBody"></a>

### *property* CylindricalSupport.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.State"></a>

### *property* CylindricalSupport.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Suppressed"></a>

### *property* CylindricalSupport.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Tangential"></a>

### *property* CylindricalSupport.Tangential *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Tangential.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.TransferableObjectId"></a>

### *property* CylindricalSupport.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.VisibleProperties"></a>

### *property* CylindricalSupport.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CylindricalSupport.Activate"></a>

### CylindricalSupport.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.AddComment"></a>

### CylindricalSupport.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.AddFigure"></a>

### CylindricalSupport.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.AddImage"></a>

### CylindricalSupport.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Copy"></a>

### CylindricalSupport.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.CopyTo"></a>

### CylindricalSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.CreateObjRef"></a>

### CylindricalSupport.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.CreateParameter"></a>

### CylindricalSupport.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Cut"></a>

### CylindricalSupport.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Delete"></a>

### CylindricalSupport.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Duplicate"></a>

### CylindricalSupport.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Equals"></a>

### CylindricalSupport.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetAPIName"></a>

### CylindricalSupport.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetAllProperties"></a>

### CylindricalSupport.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetChildren"></a>

### CylindricalSupport.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CylindricalSupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetDetailsView"></a>

### CylindricalSupport.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetEnumName"></a>

### CylindricalSupport.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetHashCode"></a>

### CylindricalSupport.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetIconFile"></a>

### CylindricalSupport.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetLifetimeService"></a>

### CylindricalSupport.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetObjectData"></a>

### CylindricalSupport.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetParameter"></a>

### CylindricalSupport.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetPath"></a>

### CylindricalSupport.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetPropertyName"></a>

### CylindricalSupport.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetPropertyValue"></a>

### CylindricalSupport.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetVisibleProperties"></a>

### CylindricalSupport.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetVisiblePropertyNames"></a>

### CylindricalSupport.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GroupAllSimilarChildren"></a>

### CylindricalSupport.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GroupSimilarObjects"></a>

### CylindricalSupport.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.InitializeLifetimeService"></a>

### CylindricalSupport.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.IsPropertyEditable"></a>

### CylindricalSupport.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CylindricalSupport.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.IsPropertyVisible"></a>

### CylindricalSupport.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CylindricalSupport.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Paste"></a>

### CylindricalSupport.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.PromoteToNamedSelection"></a>

### CylindricalSupport.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.PropertyByAPIName"></a>

### CylindricalSupport.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.PropertyById"></a>

### CylindricalSupport.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.PropertyByName"></a>

### CylindricalSupport.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.RemoveFromGroup"></a>

### CylindricalSupport.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.RemoveParameter"></a>

### CylindricalSupport.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

