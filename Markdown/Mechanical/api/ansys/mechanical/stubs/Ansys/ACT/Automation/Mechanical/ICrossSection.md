# ICrossSection

### *class* ICrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ICrossSection.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#ICrossSection.Delete)                                   | Run the Delete action.                                                            |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ICrossSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ICrossSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ICrossSection.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ICrossSection.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ICrossSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ICrossSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ICrossSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ICrossSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ICrossSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ICrossSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ICrossSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ICrossSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ICrossSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#ICrossSection.Area)                                                                                       | Gets the Area.                                                |
| [`IYY`](#ICrossSection.IYY)                                                                                         | Gets the IYY.                                                 |
| [`IZZ`](#ICrossSection.IZZ)                                                                                         | Gets the IZZ.                                                 |
| [`Thick1`](#ICrossSection.Thick1)                                                                                   | Gets or sets the Thick1.                                      |
| [`Thick2`](#ICrossSection.Thick2)                                                                                   | Gets or sets the Thick2.                                      |
| [`Thick3`](#ICrossSection.Thick3)                                                                                   | Gets or sets the Thick3.                                      |
| [`Width1`](#ICrossSection.Width1)                                                                                   | Gets or sets the Width1.                                      |
| [`Width2`](#ICrossSection.Width2)                                                                                   | Gets or sets the Width2.                                      |
| [`Width3`](#ICrossSection.Width3)                                                                                   | Gets or sets the Width3.                                      |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ICrossSection.Children)                                                                               | Gets the list of children.                                    |
| [`Comments`](#ICrossSection.Comments)                                                                               | Gets the list of associated comments.                         |
| [`Figures`](#ICrossSection.Figures)                                                                                 | Gets the list of associated figures.                          |
| [`Images`](#ICrossSection.Images)                                                                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#ICrossSection.ReadOnly)                                                                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ICrossSection.Properties)                                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ICrossSection.VisibleProperties)                                                             | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ICrossSection
```

## Property detail

### *property* ICrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Area *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.IYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.IZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Thick1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick1.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Thick2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick2.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Thick3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick3.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Width1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width1.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Width2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width2.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Width3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width3.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ICrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ICrossSection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ICrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ICrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ICrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ICrossSection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ICrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ICrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ICrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ICrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ICrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ICrossSection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ICrossSection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ICrossSection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ICrossSection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ICrossSection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
