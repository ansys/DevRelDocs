# Interface IPropDlg
<a id="VM_NX_Dialog_IPropDlg"></a>

Namespace: [VM.NX.Dialog](VM.NX.Dialog.md)  
Assembly: VMDIDef.dll  

```csharp
public interface IPropDlg : IStdModelessDialog, IStdDialog
```

#### Implements

[IStdModelessDialog](VM.NX.Dialog.IStdModelessDialog.md), 
[IStdDialog](VM.NX.Dialog.IStdDialog.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_NX_Dialog_IPropDlg_AllowMulti"></a> AllowMulti

```csharp
bool AllowMulti { get; }
```

#### Property Value

 bool

### <a id="VM_NX_Dialog_IPropDlg_IsCreate"></a> IsCreate

```csharp
bool IsCreate { get; set; }
```

#### Property Value

 bool

### <a id="VM_NX_Dialog_IPropDlg_IsMulti"></a> IsMulti

```csharp
bool IsMulti { get; }
```

#### Property Value

 bool

### <a id="VM_NX_Dialog_IPropDlg_IsReadOnly"></a> IsReadOnly

```csharp
bool IsReadOnly { get; set; }
```

#### Property Value

 bool

### <a id="VM_NX_Dialog_IPropDlg_Tag"></a> Tag

```csharp
UIntPtr Tag { get; set; }
```

#### Property Value

 UIntPtr

## Methods

### <a id="VM_NX_Dialog_IPropDlg_GetPage_System_String_"></a> GetPage\(string\)

```csharp
IPropPage GetPage(string strPageName)
```

#### Parameters

`strPageName` string

#### Returns

 [IPropPage](VM.NX.Dialog.IPropPage.md)

### <a id="VM_NX_Dialog_IPropDlg_Redraw_System_Double_"></a> Redraw\(double\)

```csharp
void Redraw(double dIconSize)
```

#### Parameters

`dIconSize` double

### <a id="VM_NX_Dialog_IPropDlg_SetInputData_System_String_"></a> SetInputData\(string\)

```csharp
bool SetInputData(string strInput)
```

#### Parameters

`strInput` string

#### Returns

 bool

### <a id="VM_NX_Dialog_IPropDlg_UpdateAllPage_System_Windows_Forms_Form_"></a> UpdateAllPage\(Form\)

```csharp
void UpdateAllPage(Form formFrom)
```

#### Parameters

`formFrom` Form

