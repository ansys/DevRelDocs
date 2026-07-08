# `ScriptDefinedResultFolder`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ScriptableResults.ScriptDefinedResultFolder"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ScriptableResults.ScriptDefinedResultFolder

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ScriptDefinedResultFolder.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ScriptDefinedResultFolder.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ScriptDefinedResultFolder.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ScriptDefinedResultFolder.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ScriptDefinedResultFolder.AddImage)                               | Creates a new child Image.                                                        |
| [`AddPythonResult`](#ScriptDefinedResultFolder.AddPythonResult)                 | Creates a new PythonResult                                                        |
| [`CopyTo`](#ScriptDefinedResultFolder.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ScriptDefinedResultFolder.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#ScriptDefinedResultFolder.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#ScriptDefinedResultFolder.EvaluateAllResults)           | EvaluatesAllResults.                                                              |
| [`GetChildren`](#ScriptDefinedResultFolder.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ScriptDefinedResultFolder.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ScriptDefinedResultFolder.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ScriptDefinedResultFolder.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ScriptDefinedResultFolder.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ScriptDefinedResultFolder.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ScriptDefinedResultFolder.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ScriptDefinedResultFolder.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ScriptDefinedResultFolder.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ScriptDefinedResultFolder.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ScriptDefinedResultFolder.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ScriptDefinedResultFolder.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ScriptDefinedResultFolder.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ScriptDefinedResultFolder.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ScriptDefinedResultFolder.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`VisibleProperties`](#ScriptDefinedResultFolder.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ScriptDefinedResultFolder.Children"></a>

### *property* ScriptDefinedResultFolder.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Comments"></a>

### *property* ScriptDefinedResultFolder.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.DataModelObjectCategory"></a>

### *property* ScriptDefinedResultFolder.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Figures"></a>

### *property* ScriptDefinedResultFolder.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Images"></a>

### *property* ScriptDefinedResultFolder.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.InternalObject"></a>

### *property* ScriptDefinedResultFolder.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSScriptResultFolderAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Properties"></a>

### *property* ScriptDefinedResultFolder.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.ReadOnly"></a>

### *property* ScriptDefinedResultFolder.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.VisibleProperties"></a>

### *property* ScriptDefinedResultFolder.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ScriptDefinedResultFolder.Activate"></a>

### ScriptDefinedResultFolder.Activate()

Activate the current object.

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

### ScriptDefinedResultFolder.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.AddPythonResult"></a>

### ScriptDefinedResultFolder.AddPythonResult()

Creates a new PythonResult

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.CopyTo"></a>

### ScriptDefinedResultFolder.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.CreateParameter"></a>

### ScriptDefinedResultFolder.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Duplicate"></a>

### ScriptDefinedResultFolder.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.EvaluateAllResults"></a>

### ScriptDefinedResultFolder.EvaluateAllResults()

EvaluatesAllResults.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetChildren"></a>

### ScriptDefinedResultFolder.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetParameter"></a>

### ScriptDefinedResultFolder.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GroupAllSimilarChildren"></a>

### ScriptDefinedResultFolder.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GroupSimilarObjects"></a>

### ScriptDefinedResultFolder.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.PropertyByAPIName"></a>

### ScriptDefinedResultFolder.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.PropertyByName"></a>

### ScriptDefinedResultFolder.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.RemoveParameter"></a>

### ScriptDefinedResultFolder.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

