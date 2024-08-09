# `UniformConstraint`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.UniformConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a UniformConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#UniformConstraint.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#UniformConstraint.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`Activate`](#UniformConstraint.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#UniformConstraint.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#UniformConstraint.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#UniformConstraint.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#UniformConstraint.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#UniformConstraint.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#UniformConstraint.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#UniformConstraint.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#UniformConstraint.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#UniformConstraint.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`Axis`](#UniformConstraint.Axis)                                       | Gets or sets the Axis.                                        |
| [`ScopingMethod`](#UniformConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`CoordinateSystem`](#UniformConstraint.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`Location`](#UniformConstraint.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#UniformConstraint.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Suppressed`](#UniformConstraint.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Selection`](#UniformConstraint.Selection)                             | Gets or sets the Selection.                                   |
| [`Children`](#UniformConstraint.Children)                               | Gets the list of children.                                    |
| [`InternalObject`](#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#UniformConstraint.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#UniformConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="UniformConstraint.InternalObject"></a>

### *property* UniformConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.Axis"></a>

### *property* UniformConstraint.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.ScopingMethod"></a>

### *property* UniformConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.CoordinateSystem"></a>

### *property* UniformConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.Location"></a>

### *property* UniformConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.DataModelObjectCategory"></a>

### *property* UniformConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.Suppressed"></a>

### *property* UniformConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.Selection"></a>

### *property* UniformConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](../../../../../v241/Ansys/ACT/Automation/Mechanical/OptimizationRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.Children"></a>

### *property* UniformConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* UniformConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.Properties"></a>

### *property* UniformConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.VisibleProperties"></a>

### *property* UniformConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="UniformConstraint.RenameBasedOnDefinition"></a>

### UniformConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.Delete"></a>

### UniformConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.GetChildren"></a>

### UniformConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### UniformConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.Activate"></a>

### UniformConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.CopyTo"></a>

### UniformConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.Duplicate"></a>

### UniformConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.GroupAllSimilarChildren"></a>

### UniformConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.GroupSimilarObjects"></a>

### UniformConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.PropertyByName"></a>

### UniformConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.PropertyByAPIName"></a>

### UniformConstraint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.CreateParameter"></a>

### UniformConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.GetParameter"></a>

### UniformConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="UniformConstraint.RemoveParameter"></a>

### UniformConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

