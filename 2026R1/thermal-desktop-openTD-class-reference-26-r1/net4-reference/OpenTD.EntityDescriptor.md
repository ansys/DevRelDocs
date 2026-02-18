# <a id="OpenTD_EntityDescriptor"></a> Struct EntityDescriptor

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Describes a TD entity, such as a node or a lump

```csharp
[DataContract]
public struct EntityDescriptor
```

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Constructors

### <a id="OpenTD_EntityDescriptor__ctor_System_String_OpenTD_Connection_"></a> EntityDescriptor\(string, Connection\)

```csharp
public EntityDescriptor(string rawType, Connection connection)
```

#### Parameters

`rawType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`connection` [Connection](OpenTD.Connection.md)

### <a id="OpenTD_EntityDescriptor__ctor_System_String_System_String_"></a> EntityDescriptor\(string, string\)

```csharp
public EntityDescriptor(string rawType, string handle)
```

#### Parameters

`rawType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Fields

### <a id="OpenTD_EntityDescriptor_Connection"></a> Connection

```csharp
[DataMember]
public Connection Connection
```

#### Field Value

 [Connection](OpenTD.Connection.md)

### <a id="OpenTD_EntityDescriptor_RawType"></a> RawType

This is how AutoCAD identifies the entity type. For example,
"RcNode" or "RcLump"

```csharp
[DataMember]
public string RawType
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="OpenTD_EntityDescriptor_ToString"></a> ToString\(\)

Returns the fully qualified type name of this instance.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The fully qualified type name.

