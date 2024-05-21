# GlobalVonMisesStressConstraint

<a id="GlobalVonMisesStressConstraint"></a>

### *class* GlobalVonMisesStressConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a GlobalVonMisesStressConstraint.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#GlobalVonMisesStressConstraint.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#GlobalVonMisesStressConstraint.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`Activate`](#GlobalVonMisesStressConstraint.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#GlobalVonMisesStressConstraint.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#GlobalVonMisesStressConstraint.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#GlobalVonMisesStressConstraint.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GlobalVonMisesStressConstraint.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#GlobalVonMisesStressConstraint.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#GlobalVonMisesStressConstraint.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#GlobalVonMisesStressConstraint.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#GlobalVonMisesStressConstraint.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#GlobalVonMisesStressConstraint.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Maximum`](#GlobalVonMisesStressConstraint.Maximum)                                                                | Gets or sets the Maximum.                                                                |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                       |
| [`ScopingMethod`](#GlobalVonMisesStressConstraint.ScopingMethod)                                                    | Gets or sets the ScopingMethod.                                                          |
| [`StressType`](#GlobalVonMisesStressConstraint.StressType)                                                          | Gets or sets the StressType.                                                             |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                             |
| [`EnvironmentSelection`](#GlobalVonMisesStressConstraint.EnvironmentSelection)                                      | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| [`Suppressed`](#GlobalVonMisesStressConstraint.Suppressed)                                                          | Gets or sets the Suppressed.                                                             |
| [`Children`](#GlobalVonMisesStressConstraint.Children)                                                              | Gets the list of children.                                                               |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                       |
| [`Properties`](#GlobalVonMisesStressConstraint.Properties)                                                          | Gets the list of properties for this object.                                             |
| [`VisibleProperties`](#GlobalVonMisesStressConstraint.VisibleProperties)                                            | Gets the list of properties that are visible for this object.                            |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import GlobalVonMisesStressConstraint
```

<a id="property-detail"></a>

## Property detail

<a id="GlobalVonMisesStressConstraint.Maximum"></a>

### *property* GlobalVonMisesStressConstraint.Maximum *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.InternalObject"></a>

### *property* GlobalVonMisesStressConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.ScopingMethod"></a>

### *property* GlobalVonMisesStressConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.StressType"></a>

### *property* GlobalVonMisesStressConstraint.StressType *: [Ansys.Mechanical.DataModel.Enums.TopoConstraintStressType](../../../Mechanical/DataModel/Enums/TopoConstraintStressType.md#TopoConstraintStressType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressType.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.DataModelObjectCategory"></a>

### *property* GlobalVonMisesStressConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.EnvironmentSelection"></a>

### *property* GlobalVonMisesStressConstraint.EnvironmentSelection *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.Suppressed"></a>

### *property* GlobalVonMisesStressConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.Children"></a>

### *property* GlobalVonMisesStressConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* GlobalVonMisesStressConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.Properties"></a>

### *property* GlobalVonMisesStressConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.VisibleProperties"></a>

### *property* GlobalVonMisesStressConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GlobalVonMisesStressConstraint.RenameBasedOnDefinition"></a>

### GlobalVonMisesStressConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.Delete"></a>

### GlobalVonMisesStressConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GetChildren"></a>

### GlobalVonMisesStressConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### GlobalVonMisesStressConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.Activate"></a>

### GlobalVonMisesStressConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.CopyTo"></a>

### GlobalVonMisesStressConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.Duplicate"></a>

### GlobalVonMisesStressConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GroupAllSimilarChildren"></a>

### GlobalVonMisesStressConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GroupSimilarObjects"></a>

### GlobalVonMisesStressConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.PropertyByName"></a>

### GlobalVonMisesStressConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.PropertyByAPIName"></a>

### GlobalVonMisesStressConstraint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.CreateParameter"></a>

### GlobalVonMisesStressConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GetParameter"></a>

### GlobalVonMisesStressConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.RemoveParameter"></a>

### GlobalVonMisesStressConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
