# Class ensight\_grpc::EnSightGRPC

<a id="classensight__grpc_1_1_en_sight_g_r_p_c"></a>

![][Python]
![][public]


Python binding for the EnSight client gRPC API.

This class provides an asynchronous interface to the EnSight core gRPC interface. It can handle remote image and event streams, providing a much simpler interface to the EnSight application

**Inherits from**:

* object

## Members

* [\_\_init\_\_](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a274897dae55c6b70616f87da1a94fe8b)
* [\_channel](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1abb7212c7e4ad9e7ef398bf5e13f15fb8)
* [\_dsg\_stub](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a44561d8bec5adfc5fe51978b5f4dd6fb)
* [\_event\_callback](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a54868c3a59ac189e258285885a48f65e)
* [\_event\_stream](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1ade63e1260b8690a73b72f2d65b561096)
* [\_event\_thread](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a98f82222b0e4dcbf23f28ed20168a94e)
* [\_events](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1ac385f5b18232bcec204b028221602427)
* [\_grpc\_allow\_network\_connections](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a650ccb4a37301581c010b370969f7e13)
* [\_grpc\_disable\_tls](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1add15027a6d954a79e88e3e853d948d33)
* [\_grpc\_uds\_pathname](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a1c231cd7267ee9759e95e1f98bc3f6e3)
* [\_grpc\_use\_tcp\_sockets](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a213e5298f4ca366c69abe7837b8ce7c8)
* [\_host](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1acfa730cfcb568cc26f079996804ebb97)
* [\_image](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a6e8208612ce6492e8702f0fcdfe32901)
* [\_image\_number](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a318cc014659eca5cb27f7ca79bda0fe9)
* [\_image\_stream](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1aefa2e7fffb9d88723e08ca8a17b56b62)
* [\_image\_thread](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a371afc6dc33f0d9fab188aa758c3cafb)
* [\_pid](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1abba6d94b9acc418d610e900aecbfd23c)
* [\_port](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a3288be89c9ab636283cb59df9fe0dc17)
* [\_prefix](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a3315104c5127852b071df26be56ed10e)
* [\_security\_token](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1aec4f4d61de4dfe799e620a005945a016)
* [\_shmem\_client](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a7cc44f4eb01c9bfe14a17d01dc8d8d36)
* [\_shmem\_filename](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1afb65fb2ac55da0dfc23022eb188656fc)
* [\_stub](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a8d6e08882d55ce3c7fbd837bedfc0d98)
* [\_sub\_service](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1aa94401a916262c38e1173cca04c9390c)
* [\_version](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a4ed120bd2b7a2a477bf0c19dc1765fce)
* [command](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a10bf46c7b7de39dc76a69a8873badbd7)
* [connect](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1abc5e7981d0dac1364fd97dce36559335)
* [dynamic\_scene\_graph\_stream](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1ab9b3a6b2ad658629f634f1edca7f9e52)
* [event\_stream\_enable](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a7dc80e5f8aa8725d5c6fa7e3f1a59d31)
* [event\_stream\_is\_enabled](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a28a17851622d8b1bec1761e7cec3f72b)
* [find\_filename](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1ac86edde0adfc5bc2b7281105e7bf2600)
* [geometry](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a9546b51614d2d88cabeaba4551218a36)
* [get\_event](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1abeb5e016abf00b41863f0d1504998302)
* [get\_image](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a5a0f0f154bd96f67e0edadcbb58a3a2e)
* [grpc\_allow\_network\_connections](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a271a955d738eb0d01bcfec20504c9752)
* [grpc\_allow\_network\_connections](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a7143c82bba4b8fb1db71bd44630df60a)
* [grpc\_disable\_tls](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1aa161e27b32b6e0d79442c7f571fed086)
* [grpc\_disable\_tls](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a964d3e1a8b9b10b59f58ee920506a281)
* [grpc\_uds\_pathname](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1ab7f404b16e2386c8d6801a3823500725)
* [grpc\_uds\_pathname](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1adbe6854dbf30530ac93502b8561ba78f)
* [grpc\_use\_tcp\_sockets](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a3b4d43754340b84235bab19120340d40)
* [grpc\_use\_tcp\_sockets](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1ac930714aa48b68257232d3af43330df8)
* [host](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a81fd18bb67b4f81fb1cab9b5d6ecee99)
* [image\_stream\_enable](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a2edadc71c7d20b1d1e9872a9f7f01ab3)
* [image\_stream\_is\_enabled](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a379795a64f880d99d2431a2630b563b6)
* [is\_connected](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1aeedd915d0824e94193e8ce5af0fd02ff)
* [metadata](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1ac0de7184d0b339cadf5d310d1f250b5e)
* [poll\_events](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a074fd513b2e8d65b652ccb2f60cb0fd6)
* [poll\_images](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a15672cc936301a8d49775439beeddd69)
* [port](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a5f70502660ffb9346fe54f087bebaa31)
* [prefix](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a5d3b64348df49096a0dbde149139f879)
* [put\_event](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1aa133dbf8b669b1093004b8b6dca799ba)
* [put\_image](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1adb5e8c7c71fa4b9fe173304469c072f0)
* [render](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a0586cf3dc58ad8dcb132ac786ff82e19)
* [security\_token](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a80081863c31f5d1e9924c110506122ab)
* [set\_security\_token](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a0cd63b73616a71f1f628fec85485f6ee)
* [shutdown](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1aa197d33f6ae11c27024ace93f875cf2b)
* [start\_server](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1ae8bda9000df12ffa158c3b99a2bb25c2)
* [start\_sub\_service](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a8bc10a94e950eaaff11eee0f4417fac8)
* [stop\_server](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a7aab74443c5c3f7833ff8934c8341167)
* [subscribe\_events](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a7b5e49fae332121d1e04d76d45a67137)
* [subscribe\_images](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1ab85ca09445ac36ea1cfbd599c8809941)
* [unsubscribe](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a0445321eb920fd2e62a055a11d378d08)

