#  Interface IPickerUI

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

### <a id="VM_Managed_DAFUL_Pre_IPickerUI_CloseWindow"></a> CloseWindow\(\)

Closes this window.

```csharp
void CloseWindow()
```

### <a id="VM_Managed_DAFUL_Pre_IPickerUI_GetPickerUI_System_String_System_Boolean_"></a> GetPickerUI\(string, bool\)

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

### <a id="VM_Managed_DAFUL_Pre_IPickerUI_OnCancel"></a> OnCancel\(\)

Called when [cancel].

```csharp
void OnCancel()
```

### <a id="VM_Managed_DAFUL_Pre_IPickerUI_OnViewHide"></a> OnViewHide\(\)

Called when [view hide].

```csharp
void OnViewHide()
```

### <a id="VM_Managed_DAFUL_Pre_IPickerUI_OnViewShow"></a> OnViewShow\(\)

Called when [view show].

```csharp
void OnViewShow()
```

### <a id="VM_Managed_DAFUL_Pre_IPickerUI_SetTitleName_System_String_"></a> SetTitleName\(string\)

Sets the name of the title.

```csharp
void SetTitleName(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

### <a id="VM_Managed_DAFUL_Pre_IPickerUI_UpdateWindow"></a> UpdateWindow\(\)

Updates the window.

```csharp
void UpdateWindow()
```

