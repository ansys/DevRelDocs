# `GlobalVonMisesStressConstraint`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.GlobalVonMisesStressConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GlobalVonMisesStressConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------|-----------------------------------------------------------------------------------|
| `RenameBasedOnDefinition`   | Run the RenameBasedOnDefinition action.                                           |
| `Delete`                    | Run the Delete action.                                                            |
| `GetChildren`               | Gets the list of children, filtered by type.                                      |
| `GetChildren`               | Gets the list of children, filtered by type.                                      |
| `Activate`                  | Activate the current object.                                                      |
| `CopyTo`                    | Copies all visible properties from this object to another.                        |
| `Duplicate`                 | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`   | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`       | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`            | Get a property by its unique name.                                                |
| `PropertyByAPIName`         | Get a property by its API name.                                                   |
| `CreateParameter`           | Creates a new parameter for a Property.                                           |
| `GetParameter`              | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|------------------------------------------------------------------------------------------|
| `Maximum`                 | Gets or sets the Maximum.                                                                |
| `InternalObject`          | Gets the internal object. For advanced usage only.                                       |
| `ScopingMethod`           | Gets or sets the ScopingMethod.                                                          |
| `StressType`              | Gets or sets the StressType.                                                             |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                                             |
| `EnvironmentSelection`    | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| `Suppressed`              | Gets or sets the Suppressed.                                                             |
| `Children`                | Gets the list of children.                                                               |
| `InternalObject`          | Gets the internal object. For advanced usage only.                                       |
| `Properties`              | Gets the list of properties for this object.                                             |
| `VisibleProperties`       | Gets the list of properties that are visible for this object.                            |

<a id="property-detail"></a>

## Property detail

### *property* GlobalVonMisesStressConstraint.Maximum *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* GlobalVonMisesStressConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GlobalVonMisesStressConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* GlobalVonMisesStressConstraint.StressType *: [Ansys.Mechanical.DataModel.Enums.TopoConstraintStressType](../../../Mechanical/DataModel/Enums/TopoConstraintStressType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TopoConstraintStressType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressType.

<!-- !! processed by numpydoc !! -->

### *property* GlobalVonMisesStressConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* GlobalVonMisesStressConstraint.EnvironmentSelection *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

### *property* GlobalVonMisesStressConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* GlobalVonMisesStressConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* GlobalVonMisesStressConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GlobalVonMisesStressConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* GlobalVonMisesStressConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### GlobalVonMisesStressConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### GlobalVonMisesStressConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### GlobalVonMisesStressConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GlobalVonMisesStressConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GlobalVonMisesStressConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### GlobalVonMisesStressConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### GlobalVonMisesStressConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### GlobalVonMisesStressConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### GlobalVonMisesStressConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### GlobalVonMisesStressConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### GlobalVonMisesStressConstraint.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### GlobalVonMisesStressConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### GlobalVonMisesStressConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### GlobalVonMisesStressConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

