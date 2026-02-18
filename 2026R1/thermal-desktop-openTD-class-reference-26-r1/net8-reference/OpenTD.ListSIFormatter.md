# Class ListSIFormatter

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

```csharp
public class ListSIFormatter : IMessagePackFormatter<ListSI>
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ListSIFormatter](OpenTD.ListSIFormatter.md)

## Implements

IMessagePackFormatter<ListSI\>

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### Deserialize\(ref MessagePackReader, MessagePackSerializerOptions\)

Deserializes a value.

```csharp
public ListSI Deserialize(ref MessagePackReader reader, MessagePackSerializerOptions options)
```

#### Parameters

`reader` MessagePackReader

The reader to deserialize from.

`options` MessagePackSerializerOptions

The serialization settings to use, including the resolver to use to obtain formatters for types that make up the composite type <xref href="OpenTD.ListSI" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [ListSI](OpenTD.ListSI.md)

The deserialized value.

### Serialize\(ref MessagePackWriter, ListSI, MessagePackSerializerOptions\)

Serializes a value.

```csharp
public void Serialize(ref MessagePackWriter writer, ListSI value, MessagePackSerializerOptions options)
```

#### Parameters

`writer` MessagePackWriter

The writer to use when serializing the value.

`value` [ListSI](OpenTD.ListSI.md)

The value to be serialized.

`options` MessagePackSerializerOptions

The serialization settings to use, including the resolver to use to obtain formatters for types that make up the composite type <xref href="OpenTD.ListSI" data-throw-if-not-resolved="false"></xref>.


