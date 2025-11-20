# Class OperationDialogBase
<a id="VM_NX_Dialog_OperationDialogBase"></a>

Namespace: [VM.NX.Dialog](VM.NX.Dialog.md)  
Assembly: VMDM.dll  

```csharp
public class OperationDialogBase : Form, IStdModelessDialog, IStdDialog
```

#### Inheritance

object ← 
MarshalByRefObject ← 
Component ← 
Control ← 
ScrollableControl ← 
ContainerControl ← 
Form ← 
[OperationDialogBase](VM.NX.Dialog.OperationDialogBase.md)

#### Implements

IStdModelessDialog, 
IStdDialog

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_NX_Dialog_OperationDialogBase__ctor"></a> OperationDialogBase\(\)

```csharp
public OperationDialogBase()
```

## Fields

### <a id="VM_NX_Dialog_OperationDialogBase_OnApply"></a> OnApply

```csharp
public EventHandler<CancelEventArgs> OnApply
```

#### Field Value

 EventHandler<CancelEventArgs\>

## Methods

### <a id="VM_NX_Dialog_OperationDialogBase_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected override void Dispose(bool disposing)
```

#### Parameters

`disposing` bool

### <a id="VM_NX_Dialog_OperationDialogBase_Initialize_System_String_"></a> Initialize\(string\)

```csharp
protected virtual bool Initialize(string strInitInfo)
```

#### Parameters

`strInitInfo` string

#### Returns

 bool

