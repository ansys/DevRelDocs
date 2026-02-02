# Structure IRockyStatisticsAdder

<a id="structIRockyStatisticsAdder"></a>

![][C++]
![][public]

**#include <rocky\_statistics\_data.hpp>**



<code>[IRockyStatisticsAdder](structIRockyStatisticsAdder.md#structIRockyStatisticsAdder)</code> is an auxiliary struct used to calculate the mean, standard deviation, skewness and kurtosis of a set of values. Rocky uses it in the collision statistics modules for calculating statistics of sets of collision values associated to specific entities. However, it could be used to calculate the statistics of any set of values generated during a simulation. The mean and the statistical moments up to fourth order are calculated using a one-pass algorithm, therefore, their values are updated internally every time a new value is added to the set with the <code>add_value</code> method.





For the mathematical definitions of the statistics calculated by this struct, please refer to the DEM Technical Manual.

**Inherits from**:

* rocky20::AAdder

## Members

* [add\_value](structIRockyStatisticsAdder.md#structIRockyStatisticsAdder_1a2d87767ca1065f1a48778cf3d1e0f8ce)
* [get\_kurtosis](structIRockyStatisticsAdder.md#structIRockyStatisticsAdder_1a6f398ed07d36a7deccea3621e9780109)
* [get\_mean](structIRockyStatisticsAdder.md#structIRockyStatisticsAdder_1a57d3816e4f01de3fdd781ef229c9f771)
* [get\_skewness](structIRockyStatisticsAdder.md#structIRockyStatisticsAdder_1a4968d2f7ab3265b9aefafe064ae16ba0)
* [get\_std\_deviation](structIRockyStatisticsAdder.md#structIRockyStatisticsAdder_1ac1c33e3ab2e1afd1590aef6e2c40eb64)
* [join](structIRockyStatisticsAdder.md#structIRockyStatisticsAdder_1a56563b07a2763d52804e5180f3ae0b07)
* [reset](structIRockyStatisticsAdder.md#structIRockyStatisticsAdder_1ae4b238da655579b44c6293a573cd9449)

## Public functions

### Function add\_value

<a id="structIRockyStatisticsAdder_1a2d87767ca1065f1a48778cf3d1e0f8ce"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyStatisticsAdder::add_value(double new_value)
```




**This method must be used to supply each one of the values of the set for**:

which <code>[IRockyStatisticsAdder](structIRockyStatisticsAdder.md#structIRockyStatisticsAdder)</code> must calculate statistics.


**Parameters**:

* **new_value**: A new value that belong to the set.
* **n_values**: The number of values of the set, including the one added by this method. A companion <code>IRockyStatisticsCounter</code> object can be used to keep track of that number.



**Parameters**:

* double **new_value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyStatisticsAdder::add_value"}]}`
-->

### Function get\_mean

<a id="structIRockyStatisticsAdder_1a57d3816e4f01de3fdd781ef229c9f771"></a>

![][public]
![][const]


```cpp
double IRockyStatisticsAdder::get_mean() const
```




**Returns**:

The mean value of the set of values successively supplied with the <code>add_value</code> method up to the point where this method is called.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyStatisticsAdder::get_mean"}]}`
-->

### Function get\_std\_deviation

<a id="structIRockyStatisticsAdder_1ac1c33e3ab2e1afd1590aef6e2c40eb64"></a>

![][public]
![][const]


```cpp
double IRockyStatisticsAdder::get_std_deviation() const
```




**Returns**:

The standard deviation of the set of values successively supplied with the <code>add_value</code> method up to the point where this method is called.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyStatisticsAdder::get_std_deviation"}]}`
-->

### Function get\_skewness

<a id="structIRockyStatisticsAdder_1a4968d2f7ab3265b9aefafe064ae16ba0"></a>

![][public]
![][const]


```cpp
double IRockyStatisticsAdder::get_skewness() const
```




**Returns**:

The skewness of the set of values successively supplied with the <code>add_value</code> method up to the point where this method is called. The skewness is defined in the DEM Technical Manual.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyStatisticsAdder::get_skewness"}]}`
-->

### Function get\_kurtosis

<a id="structIRockyStatisticsAdder_1a6f398ed07d36a7deccea3621e9780109"></a>

![][public]
![][const]


```cpp
double IRockyStatisticsAdder::get_kurtosis() const
```




**Returns**:

The kurtosis of the set of values successively supplied with the <code>add_value</code> method up to the point where this method is called. The kurtosis is defined in the DEM Technical Manual.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyStatisticsAdder::get_kurtosis"}]}`
-->

### Function reset

<a id="structIRockyStatisticsAdder_1ae4b238da655579b44c6293a573cd9449"></a>

![][public]


```cpp
void IRockyStatisticsAdder::reset()
```




**This method resets all internal variables in order to start the calculation**:

of statistics for a new set of values.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyStatisticsAdder::reset"}]}`
-->

### Function join

<a id="structIRockyStatisticsAdder_1a56563b07a2763d52804e5180f3ae0b07"></a>

![][public]


```cpp
void IRockyStatisticsAdder::join(const IRockyStatisticsAdder &other)
```




**This method calculates the mean and the statistical moments for a set of values**:

formed by the union of two sets of values whose statistics were calculated by two separate instances of <code>[IRockyStatisticsAdder](structIRockyStatisticsAdder.md#structIRockyStatisticsAdder)</code>. After executing this method, the statistics for the compound set will be available through the methods <code>get_mean</code>, <code>get_std_deviation</code>, etc.


**Parameters**:

* **other**: The instance of <code>[IRockyStatisticsAdder](structIRockyStatisticsAdder.md#structIRockyStatisticsAdder)</code> that calculated the statistics of the second set of values.



**Parameters**:

* const [IRockyStatisticsAdder](structIRockyStatisticsAdder.md#structIRockyStatisticsAdder) & **other**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyStatisticsAdder::join"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)