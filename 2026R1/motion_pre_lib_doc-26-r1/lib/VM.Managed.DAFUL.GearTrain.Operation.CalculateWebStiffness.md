#  Class CalculateWebStiffness

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Calculate Web Stiffness

```csharp
public class CalculateWebStiffness : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[CalculateWebStiffness](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness.md)

#### Derived

[CalculateWebStiffnessMeshFree](VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffnessMeshFree.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness__ctor_VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_System_String_System_String_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_"></a> CalculateWebStiffness\(HiddenGearSetDocumentBase, string, string, double, double, double, double, double, double\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CalculateWebStiffness(HiddenGearSetDocumentBase doc, string strDocInfo, string strDATFilePath, double dAngle, double dRange, double dYoungsModulus, double dPoissonRatio, double dDensity, double dDampingRatio)
```

#### Parameters

`doc` HiddenGearSetDocumentBase

The document.

`strDocInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string document information.

`strDATFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The dat file path.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The target angle.

`dRange` [double](https://learn.microsoft.com/dotnet/api/system.double)

The target range.

`dYoungsModulus` [double](https://learn.microsoft.com/dotnet/api/system.double)

The target young's modulus.

`dPoissonRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

The target poisson's ratio.

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

The target density.

`dDampingRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

The target damping ratio.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness__ctor_VM_Managed_Operation_JournalParameter_"></a> CalculateWebStiffness\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.CalculateWebStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CalculateWebStiffness(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Fields

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_m_arResult"></a> m\_arResult

m_arResult

```csharp
protected string[] m_arResult
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_m_dAngle"></a> m\_dAngle

m_dAngle

```csharp
protected double m_dAngle
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_m_dDampingRatio"></a> m\_dDampingRatio

m_dDampingRatio

```csharp
protected double m_dDampingRatio
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_m_dDensity"></a> m\_dDensity

m_dDensity

```csharp
protected double m_dDensity
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_m_dIxx"></a> m\_dIxx

m_dIxx

```csharp
protected double m_dIxx
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_m_dIxy"></a> m\_dIxy

m_dIxy

```csharp
protected double m_dIxy
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_m_dIxz"></a> m\_dIxz

m_dIxz

```csharp
protected double m_dIxz
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_m_dIyy"></a> m\_dIyy

m_dIyy

```csharp
protected double m_dIyy
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_m_dIyz"></a> m\_dIyz

m_dIyz

```csharp
protected double m_dIyz
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_m_dIzz"></a> m\_dIzz

m_dIzz

```csharp
protected double m_dIzz
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_m_dMass"></a> m\_dMass

m_dMass

```csharp
protected double m_dMass
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_m_dPoissonRatio"></a> m\_dPoissonRatio

m_dPoissonRatio

```csharp
protected double m_dPoissonRatio
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_m_dRange"></a> m\_dRange

m_dRange

```csharp
protected double m_dRange
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_m_dYoungsModulus"></a> m\_dYoungsModulus

m_dYoungsModulus

```csharp
protected double m_dYoungsModulus
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_m_doc"></a> m\_doc

m_doc

```csharp
protected HiddenGearSetDocumentBase m_doc
```

#### Field Value

 HiddenGearSetDocumentBase

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_m_strDATFilePath"></a> m\_strDATFilePath

m_strDATFilePath

```csharp
protected string m_strDATFilePath
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_m_strDocInfo"></a> m\_strDocInfo

m_strDocInfo

```csharp
protected string m_strDocInfo
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_Ixx"></a> Ixx\(\)

Ixx.

```csharp
public double Ixx()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_Ixy"></a> Ixy\(\)

Ixy.

```csharp
public double Ixy()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_Ixz"></a> Ixz\(\)

Ixz.

```csharp
public double Ixz()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_Iyy"></a> Iyy\(\)

Iyy.

```csharp
public double Iyy()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_Iyz"></a> Iyz\(\)

Iyz.

```csharp
public double Iyz()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_Izz"></a> Izz\(\)

Izz.

```csharp
public double Izz()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_Mass"></a> Mass\(\)

Mass.

```csharp
public double Mass()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_ReadOutFile_System_String_"></a> ReadOutFile\(string\)

Reads the out file.

```csharp
protected List<string> ReadOutFile(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string path.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The result text lines.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateWebStiffness_Result"></a> Result\(\)

Results this instance.

```csharp
public string[] Result()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

