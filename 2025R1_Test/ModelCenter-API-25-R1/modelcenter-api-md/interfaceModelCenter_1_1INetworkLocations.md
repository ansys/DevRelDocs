# Interface ModelCenter::INetworkLocations

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 5062)



Caches network location credentials and fetches them when needed to avoid reauthentication when accessing a previously accessed network.

## Members

* [add](interfaceModelCenter_1_1INetworkLocations.md#interfaceModelCenter_1_1INetworkLocations_1a86769591b49fd0bf2ce90bfd45c24bdf)
* [exists](interfaceModelCenter_1_1INetworkLocations.md#interfaceModelCenter_1_1INetworkLocations_1a6e6cf7b365025116e67b9ddd575b10b1)
* [removeAddress](interfaceModelCenter_1_1INetworkLocations.md#interfaceModelCenter_1_1INetworkLocations_1aa7869edab5e7d597c67804e2d5dcf561)

## Public functions

<a id="interfaceModelCenter_1_1INetworkLocations_1a86769591b49fd0bf2ce90bfd45c24bdf"></a>
### Function add

![][public]

```
void ModelCenter::INetworkLocations::add(BSTR address, BSTR username, BSTR password)
```



Add the specified network location to the list.






**Parameters**:

* **address**: the location to add (string form of a URI)
* **username**: the username to use for logging into this location
* **password**: the password to use for logging into this location



**Parameters**:

* BSTR **address**
* BSTR **username**
* BSTR **password**

**Return type**: void

<a id="interfaceModelCenter_1_1INetworkLocations_1a6e6cf7b365025116e67b9ddd575b10b1"></a>
### Function exists

![][public]

```
boolean ModelCenter::INetworkLocations::exists(BSTR address)
```



Is the specified location in the list of network locations?






**Parameters**:

* **address**: The location to be checked on.


**Returns**:

True if the address exists, else false.



**Parameters**:

* BSTR **address**

**Return type**: boolean

<a id="interfaceModelCenter_1_1INetworkLocations_1aa7869edab5e7d597c67804e2d5dcf561"></a>
### Function removeAddress

![][public]

```
void ModelCenter::INetworkLocations::removeAddress(BSTR address)
```



Remove the specified network location to the list.






**Parameters**:

* **address**: the location to remove



**Parameters**:

* BSTR **address**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)