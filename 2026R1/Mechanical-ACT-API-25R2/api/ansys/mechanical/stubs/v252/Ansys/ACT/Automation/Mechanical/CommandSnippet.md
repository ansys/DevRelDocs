# `CommandSnippet`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CommandSnippet"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CommandSnippet

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CommandSnippet.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CommandSnippet.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#CommandSnippet.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CommandSnippet.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CommandSnippet.AddImage)                               | Creates a new child Image.                                                        |
| [`AppendText`](#CommandSnippet.AppendText)                           | Append Text.                                                                      |
| [`CopyTo`](#CommandSnippet.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CommandSnippet.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CommandSnippet.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CommandSnippet.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`ExportTextFile`](#CommandSnippet.ExportTextFile)                   | Export to Textfile.                                                               |
| [`GetChildren`](#CommandSnippet.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CommandSnippet.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CommandSnippet.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CommandSnippet.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`ImportTextFile`](#CommandSnippet.ImportTextFile)                   | Import from Textfile.                                                             |
| [`PropertyByAPIName`](#CommandSnippet.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CommandSnippet.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CommandSnippet.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#CommandSnippet.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#CommandSnippet.Children)                               | Gets the list of children.                                    |
| [`Comments`](#CommandSnippet.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CommandSnippet.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#CommandSnippet.Figures)                                 | Gets the list of associated figures.                          |
| [`FileName`](#CommandSnippet.FileName)                               | Gets the FileName.                                            |
| [`Images`](#CommandSnippet.Images)                                   | Gets the list of associated images.                           |
| [`Input`](#CommandSnippet.Input)                                     | Gets or sets the Text.                                        |
| [`InputArgument1`](#CommandSnippet.InputArgument1)                   | Gets or sets the InputArgument1.                              |
| [`InputArgument2`](#CommandSnippet.InputArgument2)                   | Gets or sets the InputArgument2.                              |
| [`InputArgument3`](#CommandSnippet.InputArgument3)                   | Gets or sets the InputArgument3.                              |
| [`InputArgument4`](#CommandSnippet.InputArgument4)                   | Gets or sets the InputArgument4.                              |
| [`InputArgument5`](#CommandSnippet.InputArgument5)                   | Gets or sets the InputArgument5.                              |
| [`InputArgument6`](#CommandSnippet.InputArgument6)                   | Gets or sets the InputArgument6.                              |
| [`InputArgument7`](#CommandSnippet.InputArgument7)                   | Gets or sets the InputArgument7.                              |
| [`InputArgument8`](#CommandSnippet.InputArgument8)                   | Gets or sets the InputArgument8.                              |
| [`InputArgument9`](#CommandSnippet.InputArgument9)                   | Gets or sets the InputArgument9.                              |
| [`InternalObject`](#CommandSnippet.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`InvalidateSolution`](#CommandSnippet.InvalidateSolution)           | Gets or sets the InvalidateSolution.                          |
| [`IssueSolveCommand`](#CommandSnippet.IssueSolveCommand)             | Gets or sets the IssueSolveCommand.                           |
| [`OutputParameters`](#CommandSnippet.OutputParameters)               | Gets a list of the command snippet’s output parameters.       |
| [`OutputSearchPrefix`](#CommandSnippet.OutputSearchPrefix)           | Gets or sets the OutputSearchPrefix.                          |
| [`Properties`](#CommandSnippet.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#CommandSnippet.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SnippetFileStatus`](#CommandSnippet.SnippetFileStatus)             | Gets the SnippetFileStatus.                                   |
| [`SolverTarget`](#CommandSnippet.SolverTarget)                       | Gets the SolverTarget.                                        |
| [`StepNumber`](#CommandSnippet.StepNumber)                           | Gets or sets the StepNumber.                                  |
| [`StepSelectionMode`](#CommandSnippet.StepSelectionMode)             | Gets or sets the StepSelectionMode.                           |
| [`Suppressed`](#CommandSnippet.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#CommandSnippet.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CommandSnippet.Children"></a>

### *property* CommandSnippet.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Comments"></a>

### *property* CommandSnippet.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.DataModelObjectCategory"></a>

### *property* CommandSnippet.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Figures"></a>

### *property* CommandSnippet.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.FileName"></a>

### *property* CommandSnippet.FileName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FileName.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Images"></a>

### *property* CommandSnippet.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Input"></a>

### *property* CommandSnippet.Input *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Text.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument1"></a>

### *property* CommandSnippet.InputArgument1 *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument1.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument2"></a>

### *property* CommandSnippet.InputArgument2 *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument2.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument3"></a>

### *property* CommandSnippet.InputArgument3 *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument3.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument4"></a>

### *property* CommandSnippet.InputArgument4 *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument4.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument5"></a>

### *property* CommandSnippet.InputArgument5 *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument5.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument6"></a>

### *property* CommandSnippet.InputArgument6 *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument6.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument7"></a>

### *property* CommandSnippet.InputArgument7 *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument7.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument8"></a>

### *property* CommandSnippet.InputArgument8 *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument8.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument9"></a>

### *property* CommandSnippet.InputArgument9 *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument9.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InternalObject"></a>

### *property* CommandSnippet.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCommandEditorAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InvalidateSolution"></a>

### *property* CommandSnippet.InvalidateSolution *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InvalidateSolution.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.IssueSolveCommand"></a>

### *property* CommandSnippet.IssueSolveCommand *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IssueSolveCommand.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.OutputParameters"></a>

### *property* CommandSnippet.OutputParameters *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.CommandOutputParameter] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a list of the command snippet’s output parameters.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.OutputSearchPrefix"></a>

### *property* CommandSnippet.OutputSearchPrefix *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputSearchPrefix.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Properties"></a>

### *property* CommandSnippet.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.ReadOnly"></a>

### *property* CommandSnippet.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.SnippetFileStatus"></a>

### *property* CommandSnippet.SnippetFileStatus *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SnippetFileStatus.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.SolverTarget"></a>

### *property* CommandSnippet.SolverTarget *: [Ansys.Mechanical.DataModel.Enums.CommandEditorTarget](../../../Mechanical/DataModel/Enums/CommandEditorTarget.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CommandEditorTarget) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverTarget.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.StepNumber"></a>

### *property* CommandSnippet.StepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepNumber.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.StepSelectionMode"></a>

### *property* CommandSnippet.StepSelectionMode *: [Ansys.Mechanical.DataModel.Enums.SequenceSelectionType](../../../Mechanical/DataModel/Enums/SequenceSelectionType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SequenceSelectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelectionMode.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Suppressed"></a>

### *property* CommandSnippet.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.VisibleProperties"></a>

### *property* CommandSnippet.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CommandSnippet.Activate"></a>

### CommandSnippet.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.AddComment"></a>

### CommandSnippet.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.AddFigure"></a>

### CommandSnippet.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.AddImage"></a>

### CommandSnippet.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.AppendText"></a>

### CommandSnippet.AppendText(NewText: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Append Text.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.CopyTo"></a>

### CommandSnippet.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.CreateParameter"></a>

### CommandSnippet.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Delete"></a>

### CommandSnippet.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Duplicate"></a>

### CommandSnippet.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.ExportTextFile"></a>

### CommandSnippet.ExportTextFile(TextFile: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Export to Textfile.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetChildren"></a>

### CommandSnippet.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetParameter"></a>

### CommandSnippet.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GroupAllSimilarChildren"></a>

### CommandSnippet.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GroupSimilarObjects"></a>

### CommandSnippet.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.ImportTextFile"></a>

### CommandSnippet.ImportTextFile(TextFile: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Import from Textfile.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.PropertyByAPIName"></a>

### CommandSnippet.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.PropertyByName"></a>

### CommandSnippet.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.RemoveParameter"></a>

### CommandSnippet.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.RenameBasedOnDefinition"></a>

### CommandSnippet.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

