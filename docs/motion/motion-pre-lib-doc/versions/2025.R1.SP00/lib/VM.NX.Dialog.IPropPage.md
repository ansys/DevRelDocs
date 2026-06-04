#  Interface IPropPage

Namespace: [VM.NX.Dialog](VM.NX.Dialog.md)  
Assembly: VMDIDef.dll  

```csharp
public interface IPropPage
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_NX_Dialog_IPropPage_CheckFileProperty"></a> CheckFileProperty\(\)

```csharp
bool CheckFileProperty()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_IPropPage_GetResult_System_Xml_XmlDocument_"></a> GetResult\(XmlDocument\)

```csharp
bool GetResult(XmlDocument dom)
```

#### Parameters

`dom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_IPropPage_GetResultForMulti_System_Xml_XmlDocument_"></a> GetResultForMulti\(XmlDocument\)

```csharp
bool GetResultForMulti(XmlDocument dom)
```

#### Parameters

`dom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_IPropPage_Redraw_System_Double_"></a> Redraw\(double\)

```csharp
void Redraw(double dIconSize)
```

#### Parameters

`dIconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_NX_Dialog_IPropPage_SetInputData_System_Xml_XmlDocument_"></a> SetInputData\(XmlDocument\)

```csharp
bool SetInputData(XmlDocument dom)
```

#### Parameters

`dom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_IPropPage_SetInputDataForMulti_System_Xml_XmlDocument_"></a> SetInputDataForMulti\(XmlDocument\)

```csharp
bool SetInputDataForMulti(XmlDocument dom)
```

#### Parameters

`dom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_IPropPage_SetPropertyXPath_System_String_"></a> SetPropertyXPath\(string\)

```csharp
void SetPropertyXPath(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_NX_Dialog_IPropPage_SetPropertyXPathPosition_System_String_"></a> SetPropertyXPathPosition\(string\)

```csharp
void SetPropertyXPathPosition(string strPosition)
```

#### Parameters

`strPosition` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_NX_Dialog_IPropPage_UpdatePage"></a> UpdatePage\(\)

```csharp
void UpdatePage()
```

