# Struct RootedPathname

Namespace: [OpenTD.Utility](OpenTD.Utility.md)  
Assembly: OpenTD.dll  

An absolute pathname.

```csharp
[MessagePackObject(true)]
public struct RootedPathname
```

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### RootedPathname\(string\)

Initializes a new instance of the <xref href="OpenTD.Utility.RootedPathname" data-throw-if-not-resolved="false"></xref> struct,
starting with a relative or absolute pathname as input.

```csharp
public RootedPathname(string pathname)
```

#### Parameters

`pathname` [string](https://learn.microsoft.com/dotnet/api/system.string)

A relative or absolute pathname.

## Methods

### GetFileName\(\)

Returns the filename and extension of the path.

```csharp
public string GetFileName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ToLower\(\)

```csharp
public string ToLower()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ToString\(\)

Returns the fully qualified type name of this instance.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The fully qualified type name.

## Operators

### implicit operator RootedPathname\(string\)

```csharp
public static implicit operator RootedPathname(string x)
```

#### Parameters

`x` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [RootedPathname](OpenTD.Utility.RootedPathname.md)

### implicit operator string\(RootedPathname\)

```csharp
public static implicit operator string(RootedPathname x)
```

#### Parameters

`x` [RootedPathname](OpenTD.Utility.RootedPathname.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)


