# Class ShowHideDeselectedObjects
<a id="VM_Managed_DAFUL_Operation_ShowHideDeselectedObjects"></a>

Namespace: [VM.Managed.DAFUL.Operation](VM.Managed.DAFUL.Operation.md)  
Assembly: VMOpCore.dll  

The change show and hide operation

```csharp
public class ShowHideDeselectedObjects : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[ShowHideDeselectedObjects](VM.Managed.DAFUL.Operation.ShowHideDeselectedObjects.md)

#### Implements

IOperation

#### Inherited Members

OperationBase.g\_bRedrawKernel, 
OperationBase.g\_bVerify, 
OperationBase.g\_bSkipAddEvent, 
OperationBase.g\_bDupicateMsg, 
OperationBase.m\_bIsHistoryMerge, 
OperationBase.Execute\(\), 
OperationBase.PostExecute\(\), 
OperationBase.GetInformation\(XmlWriter\), 
OperationBase.Create\(string, View, object\), 
OperationBase.Create\(string, IDocument, object\), 
OperationBase.Create\(string, object\), 
OperationBase.Create\(string\), 
OperationBase.StartSession\(\), 
OperationBase.StartSession\(OperationBase, OperationBase.PostOperation\), 
OperationBase.StartSession\(OperationBase\), 
OperationBase.StartSessionAndWait\(\), 
OperationBase.StartSessionAndWait\(OperationBase, OperationBase.PostOperation\), 
OperationBase.StartSessionAndWait\(OperationBase\), 
OperationBase.Initialize\(OperationBase.ShowVerifyResult\), 
OperationBase.RecordJournal\(OperationBase\), 
OperationBase.UseSession\(string\), 
OperationBase.raise\_OnOperationStatusChanged\(object, OperationStatusEventArgs\), 
OperationBase.raise\_OnEndOperation\(object, EventArgs\), 
OperationBase.ClearCurrentMark\(string\), 
OperationBase.ClearCurrentMark\(IDocument\), 
OperationBase.ClearCurrentMark\(\), 
OperationBase.GlobalOverride, 
OperationBase.IsDoingThread, 
OperationBase.ExecuteMacro, 
OperationBase.SimStatus, 
OperationBase.Status, 
OperationBase.autoEvents, 
OperationBase.IsHistoryMerge, 
OperationBase.SkipClearTemporaryLinkContainer, 
OperationBase.PostExecuteClearTemporaryLinkContainer, 
OperationBase.SkipEndOperation, 
OperationBase.UseMacro, 
OperationBase.MarkStatus, 
OperationBase.UseThread, 
OperationBase.Name, 
OperationBase.ExecutableOnHold, 
OperationBase.Override, 
OperationBase.Parameter, 
OperationBase.View, 
OperationBase.Document, 
OperationBase.OnEndOperation, 
OperationBase.OnOperationStatusChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Operation_ShowHideDeselectedObjects__ctor_System_Boolean_System_Boolean_System_Collections_Generic_List_VM_Managed_ObjectBase__"></a> ShowHideDeselectedObjects\(bool, bool, List<ObjectBase\>\)

```csharp
public ShowHideDeselectedObjects(bool bVisible, bool bGround, List<ObjectBase> lstSel)
```

#### Parameters

`bVisible` bool

`bGround` bool

`lstSel` List<ObjectBase\>

### <a id="VM_Managed_DAFUL_Operation_ShowHideDeselectedObjects__ctor_VM_Managed_Document3D_System_Boolean_System_Boolean_System_Collections_Generic_IEnumerable_VM_Managed_ObjectBase__"></a> ShowHideDeselectedObjects\(Document3D, bool, bool, IEnumerable<ObjectBase\>\)

```csharp
public ShowHideDeselectedObjects(Document3D doc3D, bool bVisible, bool bGround, IEnumerable<ObjectBase> lstSel)
```

#### Parameters

`doc3D` Document3D

`bVisible` bool

`bGround` bool

`lstSel` IEnumerable<ObjectBase\>

### <a id="VM_Managed_DAFUL_Operation_ShowHideDeselectedObjects__ctor_VM_Managed_Operation_JournalParameter_"></a> ShowHideDeselectedObjects\(JournalParameter\)

```csharp
public ShowHideDeselectedObjects(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Properties

### <a id="VM_Managed_DAFUL_Operation_ShowHideDeselectedObjects_ExecutableOnHold"></a> ExecutableOnHold

```csharp
protected override bool ExecutableOnHold { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Operation_ShowHideDeselectedObjects_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_Operation_ShowHideDeselectedObjects_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_Operation_ShowHideDeselectedObjects_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

