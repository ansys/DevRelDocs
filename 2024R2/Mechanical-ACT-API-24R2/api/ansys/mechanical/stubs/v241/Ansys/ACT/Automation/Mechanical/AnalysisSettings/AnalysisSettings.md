# `AnalysisSettings`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisSettings.AnalysisSettings"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AnalysisSettings.AnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AnalysisSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AnalysisSettings.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#AnalysisSettings.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AnalysisSettings.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AnalysisSettings.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#AnalysisSettings.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AnalysisSettings.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`DeleteAllRestartPoints`](#AnalysisSettings.DeleteAllRestartPoints)   | DeleteAllRestartPoints method.                                                    |
| [`Duplicate`](#AnalysisSettings.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#AnalysisSettings.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AnalysisSettings.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AnalysisSettings.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AnalysisSettings.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#AnalysisSettings.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AnalysisSettings.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AnalysisSettings.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#AnalysisSettings.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#AnalysisSettings.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AnalysisSettings.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`Figures`](#AnalysisSettings.Figures)                                         | Gets the list of associated figures.                          |
| [`Graph`](#AnalysisSettings.Graph)                                             | Graph property.                                               |
| [`Images`](#AnalysisSettings.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](#AnalysisSettings.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AnalysisSettings.Properties)                                   | Gets the list of properties for this object.                  |
| [`ScratchSolverFilesDirectory`](#AnalysisSettings.ScratchSolverFilesDirectory) | Gets the ScratchSolverFilesDirectory.                         |
| [`SolverFilesDirectory`](#AnalysisSettings.SolverFilesDirectory)               | Gets the SolverFilesDirectory.                                |
| [`VisibleProperties`](#AnalysisSettings.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AnalysisSettings.Children"></a>

### *property* AnalysisSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Comments"></a>

### *property* AnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.DataModelObjectCategory"></a>

### *property* AnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Figures"></a>

### *property* AnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Graph"></a>

### *property* AnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../../../v242/Ansys/Mechanical/Graphics/AnalysisSettingsGraph.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Images"></a>

### *property* AnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.InternalObject"></a>

### *property* AnalysisSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisSettings | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Properties"></a>

### *property* AnalysisSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ScratchSolverFilesDirectory"></a>

### *property* AnalysisSettings.ScratchSolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SolverFilesDirectory"></a>

### *property* AnalysisSettings.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.VisibleProperties"></a>

### *property* AnalysisSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AnalysisSettings.Activate"></a>

### AnalysisSettings.Activate()

Activate the current object.

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

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CopyTo"></a>

### AnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CreateParameter"></a>

### AnalysisSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.DeleteAllRestartPoints"></a>

### AnalysisSettings.DeleteAllRestartPoints()

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Duplicate"></a>

### AnalysisSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetChildren"></a>

### AnalysisSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetParameter"></a>

### AnalysisSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GroupAllSimilarChildren"></a>

### AnalysisSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GroupSimilarObjects"></a>

### AnalysisSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.PropertyByAPIName"></a>

### AnalysisSettings.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.PropertyByName"></a>

### AnalysisSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RemoveParameter"></a>

### AnalysisSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

