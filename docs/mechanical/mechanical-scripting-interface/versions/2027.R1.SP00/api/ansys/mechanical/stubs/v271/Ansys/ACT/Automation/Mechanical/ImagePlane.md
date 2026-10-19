# `ImagePlane`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImagePlane"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImagePlane(internalObject: Any)

<a id="ImagePlane"></a>

### *class* ImagePlane(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ImagePlane.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#ImagePlane.Activate)                                   | Activate the current object.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`AddComment`](#ImagePlane.AddComment)                               | Creates a new child Comment.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`Copy`](#ImagePlane.Copy)                                           | Copies the current DataModelObject.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`CopyTo`](#ImagePlane.CopyTo)                                       | Copies all visible properties from this object to another.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`CreateObjRef`](#ImagePlane.CreateObjRef)                           | CreateObjRef method.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`CreateParameter`](#ImagePlane.CreateParameter)                     | Creates a new parameter for a Property.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`Cut`](#ImagePlane.Cut)                                             | Cuts the current DataModelObject.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`Delete`](#ImagePlane.Delete)                                       | Run the Delete action.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`Duplicate`](#ImagePlane.Duplicate)                                 | Creates a copy of the current DataModelObject.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`Equals`](#ImagePlane.Equals)                                       | Equals method.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetAPIName`](#ImagePlane.GetAPIName)                               | Property name bound to dispId.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetAllProperties`](#ImagePlane.GetAllProperties)                   | GetAllProperties method.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetChildren`](#ImagePlane.GetChildren)                             | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetDetailsView`](#ImagePlane.GetDetailsView)                       | GetDetailsView method.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetEnumName`](#ImagePlane.GetEnumName)                             | Enum name bound to value                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetHashCode`](#ImagePlane.GetHashCode)                             | GetHashCode method.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetIconFile`](#ImagePlane.GetIconFile)                             | GetIconFile method.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetLifetimeService`](#ImagePlane.GetLifetimeService)               | GetLifetimeService method.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetObjectData`](#ImagePlane.GetObjectData)                         | GetObjectData method.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetParameter`](#ImagePlane.GetParameter)                           | Gets the parameter corresponding to the given property.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetPath`](#ImagePlane.GetPath)                                     | GetPath method.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetPropertyName`](#ImagePlane.GetPropertyName)                     | GetPropertyName method.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetPropertyValue`](#ImagePlane.GetPropertyValue)                   | GetPropertyValue method.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetVisibleProperties`](#ImagePlane.GetVisibleProperties)           | GetVisibleProperties method.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetVisiblePropertyNames`](#ImagePlane.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GroupAllSimilarChildren`](#ImagePlane.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GroupSimilarObjects`](#ImagePlane.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`Import`](#ImagePlane.Import)                                       | Sets the image which is rendered to this plane, specified by filePath.  Upon success, ImageFilePath will return filePath.  Upon failure, ImageFilePath will remain unchanged.  Supported file formats include PNG, JPEG, BMP, and GIF.  If this is the first time an image has been set to this image plane and if Width and Height were never modified, the image plane will be automatically sized based on the model's bounding box, respecting the image's aspect ratio. |
| [`InitializeLifetimeService`](#ImagePlane.InitializeLifetimeService) | InitializeLifetimeService method.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`IsPropertyEditable`](#ImagePlane.IsPropertyEditable)               | IsPropertyEditable method.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`IsPropertyVisible`](#ImagePlane.IsPropertyVisible)                 | IsPropertyVisible method.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`Paste`](#ImagePlane.Paste)                                         | Pastes to the current DataModelObject context.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`PropertyByAPIName`](#ImagePlane.PropertyByAPIName)                 | Get a property by its API name.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`PropertyById`](#ImagePlane.PropertyById)                           | PropertyById method.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`PropertyByName`](#ImagePlane.PropertyByName)                       | Get a property by its unique name.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`RemoveFromGroup`](#ImagePlane.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.                                                                                                                                                                                                                                                                                                                                                                                  |
| [`RemoveParameter`](#ImagePlane.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                                                                                                                                                                                                                                                                            |

### Properties

| Name | Description |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#ImagePlane.AttachedRefs)                       | AttachedRefs property.                                                                                                                                          |
| [`Children`](#ImagePlane.Children)                               | Gets the list of children.                                                                                                                                      |
| [`ClsId`](#ImagePlane.ClsId)                                     | ClsId property.                                                                                                                                                 |
| [`Comments`](#ImagePlane.Comments)                               | Gets the list of associated comments.                                                                                                                           |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)       | Gets or sets the coordinate system object used for defining the plane's location and orientation.  This property is restricted to cartesian coordinate systems. |
| [`CoordinateSystemVisible`](#ImagePlane.CoordinateSystemVisible) | Gets or sets whether the annotation for the image's coordinate system is rendered.                                                                              |
| [`DataModelObjectCategory`](#ImagePlane.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                                                    |
| [`FlipHorizontally`](#ImagePlane.FlipHorizontally)               | Gets or sets whether the rendered image on the plane should be flipped horizontally.                                                                            |
| [`FlipVertically`](#ImagePlane.FlipVertically)                   | Gets or sets whether the rendered image on the plane should be flipped vertically.                                                                              |
| [`GroupingFolder`](#ImagePlane.GroupingFolder)                   | GroupingFolder property.                                                                                                                                        |
| [`Height`](#ImagePlane.Height)                                   | Gets or sets the physical height of the image plane.                                                                                                            |
| [`IconName`](#ImagePlane.IconName)                               | IconName property.                                                                                                                                              |
| [`ImageFilePath`](#ImagePlane.ImageFilePath)                     | Gets the file path for the rendered image.                                                                                                                      |
| [`Images`](#ImagePlane.Images)                                   | Gets the list of associated images.                                                                                                                             |
| [`InternalObject`](#ImagePlane.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                                              |
| [`Name`](#ImagePlane.Name)                                       | Name property.                                                                                                                                                  |
| [`ObjectId`](#ImagePlane.ObjectId)                               | ObjectId property.                                                                                                                                              |
| [`ObjectState`](#ImagePlane.ObjectState)                         | ObjectState property.                                                                                                                                           |
| [`ObjectTags`](#ImagePlane.ObjectTags)                           | ObjectTags property.                                                                                                                                            |
| [`Parent`](#ImagePlane.Parent)                                   | Parent property.                                                                                                                                                |
| [`PixelHeight`](#ImagePlane.PixelHeight)                         | Gets the pixel height of the plane's image.                                                                                                                     |
| [`PixelWidth`](#ImagePlane.PixelWidth)                           | Gets the pixel width of the plane's image.                                                                                                                      |
| [`Properties`](#ImagePlane.Properties)                           | Gets the list of properties for this object.                                                                                                                    |
| [`ShowAlways`](#ImagePlane.ShowAlways)                           | Gets or sets whether the image plane will be shown independent of the active object in the tree.                                                                |
| [`State`](#ImagePlane.State)                                     | State property.                                                                                                                                                 |
| [`Translucency`](#ImagePlane.Translucency)                       | Gets or sets the translucency of the plane, as a percentage ranging from 0 to 100.                                                                              |
| [`VisibleProperties`](#ImagePlane.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                                                   |
| [`Width`](#ImagePlane.Width)                                     | Gets or sets the physical width of the image plane.                                                                                                             |

<a id="property-detail"></a>

## Property detail

<a id="ImagePlane.AttachedRefs"></a>

### *property* ImagePlane.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Children"></a>

### *property* ImagePlane.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.ClsId"></a>

### *property* ImagePlane.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Comments"></a>

### *property* ImagePlane.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.CoordinateSystem"></a>

### *property* ImagePlane.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the coordinate system object used for defining the plane's location and orientation.  This property is restricted to cartesian coordinate systems.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.CoordinateSystemVisible"></a>

### *property* ImagePlane.CoordinateSystemVisible *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the annotation for the image's coordinate system is rendered.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.DataModelObjectCategory"></a>

### *property* ImagePlane.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.FlipHorizontally"></a>

### *property* ImagePlane.FlipHorizontally *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the rendered image on the plane should be flipped horizontally.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.FlipVertically"></a>

### *property* ImagePlane.FlipVertically *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the rendered image on the plane should be flipped vertically.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GroupingFolder"></a>

### *property* ImagePlane.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Height"></a>

### *property* ImagePlane.Height *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the physical height of the image plane.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.IconName"></a>

### *property* ImagePlane.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.ImageFilePath"></a>

### *property* ImagePlane.ImageFilePath *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the file path for the rendered image.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Images"></a>

### *property* ImagePlane.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.InternalObject"></a>

### *property* ImagePlane.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAdvancedPostOutputAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Name"></a>

### *property* ImagePlane.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.ObjectId"></a>

### *property* ImagePlane.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.ObjectState"></a>

### *property* ImagePlane.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.ObjectTags"></a>

### *property* ImagePlane.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Parent"></a>

### *property* ImagePlane.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.PixelHeight"></a>

### *property* ImagePlane.PixelHeight *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the pixel height of the plane's image.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.PixelWidth"></a>

### *property* ImagePlane.PixelWidth *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the pixel width of the plane's image.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Properties"></a>

### *property* ImagePlane.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.ShowAlways"></a>

### *property* ImagePlane.ShowAlways *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the image plane will be shown independent of the active object in the tree.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.State"></a>

### *property* ImagePlane.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Translucency"></a>

### *property* ImagePlane.Translucency *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the translucency of the plane, as a percentage ranging from 0 to 100.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.VisibleProperties"></a>

### *property* ImagePlane.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Width"></a>

### *property* ImagePlane.Width *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the physical width of the image plane.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImagePlane.Activate"></a>

### ImagePlane.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.AddComment"></a>

### ImagePlane.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Copy"></a>

### ImagePlane.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.CopyTo"></a>

### ImagePlane.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.CreateObjRef"></a>

### ImagePlane.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.CreateParameter"></a>

### ImagePlane.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Cut"></a>

### ImagePlane.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Delete"></a>

### ImagePlane.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Duplicate"></a>

### ImagePlane.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Equals"></a>

### ImagePlane.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GetAPIName"></a>

### ImagePlane.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GetAllProperties"></a>

### ImagePlane.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GetChildren"></a>

### ImagePlane.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ImagePlane.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GetDetailsView"></a>

### ImagePlane.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GetEnumName"></a>

### ImagePlane.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GetHashCode"></a>

### ImagePlane.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GetIconFile"></a>

### ImagePlane.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GetLifetimeService"></a>

### ImagePlane.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GetObjectData"></a>

### ImagePlane.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GetParameter"></a>

### ImagePlane.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GetPath"></a>

### ImagePlane.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GetPropertyName"></a>

### ImagePlane.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GetPropertyValue"></a>

### ImagePlane.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GetVisibleProperties"></a>

### ImagePlane.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GetVisiblePropertyNames"></a>

### ImagePlane.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GroupAllSimilarChildren"></a>

### ImagePlane.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GroupSimilarObjects"></a>

### ImagePlane.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Import"></a>

### ImagePlane.Import(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the image which is rendered to this plane, specified by filePath.  Upon success, ImageFilePath will return filePath.  Upon failure, ImageFilePath will remain unchanged.  Supported file formats include PNG, JPEG, BMP, and GIF.  If this is the first time an image has been set to this image plane and if Width and Height were never modified, the image plane will be automatically sized based on the model's bounding box, respecting the image's aspect ratio.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.InitializeLifetimeService"></a>

### ImagePlane.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.IsPropertyEditable"></a>

### ImagePlane.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImagePlane.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.IsPropertyVisible"></a>

### ImagePlane.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImagePlane.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Paste"></a>

### ImagePlane.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.PropertyByAPIName"></a>

### ImagePlane.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.PropertyById"></a>

### ImagePlane.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.PropertyByName"></a>

### ImagePlane.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.RemoveFromGroup"></a>

### ImagePlane.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.RemoveParameter"></a>

### ImagePlane.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

