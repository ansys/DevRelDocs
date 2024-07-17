# `FatigueTool`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.FatigueTool"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.FatigueTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FatigueTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#FatigueTool.EvaluateAllResults)                         | Run the EvaluateAllResults action.                                                |
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

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`OneCycleIsEqualTo`](#FatigueTool.OneCycleIsEqualTo)               | Gets or sets the OneCycleIsEqualTo.                           |
| [`CustomUnitsName`](#FatigueTool.CustomUnitsName)                   | Gets or sets the Custom Units Name.                           |
| [`InternalObject`](#id0)                                            | Gets the internal object. For advanced usage only.            |
| [`FatigueStrengthFactor`](#FatigueTool.FatigueStrengthFactor)       | Gets or sets the FatigueStrengthFactor.                       |
| [`HistoryDataLocation`](#FatigueTool.HistoryDataLocation)           | Gets or sets the HistoryDataLocation.                         |
| [`InfiniteLife`](#FatigueTool.InfiniteLife)                         | Gets or sets the InfiniteLife.                                |
| [`LoadingRatio`](#FatigueTool.LoadingRatio)                         | Gets or sets the LoadingRatio.                                |
| [`MaximumDataPointsToPlot`](#FatigueTool.MaximumDataPointsToPlot)   | Gets or sets the MaximumDataPointsToPlot.                     |
| [`BinSize`](#FatigueTool.BinSize)                                   | Gets or sets the BinSize.                                     |
| [`ScaleFactor`](#FatigueTool.ScaleFactor)                           | Gets or sets the ScaleFactor.                                 |
| [`ExposureDuration`](#FatigueTool.ExposureDuration)                 | Gets or sets the ExposureDuration.                            |
| [`Frequency`](#FatigueTool.Frequency)                               | Gets or sets the Frequency.                                   |
| [`DisplayTime`](#FatigueTool.DisplayTime)                           | Gets or sets the DisplayTime.                                 |
| [`MeanStressTheory`](#FatigueTool.MeanStressTheory)                 | Gets or sets the MeanStressTheory.                            |
| [`FrequencySelection`](#FatigueTool.FrequencySelection)             | Gets or sets the FrequencySelection.                          |
| [`LoadingType`](#FatigueTool.LoadingType)                           | Gets or sets the LoadingType.                                 |
| [`MethodSelection`](#FatigueTool.MethodSelection)                   | Gets or sets the MethodSelection.                             |
| [`ResultsInput`](#FatigueTool.ResultsInput)                         | Gets or sets the ResultsInput.                                |
| [`StressComponent`](#FatigueTool.StressComponent)                   | Gets or sets the StressComponent.                             |
| [`AnalysisType`](#FatigueTool.AnalysisType)                         | Gets or sets the AnalysisType.                                |
| [`UnitsName`](#FatigueTool.UnitsName)                               | Gets or sets the UnitsName.                                   |
| [`UseQuickRainflowCounting`](#FatigueTool.UseQuickRainflowCounting) | Gets or sets the UseQuickRainflowCounting.                    |
| [`DataModelObjectCategory`](#FatigueTool.DataModelObjectCategory)   | Gets the current DataModelObject’s category.                  |
| [`Children`](#FatigueTool.Children)                                 | Gets the list of children.                                    |
| [`Comments`](#FatigueTool.Comments)                                 | Gets the list of associated comments.                         |
| [`Images`](#FatigueTool.Images)                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#FatigueTool.Properties)                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#FatigueTool.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FatigueTool.OneCycleIsEqualTo"></a>

### *property* FatigueTool.OneCycleIsEqualTo *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OneCycleIsEqualTo.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.CustomUnitsName"></a>

### *property* FatigueTool.CustomUnitsName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Custom Units Name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.InternalObject"></a>

### *property* FatigueTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFatigueToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.FatigueStrengthFactor"></a>

### *property* FatigueTool.FatigueStrengthFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FatigueStrengthFactor.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.HistoryDataLocation"></a>

### *property* FatigueTool.HistoryDataLocation *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HistoryDataLocation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.InfiniteLife"></a>

### *property* FatigueTool.InfiniteLife *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InfiniteLife.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.LoadingRatio"></a>

### *property* FatigueTool.LoadingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadingRatio.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.MaximumDataPointsToPlot"></a>

### *property* FatigueTool.MaximumDataPointsToPlot *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumDataPointsToPlot.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.BinSize"></a>

### *property* FatigueTool.BinSize *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BinSize.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.ScaleFactor"></a>

### *property* FatigueTool.ScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.ExposureDuration"></a>

### *property* FatigueTool.ExposureDuration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExposureDuration.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Frequency"></a>

### *property* FatigueTool.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.DisplayTime"></a>

### *property* FatigueTool.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.MeanStressTheory"></a>

### *property* FatigueTool.MeanStressTheory *: [Ansys.Mechanical.DataModel.Enums.MeanStressTheoryType](../../../Mechanical/DataModel/Enums/MeanStressTheoryType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeanStressTheoryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeanStressTheory.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.FrequencySelection"></a>

### *property* FatigueTool.FrequencySelection *: [Ansys.Mechanical.DataModel.Enums.FatigueFrequencySelection](../../../Mechanical/DataModel/Enums/FatigueFrequencySelection.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FatigueFrequencySelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencySelection.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.LoadingType"></a>

### *property* FatigueTool.LoadingType *: [Ansys.Mechanical.DataModel.Enums.FatigueLoadType](../../../Mechanical/DataModel/Enums/FatigueLoadType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FatigueLoadType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadingType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.MethodSelection"></a>

### *property* FatigueTool.MethodSelection *: [Ansys.Mechanical.DataModel.Enums.FatigueToolMethod](../../../Mechanical/DataModel/Enums/FatigueToolMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FatigueToolMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MethodSelection.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.ResultsInput"></a>

### *property* FatigueTool.ResultsInput *: [Ansys.Mechanical.DataModel.Enums.FatigueToolResultsInputType](../../../Mechanical/DataModel/Enums/FatigueToolResultsInputType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FatigueToolResultsInputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultsInput.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.StressComponent"></a>

### *property* FatigueTool.StressComponent *: [Ansys.Mechanical.DataModel.Enums.FatigueStressComponentType](../../../Mechanical/DataModel/Enums/FatigueStressComponentType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FatigueStressComponentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressComponent.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AnalysisType"></a>

### *property* FatigueTool.AnalysisType *: [Ansys.Mechanical.DataModel.Enums.FatigueToolAnalysisType](../../../Mechanical/DataModel/Enums/FatigueToolAnalysisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FatigueToolAnalysisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AnalysisType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.UnitsName"></a>

### *property* FatigueTool.UnitsName *: [Ansys.Mechanical.DataModel.Enums.LifeUnitsType](../../../Mechanical/DataModel/Enums/LifeUnitsType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LifeUnitsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UnitsName.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.UseQuickRainflowCounting"></a>

### *property* FatigueTool.UseQuickRainflowCounting *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseQuickRainflowCounting.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.DataModelObjectCategory"></a>

### *property* FatigueTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Children"></a>

### *property* FatigueTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Comments"></a>

### *property* FatigueTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Images"></a>

### *property* FatigueTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FatigueTool.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Properties"></a>

### *property* FatigueTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.VisibleProperties"></a>

### *property* FatigueTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueTool.EvaluateAllResults"></a>

### FatigueTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddBiaxialityIndication"></a>

### FatigueTool.AddBiaxialityIndication()

Creates a new FatigueBiaxialityIndication

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddDamage"></a>

### FatigueTool.AddDamage()

Creates a new FatigueDamage

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddDamageMatrix"></a>

### FatigueTool.AddDamageMatrix()

Creates a new FatigueDamageMatrix

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddEquivalentAlternativeStress"></a>

### FatigueTool.AddEquivalentAlternativeStress()

Creates a new FatigueEquivalentAlternativeStress

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddHysteresis"></a>

### FatigueTool.AddHysteresis()

Creates a new FatigueHysteresis

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddLife"></a>

### FatigueTool.AddLife()

Creates a new FatigueLife

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddRainflowMatrix"></a>

### FatigueTool.AddRainflowMatrix()

Creates a new FatigueRainflowMatrix

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddSafetyFactor"></a>

### FatigueTool.AddSafetyFactor()

Creates a new FatigueSafetyFactor

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddFatigueSensitivity"></a>

### FatigueTool.AddFatigueSensitivity()

Creates a new FatigueSensitivity

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Delete"></a>

### FatigueTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GetChildren"></a>

### FatigueTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FatigueTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddComment"></a>

### FatigueTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddImage"></a>

### FatigueTool.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Activate"></a>

### FatigueTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.CopyTo"></a>

### FatigueTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Duplicate"></a>

### FatigueTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GroupAllSimilarChildren"></a>

### FatigueTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GroupSimilarObjects"></a>

### FatigueTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.PropertyByName"></a>

### FatigueTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.PropertyByAPIName"></a>

### FatigueTool.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.CreateParameter"></a>

### FatigueTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GetParameter"></a>

### FatigueTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.RemoveParameter"></a>

### FatigueTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

