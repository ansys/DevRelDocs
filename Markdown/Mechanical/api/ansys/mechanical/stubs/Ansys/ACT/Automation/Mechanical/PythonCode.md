# PythonCode

### *class* PythonCode

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PythonCode.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ReloadProperties`](#PythonCode.ReloadProperties)               | Reload properties to update properties provided by the provider.                  |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Connect`](MeshControls/Connect.md#Connect)                     | Register the python code.                                                         |
| [`Delete`](#PythonCode.Delete)                                   | Run the Delete action.                                                            |
| [`Activate`](#PythonCode.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PythonCode.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PythonCode.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PythonCode.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PythonCode.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PythonCode.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PythonCode.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#PythonCode.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PythonCode.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PythonCode.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Text`](#PythonCode.Text)                                                                                          | Gets or sets the text in the script tab for the Python Code object.                   |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`PropertyProvider`](#PythonCode.PropertyProvider)                                                                  | Gets or sets the propperty provider instance associated with this python code object. |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                    |
| [`ScriptExecutionScope`](#PythonCode.ScriptExecutionScope)                                                          | The scope identifier in which the code execution will take place.                     |
| [`Connected`](#PythonCode.Connected)                                                                                | Gets whether the callbacks are currently connected.                                   |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                          |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                    |
| [`Properties`](#PythonCode.Properties)                                                                              | Gets the list of properties for this object.                                          |
| [`VisibleProperties`](#PythonCode.VisibleProperties)                                                                | Gets the list of properties that are visible for this object.                         |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import PythonCode
```

## Property detail

### *property* PythonCode.Text *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the text in the script tab for the Python Code object.

<!-- !! processed by numpydoc !! -->

### *property* PythonCode.PropertyProvider *: Ansys.ACT.Interfaces.Mechanical.IPropertyProvider | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the propperty provider instance associated with this python code object.

<!-- !! processed by numpydoc !! -->

### *property* PythonCode.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPythonCodeAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PythonCode.ScriptExecutionScope *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The scope identifier in which the code execution will take place.

<!-- !! processed by numpydoc !! -->

### *property* PythonCode.Connected *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets whether the callbacks are currently connected.

<!-- !! processed by numpydoc !! -->

### *property* PythonCode.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* PythonCode.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PythonCode.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PythonCode.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### PythonCode.ReloadProperties()

Reload properties to update properties provided by the provider.

<!-- !! processed by numpydoc !! -->

### PythonCode.Connect()

Register the python code.

<!-- !! processed by numpydoc !! -->

### PythonCode.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PythonCode.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PythonCode.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PythonCode.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PythonCode.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PythonCode.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PythonCode.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PythonCode.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### PythonCode.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PythonCode.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PythonCode.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
