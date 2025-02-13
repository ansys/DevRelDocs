# `LocalVonMisesStressConstraint`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.LocalVonMisesStressConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.LocalVonMisesStressConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a LocalVonMisesStressConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#LocalVonMisesStressConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#LocalVonMisesStressConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#LocalVonMisesStressConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#LocalVonMisesStressConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#LocalVonMisesStressConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#LocalVonMisesStressConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#LocalVonMisesStressConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#LocalVonMisesStressConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LocalVonMisesStressConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#LocalVonMisesStressConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#LocalVonMisesStressConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#LocalVonMisesStressConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#LocalVonMisesStressConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Children`](#LocalVonMisesStressConstraint.Children)                               | Gets the list of children.                                                               |
| [`DataModelObjectCategory`](#LocalVonMisesStressConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                             |
| [`EnvironmentSelection`](#LocalVonMisesStressConstraint.EnvironmentSelection)       | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| [`InternalObject`](#LocalVonMisesStressConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                       |
| [`Location`](#LocalVonMisesStressConstraint.Location)                               | Gets or sets the Location.                                                               |
| [`Maximum`](#LocalVonMisesStressConstraint.Maximum)                                 | Gets or sets the Maximum.                                                                |
| [`Properties`](#LocalVonMisesStressConstraint.Properties)                           | Gets the list of properties for this object.                                             |
| [`ScopingMethod`](#LocalVonMisesStressConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                          |
| [`Suppressed`](#LocalVonMisesStressConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                             |
| [`VisibleProperties`](#LocalVonMisesStressConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                            |

<a id="property-detail"></a>

## Property detail

<a id="LocalVonMisesStressConstraint.Children"></a>

### *property* LocalVonMisesStressConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.DataModelObjectCategory"></a>

### *property* LocalVonMisesStressConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.EnvironmentSelection"></a>

### *property* LocalVonMisesStressConstraint.EnvironmentSelection *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.InternalObject"></a>

### *property* LocalVonMisesStressConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.Location"></a>

### *property* LocalVonMisesStressConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.Maximum"></a>

### *property* LocalVonMisesStressConstraint.Maximum *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.Properties"></a>

### *property* LocalVonMisesStressConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.ScopingMethod"></a>

### *property* LocalVonMisesStressConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.Suppressed"></a>

### *property* LocalVonMisesStressConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.VisibleProperties"></a>

### *property* LocalVonMisesStressConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LocalVonMisesStressConstraint.Activate"></a>

### LocalVonMisesStressConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.CopyTo"></a>

### LocalVonMisesStressConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.CreateParameter"></a>

### LocalVonMisesStressConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.Delete"></a>

### LocalVonMisesStressConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.Duplicate"></a>

### LocalVonMisesStressConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.GetChildren"></a>

### LocalVonMisesStressConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.GetParameter"></a>

### LocalVonMisesStressConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.GroupAllSimilarChildren"></a>

### LocalVonMisesStressConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.GroupSimilarObjects"></a>

### LocalVonMisesStressConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.PropertyByAPIName"></a>

### LocalVonMisesStressConstraint.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.PropertyByName"></a>

### LocalVonMisesStressConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.RemoveParameter"></a>

### LocalVonMisesStressConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LocalVonMisesStressConstraint.RenameBasedOnDefinition"></a>

### LocalVonMisesStressConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

