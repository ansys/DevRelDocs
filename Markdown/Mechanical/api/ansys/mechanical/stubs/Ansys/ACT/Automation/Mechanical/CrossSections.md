# CrossSections

### *class* CrossSections

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CrossSections.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`NameCrossSectionsUniquely`](#CrossSections.NameCrossSectionsUniquely)               | programmatically give each of the Cross Section objects a unique name .           |
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddChannelCrossSection`](#CrossSections.AddChannelCrossSection)                     | Creates a new ChannelCrossSection                                                 |
| [`AddCircularCrossSection`](#CrossSections.AddCircularCrossSection)                   | Creates a new CircularCrossSection                                                |
| [`AddCircularTubeCrossSection`](#CrossSections.AddCircularTubeCrossSection)           | Creates a new CircularTubeCrossSection                                            |
| [`AddHatCrossSection`](#CrossSections.AddHatCrossSection)                             | Creates a new HatCrossSection                                                     |
| [`AddHollowRectangularCrossSection`](#CrossSections.AddHollowRectangularCrossSection) | Creates a new HollowRectangularCrossSection                                       |
| [`AddICrossSection`](#CrossSections.AddICrossSection)                                 | Creates a new ICrossSection                                                       |
| [`AddLCrossSection`](#CrossSections.AddLCrossSection)                                 | Creates a new LCrossSection                                                       |
| [`AddRectangularCrossSection`](#CrossSections.AddRectangularCrossSection)             | Creates a new RectangularCrossSection                                             |
| [`AddTCrossSection`](#CrossSections.AddTCrossSection)                                 | Creates a new TCrossSection                                                       |
| [`AddUserDefinedCrossSection`](#CrossSections.AddUserDefinedCrossSection)             | Creates a new UserDefinedCrossSection                                             |
| [`AddZCrossSection`](#CrossSections.AddZCrossSection)                                 | Creates a new ZCrossSection                                                       |
| [`Delete`](#CrossSections.Delete)                                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CrossSections.AddComment)                                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#CrossSections.AddFigure)                                               | Creates a new child Figure.                                                       |
| [`AddImage`](#CrossSections.AddImage)                                                 | Creates a new child Image.                                                        |
| [`Activate`](#CrossSections.Activate)                                                 | Activate the current object.                                                      |
| [`CopyTo`](#CrossSections.CopyTo)                                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CrossSections.Duplicate)                                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CrossSections.GroupAllSimilarChildren)                   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CrossSections.GroupSimilarObjects)                           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CrossSections.PropertyByName)                                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CrossSections.PropertyByAPIName)                               | Get a property by its API name.                                                   |
| [`CreateParameter`](#CrossSections.CreateParameter)                                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CrossSections.GetParameter)                                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CrossSections.RemoveParameter)                                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#CrossSections.Children)                                                                               | Gets the list of children.                                    |
| [`Comments`](#CrossSections.Comments)                                                                               | Gets the list of associated comments.                         |
| [`Figures`](#CrossSections.Figures)                                                                                 | Gets the list of associated figures.                          |
| [`Images`](#CrossSections.Images)                                                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CrossSections.Properties)                                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CrossSections.VisibleProperties)                                                             | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import CrossSections
```

## Property detail

### *property* CrossSections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CrossSections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* CrossSections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CrossSections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* CrossSections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* CrossSections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* CrossSections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CrossSections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* CrossSections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### CrossSections.NameCrossSectionsUniquely()

programmatically give each of the Cross Section objects a unique name .

<!-- !! processed by numpydoc !! -->

### CrossSections.AddChannelCrossSection()

Creates a new ChannelCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddCircularCrossSection()

Creates a new CircularCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddCircularTubeCrossSection()

Creates a new CircularTubeCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddHatCrossSection()

Creates a new HatCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddHollowRectangularCrossSection()

Creates a new HollowRectangularCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddICrossSection()

Creates a new ICrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddLCrossSection()

Creates a new LCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddRectangularCrossSection()

Creates a new RectangularCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddTCrossSection()

Creates a new TCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddUserDefinedCrossSection()

Creates a new UserDefinedCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddZCrossSection()

Creates a new ZCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### CrossSections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CrossSections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CrossSections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### CrossSections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### CrossSections.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### CrossSections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### CrossSections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### CrossSections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### CrossSections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### CrossSections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### CrossSections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### CrossSections.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### CrossSections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### CrossSections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### CrossSections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
