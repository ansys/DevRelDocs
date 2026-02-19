# Class SubmodelNameData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

A submodel name. Implicitly converts to/from string. Automatically converts to uppercase.

```csharp
public class SubmodelNameData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SubmodelNameData](OpenTD.SubmodelNameData.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### SubmodelNameData\(\)

Initializes a new instance of the <xref href="OpenTD.SubmodelNameData" data-throw-if-not-resolved="false"></xref> class
with default thermal submodel name.

```csharp
public SubmodelNameData()
```

### SubmodelNameData\(string\)

Initializes a new instance of the <xref href="OpenTD.SubmodelNameData" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SubmodelNameData(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The submodel name.

## Properties

### Name

```csharp
[DataMember]
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### Check\(\)

```csharp
public void Check()
```

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

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## Operators

### operator ==\(SubmodelNameData, SubmodelNameData\)

```csharp
public static bool operator ==(SubmodelNameData first, SubmodelNameData second)
```

#### Parameters

`first` [SubmodelNameData](OpenTD.SubmodelNameData.md)

`second` [SubmodelNameData](OpenTD.SubmodelNameData.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### implicit operator SubmodelNameData\(string\)

```csharp
public static implicit operator SubmodelNameData(string submodelName)
```

#### Parameters

`submodelName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [SubmodelNameData](OpenTD.SubmodelNameData.md)

### implicit operator string\(SubmodelNameData\)

```csharp
public static implicit operator string(SubmodelNameData s)
```

#### Parameters

`s` [SubmodelNameData](OpenTD.SubmodelNameData.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### operator \!=\(SubmodelNameData, SubmodelNameData\)

```csharp
public static bool operator !=(SubmodelNameData first, SubmodelNameData second)
```

#### Parameters

`first` [SubmodelNameData](OpenTD.SubmodelNameData.md)

`second` [SubmodelNameData](OpenTD.SubmodelNameData.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


