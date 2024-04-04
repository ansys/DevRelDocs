# PatternRepetitionConstraint

### *class* PatternRepetitionConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PatternRepetitionConstraint.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`RenameBasedOnDefinition`](#PatternRepetitionConstraint.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
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

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import PatternRepetitionConstraint
```

## Property detail

### *property* PatternRepetitionConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PatternRepetitionConstraint.Offset *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Offset.

<!-- !! processed by numpydoc !! -->

### *property* PatternRepetitionConstraint.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

### *property* PatternRepetitionConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* PatternRepetitionConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* PatternRepetitionConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* PatternRepetitionConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* PatternRepetitionConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* PatternRepetitionConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

### *property* PatternRepetitionConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PatternRepetitionConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PatternRepetitionConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PatternRepetitionConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### PatternRepetitionConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### PatternRepetitionConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PatternRepetitionConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PatternRepetitionConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PatternRepetitionConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PatternRepetitionConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PatternRepetitionConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PatternRepetitionConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PatternRepetitionConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PatternRepetitionConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PatternRepetitionConstraint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### PatternRepetitionConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PatternRepetitionConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PatternRepetitionConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
