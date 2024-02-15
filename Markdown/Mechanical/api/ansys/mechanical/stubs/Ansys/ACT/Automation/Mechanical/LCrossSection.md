# LCrossSection

### *class* LCrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LCrossSection.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#LCrossSection.Delete)                                   | Run the Delete action.                                                            |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#LCrossSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#LCrossSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#LCrossSection.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#LCrossSection.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#LCrossSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#LCrossSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#LCrossSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LCrossSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#LCrossSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#LCrossSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#LCrossSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#LCrossSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#LCrossSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#LCrossSection.Area)                                                                                       | Gets the Area.                                                |
| [`IYY`](#LCrossSection.IYY)                                                                                         | Gets the IYY.                                                 |
| [`IZZ`](#LCrossSection.IZZ)                                                                                         | Gets the IZZ.                                                 |
| [`Thick1`](#LCrossSection.Thick1)                                                                                   | Gets or sets the Thick1.                                      |
| [`Thick2`](#LCrossSection.Thick2)                                                                                   | Gets or sets the Thick2.                                      |
| [`Width1`](#LCrossSection.Width1)                                                                                   | Gets or sets the Width1.                                      |
| [`Width2`](#LCrossSection.Width2)                                                                                   | Gets or sets the Width2.                                      |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#LCrossSection.Children)                                                                               | Gets the list of children.                                    |
| [`Comments`](#LCrossSection.Comments)                                                                               | Gets the list of associated comments.                         |
| [`Figures`](#LCrossSection.Figures)                                                                                 | Gets the list of associated figures.                          |
| [`Images`](#LCrossSection.Images)                                                                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#LCrossSection.ReadOnly)                                                                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#LCrossSection.Properties)                                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#LCrossSection.VisibleProperties)                                                             | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import LCrossSection
```

## Property detail

### *property* LCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* LCrossSection.Area *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

### *property* LCrossSection.IYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

### *property* LCrossSection.IZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

### *property* LCrossSection.Thick1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick1.

<!-- !! processed by numpydoc !! -->

### *property* LCrossSection.Thick2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick2.

<!-- !! processed by numpydoc !! -->

### *property* LCrossSection.Width1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width1.

<!-- !! processed by numpydoc !! -->

### *property* LCrossSection.Width2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width2.

<!-- !! processed by numpydoc !! -->

### *property* LCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* LCrossSection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* LCrossSection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* LCrossSection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* LCrossSection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* LCrossSection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* LCrossSection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* LCrossSection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* LCrossSection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### LCrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### LCrossSection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### LCrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### LCrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### LCrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### LCrossSection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### LCrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### LCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### LCrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### LCrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### LCrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### LCrossSection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### LCrossSection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### LCrossSection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### LCrossSection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### LCrossSection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
