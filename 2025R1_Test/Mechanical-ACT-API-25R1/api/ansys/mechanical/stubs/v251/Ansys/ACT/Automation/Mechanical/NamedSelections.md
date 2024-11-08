# `NamedSelections`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelections"></a>

#### *class* Ansys.ACT.Automation.Mechanical.NamedSelections

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#NamedSelections.Activate)                                                             | Activate the current object.                                                      |
| [`AddComment`](#NamedSelections.AddComment)                                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#NamedSelections.AddFigure)                                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#NamedSelections.AddImage)                                                             | Creates a new child Image.                                                        |
| [`AddNamedSelection`](#NamedSelections.AddNamedSelection)                                           | Creates a new NamedSelection                                                      |
| [`CopyTo`](#NamedSelections.CopyTo)                                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#NamedSelections.CreateParameter)                                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#NamedSelections.Delete)                                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#NamedSelections.Duplicate)                                                           | Creates a copy of the current DataModelObject.                                    |
| [`ExportNamedSelectionToCDBFile`](#NamedSelections.ExportNamedSelectionToCDBFile)                   | Export Named Selections to CDB file                                               |
| [`GenerateAllNamedSelections`](#NamedSelections.GenerateAllNamedSelections)                         | Generate all named selections specified with the Worksheet                        |
| [`GetChildren`](#NamedSelections.GetChildren)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#NamedSelections.GetParameter)                                                     | Gets the parameter corresponding to the given property.                           |
| [`GoToNamedSelectionsCommonToSelection`](#NamedSelections.GoToNamedSelectionsCommonToSelection)     | GoToNamedSelectionsCommonToSelection method.                                      |
| [`GoToNamedSelectionsContainingSelection`](#NamedSelections.GoToNamedSelectionsContainingSelection) | GoToNamedSelectionsContainingSelection method.                                    |
| [`GroupAllSimilarChildren`](#NamedSelections.GroupAllSimilarChildren)                               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NamedSelections.GroupSimilarObjects)                                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#NamedSelections.PropertyByAPIName)                                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#NamedSelections.PropertyByName)                                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#NamedSelections.RemoveParameter)                                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#NamedSelections.Children)                               | Gets the list of children.                                    |
| [`Comments`](#NamedSelections.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#NamedSelections.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#NamedSelections.Figures)                                 | Gets the list of associated figures.                          |
| [`GenerateOnRefresh`](#NamedSelections.GenerateOnRefresh)             | Gets or sets the GenerateOnRefresh.                           |
| [`GenerateOnRemesh`](#NamedSelections.GenerateOnRemesh)               | Gets or sets the GenerateOnRemesh.                            |
| [`Images`](#NamedSelections.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#NamedSelections.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#NamedSelections.Properties)                           | Gets the list of properties for this object.                  |
| [`RandomColors`](#NamedSelections.RandomColors)                       | Gets the RandomColors.                                        |
| [`ShowAnnotations`](#NamedSelections.ShowAnnotations)                 | Gets or sets the ShowAnnotations.                             |
| [`VisibleProperties`](#NamedSelections.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NamedSelections.Children"></a>

### *property* NamedSelections.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Comments"></a>

### *property* NamedSelections.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.DataModelObjectCategory"></a>

### *property* NamedSelections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Figures"></a>

### *property* NamedSelections.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GenerateOnRefresh"></a>

### *property* NamedSelections.GenerateOnRefresh *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateOnRefresh.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GenerateOnRemesh"></a>

### *property* NamedSelections.GenerateOnRemesh *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateOnRemesh.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Images"></a>

### *property* NamedSelections.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.InternalObject"></a>

### *property* NamedSelections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSComponentGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Properties"></a>

### *property* NamedSelections.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.RandomColors"></a>

### *property* NamedSelections.RandomColors *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RandomColors.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.ShowAnnotations"></a>

### *property* NamedSelections.ShowAnnotations *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowAnnotations.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.VisibleProperties"></a>

### *property* NamedSelections.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NamedSelections.Activate"></a>

### NamedSelections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.AddComment"></a>

### NamedSelections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.AddFigure"></a>

### NamedSelections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.AddImage"></a>

### NamedSelections.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.AddNamedSelection"></a>

### NamedSelections.AddNamedSelection()

Creates a new NamedSelection

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.CopyTo"></a>

### NamedSelections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.CreateParameter"></a>

### NamedSelections.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Delete"></a>

### NamedSelections.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Duplicate"></a>

### NamedSelections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.ExportNamedSelectionToCDBFile"></a>

### NamedSelections.ExportNamedSelectionToCDBFile(filepath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Export Named Selections to CDB file

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GenerateAllNamedSelections"></a>

### NamedSelections.GenerateAllNamedSelections()

Generate all named selections specified with the Worksheet

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetChildren"></a>

### NamedSelections.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetParameter"></a>

### NamedSelections.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GoToNamedSelectionsCommonToSelection"></a>

### NamedSelections.GoToNamedSelectionsCommonToSelection()

GoToNamedSelectionsCommonToSelection method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GoToNamedSelectionsContainingSelection"></a>

### NamedSelections.GoToNamedSelectionsContainingSelection()

GoToNamedSelectionsContainingSelection method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GroupAllSimilarChildren"></a>

### NamedSelections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GroupSimilarObjects"></a>

### NamedSelections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.PropertyByAPIName"></a>

### NamedSelections.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.PropertyByName"></a>

### NamedSelections.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.RemoveParameter"></a>

### NamedSelections.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