## Protected attributes

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1acfa730cfcb568cc26f079996804ebb97"></a>
### Variable \_host

![][protected]



```python
ensight_grpc.EnSightGRPC::_host =  [host](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a81fd18bb67b4f81fb1cab9b5d6ecee99)
```








**Type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a3288be89c9ab636283cb59df9fe0dc17"></a>
### Variable \_port

![][protected]



```python
ensight_grpc.EnSightGRPC::_port =  [port](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a5f70502660ffb9346fe54f087bebaa31)
```








**Type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1abba6d94b9acc418d610e900aecbfd23c"></a>
### Variable \_pid

![][protected]



```python
ensight_grpc.EnSightGRPC::_pid =  None
```








**Type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1abb7212c7e4ad9e7ef398bf5e13f15fb8"></a>
### Variable \_channel

![][protected]



```python
ensight_grpc.EnSightGRPC::_channel =  None
```








**Type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a8d6e08882d55ce3c7fbd837bedfc0d98"></a>
### Variable \_stub

![][protected]



```python
ensight_grpc.EnSightGRPC::_stub =  None
```








**Type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a44561d8bec5adfc5fe51978b5f4dd6fb"></a>
### Variable \_dsg\_stub

![][protected]



```python
ensight_grpc.EnSightGRPC::_dsg_stub =  None
```








**Type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a4ed120bd2b7a2a477bf0c19dc1765fce"></a>
### Variable \_version

![][protected]



```python
ensight_grpc.EnSightGRPC::_version =  version
```








**Type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1aec4f4d61de4dfe799e620a005945a016"></a>
### Variable \_security\_token

![][protected]



```python
ensight_grpc.EnSightGRPC::_security_token =  str(random.randint(0, 1000000))
```








**Type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a213e5298f4ca366c69abe7837b8ce7c8"></a>
### Variable \_grpc\_use\_tcp\_sockets

![][protected]



```python
ensight_grpc.EnSightGRPC::_grpc_use_tcp_sockets =  [grpc\_use\_tcp\_sockets](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a3b4d43754340b84235bab19120340d40)
```








