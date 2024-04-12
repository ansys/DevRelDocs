<a id="patternrepetitionconstraint"></a>

# PatternRepetitionConstraint

<a id="PatternRepetitionConstraint"></a>

### *class* PatternRepetitionConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PatternRepetitionConstraint.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#PatternRepetitionConstraint.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#PatternRepetitionConstraint.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`Activate`](#PatternRepetitionConstraint.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#PatternRepetitionConstraint.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PatternRepetitionConstraint.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PatternRepetitionConstraint.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PatternRepetitionConstraint.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PatternRepetitionConstraint.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PatternRepetitionConstraint.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#PatternRepetitionConstraint.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PatternRepetitionConstraint.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PatternRepetitionConstraint.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Offset`](#PatternRepetitionConstraint.Offset)                                                                     | Gets or sets the Offset.                                      |
| [`Axis`](#PatternRepetitionConstraint.Axis)                                                                         | Gets or sets the Axis.                                        |
| [`ScopingMethod`](#PatternRepetitionConstraint.ScopingMethod)                                                       | Gets or sets the ScopingMethod.                               |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#PatternRepetitionConstraint.Location)                                                                 | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#PatternRepetitionConstraint.Suppressed)                                                             | Gets or sets the Suppressed.                                  |
| [`Selection`](#PatternRepetitionConstraint.Selection)                                                               | Gets or sets the Selection.                                   |
| [`Children`](#PatternRepetitionConstraint.Children)                                                                 | Gets the list of children.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PatternRepetitionConstraint.Properties)                                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PatternRepetitionConstraint.VisibleProperties)                                               | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import PatternRepetitionConstraint
```

<a id="property-detail"></a>

## Property detail

<a id="PatternRepetitionConstraint.InternalObject"></a>

### *property* PatternRepetitionConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Offset"></a>

### *property* PatternRepetitionConstraint.Offset *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Offset.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Axis"></a>

### *property* PatternRepetitionConstraint.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.ScopingMethod"></a>

### *property* PatternRepetitionConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.CoordinateSystem"></a>

### *property* PatternRepetitionConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Location"></a>

### *property* PatternRepetitionConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.DataModelObjectCategory"></a>

### *property* PatternRepetitionConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Suppressed"></a>

### *property* PatternRepetitionConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Selection"></a>

### *property* PatternRepetitionConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Children"></a>

### *property* PatternRepetitionConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PatternRepetitionConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Properties"></a>

### *property* PatternRepetitionConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.VisibleProperties"></a>

### *property* PatternRepetitionConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PatternRepetitionConstraint.RenameBasedOnDefinition"></a>

### PatternRepetitionConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Delete"></a>

### PatternRepetitionConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetChildren"></a>

### PatternRepetitionConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### PatternRepetitionConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Activate"></a>

### PatternRepetitionConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.CopyTo"></a>

### PatternRepetitionConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Duplicate"></a>

### PatternRepetitionConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GroupAllSimilarChildren"></a>

### PatternRepetitionConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GroupSimilarObjects"></a>

### PatternRepetitionConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.PropertyByName"></a>

### PatternRepetitionConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.PropertyByAPIName"></a>

### PatternRepetitionConstraint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.CreateParameter"></a>

### PatternRepetitionConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetParameter"></a>

### PatternRepetitionConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.RemoveParameter"></a>

### PatternRepetitionConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
