<a id="classansys_1_1dpf_1_1Session"></a>
# Class ansys::dpf::Session

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 4773)



Define a DPF session.

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes)

## Members

* [add](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session_1a44217e8e1b859b6bbc3cd902597a441b)
* [add](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session_1a1ca0f541376f2606d6a1d38d73b42095)
* [addEventHandler](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session_1a9d2f09db50b3767c062100bfc0b67e2c)
* [callAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a1ef954a45b178eac4de68813168db6fb)
* [describe](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9977945710983bc03d2940fa007847b2)
* [empty](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a39cd546c42518e2332be8f287db95459)
* [flushWorkflows](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session_1abf5a4032d5b54f0b31d83279af643ecb)
* [getClient](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a968afd9daa0b0f13b65a2ac61369d73a)
* [getWorkflow](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session_1a1eb04b4b9a1df351de2211ed4a9065f3)
* [getWorkflowByIndex](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session_1a0c351a7e9deb14ef205168a8c2a14535)
* [hasBeenMovedLocally](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a1a5634202c15404b6b24e8f50e51cb66)
* [id](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session_1a4fdd43dbb146e6bef0e69fdc3f6b8ac8)
* [isOnCommonAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [numberOfWorkflow](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session_1ae6197db1ac01a01c67f4f87955c2b849)
* [operator=](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session_1a17d2665f47611ffee6cb2a9930a8a397)
* [operator=](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session_1a4c61f966fc9a769435baf7d2738ecf5c)
* [Session](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session_1a70a391202084d3240f07e12cec53a1d0)
* [Session](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session_1a35c8573a7a81b571b6856c75142921a5)
* [Session](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session_1a4f2358b004b5e805e163dfcb46eac7ab)
* [Session](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session_1abd64f9adfdc41f1e304e0cc874f7bf1a)
* [~DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1ab7c83b6ea160c2b115e056f6c312112f)
* [~Session](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session_1a29c88c6177c49e8b47dbb87b0be840fa)

## Public functions

<a id="classansys_1_1dpf_1_1Session_1a70a391202084d3240f07e12cec53a1d0"></a>
### Function Session

![][public]

```cpp
ansys::dpf::Session::Session()
```







**Return type**: 

<a id="classansys_1_1dpf_1_1Session_1a29c88c6177c49e8b47dbb87b0be840fa"></a>
### Function ~Session

![][public]

```cpp
ansys::dpf::Session::~Session()
```







**Return type**: 

<a id="classansys_1_1dpf_1_1Session_1a35c8573a7a81b571b6856c75142921a5"></a>
### Function Session

![][public]

```cpp
ansys::dpf::Session::Session(Client const *const client)
```



Create a new [Session](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session) on a server.



**Parameters**:

* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: 

<a id="classansys_1_1dpf_1_1Session_1a4f2358b004b5e805e163dfcb46eac7ab"></a>
### Function Session

![][public]

```cpp
ansys::dpf::Session::Session(Session const &)
```







**Parameters**:

* [Session](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session) const &

**Return type**: 

<a id="classansys_1_1dpf_1_1Session_1abd64f9adfdc41f1e304e0cc874f7bf1a"></a>
### Function Session

![][public]

```cpp
ansys::dpf::Session::Session(Session &&)=delete
```







**Parameters**:

* [Session](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session) &&

**Return type**: 

<a id="classansys_1_1dpf_1_1Session_1a17d2665f47611ffee6cb2a9930a8a397"></a>
### Function operator=

![][public]

```cpp
Session& ansys::dpf::Session::operator=(Session const &)
```







**Parameters**:

* [Session](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session) const &

**Return type**: [Session](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session) &

<a id="classansys_1_1dpf_1_1Session_1a4c61f966fc9a769435baf7d2738ecf5c"></a>
### Function operator=

![][public]

```cpp
Session& ansys::dpf::Session::operator=(Session &&)=delete
```







**Parameters**:

* [Session](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session) &&

**Return type**: [Session](classansys_1_1dpf_1_1Session.md#classansys_1_1dpf_1_1Session) &

<a id="classansys_1_1dpf_1_1Session_1a4fdd43dbb146e6bef0e69fdc3f6b8ac8"></a>
### Function id

![][public]
![][const]

```cpp
std::string ansys::dpf::Session::id() const
```



**Returns**:

Id of session.



**Return type**: std::string

<a id="classansys_1_1dpf_1_1Session_1a44217e8e1b859b6bbc3cd902597a441b"></a>
### Function add

![][public]

```cpp
void ansys::dpf::Session::add(Workflow &wf, std::string const &identifier)
```



Add a workflow to session.



**Parameters**:

* [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) & **wf**: [in] [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) to add.
* std::string const & **identifier**: [out] Identifier for workflow.

**Return type**: void

<a id="classansys_1_1dpf_1_1Session_1a1ca0f541376f2606d6a1d38d73b42095"></a>
### Function add

![][public]

```cpp
std::string ansys::dpf::Session::add(Workflow &wf)
```



Add workflow to session. 
**Returns**:

Identifier for workflow.



**Parameters**:

* [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) & **wf**: [in] [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) to add.

**Return type**: std::string

<a id="classansys_1_1dpf_1_1Session_1a1eb04b4b9a1df351de2211ed4a9065f3"></a>
### Function getWorkflow

![][public]

```cpp
Workflow ansys::dpf::Session::getWorkflow(std::string const &identifier)
```



**Returns**:

[Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) given by identifier.



**Parameters**:

* std::string const & **identifier**: [in] Identifier of workflow.

**Return type**: [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow)

<a id="classansys_1_1dpf_1_1Session_1a0c351a7e9deb14ef205168a8c2a14535"></a>
### Function getWorkflowByIndex

![][public]

```cpp
Workflow ansys::dpf::Session::getWorkflowByIndex(dp_index index)
```



**Returns**:

[Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) given by index.



**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of workflow.

**Return type**: [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow)

<a id="classansys_1_1dpf_1_1Session_1ae6197db1ac01a01c67f4f87955c2b849"></a>
### Function numberOfWorkflow

![][public]
![][const]

```cpp
dp_int ansys::dpf::Session::numberOfWorkflow() const
```



**Returns**:

Number of workflows in session.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1Session_1abf5a4032d5b54f0b31d83279af643ecb"></a>
### Function flushWorkflows

![][public]

```cpp
void ansys::dpf::Session::flushWorkflows()
```







**Return type**: void

<a id="classansys_1_1dpf_1_1Session_1a9d2f09db50b3767c062100bfc0b67e2c"></a>
### Function addEventHandler

![][public]

```cpp
void ansys::dpf::Session::addEventHandler(EventHandler &event_handler)
```



Add event handler to handle status of DPF session.



**Parameters**:

* [EventHandler](classansys_1_1dpf_1_1EventHandler.md#classansys_1_1dpf_1_1EventHandler) & **event_handler**: [in] Handler for session status.

**Return type**: void

**TODO**:

* includes {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)