#  Interface INavigatorPage

Namespace: [VM.NX.App.Navigator](VM.NX.App.Navigator.md)  
Assembly: VMDIDef.dll  

```csharp
public interface INavigatorPage
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_NX_App_Navigator_INavigatorPage_DoingImport"></a> DoingImport

```csharp
bool DoingImport { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_App_Navigator_INavigatorPage_SkipChildAdded"></a> SkipChildAdded

```csharp
bool SkipChildAdded { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_NX_App_Navigator_INavigatorPage_Add_System_String_"></a> Add\(string\)

```csharp
bool Add(string strAddInfo)
```

#### Parameters

`strAddInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_App_Navigator_INavigatorPage_ClearSelectNavItem"></a> ClearSelectNavItem\(\)

```csharp
bool ClearSelectNavItem()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_App_Navigator_INavigatorPage_Initialize_System_Xml_XmlDocument_"></a> Initialize\(XmlDocument\)

```csharp
bool Initialize(XmlDocument dom)
```

#### Parameters

`dom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_App_Navigator_INavigatorPage_MultipleAdd_System_String_"></a> MultipleAdd\(string\)

```csharp
bool MultipleAdd(string strAddInfo)
```

#### Parameters

`strAddInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_App_Navigator_INavigatorPage_Remove_System_String_"></a> Remove\(string\)

```csharp
bool Remove(string strRemoveInfo)
```

#### Parameters

`strRemoveInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_App_Navigator_INavigatorPage_Rename_System_String_"></a> Rename\(string\)

```csharp
bool Rename(string strRenameInfo)
```

#### Parameters

`strRenameInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_App_Navigator_INavigatorPage_SelectRoot"></a> SelectRoot\(\)

```csharp
void SelectRoot()
```

### <a id="VM_NX_App_Navigator_INavigatorPage_Update_System_String_"></a> Update\(string\)

```csharp
bool Update(string strUpdateInfo)
```

#### Parameters

`strUpdateInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_App_Navigator_INavigatorPage_UpdateAllTree_System_String_"></a> UpdateAllTree\(string\)

```csharp
bool UpdateAllTree(string strUpdateInfo)
```

#### Parameters

`strUpdateInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_App_Navigator_INavigatorPage_UpdateEnable_System_String_"></a> UpdateEnable\(string\)

```csharp
bool UpdateEnable(string strUpdateInfo)
```

#### Parameters

`strUpdateInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_App_Navigator_INavigatorPage_UpdateIconForNodalModal_System_String_"></a> UpdateIconForNodalModal\(string\)

```csharp
bool UpdateIconForNodalModal(string strXml)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_App_Navigator_INavigatorPage_UpdateRootName_System_String_"></a> UpdateRootName\(string\)

```csharp
void UpdateRootName(string strUpdateInfo)
```

#### Parameters

`strUpdateInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

