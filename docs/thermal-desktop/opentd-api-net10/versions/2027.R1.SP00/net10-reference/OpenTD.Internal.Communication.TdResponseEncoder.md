# Class TdResponseEncoder

Namespace: [OpenTD.Internal.Communication](OpenTD.Internal.Communication.md)  
Assembly: OpenTD.dll  

```csharp
public class TdResponseEncoder : IEncoder<TdResponse>
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TdResponseEncoder](OpenTD.Internal.Communication.TdResponseEncoder.md)

## Implements

IEncoder<TdResponse\>

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
public TdResponse Decode(ReadOnlyMemory<byte> data)
```

#### Parameters

`data` [ReadOnlyMemory](https://learn.microsoft.com/dotnet/api/system.readonlymemory\-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)\>

#### Returns

 [TdResponse](OpenTD.Internal.Communication.TdResponse.md)

### Encode\(TdResponse\)

```csharp
public ReadOnlyMemory<byte> Encode(TdResponse data)
```

#### Parameters

`data` [TdResponse](OpenTD.Internal.Communication.TdResponse.md)

#### Returns

 [ReadOnlyMemory](https://learn.microsoft.com/dotnet/api/system.readonlymemory\-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)\>


