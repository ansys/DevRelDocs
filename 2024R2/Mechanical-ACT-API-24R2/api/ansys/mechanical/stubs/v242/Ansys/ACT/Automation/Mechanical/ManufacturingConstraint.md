# `ManufacturingConstraint`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ManufacturingConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ManufacturingConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ManufacturingConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ManufacturingConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ManufacturingConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ManufacturingConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ManufacturingConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ManufacturingConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ManufacturingConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ManufacturingConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ManufacturingConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ManufacturingConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ManufacturingConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ManufacturingConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ManufacturingConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ManufacturingConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ManufacturingConstraint.Children)                               | Gets the list of children.                                    |
| [`DataModelObjectCategory`](#ManufacturingConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`InternalObject`](#ManufacturingConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ManufacturingConstraint.Properties)                           | Gets the list of properties for this object.                  |
| [`Selection`](#ManufacturingConstraint.Selection)                             | Gets or sets the Selection.                                   |
| [`Suppressed`](#ManufacturingConstraint.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ManufacturingConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ManufacturingConstraint.Children"></a>

### *property* ManufacturingConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ManufacturingConstraint.DataModelObjectCategory"></a>

### *property* ManufacturingConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ManufacturingConstraint.InternalObject"></a>

### *property* ManufacturingConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ManufacturingConstraint.Properties"></a>

### *property* ManufacturingConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ManufacturingConstraint.Selection"></a>

### *property* ManufacturingConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="ManufacturingConstraint.Suppressed"></a>

### *property* ManufacturingConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ManufacturingConstraint.VisibleProperties"></a>

### *property* ManufacturingConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ManufacturingConstraint.Activate"></a>

### ManufacturingConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ManufacturingConstraint.CopyTo"></a>

### ManufacturingConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ManufacturingConstraint.CreateParameter"></a>

### ManufacturingConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ManufacturingConstraint.Delete"></a>

### ManufacturingConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ManufacturingConstraint.Duplicate"></a>

### ManufacturingConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ManufacturingConstraint.GetChildren"></a>

### ManufacturingConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ManufacturingConstraint.GetParameter"></a>

### ManufacturingConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ManufacturingConstraint.GroupAllSimilarChildren"></a>

### ManufacturingConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ManufacturingConstraint.GroupSimilarObjects"></a>

### ManufacturingConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ManufacturingConstraint.PropertyByAPIName"></a>

### ManufacturingConstraint.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ManufacturingConstraint.PropertyByName"></a>

### ManufacturingConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ManufacturingConstraint.RemoveParameter"></a>

### ManufacturingConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ManufacturingConstraint.RenameBasedOnDefinition"></a>

### ManufacturingConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