**Type**: bool

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a650ccb4a37301581c010b370969f7e13"></a>
### Variable \_grpc\_allow\_network\_connections

![][protected]



```python
bool ensight_grpc.EnSightGRPC::_grpc_allow_network_connections =  [grpc\_allow\_network\_connections](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a271a955d738eb0d01bcfec20504c9752)
```








**Type**: bool

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1add15027a6d954a79e88e3e853d948d33"></a>
### Variable \_grpc\_disable\_tls

![][protected]



```python
ensight_grpc.EnSightGRPC::_grpc_disable_tls =  [grpc\_disable\_tls](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1aa161e27b32b6e0d79442c7f571fed086)
```








**Type**: bool

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a1c231cd7267ee9759e95e1f98bc3f6e3"></a>
### Variable \_grpc\_uds\_pathname

![][protected]



```python
ensight_grpc.EnSightGRPC::_grpc_uds_pathname =  [grpc\_uds\_pathname](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1ab7f404b16e2386c8d6801a3823500725)
```








**Type**: str

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1aefa2e7fffb9d88723e08ca8a17b56b62"></a>
### Variable \_image\_stream

![][protected]



```python
ensight_grpc.EnSightGRPC::_image_stream =  None
```








**Type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a371afc6dc33f0d9fab188aa758c3cafb"></a>
### Variable \_image\_thread

![][protected]



```python
ensight_grpc.EnSightGRPC::_image_thread =  None
```








**Type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a6e8208612ce6492e8702f0fcdfe32901"></a>
### Variable \_image

![][protected]



```python
ensight_grpc.EnSightGRPC::_image =  None
```








**Type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a318cc014659eca5cb27f7ca79bda0fe9"></a>
### Variable \_image\_number

![][protected]



```python
int ensight_grpc.EnSightGRPC::_image_number =  0
```








**Type**: int

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a7cc44f4eb01c9bfe14a17d01dc8d8d36"></a>
### Variable \_shmem\_client

![][protected]



```python
ensight_grpc.EnSightGRPC::_shmem_client =  None
```








**Type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1afb65fb2ac55da0dfc23022eb188656fc"></a>
### Variable \_shmem\_filename

![][protected]



```python
ensight_grpc.EnSightGRPC::_shmem_filename =  None
```








**Type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1ade63e1260b8690a73b72f2d65b561096"></a>
### Variable \_event\_stream

![][protected]



```python
ensight_grpc.EnSightGRPC::_event_stream =  None
```








**Type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a98f82222b0e4dcbf23f28ed20168a94e"></a>
### Variable \_event\_thread

![][protected]



```python
ensight_grpc.EnSightGRPC::_event_thread =  None
```








**Type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1ac385f5b18232bcec204b028221602427"></a>
### Variable \_events

![][protected]



```python
ensight_grpc.EnSightGRPC::_events =  list()
```








**Type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a3315104c5127852b071df26be56ed10e"></a>
### Variable \_prefix

![][protected]



```python
str ensight_grpc.EnSightGRPC::_prefix =  None
```








**Type**: str

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1aa94401a916262c38e1173cca04c9390c"></a>
### Variable \_sub\_service

![][protected]



```python
ensight_grpc.EnSightGRPC::_sub_service =  None
```








**Type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a54868c3a59ac189e258285885a48f65e"></a>
### Variable \_event\_callback

![][protected]



```python
ensight_grpc.EnSightGRPC::_event_callback =  None
```








**Type**: 

## Public functions

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a274897dae55c6b70616f87da1a94fe8b"></a>
### Function \_\_init\_\_

![][public]


```python
ensight_grpc.EnSightGRPC.__init__(self, port=12345, host='127.0.0.1', version='', bool grpc_use_tcp_sockets=False, bool grpc_allow_network_connections=False, bool grpc_disable_tls=False, str grpc_uds_pathname=None)
```


create an instance of the EnSight gRPC interface wrapper

The default is to make a connection to an EnSight gRPC server on port 12345 on the loopback host. If requested to launch the server, it will be the current version.






