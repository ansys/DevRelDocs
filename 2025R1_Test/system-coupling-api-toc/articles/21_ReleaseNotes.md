# Release notes for 2024 R2

### New APIs for create system coupling SetupInfo

#### C++

The following new constructor has been added for creating sysc::SetupInfo with specifying the time integration method for the participant:

```cpp
  SetupInfo(
    enum AnalysisType analysisType,
    bool restartsSupported,
    enum Dimension dimension,
    enum TimeIntegration timeIntegration);
```

#### C

A helper function has been added for creating SyscSetupInfo with specifying the time integration method for the participant:

```c
SyscSetupInfo syscGetSetupInfoARDT(
  enum SyscAnalysisType analysisType,
  int restartsSupported,
  enum SyscDimension dimension,
  enum SyscTimeIntegration timeIntegration);
```

#### Fortran

A helper function has been added for creating SyscSetupInfo with specifying the time integration method for the participant:

```fortran
function syscGetSetupInfoF_ARDT(analysisType, &
  restartsSupported, dimension, timeIntegration) result(ret)
```

#### Python

A new constructor has been added for sysc.SetupInfo with specifying the time integration method for the participant:

```python
pySetupInfo=sysc.SetupInfo(sysc.Steady, False, sysc.Dimension_D2, sysc.TimeIntegration_Implicit)
```


# Release notes for 2024 R1

### 2D vector APIs

This change applies to C++, C, Fortran, and Python APIs.

#### C++

`sysc::OutputVectorData` and `sysc::InputVectorData` supports constructing both compact and split 2D vector data.

For example, the following new constructor function can used to create compact 2D vector data by passing sysc::Dimension::D2 to the dimension parameter.

```cpp
sysc::OutputVectorData (const double* data, std::size_t size, Dimension dimension);
sysc::InputVectorData (double* data, std::size_t size, Dimension dimension);
```

The following new constructor function has been added to create split 2D vector data, accepting two data pointers or arrays.

```cpp
sysc::OutputVectorData (const double* data1, const double* data2);
sysc::InputVectorData (double* data1, double* data2);
```

Note for `sysc::OutputComplexVector` and `sysc::InputComplexVectorData`, only 2D compact complex and compact vector formats are supported for now, and the new constructor below has been added to create 2D complex vector data by passing sysc::Dimension::D2 to the dimension parameter.

```cpp
OutputComplexVectorData(const double* dataComplex, std::size_t size, Dimension dimension);
InputComplexVectorData(double* dataComplex, std::size_t size, Dimension dimension);
```

#### C

For C, helper functions have been added for creating 2D vector data.

For compact 2D vector data (pass SyscD2 to dimension):

```c
SyscOutputVectorData syscGetOutputVectorDataCompactDoubleDim(
  const double *const data,
  size_t dataSize,
  enum SyscDimension dimension);
```

For split 2D vector data:

```c
SyscOutputVectorData syscGetOutput2DVectorDataSplitDouble(
  const double *const data0,
  const double *const data1,
  size_t dataSize);
```

For 2D compact complex and compact vector data (pass SyscD2 to dimension):

```c
SyscInputComplexVectorData syscGetInputCompactComplexCompactVectorDataDoubleDim(
  double *const data,
  size_t dataSize,
  enum SyscDimension dimension);
```

#### Fortran

For fortran, helper functions have been added for creating 2D vector data.

For compact 2D vector data (pass SyscD2 to dimension):

```fortran
function syscGetOutputVectorDataCompactDimF(&
    data, dataSize, dimension) result (ret)
```

For split 2D vector data:

```fortran
function syscGetOutput2DVectorDataSplitF(&
    data0, data1, dataSize) result (ret)
```

For 2D compact complex and compact vector data (pass SyscD2 to dimension):

```fortran
function syscGetOutputCompactComplexCompactVectorDataDimF(&
    data, dataSize, dimension) result (ret)
```

#### Python

For python, new constructors have been added for creating 2D vector data.

For compact 2D vector data:

```python
py2DVector=sysc.OutputVectorData(data0=data,dimension=sysc.Dimension_D2)
```

For split 2D vector data:

```python
py2DVector=sysc.OutputVectorData(data0=data0, data1=data1)
```

For 2D compact complex and compact vector data:

```python
py2DComplexVector=sysc.OutputComplexVectorData(data1=complexData,dimension=sysc.Dimension_D2)
```

### New APIs for create system coupling SetupInfo

#### C++

The following new constructor has been added for creating sysc::SetupInfo with specifying participant dimension:

```cpp
  SetupInfo(
    enum AnalysisType analysisType,
    bool restartsSupported,
    enum Dimension dimension);
```

#### C

A helper function has been added for creating SyscSetupInfo with specifying participant dimension:

```c
SyscSetupInfo syscGetSetupInfoARD(
  enum SyscAnalysisType analysisType,
  int restartsSupported,
  enum SyscDimension dimension);
```

#### Fortran

A helper function has been added for creating SyscSetupInfo with specifying participant dimension:

```fortran
function syscGetSetupInfoF_ARD(analysisType, &
  restartsSupported, dimension) result(ret)
```

#### Python

A new constructor has been added for sysc.SetupInfo with specifying participant dimension:

```python
pySetupInfo=sysc.SetupInfo(sysc.Steady,False,sysc.Dimension_D2)
```
