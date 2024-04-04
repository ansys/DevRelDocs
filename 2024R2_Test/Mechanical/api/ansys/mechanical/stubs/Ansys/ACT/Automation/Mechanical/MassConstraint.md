# MassConstraint

### *class* MassConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MassConstraint.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`RenameBasedOnDefinition`](#MassConstraint.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#MassConstraint.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`Activate`](#MassConstraint.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#MassConstraint.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MassConstraint.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MassConstraint.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MassConstraint.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MassConstraint.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MassConstraint.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#MassConstraint.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MassConstraint.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MassConstraint.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                       |
|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`PercentageToRetain`](#MassConstraint.PercentageToRetain)                                                          | Gets or sets the PercentageToRetain.                                                     |
| [`PercentageToRetainMax`](#MassConstraint.PercentageToRetainMax)                                                    | Gets or sets the PercentageToRetainMax.                                                  |
| [`PercentageToRetainMin`](#MassConstraint.PercentageToRetainMin)                                                    | Gets or sets the PercentageToRetainMin.                                                  |
| [`MaximumAbsoluteValue`](#MassConstraint.MaximumAbsoluteValue)                                                      | Gets or sets the MaximumAbsoluteValue.                                                   |
| [`MinimumAbsoluteValue`](#MassConstraint.MinimumAbsoluteValue)                                                      | Gets or sets the MinimumAbsoluteValue.                                                   |
| [`DefineBy`](#MassConstraint.DefineBy)                                                                              | Gets or sets the DefineBy.                                                               |
| [`ScopingMethod`](#MassConstraint.ScopingMethod)                                                                    | Gets or sets the ScopingMethod.                                                          |
| [`Selection`](#MassConstraint.Selection)                                                                            | Gets or sets the Selection.                                                              |
| [`Location`](#MassConstraint.Location)                                                                              | Gets or sets the Location.                                                               |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                             |
| [`EnvironmentSelection`](#MassConstraint.EnvironmentSelection)                                                      | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| [`Suppressed`](#MassConstraint.Suppressed)                                                                          | Gets or sets the Suppressed.                                                             |
| [`Children`](#MassConstraint.Children)                                                                              | Gets the list of children.                                                               |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                       |
| [`Properties`](#MassConstraint.Properties)                                                                          | Gets the list of properties for this object.                                             |
| [`VisibleProperties`](#MassConstraint.VisibleProperties)                                                            | Gets the list of properties that are visible for this object.                            |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import MassConstraint
```

## Property detail

### *property* MassConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MassConstraint.PercentageToRetain *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PercentageToRetain.

<!-- !! processed by numpydoc !! -->

### *property* MassConstraint.PercentageToRetainMax *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PercentageToRetainMax.

<!-- !! processed by numpydoc !! -->

### *property* MassConstraint.PercentageToRetainMin *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PercentageToRetainMin.

<!-- !! processed by numpydoc !! -->

### *property* MassConstraint.MaximumAbsoluteValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumAbsoluteValue.

<!-- !! processed by numpydoc !! -->

### *property* MassConstraint.MinimumAbsoluteValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumAbsoluteValue.

<!-- !! processed by numpydoc !! -->

### *property* MassConstraint.DefineBy *: [Ansys.Mechanical.DataModel.Enums.ResponseConstraintDefineBy](../../../Mechanical/DataModel/Enums/ResponseConstraintDefineBy.md#ResponseConstraintDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

### *property* MassConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* MassConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

### *property* MassConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* MassConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MassConstraint.EnvironmentSelection *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

### *property* MassConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MassConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MassConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MassConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MassConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MassConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### MassConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MassConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MassConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MassConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MassConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MassConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MassConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MassConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MassConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MassConstraint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MassConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MassConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MassConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
