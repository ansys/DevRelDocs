# `ExclusionRegion`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ExclusionRegion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ExclusionRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

ExclusionRegion class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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
|---------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ExclusionRegion.Children)                                               | Gets the list of children.                                    |
| [`DataModelObjectCategory`](#ExclusionRegion.DataModelObjectCategory)                 | Gets the current DataModelObject’s category.                  |
| [`ExclusionRegionLocation`](#ExclusionRegion.ExclusionRegionLocation)                 | Gets or sets the ExclusionRegionLocation.                     |
| [`ExclusionScopingMethod`](#ExclusionRegion.ExclusionScopingMethod)                   | Gets or sets the ExclusionScopingMethod.                      |
| [`InternalObject`](#ExclusionRegion.InternalObject)                                   | InternalObject property.                                      |
| [`LocalDesignRestrictionNature`](#ExclusionRegion.LocalDesignRestrictionNature)       | Gets or sets the LocalDesignRestrictionNature.                |
| [`MaxCumulatedDisplacementControl`](#ExclusionRegion.MaxCumulatedDisplacementControl) | Gets or sets the MaxCumulatedDisplacementControl.             |
| [`MorphingTotalMoveLimit`](#ExclusionRegion.MorphingTotalMoveLimit)                   | Gets or sets the MorphingTotalMoveLimit.                      |
| [`Properties`](#ExclusionRegion.Properties)                                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#ExclusionRegion.Suppressed)                                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ExclusionRegion.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ExclusionRegion.Children"></a>

### *property* ExclusionRegion.Children *: List[Ansys.ACT.Automation.Mechanical.DataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.DataModelObjectCategory"></a>

### *property* ExclusionRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.ExclusionRegionLocation"></a>

### *property* ExclusionRegion.ExclusionRegionLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionRegionLocation.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.ExclusionScopingMethod"></a>

### *property* ExclusionRegion.ExclusionScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.InternalObject"></a>

### *property* ExclusionRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSOptimizationRegionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

InternalObject property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.LocalDesignRestrictionNature"></a>

### *property* ExclusionRegion.LocalDesignRestrictionNature *: [Ansys.Mechanical.DataModel.Enums.TopoLocalDesignRestrictionNature](../../../Mechanical/DataModel/Enums/TopoLocalDesignRestrictionNature.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TopoLocalDesignRestrictionNature) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocalDesignRestrictionNature.
: This property enables you to specify geometry that the application does not optimize or
  specific faces from which the application does not move any nodes vertically with respect to the original face.
  Non-Optimizable option is the default.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.MaxCumulatedDisplacementControl"></a>

### *property* ExclusionRegion.MaxCumulatedDisplacementControl *: [Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType](../../../Mechanical/DataModel/Enums/TopoPropertyControlType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxCumulatedDisplacementControl.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.MorphingTotalMoveLimit"></a>

### *property* ExclusionRegion.MorphingTotalMoveLimit *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MorphingTotalMoveLimit.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Properties"></a>

### *property* ExclusionRegion.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.Suppressed"></a>

### *property* ExclusionRegion.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.VisibleProperties"></a>

### *property* ExclusionRegion.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ExclusionRegion.Activate"></a>

### ExclusionRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.CopyTo"></a>

### ExclusionRegion.CopyTo(other: [Ansys.ACT.Automation.Mechanical.ExclusionRegion](#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ExclusionRegion))

```text
Copies all visible properties from this object to another.
Override because of copy order of properties
```

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.CreateParameter"></a>

### ExclusionRegion.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

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

### ExclusionRegion.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.GetParameter"></a>

### ExclusionRegion.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

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

### ExclusionRegion.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.PropertyByName"></a>

### ExclusionRegion.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.RemoveParameter"></a>

### ExclusionRegion.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExclusionRegion.RenameBasedOnDefinition"></a>

### ExclusionRegion.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

