# `CoSimulationPin`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoSimulationPin

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CoSimulationPin.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `Scope`                   | Gets or sets the Joint through Scope.                         |
| `DOF`                     | Gets or sets the DOF.                                         |
| `JointType`               | Gets or sets the Joint Type.                                  |
| `PinBehavior`             | Gets or sets the Pin Behavior.                                |
| `PinNature`               | Gets or sets the Pin Nature.                                  |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Suppressed`              | Gets or sets the Suppressed.                                  |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* CoSimulationPin.Scope *: [Ansys.ACT.Automation.Mechanical.Connections.Joint](Connections/Joint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Joint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Joint through Scope.

<!-- !! processed by numpydoc !! -->

### *property* CoSimulationPin.DOF *: [Ansys.Mechanical.DataModel.Enums.KinematicDOF](../../../Mechanical/DataModel/Enums/KinematicDOF.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KinematicDOF) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DOF.

<!-- !! processed by numpydoc !! -->

### *property* CoSimulationPin.JointType *: [Ansys.Mechanical.DataModel.Enums.JointType](../../../Mechanical/DataModel/Enums/JointType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Joint Type.

<!-- !! processed by numpydoc !! -->

### *property* CoSimulationPin.PinBehavior *: [Ansys.Mechanical.DataModel.Enums.PinBehavior](../../../Mechanical/DataModel/Enums/PinBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PinBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Pin Behavior.

<!-- !! processed by numpydoc !! -->

### *property* CoSimulationPin.PinNature *: [Ansys.Mechanical.DataModel.Enums.PinNature](../../../Mechanical/DataModel/Enums/PinNature.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PinNature) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Pin Nature.

<!-- !! processed by numpydoc !! -->

### *property* CoSimulationPin.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSimplorerPinAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CoSimulationPin.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* CoSimulationPin.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* CoSimulationPin.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CoSimulationPin.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CoSimulationPin.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* CoSimulationPin.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### CoSimulationPin.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### CoSimulationPin.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CoSimulationPin.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CoSimulationPin.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### CoSimulationPin.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### CoSimulationPin.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### CoSimulationPin.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### CoSimulationPin.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### CoSimulationPin.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### CoSimulationPin.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### CoSimulationPin.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### CoSimulationPin.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### CoSimulationPin.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

