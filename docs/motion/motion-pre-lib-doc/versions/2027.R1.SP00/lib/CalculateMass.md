# Class CalculateMass
<a id="CalculateMass"></a>

Namespace:   
Assembly: dfpreOp.dll  

```csharp
public class CalculateMass : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[CalculateMass](CalculateMass.md)

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

### <a id="CalculateMass__ctor_VM_Managed_Document3D_System_Collections_Generic_List_VM_Managed_ObjectBase__VM_Managed_VectorBase_VM_Managed_OMatrix_"></a> CalculateMass\(Document3D, List<ObjectBase\>, VectorBase, OMatrix\)

```csharp
public CalculateMass(Document3D doc, List<ObjectBase> lstSelectedEntity, VectorBase vecTarget, OMatrix oriTarget)
```

#### Parameters

`doc` Document3D

`lstSelectedEntity` List<ObjectBase\>

`vecTarget` VectorBase

`oriTarget` OMatrix

### <a id="CalculateMass__ctor_VM_Managed_Document3D_System_Collections_Generic_List_System_UIntPtr__VM_Managed_VectorBase_VM_Managed_OMatrix_"></a> CalculateMass\(Document3D, List<UIntPtr\>, VectorBase, OMatrix\)

```csharp
public CalculateMass(Document3D doc, List<UIntPtr> lstSelectedEntityKey, VectorBase vecTarget, OMatrix oriTarget)
```

#### Parameters

`doc` Document3D

`lstSelectedEntityKey` List<UIntPtr\>

`vecTarget` VectorBase

`oriTarget` OMatrix

## Properties

### <a id="CalculateMass_IsHistoryMerge"></a> IsHistoryMerge

```csharp
public override bool IsHistoryMerge { get; }
```

#### Property Value

 bool

### <a id="CalculateMass_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="CalculateMass_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="CalculateMass_FailedMassCalc"></a> FailedMassCalc\(\)

```csharp
public void FailedMassCalc()
```

### <a id="CalculateMass_MassCalculationException"></a> MassCalculationException\(\)

```csharp
public bool MassCalculationException()
```

#### Returns

 bool

### <a id="CalculateMass_Success"></a> Success\(\)

```csharp
public bool Success()
```

#### Returns

 bool

