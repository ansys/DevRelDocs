<a id="classansys_1_1dpf_1_1LibraryHandle"></a>
# Class ansys::dpf::LibraryHandle

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 1877)

Provides an access to use DPF HGP API. The instance of [LibraryHandle](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle) is only needed once.

Wraps dataProcessingCore loading in an RAII (Resource acquisition is initialization) structure in order to ensure correct loading/unloading of the DPF core functionalities. Must be the first call made to DPF API.

## Members

* [\_api](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1ad615e7360dec3aacfb8e11da02a6fc77)
* [\_error](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1ad28867d2e3bab3c007745ccdff9ffc3d)
* [\_key](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1ac2302a692079be9e8a91b0ae3f424c2c)
* [callAPI](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1ad6ccabf051eb035f8c92d2a70915d1b5)
* [error](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1a124c4f3f441f173c91e5db5f72697506)
* [libraryDir](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1afe1ec06d81aa4f65d48803e6691aed46)
* [LibraryHandle](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1ace7af23aabdd94273ddce1266a0f402d)
* [LibraryHandle](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1a6015d31697c46deb75d7274fb5b0cf74)
* [LibraryHandle](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1a22f10026b439d4e05a8d4917ca286961)
* [LibraryHandle](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1a0651cd01e74e2cb90f320435bc7fc87a)
* [LibraryHandle](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1af1ab8962e664dd53b7c4b47988443e7e)
* [LibraryHandle](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1a385df64ee05cc735acdbd0d519f47fd0)
* [LibraryHandle](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1a761736a0e5edc45659fb39edf4f25a4f)
* [operator=](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1a960d04a287464cd7e4337c501b07e55f)
* [operator=](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1ae6b4015fd07463703a5a61a8d99b19f8)
* [~LibraryHandle](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1a7a1cac9d869e155572c2e7279770694f)

## Private attributes

<a id="classansys_1_1dpf_1_1LibraryHandle_1ad615e7360dec3aacfb8e11da02a6fc77"></a>
### Variable \_api

![][private]

**Definition**: `dpf\_api\_base.h` (line 1880)


```cpp
so::API* ansys::dpf::LibraryHandle::_api = nullptr
```








**Type**: so::API *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LibraryHandle::_api"}]}`
-->

<a id="classansys_1_1dpf_1_1LibraryHandle_1ac2302a692079be9e8a91b0ae3f424c2c"></a>
### Variable \_key

![][private]

**Definition**: `dpf\_api\_base.h` (line 1881)


```cpp
std::string ansys::dpf::LibraryHandle::_key
```








**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LibraryHandle::_key"}]}`
-->

<a id="classansys_1_1dpf_1_1LibraryHandle_1ad28867d2e3bab3c007745ccdff9ffc3d"></a>
### Variable \_error

![][private]

**Definition**: `dpf\_api\_base.h` (line 1882)


```cpp
ansys::dpf::DpfError ansys::dpf::LibraryHandle::_error
```








