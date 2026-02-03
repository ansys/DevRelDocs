# Class simulation_framework::core::lifecycle::FmuLogic

![][C++]
![][public]

**Definition**: `core/lifecycle/fmu_activity/fmu_logic.h` (line 40)

An implementation of the [IFmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic) interface using the [FMI4cpp](https://github.com/NTNU-IHB/FMI4cpp) library.



**Inherits from**:

* [simulation_framework::core::lifecycle::IFmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic)

## Members

* [EnterInitialization](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a0203fe646f1a5621e83f862fc2c4861f)
* [ExitInitialization](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1abd981adc51682e6e7562332888f00932)
* [FmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1abdb6a692a31b7ee3ddc87f87d353af22)
* [GetCsFmuPtr](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1ab9b56c6037217a85c73fc7595bc622fd)
* [GetFmuInstancePtr](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1ae1052072c17b9b4bb54f106f654f610a)
* [GetFmuPtr](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a8df07fcf204cdee5434a6df81f558022)
* [GetFmuState](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1aa7d7eb647e32858cac8c728e68e50d05)
* [GetLastStatus](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a739ac5f7595d5faec57787a4572b1c56)
* [GetOutput](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a4ed808f5ab02cc3bcc60f76c1bcff10f)
* [GetOutputs](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1ae31cf08f14147691cf9f354f1cadd7cf)
* [GetOutputs](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a611e8286778b474c013150f46e37caf0)
* [GetSimulationTime](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1abf602595ae1d4b9c0eb21315aaa11b1f)
* [InitInOutMap](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a8899be3914f9378637f15fd3aa6fbdef)
* [SetInitializationParams](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a75a19b6df4df4e7ea9771f41cae5f0de)
* [SetInputs](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a1b0f3a1cba93d938fc55bd8917e836b5)
* [Setup](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1ac9e6b73f6d11c16f28e5647e62d3d48c)
* [SetupExperiment](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a52bbed4e360462046b9b6f019f760034)
* [SetValue](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a35747b8e4e37700c8ff8706b3a93a833)
* [Step](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1add2ea6f3b48f6010178076e8916db410)
* [Step](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a00b5e8f8ecd66354c524a2cc1d4fe2e3)
* [~IFmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a1d689116fcc83336da3bca36b0fc0bcc)

## Public functions

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1abdb6a692a31b7ee3ddc87f87d353af22"></a>
### Function FmuLogic

![][public]


```cpp
simulation_framework::core::lifecycle::FmuLogic::FmuLogic(const std::string &fmu_path)
```


Constructor for [FmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic).

**Parameters**:

* **fmu_path**: The path to the FMU file



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **fmu_path**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::FmuLogic"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a52bbed4e360462046b9b6f019f760034"></a>
### Function SetupExperiment

![][public]


```cpp
void simulation_framework::core::lifecycle::FmuLogic::SetupExperiment(double start=0, double stop=0, double tolerance=0) override
```


Call <code>fmi2SetupExperiment</code>

**Parameters**:

* **start**: The fixed initial value of the independent variable
* **stop**: The final value of the independent variable
* **tolerance**: The tolerance when using a numerical integration scheme. Can be ignored for co-simulation.



**Parameters**:

* [double](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **start** = 0 
* [double](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **stop** = 0 
* [double](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **tolerance** = 0 

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [SetupExperiment](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a31bd3fac13966e3bbeac00874fc8a2a2)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::SetupExperiment"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a0203fe646f1a5621e83f862fc2c4861f"></a>
### Function EnterInitialization

![][public]


```cpp
void simulation_framework::core::lifecycle::FmuLogic::EnterInitialization() override
```


Call <code>fmi2EnterInitializationMode</code>





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [EnterInitialization](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a37799269a2473c00bc062dec185ccec2)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::EnterInitialization"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1abd981adc51682e6e7562332888f00932"></a>
### Function ExitInitialization

![][public]


```cpp
void simulation_framework::core::lifecycle::FmuLogic::ExitInitialization() override
```


Call <code>fmi2ExitInitializationMode</code>





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [ExitInitialization](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1ae6fc6b7997934b0029c1502d1cd9b891)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::ExitInitialization"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1ac9e6b73f6d11c16f28e5647e62d3d48c"></a>
### Function Setup

![][public]


```cpp
void simulation_framework::core::lifecycle::FmuLogic::Setup(double start=0, double stop=0, double tolerance=0) override
```


Call SetupExperiment, EnterInitialization, and ExitInitialization.

**Parameters**:

* **start**: The fixed initial value of the independent variable
* **stop**: The final value of the independent variable
* **tolerance**: The tolerance when using a numerical integration scheme. Can be ignored for co-simulation.



**Parameters**:

* [double](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **start** = 0 
* [double](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **stop** = 0 
* [double](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **tolerance** = 0 

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [Setup](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a3a68d8e71105c3f41094d2f34cf4a7bf)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::Setup"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a8899be3914f9378637f15fd3aa6fbdef"></a>
### Function InitInOutMap

![][public]


```cpp
FmuInOutMap simulation_framework::core::lifecycle::FmuLogic::InitInOutMap(std::set< std::string > variable_names) override
```


Use the internal implementation to initialize the inputs or outputs with the correct underlying type.

**Parameters**:

* **variable_names**: A set of strings of variable names to initialize


**Returns**:

The map of variables with the values being initialized to the correct std::variant type



**Parameters**:

* std::set< std::string > **variable_names**

**Return type**: FmuInOutMap

**Reimplements**: [InitInOutMap](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a52806434ca9460d5494964d2427625d7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::InitInOutMap"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1add2ea6f3b48f6010178076e8916db410"></a>
### Function Step

![][public]


```cpp
bool simulation_framework::core::lifecycle::FmuLogic::Step(double step_size, const FmuInOutMap &input) override
```


Set the fmu inputs and step the FMU model for given step size by calling <code>fmi2DoStep</code>

**Parameters**:

* **step_size**: The update interval of the independent variable
* **input**: The map of inputs to set where keys are variable name, and the value is the variable value


**Returns**:

A boolean value indicating whether the step was successful



**Parameters**:

* [double](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **step_size**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) FmuInOutMap & **input**

**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [Step](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a9bcdb0a6da50c28e4ea0fc43dde61c5b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::Step"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a00b5e8f8ecd66354c524a2cc1d4fe2e3"></a>
### Function Step

![][public]


```cpp
bool simulation_framework::core::lifecycle::FmuLogic::Step(double step_size) override
```


Step the FMU model for given step size by calling <code>fmi2DoStep</code>

**Parameters**:

* **step_size**: The update interval of the independent variable


**Returns**:

A boolean value indicating whether the step was successful



**Parameters**:

* [double](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **step_size**

**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [Step](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a9c0f65bae99a9e27d265b70c8e96540f)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::Step"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a75a19b6df4df4e7ea9771f41cae5f0de"></a>
### Function SetInitializationParams

![][public]


```cpp
void simulation_framework::core::lifecycle::FmuLogic::SetInitializationParams(const FmuInOutMap &params) override
```


Set the fmu initialization parameters.

**Parameters**:

* **params**: The map of initialization parameters to set where keys are variable name, and the value is the variable value



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) FmuInOutMap & **params**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [SetInitializationParams](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a81945792cd1a72262218b5f985b1ae61)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::SetInitializationParams"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a1b0f3a1cba93d938fc55bd8917e836b5"></a>
### Function SetInputs

![][public]


```cpp
void simulation_framework::core::lifecycle::FmuLogic::SetInputs(const FmuInOutMap &inputs) override
```


Set the fmu inputs.

**Parameters**:

* **inputs**: The map of inputs to set where keys are variable name, and the value is the variable value



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) FmuInOutMap & **inputs**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [SetInputs](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a2561e600ec9b6cd47fba87d4f7abccda)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::SetInputs"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a35747b8e4e37700c8ff8706b3a93a833"></a>
### Function SetValue

![][public]


```cpp
void simulation_framework::core::lifecycle::FmuLogic::SetValue(const std::string &variable_name, const T &value)
```


Modify or set a parameter for a single variable in the FMU.

`parameterlist {"type":"element","name":"parameterlist","attributes":{"kind":"templateparam"},"children":[{"type":"element","name":"parameteritem","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parameternamelist","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parametername","attributes":{},"children":[{"type":"text","text":"T"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","name":"parameterdescription","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"Type of the object. Supported types: "},{"type":"element","name":"computeroutput","attributes":{},"children":[{"type":"text","text":"bool"}]},{"type":"text","text":", "},{"type":"element","name":"computeroutput","attributes":{},"children":[{"type":"text","text":"int"}]},{"type":"text","text":", "},{"type":"element","name":"computeroutput","attributes":{},"children":[{"type":"text","text":"double"}]},{"type":"text","text":", "},{"type":"element","name":"computeroutput","attributes":{},"children":[{"type":"text","text":"std::string"}]},{"type":"text","text":", "},{"type":"element","name":"computeroutput","attributes":{},"children":[{"type":"text","text":"std::vector<uint8_t>"}]},{"type":"text","text":" "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]}`


**Parameters**:

* **variable_name**: The name of the variable in the FMU
* **value**: The value of the variable to set



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **variable_name**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [T](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) & **value**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classsimulation__framework_1_1core_1_1Topic"},"children":[{"type":"text","text":"typename"}]},{"type":"text","text":" "},{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classsimulation__framework_1_1core_1_1Topic"},"children":[{"type":"text","text":"T"}]}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::SetValue"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a4ed808f5ab02cc3bcc60f76c1bcff10f"></a>
### Function GetOutput

![][public]
![][const]


```cpp
T simulation_framework::core::lifecycle::FmuLogic::GetOutput(const std::string &variable_name) const
```


Get the value of a single variable from the FMU.

`parameterlist {"type":"element","name":"parameterlist","attributes":{"kind":"templateparam"},"children":[{"type":"element","name":"parameteritem","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parameternamelist","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parametername","attributes":{},"children":[{"type":"text","text":"T"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","name":"parameterdescription","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"Type of the object. Supported types: "},{"type":"element","name":"computeroutput","attributes":{},"children":[{"type":"text","text":"bool"}]},{"type":"text","text":", "},{"type":"element","name":"computeroutput","attributes":{},"children":[{"type":"text","text":"int"}]},{"type":"text","text":", "},{"type":"element","name":"computeroutput","attributes":{},"children":[{"type":"text","text":"double"}]},{"type":"text","text":", "},{"type":"element","name":"computeroutput","attributes":{},"children":[{"type":"text","text":"std::string"}]},{"type":"text","text":", "},{"type":"element","name":"computeroutput","attributes":{},"children":[{"type":"text","text":"std::vector<uint8_t>"}]},{"type":"text","text":" "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]}`


**Parameters**:

* **variable_name**: The name of the variable in the FMU


**Returns**:

The value of the variable



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **variable_name**

**Return type**: [T](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classsimulation__framework_1_1core_1_1Topic"},"children":[{"type":"text","text":"typename"}]},{"type":"text","text":" "},{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classsimulation__framework_1_1core_1_1Topic"},"children":[{"type":"text","text":"T"}]}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::GetOutput"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1ae31cf08f14147691cf9f354f1cadd7cf"></a>
### Function GetOutputs

![][public]
![][const]


```cpp
FmuInOutMap simulation_framework::core::lifecycle::FmuLogic::GetOutputs() const override
```


Get all fmu outputs.

**Returns**:

The map of outputs, where keys are variable name, and the value is the variable value



**Return type**: FmuInOutMap

**Reimplements**: [GetOutputs](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a78a9abe5d2efee8fd629b82b41c52753)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::GetOutputs"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a611e8286778b474c013150f46e37caf0"></a>
### Function GetOutputs

![][public]
![][const]


```cpp
void simulation_framework::core::lifecycle::FmuLogic::GetOutputs(FmuInOutMap &requested_outputs) const override
```


Get a subset of the fmu outputs.

**Parameters**:

* **requested_outputs**: The map of requested outputs, whose keys are already set to the requested subset of variables. The values will contain the output variable values.



**Parameters**:

* FmuInOutMap & **requested_outputs**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [GetOutputs](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a871f93e3dc6c01f7fded7d5952538e61)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::GetOutputs"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1abf602595ae1d4b9c0eb21315aaa11b1f"></a>
### Function GetSimulationTime

![][public]
![][const]


```cpp
double simulation_framework::core::lifecycle::FmuLogic::GetSimulationTime() const
```


Get the simulation time.

**Returns**:

The value of the simulation time as a double



**Return type**: [double](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::GetSimulationTime"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a739ac5f7595d5faec57787a4572b1c56"></a>
### Function GetLastStatus

![][public]
![][const]


```cpp
fmi4cpp::status simulation_framework::core::lifecycle::FmuLogic::GetLastStatus() const
```


Get the status from the last fmi2 function call.

**Returns**:

The status as an <code>fmi4cpp::status</code> enumeration



**Return type**: fmi4cpp::status

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::GetLastStatus"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a8df07fcf204cdee5434a6df81f558022"></a>
### Function GetFmuPtr

![][public]
![][const]


```cpp
const fmi::fmu * simulation_framework::core::lifecycle::FmuLogic::GetFmuPtr() const
```


Get the pointer to the FMU object.

**Returns**:

The pointer to the FMU object



**Return type**: [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) fmi::fmu *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::GetFmuPtr"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1ab9b56c6037217a85c73fc7595bc622fd"></a>
### Function GetCsFmuPtr

![][public]
![][const]


```cpp
const fmi::cs_fmu * simulation_framework::core::lifecycle::FmuLogic::GetCsFmuPtr() const
```


Get the pointer to the Co-simulation FMU object.

**Returns**:

The pointer to the Co-simulation FMU object



**Return type**: [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) fmi::cs_fmu *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::GetCsFmuPtr"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1ae1052072c17b9b4bb54f106f654f610a"></a>
### Function GetFmuInstancePtr

![][public]
![][const]


```cpp
const fmi::cs_slave * simulation_framework::core::lifecycle::FmuLogic::GetFmuInstancePtr() const
```


Get the pointer to the Co-simulation FMU instance object.

**Returns**:

The pointer to the Co-simulation FMU instance object



**Return type**: [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) fmi::cs_slave *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::GetFmuInstancePtr"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1aa7d7eb647e32858cac8c728e68e50d05"></a>
### Function GetFmuState

![][public]
![][const]


```cpp
FmuState simulation_framework::core::lifecycle::FmuLogic::GetFmuState() const override
```


Get the Fmu state.

**Returns**:

The current FmuState enum value



**Return type**: [FmuState](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [GetFmuState](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a4ccb7416f23b3c208a084b39c396514d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuLogic::GetFmuState"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"fmu__logic_8h"},"children":[{"type":"text","text":"fmu_logic.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)