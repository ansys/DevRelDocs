# `Objective`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Objective

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Objective.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Worksheet`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.Worksheet)                             | Get the ObjectiveWorksheet action.                            |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#id0)                                        | Gets the internal object. For advanced usage only.            |
| [`NormalizedSum`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.NormalizedSum)                     | Gets or sets the NormalizedSum.                               |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.Comments)                               | Gets the list of associated comments.                         |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#id0)                                        | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Objective.md#Objective.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Objective.Worksheet"></a>

### *property* Objective.Worksheet *: [Ansys.ACT.Automation.Mechanical.ObjectiveWorksheet](ObjectiveWorksheet.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ObjectiveWorksheet) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the ObjectiveWorksheet action.

<!-- !! processed by numpydoc !! -->

<a id="Objective.InternalObject"></a>

### *property* Objective.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoObjectiveAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Objective.NormalizedSum"></a>

### *property* Objective.NormalizedSum *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalizedSum.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Suppressed"></a>

### *property* Objective.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Objective.DataModelObjectCategory"></a>

### *property* Objective.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Children"></a>

### *property* Objective.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Comments"></a>

### *property* Objective.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Images"></a>

### *property* Objective.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Objective.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Properties"></a>

### *property* Objective.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Objective.VisibleProperties"></a>

### *property* Objective.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Objective.Delete"></a>

### Objective.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetChildren"></a>

### Objective.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Objective.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Objective.AddComment"></a>

### Objective.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Objective.AddImage"></a>

### Objective.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Activate"></a>

### Objective.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Objective.CopyTo"></a>

### Objective.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Duplicate"></a>

### Objective.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GroupAllSimilarChildren"></a>

### Objective.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GroupSimilarObjects"></a>

### Objective.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Objective.PropertyByName"></a>

### Objective.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Objective.PropertyByAPIName"></a>

### Objective.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Objective.CreateParameter"></a>

### Objective.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetParameter"></a>

### Objective.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Objective.RemoveParameter"></a>

### Objective.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

