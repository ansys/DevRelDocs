# Interface INavigatorItem
<a id="VM_Managed_INavigatorItem"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the navigator item.

```csharp
public interface INavigatorItem
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_INavigatorItem_GetModelNavigateorRenameRemoveInfo"></a> GetModelNavigateorRenameRemoveInfo\(\)

Gets the model navigator's rename or remove information.

```csharp
string GetModelNavigateorRenameRemoveInfo()
```

#### Returns

 string

The model navigator's rename or remove information.

### <a id="VM_Managed_INavigatorItem_GetModelNavigatorInformation"></a> GetModelNavigatorInformation\(\)

Gets the model navigator information.

```csharp
string GetModelNavigatorInformation()
```

#### Returns

 string

The model navigator information.

### <a id="VM_Managed_INavigatorItem_GetModelNavigatorInformationBase_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationBase\(XmlDocument, XmlElement, bool\)

Gets the model navigator base information.

```csharp
bool GetModelNavigatorInformationBase(XmlDocument xmlDom, XmlElement xmlRootEle, bool bHasChild)
```

#### Parameters

`xmlDom` XmlDocument

The navigator information xml.

`xmlRootEle` XmlElement

The navigator information xml root element.

`bHasChild` bool

<code>true</code> if has a child object; otherwise, <code>false</code>.

#### Returns

 bool

### <a id="VM_Managed_INavigatorItem_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

Gets the model navigator information implementation.

```csharp
bool GetModelNavigatorInformationImpl(XmlDocument xmlDom, XmlElement xmlRootEle, bool bHasChild)
```

#### Parameters

`xmlDom` XmlDocument

The navigator information xml.

`xmlRootEle` XmlElement

The navigator information xml root element.

`bHasChild` bool

<code>true</code> if has a child object; otherwise, <code>false</code>.

#### Returns

 bool

