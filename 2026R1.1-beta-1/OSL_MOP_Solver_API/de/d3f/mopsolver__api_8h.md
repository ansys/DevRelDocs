# File mopsolver_api.h

![][C++]

**Location**: `mopsolver\_api.h`



**version**\
$Rev$

## Includes

* [mopsolver_api_shared.h](d8/df9/mopsolver__api__shared_8h.md#d8/df9/mopsolver__api__shared_8h)


```mermaid
graph LR
1["mopsolver_api.h"]
click 1 "de/d3f/mopsolver__api_8h.md#de/d3f/mopsolver__api_8h"
1 --> 2

2["mopsolver_api_shared.h"]
click 2 "d8/df9/mopsolver__api__shared_8h_source.md#d8/df9/mopsolver__api__shared_8h_source"

```


## Functions

<a id="de/d3f/mopsolver__api_8h_1a25df2ddd6172194afab9ed8ee0b36387"></a>
### Function dmop\_hasSurrogate

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_hasSurrogate(const char *_omdbfile)
```




test binfile if it contains Surrogate Data 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang database file (*.omdb) containing MOP


**Returns**:

zero if Surrogate is found



**Parameters**:

* const char * **_omdbfile**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a05681e0a24f0aa4edde06acfc34830a5"></a>
### Function dmop\_getDimensions

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getDimensions(const char *_omdbfile, int *_num_inputs, int *_num_responses)
```




retrieves problem dimensions i.e. number of active inputs and responses 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_num_inputs**: pointer to an integer variable into which the number of active inputs should be written
* **_num_responses**: pointer to an integer variable into which the number of active responses of type scalar should be written


**Returns**:

zero if the dimensions could be determined



**Parameters**:

* const char * **_omdbfile**
* int * **_num_inputs**
* int * **_num_responses**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a0fa8a013f592ec0bad8b5fb3a6e95b0b"></a>
### Function dmop\_solve\_extrapolate

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_solve_extrapolate(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, double *_responses, int _extrapolate)
```




approximates the active response values based on their best metamodel for any given design point 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_num_designs**: number of design points for which response values should be approximated
* **_inputs**: array of consecutive input values per design point. The length of the array is to be expected as ( _num_designs * dmop_getDimensions._num_inputs )
* **_responses**: array of consecutive response values approximated per design point. The length of the array is to be expected as ( _num_designs * dmop_getDimensions._num_responses )
* **_extrapolate**: one or zero to make the mop solver extrapolate the data


**Returns**:

zero if the aproximation succeeded



**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* double * **_responses**
* int **_extrapolate**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a265f1dcd9f39d4123da745a42bf07dc9"></a>
### Function dmop\_solve

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_solve(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, double *_responses)
```




approximates the active response values based on their best metamodel for any given design point 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_num_designs**: number of design points for which response values should be approximated
* **_inputs**: pointer to array of consecutive input values per design point. The length of the array is to be expected as ( _num_designs * dmop_getDimensions._num_inputs )
* **_responses**: pointer to array of consecutive response values approximated per design point. The length of the array is to be expected as ( _num_designs * dmop_getDimensions._num_responses )


**Returns**:

zero if the approximation succeeded



**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* double * **_responses**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1ab816352747ec004979bdb233db495669"></a>
### Function dmop\_gradients\_per\_response\_extrapolate

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_gradients_per_response_extrapolate(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, const char *_response_name, double *_gradients, int _extrapolate)
```




calculates the gradients based on the best metamodels for any given design point 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_num_designs**: number of design points for which gradients should be calculated
* **_inputs**: pointer to array of consecutive input values per design point. The length of the array is to be expected as ( _num_designs * dmop_getDimensions._num_inputs )
* **_response_name**: zero terminated character string containing the name of the response
* **_gradients**: pointer to array of consecutive gradients calculated per design point. The length of the array is to be expected as ( _num_designs * dmop_getDimensions._num_inputs )
* **_extrapolate**: one or zero to make the mop solver extrapolate the data


**Returns**:

zero if the calculation succeeded



**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* const char * **_response_name**
* double * **_gradients**
* int **_extrapolate**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1ad230a17d9e463faf2f05950871ca9809"></a>
### Function dmop\_gradients\_per\_response

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_gradients_per_response(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, const char *_response_name, double *_gradients)
```




calculates the gradients based on the best metamodels for any given design point 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_num_designs**: number of design points for which gradients should be calculated
* **_inputs**: pointer to array of consecutive input values per design point. The length of the array is to be expected as ( _num_designs * dmop_getDimensions._num_inputs )
* **_response_name**: zero terminated character string containing the name of the response
* **_gradients**: pointer to array of consecutive gradients calculated per design point. The length of the array is to be expected as ( _num_designs * dmop_getDimensions._num_inputs )


**Returns**:

zero if the calculation succeeded



**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* const char * **_response_name**
* double * **_gradients**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1ad58195cba96bfbdd71b064f691fa25be"></a>
### Function dmop\_errors\_per\_response\_extrapolate

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_errors_per_response_extrapolate(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, const char *_response_name, double *_errors, int _extrapolate)
```




calculates the errors based on the best metamodels for any given design point 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_num_designs**: number of design points for which errors should be calculated
* **_inputs**: pointer to array of consecutive input values per design point. The length of the array is to be expected as ( _num_designs * dmop_getDimensions._num_inputs )
* **_response_name**: zero terminated character string containing the name of the response
* **_errors**: pointer to array of consecutive errors calculated per design point. The length of the array is to be expected as ( _num_designs * 4 )
* **_extrapolate**: one or zero to make the mop solver extrapolate the data


**Returns**:

zero if the calculation succeeded



**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* const char * **_response_name**
* double * **_errors**
* int **_extrapolate**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1acc93f43c201bd74d26e24647600600b7"></a>
### Function dmop\_errors\_per\_response

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_errors_per_response(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, const char *_response_name, double *_errors)
```




calculates the errors based on the best metamodels for any given design point 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_num_designs**: number of design points for which errors should be calculated
* **_inputs**: pointer to array of consecutive input values per design point. The length of the array is to be expected as ( _num_designs * dmop_getDimensions._num_inputs )
* **_response_name**: zero terminated character string containing the name of the response
* **_errors**: pointer to array of consecutive errors calculated per design point. The length of the array is to be expected as ( _num_designs * 4 )


**Returns**:

zero if the calculation succeeded



**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* const char * **_response_name**
* double * **_errors**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a7a7a61f3064296a1c57b130fb2ba1cb8"></a>
### Function dmop\_density\_per\_response\_extrapolate

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_density_per_response_extrapolate(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, const char *_response_name, double *_density, unsigned int _size_density, int _extrapolate)
```




calculates the density based on the best metamodels for any given design point 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_num_designs**: number of design points for which density should be calculated
* **_inputs**: pointer to array of consecutive input values per design point. The length of the array is to be expected as ( _num_designs * dmop_getDimensions._num_inputs )
* **_response_name**: zero terminated character string containing the name of the response
* **_density**: pointer to array of consecutive density calculated per design point. The length of the array is to be expected as ( _num_designs )
* **_size_density**: length of the _density array. Expected to be _num_designs
* **_extrapolate**: one or zero to make the mop solver extrapolate the data


**Returns**:

zero if the calculation succeeded



**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* const char * **_response_name**
* double * **_density**
* unsigned int **_size_density**
* int **_extrapolate**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1aff6e88ab02e69ca95e341b65e7d12246"></a>
### Function dmop\_density\_per\_response

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_density_per_response(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, const char *_response_name, double *_density, unsigned int _size_density)
```




calculates the density based on the best metamodels for any given design point 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_num_designs**: number of design points for which density should be calculated
* **_inputs**: pointer to array of consecutive input values per design point. The length of the array is to be expected as ( _num_designs * dmop_getDimensions._num_inputs )
* **_response_name**: zero terminated character string containing the name of the response
* **_density**: pointer to array of consecutive density calculated per design point. The length of the array is to be expected as ( _num_designs )
* **_size_density**: length of the _density array. Expected to be _num_designs


**Returns**:

zero if the calculation succeeded



**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* const char * **_response_name**
* double * **_density**
* unsigned int **_size_density**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a0d9c56750bbf39ef6e01feeeaf568b37"></a>
### Function dmop\_getInputNames

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getInputNames(const char *_omdbfile, char **_input_names)
```




retrieves the names of all active, scalar inputs. The array sizes depend on the number of inputs determined in [dmop\_getDimensions](de/d3f/mopsolver__api_8h.md#de/d3f/mopsolver__api_8h_1a05681e0a24f0aa4edde06acfc34830a5) 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_input_names**: pointer to an array of zero-terminated C-strings. The array is going to be created internally


**Returns**:

zero if the name arrays were created and filled



**Parameters**:

* const char * **_omdbfile**
* char ** **_input_names**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a5e1f4c22ed4444a6a456da441e63286a"></a>
### Function dmop\_getInputNamesWithDelimiter

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getInputNamesWithDelimiter(const char *_omdbfile, char **_input_names, const char *_delimiter)
```




retrieves the names of all active, scalar inputs. The array sizes depend on the number of inputs determined in [dmop\_getDimensions](de/d3f/mopsolver__api_8h.md#de/d3f/mopsolver__api_8h_1a05681e0a24f0aa4edde06acfc34830a5) 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_input_names**: pointer to an array of zero-terminated C-strings. The array is going to be created internally
* **_delimiter**: Character to use as a delimiter for the different variable names. Can be used to achieve connectivity to different programs which cannot handle '\0' properly. Passing an empty string will use '\0'.


**Returns**:

zero if the name arrays were created and filled



**Parameters**:

* const char * **_omdbfile**
* char ** **_input_names**
* const char * **_delimiter**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a293a88f3b04524c4f57558c35e1c9154"></a>
### Function dmop\_getOutputNames

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getOutputNames(const char *_omdbfile, char **_response_names)
```




retrieves the names of all responses. The array sizes depend on the number of inputs and responses determined in [dmop\_getDimensions](de/d3f/mopsolver__api_8h.md#de/d3f/mopsolver__api_8h_1a05681e0a24f0aa4edde06acfc34830a5) 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_response_names**: pointer to an array of zero-terminated C-strings. The array is going to be created internally


**Returns**:

zero if the name arrays were created and filled



**Parameters**:

* const char * **_omdbfile**
* char ** **_response_names**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1ac35cea243a38a73791305f2cdf3b7885"></a>
### Function dmop\_getOutputNamesWithDelimiter

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getOutputNamesWithDelimiter(const char *_omdbfile, char **_response_names, const char *_delimiter)
```




retrieves the names of all responses. The array sizes depend on the number of responses determined in [dmop\_getDimensions](de/d3f/mopsolver__api_8h.md#de/d3f/mopsolver__api_8h_1a05681e0a24f0aa4edde06acfc34830a5) 
**Parameters**:

* **_omdbfile**: zero terminated character string containing the filesystem path to the optiSLang monitoring database file (*.omdb) containing MOP
* **_response_names**: pointer to an array of zero-terminated C-strings. The array is going to be created internally
* **_delimiter**: Character to use as a delimiter for the different variable names. Can be used to achieve connectivity to different programs which cannot handle '\0' properly. Passing an empty string will use '\0'.


**Returns**:

zero if the name arrays were created and filled



**Parameters**:

* const char * **_omdbfile**
* char ** **_response_names**
* const char * **_delimiter**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1aa49bc13d0597df9c099ec27f26a8533c"></a>
### Function dmop\_getInputBounds

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getInputBounds(const char *_omdbfile, double *_limits)
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

<a id="de/d3f/mopsolver__api_8h_1ae52a44cc51e99fdae284c3832243b5e8"></a>
### Function dmop\_getInputBoundsPerParameter

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getInputBoundsPerParameter(const char *_omdbfile, const char *_param_name, double *_limits)
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

<a id="de/d3f/mopsolver__api_8h_1a550899662f7dcd4551a98ce6ad7b9bf7"></a>
### Function dmop\_getReferenceValuePerParameter

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getReferenceValuePerParameter(const char *_omdbfile, const char *_param_name, double *_ref_val)
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

<a id="de/d3f/mopsolver__api_8h_1a5a651f6f7ad0cc305eb95da2bae241da"></a>
### Function dmop\_getCoPValuesPerResponse

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getCoPValuesPerResponse(const char *_omdbfile, const char *_response_name, double *_cop_vals)
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

<a id="de/d3f/mopsolver__api_8h_1ae4303398502f14c096bd4f7995f824c0"></a>
### Function dmop\_getFilteredStatesPerResponse

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getFilteredStatesPerResponse(const char *_omdbfile, const char *_response_name, int *_filtered_states)
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

<a id="de/d3f/mopsolver__api_8h_1afd899e90ed1d65bc3d4a6877e2b24600"></a>
### Function dmop\_getLastError

![][public]


```cpp
DYNARDO_MOPSOLVER_API const char * dmop_getLastError()
```




Calling a solver API function will reset the string, so you'll need to check for errors immediately after the function call. 
**Returns**:

String describing last error or <code>nullptr</code> if no error occured.



**Return type**: DYNARDO_MOPSOLVER_API const char *

<a id="de/d3f/mopsolver__api_8h_1aafb7d0650e3a68f467e6a4146967bcb2"></a>
### Function dmop\_allocate\_and\_getInputBounds

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_allocate_and_getInputBounds(const char *_omdbfile, double **_limits)
```




some functionalities also exist with the possibility of internal memory allocation management data put to given pointer is valid up to next call of any dmop_ function (except a call of [dmop\_getLastError()](de/d3f/mopsolver__api_8h.md#de/d3f/mopsolver__api_8h_1afd899e90ed1d65bc3d4a6877e2b24600))



**Parameters**:

* const char * **_omdbfile**
* double ** **_limits**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a9217ae7682d9333a548261003f1ae8f9"></a>
### Function dmop\_allocate\_and\_getInputBoundsPerParameter

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_allocate_and_getInputBoundsPerParameter(const char *_omdbfile, const char *_param_name, double **_limits)
```








**Parameters**:

* const char * **_omdbfile**
* const char * **_param_name**
* double ** **_limits**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a8f30162e2626e077e8b8fcde803e2a08"></a>
### Function dmop\_allocate\_and\_getCoPValuesPerResponse

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_allocate_and_getCoPValuesPerResponse(const char *_omdbfile, const char *_response_name, double **_cop_vals)
```








**Parameters**:

* const char * **_omdbfile**
* const char * **_response_name**
* double ** **_cop_vals**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a3f097648135b5bfcba00dfd49b24d1db"></a>
### Function dmop\_allocate\_and\_getFilteredStatesPerResponse

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_allocate_and_getFilteredStatesPerResponse(const char *_omdbfile, const char *_response_name, int **_filtered_states)
```








**Parameters**:

* const char * **_omdbfile**
* const char * **_response_name**
* int ** **_filtered_states**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a0d34573f1b2ba0561fe1c07edc019116"></a>
### Function dmop\_allocate\_and\_solve\_extrapolate

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_allocate_and_solve_extrapolate(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, double **_responses, int _extrapolate)
```








**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* double ** **_responses**
* int **_extrapolate**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a32575949d201fca2f20bfa959ab410e8"></a>
### Function dmop\_allocate\_and\_solve

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_allocate_and_solve(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, double **_responses)
```








**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* double ** **_responses**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a9ff389215cf9d81a1540e2711af36d5b"></a>
### Function dmop\_hasSurrogate\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_hasSurrogate_hash(const char *_omdbfile, const char *_hash)
```




each functionality which needs a file path also exists with a signature check of the given file to ensure that the file was not exchanged by comparing the given value with the internally calculated



**Parameters**:

* const char * **_omdbfile**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1adabde23250f94b7b08c88b3646c09b9c"></a>
### Function dmop\_getDimensions\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getDimensions_hash(const char *_omdbfile, int *_num_inputs, int *_num_responses, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* int * **_num_inputs**
* int * **_num_responses**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a587bfe84c7f6e6ba9b15ca6e73ee790f"></a>
### Function dmop\_solve\_extrapolate\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_solve_extrapolate_hash(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, double *_responses, int _extrapolate, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* double * **_responses**
* int **_extrapolate**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a96eca0fbc5c04f37751e006694aaecb8"></a>
### Function dmop\_allocate\_and\_solve\_extrapolate\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_allocate_and_solve_extrapolate_hash(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, double **_responses, int _extrapolate, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* double ** **_responses**
* int **_extrapolate**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a88eacb01722b4ae4adf9c2d5fdd7b8f0"></a>
### Function dmop\_solve\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_solve_hash(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, double *_responses, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* double * **_responses**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1af36f31c31d060b2fa1cc97503dad95b2"></a>
### Function dmop\_gradients\_per\_response\_extrapolate\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_gradients_per_response_extrapolate_hash(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, const char *_response_name, double *_gradients, int _extrapolate, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* const char * **_response_name**
* double * **_gradients**
* int **_extrapolate**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a1130ac08987bb1c86a8dee2df31507c3"></a>
### Function dmop\_gradients\_per\_response\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_gradients_per_response_hash(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, const char *_response_name, double *_gradients, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* const char * **_response_name**
* double * **_gradients**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a22c9684d49d498d7e0be12ec59ba7d18"></a>
### Function dmop\_errors\_per\_response\_extrapolate\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_errors_per_response_extrapolate_hash(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, const char *_response_name, double *_errors, int _extrapolate, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* const char * **_response_name**
* double * **_errors**
* int **_extrapolate**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a6d14d88c3fde7c3d0576af2a7936990f"></a>
### Function dmop\_errors\_per\_response\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_errors_per_response_hash(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, const char *_response_name, double *_errors, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* const char * **_response_name**
* double * **_errors**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1acabdf65edc2a5d46ccd202e3d79c7848"></a>
### Function dmop\_density\_per\_response\_extrapolate\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_density_per_response_extrapolate_hash(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, const char *_response_name, double *_density, unsigned int _size_density, int _extrapolate, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* const char * **_response_name**
* double * **_density**
* unsigned int **_size_density**
* int **_extrapolate**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a2bb700eec918a77ecd60181200c18e79"></a>
### Function dmop\_density\_per\_response\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_density_per_response_hash(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, const char *_response_name, double *_density, unsigned int _size_density, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* const char * **_response_name**
* double * **_density**
* unsigned int **_size_density**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1afba1cda3a266910ff3ce49d523692df3"></a>
### Function dmop\_allocate\_and\_solve\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_allocate_and_solve_hash(const char *_omdbfile, unsigned int _num_designs, const double *_inputs, double **_responses, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* unsigned int **_num_designs**
* const double * **_inputs**
* double ** **_responses**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a4d43819bb6fe2611f97de169262ea541"></a>
### Function dmop\_getInputNames\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getInputNames_hash(const char *_omdbfile, char **_input_names, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* char ** **_input_names**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1ac7db2ff3adac1eca0b7767b37d7e2600"></a>
### Function dmop\_getInputNamesWithDelimiter\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getInputNamesWithDelimiter_hash(const char *_omdbfile, char **_input_names, const char *_delimiter, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* char ** **_input_names**
* const char * **_delimiter**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a80e483d65b2ffb202c38e95e566a732f"></a>
### Function dmop\_getOutputNames\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getOutputNames_hash(const char *_omdbfile, char **_response_names, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* char ** **_response_names**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1af7dd3ea32b93e4ab854858dd835f8097"></a>
### Function dmop\_getOutputNamesWithDelimiter\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getOutputNamesWithDelimiter_hash(const char *_omdbfile, char **_response_names, const char *_delimiter, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* char ** **_response_names**
* const char * **_delimiter**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1ac4618243a4f378b33de8e09aea790543"></a>
### Function dmop\_getInputBounds\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getInputBounds_hash(const char *_omdbfile, double *_limits, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* double * **_limits**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a2053e29441f535e67f0d94458fe8c9c1"></a>
### Function dmop\_allocate\_and\_getInputBounds\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_allocate_and_getInputBounds_hash(const char *_omdbfile, double **_limits, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* double ** **_limits**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a48c0b28a2f04728fc8d75aa082f94a14"></a>
### Function dmop\_getInputBoundsPerParameter\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getInputBoundsPerParameter_hash(const char *_omdbfile, const char *_param_name, double *_limits, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* const char * **_param_name**
* double * **_limits**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1abdc08855de99fd9f30c59dbf04e68f39"></a>
### Function dmop\_allocate\_and\_getInputBoundsPerParameter\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_allocate_and_getInputBoundsPerParameter_hash(const char *_omdbfile, const char *_param_name, double **_limits, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* const char * **_param_name**
* double ** **_limits**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a0ab53c49bf6192ca121dddf91f8c09bd"></a>
### Function dmop\_getReferenceValuePerParameter\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getReferenceValuePerParameter_hash(const char *_omdbfile, const char *_param_name, double *_ref_val, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* const char * **_param_name**
* double * **_ref_val**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1ab4984ba8b9f61f2d5f1bd6c9e7b8dcb1"></a>
### Function dmop\_getCoPValuesPerResponse\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getCoPValuesPerResponse_hash(const char *_omdbfile, const char *_response_name, double *_cop_vals, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* const char * **_response_name**
* double * **_cop_vals**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a4fac367a01c492d231e68da091280cd7"></a>
### Function dmop\_allocate\_and\_getCoPValuesPerResponse\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_allocate_and_getCoPValuesPerResponse_hash(const char *_omdbfile, const char *_response_name, double **_cop_vals, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* const char * **_response_name**
* double ** **_cop_vals**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1ade2a06892d291b1e6504507e32661fe8"></a>
### Function dmop\_getFilteredStatesPerResponse\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_getFilteredStatesPerResponse_hash(const char *_omdbfile, const char *_response_name, int *_filtered_states, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* const char * **_response_name**
* int * **_filtered_states**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a4541a9707aa0d7b64c0d49aec961d50c"></a>
### Function dmop\_allocate\_and\_getFilteredStatesPerResponse\_hash

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_allocate_and_getFilteredStatesPerResponse_hash(const char *_omdbfile, const char *_response_name, int **_filtered_states, const char *_hash)
```








**Parameters**:

* const char * **_omdbfile**
* const char * **_response_name**
* int ** **_filtered_states**
* const char * **_hash**

**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1aef089009bf01e630485b835d28339b23"></a>
### Function dmop\_get\_version\_str

![][public]


```cpp
DYNARDO_MOPSOLVER_API const char * dmop_get_version_str()
```




get current api version info 
**Returns**:

version info as string



**Return type**: DYNARDO_MOPSOLVER_API const char *

<a id="de/d3f/mopsolver__api_8h_1a1e20adf4d59744ee53958b84f6061f0c"></a>
### Function dmop\_cleanup

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_cleanup()
```




cleans-up all the memory allocated by the API, use this after you've finished using the API. Objects pointing to memory provided by this API are going to be invalidated. 
**Returns**:

zero



**Return type**: DYNARDO_MOPSOLVER_API int

<a id="de/d3f/mopsolver__api_8h_1a2efd4dcee48cfca4046498c55fb44dde"></a>
### Function dmop\_set\_paths\_for\_custom\_interface

![][public]


```cpp
DYNARDO_MOPSOLVER_API int dmop_set_paths_for_custom_interface(const char *_program_path, const char *_python_home, const char *const *_python_paths, unsigned int _num_python_paths, const char *const *_script_paths, unsigned int _num_script_paths, const char *_oop_path)
```




set up custom interface application-wide



**Parameters**:

* const char * **_program_path**
* const char * **_python_home**
* const char *const * **_python_paths**
* unsigned int **_num_python_paths**
* const char *const * **_script_paths**
* unsigned int **_num_script_paths**
* const char * **_oop_path**

**Return type**: DYNARDO_MOPSOLVER_API int

## Source


```cpp


#ifndef DYNARDO_MOPSOLVERAPI_H
#define DYNARDO_MOPSOLVERAPI_H

#include "mopsolver_api_shared.h"
DYNARDO_MOPSOLVER_API
int dmop_hasSurrogate(const char* _omdbfile);

DYNARDO_MOPSOLVER_API
int dmop_getDimensions(const char* _omdbfile,
    int *_num_inputs,
    int *_num_responses);

DYNARDO_MOPSOLVER_API
int dmop_solve_extrapolate(const char*  _omdbfile,
    unsigned int _num_designs,
    const double *_inputs,
    double *_responses,
    int _extrapolate);

DYNARDO_MOPSOLVER_API
int dmop_solve(const char*  _omdbfile,
    unsigned int _num_designs,
    const double *_inputs,
    double *_responses);

DYNARDO_MOPSOLVER_API
int dmop_gradients_per_response_extrapolate(
    const char* _omdbfile,
    unsigned int _num_designs,
    const double* _inputs,
    const char* _response_name,
    double* _gradients,
    int _extrapolate);

DYNARDO_MOPSOLVER_API
int dmop_gradients_per_response(
    const char* _omdbfile,
    unsigned int _num_designs,
    const double* _inputs,
    const char* _response_name,
    double* _gradients);

DYNARDO_MOPSOLVER_API
int dmop_errors_per_response_extrapolate(
    const char* _omdbfile,
    unsigned int _num_designs,
    const double* _inputs,
    const char* _response_name,
    double* _errors,
    int _extrapolate);

DYNARDO_MOPSOLVER_API
int dmop_errors_per_response(
    const char* _omdbfile,
    unsigned int _num_designs,
    const double* _inputs,
    const char* _response_name,
    double* _errors);

DYNARDO_MOPSOLVER_API
int dmop_density_per_response_extrapolate(
    const char* _omdbfile,
    unsigned int _num_designs,
    const double* _inputs,
    const char* _response_name,
    double* _density,
    unsigned int _size_density,
    int _extrapolate);

DYNARDO_MOPSOLVER_API
int dmop_density_per_response(
    const char* _omdbfile,
    unsigned int _num_designs,
    const double* _inputs,
    const char* _response_name,
    double* _density,
    unsigned int _size_density);

DYNARDO_MOPSOLVER_API
int dmop_getInputNames(const char* _omdbfile,
    char **_input_names);


DYNARDO_MOPSOLVER_API
int dmop_getInputNamesWithDelimiter(const char* _omdbfile,
    char **_input_names,
    const char * _delimiter);


DYNARDO_MOPSOLVER_API
int dmop_getOutputNames(const char* _omdbfile,
    char **_response_names);


DYNARDO_MOPSOLVER_API
int dmop_getOutputNamesWithDelimiter(const char* _omdbfile,
    char **_response_names,
    const char * _delimiter);


DYNARDO_MOPSOLVER_API
int dmop_getInputBounds(const char* _omdbfile,
    double *_limits);


DYNARDO_MOPSOLVER_API
int dmop_getInputBoundsPerParameter(const char* _omdbfile,
    const char* _param_name,
    double *_limits);


DYNARDO_MOPSOLVER_API
int dmop_getReferenceValuePerParameter(const char* _omdbfile,
    const char* _param_name,
    double * _ref_val);



DYNARDO_MOPSOLVER_API
int dmop_getCoPValuesPerResponse(const char* _omdbfile,
    const char* _response_name,
    double *_cop_vals);



DYNARDO_MOPSOLVER_API
int dmop_getFilteredStatesPerResponse(const char* _omdbfile,
    const char* _response_name,
    int *_filtered_states);

DYNARDO_MOPSOLVER_API
const char* dmop_getLastError();

DYNARDO_MOPSOLVER_API
int dmop_allocate_and_getInputBounds(const char* _omdbfile, double **_limits);

DYNARDO_MOPSOLVER_API
int dmop_allocate_and_getInputBoundsPerParameter(const char* _omdbfile, const char* _param_name, double **_limits);

DYNARDO_MOPSOLVER_API
int dmop_allocate_and_getCoPValuesPerResponse( const char* _omdbfile, const char* _response_name, double **_cop_vals);

DYNARDO_MOPSOLVER_API
int dmop_allocate_and_getFilteredStatesPerResponse( const char* _omdbfile, const char* _response_name, int **_filtered_states);

DYNARDO_MOPSOLVER_API
int dmop_allocate_and_solve_extrapolate(const char*  _omdbfile,
                                         unsigned int _num_designs,
                                         const double *_inputs,
                                         double **_responses,
                                         int _extrapolate);

DYNARDO_MOPSOLVER_API
int dmop_allocate_and_solve(const char*  _omdbfile,
                             unsigned int _num_designs,
                             const double *_inputs,
                             double **_responses);

DYNARDO_MOPSOLVER_API
int dmop_hasSurrogate_hash(const char* _omdbfile, const char* _hash);


DYNARDO_MOPSOLVER_API
int dmop_getDimensions_hash(const char* _omdbfile,
    int *_num_inputs,
    int *_num_responses,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_solve_extrapolate_hash(const char* _omdbfile,
    unsigned int _num_designs,
    const double *_inputs,
    double *_responses,
    int _extrapolate,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_allocate_and_solve_extrapolate_hash(const char* _omdbfile,
    unsigned int _num_designs,
    const double *_inputs,
    double **_responses,
    int _extrapolate,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_solve_hash(
    const char* _omdbfile,
    unsigned int _num_designs,
    const double *_inputs,
    double *_responses,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_gradients_per_response_extrapolate_hash(
    const char* _omdbfile,
    unsigned int _num_designs,
    const double* _inputs,
    const char* _response_name,
    double* _gradients,
    int _extrapolate,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_gradients_per_response_hash(
    const char* _omdbfile,
    unsigned int _num_designs,
    const double* _inputs,
    const char* _response_name,
    double* _gradients,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_errors_per_response_extrapolate_hash(
    const char* _omdbfile,
    unsigned int _num_designs,
    const double* _inputs,
    const char* _response_name,
    double* _errors,
    int _extrapolate,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_errors_per_response_hash(
    const char* _omdbfile,
    unsigned int _num_designs,
    const double* _inputs,
    const char* _response_name,
    double* _errors,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_density_per_response_extrapolate_hash(
    const char* _omdbfile,
    unsigned int _num_designs,
    const double* _inputs,
    const char* _response_name,
    double* _density,
    unsigned int _size_density,
    int _extrapolate,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_density_per_response_hash(
    const char* _omdbfile,
    unsigned int _num_designs,
    const double* _inputs,
    const char* _response_name,
    double* _density,
    unsigned int _size_density,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_allocate_and_solve_hash(const char* _omdbfile,
    unsigned int _num_designs,
    const double *_inputs,
    double **_responses,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_getInputNames_hash(const char* _omdbfile,
    char **_input_names,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_getInputNamesWithDelimiter_hash(const char* _omdbfile,
    char **_input_names,
    const char * _delimiter,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_getOutputNames_hash(const char* _omdbfile,
    char **_response_names,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_getOutputNamesWithDelimiter_hash(const char* _omdbfile,
    char **_response_names,
    const char * _delimiter,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_getInputBounds_hash(const char* _omdbfile,
    double *_limits,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_allocate_and_getInputBounds_hash(const char* _omdbfile,
    double **_limits,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_getInputBoundsPerParameter_hash(const char* _omdbfile,
    const char* _param_name,
    double *_limits,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_allocate_and_getInputBoundsPerParameter_hash(const char* _omdbfile,
    const char* _param_name,
    double **_limits,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_getReferenceValuePerParameter_hash(const char* _omdbfile,
    const char* _param_name,
    double * _ref_val,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_getCoPValuesPerResponse_hash(const char* _omdbfile,
    const char* _response_name,
    double *_cop_vals,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_allocate_and_getCoPValuesPerResponse_hash(const char* _omdbfile,
    const char* _response_name,
    double **_cop_vals,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_getFilteredStatesPerResponse_hash(const char* _omdbfile,
    const char* _response_name,
    int *_filtered_states,
    const char* _hash);

DYNARDO_MOPSOLVER_API
int dmop_allocate_and_getFilteredStatesPerResponse_hash(const char* _omdbfile,
    const char* _response_name,
    int **_filtered_states,
    const char* _hash);

DYNARDO_MOPSOLVER_API
const char* dmop_get_version_str();

DYNARDO_MOPSOLVER_API
int dmop_cleanup();

DYNARDO_MOPSOLVER_API
int dmop_set_paths_for_custom_interface(const char* _program_path,
    const char* _python_home,
    const char* const* _python_paths,
    unsigned int _num_python_paths,
    const char* const* _script_paths,
    unsigned int _num_script_paths,
    const char* _oop_path);

#endif // DYNARDO_MOPSOLVERAPI_H
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)