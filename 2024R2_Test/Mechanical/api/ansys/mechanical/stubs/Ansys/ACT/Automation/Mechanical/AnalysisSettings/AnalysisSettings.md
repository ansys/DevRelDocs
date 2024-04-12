<a id="analysissettings"></a>

# AnalysisSettings

<a id="AnalysisSettings"></a>

### *class* AnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AnalysisSettings.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|----------------------------------------------|-----------------------------------------------------------------------------------|
| [`DeleteAllRestartPoints`](index.md#id142)   | DeleteAllRestartPoints method.                                                    |
| [`GetChildren`](index.md#id144)              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](index.md#id144)              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](index.md#id145)               | Creates a new child Comment.                                                      |
| [`AddFigure`](index.md#id146)                | Creates a new child Figure.                                                       |
| [`AddImage`](index.md#id147)                 | Creates a new child Image.                                                        |
| [`Activate`](index.md#id148)                 | Activate the current object.                                                      |
| [`CopyTo`](index.md#id149)                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](index.md#id150)                | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](index.md#id151)  | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](index.md#id152)      | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](index.md#id153)           | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](index.md#id154)        | Get a property by its API name.                                                   |
| [`CreateParameter`](index.md#id155)          | Creates a new parameter for a Property.                                           |
| [`GetParameter`](index.md#id156)             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](index.md#id157)          | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Graph`](index.md#id116)                                                                                              | Graph property.                                               |
| [`InternalObject`](index.md#id117)                                                                                     | Gets the internal object. For advanced usage only.            |
| [`ScratchSolverFilesDirectory`](index.md#id118)                                                                        | Gets the ScratchSolverFilesDirectory.                         |
| [`SolverFilesDirectory`](index.md#id119)                                                                               | Gets the SolverFilesDirectory.                                |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](index.md#id121)                                                                                           | Gets the list of children.                                    |
| [`Comments`](index.md#id122)                                                                                           | Gets the list of associated comments.                         |
| [`Figures`](index.md#id123)                                                                                            | Gets the list of associated figures.                          |
| [`Images`](index.md#id124)                                                                                             | Gets the list of associated images.                           |
| [`InternalObject`](index.md#id117)                                                                                     | Gets the internal object. For advanced usage only.            |
| [`Properties`](index.md#id125)                                                                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](index.md#id126)                                                                                  | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AnalysisSettings import AnalysisSettings
```

<a id="property-detail"></a>

## Property detail

<a id="AnalysisSettings.Graph"></a>

### *property* AnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.InternalObject"></a>

### *property* AnalysisSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisSettings | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ScratchSolverFilesDirectory"></a>

### *property* AnalysisSettings.ScratchSolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SolverFilesDirectory"></a>

### *property* AnalysisSettings.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.DataModelObjectCategory"></a>

### *property* AnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Children"></a>

### *property* AnalysisSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Comments"></a>

### *property* AnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Figures"></a>

### *property* AnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Images"></a>

### *property* AnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AnalysisSettings.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Properties"></a>

### *property* AnalysisSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.VisibleProperties"></a>

### *property* AnalysisSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AnalysisSettings.DeleteAllRestartPoints"></a>

### AnalysisSettings.DeleteAllRestartPoints()

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetChildren"></a>

### AnalysisSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AddComment"></a>

### AnalysisSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AddFigure"></a>

### AnalysisSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AddImage"></a>

### AnalysisSettings.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Activate"></a>

### AnalysisSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CopyTo"></a>

### AnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Duplicate"></a>

### AnalysisSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GroupAllSimilarChildren"></a>

### AnalysisSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GroupSimilarObjects"></a>

### AnalysisSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.PropertyByName"></a>

### AnalysisSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.PropertyByAPIName"></a>

### AnalysisSettings.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CreateParameter"></a>

### AnalysisSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetParameter"></a>

### AnalysisSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RemoveParameter"></a>

### AnalysisSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