**Type**: [ansys::dpf::DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LibraryHandle::_error"}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1LibraryHandle_1ace7af23aabdd94273ddce1266a0f402d"></a>
### Function LibraryHandle

![][public]


```cpp
ansys::dpf::LibraryHandle::LibraryHandle(std::string const &key="common", std::string const &shared_object_root_name="DataProcessingCore", LoadType load_type=LoadType::try_load, std::string const &dpf_client_api="DPFClientAPI")
```




Must be the first call made to DPF API.



**Parameters**:

* std::string const & **key** = "common" : [in] Key used to identify the API (e.g. common, remote...).
* std::string const & **shared_object_root_name** = "DataProcessingCore" : [in] Library name of the DPF API to load (e.g. DataProcessingCore that implements the core DPF symbols, Ans.Dpf.GrpcClient that implements the remote gRPC DPF symbols...).
* [LoadType](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ac4f1380f00170887891b5cf54d8c94b3) **load_type** = [LoadType::try\_load](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ac4f1380f00170887891b5cf54d8c94b3a6d450e9598ea0dffeaff74fbcccb116f) : [in] Enum that provides settings at API loading step.
* std::string const & **dpf_client_api** = "DPFClientAPI" 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LibraryHandle::LibraryHandle"}]}`
-->

<a id="classansys_1_1dpf_1_1LibraryHandle_1a6015d31697c46deb75d7274fb5b0cf74"></a>
### Function LibraryHandle

![][public]


```cpp
ansys::dpf::LibraryHandle::LibraryHandle(Context const &context, std::string const &key="common", std::string const &shared_object_root_name="DataProcessingCore", LoadType load_type=LoadType::try_load, std::string const &dpf_client_api="DPFClientAPI")
```




Must be the first call made to DPF API. Using a [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context) that defines specific settings.



**Parameters**:

* [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context) const & **context**: [in] [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context) object that defines settings to load the DPF APIs.
* std::string const & **key** = "common" : [in] Key used to identify the API (e.g. common, remote...).
* std::string const & **shared_object_root_name** = "DataProcessingCore" : [in] Library name of the DPF API to load (e.g. DataProcessingCore that implements the core DPF symbols, Ans.Dpf.GrpcClient that implements the remote gRPC DPF symbols...).
* [LoadType](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ac4f1380f00170887891b5cf54d8c94b3) **load_type** = [LoadType::try\_load](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ac4f1380f00170887891b5cf54d8c94b3a6d450e9598ea0dffeaff74fbcccb116f) : [in] Enum that provides settings at API loading step.
* std::string const & **dpf_client_api** = "DPFClientAPI" 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LibraryHandle::LibraryHandle"}]}`
-->

<a id="classansys_1_1dpf_1_1LibraryHandle_1a22f10026b439d4e05a8d4917ca286961"></a>
### Function LibraryHandle

![][public]


```cpp
ansys::dpf::LibraryHandle::LibraryHandle(std::string const &path_to_shared_object, Context const &context, std::string const &key="common", std::string const &shared_object_root_name="DataProcessingCore", LoadType load_type=LoadType::try_load, std::string const &path_to_dpf_client_api="", std::string const &dpf_client_api="DPFClientAPI")
```




Must be the first call made to DPF API. Using a [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context) that defines specific settings.



**Parameters**:

* std::string const & **path_to_shared_object**: [in] path to DataProcessingCore.dll or libDataProcessingCore.so.
* [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context) const & **context**: [in] [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context) object that defines settings to load the DPF APIs.
* std::string const & **key** = "common" : [in] Key used to identify the API (e.g. common, remote...).
* std::string const & **shared_object_root_name** = "DataProcessingCore" : [in] Library name of the DPF API to load (e.g. DataProcessingCore that implements the core DPF symbols, Ans.Dpf.GrpcClient that implements the remote gRPC DPF symbols...).
* [LoadType](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ac4f1380f00170887891b5cf54d8c94b3) **load_type** = [LoadType::try\_load](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ac4f1380f00170887891b5cf54d8c94b3a6d450e9598ea0dffeaff74fbcccb116f) : [in] Enum that provides settings at API loading step.
* std::string const & **path_to_dpf_client_api** = "" : [in] path to DPFClientAPI.dll or libDPFClientAPI.so, takes path_to_shared_object by default.
* std::string const & **dpf_client_api** = "DPFClientAPI" 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LibraryHandle::LibraryHandle"}]}`
-->

<a id="classansys_1_1dpf_1_1LibraryHandle_1a0651cd01e74e2cb90f320435bc7fc87a"></a>
### Function LibraryHandle

![][public]


```cpp
ansys::dpf::LibraryHandle::LibraryHandle(std::string const &key, std::string const &shared_object_root_name, ApiType api_type, LoadType load_type=LoadType::try_load, std::string const &dpf_client_api="DPFClientAPI")
```




**Deprecated**:

This call is deprecated. usage is not maintained.



**Parameters**:

* std::string const & **key**
* std::string const & **shared_object_root_name**
* [ApiType](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a318ab16f856ec8d2ef6e13af94a6dc56) **api_type**
* [LoadType](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ac4f1380f00170887891b5cf54d8c94b3) **load_type** = [LoadType::try\_load](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ac4f1380f00170887891b5cf54d8c94b3a6d450e9598ea0dffeaff74fbcccb116f) 
* std::string const & **dpf_client_api** = "DPFClientAPI" 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LibraryHandle::LibraryHandle"}]}`
-->

<a id="classansys_1_1dpf_1_1LibraryHandle_1af1ab8962e664dd53b7c4b47988443e7e"></a>
### Function LibraryHandle

![][public]


```cpp
ansys::dpf::LibraryHandle::LibraryHandle(so::API *api)
```








**Parameters**:

* so::API * **api**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LibraryHandle::LibraryHandle"}]}`
-->

<a id="classansys_1_1dpf_1_1LibraryHandle_1a385df64ee05cc735acdbd0d519f47fd0"></a>
### Function LibraryHandle

![][public]


```cpp
ansys::dpf::LibraryHandle::LibraryHandle(const LibraryHandle &)=delete
```








**Parameters**:

* const LibraryHandle &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LibraryHandle::LibraryHandle"}]}`
-->

<a id="classansys_1_1dpf_1_1LibraryHandle_1a761736a0e5edc45659fb39edf4f25a4f"></a>
### Function LibraryHandle

![][public]


```cpp
ansys::dpf::LibraryHandle::LibraryHandle(LibraryHandle &&)=delete
```








**Parameters**:

* LibraryHandle &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LibraryHandle::LibraryHandle"}]}`
-->

<a id="classansys_1_1dpf_1_1LibraryHandle_1a7a1cac9d869e155572c2e7279770694f"></a>
### Function ~LibraryHandle

![][public]


```cpp
ansys::dpf::LibraryHandle::~LibraryHandle()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LibraryHandle::~LibraryHandle"}]}`
-->

<a id="classansys_1_1dpf_1_1LibraryHandle_1a960d04a287464cd7e4337c501b07e55f"></a>
### Function operator=

![][public]


```cpp
LibraryHandle & ansys::dpf::LibraryHandle::operator=(const LibraryHandle &)=delete
```








**Parameters**:

* const [LibraryHandle](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1ace7af23aabdd94273ddce1266a0f402d) &

**Return type**: [LibraryHandle](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1ace7af23aabdd94273ddce1266a0f402d) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LibraryHandle::operator="}]}`
-->

<a id="classansys_1_1dpf_1_1LibraryHandle_1ae6b4015fd07463703a5a61a8d99b19f8"></a>
### Function operator=

![][public]


```cpp
LibraryHandle & ansys::dpf::LibraryHandle::operator=(LibraryHandle &&)=delete
```








**Parameters**:

* [LibraryHandle](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1ace7af23aabdd94273ddce1266a0f402d) &&

**Return type**: [LibraryHandle](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle_1ace7af23aabdd94273ddce1266a0f402d) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LibraryHandle::operator="}]}`
-->

<a id="classansys_1_1dpf_1_1LibraryHandle_1ad6ccabf051eb035f8c92d2a70915d1b5"></a>
### Function callAPI

![][public]
![][const]


```cpp
so::API const  * ansys::dpf::LibraryHandle::callAPI() const
```








**Return type**: so::API const *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LibraryHandle::callAPI"}]}`
-->

<a id="classansys_1_1dpf_1_1LibraryHandle_1a124c4f3f441f173c91e5db5f72697506"></a>
### Function error

![][public]
![][const]


```cpp
ansys::dpf::DpfError const  & ansys::dpf::LibraryHandle::error() const
```








**Return type**: [ansys::dpf::DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LibraryHandle::error"}]}`
-->

<a id="classansys_1_1dpf_1_1LibraryHandle_1afe1ec06d81aa4f65d48803e6691aed46"></a>
### Function libraryDir

![][public]
![][const]


```cpp
std::string ansys::dpf::LibraryHandle::libraryDir() const
```


Return the path to the directory where the library is loaded.





**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LibraryHandle::libraryDir"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api_base.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)