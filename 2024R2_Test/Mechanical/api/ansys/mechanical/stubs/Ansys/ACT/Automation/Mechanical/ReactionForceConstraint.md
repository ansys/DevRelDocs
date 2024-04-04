# ReactionForceConstraint

### *class* ReactionForceConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ReactionForceConstraint.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`RenameBasedOnDefinition`](#ReactionForceConstraint.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ReactionForceConstraint.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`Activate`](#ReactionForceConstraint.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#ReactionForceConstraint.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ReactionForceConstraint.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ReactionForceConstraint.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ReactionForceConstraint.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ReactionForceConstraint.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ReactionForceConstraint.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#ReactionForceConstraint.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ReactionForceConstraint.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ReactionForceConstraint.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                       |
|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`XComponentMax`](#ReactionForceConstraint.XComponentMax)                                                           | Gets or sets the XComponentMax.                                                          |
| [`YComponentMax`](#ReactionForceConstraint.YComponentMax)                                                           | Gets or sets the YComponentMax.                                                          |
| [`ZComponentMax`](#ReactionForceConstraint.ZComponentMax)                                                           | Gets or sets the ZComponentMax.                                                          |
| [`BoundType`](#ReactionForceConstraint.BoundType)                                                                   | Gets or sets the BoundType.                                                              |
| [`ScopingMethod`](#ReactionForceConstraint.ScopingMethod)                                                           | Gets or sets the ScopingMethod.                                                          |
| [`AxisSelection`](#ReactionForceConstraint.AxisSelection)                                                           | Gets or sets the AxisSelection.                                                          |
| [`ReactionForceCriteria`](#ReactionForceConstraint.ReactionForceCriteria)                                           | Gets or sets the ReactionForceCriteria.                                                  |
| [`Location`](#ReactionForceConstraint.Location)                                                                     | Gets or sets the Location.                                                               |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                             |
| [`EnvironmentSelection`](#ReactionForceConstraint.EnvironmentSelection)                                             | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| [`Suppressed`](#ReactionForceConstraint.Suppressed)                                                                 | Gets or sets the Suppressed.                                                             |
| [`Children`](#ReactionForceConstraint.Children)                                                                     | Gets the list of children.                                                               |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                       |
| [`Properties`](#ReactionForceConstraint.Properties)                                                                 | Gets the list of properties for this object.                                             |
| [`VisibleProperties`](#ReactionForceConstraint.VisibleProperties)                                                   | Gets the list of properties that are visible for this object.                            |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ReactionForceConstraint
```

## Property detail

### *property* ReactionForceConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ReactionForceConstraint.XComponentMax *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XComponentMax.

<!-- !! processed by numpydoc !! -->

### *property* ReactionForceConstraint.YComponentMax *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YComponentMax.

<!-- !! processed by numpydoc !! -->

### *property* ReactionForceConstraint.ZComponentMax *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZComponentMax.

<!-- !! processed by numpydoc !! -->

### *property* ReactionForceConstraint.BoundType *: [Ansys.Mechanical.DataModel.Enums.TopoBoundType](../../../Mechanical/DataModel/Enums/TopoBoundType.md#TopoBoundType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundType.

<!-- !! processed by numpydoc !! -->

### *property* ReactionForceConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* ReactionForceConstraint.AxisSelection *: [Ansys.Mechanical.DataModel.Enums.AxisSelectionType](../../../Mechanical/DataModel/Enums/AxisSelectionType.md#AxisSelectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AxisSelection.

<!-- !! processed by numpydoc !! -->

### *property* ReactionForceConstraint.ReactionForceCriteria *: [Ansys.Mechanical.DataModel.Enums.ReactionForceCriteriaType](../../../Mechanical/DataModel/Enums/ReactionForceCriteriaType.md#ReactionForceCriteriaType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReactionForceCriteria.

<!-- !! processed by numpydoc !! -->

### *property* ReactionForceConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ReactionForceConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ReactionForceConstraint.EnvironmentSelection *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

### *property* ReactionForceConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ReactionForceConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ReactionForceConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ReactionForceConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ReactionForceConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ReactionForceConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### ReactionForceConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ReactionForceConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ReactionForceConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ReactionForceConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ReactionForceConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ReactionForceConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ReactionForceConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ReactionForceConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ReactionForceConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ReactionForceConstraint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ReactionForceConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ReactionForceConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ReactionForceConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
