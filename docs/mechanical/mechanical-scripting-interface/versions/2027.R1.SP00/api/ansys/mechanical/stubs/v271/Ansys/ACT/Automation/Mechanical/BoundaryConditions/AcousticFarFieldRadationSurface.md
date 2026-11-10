# `AcousticFarFieldRadationSurface`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticFarFieldRadationSurface"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticFarFieldRadationSurface(internalObject: Any)

<a id="AcousticFarFieldRadationSurface"></a>

### *class* AcousticFarFieldRadationSurface(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticFarFieldRadationSurface.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticFarFieldRadationSurface.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticFarFieldRadationSurface.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AcousticFarFieldRadationSurface.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticFarFieldRadationSurface.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AcousticFarFieldRadationSurface.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticFarFieldRadationSurface.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticFarFieldRadationSurface.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticFarFieldRadationSurface.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticFarFieldRadationSurface.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticFarFieldRadationSurface.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticFarFieldRadationSurface.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticFarFieldRadationSurface.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AcousticFarFieldRadationSurface.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticFarFieldRadationSurface.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticFarFieldRadationSurface.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticFarFieldRadationSurface.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticFarFieldRadationSurface.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticFarFieldRadationSurface.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticFarFieldRadationSurface.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticFarFieldRadationSurface.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticFarFieldRadationSurface.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticFarFieldRadationSurface.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticFarFieldRadationSurface.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticFarFieldRadationSurface.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticFarFieldRadationSurface.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AcousticFarFieldRadationSurface.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticFarFieldRadationSurface.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticFarFieldRadationSurface.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticFarFieldRadationSurface.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticFarFieldRadationSurface.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticFarFieldRadationSurface.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticFarFieldRadationSurface.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticFarFieldRadationSurface.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticFarFieldRadationSurface.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticFarFieldRadationSurface.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticFarFieldRadationSurface.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticFarFieldRadationSurface.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticFarFieldRadationSurface.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticFarFieldRadationSurface.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AcousticFarFieldRadationSurface.AttachedRefs)                               | AttachedRefs property.                                        |
| [`Children`](#AcousticFarFieldRadationSurface.Children)                                       | Gets the list of children.                                    |
| [`ClsId`](#AcousticFarFieldRadationSurface.ClsId)                                             | ClsId property.                                               |
| [`Comments`](#AcousticFarFieldRadationSurface.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticFarFieldRadationSurface.DataModelObjectCategory)         | Gets the current DataModelObject's category.                  |
| [`EquivalentSurfaceLocation`](#AcousticFarFieldRadationSurface.EquivalentSurfaceLocation)     | Gets or sets the EquivalentSurfaceLocation.                   |
| [`Figures`](#AcousticFarFieldRadationSurface.Figures)                                         | Gets the list of associated figures.                          |
| [`GroupingFolder`](#AcousticFarFieldRadationSurface.GroupingFolder)                           | GroupingFolder property.                                      |
| [`IconName`](#AcousticFarFieldRadationSurface.IconName)                                       | IconName property.                                            |
| [`Images`](#AcousticFarFieldRadationSurface.Images)                                           | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AcousticFarFieldRadationSurface.ImportableObjectSourceId)       | ImportableObjectSourceId property.                            |
| [`InsideSurfaceBodiesLocation`](#AcousticFarFieldRadationSurface.InsideSurfaceBodiesLocation) | Gets or sets the InsideSurfaceBodiesLocation.                 |
| [`InternalObject`](#AcousticFarFieldRadationSurface.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`Name`](#AcousticFarFieldRadationSurface.Name)                                               | Name property.                                                |
| [`ObjectId`](#AcousticFarFieldRadationSurface.ObjectId)                                       | ObjectId property.                                            |
| [`ObjectState`](#AcousticFarFieldRadationSurface.ObjectState)                                 | ObjectState property.                                         |
| [`ObjectTags`](#AcousticFarFieldRadationSurface.ObjectTags)                                   | ObjectTags property.                                          |
| [`Parent`](#AcousticFarFieldRadationSurface.Parent)                                           | Parent property.                                              |
| [`Properties`](#AcousticFarFieldRadationSurface.Properties)                                   | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AcousticFarFieldRadationSurface.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticFarFieldRadationSurface.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`State`](#AcousticFarFieldRadationSurface.State)                                             | State property.                                               |
| [`Suppressed`](#AcousticFarFieldRadationSurface.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#AcousticFarFieldRadationSurface.TransferableObjectId)               | TransferableObjectId property.                                |
| [`VisibleProperties`](#AcousticFarFieldRadationSurface.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticFarFieldRadationSurface.AttachedRefs"></a>

### *property* AcousticFarFieldRadationSurface.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Children"></a>

### *property* AcousticFarFieldRadationSurface.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.ClsId"></a>

### *property* AcousticFarFieldRadationSurface.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Comments"></a>

### *property* AcousticFarFieldRadationSurface.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.DataModelObjectCategory"></a>

### *property* AcousticFarFieldRadationSurface.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.EquivalentSurfaceLocation"></a>

### *property* AcousticFarFieldRadationSurface.EquivalentSurfaceLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EquivalentSurfaceLocation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Figures"></a>

### *property* AcousticFarFieldRadationSurface.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GroupingFolder"></a>

### *property* AcousticFarFieldRadationSurface.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.IconName"></a>

### *property* AcousticFarFieldRadationSurface.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Images"></a>

### *property* AcousticFarFieldRadationSurface.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.ImportableObjectSourceId"></a>

### *property* AcousticFarFieldRadationSurface.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.InsideSurfaceBodiesLocation"></a>

### *property* AcousticFarFieldRadationSurface.InsideSurfaceBodiesLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InsideSurfaceBodiesLocation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.InternalObject"></a>

### *property* AcousticFarFieldRadationSurface.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Name"></a>

### *property* AcousticFarFieldRadationSurface.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.ObjectId"></a>

### *property* AcousticFarFieldRadationSurface.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.ObjectState"></a>

### *property* AcousticFarFieldRadationSurface.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.ObjectTags"></a>

### *property* AcousticFarFieldRadationSurface.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Parent"></a>

### *property* AcousticFarFieldRadationSurface.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Properties"></a>

### *property* AcousticFarFieldRadationSurface.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.ReadOnly"></a>

### *property* AcousticFarFieldRadationSurface.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.SharedRefBody"></a>

### *property* AcousticFarFieldRadationSurface.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.State"></a>

### *property* AcousticFarFieldRadationSurface.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Suppressed"></a>

### *property* AcousticFarFieldRadationSurface.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.TransferableObjectId"></a>

### *property* AcousticFarFieldRadationSurface.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.VisibleProperties"></a>

### *property* AcousticFarFieldRadationSurface.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticFarFieldRadationSurface.Activate"></a>

### AcousticFarFieldRadationSurface.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.AddComment"></a>

### AcousticFarFieldRadationSurface.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.AddFigure"></a>

### AcousticFarFieldRadationSurface.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.AddImage"></a>

### AcousticFarFieldRadationSurface.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Copy"></a>

### AcousticFarFieldRadationSurface.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.CopyTo"></a>

### AcousticFarFieldRadationSurface.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.CreateObjRef"></a>

### AcousticFarFieldRadationSurface.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.CreateParameter"></a>

### AcousticFarFieldRadationSurface.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Cut"></a>

### AcousticFarFieldRadationSurface.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Delete"></a>

### AcousticFarFieldRadationSurface.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Duplicate"></a>

### AcousticFarFieldRadationSurface.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Equals"></a>

### AcousticFarFieldRadationSurface.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GetAPIName"></a>

### AcousticFarFieldRadationSurface.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GetAllProperties"></a>

### AcousticFarFieldRadationSurface.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GetChildren"></a>

### AcousticFarFieldRadationSurface.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticFarFieldRadationSurface.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GetDetailsView"></a>

### AcousticFarFieldRadationSurface.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GetEnumName"></a>

### AcousticFarFieldRadationSurface.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GetHashCode"></a>

### AcousticFarFieldRadationSurface.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GetIconFile"></a>

### AcousticFarFieldRadationSurface.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GetLifetimeService"></a>

### AcousticFarFieldRadationSurface.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GetObjectData"></a>

### AcousticFarFieldRadationSurface.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GetParameter"></a>

### AcousticFarFieldRadationSurface.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GetPath"></a>

### AcousticFarFieldRadationSurface.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GetPropertyName"></a>

### AcousticFarFieldRadationSurface.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GetPropertyValue"></a>

### AcousticFarFieldRadationSurface.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GetVisibleProperties"></a>

### AcousticFarFieldRadationSurface.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GetVisiblePropertyNames"></a>

### AcousticFarFieldRadationSurface.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GroupAllSimilarChildren"></a>

### AcousticFarFieldRadationSurface.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GroupSimilarObjects"></a>

### AcousticFarFieldRadationSurface.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.InitializeLifetimeService"></a>

### AcousticFarFieldRadationSurface.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.IsPropertyEditable"></a>

### AcousticFarFieldRadationSurface.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticFarFieldRadationSurface.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.IsPropertyVisible"></a>

### AcousticFarFieldRadationSurface.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticFarFieldRadationSurface.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Paste"></a>

### AcousticFarFieldRadationSurface.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.PromoteToNamedSelection"></a>

### AcousticFarFieldRadationSurface.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.PropertyByAPIName"></a>

### AcousticFarFieldRadationSurface.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.PropertyById"></a>

### AcousticFarFieldRadationSurface.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.PropertyByName"></a>

### AcousticFarFieldRadationSurface.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.RemoveFromGroup"></a>

### AcousticFarFieldRadationSurface.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.RemoveParameter"></a>

### AcousticFarFieldRadationSurface.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

