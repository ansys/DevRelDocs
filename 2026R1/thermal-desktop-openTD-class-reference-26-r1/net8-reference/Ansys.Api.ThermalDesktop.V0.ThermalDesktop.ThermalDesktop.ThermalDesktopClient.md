# <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient"></a> Class ThermalDesktop.ThermalDesktopClient

Namespace: [Ansys.Api.ThermalDesktop.V0.ThermalDesktop](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.md)  
Assembly: OpenTD.dll  

Client for ThermalDesktop

```csharp
public class ThermalDesktop.ThermalDesktopClient : ClientBase<ThermalDesktop.ThermalDesktopClient>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ClientBase](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/ClientBase.cs) ← 
[ClientBase<ThermalDesktop.ThermalDesktopClient\>](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/ClientBase.cs) ← 
[ThermalDesktop.ThermalDesktopClient](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.ThermalDesktop.ThermalDesktopClient.md)

#### Inherited Members

[ClientBase<ThermalDesktop.ThermalDesktopClient\>.WithHost\(string\)](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/ClientBase.cs), 
[ClientBase<ThermalDesktop.ThermalDesktopClient\>.NewInstance\(ClientBase.ClientBaseConfiguration\)](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/ClientBase.cs), 
[ClientBase.CallInvoker](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/ClientBase.cs), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient__ctor_Grpc_Core_ChannelBase_"></a> ThermalDesktopClient\(ChannelBase\)

Creates a new client for ThermalDesktop

```csharp
public ThermalDesktopClient(ChannelBase channel)
```

#### Parameters

`channel` [ChannelBase](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/ChannelBase.cs)

The channel to use to make remote calls.

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient__ctor_Grpc_Core_CallInvoker_"></a> ThermalDesktopClient\(CallInvoker\)

Creates a new client for ThermalDesktop that uses a custom <code>CallInvoker</code>.

```csharp
public ThermalDesktopClient(CallInvoker callInvoker)
```

#### Parameters

`callInvoker` [CallInvoker](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/CallInvoker.cs)

The callInvoker to use to make remote calls.

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient__ctor"></a> ThermalDesktopClient\(\)

Protected parameterless constructor to allow creation of test doubles.

```csharp
protected ThermalDesktopClient()
```

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient__ctor_Grpc_Core_ClientBase_ClientBaseConfiguration_"></a> ThermalDesktopClient\(ClientBaseConfiguration\)

Protected constructor to allow creation of configured clients.

```csharp
protected ThermalDesktopClient(ClientBase.ClientBaseConfiguration configuration)
```

#### Parameters

`configuration` [ClientBase](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/ClientBase.cs).[ClientBaseConfiguration](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/ClientBase.cs)

The client configuration.

## Methods

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_CreateNode_Google_Protobuf_WellKnownTypes_Empty_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> CreateNode\(Empty, Metadata, DateTime?, CancellationToken\)

```csharp
public virtual Empty CreateNode(Empty request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` Empty

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/Metadata.cs)

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 Empty

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_CreateNode_Google_Protobuf_WellKnownTypes_Empty_Grpc_Core_CallOptions_"></a> CreateNode\(Empty, CallOptions\)

```csharp
public virtual Empty CreateNode(Empty request, CallOptions options)
```

#### Parameters

`request` Empty

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/CallOptions.cs)

#### Returns

 Empty

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_CreateNodeAsync_Google_Protobuf_WellKnownTypes_Empty_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> CreateNodeAsync\(Empty, Metadata, DateTime?, CancellationToken\)

```csharp
public virtual AsyncUnaryCall<Empty> CreateNodeAsync(Empty request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` Empty

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/Metadata.cs)

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [AsyncUnaryCall](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/AsyncUnaryCall.cs)<Empty\>

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_CreateNodeAsync_Google_Protobuf_WellKnownTypes_Empty_Grpc_Core_CallOptions_"></a> CreateNodeAsync\(Empty, CallOptions\)

```csharp
public virtual AsyncUnaryCall<Empty> CreateNodeAsync(Empty request, CallOptions options)
```

#### Parameters

`request` Empty

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/CallOptions.cs)

#### Returns

 [AsyncUnaryCall](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/AsyncUnaryCall.cs)<Empty\>

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_IsConnected_Google_Protobuf_WellKnownTypes_Empty_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> IsConnected\(Empty, Metadata, DateTime?, CancellationToken\)

```csharp
public virtual BoolValue IsConnected(Empty request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` Empty

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/Metadata.cs)

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 BoolValue

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_IsConnected_Google_Protobuf_WellKnownTypes_Empty_Grpc_Core_CallOptions_"></a> IsConnected\(Empty, CallOptions\)

```csharp
public virtual BoolValue IsConnected(Empty request, CallOptions options)
```

#### Parameters

`request` Empty

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/CallOptions.cs)

#### Returns

 BoolValue

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_IsConnectedAsync_Google_Protobuf_WellKnownTypes_Empty_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> IsConnectedAsync\(Empty, Metadata, DateTime?, CancellationToken\)

```csharp
public virtual AsyncUnaryCall<BoolValue> IsConnectedAsync(Empty request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` Empty

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/Metadata.cs)

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [AsyncUnaryCall](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/AsyncUnaryCall.cs)<BoolValue\>

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_IsConnectedAsync_Google_Protobuf_WellKnownTypes_Empty_Grpc_Core_CallOptions_"></a> IsConnectedAsync\(Empty, CallOptions\)

```csharp
public virtual AsyncUnaryCall<BoolValue> IsConnectedAsync(Empty request, CallOptions options)
```

#### Parameters

`request` Empty

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/CallOptions.cs)

#### Returns

 [AsyncUnaryCall](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/AsyncUnaryCall.cs)<BoolValue\>

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_NewInstance_Grpc_Core_ClientBase_ClientBaseConfiguration_"></a> NewInstance\(ClientBaseConfiguration\)

Creates a new instance of client from given <code>ClientBaseConfiguration</code>.

```csharp
protected override ThermalDesktop.ThermalDesktopClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
```

#### Parameters

`configuration` [ClientBase](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/ClientBase.cs).[ClientBaseConfiguration](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/ClientBase.cs)

#### Returns

 [ThermalDesktop](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.ThermalDesktop.md).[ThermalDesktopClient](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.ThermalDesktop.ThermalDesktopClient.md)

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloCStr_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> SayHelloCStr\(HelloRequest, Metadata, DateTime?, CancellationToken\)

```csharp
public virtual HelloReply SayHelloCStr(HelloRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/Metadata.cs)

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloCStr_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_CallOptions_"></a> SayHelloCStr\(HelloRequest, CallOptions\)

```csharp
public virtual HelloReply SayHelloCStr(HelloRequest request, CallOptions options)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/CallOptions.cs)

#### Returns

 [HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloCStrAsync_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> SayHelloCStrAsync\(HelloRequest, Metadata, DateTime?, CancellationToken\)

```csharp
public virtual AsyncUnaryCall<HelloReply> SayHelloCStrAsync(HelloRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/Metadata.cs)

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [AsyncUnaryCall](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/AsyncUnaryCall.cs)<[HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)\>

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloCStrAsync_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_CallOptions_"></a> SayHelloCStrAsync\(HelloRequest, CallOptions\)

```csharp
public virtual AsyncUnaryCall<HelloReply> SayHelloCStrAsync(HelloRequest request, CallOptions options)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/CallOptions.cs)

#### Returns

 [AsyncUnaryCall](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/AsyncUnaryCall.cs)<[HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)\>

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloCStrString_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> SayHelloCStrString\(HelloRequest, Metadata, DateTime?, CancellationToken\)

```csharp
public virtual HelloReply SayHelloCStrString(HelloRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/Metadata.cs)

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloCStrString_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_CallOptions_"></a> SayHelloCStrString\(HelloRequest, CallOptions\)

```csharp
public virtual HelloReply SayHelloCStrString(HelloRequest request, CallOptions options)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/CallOptions.cs)

#### Returns

 [HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloCStrStringAsync_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> SayHelloCStrStringAsync\(HelloRequest, Metadata, DateTime?, CancellationToken\)

```csharp
public virtual AsyncUnaryCall<HelloReply> SayHelloCStrStringAsync(HelloRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/Metadata.cs)

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [AsyncUnaryCall](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/AsyncUnaryCall.cs)<[HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)\>

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloCStrStringAsync_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_CallOptions_"></a> SayHelloCStrStringAsync\(HelloRequest, CallOptions\)

```csharp
public virtual AsyncUnaryCall<HelloReply> SayHelloCStrStringAsync(HelloRequest request, CallOptions options)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/CallOptions.cs)

#### Returns

 [AsyncUnaryCall](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/AsyncUnaryCall.cs)<[HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)\>

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloJustGrpc_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> SayHelloJustGrpc\(HelloRequest, Metadata, DateTime?, CancellationToken\)

```csharp
public virtual HelloReply SayHelloJustGrpc(HelloRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/Metadata.cs)

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloJustGrpc_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_CallOptions_"></a> SayHelloJustGrpc\(HelloRequest, CallOptions\)

```csharp
public virtual HelloReply SayHelloJustGrpc(HelloRequest request, CallOptions options)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/CallOptions.cs)

#### Returns

 [HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloJustGrpcAsync_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> SayHelloJustGrpcAsync\(HelloRequest, Metadata, DateTime?, CancellationToken\)

```csharp
public virtual AsyncUnaryCall<HelloReply> SayHelloJustGrpcAsync(HelloRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/Metadata.cs)

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [AsyncUnaryCall](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/AsyncUnaryCall.cs)<[HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)\>

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloJustGrpcAsync_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_CallOptions_"></a> SayHelloJustGrpcAsync\(HelloRequest, CallOptions\)

```csharp
public virtual AsyncUnaryCall<HelloReply> SayHelloJustGrpcAsync(HelloRequest request, CallOptions options)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/CallOptions.cs)

#### Returns

 [AsyncUnaryCall](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/AsyncUnaryCall.cs)<[HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)\>

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloPointer_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> SayHelloPointer\(HelloRequest, Metadata, DateTime?, CancellationToken\)

```csharp
public virtual HelloReply SayHelloPointer(HelloRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/Metadata.cs)

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloPointer_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_CallOptions_"></a> SayHelloPointer\(HelloRequest, CallOptions\)

```csharp
public virtual HelloReply SayHelloPointer(HelloRequest request, CallOptions options)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/CallOptions.cs)

#### Returns

 [HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloPointerAsync_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> SayHelloPointerAsync\(HelloRequest, Metadata, DateTime?, CancellationToken\)

```csharp
public virtual AsyncUnaryCall<HelloReply> SayHelloPointerAsync(HelloRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/Metadata.cs)

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [AsyncUnaryCall](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/AsyncUnaryCall.cs)<[HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)\>

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloPointerAsync_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_CallOptions_"></a> SayHelloPointerAsync\(HelloRequest, CallOptions\)

```csharp
public virtual AsyncUnaryCall<HelloReply> SayHelloPointerAsync(HelloRequest request, CallOptions options)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/CallOptions.cs)

#### Returns

 [AsyncUnaryCall](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/AsyncUnaryCall.cs)<[HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)\>

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloReference_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> SayHelloReference\(HelloRequest, Metadata, DateTime?, CancellationToken\)

```csharp
public virtual HelloReply SayHelloReference(HelloRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/Metadata.cs)

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloReference_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_CallOptions_"></a> SayHelloReference\(HelloRequest, CallOptions\)

```csharp
public virtual HelloReply SayHelloReference(HelloRequest request, CallOptions options)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/CallOptions.cs)

#### Returns

 [HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloReferenceAsync_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> SayHelloReferenceAsync\(HelloRequest, Metadata, DateTime?, CancellationToken\)

```csharp
public virtual AsyncUnaryCall<HelloReply> SayHelloReferenceAsync(HelloRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/Metadata.cs)

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [AsyncUnaryCall](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/AsyncUnaryCall.cs)<[HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)\>

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloReferenceAsync_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_CallOptions_"></a> SayHelloReferenceAsync\(HelloRequest, CallOptions\)

```csharp
public virtual AsyncUnaryCall<HelloReply> SayHelloReferenceAsync(HelloRequest request, CallOptions options)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/CallOptions.cs)

#### Returns

 [AsyncUnaryCall](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/AsyncUnaryCall.cs)<[HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)\>

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloString_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> SayHelloString\(HelloRequest, Metadata, DateTime?, CancellationToken\)

```csharp
public virtual HelloReply SayHelloString(HelloRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/Metadata.cs)

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloString_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_CallOptions_"></a> SayHelloString\(HelloRequest, CallOptions\)

```csharp
public virtual HelloReply SayHelloString(HelloRequest request, CallOptions options)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/CallOptions.cs)

#### Returns

 [HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloStringAsync_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> SayHelloStringAsync\(HelloRequest, Metadata, DateTime?, CancellationToken\)

```csharp
public virtual AsyncUnaryCall<HelloReply> SayHelloStringAsync(HelloRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/Metadata.cs)

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [AsyncUnaryCall](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/AsyncUnaryCall.cs)<[HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)\>

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_ThermalDesktop_ThermalDesktopClient_SayHelloStringAsync_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloRequest_Grpc_Core_CallOptions_"></a> SayHelloStringAsync\(HelloRequest, CallOptions\)

```csharp
public virtual AsyncUnaryCall<HelloReply> SayHelloStringAsync(HelloRequest request, CallOptions options)
```

#### Parameters

`request` [HelloRequest](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloRequest.md)

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/CallOptions.cs)

#### Returns

 [AsyncUnaryCall](https://github.com/grpc/grpc\-dotnet/blob/7c43ddb5d68008782dc0dba2d0feaa3ed91a9fb2/src/Grpc.Core.Api/AsyncUnaryCall.cs)<[HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)\>

