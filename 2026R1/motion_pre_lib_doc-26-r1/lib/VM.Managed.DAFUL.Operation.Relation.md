#  Class Relation

Namespace: [VM.Managed.DAFUL.Operation](VM.Managed.DAFUL.Operation.md)  
Assembly: VMOpCore.dll  

The relation operation

```csharp
public class Relation : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[Relation](VM.Managed.DAFUL.Operation.Relation.md)

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

### <a id="VM_Managed_DAFUL_Operation_Relation__ctor_VM_Models_Pre_IDocument_"></a> Relation\(IDocument\)

```csharp
public Relation(IDocument doc)
```

#### Parameters

`doc` IDocument

### <a id="VM_Managed_DAFUL_Operation_Relation__ctor_VM_Models_Pre_IDocument_VM_Managed_DAFUL_SolidBody_"></a> Relation\(IDocument, SolidBody\)

```csharp
public Relation(IDocument doc, SolidBody selectedBody)
```

#### Parameters

`doc` IDocument

`selectedBody` SolidBody

### <a id="VM_Managed_DAFUL_Operation_Relation__ctor_VM_Models_Pre_IDocument_VM_Managed_DAFUL_SolidBody_System_Double_"></a> Relation\(IDocument, SolidBody, double\)

```csharp
public Relation(IDocument doc, SolidBody selectedBody, double dTolerance)
```

#### Parameters

`doc` IDocument

`selectedBody` SolidBody

`dTolerance` [double](https://learn.microsoft.com/dotnet/api/system.double)

## Properties

### <a id="VM_Managed_DAFUL_Operation_Relation_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Operation_Relation_SeedBody"></a> SeedBody

```csharp
public SolidBody SeedBody { get; set; }
```

#### Property Value

 SolidBody

### <a id="VM_Managed_DAFUL_Operation_Relation_SelectedBody"></a> SelectedBody

```csharp
public ICollection<SolidBody> SelectedBody { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<SolidBody\>

### <a id="VM_Managed_DAFUL_Operation_Relation_Tolerance"></a> Tolerance

```csharp
public double Tolerance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Managed_DAFUL_Operation_Relation_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_Operation_Relation_ExecuteAutoPicker_VM_Managed_Document3D_System_String_System_String_"></a> ExecuteAutoPicker\(Document3D, string, string\)

```csharp
protected void ExecuteAutoPicker(Document3D doc3D, string strKey, string strTol)
```

#### Parameters

`doc3D` Document3D

`strKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strTol` [string](https://learn.microsoft.com/dotnet/api/system.string)

