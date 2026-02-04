# Interface IOperationStatus
<a id="VM_Managed_DAFUL_Pre_IOperationStatus"></a>

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This interface is to represent the operation status.

```csharp
public interface IOperationStatus
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_Pre_IOperationStatus_CancelPickerFromRibbon_VM_Managed_DAFUL_Pre_CancelRibbon_"></a> CancelPickerFromRibbon\(CancelRibbon\)

Cancels the picker from ribbon.

```csharp
void CancelPickerFromRibbon(CancelRibbon ribbonType)
```

#### Parameters

`ribbonType` [CancelRibbon](VM.Managed.DAFUL.Pre.CancelRibbon.md)

Type of the ribbon.

### <a id="VM_Managed_DAFUL_Pre_IOperationStatus_CloseWindow"></a> CloseWindow\(\)

Closes this window.

```csharp
void CloseWindow()
```

### <a id="VM_Managed_DAFUL_Pre_IOperationStatus_DisableApplyAndReStart"></a> DisableApplyAndReStart\(\)

Disable the apply and restart button.

```csharp
void DisableApplyAndReStart()
```

### <a id="VM_Managed_DAFUL_Pre_IOperationStatus_GetCurrentFilter"></a> GetCurrentFilter\(\)

Gets the current filter.

```csharp
string GetCurrentFilter()
```

#### Returns

 string

### <a id="VM_Managed_DAFUL_Pre_IOperationStatus_IsVisible"></a> IsVisible\(\)

Gets inform that this view is a visible.

```csharp
bool IsVisible()
```

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Pre_IOperationStatus_OnCancel"></a> OnCancel\(\)

Called when [cancel].

```csharp
void OnCancel()
```

### <a id="VM_Managed_DAFUL_Pre_IOperationStatus_OnViewHide"></a> OnViewHide\(\)

Called when [view hide].

```csharp
void OnViewHide()
```

### <a id="VM_Managed_DAFUL_Pre_IOperationStatus_OnViewShow"></a> OnViewShow\(\)

Called when [view show].

```csharp
void OnViewShow()
```

### <a id="VM_Managed_DAFUL_Pre_IOperationStatus_OperationCancel"></a> OperationCancel\(\)

Operations the cancel.

```csharp
void OperationCancel()
```

### <a id="VM_Managed_DAFUL_Pre_IOperationStatus_PickOperation_System_String_System_String_"></a> PickOperation\(string, string\)

Picks the operation.

```csharp
void PickOperation(string ContentName, string strType)
```

#### Parameters

`ContentName` string

Name of the content.

`strType` string

Type of the string.

### <a id="VM_Managed_DAFUL_Pre_IOperationStatus_PickOperation_System_String_System_String_System_Boolean_"></a> PickOperation\(string, string, bool\)

Picks the operation.

```csharp
void PickOperation(string ContentName, string strType, bool bShowDialog)
```

#### Parameters

`ContentName` string

Name of the content.

`strType` string

Type of the string.

`bShowDialog` bool

if set to <code>true</code> [b show dialog].

### <a id="VM_Managed_DAFUL_Pre_IOperationStatus_PickOperation_System_String_System_String_System_String_System_Boolean_"></a> PickOperation\(string, string, string, bool\)

Picks the operation.

```csharp
void PickOperation(string ContentName, string strType, string strPreviousResult, bool bShowDialog)
```

#### Parameters

`ContentName` string

Name of the content.

`strType` string

Type of the string.

`strPreviousResult` string

The string previous result.

`bShowDialog` bool

if set to <code>true</code> [b show dialog].

### <a id="VM_Managed_DAFUL_Pre_IOperationStatus_SetCurrentOperation_System_String_"></a> SetCurrentOperation\(string\)

Sets the current operation.

```csharp
void SetCurrentOperation(string strOpName)
```

#### Parameters

`strOpName` string

Name of the STR op.

