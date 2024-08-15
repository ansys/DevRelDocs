# `FatigueTool`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.FatigueTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FatigueTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------|-----------------------------------------------------------------------------------|
| `EvaluateAllResults`             | Run the EvaluateAllResults action.                                                |
| `AddBiaxialityIndication`        | Creates a new FatigueBiaxialityIndication                                         |
| `AddDamage`                      | Creates a new FatigueDamage                                                       |
| `AddDamageMatrix`                | Creates a new FatigueDamageMatrix                                                 |
| `AddEquivalentAlternativeStress` | Creates a new FatigueEquivalentAlternativeStress                                  |
| `AddHysteresis`                  | Creates a new FatigueHysteresis                                                   |
| `AddLife`                        | Creates a new FatigueLife                                                         |
| `AddRainflowMatrix`              | Creates a new FatigueRainflowMatrix                                               |
| `AddSafetyFactor`                | Creates a new FatigueSafetyFactor                                                 |
| `AddFatigueSensitivity`          | Creates a new FatigueSensitivity                                                  |
| `Delete`                         | Run the Delete action.                                                            |
| `GetChildren`                    | Gets the list of children, filtered by type.                                      |
| `GetChildren`                    | Gets the list of children, filtered by type.                                      |
| `AddComment`                     | Creates a new child Comment.                                                      |
| `AddImage`                       | Creates a new child Image.                                                        |
| `Activate`                       | Activate the current object.                                                      |
| `CopyTo`                         | Copies all visible properties from this object to another.                        |
| `Duplicate`                      | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`        | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`            | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`                 | Get a property by its unique name.                                                |
| `PropertyByAPIName`              | Get a property by its API name.                                                   |
| `CreateParameter`                | Creates a new parameter for a Property.                                           |
| `GetParameter`                   | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`                | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------|---------------------------------------------------------------|
| `OneCycleIsEqualTo`        | Gets or sets the OneCycleIsEqualTo.                           |
| `CustomUnitsName`          | Gets or sets the Custom Units Name.                           |
| `InternalObject`           | Gets the internal object. For advanced usage only.            |
| `FatigueStrengthFactor`    | Gets or sets the FatigueStrengthFactor.                       |
| `HistoryDataLocation`      | Gets or sets the HistoryDataLocation.                         |
| `InfiniteLife`             | Gets or sets the InfiniteLife.                                |
| `LoadingRatio`             | Gets or sets the LoadingRatio.                                |
| `MaximumDataPointsToPlot`  | Gets or sets the MaximumDataPointsToPlot.                     |
| `BinSize`                  | Gets or sets the BinSize.                                     |
| `ScaleFactor`              | Gets or sets the ScaleFactor.                                 |
| `ExposureDuration`         | Gets or sets the ExposureDuration.                            |
| `Frequency`                | Gets or sets the Frequency.                                   |
| `DisplayTime`              | Gets or sets the DisplayTime.                                 |
| `MeanStressTheory`         | Gets or sets the MeanStressTheory.                            |
| `FrequencySelection`       | Gets or sets the FrequencySelection.                          |
| `LoadingType`              | Gets or sets the LoadingType.                                 |
| `MethodSelection`          | Gets or sets the MethodSelection.                             |
| `ResultsInput`             | Gets or sets the ResultsInput.                                |
| `StressComponent`          | Gets or sets the StressComponent.                             |
| `AnalysisType`             | Gets or sets the AnalysisType.                                |
| `UnitsName`                | Gets or sets the UnitsName.                                   |
| `UseQuickRainflowCounting` | Gets or sets the UseQuickRainflowCounting.                    |
| `DataModelObjectCategory`  | Gets the current DataModelObject's category.                  |
| `Children`                 | Gets the list of children.                                    |
| `Comments`                 | Gets the list of associated comments.                         |
| `Images`                   | Gets the list of associated images.                           |
| `InternalObject`           | Gets the internal object. For advanced usage only.            |
| `Properties`               | Gets the list of properties for this object.                  |
| `VisibleProperties`        | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* FatigueTool.OneCycleIsEqualTo *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OneCycleIsEqualTo.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.CustomUnitsName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Custom Units Name.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFatigueToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.FatigueStrengthFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FatigueStrengthFactor.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.HistoryDataLocation *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HistoryDataLocation.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.InfiniteLife *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InfiniteLife.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.LoadingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadingRatio.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.MaximumDataPointsToPlot *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumDataPointsToPlot.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.BinSize *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BinSize.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.ScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.ExposureDuration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExposureDuration.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.MeanStressTheory *: [Ansys.Mechanical.DataModel.Enums.MeanStressTheoryType](../../../Mechanical/DataModel/Enums/MeanStressTheoryType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeanStressTheoryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeanStressTheory.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.FrequencySelection *: [Ansys.Mechanical.DataModel.Enums.FatigueFrequencySelection](../../../Mechanical/DataModel/Enums/FatigueFrequencySelection.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FatigueFrequencySelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencySelection.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.LoadingType *: [Ansys.Mechanical.DataModel.Enums.FatigueLoadType](../../../Mechanical/DataModel/Enums/FatigueLoadType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FatigueLoadType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadingType.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.MethodSelection *: [Ansys.Mechanical.DataModel.Enums.FatigueToolMethod](../../../Mechanical/DataModel/Enums/FatigueToolMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FatigueToolMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MethodSelection.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.ResultsInput *: [Ansys.Mechanical.DataModel.Enums.FatigueToolResultsInputType](../../../Mechanical/DataModel/Enums/FatigueToolResultsInputType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FatigueToolResultsInputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultsInput.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.StressComponent *: [Ansys.Mechanical.DataModel.Enums.FatigueStressComponentType](../../../Mechanical/DataModel/Enums/FatigueStressComponentType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FatigueStressComponentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressComponent.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.AnalysisType *: [Ansys.Mechanical.DataModel.Enums.FatigueToolAnalysisType](../../../Mechanical/DataModel/Enums/FatigueToolAnalysisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FatigueToolAnalysisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AnalysisType.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.UnitsName *: [Ansys.Mechanical.DataModel.Enums.LifeUnitsType](../../../Mechanical/DataModel/Enums/LifeUnitsType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LifeUnitsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UnitsName.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.UseQuickRainflowCounting *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseQuickRainflowCounting.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### FatigueTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FatigueTool.AddBiaxialityIndication()

Creates a new FatigueBiaxialityIndication

<!-- !! processed by numpydoc !! -->

### FatigueTool.AddDamage()

Creates a new FatigueDamage

<!-- !! processed by numpydoc !! -->

### FatigueTool.AddDamageMatrix()

Creates a new FatigueDamageMatrix

<!-- !! processed by numpydoc !! -->

### FatigueTool.AddEquivalentAlternativeStress()

Creates a new FatigueEquivalentAlternativeStress

<!-- !! processed by numpydoc !! -->

### FatigueTool.AddHysteresis()

Creates a new FatigueHysteresis

<!-- !! processed by numpydoc !! -->

### FatigueTool.AddLife()

Creates a new FatigueLife

<!-- !! processed by numpydoc !! -->

### FatigueTool.AddRainflowMatrix()

Creates a new FatigueRainflowMatrix

<!-- !! processed by numpydoc !! -->

### FatigueTool.AddSafetyFactor()

Creates a new FatigueSafetyFactor

<!-- !! processed by numpydoc !! -->

### FatigueTool.AddFatigueSensitivity()

Creates a new FatigueSensitivity

<!-- !! processed by numpydoc !! -->

### FatigueTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FatigueTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FatigueTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FatigueTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FatigueTool.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### FatigueTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FatigueTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FatigueTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FatigueTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FatigueTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FatigueTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FatigueTool.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### FatigueTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### FatigueTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FatigueTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

