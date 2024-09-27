# `Objective`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Objective"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Objective

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Objective.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Objective.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Objective.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#Objective.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Objective.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Objective.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Objective.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Objective.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Objective.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Objective.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Objective.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Objective.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Objective.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Objective.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Objective.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Objective.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Objective.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Objective.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Images`](#Objective.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Objective.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`NormalizedSum`](#Objective.NormalizedSum)                     | Gets or sets the NormalizedSum.                               |
| [`Properties`](#Objective.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#Objective.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Objective.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`Worksheet`](#Objective.Worksheet)                             | Get the ObjectiveWorksheet action.                            |

<a id="property-detail"></a>

## Property detail

<a id="Objective.Children"></a>

### *property* Objective.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Comments"></a>

### *property* Objective.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Objective.DataModelObjectCategory"></a>

### *property* Objective.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Images"></a>

### *property* Objective.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Objective.InternalObject"></a>

### *property* Objective.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoObjectiveAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Objective.NormalizedSum"></a>

### *property* Objective.NormalizedSum *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalizedSum.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Properties"></a>

### *property* Objective.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Suppressed"></a>

### *property* Objective.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Objective.VisibleProperties"></a>

### *property* Objective.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Worksheet"></a>

### *property* Objective.Worksheet *: [Ansys.ACT.Automation.Mechanical.ObjectiveWorksheet](ObjectiveWorksheet.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ObjectiveWorksheet) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the ObjectiveWorksheet action.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Objective.Activate"></a>

### Objective.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Objective.AddComment"></a>

### Objective.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Objective.AddImage"></a>

### Objective.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Objective.CopyTo"></a>

### Objective.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Objective.CreateParameter"></a>

### Objective.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Delete"></a>

### Objective.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Duplicate"></a>

### Objective.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetChildren"></a>

### Objective.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetParameter"></a>

### Objective.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GroupAllSimilarChildren"></a>

### Objective.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GroupSimilarObjects"></a>

### Objective.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Objective.PropertyByAPIName"></a>

### Objective.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Objective.PropertyByName"></a>

### Objective.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Objective.RemoveParameter"></a>

### Objective.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

