# Access to parameter data

**Parameter data** are data representing single-valued, non-field data.
Since each parameter stores only a single value, the participant library does not provide access via shared memory (as is done with [Heavyweight Data](heavyweight-data-access.md)). Instead, the participant library provides access via direct get and set calls for the parameter data.

For more information, see:

- [Relevant concepts](#relevant-concepts)
- [Input parameter data](#input-parameter-data)
- [Output parameter data](#output-parameter-data)

## Relevant concepts

- **Input data**

  Input data is for input parameters provided to the participant by
  System Coupling.

- **Output data**

  Output data is for output parameters provided to System Coupling by the participant.

## Input parameter data

Access to input parameters, that is parameter data that are provided to the participant by System Coupling, is only available after update inputs has been called. Note that a copy of the parameter value will be sent to the participant.

### Examples of getting input parameter data

#### C++

```cpp
sc.updateInputs();
// get the current value of any input parameters
inParameterValue = sc.getParameterValue(inParameterName);
// ... use parameters here ...

```

### C

```c
SyscError errorCode;
errorCode = syscUpdateInputs();
double inParameterValue = syscGetParameterValue(inParameterName, &errorCode);
```

### Python

```python
sc.updateInputs()
# get the current value of any input parameters
inParameterValue = sc.getParameterValue(inParameterName)
# ... use parameters here ...
```

## Output parameter data

Access to output parameters, that is parameter data that are sent to  System Coupling by the participant, may be done before initialize analysis (to provide initial values for the parameter) and prior to update outputs (during the solution loop). Note that a copy of the parameter value will be sent to system coupling.

### Examples of setting initial parameter data

#### C++

```cpp
sc.setParameterValue(outParameter1, out1Value);
sc.setParameterValue(outParameter2, out2Value);
sc.initializeAnalysis();
```

#### C

```c
SyscError ret;
ret = syscSetParameterValue(outParameter1, out1Value);
ret = syscSetParameterValue(outParameter2, out2Value);
ret = syscInitializeAnalysis();
```

#### Python

```python
sc.setParameterValue(outParameter1, out1Value)
sc.setParameterValue(outParameter2, out2Value)
sc.initializeAnalysis()
```

### Examples of setting parameter data during an analysis

#### C++

```cpp
// within the solution loop
sc.setParameterValue(outParameter1, out1Value);
sc.setParameterValue(outParameter2, out2Value);
sc.updateOutputs(sysc::Converged);

```

#### Python

```python
# within the solution loop
sc.setParameterValue(outParameter1, out1Value)
sc.setParameterValue(outParameter2, out2Value)
sc.updateOutputs(sysc.Converged)
```
