# Interface INavigatorPage

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

### DoingImport

```csharp
bool DoingImport { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SkipChildAdded

```csharp
bool SkipChildAdded { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### Add\(string\)

```csharp
bool Add(string strAddInfo)
```

#### Parameters

`strAddInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ClearSelectNavItem\(\)

```csharp
bool ClearSelectNavItem()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Initialize\(XmlDocument\)

```csharp
bool Initialize(XmlDocument dom)
```

#### Parameters

`dom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MultipleAdd\(string\)

```csharp
bool MultipleAdd(string strAddInfo)
```

#### Parameters

`strAddInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Remove\(string\)

```csharp
bool Remove(string strRemoveInfo)
```

#### Parameters

`strRemoveInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Rename\(string\)

```csharp
bool Rename(string strRenameInfo)
```

#### Parameters

`strRenameInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SelectRoot\(\)

```csharp
void SelectRoot()
```

### Update\(string\)

```csharp
bool Update(string strUpdateInfo)
```

#### Parameters

`strUpdateInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UpdateAllTree\(string\)

```csharp
bool UpdateAllTree(string strUpdateInfo)
```

#### Parameters

`strUpdateInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UpdateEnable\(string\)

```csharp
bool UpdateEnable(string strUpdateInfo)
```

#### Parameters

`strUpdateInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UpdateIconForNodalModal\(string\)

```csharp
bool UpdateIconForNodalModal(string strXml)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UpdateRootName\(string\)

```csharp
void UpdateRootName(string strUpdateInfo)
```

#### Parameters

`strUpdateInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)


