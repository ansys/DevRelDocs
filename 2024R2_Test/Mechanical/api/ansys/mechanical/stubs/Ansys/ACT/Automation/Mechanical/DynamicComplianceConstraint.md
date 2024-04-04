# DynamicComplianceConstraint

### *class* DynamicComplianceConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DynamicComplianceConstraint.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`RenameBasedOnDefinition`](#DynamicComplianceConstraint.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#DynamicComplianceConstraint.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`Activate`](#DynamicComplianceConstraint.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#DynamicComplianceConstraint.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DynamicComplianceConstraint.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DynamicComplianceConstraint.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DynamicComplianceConstraint.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DynamicComplianceConstraint.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DynamicComplianceConstraint.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#DynamicComplianceConstraint.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#DynamicComplianceConstraint.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DynamicComplianceConstraint.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                       |
|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`ComplianceLimit`](#DynamicComplianceConstraint.ComplianceLimit)                                                   | Gets or sets the ComplianceLimit.                                                        |
| [`MaximumValue`](#DynamicComplianceConstraint.MaximumValue)                                                         | Gets or sets the MaximumValue.                                                           |
| [`MinimumValue`](#DynamicComplianceConstraint.MinimumValue)                                                         | Gets or sets the MinimumValue.                                                           |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                             |
| [`EnvironmentSelection`](#DynamicComplianceConstraint.EnvironmentSelection)                                         | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| [`Suppressed`](#DynamicComplianceConstraint.Suppressed)                                                             | Gets or sets the Suppressed.                                                             |
| [`Children`](#DynamicComplianceConstraint.Children)                                                                 | Gets the list of children.                                                               |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                       |
| [`Properties`](#DynamicComplianceConstraint.Properties)                                                             | Gets the list of properties for this object.                                             |
| [`VisibleProperties`](#DynamicComplianceConstraint.VisibleProperties)                                               | Gets the list of properties that are visible for this object.                            |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import DynamicComplianceConstraint
```

## Property detail

### *property* DynamicComplianceConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DynamicComplianceConstraint.ComplianceLimit *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ComplianceLimit.

<!-- !! processed by numpydoc !! -->

### *property* DynamicComplianceConstraint.MaximumValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumValue.

<!-- !! processed by numpydoc !! -->

### *property* DynamicComplianceConstraint.MinimumValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumValue.

<!-- !! processed by numpydoc !! -->

### *property* DynamicComplianceConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* DynamicComplianceConstraint.EnvironmentSelection *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

### *property* DynamicComplianceConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* DynamicComplianceConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* DynamicComplianceConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DynamicComplianceConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* DynamicComplianceConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### DynamicComplianceConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### DynamicComplianceConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### DynamicComplianceConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DynamicComplianceConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DynamicComplianceConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### DynamicComplianceConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### DynamicComplianceConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### DynamicComplianceConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### DynamicComplianceConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### DynamicComplianceConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### DynamicComplianceConstraint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### DynamicComplianceConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### DynamicComplianceConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### DynamicComplianceConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
