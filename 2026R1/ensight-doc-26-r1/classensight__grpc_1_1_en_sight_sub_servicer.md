# Class ensight\_grpc::EnSightSubServicer

<a id="classensight__grpc_1_1_en_sight_sub_servicer"></a>

![][Python]
![][private]


Internal class handling reverse subscription connections The EnSight gRPC interface has a mechanism for reversing the gRPC streams called Subscriptions.

Image and event streams can be subscribed to. In this mode, the client application starts a gRPC server that implements the EnSightSubscription protocol. EnSight will connect back to the client using this protocol and send images/events back to the client as regular (non-stream) rpc calls. This can be useful in situations where it is difficult to keep a long-running stream alive.<br/>
 The EnSightSubServicer class implements a gRPC server for the client application.

**Inherits from**:

* ensight\_pb2\_grpc.EnSightSubscriptionServicer

## Members

* [\_\_init\_\_](classensight__grpc_1_1_en_sight_sub_servicer.md#classensight__grpc_1_1_en_sight_sub_servicer_1a177f3535ac7796aa9e68b420f2d98edd)
* [\_parent](classensight__grpc_1_1_en_sight_sub_servicer.md#classensight__grpc_1_1_en_sight_sub_servicer_1aeb71dc790d73ce0f57c88ff802e0df29)
* [\_server](classensight__grpc_1_1_en_sight_sub_servicer.md#classensight__grpc_1_1_en_sight_sub_servicer_1ae914a8902fccdfaea753e1c7a38fdaf5)
* [\_uri](classensight__grpc_1_1_en_sight_sub_servicer.md#classensight__grpc_1_1_en_sight_sub_servicer_1a7f1a827c246038660aa139fd1cb177f6)
* [PublishEvent](classensight__grpc_1_1_en_sight_sub_servicer.md#classensight__grpc_1_1_en_sight_sub_servicer_1aaa53400ed72015447987a4f3c1cafcc3)
* [PublishImage](classensight__grpc_1_1_en_sight_sub_servicer.md#classensight__grpc_1_1_en_sight_sub_servicer_1ac8753c17af1b0f527bc82f84f69b1f15)
* [start](classensight__grpc_1_1_en_sight_sub_servicer.md#classensight__grpc_1_1_en_sight_sub_servicer_1a27f021642df124126690f49b50dac49a)

## Protected attributes

<a id="classensight__grpc_1_1_en_sight_sub_servicer_1ae914a8902fccdfaea753e1c7a38fdaf5"></a>
### Variable \_server

![][protected]



```python
ensight_grpc.EnSightSubServicer::_server =  None
```








**Type**: 

<a id="classensight__grpc_1_1_en_sight_sub_servicer_1a7f1a827c246038660aa139fd1cb177f6"></a>
### Variable \_uri

![][protected]



```python
str ensight_grpc.EnSightSubServicer::_uri =  ""
```








**Type**: str

<a id="classensight__grpc_1_1_en_sight_sub_servicer_1aeb71dc790d73ce0f57c88ff802e0df29"></a>
### Variable \_parent

![][protected]



```python
ensight_grpc.EnSightSubServicer::_parent =  parent
```








**Type**: 

## Public functions

<a id="classensight__grpc_1_1_en_sight_sub_servicer_1a177f3535ac7796aa9e68b420f2d98edd"></a>
### Function \_\_init\_\_

![][public]


```python
ensight_grpc.EnSightSubServicer.__init__(self, parent=None)
```








**Parameters**:

* selfself
* parentparent = None 

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_sub_servicer_1aaa53400ed72015447987a4f3c1cafcc3"></a>
### Function PublishEvent

![][public]


```python
ensight_grpc.EnSightSubServicer.PublishEvent(self, request, context)
```








**Parameters**:

* selfself
* requestrequest
* contextcontext

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_sub_servicer_1ac8753c17af1b0f527bc82f84f69b1f15"></a>
### Function PublishImage

![][public]


```python
ensight_grpc.EnSightSubServicer.PublishImage(self, request_iterator, context)
```








**Parameters**:

* selfself
* request_iteratorrequest_iterator
* contextcontext

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_sub_servicer_1a27f021642df124126690f49b50dac49a"></a>
### Function start

![][public]


```python
ensight_grpc.EnSightSubServicer.start(self)
```








**Parameters**:

* selfself

**Return type**: 

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)