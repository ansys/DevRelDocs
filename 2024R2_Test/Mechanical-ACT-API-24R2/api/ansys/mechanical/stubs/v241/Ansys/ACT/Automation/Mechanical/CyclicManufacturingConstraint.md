# `CyclicManufacturingConstraint`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CyclicManufacturingConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CyclicManufacturingConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------|-----------------------------------------------------------------------------------|
| `RenameBasedOnDefinition`   | Run the RenameBasedOnDefinition action.                                           |
| `Delete`                    | Run the Delete action.                                                            |
| `GetChildren`               | Gets the list of children, filtered by type.                                      |
| `GetChildren`               | Gets the list of children, filtered by type.                                      |
| `Activate`                  | Activate the current object.                                                      |
| `CopyTo`                    | Copies all visible properties from this object to another.                        |
| `Duplicate`                 | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`   | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`       | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`            | Get a property by its unique name.                                                |
| `PropertyByAPIName`         | Get a property by its API name.                                                   |
| `CreateParameter`           | Creates a new parameter for a Property.                                           |
| `GetParameter`              | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `NumberofSectors`         | Gets or sets the NumberofSectors.                             |
| `Axis`                    | Gets or sets the Axis.                                        |
| `ScopingMethod`           | Gets or sets the ScopingMethod.                               |
| `CoordinateSystem`        | Gets or sets the CoordinateSystem.                            |
| `Location`                | Gets or sets the Location.                                    |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Suppressed`              | Gets or sets the Suppressed.                                  |
| `Selection`               | Gets or sets the Selection.                                   |
| `Children`                | Gets the list of children.                                    |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* CyclicManufacturingConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CyclicManufacturingConstraint.NumberofSectors *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberofSectors.

<!-- !! processed by numpydoc !! -->

### *property* CyclicManufacturingConstraint.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

### *property* CyclicManufacturingConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* CyclicManufacturingConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* CyclicManufacturingConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* CyclicManufacturingConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* CyclicManufacturingConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* CyclicManufacturingConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

### *property* CyclicManufacturingConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CyclicManufacturingConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CyclicManufacturingConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* CyclicManufacturingConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### CyclicManufacturingConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### CyclicManufacturingConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### CyclicManufacturingConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CyclicManufacturingConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CyclicManufacturingConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### CyclicManufacturingConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### CyclicManufacturingConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### CyclicManufacturingConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### CyclicManufacturingConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### CyclicManufacturingConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### CyclicManufacturingConstraint.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### CyclicManufacturingConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### CyclicManufacturingConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### CyclicManufacturingConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

