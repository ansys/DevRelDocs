# `SolutionCombinationDefinition`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.SolutionCombinationDefinition"></a>

#### *class* Ansys.ACT.Automation.Mechanical.SolutionCombinationDefinition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

SolutionCombinationDefinition class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`AddBaseCase`](#SolutionCombinationDefinition.AddBaseCase)                       | Add a BaseCase to the SolutionCombinationDefinition                              |
| [`AddLoadCombination`](#SolutionCombinationDefinition.AddLoadCombination)         | Add a LoadCombination to the SolutionCombination Definition                      |
| [`DeleteBaseCase`](#SolutionCombinationDefinition.DeleteBaseCase)                 | Delete a BaseCase from the SolutionCombinationDefinition                         |
| [`DeleteLoadCombination`](#SolutionCombinationDefinition.DeleteLoadCombination)   | Delete a LoadCombination from the SolutionCombination Definition                 |
| [`Export`](#SolutionCombinationDefinition.Export)                                 | Export Load Combination Definition data to Comma Separated Value (CSV) files     |
| [`GetBaseCaseAnalysis`](#SolutionCombinationDefinition.GetBaseCaseAnalysis)       | Gets the BaseCase Analysis property at given index.                              |
| [`GetBaseCaseFrequency`](#SolutionCombinationDefinition.GetBaseCaseFrequency)     | Gets the Frequency property from the Base Case at given index                    |
| [`GetBaseCaseName`](#SolutionCombinationDefinition.GetBaseCaseName)               | Gets the BaseCase Name property at given index                                   |
| [`GetBaseCasePhaseAngle`](#SolutionCombinationDefinition.GetBaseCasePhaseAngle)   | Gets the Phase Angle property from the Base Case at given index                  |
| [`GetBaseCaseTime`](#SolutionCombinationDefinition.GetBaseCaseTime)               | Gets the Time property from the Base Case at given index                         |
| [`GetCoefficient`](#SolutionCombinationDefinition.GetCoefficient)                 | Gets the Coefficient property at given LoadCombination index and BaseCase index  |
| [`GetLoadCombinationName`](#SolutionCombinationDefinition.GetLoadCombinationName) | Gets the LoadCombination Name property at given index                            |
| [`GetLoadCombinationType`](#SolutionCombinationDefinition.GetLoadCombinationType) | Gets the Load Combination Type property at given index                           |
| [`Import`](#SolutionCombinationDefinition.Import)                                 | Import Load Combination Definition data from Comma Separated Value (CSV) files   |
| [`SetBaseCaseAnalysis`](#SolutionCombinationDefinition.SetBaseCaseAnalysis)       | Sets the BaseCase Analysis property to given index.                              |
| [`SetBaseCaseFrequency`](#SolutionCombinationDefinition.SetBaseCaseFrequency)     | Sets the Frequency property to the Base Case at given index                      |
| [`SetBaseCaseName`](#SolutionCombinationDefinition.SetBaseCaseName)               | Sets the BaseCase Name property at given index                                   |
| [`SetBaseCasePhaseAngle`](#SolutionCombinationDefinition.SetBaseCasePhaseAngle)   | Sets the Phase Angle property to the Base Case at given index                    |
| [`SetBaseCaseTime`](#SolutionCombinationDefinition.SetBaseCaseTime)               | Sets the Time property to the Base Case at given index                           |
| [`SetCoefficient`](#SolutionCombinationDefinition.SetCoefficient)                 | Sets  the Coefficient property at given LoadCombination index and BaseCase index |
| [`SetLoadCombinationName`](#SolutionCombinationDefinition.SetLoadCombinationName) | Sets the LoadCombination Name property at given index                            |
| [`SetLoadCombinationType`](#SolutionCombinationDefinition.SetLoadCombinationType) | Sets the Load Combination Type property at given index                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| [`BaseCaseCount`](#SolutionCombinationDefinition.BaseCaseCount)               | Gets the number of bases cases       |
| [`LoadCombinationCount`](#SolutionCombinationDefinition.LoadCombinationCount) | Gets the number of load combinations |

<a id="property-detail"></a>

## Property detail

<a id="SolutionCombinationDefinition.BaseCaseCount"></a>

### *property* SolutionCombinationDefinition.BaseCaseCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of bases cases

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.LoadCombinationCount"></a>

### *property* SolutionCombinationDefinition.LoadCombinationCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of load combinations

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SolutionCombinationDefinition.AddBaseCase"></a>

### SolutionCombinationDefinition.AddBaseCase(name: System.String, analysis: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis), time: System.Double)

Add a BaseCase to the SolutionCombinationDefinition

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.AddLoadCombination"></a>

### SolutionCombinationDefinition.AddLoadCombination(name: System.String, type: System.Int32)

Add a LoadCombination to the SolutionCombination Definition

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.DeleteBaseCase"></a>

### SolutionCombinationDefinition.DeleteBaseCase(index: System.Int32)

Delete a BaseCase from the SolutionCombinationDefinition

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.DeleteLoadCombination"></a>

### SolutionCombinationDefinition.DeleteLoadCombination(index: System.Int32)

Delete a LoadCombination from the SolutionCombination Definition

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.Export"></a>

### SolutionCombinationDefinition.Export(filepath: System.String)

Export Load Combination Definition data to Comma Separated Value (CSV) files

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.GetBaseCaseAnalysis"></a>

### SolutionCombinationDefinition.GetBaseCaseAnalysis(index: System.Int32)

Gets the BaseCase Analysis property at given index.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.GetBaseCaseFrequency"></a>

### SolutionCombinationDefinition.GetBaseCaseFrequency(index: System.Int32)

Gets the Frequency property from the Base Case at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.GetBaseCaseName"></a>

### SolutionCombinationDefinition.GetBaseCaseName(index: System.Int32)

Gets the BaseCase Name property at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.GetBaseCasePhaseAngle"></a>

### SolutionCombinationDefinition.GetBaseCasePhaseAngle(index: System.Int32)

Gets the Phase Angle property from the Base Case at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.GetBaseCaseTime"></a>

### SolutionCombinationDefinition.GetBaseCaseTime(index: System.Int32)

Gets the Time property from the Base Case at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.GetCoefficient"></a>

### SolutionCombinationDefinition.GetCoefficient(LCindex: System.Int32, BCindex: System.Int32)

Gets the Coefficient property at given LoadCombination index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.GetLoadCombinationName"></a>

### SolutionCombinationDefinition.GetLoadCombinationName(index: System.Int32)

Gets the LoadCombination Name property at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.GetLoadCombinationType"></a>

### SolutionCombinationDefinition.GetLoadCombinationType(index: System.Int32)

Gets the Load Combination Type property at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.Import"></a>

### SolutionCombinationDefinition.Import(filepath: System.String)

Import Load Combination Definition data from Comma Separated Value (CSV) files

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.SetBaseCaseAnalysis"></a>

### SolutionCombinationDefinition.SetBaseCaseAnalysis(index: System.Int32, analysis: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis))

Sets the BaseCase Analysis property to given index.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.SetBaseCaseFrequency"></a>

### SolutionCombinationDefinition.SetBaseCaseFrequency(index: System.Int32, value: System.Double)

Sets the Frequency property to the Base Case at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.SetBaseCaseName"></a>

### SolutionCombinationDefinition.SetBaseCaseName(index: System.Int32, name: System.String)

Sets the BaseCase Name property at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.SetBaseCasePhaseAngle"></a>

### SolutionCombinationDefinition.SetBaseCasePhaseAngle(index: System.Int32, value: System.Double)

Sets the Phase Angle property to the Base Case at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.SetBaseCaseTime"></a>

### SolutionCombinationDefinition.SetBaseCaseTime(index: System.Int32, value: System.Double)

Sets the Time property to the Base Case at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.SetCoefficient"></a>

### SolutionCombinationDefinition.SetCoefficient(LCindex: System.Int32, BCindex: System.Int32, value: System.Double)

Sets  the Coefficient property at given LoadCombination index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.SetLoadCombinationName"></a>

### SolutionCombinationDefinition.SetLoadCombinationName(index: System.Int32, name: System.String)

Sets the LoadCombination Name property at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.SetLoadCombinationType"></a>

### SolutionCombinationDefinition.SetLoadCombinationType(index: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.LoadCombinationType](../../../Mechanical/DataModel/Enums/LoadCombinationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LoadCombinationType))

Sets the Load Combination Type property at given index

<!-- !! processed by numpydoc !! -->