**Parameters**:

* **[port](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a5f70502660ffb9346fe54f087bebaa31)**: The port number of the EnSight gRPC server
* **[host](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a81fd18bb67b4f81fb1cab9b5d6ecee99)**: The hostname of the EnSight gRPC server
* **version**: A specific EnSight version number to run (e.g. '222' for 2022R2)
* **[grpc\_use\_tcp\_sockets](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a3b4d43754340b84235bab19120340d40)**: bool, optional If using gRPC, and if True, then allow TCP Socket based connections instead of only local connections.
* **[grpc\_allow\_network\_connections](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a271a955d738eb0d01bcfec20504c9752)**: bool, optional If using gRPC and using TCP Socket based connections, listen on all networks.
* **[grpc\_disable\_tls](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1aa161e27b32b6e0d79442c7f571fed086)**: bool, optional If using gRPC and using TCP Socket based connections, disable TLS.
* **[grpc\_uds\_pathname](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1ab7f404b16e2386c8d6801a3823500725)**: str, optional If using gRPC and using Unix Domain Socket based connections, explicitly set the pathname to the shared UDS file instead of using the default.

WARNING: Overriding the default values for these options: grpc_use_tcp_sockets, grpc_allow_network_connections, and grpc_disable_tls can possibly permit control of this computer and any data which resides on it. Modification of this configuration is not recommended. Please see the documentation for your installed product for additional information.



**Parameters**:

* selfself
* port[port](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a5f70502660ffb9346fe54f087bebaa31) = 12345 
* host[host](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a81fd18bb67b4f81fb1cab9b5d6ecee99) = '127.0.0.1' 
* versionversion = '' 
* bool **grpc_use_tcp_sockets** = False 
* bool **grpc_allow_network_connections** = False 
* bool **grpc_disable_tls** = False 
* str **grpc_uds_pathname** = None 

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a81fd18bb67b4f81fb1cab9b5d6ecee99"></a>
### Function host

![][public]


```python
ensight_grpc.EnSightGRPC.host(self)
```


get the hostname for this connection

Returns the current connection hostname.



**Parameters**:

* selfself

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a5f70502660ffb9346fe54f087bebaa31"></a>
### Function port

![][public]


```python
ensight_grpc.EnSightGRPC.port(self)
```


get the port number for this connection

Returns the current connection port number.



**Parameters**:

* selfself

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a0cd63b73616a71f1f628fec85485f6ee"></a>
### Function set\_security\_token

![][public]


```python
ensight_grpc.EnSightGRPC.set_security_token(self, n)
```


set the security token for the gRPC connection.

EnSight supports a security token in either numeric (-security {int}) or string (ENSIGHT_SECURITY_TOKEN environmental variable) form. If EnSight is using a security token, all gRPC calls must include this token. This call sets the token for all rGPC calls made by this class. Note: for this module, the security token must be a in bytes() format. For example: str(1000).encode("utf-8") 
**Parameters**:

* **n**: an string to be used as the security token



**Parameters**:

* selfself
* nn

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a80081863c31f5d1e9924c110506122ab"></a>
### Function security\_token

![][public]


```python
ensight_grpc.EnSightGRPC.security_token(self)
```


return the security token for the gRPC connection.

Returns the current connection security token



**Parameters**:

* selfself

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a3b4d43754340b84235bab19120340d40"></a>
### Function grpc\_use\_tcp\_sockets

![][public]


```python
 bool ensight_grpc.EnSightGRPC.grpc_use_tcp_sockets(self)
```




```
Get whether to use Unix Domain Sockets or TCP Sockets for gRPC
```



**Parameters**:

* selfself

**Return type**: bool

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1ac930714aa48b68257232d3af43330df8"></a>
### Function grpc\_use\_tcp\_sockets

![][public]


```python
 None ensight_grpc.EnSightGRPC.grpc_use_tcp_sockets(self, bool use_sockets)
```




```
Set whether to use Unix Domain Sockets or TCP Sockets for gRPC
```



**Parameters**:

