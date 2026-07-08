# `PullOutDirectionManufacturingConstraint`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.PullOutDirectionManufacturingConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PullOutDirectionManufacturingConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PullOutDirectionManufacturingConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PullOutDirectionManufacturingConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PullOutDirectionManufacturingConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PullOutDirectionManufacturingConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PullOutDirectionManufacturingConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PullOutDirectionManufacturingConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#PullOutDirectionManufacturingConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PullOutDirectionManufacturingConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PullOutDirectionManufacturingConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PullOutDirectionManufacturingConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PullOutDirectionManufacturingConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PullOutDirectionManufacturingConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PullOutDirectionManufacturingConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#PullOutDirectionManufacturingConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Axis`](#PullOutDirectionManufacturingConstraint.Axis)                                       | Gets or sets the Axis.                                        |
| [`Children`](#PullOutDirectionManufacturingConstraint.Children)                               | Gets the list of children.                                    |
| [`CoordinateSystem`](#PullOutDirectionManufacturingConstraint.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#PullOutDirectionManufacturingConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Direction`](#PullOutDirectionManufacturingConstraint.Direction)                             | Gets or sets the Direction.                                   |
| [`InternalObject`](#PullOutDirectionManufacturingConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#PullOutDirectionManufacturingConstraint.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#PullOutDirectionManufacturingConstraint.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#PullOutDirectionManufacturingConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Selection`](#PullOutDirectionManufacturingConstraint.Selection)                             | Gets or sets the Selection.                                   |
| [`Subtype`](#PullOutDirectionManufacturingConstraint.Subtype)                                 | Gets or sets the Subtype.                                     |
| [`Suppressed`](#PullOutDirectionManufacturingConstraint.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#PullOutDirectionManufacturingConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PullOutDirectionManufacturingConstraint.Axis"></a>

### *property* PullOutDirectionManufacturingConstraint.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Children"></a>

### *property* PullOutDirectionManufacturingConstraint.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.CoordinateSystem"></a>

### *property* PullOutDirectionManufacturingConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.DataModelObjectCategory"></a>

### *property* PullOutDirectionManufacturingConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Direction"></a>

### *property* PullOutDirectionManufacturingConstraint.Direction *: [Ansys.Mechanical.DataModel.Enums.PullOutDirectionType](../../../Mechanical/DataModel/Enums/PullOutDirectionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.PullOutDirectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.InternalObject"></a>

### *property* PullOutDirectionManufacturingConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Location"></a>

### *property* PullOutDirectionManufacturingConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Properties"></a>

### *property* PullOutDirectionManufacturingConstraint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.ScopingMethod"></a>

### *property* PullOutDirectionManufacturingConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Selection"></a>

### *property* PullOutDirectionManufacturingConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Subtype"></a>

### *property* PullOutDirectionManufacturingConstraint.Subtype *: [Ansys.Mechanical.DataModel.Enums.PullOutConstraintSubtype](../../../Mechanical/DataModel/Enums/PullOutConstraintSubtype.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.PullOutConstraintSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Suppressed"></a>

### *property* PullOutDirectionManufacturingConstraint.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.VisibleProperties"></a>

### *property* PullOutDirectionManufacturingConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PullOutDirectionManufacturingConstraint.Activate"></a>

### PullOutDirectionManufacturingConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.CopyTo"></a>

### PullOutDirectionManufacturingConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.CreateParameter"></a>

### PullOutDirectionManufacturingConstraint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Delete"></a>

### PullOutDirectionManufacturingConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Duplicate"></a>

### PullOutDirectionManufacturingConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetChildren"></a>

### PullOutDirectionManufacturingConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetParameter"></a>

### PullOutDirectionManufacturingConstraint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GroupAllSimilarChildren"></a>

### PullOutDirectionManufacturingConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GroupSimilarObjects"></a>

### PullOutDirectionManufacturingConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.PropertyByAPIName"></a>

### PullOutDirectionManufacturingConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.PropertyByName"></a>

### PullOutDirectionManufacturingConstraint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.RemoveParameter"></a>

### PullOutDirectionManufacturingConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.RenameBasedOnDefinition"></a>

### PullOutDirectionManufacturingConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

