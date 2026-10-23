# `AcousticSymmetryPlane`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticSymmetryPlane"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticSymmetryPlane(internalObject: Any)

<a id="AcousticSymmetryPlane"></a>

### *class* AcousticSymmetryPlane(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticSymmetryPlane.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticSymmetryPlane.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticSymmetryPlane.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AcousticSymmetryPlane.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticSymmetryPlane.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AcousticSymmetryPlane.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticSymmetryPlane.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticSymmetryPlane.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticSymmetryPlane.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticSymmetryPlane.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticSymmetryPlane.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticSymmetryPlane.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticSymmetryPlane.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AcousticSymmetryPlane.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticSymmetryPlane.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticSymmetryPlane.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticSymmetryPlane.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticSymmetryPlane.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticSymmetryPlane.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticSymmetryPlane.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticSymmetryPlane.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticSymmetryPlane.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticSymmetryPlane.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticSymmetryPlane.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticSymmetryPlane.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticSymmetryPlane.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AcousticSymmetryPlane.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticSymmetryPlane.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticSymmetryPlane.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticSymmetryPlane.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticSymmetryPlane.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticSymmetryPlane.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticSymmetryPlane.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticSymmetryPlane.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticSymmetryPlane.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticSymmetryPlane.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticSymmetryPlane.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticSymmetryPlane.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticSymmetryPlane.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticSymmetryPlane.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AcousticSymmetryPlane.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#AcousticSymmetryPlane.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#AcousticSymmetryPlane.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#AcousticSymmetryPlane.Comments)                                 | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#CoordinateSystem)                 | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#AcousticSymmetryPlane.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#AcousticSymmetryPlane.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#AcousticSymmetryPlane.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#AcousticSymmetryPlane.IconName)                                 | IconName property.                                            |
| [`Images`](#AcousticSymmetryPlane.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AcousticSymmetryPlane.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#AcousticSymmetryPlane.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticSymmetryPlane.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#AcousticSymmetryPlane.Name)                                         | Name property.                                                |
| [`ObjectId`](#AcousticSymmetryPlane.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#AcousticSymmetryPlane.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#AcousticSymmetryPlane.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#AcousticSymmetryPlane.Parent)                                     | Parent property.                                              |
| [`Properties`](#AcousticSymmetryPlane.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AcousticSymmetryPlane.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticSymmetryPlane.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#AcousticSymmetryPlane.State)                                       | State property.                                               |
| [`Suppressed`](#AcousticSymmetryPlane.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#AcousticSymmetryPlane.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#AcousticSymmetryPlane.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticSymmetryPlane.AttachedRefs"></a>

### *property* AcousticSymmetryPlane.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Children"></a>

### *property* AcousticSymmetryPlane.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.ClsId"></a>

### *property* AcousticSymmetryPlane.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Comments"></a>

### *property* AcousticSymmetryPlane.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.CoordinateSystem"></a>

### *property* AcousticSymmetryPlane.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.DataModelObjectCategory"></a>

### *property* AcousticSymmetryPlane.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Figures"></a>

### *property* AcousticSymmetryPlane.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GroupingFolder"></a>

### *property* AcousticSymmetryPlane.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.IconName"></a>

### *property* AcousticSymmetryPlane.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Images"></a>

### *property* AcousticSymmetryPlane.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.ImportableObjectSourceId"></a>

### *property* AcousticSymmetryPlane.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.InternalObject"></a>

### *property* AcousticSymmetryPlane.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Location"></a>

### *property* AcousticSymmetryPlane.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Name"></a>

### *property* AcousticSymmetryPlane.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.ObjectId"></a>

### *property* AcousticSymmetryPlane.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.ObjectState"></a>

### *property* AcousticSymmetryPlane.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.ObjectTags"></a>

### *property* AcousticSymmetryPlane.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Parent"></a>

### *property* AcousticSymmetryPlane.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Properties"></a>

### *property* AcousticSymmetryPlane.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.ReadOnly"></a>

### *property* AcousticSymmetryPlane.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.SharedRefBody"></a>

### *property* AcousticSymmetryPlane.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.State"></a>

### *property* AcousticSymmetryPlane.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Suppressed"></a>

### *property* AcousticSymmetryPlane.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.TransferableObjectId"></a>

### *property* AcousticSymmetryPlane.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.VisibleProperties"></a>

### *property* AcousticSymmetryPlane.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticSymmetryPlane.Activate"></a>

### AcousticSymmetryPlane.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.AddComment"></a>

### AcousticSymmetryPlane.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.AddFigure"></a>

### AcousticSymmetryPlane.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.AddImage"></a>

### AcousticSymmetryPlane.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Copy"></a>

### AcousticSymmetryPlane.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.CopyTo"></a>

### AcousticSymmetryPlane.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.CreateObjRef"></a>

### AcousticSymmetryPlane.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.CreateParameter"></a>

### AcousticSymmetryPlane.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Cut"></a>

### AcousticSymmetryPlane.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Delete"></a>

### AcousticSymmetryPlane.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Duplicate"></a>

### AcousticSymmetryPlane.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Equals"></a>

### AcousticSymmetryPlane.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetAPIName"></a>

### AcousticSymmetryPlane.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetAllProperties"></a>

### AcousticSymmetryPlane.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetChildren"></a>

### AcousticSymmetryPlane.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticSymmetryPlane.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetDetailsView"></a>

### AcousticSymmetryPlane.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetEnumName"></a>

### AcousticSymmetryPlane.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetHashCode"></a>

### AcousticSymmetryPlane.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetIconFile"></a>

### AcousticSymmetryPlane.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetLifetimeService"></a>

### AcousticSymmetryPlane.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetObjectData"></a>

### AcousticSymmetryPlane.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetParameter"></a>

### AcousticSymmetryPlane.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetPath"></a>

### AcousticSymmetryPlane.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetPropertyName"></a>

### AcousticSymmetryPlane.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetPropertyValue"></a>

### AcousticSymmetryPlane.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetVisibleProperties"></a>

### AcousticSymmetryPlane.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetVisiblePropertyNames"></a>

### AcousticSymmetryPlane.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GroupAllSimilarChildren"></a>

### AcousticSymmetryPlane.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GroupSimilarObjects"></a>

### AcousticSymmetryPlane.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.InitializeLifetimeService"></a>

### AcousticSymmetryPlane.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.IsPropertyEditable"></a>

### AcousticSymmetryPlane.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticSymmetryPlane.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.IsPropertyVisible"></a>

### AcousticSymmetryPlane.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticSymmetryPlane.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Paste"></a>

### AcousticSymmetryPlane.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.PromoteToNamedSelection"></a>

### AcousticSymmetryPlane.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.PropertyByAPIName"></a>

### AcousticSymmetryPlane.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.PropertyById"></a>

### AcousticSymmetryPlane.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.PropertyByName"></a>

### AcousticSymmetryPlane.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.RemoveFromGroup"></a>

### AcousticSymmetryPlane.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.RemoveParameter"></a>

### AcousticSymmetryPlane.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

