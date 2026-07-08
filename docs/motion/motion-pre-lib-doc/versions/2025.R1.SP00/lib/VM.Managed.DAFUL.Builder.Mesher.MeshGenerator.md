#  Class MeshGenerator

Namespace: [VM.Managed.DAFUL.Builder.Mesher](VM.Managed.DAFUL.Builder.Mesher.md)  
Assembly: VMBldMesher.dll  

```csharp
public class MeshGenerator : IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MeshGenerator](VM.Managed.DAFUL.Builder.Mesher.MeshGenerator.md)

#### Implements

IBuilder

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Mesher_MeshGenerator__ctor"></a> MeshGenerator\(\)

```csharp
public MeshGenerator()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Mesher_MeshGenerator_AddToModelFlag"></a> AddToModelFlag

```csharp
public bool AddToModelFlag { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Mesher_MeshGenerator_BuildObject"></a> BuildObject

```csharp
public ObjectBase BuildObject { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_Mesher_MeshGenerator_Connectable"></a> Connectable

```csharp
public IHasBuilder Connectable { get; }
```

#### Property Value

 IHasBuilder

### <a id="VM_Managed_DAFUL_Builder_Mesher_MeshGenerator_CreateGroupFlag"></a> CreateGroupFlag

```csharp
public bool CreateGroupFlag { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Mesher_MeshGenerator_GroupName"></a> GroupName

```csharp
public string GroupName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_Mesher_MeshGenerator_ImportMeshFlag"></a> ImportMeshFlag

```csharp
public bool ImportMeshFlag { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Mesher_MeshGenerator_InputArray"></a> InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_Mesher_MeshGenerator_MeshFilePath"></a> MeshFilePath

```csharp
public string MeshFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_Mesher_MeshGenerator_NodalBodyName"></a> NodalBodyName

```csharp
public string NodalBodyName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_Mesher_MeshGenerator_Parameters"></a> Parameters

```csharp
public PickedResult[] Parameters { get; set; }
```

#### Property Value

 PickedResult\[\]

## Methods

### <a id="VM_Managed_DAFUL_Builder_Mesher_MeshGenerator_Build_VM_Managed_Document_"></a> Build\(Document\)

```csharp
public void Build(Document docToAdd)
```

#### Parameters

`docToAdd` Document

### <a id="VM_Managed_DAFUL_Builder_Mesher_MeshGenerator_Build_VM_Managed_Document_System_Collections_Generic_List_System_String__"></a> Build\(Document, List<string\>\)

```csharp
public void Build(Document docToAdd, List<string> lstSetPointKeys)
```

#### Parameters

`docToAdd` Document

`lstSetPointKeys` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_DAFUL_Builder_Mesher_MeshGenerator_Success"></a> Success\(\)

```csharp
public bool Success()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Mesher_MeshGenerator_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

