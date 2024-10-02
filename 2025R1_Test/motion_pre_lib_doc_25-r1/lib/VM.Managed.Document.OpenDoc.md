#  Delegate Document.OpenDoc

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

delegate for open document.

```csharp
public delegate Document Document.OpenDoc(string strFileName, string strRelatedPath, bool bActivate)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strRelatedPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`bActivate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Document](VM.Managed.Document.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

