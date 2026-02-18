# Class ansys::dpf::OperatorDerivativeMain

<a id="classansys-dpf-operatorderivativemain"></a>

![][C++]
![][public]





## Members

* [connectUpStreamDerivativeTo](classansys-dpf-operatorderivativemain.md#classansys-dpf-operatorderivativemain-1a60076182d7b82a998d29fdbaa1bbd3fb)
* [getDerivativeOfInput](classansys-dpf-operatorderivativemain.md#classansys-dpf-operatorderivativemain-1afe693166d11494ce5b5e3431b434b188)
* [instanciate](classansys-dpf-operatorderivativemain.md#classansys-dpf-operatorderivativemain-1a1f2e67269d38f1bd9de0937e486e8d5e)
* [mapBaseInputToInput](classansys-dpf-operatorderivativemain.md#classansys-dpf-operatorderivativemain-1a0afdd92405aee92df52cb976ba8f599e)
* [mapBaseOutputToInput](classansys-dpf-operatorderivativemain.md#classansys-dpf-operatorderivativemain-1aac07ecb02337c70ac2beec1dce8647f7)
* [mapDownStreamDerivativeTo](classansys-dpf-operatorderivativemain.md#classansys-dpf-operatorderivativemain-1a3a7c1d63b8b26d22936519f224e1122f)
* [OperatorDerivativeMain](classansys-dpf-operatorderivativemain.md#classansys-dpf-operatorderivativemain-1a00b86843cd2e332ccb980b257882d95d)
* [setDerivative](classansys-dpf-operatorderivativemain.md#classansys-dpf-operatorderivativemain-1a2edbd768bfb529ca03a7411ea2d1f9f2)

## Public functions

<a id="classansys-dpf-operatorderivativemain-1a00b86843cd2e332ccb980b257882d95d"></a>
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

<a id="classansys-dpf-operatorderivativemain-1afe693166d11494ce5b5e3431b434b188"></a>
### Function getDerivativeOfInput

![][public]


```cpp
Operator ansys::dpf::OperatorDerivativeMain::getDerivativeOfInput(int pin_index)
```








**Parameters**:

* int **pin_index**

**Return type**: [Operator](classansys-dpf-operator.md#classansys-dpf-operator)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorDerivativeMain::getDerivativeOfInput"}]}`
-->

<a id="classansys-dpf-operatorderivativemain-1a0afdd92405aee92df52cb976ba8f599e"></a>
### Function mapBaseInputToInput

![][public]


```cpp
void ansys::dpf::OperatorDerivativeMain::mapBaseInputToInput(int base_pin_idx, int op_pin_idx, Operator &op)
```








**Parameters**:

* int **base_pin_idx**
* int **op_pin_idx**
* [Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **op**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorDerivativeMain::mapBaseInputToInput"}]}`
-->

<a id="classansys-dpf-operatorderivativemain-1aac07ecb02337c70ac2beec1dce8647f7"></a>
### Function mapBaseOutputToInput

![][public]


```cpp
void ansys::dpf::OperatorDerivativeMain::mapBaseOutputToInput(int base_pin_idx, int op_pin_idx, Operator &op)
```








**Parameters**:

* int **base_pin_idx**
* int **op_pin_idx**
* [Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **op**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorDerivativeMain::mapBaseOutputToInput"}]}`
-->

<a id="classansys-dpf-operatorderivativemain-1a2edbd768bfb529ca03a7411ea2d1f9f2"></a>
### Function setDerivative

![][public]


```cpp
void ansys::dpf::OperatorDerivativeMain::setDerivative(Operator &out)
```








**Parameters**:

* [Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **out**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorDerivativeMain::setDerivative"}]}`
-->

<a id="classansys-dpf-operatorderivativemain-1a1f2e67269d38f1bd9de0937e486e8d5e"></a>
### Function instanciate

![][public]


```cpp
Operator ansys::dpf::OperatorDerivativeMain::instanciate(std::string const &operator_name)
```








**Parameters**:

* std::string const & **operator_name**

**Return type**: [Operator](classansys-dpf-operator.md#classansys-dpf-operator)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorDerivativeMain::instanciate"}]}`
-->

<a id="classansys-dpf-operatorderivativemain-1a3a7c1d63b8b26d22936519f224e1122f"></a>
### Function mapDownStreamDerivativeTo

![][public]


```cpp
void ansys::dpf::OperatorDerivativeMain::mapDownStreamDerivativeTo(int input_pin, Operator &op)
```








**Parameters**:

* int **input_pin**
* [Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **op**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorDerivativeMain::mapDownStreamDerivativeTo"}]}`
-->

<a id="classansys-dpf-operatorderivativemain-1a60076182d7b82a998d29fdbaa1bbd3fb"></a>
### Function connectUpStreamDerivativeTo

![][public]


```cpp
void ansys::dpf::OperatorDerivativeMain::connectUpStreamDerivativeTo(Operator &op, int out_pin, int ancestor_pin)
```








**Parameters**:

* [Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **op**
* int **out_pin**
* int **ancestor_pin**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorDerivativeMain::connectUpStreamDerivativeTo"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)