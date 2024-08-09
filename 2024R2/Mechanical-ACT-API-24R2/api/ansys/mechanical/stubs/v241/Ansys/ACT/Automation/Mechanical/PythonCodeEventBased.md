# `PythonCodeEventBased`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.PythonCodeEventBased

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PythonCodeEventBased.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ReloadProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.ReloadProperties)               | Reload properties to update properties provided by the provider.                  |
| [`Connect`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.Connect)                                 | Register the python code.                                                         |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.Delete)                                   | Run the Delete action.                                                            |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#id1)                                                   | Gets the internal object. For advanced usage only.                                    |
| [`SolverTarget`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.SolverTarget)                       | Gets the SolverTarget.                                                                |
| [`TargetCallback`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.TargetCallback)                   | Gets or sets the TargetCallback.                                                      |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.Suppressed)                           | Gets or sets the Suppressed.                                                          |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.DataModelObjectCategory) | Gets the current DataModelObject's category.                                          |
| [`Text`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.Text)                                       | Gets or sets the text in the script tab for the Python Code object.                   |
| [`PropertyProvider`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.PropertyProvider)               | Gets or sets the propperty provider instance associated with this python code object. |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#id1)                                                   | Gets the internal object. For advanced usage only.                                    |
| [`ScriptExecutionScope`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.ScriptExecutionScope)       | The scope identifier in which the code execution will take place.                     |
| [`Connected`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.Connected)                             | Gets whether the callbacks are currently connected.                                   |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#id1)                                                   | Gets the internal object. For advanced usage only.                                    |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.Properties)                           | Gets the list of properties for this object.                                          |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCodeEventBased.md#PythonCodeEventBased.VisibleProperties)             | Gets the list of properties that are visible for this object.                         |

<a id="property-detail"></a>

## Property detail

<a id="PythonCodeEventBased.InternalObject"></a>

### *property* PythonCodeEventBased.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPythonCodeEventBasedAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.SolverTarget"></a>

### *property* PythonCodeEventBased.SolverTarget *: [Ansys.Mechanical.DataModel.Enums.CommandEditorTarget](../../../Mechanical/DataModel/Enums/CommandEditorTarget.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CommandEditorTarget) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverTarget.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.TargetCallback"></a>

### *property* PythonCodeEventBased.TargetCallback *: [Ansys.Mechanical.DataModel.Enums.PythonCodeTargetCallback](../../../Mechanical/DataModel/Enums/PythonCodeTargetCallback.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PythonCodeTargetCallback) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetCallback.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Suppressed"></a>

### *property* PythonCodeEventBased.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.DataModelObjectCategory"></a>

### *property* PythonCodeEventBased.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Text"></a>

### *property* PythonCodeEventBased.Text *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the text in the script tab for the Python Code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.PropertyProvider"></a>

### *property* PythonCodeEventBased.PropertyProvider *: Ansys.ACT.Interfaces.Mechanical.IPropertyProvider | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the propperty provider instance associated with this python code object.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PythonCodeEventBased.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPythonCodeAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.ScriptExecutionScope"></a>

### *property* PythonCodeEventBased.ScriptExecutionScope *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The scope identifier in which the code execution will take place.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Connected"></a>

### *property* PythonCodeEventBased.Connected *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets whether the callbacks are currently connected.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### *property* PythonCodeEventBased.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Properties"></a>

### *property* PythonCodeEventBased.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.VisibleProperties"></a>

### *property* PythonCodeEventBased.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PythonCodeEventBased.ReloadProperties"></a>

### PythonCodeEventBased.ReloadProperties()

Reload properties to update properties provided by the provider.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Connect"></a>

### PythonCodeEventBased.Connect()

Register the python code.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Delete"></a>

### PythonCodeEventBased.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Activate"></a>

### PythonCodeEventBased.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.CopyTo"></a>

### PythonCodeEventBased.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Duplicate"></a>

### PythonCodeEventBased.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GroupAllSimilarChildren"></a>

### PythonCodeEventBased.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GroupSimilarObjects"></a>

### PythonCodeEventBased.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.PropertyByName"></a>

### PythonCodeEventBased.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.PropertyByAPIName"></a>

### PythonCodeEventBased.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.CreateParameter"></a>

### PythonCodeEventBased.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetParameter"></a>

### PythonCodeEventBased.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.RemoveParameter"></a>

### PythonCodeEventBased.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

