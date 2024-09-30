# `SMARTCrackGrowth`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.SMARTCrackGrowth"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.SMARTCrackGrowth

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SMARTCrackGrowth.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#SMARTCrackGrowth.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#SMARTCrackGrowth.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#SMARTCrackGrowth.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#SMARTCrackGrowth.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#SMARTCrackGrowth.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#SMARTCrackGrowth.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#SMARTCrackGrowth.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#SMARTCrackGrowth.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#SMARTCrackGrowth.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#SMARTCrackGrowth.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#SMARTCrackGrowth.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#SMARTCrackGrowth.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SMARTCrackGrowth.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#SMARTCrackGrowth.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#SMARTCrackGrowth.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#SMARTCrackGrowth.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Analysis`](#SMARTCrackGrowth.Analysis)                                         | Gets the Analysis.                                            |
| [`AutomaticTimeStepping`](#SMARTCrackGrowth.AutomaticTimeStepping)               | Gets or sets the AutomaticTimeStepping.                       |
| [`Children`](#SMARTCrackGrowth.Children)                                         | Gets the list of children.                                    |
| [`Comments`](#SMARTCrackGrowth.Comments)                                         | Gets the list of associated comments.                         |
| [`CrackGrowthLaw`](#SMARTCrackGrowth.CrackGrowthLaw)                             | Gets the CrackGrowthLaw.                                      |
| [`CrackGrowthMethodology`](#SMARTCrackGrowth.CrackGrowthMethodology)             | Gets or sets the CrackGrowthMethodology.                      |
| [`CrackGrowthOption`](#SMARTCrackGrowth.CrackGrowthOption)                       | Gets or sets the CrackGrowthOption.                           |
| [`CriticalRate`](#SMARTCrackGrowth.CriticalRate)                                 | Gets or sets the CriticalRate.                                |
| [`DataModelObjectCategory`](#SMARTCrackGrowth.DataModelObjectCategory)           | Gets the current DataModelObject’s category.                  |
| [`FailureCriteriaOption`](#SMARTCrackGrowth.FailureCriteriaOption)               | Gets or sets the FailureCriteriaOption.                       |
| [`Figures`](#SMARTCrackGrowth.Figures)                                           | Gets the list of associated figures.                          |
| [`Images`](#SMARTCrackGrowth.Images)                                             | Gets the list of associated images.                           |
| [`InitialCrack`](#SMARTCrackGrowth.InitialCrack)                                 | Gets or sets the InitialCrack.                                |
| [`InitialTimeStep`](#SMARTCrackGrowth.InitialTimeStep)                           | Gets or sets the InitialTimeStep.                             |
| [`InternalObject`](#SMARTCrackGrowth.InternalObject)                             | Gets the internal object. For advanced usage only.            |
| [`Material`](#SMARTCrackGrowth.Material)                                         | Gets or sets the Material.                                    |
| [`MaxIncrementOfCrackExtension`](#SMARTCrackGrowth.MaxIncrementOfCrackExtension) | Gets or sets the MaxIncrementOfCrackExtension.                |
| [`MaxIncrementValue`](#SMARTCrackGrowth.MaxIncrementValue)                       | Gets or sets the MaxIncrementValue.                           |
| [`MaximumTimeStep`](#SMARTCrackGrowth.MaximumTimeStep)                           | Gets or sets the MaximumTimeStep.                             |
| [`MeshCoarsening`](#SMARTCrackGrowth.MeshCoarsening)                             | Gets or sets the MeshCoarsening.                              |
| [`Method`](#SMARTCrackGrowth.Method)                                             | Gets the Method.                                              |
| [`MinIncrementOfCrackExtension`](#SMARTCrackGrowth.MinIncrementOfCrackExtension) | Gets or sets the MinIncrementOfCrackExtension.                |
| [`MinIncrementValue`](#SMARTCrackGrowth.MinIncrementValue)                       | Gets or sets the MinIncrementValue.                           |
| [`MinimumTimeStep`](#SMARTCrackGrowth.MinimumTimeStep)                           | Gets or sets the MinimumTimeStep.                             |
| [`NumberOfCycles`](#SMARTCrackGrowth.NumberOfCycles)                             | Gets or sets the NumberOfCycles.                              |
| [`Properties`](#SMARTCrackGrowth.Properties)                                     | Gets the list of properties for this object.                  |
| [`ReadOnly`](#SMARTCrackGrowth.ReadOnly)                                         | Gets or sets the ReadOnly.                                    |
| [`StopCriterion`](#SMARTCrackGrowth.StopCriterion)                               | Gets or sets the StopCriterion.                               |
| [`StopValue`](#SMARTCrackGrowth.StopValue)                                       | Gets or sets the StopValue.                                   |
| [`StressRatio`](#SMARTCrackGrowth.StressRatio)                                   | Gets or sets the StressRatio.                                 |
| [`Suppressed`](#SMARTCrackGrowth.Suppressed)                                     | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#SMARTCrackGrowth.VisibleProperties)                       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SMARTCrackGrowth.Analysis"></a>

### *property* SMARTCrackGrowth.Analysis *: [Ansys.Mechanical.DataModel.Enums.DelaminationType](../../../Mechanical/DataModel/Enums/DelaminationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DelaminationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Analysis.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.AutomaticTimeStepping"></a>

### *property* SMARTCrackGrowth.AutomaticTimeStepping *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticTimeStepping.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Children"></a>

### *property* SMARTCrackGrowth.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Comments"></a>

### *property* SMARTCrackGrowth.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.CrackGrowthLaw"></a>

### *property* SMARTCrackGrowth.CrackGrowthLaw *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackGrowthLaw.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.CrackGrowthMethodology"></a>

### *property* SMARTCrackGrowth.CrackGrowthMethodology *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthMethodology](../../../Mechanical/DataModel/Enums/CrackGrowthMethodology.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.CrackGrowthMethodology) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackGrowthMethodology.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.CrackGrowthOption"></a>

### *property* SMARTCrackGrowth.CrackGrowthOption *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthOption](../../../Mechanical/DataModel/Enums/CrackGrowthOption.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.CrackGrowthOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackGrowthOption.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.CriticalRate"></a>

### *property* SMARTCrackGrowth.CriticalRate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CriticalRate.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.DataModelObjectCategory"></a>

### *property* SMARTCrackGrowth.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.FailureCriteriaOption"></a>

### *property* SMARTCrackGrowth.FailureCriteriaOption *: [Ansys.Mechanical.DataModel.Enums.DelaminationFailureCriteriaOption](../../../Mechanical/DataModel/Enums/DelaminationFailureCriteriaOption.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DelaminationFailureCriteriaOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FailureCriteriaOption.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Figures"></a>

### *property* SMARTCrackGrowth.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Images"></a>

### *property* SMARTCrackGrowth.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.InitialCrack"></a>

### *property* SMARTCrackGrowth.InitialCrack *: [Ansys.ACT.Automation.Mechanical.GenericCrack](../../../../../v241/Ansys/ACT/Automation/Mechanical/GenericCrack.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.GenericCrack) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialCrack.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.InitialTimeStep"></a>

### *property* SMARTCrackGrowth.InitialTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.InternalObject"></a>

### *property* SMARTCrackGrowth.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDelaminationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Material"></a>

### *property* SMARTCrackGrowth.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MaxIncrementOfCrackExtension"></a>

### *property* SMARTCrackGrowth.MaxIncrementOfCrackExtension *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthIncrementType](../../../Mechanical/DataModel/Enums/CrackGrowthIncrementType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.CrackGrowthIncrementType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxIncrementOfCrackExtension.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MaxIncrementValue"></a>

### *property* SMARTCrackGrowth.MaxIncrementValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxIncrementValue.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MaximumTimeStep"></a>

### *property* SMARTCrackGrowth.MaximumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MeshCoarsening"></a>

### *property* SMARTCrackGrowth.MeshCoarsening *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthMeshCoarsening](../../../Mechanical/DataModel/Enums/CrackGrowthMeshCoarsening.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.CrackGrowthMeshCoarsening) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshCoarsening.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Method"></a>

### *property* SMARTCrackGrowth.Method *: [Ansys.Mechanical.DataModel.Enums.DelaminationMethod](../../../Mechanical/DataModel/Enums/DelaminationMethod.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DelaminationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MinIncrementOfCrackExtension"></a>

### *property* SMARTCrackGrowth.MinIncrementOfCrackExtension *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthIncrementType](../../../Mechanical/DataModel/Enums/CrackGrowthIncrementType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.CrackGrowthIncrementType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinIncrementOfCrackExtension.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MinIncrementValue"></a>

### *property* SMARTCrackGrowth.MinIncrementValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinIncrementValue.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MinimumTimeStep"></a>

### *property* SMARTCrackGrowth.MinimumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.NumberOfCycles"></a>

### *property* SMARTCrackGrowth.NumberOfCycles *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfCycles.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Properties"></a>

### *property* SMARTCrackGrowth.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.ReadOnly"></a>

### *property* SMARTCrackGrowth.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.StopCriterion"></a>

### *property* SMARTCrackGrowth.StopCriterion *: [Ansys.Mechanical.DataModel.Enums.StopCriterion](../../../Mechanical/DataModel/Enums/StopCriterion.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.StopCriterion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StopCriterion.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.StopValue"></a>

### *property* SMARTCrackGrowth.StopValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StopValue.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.StressRatio"></a>

### *property* SMARTCrackGrowth.StressRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressRatio.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Suppressed"></a>

### *property* SMARTCrackGrowth.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.VisibleProperties"></a>

### *property* SMARTCrackGrowth.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SMARTCrackGrowth.Activate"></a>

### SMARTCrackGrowth.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.AddCommandSnippet"></a>

### SMARTCrackGrowth.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.AddComment"></a>

### SMARTCrackGrowth.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.AddFigure"></a>

### SMARTCrackGrowth.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.AddImage"></a>

### SMARTCrackGrowth.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.CopyTo"></a>

### SMARTCrackGrowth.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.CreateParameter"></a>

### SMARTCrackGrowth.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Delete"></a>

### SMARTCrackGrowth.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Duplicate"></a>

### SMARTCrackGrowth.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GetChildren"></a>

### SMARTCrackGrowth.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GetParameter"></a>

### SMARTCrackGrowth.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GroupAllSimilarChildren"></a>

### SMARTCrackGrowth.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GroupSimilarObjects"></a>

### SMARTCrackGrowth.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.PropertyByAPIName"></a>

### SMARTCrackGrowth.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.PropertyByName"></a>

### SMARTCrackGrowth.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.RemoveParameter"></a>

### SMARTCrackGrowth.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

