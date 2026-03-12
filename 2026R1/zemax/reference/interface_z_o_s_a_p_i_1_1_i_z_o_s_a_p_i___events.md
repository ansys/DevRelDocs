# Interface ZOSAPI::IZOSAPI_Events

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___events"></a>

![][C#]
![][public]

**Definition**:

COM classes can inherit from this interface if they wish to receive status changed notifications. See also ZOSAPI_Connection.SystemStatusChangedEvent.


## Members

* [SystemStatusChangedEvent](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___events.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___events_1a7ad362a618d870486a1d55ec70779c10)

## Public functions

### Function SystemStatusChangedEvent

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___events_1a7ad362a618d870486a1d55ec70779c10"></a>

![][public]


```csharp
void ZOSAPI.IZOSAPI_Events.SystemStatusChangedEvent(int systemId, string newStatus)
```


**Parameters**:

* int **systemId**
* string **newStatus**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Events.SystemStatusChangedEvent"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
