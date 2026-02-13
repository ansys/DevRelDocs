<a id="classansys_1_1dpf_1_1OperatorDerivativeMain"></a>
# Class ansys::dpf::OperatorDerivativeMain

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 6002)





## Members

* [\_api](classansys_1_1dpf_1_1OperatorDerivativeMain.md#classansys_1_1dpf_1_1OperatorDerivativeMain_1a4014d4308767800804f42da542e09c61)
* [\_data](classansys_1_1dpf_1_1OperatorDerivativeMain.md#classansys_1_1dpf_1_1OperatorDerivativeMain_1ab4fccca9365502442f76d2f3aca45518)
* [callAPI](classansys_1_1dpf_1_1OperatorDerivativeMain.md#classansys_1_1dpf_1_1OperatorDerivativeMain_1ad41bf2edf2aa53b5dd1d500585cb830f)
* [connectUpStreamDerivativeTo](classansys_1_1dpf_1_1OperatorDerivativeMain.md#classansys_1_1dpf_1_1OperatorDerivativeMain_1a60076182d7b82a998d29fdbaa1bbd3fb)
* [getDerivativeOfInput](classansys_1_1dpf_1_1OperatorDerivativeMain.md#classansys_1_1dpf_1_1OperatorDerivativeMain_1afe693166d11494ce5b5e3431b434b188)
* [instanciate](classansys_1_1dpf_1_1OperatorDerivativeMain.md#classansys_1_1dpf_1_1OperatorDerivativeMain_1a1f2e67269d38f1bd9de0937e486e8d5e)
* [mapBaseInputToInput](classansys_1_1dpf_1_1OperatorDerivativeMain.md#classansys_1_1dpf_1_1OperatorDerivativeMain_1a0afdd92405aee92df52cb976ba8f599e)
* [mapBaseOutputToInput](classansys_1_1dpf_1_1OperatorDerivativeMain.md#classansys_1_1dpf_1_1OperatorDerivativeMain_1aac07ecb02337c70ac2beec1dce8647f7)
* [mapDownStreamDerivativeTo](classansys_1_1dpf_1_1OperatorDerivativeMain.md#classansys_1_1dpf_1_1OperatorDerivativeMain_1a3a7c1d63b8b26d22936519f224e1122f)
* [OperatorDerivativeMain](classansys_1_1dpf_1_1OperatorDerivativeMain.md#classansys_1_1dpf_1_1OperatorDerivativeMain_1a00b86843cd2e332ccb980b257882d95d)
* [setDerivative](classansys_1_1dpf_1_1OperatorDerivativeMain.md#classansys_1_1dpf_1_1OperatorDerivativeMain_1a2edbd768bfb529ca03a7411ea2d1f9f2)

## Private attributes

<a id="classansys_1_1dpf_1_1OperatorDerivativeMain_1ab4fccca9365502442f76d2f3aca45518"></a>
### Variable \_data

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 6005)


```cpp
opaque::DpfOperatorDerivData* ansys::dpf::OperatorDerivativeMain::_data
```








**Type**: opaque::DpfOperatorDerivData *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorDerivativeMain::_data"}]}`
-->

<a id="classansys_1_1dpf_1_1OperatorDerivativeMain_1a4014d4308767800804f42da542e09c61"></a>
### Variable \_api

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 6006)


```cpp
so::API const* ansys::dpf::OperatorDerivativeMain::_api
```








**Type**: so::API const  *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorDerivativeMain::_api"}]}`
-->

## Private functions

<a id="classansys_1_1dpf_1_1OperatorDerivativeMain_1ad41bf2edf2aa53b5dd1d500585cb830f"></a>
### Function callAPI

![][private]
![][const]


```cpp
so::API const  * ansys::dpf::OperatorDerivativeMain::callAPI() const
```








**Return type**: so::API const *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorDerivativeMain::callAPI"}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1OperatorDerivativeMain_1a00b86843cd2e332ccb980b257882d95d"></a>
### Function OperatorDerivativeMain

![][public]


```cpp
ansys::dpf::OperatorDerivativeMain::OperatorDerivativeMain(opaque::DpfOperatorDerivData *data)
```








**Parameters**:

* opaque::DpfOperatorDerivData * **data**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorDerivativeMain::OperatorDerivativeMain"}]}`
-->

<a id="classansys_1_1dpf_1_1OperatorDerivativeMain_1afe693166d11494ce5b5e3431b434b188"></a>
### Function getDerivativeOfInput

![][public]


```cpp
Operator ansys::dpf::OperatorDerivativeMain::getDerivativeOfInput(int pin_index)
```








**Parameters**:

* int **pin_index**

**Return type**: [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorDerivativeMain::getDerivativeOfInput"}]}`
-->

<a id="classansys_1_1dpf_1_1OperatorDerivativeMain_1a0afdd92405aee92df52cb976ba8f599e"></a>
### Function mapBaseInputToInput

![][public]


```cpp
void ansys::dpf::OperatorDerivativeMain::mapBaseInputToInput(int base_pin_idx, int op_pin_idx, Operator &op)
```








**Parameters**:

* int **base_pin_idx**
* int **op_pin_idx**
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **op**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorDerivativeMain::mapBaseInputToInput"}]}`
-->

<a id="classansys_1_1dpf_1_1OperatorDerivativeMain_1aac07ecb02337c70ac2beec1dce8647f7"></a>
### Function mapBaseOutputToInput

![][public]


```cpp
void ansys::dpf::OperatorDerivativeMain::mapBaseOutputToInput(int base_pin_idx, int op_pin_idx, Operator &op)
```








**Parameters**:

* int **base_pin_idx**
* int **op_pin_idx**
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **op**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorDerivativeMain::mapBaseOutputToInput"}]}`
-->

<a id="classansys_1_1dpf_1_1OperatorDerivativeMain_1a2edbd768bfb529ca03a7411ea2d1f9f2"></a>
### Function setDerivative

![][public]


```cpp
void ansys::dpf::OperatorDerivativeMain::setDerivative(Operator &out)
```








**Parameters**:

* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **out**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorDerivativeMain::setDerivative"}]}`
-->

<a id="classansys_1_1dpf_1_1OperatorDerivativeMain_1a1f2e67269d38f1bd9de0937e486e8d5e"></a>
### Function instanciate

![][public]


```cpp
Operator ansys::dpf::OperatorDerivativeMain::instanciate(std::string const &operator_name)
```








**Parameters**:

* std::string const & **operator_name**

**Return type**: [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorDerivativeMain::instanciate"}]}`
-->

<a id="classansys_1_1dpf_1_1OperatorDerivativeMain_1a3a7c1d63b8b26d22936519f224e1122f"></a>
### Function mapDownStreamDerivativeTo

![][public]


```cpp
void ansys::dpf::OperatorDerivativeMain::mapDownStreamDerivativeTo(int input_pin, Operator &op)
```








**Parameters**:

* int **input_pin**
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **op**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorDerivativeMain::mapDownStreamDerivativeTo"}]}`
-->

<a id="classansys_1_1dpf_1_1OperatorDerivativeMain_1a60076182d7b82a998d29fdbaa1bbd3fb"></a>
### Function connectUpStreamDerivativeTo

![][public]


```cpp
void ansys::dpf::OperatorDerivativeMain::connectUpStreamDerivativeTo(Operator &op, int out_pin, int ancestor_pin)
```








**Parameters**:

* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **op**
* int **out_pin**
* int **ancestor_pin**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorDerivativeMain::connectUpStreamDerivativeTo"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)