# Class NXFormBase

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

### NXFormBase\(\)

```csharp
public NXFormBase()
```

## Fields

### btApply

```csharp
public Button btApply
```

#### Field Value

 [Button](https://learn.microsoft.com/dotnet/api/system.windows.forms.button)

### btCancel

```csharp
public Button btCancel
```

#### Field Value

 [Button](https://learn.microsoft.com/dotnet/api/system.windows.forms.button)

### btOK

```csharp
public Button btOK
```

#### Field Value

 [Button](https://learn.microsoft.com/dotnet/api/system.windows.forms.button)

## Properties

### AppHandle

```csharp
public static IAppHandle AppHandle { get; set; }
```

#### Property Value

 IAppHandle

### ApplyState

```csharp
public static int ApplyState { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Document

```csharp
public object Document { get; set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### GeometryParams

```csharp
public static Dictionary<string, XmlNode> GeometryParams { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)\>

### IsPicking

```csharp
public static bool IsPicking { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Result

```csharp
public XmlDocument Result { get; set; }
```

#### Property Value

 [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

## Methods

### BaseButtonLocation\(Form, TabControl, Button, Button, Button\)

```csharp
public void BaseButtonLocation(Form form, TabControl TC, Button btnOK, Button btnApp, Button btnCancel)
```

#### Parameters

`form` [Form](https://learn.microsoft.com/dotnet/api/system.windows.forms.form)

`TC` [TabControl](https://learn.microsoft.com/dotnet/api/system.windows.forms.tabcontrol)

`btnOK` [Button](https://learn.microsoft.com/dotnet/api/system.windows.forms.button)

`btnApp` [Button](https://learn.microsoft.com/dotnet/api/system.windows.forms.button)

`btnCancel` [Button](https://learn.microsoft.com/dotnet/api/system.windows.forms.button)

### BaseButtonLocationNoTab\(Form, Button, Button, Button\)

```csharp
public void BaseButtonLocationNoTab(Form form, Button btnOK, Button btnApp, Button btnCancel)
```

#### Parameters

`form` [Form](https://learn.microsoft.com/dotnet/api/system.windows.forms.form)

`btnOK` [Button](https://learn.microsoft.com/dotnet/api/system.windows.forms.button)

`btnApp` [Button](https://learn.microsoft.com/dotnet/api/system.windows.forms.button)

`btnCancel` [Button](https://learn.microsoft.com/dotnet/api/system.windows.forms.button)

### CancelAll\(\)

```csharp
protected virtual bool CancelAll()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Dispose\(bool\)

```csharp
protected override void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnableButton\(bool\)

```csharp
public virtual void EnableButton(bool bEnabled)
```

#### Parameters

`bEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InitNXForm\(IAppHandle\)

```csharp
public static void InitNXForm(IAppHandle handleApp)
```

#### Parameters

`handleApp` IAppHandle

### Initialize\(string\)

```csharp
public virtual bool Initialize(string strInitInfo)
```

#### Parameters

`strInitInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LockButtons\(bool\)

```csharp
public virtual void LockButtons(bool bLock)
```

#### Parameters

`bLock` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OnApply\(\)

```csharp
protected virtual bool OnApply()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OnPreApply\(\)

```csharp
protected virtual bool OnPreApply()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RasieApplyButtonClick\(\)

```csharp
public void RasieApplyButtonClick()
```

### SetReadOnly\(bool\)

```csharp
public virtual bool SetReadOnly(bool bReadOnly)
```

#### Parameters

`bReadOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetSkipPreApply\(bool\)

```csharp
public void SetSkipPreApply(bool bSkip)
```

#### Parameters

`bSkip` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetUseApplyBtn\(bool\)

```csharp
public void SetUseApplyBtn(bool bUse)
```

#### Parameters

`bUse` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