* selfself
* bool **use_sockets**

**Return type**: None

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a271a955d738eb0d01bcfec20504c9752"></a>
### Function grpc\_allow\_network\_connections

![][public]


```python
 bool ensight_grpc.EnSightGRPC.grpc_allow_network_connections(self)
```




```
Get whether to allow listening on all networks if using TCP Sockets for gRPC
```



**Parameters**:

* selfself

**Return type**: bool

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a7143c82bba4b8fb1db71bd44630df60a"></a>
### Function grpc\_allow\_network\_connections

![][public]


```python
 None ensight_grpc.EnSightGRPC.grpc_allow_network_connections(self, bool allow)
```




```
Set whether to allow listening on all networks if using TCP Sockets for gRPC
```



**Parameters**:

* selfself
* bool **allow**

**Return type**: None

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1aa161e27b32b6e0d79442c7f571fed086"></a>
### Function grpc\_disable\_tls

![][public]


```python
 bool ensight_grpc.EnSightGRPC.grpc_disable_tls(self)
```




```
Get whether to use TLS for TCP Sockets for gRPC
```



**Parameters**:

* selfself

**Return type**: bool

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a964d3e1a8b9b10b59f58ee920506a281"></a>
### Function grpc\_disable\_tls

![][public]


```python
 None ensight_grpc.EnSightGRPC.grpc_disable_tls(self, bool disable_tls)
```




```
Set whether to use TLS for TCP Sockets for gRPC
```



**Parameters**:

* selfself
* bool **disable_tls**

**Return type**: None

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1ab7f404b16e2386c8d6801a3823500725"></a>
### Function grpc\_uds\_pathname

![][public]


```python
 str ensight_grpc.EnSightGRPC.grpc_uds_pathname(self)
```




```
Get the pathname for the UDS file if not using the default for gRPC
```



**Parameters**:

* selfself

**Return type**: str

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1adbe6854dbf30530ac93502b8561ba78f"></a>
### Function grpc\_uds\_pathname

![][public]


```python
 None ensight_grpc.EnSightGRPC.grpc_uds_pathname(self, str uds_pathname)
```




```
Set the pathname for the UDS file if not using the default for gRPC
```



**Parameters**:

* selfself
* str **uds_pathname**

**Return type**: None

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1aa197d33f6ae11c27024ace93f875cf2b"></a>
### Function shutdown

![][public]


```python
ensight_grpc.EnSightGRPC.shutdown(self)
```


shut down all gRPC connections

If this class launched the EnSight client instance, it will send the gRPC exit() call and then shut down all connections.



**Parameters**:

* selfself

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1ae8bda9000df12ffa158c3b99a2bb25c2"></a>
### Function start\_server

![][public]


```python
ensight_grpc.EnSightGRPC.start_server(self)
```


Start an EnSight gRPC server instance.

If the host application wishes to launch an EnSight instance, [start\_server()](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1ae8bda9000df12ffa158c3b99a2bb25c2) will launch a batch mode EnSight application with the security token and a gRPC server started on the port passed in the constructor.



**Parameters**:

* selfself

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a7aab74443c5c3f7833ff8934c8341167"></a>
### Function stop\_server

![][public]


```python
ensight_grpc.EnSightGRPC.stop_server(self)
```


shut down any gPRC connection made by this class

First, if this class launched the EnSight instance, via [start\_server()](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1ae8bda9000df12ffa158c3b99a2bb25c2), the exit() gRPC command will be sent. Second, the local gRPC connection is dropped.



**Parameters**:

* selfself

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1aeedd915d0824e94193e8ce5af0fd02ff"></a>
### Function is\_connected

![][public]


```python
ensight_grpc.EnSightGRPC.is_connected(self)
```


check if a gRPC connection has been established

Returns True if a previous [connect()](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1abc5e7981d0dac1364fd97dce36559335) call made a valid gRPC connection.



**Parameters**:

* selfself

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1abc5e7981d0dac1364fd97dce36559335"></a>
### Function connect

![][public]


