# `CyclicManufacturingConstraint`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CyclicManufacturingConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CyclicManufacturingConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CyclicManufacturingConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CyclicManufacturingConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#CyclicManufacturingConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CyclicManufacturingConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CyclicManufacturingConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CyclicManufacturingConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#CyclicManufacturingConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CyclicManufacturingConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CyclicManufacturingConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CyclicManufacturingConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#CyclicManufacturingConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CyclicManufacturingConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CyclicManufacturingConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#CyclicManufacturingConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Axis`](#CyclicManufacturingConstraint.Axis)                                       | Gets or sets the Axis.                                        |
| [`Children`](#CyclicManufacturingConstraint.Children)                               | Gets the list of children.                                    |
| [`CoordinateSystem`](#CyclicManufacturingConstraint.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#CyclicManufacturingConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`InternalObject`](#CyclicManufacturingConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#CyclicManufacturingConstraint.Location)                               | Gets or sets the Location.                                    |
| [`NumberofSectors`](#CyclicManufacturingConstraint.NumberofSectors)                 | Gets or sets the NumberofSectors.                             |
| [`Properties`](#CyclicManufacturingConstraint.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#CyclicManufacturingConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Selection`](#CyclicManufacturingConstraint.Selection)                             | Gets or sets the Selection.                                   |
| [`Suppressed`](#CyclicManufacturingConstraint.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#CyclicManufacturingConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CyclicManufacturingConstraint.Axis"></a>

### *property* CyclicManufacturingConstraint.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Children"></a>

### *property* CyclicManufacturingConstraint.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.CoordinateSystem"></a>

### *property* CyclicManufacturingConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.DataModelObjectCategory"></a>

### *property* CyclicManufacturingConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.InternalObject"></a>

### *property* CyclicManufacturingConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Location"></a>

### *property* CyclicManufacturingConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.NumberofSectors"></a>

### *property* CyclicManufacturingConstraint.NumberofSectors *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberofSectors.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Properties"></a>

### *property* CyclicManufacturingConstraint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.ScopingMethod"></a>

### *property* CyclicManufacturingConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Selection"></a>

### *property* CyclicManufacturingConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Suppressed"></a>

### *property* CyclicManufacturingConstraint.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.VisibleProperties"></a>

### *property* CyclicManufacturingConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CyclicManufacturingConstraint.Activate"></a>

### CyclicManufacturingConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.CopyTo"></a>

### CyclicManufacturingConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.CreateParameter"></a>

### CyclicManufacturingConstraint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Delete"></a>

### CyclicManufacturingConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Duplicate"></a>

### CyclicManufacturingConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GetChildren"></a>

### CyclicManufacturingConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GetParameter"></a>

### CyclicManufacturingConstraint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GroupAllSimilarChildren"></a>

### CyclicManufacturingConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GroupSimilarObjects"></a>

### CyclicManufacturingConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.PropertyByAPIName"></a>

### CyclicManufacturingConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.PropertyByName"></a>

### CyclicManufacturingConstraint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.RemoveParameter"></a>

### CyclicManufacturingConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.RenameBasedOnDefinition"></a>

### CyclicManufacturingConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

