#  Class NXFormBase

Namespace: [VM.NX.Dialog](VM.NX.Dialog.md)  
Assembly: VMDM.dll  

```csharp
public class NXFormBase : Form, IStdDialog
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MarshalByRefObject](https://learn.microsoft.com/dotnet/api/system.marshalbyrefobject) ← 
[Component](https://learn.microsoft.com/dotnet/api/system.componentmodel.component) ← 
[Control](https://learn.microsoft.com/dotnet/api/system.windows.forms.control) ← 
[ScrollableControl](https://learn.microsoft.com/dotnet/api/system.windows.forms.scrollablecontrol) ← 
[ContainerControl](https://learn.microsoft.com/dotnet/api/system.windows.forms.containercontrol) ← 
[Form](https://learn.microsoft.com/dotnet/api/system.windows.forms.form) ← 
[NXFormBase](VM.NX.Dialog.NXFormBase.md)

#### Implements

IStdDialog

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_NX_Dialog_NXFormBase__ctor"></a> NXFormBase\(\)

```csharp
public NXFormBase()
```

## Fields

### <a id="VM_NX_Dialog_NXFormBase_btApply"></a> btApply

```csharp
public Button btApply
```

#### Field Value

 [Button](https://learn.microsoft.com/dotnet/api/system.windows.forms.button)

### <a id="VM_NX_Dialog_NXFormBase_btCancel"></a> btCancel

```csharp
public Button btCancel
```

#### Field Value

 [Button](https://learn.microsoft.com/dotnet/api/system.windows.forms.button)

### <a id="VM_NX_Dialog_NXFormBase_btOK"></a> btOK

```csharp
public Button btOK
```

#### Field Value

 [Button](https://learn.microsoft.com/dotnet/api/system.windows.forms.button)

## Properties

### <a id="VM_NX_Dialog_NXFormBase_AppHandle"></a> AppHandle

```csharp
public static IAppHandle AppHandle { get; set; }
```

#### Property Value

 IAppHandle

### <a id="VM_NX_Dialog_NXFormBase_ApplyState"></a> ApplyState

```csharp
public static int ApplyState { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_NX_Dialog_NXFormBase_Document"></a> Document

```csharp
public object Document { get; set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="VM_NX_Dialog_NXFormBase_GeometryParams"></a> GeometryParams

```csharp
public static Dictionary<string, XmlNode> GeometryParams { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)\>

### <a id="VM_NX_Dialog_NXFormBase_IsPicking"></a> IsPicking

```csharp
public static bool IsPicking { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_NXFormBase_Result"></a> Result

```csharp
public XmlDocument Result { get; set; }
```

#### Property Value

 [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

## Methods

### <a id="VM_NX_Dialog_NXFormBase_BaseButtonLocation_System_Windows_Forms_Form_System_Windows_Forms_TabControl_System_Windows_Forms_Button_System_Windows_Forms_Button_System_Windows_Forms_Button_"></a> BaseButtonLocation\(Form, TabControl, Button, Button, Button\)

```csharp
public void BaseButtonLocation(Form form, TabControl TC, Button btnOK, Button btnApp, Button btnCancel)
```

#### Parameters

`form` [Form](https://learn.microsoft.com/dotnet/api/system.windows.forms.form)

`TC` [TabControl](https://learn.microsoft.com/dotnet/api/system.windows.forms.tabcontrol)

`btnOK` [Button](https://learn.microsoft.com/dotnet/api/system.windows.forms.button)

`btnApp` [Button](https://learn.microsoft.com/dotnet/api/system.windows.forms.button)

`btnCancel` [Button](https://learn.microsoft.com/dotnet/api/system.windows.forms.button)

### <a id="VM_NX_Dialog_NXFormBase_BaseButtonLocationNoTab_System_Windows_Forms_Form_System_Windows_Forms_Button_System_Windows_Forms_Button_System_Windows_Forms_Button_"></a> BaseButtonLocationNoTab\(Form, Button, Button, Button\)

```csharp
public void BaseButtonLocationNoTab(Form form, Button btnOK, Button btnApp, Button btnCancel)
```

#### Parameters

`form` [Form](https://learn.microsoft.com/dotnet/api/system.windows.forms.form)

`btnOK` [Button](https://learn.microsoft.com/dotnet/api/system.windows.forms.button)

`btnApp` [Button](https://learn.microsoft.com/dotnet/api/system.windows.forms.button)

`btnCancel` [Button](https://learn.microsoft.com/dotnet/api/system.windows.forms.button)

### <a id="VM_NX_Dialog_NXFormBase_CancelAll"></a> CancelAll\(\)

```csharp
protected virtual bool CancelAll()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_NXFormBase_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected override void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_NXFormBase_EnableButton_System_Boolean_"></a> EnableButton\(bool\)

```csharp
public virtual void EnableButton(bool bEnabled)
```

#### Parameters

`bEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_NXFormBase_InitNXForm_VM_NX_Dialog_IAppHandle_"></a> InitNXForm\(IAppHandle\)

```csharp
public static void InitNXForm(IAppHandle handleApp)
```

#### Parameters

`handleApp` IAppHandle

### <a id="VM_NX_Dialog_NXFormBase_Initialize_System_String_"></a> Initialize\(string\)

```csharp
public virtual bool Initialize(string strInitInfo)
```

#### Parameters

`strInitInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_NXFormBase_LockButtons_System_Boolean_"></a> LockButtons\(bool\)

```csharp
public virtual void LockButtons(bool bLock)
```

#### Parameters

`bLock` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_NXFormBase_OnApply"></a> OnApply\(\)

```csharp
protected virtual bool OnApply()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_NXFormBase_OnPreApply"></a> OnPreApply\(\)

```csharp
protected virtual bool OnPreApply()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_NXFormBase_RasieApplyButtonClick"></a> RasieApplyButtonClick\(\)

```csharp
public void RasieApplyButtonClick()
```

### <a id="VM_NX_Dialog_NXFormBase_SetReadOnly_System_Boolean_"></a> SetReadOnly\(bool\)

```csharp
public virtual bool SetReadOnly(bool bReadOnly)
```

#### Parameters

`bReadOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_NXFormBase_SetSkipPreApply_System_Boolean_"></a> SetSkipPreApply\(bool\)

```csharp
public void SetSkipPreApply(bool bSkip)
```

#### Parameters

`bSkip` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_NXFormBase_SetUseApplyBtn_System_Boolean_"></a> SetUseApplyBtn\(bool\)

```csharp
public void SetUseApplyBtn(bool bUse)
```

#### Parameters

`bUse` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