```python
ensight_grpc.EnSightGRPC.connect(self, timeout=15.0, options=None)
```


establish a connection to an EnSight gRPC server

Attempt to connect to an EnSight gRPC server using the host and port established by the constructor. Note on failure, this function just returns, but [is\_connected()](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1aeedd915d0824e94193e8ce5af0fd02ff) will return False. 
**Parameters**:

* **timeout**: how long to wait for the connection to timeout.



**Parameters**:

* selfself
* timeouttimeout = 15.0 
* optionsoptions = None 

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a0586cf3dc58ad8dcb132ac786ff82e19"></a>
### Function render

![][public]


```python
ensight_grpc.EnSightGRPC.render(self, width=640, height=480, aa=1, raw=False, highlighting=False)
```


render the current EnSight screen and return the image

Render the current scene at some resolution independent of the current EnSight scene view. 
**Parameters**:

* **width**: width in pixels
* **height**: height in pixels
* **aa**: number of anti-aliasing passes
* **raw**: If True, the returned array will be width*height*3 bytes in size. If False, it will be a byte array in PNG format.
* **highlighting**: If True, the current dynamic selection/highlighting will be in the image



**Parameters**:

* selfself
* widthwidth = 640 
* heightheight = 480 
* aaaa = 1 
* rawraw = False 
* highlightinghighlighting = False 

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a9546b51614d2d88cabeaba4551218a36"></a>
### Function geometry

![][public]


```python
ensight_grpc.EnSightGRPC.geometry(self)
```


return the current scene geometry in glTF format

Package up the geometry currently being viewed in the EnSight session as a glTF stream. Return this stream as an array of byte. Note: no interrmediate files are utilized.



**Parameters**:

* selfself

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a10bf46c7b7de39dc76a69a8873badbd7"></a>
### Function command

![][public]


```python
ensight_grpc.EnSightGRPC.command(self, command_string, do_eval=True, json=False, raw_eval=False)
```


send a Python command string to be executed in EnSight

The string will be run or evaluated in the EnSight Python interpreter via the EnSightService::RunPython() gRPC all. If an exception or other error occurs, this function will throw a RuntimeError. If do_eval is False, the return value will be None, otherwise it will be the result of eval() of the string. 
**Parameters**:

* **command_string**: the string to be executed
* **do_eval**: if True, the string will be run via "eval()" and the results returned
* **json**: If true, the value returned with do_eval() will be encoded via json, otherwise it will be a Python object



**Parameters**:

* selfself
* command_stringcommand_string
* do_evaldo_eval = True 
* jsonjson = False 
* raw_evalraw_eval = False 

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a2edadc71c7d20b1d1e9872a9f7f01ab3"></a>
### Function image\_stream\_enable

![][public]


```python
ensight_grpc.EnSightGRPC.image_stream_enable(self, flip_vertical=False)
```


enable a simple gRPC-based image stream from EnSight

This method makes a EnSightService::GetImageStream() gRPC call into EnSight, returning an ensightservice::ImageReply stream. The method creates a thread to hold this stream open and read new image frames from it. The thread places the read images in this object. An external application can retrieve the most recent one using [get\_image()](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a5a0f0f154bd96f67e0edadcbb58a3a2e). 
**Parameters**:

* **flip_vertical**: If True, the image will be flipped over the X axis before being sent from EnSight.



**Parameters**:

* selfself
* flip_verticalflip_vertical = False 

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a5a0f0f154bd96f67e0edadcbb58a3a2e"></a>
### Function get\_image

![][public]


```python
ensight_grpc.EnSightGRPC.get_image(self)
```


retrieve the current EnSight image

When any of the image streaming systems is enabled, Python threads will receive the most recent image and store them in this instance. The frame stored in this instance can be accessed by calling this method






**Returns**:

the image dict(pixels=bytearray, width=w, height=h) and the image frame number



**Parameters**:

* selfself

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a379795a64f880d99d2431a2630b563b6"></a>
### Function image\_stream\_is\_enabled

![][public]


```python
ensight_grpc.EnSightGRPC.image_stream_is_enabled(self)
```


