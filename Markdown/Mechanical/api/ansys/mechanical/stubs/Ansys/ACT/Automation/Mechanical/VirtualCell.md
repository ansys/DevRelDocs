# VirtualCell

### *class* VirtualCell

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VirtualCell.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#VirtualCell.Delete)                                   | Run the Delete action.                                                            |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#VirtualCell.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#VirtualCell.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#VirtualCell.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#VirtualCell.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#VirtualCell.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#VirtualCell.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#VirtualCell.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VirtualCell.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#VirtualCell.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#VirtualCell.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#VirtualCell.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#VirtualCell.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#VirtualCell.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ProjectToUnderlyingGeometry`](#VirtualCell.ProjectToUnderlyingGeometry)                                           | Gets or sets the ProjectToUnderlyingGeometry.                 |
| [`VTClass`](#VirtualCell.VTClass)                                                                                   | Gets the VTClass.                                             |
| [`Geometry`](Geometry.md#Geometry)                                                                                  | Gets the Geometry.                                            |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#VirtualCell.Children)                                                                                 | Gets the list of children.                                    |
| [`Comments`](#VirtualCell.Comments)                                                                                 | Gets the list of associated comments.                         |
| [`Figures`](#VirtualCell.Figures)                                                                                   | Gets the list of associated figures.                          |
| [`Images`](#VirtualCell.Images)                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#VirtualCell.Properties)                                                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#VirtualCell.VisibleProperties)                                                               | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import VirtualCell
```

## Property detail

### *property* VirtualCell.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSVirtualCellAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.ProjectToUnderlyingGeometry *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectToUnderlyingGeometry.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.VTClass *: [Ansys.Mechanical.DataModel.Enums.VirtualCellClassType](../../../Mechanical/DataModel/Enums/VirtualCellClassType.md#VirtualCellClassType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VTClass.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.Geometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Geometry.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### VirtualCell.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### VirtualCell.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### VirtualCell.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### VirtualCell.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### VirtualCell.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### VirtualCell.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### VirtualCell.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### VirtualCell.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### VirtualCell.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### VirtualCell.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### VirtualCell.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### VirtualCell.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### VirtualCell.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### VirtualCell.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### VirtualCell.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### VirtualCell.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
