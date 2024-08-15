# `CommandSnippet`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CommandSnippet

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CommandSnippet.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `AppendText`              | Append Text.                                                                      |
| `ImportTextFile`          | Import from Textfile.                                                             |
| `ExportTextFile`          | Export to Textfile.                                                               |
| `RenameBasedOnDefinition` | Run the RenameBasedOnDefinition action.                                           |
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `Input`                   | Gets or sets the Text.                                        |
| `OutputParameters`        | Gets a list of the command snippet's output parameters.       |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `InputArgument1`          | Gets or sets the InputArgument1.                              |
| `InputArgument2`          | Gets or sets the InputArgument2.                              |
| `InputArgument3`          | Gets or sets the InputArgument3.                              |
| `InputArgument4`          | Gets or sets the InputArgument4.                              |
| `InputArgument5`          | Gets or sets the InputArgument5.                              |
| `InputArgument6`          | Gets or sets the InputArgument6.                              |
| `InputArgument7`          | Gets or sets the InputArgument7.                              |
| `InputArgument8`          | Gets or sets the InputArgument8.                              |
| `InputArgument9`          | Gets or sets the InputArgument9.                              |
| `OutputSearchPrefix`      | Gets or sets the OutputSearchPrefix.                          |
| `StepNumber`              | Gets or sets the StepNumber.                                  |
| `FileName`                | Gets the FileName.                                            |
| `SnippetFileStatus`       | Gets the SnippetFileStatus.                                   |
| `StepSelectionMode`       | Gets or sets the StepSelectionMode.                           |
| `SolverTarget`            | Gets the SolverTarget.                                        |
| `IssueSolveCommand`       | Gets or sets the IssueSolveCommand.                           |
| `InvalidateSolution`      | Gets or sets the InvalidateSolution.                          |
| `Suppressed`              | Gets or sets the Suppressed.                                  |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Figures`                 | Gets the list of associated figures.                          |
| `Images`                  | Gets the list of associated images.                           |
| `ReadOnly`                | Gets or sets the ReadOnly.                                    |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* CommandSnippet.Input *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Text.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.OutputParameters *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.CommandOutputParameter] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a list of the command snippet's output parameters.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCommandEditorAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.InputArgument1 *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument1.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.InputArgument2 *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument2.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.InputArgument3 *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument3.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.InputArgument4 *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument4.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.InputArgument5 *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument5.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.InputArgument6 *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument6.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.InputArgument7 *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument7.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.InputArgument8 *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument8.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.InputArgument9 *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputArgument9.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.OutputSearchPrefix *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputSearchPrefix.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.StepNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepNumber.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.FileName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FileName.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.SnippetFileStatus *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SnippetFileStatus.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.StepSelectionMode *: [Ansys.Mechanical.DataModel.Enums.SequenceSelectionType](../../../Mechanical/DataModel/Enums/SequenceSelectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SequenceSelectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelectionMode.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.SolverTarget *: [Ansys.Mechanical.DataModel.Enums.CommandEditorTarget](../../../Mechanical/DataModel/Enums/CommandEditorTarget.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CommandEditorTarget) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverTarget.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.IssueSolveCommand *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IssueSolveCommand.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.InvalidateSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InvalidateSolution.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* CommandSnippet.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### CommandSnippet.AppendText(NewText: System.String)

Append Text.

<!-- !! processed by numpydoc !! -->

### CommandSnippet.ImportTextFile(TextFile: System.String)

Import from Textfile.

<!-- !! processed by numpydoc !! -->

### CommandSnippet.ExportTextFile(TextFile: System.String)

Export to Textfile.

<!-- !! processed by numpydoc !! -->

### CommandSnippet.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### CommandSnippet.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### CommandSnippet.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CommandSnippet.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CommandSnippet.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### CommandSnippet.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### CommandSnippet.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### CommandSnippet.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### CommandSnippet.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### CommandSnippet.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### CommandSnippet.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### CommandSnippet.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### CommandSnippet.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### CommandSnippet.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### CommandSnippet.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### CommandSnippet.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### CommandSnippet.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

