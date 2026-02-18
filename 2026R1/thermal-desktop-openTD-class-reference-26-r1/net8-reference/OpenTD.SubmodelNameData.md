# <a id="OpenTD_SubmodelNameData"></a> Class SubmodelNameData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

A submodel name. Implicitly converts to/from string. Automatically converts to uppercase.

```csharp
public class SubmodelNameData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SubmodelNameData](OpenTD.SubmodelNameData.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_SubmodelNameData__ctor"></a> SubmodelNameData\(\)

Initializes a new instance of the <xref href="OpenTD.SubmodelNameData" data-throw-if-not-resolved="false"></xref> class
with default thermal submodel name.

```csharp
public SubmodelNameData()
```

### <a id="OpenTD_SubmodelNameData__ctor_System_String_"></a> SubmodelNameData\(string\)

Initializes a new instance of the <xref href="OpenTD.SubmodelNameData" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SubmodelNameData(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The submodel name.

## Properties

### <a id="OpenTD_SubmodelNameData_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="OpenTD_SubmodelNameData_Check"></a> Check\(\)

```csharp
public void Check()
```

### <a id="OpenTD_SubmodelNameData_Equals_System_Object_"></a> Equals\(object\)

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

### <a id="OpenTD_SubmodelNameData_GetHashCode"></a> GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### <a id="OpenTD_SubmodelNameData_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## Operators

### <a id="OpenTD_SubmodelNameData_op_Equality_OpenTD_SubmodelNameData_OpenTD_SubmodelNameData_"></a> operator ==\(SubmodelNameData, SubmodelNameData\)

```csharp
public static bool operator ==(SubmodelNameData first, SubmodelNameData second)
```

#### Parameters

`first` [SubmodelNameData](OpenTD.SubmodelNameData.md)

`second` [SubmodelNameData](OpenTD.SubmodelNameData.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_SubmodelNameData_op_Implicit_System_String__OpenTD_SubmodelNameData"></a> implicit operator SubmodelNameData\(string\)

```csharp
public static implicit operator SubmodelNameData(string submodelName)
```

#### Parameters

`submodelName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [SubmodelNameData](OpenTD.SubmodelNameData.md)

### <a id="OpenTD_SubmodelNameData_op_Implicit_OpenTD_SubmodelNameData__System_String"></a> implicit operator string\(SubmodelNameData\)

```csharp
public static implicit operator string(SubmodelNameData s)
```

#### Parameters

`s` [SubmodelNameData](OpenTD.SubmodelNameData.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_SubmodelNameData_op_Inequality_OpenTD_SubmodelNameData_OpenTD_SubmodelNameData_"></a> operator \!=\(SubmodelNameData, SubmodelNameData\)

```csharp
public static bool operator !=(SubmodelNameData first, SubmodelNameData second)
```

#### Parameters

`first` [SubmodelNameData](OpenTD.SubmodelNameData.md)

`second` [SubmodelNameData](OpenTD.SubmodelNameData.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

