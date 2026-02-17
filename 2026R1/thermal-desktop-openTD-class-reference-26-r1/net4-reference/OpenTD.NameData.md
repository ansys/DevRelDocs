# <a id="OpenTD_NameData"></a> Class NameData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

A Sinda name, e.g., MAIN.1.

```csharp
[DataContract]
public class NameData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NameData](OpenTD.NameData.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_NameData__ctor"></a> NameData\(\)

Initializes a new instance of the <xref href="OpenTD.NameData" data-throw-if-not-resolved="false"></xref> class.

```csharp
public NameData()
```

### <a id="OpenTD_NameData__ctor_System_String_System_Int32_"></a> NameData\(string, int\)

Initializes a new instance of the <xref href="OpenTD.NameData" data-throw-if-not-resolved="false"></xref> class.

```csharp
public NameData(string submodel, int id)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The submodel.

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The ID.

## Properties

### <a id="OpenTD_NameData_Id"></a> Id

```csharp
[DataMember]
public int Id { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_NameData_Submodel"></a> Submodel

```csharp
[DataMember]
public SubmodelNameData Submodel { get; set; }
```

#### Property Value

 [SubmodelNameData](OpenTD.SubmodelNameData.md)

## Methods

### <a id="OpenTD_NameData_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

