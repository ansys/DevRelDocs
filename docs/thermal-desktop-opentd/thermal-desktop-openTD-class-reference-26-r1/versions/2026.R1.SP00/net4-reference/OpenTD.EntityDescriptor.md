# Struct EntityDescriptor

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Describes a TD entity, such as a node or a lump

```csharp
[DataContract]
public struct EntityDescriptor
```

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Constructors

### EntityDescriptor\(string, Connection\)

```csharp
public EntityDescriptor(string rawType, Connection connection)
```

#### Parameters

`rawType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`connection` [Connection](OpenTD.Connection.md)

### EntityDescriptor\(string, string\)

```csharp
public EntityDescriptor(string rawType, string handle)
```

#### Parameters

`rawType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Fields

### Connection

```csharp
[DataMember]
public Connection Connection
```

#### Field Value

 [Connection](OpenTD.Connection.md)

### RawType

This is how AutoCAD identifies the entity type. For example,
"RcNode" or "RcLump"

```csharp
[DataMember]
public string RawType
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### ToString\(\)

Returns the fully qualified type name of this instance.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The fully qualified type name.


