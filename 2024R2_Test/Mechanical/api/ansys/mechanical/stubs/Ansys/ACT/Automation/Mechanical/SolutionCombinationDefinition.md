# SolutionCombinationDefinition

### *class* SolutionCombinationDefinition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> SolutionCombinationDefinition class.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddLoadCombination`](#SolutionCombinationDefinition.AddLoadCombination)         | Add a LoadCombination to the SolutionCombination Definition                      |
|-----------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`DeleteLoadCombination`](#SolutionCombinationDefinition.DeleteLoadCombination)   | Delete a LoadCombination from the SolutionCombination Definition                 |
| [`AddBaseCase`](#SolutionCombinationDefinition.AddBaseCase)                       | Add a BaseCase to the SolutionCombinationDefinition                              |
| [`DeleteBaseCase`](#SolutionCombinationDefinition.DeleteBaseCase)                 | Delete a BaseCase from the SolutionCombinationDefinition                         |
| [`GetBaseCaseName`](#SolutionCombinationDefinition.GetBaseCaseName)               | Gets the BaseCase Name property at given index                                   |
| [`SetBaseCaseName`](#SolutionCombinationDefinition.SetBaseCaseName)               | Sets the BaseCase Name property at given index                                   |
| [`GetBaseCaseAnalysis`](#SolutionCombinationDefinition.GetBaseCaseAnalysis)       | Gets the BaseCase Analysis property at given index.                              |
| [`SetBaseCaseAnalysis`](#SolutionCombinationDefinition.SetBaseCaseAnalysis)       | Sets the BaseCase Analysis property to given index.                              |
| [`GetBaseCaseTime`](#SolutionCombinationDefinition.GetBaseCaseTime)               | Gets the Time property from the Base Case at given index                         |
| [`SetBaseCaseTime`](#SolutionCombinationDefinition.SetBaseCaseTime)               | Sets the Time property to the Base Case at given index                           |
| [`GetBaseCaseFrequency`](#SolutionCombinationDefinition.GetBaseCaseFrequency)     | Gets the Frequency property from the Base Case at given index                    |
| [`SetBaseCaseFrequency`](#SolutionCombinationDefinition.SetBaseCaseFrequency)     | Sets the Frequency property to the Base Case at given index                      |
| [`GetBaseCasePhaseAngle`](#SolutionCombinationDefinition.GetBaseCasePhaseAngle)   | Gets the Phase Angle property from the Base Case at given index                  |
| [`SetBaseCasePhaseAngle`](#SolutionCombinationDefinition.SetBaseCasePhaseAngle)   | Sets the Phase Angle property to the Base Case at given index                    |
| [`GetLoadCombinationType`](#SolutionCombinationDefinition.GetLoadCombinationType) | Gets the Load Combination Type property at given index                           |
| [`SetLoadCombinationType`](#SolutionCombinationDefinition.SetLoadCombinationType) | Sets the Load Combination Type property at given index                           |
| [`GetLoadCombinationName`](#SolutionCombinationDefinition.GetLoadCombinationName) | Gets the LoadCombination Name property at given index                            |
| [`SetLoadCombinationName`](#SolutionCombinationDefinition.SetLoadCombinationName) | Sets the LoadCombination Name property at given index                            |
| [`GetCoefficient`](#SolutionCombinationDefinition.GetCoefficient)                 | Gets the Coefficient property at given LoadCombination index and BaseCase index  |
| [`SetCoefficient`](#SolutionCombinationDefinition.SetCoefficient)                 | Sets  the Coefficient property at given LoadCombination index and BaseCase index |
| [`Import`](#SolutionCombinationDefinition.Import)                                 | Import Load Combination Definition data from Comma Separated Value (CSV) files   |
| [`Export`](#SolutionCombinationDefinition.Export)                                 | Export Load Combination Definition data to Comma Separated Value (CSV) files     |

### Properties

| [`LoadCombinationCount`](#SolutionCombinationDefinition.LoadCombinationCount)   | Gets the number of load combinations   |
|---------------------------------------------------------------------------------|----------------------------------------|
| [`BaseCaseCount`](#SolutionCombinationDefinition.BaseCaseCount)                 | Gets the number of bases cases         |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import SolutionCombinationDefinition
```

## Property detail

### *property* SolutionCombinationDefinition.LoadCombinationCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of load combinations

<!-- !! processed by numpydoc !! -->

### *property* SolutionCombinationDefinition.BaseCaseCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of bases cases

<!-- !! processed by numpydoc !! -->

## Method detail

### SolutionCombinationDefinition.AddLoadCombination(name: System.String, type: System.Int32)

Add a LoadCombination to the SolutionCombination Definition

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.DeleteLoadCombination(index: System.Int32)

Delete a LoadCombination from the SolutionCombination Definition

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.AddBaseCase(name: System.String, analysis: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis), time: System.Double)

Add a BaseCase to the SolutionCombinationDefinition

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.DeleteBaseCase(index: System.Int32)

Delete a BaseCase from the SolutionCombinationDefinition

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.GetBaseCaseName(index: System.Int32)

Gets the BaseCase Name property at given index

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.SetBaseCaseName(index: System.Int32, name: System.String)

Sets the BaseCase Name property at given index

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.GetBaseCaseAnalysis(index: System.Int32)

Gets the BaseCase Analysis property at given index.

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.SetBaseCaseAnalysis(index: System.Int32, analysis: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis))

Sets the BaseCase Analysis property to given index.

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.GetBaseCaseTime(index: System.Int32)

Gets the Time property from the Base Case at given index

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.SetBaseCaseTime(index: System.Int32, value: System.Double)

Sets the Time property to the Base Case at given index

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.GetBaseCaseFrequency(index: System.Int32)

Gets the Frequency property from the Base Case at given index

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.SetBaseCaseFrequency(index: System.Int32, value: System.Double)

Sets the Frequency property to the Base Case at given index

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.GetBaseCasePhaseAngle(index: System.Int32)

Gets the Phase Angle property from the Base Case at given index

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.SetBaseCasePhaseAngle(index: System.Int32, value: System.Double)

Sets the Phase Angle property to the Base Case at given index

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.GetLoadCombinationType(index: System.Int32)

Gets the Load Combination Type property at given index

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.SetLoadCombinationType(index: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.LoadCombinationType](../../../Mechanical/DataModel/Enums/LoadCombinationType.md#LoadCombinationType))

Sets the Load Combination Type property at given index

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.GetLoadCombinationName(index: System.Int32)

Gets the LoadCombination Name property at given index

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.SetLoadCombinationName(index: System.Int32, name: System.String)

Sets the LoadCombination Name property at given index

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.GetCoefficient(LCindex: System.Int32, BCindex: System.Int32)

Gets the Coefficient property at given LoadCombination index and BaseCase index

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.SetCoefficient(LCindex: System.Int32, BCindex: System.Int32, value: System.Double)

Sets  the Coefficient property at given LoadCombination index and BaseCase index

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.Import(filepath: System.String)

Import Load Combination Definition data from Comma Separated Value (CSV) files

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.Export(filepath: System.String)

Export Load Combination Definition data to Comma Separated Value (CSV) files

<!-- !! processed by numpydoc !! -->
