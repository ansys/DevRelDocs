# `MassConstraint`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MassConstraint"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MassConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MassConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MassConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MassConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MassConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MassConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MassConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#MassConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MassConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MassConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MassConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MassConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MassConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MassConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#MassConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Children`](#MassConstraint.Children)                               | Gets the list of children.                                                               |
| [`DataModelObjectCategory`](#MassConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                             |
| [`DefineBy`](#MassConstraint.DefineBy)                               | Gets or sets the DefineBy.                                                               |
| [`EnvironmentSelection`](#MassConstraint.EnvironmentSelection)       | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| [`InternalObject`](#MassConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                       |
| [`Location`](#MassConstraint.Location)                               | Gets or sets the Location.                                                               |
| [`MaximumAbsoluteValue`](#MassConstraint.MaximumAbsoluteValue)       | Gets or sets the MaximumAbsoluteValue.                                                   |
| [`MinimumAbsoluteValue`](#MassConstraint.MinimumAbsoluteValue)       | Gets or sets the MinimumAbsoluteValue.                                                   |
| [`PercentageToRetain`](#MassConstraint.PercentageToRetain)           | Gets or sets the PercentageToRetain.                                                     |
| [`PercentageToRetainMax`](#MassConstraint.PercentageToRetainMax)     | Gets or sets the PercentageToRetainMax.                                                  |
| [`PercentageToRetainMin`](#MassConstraint.PercentageToRetainMin)     | Gets or sets the PercentageToRetainMin.                                                  |
| [`Properties`](#MassConstraint.Properties)                           | Gets the list of properties for this object.                                             |
| [`ScopingMethod`](#MassConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                          |
| [`Selection`](#MassConstraint.Selection)                             | Gets or sets the Selection.                                                              |
| [`Suppressed`](#MassConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                             |
| [`VisibleProperties`](#MassConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                            |

<a id="property-detail"></a>

## Property detail

<a id="MassConstraint.Children"></a>

### *property* MassConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.DataModelObjectCategory"></a>

### *property* MassConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.DefineBy"></a>

### *property* MassConstraint.DefineBy *: [Ansys.Mechanical.DataModel.Enums.ResponseConstraintDefineBy](../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResponseConstraintDefineBy.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResponseConstraintDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.EnvironmentSelection"></a>

### *property* MassConstraint.EnvironmentSelection *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.InternalObject"></a>

### *property* MassConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Location"></a>

### *property* MassConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.MaximumAbsoluteValue"></a>

### *property* MassConstraint.MaximumAbsoluteValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumAbsoluteValue.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.MinimumAbsoluteValue"></a>

### *property* MassConstraint.MinimumAbsoluteValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumAbsoluteValue.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.PercentageToRetain"></a>

### *property* MassConstraint.PercentageToRetain *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PercentageToRetain.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.PercentageToRetainMax"></a>

### *property* MassConstraint.PercentageToRetainMax *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PercentageToRetainMax.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.PercentageToRetainMin"></a>

### *property* MassConstraint.PercentageToRetainMin *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PercentageToRetainMin.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Properties"></a>

### *property* MassConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.ScopingMethod"></a>

### *property* MassConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../v242/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Selection"></a>

### *property* MassConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](../../../../../v242/Ansys/ACT/Automation/Mechanical/OptimizationRegion.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Suppressed"></a>

### *property* MassConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.VisibleProperties"></a>

### *property* MassConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MassConstraint.Activate"></a>

### MassConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.CopyTo"></a>

### MassConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.CreateParameter"></a>

### MassConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Delete"></a>

### MassConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Duplicate"></a>

### MassConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GetChildren"></a>

### MassConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GetParameter"></a>

### MassConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GroupAllSimilarChildren"></a>

### MassConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GroupSimilarObjects"></a>

### MassConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.PropertyByAPIName"></a>

### MassConstraint.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.PropertyByName"></a>

### MassConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.RemoveParameter"></a>

### MassConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.RenameBasedOnDefinition"></a>

### MassConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

