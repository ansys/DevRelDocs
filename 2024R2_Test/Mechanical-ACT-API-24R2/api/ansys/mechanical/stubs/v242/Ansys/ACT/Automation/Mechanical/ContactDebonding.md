# `ContactDebonding`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ContactDebonding

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactDebonding.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `AddCommandSnippet`       | Creates a new CommandSnippet                                                      |
| `Delete`                  | Run the Delete action.                                                            |
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
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Material`                | Gets or sets the Material.                                    |
| `CriticalRate`            | Gets or sets the CriticalRate.                                |
| `InitialTimeStep`         | Gets or sets the InitialTimeStep.                             |
| `MaximumTimeStep`         | Gets or sets the MaximumTimeStep.                             |
| `MinimumTimeStep`         | Gets or sets the MinimumTimeStep.                             |
| `Method`                  | Gets or sets the Method.                                      |
| `Type`                    | Gets the Type.                                                |
| `GenerationMethod`        | Gets or sets the GenerationMethod.                            |
| `Suppressed`              | Gets or sets the Suppressed.                                  |
| `ContactRegion`           | Gets or sets the ContactRegion.                               |
| `InitialCrack`            | Gets or sets the InitialCrack.                                |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* ContactDebonding.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDelaminationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactDebonding.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* ContactDebonding.CriticalRate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CriticalRate.

<!-- !! processed by numpydoc !! -->

### *property* ContactDebonding.InitialTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTimeStep.

<!-- !! processed by numpydoc !! -->

### *property* ContactDebonding.MaximumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumTimeStep.

<!-- !! processed by numpydoc !! -->

### *property* ContactDebonding.MinimumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

### *property* ContactDebonding.Method *: [Ansys.Mechanical.DataModel.Enums.DelaminationMethod](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DelaminationMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DelaminationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

### *property* ContactDebonding.Type *: [Ansys.Mechanical.DataModel.Enums.DelaminationType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DelaminationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DelaminationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* ContactDebonding.GenerationMethod *: [Ansys.Mechanical.DataModel.Enums.DelaminationGenerationMethod](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DelaminationGenerationMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DelaminationGenerationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerationMethod.

<!-- !! processed by numpydoc !! -->

### *property* ContactDebonding.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ContactDebonding.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

### *property* ContactDebonding.InitialCrack *: [Ansys.ACT.Automation.Mechanical.GenericCrack](../../../../../v241/Ansys/ACT/Automation/Mechanical/GenericCrack.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.GenericCrack) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialCrack.

<!-- !! processed by numpydoc !! -->

### *property* ContactDebonding.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* ContactDebonding.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactDebonding.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ContactDebonding.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### ContactDebonding.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### ContactDebonding.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ContactDebonding.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ContactDebonding.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ContactDebonding.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ContactDebonding.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ContactDebonding.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ContactDebonding.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ContactDebonding.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### ContactDebonding.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ContactDebonding.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ContactDebonding.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

