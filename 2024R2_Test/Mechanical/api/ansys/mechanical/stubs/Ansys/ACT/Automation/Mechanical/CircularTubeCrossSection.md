# CircularTubeCrossSection

### *class* CircularTubeCrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CircularTubeCrossSection.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#CircularTubeCrossSection.Delete)                                   | Run the Delete action.                                                            |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CircularTubeCrossSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CircularTubeCrossSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CircularTubeCrossSection.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#CircularTubeCrossSection.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#CircularTubeCrossSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CircularTubeCrossSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CircularTubeCrossSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CircularTubeCrossSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CircularTubeCrossSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CircularTubeCrossSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#CircularTubeCrossSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CircularTubeCrossSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CircularTubeCrossSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#CircularTubeCrossSection.Area)                                                                            | Gets the Area.                                                |
| [`IYY`](#CircularTubeCrossSection.IYY)                                                                              | Gets the IYY.                                                 |
| [`IZZ`](#CircularTubeCrossSection.IZZ)                                                                              | Gets the IZZ.                                                 |
| [`InnerRadius`](#CircularTubeCrossSection.InnerRadius)                                                              | Gets or sets the InnerRadius.                                 |
| [`OuterRadius`](#CircularTubeCrossSection.OuterRadius)                                                              | Gets or sets the OuterRadius.                                 |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#CircularTubeCrossSection.Children)                                                                    | Gets the list of children.                                    |
| [`Comments`](#CircularTubeCrossSection.Comments)                                                                    | Gets the list of associated comments.                         |
| [`Figures`](#CircularTubeCrossSection.Figures)                                                                      | Gets the list of associated figures.                          |
| [`Images`](#CircularTubeCrossSection.Images)                                                                        | Gets the list of associated images.                           |
| [`ReadOnly`](#CircularTubeCrossSection.ReadOnly)                                                                    | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CircularTubeCrossSection.Properties)                                                                | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CircularTubeCrossSection.VisibleProperties)                                                  | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import CircularTubeCrossSection
```

## Property detail

### *property* CircularTubeCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CircularTubeCrossSection.Area *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

### *property* CircularTubeCrossSection.IYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

### *property* CircularTubeCrossSection.IZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

### *property* CircularTubeCrossSection.InnerRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InnerRadius.

<!-- !! processed by numpydoc !! -->

### *property* CircularTubeCrossSection.OuterRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OuterRadius.

<!-- !! processed by numpydoc !! -->

### *property* CircularTubeCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* CircularTubeCrossSection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CircularTubeCrossSection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* CircularTubeCrossSection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* CircularTubeCrossSection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* CircularTubeCrossSection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* CircularTubeCrossSection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CircularTubeCrossSection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* CircularTubeCrossSection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### CircularTubeCrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### CircularTubeCrossSection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CircularTubeCrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CircularTubeCrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### CircularTubeCrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### CircularTubeCrossSection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### CircularTubeCrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### CircularTubeCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### CircularTubeCrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### CircularTubeCrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### CircularTubeCrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### CircularTubeCrossSection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### CircularTubeCrossSection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### CircularTubeCrossSection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### CircularTubeCrossSection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### CircularTubeCrossSection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
