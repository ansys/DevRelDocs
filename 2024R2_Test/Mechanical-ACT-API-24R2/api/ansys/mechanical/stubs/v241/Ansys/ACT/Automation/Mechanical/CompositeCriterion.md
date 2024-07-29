# `CompositeCriterion`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CompositeCriterion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CompositeCriterion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetDefinition`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.GetDefinition)                     | Gets the Worksheet Definition.                                                    |
| [`EvaluateAllResults`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ClearGeneratedData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#id0)                                                 | Gets the internal object. For advanced usage only.            |
| [`Value`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.Value)                                     | Gets the Value.                                               |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#id0)                                                 | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CompositeCriterion.md#CompositeCriterion.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CompositeCriterion.InternalObject"></a>

### *property* CompositeCriterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoCriterionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Value"></a>

### *property* CompositeCriterion.Value *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Value.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.DataModelObjectCategory"></a>

### *property* CompositeCriterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Suppressed"></a>

### *property* CompositeCriterion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Children"></a>

### *property* CompositeCriterion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Comments"></a>

### *property* CompositeCriterion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Figures"></a>

### *property* CompositeCriterion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Images"></a>

### *property* CompositeCriterion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.ReadOnly"></a>

### *property* CompositeCriterion.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CompositeCriterion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Properties"></a>

### *property* CompositeCriterion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.VisibleProperties"></a>

### *property* CompositeCriterion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompositeCriterion.GetDefinition"></a>

### CompositeCriterion.GetDefinition()

Gets the Worksheet Definition.
This Definition is a list of CompositeCriterionTerms.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.EvaluateAllResults"></a>

### CompositeCriterion.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.ClearGeneratedData"></a>

### CompositeCriterion.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Delete"></a>

### CompositeCriterion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetChildren"></a>

### CompositeCriterion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CompositeCriterion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.AddComment"></a>

### CompositeCriterion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.AddFigure"></a>

### CompositeCriterion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.AddImage"></a>

### CompositeCriterion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Activate"></a>

### CompositeCriterion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.CopyTo"></a>

### CompositeCriterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.Duplicate"></a>

### CompositeCriterion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GroupAllSimilarChildren"></a>

### CompositeCriterion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GroupSimilarObjects"></a>

### CompositeCriterion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.PropertyByName"></a>

### CompositeCriterion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.PropertyByAPIName"></a>

### CompositeCriterion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.CreateParameter"></a>

### CompositeCriterion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.GetParameter"></a>

### CompositeCriterion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterion.RemoveParameter"></a>

### CompositeCriterion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

