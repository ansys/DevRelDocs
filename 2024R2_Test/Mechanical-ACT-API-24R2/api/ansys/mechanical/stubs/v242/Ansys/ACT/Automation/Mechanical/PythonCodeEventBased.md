# `PythonCodeEventBased`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.PythonCodeEventBased"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.PythonCodeEventBased

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PythonCodeEventBased.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PythonCodeEventBased.Activate)                               | Activate the current object.                                                      |
| [`Connect`](#PythonCodeEventBased.Connect)                                 | Register the python code.                                                         |
| [`CopyTo`](#PythonCodeEventBased.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PythonCodeEventBased.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PythonCodeEventBased.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PythonCodeEventBased.Duplicate)                             | Duplicate method.                                                                 |
| [`GetParameter`](#PythonCodeEventBased.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PythonCodeEventBased.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PythonCodeEventBased.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PythonCodeEventBased.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PythonCodeEventBased.PropertyByName)                   | Get a property by its unique name.                                                |
| [`ReloadProperties`](#PythonCodeEventBased.ReloadProperties)               | Reload properties to update properties provided by the provider.                  |
| [`RemoveParameter`](#PythonCodeEventBased.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`AllowRecursion`](#PythonCodeEventBased.AllowRecursion)                                                                                              | Gets or Sets whether the PythonCode allows recursion.                                 |
| [`Connected`](#PythonCodeEventBased.Connected)                             | Gets whether the callbacks are currently connected.                                   |
| [`DataModelObjectCategory`](#PythonCodeEventBased.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                          |
| [`InternalObject`](#PythonCodeEventBased.InternalObject)                   | Gets the internal object. For advanced usage only.                                    |
| [`InvalidateSolution`](#PythonCodeEventBased.InvalidateSolution)                                                                                      | Gets or sets the InvalidateSolution.                                                  |
| [`Properties`](#PythonCodeEventBased.Properties)                           | Gets the list of properties for this object.                                          |
| [`PropertyProvider`](#PythonCodeEventBased.PropertyProvider)               | Gets or sets the propperty provider instance associated with this python code object. |
| [`ScriptExecutionScope`](#PythonCodeEventBased.ScriptExecutionScope)       | The scope identifier in which the code execution will take place.                     |
| [`SolverTarget`](#PythonCodeEventBased.SolverTarget)                       | Gets the SolverTarget.                                                                |
| [`Suppressed`](#PythonCodeEventBased.Suppressed)                           | Gets or sets the Suppressed.                                                          |
| [`TargetCallback`](#PythonCodeEventBased.TargetCallback)                   | Gets or sets the TargetCallback.                                                      |
| [`Text`](#PythonCodeEventBased.Text)                                       | Gets or sets the text in the script tab for the Python Code object.                   |
| [`VisibleProperties`](#PythonCodeEventBased.VisibleProperties)             | Gets the list of properties that are visible for this object.                         |

<a id="property-detail"></a>

## Property detail

<a id="PythonCodeEventBased.AllowRecursion"></a>

### *property* PythonCodeEventBased.AllowRecursion *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets whether the PythonCode allows recursion.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Connected"></a>

### *property* PythonCodeEventBased.Connected *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets whether the callbacks are currently connected.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.DataModelObjectCategory"></a>

### *property* PythonCodeEventBased.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.InternalObject"></a>

### *property* PythonCodeEventBased.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPythonCodeEventBasedAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.InvalidateSolution"></a>

### *property* PythonCodeEventBased.InvalidateSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InvalidateSolution.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Properties"></a>

### *property* PythonCodeEventBased.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.PropertyProvider"></a>

### *property* PythonCodeEventBased.PropertyProvider *: Ansys.ACT.Interfaces.Mechanical.IPropertyProvider | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the propperty provider instance associated with this python code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.ScriptExecutionScope"></a>

### *property* PythonCodeEventBased.ScriptExecutionScope *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The scope identifier in which the code execution will take place.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.SolverTarget"></a>

### *property* PythonCodeEventBased.SolverTarget *: [Ansys.Mechanical.DataModel.Enums.CommandEditorTarget](../../../Mechanical/DataModel/Enums/CommandEditorTarget.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.CommandEditorTarget) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverTarget.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Suppressed"></a>

### *property* PythonCodeEventBased.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.TargetCallback"></a>

### *property* PythonCodeEventBased.TargetCallback *: [Ansys.Mechanical.DataModel.Enums.PythonCodeTargetCallback](../../../Mechanical/DataModel/Enums/PythonCodeTargetCallback.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.PythonCodeTargetCallback) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetCallback.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Text"></a>

### *property* PythonCodeEventBased.Text *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the text in the script tab for the Python Code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.VisibleProperties"></a>

### *property* PythonCodeEventBased.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PythonCodeEventBased.Activate"></a>

### PythonCodeEventBased.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Connect"></a>

### PythonCodeEventBased.Connect()

Register the python code.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.CopyTo"></a>

### PythonCodeEventBased.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.CreateParameter"></a>

### PythonCodeEventBased.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Delete"></a>

### PythonCodeEventBased.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Duplicate"></a>

### PythonCodeEventBased.Duplicate()

Duplicate method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetParameter"></a>

### PythonCodeEventBased.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GroupAllSimilarChildren"></a>

### PythonCodeEventBased.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GroupSimilarObjects"></a>

### PythonCodeEventBased.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.PropertyByAPIName"></a>

### PythonCodeEventBased.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.PropertyByName"></a>

### PythonCodeEventBased.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.ReloadProperties"></a>

### PythonCodeEventBased.ReloadProperties()

Reload properties to update properties provided by the provider.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.RemoveParameter"></a>

### PythonCodeEventBased.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

