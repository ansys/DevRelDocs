# Class MacroHelper

Namespace: [VM.Managed.Operation](VM.Managed.Operation.md)  
Assembly: VMAppCore.dll  

This class is to represent the macro helper.

```csharp
public class MacroHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MacroHelper](VM.Managed.Operation.MacroHelper.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### MacroHelper\(\)

```csharp
public MacroHelper()
```

## Fields

### g\_dicKeyToFullNameForDeleting

```csharp
public static Dictionary<string, string> g_dicKeyToFullNameForDeleting
```

#### Field Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### ChangeFullNameToKey\(string, Document\)

```csharp
public static string ChangeFullNameToKey(string strXml, Document doc)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

`doc` [Document](VM.Managed.Document.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ChangeFullNameToKey\(string\)

```csharp
public static string ChangeFullNameToKey(string strXml)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ChangeKeyToFullName\(string, Document\)

```csharp
public static string ChangeKeyToFullName(string strXml, Document doc)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

`doc` [Document](VM.Managed.Document.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ChangeKeyToFullName\(string\)

```csharp
public static string ChangeKeyToFullName(string strXml)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ChangeKeyToFullNameCore\(XmlNode, bool, IDocument\)

```csharp
public static void ChangeKeyToFullNameCore(XmlNode nodeXml, bool bReverse, IDocument doc)
```

#### Parameters

`nodeXml` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

`bReverse` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`doc` IDocument

### CreateEntityDictionary\(ObjectBase\)

```csharp
public static Dictionary<string, string> CreateEntityDictionary(ObjectBase entity)
```

#### Parameters

`entity` [ObjectBase](VM.Managed.ObjectBase.md)

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### GetFullNameFromKey\(ObjectBase\)

```csharp
public static string GetFullNameFromKey(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ModifyEntityDictionary\(ObjectBase\)

```csharp
public static Dictionary<string, string> ModifyEntityDictionary(ObjectBase entity)
```

#### Parameters

`entity` [ObjectBase](VM.Managed.ObjectBase.md)

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>


