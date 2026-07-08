# `PythonCodeEventBased`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.PythonCodeEventBased"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PythonCodeEventBased

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PythonCodeEventBased.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`AllowRecursion`](#PythonCodeEventBased.AllowRecursion)                   | Gets or Sets whether the PythonCode allows recursion.                                 |
| [`Connected`](#PythonCodeEventBased.Connected)                             | Gets whether the callbacks are currently connected.                                   |
| [`DataModelObjectCategory`](#PythonCodeEventBased.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                          |
| [`InternalObject`](#PythonCodeEventBased.InternalObject)                   | Gets the internal object. For advanced usage only.                                    |
| [`InvalidateSolution`](#PythonCodeEventBased.InvalidateSolution)           | Gets or sets the InvalidateSolution.                                                  |
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

### *property* PythonCodeEventBased.AllowRecursion *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets whether the PythonCode allows recursion.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Connected"></a>

### *property* PythonCodeEventBased.Connected *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets whether the callbacks are currently connected.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.DataModelObjectCategory"></a>

### *property* PythonCodeEventBased.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.InternalObject"></a>

### *property* PythonCodeEventBased.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPythonCodeEventBasedAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.InvalidateSolution"></a>

### *property* PythonCodeEventBased.InvalidateSolution *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InvalidateSolution.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Properties"></a>

### *property* PythonCodeEventBased.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.PropertyProvider"></a>

### *property* PythonCodeEventBased.PropertyProvider *: Ansys.ACT.Interfaces.Mechanical.IPropertyProvider | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the propperty provider instance associated with this python code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.ScriptExecutionScope"></a>

### *property* PythonCodeEventBased.ScriptExecutionScope *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The scope identifier in which the code execution will take place.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.SolverTarget"></a>

### *property* PythonCodeEventBased.SolverTarget *: [Ansys.Mechanical.DataModel.Enums.CommandEditorTarget](../../../Mechanical/DataModel/Enums/CommandEditorTarget.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CommandEditorTarget) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverTarget.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Suppressed"></a>

### *property* PythonCodeEventBased.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.TargetCallback"></a>

### *property* PythonCodeEventBased.TargetCallback *: [Ansys.Mechanical.DataModel.Enums.PythonCodeTargetCallback](../../../Mechanical/DataModel/Enums/PythonCodeTargetCallback.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.PythonCodeTargetCallback) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetCallback.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Text"></a>

### *property* PythonCodeEventBased.Text *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the text in the script tab for the Python Code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.VisibleProperties"></a>

### *property* PythonCodeEventBased.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PythonCodeEventBased.Activate"></a>

### PythonCodeEventBased.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Connect"></a>

### PythonCodeEventBased.Connect() → [None](https://docs.python.org/3/library/constants.html#None)

Register the python code.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.CopyTo"></a>

### PythonCodeEventBased.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.CreateParameter"></a>

### PythonCodeEventBased.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Delete"></a>

### PythonCodeEventBased.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Duplicate"></a>

### PythonCodeEventBased.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Duplicate method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetParameter"></a>

### PythonCodeEventBased.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GroupAllSimilarChildren"></a>

### PythonCodeEventBased.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GroupSimilarObjects"></a>

### PythonCodeEventBased.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.PropertyByAPIName"></a>

### PythonCodeEventBased.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.PropertyByName"></a>

### PythonCodeEventBased.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.ReloadProperties"></a>

### PythonCodeEventBased.ReloadProperties() → [None](https://docs.python.org/3/library/constants.html#None)

Reload properties to update properties provided by the provider.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.RemoveParameter"></a>

### PythonCodeEventBased.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

