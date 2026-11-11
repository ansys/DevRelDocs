# Class UDFADescriptor

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Describes a user-defined Fortran array (UDFA)

```csharp
public class UDFADescriptor
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UDFADescriptor](OpenTD.Results.Dataset.UDFADescriptor.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### UDFADescriptor\(string, UDFAType, long, ValueTypes\)

```csharp
public UDFADescriptor(string name, UDFAType udfaType, long size, DataSubtype.ValueTypes valueType)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`udfaType` [UDFAType](OpenTD.Results.Dataset.UDFAType.md)

`size` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`valueType` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md).[ValueTypes](OpenTD.Results.Dataset.DataSubtype.ValueTypes.md)

## Properties

### Name

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Size

```csharp
public long Size { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### Subtype

```csharp
public DataSubtype Subtype { get; }
```

#### Property Value

 [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

### UDFAType

```csharp
public UDFAType UDFAType { get; }
```

#### Property Value

 [UDFAType](OpenTD.Results.Dataset.UDFAType.md)

## Methods

### Equals\(object\)

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object to compare with the current object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

[true](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool) if the specified object  is equal to the current object; otherwise, [false](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool).

### GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.


