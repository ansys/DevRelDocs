# Access to heavyweight data

**Heavyweight data** are data representing mesh, point cloud, and solution field data.
Often, solvers store heavyweight data in contiguous arrays in
memory, and the participant library design takes advantage of this.
The participant solver provides heavyweight data access to the participant
library, but retains ownership of all heavyweight data (that is,
it is responsible for allocation and deallocation of those arrays).

For more information, see:

- [Relevant concepts](#relevant-concepts)
- [Data access functions](#data-access-functions)
- [Supported heavyweight data formats](#supported-heavyweight-data-formats)
- [Array data access structures](#array-data-access-structures)

## Relevant concepts

- **Input data**

  Input data is for input variables provided to the participant by
  System Coupling. The participant library
  needs to have read and write access to this data.

- **Output data**

  Output data is for output variables provided to System Coupling by the participant,
  including mesh data.
  The participant library needs to have read-only access to this data.

- **Scalar and Vector Data**

  Scalar data has one component.
  Temperature values are an example of scalar data.
  Vector data has the same number of components as there are dimensions,
  that is three components in 3-D cases and two components in 2-D cases.
  Nodal coordinates values are an example of vector data.

- **Real and Complex Data Types**

  System Coupling supports for real- and complex-valued variables.
  Complex values have real and imaginary components.
  Term real is usually omitted, so unless data is specifically
  referred to as complex, real-valued data should be assumed.

- **Integer**

  Integer data contains integers.
  An array of mesh node ids is an example of integer data.

- **Data access function**

  A data access function is a *callback* function implemented by the
  participant solver and registered with the participant library.
  The participant library will call this function when it
  needs to access the heavyweight data.
  For a coupled analysis, all required data
  access functions must be registered prior to
  [*coupled analysis initialization*](participant-steps-in-coupled-analysis.md).
  For mapping, all required data
  access functions must be registered prior to
  [*inputs update*](participant-steps-for-mapping.md).

## Data access functions

To provide access to the heavyweight data,
the participant must also implement data access
functions which return the data access structures and register them
with the participant library.
These functions are called from within the participant
library, that is they are *callback* functions.

The following functions may need to be implemented:

- Function to access input scalar data (***input scalar data access***)

- Function to access input vector data (***input vector data access***)

- Function to access output scalar data (***output scalar data access***)

- Function to access output vector data (***output vector data access***)

- Function to access input complex scalar data (***input complex scalar data access***)

- Function to access input complex vector data (***input complex vector data access***)

- Function to access output complex scalar data (***output complex scalar data access***)

- Function to access output complex vector data (***output complex vector data access***)

- Function to access surface mesh (***surface mesh access***)

- Function to access volume mesh (***volume mesh access***)

- Function to access point cloud (***point cloud access***)

There is no need to implement and register functions that will not be used.
For example, if there are no scalar output variables,
it is not necessary to implement and register the function for
output scalar variable access.

For information on how to implement data access functions,
see Tutorial: Heat Transfer in Square Channel Air Flow.

### C++

Data access function prototypes are defined in the following header file:

- `SystemCouplingParticipant/FunctionTypes.hpp`

### C

Data access function prototypes are defined in the following header file:

- `syscFunctionTypes.h`

### Fortran

Data access function interfaces are defined in the following header
file (located either in **FortranFreeForm** or **FortranFixedForm**
sub-directory, depending on desired Fortran layout):

- `syscFunctionTypesF.fi`

### Python

Data access function prototypes closely follow those in C++.

## Supported heavyweight data formats

The compatible formats for heavyweight data are:

- **Integer arrays**
  - 32-bit signed integer arrays (for mesh connectivity information)
    - C/C++ `int32_t`
    - FORTRAN `integer(kind=4)`
    - Python numpy arrays with datatype `int32`
  - 64-bit signed integer arrays (for mesh connectivity information)
    - C/C++ `int64_t`
    - FORTRAN `integer(kind=8)`
    - Python numpy arrays with datatype `int64`
  - 16-bit unsigned integer arrays (for mesh connectivity information)
    - C/C++ `uint16_t`
    - Python numpy arrays with datatype `uint16`
  - 64-bit unsigned integer arrays (for mesh connectivity information)
    - C/C++ `uint64_t`
    - Python numpy arrays with datatype `uint64`
- **Scalar arrays**
  - 64-bit floating point arrays (for scalar variable field values)
    - C/C++ `double`
    - FORTRAN `real(kind=8)`
    - Python numpy arrays with datatype `float64`
  - 32-bit floating point arrays (for scalar variable field values)
    - C/C++ `float`
    - FORTRAN `real(kind=4)`
    - Python numpy arrays with datatype `float32`
- **Vector arrays**
  - 32-bit floating point arrays (for vector variable field values and for mesh node coordinates)
    - C/C++ `float`
    - FORTRAN `real(kind=4)`
    - Python numpy arrays with datatype `float32`
  - 64-bit floating point arrays (for vector variable field values and for mesh node coordinates)
    - C/C++ `double`
    - FORTRAN `real(kind=8)`
    - Python numpy arrays with datatype `float64`
- **Complex scalar arrays**
  - 64-bit floating point complex number arrays (for complex scalar variable field values)
    - C++ `std::complex<double>`
    - C/C++ `double`
    - Python numpy arrays with datatype `complex128`
  - 32-bit floating point complex number arrays (for complex scalar variable field values)
    - C++ `std::complex<float>`
    - C/C++ `float`
    - Python numpy arrays with datatype `complex64`

  Different layouts of vector data are supported
  - **Compact layout**

    (for example, a single array storing each vector one after another)
    - Three dimensional vector
      - `[x0, y0, z0, x1, y1, z1, ..., xN, yN, zN]`
    - Two dimensional vector
      - `[x0, y0, x1, y1, ..., xN, yN]`

  - **Split layout**

    (for example, a separate array for each vector component)
    - `[x0, x1, .., xN]`
    - `[y0, y1, .., yN]`
    - `[z0, z1, .., zN]` (Not required for split vector in 2D)

  Different layouts of complex data are supported
  - **Compact complex scalar layout**

    (for example, a single array storing each real and imaginary component one after another)
    - `[real_0, imag_0, real_1, imag_1, ..., real_N, imag_N]`

  - **Split complex scalar layout**

    (for example, two separate arrays, one for real and one for imaginary components)
    - `[real_0, real_1, ..., real_N]`
    - `[imag_0, imag_1, ..., imag_N]`

  - **Compact complex compact vector layout**

    (for example, a single array storing each real and imaginary component one after another)
    Note that this is the only layout currently supported in Fortran.
    - Three dimensional vector
      - `[x0_real, x0_imag, y0_real, y0_imag, z0_real,z0_imag, ..., xN_real, xN_imag, yN_real, yN_imag, zN_real, zN_imag]`
    - Two dimensional vector
      - `[x0_real, x0_imag, y0_real, y0_imag, ..., xN_real, xN_imag, yN_real, yN_imag]`

  - **Split complex compact vector layout**

    (for example, a separate array for real and imaginary components)
    - `[x0_real, y0_real, z0_real, x1_real, y1_real, z1_real, ..., xN_real, yN_real, zN_real]`
    - `[x0_imag, y0_imag, z0_imag, x1_imag, y1_imag, z1_imag, ..., xN_imag, yN_imag, zN_imag]`

  - **Compact complex split vector layout**

    (for example, a separate array for each vector component)
    - `[x0_real, x0_imag, x1_real, x1_imag, x2_real, x2_imag, ..., xN_real, xN_imag]`
    - `[y0_real, y0_imag, y1_real, y1_imag, y2_real, y2_imag, ..., yN_real, yN_imag]`
    - `[z0_real, z0_imag, z1_real, z1_imag, z2_real, z2_imag, ..., zN_real, zN_imag]`

  - **Compact complex split vector layout**

    (for example, separate arrays vector components and complex components)
    - `[x0_real, x1_real, x2_real, ..., xN_real]`
    - `[x0_imag, x1_imag, x2_imag, ..., xN_imag]`
    - `[y0_real, y1_real, y2_real, ..., yN_real]`
    - `[y0_imag, y1_imag, y2_imag, ..., yN_imag]`
    - `[z0_real, z1_real, z2_real, ..., zN_real]`
    - `[z0_imag, z1_imag, z2_imag, ..., zN_imag]`

> **Note:**
>
> - If vector data is stored in a single array where
>    the vector components are separated
>    (for example, `[x0, x1, ..., y0, y1, ..., z0, z1, zN]`),
>    then it can be handled as a special case of split layout.
>
> - If vector data is stored in a two-dimensional array, then it can be
>      handled as a special case of one of the above layouts.

If the participant solver stores heavyweight data in a format compatible with the participant library,
then this reduces the need to make unnecessary copies of the data and thus improves the memory efficiency.
The participant solver should implement and register data access functions that provide direct access to that heavyweight data.

If the data is stored in a format that is not directly compatible with the participant library,
then the participant solver should create compatible heavyweight data structures and register data access
functions that provide access to that heavyweight data.
In such a case, the participant solver should make sure that this heavyweight data and the original data are synchronized at certain steps.

For mapping, the heavyweight data and the original data should be synchronized
at certain [steps during mapping](participant-steps-for-mapping.md):

- Before **inputs update**, the heavyweight input and output data are expected to be available.
  Output data, including the mesh data, should contain valid up-to-date values.

- After **inputs update** completes, all input variable values will be up-to-date in the heavyweight data.
  The participant should make sure that the latest input values are available in the original data structures
  before processing that data.

For a coupled analysis, the heavyweight data and the original data should be synchronized
at certain [steps during the coupled analysis](participant-steps-in-coupled-analysis.md):

- Before **coupled analysis initialization** is entered, the heavyweight input and output data are expected to be available.
  Output data, including the mesh data, should contain valid initial values.

- After **inputs update** completes, all input variable values will be up-to-date in the heavyweight data.
  The participant should make sure that the latest input values are available in the original data structures
  before doing solver iterations.

- Before **outputs update** is entered, the participant should make sure that the heavyweight data contains the
  updated values for all the output variables, as well as for the mesh.

## Array data access structures

Access to heavyweight data is provided via creating
**data access data structures** and implementing **data access functions** (*callback* functions) that
provide these structures to the participant library. This section discusses the following
data access structures:

- `OutputIntegerData`
- `OutputScalarData`
- `OutputVectorData`
- `InputScalarData`
- `InputVectorData`
- `OutputComplexScalarData`
- `OutputComplexVectorData`
- `InputComplexScalarData`
- `InputComplexVectorData`

These structures provide access to data stored in arrays. This section focuses
on these structures. These structures can be
combined into higher-level structures to provide access to mesh and point cloud data.
See [Mesh and point cloud data access](mesh-data-access.md) for more details.

The array data access structures require three pieces of information during their
initialization (depending on the target language, some of this information is deduced
automatically and does not need to be explicitly specified):

1. Primitive type of data (for example, float, double, unsigned 16-bit integer, etc.)
2. Access to the heavyweight data (for example, array pointers).
3. Extents of the data (for example, array sizes)

The following examples show how to create data access structures to provide access to heavyweight data to
the participant library.

### Integer data structure examples

#### Example: Output integer data

In this example, the mesh node ids are stored as an array of
unsigned 64-bit integer values. To provide access to this variable,
create the `OutputIntegerData` structure as shown below.

##### C++

```cpp
// heavyweight array(s)
std::uint64_t nodeIds[] = { 1, 2, 3, 4 };
std::size_t numIntegers = 4;

// creating corresponding data access structure
sysc::OutputIntegerData nodeIdData(nodeIds, numIntegers);
```

Note that for C++, if data is stored in STL Vector container, that container can be
used directly. See [Example Input Scalar in an STL Vector Container (C++ only)](#example-input-scalar-in-an-stl-vector-container-c-only).

##### C

For C, a helper function `syscGetOutputIntegerDataUInt64` is provided for this case.

```c
/* heavyweight array(s) */
uint64_t nodeIds[] = { 1, 2, 3, 4 };
size_t numIntegers = 4;

/* creating corresponding data access structure */
SyscOutputIntegerData nodeIdData = syscGetOutputIntegerDataUInt64(
    nodeIds, numIntegers);
```

##### Fortran

For Fortran, a helper function `syscGetOutputIntegerDataF` is provided
for this case.

```fortran
! heavyweight array(s)
integer(kind=8), target :: nodeIds(4) = (/ 1, 2, 3, 4 /)

! creating corresponding data access structure
type(SyscOutputIntegerDataF) :: nodeIdData
nodeIdData = syscGetOutputIntegerDataF(nodeIds, size(nodeIds, kind=8))
```

##### Python

For Python, any C-style array can be used to create `OutputIntegerData` object,
with the help of ctypes module.

```python
import ctypes

# heavyweight array(s)
numIntegers = 4
nodeIds = (ctypes.c_uint64 * numIntegers)()
nodeIds[0] = 1
nodeIds[1] = 2
nodeIds[2] = 3
nodeIds[3] = 4

nodeIdData = sysc.OutputIntegerData(
    data = ctypes.c_void_p(ctypes.addressof(nodeIds)), 
    primitiveType = sysc.UnsignedInt64, 
    dataSize = numIntegers)
```

Note that for Python, if data is stored in a Numpy array container, that container can be
used directly. See [Example Output Integer Data in a Numpy Array Container (Python only)](#example-output-integer-data-in-a-numpy-array-container-python-only).

### Scalar data structure examples

#### Example: Input scalar data

In this example, the participant solver has values of an
input scalar variable stored in memory as a double-precision array.
To provide access to this variable,
create the `InputScalarData` structure as shown below.

##### C++

```cpp
// heavyweight array(s)
double temperature[] = { 1.0, 2.0, 3.0, 4.0 };
std::size_t numScalars = 4;

// creating corresponding data access structure
sysc::InputScalarData temperatureData(temperature, numScalars);
 ```

##### C

For C, a helper function `syscGetInputScalarDataDouble` is provided for this case.

 ```c
/* heavyweight array(s) */
double temperature[] = { 1.0, 2.0, 3.0, 4.0 };
size_t numScalars = 4;

/* creating corresponding data access structure */
SyscInputScalarData temperatureData = syscGetInputScalarDataDouble(
    temperature, numScalars);
 ```

##### Fortran

For Fortran, a helper function `syscGetInputScalarDataF` is provided
for this case.

 ```fortran
! heavyweight array(s)
real(kind=8), target :: temperature(4) = (/ 1.0, 2.0, 3.0, 4.0 /)

! creating corresponding data access structure
type(SyscInputScalarDataF) :: temperatureData
temperatureData = syscGetInputScalarDataF(temperature, size(temperature, kind=8))
  ```

##### Python

For Python, numpy arrays can be passed in to create `InputScalarData` object.

```python
import numpy as np
from pyExt import SystemCouplingParticipant as sysc

temperature = np.array([1, 2, 3, 4], dtype = np.float64)
temperatureData = sysc.InputScalarData(temperature)
```

#### Example: Output scalar data

In this example, the participant solver has values of an
output scalar variable stored in memory as a single-precision array.
To provide access to this variable,
create the `OutputScalarData` structure as shown below.

##### C++

```cpp
// heavyweight array(s)
float heatflow[] = { 1.0, 2.0, 3.0, 4.0 };
std::size_t numScalars = 4;

// creating corresponding data access structure(s)
sysc::OutputScalarData heatflowData(heatflow, numScalars);
 ```
  
##### C

For C, a helper function `syscGetOutputScalarDataFloat` is provided for this case.

```c
/* heavyweight array(s) */
float heatflow[] = { 1.0, 2.0, 3.0, 4.0 };
size_t numScalars = 4;

/* creating corresponding data access structure(s) */
SyscOutputScalarData heatflowData = 
    syscGetOutputScalarDataFloat(heatflow, numScalars);
```

##### Fortran

For Fortran, a helper function `syscGetOutputScalarDataF` is provided
for this case.

```fortran
! heavyweight array(s)
real(kind=4), target :: heatflow(4) = (/ 1.0, 2.0, 3.0, 4.0 /)

! creating corresponding data access structure(s)
type(SyscOutputScalarDataF) :: heatflowData
heatflowData = syscGetOutputScalarDataF(heatflow, size(heatflow, kind=8))
```

##### Python

For Python, numpy arrays can be passed in to create `OutputScalarData` object.

```python
import numpy as np
from pyExt import SystemCouplingParticipant as sysc

heatflow = np.array([1, 2, 3, 4], dtype = np.float32)
heatflowData = sysc.OutputScalarData(heatflow)
```

### Vector data structure examples

Vector data storage can be categorized as either compact or split storage.
Examples are provided for both categories.

#### Example: Compact input vector data in a one-dimensional array

In this example, the participant solver has values of an
input vector variable stored in memory as a compact one-dimensional array.
To provide access to this variable, create the `InputVectorData` structure as shown below.

Note that the size provided is 10 &mdash; there are 10 vectors,
each with 3 components. So, the total size of the array
in memory is 30, but the size passed in here
must be 10, not 30.

##### C++

```cpp
// heavyweight array(s)
double displacement[] = { 0, 0, 0, 0.25, 0, 0, 0.5, 0, 0, 0.75, 0, 0, 1, 0, 0, 0, 0.1, 0, 0.25, 0.1, 
0, 0.5, 0.1, 0, 0.75, 0.1, 0, 1, 0.1, 0 };
std::size_t numVectors = 10;

// creating corresponding data access structure(s)
sysc::InputVectorData displacementData(displacement, numVectors);
```

##### C

For C, a helper function `syscGetInputVectorDataCompactDouble` is
provided for this case.

```c
/* heavyweight array(s) */
double displacement[] = { 0, 0, 0, 0.25, 0, 0, 0.5, 0, 0, 0.75, 0, 0, 1, 0, 0, 0, 0.1, 0, 0.25, 0.1, 
0, 0.5, 0.1, 0, 0.75, 0.1, 0, 1, 0.1, 0 };
size_t numVectors = 10;

/* creating corresponding data access structure(s) */
SyscInputVectorData displacementData =
    syscGetInputVectorDataCompactDouble(displacement, numVectors);
```

##### Fortran

For Fortran, a helper function `syscGetInputVectorDataCompactF` is provided
for this case.

```fortran
! heavyweight array(s)
real(kind=8), target :: displacement(30) = (/ 0D0, 0D0, 0D0, 0.25D0, 0D0, 0D0, 0.5D0, 0D0, 0D0, 0.75D0, 0D0, 0D0, 1D0, 0D0, 0D0, 0D0, 0.1D0, 0D0, 0.25D0, 0.1D0, 0D0, 0.5D0, 0.1D0, 0D0, 0.75D0, 0.1D0, 0D0, 1D0, 0.1D0, 0D0 /)
integer(kind=8) :: numVectors = 10

! creating corresponding data access structure(s)
type(SyscInputVectorDataF) :: displacementData
displacementData = syscGetInputVectorDataCompactF(displacement, numVectors)
```

##### Python

For Python, numpy arrays can be passed in to create `InputVectorData` object.

```python
import numpy as np
from pyExt import SystemCouplingParticipant as sysc

displacement = np.array(
    [0, 0, 0, 0.25, 0, 0, 0.5, 0, 0, 0.75, 0, 0, 1, 0, 0,
    0, 0.1, 0, 0.25, 0.1, 0, 0.5, 0.1, 0, 0.75, 0.1, 0, 1, 0.1, 0],
    dtype = np.float64)

displacementData = sysc.InputVectorData(displacement)
```

#### Example: Compact output vector data in a two-dimensional array

In this example, the participant solver has values of an
output vector variable stored in memory as a compact two-dimensional array.
To provide access to this variable, create the `OutputVectorData` structure as shown below.

Note that the size provided is 2 &mdash; there are 2 vectors,
each with 3 components.

##### C++

```cpp
// heavyweight array(s)
const std::size_t numVectors = 2;
const std::size_t numComponents = 3;
float force[numVectors][numComponents] = {{0.0, 0.0, 0.0}, {1.0, 1.0, 1.0}};

// creating corresponding data access structure(s)
sysc::OutputVectorData forceData(&force[0][0], numVectors);
 ```

##### C

For C, a helper function `syscGetOutputVectorDataCompactFloat` is
provided for this case.

```c
/* heavyweight array(s) */
#define NUMVECTORS 2
#define NUMCOMPONENTS 3
float force[NUMVECTORS][NUMCOMPONENTS] = {{0.0, 0.0, 0.0}, {1.0, 1.0, 1.0}};

/* creating corresponding data access structure(s) */
SyscOutputVectorData forceData = 
    syscGetOutputVectorDataCompactFloat(&force[0][0], NUMVECTORS);
```

##### Fortran

For Fortran, a helper function `syscGetOutputVectorDataCompactF` is provided
for this case.

Note that Fortran stores data in column-major order, so compactly stored two-dimensional array
has component as first index and vector as second index.

```fortran
! heavyweight array(s)
integer(kind=8), parameter :: numVectors = 2
integer(kind=4), parameter :: numComponents = 3
real(kind=4), target :: force(numComponents, numVectors)
force(1, 1) = 0D0
force(2, 1) = 0D0
force(3, 1) = 0D0
force(1, 2) = 1D0
force(2, 2) = 1D0
force(3, 2) = 1D0

! creating corresponding data access structure(s)
type(SyscOutputVectorDataF) :: forceData
forceData = syscGetOutputVectorDataCompactF(force, numVectors)
```

##### Python

For Python, numpy arrays can be passed in to create `OutputVectorData` object.

```python
import numpy as np
from pyExt import SystemCouplingParticipant as sysc

force = np.array([[0, 0, 0], [1, 1, 1]], dtype = np.float32)

forceData = sysc.OutputVectorData(force)
```

#### Example: Split input vector data in separate arrays

In this example, the participant solver has values of an
input vector variable stored in memory as three separate arrays, one
array per component.
To provide access to this variable, create the `InputVectorData` structure as shown below.

Note that the size provided is 4 &mdash; there are 4 vectors,
each with 3 components.

##### C++

```cpp
// heavyweight array(s)
double dx[] = { 1.0, 2.0, 3.0, 4.0 };
double dy[] = { 1.0, 2.0, 3.0, 4.0 };
double dz[] = { 1.0, 2.0, 3.0, 4.0 };
std::size_t numVectors = 4;

// creating corresponding data access structure(s) */
sysc::InputVectorData displacementData(dx, dy, dz, numVectors);
 ```
  
##### C

For C, a helper function `syscGetInputVectorDataSplitFloat` is provided
for this case.

 ```c
/* heavyweight array(s) */
double dx[] = { 1.0, 2.0, 3.0, 4.0 };
double dy[] = { 1.0, 2.0, 3.0, 4.0 };
double dz[] = { 1.0, 2.0, 3.0, 4.0 };
size_t numVectors = 4;

/* creating corresponding data access structure(s) */
SyscInputVectorData displacementData = 
    syscGetInputVectorDataSplitFloat(dx, dy, dz, numVectors);
 ```

##### Fortran

For Fortran, a helper function `syscGetInputVectorDataSplitF` is provided
for this case.

```fortran
! heavyweight array(s)
integer(kind=8), parameter :: numVectors = 4
real(kind=8), target :: dx(numVectors) = (/ 1.0, 2.0, 3.0, 4.0 /)
real(kind=8), target :: dy(numVectors) = (/ 1.0, 2.0, 3.0, 4.0 /)
real(kind=8), target :: dz(numVectors) = (/ 1.0, 2.0, 3.0, 4.0 /)

! creating corresponding data access structure(s)
type(SyscInputVectorDataF) :: displacementData
displacementData = syscGetInputVectorDataSplitF(dx, dy, dz, numVectors)
```

##### Python

For Python, numpy arrays can be passed in to create `InputVectorData` object.

```python
import numpy as np
from pyExt import SystemCouplingParticipant as sysc

dx = np.array([1, 2, 3, 4], dtype = np.float64)
dy = np.array([1, 2, 3, 4], dtype = np.float64)
dz = np.array([1, 2, 3, 4], dtype = np.float64)

displacementData = sysc.InputVectorData(dx, dy, dz)
```

#### Example: Split output vector data in a two-dimensional array

In this example, the participant solver has values of an
output vector variable stored in memory as a split two-dimensional array.
To provide access to this variable, create the `OutputVectorData` structure as shown below.

Note that the size provided is 2 &mdash; there are 2 vectors,
each with 3 components.

##### C++

```cpp
// heavyweight array(s)
const std::size_t numVectors = 2;
const std::size_t numComponents = 3;
double coords[numComponents][numVectors] = {{0.0, 1.0}, {0.0, 1.0}, {0.0, 1.0}};

// creating corresponding data access structure(s)
sysc::OutputVectorData coordsData(&coords[0][0], &coords[1][0], &coords[2][0], numVectors);
```

##### C

For C, a helper function `syscGetOutputVectorDataSplitDouble` is
provided for this case.

```c
/* heavyweight array(s) */
#define NUMVECTORS 2
#define NUMCOMPONENTS 3
double coords[NUMCOMPONENTS][NUMVECTORS] = {{0.0, 1.0}, {0.0, 1.0}, {0.0, 1.0}};

/* creating corresponding data access structure(s) */
SyscOutputVectorData coordsData = 
    syscGetOutputVectorDataSplitDouble(
        &coords[0][0],
        &coords[1][0],
        &coords[2][0],
        NUMVECTORS);
```

##### Fortran

For Fortran, a helper function `syscGetOutputVectorDataSplitF` is provided for this case.

Note that Fortran stores data in column-major order, so non-compactly stored two-dimensional array
has the vector as the first index and the vector component as the second index.

```fortran
! heavyweight array(s)
integer(kind=8), parameter :: numVectors = 2
integer(kind=4), parameter :: numComponents = 3
real(kind=8), target :: coords(numVectors, numComponents)
coords(1, 1) = 0D0
coords(1, 2) = 0D0
coords(1, 3) = 0D0
coords(2, 1) = 1D0
coords(2, 2) = 1D0
coords(2, 3) = 1D0

! creating corresponding data access structure(s)
type(SyscOutputVectorDataF) :: coordsData
coordsData = syscGetOutputVectorDataSplitF(coords, numVectors)
```

##### Python

For Python, numpy arrays can be passed in to create `OutputVectorData` object.

```python
import numpy as np
from pyExt import SystemCouplingParticipant as sysc

coords = np.array([[0, 1], [0, 1], [0, 1]], dtype = np.float64)

coordsData = sysc.OutputVectorData(coords[0], coords[1], coords[2])
```

#### Example: Compact output complex vector data in a two-dimensional array, compact layout

In this example, the participant solver has values of an
output vector variable stored in memory as a split two-dimensional array.
To provide access to this variable, create the `OutputComplexVectorData` structure as shown below.

Note that the size provided is 2 &mdash; there are 2 vectors,
each with 3 components, and each component is a complex number.

##### C++

```cpp
// heavyweight array(s)
const std::size_t numVectors = 2;
const std::size_t numComponents = 3;
std::complex<double> values[numVectors][numComponents] = {
  {
    std::complex<double>(0.0, 1.0), 
    std::complex<double>(0.0, 1.0),
    std::complex<double>(0.0, 1.0)
  },
  {
    std::complex<double>(0.0, 1.0),
    std::complex<double>(0.0, 1.0),
    std::complex<double>(0.0, 1.0)
  }};

// creating corresponding data access structure(s)
sysc::OutputComplexVectorData data(&values[0][0], numVectors);
```

##### C

For C, a helper function `syscGetOutputCompactComplexCompactVectorDataDouble` is provided for this case.

```c
/* heavyweight array(s) */
#define NUMVECTORS 2
#define NUMCOMPONENTS 3
#define NUMCOMPLEX 2
double values[NUMVECTORS][NUMCOMPONENTS][NUMCOMPLEX] = {
  {
    {0.0, 1.0}, {0.0, 1.0}, {0.0, 1.0}
  }, 
  {
    {0.0, 1.0}, {0.0, 1.0}, {0.0, 1.0}
  }};

/* creating corresponding data access structure(s) */
SyscOutputComplexVectorData data = 
    syscGetOutputCompactComplexCompactVectorDataDouble(
        &values[0][0][0],
        NUMVECTORS);
```

##### Fortran

For Fortran, a helper function `syscGetOutputComplexVectorDataCompactF` is provided for this case.

Note that Fortran stores data in column-major order, so compactly stored two-dimensional array
has the vector component as the first index and the vector as the second index.

```fortran
! heavyweight array(s)
integer(kind=8), parameter :: numVectors = 2
integer(kind=4), parameter :: numComponents = 3
complex(kind=8), target :: values(numVectors, numComponents) = &
reshape((/ (0.0D0, 1.0D0), (0.0D0, 1.0D0), (0.0D0, 1.0D0), &
           (0.0D0, 1.0D0), (0.0D0, 1.0D0), (0.0D0, 1.0D0), /), shape(values))

! creating corresponding data access structure(s)
type(SyscOutputComplexVectorDataF) :: data
data = syscGetOutputComplexVectorDataCompctF(values, numVectors)
```

##### Python

For Python, numpy arrays can be passed in to create `OutputComplexVectorData` object.

```python
import numpy as np
from pyExt import SystemCouplingParticipant as sysc

values = np.array([[0.0 + 1.0j, 0.0 + 1.0j, 0.0 + 1.0j], [0.0 + 1.0j, 0.0 + 1.0j, 0.0 + 1.0j]], dtype = np.float64)

coordsData = sysc.OutputVectorData(values)
```

### Other Examples

#### Example input scalar in an STL vector container (C++ only)

In this example, the participant solver has an input scalar
variable stored in memory as an STL vector.

To provide access to this array, create the `InputScalarData`
structure as shown below.

Note that the size does not need to
be provided because it can be automatically deduced from the
STL vector size.

##### C++

```cpp
// heavyweight array(s)
std::size_t numScalars = 15;
std::vector<double> temperature = {100.0, 200.0, 300.0, 400.0};

// creating corresponding data access structure(s)
sysc::InputScalarData temperatureData(temperature); 
```

#### Example output integer data in a numpy array container (Python only)

In this example, the participant solver has an output integer data
stored in memory as a numpy array.

To provide access to this array, create the `OutputIntegerData`
structure as shown below.

Note that the size does not need to
be provided because it can be automatically deduced from the
Numpy array size.

##### Python

```python
import numpy as np
from pyExt import SystemCouplingParticipant as sysc

# heavyweight array(s)
nodeIds = np.array([1, 2, 3, 4], dtype = np.uint64)

# creating corresponding data access structure(s)
nodeIdData = sysc.OutputIntegerData(nodeIds)
```

#### Example: 2D input vector data in a one-dimensional array (C++ only)

In this example, the participant solver has values of an
input vector variable stored in memory as a compact one-dimensional array.
To provide access to this variable, create the 2D `InputVectorData` structure as shown below.

Note that the size provided is 15 for 2D vector data &mdash; there are 15 vectors, each with 2 components.
The total size of the array in memory is 30, but the size passed in here must be 15, not 30.

```cpp
// heavyweight array(s)
double displacement[] = { 0, 0, 0, 0.25, 0, 0, 0.5, 0, 0, 0.75, 0, 0, 1, 0, 0, 0, 0.1, 0, 0.25, 0.1, 
0, 0.5, 0.1, 0, 0.75, 0.1, 0, 1, 0.1, 0 };
std::size_t numVectors = 15;

// creating corresponding data access structure(s)
sysc::InputVectorData displacementData2D(displacement, numVectors, sysc::Dimension::D2);
```

#### Example: 2D compact output vector data in a two-dimensional array (C only)

In this example, the participant solver has values of an
output vector variable stored in memory as a compact two-dimensional array.
To provide access to this variable, create the 2D `OutputVectorData` structure as shown below.

Note for 2D vector, the size provided is 2 &mdash; there are 2 vectors, each with 2 components.

A helper C function `syscGetOutputVectorDataCompactFloat` is
provided for either 2D and 3D vector case depending on the dimension value.

```c
/* heavyweight array(s) */
#define NUMVECTORS 2
#define NUMCOMPONENTS 2
float force2D[NUMVECTORS][NUMCOMPONENTS] = {{0.0, 0.0}, {1.0, 1.0}};

/* creating corresponding data access structure(s) */
SyscOutputVectorData forceData2D = 
    syscGetOutputVectorDataCompactFloatDim(&force[0][0], NUMVECTORS, SyscD2);
```

#### Example: Split input vector data in separate arrays (Fortran only)

In this example, the participant solver has values of an
input vector variable stored in memory as three separate arrays, one
array per component.
To provide access to this variable, create the 2D `InputVectorData` structure as shown below.

Note that for 2D vector the size provided is 4 &mdash; there are 4 vectors, each with 2 components.

A helper Fortran function `syscGetInput2DVectorDataSplitF` is provided for 2D vector case.

```fortran
! heavyweight array(s)
integer(kind=8), parameter :: numVectors = 4
real(kind=8), target :: dx(numVectors) = (/ 1.0, 2.0, 3.0, 4.0 /)
real(kind=8), target :: dy(numVectors) = (/ 1.0, 2.0, 3.0, 4.0 /)

! creating corresponding data access structure(s)
type(SyscInputVectorDataF) :: displacementData2D
displacementData2D = syscGetInput2DVectorDataSplitF(dx, dy, numVectors)
```

#### Example: 2D split output vector data in a two-dimensional array (Python only)

In this example, the participant solver has values of an
output vector variable stored in memory as a split two-dimensional array.
To provide access to this variable, create the 2D `OutputVectorData` structure as shown below.

Note that for 2D vector the size provided is 2 &mdash; there are 2 vectors, each with 2 components.

For Python, numpy arrays can be passed in to create 2D `OutputVectorData` object.

```python
import numpy as np
from pyExt import SystemCouplingParticipant as sysc

coords = np.array([[0, 1], [0, 1]], dtype = np.float64)

coordsData2D = sysc.OutputVectorData(coords[0], coords[1])
```

#### Example: 2D compact output complex vector data in a two-dimensional array, compact layout (C++ only)

In this example, the participant solver has values of an
output vector variable stored in memory as a split two-dimensional array.
To provide access to this variable, create the 2D `OutputComplexVectorData` structure as shown below.

Note that for 2D complex vector the size provided is 2 &mdash; there are 2 vectors, each with 2 components, and each component is a complex number.

##### C++

```cpp
// heavyweight array(s)
const std::size_t numVectors = 2;
const std::size_t numComponents = 2;
std::complex<double> values2D[numVectors][numComponents] = {
  {
    std::complex<double>(0.0, 1.0), 
    std::complex<double>(0.0, 1.0)
  },
  {
    std::complex<double>(0.0, 1.0),
    std::complex<double>(0.0, 1.0)
  }};

// creating corresponding data access structure(s)
sysc::OutputComplexVectorData data2D(&values2D[0][0], numVectors);
```
