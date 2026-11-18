# Structure IRockyFieldSourceElement

<a id="structIRockyFieldSourceElement"></a>

![][C++]
![][public]

**#include <rocky\_field\_source\_api.hpp>**



<code>[IRockyFieldSourceElement](structIRockyFieldSourceElement.md#structIRockyFieldSourceElement)</code> is an interface to the data of a Field Source element mapped to a given particle (DEM or SPH) at a given time.

## Members

* [get\_position](structIRockyFieldSourceElement.md#structIRockyFieldSourceElement_1a7cf8546ec5b0150548c8b7bb097e3264)
* [get\_property](structIRockyFieldSourceElement.md#structIRockyFieldSourceElement_1a22dc3a3e90a1dc0c2d1152a26977de09)
* [is\_enabled](structIRockyFieldSourceElement.md#structIRockyFieldSourceElement_1a6ea8ce626305628a57bd5d4bdf3fbfdd)
* [is\_valid](structIRockyFieldSourceElement.md#structIRockyFieldSourceElement_1aafb2f6f28845d6a8e84d678614beadf4)

## Public functions

### Function get\_property

<a id="structIRockyFieldSourceElement_1a22dc3a3e90a1dc0c2d1152a26977de09"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS T IRockyFieldSourceElement::get_property(const int property_index) const
```




**Parameters**:

* **property_index**: The index of the property to access.


**Returns**:

The value of the property in the field source for the mapped field source element.



**Parameters**:

* const int **property_index**

**Return type**: ROCKY_FUNCTIONS T

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename T"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFieldSourceElement::get_property"}]}`
-->

### Function is\_valid

<a id="structIRockyFieldSourceElement_1aafb2f6f28845d6a8e84d678614beadf4"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyFieldSourceElement::is_valid() const
```




**Returns**:

True if the particle is mapped to a field source element. In this case, it is safe to access element properties using the <code>get_property</code> function. False if the particle is not mapped to any field source element or is outside its region of influence. If false, <code>[get\_property()](structIRockyFieldSourceElement.md#structIRockyFieldSourceElement_1a22dc3a3e90a1dc0c2d1152a26977de09)</code> must not be called.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFieldSourceElement::is_valid"}]}`
-->

### Function is\_enabled

<a id="structIRockyFieldSourceElement_1a6ea8ce626305628a57bd5d4bdf3fbfdd"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyFieldSourceElement::is_enabled() const
```




**Returns**:

True if the field source is enabled. If false, it means field source was turned off or did not start yet and should not affect the particles. In this case, <code>[get\_property()](structIRockyFieldSourceElement.md#structIRockyFieldSourceElement_1a22dc3a3e90a1dc0c2d1152a26977de09)</code> must not be called.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFieldSourceElement::is_enabled"}]}`
-->

### Function get\_position

<a id="structIRockyFieldSourceElement_1a7cf8546ec5b0150548c8b7bb097e3264"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyFieldSourceElement::get_position() const
```




**Returns**:

The Cartesian coordinates of the mapped field source.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFieldSourceElement::get_position"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)