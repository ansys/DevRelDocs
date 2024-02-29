# <a id="VM_Models_Post_SaveService"></a> Class SaveService

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public static class SaveService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SaveService](VM.Models.Post.SaveService.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_SaveService_CanWork_System_String_System_Int32__"></a> CanWork\(string, out int\)

```csharp
public static bool CanWork(string path, out int version)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

`version` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_SaveService_Load_System_String_System_Func_VM_Models_Post_IAnimationViewer__System_String__"></a> Load\(string, Func<IAnimationViewer\>, out string\)

```csharp
public static bool Load(string path, Func<IAnimationViewer> viewFactory, out string message)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

`viewFactory` [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[IAnimationViewer](VM.Models.Post.IAnimationViewer.md)\>

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_SaveService_Save_System_String_"></a> Save\(string\)

```csharp
public static void Save(string path)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

