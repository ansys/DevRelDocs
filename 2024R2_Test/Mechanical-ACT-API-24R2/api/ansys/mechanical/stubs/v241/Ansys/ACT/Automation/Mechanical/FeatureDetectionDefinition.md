# `FeatureDetectionDefinition`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.FeatureDetectionDefinition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

FeatureDetectionDefinition class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`AddFeatureDetection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.AddFeatureDetection)                   | Add a FeatureDetection to the FeatureDetection Definition                       |
| [`DeleteFeatureDetection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.DeleteFeatureDetection)             | Delete a FeatureDetection from the Feature Detection Definition                 |
| [`SetFeatureDetectionOptions`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.SetFeatureDetectionOptions)     | Set Feature Detection Solid / Sheet / Beta settings                             |
| [`GetFeatureDetectionType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.GetFeatureDetectionType)           | Gets the Feature Detection Type property at given index                         |
| [`SetFeatureDetectionType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.SetFeatureDetectionType)           | Sets the Feature Detection Type property at given index                         |
| [`GetFeatureDetectionName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.GetFeatureDetectionName)           | Gets the FeatureDetection Name property at given index                          |
| [`SetFeatureDetectionName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.SetFeatureDetectionName)           | Sets the FeatureDetection Name property at given index                          |
| [`GetFeatureDetectionCriteria`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.GetFeatureDetectionCriteria)   | Gets the Feature Detection Criteria property at given index                     |
| [`SetFeatureDetectionCriteria`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.SetFeatureDetectionCriteria)   | Sets the Feature Detection Criteria property at given index                     |
| [`GetFeatureDetectionOperator`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.GetFeatureDetectionOperator)   | Gets the Feature Detection Operator property at given index                     |
| [`SetFeatureDetectionOperator`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.SetFeatureDetectionOperator)   | Sets the Feature Detection Operator property at given index                     |
| [`GetFeatureCriteriaValue`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.GetFeatureCriteriaValue)           | Gets the Value property at given FeatureDetection index and BaseCase index      |
| [`SetFeatureCriteriaValue`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.SetFeatureCriteriaValue)           | Sets  the Value property at given FeatureDetection index and BaseCase index     |
| [`GetFeatureCriteriaAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.GetFeatureCriteriaAngle)           | Gets the Angle property at given FeatureDetection index and BaseCase index      |
| [`SetFeatureCriteriaAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.SetFeatureCriteriaAngle)           | Sets  the Angle property at given FeatureDetection index and BaseCase index     |
| [`GetFeatureCriteriaMinBound`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.GetFeatureCriteriaMinBound)     | Gets the Min Bound property at given FeatureDetection index and BaseCase index  |
| [`SetFeatureCriteriaMinBound`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.SetFeatureCriteriaMinBound)     | Sets  the Min Bound property at given FeatureDetection index and BaseCase index |
| [`GetFeatureCriteriaMaxBound`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.GetFeatureCriteriaMaxBound)     | Gets the Max-Bound property at given FeatureDetection index and BaseCase index  |
| [`SetFeatureCriteriaMaxBound`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.SetFeatureCriteriaMaxBound)     | Sets  the Max Bound property at given FeatureDetection index and BaseCase index |
| [`GetFeatureDetectionTreatment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.GetFeatureDetectionTreatment) | Gets the Feature Detection Criteria property at given index                     |
| [`SetFeatureDetectionTreatment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.SetFeatureDetectionTreatment) | Sets the Feature Detection Criteria property at given index                     |
| [`ExecuteDetectFeatures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.ExecuteDetectFeatures)               | ExecuteDetectFeatures method.                                                   |
| [`Import`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.Import)                                             | Import Feature Detection Definition data from Comma Separated Value (CSV) files |
| [`Export`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.Export)                                             | Export Feature Detection Definition data to Comma Separated Value (CSV) files   |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|
| [`FeatureDetectionCount`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetectionDefinition.md#FeatureDetectionDefinition.FeatureDetectionCount)   | Gets the number of Feature Detections   |

<a id="property-detail"></a>

## Property detail

<a id="FeatureDetectionDefinition.FeatureDetectionCount"></a>

### *property* FeatureDetectionDefinition.FeatureDetectionCount *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of Feature Detections

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FeatureDetectionDefinition.AddFeatureDetection"></a>

### FeatureDetectionDefinition.AddFeatureDetection(name: System.String, type: System.Int32, criteria: System.Int32, fdOperator: System.Int32, critValue: System.Double, angleValue: System.Double, minBound: System.Double, maxBound: System.Double, meshTreatment: System.Int32)

Add a FeatureDetection to the FeatureDetection Definition

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.DeleteFeatureDetection"></a>

### FeatureDetectionDefinition.DeleteFeatureDetection(index: System.UInt32)

Delete a FeatureDetection from the Feature Detection Definition

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureDetectionOptions"></a>

### FeatureDetectionDefinition.SetFeatureDetectionOptions(isSolid: System.Boolean, isSheet: System.Boolean, isBeta: System.Boolean)

Set Feature Detection Solid / Sheet / Beta settings

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.GetFeatureDetectionType"></a>

### FeatureDetectionDefinition.GetFeatureDetectionType(index: System.UInt32)

Gets the Feature Detection Type property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureDetectionType"></a>

### FeatureDetectionDefinition.SetFeatureDetectionType(index: System.UInt32, value: Ansys.Mechanical.DataModel.Enums.FeatureDetectionType)

Sets the Feature Detection Type property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.GetFeatureDetectionName"></a>

### FeatureDetectionDefinition.GetFeatureDetectionName(index: System.UInt32)

Gets the FeatureDetection Name property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureDetectionName"></a>

### FeatureDetectionDefinition.SetFeatureDetectionName(index: System.UInt32, name: System.String)

Sets the FeatureDetection Name property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.GetFeatureDetectionCriteria"></a>

### FeatureDetectionDefinition.GetFeatureDetectionCriteria(index: System.UInt32)

Gets the Feature Detection Criteria property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureDetectionCriteria"></a>

### FeatureDetectionDefinition.SetFeatureDetectionCriteria(index: System.UInt32, value: Ansys.Mechanical.DataModel.Enums.FeatureDetectionCriteria)

Sets the Feature Detection Criteria property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.GetFeatureDetectionOperator"></a>

### FeatureDetectionDefinition.GetFeatureDetectionOperator(index: System.UInt32)

Gets the Feature Detection Operator property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureDetectionOperator"></a>

### FeatureDetectionDefinition.SetFeatureDetectionOperator(index: System.UInt32, value: Ansys.Mechanical.DataModel.Enums.FeatureDetectionOperator)

Sets the Feature Detection Operator property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.GetFeatureCriteriaValue"></a>

### FeatureDetectionDefinition.GetFeatureCriteriaValue(index: System.UInt32)

Gets the Value property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureCriteriaValue"></a>

### FeatureDetectionDefinition.SetFeatureCriteriaValue(index: System.UInt32, value: System.Double)

Sets  the Value property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.GetFeatureCriteriaAngle"></a>

### FeatureDetectionDefinition.GetFeatureCriteriaAngle(index: System.UInt32)

Gets the Angle property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureCriteriaAngle"></a>

### FeatureDetectionDefinition.SetFeatureCriteriaAngle(index: System.UInt32, value: System.Double)

Sets  the Angle property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.GetFeatureCriteriaMinBound"></a>

### FeatureDetectionDefinition.GetFeatureCriteriaMinBound(index: System.UInt32)

Gets the Min Bound property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureCriteriaMinBound"></a>

### FeatureDetectionDefinition.SetFeatureCriteriaMinBound(index: System.UInt32, value: System.Double)

Sets  the Min Bound property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.GetFeatureCriteriaMaxBound"></a>

### FeatureDetectionDefinition.GetFeatureCriteriaMaxBound(index: System.UInt32)

Gets the Max-Bound property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureCriteriaMaxBound"></a>

### FeatureDetectionDefinition.SetFeatureCriteriaMaxBound(index: System.UInt32, value: System.Double)

Sets  the Max Bound property at given FeatureDetection index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.GetFeatureDetectionTreatment"></a>

### FeatureDetectionDefinition.GetFeatureDetectionTreatment(index: System.UInt32)

Gets the Feature Detection Criteria property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.SetFeatureDetectionTreatment"></a>

### FeatureDetectionDefinition.SetFeatureDetectionTreatment(index: System.UInt32, value: Ansys.Mechanical.DataModel.Enums.FeatureDetectionTreatment)

Sets the Feature Detection Criteria property at given index

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.ExecuteDetectFeatures"></a>

### FeatureDetectionDefinition.ExecuteDetectFeatures()

ExecuteDetectFeatures method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.Import"></a>

### FeatureDetectionDefinition.Import(filepath: System.String)

Import Feature Detection Definition data from Comma Separated Value (CSV) files

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetectionDefinition.Export"></a>

### FeatureDetectionDefinition.Export(filepath: System.String)

Export Feature Detection Definition data to Comma Separated Value (CSV) files

<!-- !! processed by numpydoc !! -->

