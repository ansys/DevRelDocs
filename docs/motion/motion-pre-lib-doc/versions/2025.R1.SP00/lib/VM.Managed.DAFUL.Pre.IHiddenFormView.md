#  Interface IHiddenFormView

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This interface is to represent the hidden form view.

```csharp
public interface IHiddenFormView
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_Pre_IHiddenFormView_ClearUserControl"></a> ClearUserControl\(\)

Clears the user control.

```csharp
void ClearUserControl()
```

### <a id="VM_Managed_DAFUL_Pre_IHiddenFormView_Fit"></a> Fit\(\)

Fits this instance.

```csharp
void Fit()
```

### <a id="VM_Managed_DAFUL_Pre_IHiddenFormView_GetActiveDesignType"></a> GetActiveDesignType\(\)

Updates the active user control.

```csharp
string GetActiveDesignType()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

Design Type

### <a id="VM_Managed_DAFUL_Pre_IHiddenFormView_OnButtonDown_System_Windows_Forms_MouseEventArgs_"></a> OnButtonDown\(MouseEventArgs\)

Called when [button down].

```csharp
void OnButtonDown(MouseEventArgs arg)
```

#### Parameters

`arg` [MouseEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.forms.mouseeventargs)

The <xref href="System.Windows.Forms.MouseEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_Pre_IHiddenFormView_OnButtonUp_System_Windows_Forms_MouseEventArgs_"></a> OnButtonUp\(MouseEventArgs\)

Called when [button up].

```csharp
void OnButtonUp(MouseEventArgs arg)
```

#### Parameters

`arg` [MouseEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.forms.mouseeventargs)

The <xref href="System.Windows.Forms.MouseEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_Pre_IHiddenFormView_SelectTabInUserControl_System_Int32_"></a> SelectTabInUserControl\(int\)

Selects the tab in user control.

```csharp
void SelectTabInUserControl(int nIdx)
```

#### Parameters

`nIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Index of the n.

### <a id="VM_Managed_DAFUL_Pre_IHiddenFormView_SetActiveUserControl_System_String_System_Object_"></a> SetActiveUserControl\(string, object\)

Sets the active user control.

```csharp
void SetActiveUserControl(string strType, object obj)
```

#### Parameters

`strType` [string](https://learn.microsoft.com/dotnet/api/system.string)

Type of the string.

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

### <a id="VM_Managed_DAFUL_Pre_IHiddenFormView_ShowTabInDesigner_System_Int32_System_Boolean_"></a> ShowTabInDesigner\(int, bool\)

Shows the tab in designer.

```csharp
void ShowTabInDesigner(int nIdx, bool bShow)
```

#### Parameters

`nIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Index of the n.

`bShow` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b show].

### <a id="VM_Managed_DAFUL_Pre_IHiddenFormView_UpdateUserControl_System_Object_"></a> UpdateUserControl\(object\)

Updates the user control.

```csharp
void UpdateUserControl(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

### <a id="VM_Managed_DAFUL_Pre_IHiddenFormView_UpdateView"></a> UpdateView\(\)

Updates the view.

```csharp
void UpdateView()
```

