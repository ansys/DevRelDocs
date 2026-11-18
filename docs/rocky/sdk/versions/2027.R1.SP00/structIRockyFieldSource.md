# Structure IRockyFieldSource

<a id="structIRockyFieldSource"></a>

![][C++]
![][public]

**#include <rocky\_field\_source.h>**



<code>[IRockyFieldSource](structIRockyFieldSource.md#structIRockyFieldSource)</code> is an interface for interacting with existing Field Sources in the simulation.

## Members

* [find\_property](structIRockyFieldSource.md#structIRockyFieldSource_1a04b26a3493bbb647d05621c18d10b26c)
* [is\_enabled](structIRockyFieldSource.md#structIRockyFieldSource_1a3854fa4a92cee115c27858880e8fb0ec)
* [set\_property\_dimension](structIRockyFieldSource.md#structIRockyFieldSource_1a2282a9a827b35ac4692d7c192c3ea163)

## Public functions

### Function find\_property

<a id="structIRockyFieldSource_1a04b26a3493bbb647d05621c18d10b26c"></a>

![][public]
![][const]


```cpp
int IRockyFieldSource::find_property(const std::string &property_name) const
```




**This method searches for a specific property name in the current field source.**:


**Parameters**:

* **property_name**: The name given to the property in the field source.


**Returns**:

The index that uniquely identifies the wanted field source property, if it was actually found. It returns -1 otherwise.



**Parameters**:

* const std::string & **property_name**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFieldSource::find_property"}]}`
-->

### Function set\_property\_dimension

<a id="structIRockyFieldSource_1a2282a9a827b35ac4692d7c192c3ea163"></a>

![][public]


```cpp
void IRockyFieldSource::set_property_dimension(int property_index, double dimension)
```




**The purpose of this method is to associate a dimensional factor**:

to a field source property. This factor will be used to nondimensionalize all the associated values. For instance, if the property represents a force, a force dimensional factor must be associated through this method. Dimensional factors for the fundamental magnitudes are provided by functions of an <code>[IRockyModel](structIRockyModel.md#structIRockyModel)</code> object.


**Parameters**:

* **property_index**: The index that uniquely identifies the field source property.
* **dimension**: The appropriate dimensional factor for the field source property.



**Parameters**:

* int **property_index**
* double **dimension**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFieldSource::set_property_dimension"}]}`
-->

### Function is\_enabled

<a id="structIRockyFieldSource_1a3854fa4a92cee115c27858880e8fb0ec"></a>

![][public]
![][const]


```cpp
bool IRockyFieldSource::is_enabled() const
```




**Checks if the field source is enabled, that means it is mapped to simulation entities and ready to**:

compute interactions.


**Returns**:

True if field source is enabled, false otherwise.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFieldSource::is_enabled"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)