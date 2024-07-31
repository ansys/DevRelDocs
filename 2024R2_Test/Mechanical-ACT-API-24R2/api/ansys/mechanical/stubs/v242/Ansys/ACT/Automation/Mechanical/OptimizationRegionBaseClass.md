# `OptimizationRegionBaseClass`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.OptimizationRegionBaseClass

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a OptimizationRegionBaseClass.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#OptimizationRegionBaseClass.Delete)                                   | Run the Delete action.                                                            |
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

| Name | Description |
|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                          | Gets the internal object. For advanced usage only.            |
| [`ExclusionRegionLocation`](#OptimizationRegionBaseClass.ExclusionRegionLocation)                 | Gets or sets the ExclusionRegionLocation.                     |
| [`ExclusionScopingMethod`](#OptimizationRegionBaseClass.ExclusionScopingMethod)                   | Gets or sets the ExclusionScopingMethod.                      |
| [`Children`](#OptimizationRegionBaseClass.Children)                                               | Gets the list of children.                                    |
| [`MaxCumulatedDisplacementControl`](#OptimizationRegionBaseClass.MaxCumulatedDisplacementControl) | Gets or sets the MaxCumulatedDisplacementControl.             |
| [`MorphingTotalMoveLimit`](#OptimizationRegionBaseClass.MorphingTotalMoveLimit)                   | Gets or sets the MorphingTotalMoveLimit.                      |
| [`InternalObject`](#id0)                                                                          | Gets the internal object. For advanced usage only.            |
| [`Properties`](#OptimizationRegionBaseClass.Properties)                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#OptimizationRegionBaseClass.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="OptimizationRegionBaseClass.InternalObject"></a>

### *property* OptimizationRegionBaseClass.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSOptimizationRegionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.ExclusionRegionLocation"></a>

### *property* OptimizationRegionBaseClass.ExclusionRegionLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionRegionLocation.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.ExclusionScopingMethod"></a>

### *property* OptimizationRegionBaseClass.ExclusionScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.Children"></a>

### *property* OptimizationRegionBaseClass.Children *: System.Collections.Generic.IList[Ansys.ACT.Automation.Mechanical.DataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.MaxCumulatedDisplacementControl"></a>

### *property* OptimizationRegionBaseClass.MaxCumulatedDisplacementControl *: [Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/TopoPropertyControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxCumulatedDisplacementControl.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.MorphingTotalMoveLimit"></a>

### *property* OptimizationRegionBaseClass.MorphingTotalMoveLimit *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MorphingTotalMoveLimit.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* OptimizationRegionBaseClass.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.Properties"></a>

### *property* OptimizationRegionBaseClass.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.VisibleProperties"></a>

### *property* OptimizationRegionBaseClass.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="OptimizationRegionBaseClass.Delete"></a>

### OptimizationRegionBaseClass.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetChildren"></a>

### OptimizationRegionBaseClass.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### OptimizationRegionBaseClass.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.Activate"></a>

### OptimizationRegionBaseClass.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.CopyTo"></a>

### OptimizationRegionBaseClass.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.Duplicate"></a>

### OptimizationRegionBaseClass.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GroupAllSimilarChildren"></a>

### OptimizationRegionBaseClass.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GroupSimilarObjects"></a>

### OptimizationRegionBaseClass.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.PropertyByName"></a>

### OptimizationRegionBaseClass.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.PropertyByAPIName"></a>

### OptimizationRegionBaseClass.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.CreateParameter"></a>

### OptimizationRegionBaseClass.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetParameter"></a>

### OptimizationRegionBaseClass.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.RemoveParameter"></a>

### OptimizationRegionBaseClass.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

