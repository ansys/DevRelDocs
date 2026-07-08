# Interface IPropPage

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

### CheckFileProperty\(\)

```csharp
bool CheckFileProperty()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetResult\(XmlDocument\)

```csharp
bool GetResult(XmlDocument dom)
```

#### Parameters

`dom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetResultForMulti\(XmlDocument\)

```csharp
bool GetResultForMulti(XmlDocument dom)
```

#### Parameters

`dom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Redraw\(double\)

```csharp
void Redraw(double dIconSize)
```

#### Parameters

`dIconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

### SetInputData\(XmlDocument\)

```csharp
bool SetInputData(XmlDocument dom)
```

#### Parameters

`dom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetInputDataForMulti\(XmlDocument\)

```csharp
bool SetInputDataForMulti(XmlDocument dom)
```

#### Parameters

`dom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetPropertyXPath\(string\)

```csharp
void SetPropertyXPath(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetPropertyXPathPosition\(string\)

```csharp
void SetPropertyXPathPosition(string strPosition)
```

#### Parameters

`strPosition` [string](https://learn.microsoft.com/dotnet/api/system.string)

### UpdatePage\(\)

```csharp
void UpdatePage()
```


