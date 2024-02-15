# FatigueTool

### *class* FatigueTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueTool.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`EvaluateAllResults`](#FatigueTool.EvaluateAllResults)                         | Run the EvaluateAllResults action.                                                |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddBiaxialityIndication`](#FatigueTool.AddBiaxialityIndication)               | Creates a new FatigueBiaxialityIndication                                         |
| [`AddDamage`](#FatigueTool.AddDamage)                                           | Creates a new FatigueDamage                                                       |
| [`AddDamageMatrix`](#FatigueTool.AddDamageMatrix)                               | Creates a new FatigueDamageMatrix                                                 |
| [`AddEquivalentAlternativeStress`](#FatigueTool.AddEquivalentAlternativeStress) | Creates a new FatigueEquivalentAlternativeStress                                  |
| [`AddHysteresis`](#FatigueTool.AddHysteresis)                                   | Creates a new FatigueHysteresis                                                   |
| [`AddLife`](#FatigueTool.AddLife)                                               | Creates a new FatigueLife                                                         |
| [`AddRainflowMatrix`](#FatigueTool.AddRainflowMatrix)                           | Creates a new FatigueRainflowMatrix                                               |
| [`AddSafetyFactor`](#FatigueTool.AddSafetyFactor)                               | Creates a new FatigueSafetyFactor                                                 |
| [`AddFatigueSensitivity`](#FatigueTool.AddFatigueSensitivity)                   | Creates a new FatigueSensitivity                                                  |
| [`Delete`](#FatigueTool.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FatigueTool.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddImage`](#FatigueTool.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#FatigueTool.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#FatigueTool.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FatigueTool.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FatigueTool.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueTool.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FatigueTool.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FatigueTool.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#FatigueTool.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FatigueTool.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FatigueTool.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`OneCycleIsEqualTo`](#FatigueTool.OneCycleIsEqualTo)                                                               | Gets or sets the OneCycleIsEqualTo.                           |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`CustomUnitsName`](#FatigueTool.CustomUnitsName)                                                                   | Gets or sets the Custom Units Name.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`FatigueStrengthFactor`](#FatigueTool.FatigueStrengthFactor)                                                       | Gets or sets the FatigueStrengthFactor.                       |
| [`HistoryDataLocation`](#FatigueTool.HistoryDataLocation)                                                           | Gets or sets the HistoryDataLocation.                         |
| [`InfiniteLife`](#FatigueTool.InfiniteLife)                                                                         | Gets or sets the InfiniteLife.                                |
| [`LoadingRatio`](#FatigueTool.LoadingRatio)                                                                         | Gets or sets the LoadingRatio.                                |
| [`MaximumDataPointsToPlot`](#FatigueTool.MaximumDataPointsToPlot)                                                   | Gets or sets the MaximumDataPointsToPlot.                     |
| [`BinSize`](#FatigueTool.BinSize)                                                                                   | Gets or sets the BinSize.                                     |
| [`ScaleFactor`](#FatigueTool.ScaleFactor)                                                                           | Gets or sets the ScaleFactor.                                 |
| [`ExposureDuration`](#FatigueTool.ExposureDuration)                                                                 | Gets or sets the ExposureDuration.                            |
| [`Frequency`](#FatigueTool.Frequency)                                                                               | Gets or sets the Frequency.                                   |
| [`DisplayTime`](#FatigueTool.DisplayTime)                                                                           | Gets or sets the DisplayTime.                                 |
| [`MeanStressTheory`](#FatigueTool.MeanStressTheory)                                                                 | Gets or sets the MeanStressTheory.                            |
| [`FrequencySelection`](#FatigueTool.FrequencySelection)                                                             | Gets or sets the FrequencySelection.                          |
| [`LoadingType`](#FatigueTool.LoadingType)                                                                           | Gets or sets the LoadingType.                                 |
| [`MethodSelection`](#FatigueTool.MethodSelection)                                                                   | Gets or sets the MethodSelection.                             |
| [`ResultsInput`](#FatigueTool.ResultsInput)                                                                         | Gets or sets the ResultsInput.                                |
| [`StressComponent`](#FatigueTool.StressComponent)                                                                   | Gets or sets the StressComponent.                             |
| [`AnalysisType`](../../../Mechanical/DataModel/Enums/GeometryImportPreference/AnalysisType.md#AnalysisType)         | Gets or sets the AnalysisType.                                |
| [`UnitsName`](#FatigueTool.UnitsName)                                                                               | Gets or sets the UnitsName.                                   |
| [`UseQuickRainflowCounting`](#FatigueTool.UseQuickRainflowCounting)                                                 | Gets or sets the UseQuickRainflowCounting.                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#FatigueTool.Children)                                                                                 | Gets the list of children.                                    |
| [`Comments`](#FatigueTool.Comments)                                                                                 | Gets the list of associated comments.                         |
| [`Images`](#FatigueTool.Images)                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#FatigueTool.Properties)                                                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#FatigueTool.VisibleProperties)                                                               | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import FatigueTool
```

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

### *property* FatigueTool.MeanStressTheory *: [Ansys.Mechanical.DataModel.Enums.MeanStressTheoryType](../../../Mechanical/DataModel/Enums/MeanStressTheoryType.md#MeanStressTheoryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeanStressTheory.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.FrequencySelection *: [Ansys.Mechanical.DataModel.Enums.FatigueFrequencySelection](../../../Mechanical/DataModel/Enums/FatigueFrequencySelection.md#FatigueFrequencySelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencySelection.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.LoadingType *: [Ansys.Mechanical.DataModel.Enums.FatigueLoadType](../../../Mechanical/DataModel/Enums/FatigueLoadType.md#FatigueLoadType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadingType.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.MethodSelection *: [Ansys.Mechanical.DataModel.Enums.FatigueToolMethod](../../../Mechanical/DataModel/Enums/FatigueToolMethod.md#FatigueToolMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MethodSelection.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.ResultsInput *: [Ansys.Mechanical.DataModel.Enums.FatigueToolResultsInputType](../../../Mechanical/DataModel/Enums/FatigueToolResultsInputType.md#FatigueToolResultsInputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultsInput.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.StressComponent *: [Ansys.Mechanical.DataModel.Enums.FatigueStressComponentType](../../../Mechanical/DataModel/Enums/FatigueStressComponentType.md#FatigueStressComponentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressComponent.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.AnalysisType *: [Ansys.Mechanical.DataModel.Enums.FatigueToolAnalysisType](../../../Mechanical/DataModel/Enums/FatigueToolAnalysisType.md#FatigueToolAnalysisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AnalysisType.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.UnitsName *: [Ansys.Mechanical.DataModel.Enums.LifeUnitsType](../../../Mechanical/DataModel/Enums/LifeUnitsType.md#LifeUnitsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UnitsName.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.UseQuickRainflowCounting *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseQuickRainflowCounting.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FatigueTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### FatigueTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FatigueTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FatigueTool.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

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

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

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
