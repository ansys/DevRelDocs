# `ParameterVariableGroup`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ParameterVariableGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ParameterVariableGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ParameterVariableGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ParameterVariableGroup.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ParameterVariableGroup.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ParameterVariableGroup.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ParameterVariableGroup.AddImage)                               | Creates a new child Image.                                                        |
| [`AddParameterVariable`](#ParameterVariableGroup.AddParameterVariable)       | Create the object for working with an imported part.                              |
| [`CopyTo`](#ParameterVariableGroup.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ParameterVariableGroup.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#ParameterVariableGroup.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ParameterVariableGroup.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ParameterVariableGroup.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ParameterVariableGroup.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ParameterVariableGroup.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ParameterVariableGroup.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ParameterVariableGroup.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ParameterVariableGroup.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ParameterVariableGroup.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ParameterVariableGroup.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ParameterVariableGroup.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ParameterVariableGroup.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ParameterVariableGroup.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ParameterVariableGroup.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ParameterVariableGroup.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ParameterVariableGroup.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ParameterVariableGroup.Children"></a>

### *property* ParameterVariableGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.Comments"></a>

### *property* ParameterVariableGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.DataModelObjectCategory"></a>

### *property* ParameterVariableGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.Figures"></a>

### *property* ParameterVariableGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.Images"></a>

### *property* ParameterVariableGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.InternalObject"></a>

### *property* ParameterVariableGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSParameterVariableGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.Properties"></a>

### *property* ParameterVariableGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.VisibleProperties"></a>

### *property* ParameterVariableGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ParameterVariableGroup.Activate"></a>

### ParameterVariableGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.AddComment"></a>

### ParameterVariableGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.AddFigure"></a>

### ParameterVariableGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.AddImage"></a>

### ParameterVariableGroup.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.AddParameterVariable"></a>

### ParameterVariableGroup.AddParameterVariable()

Create the object for working with an imported part.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.CopyTo"></a>

### ParameterVariableGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.CreateParameter"></a>

### ParameterVariableGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.Duplicate"></a>

### ParameterVariableGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GetChildren"></a>

### ParameterVariableGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GetParameter"></a>

### ParameterVariableGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GroupAllSimilarChildren"></a>

### ParameterVariableGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GroupSimilarObjects"></a>

### ParameterVariableGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.PropertyByAPIName"></a>

### ParameterVariableGroup.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.PropertyByName"></a>

### ParameterVariableGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.RemoveParameter"></a>

### ParameterVariableGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

