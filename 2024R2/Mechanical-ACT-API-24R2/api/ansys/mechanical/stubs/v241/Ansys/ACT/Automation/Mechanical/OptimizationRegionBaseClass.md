# `OptimizationRegionBaseClass`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.OptimizationRegionBaseClass

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a OptimizationRegionBaseClass.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#OptimizationRegionBaseClass.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#OptimizationRegionBaseClass.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#OptimizationRegionBaseClass.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#OptimizationRegionBaseClass.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#OptimizationRegionBaseClass.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#OptimizationRegionBaseClass.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#OptimizationRegionBaseClass.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#OptimizationRegionBaseClass.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#OptimizationRegionBaseClass.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#OptimizationRegionBaseClass.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#OptimizationRegionBaseClass.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#id0)                                                          | Gets the internal object. For advanced usage only.            |
| [`ExclusionRegionLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#OptimizationRegionBaseClass.ExclusionRegionLocation) | Gets or sets the ExclusionRegionLocation.                     |
| [`ExclusionScopingMethod`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#OptimizationRegionBaseClass.ExclusionScopingMethod)   | Gets or sets the ExclusionScopingMethod.                      |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#OptimizationRegionBaseClass.Children)                               | Gets the list of children.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#id0)                                                          | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#OptimizationRegionBaseClass.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegionBaseClass.md#OptimizationRegionBaseClass.VisibleProperties)             | Gets the list of properties that are visible for this object. |

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

### *property* OptimizationRegionBaseClass.ExclusionScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.Children"></a>

### *property* OptimizationRegionBaseClass.Children *: System.Collections.Generic.IList[Ansys.ACT.Automation.Mechanical.DataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

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

### OptimizationRegionBaseClass.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

