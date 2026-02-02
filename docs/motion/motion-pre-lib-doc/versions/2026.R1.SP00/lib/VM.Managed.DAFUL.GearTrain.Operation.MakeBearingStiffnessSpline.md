# Class MakeBearingStiffnessSpline
<a id="VM_Managed_DAFUL_GearTrain_Operation_MakeBearingStiffnessSpline"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Makes Spline for Bearing Stiffness

```csharp
public class MakeBearingStiffnessSpline : OperationInHiddenDocument, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[OperationInHiddenDocument](VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument.md) ← 
[MakeBearingStiffnessSpline](VM.Managed.DAFUL.GearTrain.Operation.MakeBearingStiffnessSpline.md)

#### Implements

IOperation

#### Inherited Members

[OperationInHiddenDocument.GetFullNameOfType\(Type\)](VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_OperationInHiddenDocument\_GetFullNameOfType\_System\_Type\_), 
[OperationInHiddenDocument.GetLoadXml\(object\)](VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_OperationInHiddenDocument\_GetLoadXml\_System\_Object\_), 
[OperationInHiddenDocument.GetObject\(Type, string\)](VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_OperationInHiddenDocument\_GetObject\_System\_Type\_System\_String\_), 
[OperationInHiddenDocument.Execute\(\)](VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_OperationInHiddenDocument\_Execute), 
[OperationInHiddenDocument.UpdateActiveUserControl\(\)](VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_OperationInHiddenDocument\_UpdateActiveUserControl), 
[OperationInHiddenDocument.Name](VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_OperationInHiddenDocument\_Name), 
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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_MakeBearingStiffnessSpline__ctor_System_Collections_Generic_List_System_Double____System_Collections_Generic_List_System_Double____System_Collections_Generic_List_System_Double____System_String_System_String_System_String_"></a> MakeBearingStiffnessSpline\(List<double\[\]\>, List<double\[\]\>, List<double\[\]\>, string, string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.MakeBearingStiffnessSpline" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MakeBearingStiffnessSpline(List<double[]> lstRadialStifnessSplineData, List<double[]> lstAxialStifnessSplineData, List<double[]> lstTiltStifnessSplineData, string strMaxRadialStiffnessValue, string strMaxAxialStiffnessValue, string strMaxTiltStiffnessValue)
```

#### Parameters

`lstRadialStifnessSplineData` List<double\[\]\>

The radial stiffness spline value.

`lstAxialStifnessSplineData` List<double\[\]\>

The axial stiffness spline value.

`lstTiltStifnessSplineData` List<double\[\]\>

The tilt stiffness spline value.

`strMaxRadialStiffnessValue` string

The maximum roational stiffness value.

`strMaxAxialStiffnessValue` string

The maximum axial stiffness value.

`strMaxTiltStiffnessValue` string

The maximum tilt stiffness value.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_MakeBearingStiffnessSpline__ctor_VM_Managed_Operation_JournalParameter_"></a> MakeBearingStiffnessSpline\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.MakeBearingStiffnessSpline" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MakeBearingStiffnessSpline(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Operation_MakeBearingStiffnessSpline_Name"></a> Name

Gets the name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_MakeBearingStiffnessSpline_Execute"></a> Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_GearTrain_Operation_MakeBearingStiffnessSpline_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The writer.

