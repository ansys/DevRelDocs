<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter"></a>
# Class simulation\_framework::avx\_sensor\_cosim::AvxVssApiAdapter

![][C++]
![][public]

#include: <[avx_vss_api_adapter.h](avx__vss__api__adapter_8h.md#avx__vss__api__adapter_8h)>

AVX VSS API Adapter.

This class is used to interact with AVX VSS API. Provides a simple interface, with status check and configurable timeout mechanism, to load, initialize, update, stop, unload, and kill one targeted AVX Sensor service.

## Members

* [api\_variant\_](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a4b590db627a6c93f3254f8cacb81de6f)
* [AvxVssApiAdapter](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a59b09da2ec12532a4342551366aab665)
* [context\_sensor\_data\_notifier\_](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a270bfeac71fd61b77f40db25a3ae61bd)
* [DeserializeSensorDataDescriptions](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a353382be749e0909337e395af828bc61)
* [GetLatestSensorDataDescriptions](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1aeb52b2acbff9db3edcd4a33d8ba9211c)
* [GetSensorIdentifiers](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1ac5a21c59e7e440e46a0bbbf88ece7a54)
* [grpc\_channel\_](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1adf655bcef358c1e09c9a2ae21bce7475)
* [grpc\_endpoint\_](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1ad55c8e53cedcf0b228730fb167e54c03)
* [Initialize](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a91a12968c3e9a3f1e7601124347dc424)
* [IsAllSensorDataDescriptionsAvailable](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1ad34f7a9ef15162b7cc5ed2d4e09db83f)
* [IsRequestSuccessful](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1af0c66b6549fea0cbc7a6f46c4e04ac07)
* [Kill](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1aef5736c8514738119b66dfdb70015314)
* [Load](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a65b1764c35521d1454692fd3459c6f37)
* [Load](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1ab9ba91ec020160a02458f373f6847d09)
* [ReadSensorDataDescription](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a0620b9bd54dd8ce55579536b17133dc9)
* [sensor\_data\_description\_reader\_](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a36eecdd0ff5acfa3db4755c72c659f05)
* [sensor\_data\_notifier\_stub\_](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a2254896299de131e37ab707d627129a4)
* [sensor\_identifiers\_](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a0b882d5493c67a831fbc99cd514b7dcb)
* [SensorDataDescriptions](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1af029961b3f5683aa1821b1e56bc310e1)
* [SerializeSensorDataDescriptions](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a70012a5e06c4ba2f1292029f664e3fb8)
* [SetSensorIdentifiers](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1af1a11124e5274c64568d294ee629b68f)
* [Stop](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a8bec37d202019eb3dc86ccbefa0b75a1)
* [Unload](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1af3fdcb93ae044c647df4e63ea9156571)
* [Update](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1aeaf57c2d395c56a8141c4e3daf37b826)
* [Update](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a444e4091516e63dcab3e627cbfe79968)
* [vss\_simulation\_control\_osi\_](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a414d61218965bf1b20afe2a975687123)
* [vss\_simulation\_control\_v1\_](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a4a4571d8a7032b22498b8f784253fdc6)
* [WaitForConnection](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a607bd314f3c7972927a14ec1b1952960)
* [~AvxVssApiAdapter](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a0c49dcc2c769f8859994306149e0b92e)

## Public types

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1af029961b3f5683aa1821b1e56bc310e1"></a>
### Typedef SensorDataDescriptions

![][public]

#include: <[avx_vss_api_adapter.h](avx__vss__api__adapter_8h.md#avx__vss__api__adapter_8h)>


```cpp
using simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::SensorDataDescriptions = 
        std::vector<ansys::api::avxcelerate::sensors::v1::data_access::SensorDataDescription>
```








**Return type**: std::vector< ansys::api::avxcelerate::sensors::v1::data_access::SensorDataDescription >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::SensorDataDescriptions"}]}`
-->

## Private attributes

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a414d61218965bf1b20afe2a975687123"></a>
### Variable vss\_simulation\_control\_osi\_

![][private]

#include: <[avx_vss_api_adapter.h](avx__vss__api__adapter_8h.md#avx__vss__api__adapter_8h)>


```cpp
std::unique_ptr<ansys::api::avxcelerate::sensors::osi::v1::simulation::Simulation::Stub> simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::vss_simulation_control_osi_
```


The grpc stub for the AVX Sensor service.





