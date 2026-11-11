# Class TdProtocol

Namespace: [OpenTD.Internal.Communication](OpenTD.Internal.Communication.md)  
Assembly: OpenTD.dll  

Constants defining the OpenTD wire protocol, shared by both endpoints.

```csharp
public static class TdProtocol
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TdProtocol](OpenTD.Internal.Communication.TdProtocol.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### CurrentVersion

Revision of the wire contract implemented by this assembly.

<p>
Deliberately NOT the product or assembly version. It is bumped only when the wire
contract itself changes, so that two releases which are wire-identical report the same
value. The product version churns every build and is useless as a compatibility signal;
it is carried separately for diagnostics only.
</p>
<p>
Version 1 is the first release to implement the handshake and error channel. A peer
reporting <xref href="OpenTD.Internal.Communication.TdProtocol.LegacyVersion" data-throw-if-not-resolved="false"></xref> predates both.
</p>

```csharp
public const int CurrentVersion = 1
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HandshakeMethodName

Reserved method name for the handshake request.

<p>
Intercepted by the server before method dispatch; it is not a member of
<xref href="OpenTD.Internal.Communication.ITdCommander" data-throw-if-not-resolved="false"></xref>. The leading '$' keeps it outside the namespace of real API
methods so it can never collide with one.
</p>

```csharp
public const string HandshakeMethodName = "$handshake"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### LegacyVersion

The implied protocol version of a peer that does not declare one.

<p>
Such a peer predates protocol versioning. Because the field is simply absent from its
requests, it deserializes to 0 - this value must therefore remain 0 and must never be
treated as an error.
</p>

```csharp
public const int LegacyVersion = 0
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)


