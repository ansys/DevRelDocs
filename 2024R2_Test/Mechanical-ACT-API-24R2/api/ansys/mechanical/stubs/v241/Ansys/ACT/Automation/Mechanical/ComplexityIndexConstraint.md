# `ComplexityIndexConstraint`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ComplexityIndexConstraint"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ComplexityIndexConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ComplexityIndexConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ComplexityIndexConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ComplexityIndexConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ComplexityIndexConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ComplexityIndexConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ComplexityIndexConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ComplexityIndexConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ComplexityIndexConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ComplexityIndexConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ComplexityIndexConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ComplexityIndexConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ComplexityIndexConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ComplexityIndexConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ComplexityIndexConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ComplexityIndexConstraint.Children)                               | Gets the list of children.                                    |
| [`DataModelObjectCategory`](#ComplexityIndexConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`InternalObject`](#ComplexityIndexConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ComplexityIndexConstraint.Properties)                           | Gets the list of properties for this object.                  |
| [`Selection`](#ComplexityIndexConstraint.Selection)                             | Gets or sets the Selection.                                   |
| [`Suppressed`](#ComplexityIndexConstraint.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ComplexityIndexConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ComplexityIndexConstraint.Children"></a>

### *property* ComplexityIndexConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.DataModelObjectCategory"></a>

### *property* ComplexityIndexConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.InternalObject"></a>

### *property* ComplexityIndexConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.Properties"></a>

### *property* ComplexityIndexConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.Selection"></a>

### *property* ComplexityIndexConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegion.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.Suppressed"></a>

### *property* ComplexityIndexConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.VisibleProperties"></a>

### *property* ComplexityIndexConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ComplexityIndexConstraint.Activate"></a>

### ComplexityIndexConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.CopyTo"></a>

### ComplexityIndexConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.CreateParameter"></a>

### ComplexityIndexConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.Delete"></a>

### ComplexityIndexConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.Duplicate"></a>

### ComplexityIndexConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GetChildren"></a>

### ComplexityIndexConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GetParameter"></a>

### ComplexityIndexConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GroupAllSimilarChildren"></a>

### ComplexityIndexConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GroupSimilarObjects"></a>

### ComplexityIndexConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.PropertyByAPIName"></a>

### ComplexityIndexConstraint.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.PropertyByName"></a>

### ComplexityIndexConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.RemoveParameter"></a>

### ComplexityIndexConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.RenameBasedOnDefinition"></a>

### ComplexityIndexConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

