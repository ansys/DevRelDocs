# ImagePlane

### *class* ImagePlane

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImagePlane.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#ImagePlane.Delete)                                   | Run the Delete action.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                            | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetChildren`](#id1)                                            | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`AddComment`](#ImagePlane.AddComment)                           | Creates a new child Comment.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`Import`](#ImagePlane.Import)                                   | Sets the image which is rendered to this plane, specified by filePath.  Upon success, ImageFilePath will return filePath.  Upon failure, ImageFilePath will remain unchanged.  Supported file formats include PNG, JPEG, BMP, and GIF.  If this is the first time an image has been set to this image plane and if Width and Height were never modified, the image plane will be automatically sized based on the model’s bounding box, respecting the image’s aspect ratio. |
| [`Activate`](#ImagePlane.Activate)                               | Activate the current object.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`CopyTo`](#ImagePlane.CopyTo)                                   | Copies all visible properties from this object to another.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`Duplicate`](#ImagePlane.Duplicate)                             | Creates a copy of the current DataModelObject.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GroupAllSimilarChildren`](#ImagePlane.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GroupSimilarObjects`](#ImagePlane.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`PropertyByName`](#ImagePlane.PropertyByName)                   | Get a property by its unique name.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`PropertyByAPIName`](#ImagePlane.PropertyByAPIName)             | Get a property by its API name.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`CreateParameter`](#ImagePlane.CreateParameter)                 | Creates a new parameter for a Property.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetParameter`](#ImagePlane.GetParameter)                       | Gets the parameter corresponding to the given property.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`RemoveParameter`](#ImagePlane.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                                                                                                                                                                                                                                                                            |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                                                                                              |
|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                    |
| [`Children`](#ImagePlane.Children)                                                                                  | Gets the list of children.                                                                                                                                      |
| [`Comments`](#ImagePlane.Comments)                                                                                  | Gets the list of associated comments.                                                                                                                           |
| [`Images`](#ImagePlane.Images)                                                                                      | Gets the list of associated images.                                                                                                                             |
| [`ImageFilePath`](#ImagePlane.ImageFilePath)                                                                        | Gets the file path for the rendered image.                                                                                                                      |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the coordinate system object used for defining the plane’s location and orientation.  This property is restricted to cartesian coordinate systems. |
| [`CoordinateSystemVisible`](#ImagePlane.CoordinateSystemVisible)                                                    | Gets or sets whether the annotation for the image’s coordinate system is rendered.                                                                              |
| [`PixelWidth`](#ImagePlane.PixelWidth)                                                                              | Gets the pixel width of the plane’s image.                                                                                                                      |
| [`PixelHeight`](#ImagePlane.PixelHeight)                                                                            | Gets the pixel height of the plane’s image.                                                                                                                     |
| [`Width`](#ImagePlane.Width)                                                                                        | Gets or sets the physical width of the image plane.                                                                                                             |
| [`Height`](#ImagePlane.Height)                                                                                      | Gets or sets the physical height of the image plane.                                                                                                            |
| [`FlipHorizontally`](#ImagePlane.FlipHorizontally)                                                                  | Gets or sets whether the rendered image on the plane should be flipped horizontally.                                                                            |
| [`FlipVertically`](#ImagePlane.FlipVertically)                                                                      | Gets or sets whether the rendered image on the plane should be flipped vertically.                                                                              |
| [`Translucency`](#ImagePlane.Translucency)                                                                          | Gets or sets the translucency of the plane, as a percentage ranging from 0 to 100.                                                                              |
| [`ShowAlways`](#ImagePlane.ShowAlways)                                                                              | Gets or sets whether the image plane will be shown independent of the active object in the tree.                                                                |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                                                                                              |
| [`Properties`](#ImagePlane.Properties)                                                                              | Gets the list of properties for this object.                                                                                                                    |
| [`VisibleProperties`](#ImagePlane.VisibleProperties)                                                                | Gets the list of properties that are visible for this object.                                                                                                   |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ImagePlane
```

## Property detail

### *property* ImagePlane.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAdvancedPostOutputAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.ImageFilePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the file path for the rendered image.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the coordinate system object used for defining the plane’s location and orientation.  This property is restricted to cartesian coordinate systems.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.CoordinateSystemVisible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the annotation for the image’s coordinate system is rendered.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.PixelWidth *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the pixel width of the plane’s image.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.PixelHeight *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the pixel height of the plane’s image.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.Width *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the physical width of the image plane.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.Height *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the physical height of the image plane.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.FlipHorizontally *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the rendered image on the plane should be flipped horizontally.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.FlipVertically *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the rendered image on the plane should be flipped vertically.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.Translucency *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the translucency of the plane, as a percentage ranging from 0 to 100.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.ShowAlways *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the image plane will be shown independent of the active object in the tree.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImagePlane.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImagePlane.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImagePlane.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImagePlane.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImagePlane.Import(filePath: System.String)

Sets the image which is rendered to this plane, specified by filePath.  Upon success, ImageFilePath will return filePath.  Upon failure, ImageFilePath will remain unchanged.  Supported file formats include PNG, JPEG, BMP, and GIF.  If this is the first time an image has been set to this image plane and if Width and Height were never modified, the image plane will be automatically sized based on the model’s bounding box, respecting the image’s aspect ratio.

<!-- !! processed by numpydoc !! -->

### ImagePlane.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImagePlane.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImagePlane.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImagePlane.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImagePlane.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImagePlane.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImagePlane.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImagePlane.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImagePlane.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImagePlane.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
