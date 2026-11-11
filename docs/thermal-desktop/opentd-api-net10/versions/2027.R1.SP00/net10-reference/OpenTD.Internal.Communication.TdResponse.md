# Class TdResponse

Namespace: [OpenTD.Internal.Communication](OpenTD.Internal.Communication.md)  
Assembly: OpenTD.dll  

```csharp
[MessagePackObject(false)]
public class TdResponse
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TdResponse](OpenTD.Internal.Communication.TdResponse.md)

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
[Key(1)]
public TdData Data { get; set; }
```

#### Property Value

 [TdData](OpenTD.Internal.Communication.TdData.md)

### ErrorCode

Transport-level outcome. 0 (<xref href="OpenTD.Internal.Communication.TdErrorCode.Success" data-throw-if-not-resolved="false"></xref>) means the request was
dispatched; any other value means it was not. Absent on responses from pre-error-channel
releases, where it defaults to 0 and preserves legacy behavior.

```csharp
[Key(3)]
public int ErrorCode { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ErrorMessage

Sanitized, user-safe description of a transport-level failure. Empty when
<xref href="OpenTD.Internal.Communication.TdResponse.ErrorCode" data-throw-if-not-resolved="false"></xref> is 0. Full diagnostic detail stays in the server log.

```csharp
[Key(4)]
public string ErrorMessage { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ProductVersion

Server product version, carried for diagnostics and logging only.

```csharp
[Key(6)]
public string ProductVersion { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ProtocolVersion

Wire protocol revision implemented by the responding server. Lets the client log or
adapt to an asymmetric pairing. Defaults to <xref href="OpenTD.Internal.Communication.TdProtocol.LegacyVersion" data-throw-if-not-resolved="false"></xref> on
responses from pre-versioning servers.

```csharp
[Key(5)]
public int ProtocolVersion { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)


