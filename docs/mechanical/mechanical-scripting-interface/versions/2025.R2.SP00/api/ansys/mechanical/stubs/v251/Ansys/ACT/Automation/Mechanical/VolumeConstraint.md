# `VolumeConstraint`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.VolumeConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.VolumeConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VolumeConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#VolumeConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#VolumeConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#VolumeConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#VolumeConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#VolumeConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#VolumeConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#VolumeConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#VolumeConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VolumeConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#VolumeConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#VolumeConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#VolumeConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#VolumeConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Children`](#VolumeConstraint.Children)                               | Gets the list of children.                                                               |
| [`DataModelObjectCategory`](#VolumeConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                             |
| [`DefineBy`](#VolumeConstraint.DefineBy)                               | Gets or sets the DefineBy.                                                               |
| [`EnvironmentSelection`](#VolumeConstraint.EnvironmentSelection)       | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| [`InternalObject`](#VolumeConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                       |
| [`Location`](#VolumeConstraint.Location)                               | Gets or sets the Location.                                                               |
| [`MaximumAbsoluteValue`](#VolumeConstraint.MaximumAbsoluteValue)       | Gets or sets the MaximumAbsoluteValue.                                                   |
| [`MinimumAbsoluteValue`](#VolumeConstraint.MinimumAbsoluteValue)       | Gets or sets the MinimumAbsoluteValue.                                                   |
| [`PercentageToRetain`](#VolumeConstraint.PercentageToRetain)           | Gets or sets the PercentageToRetain.                                                     |
| [`PercentageToRetainMax`](#VolumeConstraint.PercentageToRetainMax)     | Gets or sets the PercentageToRetainMax.                                                  |
| [`PercentageToRetainMin`](#VolumeConstraint.PercentageToRetainMin)     | Gets or sets the PercentageToRetainMin.                                                  |
| [`Properties`](#VolumeConstraint.Properties)                           | Gets the list of properties for this object.                                             |
| [`ScopingMethod`](#VolumeConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                          |
| [`Selection`](#VolumeConstraint.Selection)                             | Gets or sets the Selection.                                                              |
| [`Suppressed`](#VolumeConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                             |
| [`VisibleProperties`](#VolumeConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                            |

<a id="property-detail"></a>

## Property detail

<a id="VolumeConstraint.Children"></a>

### *property* VolumeConstraint.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.DataModelObjectCategory"></a>

### *property* VolumeConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.DefineBy"></a>

### *property* VolumeConstraint.DefineBy *: [Ansys.Mechanical.DataModel.Enums.ResponseConstraintDefineBy](../../../Mechanical/DataModel/Enums/ResponseConstraintDefineBy.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResponseConstraintDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.EnvironmentSelection"></a>

### *property* VolumeConstraint.EnvironmentSelection *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.InternalObject"></a>

### *property* VolumeConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Location"></a>

### *property* VolumeConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.MaximumAbsoluteValue"></a>

### *property* VolumeConstraint.MaximumAbsoluteValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumAbsoluteValue.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.MinimumAbsoluteValue"></a>

### *property* VolumeConstraint.MinimumAbsoluteValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumAbsoluteValue.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.PercentageToRetain"></a>

### *property* VolumeConstraint.PercentageToRetain *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PercentageToRetain.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.PercentageToRetainMax"></a>

### *property* VolumeConstraint.PercentageToRetainMax *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PercentageToRetainMax.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.PercentageToRetainMin"></a>

### *property* VolumeConstraint.PercentageToRetainMin *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PercentageToRetainMin.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Properties"></a>

### *property* VolumeConstraint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.ScopingMethod"></a>

### *property* VolumeConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Selection"></a>

### *property* VolumeConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Suppressed"></a>

### *property* VolumeConstraint.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.VisibleProperties"></a>

### *property* VolumeConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VolumeConstraint.Activate"></a>

### VolumeConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.CopyTo"></a>

### VolumeConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.CreateParameter"></a>

### VolumeConstraint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Delete"></a>

### VolumeConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.Duplicate"></a>

### VolumeConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GetChildren"></a>

### VolumeConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GetParameter"></a>

### VolumeConstraint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GroupAllSimilarChildren"></a>

### VolumeConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.GroupSimilarObjects"></a>

### VolumeConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.PropertyByAPIName"></a>

### VolumeConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.PropertyByName"></a>

### VolumeConstraint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.RemoveParameter"></a>

### VolumeConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeConstraint.RenameBasedOnDefinition"></a>

### VolumeConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

