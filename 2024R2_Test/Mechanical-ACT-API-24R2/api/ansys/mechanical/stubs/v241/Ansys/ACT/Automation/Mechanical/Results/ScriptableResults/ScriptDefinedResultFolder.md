# `ScriptDefinedResultFolder`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ScriptableResults.ScriptDefinedResultFolder

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ScriptDefinedResultFolder.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.EvaluateAllResults)           | EvaluatesAllResults.                                                              |
| [`AddPythonResult`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.AddPythonResult)                 | Creates a new PythonResult                                                        |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#id0)                                                        | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#id0)                                                        | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ScriptableResults/ScriptDefinedResultFolder.md#ScriptDefinedResultFolder.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ScriptDefinedResultFolder.InternalObject"></a>

### *property* ScriptDefinedResultFolder.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSScriptResultFolderAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.DataModelObjectCategory"></a>

### *property* ScriptDefinedResultFolder.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Children"></a>

### *property* ScriptDefinedResultFolder.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Comments"></a>

### *property* ScriptDefinedResultFolder.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Figures"></a>

### *property* ScriptDefinedResultFolder.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Images"></a>

### *property* ScriptDefinedResultFolder.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.ReadOnly"></a>

### *property* ScriptDefinedResultFolder.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ScriptDefinedResultFolder.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Properties"></a>

### *property* ScriptDefinedResultFolder.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.VisibleProperties"></a>

### *property* ScriptDefinedResultFolder.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ScriptDefinedResultFolder.EvaluateAllResults"></a>

### ScriptDefinedResultFolder.EvaluateAllResults()

EvaluatesAllResults.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.AddPythonResult"></a>

### ScriptDefinedResultFolder.AddPythonResult()

Creates a new PythonResult

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetChildren"></a>

### ScriptDefinedResultFolder.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ScriptDefinedResultFolder.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.AddComment"></a>

### ScriptDefinedResultFolder.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.AddFigure"></a>

### ScriptDefinedResultFolder.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.AddImage"></a>

### ScriptDefinedResultFolder.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Activate"></a>

### ScriptDefinedResultFolder.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.CopyTo"></a>

### ScriptDefinedResultFolder.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Duplicate"></a>

### ScriptDefinedResultFolder.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GroupAllSimilarChildren"></a>

### ScriptDefinedResultFolder.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GroupSimilarObjects"></a>

### ScriptDefinedResultFolder.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.PropertyByName"></a>

### ScriptDefinedResultFolder.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.PropertyByAPIName"></a>

### ScriptDefinedResultFolder.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.CreateParameter"></a>

### ScriptDefinedResultFolder.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetParameter"></a>

### ScriptDefinedResultFolder.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.RemoveParameter"></a>

### ScriptDefinedResultFolder.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

