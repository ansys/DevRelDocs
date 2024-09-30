# `OptimizationRegionBaseClass`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.OptimizationRegionBaseClass"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.OptimizationRegionBaseClass

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a OptimizationRegionBaseClass.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#OptimizationRegionBaseClass.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#OptimizationRegionBaseClass.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#OptimizationRegionBaseClass.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#OptimizationRegionBaseClass.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#OptimizationRegionBaseClass.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#OptimizationRegionBaseClass.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#OptimizationRegionBaseClass.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#OptimizationRegionBaseClass.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#OptimizationRegionBaseClass.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#OptimizationRegionBaseClass.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#OptimizationRegionBaseClass.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#OptimizationRegionBaseClass.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#OptimizationRegionBaseClass.Children)                               | Gets the list of children.                                    |
| [`ExclusionRegionLocation`](#OptimizationRegionBaseClass.ExclusionRegionLocation) | Gets or sets the ExclusionRegionLocation.                     |
| [`ExclusionScopingMethod`](#OptimizationRegionBaseClass.ExclusionScopingMethod)   | Gets or sets the ExclusionScopingMethod.                      |
| [`InternalObject`](#OptimizationRegionBaseClass.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#OptimizationRegionBaseClass.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#OptimizationRegionBaseClass.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="OptimizationRegionBaseClass.Children"></a>

### *property* OptimizationRegionBaseClass.Children *: System.Collections.Generic.IList[Ansys.ACT.Automation.Mechanical.DataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.ExclusionRegionLocation"></a>

### *property* OptimizationRegionBaseClass.ExclusionRegionLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionRegionLocation.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.ExclusionScopingMethod"></a>

### *property* OptimizationRegionBaseClass.ExclusionScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../v242/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.InternalObject"></a>

### *property* OptimizationRegionBaseClass.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSOptimizationRegionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="OptimizationRegionBaseClass.Activate"></a>

### OptimizationRegionBaseClass.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.CopyTo"></a>

### OptimizationRegionBaseClass.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.CreateParameter"></a>

### OptimizationRegionBaseClass.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.Delete"></a>

### OptimizationRegionBaseClass.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.Duplicate"></a>

### OptimizationRegionBaseClass.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetChildren"></a>

### OptimizationRegionBaseClass.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetParameter"></a>

### OptimizationRegionBaseClass.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GroupAllSimilarChildren"></a>

### OptimizationRegionBaseClass.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GroupSimilarObjects"></a>

### OptimizationRegionBaseClass.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.PropertyByAPIName"></a>

### OptimizationRegionBaseClass.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.PropertyByName"></a>

### OptimizationRegionBaseClass.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.RemoveParameter"></a>

### OptimizationRegionBaseClass.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

