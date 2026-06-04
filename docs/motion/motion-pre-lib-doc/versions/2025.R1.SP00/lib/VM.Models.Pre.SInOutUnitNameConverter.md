#  Class SInOutUnitNameConverter

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public static class SInOutUnitNameConverter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SInOutUnitNameConverter](VM.Models.Pre.SInOutUnitNameConverter.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Pre_SInOutUnitNameConverter_ControlToSInOutUnitName_System_String_VM_Models_Pre_IDocument_"></a> ControlToSInOutUnitName\(string, IDocument\)

```csharp
public static UnitName ControlToSInOutUnitName(string sInOutUnitName, IDocument document)
```

#### Parameters

`sInOutUnitName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`document` [IDocument](VM.Models.Pre.IDocument.md)

#### Returns

 [UnitName](VM.Models.Pre.UnitName.md)

### <a id="VM_Models_Pre_SInOutUnitNameConverter_GetSInOutTypeName_VM_Models_Pre_UnitName_System_String_"></a> GetSInOutTypeName\(UnitName, string\)

```csharp
public static string GetSInOutTypeName(UnitName sInOutUnitName, string strCausality)
```

#### Parameters

`sInOutUnitName` [UnitName](VM.Models.Pre.UnitName.md)

`strCausality` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_SInOutUnitNameConverter_GetSInOutUnitName_VM_Models_Pre_UnitName_VM_Models_Pre_IDocument_"></a> GetSInOutUnitName\(UnitName, IDocument\)

```csharp
public static string GetSInOutUnitName(UnitName sInOutUnitName, IDocument document)
```

#### Parameters

`sInOutUnitName` [UnitName](VM.Models.Pre.UnitName.md)

`document` [IDocument](VM.Models.Pre.IDocument.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_SInOutUnitNameConverter_GetSInOutUnitNames_VM_Models_Pre_IDocument_System_String_"></a> GetSInOutUnitNames\(IDocument, string\)

```csharp
public static object GetSInOutUnitNames(IDocument document, string type)
```

#### Parameters

`document` [IDocument](VM.Models.Pre.IDocument.md)

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="VM_Models_Pre_SInOutUnitNameConverter_SInOutUnitNameToControl_System_String_VM_Models_Pre_IDocument_"></a> SInOutUnitNameToControl\(string, IDocument\)

```csharp
public static string SInOutUnitNameToControl(string sInOutUnitName, IDocument document)
```

#### Parameters

`sInOutUnitName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`document` [IDocument](VM.Models.Pre.IDocument.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

