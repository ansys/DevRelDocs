# FluxLinkage

### *class* FluxLinkage

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FluxLinkage.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#FluxLinkage.Delete)                                   | Run the Delete action.                                                            |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FluxLinkage.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#FluxLinkage.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FluxLinkage.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FluxLinkage.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FluxLinkage.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FluxLinkage.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FluxLinkage.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FluxLinkage.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FluxLinkage.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#FluxLinkage.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FluxLinkage.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FluxLinkage.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Multiplier`](#FluxLinkage.Multiplier)                                                                                   | Gets or sets the Multiplier.                                  |
| [`Children`](#FluxLinkage.Children)                                                                                       | Gets the list of children.                                    |
| [`Comments`](#FluxLinkage.Comments)                                                                                       | Gets the list of associated comments.                         |
| [`Images`](#FluxLinkage.Images)                                                                                           | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#FluxLinkage.Properties)                                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#FluxLinkage.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults import FluxLinkage
```

## Property detail

### *property* FluxLinkage.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultTableAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FluxLinkage.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FluxLinkage.Multiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Multiplier.

<!-- !! processed by numpydoc !! -->

### *property* FluxLinkage.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FluxLinkage.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FluxLinkage.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FluxLinkage.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FluxLinkage.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FluxLinkage.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FluxLinkage.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FluxLinkage.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FluxLinkage.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FluxLinkage.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FluxLinkage.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FluxLinkage.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FluxLinkage.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FluxLinkage.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FluxLinkage.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FluxLinkage.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FluxLinkage.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FluxLinkage.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FluxLinkage.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### FluxLinkage.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FluxLinkage.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
