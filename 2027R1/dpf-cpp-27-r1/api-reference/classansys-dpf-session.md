<a id="classansys-dpf-session"></a>
# Class ansys::dpf::Session

![][C++]
![][public]



Define a DPF session.

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes)

## Members

* [add](classansys-dpf-session.md#classansys-dpf-session-1a44217e8e1b859b6bbc3cd902597a441b)
* [add](classansys-dpf-session.md#classansys-dpf-session-1a1ca0f541376f2606d6a1d38d73b42095)
* [addEventHandler](classansys-dpf-session.md#classansys-dpf-session-1a9d2f09db50b3767c062100bfc0b67e2c)
* [callAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aea34d37e0c080126eff70db34bf46597)
* [describe](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9977945710983bc03d2940fa007847b2)
* [empty](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a39cd546c42518e2332be8f287db95459)
* [flushWorkflows](classansys-dpf-session.md#classansys-dpf-session-1abf5a4032d5b54f0b31d83279af643ecb)
* [getClient](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a968afd9daa0b0f13b65a2ac61369d73a)
* [getWorkflow](classansys-dpf-session.md#classansys-dpf-session-1a1eb04b4b9a1df351de2211ed4a9065f3)
* [getWorkflowByIndex](classansys-dpf-session.md#classansys-dpf-session-1a0c351a7e9deb14ef205168a8c2a14535)
* [hasBeenMovedLocally](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a1a5634202c15404b6b24e8f50e51cb66)
* [hasInternalObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ae198f89868d85c7db6dc1a934a1d3c15)
* [id](classansys-dpf-session.md#classansys-dpf-session-1a4fdd43dbb146e6bef0e69fdc3f6b8ac8)
* [isOnCommonAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [numberOfWorkflow](classansys-dpf-session.md#classansys-dpf-session-1ae6197db1ac01a01c67f4f87955c2b849)
* [operator=](classansys-dpf-session.md#classansys-dpf-session-1a4fbe681f5d623efaa51bca1ad73b5bfb)
* [operator=](classansys-dpf-session.md#classansys-dpf-session-1af4c0f6c0a74d4c837ef94919eea9a7f1)
* [Session](classansys-dpf-session.md#classansys-dpf-session-1a70a391202084d3240f07e12cec53a1d0)
* [Session](classansys-dpf-session.md#classansys-dpf-session-1a35c8573a7a81b571b6856c75142921a5)
* [Session](classansys-dpf-session.md#classansys-dpf-session-1a4f2358b004b5e805e163dfcb46eac7ab)
* [Session](classansys-dpf-session.md#classansys-dpf-session-1abd64f9adfdc41f1e304e0cc874f7bf1a)
* [~DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ab7c83b6ea160c2b115e056f6c312112f)
* [~Session](classansys-dpf-session.md#classansys-dpf-session-1a29c88c6177c49e8b47dbb87b0be840fa)

## Public functions

<a id="classansys-dpf-session-1a70a391202084d3240f07e12cec53a1d0"></a>
### Function Session

![][public]


```cpp
ansys::dpf::Session::Session()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Session::Session"}]}`
-->

<a id="classansys-dpf-session-1a29c88c6177c49e8b47dbb87b0be840fa"></a>
### Function ~Session

![][public]


```cpp
ansys::dpf::Session::~Session()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Session::~Session"}]}`
-->

<a id="classansys-dpf-session-1a35c8573a7a81b571b6856c75142921a5"></a>
### Function Session

![][public]


```cpp
ansys::dpf::Session::Session(Client const *const client)
```




Create a new [Session](classansys-dpf-session.md#classansys-dpf-session) on a server.



**Parameters**:

* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**: [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Session::Session"}]}`
-->

<a id="classansys-dpf-session-1a4f2358b004b5e805e163dfcb46eac7ab"></a>
### Function Session

![][public]


```cpp
ansys::dpf::Session::Session(Session const &)
```








**Parameters**:

* Session const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Session::Session"}]}`
-->

<a id="classansys-dpf-session-1abd64f9adfdc41f1e304e0cc874f7bf1a"></a>
### Function Session

![][public]


```cpp
ansys::dpf::Session::Session(Session &&)=delete
```








**Parameters**:

* Session &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Session::Session"}]}`
-->

<a id="classansys-dpf-session-1a4fbe681f5d623efaa51bca1ad73b5bfb"></a>
### Function operator=

![][public]


```cpp
Session & ansys::dpf::Session::operator=(Session const &)
```








**Parameters**:

* Session const &

**Return type**: Session &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Session::operator="}]}`
-->

<a id="classansys-dpf-session-1af4c0f6c0a74d4c837ef94919eea9a7f1"></a>
### Function operator=

![][public]


```cpp
Session & ansys::dpf::Session::operator=(Session &&)=delete
```








**Parameters**:

* Session &&

**Return type**: Session &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Session::operator="}]}`
-->

<a id="classansys-dpf-session-1a4fdd43dbb146e6bef0e69fdc3f6b8ac8"></a>
### Function id

![][public]
![][const]


```cpp
std::string ansys::dpf::Session::id() const
```




**Returns**:

Id of session.



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Session::id"}]}`
-->

<a id="classansys-dpf-session-1a44217e8e1b859b6bbc3cd902597a441b"></a>
### Function add

![][public]


```cpp
void ansys::dpf::Session::add(Workflow &wf, std::string const &identifier)
```




Add a workflow to session.



**Parameters**:

* Workflow & **wf**: [in] Workflow to add.
* std::string const & **identifier**: [out] Identifier for workflow.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Session::add"}]}`
-->

<a id="classansys-dpf-session-1a1ca0f541376f2606d6a1d38d73b42095"></a>
### Function add

![][public]


```cpp
std::string ansys::dpf::Session::add(Workflow &wf)
```




Add workflow to session. 
**Returns**:

Identifier for workflow.



**Parameters**:

* Workflow & **wf**: [in] Workflow to add.

**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Session::add"}]}`
-->

<a id="classansys-dpf-session-1a1eb04b4b9a1df351de2211ed4a9065f3"></a>
### Function getWorkflow

![][public]


```cpp
Workflow ansys::dpf::Session::getWorkflow(std::string const &identifier)
```




**Returns**:

Workflow given by identifier.



**Parameters**:

* std::string const & **identifier**: [in] Identifier of workflow.

**Return type**: Workflow

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Session::getWorkflow"}]}`
-->

<a id="classansys-dpf-session-1a0c351a7e9deb14ef205168a8c2a14535"></a>
### Function getWorkflowByIndex

![][public]


```cpp
Workflow ansys::dpf::Session::getWorkflowByIndex(dp_index index)
```




**Returns**:

Workflow given by index.



**Parameters**:

* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of workflow.

**Return type**: Workflow

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Session::getWorkflowByIndex"}]}`
-->

<a id="classansys-dpf-session-1ae6197db1ac01a01c67f4f87955c2b849"></a>
### Function numberOfWorkflow

![][public]
![][const]


```cpp
dp_int ansys::dpf::Session::numberOfWorkflow() const
```




**Returns**:

Number of workflows in session.



**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Session::numberOfWorkflow"}]}`
-->

<a id="classansys-dpf-session-1abf5a4032d5b54f0b31d83279af643ecb"></a>
### Function flushWorkflows

![][public]


```cpp
void ansys::dpf::Session::flushWorkflows()
```








**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Session::flushWorkflows"}]}`
-->

<a id="classansys-dpf-session-1a9d2f09db50b3767c062100bfc0b67e2c"></a>
### Function addEventHandler

![][public]


```cpp
void ansys::dpf::Session::addEventHandler(EventHandler &event_handler)
```




Add event handler to handle status of DPF session.



**Parameters**:

* [EventHandler](classansys-dpf-eventhandler.md#classansys-dpf-eventhandler) & **event_handler**: [in] Handler for session status.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Session::addEventHandler"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)