check to see if the image stream is enabled

If an image stream has been successfully established via [image\_stream\_enable()](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a2edadc71c7d20b1d1e9872a9f7f01ab3), then this function returns True 
**Returns**:

True if a ensightservice::ImageReply steam is active



**Parameters**:

* selfself

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a5d3b64348df49096a0dbde149139f879"></a>
### Function prefix

![][public]


```python
ensight_grpc.EnSightGRPC.prefix(self)
```


return the unique prefix for this instance

Many of the EnSight gRPC APIs require a unique prefix so that EnSight can handle multiple, simultaneous remote connections. This method will generate a GUID-based prefix. 
**Returns**:

A unique prefix string of the form: grpc://{uuid}/



**Parameters**:

* selfself

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a7dc80e5f8aa8725d5c6fa7e3f1a59d31"></a>
### Function event\_stream\_enable

![][public]


```python
ensight_grpc.EnSightGRPC.event_stream_enable(self, callback=None, prefix=None)
```


enable a simple gRPC-based event stream from EnSight

This method makes a EnSightService::GetEventStream() gRPC call into EnSight, returning an ensightservice::EventReply stream. The method creates a thread to hold this stream open and read new events from it. The thread adds the event strings to a list of events stored on this instance. If callback is not None, the object will be called with the event string, otherwise they can be retrieved using [get\_event()](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1abeb5e016abf00b41863f0d1504998302).



**Parameters**:

* selfself
* callbackcallback = None 
* prefix[prefix](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a5d3b64348df49096a0dbde149139f879) = None 

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1ab9b3a6b2ad658629f634f1edca7f9e52"></a>
### Function dynamic\_scene\_graph\_stream

![][public]


```python
ensight_grpc.EnSightGRPC.dynamic_scene_graph_stream(self, client_cmds)
```


open up a dynamic scene graph stream

Make a DynamicSceneGraphService::GetSceneStream() rpc call and return a ensightservice::SceneUpdateCommand stream instance. 
**Parameters**:

* **client_cmds**: an iterator that produces ensightservice::SceneClientCommand objects


**Returns**:

a ensightservice::SceneUpdateCommand stream instance



**Parameters**:

* selfself
* client_cmdsclient_cmds

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a28a17851622d8b1bec1761e7cec3f72b"></a>
### Function event\_stream\_is\_enabled

![][public]


```python
ensight_grpc.EnSightGRPC.event_stream_is_enabled(self)
```


check to see if the event stream is enabled

If an event stream has been successfully established via [event\_stream\_enable()](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a7dc80e5f8aa8725d5c6fa7e3f1a59d31), then this function returns True 
**Returns**:

True if a ensightservice::EventReply steam is active



**Parameters**:

* selfself

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1abeb5e016abf00b41863f0d1504998302"></a>
### Function get\_event

![][public]


```python
ensight_grpc.EnSightGRPC.get_event(self)
```


retrieve and remove the oldest ensightservice::EventReply string

When any of the event streaming systems is enabled, Python threads will receive the event records and store them in this instance in an ordered fashion. This method retrieves the oldest ensightservice::EventReply string in the queue.






**Returns**:

the even string or None if no events are available



**Parameters**:

* selfself

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a7b5e49fae332121d1e04d76d45a67137"></a>
### Function subscribe\_events

![][public]


```python
ensight_grpc.EnSightGRPC.subscribe_events(self)
```


subscribe to an event stream using a locally launched gRPC server

This methond makes a EnSightService::SubscribeEvents() gRPC call, causing EnSight to make a reverse gRPC connection over with gRPC calls with the various events will be made.



**Parameters**:

* selfself

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1ab85ca09445ac36ea1cfbd599c8809941"></a>
### Function subscribe\_images

![][public]


```python
ensight_grpc.EnSightGRPC.subscribe_images(self, flip_vertical=False, use_shmem=True)
```


subscribe to an image stream

