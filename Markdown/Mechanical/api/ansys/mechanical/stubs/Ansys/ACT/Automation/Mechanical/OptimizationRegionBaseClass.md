# OptimizationRegionBaseClass

### *class* OptimizationRegionBaseClass

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a OptimizationRegionBaseClass.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#OptimizationRegionBaseClass.Delete)                                   | Run the Delete action.                                                            |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`Activate`](#OptimizationRegionBaseClass.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#OptimizationRegionBaseClass.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#OptimizationRegionBaseClass.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#OptimizationRegionBaseClass.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#OptimizationRegionBaseClass.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#OptimizationRegionBaseClass.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#OptimizationRegionBaseClass.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#OptimizationRegionBaseClass.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#OptimizationRegionBaseClass.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#OptimizationRegionBaseClass.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                          | Gets the internal object. For advanced usage only.            |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ExclusionRegionLocation`](#OptimizationRegionBaseClass.ExclusionRegionLocation) | Gets or sets the ExclusionRegionLocation.                     |
| [`ExclusionScopingMethod`](#OptimizationRegionBaseClass.ExclusionScopingMethod)   | Gets or sets the ExclusionScopingMethod.                      |
| [`Children`](#OptimizationRegionBaseClass.Children)                               | Gets the list of children.                                    |
| [`InternalObject`](#id0)                                                          | Gets the internal object. For advanced usage only.            |
| [`Properties`](#OptimizationRegionBaseClass.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#OptimizationRegionBaseClass.VisibleProperties)             | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import OptimizationRegionBaseClass
```

## Property detail

### *property* OptimizationRegionBaseClass.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSOptimizationRegionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegionBaseClass.ExclusionRegionLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionRegionLocation.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegionBaseClass.ExclusionScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegionBaseClass.Children *: System.Collections.Generic.IList[Ansys.ACT.Automation.Mechanical.DataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegionBaseClass.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegionBaseClass.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* OptimizationRegionBaseClass.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### OptimizationRegionBaseClass.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### OptimizationRegionBaseClass.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### OptimizationRegionBaseClass.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### OptimizationRegionBaseClass.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### OptimizationRegionBaseClass.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### OptimizationRegionBaseClass.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### OptimizationRegionBaseClass.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### OptimizationRegionBaseClass.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### OptimizationRegionBaseClass.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### OptimizationRegionBaseClass.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### OptimizationRegionBaseClass.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### OptimizationRegionBaseClass.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### OptimizationRegionBaseClass.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
