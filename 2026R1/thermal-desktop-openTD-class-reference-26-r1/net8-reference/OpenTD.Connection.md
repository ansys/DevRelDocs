# <a id="OpenTD_Connection"></a> Class Connection

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

A connection contains a handle and a marker. The handle uniquely identifies a
TD entity while the marker specifies how to connect to the entity, e.g., which
side of a surface to connect to.

```csharp
public class Connection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Connection](OpenTD.Connection.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Connection__ctor_System_String_System_Int32_"></a> Connection\(string, int\)

```csharp
public Connection(string _Handle, int _Marker)
```

#### Parameters

`_Handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

`_Marker` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Connection__ctor"></a> Connection\(\)

Initializes a new instance of the <xref href="OpenTD.Connection" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Connection()
```

### <a id="OpenTD_Connection__ctor_System_String_"></a> Connection\(string\)

Initializes a new instance of the <xref href="OpenTD.Connection" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Connection(string _Handle)
```

#### Parameters

`_Handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

AutoCAD handle.

### <a id="OpenTD_Connection__ctor_OpenTD_DbObject_"></a> Connection\(DbObject\)

Initializes a new instance of the <xref href="OpenTD.Connection" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Connection(DbObject x)
```

#### Parameters

`x` [DbObject](OpenTD.DbObject.md)

Gets the AutoCAD handle from this DbObject.

#### See Also

[DbObject](OpenTD.DbObject.md)

### <a id="OpenTD_Connection__ctor_OpenTD_DbObject_System_Int32_"></a> Connection\(DbObject, int\)

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

### <a id="OpenTD_Connection_Empty"></a> Empty

```csharp
public static readonly Connection Empty
```

#### Field Value

 [Connection](OpenTD.Connection.md)

## Properties

### <a id="OpenTD_Connection_Handle"></a> Handle

```csharp
public string Handle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Connection_Marker"></a> Marker

```csharp
public int Marker { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OpenTD_Connection_GetDomainName"></a> GetDomainName\(\)

```csharp
public string GetDomainName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Connection_IsDomainName"></a> IsDomainName\(\)

```csharp
public bool IsDomainName()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Connection_IsEmpty"></a> IsEmpty\(\)

```csharp
public bool IsEmpty()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Connection_SetDomainName_System_String_"></a> SetDomainName\(string\)

```csharp
public void SetDomainName(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Connection_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## Operators

### <a id="OpenTD_Connection_op_Implicit_System_String__OpenTD_Connection"></a> implicit operator Connection\(string\)

```csharp
public static implicit operator Connection(string handle)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Connection](OpenTD.Connection.md)

### <a id="OpenTD_Connection_op_Implicit_OpenTD_DbObject__OpenTD_Connection"></a> implicit operator Connection\(DbObject\)

```csharp
public static implicit operator Connection(DbObject x)
```

#### Parameters

`x` [DbObject](OpenTD.DbObject.md)

#### Returns

 [Connection](OpenTD.Connection.md)

### <a id="OpenTD_Connection_op_Implicit_OpenTD_Connection__System_Collections_Generic_List_OpenTD_Connection_"></a> implicit operator List<Connection\>\(Connection\)

Implicitly converts a single element into a one-element list.

```csharp
public static implicit operator List<Connection>(Connection x)
```

#### Parameters

`x` [Connection](OpenTD.Connection.md)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

