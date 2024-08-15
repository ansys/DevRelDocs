# `SolutionCombinationDefinition`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SolutionCombinationDefinition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

SolutionCombinationDefinition class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------|----------------------------------------------------------------------------------|
| `AddLoadCombination`     | Add a LoadCombination to the SolutionCombination Definition                      |
| `DeleteLoadCombination`  | Delete a LoadCombination from the SolutionCombination Definition                 |
| `AddBaseCase`            | Add a BaseCase to the SolutionCombinationDefinition                              |
| `DeleteBaseCase`         | Delete a BaseCase from the SolutionCombinationDefinition                         |
| `GetBaseCaseName`        | Gets the BaseCase Name property at given index                                   |
| `SetBaseCaseName`        | Sets the BaseCase Name property at given index                                   |
| `GetBaseCaseAnalysis`    | Gets the BaseCase Analysis property at given index.                              |
| `SetBaseCaseAnalysis`    | Sets the BaseCase Analysis property to given index.                              |
| `GetBaseCaseTime`        | Gets the Time property from the Base Case at given index                         |
| `SetBaseCaseTime`        | Sets the Time property to the Base Case at given index                           |
| `GetBaseCaseFrequency`   | Gets the Frequency property from the Base Case at given index                    |
| `SetBaseCaseFrequency`   | Sets the Frequency property to the Base Case at given index                      |
| `GetBaseCasePhaseAngle`  | Gets the Phase Angle property from the Base Case at given index                  |
| `SetBaseCasePhaseAngle`  | Sets the Phase Angle property to the Base Case at given index                    |
| `GetLoadCombinationType` | Gets the Load Combination Type property at given index                           |
| `SetLoadCombinationType` | Sets the Load Combination Type property at given index                           |
| `GetLoadCombinationName` | Gets the LoadCombination Name property at given index                            |
| `SetLoadCombinationName` | Sets the LoadCombination Name property at given index                            |
| `GetCoefficient`         | Gets the Coefficient property at given LoadCombination index and BaseCase index  |
| `SetCoefficient`         | Sets  the Coefficient property at given LoadCombination index and BaseCase index |
| `Import`                 | Import Load Combination Definition data from Comma Separated Value (CSV) files   |
| `Export`                 | Export Load Combination Definition data to Comma Separated Value (CSV) files     |

### Properties

| Name | Description |
|--------------------------|----------------------------------------|
| `LoadCombinationCount`   | Gets the number of load combinations   |
| `BaseCaseCount`          | Gets the number of bases cases         |

<a id="property-detail"></a>

## Property detail

### *property* SolutionCombinationDefinition.LoadCombinationCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of load combinations

<!-- !! processed by numpydoc !! -->

### *property* SolutionCombinationDefinition.BaseCaseCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of bases cases

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### SolutionCombinationDefinition.AddLoadCombination(name: System.String, type: System.Int32)

Add a LoadCombination to the SolutionCombination Definition

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.DeleteLoadCombination(index: System.Int32)

Delete a LoadCombination from the SolutionCombination Definition

<!-- !! processed by numpydoc !! -->

### SolutionCombinationDefinition.AddBaseCase(name: System.String, analysis: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis), time: System.Double)

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

### SolutionCombinationDefinition.SetBaseCaseAnalysis(index: System.Int32, analysis: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis))

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

### SolutionCombinationDefinition.SetLoadCombinationType(index: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.LoadCombinationType](../../../Mechanical/DataModel/Enums/LoadCombinationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadCombinationType))

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

