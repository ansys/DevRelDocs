# Class TdRequest

Namespace: [OpenTD.Internal.Communication](OpenTD.Internal.Communication.md)  
Assembly: OpenTD.dll  

```csharp
[MessagePackObject(false)]
public class TdRequest
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TdRequest](OpenTD.Internal.Communication.TdRequest.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### Data

```csharp
[Key(2)]
public TdData Data { get; set; }
```

#### Property Value

 [TdData](OpenTD.Internal.Communication.TdData.md)

### MethodName

```csharp
[Key(1)]
public string MethodName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ProductVersion

Client product version, carried for diagnostics and logging only. Never used to make
compatibility decisions - that is <xref href="OpenTD.Internal.Communication.TdRequest.ProtocolVersion" data-throw-if-not-resolved="false"></xref>'s job.

```csharp
[Key(4)]
public string ProductVersion { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ProtocolVersion

Wire protocol revision implemented by the calling client, stamped on every request.

<p>
Stamped per request rather than only at handshake because the server may re-arm its pipe
at any time; this guarantees the server can always identify its peer even on the first
request after an invisible reconnect.
</p>
<p>
Absent from requests sent by pre-versioning clients, where it deserializes to
<xref href="OpenTD.Internal.Communication.TdProtocol.LegacyVersion" data-throw-if-not-resolved="false"></xref>.
</p>

```csharp
[Key(3)]
public int ProtocolVersion { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)


