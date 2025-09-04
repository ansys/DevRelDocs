#  Class JournalParameter

Namespace: [VM.Managed.Operation](VM.Managed.Operation.md)  
Assembly: VMAppCore.dll  

Journal parameter struct

```csharp
public class JournalParameter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[JournalParameter](VM.Managed.Operation.JournalParameter.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Operation_JournalParameter__ctor_System_Xml_XmlNode_System_String_System_String_"></a> JournalParameter\(XmlNode, string, string\)

Initializes a new instance of the <xref href="VM.Managed.Operation.JournalParameter" data-throw-if-not-resolved="false"></xref> struct.

```csharp
public JournalParameter(XmlNode xmlInfo, string journalVersion, string currentVersion)
```

#### Parameters

`xmlInfo` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The XML information.

`journalVersion` [string](https://learn.microsoft.com/dotnet/api/system.string)

The journal version.

`currentVersion` [string](https://learn.microsoft.com/dotnet/api/system.string)

The current version.

## Fields

### <a id="VM_Managed_Operation_JournalParameter_CurrentVersion"></a> CurrentVersion

The current version

```csharp
public string CurrentVersion
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Operation_JournalParameter_JournalVersion"></a> JournalVersion

The journal version

```csharp
public string JournalVersion
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Operation_JournalParameter_XmlInfo"></a> XmlInfo

The XML information

```csharp
public XmlNode XmlInfo
```

#### Field Value

 [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

