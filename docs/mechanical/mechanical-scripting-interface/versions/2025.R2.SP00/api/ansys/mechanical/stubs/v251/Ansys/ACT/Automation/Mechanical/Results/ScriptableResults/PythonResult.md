# `PythonResult`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ScriptableResults.PythonResult"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ScriptableResults.PythonResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PythonResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PythonResult.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#PythonResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PythonResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PythonResult.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#PythonResult.ClearGeneratedData)           | ClearGeneratedData method.                                                        |
| [`Connect`](#PythonResult.Connect)                                 | Register the python code.                                                         |
| [`CopyTo`](#PythonResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PythonResult.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PythonResult.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PythonResult.Duplicate)                             | Duplicate method.                                                                 |
| [`Evaluate`](#PythonResult.Evaluate)                               | Evaluate method.                                                                  |
| [`EvaluateAllResults`](#PythonResult.EvaluateAllResults)           | Evaluate all results.                                                             |
| [`ExportAnimation`](#PythonResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#PythonResult.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PythonResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PythonResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PythonResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PythonResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PythonResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`ReloadProperties`](#PythonResult.ReloadProperties)               | Reload properties to update properties provided by the provider.                  |
| [`RemoveParameter`](#PythonResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`AllowRecursion`](#PythonResult.AllowRecursion)                   | Gets or Sets whether the PythonCode allows recursion.                                 |
| [`By`](#PythonResult.By)                                           | Gets or sets the By.                                                                  |
| [`Children`](#PythonResult.Children)                               | Gets the list of children.                                                            |
| [`Comments`](#PythonResult.Comments)                               | Gets the list of associated comments.                                                 |
| [`Connected`](#PythonResult.Connected)                             | Gets whether the callbacks are currently connected.                                   |
| [`DataModelObjectCategory`](#PythonResult.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                          |
| [`DisplayTime`](#PythonResult.DisplayTime)                         | Gets or sets the DisplayTime.                                                         |
| [`Figures`](#PythonResult.Figures)                                 | Gets the list of associated figures.                                                  |
| [`Images`](#PythonResult.Images)                                   | Gets the list of associated images.                                                   |
| [`InternalObject`](#PythonResult.InternalObject)                   | Gets the internal object. For advanced usage only.                                    |
| [`Location`](#PythonResult.Location)                               | Gets or sets the Location.                                                            |
| [`Mode`](#PythonResult.Mode)                                       | Gets or sets the Mode.                                                                |
| [`Properties`](#PythonResult.Properties)                           | Gets the list of properties for this object.                                          |
| [`PropertyProvider`](#PythonResult.PropertyProvider)               | Gets or sets the propperty provider instance associated with this python code object. |
| [`ScriptExecutionScope`](#PythonResult.ScriptExecutionScope)       | The scope identifier in which the code execution will take place.                     |
| [`Text`](#PythonResult.Text)                                       | Gets or sets the text in the script tab for the Python Code object.                   |
| [`VisibleProperties`](#PythonResult.VisibleProperties)             | Gets the list of properties that are visible for this object.                         |

<a id="property-detail"></a>

## Property detail

<a id="PythonResult.AllowRecursion"></a>

### *property* PythonResult.AllowRecursion *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets whether the PythonCode allows recursion.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.By"></a>

### *property* PythonResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Children"></a>

### *property* PythonResult.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Comments"></a>

### *property* PythonResult.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Connected"></a>

### *property* PythonResult.Connected *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets whether the callbacks are currently connected.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.DataModelObjectCategory"></a>

### *property* PythonResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.DisplayTime"></a>

### *property* PythonResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Figures"></a>

### *property* PythonResult.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Images"></a>

### *property* PythonResult.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.InternalObject"></a>

### *property* PythonResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSScriptDefinedResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Location"></a>

### *property* PythonResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Mode"></a>

### *property* PythonResult.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Properties"></a>

### *property* PythonResult.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.PropertyProvider"></a>

### *property* PythonResult.PropertyProvider *: Ansys.ACT.Interfaces.Mechanical.IPropertyProvider | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the propperty provider instance associated with this python code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ScriptExecutionScope"></a>

### *property* PythonResult.ScriptExecutionScope *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The scope identifier in which the code execution will take place.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Text"></a>

### *property* PythonResult.Text *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the text in the script tab for the Python Code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.VisibleProperties"></a>

### *property* PythonResult.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PythonResult.Activate"></a>

### PythonResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.AddComment"></a>

### PythonResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.AddFigure"></a>

### PythonResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.AddImage"></a>

### PythonResult.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ClearGeneratedData"></a>

### PythonResult.ClearGeneratedData()

ClearGeneratedData method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Connect"></a>

### PythonResult.Connect()

Register the python code.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.CopyTo"></a>

### PythonResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.CreateParameter"></a>

### PythonResult.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Delete"></a>

### PythonResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Duplicate"></a>

### PythonResult.Duplicate()

Duplicate method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Evaluate"></a>

### PythonResult.Evaluate()

Evaluate method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.EvaluateAllResults"></a>

### PythonResult.EvaluateAllResults()

Evaluate all results.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ExportAnimation"></a>

### PythonResult.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetChildren"></a>

### PythonResult.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetParameter"></a>

### PythonResult.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GroupAllSimilarChildren"></a>

### PythonResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GroupSimilarObjects"></a>

### PythonResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.PropertyByAPIName"></a>

### PythonResult.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.PropertyByName"></a>

### PythonResult.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ReloadProperties"></a>

### PythonResult.ReloadProperties()

Reload properties to update properties provided by the provider.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.RemoveParameter"></a>

### PythonResult.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

