# AnalysisPly

### *class* AnalysisPly

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AnalysisPly.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AnalysisPly.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AnalysisPly.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AnalysisPly.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AnalysisPly.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AnalysisPly.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AnalysisPly.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AnalysisPly.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AnalysisPly.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AnalysisPly.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AnalysisPly.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#AnalysisPly.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AnalysisPly.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AnalysisPly.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`IDInSource`](#AnalysisPly.IDInSource)                                                                             | Gets the IDInSource.                                          |
| [`Material`](Material.md#Material)                                                                                  | Gets the Material.                                            |
| [`NameInSource`](#AnalysisPly.NameInSource)                                                                         | Gets the NameInSource.                                        |
| [`NumberOfElements`](#AnalysisPly.NumberOfElements)                                                                 | Gets the NumberOfElements.                                    |
| [`Angle`](#AnalysisPly.Angle)                                                                                       | Gets or sets the Angle.                                       |
| [`Thickness`](Thickness.md#Thickness)                                                                               | Gets the Thickness.                                           |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#AnalysisPly.Children)                                                                                 | Gets the list of children.                                    |
| [`Comments`](#AnalysisPly.Comments)                                                                                 | Gets the list of associated comments.                         |
| [`Figures`](#AnalysisPly.Figures)                                                                                   | Gets the list of associated figures.                          |
| [`Images`](#AnalysisPly.Images)                                                                                     | Gets the list of associated images.                           |
| [`ReadOnly`](#AnalysisPly.ReadOnly)                                                                                 | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AnalysisPly.Properties)                                                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AnalysisPly.VisibleProperties)                                                               | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import AnalysisPly
```

## Property detail

### *property* AnalysisPly.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisPlyAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AnalysisPly.IDInSource *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IDInSource.

<!-- !! processed by numpydoc !! -->

### *property* AnalysisPly.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Material.

<!-- !! processed by numpydoc !! -->

### *property* AnalysisPly.NameInSource *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NameInSource.

<!-- !! processed by numpydoc !! -->

### *property* AnalysisPly.NumberOfElements *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfElements.

<!-- !! processed by numpydoc !! -->

### *property* AnalysisPly.Angle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Angle.

<!-- !! processed by numpydoc !! -->

### *property* AnalysisPly.Thickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Thickness.

<!-- !! processed by numpydoc !! -->

### *property* AnalysisPly.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AnalysisPly.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AnalysisPly.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AnalysisPly.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AnalysisPly.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AnalysisPly.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* AnalysisPly.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AnalysisPly.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AnalysisPly.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AnalysisPly.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AnalysisPly.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AnalysisPly.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AnalysisPly.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AnalysisPly.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AnalysisPly.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AnalysisPly.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AnalysisPly.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AnalysisPly.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AnalysisPly.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AnalysisPly.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AnalysisPly.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AnalysisPly.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### AnalysisPly.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AnalysisPly.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
