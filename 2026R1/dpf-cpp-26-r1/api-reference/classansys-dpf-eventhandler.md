# Class ansys::dpf::EventHandler

<a id="classansys-dpf-eventhandler"></a>

![][C++]
![][public]



Define a event handler for DPF.

## Members

* [eOperatorAddedInWorkflow](classansys-dpf-eventhandler.md#classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640ad9626a0a09879a7183a76e08746cdcd1)
* [eOperatorDelegatedRun](classansys-dpf-eventhandler.md#classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640abeef70561c2a67ebb5d1d80f874018ec)
* [eOperatorError](classansys-dpf-eventhandler.md#classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640a0f25376abadec81fa52570e79d36d05f)
* [eOperatorFinished](classansys-dpf-eventhandler.md#classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640a0700941093fa292915f9618bb0b61d84)
* [eOperatorMakeSomeProgress](classansys-dpf-eventhandler.md#classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640a464a5c45643457a27c1465574121ddf6)
* [eOperatorSentException](classansys-dpf-eventhandler.md#classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640a93548451bb604b25b1b48544f69f5d94)
* [eOperatorStarted](classansys-dpf-eventhandler.md#classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640a2cc032c33b1b3d8906a99ced4711047f)
* [eOperatorWarning](classansys-dpf-eventhandler.md#classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640af1894e7491fc61198867494dcc74bfac)
* [eSessionWorkflowAdded](classansys-dpf-eventhandler.md#classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640a3a282aed20a3d810ba9992e4727ee076)
* [EventNature](classansys-dpf-eventhandler.md#classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640)
* [eWorkflowEvaluationFinished](classansys-dpf-eventhandler.md#classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640ae0689b714a39e93dcbc855b06abc3f50)
* [eWorkflowEvaluationStarted](classansys-dpf-eventhandler.md#classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640ac8ff87a9082ab3365a799654b0c8ff1c)
* [onEvent](classansys-dpf-eventhandler.md#classansys-dpf-eventhandler-1a0c835701bfa869a237802e6341bcb233)
* [~EventHandler](classansys-dpf-eventhandler.md#classansys-dpf-eventhandler-1a9d5cd1b0a226304f78b89096fdf1d938)

## Public types

<a id="classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640"></a>
### Enumeration type EventNature

![][public]


```cpp
enum EventNature {
  eOperatorStarted,
  eOperatorFinished,
  eOperatorSentException,
  eOperatorError,
  eOperatorMakeSomeProgress,
  eOperatorWarning,
  eOperatorAddedInWorkflow,
  eOperatorDelegatedRun,
  eSessionWorkflowAdded,
  eWorkflowEvaluationStarted,
  eWorkflowEvaluationFinished
}
```




Available states during DPF operation.



<a id="classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640a2cc032c33b1b3d8906a99ced4711047f"></a>
#### Enumerator eOperatorStarted



An operator was start.

<a id="classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640a0700941093fa292915f9618bb0b61d84"></a>
#### Enumerator eOperatorFinished



An operator has finished.

<a id="classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640a93548451bb604b25b1b48544f69f5d94"></a>
#### Enumerator eOperatorSentException



An operator failed with an exception.

<a id="classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640a0f25376abadec81fa52570e79d36d05f"></a>
#### Enumerator eOperatorError



An operator failed with an error.

<a id="classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640a464a5c45643457a27c1465574121ddf6"></a>
#### Enumerator eOperatorMakeSomeProgress



An operator is still running.

<a id="classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640af1894e7491fc61198867494dcc74bfac"></a>
#### Enumerator eOperatorWarning



An operator generated a warning.

<a id="classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640ad9626a0a09879a7183a76e08746cdcd1"></a>
#### Enumerator eOperatorAddedInWorkflow



An operator was added to workflow.

<a id="classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640abeef70561c2a67ebb5d1d80f874018ec"></a>
#### Enumerator eOperatorDelegatedRun



An operator was run.

<a id="classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640a3a282aed20a3d810ba9992e4727ee076"></a>
#### Enumerator eSessionWorkflowAdded



A workflow was added to a [Session](classansys-dpf-session.md#classansys-dpf-session).

<a id="classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640ac8ff87a9082ab3365a799654b0c8ff1c"></a>
#### Enumerator eWorkflowEvaluationStarted



A workflow has started.

<a id="classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640ae0689b714a39e93dcbc855b06abc3f50"></a>
#### Enumerator eWorkflowEvaluationFinished



A workflow has finished.

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::EventHandler::EventNature"}]}`
-->

## Friends

<a id="classansys-dpf-eventhandler-1afbdd63a566878ce30072e785ca7e7740"></a>
### Friend Session

![][C++]
![][public]







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Session"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::EventHandler::Session"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Session"}]},{"type":"text","text":"\n        "}]}`
-->

## Public functions

<a id="classansys-dpf-eventhandler-1a9d5cd1b0a226304f78b89096fdf1d938"></a>
### Function ~EventHandler

![][public]


```cpp
virtual ansys::dpf::EventHandler::~EventHandler()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::EventHandler::~EventHandler"}]}`
-->

<a id="classansys-dpf-eventhandler-1a0c835701bfa869a237802e6341bcb233"></a>
### Function onEvent

![][public]


```cpp
virtual void ansys::dpf::EventHandler::onEvent(EventNature nature, const char *args)=0
```








**Parameters**:

* [EventNature](classansys-dpf-eventhandler.md#classansys-dpf-eventhandler-1aa5dbd9875e86799e977a4ef66e78d640) **nature**
* const char * **args**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::EventHandler::onEvent"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)