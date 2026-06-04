#  Interface IGeneralContact

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

Interface for the general contact.

```csharp
public interface IGeneralContact
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_IGeneralContact_IsSphereTreatedAsSurface_VM_Managed_DAFUL_IContactable_"></a> IsSphereTreatedAsSurface\(IContactable\)

Get flag whether the faceset's geometry type is sphere and it will be ignored or not.

```csharp
bool IsSphereTreatedAsSurface(IContactable faceset)
```

#### Parameters

`faceset` [IContactable](VM.Managed.DAFUL.IContactable.md)

The faceset.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if faceset's geometry type is sphere and it will be ignored; otherwise, <code>false</code>.

