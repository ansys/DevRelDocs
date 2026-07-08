#  Class GetWeldPointOp

Namespace: [VM.Managed.DAFUL.MeshFree](VM.Managed.DAFUL.MeshFree.md)  
Assembly: VMDMeshFree.dll  

GetWeldPointOp

```csharp
public class GetWeldPointOp : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[GetWeldPointOp](VM.Managed.DAFUL.MeshFree.GetWeldPointOp.md)

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

### <a id="VM_Managed_DAFUL_MeshFree_GetWeldPointOp__ctor"></a> GetWeldPointOp\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MeshFree.GetWeldPointOp" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GetWeldPointOp()
```

### <a id="VM_Managed_DAFUL_MeshFree_GetWeldPointOp__ctor_VM_Managed_DAFUL_MeshFree_Weld_VM_Managed_CAD_Body_VM_Managed_CAD_Body_VM_Managed_Range_"></a> GetWeldPointOp\(Weld, Body, Body, Range\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MeshFree.GetWeldPointOp" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GetWeldPointOp(Weld weld, Body bBase, Body bAct, Range par)
```

#### Parameters

`weld` [Weld](VM.Managed.DAFUL.MeshFree.Weld.md)

The weld.

`bBase` Body

The base body.

`bAct` Body

The action body.

`par` Range

The range.

## Properties

### <a id="VM_Managed_DAFUL_MeshFree_GetWeldPointOp_IsHistoryMerge"></a> IsHistoryMerge

Gets the history merge flag.

```csharp
public override bool IsHistoryMerge { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MeshFree_GetWeldPointOp_LowerPoint"></a> LowerPoint

Get lower point

```csharp
public VectorBase[] LowerPoint { get; }
```

#### Property Value

 VectorBase\[\]

### <a id="VM_Managed_DAFUL_MeshFree_GetWeldPointOp_Name"></a> Name

Gets the Name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_MeshFree_GetWeldPointOp_Success"></a> Success

Success flag

```csharp
public bool Success { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MeshFree_GetWeldPointOp_UpperPoint"></a> UpperPoint

Get upper point

```csharp
public VectorBase[] UpperPoint { get; }
```

#### Property Value

 VectorBase\[\]

## Methods

### <a id="VM_Managed_DAFUL_MeshFree_GetWeldPointOp_Execute"></a> Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

