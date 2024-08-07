# `ParameterVariable`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ParameterVariable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ParameterVariable.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ParameterVariable.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ParameterVariable.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ParameterVariable.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ParameterVariable.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ParameterVariable.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ParameterVariable.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ParameterVariable.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ParameterVariable.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ParameterVariable.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ParameterVariable.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ParameterVariable.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ParameterVariable.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ParameterVariable.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#ParameterVariable.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](#ParameterVariable.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ParameterVariable.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#ParameterVariable.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ParameterVariable.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ParameterVariable.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ParameterVariable.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ParameterVariable.InternalObject"></a>

### *property* ParameterVariable.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSParameterVariableAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.DataModelObjectCategory"></a>

### *property* ParameterVariable.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Children"></a>

### *property* ParameterVariable.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Comments"></a>

### *property* ParameterVariable.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Figures"></a>

### *property* ParameterVariable.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Images"></a>

### *property* ParameterVariable.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ParameterVariable.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Properties"></a>

### *property* ParameterVariable.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.VisibleProperties"></a>

### *property* ParameterVariable.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ParameterVariable.GetChildren"></a>

### ParameterVariable.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ParameterVariable.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.AddComment"></a>

### ParameterVariable.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.AddFigure"></a>

### ParameterVariable.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.AddImage"></a>

### ParameterVariable.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Activate"></a>

### ParameterVariable.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.CopyTo"></a>

### ParameterVariable.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Duplicate"></a>

### ParameterVariable.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GroupAllSimilarChildren"></a>

### ParameterVariable.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GroupSimilarObjects"></a>

### ParameterVariable.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.PropertyByName"></a>

### ParameterVariable.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.PropertyByAPIName"></a>

### ParameterVariable.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.CreateParameter"></a>

### ParameterVariable.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GetParameter"></a>

### ParameterVariable.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.RemoveParameter"></a>

### ParameterVariable.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

