# `AcousticThermoViscousBLIBoundary`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticThermoViscousBLIBoundary"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticThermoViscousBLIBoundary(internalObject: Any)

<a id="AcousticThermoViscousBLIBoundary"></a>

### *class* AcousticThermoViscousBLIBoundary(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticThermoViscousBLIBoundary.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticThermoViscousBLIBoundary.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticThermoViscousBLIBoundary.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AcousticThermoViscousBLIBoundary.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticThermoViscousBLIBoundary.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AcousticThermoViscousBLIBoundary.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticThermoViscousBLIBoundary.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticThermoViscousBLIBoundary.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticThermoViscousBLIBoundary.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticThermoViscousBLIBoundary.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticThermoViscousBLIBoundary.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticThermoViscousBLIBoundary.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticThermoViscousBLIBoundary.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AcousticThermoViscousBLIBoundary.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticThermoViscousBLIBoundary.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticThermoViscousBLIBoundary.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticThermoViscousBLIBoundary.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticThermoViscousBLIBoundary.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticThermoViscousBLIBoundary.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticThermoViscousBLIBoundary.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticThermoViscousBLIBoundary.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticThermoViscousBLIBoundary.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticThermoViscousBLIBoundary.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticThermoViscousBLIBoundary.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticThermoViscousBLIBoundary.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticThermoViscousBLIBoundary.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AcousticThermoViscousBLIBoundary.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticThermoViscousBLIBoundary.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticThermoViscousBLIBoundary.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticThermoViscousBLIBoundary.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticThermoViscousBLIBoundary.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticThermoViscousBLIBoundary.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticThermoViscousBLIBoundary.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticThermoViscousBLIBoundary.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticThermoViscousBLIBoundary.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticThermoViscousBLIBoundary.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticThermoViscousBLIBoundary.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticThermoViscousBLIBoundary.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticThermoViscousBLIBoundary.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticThermoViscousBLIBoundary.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AcousticThermoViscousBLIBoundary.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#AcousticThermoViscousBLIBoundary.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#AcousticThermoViscousBLIBoundary.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#AcousticThermoViscousBLIBoundary.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticThermoViscousBLIBoundary.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#AcousticThermoViscousBLIBoundary.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#AcousticThermoViscousBLIBoundary.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#AcousticThermoViscousBLIBoundary.IconName)                                 | IconName property.                                            |
| [`Images`](#AcousticThermoViscousBLIBoundary.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AcousticThermoViscousBLIBoundary.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#AcousticThermoViscousBLIBoundary.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticThermoViscousBLIBoundary.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#AcousticThermoViscousBLIBoundary.Name)                                         | Name property.                                                |
| [`ObjectId`](#AcousticThermoViscousBLIBoundary.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#AcousticThermoViscousBLIBoundary.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#AcousticThermoViscousBLIBoundary.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#AcousticThermoViscousBLIBoundary.Parent)                                     | Parent property.                                              |
| [`Properties`](#AcousticThermoViscousBLIBoundary.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AcousticThermoViscousBLIBoundary.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticThermoViscousBLIBoundary.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#AcousticThermoViscousBLIBoundary.State)                                       | State property.                                               |
| [`Suppressed`](#AcousticThermoViscousBLIBoundary.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#AcousticThermoViscousBLIBoundary.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#AcousticThermoViscousBLIBoundary.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticThermoViscousBLIBoundary.AttachedRefs"></a>

### *property* AcousticThermoViscousBLIBoundary.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.Children"></a>

### *property* AcousticThermoViscousBLIBoundary.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.ClsId"></a>

### *property* AcousticThermoViscousBLIBoundary.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.Comments"></a>

### *property* AcousticThermoViscousBLIBoundary.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.DataModelObjectCategory"></a>

### *property* AcousticThermoViscousBLIBoundary.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.Figures"></a>

### *property* AcousticThermoViscousBLIBoundary.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.GroupingFolder"></a>

### *property* AcousticThermoViscousBLIBoundary.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.IconName"></a>

### *property* AcousticThermoViscousBLIBoundary.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.Images"></a>

### *property* AcousticThermoViscousBLIBoundary.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.ImportableObjectSourceId"></a>

### *property* AcousticThermoViscousBLIBoundary.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.InternalObject"></a>

### *property* AcousticThermoViscousBLIBoundary.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.Location"></a>

### *property* AcousticThermoViscousBLIBoundary.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.Name"></a>

### *property* AcousticThermoViscousBLIBoundary.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.ObjectId"></a>

### *property* AcousticThermoViscousBLIBoundary.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.ObjectState"></a>

### *property* AcousticThermoViscousBLIBoundary.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.ObjectTags"></a>

### *property* AcousticThermoViscousBLIBoundary.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.Parent"></a>

### *property* AcousticThermoViscousBLIBoundary.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.Properties"></a>

### *property* AcousticThermoViscousBLIBoundary.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.ReadOnly"></a>

### *property* AcousticThermoViscousBLIBoundary.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.SharedRefBody"></a>

### *property* AcousticThermoViscousBLIBoundary.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.State"></a>

### *property* AcousticThermoViscousBLIBoundary.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.Suppressed"></a>

### *property* AcousticThermoViscousBLIBoundary.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.TransferableObjectId"></a>

### *property* AcousticThermoViscousBLIBoundary.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.VisibleProperties"></a>

### *property* AcousticThermoViscousBLIBoundary.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticThermoViscousBLIBoundary.Activate"></a>

### AcousticThermoViscousBLIBoundary.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.AddComment"></a>

### AcousticThermoViscousBLIBoundary.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.AddFigure"></a>

### AcousticThermoViscousBLIBoundary.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.AddImage"></a>

### AcousticThermoViscousBLIBoundary.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.Copy"></a>

### AcousticThermoViscousBLIBoundary.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.CopyTo"></a>

### AcousticThermoViscousBLIBoundary.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.CreateObjRef"></a>

### AcousticThermoViscousBLIBoundary.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.CreateParameter"></a>

### AcousticThermoViscousBLIBoundary.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.Cut"></a>

### AcousticThermoViscousBLIBoundary.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.Delete"></a>

### AcousticThermoViscousBLIBoundary.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.Duplicate"></a>

### AcousticThermoViscousBLIBoundary.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.Equals"></a>

### AcousticThermoViscousBLIBoundary.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.GetAPIName"></a>

### AcousticThermoViscousBLIBoundary.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.GetAllProperties"></a>

### AcousticThermoViscousBLIBoundary.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.GetChildren"></a>

### AcousticThermoViscousBLIBoundary.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticThermoViscousBLIBoundary.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.GetDetailsView"></a>

### AcousticThermoViscousBLIBoundary.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.GetEnumName"></a>

### AcousticThermoViscousBLIBoundary.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.GetHashCode"></a>

### AcousticThermoViscousBLIBoundary.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.GetIconFile"></a>

### AcousticThermoViscousBLIBoundary.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.GetLifetimeService"></a>

### AcousticThermoViscousBLIBoundary.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.GetObjectData"></a>

### AcousticThermoViscousBLIBoundary.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.GetParameter"></a>

### AcousticThermoViscousBLIBoundary.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.GetPath"></a>

### AcousticThermoViscousBLIBoundary.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.GetPropertyName"></a>

### AcousticThermoViscousBLIBoundary.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.GetPropertyValue"></a>

### AcousticThermoViscousBLIBoundary.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.GetVisibleProperties"></a>

### AcousticThermoViscousBLIBoundary.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.GetVisiblePropertyNames"></a>

### AcousticThermoViscousBLIBoundary.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.GroupAllSimilarChildren"></a>

### AcousticThermoViscousBLIBoundary.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.GroupSimilarObjects"></a>

### AcousticThermoViscousBLIBoundary.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.InitializeLifetimeService"></a>

### AcousticThermoViscousBLIBoundary.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.IsPropertyEditable"></a>

### AcousticThermoViscousBLIBoundary.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticThermoViscousBLIBoundary.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.IsPropertyVisible"></a>

### AcousticThermoViscousBLIBoundary.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticThermoViscousBLIBoundary.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.Paste"></a>

### AcousticThermoViscousBLIBoundary.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.PromoteToNamedSelection"></a>

### AcousticThermoViscousBLIBoundary.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.PropertyByAPIName"></a>

### AcousticThermoViscousBLIBoundary.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.PropertyById"></a>

### AcousticThermoViscousBLIBoundary.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.PropertyByName"></a>

### AcousticThermoViscousBLIBoundary.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.RemoveFromGroup"></a>

### AcousticThermoViscousBLIBoundary.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticThermoViscousBLIBoundary.RemoveParameter"></a>

### AcousticThermoViscousBLIBoundary.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

