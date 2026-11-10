# `AcousticSurfaceAcceleration`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticSurfaceAcceleration"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticSurfaceAcceleration(internalObject: Any)

<a id="AcousticSurfaceAcceleration"></a>

### *class* AcousticSurfaceAcceleration(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticSurfaceAcceleration.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticSurfaceAcceleration.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticSurfaceAcceleration.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AcousticSurfaceAcceleration.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticSurfaceAcceleration.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AcousticSurfaceAcceleration.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticSurfaceAcceleration.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticSurfaceAcceleration.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticSurfaceAcceleration.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticSurfaceAcceleration.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticSurfaceAcceleration.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticSurfaceAcceleration.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticSurfaceAcceleration.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AcousticSurfaceAcceleration.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticSurfaceAcceleration.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticSurfaceAcceleration.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticSurfaceAcceleration.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticSurfaceAcceleration.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticSurfaceAcceleration.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticSurfaceAcceleration.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticSurfaceAcceleration.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticSurfaceAcceleration.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticSurfaceAcceleration.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticSurfaceAcceleration.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticSurfaceAcceleration.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticSurfaceAcceleration.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AcousticSurfaceAcceleration.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticSurfaceAcceleration.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticSurfaceAcceleration.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticSurfaceAcceleration.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticSurfaceAcceleration.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticSurfaceAcceleration.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticSurfaceAcceleration.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticSurfaceAcceleration.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticSurfaceAcceleration.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticSurfaceAcceleration.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticSurfaceAcceleration.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticSurfaceAcceleration.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticSurfaceAcceleration.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticSurfaceAcceleration.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AcousticSurfaceAcceleration.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#AcousticSurfaceAcceleration.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#AcousticSurfaceAcceleration.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#AcousticSurfaceAcceleration.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticSurfaceAcceleration.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`DefineBy`](#AcousticSurfaceAcceleration.DefineBy)                                 | Gets or sets the DefineBy.                                    |
| [`Figures`](#AcousticSurfaceAcceleration.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#AcousticSurfaceAcceleration.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#AcousticSurfaceAcceleration.IconName)                                 | IconName property.                                            |
| [`Images`](#AcousticSurfaceAcceleration.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AcousticSurfaceAcceleration.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#AcousticSurfaceAcceleration.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticSurfaceAcceleration.Location)                                 | Gets or sets the Location.                                    |
| [`Magnitude`](#AcousticSurfaceAcceleration.Magnitude)                               | Gets or sets the Magnitude.                                   |
| [`Name`](#AcousticSurfaceAcceleration.Name)                                         | Name property.                                                |
| [`ObjectId`](#AcousticSurfaceAcceleration.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#AcousticSurfaceAcceleration.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#AcousticSurfaceAcceleration.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#AcousticSurfaceAcceleration.Parent)                                     | Parent property.                                              |
| [`Properties`](#AcousticSurfaceAcceleration.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AcousticSurfaceAcceleration.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticSurfaceAcceleration.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#AcousticSurfaceAcceleration.State)                                       | State property.                                               |
| [`Suppressed`](#AcousticSurfaceAcceleration.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#AcousticSurfaceAcceleration.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#AcousticSurfaceAcceleration.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`XComponent`](#AcousticSurfaceAcceleration.XComponent)                             | Gets or sets the XComponent.                                  |
| [`YComponent`](#AcousticSurfaceAcceleration.YComponent)                             | Gets or sets the YComponent.                                  |
| [`ZComponent`](#AcousticSurfaceAcceleration.ZComponent)                             | Gets or sets the ZComponent.                                  |

<a id="property-detail"></a>

## Property detail

<a id="AcousticSurfaceAcceleration.AttachedRefs"></a>

### *property* AcousticSurfaceAcceleration.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.Children"></a>

### *property* AcousticSurfaceAcceleration.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.ClsId"></a>

### *property* AcousticSurfaceAcceleration.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.Comments"></a>

### *property* AcousticSurfaceAcceleration.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.DataModelObjectCategory"></a>

### *property* AcousticSurfaceAcceleration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.DefineBy"></a>

### *property* AcousticSurfaceAcceleration.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.Figures"></a>

### *property* AcousticSurfaceAcceleration.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.GroupingFolder"></a>

### *property* AcousticSurfaceAcceleration.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.IconName"></a>

### *property* AcousticSurfaceAcceleration.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.Images"></a>

### *property* AcousticSurfaceAcceleration.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.ImportableObjectSourceId"></a>

### *property* AcousticSurfaceAcceleration.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.InternalObject"></a>

### *property* AcousticSurfaceAcceleration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.Location"></a>

### *property* AcousticSurfaceAcceleration.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.Magnitude"></a>

### *property* AcousticSurfaceAcceleration.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.Name"></a>

### *property* AcousticSurfaceAcceleration.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.ObjectId"></a>

### *property* AcousticSurfaceAcceleration.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.ObjectState"></a>

### *property* AcousticSurfaceAcceleration.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.ObjectTags"></a>

### *property* AcousticSurfaceAcceleration.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.Parent"></a>

### *property* AcousticSurfaceAcceleration.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.Properties"></a>

### *property* AcousticSurfaceAcceleration.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.ReadOnly"></a>

### *property* AcousticSurfaceAcceleration.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.SharedRefBody"></a>

### *property* AcousticSurfaceAcceleration.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.State"></a>

### *property* AcousticSurfaceAcceleration.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.Suppressed"></a>

### *property* AcousticSurfaceAcceleration.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.TransferableObjectId"></a>

### *property* AcousticSurfaceAcceleration.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.VisibleProperties"></a>

### *property* AcousticSurfaceAcceleration.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.XComponent"></a>

### *property* AcousticSurfaceAcceleration.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.YComponent"></a>

### *property* AcousticSurfaceAcceleration.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.ZComponent"></a>

### *property* AcousticSurfaceAcceleration.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticSurfaceAcceleration.Activate"></a>

### AcousticSurfaceAcceleration.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.AddComment"></a>

### AcousticSurfaceAcceleration.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.AddFigure"></a>

### AcousticSurfaceAcceleration.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.AddImage"></a>

### AcousticSurfaceAcceleration.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.Copy"></a>

### AcousticSurfaceAcceleration.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.CopyTo"></a>

### AcousticSurfaceAcceleration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.CreateObjRef"></a>

### AcousticSurfaceAcceleration.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.CreateParameter"></a>

### AcousticSurfaceAcceleration.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.Cut"></a>

### AcousticSurfaceAcceleration.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.Delete"></a>

### AcousticSurfaceAcceleration.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.Duplicate"></a>

### AcousticSurfaceAcceleration.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.Equals"></a>

### AcousticSurfaceAcceleration.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.GetAPIName"></a>

### AcousticSurfaceAcceleration.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.GetAllProperties"></a>

### AcousticSurfaceAcceleration.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.GetChildren"></a>

### AcousticSurfaceAcceleration.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticSurfaceAcceleration.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.GetDetailsView"></a>

### AcousticSurfaceAcceleration.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.GetEnumName"></a>

### AcousticSurfaceAcceleration.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.GetHashCode"></a>

### AcousticSurfaceAcceleration.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.GetIconFile"></a>

### AcousticSurfaceAcceleration.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.GetLifetimeService"></a>

### AcousticSurfaceAcceleration.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.GetObjectData"></a>

### AcousticSurfaceAcceleration.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.GetParameter"></a>

### AcousticSurfaceAcceleration.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.GetPath"></a>

### AcousticSurfaceAcceleration.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.GetPropertyName"></a>

### AcousticSurfaceAcceleration.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.GetPropertyValue"></a>

### AcousticSurfaceAcceleration.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.GetVisibleProperties"></a>

### AcousticSurfaceAcceleration.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.GetVisiblePropertyNames"></a>

### AcousticSurfaceAcceleration.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.GroupAllSimilarChildren"></a>

### AcousticSurfaceAcceleration.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.GroupSimilarObjects"></a>

### AcousticSurfaceAcceleration.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.InitializeLifetimeService"></a>

### AcousticSurfaceAcceleration.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.IsPropertyEditable"></a>

### AcousticSurfaceAcceleration.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticSurfaceAcceleration.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.IsPropertyVisible"></a>

### AcousticSurfaceAcceleration.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticSurfaceAcceleration.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.Paste"></a>

### AcousticSurfaceAcceleration.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.PromoteToNamedSelection"></a>

### AcousticSurfaceAcceleration.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.PropertyByAPIName"></a>

### AcousticSurfaceAcceleration.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.PropertyById"></a>

### AcousticSurfaceAcceleration.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.PropertyByName"></a>

### AcousticSurfaceAcceleration.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.RemoveFromGroup"></a>

### AcousticSurfaceAcceleration.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSurfaceAcceleration.RemoveParameter"></a>

### AcousticSurfaceAcceleration.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

