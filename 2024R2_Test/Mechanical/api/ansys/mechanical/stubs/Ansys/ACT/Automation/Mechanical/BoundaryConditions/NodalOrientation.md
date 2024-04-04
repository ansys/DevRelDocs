# NodalOrientation

### *class* NodalOrientation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NodalOrientation.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#NodalOrientation.Delete)                                   | Run the Delete action.                                                            |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NodalOrientation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#NodalOrientation.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#NodalOrientation.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#NodalOrientation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NodalOrientation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NodalOrientation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NodalOrientation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NodalOrientation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NodalOrientation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#NodalOrientation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#NodalOrientation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NodalOrientation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Location`](#NodalOrientation.Location)                                                                               | Gets the Location.                                            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Suppressed`](#NodalOrientation.Suppressed)                                                                           | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#NodalOrientation.Children)                                                                               | Gets the list of children.                                    |
| [`Comments`](#NodalOrientation.Comments)                                                                               | Gets the list of associated comments.                         |
| [`Images`](#NodalOrientation.Images)                                                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#NodalOrientation.Properties)                                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#NodalOrientation.VisibleProperties)                                                             | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import NodalOrientation
```

## Property detail

### *property* NodalOrientation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Location.

<!-- !! processed by numpydoc !! -->

### *property* NodalOrientation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSNodalRotationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NodalOrientation.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* NodalOrientation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* NodalOrientation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* NodalOrientation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* NodalOrientation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* NodalOrientation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* NodalOrientation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NodalOrientation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* NodalOrientation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### NodalOrientation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### NodalOrientation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NodalOrientation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NodalOrientation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### NodalOrientation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### NodalOrientation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### NodalOrientation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### NodalOrientation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### NodalOrientation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### NodalOrientation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### NodalOrientation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### NodalOrientation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### NodalOrientation.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### NodalOrientation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### NodalOrientation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
