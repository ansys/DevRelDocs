# <a id="OpenTD_Results_Dataset_UDFADescriptor"></a> Class UDFADescriptor

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Describes a user-defined Fortran array (UDFA)

```csharp
public class UDFADescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UDFADescriptor](OpenTD.Results.Dataset.UDFADescriptor.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Results_Dataset_UDFADescriptor__ctor_System_String_OpenTD_Results_Dataset_UDFAType_System_Int64_OpenTD_Results_Dataset_DataSubtype_ValueTypes_"></a> UDFADescriptor\(string, UDFAType, long, ValueTypes\)

```csharp
public UDFADescriptor(string name, UDFAType udfaType, long size, DataSubtype.ValueTypes valueType)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`udfaType` [UDFAType](OpenTD.Results.Dataset.UDFAType.md)

`size` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`valueType` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md).[ValueTypes](OpenTD.Results.Dataset.DataSubtype.ValueTypes.md)

## Properties

### <a id="OpenTD_Results_Dataset_UDFADescriptor_Name"></a> Name

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_UDFADescriptor_Size"></a> Size

```csharp
public long Size { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_UDFADescriptor_Subtype"></a> Subtype

```csharp
public DataSubtype Subtype { get; }
```

#### Property Value

 [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

### <a id="OpenTD_Results_Dataset_UDFADescriptor_UDFAType"></a> UDFAType

```csharp
public UDFAType UDFAType { get; }
```

#### Property Value

 [UDFAType](OpenTD.Results.Dataset.UDFAType.md)

## Methods

### <a id="OpenTD_Results_Dataset_UDFADescriptor_Equals_System_Object_"></a> Equals\(object\)

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

### <a id="OpenTD_Results_Dataset_UDFADescriptor_GetHashCode"></a> GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

