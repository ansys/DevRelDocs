# Class simulation_framework::core::lifecycle::IFmuLogic

![][C++]
![][public]

**Definition**: `core/lifecycle/fmu_activity/i_fmu_logic.h` (line 26)

The interface for FMU Logic to be used by an FMU activity.

An implementation of this class can be used from a high level to control the execution of an FMU. Currently this interface is designed for FMU co-simulation.

**Inherited by**:

* [simulation_framework::core::lifecycle::FmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic)

## Members

* [EnterInitialization](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a37799269a2473c00bc062dec185ccec2)
* [ExitInitialization](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1ae6fc6b7997934b0029c1502d1cd9b891)
* [GetFmuState](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a4ccb7416f23b3c208a084b39c396514d)
* [GetOutputs](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a78a9abe5d2efee8fd629b82b41c52753)
* [GetOutputs](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a871f93e3dc6c01f7fded7d5952538e61)
* [InitInOutMap](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a52806434ca9460d5494964d2427625d7)
* [SetInitializationParams](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a81945792cd1a72262218b5f985b1ae61)
* [SetInputs](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a2561e600ec9b6cd47fba87d4f7abccda)
* [Setup](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a3a68d8e71105c3f41094d2f34cf4a7bf)
* [SetupExperiment](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a31bd3fac13966e3bbeac00874fc8a2a2)
* [Step](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a9c0f65bae99a9e27d265b70c8e96540f)
* [Step](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a9bcdb0a6da50c28e4ea0fc43dde61c5b)
* [~IFmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a1d689116fcc83336da3bca36b0fc0bcc)

## Public functions

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a1d689116fcc83336da3bca36b0fc0bcc"></a>
### Function ~IFmuLogic

![][public]


```cpp
virtual simulation_framework::core::lifecycle::IFmuLogic::~IFmuLogic()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IFmuLogic::~IFmuLogic"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a31bd3fac13966e3bbeac00874fc8a2a2"></a>
### Function SetupExperiment

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::IFmuLogic::SetupExperiment(double start=0, double stop=0, double tolerance=0)=0
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

**Reimplemented by**:

* [SetupExperiment](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a52bbed4e360462046b9b6f019f760034)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IFmuLogic::SetupExperiment"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a37799269a2473c00bc062dec185ccec2"></a>
### Function EnterInitialization

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::IFmuLogic::EnterInitialization()=0
```


Call <code>fmi2EnterInitializationMode</code>





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [EnterInitialization](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a0203fe646f1a5621e83f862fc2c4861f)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IFmuLogic::EnterInitialization"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1ae6fc6b7997934b0029c1502d1cd9b891"></a>
### Function ExitInitialization

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::IFmuLogic::ExitInitialization()=0
```


Call <code>fmi2ExitInitializationMode</code>





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [ExitInitialization](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1abd981adc51682e6e7562332888f00932)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IFmuLogic::ExitInitialization"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a3a68d8e71105c3f41094d2f34cf4a7bf"></a>
### Function Setup

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::IFmuLogic::Setup(double start=0, double stop=0, double tolerance=0)=0
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

**Reimplemented by**:

* [Setup](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1ac9e6b73f6d11c16f28e5647e62d3d48c)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IFmuLogic::Setup"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a9c0f65bae99a9e27d265b70c8e96540f"></a>
### Function Step

![][public]


```cpp
virtual bool simulation_framework::core::lifecycle::IFmuLogic::Step(double step_size)=0
```


Step the FMU model for given step size by calling <code>fmi2DoStep</code>

**Parameters**:

* **step_size**: The update interval of the independent variable


**Returns**:

A boolean value indicating whether the step was successful



**Parameters**:

* [double](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **step_size**

**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [Step](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a00b5e8f8ecd66354c524a2cc1d4fe2e3)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IFmuLogic::Step"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a52806434ca9460d5494964d2427625d7"></a>
### Function InitInOutMap

![][public]


```cpp
virtual FmuInOutMap simulation_framework::core::lifecycle::IFmuLogic::InitInOutMap(std::set< std::string > variable_names)=0
```


Use the internal implementation to initialize the inputs or outputs with the correct underlying type.

**Parameters**:

* **variable_names**: A set of strings of variable names to initialize


**Returns**:

The map of variables with the values being initialized to the correct std::variant type



**Parameters**:

* std::set< std::string > **variable_names**

**Return type**: FmuInOutMap

**Reimplemented by**:

* [InitInOutMap](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a8899be3914f9378637f15fd3aa6fbdef)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IFmuLogic::InitInOutMap"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a9bcdb0a6da50c28e4ea0fc43dde61c5b"></a>
### Function Step

![][public]


```cpp
virtual bool simulation_framework::core::lifecycle::IFmuLogic::Step(double step_size, const FmuInOutMap &input)=0
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

**Reimplemented by**:

* [Step](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1add2ea6f3b48f6010178076e8916db410)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IFmuLogic::Step"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a81945792cd1a72262218b5f985b1ae61"></a>
### Function SetInitializationParams

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::IFmuLogic::SetInitializationParams(const FmuInOutMap &params)=0
```


Set the fmu initialization parameters.

**Parameters**:

* **params**: The map of initialization parameters to set where keys are variable name, and the value is the variable value



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) FmuInOutMap & **params**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [SetInitializationParams](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a75a19b6df4df4e7ea9771f41cae5f0de)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IFmuLogic::SetInitializationParams"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a2561e600ec9b6cd47fba87d4f7abccda"></a>
### Function SetInputs

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::IFmuLogic::SetInputs(const FmuInOutMap &inputs)=0
```


Set the fmu inputs.

**Parameters**:

* **inputs**: The map of inputs to set where keys are variable name, and the value is the variable value



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) FmuInOutMap & **inputs**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [SetInputs](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a1b0f3a1cba93d938fc55bd8917e836b5)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IFmuLogic::SetInputs"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a78a9abe5d2efee8fd629b82b41c52753"></a>
### Function GetOutputs

![][public]
![][const]


```cpp
virtual FmuInOutMap simulation_framework::core::lifecycle::IFmuLogic::GetOutputs() const =0
```


Get all fmu outputs.

**Returns**:

The map of outputs, where keys are variable name, and the value is the variable value



**Return type**: FmuInOutMap

**Reimplemented by**:

* [GetOutputs](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1ae31cf08f14147691cf9f354f1cadd7cf)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IFmuLogic::GetOutputs"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a871f93e3dc6c01f7fded7d5952538e61"></a>
### Function GetOutputs

![][public]
![][const]


```cpp
virtual void simulation_framework::core::lifecycle::IFmuLogic::GetOutputs(FmuInOutMap &requested_outputs) const =0
```


Get a subset of the fmu outputs.

**Parameters**:

* **requested_outputs**: The map of requested outputs, whose keys are already set to the requested subset of variables. The values will contain the output variable values.



**Parameters**:

* FmuInOutMap & **requested_outputs**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [GetOutputs](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1a611e8286778b474c013150f46e37caf0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IFmuLogic::GetOutputs"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic_1a4ccb7416f23b3c208a084b39c396514d"></a>
### Function GetFmuState

![][public]
![][const]


```cpp
virtual FmuState simulation_framework::core::lifecycle::IFmuLogic::GetFmuState() const =0
```


Get the Fmu state.

**Returns**:

The current FmuState enum value



**Return type**: [FmuState](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [GetFmuState](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic_1aa7d7eb647e32858cac8c728e68e50d05)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IFmuLogic::GetFmuState"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"i__fmu__logic_8h"},"children":[{"type":"text","text":"i_fmu_logic.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)