# `PythonCode`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.PythonCode"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PythonCode

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PythonCode.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PythonCode.Activate)                               | Activate the current object.                                                      |
| [`Connect`](#PythonCode.Connect)                                 | Register the python code.                                                         |
| [`CopyTo`](#PythonCode.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PythonCode.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PythonCode.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PythonCode.Duplicate)                             | Duplicate method.                                                                 |
| [`GetParameter`](#PythonCode.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PythonCode.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PythonCode.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PythonCode.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PythonCode.PropertyByName)                   | Get a property by its unique name.                                                |
| [`ReloadProperties`](#PythonCode.ReloadProperties)               | Reload properties to update properties provided by the provider.                  |
| [`RemoveParameter`](#PythonCode.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`AllowRecursion`](#PythonCode.AllowRecursion)                   | Gets or Sets whether the PythonCode allows recursion.                                 |
| [`Connected`](#PythonCode.Connected)                             | Gets whether the callbacks are currently connected.                                   |
| [`DataModelObjectCategory`](#PythonCode.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                          |
| [`InternalObject`](#PythonCode.InternalObject)                   | Gets the internal object. For advanced usage only.                                    |
| [`Properties`](#PythonCode.Properties)                           | Gets the list of properties for this object.                                          |
| [`PropertyProvider`](#PythonCode.PropertyProvider)               | Gets or sets the propperty provider instance associated with this python code object. |
| [`ScriptExecutionScope`](#PythonCode.ScriptExecutionScope)       | The scope identifier in which the code execution will take place.                     |
| [`Text`](#PythonCode.Text)                                       | Gets or sets the text in the script tab for the Python Code object.                   |
| [`VisibleProperties`](#PythonCode.VisibleProperties)             | Gets the list of properties that are visible for this object.                         |

<a id="property-detail"></a>

## Property detail

<a id="PythonCode.AllowRecursion"></a>

### *property* PythonCode.AllowRecursion *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets whether the PythonCode allows recursion.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Connected"></a>

### *property* PythonCode.Connected *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets whether the callbacks are currently connected.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.DataModelObjectCategory"></a>

### *property* PythonCode.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.InternalObject"></a>

### *property* PythonCode.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPythonCodeAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Properties"></a>

### *property* PythonCode.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.PropertyProvider"></a>

### *property* PythonCode.PropertyProvider *: Ansys.ACT.Interfaces.Mechanical.IPropertyProvider | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the propperty provider instance associated with this python code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.ScriptExecutionScope"></a>

### *property* PythonCode.ScriptExecutionScope *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The scope identifier in which the code execution will take place.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Text"></a>

### *property* PythonCode.Text *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the text in the script tab for the Python Code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.VisibleProperties"></a>

### *property* PythonCode.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PythonCode.Activate"></a>

### PythonCode.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Connect"></a>

### PythonCode.Connect() → [None](https://docs.python.org/3/library/constants.html#None)

Register the python code.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.CopyTo"></a>

### PythonCode.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.CreateParameter"></a>

### PythonCode.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Delete"></a>

### PythonCode.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Duplicate"></a>

### PythonCode.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Duplicate method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GetParameter"></a>

### PythonCode.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GroupAllSimilarChildren"></a>

### PythonCode.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GroupSimilarObjects"></a>

### PythonCode.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.PropertyByAPIName"></a>

### PythonCode.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.PropertyByName"></a>

### PythonCode.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.ReloadProperties"></a>

### PythonCode.ReloadProperties() → [None](https://docs.python.org/3/library/constants.html#None)

Reload properties to update properties provided by the provider.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.RemoveParameter"></a>

### PythonCode.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

