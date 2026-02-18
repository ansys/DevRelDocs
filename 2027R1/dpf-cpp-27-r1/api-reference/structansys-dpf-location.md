# Structure ansys::dpf::Location

<a id="structansys-dpf-location"></a>

![][C++]
![][public]

User defined location quantity.

The location is the type of topology associated with the data container. This allows for the definition of a new location quantity. Many location quantities are predefined. 

**See also**: [locations](structansys-dpf-locations.md#structansys-dpf-locations)

## Members

* [c\_str](structansys-dpf-location.md#structansys-dpf-location-1ad9fab192124627740ffa623b1a0221ea)
* [empty](structansys-dpf-location.md#structansys-dpf-location-1aa79d660aa731fcdbdad2f57b3b3a5e65)
* [Location](structansys-dpf-location.md#structansys-dpf-location-1a2b3efab2807517d182bc9a486a0fb837)
* [Location](structansys-dpf-location.md#structansys-dpf-location-1acbfdb380af9621ce0bc37d290f18a464)
* [operator std::string](structansys-dpf-location.md#structansys-dpf-location-1a5a60f9364ad31a180f0fe06aedd3bfc9)
* [operator!=](structansys-dpf-location.md#structansys-dpf-location-1ae9e07f6694532a61658cd75aca0a6756)
* [operator\<](structansys-dpf-location.md#structansys-dpf-location-1a17fccc35f2e202671ce6b961ef946521)
* [operator\<=](structansys-dpf-location.md#structansys-dpf-location-1a120b2f92eef3fea51a789125c740726f)
* [operator==](structansys-dpf-location.md#structansys-dpf-location-1a88d382410f5b1bbf37e65b5e89f85b22)

## Public functions

<a id="structansys-dpf-location-1a2b3efab2807517d182bc9a486a0fb837"></a>
### Function Location

![][public]


```cpp
ansys::dpf::Location::Location(std::string const &name="")
```




Create new location.



**Parameters**:

* std::string const & **name** = "" : [in] Optional name of location.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Location::Location"}]}`
-->

<a id="structansys-dpf-location-1acbfdb380af9621ce0bc37d290f18a464"></a>
### Function Location

![][public]


```cpp
ansys::dpf::Location::Location(Location const &)=default
```








**Parameters**:

* Location const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Location::Location"}]}`
-->

<a id="structansys-dpf-location-1a88d382410f5b1bbf37e65b5e89f85b22"></a>
### Function operator==

![][public]
![][const]


```cpp
bool ansys::dpf::Location::operator==(Location const &) const
```








**Parameters**:

* [Location](structansys-dpf-location.md#structansys-dpf-location-1a2b3efab2807517d182bc9a486a0fb837) const &

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Location::operator=="}]}`
-->

<a id="structansys-dpf-location-1a17fccc35f2e202671ce6b961ef946521"></a>
### Function operator\<

![][public]
![][const]


```cpp
bool ansys::dpf::Location::operator<(Location const &) const
```








**Parameters**:

* [Location](structansys-dpf-location.md#structansys-dpf-location-1a2b3efab2807517d182bc9a486a0fb837) const &

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Location::operator<"}]}`
-->

<a id="structansys-dpf-location-1a120b2f92eef3fea51a789125c740726f"></a>
### Function operator\<=

![][public]
![][const]


```cpp
bool ansys::dpf::Location::operator<=(Location const &) const
```








**Parameters**:

* [Location](structansys-dpf-location.md#structansys-dpf-location-1a2b3efab2807517d182bc9a486a0fb837) const &

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Location::operator<="}]}`
-->

<a id="structansys-dpf-location-1ae9e07f6694532a61658cd75aca0a6756"></a>
### Function operator!=

![][public]
![][const]


```cpp
bool ansys::dpf::Location::operator!=(Location const &) const
```








**Parameters**:

* [Location](structansys-dpf-location.md#structansys-dpf-location-1a2b3efab2807517d182bc9a486a0fb837) const &

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Location::operator!="}]}`
-->

<a id="structansys-dpf-location-1a5a60f9364ad31a180f0fe06aedd3bfc9"></a>
### Function operator std::string

![][public]
![][const]


```cpp
ansys::dpf::Location::operator std::string() const
```




Name of location.



**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Location::string"}]}`
-->

<a id="structansys-dpf-location-1aa79d660aa731fcdbdad2f57b3b3a5e65"></a>
### Function empty

![][public]
![][const]


```cpp
bool ansys::dpf::Location::empty() const
```








**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Location::empty"}]}`
-->

<a id="structansys-dpf-location-1ad9fab192124627740ffa623b1a0221ea"></a>
### Function c\_str

![][public]
![][const]


```cpp
const char * ansys::dpf::Location::c_str() const
```




Gets name of location. 
**Returns**:

Name of location.



**Return type**: const char *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Location::c_str"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)