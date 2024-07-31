# `PythonCode`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.PythonCode

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PythonCode.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ReloadProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.ReloadProperties)               | Reload properties to update properties provided by the provider.                  |
| [`Connect`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.Connect)                                 | Register the python code.                                                         |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.Delete)                                   | Run the Delete action.                                                            |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`Text`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.Text)                                       | Gets or sets the text in the script tab for the Python Code object.                   |
| [`PropertyProvider`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.PropertyProvider)               | Gets or sets the propperty provider instance associated with this python code object. |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#id0)                                         | Gets the internal object. For advanced usage only.                                    |
| [`ScriptExecutionScope`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.ScriptExecutionScope)       | The scope identifier in which the code execution will take place.                     |
| [`Connected`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.Connected)                             | Gets whether the callbacks are currently connected.                                   |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                          |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#id0)                                         | Gets the internal object. For advanced usage only.                                    |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.Properties)                           | Gets the list of properties for this object.                                          |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PythonCode.md#PythonCode.VisibleProperties)             | Gets the list of properties that are visible for this object.                         |

<a id="property-detail"></a>

## Property detail

<a id="PythonCode.Text"></a>

### *property* PythonCode.Text *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the text in the script tab for the Python Code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.PropertyProvider"></a>

### *property* PythonCode.PropertyProvider *: Ansys.ACT.Interfaces.Mechanical.IPropertyProvider | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the propperty provider instance associated with this python code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.InternalObject"></a>

### *property* PythonCode.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPythonCodeAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.ScriptExecutionScope"></a>

### *property* PythonCode.ScriptExecutionScope *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The scope identifier in which the code execution will take place.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Connected"></a>

### *property* PythonCode.Connected *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets whether the callbacks are currently connected.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.DataModelObjectCategory"></a>

### *property* PythonCode.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PythonCode.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Properties"></a>

### *property* PythonCode.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.VisibleProperties"></a>

### *property* PythonCode.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PythonCode.ReloadProperties"></a>

### PythonCode.ReloadProperties()

Reload properties to update properties provided by the provider.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Connect"></a>

### PythonCode.Connect()

Register the python code.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Delete"></a>

### PythonCode.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Activate"></a>

### PythonCode.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.CopyTo"></a>

### PythonCode.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Duplicate"></a>

### PythonCode.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GroupAllSimilarChildren"></a>

### PythonCode.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GroupSimilarObjects"></a>

### PythonCode.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.PropertyByName"></a>

### PythonCode.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.PropertyByAPIName"></a>

### PythonCode.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.CreateParameter"></a>

### PythonCode.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GetParameter"></a>

### PythonCode.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.RemoveParameter"></a>

### PythonCode.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

