# `AcousticAbsorptionSurface`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticAbsorptionSurface"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticAbsorptionSurface(internalObject: Any)

<a id="AcousticAbsorptionSurface"></a>

### *class* AcousticAbsorptionSurface(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticAbsorptionSurface.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticAbsorptionSurface.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticAbsorptionSurface.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AcousticAbsorptionSurface.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticAbsorptionSurface.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AcousticAbsorptionSurface.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticAbsorptionSurface.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticAbsorptionSurface.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticAbsorptionSurface.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticAbsorptionSurface.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticAbsorptionSurface.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticAbsorptionSurface.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticAbsorptionSurface.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AcousticAbsorptionSurface.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticAbsorptionSurface.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticAbsorptionSurface.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticAbsorptionSurface.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticAbsorptionSurface.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticAbsorptionSurface.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticAbsorptionSurface.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticAbsorptionSurface.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticAbsorptionSurface.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticAbsorptionSurface.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticAbsorptionSurface.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticAbsorptionSurface.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticAbsorptionSurface.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AcousticAbsorptionSurface.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticAbsorptionSurface.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticAbsorptionSurface.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticAbsorptionSurface.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticAbsorptionSurface.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticAbsorptionSurface.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticAbsorptionSurface.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticAbsorptionSurface.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticAbsorptionSurface.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticAbsorptionSurface.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticAbsorptionSurface.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticAbsorptionSurface.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticAbsorptionSurface.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticAbsorptionSurface.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AbsorptionCoefficient`](#AcousticAbsorptionSurface.AbsorptionCoefficient)       | Gets or sets the AbsorptionCoefficient.                       |
| [`AttachedRefs`](#AcousticAbsorptionSurface.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#AcousticAbsorptionSurface.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#AcousticAbsorptionSurface.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#AcousticAbsorptionSurface.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticAbsorptionSurface.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#AcousticAbsorptionSurface.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#AcousticAbsorptionSurface.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#AcousticAbsorptionSurface.IconName)                                 | IconName property.                                            |
| [`Images`](#AcousticAbsorptionSurface.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AcousticAbsorptionSurface.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#AcousticAbsorptionSurface.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticAbsorptionSurface.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#AcousticAbsorptionSurface.Name)                                         | Name property.                                                |
| [`ObjectId`](#AcousticAbsorptionSurface.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#AcousticAbsorptionSurface.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#AcousticAbsorptionSurface.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#AcousticAbsorptionSurface.Parent)                                     | Parent property.                                              |
| [`Properties`](#AcousticAbsorptionSurface.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AcousticAbsorptionSurface.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticAbsorptionSurface.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#AcousticAbsorptionSurface.State)                                       | State property.                                               |
| [`Suppressed`](#AcousticAbsorptionSurface.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#AcousticAbsorptionSurface.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#AcousticAbsorptionSurface.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticAbsorptionSurface.AbsorptionCoefficient"></a>

### *property* AcousticAbsorptionSurface.AbsorptionCoefficient *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AbsorptionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.AttachedRefs"></a>

### *property* AcousticAbsorptionSurface.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Children"></a>

### *property* AcousticAbsorptionSurface.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.ClsId"></a>

### *property* AcousticAbsorptionSurface.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Comments"></a>

### *property* AcousticAbsorptionSurface.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.DataModelObjectCategory"></a>

### *property* AcousticAbsorptionSurface.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Figures"></a>

### *property* AcousticAbsorptionSurface.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GroupingFolder"></a>

### *property* AcousticAbsorptionSurface.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.IconName"></a>

### *property* AcousticAbsorptionSurface.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Images"></a>

### *property* AcousticAbsorptionSurface.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.ImportableObjectSourceId"></a>

### *property* AcousticAbsorptionSurface.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.InternalObject"></a>

### *property* AcousticAbsorptionSurface.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Location"></a>

### *property* AcousticAbsorptionSurface.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Name"></a>

### *property* AcousticAbsorptionSurface.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.ObjectId"></a>

### *property* AcousticAbsorptionSurface.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.ObjectState"></a>

### *property* AcousticAbsorptionSurface.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.ObjectTags"></a>

### *property* AcousticAbsorptionSurface.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Parent"></a>

### *property* AcousticAbsorptionSurface.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Properties"></a>

### *property* AcousticAbsorptionSurface.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.ReadOnly"></a>

### *property* AcousticAbsorptionSurface.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.SharedRefBody"></a>

### *property* AcousticAbsorptionSurface.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.State"></a>

### *property* AcousticAbsorptionSurface.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Suppressed"></a>

### *property* AcousticAbsorptionSurface.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.TransferableObjectId"></a>

### *property* AcousticAbsorptionSurface.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.VisibleProperties"></a>

### *property* AcousticAbsorptionSurface.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticAbsorptionSurface.Activate"></a>

### AcousticAbsorptionSurface.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.AddComment"></a>

### AcousticAbsorptionSurface.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.AddFigure"></a>

### AcousticAbsorptionSurface.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.AddImage"></a>

### AcousticAbsorptionSurface.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Copy"></a>

### AcousticAbsorptionSurface.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.CopyTo"></a>

### AcousticAbsorptionSurface.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.CreateObjRef"></a>

### AcousticAbsorptionSurface.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.CreateParameter"></a>

### AcousticAbsorptionSurface.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Cut"></a>

### AcousticAbsorptionSurface.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Delete"></a>

### AcousticAbsorptionSurface.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Duplicate"></a>

### AcousticAbsorptionSurface.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Equals"></a>

### AcousticAbsorptionSurface.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GetAPIName"></a>

### AcousticAbsorptionSurface.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GetAllProperties"></a>

### AcousticAbsorptionSurface.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GetChildren"></a>

### AcousticAbsorptionSurface.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticAbsorptionSurface.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GetDetailsView"></a>

### AcousticAbsorptionSurface.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GetEnumName"></a>

### AcousticAbsorptionSurface.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GetHashCode"></a>

### AcousticAbsorptionSurface.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GetIconFile"></a>

### AcousticAbsorptionSurface.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GetLifetimeService"></a>

### AcousticAbsorptionSurface.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GetObjectData"></a>

### AcousticAbsorptionSurface.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GetParameter"></a>

### AcousticAbsorptionSurface.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GetPath"></a>

### AcousticAbsorptionSurface.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GetPropertyName"></a>

### AcousticAbsorptionSurface.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GetPropertyValue"></a>

### AcousticAbsorptionSurface.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GetVisibleProperties"></a>

### AcousticAbsorptionSurface.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GetVisiblePropertyNames"></a>

### AcousticAbsorptionSurface.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GroupAllSimilarChildren"></a>

### AcousticAbsorptionSurface.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GroupSimilarObjects"></a>

### AcousticAbsorptionSurface.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.InitializeLifetimeService"></a>

### AcousticAbsorptionSurface.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.IsPropertyEditable"></a>

### AcousticAbsorptionSurface.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticAbsorptionSurface.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.IsPropertyVisible"></a>

### AcousticAbsorptionSurface.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticAbsorptionSurface.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Paste"></a>

### AcousticAbsorptionSurface.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.PromoteToNamedSelection"></a>

### AcousticAbsorptionSurface.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.PropertyByAPIName"></a>

### AcousticAbsorptionSurface.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.PropertyById"></a>

### AcousticAbsorptionSurface.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.PropertyByName"></a>

### AcousticAbsorptionSurface.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.RemoveFromGroup"></a>

### AcousticAbsorptionSurface.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.RemoveParameter"></a>

### AcousticAbsorptionSurface.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

