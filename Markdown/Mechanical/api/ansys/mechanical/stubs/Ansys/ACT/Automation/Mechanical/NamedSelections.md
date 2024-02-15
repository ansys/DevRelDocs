# NamedSelections

### *class* NamedSelections

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NamedSelections.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportNamedSelectionToCDBFile`](#NamedSelections.ExportNamedSelectionToCDBFile)                   | Export Named Selections to CDB file                                               |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateAllNamedSelections`](#NamedSelections.GenerateAllNamedSelections)                         | Generate all named selections specified with the Worksheet                        |
| [`GoToNamedSelectionsCommonToSelection`](#NamedSelections.GoToNamedSelectionsCommonToSelection)     | GoToNamedSelectionsCommonToSelection method.                                      |
| [`GoToNamedSelectionsContainingSelection`](#NamedSelections.GoToNamedSelectionsContainingSelection) | GoToNamedSelectionsContainingSelection method.                                    |
| [`AddNamedSelection`](#NamedSelections.AddNamedSelection)                                           | Creates a new NamedSelection                                                      |
| [`Delete`](#NamedSelections.Delete)                                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NamedSelections.AddComment)                                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#NamedSelections.AddFigure)                                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#NamedSelections.AddImage)                                                             | Creates a new child Image.                                                        |
| [`Activate`](#NamedSelections.Activate)                                                             | Activate the current object.                                                      |
| [`CopyTo`](#NamedSelections.CopyTo)                                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NamedSelections.Duplicate)                                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NamedSelections.GroupAllSimilarChildren)                               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NamedSelections.GroupSimilarObjects)                                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NamedSelections.PropertyByName)                                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NamedSelections.PropertyByAPIName)                                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#NamedSelections.CreateParameter)                                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#NamedSelections.GetParameter)                                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NamedSelections.RemoveParameter)                                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`GenerateOnRefresh`](#NamedSelections.GenerateOnRefresh)                                                           | Gets or sets the GenerateOnRefresh.                           |
| [`GenerateOnRemesh`](#NamedSelections.GenerateOnRemesh)                                                             | Gets or sets the GenerateOnRemesh.                            |
| [`RandomColors`](#NamedSelections.RandomColors)                                                                     | Gets the RandomColors.                                        |
| [`ShowAnnotations`](#NamedSelections.ShowAnnotations)                                                               | Gets or sets the ShowAnnotations.                             |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#NamedSelections.Children)                                                                             | Gets the list of children.                                    |
| [`Comments`](#NamedSelections.Comments)                                                                             | Gets the list of associated comments.                         |
| [`Figures`](#NamedSelections.Figures)                                                                               | Gets the list of associated figures.                          |
| [`Images`](#NamedSelections.Images)                                                                                 | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#NamedSelections.Properties)                                                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#NamedSelections.VisibleProperties)                                                           | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import NamedSelections
```

## Property detail

### *property* NamedSelections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSComponentGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.GenerateOnRefresh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateOnRefresh.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.GenerateOnRemesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateOnRemesh.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.RandomColors *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RandomColors.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.ShowAnnotations *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowAnnotations.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### NamedSelections.ExportNamedSelectionToCDBFile(filepath: System.String)

Export Named Selections to CDB file

<!-- !! processed by numpydoc !! -->

### NamedSelections.GenerateAllNamedSelections()

Generate all named selections specified with the Worksheet

<!-- !! processed by numpydoc !! -->

### NamedSelections.GoToNamedSelectionsCommonToSelection()

GoToNamedSelectionsCommonToSelection method.

<!-- !! processed by numpydoc !! -->

### NamedSelections.GoToNamedSelectionsContainingSelection()

GoToNamedSelectionsContainingSelection method.

<!-- !! processed by numpydoc !! -->

### NamedSelections.AddNamedSelection()

Creates a new NamedSelection

<!-- !! processed by numpydoc !! -->

### NamedSelections.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### NamedSelections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NamedSelections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NamedSelections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### NamedSelections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### NamedSelections.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### NamedSelections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### NamedSelections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### NamedSelections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### NamedSelections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### NamedSelections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### NamedSelections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### NamedSelections.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### NamedSelections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### NamedSelections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### NamedSelections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