**Type**: std::unique_ptr< ansys::api::avxcelerate::sensors::osi::v1::simulation::Simulation::Stub >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::vss_simulation_control_osi_"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a4a4571d8a7032b22498b8f784253fdc6"></a>
### Variable vss\_simulation\_control\_v1\_

![][private]

#include: <[avx_vss_api_adapter.h](avx__vss__api__adapter_8h.md#avx__vss__api__adapter_8h)>


```cpp
std::unique_ptr<ansys::api::avxcelerate::sensors::v1::simulation::Simulation::Stub> simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::vss_simulation_control_v1_
```








**Type**: std::unique_ptr< ansys::api::avxcelerate::sensors::v1::simulation::Simulation::Stub >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::vss_simulation_control_v1_"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a2254896299de131e37ab707d627129a4"></a>
### Variable sensor\_data\_notifier\_stub\_

![][private]

#include: <[avx_vss_api_adapter.h](avx__vss__api__adapter_8h.md#avx__vss__api__adapter_8h)>


```cpp
std::unique_ptr<ansys::api::avxcelerate::sensors::v1::data_access::SensorDataNotifier::Stub> simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::sensor_data_notifier_stub_
```


The grpc stub for the AVX SensorData Notifier service.





**Type**: std::unique_ptr< ansys::api::avxcelerate::sensors::v1::data_access::SensorDataNotifier::Stub >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::sensor_data_notifier_stub_"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a36eecdd0ff5acfa3db4755c72c659f05"></a>
### Variable sensor\_data\_description\_reader\_

![][private]

#include: <[avx_vss_api_adapter.h](avx__vss__api__adapter_8h.md#avx__vss__api__adapter_8h)>


```cpp
std::unique_ptr<grpc::ClientReader<ansys::api::avxcelerate::sensors::v1::data_access::SensorDataDescription> > simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::sensor_data_description_reader_
```


The grpc reader for the AVX SensorData Description.





**Type**: std::unique_ptr< grpc::ClientReader< ansys::api::avxcelerate::sensors::v1::data_access::SensorDataDescription > >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::sensor_data_description_reader_"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1adf655bcef358c1e09c9a2ae21bce7475"></a>
### Variable grpc\_channel\_

![][private]

#include: <[avx_vss_api_adapter.h](avx__vss__api__adapter_8h.md#avx__vss__api__adapter_8h)>


```cpp
std::shared_ptr<grpc::Channel> simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::grpc_channel_
```


The grpc channel to the AVX Sensor service.





**Type**: std::shared_ptr< grpc::Channel >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::grpc_channel_"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1ad55c8e53cedcf0b228730fb167e54c03"></a>
### Variable grpc\_endpoint\_

![][private]

#include: <[avx_vss_api_adapter.h](avx__vss__api__adapter_8h.md#avx__vss__api__adapter_8h)>


```cpp
std::string simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::grpc_endpoint_
```


The grpc endpoint of the AVX Sensor service.





**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::grpc_endpoint_"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a270bfeac71fd61b77f40db25a3ae61bd"></a>
### Variable context\_sensor\_data\_notifier\_

![][private]

#include: <[avx_vss_api_adapter.h](avx__vss__api__adapter_8h.md#avx__vss__api__adapter_8h)>


```cpp
grpc::ClientContext simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::context_sensor_data_notifier_
```


The grpc client context for sensor data notifier. This context must be kept alive during the lifetime of the sensor data notifier reader.





**Type**: grpc::ClientContext

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::context_sensor_data_notifier_"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a0b882d5493c67a831fbc99cd514b7dcb"></a>
### Variable sensor\_identifiers\_

![][private]

#include: <[avx_vss_api_adapter.h](avx__vss__api__adapter_8h.md#avx__vss__api__adapter_8h)>


```cpp
std::vector<std::string> simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::sensor_identifiers_
```


The sensor identifiers set by VSS configuration.





**Type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::sensor_identifiers_"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a4b590db627a6c93f3254f8cacb81de6f"></a>
### Variable api\_variant\_

![][private]

#include: <[avx_vss_api_adapter.h](avx__vss__api__adapter_8h.md#avx__vss__api__adapter_8h)>


```cpp
ApiVariant simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::api_variant_
```


Selected API variant.





**Type**: ApiVariant

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::api_variant_"}]}`
-->

## Public functions

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a59b09da2ec12532a4342551366aab665"></a>
### Function AvxVssApiAdapter

![][public]


