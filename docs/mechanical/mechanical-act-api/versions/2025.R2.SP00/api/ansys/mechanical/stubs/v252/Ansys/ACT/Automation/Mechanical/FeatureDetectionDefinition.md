# `FeatureDetectionDefinition`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.FeatureDetectionDefinition"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FeatureDetectionDefinition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`AddFeatureDetection`](#FeatureDetectionDefinition.AddFeatureDetection)                   | Add a FeatureDetection to the FeatureDetection Definition                       |
| [`DeleteFeatureDetection`](#FeatureDetectionDefinition.DeleteFeatureDetection)             | Delete a FeatureDetection from the Feature Detection Definition                 |
| [`ExecuteDetectFeatures`](#FeatureDetectionDefinition.ExecuteDetectFeatures)               | ExecuteDetectFeatures method.                                                   |
| [`Export`](#FeatureDetectionDefinition.Export)                                             | Export Feature Detection Definition data to Comma Separated Value (CSV) files   |
| [`GetFeatureCriteriaAngle`](#FeatureDetectionDefinition.GetFeatureCriteriaAngle)           | Gets the Angle property at given FeatureDetection index and BaseCase index      |
| [`GetFeatureCriteriaMaxBound`](#FeatureDetectionDefinition.GetFeatureCriteriaMaxBound)     | Gets the Max-Bound property at given FeatureDetection index and BaseCase index  |
| [`GetFeatureCriteriaMinBound`](#FeatureDetectionDefinition.GetFeatureCriteriaMinBound)     | Gets the Min Bound property at given FeatureDetection index and BaseCase index  |
| [`GetFeatureCriteriaValue`](#FeatureDetectionDefinition.GetFeatureCriteriaValue)           | Gets the Value property at given FeatureDetection index and BaseCase index      |
| [`GetFeatureDetectionCriteria`](#FeatureDetectionDefinition.GetFeatureDetectionCriteria)   | Gets the Feature Detection Criteria property at given index                     |
| [`GetFeatureDetectionName`](#FeatureDetectionDefinition.GetFeatureDetectionName)           | Gets the FeatureDetection Name property at given index                          |
| [`GetFeatureDetectionOperator`](#FeatureDetectionDefinition.GetFeatureDetectionOperator)   | Gets the Feature Detection Operator property at given index                     |
| [`GetFeatureDetectionTreatment`](#FeatureDetectionDefinition.GetFeatureDetectionTreatment) | Gets the Feature Detection Criteria property at given index                     |
| [`GetFeatureDetectionType`](#FeatureDetectionDefinition.GetFeatureDetectionType)           | Gets the Feature Detection Type property at given index                         |
| [`Import`](#FeatureDetectionDefinition.Import)                                             | Import Feature Detection Definition data from Comma Separated Value (CSV) files |
| [`SetFeatureCriteriaAngle`](#FeatureDetectionDefinition.SetFeatureCriteriaAngle)           | Sets  the Angle property at given FeatureDetection index and BaseCase index     |
| [`SetFeatureCriteriaMaxBound`](#FeatureDetectionDefinition.SetFeatureCriteriaMaxBound)     | Sets  the Max Bound property at given FeatureDetection index and BaseCase index |
| [`SetFeatureCriteriaMinBound`](#FeatureDetectionDefinition.SetFeatureCriteriaMinBound)     | Sets  the Min Bound property at given FeatureDetection index and BaseCase index |
| [`SetFeatureCriteriaValue`](#FeatureDetectionDefinition.SetFeatureCriteriaValue)           | Sets  the Value property at given FeatureDetection index and BaseCase index     |
| [`SetFeatureDetectionCriteria`](#FeatureDetectionDefinition.SetFeatureDetectionCriteria)   | Sets the Feature Detection Criteria property at given index                     |
| [`SetFeatureDetectionName`](#FeatureDetectionDefinition.SetFeatureDetectionName)           | Sets the FeatureDetection Name property at given index                          |
| [`SetFeatureDetectionOperator`](#FeatureDetectionDefinition.SetFeatureDetectionOperator)   | Sets the Feature Detection Operator property at given index                     |
| [`SetFeatureDetectionOptions`](#FeatureDetectionDefinition.SetFeatureDetectionOptions)     | Set Feature Detection Solid / Sheet / Beta settings                             |
| [`SetFeatureDetectionTreatment`](#FeatureDetectionDefinition.SetFeatureDetectionTreatment) | Sets the Feature Detection Criteria property at given index                     |
| [`SetFeatureDetectionType`](#FeatureDetectionDefinition.SetFeatureDetectionType)           | Sets the Feature Detection Type property at given index                         |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------|
| [`FeatureDetectionCount`](#FeatureDetectionDefinition.FeatureDetectionCount)   | Gets the number of Feature Detections   |

<a id="property-detail"></a>

## Property detail

<a id="FeatureDetectionDefinition.FeatureDetectionCount"></a>

### *property* FeatureDetectionDefinition.FeatureDetectionCount *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of Feature Detections

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FeatureDetectionDefinition.AddFeatureDetection"></a>

### FeatureDetectionDefinition.AddFeatureDetection(name: [str](https://docs.python.org/3/library/stdtypes.html#str), type: [int](https://docs.python.org/3/library/functions.html#int), criteria: [int](https://docs.python.org/3/library/functions.html#int), fdOperator: [int](https://docs.python.org/3/library/functions.html#int), critValue: [float](https://docs.python.org/3/library/functions.html#float), angleValue: [float](https://docs.python.org/3/library/functions.html#float), minBound: [float](https://docs.python.org/3/library/functions.html#float), maxBound: [float](https://docs.python.org/3/library/functions.html#float), meshTreatment: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Add a FeatureDetection to the FeatureDetection Definition

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.DeleteFeatureDetection"></a>

### FeatureDetectionDefinition.DeleteFeatureDetection(index: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Delete a FeatureDetection from the Feature Detection Definition

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.ExecuteDetectFeatures"></a>

### FeatureDetectionDefinition.ExecuteDetectFeatures() → [None](https://docs.python.org/3/library/constants.html#None)

ExecuteDetectFeatures method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.Export"></a>

### FeatureDetectionDefinition.Export(filepath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Export Feature Detection Definition data to Comma Separated Value (CSV) files

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.GetFeatureCriteriaAngle"></a>

### FeatureDetectionDefinition.GetFeatureCriteriaAngle(index: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Angle property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.GetFeatureCriteriaMaxBound"></a>

### FeatureDetectionDefinition.GetFeatureCriteriaMaxBound(index: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Max-Bound property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.GetFeatureCriteriaMinBound"></a>

### FeatureDetectionDefinition.GetFeatureCriteriaMinBound(index: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Min Bound property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.GetFeatureCriteriaValue"></a>

### FeatureDetectionDefinition.GetFeatureCriteriaValue(index: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Value property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.GetFeatureDetectionCriteria"></a>

### FeatureDetectionDefinition.GetFeatureDetectionCriteria(index: [int](https://docs.python.org/3/library/functions.html#int)) → Ansys.Mechanical.DataModel.Enums.FeatureDetectionCriteria

Gets the Feature Detection Criteria property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.GetFeatureDetectionName"></a>

### FeatureDetectionDefinition.GetFeatureDetectionName(index: [int](https://docs.python.org/3/library/functions.html#int)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

Gets the FeatureDetection Name property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.GetFeatureDetectionOperator"></a>

### FeatureDetectionDefinition.GetFeatureDetectionOperator(index: [int](https://docs.python.org/3/library/functions.html#int)) → Ansys.Mechanical.DataModel.Enums.FeatureDetectionOperator

Gets the Feature Detection Operator property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.GetFeatureDetectionTreatment"></a>

### FeatureDetectionDefinition.GetFeatureDetectionTreatment(index: [int](https://docs.python.org/3/library/functions.html#int)) → Ansys.Mechanical.DataModel.Enums.FeatureDetectionTreatment

Gets the Feature Detection Criteria property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.GetFeatureDetectionType"></a>

### FeatureDetectionDefinition.GetFeatureDetectionType(index: [int](https://docs.python.org/3/library/functions.html#int)) → Ansys.Mechanical.DataModel.Enums.FeatureDetectionType

Gets the Feature Detection Type property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.Import"></a>

### FeatureDetectionDefinition.Import(filepath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Import Feature Detection Definition data from Comma Separated Value (CSV) files

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureCriteriaAngle"></a>

### FeatureDetectionDefinition.SetFeatureCriteriaAngle(index: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets  the Angle property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureCriteriaMaxBound"></a>

### FeatureDetectionDefinition.SetFeatureCriteriaMaxBound(index: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets  the Max Bound property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureCriteriaMinBound"></a>

### FeatureDetectionDefinition.SetFeatureCriteriaMinBound(index: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets  the Min Bound property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureCriteriaValue"></a>

### FeatureDetectionDefinition.SetFeatureCriteriaValue(index: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets  the Value property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureDetectionCriteria"></a>

### FeatureDetectionDefinition.SetFeatureDetectionCriteria(index: [int](https://docs.python.org/3/library/functions.html#int), value: Ansys.Mechanical.DataModel.Enums.FeatureDetectionCriteria) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Feature Detection Criteria property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureDetectionName"></a>

### FeatureDetectionDefinition.SetFeatureDetectionName(index: [int](https://docs.python.org/3/library/functions.html#int), name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the FeatureDetection Name property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureDetectionOperator"></a>

### FeatureDetectionDefinition.SetFeatureDetectionOperator(index: [int](https://docs.python.org/3/library/functions.html#int), value: Ansys.Mechanical.DataModel.Enums.FeatureDetectionOperator) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Feature Detection Operator property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureDetectionOptions"></a>

### FeatureDetectionDefinition.SetFeatureDetectionOptions(isSolid: [bool](https://docs.python.org/3/library/functions.html#bool), isSheet: [bool](https://docs.python.org/3/library/functions.html#bool), isBeta: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

```text
Set Feature Detection Solid / Sheet / Beta settings
isSolid>
isSheet>
isBeta>
```

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureDetectionTreatment"></a>

### FeatureDetectionDefinition.SetFeatureDetectionTreatment(index: [int](https://docs.python.org/3/library/functions.html#int), value: Ansys.Mechanical.DataModel.Enums.FeatureDetectionTreatment) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Feature Detection Criteria property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureDetectionType"></a>

### FeatureDetectionDefinition.SetFeatureDetectionType(index: [int](https://docs.python.org/3/library/functions.html#int), value: Ansys.Mechanical.DataModel.Enums.FeatureDetectionType) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Feature Detection Type property at given index

<!-- !! processed by numpydoc !! -->

