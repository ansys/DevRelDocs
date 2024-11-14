<a id="structsysc_1_1ParticipantInfo"></a>
# Structure sysc::ParticipantInfo

![][C++]
![][public]

**Definition**: `CommonTypes.hpp` (line 260)

provide a structure for the participant information needed to connect to a System Coupling object

**Parameters**:

* **scHost**: host name to connect to System Coupling
* **scPort**: port number to connect to System Coupling
* **participantName**: name of the participant
* **isCosimulation**: flag if the simulation is a cosimulation
* **buildInformation**: information for the current build
* **transcriptFilename**: the name of the transcript to be written to

## Members

* [buildInformation](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1a04aa25721fcee48f00326f1a48bdf2d4)
* [isCosimulation](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1a0cca75649fe3b7c48ae59d115dfdd4f9)
* [ParticipantInfo](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1a62ca76d7ec19c59606870814aaec771e)
* [ParticipantInfo](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1ad36586cda6d30d65c5f38e0df6ff352c)
* [ParticipantInfo](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1aeee6c446f5f67d25a4647cd3e6af2208)
* [ParticipantInfo](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1a95ef3378c1477c0e378ff6682339a72f)
* [participantName](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1ab9f7db7947123effd7b51a7c5be378e0)
* [scHost](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1a94cf61151b1961e603d2f2e5f9bba836)
* [scPort](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1a4e702f37611565ae8dd606d0617a9b1e)
* [transcriptFilename](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo_1afd0f30e3ffc99ebd394966f72869dfbf)

## Public attributes

<a id="structsysc_1_1ParticipantInfo_1a94cf61151b1961e603d2f2e5f9bba836"></a>
### Variable scHost

![][public]

**Definition**: `CommonTypes.hpp` (line 261)

```cpp
std::string sysc::ParticipantInfo::scHost
```







**Type**: std::string

<a id="structsysc_1_1ParticipantInfo_1a4e702f37611565ae8dd606d0617a9b1e"></a>
### Variable scPort

![][public]

**Definition**: `CommonTypes.hpp` (line 262)

```cpp
unsigned short sysc::ParticipantInfo::scPort {0}
```







**Type**: unsigned short

<a id="structsysc_1_1ParticipantInfo_1ab9f7db7947123effd7b51a7c5be378e0"></a>
### Variable participantName

![][public]

**Definition**: `CommonTypes.hpp` (line 263)

```cpp
std::string sysc::ParticipantInfo::participantName
```







**Type**: std::string

<a id="structsysc_1_1ParticipantInfo_1a0cca75649fe3b7c48ae59d115dfdd4f9"></a>
### Variable isCosimulation

![][public]

**Definition**: `CommonTypes.hpp` (line 264)

```cpp
bool sysc::ParticipantInfo::isCosimulation {false}
```







**Type**: bool

<a id="structsysc_1_1ParticipantInfo_1a04aa25721fcee48f00326f1a48bdf2d4"></a>
### Variable buildInformation

![][public]

**Definition**: `CommonTypes.hpp` (line 265)

```cpp
std::string sysc::ParticipantInfo::buildInformation
```







**Type**: std::string

<a id="structsysc_1_1ParticipantInfo_1afd0f30e3ffc99ebd394966f72869dfbf"></a>
### Variable transcriptFilename

![][public]

**Definition**: `CommonTypes.hpp` (line 266)

```cpp
std::string sysc::ParticipantInfo::transcriptFilename
```







**Type**: std::string

## Public functions

<a id="structsysc_1_1ParticipantInfo_1a62ca76d7ec19c59606870814aaec771e"></a>
### Function ParticipantInfo

![][public]

```cpp
sysc::ParticipantInfo::ParticipantInfo()=default
```

Provide a default constructor.





**Return type**: 

<a id="structsysc_1_1ParticipantInfo_1ad36586cda6d30d65c5f38e0df6ff352c"></a>
### Function ParticipantInfo

![][public]

```cpp
sysc::ParticipantInfo::ParticipantInfo(std::string scHost, unsigned short scPort, std::string participantName)
```

Provide a non-default constructor.





**Parameters**:

* std::string **scHost**
* unsigned short **scPort**
* std::string **participantName**

**Return type**: 

<a id="structsysc_1_1ParticipantInfo_1aeee6c446f5f67d25a4647cd3e6af2208"></a>
### Function ParticipantInfo

![][public]

```cpp
sysc::ParticipantInfo::ParticipantInfo(std::string scHost, unsigned short scPort, std::string participantName, std::string buildInformation)
```

Provide a non-default constructor.





**Parameters**:

* std::string **scHost**
* unsigned short **scPort**
* std::string **participantName**
* std::string **buildInformation**

**Return type**: 

<a id="structsysc_1_1ParticipantInfo_1a95ef3378c1477c0e378ff6682339a72f"></a>
### Function ParticipantInfo

![][public]

```cpp
sysc::ParticipantInfo::ParticipantInfo(std::string scHost, unsigned short scPort, std::string participantName, std::string buildInformation, std::string transcriptFilename)
```

Provide a non-default constructor.





**Parameters**:

* std::string **scHost**
* unsigned short **scPort**
* std::string **participantName**
* std::string **buildInformation**
* std::string **transcriptFilename**

**Return type**: 

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)