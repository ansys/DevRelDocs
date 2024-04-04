# PythonResult

### *class* PythonResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PythonResult.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Evaluate`](#PythonResult.Evaluate)                               | Evaluate method.                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#PythonResult.EvaluateAllResults)           | Evaluate all results.                                                             |
| [`ClearGeneratedData`](#PythonResult.ClearGeneratedData)           | ClearGeneratedData method.                                                        |
| [`ExportAnimation`](#PythonResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#id2)                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id2)                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PythonResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PythonResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PythonResult.AddImage)                               | Creates a new child Image.                                                        |
| [`ReloadProperties`](#PythonResult.ReloadProperties)               | Reload properties to update properties provided by the provider.                  |
| [`Connect`](../../MeshControls/Connect.md#Connect)                 | Register the python code.                                                         |
| [`Delete`](#PythonResult.Delete)                                   | Run the Delete action.                                                            |
| [`Activate`](#PythonResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PythonResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PythonResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PythonResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PythonResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PythonResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PythonResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#PythonResult.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PythonResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PythonResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1)                                                                                                  | Gets the internal object. For advanced usage only.                                    |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`Mode`](#PythonResult.Mode)                                                                                              | Gets or sets the Mode.                                                                |
| [`DisplayTime`](#PythonResult.DisplayTime)                                                                                | Gets or sets the DisplayTime.                                                         |
| [`By`](#PythonResult.By)                                                                                                  | Gets or sets the By.                                                                  |
| [`Location`](#PythonResult.Location)                                                                                      | Gets or sets the Location.                                                            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                          |
| [`Children`](#PythonResult.Children)                                                                                      | Gets the list of children.                                                            |
| [`Comments`](#PythonResult.Comments)                                                                                      | Gets the list of associated comments.                                                 |
| [`Figures`](#PythonResult.Figures)                                                                                        | Gets the list of associated figures.                                                  |
| [`Images`](#PythonResult.Images)                                                                                          | Gets the list of associated images.                                                   |
| [`Text`](#PythonResult.Text)                                                                                              | Gets or sets the text in the script tab for the Python Code object.                   |
| [`PropertyProvider`](#PythonResult.PropertyProvider)                                                                      | Gets or sets the propperty provider instance associated with this python code object. |
| [`InternalObject`](#id1)                                                                                                  | Gets the internal object. For advanced usage only.                                    |
| [`ScriptExecutionScope`](#PythonResult.ScriptExecutionScope)                                                              | The scope identifier in which the code execution will take place.                     |
| [`Connected`](#PythonResult.Connected)                                                                                    | Gets whether the callbacks are currently connected.                                   |
| [`InternalObject`](#id1)                                                                                                  | Gets the internal object. For advanced usage only.                                    |
| [`Properties`](#PythonResult.Properties)                                                                                  | Gets the list of properties for this object.                                          |
| [`VisibleProperties`](#PythonResult.VisibleProperties)                                                                    | Gets the list of properties that are visible for this object.                         |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ScriptableResults import PythonResult
```

## Property detail

### *property* PythonResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSScriptDefinedResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PythonResult.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* PythonResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* PythonResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* PythonResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* PythonResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* PythonResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PythonResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* PythonResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* PythonResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* PythonResult.Text *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the text in the script tab for the Python Code object.

<!-- !! processed by numpydoc !! -->

### *property* PythonResult.PropertyProvider *: Ansys.ACT.Interfaces.Mechanical.IPropertyProvider | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the propperty provider instance associated with this python code object.

<!-- !! processed by numpydoc !! -->

### *property* PythonResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPythonCodeAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PythonResult.ScriptExecutionScope *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The scope identifier in which the code execution will take place.

<!-- !! processed by numpydoc !! -->

### *property* PythonResult.Connected *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets whether the callbacks are currently connected.

<!-- !! processed by numpydoc !! -->

### *property* PythonResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PythonResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PythonResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### PythonResult.Evaluate()

Evaluate method.

<!-- !! processed by numpydoc !! -->

### PythonResult.EvaluateAllResults()

Evaluate all results.

<!-- !! processed by numpydoc !! -->

### PythonResult.ClearGeneratedData()

ClearGeneratedData method.

<!-- !! processed by numpydoc !! -->

### PythonResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### PythonResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PythonResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PythonResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### PythonResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### PythonResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### PythonResult.ReloadProperties()

Reload properties to update properties provided by the provider.

<!-- !! processed by numpydoc !! -->

### PythonResult.Connect()

Register the python code.

<!-- !! processed by numpydoc !! -->

### PythonResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PythonResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PythonResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PythonResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PythonResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PythonResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PythonResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PythonResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### PythonResult.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PythonResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PythonResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
