# `PatternRepetitionConstraint`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.PatternRepetitionConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PatternRepetitionConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PatternRepetitionConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PatternRepetitionConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PatternRepetitionConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PatternRepetitionConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PatternRepetitionConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PatternRepetitionConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#PatternRepetitionConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PatternRepetitionConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PatternRepetitionConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PatternRepetitionConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PatternRepetitionConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PatternRepetitionConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PatternRepetitionConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#PatternRepetitionConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Axis`](#PatternRepetitionConstraint.Axis)                                       | Gets or sets the Axis.                                        |
| [`Children`](#PatternRepetitionConstraint.Children)                               | Gets the list of children.                                    |
| [`CoordinateSystem`](#PatternRepetitionConstraint.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#PatternRepetitionConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`InternalObject`](#PatternRepetitionConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#PatternRepetitionConstraint.Location)                               | Gets or sets the Location.                                    |
| [`Offset`](#PatternRepetitionConstraint.Offset)                                   | Gets or sets the Offset.                                      |
| [`Properties`](#PatternRepetitionConstraint.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#PatternRepetitionConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Selection`](#PatternRepetitionConstraint.Selection)                             | Gets or sets the Selection.                                   |
| [`Suppressed`](#PatternRepetitionConstraint.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#PatternRepetitionConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PatternRepetitionConstraint.Axis"></a>

### *property* PatternRepetitionConstraint.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Children"></a>

### *property* PatternRepetitionConstraint.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.CoordinateSystem"></a>

### *property* PatternRepetitionConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.DataModelObjectCategory"></a>

### *property* PatternRepetitionConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.InternalObject"></a>

### *property* PatternRepetitionConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Location"></a>

### *property* PatternRepetitionConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Offset"></a>

### *property* PatternRepetitionConstraint.Offset *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Offset.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Properties"></a>

### *property* PatternRepetitionConstraint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.ScopingMethod"></a>

### *property* PatternRepetitionConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Selection"></a>

### *property* PatternRepetitionConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Suppressed"></a>

### *property* PatternRepetitionConstraint.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.VisibleProperties"></a>

### *property* PatternRepetitionConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PatternRepetitionConstraint.Activate"></a>

### PatternRepetitionConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.CopyTo"></a>

### PatternRepetitionConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.CreateParameter"></a>

### PatternRepetitionConstraint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Delete"></a>

### PatternRepetitionConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Duplicate"></a>

### PatternRepetitionConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetChildren"></a>

### PatternRepetitionConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetParameter"></a>

### PatternRepetitionConstraint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GroupAllSimilarChildren"></a>

### PatternRepetitionConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GroupSimilarObjects"></a>

### PatternRepetitionConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.PropertyByAPIName"></a>

### PatternRepetitionConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.PropertyByName"></a>

### PatternRepetitionConstraint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.RemoveParameter"></a>

### PatternRepetitionConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.RenameBasedOnDefinition"></a>

### PatternRepetitionConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

