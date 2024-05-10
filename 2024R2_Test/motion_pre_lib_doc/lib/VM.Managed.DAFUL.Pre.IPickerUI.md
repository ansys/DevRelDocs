# Interface IPickerUI

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This interface is to represent the picker UI

```csharp
public interface IPickerUI
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### CloseWindow\(\)

Closes this window.

```csharp
void CloseWindow()
```

### GetPickerUI\(string, bool\)

Gets the picker UI.

```csharp
UserControl GetPickerUI(string strInformation, bool bUseAutoPick)
```

#### Parameters

`strInformation` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR information.

`bUseAutoPick` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use auto pick].

#### Returns

 [UserControl](https://learn.microsoft.com/dotnet/api/system.windows.forms.usercontrol)

### OnCancel\(\)

Called when [cancel].

```csharp
void OnCancel()
```

### OnViewHide\(\)

Called when [view hide].

```csharp
void OnViewHide()
```

### OnViewShow\(\)

Called when [view show].

```csharp
void OnViewShow()
```

### SetTitleName\(string\)

Sets the name of the title.

```csharp
void SetTitleName(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

### UpdateWindow\(\)

Updates the window.

```csharp
void UpdateWindow()
```