This methond makes a EnSightService::SubscribeImages() gRPC call. If use_shmem is False, the transport system will be made over gRPC. It causes EnSight to make a reverse gRPC connection over with gRPC calls with the various images will be made. If use_shmem is True (the default), the [Shared Memory Image Transport](group__shmem.md#group__shmem) will be used. 
**Parameters**:

* **flip_vertical**: If True, the image pixels will be flipped over the X axis
* **use_shmem**: If True, use the shared memory transport, otherwise use reverse gRPC



**Parameters**:

* selfself
* flip_verticalflip_vertical = False 
* use_shmemuse_shmem = True 

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a0445321eb920fd2e62a055a11d378d08"></a>
### Function unsubscribe

![][public]


```python
ensight_grpc.EnSightGRPC.unsubscribe(self)
```


unsubscribe from any image or event streams that have been subscribed to

This method makes a EnSightService::Unsubscribe() gRPC call. It will cancel any [subscribe\_events()](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a7b5e49fae332121d1e04d76d45a67137) or [subscribe\_images()](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1ab85ca09445ac36ea1cfbd599c8809941) calls.



**Parameters**:

* selfself

**Return type**: 

## Private functions

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1ac0de7184d0b339cadf5d310d1f250b5e"></a>
### Function metadata

![][private]


```python
ensight_grpc.EnSightGRPC.metadata(self)
```


compute internal gRPC stream metadata





**Parameters**:

* selfself

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1adb5e8c7c71fa4b9fe173304469c072f0"></a>
### Function put\_image

![][private]


```python
ensight_grpc.EnSightGRPC.put_image(self, the_image)
```


Store an image on this instance.

This method is used by threads to store the latest image they receive so it can be accessed by [get\_image()](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a5a0f0f154bd96f67e0edadcbb58a3a2e)



**Parameters**:

* selfself
* the_imagethe_image

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a15672cc936301a8d49775439beeddd69"></a>
### Function poll\_images

![][private]


```python
ensight_grpc.EnSightGRPC.poll_images(self)
```


Internal method to handle image streams.

This method is called by a Python thread to read imagery via the shared memory transport system or the ensightservice::ImageReply stream.



**Parameters**:

* selfself

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1aa133dbf8b669b1093004b8b6dca799ba"></a>
### Function put\_event

![][private]


```python
ensight_grpc.EnSightGRPC.put_event(self, evt)
```


Add an event record to the event queue on this instance.

This method is used by threads to make the events they receive available to calling applications via [get\_event()](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1abeb5e016abf00b41863f0d1504998302).



**Parameters**:

* selfself
* evtevt

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a074fd513b2e8d65b652ccb2f60cb0fd6"></a>
### Function poll\_events

![][private]


```python
ensight_grpc.EnSightGRPC.poll_events(self)
```


Internal method to handle event streams.

This method is called by a Python thread to read events via the established ensightservice::EventReply stream.



**Parameters**:

* selfself

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1a8bc10a94e950eaaff11eee0f4417fac8"></a>
### Function start\_sub\_service

![][private]


```python
ensight_grpc.EnSightGRPC.start_sub_service(self)
```


Internal method to start a gRPC client service.

When the client calls one [subscribe\_events()](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1a7b5e49fae332121d1e04d76d45a67137) or [subscribe\_images()](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c_1ab85ca09445ac36ea1cfbd599c8809941) with the connection set to GRPC, the interface requires the client to start a gRPC server that EnSight will call back to with event/image messages. This method starts such a gRPC server.



**Parameters**:

* selfself

**Return type**: 

<a id="classensight__grpc_1_1_en_sight_g_r_p_c_1ac86edde0adfc5bc2b7281105e7bf2600"></a>
### Function find\_filename

![][private]


```python
ensight_grpc.EnSightGRPC.find_filename(cls, size=1024 *1024 *25)
```


Internal method to create a file on disk to support shared memory transport.

A file, 25MB in size, will be crated using the pid of the current process to generate the filename. It will be located in the current working directory.



**Parameters**:

* clscls
* sizesize = 1024 *1024 *25 

**Return type**: 

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C]: https://img.shields.io/badge/language-C-blue (C)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)