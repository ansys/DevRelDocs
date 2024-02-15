# ZCrossSection

### *class* ZCrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ZCrossSection.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#ZCrossSection.Delete)                                   | Run the Delete action.                                                            |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ZCrossSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ZCrossSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ZCrossSection.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ZCrossSection.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ZCrossSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ZCrossSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ZCrossSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ZCrossSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ZCrossSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ZCrossSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ZCrossSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ZCrossSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ZCrossSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#ZCrossSection.Area)                                                                                       | Gets the Area.                                                |
| [`IYY`](#ZCrossSection.IYY)                                                                                         | Gets the IYY.                                                 |
| [`IZZ`](#ZCrossSection.IZZ)                                                                                         | Gets the IZZ.                                                 |
| [`Thick1`](#ZCrossSection.Thick1)                                                                                   | Gets or sets the Thick1.                                      |
| [`Thick2`](#ZCrossSection.Thick2)                                                                                   | Gets or sets the Thick2.                                      |
| [`Thick3`](#ZCrossSection.Thick3)                                                                                   | Gets or sets the Thick3.                                      |
| [`Width1`](#ZCrossSection.Width1)                                                                                   | Gets or sets the Width1.                                      |
| [`Width2`](#ZCrossSection.Width2)                                                                                   | Gets or sets the Width2.                                      |
| [`Width3`](#ZCrossSection.Width3)                                                                                   | Gets or sets the Width3.                                      |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ZCrossSection.Children)                                                                               | Gets the list of children.                                    |
| [`Comments`](#ZCrossSection.Comments)                                                                               | Gets the list of associated comments.                         |
| [`Figures`](#ZCrossSection.Figures)                                                                                 | Gets the list of associated figures.                          |
| [`Images`](#ZCrossSection.Images)                                                                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#ZCrossSection.ReadOnly)                                                                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ZCrossSection.Properties)                                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ZCrossSection.VisibleProperties)                                                             | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ZCrossSection
```

## Property detail

### *property* ZCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ZCrossSection.Area *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

### *property* ZCrossSection.IYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

### *property* ZCrossSection.IZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

### *property* ZCrossSection.Thick1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick1.

<!-- !! processed by numpydoc !! -->

### *property* ZCrossSection.Thick2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick2.

<!-- !! processed by numpydoc !! -->

### *property* ZCrossSection.Thick3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick3.

<!-- !! processed by numpydoc !! -->

### *property* ZCrossSection.Width1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width1.

<!-- !! processed by numpydoc !! -->

### *property* ZCrossSection.Width2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width2.

<!-- !! processed by numpydoc !! -->

### *property* ZCrossSection.Width3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width3.

<!-- !! processed by numpydoc !! -->

### *property* ZCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ZCrossSection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ZCrossSection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ZCrossSection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ZCrossSection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ZCrossSection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ZCrossSection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ZCrossSection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ZCrossSection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ZCrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ZCrossSection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ZCrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ZCrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ZCrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ZCrossSection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ZCrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ZCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ZCrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ZCrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ZCrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ZCrossSection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ZCrossSection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ZCrossSection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ZCrossSection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ZCrossSection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