```cpp
simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::AvxVssApiAdapter(const std::string &grpc_endpoint, ApiVariant api_variant=ApiVariant::kUpdateByWorldUpdate, const TransportModeConfig &transport_config=TransportModeConfig{})
```


Constructor.

**Parameters**:

* **grpc_endpoint**: The grpc endpoint of the AVX Sensor service (host:port for TCP, ignored for UDS)
* **api_variant**: Select which VSS API to use (default: sensors/v1)
* **transport_config**: Transport mode configuration (default: Insecure mode for backwards compatibility)



**Parameters**:

* const std::string & **grpc_endpoint**
* ApiVariant **api_variant** = ApiVariant::kUpdateByWorldUpdate 
* const TransportModeConfig & **transport_config** = TransportModeConfig{} 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::AvxVssApiAdapter"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a0c49dcc2c769f8859994306149e0b92e"></a>
### Function ~AvxVssApiAdapter

![][public]


```cpp
simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::~AvxVssApiAdapter()
```


Destructor.





**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::~AvxVssApiAdapter"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a65b1764c35521d1454692fd3459c6f37"></a>
### Function Load

![][public]


```cpp
bool simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::Load(const ansys::api::avxcelerate::sensors::osi::v1::simulation::Configuration &configuration, const std::chrono::seconds &timeout_in_seconds=std::chrono::seconds(30))
```


Load the simulation configuration for OSI API.

Loads AVX using Configuration containing a track, a list of assets, some simulation parameters, a sensor configuration, a lighting system (optional), some deployment parameters, and some simulation control parameters. 
**Parameters**:

* **configuration**: The VSS simulation configuration
* **timeout_in_seconds**: The timeout in seconds


**Returns**:

True if the load request was successful, false otherwise



**Parameters**:

* const ansys::api::avxcelerate::sensors::osi::v1::simulation::Configuration & **configuration**
* const std::chrono::seconds & **timeout_in_seconds** = std::chrono::seconds(30) 

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::Load"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1ab9ba91ec020160a02458f373f6847d09"></a>
### Function Load

![][public]


```cpp
bool simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::Load(const ansys::api::avxcelerate::sensors::v1::simulation::Configuration &configuration, const std::chrono::seconds &timeout_in_seconds=std::chrono::seconds(30))
```


Load the simulation configuration for Sensors v1 API.

Loads AVX using Configuration containing a track, a list of assets, some simulation parameters, a sensor configuration, a lighting system (optional), some deployment parameters, and some simulation control parameters. 
**Parameters**:

* **configuration**: The VSS simulation configuration
* **timeout_in_seconds**: The timeout in seconds


**Returns**:

True if the load request was successful, false otherwise



**Parameters**:

* const ansys::api::avxcelerate::sensors::v1::simulation::Configuration & **configuration**
* const std::chrono::seconds & **timeout_in_seconds** = std::chrono::seconds(30) 

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::Load"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1aeaf57c2d395c56a8141c4e3daf37b826"></a>
### Function Update

![][public]


```cpp
bool simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::Update(const osi3::GroundTruth &ground_truth, const std::chrono::seconds &timeout_in_seconds=std::chrono::seconds(5))
```


Update the simulation.

**Parameters**:

* **ground_truth**: The OSI GroundTruth
* **timeout_in_seconds**: The timeout in seconds


**Returns**:

True if the update request was successful, false otherwise



**Parameters**:

* const osi3::GroundTruth & **ground_truth**
* const std::chrono::seconds & **timeout_in_seconds** = std::chrono::seconds(5) 

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::Update"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a444e4091516e63dcab3e627cbfe79968"></a>
### Function Update

![][public]


```cpp
bool simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::Update(const ansys::api::avxcelerate::sensors::v1::simulation::WorldUpdate &world_update, const std::chrono::seconds &timeout_in_seconds=std::chrono::seconds(5))
```


Update overload for sensors/v1 API.

**Parameters**:

* **world_update**: The Sensors v1 WorldUpdate
* **timeout_in_seconds**: The timeout in seconds


**Returns**:

True if the update request was successful, false otherwise



**Parameters**:

* const ansys::api::avxcelerate::sensors::v1::simulation::WorldUpdate & **world_update**
* const std::chrono::seconds & **timeout_in_seconds** = std::chrono::seconds(5) 

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::Update"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a91a12968c3e9a3f1e7601124347dc424"></a>
### Function Initialize

![][public]


