# `CommandSnippet`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CommandSnippet

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CommandSnippet.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AppendText`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.AppendText)                           | Append Text.                                                                      |
| [`ImportTextFile`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.ImportTextFile)                   | Import from Textfile.                                                             |
| [`ExportTextFile`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.ExportTextFile)                   | Export to Textfile.                                                               |
| [`RenameBasedOnDefinition`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Input`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.Input)                                     | Gets or sets the Text.                                        |
| [`OutputParameters`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.OutputParameters)               | Gets a list of the command snippet's output parameters.       |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`InputArgument1`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.InputArgument1)                   | Gets or sets the InputArgument1.                              |
| [`InputArgument2`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.InputArgument2)                   | Gets or sets the InputArgument2.                              |
| [`InputArgument3`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.InputArgument3)                   | Gets or sets the InputArgument3.                              |
| [`InputArgument4`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.InputArgument4)                   | Gets or sets the InputArgument4.                              |
| [`InputArgument5`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.InputArgument5)                   | Gets or sets the InputArgument5.                              |
| [`InputArgument6`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.InputArgument6)                   | Gets or sets the InputArgument6.                              |
| [`InputArgument7`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.InputArgument7)                   | Gets or sets the InputArgument7.                              |
| [`InputArgument8`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.InputArgument8)                   | Gets or sets the InputArgument8.                              |
| [`InputArgument9`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.InputArgument9)                   | Gets or sets the InputArgument9.                              |
| [`OutputSearchPrefix`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.OutputSearchPrefix)           | Gets or sets the OutputSearchPrefix.                          |
| [`StepNumber`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.StepNumber)                           | Gets or sets the StepNumber.                                  |
| [`FileName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.FileName)                               | Gets the FileName.                                            |
| [`SnippetFileStatus`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.SnippetFileStatus)             | Gets the SnippetFileStatus.                                   |
| [`StepSelectionMode`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.StepSelectionMode)             | Gets or sets the StepSelectionMode.                           |
| [`SolverTarget`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.SolverTarget)                       | Gets the SolverTarget.                                        |
| [`IssueSolveCommand`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.IssueSolveCommand)             | Gets or sets the IssueSolveCommand.                           |
| [`InvalidateSolution`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.InvalidateSolution)           | Gets or sets the InvalidateSolution.                          |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CommandSnippet.md#CommandSnippet.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CommandSnippet.Input"></a>

### *property* CommandSnippet.Input *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Text.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.OutputParameters"></a>

### *property* CommandSnippet.OutputParameters *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.CommandOutputParameter] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a list of the command snippet's output parameters.

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

### *property* CommandSnippet.StepSelectionMode *: [Ansys.Mechanical.DataModel.Enums.SequenceSelectionType](../../../Mechanical/DataModel/Enums/SequenceSelectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SequenceSelectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelectionMode.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.SolverTarget"></a>

### *property* CommandSnippet.SolverTarget *: [Ansys.Mechanical.DataModel.Enums.CommandEditorTarget](../../../Mechanical/DataModel/Enums/CommandEditorTarget.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CommandEditorTarget) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* CommandSnippet.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Children"></a>

### *property* CommandSnippet.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Comments"></a>

### *property* CommandSnippet.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Figures"></a>

### *property* CommandSnippet.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Images"></a>

### *property* CommandSnippet.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### CommandSnippet.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

