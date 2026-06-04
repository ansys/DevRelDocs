# Class Connection

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

A connection contains a handle and a marker. The handle uniquely identifies a
TD entity while the marker specifies how to connect to the entity, e.g., which
side of a surface to connect to.

```csharp
[MessagePackObject(true)]
public class Connection
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Connection](OpenTD.Connection.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Connection\(string, int\)

```csharp
public Connection(string _Handle, int _Marker)
```

#### Parameters

`_Handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

`_Marker` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Connection\(\)

Initializes a new instance of the <xref href="OpenTD.Connection" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Connection()
```

### Connection\(string\)

Initializes a new instance of the <xref href="OpenTD.Connection" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Connection(string _Handle)
```

#### Parameters

`_Handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

AutoCAD handle.

### Connection\(DbObject\)

Initializes a new instance of the <xref href="OpenTD.Connection" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Connection(DbObject x)
```

#### Parameters

`x` [DbObject](OpenTD.DbObject.md)

Gets the AutoCAD handle from this DbObject.

#### See Also

[DbObject](OpenTD.DbObject.md)

### Connection\(DbObject, int\)

Initializes a new instance of the <xref href="OpenTD.Connection" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Connection(DbObject x, int _Marker)
```

#### Parameters

`x` [DbObject](OpenTD.DbObject.md)

Gets the AutoCAD handle from this DbObject.

`_Marker` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The marker specifies how to connect to the entity.

#### See Also

[DbObject](OpenTD.DbObject.md)

## Fields

### Empty

```csharp
[IgnoreMember]
public static readonly Connection Empty
```

#### Field Value

 [Connection](OpenTD.Connection.md)

## Properties

### Handle

```csharp
public string Handle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Marker

```csharp
public int Marker { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### GetDomainName\(\)

```csharp
public string GetDomainName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### IsDomainName\(\)

```csharp
public bool IsDomainName()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsEmpty\(\)

```csharp
public bool IsEmpty()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetDomainName\(string\)

```csharp
public void SetDomainName(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## Operators

### implicit operator Connection\(string\)

```csharp
public static implicit operator Connection(string handle)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Connection](OpenTD.Connection.md)

### implicit operator Connection\(DbObject\)

```csharp
public static implicit operator Connection(DbObject x)
```

#### Parameters

`x` [DbObject](OpenTD.DbObject.md)

#### Returns

 [Connection](OpenTD.Connection.md)

### implicit operator List<Connection\>\(Connection\)

Implicitly converts a single element into a one-element list.

```csharp
public static implicit operator List<Connection>(Connection x)
```

#### Parameters

`x` [Connection](OpenTD.Connection.md)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>


