# `AMOverhangConstraint`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AMOverhangConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AMOverhangConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AMOverhangConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AMOverhangConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AMOverhangConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AMOverhangConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#AMOverhangConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AMOverhangConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#AMOverhangConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AMOverhangConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AMOverhangConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AMOverhangConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#AMOverhangConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AMOverhangConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AMOverhangConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#AMOverhangConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [`BuildDirection`](#AMOverhangConstraint.BuildDirection)                   | Gets or sets the axis used for the build direction. Only axis enums will be accepted.   |
| [`Children`](#AMOverhangConstraint.Children)                               | Gets the list of children.                                                              |
| [`CoordinateSystem`](#AMOverhangConstraint.CoordinateSystem)               | Gets or sets the CoordinateSystem.                                                      |
| [`DataModelObjectCategory`](#AMOverhangConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                            |
| [`InternalObject`](#AMOverhangConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                      |
| [`OverhangAngle`](#AMOverhangConstraint.OverhangAngle)                     | Gets or sets the OverhangAngle.                                                         |
| [`Properties`](#AMOverhangConstraint.Properties)                           | Gets the list of properties for this object.                                            |
| [`ScopingMethod`](#AMOverhangConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                         |
| [`Selection`](#AMOverhangConstraint.Selection)                             | Gets or sets the Selection.                                                             |
| [`Suppressed`](#AMOverhangConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                            |
| [`VisibleProperties`](#AMOverhangConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                           |

<a id="property-detail"></a>

## Property detail

<a id="AMOverhangConstraint.BuildDirection"></a>

### *property* AMOverhangConstraint.BuildDirection *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the axis used for the build direction. Only axis enums will be accepted.
: InvalidArgumentException: “Origin” enum value.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.Children"></a>

### *property* AMOverhangConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.CoordinateSystem"></a>

### *property* AMOverhangConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.DataModelObjectCategory"></a>

### *property* AMOverhangConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.InternalObject"></a>

### *property* AMOverhangConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.OverhangAngle"></a>

### *property* AMOverhangConstraint.OverhangAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OverhangAngle.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.Properties"></a>

### *property* AMOverhangConstraint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.ScopingMethod"></a>

### *property* AMOverhangConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.Selection"></a>

### *property* AMOverhangConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.Suppressed"></a>

### *property* AMOverhangConstraint.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.VisibleProperties"></a>

### *property* AMOverhangConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMOverhangConstraint.Activate"></a>

### AMOverhangConstraint.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.CopyTo"></a>

### AMOverhangConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.CreateParameter"></a>

### AMOverhangConstraint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.Delete"></a>

### AMOverhangConstraint.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.Duplicate"></a>

### AMOverhangConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GetChildren"></a>

### AMOverhangConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GetParameter"></a>

### AMOverhangConstraint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GroupAllSimilarChildren"></a>

### AMOverhangConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GroupSimilarObjects"></a>

### AMOverhangConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.PropertyByAPIName"></a>

### AMOverhangConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.PropertyByName"></a>

### AMOverhangConstraint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.RemoveParameter"></a>

### AMOverhangConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.RenameBasedOnDefinition"></a>

### AMOverhangConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

