# Class PipeService

Namespace: [OpenTD.Internal.Communication](OpenTD.Internal.Communication.md)  
Assembly: OpenTD.dll  

```csharp
public class PipeService : IService
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PipeService](OpenTD.Internal.Communication.PipeService.md)

## Implements

IService

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### PipeService\(ITdCommander, Func<Func<TdResponse\>, TdResponse\>\)

```csharp
public PipeService(ITdCommander commander, Func<Func<TdResponse>, TdResponse> marshalFunc)
```

#### Parameters

`commander` ITdCommander

`marshalFunc` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<[Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[TdResponse](OpenTD.Internal.Communication.TdResponse.md)\>, [TdResponse](OpenTD.Internal.Communication.TdResponse.md)\>

## Methods

### Execute\(ReadOnlyMemory<byte\>\)

```csharp
public ReadOnlyMemory<byte> Execute(ReadOnlyMemory<byte> input)
```

#### Parameters

`input` [ReadOnlyMemory](https://learn.microsoft.com/dotnet/api/system.readonlymemory\-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)\>

#### Returns

 [ReadOnlyMemory](https://learn.microsoft.com/dotnet/api/system.readonlymemory\-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)\>

### Execute\(ReadOnlyMemory<byte\>, ConnectionContext\)

Executes a request in the scope of the connection it arrived on.

<p>
Implementations that need per-connection state (protocol version, peer identity) should
override this. The default implementation ignores the context and defers to
<xref href="OpenTD.Connect.IService.Execute(System.ReadOnlyMemory%7bSystem.Byte%7d)" data-throw-if-not-resolved="false"></xref>, so existing implementors are unaffected.
</p>

```csharp
public ReadOnlyMemory<byte> Execute(ReadOnlyMemory<byte> input, ConnectionContext connection)
```

#### Parameters

`input` [ReadOnlyMemory](https://learn.microsoft.com/dotnet/api/system.readonlymemory\-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)\>

`connection` ConnectionContext

#### Returns

 [ReadOnlyMemory](https://learn.microsoft.com/dotnet/api/system.readonlymemory\-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)\>


