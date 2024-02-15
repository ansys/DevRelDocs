# PythonCodeEventBased

### *class* PythonCodeEventBased

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PythonCodeEventBased.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ReloadProperties`](#PythonCodeEventBased.ReloadProperties)               | Reload properties to update properties provided by the provider.                  |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Connect`](MeshControls/Connect.md#Connect)                               | Register the python code.                                                         |
| [`Delete`](#PythonCodeEventBased.Delete)                                   | Run the Delete action.                                                            |
| [`Activate`](#PythonCodeEventBased.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PythonCodeEventBased.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PythonCodeEventBased.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PythonCodeEventBased.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PythonCodeEventBased.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PythonCodeEventBased.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PythonCodeEventBased.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#PythonCodeEventBased.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PythonCodeEventBased.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PythonCodeEventBased.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id1)                                                                                            | Gets the internal object. For advanced usage only.                                    |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`SolverTarget`](#PythonCodeEventBased.SolverTarget)                                                                | Gets the SolverTarget.                                                                |
| [`TargetCallback`](#PythonCodeEventBased.TargetCallback)                                                            | Gets or sets the TargetCallback.                                                      |
| [`Suppressed`](#PythonCodeEventBased.Suppressed)                                                                    | Gets or sets the Suppressed.                                                          |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                          |
| [`Text`](#PythonCodeEventBased.Text)                                                                                | Gets or sets the text in the script tab for the Python Code object.                   |
| [`PropertyProvider`](#PythonCodeEventBased.PropertyProvider)                                                        | Gets or sets the propperty provider instance associated with this python code object. |
| [`InternalObject`](#id1)                                                                                            | Gets the internal object. For advanced usage only.                                    |
| [`ScriptExecutionScope`](#PythonCodeEventBased.ScriptExecutionScope)                                                | The scope identifier in which the code execution will take place.                     |
| [`Connected`](#PythonCodeEventBased.Connected)                                                                      | Gets whether the callbacks are currently connected.                                   |
| [`InternalObject`](#id1)                                                                                            | Gets the internal object. For advanced usage only.                                    |
| [`Properties`](#PythonCodeEventBased.Properties)                                                                    | Gets the list of properties for this object.                                          |
| [`VisibleProperties`](#PythonCodeEventBased.VisibleProperties)                                                      | Gets the list of properties that are visible for this object.                         |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import PythonCodeEventBased
```

## Property detail

### *property* PythonCodeEventBased.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPythonCodeEventBasedAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PythonCodeEventBased.SolverTarget *: [Ansys.Mechanical.DataModel.Enums.CommandEditorTarget](../../../Mechanical/DataModel/Enums/CommandEditorTarget.md#CommandEditorTarget) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverTarget.

<!-- !! processed by numpydoc !! -->

### *property* PythonCodeEventBased.TargetCallback *: [Ansys.Mechanical.DataModel.Enums.PythonCodeTargetCallback](../../../Mechanical/DataModel/Enums/PythonCodeTargetCallback.md#PythonCodeTargetCallback) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetCallback.

<!-- !! processed by numpydoc !! -->

### *property* PythonCodeEventBased.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* PythonCodeEventBased.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* PythonCodeEventBased.Text *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the text in the script tab for the Python Code object.

<!-- !! processed by numpydoc !! -->

### *property* PythonCodeEventBased.PropertyProvider *: Ansys.ACT.Interfaces.Mechanical.IPropertyProvider | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the propperty provider instance associated with this python code object.

<!-- !! processed by numpydoc !! -->

### *property* PythonCodeEventBased.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPythonCodeAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PythonCodeEventBased.ScriptExecutionScope *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The scope identifier in which the code execution will take place.

<!-- !! processed by numpydoc !! -->

### *property* PythonCodeEventBased.Connected *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets whether the callbacks are currently connected.

<!-- !! processed by numpydoc !! -->

### *property* PythonCodeEventBased.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PythonCodeEventBased.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PythonCodeEventBased.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### PythonCodeEventBased.ReloadProperties()

Reload properties to update properties provided by the provider.

<!-- !! processed by numpydoc !! -->

### PythonCodeEventBased.Connect()

Register the python code.

<!-- !! processed by numpydoc !! -->

### PythonCodeEventBased.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PythonCodeEventBased.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PythonCodeEventBased.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PythonCodeEventBased.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PythonCodeEventBased.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PythonCodeEventBased.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PythonCodeEventBased.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PythonCodeEventBased.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### PythonCodeEventBased.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PythonCodeEventBased.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PythonCodeEventBased.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
