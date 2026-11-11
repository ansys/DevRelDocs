# `CommandSnippet`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CommandSnippet(internalObject: Any)

<a id="CommandSnippet"></a>

### *class* CommandSnippet(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CommandSnippet.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CommandSnippet.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#CommandSnippet.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#CommandSnippet.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#CommandSnippet.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AppendText`](#CommandSnippet.AppendText)                               | Append Text.                                                                                |
| [`Copy`](#CommandSnippet.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CommandSnippet.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CommandSnippet.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CommandSnippet.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CommandSnippet.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CommandSnippet.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#CommandSnippet.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CommandSnippet.Equals)                                       | Equals method.                                                                              |
| [`ExportTextFile`](#CommandSnippet.ExportTextFile)                       | Export to Textfile.                                                                         |
| [`GetAPIName`](#CommandSnippet.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CommandSnippet.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#CommandSnippet.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CommandSnippet.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CommandSnippet.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#CommandSnippet.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#CommandSnippet.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CommandSnippet.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CommandSnippet.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#CommandSnippet.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CommandSnippet.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#CommandSnippet.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CommandSnippet.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CommandSnippet.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CommandSnippet.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CommandSnippet.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CommandSnippet.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`ImportTextFile`](#CommandSnippet.ImportTextFile)                       | Import from Textfile.                                                                       |
| [`InitializeLifetimeService`](#CommandSnippet.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CommandSnippet.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CommandSnippet.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#CommandSnippet.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CommandSnippet.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#CommandSnippet.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#CommandSnippet.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CommandSnippet.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CommandSnippet.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#CommandSnippet.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#CommandSnippet.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#CommandSnippet.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#CommandSnippet.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#CommandSnippet.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CommandSnippet.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#CommandSnippet.Figures)                                   | Gets the list of associated figures.                          |
| [`FileName`](#CommandSnippet.FileName)                                 | Gets the FileName.                                            |
| [`GroupingFolder`](#CommandSnippet.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#CommandSnippet.IconName)                                 | IconName property.                                            |
| [`Images`](#CommandSnippet.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#CommandSnippet.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`Input`](#CommandSnippet.Input)                                       | Gets or sets the Text.                                        |
| [`InputArgument1`](#CommandSnippet.InputArgument1)                     | Gets or sets the InputArgument1.                              |
| [`InputArgument2`](#CommandSnippet.InputArgument2)                     | Gets or sets the InputArgument2.                              |
| [`InputArgument3`](#CommandSnippet.InputArgument3)                     | Gets or sets the InputArgument3.                              |
| [`InputArgument4`](#CommandSnippet.InputArgument4)                     | Gets or sets the InputArgument4.                              |
| [`InputArgument5`](#CommandSnippet.InputArgument5)                     | Gets or sets the InputArgument5.                              |
| [`InputArgument6`](#CommandSnippet.InputArgument6)                     | Gets or sets the InputArgument6.                              |
| [`InputArgument7`](#CommandSnippet.InputArgument7)                     | Gets or sets the InputArgument7.                              |
| [`InputArgument8`](#CommandSnippet.InputArgument8)                     | Gets or sets the InputArgument8.                              |
| [`InputArgument9`](#CommandSnippet.InputArgument9)                     | Gets or sets the InputArgument9.                              |
| [`InternalObject`](#CommandSnippet.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`InvalidateSolution`](#CommandSnippet.InvalidateSolution)             | Gets or sets the InvalidateSolution.                          |
| [`IssueSolveCommand`](#CommandSnippet.IssueSolveCommand)               | Gets or sets the IssueSolveCommand.                           |
| [`Name`](#CommandSnippet.Name)                                         | Name property.                                                |
| [`ObjectId`](#CommandSnippet.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#CommandSnippet.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#CommandSnippet.ObjectTags)                             | ObjectTags property.                                          |
| [`OutputParameters`](#CommandSnippet.OutputParameters)                 | Gets a list of the command snippet's output parameters.       |
| [`OutputSearchPrefix`](#CommandSnippet.OutputSearchPrefix)             | Gets or sets the OutputSearchPrefix.                          |
| [`Parent`](#CommandSnippet.Parent)                                     | Parent property.                                              |
| [`Properties`](#CommandSnippet.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#CommandSnippet.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SnippetFileStatus`](#CommandSnippet.SnippetFileStatus)               | Gets the SnippetFileStatus.                                   |
| [`SolverTarget`](#CommandSnippet.SolverTarget)                         | Gets the SolverTarget.                                        |
| [`State`](#CommandSnippet.State)                                       | State property.                                               |
| [`StepNumber`](#CommandSnippet.StepNumber)                             | Gets or sets the StepNumber.                                  |
| [`StepSelectionMode`](#CommandSnippet.StepSelectionMode)               | Gets or sets the StepSelectionMode.                           |
| [`Suppressed`](#CommandSnippet.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#CommandSnippet.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#CommandSnippet.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CommandSnippet.AttachedRefs"></a>

### *property* CommandSnippet.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Children"></a>

### *property* CommandSnippet.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.ClsId"></a>

### *property* CommandSnippet.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Comments"></a>

### *property* CommandSnippet.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.DataModelObjectCategory"></a>

### *property* CommandSnippet.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Figures"></a>

### *property* CommandSnippet.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.FileName"></a>

### *property* CommandSnippet.FileName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FileName.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GroupingFolder"></a>

### *property* CommandSnippet.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.IconName"></a>

### *property* CommandSnippet.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Images"></a>

### *property* CommandSnippet.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.ImportableObjectSourceId"></a>

### *property* CommandSnippet.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Input"></a>

### *property* CommandSnippet.Input *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Text.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument1"></a>

### *property* CommandSnippet.InputArgument1 *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InputArgument1.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument2"></a>

### *property* CommandSnippet.InputArgument2 *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InputArgument2.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument3"></a>

### *property* CommandSnippet.InputArgument3 *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InputArgument3.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument4"></a>

### *property* CommandSnippet.InputArgument4 *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InputArgument4.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument5"></a>

### *property* CommandSnippet.InputArgument5 *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InputArgument5.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument6"></a>

### *property* CommandSnippet.InputArgument6 *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InputArgument6.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument7"></a>

### *property* CommandSnippet.InputArgument7 *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InputArgument7.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument8"></a>

### *property* CommandSnippet.InputArgument8 *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InputArgument8.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InputArgument9"></a>

### *property* CommandSnippet.InputArgument9 *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InputArgument9.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InternalObject"></a>

### *property* CommandSnippet.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCommandEditorAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InvalidateSolution"></a>

### *property* CommandSnippet.InvalidateSolution *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InvalidateSolution.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.IssueSolveCommand"></a>

### *property* CommandSnippet.IssueSolveCommand *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IssueSolveCommand.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Name"></a>

### *property* CommandSnippet.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.ObjectId"></a>

### *property* CommandSnippet.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.ObjectState"></a>

### *property* CommandSnippet.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.ObjectTags"></a>

### *property* CommandSnippet.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.OutputParameters"></a>

### *property* CommandSnippet.OutputParameters *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.CommandOutputParameter] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets a list of the command snippet's output parameters.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.OutputSearchPrefix"></a>

### *property* CommandSnippet.OutputSearchPrefix *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OutputSearchPrefix.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Parent"></a>

### *property* CommandSnippet.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Properties"></a>

### *property* CommandSnippet.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.ReadOnly"></a>

### *property* CommandSnippet.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.SnippetFileStatus"></a>

### *property* CommandSnippet.SnippetFileStatus *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SnippetFileStatus.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.SolverTarget"></a>

### *property* CommandSnippet.SolverTarget *: [Ansys.Mechanical.DataModel.Enums.CommandEditorTarget](../../../Mechanical/DataModel/Enums/CommandEditorTarget.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CommandEditorTarget) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SolverTarget.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.State"></a>

### *property* CommandSnippet.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.StepNumber"></a>

### *property* CommandSnippet.StepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StepNumber.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.StepSelectionMode"></a>

### *property* CommandSnippet.StepSelectionMode *: [Ansys.Mechanical.DataModel.Enums.SequenceSelectionType](../../../Mechanical/DataModel/Enums/SequenceSelectionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SequenceSelectionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StepSelectionMode.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Suppressed"></a>

### *property* CommandSnippet.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.TransferableObjectId"></a>

### *property* CommandSnippet.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.VisibleProperties"></a>

### *property* CommandSnippet.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CommandSnippet.Activate"></a>

### CommandSnippet.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.AddComment"></a>

### CommandSnippet.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.AddFigure"></a>

### CommandSnippet.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.AddImage"></a>

### CommandSnippet.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.AppendText"></a>

### CommandSnippet.AppendText(NewText: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Append Text.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Copy"></a>

### CommandSnippet.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.CopyTo"></a>

### CommandSnippet.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.CreateObjRef"></a>

### CommandSnippet.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.CreateParameter"></a>

### CommandSnippet.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Cut"></a>

### CommandSnippet.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Delete"></a>

### CommandSnippet.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Duplicate"></a>

### CommandSnippet.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Equals"></a>

### CommandSnippet.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.ExportTextFile"></a>

### CommandSnippet.ExportTextFile(TextFile: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Export to Textfile.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetAPIName"></a>

### CommandSnippet.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetAllProperties"></a>

### CommandSnippet.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetChildren"></a>

### CommandSnippet.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CommandSnippet.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetDetailsView"></a>

### CommandSnippet.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetEnumName"></a>

### CommandSnippet.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetHashCode"></a>

### CommandSnippet.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetIconFile"></a>

### CommandSnippet.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetLifetimeService"></a>

### CommandSnippet.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetObjectData"></a>

### CommandSnippet.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetParameter"></a>

### CommandSnippet.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetPath"></a>

### CommandSnippet.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetPropertyName"></a>

### CommandSnippet.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetPropertyValue"></a>

### CommandSnippet.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetVisibleProperties"></a>

### CommandSnippet.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GetVisiblePropertyNames"></a>

### CommandSnippet.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GroupAllSimilarChildren"></a>

### CommandSnippet.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.GroupSimilarObjects"></a>

### CommandSnippet.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.ImportTextFile"></a>

### CommandSnippet.ImportTextFile(TextFile: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Import from Textfile.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.InitializeLifetimeService"></a>

### CommandSnippet.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.IsPropertyEditable"></a>

### CommandSnippet.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CommandSnippet.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.IsPropertyVisible"></a>

### CommandSnippet.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CommandSnippet.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.Paste"></a>

### CommandSnippet.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.PropertyByAPIName"></a>

### CommandSnippet.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.PropertyById"></a>

### CommandSnippet.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.PropertyByName"></a>

### CommandSnippet.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.RemoveFromGroup"></a>

### CommandSnippet.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.RemoveParameter"></a>

### CommandSnippet.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CommandSnippet.RenameBasedOnDefinition"></a>

### CommandSnippet.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

