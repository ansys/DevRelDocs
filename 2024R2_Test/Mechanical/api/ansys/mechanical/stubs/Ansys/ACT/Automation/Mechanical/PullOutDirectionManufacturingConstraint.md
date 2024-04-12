<a id="pulloutdirectionmanufacturingconstraint"></a>

# PullOutDirectionManufacturingConstraint

<a id="PullOutDirectionManufacturingConstraint"></a>

### *class* PullOutDirectionManufacturingConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PullOutDirectionManufacturingConstraint.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`RenameBasedOnDefinition`](#PullOutDirectionManufacturingConstraint.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
|-------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#PullOutDirectionManufacturingConstraint.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                           | Gets the list of children, filtered by type.                                      |
| [`Activate`](#PullOutDirectionManufacturingConstraint.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#PullOutDirectionManufacturingConstraint.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PullOutDirectionManufacturingConstraint.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PullOutDirectionManufacturingConstraint.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PullOutDirectionManufacturingConstraint.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PullOutDirectionManufacturingConstraint.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PullOutDirectionManufacturingConstraint.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#PullOutDirectionManufacturingConstraint.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PullOutDirectionManufacturingConstraint.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PullOutDirectionManufacturingConstraint.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Axis`](#PullOutDirectionManufacturingConstraint.Axis)                                                             | Gets or sets the Axis.                                        |
| [`ScopingMethod`](#PullOutDirectionManufacturingConstraint.ScopingMethod)                                           | Gets or sets the ScopingMethod.                               |
| [`Subtype`](#PullOutDirectionManufacturingConstraint.Subtype)                                                       | Gets or sets the Subtype.                                     |
| [`Direction`](#PullOutDirectionManufacturingConstraint.Direction)                                                   | Gets or sets the Direction.                                   |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#PullOutDirectionManufacturingConstraint.Location)                                                     | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#PullOutDirectionManufacturingConstraint.Suppressed)                                                 | Gets or sets the Suppressed.                                  |
| [`Selection`](#PullOutDirectionManufacturingConstraint.Selection)                                                   | Gets or sets the Selection.                                   |
| [`Children`](#PullOutDirectionManufacturingConstraint.Children)                                                     | Gets the list of children.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PullOutDirectionManufacturingConstraint.Properties)                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PullOutDirectionManufacturingConstraint.VisibleProperties)                                   | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import PullOutDirectionManufacturingConstraint
```

<a id="property-detail"></a>

## Property detail

<a id="PullOutDirectionManufacturingConstraint.InternalObject"></a>

### *property* PullOutDirectionManufacturingConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Axis"></a>

### *property* PullOutDirectionManufacturingConstraint.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.ScopingMethod"></a>

### *property* PullOutDirectionManufacturingConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Subtype"></a>

### *property* PullOutDirectionManufacturingConstraint.Subtype *: [Ansys.Mechanical.DataModel.Enums.PullOutConstraintSubtype](../../../Mechanical/DataModel/Enums/PullOutConstraintSubtype.md#PullOutConstraintSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Direction"></a>

### *property* PullOutDirectionManufacturingConstraint.Direction *: [Ansys.Mechanical.DataModel.Enums.PullOutDirectionType](../../../Mechanical/DataModel/Enums/PullOutDirectionType.md#PullOutDirectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.CoordinateSystem"></a>

### *property* PullOutDirectionManufacturingConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Location"></a>

### *property* PullOutDirectionManufacturingConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.DataModelObjectCategory"></a>

### *property* PullOutDirectionManufacturingConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Suppressed"></a>

### *property* PullOutDirectionManufacturingConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Selection"></a>

### *property* PullOutDirectionManufacturingConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Children"></a>

### *property* PullOutDirectionManufacturingConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PullOutDirectionManufacturingConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Properties"></a>

### *property* PullOutDirectionManufacturingConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.VisibleProperties"></a>

### *property* PullOutDirectionManufacturingConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PullOutDirectionManufacturingConstraint.RenameBasedOnDefinition"></a>

### PullOutDirectionManufacturingConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Delete"></a>

### PullOutDirectionManufacturingConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetChildren"></a>

### PullOutDirectionManufacturingConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### PullOutDirectionManufacturingConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Activate"></a>

### PullOutDirectionManufacturingConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.CopyTo"></a>

### PullOutDirectionManufacturingConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Duplicate"></a>

### PullOutDirectionManufacturingConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GroupAllSimilarChildren"></a>

### PullOutDirectionManufacturingConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GroupSimilarObjects"></a>

### PullOutDirectionManufacturingConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.PropertyByName"></a>

### PullOutDirectionManufacturingConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.PropertyByAPIName"></a>

### PullOutDirectionManufacturingConstraint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.CreateParameter"></a>

### PullOutDirectionManufacturingConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetParameter"></a>

### PullOutDirectionManufacturingConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.RemoveParameter"></a>

### PullOutDirectionManufacturingConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
