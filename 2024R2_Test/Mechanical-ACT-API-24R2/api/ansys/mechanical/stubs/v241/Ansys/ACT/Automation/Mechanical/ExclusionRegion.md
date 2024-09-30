# `ExclusionRegion`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ExclusionRegion"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ExclusionRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ExclusionRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ExclusionRegion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ExclusionRegion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ExclusionRegion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ExclusionRegion.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ExclusionRegion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ExclusionRegion.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ExclusionRegion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ExclusionRegion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ExclusionRegion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ExclusionRegion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ExclusionRegion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ExclusionRegion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ExclusionRegion.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ExclusionRegion.Children)                               | Gets the list of children.                                    |
| [`DataModelObjectCategory`](#ExclusionRegion.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ExclusionRegionLocation`](#ExclusionRegion.ExclusionRegionLocation) | Gets or sets the ExclusionRegionLocation.                     |
| [`ExclusionScopingMethod`](#ExclusionRegion.ExclusionScopingMethod)   | Gets or sets the ExclusionScopingMethod.                      |
| [`InternalObject`](#ExclusionRegion.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ExclusionRegion.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#ExclusionRegion.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ExclusionRegion.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ExclusionRegion.Children"></a>

### *property* ExclusionRegion.Children *: System.Collections.Generic.IList[Ansys.ACT.Automation.Mechanical.DataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.DataModelObjectCategory"></a>

### *property* ExclusionRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.ExclusionRegionLocation"></a>

### *property* ExclusionRegion.ExclusionRegionLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionRegionLocation.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.ExclusionScopingMethod"></a>

### *property* ExclusionRegion.ExclusionScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../v242/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.InternalObject"></a>

### *property* ExclusionRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSOptimizationRegionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Properties"></a>

### *property* ExclusionRegion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Suppressed"></a>

### *property* ExclusionRegion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.VisibleProperties"></a>

### *property* ExclusionRegion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ExclusionRegion.Activate"></a>

### ExclusionRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.CopyTo"></a>

### ExclusionRegion.CopyTo(other: [Ansys.ACT.Automation.Mechanical.ExclusionRegion](#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ExclusionRegion))

```text
Copies all visible properties from this object to another.
Override because of copy order of properties
```

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.CreateParameter"></a>

### ExclusionRegion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Delete"></a>

### ExclusionRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Duplicate"></a>

### ExclusionRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetChildren"></a>

### ExclusionRegion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetParameter"></a>

### ExclusionRegion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GroupAllSimilarChildren"></a>

### ExclusionRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GroupSimilarObjects"></a>

### ExclusionRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.PropertyByAPIName"></a>

### ExclusionRegion.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.PropertyByName"></a>

### ExclusionRegion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.RemoveParameter"></a>

### ExclusionRegion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.RenameBasedOnDefinition"></a>

### ExclusionRegion.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

