# ScriptDefinedResultFolder

### *class* ScriptDefinedResultFolder

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ScriptDefinedResultFolder.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`EvaluateAllResults`](#ScriptDefinedResultFolder.EvaluateAllResults)           | EvaluatesAllResults.                                                              |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddPythonResult`](#ScriptDefinedResultFolder.AddPythonResult)                 | Creates a new PythonResult                                                        |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ScriptDefinedResultFolder.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ScriptDefinedResultFolder.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ScriptDefinedResultFolder.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ScriptDefinedResultFolder.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ScriptDefinedResultFolder.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ScriptDefinedResultFolder.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ScriptDefinedResultFolder.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ScriptDefinedResultFolder.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ScriptDefinedResultFolder.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ScriptDefinedResultFolder.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ScriptDefinedResultFolder.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ScriptDefinedResultFolder.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ScriptDefinedResultFolder.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ScriptDefinedResultFolder.Children)                                                                         | Gets the list of children.                                    |
| [`Comments`](#ScriptDefinedResultFolder.Comments)                                                                         | Gets the list of associated comments.                         |
| [`Figures`](#ScriptDefinedResultFolder.Figures)                                                                           | Gets the list of associated figures.                          |
| [`Images`](#ScriptDefinedResultFolder.Images)                                                                             | Gets the list of associated images.                           |
| [`ReadOnly`](#ScriptDefinedResultFolder.ReadOnly)                                                                         | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ScriptDefinedResultFolder.Properties)                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ScriptDefinedResultFolder.VisibleProperties)                                                       | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ScriptableResults import ScriptDefinedResultFolder
```

## Property detail

### *property* ScriptDefinedResultFolder.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSScriptResultFolderAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ScriptDefinedResultFolder.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ScriptDefinedResultFolder.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ScriptDefinedResultFolder.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ScriptDefinedResultFolder.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ScriptDefinedResultFolder.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ScriptDefinedResultFolder.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ScriptDefinedResultFolder.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ScriptDefinedResultFolder.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ScriptDefinedResultFolder.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ScriptDefinedResultFolder.EvaluateAllResults()

EvaluatesAllResults.

<!-- !! processed by numpydoc !! -->

### ScriptDefinedResultFolder.AddPythonResult()

Creates a new PythonResult

<!-- !! processed by numpydoc !! -->

### ScriptDefinedResultFolder.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ScriptDefinedResultFolder.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ScriptDefinedResultFolder.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ScriptDefinedResultFolder.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ScriptDefinedResultFolder.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ScriptDefinedResultFolder.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ScriptDefinedResultFolder.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ScriptDefinedResultFolder.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ScriptDefinedResultFolder.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ScriptDefinedResultFolder.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ScriptDefinedResultFolder.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ScriptDefinedResultFolder.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ScriptDefinedResultFolder.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ScriptDefinedResultFolder.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ScriptDefinedResultFolder.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
