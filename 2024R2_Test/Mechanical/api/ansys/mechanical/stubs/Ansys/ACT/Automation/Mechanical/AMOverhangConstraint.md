# AMOverhangConstraint

### *class* AMOverhangConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AMOverhangConstraint.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`RenameBasedOnDefinition`](#AMOverhangConstraint.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#AMOverhangConstraint.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`Activate`](#AMOverhangConstraint.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#AMOverhangConstraint.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AMOverhangConstraint.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AMOverhangConstraint.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AMOverhangConstraint.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AMOverhangConstraint.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AMOverhangConstraint.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#AMOverhangConstraint.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AMOverhangConstraint.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AMOverhangConstraint.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`OverhangAngle`](#AMOverhangConstraint.OverhangAngle)                                                              | Gets or sets the OverhangAngle.                               |
| [`ScopingMethod`](#AMOverhangConstraint.ScopingMethod)                                                              | Gets or sets the ScopingMethod.                               |
| [`BuildDirection`](#AMOverhangConstraint.BuildDirection)                                                            | Gets or sets the BuildDirection.                              |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#AMOverhangConstraint.Suppressed)                                                                    | Gets or sets the Suppressed.                                  |
| [`Selection`](#AMOverhangConstraint.Selection)                                                                      | Gets or sets the Selection.                                   |
| [`Children`](#AMOverhangConstraint.Children)                                                                        | Gets the list of children.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AMOverhangConstraint.Properties)                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AMOverhangConstraint.VisibleProperties)                                                      | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import AMOverhangConstraint
```

## Property detail

### *property* AMOverhangConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AMOverhangConstraint.OverhangAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OverhangAngle.

<!-- !! processed by numpydoc !! -->

### *property* AMOverhangConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AMOverhangConstraint.BuildDirection *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildDirection.

<!-- !! processed by numpydoc !! -->

### *property* AMOverhangConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* AMOverhangConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AMOverhangConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AMOverhangConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

### *property* AMOverhangConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AMOverhangConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AMOverhangConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AMOverhangConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AMOverhangConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AMOverhangConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AMOverhangConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AMOverhangConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AMOverhangConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AMOverhangConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AMOverhangConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AMOverhangConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AMOverhangConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AMOverhangConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AMOverhangConstraint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AMOverhangConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### AMOverhangConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AMOverhangConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