```cpp
bool simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::Initialize(const ansys::api::avxcelerate::sensors::v1::simulation::WorldUpdate &world_update, const std::chrono::seconds &timeout_in_seconds=std::chrono::seconds(5))
```


Initialize overload for sensors/v1 API.

**Parameters**:

* **world_update**: The Sensors v1 WorldUpdate (initial state)
* **timeout_in_seconds**: The timeout in seconds


**Returns**:

True if the initialize request was successful, false otherwise



**Parameters**:

* const ansys::api::avxcelerate::sensors::v1::simulation::WorldUpdate & **world_update**
* const std::chrono::seconds & **timeout_in_seconds** = std::chrono::seconds(5) 

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::Initialize"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a8bec37d202019eb3dc86ccbefa0b75a1"></a>
### Function Stop

![][public]


```cpp
bool simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::Stop(const std::chrono::seconds &timeout_in_seconds=std::chrono::seconds(5))
```


Stop (Reset) the simulation.

Applies a world model update to AVX. 
**Parameters**:

* **timeout_in_seconds**: The timeout in seconds


**Returns**:

True if the stop request was successful, false otherwise



**Parameters**:

* const std::chrono::seconds & **timeout_in_seconds** = std::chrono::seconds(5) 

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::Stop"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1af3fdcb93ae044c647df4e63ea9156571"></a>
### Function Unload

![][public]


```cpp
bool simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::Unload(const std::chrono::seconds &timeout_in_seconds=std::chrono::seconds(5))
```


Unload the simulation.

Unloads the simulation and switches AVX back to STARTED state. This command is used to restart a simulation without having to restart AVX. 
**Parameters**:

* **timeout_in_seconds**: The timeout in seconds


**Returns**:

True if the unload request was successful, false otherwise



**Parameters**:

* const std::chrono::seconds & **timeout_in_seconds** = std::chrono::seconds(5) 

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::Unload"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1aef5736c8514738119b66dfdb70015314"></a>
### Function Kill

![][public]


```cpp
bool simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::Kill(const std::chrono::seconds &timeout_in_seconds=std::chrono::seconds(5))
```


Kill the simulation.

Sends a signal to end the AVX program properly. Closes the Grpc server. 
**Parameters**:

* **timeout_in_seconds**: The timeout in seconds


**Returns**:

True if the kill request was successful, false otherwise



**Parameters**:

* const std::chrono::seconds & **timeout_in_seconds** = std::chrono::seconds(5) 

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::Kill"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1aeb52b2acbff9db3edcd4a33d8ba9211c"></a>
### Function GetLatestSensorDataDescriptions

![][public]


```cpp
SensorDataDescriptions simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::GetLatestSensorDataDescriptions(const std::chrono::milliseconds &timeout_in_milliseconds=std::chrono::milliseconds(1000))
```


Get the latest sensor data descriptions in a vector.

This function will wait for all sensor data descriptions to be available and return them in a vector. If the sensor data descriptions are not available, the function will wait for them to be available. 
**Parameters**:

* **timeout_in_seconds**: The timeout in seconds


**Returns**:

A vector of Sensor data descriptions



**Parameters**:

* const std::chrono::milliseconds & **timeout_in_milliseconds** = std::chrono::milliseconds(1000) 

**Return type**: SensorDataDescriptions

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::GetLatestSensorDataDescriptions"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1ac5a21c59e7e440e46a0bbbf88ece7a54"></a>
### Function GetSensorIdentifiers

![][public]
![][const]


```cpp
const std::vector< std::string > & simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::GetSensorIdentifiers() const
```


Get the sensor identifiers.

**Returns**:

A vector of sensor identifiers



**Return type**: const std::vector< std::string > &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::GetSensorIdentifiers"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1af1a11124e5274c64568d294ee629b68f"></a>
### Function SetSensorIdentifiers

![][public]


```cpp
void simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::SetSensorIdentifiers(const ansys::api::avxcelerate::sensors::v1::simulation::SimulationParameters &simulation_parameters)
```


Set the sensor identifiers.

**Parameters**:

* **simulation_parameters**: The simulation parameters



**Parameters**:

* const ansys::api::avxcelerate::sensors::v1::simulation::SimulationParameters & **simulation_parameters**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::SetSensorIdentifiers"}]}`
-->

## Public static functions

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a70012a5e06c4ba2f1292029f664e3fb8"></a>
### Function SerializeSensorDataDescriptions

![][public]
![][static]


```cpp
static std::vector< unsigned char > simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::SerializeSensorDataDescriptions(const SensorDataDescriptions &sensor_data_descriptions)
```


