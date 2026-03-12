# File mopsolver_api2.h

![][C++]

**Location**: `mopsolver\_api2.h`



**version**\
$Rev$

## Includes

* [mopsolver_api2_shared.h](df/d6e/mopsolver__api2__shared_8h.md#df/d6e/mopsolver__api2__shared_8h)


```mermaid
graph LR
1["mopsolver_api2.h"]
click 1 "d7/df7/mopsolver__api2_8h.md#d7/df7/mopsolver__api2_8h"
1 --> 2

2["mopsolver_api2_shared.h"]
click 2 "df/d6e/mopsolver__api2__shared_8h.md#df/d6e/mopsolver__api2__shared_8h"
2 --> 3

3["mopsolver_api_shared.h"]
click 3 "d8/df9/mopsolver__api__shared_8h_source.md#d8/df9/mopsolver__api__shared_8h_source"

```


## Functions

<a id="d7/df7/mopsolver__api2_8h_1aeb725607d79714dac00a68915c3b0173"></a>
### Function dmop2\_hasSurrogate

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_hasSurrogate(const char *_omdbfile)
```




test binfile if it contains Surrogate Data 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang database file (*.omdb) containing MOP


**Returns**:

zero if Surrogate is found



**Parameters**:

* const char * **_omdbfile**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="d7/df7/mopsolver__api2_8h_1ac1280ce7eec776cb615b9021dde4b49c"></a>
### Function dmop2\_getDimensions

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_getDimensions(const char *_omdbfile, unsigned int _flags, unsigned int *_dimensions, unsigned int _size_dimensions)
```




retrieves problem dimensions based on the flags 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_flags**: uint value representing the specified flags (see enum DMOP_DIMENSION_FLAG)
* **_dimensions**: preallocated uint array for returning the dimensions. The length and order of the array depends on set flags: 1: DIM_INPUTS : 1 2: DIM_OUTPUTS : 1 3: DIM_CRITERIA : 1
* **_size_dimensions**: number of elements of the preallocated dimensions array


**Returns**:

zero if the dimensions could be determined



**Parameters**:

* const char * **_omdbfile**
* unsigned int **_flags**
* unsigned int * **_dimensions**
* unsigned int **_size_dimensions**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="d7/df7/mopsolver__api2_8h_1a4edf6d82a0e1c63e8cdc4f2f56982791"></a>
### Function dmop2\_solve

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_solve(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, unsigned int _size_inputs, unsigned int _flags, double *_responses, unsigned int _size_responses)
```




approximates the active response values based on their best metamodel for any given design point 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_num_designs**: number of design points for which response values should be approximated
* **_inputs**: pointer to array of consecutive input values per design point. The length of the array is to be expected as ( _num_designs * dmop_getDimensions._num_inputs )
* **_size_inputs**: number of elements of _inputs
* **_flags**: integer value representing the set flags (see enum DMOP_SOLVE_FLAG)
* **_responses**: pointer to array of consecutive response values approximated per design point. The length of the array depends on set flags: 1: SOLVE_RESPONSES : Number of designs * number of responses 2: SOLVE_CRITERIA : Number of designs * number of criteria 3: SOLVE_DENSITIES : Number of designs 4: SOLVE_ERRORS : Number of designs * 4
* **_size_responses**: the size of the preallocated response array


**Returns**:

zero if the approximation succeeded



**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* unsigned int **_size_inputs**
* unsigned int **_flags**
* double * **_responses**
* unsigned int **_size_responses**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="d7/df7/mopsolver__api2_8h_1a15b7852cc667da87359ab69d62073526"></a>
### Function dmop2\_get\_per\_response

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_get_per_response(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, unsigned int _size_inputs, const char *_response_name, unsigned int _flags, double *_responses, unsigned int _size_responses)
```




approximates the active response values based on their best metamodel for any given design point 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_num_designs**: number of design points for which response values should be approximated
* **_inputs**: pointer to array of consecutive input values per design point. The length of the array is to be expected as ( _num_designs * dmop_getDimensions._num_inputs )
* **_size_inputs**: number of elements of _inputs
* **_response_name**: zero terminated character string containing the name of the response
* **_flags**: integer value representing the set flags (see enum DMOP_PER_RESPONSE_FLAG)
* **_responses**: pointer to array of consecutive response values approximated per design point. The length and order of the array depends on set flags: 1: RESP_GRADIENTS : Number of designs * number of inputs 2: RESP_DENSITIES : Number of designs 3: RESP_ERRORS : Number of designs * 4
* **_size_responses**: the number of elements of the preallocated response array


**Returns**:

zero if the approximation succeeded



**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* unsigned int **_size_inputs**
* const char * **_response_name**
* unsigned int **_flags**
* double * **_responses**
* unsigned int **_size_responses**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="d7/df7/mopsolver__api2_8h_1af195ed8a6a545eb166ccf2cb3320c8d8"></a>
### Function dmop2\_getNames

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_getNames(const char *_omdbfile, DMOP2_NAME_FLAG _flag, char **_names)
```




retrieves the names of all criteria. The array sizes depend on the number of criteria determined in [dmop\_getDimensions](de/d3f/mopsolver__api_8h.md#de/d3f/mopsolver__api_8h_1a05681e0a24f0aa4edde06acfc34830a5) 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_flag**: DMOP_NAME_FLAG value specifying which names to return (see enum DMOP_NAME_FLAG)
* **_names**: this must be null on the method call. It is created internally and will contain the names after the call. It is required to manually free the memory, e.g. by calling dmop_free2(void*)


**Returns**:

zero if the name arrays were created and filled



**Parameters**:

* const char * **_omdbfile**
* [DMOP2\_NAME\_FLAG](df/d6e/mopsolver__api2__shared_8h.md#df/d6e/mopsolver__api2__shared_8h_1a919e4b2e211e2d3c06a2cd81f75a5993) **_flag**
* char ** **_names**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="d7/df7/mopsolver__api2_8h_1a2e758e198d50d7222cf8bdf407a2b4e7"></a>
### Function dmop2\_getNamesWithDelimiter

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_getNamesWithDelimiter(const char *_omdbfile, DMOP2_NAME_FLAG _flag, char **_names, const char *_delimiter)
```




retrieves the names of all criteria. The array sizes depend on the number of criteria determined in [dmop\_getDimensions](de/d3f/mopsolver__api_8h.md#de/d3f/mopsolver__api_8h_1a05681e0a24f0aa4edde06acfc34830a5) 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_flag**: DMOP_NAME_FLAG value specifying which names to return (see enum DMOP_NAME_FLAG)
* **_names**: this must be null on the method call. It is created internally and will contain the names after the call. It is required to manually free the memory, e.g. by calling dmop_free2(void*)
* **_delimiter**: Character to use as a delimiter for the different variable names. Can be used to achieve connectivity to different programs which cannot handle '\0' properly. Passing an empty string will use '\0'.


**Returns**:

zero if the name arrays were created and filled



**Parameters**:

* const char * **_omdbfile**
* [DMOP2\_NAME\_FLAG](df/d6e/mopsolver__api2__shared_8h.md#df/d6e/mopsolver__api2__shared_8h_1a919e4b2e211e2d3c06a2cd81f75a5993) **_flag**
* char ** **_names**
* const char * **_delimiter**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="d7/df7/mopsolver__api2_8h_1af68dc3d377e7a0cfa185d7def65a242f"></a>
### Function dmop2\_getInputBounds

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_getInputBounds(const char *_omdbfile, double *_limits)
```




retrieves the sampling bounds for all parameters. The array size depends on the number of inputs. 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_limits**: pointer to array of parameter limits, been given alternetly min1, max1, min2, max2 ... . The length of the array is to be expected as ( 2 * dmop_getDimensions._num_inputs ).


**Returns**:

zero if the name arrays were created and filled



**Parameters**:

* const char * **_omdbfile**
* double * **_limits**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="d7/df7/mopsolver__api2_8h_1a3250031d1d4f5aac7d55245edb398f63"></a>
### Function dmop2\_getInputBoundsPerParameter

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_getInputBoundsPerParameter(const char *_omdbfile, const char *_param_name, double *_limits)
```




retrieves the sampling bounds for given parameters. 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_param_name**: zero terminated character string containing the name of the parameter
* **_limits**: pointer to array of parameter limits, first element is min, second is max. The length of the array is 2.


**Returns**:

zero if the name arrays were created and filled



**Parameters**:

* const char * **_omdbfile**
* const char * **_param_name**
* double * **_limits**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="d7/df7/mopsolver__api2_8h_1aa37255246161c9b90c89f8fd546c801e"></a>
### Function dmop2\_getReferenceValuePerParameter

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_getReferenceValuePerParameter(const char *_omdbfile, const char *_param_name, double *_ref_val)
```




retrieves the Reference Value for given parameter. 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_param_name**: zero terminated character string containing the name of the parameter
* **_ref_val**: pointer to reference value.


**Returns**:

zero if the name arrays were created and filled



**Parameters**:

* const char * **_omdbfile**
* const char * **_param_name**
* double * **_ref_val**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="d7/df7/mopsolver__api2_8h_1a7812100fa3283c0d8a99ec20d7f150e3"></a>
### Function dmop2\_getCoPValuesPerResponse

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_getCoPValuesPerResponse(const char *_omdbfile, const char *_response_name, double *_cop_vals)
```




retrieves the CoP values for given response. 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_response_name**: zero terminated character string containing the name of the response
* **_cop_vals**: pointer to array of CoP values, containing single CoP values for each parameter plus the total CoP. The length of the array is to be expected dmop_getDimensions._num_inputs+1.


**Returns**:

zero if the name arrays were created and filled



**Parameters**:

* const char * **_omdbfile**
* const char * **_response_name**
* double * **_cop_vals**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="d7/df7/mopsolver__api2_8h_1a95cb0c5d1a7b4f7c9f2099525c843c1a"></a>
### Function dmop2\_getFilteredStatesPerResponse

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop2_getFilteredStatesPerResponse(const char *_omdbfile, const char *_response_name, int *_filtered_states)
```




retrieves the filtered states for given response. 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_response_name**: zero terminated character string containing the name of the response
* **_filtered_states**: pointer to array of filtered states, 0 is not filtered, 1 is filtered, if the last entry is 1 this means that there is no total CoP. The length of the array is to be expected dmop_getDimensions._num_inputs+1.


**Returns**:

zero if the name arrays were created and filled



**Parameters**:

* const char * **_omdbfile**
* const char * **_response_name**
* int * **_filtered_states**

**Return type**: DYNARDO_MOPSOLVER_API int

## Source


```cpp


#ifndef DYNARDO_MOPSOLVERAPI2_H
#define DYNARDO_MOPSOLVERAPI2_H

#include "mopsolver_api2_shared.h"

DYNARDO_MOPSOLVER_API
int dmop2_hasSurrogate(const char* _omdbfile);

DYNARDO_MOPSOLVER_API
int dmop2_getDimensions(
    const char* _omdbfile,
    unsigned int _flags,
    unsigned int *_dimensions,
    unsigned int _size_dimensions);

DYNARDO_MOPSOLVER_API
int dmop2_solve(
    const char*  _omdbfile,
    unsigned int _num_designs,
    const double *_inputs,
    unsigned int _size_inputs,
    unsigned int _flags,
    double *_responses,
    unsigned int _size_responses);

DYNARDO_MOPSOLVER_API
int dmop2_get_per_response(
    const char* _omdbfile,
    unsigned int _num_designs,
    const double* _inputs,
    unsigned int _size_inputs,
    const char* _response_name,
    unsigned int _flags,
    double* _responses,
    unsigned int _size_responses);

DYNARDO_MOPSOLVER_API
int dmop2_getNames(const char* _omdbfile,
    DMOP2_NAME_FLAG _flag,
    char **_names);

DYNARDO_MOPSOLVER_API
int dmop2_getNamesWithDelimiter(const char* _omdbfile,
    DMOP2_NAME_FLAG _flag,
    char **_names,
    const char * _delimiter);

DYNARDO_MOPSOLVER_API
int dmop2_getInputBounds(const char* _omdbfile,
    double *_limits);

DYNARDO_MOPSOLVER_API
int dmop2_getInputBoundsPerParameter(const char* _omdbfile,
    const char* _param_name,
    double *_limits);

DYNARDO_MOPSOLVER_API
int dmop2_getReferenceValuePerParameter(const char* _omdbfile,
    const char* _param_name,
    double * _ref_val);

DYNARDO_MOPSOLVER_API
int dmop2_getCoPValuesPerResponse(const char* _omdbfile,
    const char* _response_name,
    double *_cop_vals);

DYNARDO_MOPSOLVER_API
int dmop2_getFilteredStatesPerResponse(const char* _omdbfile,
    const char* _response_name,
    int *_filtered_states);

#endif

```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)