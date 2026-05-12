#  Class DlgFactoryBase

Namespace: [VM.NX.Dialog.Factory](VM.NX.Dialog.Factory.md)  
Assembly: VMDM.dll  

```csharp
public abstract class DlgFactoryBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DlgFactoryBase](VM.NX.Dialog.Factory.DlgFactoryBase.md)

#### Derived

[PropertyDlgFactory](VM.NX.Dialog.Factory.PropertyDlgFactory.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_NX_Dialog_Factory_DlgFactoryBase__ctor_System_String_System_String_"></a> DlgFactoryBase\(string, string\)

```csharp
protected DlgFactoryBase(string strDlgFileDirectory, string strDlgDirectory)
```

#### Parameters

`strDlgFileDirectory` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strDlgDirectory` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Fields

### <a id="VM_NX_Dialog_Factory_DlgFactoryBase_g_dicPropertyMap"></a> g\_dicPropertyMap

```csharp
protected static Dictionary<string, string> g_dicPropertyMap
```

#### Field Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### <a id="VM_NX_Dialog_Factory_DlgFactoryBase_GetAssemblyNameFromCommand_System_String_"></a> GetAssemblyNameFromCommand\(string\)

```csharp
protected DlgFactoryBase.AssemblyInfo GetAssemblyNameFromCommand(string strCommand)
```

#### Parameters

`strCommand` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [DlgFactoryBase](VM.NX.Dialog.Factory.DlgFactoryBase.md).[AssemblyInfo](VM.NX.Dialog.Factory.DlgFactoryBase.AssemblyInfo.md)

### <a id="VM_NX_Dialog_Factory_DlgFactoryBase_GetTypeInfo_System_String_VM_NX_Dialog_Factory_DlgFactoryBase_AssemblyInfo_"></a> GetTypeInfo\(string, AssemblyInfo\)

```csharp
protected Type GetTypeInfo(string strCommand, DlgFactoryBase.AssemblyInfo assem)
```

#### Parameters

`strCommand` [string](https://learn.microsoft.com/dotnet/api/system.string)

`assem` [DlgFactoryBase](VM.NX.Dialog.Factory.DlgFactoryBase.md).[AssemblyInfo](VM.NX.Dialog.Factory.DlgFactoryBase.AssemblyInfo.md)

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="VM_NX_Dialog_Factory_DlgFactoryBase_GetTypeInfo_System_String_"></a> GetTypeInfo\(string\)

```csharp
protected Type GetTypeInfo(string strCommand)
```

#### Parameters

`strCommand` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="VM_NX_Dialog_Factory_DlgFactoryBase_IsUseDialog_System_String_"></a> IsUseDialog\(string\)

```csharp
public bool IsUseDialog(string strTypeName)
```

#### Parameters

`strTypeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