Serialize SensorDataDescriptions to bytes array.

Converts a vector of SensorDataDescription objects into a bytes array for transmission. This function can be used to prepare data for rtidds::GenericBytesMessage. 
**Parameters**:

* **sensor_data_descriptions**: The sensor data descriptions to serialize


**Returns**:

A vector of unsigned char containing the serialized data



**Parameters**:

* const SensorDataDescriptions & **sensor_data_descriptions**

**Return type**: std::vector< unsigned char >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::SerializeSensorDataDescriptions"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a353382be749e0909337e395af828bc61"></a>
### Function DeserializeSensorDataDescriptions

![][public]
![][static]


```cpp
static SensorDataDescriptions simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::DeserializeSensorDataDescriptions(const std::vector< unsigned char > &bytes_array)
```


Deserialize bytes array to SensorDataDescriptions.

Converts a bytes array back into a vector of SensorDataDescription objects. This function can be used to reconstruct data received from rtidds::GenericBytesMessage. 
**Parameters**:

* **bytes_array**: The bytes array containing the serialized data


**Returns**:

A vector of SensorDataDescription objects


**Exceptions**:

* **std::runtime_error**: if deserialization fails



**Parameters**:

* const std::vector< unsigned char > & **bytes_array**

**Return type**: SensorDataDescriptions

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::DeserializeSensorDataDescriptions"}]}`
-->

## Private functions

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1af0c66b6549fea0cbc7a6f46c4e04ac07"></a>
### Function IsRequestSuccessful

![][private]


```cpp
bool simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::IsRequestSuccessful(const grpc::Status &grpc_status, const std::string &request_name)
```


Check if the request was successful.

Checks if the request was successful by checking the grpc status and the vss status. 
**Parameters**:

* **grpc_status**: The grpc status
* **vss_status**: The vss status
* **request_name**: The name of the request


**Returns**:

True if the request was successful, false otherwise



**Parameters**:

* const grpc::Status & **grpc_status**
* const std::string & **request_name**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::IsRequestSuccessful"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a607bd314f3c7972927a14ec1b1952960"></a>
### Function WaitForConnection

![][private]


```cpp
bool simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::WaitForConnection(const std::chrono::seconds &timeout_in_seconds, const bool silent_info=false)
```


Wait for the connection to AVX to be established.

Waits for the connection to AVX to be established. If the connection is not established after the timeout, the function will return false. 
**Parameters**:

* **timeout_in_seconds**: The timeout in seconds
* **silent_info**: If true, the function will not print any info messages


**Returns**:

True if the connection was established, false otherwise



**Parameters**:

* const std::chrono::seconds & **timeout_in_seconds**
* const bool **silent_info** = false 

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::WaitForConnection"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1a0620b9bd54dd8ce55579536b17133dc9"></a>
### Function ReadSensorDataDescription

![][private]


```cpp
bool simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::ReadSensorDataDescription(ansys::api::avxcelerate::sensors::v1::data_access::SensorDataDescription &sd_description, const std::chrono::milliseconds &timeout_in_milliseconds)
```


Read sensor data description with timeout.

Attempts to read sensor data description continuously until successful or timeout is reached. 
**Parameters**:

* **sd_description**: The sensor data description to be filled
* **timeout_in_seconds**: The timeout in seconds


**Returns**:

True if the sensor data description was read successfully, false if timeout occurred



**Parameters**:

* ansys::api::avxcelerate::sensors::v1::data_access::SensorDataDescription & **sd_description**
* const std::chrono::milliseconds & **timeout_in_milliseconds**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::ReadSensorDataDescription"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxVssApiAdapter_1ad34f7a9ef15162b7cc5ed2d4e09db83f"></a>
### Function IsAllSensorDataDescriptionsAvailable

![][private]


```cpp
bool simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::IsAllSensorDataDescriptionsAvailable(const SensorDataDescriptions &sensor_data_descriptions)
```


Check if all sensor data descriptions are available.

**Parameters**:

* **sensor_data_descriptions**: The sensor data descriptions to check


**Returns**:

True if all sensor data descriptions are available, false otherwise



**Parameters**:

* const SensorDataDescriptions & **sensor_data_descriptions**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxVssApiAdapter::IsAllSensorDataDescriptionsAvailable"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"avx__vss__api__adapter_8h"},"children":[{"type":"text","text":"avx_vss_api_adapter.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)