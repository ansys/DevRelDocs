# <a id="OpenTD_UnitsDefData"></a> Class UnitsDefData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

UnitsDefData is used to create units with arbitrary combinations of dimensions.

```csharp
public class UnitsDefData : IEquatable<UnitsDefData>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UnitsDefData](OpenTD.UnitsDefData.md)

#### Implements

[IEquatable<UnitsDefData\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_UnitsDefData__ctor"></a> UnitsDefData\(\)

Initializes a new instance of the <xref href="OpenTD.UnitsDefData" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UnitsDefData()
```

### <a id="OpenTD_UnitsDefData__ctor_OpenTD_UnitsDefData_"></a> UnitsDefData\(UnitsDefData\)

Copy constructor.

```csharp
public UnitsDefData(UnitsDefData source)
```

#### Parameters

`source` [UnitsDefData](OpenTD.UnitsDefData.md)

## Properties

### <a id="OpenTD_UnitsDefData_multiUnitsTypes"></a> multiUnitsTypes

```csharp
public List<int> multiUnitsTypes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="OpenTD_UnitsDefData_multiUnitsUnits"></a> multiUnitsUnits

```csharp
public List<int> multiUnitsUnits { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="OpenTD_UnitsDefData_numer"></a> numer

```csharp
public List<bool> numer { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

## Methods

### <a id="OpenTD_UnitsDefData_Equals_OpenTD_UnitsDefData_"></a> Equals\(UnitsDefData\)

Indicates whether the current object is equal to another object of the same type.

```csharp
public bool Equals(UnitsDefData x)
```

#### Parameters

`x` [UnitsDefData](OpenTD.UnitsDefData.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="OpenTD_UnitsDefData_Equals_System_Object_"></a> Equals\(object\)

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object to compare with the current object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the specified object  is equal to the current object; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="OpenTD_UnitsDefData_GetHashCode"></a> GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

## Operators

### <a id="OpenTD_UnitsDefData_op_Equality_OpenTD_UnitsDefData_OpenTD_UnitsDefData_"></a> operator ==\(UnitsDefData, UnitsDefData\)

```csharp
public static bool operator ==(UnitsDefData x1, UnitsDefData x2)
```

#### Parameters

`x1` [UnitsDefData](OpenTD.UnitsDefData.md)

`x2` [UnitsDefData](OpenTD.UnitsDefData.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UnitsDefData_op_Inequality_OpenTD_UnitsDefData_OpenTD_UnitsDefData_"></a> operator \!=\(UnitsDefData, UnitsDefData\)

```csharp
public static bool operator !=(UnitsDefData x1, UnitsDefData x2)
```

#### Parameters

`x1` [UnitsDefData](OpenTD.UnitsDefData.md)

`x2` [UnitsDefData](OpenTD.UnitsDefData.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

