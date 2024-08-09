# `PythonResult`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ScriptableResults.PythonResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PythonResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Evaluate`](#PythonResult.Evaluate)                               | Evaluate method.                                                                  |
| [`EvaluateAllResults`](#PythonResult.EvaluateAllResults)           | Evaluate all results.                                                             |
| [`ClearGeneratedData`](#PythonResult.ClearGeneratedData)           | ClearGeneratedData method.                                                        |
| [`ExportAnimation`](#PythonResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#id2)                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id2)                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PythonResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PythonResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PythonResult.AddImage)                               | Creates a new child Image.                                                        |
| [`ReloadProperties`](#PythonResult.ReloadProperties)               | Reload properties to update properties provided by the provider.                  |
| [`Connect`](#PythonResult.Connect)                                 | Register the python code.                                                         |
| [`Duplicate`](#PythonResult.Duplicate)                             | Duplicate method.                                                                 |
| [`Delete`](#PythonResult.Delete)                                   | Run the Delete action.                                                            |
| [`Activate`](#PythonResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PythonResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`GroupAllSimilarChildren`](#PythonResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PythonResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PythonResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PythonResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#PythonResult.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PythonResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PythonResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`InternalObject`](#id1)                                           | Gets the internal object. For advanced usage only.                                    |
| [`Mode`](#PythonResult.Mode)                                       | Gets or sets the Mode.                                                                |
| [`DisplayTime`](#PythonResult.DisplayTime)                         | Gets or sets the DisplayTime.                                                         |
| [`By`](#PythonResult.By)                                           | Gets or sets the By.                                                                  |
| [`Location`](#PythonResult.Location)                               | Gets or sets the Location.                                                            |
| [`DataModelObjectCategory`](#PythonResult.DataModelObjectCategory) | Gets the current DataModelObject's category.                                          |
| [`Children`](#PythonResult.Children)                               | Gets the list of children.                                                            |
| [`Comments`](#PythonResult.Comments)                               | Gets the list of associated comments.                                                 |
| [`Figures`](#PythonResult.Figures)                                 | Gets the list of associated figures.                                                  |
| [`Images`](#PythonResult.Images)                                   | Gets the list of associated images.                                                   |
| [`Text`](#PythonResult.Text)                                       | Gets or sets the text in the script tab for the Python Code object.                   |
| [`PropertyProvider`](#PythonResult.PropertyProvider)               | Gets or sets the propperty provider instance associated with this python code object. |
| [`InternalObject`](#id1)                                           | Gets the internal object. For advanced usage only.                                    |
| [`ScriptExecutionScope`](#PythonResult.ScriptExecutionScope)       | The scope identifier in which the code execution will take place.                     |
| [`AllowRecursion`](#PythonResult.AllowRecursion)                   | Gets or Sets whether the PythonCode allows recursion.                                 |
| [`Connected`](#PythonResult.Connected)                             | Gets whether the callbacks are currently connected.                                   |
| [`InternalObject`](#id1)                                           | Gets the internal object. For advanced usage only.                                    |
| [`Properties`](#PythonResult.Properties)                           | Gets the list of properties for this object.                                          |
| [`VisibleProperties`](#PythonResult.VisibleProperties)             | Gets the list of properties that are visible for this object.                         |

<a id="property-detail"></a>

## Property detail

<a id="PythonResult.InternalObject"></a>

### *property* PythonResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSScriptDefinedResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Mode"></a>

### *property* PythonResult.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.DisplayTime"></a>

### *property* PythonResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.By"></a>

### *property* PythonResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Location"></a>

### *property* PythonResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.DataModelObjectCategory"></a>

### *property* PythonResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Children"></a>

### *property* PythonResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Comments"></a>

### *property* PythonResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Figures"></a>

### *property* PythonResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Images"></a>

### *property* PythonResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Text"></a>

### *property* PythonResult.Text *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the text in the script tab for the Python Code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.PropertyProvider"></a>

### *property* PythonResult.PropertyProvider *: Ansys.ACT.Interfaces.Mechanical.IPropertyProvider | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the propperty provider instance associated with this python code object.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PythonResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPythonCodeAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ScriptExecutionScope"></a>

### *property* PythonResult.ScriptExecutionScope *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The scope identifier in which the code execution will take place.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.AllowRecursion"></a>

### *property* PythonResult.AllowRecursion *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets whether the PythonCode allows recursion.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Connected"></a>

### *property* PythonResult.Connected *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets whether the callbacks are currently connected.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### *property* PythonResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Properties"></a>

### *property* PythonResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.VisibleProperties"></a>

### *property* PythonResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PythonResult.Evaluate"></a>

### PythonResult.Evaluate()

Evaluate method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.EvaluateAllResults"></a>

### PythonResult.EvaluateAllResults()

Evaluate all results.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ClearGeneratedData"></a>

### PythonResult.ClearGeneratedData()

ClearGeneratedData method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ExportAnimation"></a>

### PythonResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetChildren"></a>

### PythonResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### PythonResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### PythonResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ReloadProperties"></a>

### PythonResult.ReloadProperties()

Reload properties to update properties provided by the provider.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Connect"></a>

### PythonResult.Connect()

Register the python code.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Duplicate"></a>

### PythonResult.Duplicate()

Duplicate method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Delete"></a>

### PythonResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Activate"></a>

### PythonResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.CopyTo"></a>

### PythonResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GroupAllSimilarChildren"></a>

### PythonResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GroupSimilarObjects"></a>

### PythonResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.PropertyByName"></a>

### PythonResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.PropertyByAPIName"></a>

### PythonResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.CreateParameter"></a>

### PythonResult.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetParameter"></a>

### PythonResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.RemoveParameter"></a>

### PythonResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

