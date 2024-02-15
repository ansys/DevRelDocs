# SMARTCrackGrowth

### *class* SMARTCrackGrowth

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a SMARTCrackGrowth.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddCommandSnippet`](#SMARTCrackGrowth.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#SMARTCrackGrowth.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#SMARTCrackGrowth.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#SMARTCrackGrowth.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#SMARTCrackGrowth.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#SMARTCrackGrowth.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#SMARTCrackGrowth.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#SMARTCrackGrowth.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#SMARTCrackGrowth.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SMARTCrackGrowth.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#SMARTCrackGrowth.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#SMARTCrackGrowth.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#SMARTCrackGrowth.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#SMARTCrackGrowth.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#SMARTCrackGrowth.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`AutomaticTimeStepping`](../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#AutomaticTimeStepping)       | Gets or sets the AutomaticTimeStepping.                       |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`FailureCriteriaOption`](#SMARTCrackGrowth.FailureCriteriaOption)                                                  | Gets or sets the FailureCriteriaOption.                       |
| [`CriticalRate`](#SMARTCrackGrowth.CriticalRate)                                                                    | Gets or sets the CriticalRate.                                |
| [`StopValue`](#SMARTCrackGrowth.StopValue)                                                                          | Gets or sets the StopValue.                                   |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`CrackGrowthLaw`](#SMARTCrackGrowth.CrackGrowthLaw)                                                                | Gets the CrackGrowthLaw.                                      |
| [`Material`](Material.md#Material)                                                                                  | Gets or sets the Material.                                    |
| [`NumberOfCycles`](#SMARTCrackGrowth.NumberOfCycles)                                                                | Gets or sets the NumberOfCycles.                              |
| [`StressRatio`](Results/StressToolResults/StressRatio.md#StressRatio)                                               | Gets or sets the StressRatio.                                 |
| [`InitialTimeStep`](#SMARTCrackGrowth.InitialTimeStep)                                                              | Gets or sets the InitialTimeStep.                             |
| [`MaximumTimeStep`](#SMARTCrackGrowth.MaximumTimeStep)                                                              | Gets or sets the MaximumTimeStep.                             |
| [`MaxIncrementValue`](#SMARTCrackGrowth.MaxIncrementValue)                                                          | Gets or sets the MaxIncrementValue.                           |
| [`MinimumTimeStep`](#SMARTCrackGrowth.MinimumTimeStep)                                                              | Gets or sets the MinimumTimeStep.                             |
| [`MinIncrementValue`](#SMARTCrackGrowth.MinIncrementValue)                                                          | Gets or sets the MinIncrementValue.                           |
| [`CrackGrowthMethodology`](../../../Mechanical/DataModel/Enums/CrackGrowthMethodology.md#CrackGrowthMethodology)    | Gets or sets the CrackGrowthMethodology.                      |
| [`CrackGrowthOption`](../../../Mechanical/DataModel/Enums/CrackGrowthOption.md#CrackGrowthOption)                   | Gets or sets the CrackGrowthOption.                           |
| [`Method`](#SMARTCrackGrowth.Method)                                                                                | Gets the Method.                                              |
| [`Analysis`](Analysis.md#Analysis)                                                                                  | Gets the Analysis.                                            |
| [`MaxIncrementOfCrackExtension`](#SMARTCrackGrowth.MaxIncrementOfCrackExtension)                                    | Gets or sets the MaxIncrementOfCrackExtension.                |
| [`MeshCoarsening`](#SMARTCrackGrowth.MeshCoarsening)                                                                | Gets or sets the MeshCoarsening.                              |
| [`MinIncrementOfCrackExtension`](#SMARTCrackGrowth.MinIncrementOfCrackExtension)                                    | Gets or sets the MinIncrementOfCrackExtension.                |
| [`StopCriterion`](../../../Mechanical/DataModel/Enums/StopCriterion.md#StopCriterion)                               | Gets or sets the StopCriterion.                               |
| [`Suppressed`](#SMARTCrackGrowth.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`InitialCrack`](#SMARTCrackGrowth.InitialCrack)                                                                    | Gets or sets the InitialCrack.                                |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#SMARTCrackGrowth.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#SMARTCrackGrowth.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Figures`](#SMARTCrackGrowth.Figures)                                                                              | Gets the list of associated figures.                          |
| [`Images`](#SMARTCrackGrowth.Images)                                                                                | Gets the list of associated images.                           |
| [`ReadOnly`](#SMARTCrackGrowth.ReadOnly)                                                                            | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#SMARTCrackGrowth.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#SMARTCrackGrowth.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import SMARTCrackGrowth
```

## Property detail

### *property* SMARTCrackGrowth.AutomaticTimeStepping *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticTimeStepping.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.FailureCriteriaOption *: [Ansys.Mechanical.DataModel.Enums.DelaminationFailureCriteriaOption](../../../Mechanical/DataModel/Enums/DelaminationFailureCriteriaOption.md#DelaminationFailureCriteriaOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FailureCriteriaOption.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.CriticalRate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CriticalRate.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.StopValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StopValue.

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

### *property* SMARTCrackGrowth.MaxIncrementValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxIncrementValue.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.MinimumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.MinIncrementValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinIncrementValue.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.CrackGrowthMethodology *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthMethodology](../../../Mechanical/DataModel/Enums/CrackGrowthMethodology.md#CrackGrowthMethodology) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackGrowthMethodology.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.CrackGrowthOption *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthOption](../../../Mechanical/DataModel/Enums/CrackGrowthOption.md#CrackGrowthOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackGrowthOption.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.Method *: [Ansys.Mechanical.DataModel.Enums.DelaminationMethod](../../../Mechanical/DataModel/Enums/DelaminationMethod.md#DelaminationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.Analysis *: [Ansys.Mechanical.DataModel.Enums.DelaminationType](../../../Mechanical/DataModel/Enums/DelaminationType.md#DelaminationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Analysis.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.MaxIncrementOfCrackExtension *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthIncrementType](../../../Mechanical/DataModel/Enums/CrackGrowthIncrementType.md#CrackGrowthIncrementType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxIncrementOfCrackExtension.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.MeshCoarsening *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthMeshCoarsening](../../../Mechanical/DataModel/Enums/CrackGrowthMeshCoarsening.md#CrackGrowthMeshCoarsening) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshCoarsening.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.MinIncrementOfCrackExtension *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthIncrementType](../../../Mechanical/DataModel/Enums/CrackGrowthIncrementType.md#CrackGrowthIncrementType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinIncrementOfCrackExtension.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.StopCriterion *: [Ansys.Mechanical.DataModel.Enums.StopCriterion](../../../Mechanical/DataModel/Enums/StopCriterion.md#StopCriterion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StopCriterion.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.InitialCrack *: [Ansys.ACT.Automation.Mechanical.GenericCrack](GenericCrack.md#GenericCrack) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialCrack.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* SMARTCrackGrowth.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### SMARTCrackGrowth.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### SMARTCrackGrowth.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

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

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

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
