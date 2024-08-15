# `SMARTCrackGrowth`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.SMARTCrackGrowth

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SMARTCrackGrowth.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `AddCommandSnippet`       | Creates a new CommandSnippet                                                      |
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
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
|--------------------------------|---------------------------------------------------------------|
| `AutomaticTimeStepping`        | Gets or sets the AutomaticTimeStepping.                       |
| `FailureCriteriaOption`        | Gets or sets the FailureCriteriaOption.                       |
| `CriticalRate`                 | Gets or sets the CriticalRate.                                |
| `StopValue`                    | Gets or sets the StopValue.                                   |
| `MaxIncrementValue`            | Gets or sets the MaxIncrementValue.                           |
| `MinIncrementValue`            | Gets or sets the MinIncrementValue.                           |
| `InternalObject`               | Gets the internal object. For advanced usage only.            |
| `CrackGrowthLaw`               | Gets the CrackGrowthLaw.                                      |
| `Material`                     | Gets or sets the Material.                                    |
| `NumberOfCycles`               | Gets or sets the NumberOfCycles.                              |
| `StressRatio`                  | Gets or sets the StressRatio.                                 |
| `InitialTimeStep`              | Gets or sets the InitialTimeStep.                             |
| `MaximumTimeStep`              | Gets or sets the MaximumTimeStep.                             |
| `MinimumTimeStep`              | Gets or sets the MinimumTimeStep.                             |
| `CrackGrowthMethodology`       | Gets or sets the CrackGrowthMethodology.                      |
| `CrackGrowthOption`            | Gets or sets the CrackGrowthOption.                           |
| `Method`                       | Gets the Method.                                              |
| `Analysis`                     | Gets the Analysis.                                            |
| `MaxIncrementOfCrackExtension` | Gets or sets the MaxIncrementOfCrackExtension.                |
| `MeshCoarsening`               | Gets or sets the MeshCoarsening.                              |
| `MinIncrementOfCrackExtension` | Gets or sets the MinIncrementOfCrackExtension.                |
| `StopCriterion`                | Gets or sets the StopCriterion.                               |
| `Suppressed`                   | Gets or sets the Suppressed.                                  |
| `InitialCrack`                 | Gets or sets the InitialCrack.                                |
| `DataModelObjectCategory`      | Gets the current DataModelObject's category.                  |
| `Children`                     | Gets the list of children.                                    |
| `Comments`                     | Gets the list of associated comments.                         |
| `Figures`                      | Gets the list of associated figures.                          |
| `Images`                       | Gets the list of associated images.                           |
| `ReadOnly`                     | Gets or sets the ReadOnly.                                    |
| `InternalObject`               | Gets the internal object. For advanced usage only.            |
| `Properties`                   | Gets the list of properties for this object.                  |
| `VisibleProperties`            | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* SMARTCrackGrowth.AutomaticTimeStepping *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../../v241/Ansys/Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticTimeStepping.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.FailureCriteriaOption *: [Ansys.Mechanical.DataModel.Enums.DelaminationFailureCriteriaOption](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DelaminationFailureCriteriaOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DelaminationFailureCriteriaOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FailureCriteriaOption.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.CriticalRate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CriticalRate.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.StopValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StopValue.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.MaxIncrementValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxIncrementValue.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.MinIncrementValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinIncrementValue.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDelaminationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.CrackGrowthLaw *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackGrowthLaw.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.NumberOfCycles *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfCycles.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.StressRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressRatio.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.InitialTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTimeStep.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.MaximumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumTimeStep.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.MinimumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.CrackGrowthMethodology *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthMethodology](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CrackGrowthMethodology.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackGrowthMethodology) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackGrowthMethodology.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.CrackGrowthOption *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthOption](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CrackGrowthOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackGrowthOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackGrowthOption.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.Method *: [Ansys.Mechanical.DataModel.Enums.DelaminationMethod](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DelaminationMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DelaminationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.Analysis *: [Ansys.Mechanical.DataModel.Enums.DelaminationType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DelaminationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DelaminationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Analysis.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.MaxIncrementOfCrackExtension *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthIncrementType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CrackGrowthIncrementType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackGrowthIncrementType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxIncrementOfCrackExtension.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.MeshCoarsening *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthMeshCoarsening](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CrackGrowthMeshCoarsening.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackGrowthMeshCoarsening) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshCoarsening.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.MinIncrementOfCrackExtension *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthIncrementType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CrackGrowthIncrementType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackGrowthIncrementType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinIncrementOfCrackExtension.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.StopCriterion *: [Ansys.Mechanical.DataModel.Enums.StopCriterion](../../../../../v241/Ansys/Mechanical/DataModel/Enums/StopCriterion.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StopCriterion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StopCriterion.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.InitialCrack *: [Ansys.ACT.Automation.Mechanical.GenericCrack](../../../../../v241/Ansys/ACT/Automation/Mechanical/GenericCrack.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.GenericCrack) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialCrack.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### SMARTCrackGrowth.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

