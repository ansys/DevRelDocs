<a id="commandsnippet"></a>

# CommandSnippet

<a id="CommandSnippet"></a>

### *class* CommandSnippet

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CommandSnippet.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`AppendText`](#CommandSnippet.AppendText)                           | Append Text.                                                                      |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ImportTextFile`](#CommandSnippet.ImportTextFile)                   | Import from Textfile.                                                             |
| [`ExportTextFile`](#CommandSnippet.ExportTextFile)                   | Export to Textfile.                                                               |
| [`RenameBasedOnDefinition`](#CommandSnippet.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#CommandSnippet.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CommandSnippet.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CommandSnippet.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CommandSnippet.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#CommandSnippet.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#CommandSnippet.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CommandSnippet.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CommandSnippet.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CommandSnippet.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CommandSnippet.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CommandSnippet.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#CommandSnippet.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CommandSnippet.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CommandSnippet.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Input`](#CommandSnippet.Input)                                                                                    | Gets or sets the Text.                                        |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`OutputParameters`](#CommandSnippet.OutputParameters)                                                              | Gets a list of the command snippet’s output parameters.       |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`InputArgument1`](#CommandSnippet.InputArgument1)                                                                  | Gets or sets the InputArgument1.                              |
| [`InputArgument2`](#CommandSnippet.InputArgument2)                                                                  | Gets or sets the InputArgument2.                              |
| [`InputArgument3`](#CommandSnippet.InputArgument3)                                                                  | Gets or sets the InputArgument3.                              |
| [`InputArgument4`](#CommandSnippet.InputArgument4)                                                                  | Gets or sets the InputArgument4.                              |
| [`InputArgument5`](#CommandSnippet.InputArgument5)                                                                  | Gets or sets the InputArgument5.                              |
| [`InputArgument6`](#CommandSnippet.InputArgument6)                                                                  | Gets or sets the InputArgument6.                              |
| [`InputArgument7`](#CommandSnippet.InputArgument7)                                                                  | Gets or sets the InputArgument7.                              |
| [`InputArgument8`](#CommandSnippet.InputArgument8)                                                                  | Gets or sets the InputArgument8.                              |
| [`InputArgument9`](#CommandSnippet.InputArgument9)                                                                  | Gets or sets the InputArgument9.                              |
| [`OutputSearchPrefix`](#CommandSnippet.OutputSearchPrefix)                                                          | Gets or sets the OutputSearchPrefix.                          |
| [`StepNumber`](#CommandSnippet.StepNumber)                                                                          | Gets or sets the StepNumber.                                  |
| [`FileName`](#CommandSnippet.FileName)                                                                              | Gets the FileName.                                            |
| [`SnippetFileStatus`](#CommandSnippet.SnippetFileStatus)                                                            | Gets the SnippetFileStatus.                                   |
| [`StepSelectionMode`](#CommandSnippet.StepSelectionMode)                                                            | Gets or sets the StepSelectionMode.                           |
| [`SolverTarget`](#CommandSnippet.SolverTarget)                                                                      | Gets the SolverTarget.                                        |
| [`IssueSolveCommand`](#CommandSnippet.IssueSolveCommand)                                                            | Gets or sets the IssueSolveCommand.                           |
| [`InvalidateSolution`](#CommandSnippet.InvalidateSolution)                                                          | Gets or sets the InvalidateSolution.                          |
| [`Suppressed`](#CommandSnippet.Suppressed)                                                                          | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#CommandSnippet.Children)                                                                              | Gets the list of children.                                    |
| [`Comments`](#CommandSnippet.Comments)                                                                              | Gets the list of associated comments.                         |
| [`Figures`](#CommandSnippet.Figures)                                                                                | Gets the list of associated figures.                          |
| [`Images`](#CommandSnippet.Images)                                                                                  | Gets the list of associated images.                           |
| [`ReadOnly`](#CommandSnippet.ReadOnly)                                                                              | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CommandSnippet.Properties)                                                                          | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CommandSnippet.VisibleProperties)                                                            | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import CommandSnippet
```

<a id="property-detail"></a>

## Property detail

<a id="CommandSnippet.Input"></a>

### *property* CommandSnippet.Input *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Text.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.OutputParameters"></a>

### *property* CommandSnippet.OutputParameters *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.CommandOutputParameter] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a list of the command snippet’s output parameters.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InternalObject"></a>

### *property* CommandSnippet.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCommandEditorAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument1"></a>

### *property* CommandSnippet.InputArgument1 *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument1.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument2"></a>

### *property* CommandSnippet.InputArgument2 *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument2.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument3"></a>

### *property* CommandSnippet.InputArgument3 *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument3.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument4"></a>

### *property* CommandSnippet.InputArgument4 *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument4.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument5"></a>

### *property* CommandSnippet.InputArgument5 *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument5.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument6"></a>

### *property* CommandSnippet.InputArgument6 *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument6.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument7"></a>

### *property* CommandSnippet.InputArgument7 *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument7.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument8"></a>

### *property* CommandSnippet.InputArgument8 *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument8.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument9"></a>

### *property* CommandSnippet.InputArgument9 *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument9.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.OutputSearchPrefix"></a>

### *property* CommandSnippet.OutputSearchPrefix *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputSearchPrefix.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.StepNumber"></a>

### *property* CommandSnippet.StepNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepNumber.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.FileName"></a>

### *property* CommandSnippet.FileName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FileName.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.SnippetFileStatus"></a>

### *property* CommandSnippet.SnippetFileStatus *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SnippetFileStatus.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.StepSelectionMode"></a>

### *property* CommandSnippet.StepSelectionMode *: [Ansys.Mechanical.DataModel.Enums.SequenceSelectionType](../../../Mechanical/DataModel/Enums/SequenceSelectionType.md#SequenceSelectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelectionMode.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.SolverTarget"></a>

### *property* CommandSnippet.SolverTarget *: [Ansys.Mechanical.DataModel.Enums.CommandEditorTarget](../../../Mechanical/DataModel/Enums/CommandEditorTarget.md#CommandEditorTarget) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverTarget.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.IssueSolveCommand"></a>

### *property* CommandSnippet.IssueSolveCommand *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IssueSolveCommand.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InvalidateSolution"></a>

### *property* CommandSnippet.InvalidateSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InvalidateSolution.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Suppressed"></a>

### *property* CommandSnippet.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.DataModelObjectCategory"></a>

### *property* CommandSnippet.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Children"></a>

### *property* CommandSnippet.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Comments"></a>

### *property* CommandSnippet.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Figures"></a>

### *property* CommandSnippet.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Images"></a>

### *property* CommandSnippet.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.ReadOnly"></a>

### *property* CommandSnippet.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CommandSnippet.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Properties"></a>

### *property* CommandSnippet.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.VisibleProperties"></a>

### *property* CommandSnippet.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CommandSnippet.AppendText"></a>

### CommandSnippet.AppendText(NewText: System.String)

Append Text.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.ImportTextFile"></a>

### CommandSnippet.ImportTextFile(TextFile: System.String)

Import from Textfile.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.ExportTextFile"></a>

### CommandSnippet.ExportTextFile(TextFile: System.String)

Export to Textfile.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.RenameBasedOnDefinition"></a>

### CommandSnippet.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Delete"></a>

### CommandSnippet.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetChildren"></a>

### CommandSnippet.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CommandSnippet.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.AddComment"></a>

### CommandSnippet.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.AddFigure"></a>

### CommandSnippet.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.AddImage"></a>

### CommandSnippet.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Activate"></a>

### CommandSnippet.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.CopyTo"></a>

### CommandSnippet.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Duplicate"></a>

### CommandSnippet.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GroupAllSimilarChildren"></a>

### CommandSnippet.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GroupSimilarObjects"></a>

### CommandSnippet.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.PropertyByName"></a>

### CommandSnippet.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.PropertyByAPIName"></a>

### CommandSnippet.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.CreateParameter"></a>

### CommandSnippet.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetParameter"></a>

### CommandSnippet.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.RemoveParameter"></a>

### CommandSnippet.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
