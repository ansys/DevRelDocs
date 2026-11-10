# `DistributedMass`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.DistributedMass"></a>

#### *class* Ansys.ACT.Automation.Mechanical.DistributedMass(internalObject: Any)

<a id="DistributedMass"></a>

### *class* DistributedMass(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a DistributedMass.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#DistributedMass.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#DistributedMass.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#DistributedMass.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#DistributedMass.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#DistributedMass.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#DistributedMass.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#DistributedMass.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#DistributedMass.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#DistributedMass.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#DistributedMass.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#DistributedMass.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#DistributedMass.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#DistributedMass.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#DistributedMass.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#DistributedMass.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#DistributedMass.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#DistributedMass.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#DistributedMass.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#DistributedMass.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#DistributedMass.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#DistributedMass.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#DistributedMass.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#DistributedMass.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#DistributedMass.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#DistributedMass.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#DistributedMass.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#DistributedMass.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#DistributedMass.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#DistributedMass.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#DistributedMass.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#DistributedMass.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#DistributedMass.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#DistributedMass.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#DistributedMass.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#DistributedMass.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#DistributedMass.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#DistributedMass.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#DistributedMass.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#DistributedMass.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#DistributedMass.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#DistributedMass.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#DistributedMass.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#DistributedMass.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#DistributedMass.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`ElementAPDLName`](#DistributedMass.ElementAPDLName)                   | Gets or sets the ElementAPDLName.                             |
| [`Figures`](#DistributedMass.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#DistributedMass.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#DistributedMass.IconName)                                 | IconName property.                                            |
| [`Images`](#DistributedMass.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#DistributedMass.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#DistributedMass.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`IsDistributedMass`](#DistributedMass.IsDistributedMass)               | Gets the IsDistributedMass.                                   |
| [`Location`](#DistributedMass.Location)                                 | Gets or sets the Geometry.                                    |
| [`MassPerUnitArea`](#DistributedMass.MassPerUnitArea)                   | Gets or sets the MassPerUnitArea.                             |
| [`MassType`](#DistributedMass.MassType)                                 | Gets or sets the MassType.                                    |
| [`Name`](#DistributedMass.Name)                                         | Name property.                                                |
| [`ObjectId`](#DistributedMass.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#DistributedMass.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#DistributedMass.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#DistributedMass.Parent)                                     | Parent property.                                              |
| [`Properties`](#DistributedMass.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#DistributedMass.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`RemotePoint`](RemotePoint.md#RemotePoint)                             | Gets the remote point associated to the point mass.           |
| [`State`](#DistributedMass.State)                                       | State property.                                               |
| [`Suppressed`](#DistributedMass.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TotalMass`](#DistributedMass.TotalMass)                               | Gets or sets the TotalMass.                                   |
| [`TransferableObjectId`](#DistributedMass.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#DistributedMass.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="DistributedMass.AttachedRefs"></a>

### *property* DistributedMass.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Children"></a>

### *property* DistributedMass.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.ClsId"></a>

### *property* DistributedMass.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Comments"></a>

### *property* DistributedMass.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.DataModelObjectCategory"></a>

### *property* DistributedMass.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.ElementAPDLName"></a>

### *property* DistributedMass.ElementAPDLName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElementAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Figures"></a>

### *property* DistributedMass.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GroupingFolder"></a>

### *property* DistributedMass.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.IconName"></a>

### *property* DistributedMass.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Images"></a>

### *property* DistributedMass.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.ImportableObjectSourceId"></a>

### *property* DistributedMass.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.InternalObject"></a>

### *property* DistributedMass.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPointMassAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.IsDistributedMass"></a>

### *property* DistributedMass.IsDistributedMass *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsDistributedMass.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Location"></a>

### *property* DistributedMass.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.MassPerUnitArea"></a>

### *property* DistributedMass.MassPerUnitArea *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MassPerUnitArea.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.MassType"></a>

### *property* DistributedMass.MassType *: [Ansys.Mechanical.DataModel.Enums.DistributedMassInputType](../../../Mechanical/DataModel/Enums/DistributedMassInputType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DistributedMassInputType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MassType.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Name"></a>

### *property* DistributedMass.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.ObjectId"></a>

### *property* DistributedMass.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.ObjectState"></a>

### *property* DistributedMass.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.ObjectTags"></a>

### *property* DistributedMass.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Parent"></a>

### *property* DistributedMass.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Properties"></a>

### *property* DistributedMass.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.ReadOnly"></a>

### *property* DistributedMass.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.RemotePoint"></a>

### *property* DistributedMass.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.State"></a>

### *property* DistributedMass.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Suppressed"></a>

### *property* DistributedMass.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.TotalMass"></a>

### *property* DistributedMass.TotalMass *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TotalMass.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.TransferableObjectId"></a>

### *property* DistributedMass.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.VisibleProperties"></a>

### *property* DistributedMass.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DistributedMass.Activate"></a>

### DistributedMass.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.AddCommandSnippet"></a>

### DistributedMass.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.AddComment"></a>

### DistributedMass.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.AddFigure"></a>

### DistributedMass.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.AddImage"></a>

### DistributedMass.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Copy"></a>

### DistributedMass.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.CopyTo"></a>

### DistributedMass.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.CreateObjRef"></a>

### DistributedMass.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.CreateParameter"></a>

### DistributedMass.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Cut"></a>

### DistributedMass.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Delete"></a>

### DistributedMass.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Duplicate"></a>

### DistributedMass.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Equals"></a>

### DistributedMass.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetAPIName"></a>

### DistributedMass.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetAllProperties"></a>

### DistributedMass.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetChildren"></a>

### DistributedMass.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### DistributedMass.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetDetailsView"></a>

### DistributedMass.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetEnumName"></a>

### DistributedMass.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetHashCode"></a>

### DistributedMass.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetIconFile"></a>

### DistributedMass.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetLifetimeService"></a>

### DistributedMass.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetObjectData"></a>

### DistributedMass.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetParameter"></a>

### DistributedMass.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetPath"></a>

### DistributedMass.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetPropertyName"></a>

### DistributedMass.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetPropertyValue"></a>

### DistributedMass.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetVisibleProperties"></a>

### DistributedMass.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetVisiblePropertyNames"></a>

### DistributedMass.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GroupAllSimilarChildren"></a>

### DistributedMass.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GroupSimilarObjects"></a>

### DistributedMass.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.InitializeLifetimeService"></a>

### DistributedMass.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.IsPropertyEditable"></a>

### DistributedMass.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DistributedMass.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.IsPropertyVisible"></a>

### DistributedMass.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DistributedMass.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Paste"></a>

### DistributedMass.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.PropertyByAPIName"></a>

### DistributedMass.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.PropertyById"></a>

### DistributedMass.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.PropertyByName"></a>

### DistributedMass.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.RemoveFromGroup"></a>

### DistributedMass.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.RemoveParameter"></a>

### DistributedMass.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

