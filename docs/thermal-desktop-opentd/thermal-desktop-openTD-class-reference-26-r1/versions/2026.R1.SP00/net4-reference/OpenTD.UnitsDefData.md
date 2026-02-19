# Class UnitsDefData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

UnitsDefData is used to create units with arbitrary combinations of dimensions.

```csharp
[DataContract]
public class UnitsDefData : IEquatable<UnitsDefData>
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UnitsDefData](OpenTD.UnitsDefData.md)

## Implements

[IEquatable<UnitsDefData\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### UnitsDefData\(\)

Initializes a new instance of the <xref href="OpenTD.UnitsDefData" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UnitsDefData()
```

### UnitsDefData\(UnitsDefData\)

Copy constructor.

```csharp
public UnitsDefData(UnitsDefData source)
```

#### Parameters

`source` [UnitsDefData](OpenTD.UnitsDefData.md)

## Properties

### multiUnitsTypes

```csharp
[DataMember]
public List<int> multiUnitsTypes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### multiUnitsUnits

```csharp
[DataMember]
public List<int> multiUnitsUnits { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### numer

```csharp
[DataMember]
public List<bool> numer { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

## Methods

### Equals\(UnitsDefData\)

Indicates whether the current object is equal to another object of the same type.

```csharp
public bool Equals(UnitsDefData x)
```

#### Parameters

`x` [UnitsDefData](OpenTD.UnitsDefData.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

[true](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool) if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, [false](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool).

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

## Operators

### operator ==\(UnitsDefData, UnitsDefData\)

```csharp
public static bool operator ==(UnitsDefData x1, UnitsDefData x2)
```

#### Parameters

`x1` [UnitsDefData](OpenTD.UnitsDefData.md)

`x2` [UnitsDefData](OpenTD.UnitsDefData.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \!=\(UnitsDefData, UnitsDefData\)

```csharp
public static bool operator !=(UnitsDefData x1, UnitsDefData x2)
```

#### Parameters

`x1` [UnitsDefData](OpenTD.UnitsDefData.md)

`x2` [UnitsDefData](OpenTD.UnitsDefData.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


