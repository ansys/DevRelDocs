#  Class ModuleInfo

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the module information.

```csharp
public class ModuleInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ModuleInfo](VM.Managed.DAFUL.Pre.ModuleInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Pre_ModuleInfo__ctor"></a> ModuleInfo\(\)

```csharp
public ModuleInfo()
```

## Methods

### <a id="VM_Managed_DAFUL_Pre_ModuleInfo_GetAllModules"></a> GetAllModules\(\)

Gets or sets the modules.

```csharp
public static Dictionary<string, Module> GetAllModules()
```

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [Module](VM.Managed.DAFUL.Pre.Module.md)\>

The modules.

### <a id="VM_Managed_DAFUL_Pre_ModuleInfo_LoadAllModuleFiles_System_String_"></a> LoadAllModuleFiles\(string\)

Loads the al module files.

```csharp
public static void LoadAllModuleFiles(string strModuleDir)
```

#### Parameters

`strModuleDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR module dir.

