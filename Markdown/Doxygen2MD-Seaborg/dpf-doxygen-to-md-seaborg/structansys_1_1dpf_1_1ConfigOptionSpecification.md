<a id="structansys_1_1dpf_1_1ConfigOptionSpecification"></a>
# Structure ansys::dpf::ConfigOptionSpecification

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 4587)



Specification information for operator's configuration option. 

**See also**: [OperatorSpecification](classansys_1_1dpf_1_1OperatorSpecification.md#classansys_1_1dpf_1_1OperatorSpecification)

## Members

* [\_default\_value](structansys_1_1dpf_1_1ConfigOptionSpecification.md#structansys_1_1dpf_1_1ConfigOptionSpecification_1a9652c6c30852f7857853f22997b63413)
* [\_description](structansys_1_1dpf_1_1ConfigOptionSpecification.md#structansys_1_1dpf_1_1ConfigOptionSpecification_1a52f0699aa8cd917775d57e30bcf026be)
* [\_name](structansys_1_1dpf_1_1ConfigOptionSpecification.md#structansys_1_1dpf_1_1ConfigOptionSpecification_1afa80484ff40dd26e75e9bcb4f059f7bb)
* [\_type\_names](structansys_1_1dpf_1_1ConfigOptionSpecification.md#structansys_1_1dpf_1_1ConfigOptionSpecification_1adaa1194a59e880eae4f86b114f96e325)
* [ConfigOptionSpecification](structansys_1_1dpf_1_1ConfigOptionSpecification.md#structansys_1_1dpf_1_1ConfigOptionSpecification_1a253b65ae84fcc73cd2b27e2c5545a198)
* [getDefaultValue](structansys_1_1dpf_1_1ConfigOptionSpecification.md#structansys_1_1dpf_1_1ConfigOptionSpecification_1a451a803874ee02f8e8cba2c578fb9bdb)
* [getDescription](structansys_1_1dpf_1_1ConfigOptionSpecification.md#structansys_1_1dpf_1_1ConfigOptionSpecification_1a52c1ba0874464f49572045e5a4447a8b)
* [getName](structansys_1_1dpf_1_1ConfigOptionSpecification.md#structansys_1_1dpf_1_1ConfigOptionSpecification_1a6a87af4628268c180d7b2af80877e7a3)
* [getTypeNames](structansys_1_1dpf_1_1ConfigOptionSpecification.md#structansys_1_1dpf_1_1ConfigOptionSpecification_1a27fdb0b2eeb0996d511eb7775c757347)

## Private attributes

<a id="structansys_1_1dpf_1_1ConfigOptionSpecification_1a52f0699aa8cd917775d57e30bcf026be"></a>
### Variable \_description

![][private]

**Definition**: `dpf\_api.h` (line 4591)

```cpp
std::string ansys::dpf::ConfigOptionSpecification::_description
```



Description of config option.



**Type**: std::string

<a id="structansys_1_1dpf_1_1ConfigOptionSpecification_1afa80484ff40dd26e75e9bcb4f059f7bb"></a>
### Variable \_name

![][private]

**Definition**: `dpf\_api.h` (line 4593)

```cpp
std::string ansys::dpf::ConfigOptionSpecification::_name
```



Name of config option.



**Type**: std::string

<a id="structansys_1_1dpf_1_1ConfigOptionSpecification_1adaa1194a59e880eae4f86b114f96e325"></a>
### Variable \_type\_names

![][private]

**Definition**: `dpf\_api.h` (line 4595)

```cpp
std::vector<std::string> ansys::dpf::ConfigOptionSpecification::_type_names
```



Type names of config option.



**Type**: std::vector< std::string >

<a id="structansys_1_1dpf_1_1ConfigOptionSpecification_1a9652c6c30852f7857853f22997b63413"></a>
### Variable \_default\_value

![][private]

**Definition**: `dpf\_api.h` (line 4597)

```cpp
std::string ansys::dpf::ConfigOptionSpecification::_default_value
```



Default value of config option.



**Type**: std::string

## Public functions

<a id="structansys_1_1dpf_1_1ConfigOptionSpecification_1a253b65ae84fcc73cd2b27e2c5545a198"></a>
### Function ConfigOptionSpecification

![][public]

```cpp
ansys::dpf::ConfigOptionSpecification::ConfigOptionSpecification(std::string const &description, std::string const &name, std::vector< std::string > type_names, std::string const &default_value)
```







**Parameters**:

* std::string const & **description**
* std::string const & **name**
* std::vector< std::string > **type_names**
* std::string const & **default_value**

**Return type**: 

<a id="structansys_1_1dpf_1_1ConfigOptionSpecification_1a52c1ba0874464f49572045e5a4447a8b"></a>
### Function getDescription

![][public]
![][const]

```cpp
std::string ansys::dpf::ConfigOptionSpecification::getDescription() const
```



Description of config option.



**Return type**: std::string

<a id="structansys_1_1dpf_1_1ConfigOptionSpecification_1a6a87af4628268c180d7b2af80877e7a3"></a>
### Function getName

![][public]
![][const]

```cpp
std::string ansys::dpf::ConfigOptionSpecification::getName() const
```



Name of config option.



**Return type**: std::string

<a id="structansys_1_1dpf_1_1ConfigOptionSpecification_1a27fdb0b2eeb0996d511eb7775c757347"></a>
### Function getTypeNames

![][public]
![][const]

```cpp
std::vector<std::string> ansys::dpf::ConfigOptionSpecification::getTypeNames() const
```



Type names of config option.



**Return type**: std::vector< std::string >

<a id="structansys_1_1dpf_1_1ConfigOptionSpecification_1a451a803874ee02f8e8cba2c578fb9bdb"></a>
### Function getDefaultValue

![][public]
![][const]

```cpp
std::string ansys::dpf::ConfigOptionSpecification::getDefaultValue() const
```



Default value of config option.



**Return type**: std::string

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)