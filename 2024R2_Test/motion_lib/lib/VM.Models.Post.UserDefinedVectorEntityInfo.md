# <a id="VM_Models_Post_UserDefinedVectorEntityInfo"></a> Class UserDefinedVectorEntityInfo

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class UserDefinedVectorEntityInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UserDefinedVectorEntityInfo](VM.Models.Post.UserDefinedVectorEntityInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_UserDefinedVectorEntityInfo__ctor_System_String_System_String___VM_Models_Post_ObjectType_"></a> UserDefinedVectorEntityInfo\(string, string\[\], ObjectType\)

```csharp
public UserDefinedVectorEntityInfo(string vectorName, string[] parentNames, ObjectType type)
```

#### Parameters

`vectorName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`parentNames` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

`type` [ObjectType](VM.Models.Post.ObjectType.md)

## Properties

### <a id="VM_Models_Post_UserDefinedVectorEntityInfo_ParentNames"></a> ParentNames

```csharp
public string[] ParentNames { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Models_Post_UserDefinedVectorEntityInfo_Type"></a> Type

```csharp
public ObjectType Type { get; }
```

#### Property Value

 [ObjectType](VM.Models.Post.ObjectType.md)

### <a id="VM_Models_Post_UserDefinedVectorEntityInfo_VectorName"></a> VectorName

```csharp
public string VectorName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

