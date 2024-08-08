# `ImagePlane`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImagePlane

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImagePlane.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.Delete)                                   | Run the Delete action.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#id1)                                            | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#id1)                                            | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.AddComment)                           | Creates a new child Comment.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`Import`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.Import)                                   | Sets the image which is rendered to this plane, specified by filePath.  Upon success, ImageFilePath will return filePath.  Upon failure, ImageFilePath will remain unchanged.  Supported file formats include PNG, JPEG, BMP, and GIF.  If this is the first time an image has been set to this image plane and if Width and Height were never modified, the image plane will be automatically sized based on the model's bounding box, respecting the image's aspect ratio. |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.Activate)                               | Activate the current object.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.CopyTo)                                   | Copies all visible properties from this object to another.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.Duplicate)                             | Creates a copy of the current DataModelObject.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.PropertyByName)                   | Get a property by its unique name.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.PropertyByAPIName)             | Get a property by its API name.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.CreateParameter)                 | Creates a new parameter for a Property.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.GetParameter)                       | Gets the parameter corresponding to the given property.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                                                                                                                                                                                                                                                                            |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#id0)                                         | Gets the internal object. For advanced usage only.                                                                                                              |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                                                    |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.Children)                               | Gets the list of children.                                                                                                                                      |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.Comments)                               | Gets the list of associated comments.                                                                                                                           |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.Images)                                   | Gets the list of associated images.                                                                                                                             |
| [`ImageFilePath`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.ImageFilePath)                     | Gets the file path for the rendered image.                                                                                                                      |
| [`CoordinateSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.CoordinateSystem)               | Gets or sets the coordinate system object used for defining the plane's location and orientation.  This property is restricted to cartesian coordinate systems. |
| [`CoordinateSystemVisible`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.CoordinateSystemVisible) | Gets or sets whether the annotation for the image's coordinate system is rendered.                                                                              |
| [`PixelWidth`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.PixelWidth)                           | Gets the pixel width of the plane's image.                                                                                                                      |
| [`PixelHeight`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.PixelHeight)                         | Gets the pixel height of the plane's image.                                                                                                                     |
| [`Width`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.Width)                                     | Gets or sets the physical width of the image plane.                                                                                                             |
| [`Height`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.Height)                                   | Gets or sets the physical height of the image plane.                                                                                                            |
| [`FlipHorizontally`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.FlipHorizontally)               | Gets or sets whether the rendered image on the plane should be flipped horizontally.                                                                            |
| [`FlipVertically`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.FlipVertically)                   | Gets or sets whether the rendered image on the plane should be flipped vertically.                                                                              |
| [`Translucency`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.Translucency)                       | Gets or sets the translucency of the plane, as a percentage ranging from 0 to 100.                                                                              |
| [`ShowAlways`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.ShowAlways)                           | Gets or sets whether the image plane will be shown independent of the active object in the tree.                                                                |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#id0)                                         | Gets the internal object. For advanced usage only.                                                                                                              |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.Properties)                           | Gets the list of properties for this object.                                                                                                                    |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImagePlane.md#ImagePlane.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                                                   |

<a id="property-detail"></a>

## Property detail

<a id="ImagePlane.InternalObject"></a>

### *property* ImagePlane.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAdvancedPostOutputAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.DataModelObjectCategory"></a>

### *property* ImagePlane.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Children"></a>

### *property* ImagePlane.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Comments"></a>

### *property* ImagePlane.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Images"></a>

### *property* ImagePlane.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.ImageFilePath"></a>

### *property* ImagePlane.ImageFilePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the file path for the rendered image.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.CoordinateSystem"></a>

### *property* ImagePlane.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the coordinate system object used for defining the plane's location and orientation.  This property is restricted to cartesian coordinate systems.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.CoordinateSystemVisible"></a>

### *property* ImagePlane.CoordinateSystemVisible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the annotation for the image's coordinate system is rendered.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.PixelWidth"></a>

### *property* ImagePlane.PixelWidth *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the pixel width of the plane's image.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.PixelHeight"></a>

### *property* ImagePlane.PixelHeight *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the pixel height of the plane's image.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Width"></a>

### *property* ImagePlane.Width *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the physical width of the image plane.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Height"></a>

### *property* ImagePlane.Height *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the physical height of the image plane.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.FlipHorizontally"></a>

### *property* ImagePlane.FlipHorizontally *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the rendered image on the plane should be flipped horizontally.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.FlipVertically"></a>

### *property* ImagePlane.FlipVertically *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the rendered image on the plane should be flipped vertically.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Translucency"></a>

### *property* ImagePlane.Translucency *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the translucency of the plane, as a percentage ranging from 0 to 100.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.ShowAlways"></a>

### *property* ImagePlane.ShowAlways *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the image plane will be shown independent of the active object in the tree.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImagePlane.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Properties"></a>

### *property* ImagePlane.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.VisibleProperties"></a>

### *property* ImagePlane.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImagePlane.Delete"></a>

### ImagePlane.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GetChildren"></a>

### ImagePlane.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImagePlane.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.AddComment"></a>

### ImagePlane.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Import"></a>

### ImagePlane.Import(filePath: System.String)

Sets the image which is rendered to this plane, specified by filePath.  Upon success, ImageFilePath will return filePath.  Upon failure, ImageFilePath will remain unchanged.  Supported file formats include PNG, JPEG, BMP, and GIF.  If this is the first time an image has been set to this image plane and if Width and Height were never modified, the image plane will be automatically sized based on the model's bounding box, respecting the image's aspect ratio.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Activate"></a>

### ImagePlane.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.CopyTo"></a>

### ImagePlane.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.Duplicate"></a>

### ImagePlane.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GroupAllSimilarChildren"></a>

### ImagePlane.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GroupSimilarObjects"></a>

### ImagePlane.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.PropertyByName"></a>

### ImagePlane.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.PropertyByAPIName"></a>

### ImagePlane.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.CreateParameter"></a>

### ImagePlane.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.GetParameter"></a>

### ImagePlane.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImagePlane.RemoveParameter"></a>

### ImagePlane.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

