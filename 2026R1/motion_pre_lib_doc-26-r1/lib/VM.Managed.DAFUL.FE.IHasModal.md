# Interface IHasModal
<a id="VM_Managed_DAFUL_FE_IHasModal"></a>

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This interface is to represent the object that has modal.

```csharp
public interface IHasModal
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_FE_IHasModal_GetModalPath"></a> GetModalPath\(\)

Gets the modal information.

```csharp
string GetModalPath()
```

#### Returns

 string

### <a id="VM_Managed_DAFUL_FE_IHasModal_GetModes"></a> GetModes\(\)

Gets the Modes.

```csharp
ObjectBase[] GetModes()
```

#### Returns

 ObjectBase\[\]

The modes.

### <a id="VM_Managed_DAFUL_FE_IHasModal_SetModalPath_System_String_System_String_"></a> SetModalPath\(string, string\)

Sets the modal information.

```csharp
void SetModalPath(string strPath, string strDocumentDir)
```

#### Parameters

`strPath` string

The modal absolute path

`strDocumentDir` string

The document directory

### <a id="VM_Managed_DAFUL_FE_IHasModal_SetModalPath_System_String_"></a> SetModalPath\(string\)

Sets the modal information.

```csharp
void SetModalPath(string strPath)
```

#### Parameters

`strPath` string

The modal absolute path

