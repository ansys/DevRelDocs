# `FatigueTool`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.FatigueTool"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FatigueTool(internalObject: Any)

<a id="FatigueTool"></a>

### *class* FatigueTool(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FatigueTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FatigueTool.Activate)                                             | Activate the current object.                                                                |
| [`AddBiaxialityIndication`](#FatigueTool.AddBiaxialityIndication)               | Creates a new FatigueBiaxialityIndication                                                   |
| [`AddComment`](#FatigueTool.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddDamage`](#FatigueTool.AddDamage)                                           | Creates a new FatigueDamage                                                                 |
| [`AddDamageMatrix`](#FatigueTool.AddDamageMatrix)                               | Creates a new FatigueDamageMatrix                                                           |
| [`AddEquivalentAlternativeStress`](#FatigueTool.AddEquivalentAlternativeStress) | Creates a new FatigueEquivalentAlternativeStress                                            |
| [`AddFatigueSensitivity`](#FatigueTool.AddFatigueSensitivity)                   | Creates a new FatigueSensitivity                                                            |
| [`AddHysteresis`](#FatigueTool.AddHysteresis)                                   | Creates a new FatigueHysteresis                                                             |
| [`AddImage`](#FatigueTool.AddImage)                                             | Creates a new child Image.                                                                  |
| [`AddLife`](#FatigueTool.AddLife)                                               | Creates a new FatigueLife                                                                   |
| [`AddRainflowMatrix`](#FatigueTool.AddRainflowMatrix)                           | Creates a new FatigueRainflowMatrix                                                         |
| [`AddSafetyFactor`](#FatigueTool.AddSafetyFactor)                               | Creates a new FatigueSafetyFactor                                                           |
| [`ClearGeneratedData`](#FatigueTool.ClearGeneratedData)                         | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#FatigueTool.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FatigueTool.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FatigueTool.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FatigueTool.CreateParameter)                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#FatigueTool.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FatigueTool.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#FatigueTool.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#FatigueTool.DuplicateWithoutResults)               | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#FatigueTool.Equals)                                                 | Equals method.                                                                              |
| [`EvaluateAllResults`](#FatigueTool.EvaluateAllResults)                         | Run the EvaluateAllResults action.                                                          |
| [`GetAPIName`](#FatigueTool.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#FatigueTool.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#FatigueTool.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FatigueTool.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FatigueTool.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#FatigueTool.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#FatigueTool.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FatigueTool.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#FatigueTool.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#FatigueTool.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FatigueTool.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#FatigueTool.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FatigueTool.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetUnitString`](#FatigueTool.GetUnitString)                                   | GetUnitString method.                                                                       |
| [`GetVisibleProperties`](#FatigueTool.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FatigueTool.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FatigueTool.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FatigueTool.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FatigueTool.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FatigueTool.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FatigueTool.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#FatigueTool.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#FatigueTool.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#FatigueTool.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#FatigueTool.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FatigueTool.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FatigueTool.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`AnalysisType`](#FatigueTool.AnalysisType)                         | Gets or sets the AnalysisType.                                |
| [`AttachedRefs`](#FatigueTool.AttachedRefs)                         | AttachedRefs property.                                        |
| [`BinSize`](#FatigueTool.BinSize)                                   | Gets or sets the BinSize.                                     |
| [`Children`](#FatigueTool.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#FatigueTool.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#FatigueTool.Comments)                                 | Gets the list of associated comments.                         |
| [`CustomUnitsName`](#FatigueTool.CustomUnitsName)                   | Gets or sets the Custom Units Name.                           |
| [`DataModelObjectCategory`](#FatigueTool.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`DisplayTime`](#FatigueTool.DisplayTime)                           | Gets or sets the DisplayTime.                                 |
| [`ExposureDuration`](#FatigueTool.ExposureDuration)                 | Gets or sets the ExposureDuration.                            |
| [`FatigueStrengthFactor`](#FatigueTool.FatigueStrengthFactor)       | Gets or sets the FatigueStrengthFactor.                       |
| [`Frequency`](#FatigueTool.Frequency)                               | Gets or sets the Frequency.                                   |
| [`FrequencySelection`](#FatigueTool.FrequencySelection)             | Gets or sets the FrequencySelection.                          |
| [`GroupingFolder`](#FatigueTool.GroupingFolder)                     | GroupingFolder property.                                      |
| [`HistoryDataLocation`](#FatigueTool.HistoryDataLocation)           | Gets or sets the HistoryDataLocation.                         |
| [`IconName`](#FatigueTool.IconName)                                 | IconName property.                                            |
| [`Images`](#FatigueTool.Images)                                     | Gets the list of associated images.                           |
| [`InfiniteLife`](#FatigueTool.InfiniteLife)                         | Gets or sets the InfiniteLife.                                |
| [`InternalObject`](#FatigueTool.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`LoadingRatio`](#FatigueTool.LoadingRatio)                         | Gets or sets the LoadingRatio.                                |
| [`LoadingType`](#FatigueTool.LoadingType)                           | Gets or sets the LoadingType.                                 |
| [`MaximumDataPointsToPlot`](#FatigueTool.MaximumDataPointsToPlot)   | Gets or sets the MaximumDataPointsToPlot.                     |
| [`MeanStressTheory`](#FatigueTool.MeanStressTheory)                 | Gets or sets the MeanStressTheory.                            |
| [`MethodSelection`](#FatigueTool.MethodSelection)                   | Gets or sets the MethodSelection.                             |
| [`Name`](#FatigueTool.Name)                                         | Name property.                                                |
| [`ObjectId`](#FatigueTool.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#FatigueTool.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#FatigueTool.ObjectTags)                             | ObjectTags property.                                          |
| [`OneCycleIsEqualTo`](#FatigueTool.OneCycleIsEqualTo)               | Gets or sets the OneCycleIsEqualTo.                           |
| [`Parent`](#FatigueTool.Parent)                                     | Parent property.                                              |
| [`Properties`](#FatigueTool.Properties)                             | Gets the list of properties for this object.                  |
| [`ResultsInput`](#FatigueTool.ResultsInput)                         | Gets or sets the ResultsInput.                                |
| [`ScaleFactor`](#FatigueTool.ScaleFactor)                           | Gets or sets the ScaleFactor.                                 |
| [`State`](#FatigueTool.State)                                       | State property.                                               |
| [`StressComponent`](#FatigueTool.StressComponent)                   | Gets or sets the StressComponent.                             |
| [`UnitsName`](#FatigueTool.UnitsName)                               | Gets or sets the UnitsName.                                   |
| [`UseQuickRainflowCounting`](#FatigueTool.UseQuickRainflowCounting) | Gets or sets the UseQuickRainflowCounting.                    |
| [`VisibleProperties`](#FatigueTool.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FatigueTool.AnalysisType"></a>

### *property* FatigueTool.AnalysisType *: [Ansys.Mechanical.DataModel.Enums.FatigueToolAnalysisType](../../../Mechanical/DataModel/Enums/FatigueToolAnalysisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FatigueToolAnalysisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AnalysisType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AttachedRefs"></a>

### *property* FatigueTool.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.BinSize"></a>

### *property* FatigueTool.BinSize *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BinSize.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Children"></a>

### *property* FatigueTool.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.ClsId"></a>

### *property* FatigueTool.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Comments"></a>

### *property* FatigueTool.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.CustomUnitsName"></a>

### *property* FatigueTool.CustomUnitsName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Custom Units Name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.DataModelObjectCategory"></a>

### *property* FatigueTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.DisplayTime"></a>

### *property* FatigueTool.DisplayTime *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.ExposureDuration"></a>

### *property* FatigueTool.ExposureDuration *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExposureDuration.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.FatigueStrengthFactor"></a>

### *property* FatigueTool.FatigueStrengthFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FatigueStrengthFactor.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Frequency"></a>

### *property* FatigueTool.Frequency *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.FrequencySelection"></a>

### *property* FatigueTool.FrequencySelection *: [Ansys.Mechanical.DataModel.Enums.FatigueFrequencySelection](../../../Mechanical/DataModel/Enums/FatigueFrequencySelection.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FatigueFrequencySelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrequencySelection.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GroupingFolder"></a>

### *property* FatigueTool.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.HistoryDataLocation"></a>

### *property* FatigueTool.HistoryDataLocation *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HistoryDataLocation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.IconName"></a>

### *property* FatigueTool.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Images"></a>

### *property* FatigueTool.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.InfiniteLife"></a>

### *property* FatigueTool.InfiniteLife *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InfiniteLife.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.InternalObject"></a>

### *property* FatigueTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFatigueToolAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.LoadingRatio"></a>

### *property* FatigueTool.LoadingRatio *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadingRatio.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.LoadingType"></a>

### *property* FatigueTool.LoadingType *: [Ansys.Mechanical.DataModel.Enums.FatigueLoadType](../../../Mechanical/DataModel/Enums/FatigueLoadType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FatigueLoadType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadingType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.MaximumDataPointsToPlot"></a>

### *property* FatigueTool.MaximumDataPointsToPlot *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumDataPointsToPlot.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.MeanStressTheory"></a>

### *property* FatigueTool.MeanStressTheory *: [Ansys.Mechanical.DataModel.Enums.MeanStressTheoryType](../../../Mechanical/DataModel/Enums/MeanStressTheoryType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeanStressTheoryType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeanStressTheory.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.MethodSelection"></a>

### *property* FatigueTool.MethodSelection *: [Ansys.Mechanical.DataModel.Enums.FatigueToolMethod](../../../Mechanical/DataModel/Enums/FatigueToolMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FatigueToolMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MethodSelection.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Name"></a>

### *property* FatigueTool.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.ObjectId"></a>

### *property* FatigueTool.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.ObjectState"></a>

### *property* FatigueTool.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.ObjectTags"></a>

### *property* FatigueTool.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.OneCycleIsEqualTo"></a>

### *property* FatigueTool.OneCycleIsEqualTo *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OneCycleIsEqualTo.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Parent"></a>

### *property* FatigueTool.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Properties"></a>

### *property* FatigueTool.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.ResultsInput"></a>

### *property* FatigueTool.ResultsInput *: [Ansys.Mechanical.DataModel.Enums.FatigueToolResultsInputType](../../../Mechanical/DataModel/Enums/FatigueToolResultsInputType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FatigueToolResultsInputType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultsInput.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.ScaleFactor"></a>

### *property* FatigueTool.ScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.State"></a>

### *property* FatigueTool.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.StressComponent"></a>

### *property* FatigueTool.StressComponent *: [Ansys.Mechanical.DataModel.Enums.FatigueStressComponentType](../../../Mechanical/DataModel/Enums/FatigueStressComponentType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FatigueStressComponentType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressComponent.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.UnitsName"></a>

### *property* FatigueTool.UnitsName *: [Ansys.Mechanical.DataModel.Enums.LifeUnitsType](../../../Mechanical/DataModel/Enums/LifeUnitsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LifeUnitsType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UnitsName.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.UseQuickRainflowCounting"></a>

### *property* FatigueTool.UseQuickRainflowCounting *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseQuickRainflowCounting.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.VisibleProperties"></a>

### *property* FatigueTool.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueTool.Activate"></a>

### FatigueTool.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddBiaxialityIndication"></a>

### FatigueTool.AddBiaxialityIndication() → [Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueBiaxialityIndication](Results/FatigueToolResults/FatigueBiaxialityIndication.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueBiaxialityIndication)

Creates a new FatigueBiaxialityIndication

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddComment"></a>

### FatigueTool.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddDamage"></a>

### FatigueTool.AddDamage() → [Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueDamage](Results/FatigueToolResults/FatigueDamage.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueDamage)

Creates a new FatigueDamage

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddDamageMatrix"></a>

### FatigueTool.AddDamageMatrix() → [Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueDamageMatrix](Results/FatigueToolResults/FatigueDamageMatrix.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueDamageMatrix)

Creates a new FatigueDamageMatrix

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddEquivalentAlternativeStress"></a>

### FatigueTool.AddEquivalentAlternativeStress() → [Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueEquivalentAlternativeStress](Results/FatigueToolResults/FatigueEquivalentAlternativeStress.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueEquivalentAlternativeStress)

Creates a new FatigueEquivalentAlternativeStress

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddFatigueSensitivity"></a>

### FatigueTool.AddFatigueSensitivity() → [Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueSensitivity](Results/FatigueToolResults/FatigueSensitivity.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueSensitivity)

Creates a new FatigueSensitivity

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddHysteresis"></a>

### FatigueTool.AddHysteresis() → [Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueHysteresis](Results/FatigueToolResults/FatigueHysteresis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueHysteresis)

Creates a new FatigueHysteresis

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddImage"></a>

### FatigueTool.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddLife"></a>

### FatigueTool.AddLife() → [Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueLife](Results/FatigueToolResults/FatigueLife.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueLife)

Creates a new FatigueLife

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddRainflowMatrix"></a>

### FatigueTool.AddRainflowMatrix() → [Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueRainflowMatrix](Results/FatigueToolResults/FatigueRainflowMatrix.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueRainflowMatrix)

Creates a new FatigueRainflowMatrix

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.AddSafetyFactor"></a>

### FatigueTool.AddSafetyFactor() → [Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueSafetyFactor](Results/FatigueToolResults/FatigueSafetyFactor.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueSafetyFactor)

Creates a new FatigueSafetyFactor

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.ClearGeneratedData"></a>

### FatigueTool.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Copy"></a>

### FatigueTool.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.CopyTo"></a>

### FatigueTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.CreateObjRef"></a>

### FatigueTool.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.CreateParameter"></a>

### FatigueTool.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Cut"></a>

### FatigueTool.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Delete"></a>

### FatigueTool.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Duplicate"></a>

### FatigueTool.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.DuplicateWithoutResults"></a>

### FatigueTool.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Equals"></a>

### FatigueTool.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.EvaluateAllResults"></a>

### FatigueTool.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GetAPIName"></a>

### FatigueTool.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GetAllProperties"></a>

### FatigueTool.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GetChildren"></a>

### FatigueTool.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FatigueTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GetDetailsView"></a>

### FatigueTool.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GetEnumName"></a>

### FatigueTool.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GetHashCode"></a>

### FatigueTool.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GetIconFile"></a>

### FatigueTool.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GetLifetimeService"></a>

### FatigueTool.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GetObjectData"></a>

### FatigueTool.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GetParameter"></a>

### FatigueTool.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GetPath"></a>

### FatigueTool.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GetPropertyName"></a>

### FatigueTool.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GetPropertyValue"></a>

### FatigueTool.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GetUnitString"></a>

### FatigueTool.GetUnitString(obj: Ansys.Common.Interop.DSObjectsAuto.IDSFatigueToolAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetUnitString method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GetVisibleProperties"></a>

### FatigueTool.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GetVisiblePropertyNames"></a>

### FatigueTool.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GroupAllSimilarChildren"></a>

### FatigueTool.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.GroupSimilarObjects"></a>

### FatigueTool.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.InitializeLifetimeService"></a>

### FatigueTool.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.IsPropertyEditable"></a>

### FatigueTool.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FatigueTool.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.IsPropertyVisible"></a>

### FatigueTool.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FatigueTool.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.Paste"></a>

### FatigueTool.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.PropertyByAPIName"></a>

### FatigueTool.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.PropertyById"></a>

### FatigueTool.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.PropertyByName"></a>

### FatigueTool.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.RemoveFromGroup"></a>

### FatigueTool.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FatigueTool.RemoveParameter"></a>

### FatigueTool.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

