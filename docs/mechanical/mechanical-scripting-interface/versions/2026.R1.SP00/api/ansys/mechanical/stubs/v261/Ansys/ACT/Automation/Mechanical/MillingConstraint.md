# `MillingConstraint`

<a id="ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.MillingConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MillingConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MillingConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MillingConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MillingConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MillingConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MillingConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MillingConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#MillingConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MillingConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MillingConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MillingConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MillingConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MillingConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MillingConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#MillingConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| [`Children`](#MillingConstraint.Children)                               | Gets the list of children.                                                                                                             |
| [`ClampAxis`](#MillingConstraint.ClampAxis)                             | Defines which axis of the coordinate system is the outward perpendicular direction to the milling clamp.                               |
| [`CoordinateSystem`](#MillingConstraint.CoordinateSystem)               | Defines the coordinate system for the milling process. An exception will be thrown if the selected coordinate system is not cartesian. |
| [`DataModelObjectCategory`](#MillingConstraint.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                           |
| [`InternalObject`](#MillingConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                     |
| [`Properties`](#MillingConstraint.Properties)                           | Gets the list of properties for this object.                                                                                           |
| [`Selection`](#MillingConstraint.Selection)                             | Gets or sets the Selection.                                                                                                            |
| [`Suppressed`](#MillingConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                                                                           |
| [`VisibleProperties`](#MillingConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                          |

<a id="property-detail"></a>

## Property detail

<a id="MillingConstraint.Children"></a>

### *property* MillingConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.ClampAxis"></a>

### *property* MillingConstraint.ClampAxis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines which axis of the coordinate system is the outward perpendicular direction to the milling clamp.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.CoordinateSystem"></a>

### *property* MillingConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines the coordinate system for the milling process. An exception will be thrown if the selected coordinate system is not cartesian.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.DataModelObjectCategory"></a>

### *property* MillingConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.InternalObject"></a>

### *property* MillingConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.Properties"></a>

### *property* MillingConstraint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.Selection"></a>

### *property* MillingConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.Suppressed"></a>

### *property* MillingConstraint.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.VisibleProperties"></a>

### *property* MillingConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MillingConstraint.Activate"></a>

### MillingConstraint.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.CopyTo"></a>

### MillingConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.CreateParameter"></a>

### MillingConstraint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.Delete"></a>

### MillingConstraint.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.Duplicate"></a>

### MillingConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.GetChildren"></a>

### MillingConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.GetParameter"></a>

### MillingConstraint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.GroupAllSimilarChildren"></a>

### MillingConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.GroupSimilarObjects"></a>

### MillingConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.PropertyByAPIName"></a>

### MillingConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.PropertyByName"></a>

### MillingConstraint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.RemoveParameter"></a>

### MillingConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MillingConstraint.RenameBasedOnDefinition"></a>

### MillingConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

