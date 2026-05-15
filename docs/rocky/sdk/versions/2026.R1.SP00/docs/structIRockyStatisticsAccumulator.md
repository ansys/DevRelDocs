# Structure IRockyStatisticsAccumulator

<a id="structIRockyStatisticsAccumulator"></a>

![][C++]
![][public]

**#include <rocky\_statistics\_data.hpp>**



<code>[IRockyStatisticsAccumulator](structIRockyStatisticsAccumulator.md#structIRockyStatisticsAccumulator)</code> is an auxiliary struct that can be used to sum a set of values generated during a period of time in a simulation. That sum may be an approximation of the value of an integral, needed for calculating integral-based statistics. Such integral can represent a physical magnitude, for instance, an impulse or a work. Please refer to the DEM Technical Manual for a complete description of integral-based statistics.

## Members

* [add\_value](structIRockyStatisticsAccumulator.md#structIRockyStatisticsAccumulator_1aa6f9107d44777f2914054a2567018438)
* [get\_sum](structIRockyStatisticsAccumulator.md#structIRockyStatisticsAccumulator_1a465ef9a481493da8c59e760a3f37e3e6)
* [join](structIRockyStatisticsAccumulator.md#structIRockyStatisticsAccumulator_1a6a0a426d29d79255741700958cdc9511)
* [reset](structIRockyStatisticsAccumulator.md#structIRockyStatisticsAccumulator_1acb15234baa81417b3382410594d7150b)

## Public functions

### Function add\_value

<a id="structIRockyStatisticsAccumulator_1aa6f9107d44777f2914054a2567018438"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyStatisticsAccumulator::add_value(double value)
```




**This method adds a new value to the current sum.**:


**Parameters**:

* **value**: The value that must be added.



**Parameters**:

* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyStatisticsAccumulator::add_value"}]}`
-->

### Function get\_sum

<a id="structIRockyStatisticsAccumulator_1a465ef9a481493da8c59e760a3f37e3e6"></a>

![][public]
![][const]


```cpp
double IRockyStatisticsAccumulator::get_sum() const
```




**Returns**:

The value of the sum accumulated so far.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyStatisticsAccumulator::get_sum"}]}`
-->

### Function reset

<a id="structIRockyStatisticsAccumulator_1acb15234baa81417b3382410594d7150b"></a>

![][public]


```cpp
void IRockyStatisticsAccumulator::reset()
```




**This method resets to zero the sum in order to start a new accumulation round.**:



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyStatisticsAccumulator::reset"}]}`
-->

### Function join

<a id="structIRockyStatisticsAccumulator_1a6a0a426d29d79255741700958cdc9511"></a>

![][public]


```cpp
void IRockyStatisticsAccumulator::join(const IRockyStatisticsAccumulator &other)
```




**This method sums the values accumulated by two instances of**:

<code>[IRockyStatisticsAccumulator](structIRockyStatisticsAccumulator.md#structIRockyStatisticsAccumulator)</code> associated to two separate sets of values. After calling this method, the value returned by <code>get_sum</code> will be the resulting sum.


**Parameters**:

* **other**: The instance of <code>[IRockyStatisticsAccumulator](structIRockyStatisticsAccumulator.md#structIRockyStatisticsAccumulator)</code> that accumulated the second set of values.



**Parameters**:

* const [IRockyStatisticsAccumulator](structIRockyStatisticsAccumulator.md#structIRockyStatisticsAccumulator) & **other**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyStatisticsAccumulator::join"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)