# Class TdRequestEncoder

Namespace: [OpenTD.Internal.Communication](OpenTD.Internal.Communication.md)  
Assembly: OpenTD.dll  

```csharp
public class TdRequestEncoder : IEncoder<TdRequest>
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TdRequestEncoder](OpenTD.Internal.Communication.TdRequestEncoder.md)

## Implements

IEncoder<TdRequest\>

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### Decode\(ReadOnlyMemory<byte\>\)

```csharp
public TdRequest Decode(ReadOnlyMemory<byte> data)
```

#### Parameters

`data` [ReadOnlyMemory](https://learn.microsoft.com/dotnet/api/system.readonlymemory\-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)\>

#### Returns

 [TdRequest](OpenTD.Internal.Communication.TdRequest.md)

### Encode\(TdRequest\)

```csharp
public ReadOnlyMemory<byte> Encode(TdRequest data)
```

#### Parameters

`data` [TdRequest](OpenTD.Internal.Communication.TdRequest.md)

#### Returns

 [ReadOnlyMemory](https://learn.microsoft.com/dotnet/api/system.readonlymemory\-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)\>


