#  Interface INavigator

Namespace: [VM.NX.App.Navigator](VM.NX.App.Navigator.md)  
Assembly: VMDIDef.dll  

```csharp
public interface INavigator
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_NX_App_Navigator_INavigator_Activate_System_String_"></a> Activate\(string\)

```csharp
void Activate(string strPageName)
```

#### Parameters

`strPageName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_NX_App_Navigator_INavigator_GetPage_System_String_"></a> GetPage\(string\)

```csharp
INavigatorPage GetPage(string strPageName)
```

#### Parameters

`strPageName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [INavigatorPage](VM.NX.App.Navigator.INavigatorPage.md)

