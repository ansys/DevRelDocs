# `HollowRectangularCrossSection`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.HollowRectangularCrossSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.HollowRectangularCrossSection(internalObject: Any)

<a id="HollowRectangularCrossSection"></a>

### *class* HollowRectangularCrossSection(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a HollowRectangularCrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#HollowRectangularCrossSection.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#HollowRectangularCrossSection.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#HollowRectangularCrossSection.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#HollowRectangularCrossSection.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#HollowRectangularCrossSection.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#HollowRectangularCrossSection.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#HollowRectangularCrossSection.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#HollowRectangularCrossSection.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#HollowRectangularCrossSection.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#HollowRectangularCrossSection.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#HollowRectangularCrossSection.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#HollowRectangularCrossSection.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#HollowRectangularCrossSection.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#HollowRectangularCrossSection.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#HollowRectangularCrossSection.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#HollowRectangularCrossSection.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#HollowRectangularCrossSection.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#HollowRectangularCrossSection.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#HollowRectangularCrossSection.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#HollowRectangularCrossSection.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#HollowRectangularCrossSection.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#HollowRectangularCrossSection.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#HollowRectangularCrossSection.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#HollowRectangularCrossSection.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#HollowRectangularCrossSection.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#HollowRectangularCrossSection.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#HollowRectangularCrossSection.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#HollowRectangularCrossSection.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#HollowRectangularCrossSection.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#HollowRectangularCrossSection.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#HollowRectangularCrossSection.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#HollowRectangularCrossSection.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#HollowRectangularCrossSection.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#HollowRectangularCrossSection.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#HollowRectangularCrossSection.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#HollowRectangularCrossSection.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#HollowRectangularCrossSection.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#HollowRectangularCrossSection.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#HollowRectangularCrossSection.Area)                                         | Gets the Area.                                                |
| [`AttachedRefs`](#HollowRectangularCrossSection.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#HollowRectangularCrossSection.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#HollowRectangularCrossSection.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#HollowRectangularCrossSection.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#HollowRectangularCrossSection.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#HollowRectangularCrossSection.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#HollowRectangularCrossSection.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IYY`](#HollowRectangularCrossSection.IYY)                                           | Gets the IYY.                                                 |
| [`IZZ`](#HollowRectangularCrossSection.IZZ)                                           | Gets the IZZ.                                                 |
| [`IconName`](#HollowRectangularCrossSection.IconName)                                 | IconName property.                                            |
| [`Images`](#HollowRectangularCrossSection.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#HollowRectangularCrossSection.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#HollowRectangularCrossSection.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#HollowRectangularCrossSection.Name)                                         | Name property.                                                |
| [`ObjectId`](#HollowRectangularCrossSection.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#HollowRectangularCrossSection.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#HollowRectangularCrossSection.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#HollowRectangularCrossSection.Parent)                                     | Parent property.                                              |
| [`Properties`](#HollowRectangularCrossSection.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#HollowRectangularCrossSection.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#HollowRectangularCrossSection.State)                                       | State property.                                               |
| [`Thick1`](#HollowRectangularCrossSection.Thick1)                                     | Gets or sets the Thick1.                                      |
| [`Thick2`](#HollowRectangularCrossSection.Thick2)                                     | Gets or sets the Thick2.                                      |
| [`Thick3`](#HollowRectangularCrossSection.Thick3)                                     | Gets or sets the Thick3.                                      |
| [`Thick4`](#HollowRectangularCrossSection.Thick4)                                     | Gets or sets the Thick4.                                      |
| [`TransferableObjectId`](#HollowRectangularCrossSection.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#HollowRectangularCrossSection.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`Width1`](#HollowRectangularCrossSection.Width1)                                     | Gets or sets the Width1.                                      |
| [`Width2`](#HollowRectangularCrossSection.Width2)                                     | Gets or sets the Width2.                                      |

<a id="property-detail"></a>

## Property detail

<a id="HollowRectangularCrossSection.Area"></a>

### *property* HollowRectangularCrossSection.Area *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.AttachedRefs"></a>

### *property* HollowRectangularCrossSection.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Children"></a>

### *property* HollowRectangularCrossSection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.ClsId"></a>

### *property* HollowRectangularCrossSection.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Comments"></a>

### *property* HollowRectangularCrossSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.DataModelObjectCategory"></a>

### *property* HollowRectangularCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Figures"></a>

### *property* HollowRectangularCrossSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.GroupingFolder"></a>

### *property* HollowRectangularCrossSection.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.IYY"></a>

### *property* HollowRectangularCrossSection.IYY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.IZZ"></a>

### *property* HollowRectangularCrossSection.IZZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.IconName"></a>

### *property* HollowRectangularCrossSection.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Images"></a>

### *property* HollowRectangularCrossSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.ImportableObjectSourceId"></a>

### *property* HollowRectangularCrossSection.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.InternalObject"></a>

### *property* HollowRectangularCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Name"></a>

### *property* HollowRectangularCrossSection.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.ObjectId"></a>

### *property* HollowRectangularCrossSection.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.ObjectState"></a>

### *property* HollowRectangularCrossSection.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.ObjectTags"></a>

### *property* HollowRectangularCrossSection.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Parent"></a>

### *property* HollowRectangularCrossSection.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Properties"></a>

### *property* HollowRectangularCrossSection.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.ReadOnly"></a>

### *property* HollowRectangularCrossSection.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.State"></a>

### *property* HollowRectangularCrossSection.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Thick1"></a>

### *property* HollowRectangularCrossSection.Thick1 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thick1.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Thick2"></a>

### *property* HollowRectangularCrossSection.Thick2 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thick2.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Thick3"></a>

### *property* HollowRectangularCrossSection.Thick3 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thick3.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Thick4"></a>

### *property* HollowRectangularCrossSection.Thick4 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thick4.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.TransferableObjectId"></a>

### *property* HollowRectangularCrossSection.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.VisibleProperties"></a>

### *property* HollowRectangularCrossSection.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Width1"></a>

### *property* HollowRectangularCrossSection.Width1 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Width1.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Width2"></a>

### *property* HollowRectangularCrossSection.Width2 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Width2.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="HollowRectangularCrossSection.Activate"></a>

### HollowRectangularCrossSection.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.AddComment"></a>

### HollowRectangularCrossSection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.AddFigure"></a>

### HollowRectangularCrossSection.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.AddImage"></a>

### HollowRectangularCrossSection.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Copy"></a>

### HollowRectangularCrossSection.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.CopyTo"></a>

### HollowRectangularCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.CreateObjRef"></a>

### HollowRectangularCrossSection.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.CreateParameter"></a>

### HollowRectangularCrossSection.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Cut"></a>

### HollowRectangularCrossSection.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Delete"></a>

### HollowRectangularCrossSection.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Duplicate"></a>

### HollowRectangularCrossSection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Equals"></a>

### HollowRectangularCrossSection.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.GetAPIName"></a>

### HollowRectangularCrossSection.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.GetAllProperties"></a>

### HollowRectangularCrossSection.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.GetChildren"></a>

### HollowRectangularCrossSection.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### HollowRectangularCrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.GetDetailsView"></a>

### HollowRectangularCrossSection.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.GetEnumName"></a>

### HollowRectangularCrossSection.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.GetHashCode"></a>

### HollowRectangularCrossSection.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.GetIconFile"></a>

### HollowRectangularCrossSection.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.GetLifetimeService"></a>

### HollowRectangularCrossSection.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.GetObjectData"></a>

### HollowRectangularCrossSection.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.GetParameter"></a>

### HollowRectangularCrossSection.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.GetPath"></a>

### HollowRectangularCrossSection.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.GetPropertyName"></a>

### HollowRectangularCrossSection.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.GetPropertyValue"></a>

### HollowRectangularCrossSection.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.GetVisibleProperties"></a>

### HollowRectangularCrossSection.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.GetVisiblePropertyNames"></a>

### HollowRectangularCrossSection.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.GroupAllSimilarChildren"></a>

### HollowRectangularCrossSection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.GroupSimilarObjects"></a>

### HollowRectangularCrossSection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.InitializeLifetimeService"></a>

### HollowRectangularCrossSection.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.IsPropertyEditable"></a>

### HollowRectangularCrossSection.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### HollowRectangularCrossSection.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.IsPropertyVisible"></a>

### HollowRectangularCrossSection.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### HollowRectangularCrossSection.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.Paste"></a>

### HollowRectangularCrossSection.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.PropertyByAPIName"></a>

### HollowRectangularCrossSection.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.PropertyById"></a>

### HollowRectangularCrossSection.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.PropertyByName"></a>

### HollowRectangularCrossSection.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.RemoveFromGroup"></a>

### HollowRectangularCrossSection.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="HollowRectangularCrossSection.RemoveParameter"></a>

### HollowRectangularCrossSection.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

