# Class CADOperation.ProfilePointOfCurvesetOp
<a id="VM_Managed_DAFUL_CADOperation_ProfilePointOfCurvesetOp"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

CalcBoundingBoxOp

```csharp
public class CADOperation.ProfilePointOfCurvesetOp : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[CADOperation.ProfilePointOfCurvesetOp](VM.Managed.DAFUL.CADOperation.ProfilePointOfCurvesetOp.md)

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

### <a id="VM_Managed_DAFUL_CADOperation_ProfilePointOfCurvesetOp__ctor"></a> ProfilePointOfCurvesetOp\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CADOperation.ProfilePointOfCurvesetOp" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ProfilePointOfCurvesetOp()
```

### <a id="VM_Managed_DAFUL_CADOperation_ProfilePointOfCurvesetOp__ctor_VM_Managed_DAFUL_IContactableRigid2D_"></a> ProfilePointOfCurvesetOp\(IContactableRigid2D\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CADOperation.ProfilePointOfCurvesetOp" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ProfilePointOfCurvesetOp(IContactableRigid2D curveset)
```

#### Parameters

`curveset` [IContactableRigid2D](VM.Managed.DAFUL.IContactableRigid2D.md)

The curveset.

## Properties

### <a id="VM_Managed_DAFUL_CADOperation_ProfilePointOfCurvesetOp_IsHistoryMerge"></a> IsHistoryMerge

Gets the history merge flag.

```csharp
public override bool IsHistoryMerge { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_CADOperation_ProfilePointOfCurvesetOp_Name"></a> Name

Gets the Name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_CADOperation_ProfilePointOfCurvesetOp_Execute"></a> Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_CADOperation_ProfilePointOfCurvesetOp_GetProfileResult_System_Boolean__System_Collections_Generic_List_VM_Managed_VectorBase___"></a> GetProfileResult\(ref bool, ref List<VectorBase\>\)

Get profile result

```csharp
public int GetProfileResult(ref bool bCloseLoop, ref List<VectorBase> lst)
```

#### Parameters

`bCloseLoop` bool

true if closed loop, otherwise false.

`lst` List<VectorBase\>

The list of points

#### Returns

 int

The number of profiles

