# `TableGroup`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.TableGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.TableGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TableGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#TableGroup.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#TableGroup.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#TableGroup.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TableGroup.AddImage)                               | Creates a new child Image.                                                        |
| [`AddTable`](#TableGroup.AddTable)                               | Create the object for working with an imported part.                              |
| [`CopyTo`](#TableGroup.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#TableGroup.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#TableGroup.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#TableGroup.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#TableGroup.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#TableGroup.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TableGroup.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#TableGroup.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#TableGroup.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#TableGroup.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#TableGroup.Children)                               | Gets the list of children.                                    |
| [`Comments`](#TableGroup.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#TableGroup.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#TableGroup.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#TableGroup.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#TableGroup.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#TableGroup.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#TableGroup.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TableGroup.Children"></a>

### *property* TableGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Comments"></a>

### *property* TableGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.DataModelObjectCategory"></a>

### *property* TableGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Figures"></a>

### *property* TableGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Images"></a>

### *property* TableGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.InternalObject"></a>

### *property* TableGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTableGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Properties"></a>

### *property* TableGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.VisibleProperties"></a>

### *property* TableGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TableGroup.Activate"></a>

### TableGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.AddComment"></a>

### TableGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.AddFigure"></a>

### TableGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.AddImage"></a>

### TableGroup.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.AddTable"></a>

### TableGroup.AddTable(activate: System.Boolean, expandGroup: System.Boolean)

Create the object for working with an imported part.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.CopyTo"></a>

### TableGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.CreateParameter"></a>

### TableGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Duplicate"></a>

### TableGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetChildren"></a>

### TableGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetParameter"></a>

### TableGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GroupAllSimilarChildren"></a>

### TableGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GroupSimilarObjects"></a>

### TableGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.PropertyByAPIName"></a>

### TableGroup.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.PropertyByName"></a>

### TableGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.RemoveParameter"></a>

### TableGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

