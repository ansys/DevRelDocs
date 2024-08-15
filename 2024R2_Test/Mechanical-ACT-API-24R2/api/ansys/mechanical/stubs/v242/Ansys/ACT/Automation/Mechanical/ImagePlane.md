# `ImagePlane`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ImagePlane

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImagePlane.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Delete`                  | Run the Delete action.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `GetChildren`             | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `GetChildren`             | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `AddComment`              | Creates a new child Comment.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `Import`                  | Sets the image which is rendered to this plane, specified by filePath.  Upon success, ImageFilePath will return filePath.  Upon failure, ImageFilePath will remain unchanged.  Supported file formats include PNG, JPEG, BMP, and GIF.  If this is the first time an image has been set to this image plane and if Width and Height were never modified, the image plane will be automatically sized based on the model's bounding box, respecting the image's aspect ratio. |
| `Activate`                | Activate the current object.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `CopyTo`                  | Copies all visible properties from this object to another.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `PropertyByName`          | Get a property by its unique name.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `PropertyByAPIName`       | Get a property by its API name.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `CreateParameter`         | Creates a new parameter for a Property.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `GetParameter`            | Gets the parameter corresponding to the given property.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                                                                                                                                                                                                                                                                            |

### Properties

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `InternalObject`          | Gets the internal object. For advanced usage only.                                                                                                              |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                                                                                                                    |
| `Children`                | Gets the list of children.                                                                                                                                      |
| `Comments`                | Gets the list of associated comments.                                                                                                                           |
| `Images`                  | Gets the list of associated images.                                                                                                                             |
| `ImageFilePath`           | Gets the file path for the rendered image.                                                                                                                      |
| `CoordinateSystem`        | Gets or sets the coordinate system object used for defining the plane's location and orientation.  This property is restricted to cartesian coordinate systems. |
| `CoordinateSystemVisible` | Gets or sets whether the annotation for the image's coordinate system is rendered.                                                                              |
| `PixelWidth`              | Gets the pixel width of the plane's image.                                                                                                                      |
| `PixelHeight`             | Gets the pixel height of the plane's image.                                                                                                                     |
| `Width`                   | Gets or sets the physical width of the image plane.                                                                                                             |
| `Height`                  | Gets or sets the physical height of the image plane.                                                                                                            |
| `FlipHorizontally`        | Gets or sets whether the rendered image on the plane should be flipped horizontally.                                                                            |
| `FlipVertically`          | Gets or sets whether the rendered image on the plane should be flipped vertically.                                                                              |
| `Translucency`            | Gets or sets the translucency of the plane, as a percentage ranging from 0 to 100.                                                                              |
| `ShowAlways`              | Gets or sets whether the image plane will be shown independent of the active object in the tree.                                                                |
| `InternalObject`          | Gets the internal object. For advanced usage only.                                                                                                              |
| `Properties`              | Gets the list of properties for this object.                                                                                                                    |
| `VisibleProperties`       | Gets the list of properties that are visible for this object.                                                                                                   |

<a id="property-detail"></a>

## Property detail

### *property* ImagePlane.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAdvancedPostOutputAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.ImageFilePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the file path for the rendered image.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the coordinate system object used for defining the plane's location and orientation.  This property is restricted to cartesian coordinate systems.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.CoordinateSystemVisible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the annotation for the image's coordinate system is rendered.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.PixelWidth *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the pixel width of the plane's image.

<!-- !! processed by numpydoc !! -->

### *property* ImagePlane.PixelHeight *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the pixel height of the plane's image.

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

<a id="method-detail"></a>

## Method detail

### ImagePlane.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImagePlane.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImagePlane.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImagePlane.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImagePlane.Import(filePath: System.String)

Sets the image which is rendered to this plane, specified by filePath.  Upon success, ImageFilePath will return filePath.  Upon failure, ImageFilePath will remain unchanged.  Supported file formats include PNG, JPEG, BMP, and GIF.  If this is the first time an image has been set to this image plane and if Width and Height were never modified, the image plane will be automatically sized based on the model's bounding box, respecting the image's aspect ratio.

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

