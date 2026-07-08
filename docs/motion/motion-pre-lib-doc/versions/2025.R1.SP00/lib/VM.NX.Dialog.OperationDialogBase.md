#  Class OperationDialogBase

Namespace: [VM.NX.Dialog](VM.NX.Dialog.md)  
Assembly: VMDM.dll  

```csharp
public class OperationDialogBase : Form, IStdModelessDialog, IStdDialog
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MarshalByRefObject](https://learn.microsoft.com/dotnet/api/system.marshalbyrefobject) ← 
[Component](https://learn.microsoft.com/dotnet/api/system.componentmodel.component) ← 
[Control](https://learn.microsoft.com/dotnet/api/system.windows.forms.control) ← 
[ScrollableControl](https://learn.microsoft.com/dotnet/api/system.windows.forms.scrollablecontrol) ← 
[ContainerControl](https://learn.microsoft.com/dotnet/api/system.windows.forms.containercontrol) ← 
[Form](https://learn.microsoft.com/dotnet/api/system.windows.forms.form) ← 
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

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[CancelEventArgs](https://learn.microsoft.com/dotnet/api/system.componentmodel.canceleventargs)\>

## Methods

### <a id="VM_NX_Dialog_OperationDialogBase_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected override void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_NX_Dialog_OperationDialogBase_Initialize_System_String_"></a> Initialize\(string\)

```csharp
protected virtual bool Initialize(string strInitInfo)
```

#### Parameters

`strInitInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

