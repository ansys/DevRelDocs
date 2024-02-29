# <a id="VM_Models_Post_DataSource_UserDefinedVectorGenerationInfo"></a> Class UserDefinedVectorGenerationInfo

Namespace: [VM.Models.Post.DataSource](VM.Models.Post.DataSource.md)  
Assembly: VM.Models.Post.DataSource.dll  

```csharp
public class UserDefinedVectorGenerationInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UserDefinedVectorGenerationInfo](VM.Models.Post.DataSource.UserDefinedVectorGenerationInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_DataSource_UserDefinedVectorGenerationInfo__ctor_System_Int32_VM_Models_Post_ObjectType_System_Collections_Generic_IDictionary_System_String_VM_Models_OutputReader_IVectorDisplayAnimationData__"></a> UserDefinedVectorGenerationInfo\(int, ObjectType, IDictionary<string, IVectorDisplayAnimationData\>\)

```csharp
public UserDefinedVectorGenerationInfo(int uvecIdx, ObjectType type, IDictionary<string, IVectorDisplayAnimationData> infos)
```

#### Parameters

`uvecIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`type` ObjectType

`infos` [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), IVectorDisplayAnimationData\>

## Properties

### <a id="VM_Models_Post_DataSource_UserDefinedVectorGenerationInfo_Infos"></a> Infos

```csharp
public IDictionary<string, IVectorDisplayAnimationData> Infos { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), IVectorDisplayAnimationData\>

### <a id="VM_Models_Post_DataSource_UserDefinedVectorGenerationInfo_Type"></a> Type

```csharp
public ObjectType Type { get; }
```

#### Property Value

 ObjectType

### <a id="VM_Models_Post_DataSource_UserDefinedVectorGenerationInfo_UVECIdx"></a> UVECIdx

```csharp
public int UVECIdx { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

