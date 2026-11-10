# `HatCrossSection`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.HatCrossSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.HatCrossSection(internalObject: Any)

<a id="HatCrossSection"></a>

### *class* HatCrossSection(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a HatCrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#HatCrossSection.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#HatCrossSection.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#HatCrossSection.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#HatCrossSection.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#HatCrossSection.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#HatCrossSection.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#HatCrossSection.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#HatCrossSection.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#HatCrossSection.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#HatCrossSection.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#HatCrossSection.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#HatCrossSection.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#HatCrossSection.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#HatCrossSection.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#HatCrossSection.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#HatCrossSection.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#HatCrossSection.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#HatCrossSection.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#HatCrossSection.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#HatCrossSection.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#HatCrossSection.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#HatCrossSection.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#HatCrossSection.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#HatCrossSection.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#HatCrossSection.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#HatCrossSection.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#HatCrossSection.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#HatCrossSection.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#HatCrossSection.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#HatCrossSection.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#HatCrossSection.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#HatCrossSection.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#HatCrossSection.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#HatCrossSection.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#HatCrossSection.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#HatCrossSection.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#HatCrossSection.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#HatCrossSection.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#HatCrossSection.Area)                                         | Gets the Area.                                                |
| [`AttachedRefs`](#HatCrossSection.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#HatCrossSection.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#HatCrossSection.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#HatCrossSection.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#HatCrossSection.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#HatCrossSection.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#HatCrossSection.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IYY`](#HatCrossSection.IYY)                                           | Gets the IYY.                                                 |
| [`IZZ`](#HatCrossSection.IZZ)                                           | Gets the IZZ.                                                 |
| [`IconName`](#HatCrossSection.IconName)                                 | IconName property.                                            |
| [`Images`](#HatCrossSection.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#HatCrossSection.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#HatCrossSection.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#HatCrossSection.Name)                                         | Name property.                                                |
| [`ObjectId`](#HatCrossSection.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#HatCrossSection.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#HatCrossSection.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#HatCrossSection.Parent)                                     | Parent property.                                              |
| [`Properties`](#HatCrossSection.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#HatCrossSection.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#HatCrossSection.State)                                       | State property.                                               |
| [`Thick1`](#HatCrossSection.Thick1)                                     | Gets or sets the Thick1.                                      |
| [`Thick2`](#HatCrossSection.Thick2)                                     | Gets or sets the Thick2.                                      |
| [`Thick3`](#HatCrossSection.Thick3)                                     | Gets or sets the Thick3.                                      |
| [`Thick4`](#HatCrossSection.Thick4)                                     | Gets or sets the Thick4.                                      |
| [`Thick5`](#HatCrossSection.Thick5)                                     | Gets or sets the Thick5.                                      |
| [`TransferableObjectId`](#HatCrossSection.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#HatCrossSection.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`Width1`](#HatCrossSection.Width1)                                     | Gets or sets the Width1.                                      |
| [`Width2`](#HatCrossSection.Width2)                                     | Gets or sets the Width2.                                      |
| [`Width3`](#HatCrossSection.Width3)                                     | Gets or sets the Width3.                                      |
| [`Width4`](#HatCrossSection.Width4)                                     | Gets or sets the Width4.                                      |

<a id="property-detail"></a>

## Property detail

<a id="HatCrossSection.Area"></a>

### *property* HatCrossSection.Area *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.AttachedRefs"></a>

### *property* HatCrossSection.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Children"></a>

### *property* HatCrossSection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.ClsId"></a>

### *property* HatCrossSection.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Comments"></a>

### *property* HatCrossSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.DataModelObjectCategory"></a>

### *property* HatCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Figures"></a>

### *property* HatCrossSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GroupingFolder"></a>

### *property* HatCrossSection.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.IYY"></a>

### *property* HatCrossSection.IYY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.IZZ"></a>

### *property* HatCrossSection.IZZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.IconName"></a>

### *property* HatCrossSection.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Images"></a>

### *property* HatCrossSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.ImportableObjectSourceId"></a>

### *property* HatCrossSection.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.InternalObject"></a>

### *property* HatCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Name"></a>

### *property* HatCrossSection.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.ObjectId"></a>

### *property* HatCrossSection.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.ObjectState"></a>

### *property* HatCrossSection.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.ObjectTags"></a>

### *property* HatCrossSection.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Parent"></a>

### *property* HatCrossSection.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Properties"></a>

### *property* HatCrossSection.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.ReadOnly"></a>

### *property* HatCrossSection.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.State"></a>

### *property* HatCrossSection.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Thick1"></a>

### *property* HatCrossSection.Thick1 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thick1.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Thick2"></a>

### *property* HatCrossSection.Thick2 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thick2.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Thick3"></a>

### *property* HatCrossSection.Thick3 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thick3.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Thick4"></a>

### *property* HatCrossSection.Thick4 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thick4.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Thick5"></a>

### *property* HatCrossSection.Thick5 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thick5.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.TransferableObjectId"></a>

### *property* HatCrossSection.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.VisibleProperties"></a>

### *property* HatCrossSection.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Width1"></a>

### *property* HatCrossSection.Width1 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Width1.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Width2"></a>

### *property* HatCrossSection.Width2 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Width2.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Width3"></a>

### *property* HatCrossSection.Width3 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Width3.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Width4"></a>

### *property* HatCrossSection.Width4 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Width4.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="HatCrossSection.Activate"></a>

### HatCrossSection.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.AddComment"></a>

### HatCrossSection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.AddFigure"></a>

### HatCrossSection.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.AddImage"></a>

### HatCrossSection.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Copy"></a>

### HatCrossSection.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.CopyTo"></a>

### HatCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.CreateObjRef"></a>

### HatCrossSection.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.CreateParameter"></a>

### HatCrossSection.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Cut"></a>

### HatCrossSection.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Delete"></a>

### HatCrossSection.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Duplicate"></a>

### HatCrossSection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Equals"></a>

### HatCrossSection.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetAPIName"></a>

### HatCrossSection.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetAllProperties"></a>

### HatCrossSection.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetChildren"></a>

### HatCrossSection.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### HatCrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetDetailsView"></a>

### HatCrossSection.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetEnumName"></a>

### HatCrossSection.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetHashCode"></a>

### HatCrossSection.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetIconFile"></a>

### HatCrossSection.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetLifetimeService"></a>

### HatCrossSection.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetObjectData"></a>

### HatCrossSection.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetParameter"></a>

### HatCrossSection.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetPath"></a>

### HatCrossSection.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetPropertyName"></a>

### HatCrossSection.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetPropertyValue"></a>

### HatCrossSection.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetVisibleProperties"></a>

### HatCrossSection.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetVisiblePropertyNames"></a>

### HatCrossSection.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GroupAllSimilarChildren"></a>

### HatCrossSection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GroupSimilarObjects"></a>

### HatCrossSection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.InitializeLifetimeService"></a>

### HatCrossSection.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.IsPropertyEditable"></a>

### HatCrossSection.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### HatCrossSection.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.IsPropertyVisible"></a>

### HatCrossSection.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### HatCrossSection.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Paste"></a>

### HatCrossSection.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.PropertyByAPIName"></a>

### HatCrossSection.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.PropertyById"></a>

### HatCrossSection.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.PropertyByName"></a>

### HatCrossSection.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.RemoveFromGroup"></a>

### HatCrossSection.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.RemoveParameter"></a>

### HatCrossSection.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

