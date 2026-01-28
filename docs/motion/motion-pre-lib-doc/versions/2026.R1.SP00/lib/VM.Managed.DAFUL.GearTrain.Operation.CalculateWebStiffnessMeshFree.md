# Class CalculateWebStiffnessMeshFree
<a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffnessMeshFree"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Calculate Web Stiffness for MeshFree

```csharp
public class CalculateWebStiffnessMeshFree : CalculateWebStiffness, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[CalculateWebStiffness](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md) ← 
[CalculateWebStiffnessMeshFree](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffnessMeshFree.md)

#### Implements

IOperation

#### Inherited Members

[CalculateWebStiffness.m\_doc](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_m\_doc), 
[CalculateWebStiffness.m\_strDocInfo](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_m\_strDocInfo), 
[CalculateWebStiffness.m\_strDATFilePath](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_m\_strDATFilePath), 
[CalculateWebStiffness.m\_dAngle](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_m\_dAngle), 
[CalculateWebStiffness.m\_dRange](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_m\_dRange), 
[CalculateWebStiffness.m\_dYoungsModulus](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_m\_dYoungsModulus), 
[CalculateWebStiffness.m\_dPoissonRatio](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_m\_dPoissonRatio), 
[CalculateWebStiffness.m\_dDensity](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_m\_dDensity), 
[CalculateWebStiffness.m\_dDampingRatio](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_m\_dDampingRatio), 
[CalculateWebStiffness.m\_arResult](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_m\_arResult), 
[CalculateWebStiffness.m\_dMass](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_m\_dMass), 
[CalculateWebStiffness.m\_dIxx](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_m\_dIxx), 
[CalculateWebStiffness.m\_dIxy](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_m\_dIxy), 
[CalculateWebStiffness.m\_dIxz](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_m\_dIxz), 
[CalculateWebStiffness.m\_dIyy](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_m\_dIyy), 
[CalculateWebStiffness.m\_dIyz](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_m\_dIyz), 
[CalculateWebStiffness.m\_dIzz](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_m\_dIzz), 
[CalculateWebStiffness.Result\(\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_Result), 
[CalculateWebStiffness.Mass\(\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_Mass), 
[CalculateWebStiffness.Ixx\(\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_Ixx), 
[CalculateWebStiffness.Ixy\(\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_Ixy), 
[CalculateWebStiffness.Ixz\(\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_Ixz), 
[CalculateWebStiffness.Iyy\(\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_Iyy), 
[CalculateWebStiffness.Iyz\(\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_Iyz), 
[CalculateWebStiffness.Izz\(\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_Izz), 
[CalculateWebStiffness.Execute\(\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_Execute), 
[CalculateWebStiffness.GetInformation\(XmlWriter\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_GetInformation\_System\_Xml\_XmlWriter\_), 
[CalculateWebStiffness.ReadOutFile\(string\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_ReadOutFile\_System\_String\_), 
[CalculateWebStiffness.Name](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateWebStiffness\_Name), 
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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffnessMeshFree__ctor_VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_System_String_System_String_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_"></a> CalculateWebStiffnessMeshFree\(HiddenGearSetDocumentBase, string, string, double, double, double, double, double, double\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffnessMeshFree" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CalculateWebStiffnessMeshFree(HiddenGearSetDocumentBase doc, string strDocInfo, string strDATFilePath, double dAngle, double dRange, double dYoungsModulus, double dPoissonRatio, double dDensity, double dDampingRatio)
```

#### Parameters

`doc` [HiddenGearSetDocumentBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenGearSetDocumentBase.cs)

The document.

`strDocInfo` string

The string document information.

`strDATFilePath` string

The dat file path.

`dAngle` double

The target angle.

`dRange` double

The target range.

`dYoungsModulus` double

The target young's modulus.

`dPoissonRatio` double

The target poisson's ratio.

`dDensity` double

The target density.

`dDampingRatio` double

The target damping ratio.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffnessMeshFree__ctor_VM_Managed_Operation_JournalParameter_"></a> CalculateWebStiffnessMeshFree\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffnessMeshFree" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CalculateWebStiffnessMeshFree(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffnessMeshFree_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffnessMeshFree_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

