<a id="centerofgravityconstraint"></a>

# CenterOfGravityConstraint

<a id="CenterOfGravityConstraint"></a>

### *class* CenterOfGravityConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CenterOfGravityConstraint.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`RenameBasedOnDefinition`](#CenterOfGravityConstraint.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#CenterOfGravityConstraint.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`Activate`](#CenterOfGravityConstraint.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#CenterOfGravityConstraint.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CenterOfGravityConstraint.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CenterOfGravityConstraint.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CenterOfGravityConstraint.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CenterOfGravityConstraint.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CenterOfGravityConstraint.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#CenterOfGravityConstraint.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CenterOfGravityConstraint.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CenterOfGravityConstraint.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                       |
|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`MaximumPosition`](#CenterOfGravityConstraint.MaximumPosition)                                                     | Gets or sets the MaximumPosition.                                                        |
| [`MinimumPosition`](#CenterOfGravityConstraint.MinimumPosition)                                                     | Gets or sets the MinimumPosition.                                                        |
| [`Axis`](#CenterOfGravityConstraint.Axis)                                                                           | Gets or sets the Axis.                                                                   |
| [`ScopingMethod`](#CenterOfGravityConstraint.ScopingMethod)                                                         | Gets or sets the ScopingMethod.                                                          |
| [`Selection`](#CenterOfGravityConstraint.Selection)                                                                 | Gets or sets the Selection.                                                              |
| [`Location`](#CenterOfGravityConstraint.Location)                                                                   | Gets or sets the Location.                                                               |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                             |
| [`EnvironmentSelection`](#CenterOfGravityConstraint.EnvironmentSelection)                                           | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| [`Suppressed`](#CenterOfGravityConstraint.Suppressed)                                                               | Gets or sets the Suppressed.                                                             |
| [`Children`](#CenterOfGravityConstraint.Children)                                                                   | Gets the list of children.                                                               |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                       |
| [`Properties`](#CenterOfGravityConstraint.Properties)                                                               | Gets the list of properties for this object.                                             |
| [`VisibleProperties`](#CenterOfGravityConstraint.VisibleProperties)                                                 | Gets the list of properties that are visible for this object.                            |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import CenterOfGravityConstraint
```

<a id="property-detail"></a>

## Property detail

<a id="CenterOfGravityConstraint.InternalObject"></a>

### *property* CenterOfGravityConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.MaximumPosition"></a>

### *property* CenterOfGravityConstraint.MaximumPosition *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumPosition.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.MinimumPosition"></a>

### *property* CenterOfGravityConstraint.MinimumPosition *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumPosition.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.Axis"></a>

### *property* CenterOfGravityConstraint.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.ScopingMethod"></a>

### *property* CenterOfGravityConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.Selection"></a>

### *property* CenterOfGravityConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.Location"></a>

### *property* CenterOfGravityConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.DataModelObjectCategory"></a>

### *property* CenterOfGravityConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.EnvironmentSelection"></a>

### *property* CenterOfGravityConstraint.EnvironmentSelection *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.Suppressed"></a>

### *property* CenterOfGravityConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.Children"></a>

### *property* CenterOfGravityConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CenterOfGravityConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.Properties"></a>

### *property* CenterOfGravityConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.VisibleProperties"></a>

### *property* CenterOfGravityConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CenterOfGravityConstraint.RenameBasedOnDefinition"></a>

### CenterOfGravityConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.Delete"></a>

### CenterOfGravityConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.GetChildren"></a>

### CenterOfGravityConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CenterOfGravityConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.Activate"></a>

### CenterOfGravityConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.CopyTo"></a>

### CenterOfGravityConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.Duplicate"></a>

### CenterOfGravityConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.GroupAllSimilarChildren"></a>

### CenterOfGravityConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.GroupSimilarObjects"></a>

### CenterOfGravityConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.PropertyByName"></a>

### CenterOfGravityConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.PropertyByAPIName"></a>

### CenterOfGravityConstraint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.CreateParameter"></a>

### CenterOfGravityConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.GetParameter"></a>

### CenterOfGravityConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CenterOfGravityConstraint.RemoveParameter"></a>

### CenterOfGravityConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
