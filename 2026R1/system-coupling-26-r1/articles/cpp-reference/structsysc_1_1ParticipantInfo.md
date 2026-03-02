# Structure sysc::ParticipantInfo

![][C++]
![][public]

**Definition**: `CommonTypes.hpp` (line 303)

provide a structure for the participant information needed to connect to a System Coupling object

**Parameters**:

* **scHost**: host name to connect to System Coupling
* **scPort**: port number to connect to System Coupling
* **participantName**: name of the participant
* **isCosimulation**: flag if the simulation is a cosimulation
* **buildInformation**: information for the current build
* **transcriptFilename**: the name of the transcript to be written to
* **numApps**: number of applications connected by SCP library
* **myHostName**: (optional) host name to use for remote server(s)

## Members

* [buildInformation](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1a04aa25721fcee48f00326f1a48bdf2d4)
* [isCosimulation](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1a0cca75649fe3b7c48ae59d115dfdd4f9)
* [myHostName](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1ae2365fab4736a7c238257f24bb05855c)
* [numApps](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1a7b8f2c4e568a4c611bdf10f4e33774f3)
* [ParticipantInfo](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1a62ca76d7ec19c59606870814aaec771e)
* [ParticipantInfo](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1a2f6d5fdf97266f6ab00e1194dcbb1a75)
* [ParticipantInfo](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1acf9c608e83283be294cf319ff100dbe2)
* [ParticipantInfo](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1ac5c5c5d01a77e35072efbb1322a4f88b)
* [ParticipantInfo](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1a3f3caa3929e76a14652484ba46c441ce)
* [participantName](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1ab9f7db7947123effd7b51a7c5be378e0)
* [scHost](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1a8995ce5a329056c81397a4db33607959)
* [scPort](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1aec876f2e942c0b2db13547da778873d7)
* [transcriptFilename](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1afd0f30e3ffc99ebd394966f72869dfbf)

## Public attributes

<a id="structsysc_1_1ParticipantInfo_1a8995ce5a329056c81397a4db33607959"></a>
### Variable scHost

![][public]

**Definition**: `CommonTypes.hpp` (line 304)


```cpp
Host sysc::ParticipantInfo::scHost
```








**Type**: [Host](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gab30e3c61a7028c8f25acf9ae24062249)

<a id="structsysc_1_1ParticipantInfo_1aec876f2e942c0b2db13547da778873d7"></a>
### Variable scPort

![][public]

**Definition**: `CommonTypes.hpp` (line 305)


```cpp
Port sysc::ParticipantInfo::scPort {0}
```








**Type**: [Port](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga447faf26b625c405b29e9650df671f3b)

<a id="structsysc_1_1ParticipantInfo_1ab9f7db7947123effd7b51a7c5be378e0"></a>
### Variable participantName

![][public]

**Definition**: `CommonTypes.hpp` (line 306)


```cpp
std::string sysc::ParticipantInfo::participantName
```








**Type**: std::string

<a id="structsysc_1_1ParticipantInfo_1a0cca75649fe3b7c48ae59d115dfdd4f9"></a>
### Variable isCosimulation

![][public]

**Definition**: `CommonTypes.hpp` (line 307)


```cpp
bool sysc::ParticipantInfo::isCosimulation {false}
```








**Type**: bool

<a id="structsysc_1_1ParticipantInfo_1a04aa25721fcee48f00326f1a48bdf2d4"></a>
### Variable buildInformation

![][public]

**Definition**: `CommonTypes.hpp` (line 308)


```cpp
std::string sysc::ParticipantInfo::buildInformation
```








**Type**: std::string

<a id="structsysc_1_1ParticipantInfo_1afd0f30e3ffc99ebd394966f72869dfbf"></a>
### Variable transcriptFilename

![][public]

**Definition**: `CommonTypes.hpp` (line 309)


```cpp
std::string sysc::ParticipantInfo::transcriptFilename
```








**Type**: std::string

<a id="structsysc_1_1ParticipantInfo_1a7b8f2c4e568a4c611bdf10f4e33774f3"></a>
### Variable numApps

![][public]

**Definition**: `CommonTypes.hpp` (line 311)


```cpp
std::size_t sysc::ParticipantInfo::numApps {0}
```








**Type**: std::size_t

<a id="structsysc_1_1ParticipantInfo_1ae2365fab4736a7c238257f24bb05855c"></a>
### Variable myHostName

![][public]

**Definition**: `CommonTypes.hpp` (line 312)


```cpp
Host sysc::ParticipantInfo::myHostName
```








**Type**: [Host](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gab30e3c61a7028c8f25acf9ae24062249)

## Public functions

<a id="structsysc_1_1ParticipantInfo_1a62ca76d7ec19c59606870814aaec771e"></a>
### Function ParticipantInfo

![][public]


```cpp
sysc::ParticipantInfo::ParticipantInfo()=default
```


Provide a default constructor.





**Return type**: 

<a id="structsysc_1_1ParticipantInfo_1a2f6d5fdf97266f6ab00e1194dcbb1a75"></a>
### Function ParticipantInfo

![][public]


```cpp
sysc::ParticipantInfo::ParticipantInfo(Host scHost, Port scPort, std::string participantName, bool isCosimulation, std::string buildInformation, std::string transcriptFilename, std::size_t numApps, Host myHostName)
```


Provide a non-default constructor.





**Parameters**:

* [Host](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gab30e3c61a7028c8f25acf9ae24062249) **scHost**
* [Port](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga447faf26b625c405b29e9650df671f3b) **scPort**
* std::string **participantName**
* bool **isCosimulation**
* std::string **buildInformation**
* std::string **transcriptFilename**
* std::size_t **numApps**
* [Host](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gab30e3c61a7028c8f25acf9ae24062249) **myHostName**

**Return type**: 

<a id="structsysc_1_1ParticipantInfo_1acf9c608e83283be294cf319ff100dbe2"></a>
### Function ParticipantInfo

![][public]


```cpp
sysc::ParticipantInfo::ParticipantInfo(Host scHost, Port scPort, std::string participantName)
```


Provide a non-default constructor.





**Parameters**:

* [Host](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gab30e3c61a7028c8f25acf9ae24062249) **scHost**
* [Port](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga447faf26b625c405b29e9650df671f3b) **scPort**
* std::string **participantName**

**Return type**: 

<a id="structsysc_1_1ParticipantInfo_1ac5c5c5d01a77e35072efbb1322a4f88b"></a>
### Function ParticipantInfo

![][public]


```cpp
sysc::ParticipantInfo::ParticipantInfo(Host scHost, Port scPort, std::string participantName, std::string buildInformation)
```


Provide a non-default constructor.





**Parameters**:

* [Host](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gab30e3c61a7028c8f25acf9ae24062249) **scHost**
* [Port](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga447faf26b625c405b29e9650df671f3b) **scPort**
* std::string **participantName**
* std::string **buildInformation**

**Return type**: 

<a id="structsysc_1_1ParticipantInfo_1a3f3caa3929e76a14652484ba46c441ce"></a>
### Function ParticipantInfo

![][public]


```cpp
sysc::ParticipantInfo::ParticipantInfo(Host scHost, Port scPort, std::string participantName, std::string buildInformation, std::string transcriptFilename)
```


Provide a non-default constructor.





**Parameters**:

* [Host](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gab30e3c61a7028c8f25acf9ae24062249) **scHost**
* [Port](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga447faf26b625c405b29e9650df671f3b) **scPort**
* std::string **participantName**
* std::string **buildInformation**
* std::string **transcriptFilename**

**Return type**: 

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)