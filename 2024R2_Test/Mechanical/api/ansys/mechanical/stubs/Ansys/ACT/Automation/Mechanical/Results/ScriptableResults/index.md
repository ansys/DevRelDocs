<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ScriptableResults"></a>

<a id="the-scriptableresults-package"></a>

# The `ScriptableResults` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|---------------------------------------------------------------------------------------|--------------------------------------|
| [`PythonResult`](PythonResult.md#PythonResult)                                        | Defines a PythonResult.              |
| [`ScriptDefinedResultFolder`](ScriptDefinedResultFolder.md#ScriptDefinedResultFolder) | Defines a ScriptDefinedResultFolder. |

<a id="description"></a>

## Description

ScriptableResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="ScriptableResults.PythonResult"></a>

### *class* ScriptableResults.PythonResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PythonResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Evaluate`](#ScriptableResults.Evaluate)                     | Evaluate method.                                                                  |
| [`EvaluateAllResults`](#id15)                                 | Evaluate all results.                                                             |
| [`ClearGeneratedData`](#ScriptableResults.ClearGeneratedData) | ClearGeneratedData method.                                                        |
| [`ExportAnimation`](#ScriptableResults.ExportAnimation)       | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#id17)                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id17)                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id18)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#id19)                                          | Creates a new child Figure.                                                       |
| [`AddImage`](#id20)                                           | Creates a new child Image.                                                        |
| [`ReloadProperties`](#ScriptableResults.ReloadProperties)     | Reload properties to update properties provided by the provider.                  |
| [`Connect`](../../MeshControls/Connect.md#Connect)            | Register the python code.                                                         |
| [`Delete`](#ScriptableResults.Delete)                         | Run the Delete action.                                                            |
| [`Activate`](#id21)                                           | Activate the current object.                                                      |
| [`CopyTo`](#id22)                                             | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id23)                                          | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id24)                            | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id25)                                | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id26)                                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id27)                                  | Get a property by its API name.                                                   |
| [`CreateParameter`](#id28)                                    | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id29)                                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id30)                                    | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`InternalObject`](#id11)                                                                                                 | Gets the internal object. For advanced usage only.                                    |
| [`Mode`](#ScriptableResults.Mode)                                                                                         | Gets or sets the Mode.                                                                |
| [`DisplayTime`](#ScriptableResults.DisplayTime)                                                                           | Gets or sets the DisplayTime.                                                         |
| [`By`](#ScriptableResults.By)                                                                                             | Gets or sets the By.                                                                  |
| [`Location`](#ScriptableResults.Location)                                                                                 | Gets or sets the Location.                                                            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                          |
| [`Children`](#id7)                                                                                                        | Gets the list of children.                                                            |
| [`Comments`](#id8)                                                                                                        | Gets the list of associated comments.                                                 |
| [`Figures`](#id9)                                                                                                         | Gets the list of associated figures.                                                  |
| [`Images`](#id10)                                                                                                         | Gets the list of associated images.                                                   |
| [`Text`](#ScriptableResults.Text)                                                                                         | Gets or sets the text in the script tab for the Python Code object.                   |
| [`PropertyProvider`](#ScriptableResults.PropertyProvider)                                                                 | Gets or sets the propperty provider instance associated with this python code object. |
| [`InternalObject`](#id11)                                                                                                 | Gets the internal object. For advanced usage only.                                    |
| [`ScriptExecutionScope`](#ScriptableResults.ScriptExecutionScope)                                                         | The scope identifier in which the code execution will take place.                     |
| [`Connected`](#ScriptableResults.Connected)                                                                               | Gets whether the callbacks are currently connected.                                   |
| [`InternalObject`](#id11)                                                                                                 | Gets the internal object. For advanced usage only.                                    |
| [`Properties`](#id12)                                                                                                     | Gets the list of properties for this object.                                          |
| [`VisibleProperties`](#id13)                                                                                              | Gets the list of properties that are visible for this object.                         |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ScriptableResults import PythonResult
```

<a id="property-detail"></a>

## Property detail

<a id="ScriptableResults.InternalObject"></a>

### *property* ScriptableResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSScriptDefinedResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.Mode"></a>

### *property* ScriptableResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.DisplayTime"></a>

### *property* ScriptableResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.By"></a>

### *property* ScriptableResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.Location"></a>

### *property* ScriptableResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.DataModelObjectCategory"></a>

### *property* ScriptableResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.Children"></a>

### *property* ScriptableResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.Comments"></a>

### *property* ScriptableResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.Figures"></a>

### *property* ScriptableResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.Images"></a>

### *property* ScriptableResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.Text"></a>

### *property* ScriptableResults.Text *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the text in the script tab for the Python Code object.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.PropertyProvider"></a>

### *property* ScriptableResults.PropertyProvider *: Ansys.ACT.Interfaces.Mechanical.IPropertyProvider | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the propperty provider instance associated with this python code object.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ScriptableResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPythonCodeAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.ScriptExecutionScope"></a>

### *property* ScriptableResults.ScriptExecutionScope *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The scope identifier in which the code execution will take place.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.Connected"></a>

### *property* ScriptableResults.Connected *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets whether the callbacks are currently connected.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### *property* ScriptableResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.Properties"></a>

### *property* ScriptableResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.VisibleProperties"></a>

### *property* ScriptableResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ScriptableResults.Evaluate"></a>

### ScriptableResults.Evaluate()

Evaluate method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.EvaluateAllResults"></a>

### ScriptableResults.EvaluateAllResults()

Evaluate all results.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.ClearGeneratedData"></a>

### ScriptableResults.ClearGeneratedData()

ClearGeneratedData method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.ExportAnimation"></a>

### ScriptableResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.GetChildren"></a>

### ScriptableResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### ScriptableResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.AddComment"></a>

### ScriptableResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.AddFigure"></a>

### ScriptableResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.AddImage"></a>

### ScriptableResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.ReloadProperties"></a>

### ScriptableResults.ReloadProperties()

Reload properties to update properties provided by the provider.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.Connect"></a>

### ScriptableResults.Connect()

Register the python code.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.Delete"></a>

### ScriptableResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.Activate"></a>

### ScriptableResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.CopyTo"></a>

### ScriptableResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.Duplicate"></a>

### ScriptableResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.GroupAllSimilarChildren"></a>

### ScriptableResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.GroupSimilarObjects"></a>

### ScriptableResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.PropertyByName"></a>

### ScriptableResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.PropertyByAPIName"></a>

### ScriptableResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.CreateParameter"></a>

### ScriptableResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.GetParameter"></a>

### ScriptableResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.RemoveParameter"></a>

### ScriptableResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.ScriptDefinedResultFolder"></a>

### *class* ScriptableResults.ScriptDefinedResultFolder

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ScriptDefinedResultFolder.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|---------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id15)                           | EvaluatesAllResults.                                                              |
| [`AddPythonResult`](#ScriptableResults.AddPythonResult) | Creates a new PythonResult                                                        |
| [`GetChildren`](#id17)                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id17)                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id18)                                   | Creates a new child Comment.                                                      |
| [`AddFigure`](#id19)                                    | Creates a new child Figure.                                                       |
| [`AddImage`](#id20)                                     | Creates a new child Image.                                                        |
| [`Activate`](#id21)                                     | Activate the current object.                                                      |
| [`CopyTo`](#id22)                                       | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id23)                                    | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id24)                      | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id25)                          | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id26)                               | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id27)                            | Get a property by its API name.                                                   |
| [`CreateParameter`](#id28)                              | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id29)                                 | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id30)                              | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id11)                                                                                                 | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id7)                                                                                                        | Gets the list of children.                                    |
| [`Comments`](#id8)                                                                                                        | Gets the list of associated comments.                         |
| [`Figures`](#id9)                                                                                                         | Gets the list of associated figures.                          |
| [`Images`](#id10)                                                                                                         | Gets the list of associated images.                           |
| [`ReadOnly`](#ScriptableResults.ReadOnly)                                                                                 | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id11)                                                                                                 | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id12)                                                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id13)                                                                                              | Gets the list of properties that are visible for this object. |

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ScriptableResults import ScriptDefinedResultFolder
```

<a id="id4"></a>

## Property detail

<a id="id5"></a>

### *property* ScriptableResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSScriptResultFolderAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* ScriptableResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* ScriptableResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* ScriptableResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* ScriptableResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* ScriptableResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.ReadOnly"></a>

### *property* ScriptableResults.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* ScriptableResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* ScriptableResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* ScriptableResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

## Method detail

<a id="id15"></a>

### ScriptableResults.EvaluateAllResults()

EvaluatesAllResults.

<!-- !! processed by numpydoc !! -->

<a id="ScriptableResults.AddPythonResult"></a>

### ScriptableResults.AddPythonResult()

Creates a new PythonResult

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### ScriptableResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### ScriptableResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### ScriptableResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### ScriptableResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### ScriptableResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### ScriptableResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### ScriptableResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### ScriptableResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### ScriptableResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### ScriptableResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### ScriptableResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### ScriptableResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### ScriptableResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### ScriptableResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### ScriptableResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
