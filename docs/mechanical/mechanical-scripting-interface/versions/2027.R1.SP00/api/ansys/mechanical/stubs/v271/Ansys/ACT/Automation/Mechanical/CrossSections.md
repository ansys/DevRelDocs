# `CrossSections`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CrossSections"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CrossSections(internalObject: Any)

<a id="CrossSections"></a>

### *class* CrossSections(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CrossSections.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CrossSections.Activate)                                                 | Activate the current object.                                                                |
| [`AddChannelCrossSection`](#CrossSections.AddChannelCrossSection)                     | Creates a new ChannelCrossSection                                                           |
| [`AddCircularCrossSection`](#CrossSections.AddCircularCrossSection)                   | Creates a new CircularCrossSection                                                          |
| [`AddCircularTubeCrossSection`](#CrossSections.AddCircularTubeCrossSection)           | Creates a new CircularTubeCrossSection                                                      |
| [`AddComment`](#CrossSections.AddComment)                                             | Creates a new child Comment.                                                                |
| [`AddFigure`](#CrossSections.AddFigure)                                               | Creates a new child Figure.                                                                 |
| [`AddHatCrossSection`](#CrossSections.AddHatCrossSection)                             | Creates a new HatCrossSection                                                               |
| [`AddHollowRectangularCrossSection`](#CrossSections.AddHollowRectangularCrossSection) | Creates a new HollowRectangularCrossSection                                                 |
| [`AddICrossSection`](#CrossSections.AddICrossSection)                                 | Creates a new ICrossSection                                                                 |
| [`AddImage`](#CrossSections.AddImage)                                                 | Creates a new child Image.                                                                  |
| [`AddLCrossSection`](#CrossSections.AddLCrossSection)                                 | Creates a new LCrossSection                                                                 |
| [`AddRectangularCrossSection`](#CrossSections.AddRectangularCrossSection)             | Creates a new RectangularCrossSection                                                       |
| [`AddTCrossSection`](#CrossSections.AddTCrossSection)                                 | Creates a new TCrossSection                                                                 |
| [`AddUserDefinedCrossSection`](#CrossSections.AddUserDefinedCrossSection)             | Creates a new UserDefinedCrossSection                                                       |
| [`AddZCrossSection`](#CrossSections.AddZCrossSection)                                 | Creates a new ZCrossSection                                                                 |
| [`Copy`](#CrossSections.Copy)                                                         | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CrossSections.CopyTo)                                                     | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CrossSections.CreateObjRef)                                         | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CrossSections.CreateParameter)                                   | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CrossSections.Cut)                                                           | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CrossSections.Delete)                                                     | Run the Delete action.                                                                      |
| [`Duplicate`](#CrossSections.Duplicate)                                               | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CrossSections.Equals)                                                     | Equals method.                                                                              |
| [`GetAPIName`](#CrossSections.GetAPIName)                                             | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CrossSections.GetAllProperties)                                 | GetAllProperties method.                                                                    |
| [`GetChildren`](#CrossSections.GetChildren)                                           | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CrossSections.GetDetailsView)                                     | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CrossSections.GetEnumName)                                           | Enum name bound to value                                                                    |
| [`GetHashCode`](#CrossSections.GetHashCode)                                           | GetHashCode method.                                                                         |
| [`GetIconFile`](#CrossSections.GetIconFile)                                           | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CrossSections.GetLifetimeService)                             | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CrossSections.GetObjectData)                                       | GetObjectData method.                                                                       |
| [`GetParameter`](#CrossSections.GetParameter)                                         | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CrossSections.GetPath)                                                   | GetPath method.                                                                             |
| [`GetPropertyName`](#CrossSections.GetPropertyName)                                   | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CrossSections.GetPropertyValue)                                 | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CrossSections.GetVisibleProperties)                         | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CrossSections.GetVisiblePropertyNames)                   | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CrossSections.GroupAllSimilarChildren)                   | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CrossSections.GroupSimilarObjects)                           | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CrossSections.InitializeLifetimeService)               | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CrossSections.IsPropertyEditable)                             | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CrossSections.IsPropertyVisible)                               | IsPropertyVisible method.                                                                   |
| [`NameCrossSectionsUniquely`](#CrossSections.NameCrossSectionsUniquely)               | programmatically give each of the Cross Section objects a unique name .                     |
| [`Paste`](#CrossSections.Paste)                                                       | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CrossSections.PropertyByAPIName)                               | Get a property by its API name.                                                             |
| [`PropertyById`](#CrossSections.PropertyById)                                         | PropertyById method.                                                                        |
| [`PropertyByName`](#CrossSections.PropertyByName)                                     | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CrossSections.RemoveFromGroup)                                   | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CrossSections.RemoveParameter)                                   | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#CrossSections.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#CrossSections.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#CrossSections.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#CrossSections.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CrossSections.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#CrossSections.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#CrossSections.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#CrossSections.IconName)                               | IconName property.                                            |
| [`Images`](#CrossSections.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#CrossSections.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#CrossSections.Name)                                       | Name property.                                                |
| [`ObjectId`](#CrossSections.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#CrossSections.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#CrossSections.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#CrossSections.Parent)                                   | Parent property.                                              |
| [`Properties`](#CrossSections.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#CrossSections.State)                                     | State property.                                               |
| [`VisibleProperties`](#CrossSections.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CrossSections.AttachedRefs"></a>

### *property* CrossSections.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Children"></a>

### *property* CrossSections.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.ClsId"></a>

### *property* CrossSections.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Comments"></a>

### *property* CrossSections.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.DataModelObjectCategory"></a>

### *property* CrossSections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Figures"></a>

### *property* CrossSections.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GroupingFolder"></a>

### *property* CrossSections.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.IconName"></a>

### *property* CrossSections.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Images"></a>

### *property* CrossSections.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.InternalObject"></a>

### *property* CrossSections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Name"></a>

### *property* CrossSections.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.ObjectId"></a>

### *property* CrossSections.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.ObjectState"></a>

### *property* CrossSections.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.ObjectTags"></a>

### *property* CrossSections.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Parent"></a>

### *property* CrossSections.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Properties"></a>

### *property* CrossSections.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.State"></a>

### *property* CrossSections.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.VisibleProperties"></a>

### *property* CrossSections.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CrossSections.Activate"></a>

### CrossSections.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddChannelCrossSection"></a>

### CrossSections.AddChannelCrossSection() → [Ansys.ACT.Automation.Mechanical.ChannelCrossSection](ChannelCrossSection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ChannelCrossSection)

Creates a new ChannelCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddCircularCrossSection"></a>

### CrossSections.AddCircularCrossSection() → [Ansys.ACT.Automation.Mechanical.CircularCrossSection](CircularCrossSection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CircularCrossSection)

Creates a new CircularCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddCircularTubeCrossSection"></a>

### CrossSections.AddCircularTubeCrossSection() → [Ansys.ACT.Automation.Mechanical.CircularTubeCrossSection](CircularTubeCrossSection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CircularTubeCrossSection)

Creates a new CircularTubeCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddComment"></a>

### CrossSections.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddFigure"></a>

### CrossSections.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddHatCrossSection"></a>

### CrossSections.AddHatCrossSection() → [Ansys.ACT.Automation.Mechanical.HatCrossSection](HatCrossSection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.HatCrossSection)

Creates a new HatCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddHollowRectangularCrossSection"></a>

### CrossSections.AddHollowRectangularCrossSection() → [Ansys.ACT.Automation.Mechanical.HollowRectangularCrossSection](HollowRectangularCrossSection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.HollowRectangularCrossSection)

Creates a new HollowRectangularCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddICrossSection"></a>

### CrossSections.AddICrossSection() → [Ansys.ACT.Automation.Mechanical.ICrossSection](ICrossSection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ICrossSection)

Creates a new ICrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddImage"></a>

### CrossSections.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddLCrossSection"></a>

### CrossSections.AddLCrossSection() → [Ansys.ACT.Automation.Mechanical.LCrossSection](LCrossSection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.LCrossSection)

Creates a new LCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddRectangularCrossSection"></a>

### CrossSections.AddRectangularCrossSection() → [Ansys.ACT.Automation.Mechanical.RectangularCrossSection](RectangularCrossSection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RectangularCrossSection)

Creates a new RectangularCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddTCrossSection"></a>

### CrossSections.AddTCrossSection() → [Ansys.ACT.Automation.Mechanical.TCrossSection](TCrossSection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TCrossSection)

Creates a new TCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddUserDefinedCrossSection"></a>

### CrossSections.AddUserDefinedCrossSection() → [Ansys.ACT.Automation.Mechanical.UserDefinedCrossSection](UserDefinedCrossSection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.UserDefinedCrossSection)

Creates a new UserDefinedCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddZCrossSection"></a>

### CrossSections.AddZCrossSection() → [Ansys.ACT.Automation.Mechanical.ZCrossSection](ZCrossSection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ZCrossSection)

Creates a new ZCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Copy"></a>

### CrossSections.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.CopyTo"></a>

### CrossSections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.CreateObjRef"></a>

### CrossSections.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.CreateParameter"></a>

### CrossSections.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Cut"></a>

### CrossSections.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Delete"></a>

### CrossSections.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Duplicate"></a>

### CrossSections.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Equals"></a>

### CrossSections.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GetAPIName"></a>

### CrossSections.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GetAllProperties"></a>

### CrossSections.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GetChildren"></a>

### CrossSections.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CrossSections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GetDetailsView"></a>

### CrossSections.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GetEnumName"></a>

### CrossSections.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GetHashCode"></a>

### CrossSections.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GetIconFile"></a>

### CrossSections.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GetLifetimeService"></a>

### CrossSections.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GetObjectData"></a>

### CrossSections.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GetParameter"></a>

### CrossSections.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GetPath"></a>

### CrossSections.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GetPropertyName"></a>

### CrossSections.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GetPropertyValue"></a>

### CrossSections.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GetVisibleProperties"></a>

### CrossSections.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GetVisiblePropertyNames"></a>

### CrossSections.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GroupAllSimilarChildren"></a>

### CrossSections.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GroupSimilarObjects"></a>

### CrossSections.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.InitializeLifetimeService"></a>

### CrossSections.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.IsPropertyEditable"></a>

### CrossSections.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CrossSections.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.IsPropertyVisible"></a>

### CrossSections.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CrossSections.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.NameCrossSectionsUniquely"></a>

### CrossSections.NameCrossSectionsUniquely() → [None](https://docs.python.org/3/builtins/constants.html#None)

programmatically give each of the Cross Section objects a unique name .

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Paste"></a>

### CrossSections.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.PropertyByAPIName"></a>

### CrossSections.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.PropertyById"></a>

### CrossSections.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.PropertyByName"></a>

### CrossSections.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.RemoveFromGroup"></a>

### CrossSections.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.RemoveParameter"></a>

### CrossSections.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

