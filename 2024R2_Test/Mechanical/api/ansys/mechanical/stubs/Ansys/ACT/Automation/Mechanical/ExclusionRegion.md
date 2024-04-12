<a id="exclusionregion"></a>

# ExclusionRegion

<a id="ExclusionRegion"></a>

### *class* ExclusionRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ExclusionRegion.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`CopyTo`](#id2)                                                      | Copies all visible properties from this object to another.                        |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#ExclusionRegion.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ExclusionRegion.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`Activate`](#ExclusionRegion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#id2)                                                      | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ExclusionRegion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ExclusionRegion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ExclusionRegion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ExclusionRegion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ExclusionRegion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ExclusionRegion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ExclusionRegion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ExclusionRegion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Suppressed`](#ExclusionRegion.Suppressed)                                                                         | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ExclusionRegionLocation`](#ExclusionRegion.ExclusionRegionLocation)                                               | Gets or sets the ExclusionRegionLocation.                     |
| [`ExclusionScopingMethod`](#ExclusionRegion.ExclusionScopingMethod)                                                 | Gets or sets the ExclusionScopingMethod.                      |
| [`Children`](#ExclusionRegion.Children)                                                                             | Gets the list of children.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ExclusionRegion.Properties)                                                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ExclusionRegion.VisibleProperties)                                                           | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ExclusionRegion
```

<a id="property-detail"></a>

## Property detail

<a id="ExclusionRegion.InternalObject"></a>

### *property* ExclusionRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSOptimizationRegionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Suppressed"></a>

### *property* ExclusionRegion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.DataModelObjectCategory"></a>

### *property* ExclusionRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.ExclusionRegionLocation"></a>

### *property* ExclusionRegion.ExclusionRegionLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionRegionLocation.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.ExclusionScopingMethod"></a>

### *property* ExclusionRegion.ExclusionScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Children"></a>

### *property* ExclusionRegion.Children *: System.Collections.Generic.IList[Ansys.ACT.Automation.Mechanical.DataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ExclusionRegion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Properties"></a>

### *property* ExclusionRegion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.VisibleProperties"></a>

### *property* ExclusionRegion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ExclusionRegion.CopyTo"></a>

### ExclusionRegion.CopyTo(other: [Ansys.ACT.Automation.Mechanical.ExclusionRegion](#ExclusionRegion))

Copies all visible properties from this object to another.
Override because of copy order of properties

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.RenameBasedOnDefinition"></a>

### ExclusionRegion.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Delete"></a>

### ExclusionRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetChildren"></a>

### ExclusionRegion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ExclusionRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Activate"></a>

### ExclusionRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### ExclusionRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Duplicate"></a>

### ExclusionRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GroupAllSimilarChildren"></a>

### ExclusionRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GroupSimilarObjects"></a>

### ExclusionRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.PropertyByName"></a>

### ExclusionRegion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.PropertyByAPIName"></a>

### ExclusionRegion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.CreateParameter"></a>

### ExclusionRegion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetParameter"></a>

### ExclusionRegion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.RemoveParameter"></a>

### ExclusionRegion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
