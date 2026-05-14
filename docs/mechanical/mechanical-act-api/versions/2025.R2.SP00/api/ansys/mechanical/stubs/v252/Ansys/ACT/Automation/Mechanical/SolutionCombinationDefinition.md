# `SolutionCombinationDefinition`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SolutionCombinationDefinition"></a>

#### *class* Ansys.ACT.Automation.Mechanical.SolutionCombinationDefinition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
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
|-------------------------------------------------------------------------------|--------------------------------------|
| [`BaseCaseCount`](#SolutionCombinationDefinition.BaseCaseCount)               | Gets the number of bases cases       |
| [`LoadCombinationCount`](#SolutionCombinationDefinition.LoadCombinationCount) | Gets the number of load combinations |

<a id="property-detail"></a>

## Property detail

<a id="SolutionCombinationDefinition.BaseCaseCount"></a>

### *property* SolutionCombinationDefinition.BaseCaseCount *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of bases cases

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.LoadCombinationCount"></a>

### *property* SolutionCombinationDefinition.LoadCombinationCount *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of load combinations

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SolutionCombinationDefinition.AddBaseCase"></a>

### SolutionCombinationDefinition.AddBaseCase(name: [str](https://docs.python.org/3/library/stdtypes.html#str), analysis: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Analysis), time: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Add a BaseCase to the SolutionCombinationDefinition

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.AddLoadCombination"></a>

### SolutionCombinationDefinition.AddLoadCombination(name: [str](https://docs.python.org/3/library/stdtypes.html#str), type: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Add a LoadCombination to the SolutionCombination Definition

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.DeleteBaseCase"></a>

### SolutionCombinationDefinition.DeleteBaseCase(index: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Delete a BaseCase from the SolutionCombinationDefinition

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.DeleteLoadCombination"></a>

### SolutionCombinationDefinition.DeleteLoadCombination(index: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Delete a LoadCombination from the SolutionCombination Definition

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.Export"></a>

### SolutionCombinationDefinition.Export(filepath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Export Load Combination Definition data to Comma Separated Value (CSV) files

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.GetBaseCaseAnalysis"></a>

### SolutionCombinationDefinition.GetBaseCaseAnalysis(index: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Analysis)

Gets the BaseCase Analysis property at given index.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.GetBaseCaseFrequency"></a>

### SolutionCombinationDefinition.GetBaseCaseFrequency(index: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Frequency property from the Base Case at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.GetBaseCaseName"></a>

### SolutionCombinationDefinition.GetBaseCaseName(index: [int](https://docs.python.org/3/library/functions.html#int)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

Gets the BaseCase Name property at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.GetBaseCasePhaseAngle"></a>

### SolutionCombinationDefinition.GetBaseCasePhaseAngle(index: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Phase Angle property from the Base Case at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.GetBaseCaseTime"></a>

### SolutionCombinationDefinition.GetBaseCaseTime(index: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Time property from the Base Case at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.GetCoefficient"></a>

### SolutionCombinationDefinition.GetCoefficient(LCindex: [int](https://docs.python.org/3/library/functions.html#int), BCindex: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Coefficient property at given LoadCombination index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.GetLoadCombinationName"></a>

### SolutionCombinationDefinition.GetLoadCombinationName(index: [int](https://docs.python.org/3/library/functions.html#int)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

Gets the LoadCombination Name property at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.GetLoadCombinationType"></a>

### SolutionCombinationDefinition.GetLoadCombinationType(index: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.LoadCombinationType](../../../Mechanical/DataModel/Enums/LoadCombinationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadCombinationType)

Gets the Load Combination Type property at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.Import"></a>

### SolutionCombinationDefinition.Import(filepath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Import Load Combination Definition data from Comma Separated Value (CSV) files

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.SetBaseCaseAnalysis"></a>

### SolutionCombinationDefinition.SetBaseCaseAnalysis(index: [int](https://docs.python.org/3/library/functions.html#int), analysis: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Analysis)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the BaseCase Analysis property to given index.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.SetBaseCaseFrequency"></a>

### SolutionCombinationDefinition.SetBaseCaseFrequency(index: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Frequency property to the Base Case at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.SetBaseCaseName"></a>

### SolutionCombinationDefinition.SetBaseCaseName(index: [int](https://docs.python.org/3/library/functions.html#int), name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the BaseCase Name property at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.SetBaseCasePhaseAngle"></a>

### SolutionCombinationDefinition.SetBaseCasePhaseAngle(index: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Phase Angle property to the Base Case at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.SetBaseCaseTime"></a>

### SolutionCombinationDefinition.SetBaseCaseTime(index: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Time property to the Base Case at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.SetCoefficient"></a>

### SolutionCombinationDefinition.SetCoefficient(LCindex: [int](https://docs.python.org/3/library/functions.html#int), BCindex: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets  the Coefficient property at given LoadCombination index and BaseCase index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.SetLoadCombinationName"></a>

### SolutionCombinationDefinition.SetLoadCombinationName(index: [int](https://docs.python.org/3/library/functions.html#int), name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the LoadCombination Name property at given index

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombinationDefinition.SetLoadCombinationType"></a>

### SolutionCombinationDefinition.SetLoadCombinationType(index: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.LoadCombinationType](../../../Mechanical/DataModel/Enums/LoadCombinationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadCombinationType)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Load Combination Type property at given index

<!-- !! processed by numpydoc !! -->

