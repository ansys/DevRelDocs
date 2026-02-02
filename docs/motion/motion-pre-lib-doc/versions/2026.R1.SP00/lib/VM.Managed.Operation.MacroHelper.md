# Class MacroHelper
<a id="VM_Managed_Operation_MacroHelper"></a>

Namespace: [VM.Managed.Operation](VM.Managed.Operation.md)  
Assembly: VMAppCore.dll  

This class is to represent the macro helper.

```csharp
public class MacroHelper
```

#### Inheritance

object ← 
[MacroHelper](VM.Managed.Operation.MacroHelper.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Operation_MacroHelper__ctor"></a> MacroHelper\(\)

```csharp
public MacroHelper()
```

## Fields

### <a id="VM_Managed_Operation_MacroHelper_g_dicKeyToFullNameForDeleting"></a> g\_dicKeyToFullNameForDeleting

```csharp
public static Dictionary<string, string> g_dicKeyToFullNameForDeleting
```

#### Field Value

 Dictionary<string, string\>

## Methods

### <a id="VM_Managed_Operation_MacroHelper_ChangeFullNameToKey_System_String_VM_Managed_Document_"></a> ChangeFullNameToKey\(string, Document\)

```csharp
public static string ChangeFullNameToKey(string strXml, Document doc)
```

#### Parameters

`strXml` string

`doc` [Document](VM.Managed.Document.md)

#### Returns

 string

### <a id="VM_Managed_Operation_MacroHelper_ChangeFullNameToKey_System_String_"></a> ChangeFullNameToKey\(string\)

```csharp
public static string ChangeFullNameToKey(string strXml)
```

#### Parameters

`strXml` string

#### Returns

 string

### <a id="VM_Managed_Operation_MacroHelper_ChangeKeyToFullName_System_String_VM_Managed_Document_"></a> ChangeKeyToFullName\(string, Document\)

```csharp
public static string ChangeKeyToFullName(string strXml, Document doc)
```

#### Parameters

`strXml` string

`doc` [Document](VM.Managed.Document.md)

#### Returns

 string

### <a id="VM_Managed_Operation_MacroHelper_ChangeKeyToFullName_System_String_"></a> ChangeKeyToFullName\(string\)

```csharp
public static string ChangeKeyToFullName(string strXml)
```

#### Parameters

`strXml` string

#### Returns

 string

### <a id="VM_Managed_Operation_MacroHelper_ChangeKeyToFullNameCore_System_Xml_XmlNode_System_Boolean_VM_Models_Pre_IDocument_"></a> ChangeKeyToFullNameCore\(XmlNode, bool, IDocument\)

```csharp
public static void ChangeKeyToFullNameCore(XmlNode nodeXml, bool bReverse, IDocument doc)
```

#### Parameters

`nodeXml` XmlNode

`bReverse` bool

`doc` IDocument

### <a id="VM_Managed_Operation_MacroHelper_CreateEntityDictionary_VM_Managed_ObjectBase_"></a> CreateEntityDictionary\(ObjectBase\)

```csharp
public static Dictionary<string, string> CreateEntityDictionary(ObjectBase entity)
```

#### Parameters

`entity` [ObjectBase](VM.Managed.ObjectBase.md)

#### Returns

 Dictionary<string, string\>

### <a id="VM_Managed_Operation_MacroHelper_GetFullNameFromKey_VM_Managed_ObjectBase_"></a> GetFullNameFromKey\(ObjectBase\)

```csharp
public static string GetFullNameFromKey(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

#### Returns

 string

### <a id="VM_Managed_Operation_MacroHelper_ModifyEntityDictionary_VM_Managed_ObjectBase_"></a> ModifyEntityDictionary\(ObjectBase\)

```csharp
public static Dictionary<string, string> ModifyEntityDictionary(ObjectBase entity)
```

#### Parameters

`entity` [ObjectBase](VM.Managed.ObjectBase.md)

#### Returns

 Dictionary<string, string\>

