# `CenterOfGravityConstraint`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CenterOfGravityConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CenterOfGravityConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CenterOfGravityConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CenterOfGravityConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#CenterOfGravityConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CenterOfGravityConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CenterOfGravityConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CenterOfGravityConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#CenterOfGravityConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CenterOfGravityConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CenterOfGravityConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CenterOfGravityConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#CenterOfGravityConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CenterOfGravityConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CenterOfGravityConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#CenterOfGravityConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Axis`](#CenterOfGravityConstraint.Axis)                                       | Gets or sets the Axis.                                                                   |
| [`Children`](#CenterOfGravityConstraint.Children)                               | Gets the list of children.                                                               |
| [`DataModelObjectCategory`](#CenterOfGravityConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                             |
| [`EnvironmentSelection`](#CenterOfGravityConstraint.EnvironmentSelection)       | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| [`InternalObject`](#CenterOfGravityConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                       |
| [`Location`](#CenterOfGravityConstraint.Location)                               | Gets or sets the Location.                                                               |
| [`MaximumPosition`](#CenterOfGravityConstraint.MaximumPosition)                 | Gets or sets the MaximumPosition.                                                        |
| [`MinimumPosition`](#CenterOfGravityConstraint.MinimumPosition)                 | Gets or sets the MinimumPosition.                                                        |
| [`Properties`](#CenterOfGravityConstraint.Properties)                           | Gets the list of properties for this object.                                             |
| [`ScopingMethod`](#CenterOfGravityConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                          |
| [`Selection`](#CenterOfGravityConstraint.Selection)                             | Gets or sets the Selection.                                                              |
| [`Suppressed`](#CenterOfGravityConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                             |
| [`VisibleProperties`](#CenterOfGravityConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                            |

<a id="property-detail"></a>

## Property detail

<a id="CenterOfGravityConstraint.Axis"></a>

### *property* CenterOfGravityConstraint.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.Children"></a>

### *property* CenterOfGravityConstraint.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.DataModelObjectCategory"></a>

### *property* CenterOfGravityConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.EnvironmentSelection"></a>

### *property* CenterOfGravityConstraint.EnvironmentSelection *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.InternalObject"></a>

### *property* CenterOfGravityConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.Location"></a>

### *property* CenterOfGravityConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.MaximumPosition"></a>

### *property* CenterOfGravityConstraint.MaximumPosition *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumPosition.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.MinimumPosition"></a>

### *property* CenterOfGravityConstraint.MinimumPosition *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumPosition.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.Properties"></a>

### *property* CenterOfGravityConstraint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.ScopingMethod"></a>

### *property* CenterOfGravityConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.Selection"></a>

### *property* CenterOfGravityConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.Suppressed"></a>

### *property* CenterOfGravityConstraint.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.VisibleProperties"></a>

### *property* CenterOfGravityConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CenterOfGravityConstraint.Activate"></a>

### CenterOfGravityConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.CopyTo"></a>

### CenterOfGravityConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.CreateParameter"></a>

### CenterOfGravityConstraint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.Delete"></a>

### CenterOfGravityConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.Duplicate"></a>

### CenterOfGravityConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.GetChildren"></a>

### CenterOfGravityConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.GetParameter"></a>

### CenterOfGravityConstraint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.GroupAllSimilarChildren"></a>

### CenterOfGravityConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.GroupSimilarObjects"></a>

### CenterOfGravityConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.PropertyByAPIName"></a>

### CenterOfGravityConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.PropertyByName"></a>

### CenterOfGravityConstraint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.RemoveParameter"></a>

### CenterOfGravityConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.RenameBasedOnDefinition"></a>

### CenterOfGravityConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

