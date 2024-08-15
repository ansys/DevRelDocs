# `FeatureDetectionDefinition`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.FeatureDetectionDefinition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

FeatureDetectionDefinition class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------|---------------------------------------------------------------------------------|
| `AddFeatureDetection`          | Add a FeatureDetection to the FeatureDetection Definition                       |
| `DeleteFeatureDetection`       | Delete a FeatureDetection from the Feature Detection Definition                 |
| `SetFeatureDetectionOptions`   | Set Feature Detection Solid / Sheet / Beta settings                             |
| `GetFeatureDetectionType`      | Gets the Feature Detection Type property at given index                         |
| `SetFeatureDetectionType`      | Sets the Feature Detection Type property at given index                         |
| `GetFeatureDetectionName`      | Gets the FeatureDetection Name property at given index                          |
| `SetFeatureDetectionName`      | Sets the FeatureDetection Name property at given index                          |
| `GetFeatureDetectionCriteria`  | Gets the Feature Detection Criteria property at given index                     |
| `SetFeatureDetectionCriteria`  | Sets the Feature Detection Criteria property at given index                     |
| `GetFeatureDetectionOperator`  | Gets the Feature Detection Operator property at given index                     |
| `SetFeatureDetectionOperator`  | Sets the Feature Detection Operator property at given index                     |
| `GetFeatureCriteriaValue`      | Gets the Value property at given FeatureDetection index and BaseCase index      |
| `SetFeatureCriteriaValue`      | Sets  the Value property at given FeatureDetection index and BaseCase index     |
| `GetFeatureCriteriaAngle`      | Gets the Angle property at given FeatureDetection index and BaseCase index      |
| `SetFeatureCriteriaAngle`      | Sets  the Angle property at given FeatureDetection index and BaseCase index     |
| `GetFeatureCriteriaMinBound`   | Gets the Min Bound property at given FeatureDetection index and BaseCase index  |
| `SetFeatureCriteriaMinBound`   | Sets  the Min Bound property at given FeatureDetection index and BaseCase index |
| `GetFeatureCriteriaMaxBound`   | Gets the Max-Bound property at given FeatureDetection index and BaseCase index  |
| `SetFeatureCriteriaMaxBound`   | Sets  the Max Bound property at given FeatureDetection index and BaseCase index |
| `GetFeatureDetectionTreatment` | Gets the Feature Detection Criteria property at given index                     |
| `SetFeatureDetectionTreatment` | Sets the Feature Detection Criteria property at given index                     |
| `ExecuteDetectFeatures`        | ExecuteDetectFeatures method.                                                   |
| `Import`                       | Import Feature Detection Definition data from Comma Separated Value (CSV) files |
| `Export`                       | Export Feature Detection Definition data to Comma Separated Value (CSV) files   |

### Properties

| Name | Description |
|---------------------------|-----------------------------------------|
| `FeatureDetectionCount`   | Gets the number of Feature Detections   |

<a id="property-detail"></a>

## Property detail

### *property* FeatureDetectionDefinition.FeatureDetectionCount *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of Feature Detections

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### FeatureDetectionDefinition.AddFeatureDetection(name: System.String, type: System.Int32, criteria: System.Int32, fdOperator: System.Int32, critValue: System.Double, angleValue: System.Double, minBound: System.Double, maxBound: System.Double, meshTreatment: System.Int32)

Add a FeatureDetection to the FeatureDetection Definition

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.DeleteFeatureDetection(index: System.UInt32)

Delete a FeatureDetection from the Feature Detection Definition

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.SetFeatureDetectionOptions(isSolid: System.Boolean, isSheet: System.Boolean, isBeta: System.Boolean)

```text
Set Feature Detection Solid / Sheet / Beta settings
isSolid>
isSheet>
isBeta>
```

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.GetFeatureDetectionType(index: System.UInt32)

Gets the Feature Detection Type property at given index

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.SetFeatureDetectionType(index: System.UInt32, value: Ansys.Mechanical.DataModel.Enums.FeatureDetectionType)

Sets the Feature Detection Type property at given index

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.GetFeatureDetectionName(index: System.UInt32)

Gets the FeatureDetection Name property at given index

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.SetFeatureDetectionName(index: System.UInt32, name: System.String)

Sets the FeatureDetection Name property at given index

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.GetFeatureDetectionCriteria(index: System.UInt32)

Gets the Feature Detection Criteria property at given index

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.SetFeatureDetectionCriteria(index: System.UInt32, value: Ansys.Mechanical.DataModel.Enums.FeatureDetectionCriteria)

Sets the Feature Detection Criteria property at given index

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.GetFeatureDetectionOperator(index: System.UInt32)

Gets the Feature Detection Operator property at given index

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.SetFeatureDetectionOperator(index: System.UInt32, value: Ansys.Mechanical.DataModel.Enums.FeatureDetectionOperator)

Sets the Feature Detection Operator property at given index

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.GetFeatureCriteriaValue(index: System.UInt32)

Gets the Value property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.SetFeatureCriteriaValue(index: System.UInt32, value: System.Double)

Sets  the Value property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.GetFeatureCriteriaAngle(index: System.UInt32)

Gets the Angle property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.SetFeatureCriteriaAngle(index: System.UInt32, value: System.Double)

Sets  the Angle property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.GetFeatureCriteriaMinBound(index: System.UInt32)

Gets the Min Bound property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.SetFeatureCriteriaMinBound(index: System.UInt32, value: System.Double)

Sets  the Min Bound property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.GetFeatureCriteriaMaxBound(index: System.UInt32)

Gets the Max-Bound property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.SetFeatureCriteriaMaxBound(index: System.UInt32, value: System.Double)

Sets  the Max Bound property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.GetFeatureDetectionTreatment(index: System.UInt32)

Gets the Feature Detection Criteria property at given index

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.SetFeatureDetectionTreatment(index: System.UInt32, value: Ansys.Mechanical.DataModel.Enums.FeatureDetectionTreatment)

Sets the Feature Detection Criteria property at given index

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.ExecuteDetectFeatures()

ExecuteDetectFeatures method.

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.Import(filepath: System.String)

Import Feature Detection Definition data from Comma Separated Value (CSV) files

<!-- !! processed by numpydoc !! -->

### FeatureDetectionDefinition.Export(filepath: System.String)

Export Feature Detection Definition data to Comma Separated Value (CSV) files

<!-- !! processed by numpydoc !! -->

