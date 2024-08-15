# `BoltPretension`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.BoltPretension

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BoltPretension.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------|-----------------------------------------------------------------------------------|
| `PromoteToNamedSelection`   | Run the PromoteToNamedSelection action.                                           |
| `PromoteToCoordinateSystem` | Run the PromoteToCoordinateSystem action.                                         |
| `GetDefineBy`               | Gets the Bolt Define By value at a given solution step.                           |
| `SetDefineBy`               | Sets the Bolt Define By value for a given solution step.                          |
| `Delete`                    | Run the Delete action.                                                            |
| `GetChildren`               | Gets the list of children, filtered by type.                                      |
| `GetChildren`               | Gets the list of children, filtered by type.                                      |
| `AddComment`                | Creates a new child Comment.                                                      |
| `AddFigure`                 | Creates a new child Figure.                                                       |
| `AddImage`                  | Creates a new child Image.                                                        |
| `Activate`                  | Activate the current object.                                                      |
| `CopyTo`                    | Copies all visible properties from this object to another.                        |
| `Duplicate`                 | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`   | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`       | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`            | Get a property by its unique name.                                                |
| `PropertyByAPIName`         | Get a property by its API name.                                                   |
| `CreateParameter`           | Creates a new parameter for a Property.                                           |
| `GetParameter`              | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------|---------------------------------------------------------------------------------------------|
| `DefineBy`                 | Gets a value indicating how the bolt pretension is defined at the analysis' current step.   |
| `InternalObject`           | Gets the internal object. For advanced usage only.                                          |
| `Increment`                | Gets the Increment.                                                                         |
| `Preadjustment`            | Gets the Preadjustment.                                                                     |
| `Preload`                  | Gets the Preload.                                                                           |
| `Tolerance`                | Gets or sets the Tolerance.                                                                 |
| `CoordinateSystemBehavior` | Gets or sets the CoordinateSystemBehavior.                                                  |
| `Formulation`              | Gets or sets the Formulation.                                                               |
| `SolveBehaviourType`       | Gets or sets the SolveBehaviourType.                                                        |
| `Suppressed`               | Gets or sets the Suppressed.                                                                |
| `CoordinateSystem`         | Gets or sets the CoordinateSystem.                                                          |
| `Location`                 | Gets or sets the Location.                                                                  |
| `DataModelObjectCategory`  | Gets the current DataModelObject's category.                                                |
| `Children`                 | Gets the list of children.                                                                  |
| `Comments`                 | Gets the list of associated comments.                                                       |
| `Figures`                  | Gets the list of associated figures.                                                        |
| `Images`                   | Gets the list of associated images.                                                         |
| `ReadOnly`                 | Gets or sets the ReadOnly.                                                                  |
| `InternalObject`           | Gets the internal object. For advanced usage only.                                          |
| `Properties`               | Gets the list of properties for this object.                                                |
| `VisibleProperties`        | Gets the list of properties that are visible for this object.                               |

<a id="property-detail"></a>

## Property detail

### *property* BoltPretension.DefineBy *: [Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy](../../../../Mechanical/DataModel/Enums/BoltLoadDefineBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a value indicating how the bolt pretension is defined at the analysis' current step.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPretensionBoltLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Increment *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Increment.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Preadjustment *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Preadjustment.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Preload *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Preload.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Tolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Tolerance.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.CoordinateSystemBehavior *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemBehavior](../../../../Mechanical/DataModel/Enums/CoordinateSystemBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemBehavior.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Formulation *: [Ansys.Mechanical.DataModel.Enums.FormulationType](../../../../Mechanical/DataModel/Enums/FormulationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FormulationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.SolveBehaviourType *: [Ansys.Mechanical.DataModel.Enums.SolveBehaviourType](../../../../Mechanical/DataModel/Enums/SolveBehaviourType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolveBehaviourType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolveBehaviourType.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### BoltPretension.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### BoltPretension.PromoteToCoordinateSystem()

Run the PromoteToCoordinateSystem action.

<!-- !! processed by numpydoc !! -->

### BoltPretension.GetDefineBy(stepNumber: System.Int32)

Gets the Bolt Define By value at a given solution step.

<!-- !! processed by numpydoc !! -->

### BoltPretension.SetDefineBy(stepNumber: System.Int32, type: [Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy](../../../../Mechanical/DataModel/Enums/BoltLoadDefineBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy))

Sets the Bolt Define By value for a given solution step.

<!-- !! processed by numpydoc !! -->

### BoltPretension.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### BoltPretension.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BoltPretension.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BoltPretension.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### BoltPretension.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### BoltPretension.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### BoltPretension.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### BoltPretension.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### BoltPretension.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### BoltPretension.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### BoltPretension.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### BoltPretension.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### BoltPretension.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### BoltPretension.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### BoltPretension.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### BoltPretension.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

