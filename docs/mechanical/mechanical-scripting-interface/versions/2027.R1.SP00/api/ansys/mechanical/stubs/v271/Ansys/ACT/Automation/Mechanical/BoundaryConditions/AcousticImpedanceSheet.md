# `AcousticImpedanceSheet`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticImpedanceSheet"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticImpedanceSheet(internalObject: Any)

<a id="AcousticImpedanceSheet"></a>

### *class* AcousticImpedanceSheet(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticImpedanceSheet.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticImpedanceSheet.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticImpedanceSheet.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AcousticImpedanceSheet.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticImpedanceSheet.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AcousticImpedanceSheet.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticImpedanceSheet.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticImpedanceSheet.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticImpedanceSheet.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticImpedanceSheet.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticImpedanceSheet.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticImpedanceSheet.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticImpedanceSheet.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AcousticImpedanceSheet.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticImpedanceSheet.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticImpedanceSheet.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticImpedanceSheet.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticImpedanceSheet.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticImpedanceSheet.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticImpedanceSheet.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticImpedanceSheet.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticImpedanceSheet.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticImpedanceSheet.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticImpedanceSheet.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticImpedanceSheet.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticImpedanceSheet.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AcousticImpedanceSheet.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticImpedanceSheet.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticImpedanceSheet.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticImpedanceSheet.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticImpedanceSheet.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticImpedanceSheet.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticImpedanceSheet.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticImpedanceSheet.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticImpedanceSheet.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticImpedanceSheet.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticImpedanceSheet.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticImpedanceSheet.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticImpedanceSheet.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticImpedanceSheet.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AcousticImpedanceSheet.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#AcousticImpedanceSheet.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#AcousticImpedanceSheet.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#AcousticImpedanceSheet.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticImpedanceSheet.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#AcousticImpedanceSheet.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#AcousticImpedanceSheet.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#AcousticImpedanceSheet.IconName)                                 | IconName property.                                            |
| [`Images`](#AcousticImpedanceSheet.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AcousticImpedanceSheet.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#AcousticImpedanceSheet.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticImpedanceSheet.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#AcousticImpedanceSheet.Name)                                         | Name property.                                                |
| [`ObjectId`](#AcousticImpedanceSheet.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#AcousticImpedanceSheet.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#AcousticImpedanceSheet.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#AcousticImpedanceSheet.Parent)                                     | Parent property.                                              |
| [`Properties`](#AcousticImpedanceSheet.Properties)                             | Gets the list of properties for this object.                  |
| [`Reactance`](#AcousticImpedanceSheet.Reactance)                               | Gets or sets the Reactance.                                   |
| [`ReadOnly`](#AcousticImpedanceSheet.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`Resistance`](#AcousticImpedanceSheet.Resistance)                             | Gets or sets the Resistance.                                  |
| [`SharedRefBody`](#AcousticImpedanceSheet.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#AcousticImpedanceSheet.State)                                       | State property.                                               |
| [`Suppressed`](#AcousticImpedanceSheet.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#AcousticImpedanceSheet.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#AcousticImpedanceSheet.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticImpedanceSheet.AttachedRefs"></a>

### *property* AcousticImpedanceSheet.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Children"></a>

### *property* AcousticImpedanceSheet.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.ClsId"></a>

### *property* AcousticImpedanceSheet.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Comments"></a>

### *property* AcousticImpedanceSheet.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.DataModelObjectCategory"></a>

### *property* AcousticImpedanceSheet.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Figures"></a>

### *property* AcousticImpedanceSheet.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GroupingFolder"></a>

### *property* AcousticImpedanceSheet.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.IconName"></a>

### *property* AcousticImpedanceSheet.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Images"></a>

### *property* AcousticImpedanceSheet.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.ImportableObjectSourceId"></a>

### *property* AcousticImpedanceSheet.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.InternalObject"></a>

### *property* AcousticImpedanceSheet.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Location"></a>

### *property* AcousticImpedanceSheet.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Name"></a>

### *property* AcousticImpedanceSheet.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.ObjectId"></a>

### *property* AcousticImpedanceSheet.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.ObjectState"></a>

### *property* AcousticImpedanceSheet.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.ObjectTags"></a>

### *property* AcousticImpedanceSheet.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Parent"></a>

### *property* AcousticImpedanceSheet.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Properties"></a>

### *property* AcousticImpedanceSheet.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Reactance"></a>

### *property* AcousticImpedanceSheet.Reactance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Reactance.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.ReadOnly"></a>

### *property* AcousticImpedanceSheet.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Resistance"></a>

### *property* AcousticImpedanceSheet.Resistance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Resistance.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.SharedRefBody"></a>

### *property* AcousticImpedanceSheet.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.State"></a>

### *property* AcousticImpedanceSheet.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Suppressed"></a>

### *property* AcousticImpedanceSheet.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.TransferableObjectId"></a>

### *property* AcousticImpedanceSheet.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.VisibleProperties"></a>

### *property* AcousticImpedanceSheet.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticImpedanceSheet.Activate"></a>

### AcousticImpedanceSheet.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.AddComment"></a>

### AcousticImpedanceSheet.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.AddFigure"></a>

### AcousticImpedanceSheet.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.AddImage"></a>

### AcousticImpedanceSheet.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Copy"></a>

### AcousticImpedanceSheet.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.CopyTo"></a>

### AcousticImpedanceSheet.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.CreateObjRef"></a>

### AcousticImpedanceSheet.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.CreateParameter"></a>

### AcousticImpedanceSheet.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Cut"></a>

### AcousticImpedanceSheet.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Delete"></a>

### AcousticImpedanceSheet.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Duplicate"></a>

### AcousticImpedanceSheet.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Equals"></a>

### AcousticImpedanceSheet.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetAPIName"></a>

### AcousticImpedanceSheet.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetAllProperties"></a>

### AcousticImpedanceSheet.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetChildren"></a>

### AcousticImpedanceSheet.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticImpedanceSheet.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetDetailsView"></a>

### AcousticImpedanceSheet.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetEnumName"></a>

### AcousticImpedanceSheet.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetHashCode"></a>

### AcousticImpedanceSheet.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetIconFile"></a>

### AcousticImpedanceSheet.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetLifetimeService"></a>

### AcousticImpedanceSheet.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetObjectData"></a>

### AcousticImpedanceSheet.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetParameter"></a>

### AcousticImpedanceSheet.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetPath"></a>

### AcousticImpedanceSheet.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetPropertyName"></a>

### AcousticImpedanceSheet.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetPropertyValue"></a>

### AcousticImpedanceSheet.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetVisibleProperties"></a>

### AcousticImpedanceSheet.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetVisiblePropertyNames"></a>

### AcousticImpedanceSheet.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GroupAllSimilarChildren"></a>

### AcousticImpedanceSheet.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GroupSimilarObjects"></a>

### AcousticImpedanceSheet.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.InitializeLifetimeService"></a>

### AcousticImpedanceSheet.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.IsPropertyEditable"></a>

### AcousticImpedanceSheet.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticImpedanceSheet.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.IsPropertyVisible"></a>

### AcousticImpedanceSheet.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticImpedanceSheet.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Paste"></a>

### AcousticImpedanceSheet.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.PromoteToNamedSelection"></a>

### AcousticImpedanceSheet.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.PropertyByAPIName"></a>

### AcousticImpedanceSheet.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.PropertyById"></a>

### AcousticImpedanceSheet.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.PropertyByName"></a>

### AcousticImpedanceSheet.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.RemoveFromGroup"></a>

### AcousticImpedanceSheet.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.RemoveParameter"></a>

### AcousticImpedanceSheet.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

