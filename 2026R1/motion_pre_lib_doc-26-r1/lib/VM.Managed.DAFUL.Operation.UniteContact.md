# Class UniteContact
<a id="VM_Managed_DAFUL_Operation_UniteContact"></a>

Namespace: [VM.Managed.DAFUL.Operation](VM.Managed.DAFUL.Operation.md)  
Assembly: VMOpCore.dll  

Unite contact

```csharp
public class UniteContact : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[UniteContact](VM.Managed.DAFUL.Operation.UniteContact.md)

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

### <a id="VM_Managed_DAFUL_Operation_UniteContact__ctor_VM_Models_Pre_IDocument_"></a> UniteContact\(IDocument\)

```csharp
public UniteContact(IDocument doc)
```

#### Parameters

`doc` IDocument

### <a id="VM_Managed_DAFUL_Operation_UniteContact__ctor_VM_Models_Pre_IDocument_System_Collections_Generic_IEnumerable_VM_Models_Pre_IObject__"></a> UniteContact\(IDocument, IEnumerable<IObject\>\)

```csharp
public UniteContact(IDocument doc, IEnumerable<IObject> selectedBody)
```

#### Parameters

`doc` IDocument

`selectedBody` IEnumerable<IObject\>

### <a id="VM_Managed_DAFUL_Operation_UniteContact__ctor_VM_Managed_Operation_JournalParameter_"></a> UniteContact\(JournalParameter\)

```csharp
public UniteContact(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

### <a id="VM_Managed_DAFUL_Operation_UniteContact__ctor_VM_Models_Pre_IDocument_System_Collections_Generic_IEnumerable_VM_Models_Pre_IObject__System_Double_"></a> UniteContact\(IDocument, IEnumerable<IObject\>, double\)

```csharp
public UniteContact(IDocument doc, IEnumerable<IObject> selectedBody, double dTolerance)
```

#### Parameters

`doc` IDocument

`selectedBody` IEnumerable<IObject\>

`dTolerance` double

## Properties

### <a id="VM_Managed_DAFUL_Operation_UniteContact_CreatedEntities"></a> CreatedEntities

```csharp
public IEnumerable<IHasID> CreatedEntities { get; }
```

#### Property Value

 IEnumerable<IHasID\>

### <a id="VM_Managed_DAFUL_Operation_UniteContact_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Operation_UniteContact_SelectedBody"></a> SelectedBody

```csharp
public IList<IObject> SelectedBody { get; set; }
```

#### Property Value

 IList<IObject\>

### <a id="VM_Managed_DAFUL_Operation_UniteContact_Tolerance"></a> Tolerance

```csharp
public double Tolerance { get; set; }
```

#### Property Value

 double

## Methods

### <a id="VM_Managed_DAFUL_Operation_UniteContact_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_Operation_UniteContact_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

