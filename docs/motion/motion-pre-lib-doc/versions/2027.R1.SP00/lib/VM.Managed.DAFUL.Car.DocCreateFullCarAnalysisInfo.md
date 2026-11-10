# Class DocCreateFullCarAnalysisInfo
<a id="VM_Managed_DAFUL_Car_DocCreateFullCarAnalysisInfo"></a>

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The full car analysis document create information

```csharp
public class DocCreateFullCarAnalysisInfo : DocCreateFullCarAnalysisInfoExceptWheel
```

#### Inheritance

object ← 
DocCreateInfo ← 
DocFromTemplateInfo ← 
[DocCreateCarAnalysisInfo](VM.Managed.DAFUL.Car.DocCreateCarAnalysisInfo.md) ← 
[DocCreateFullCarAnalysisInfoExceptWheel](VM.Managed.DAFUL.Car.DocCreateFullCarAnalysisInfoExceptWheel.md) ← 
[DocCreateFullCarAnalysisInfo](VM.Managed.DAFUL.Car.DocCreateFullCarAnalysisInfo.md)

#### Inherited Members

[DocCreateFullCarAnalysisInfoExceptWheel.AssemblyPath](VM.Managed.DAFUL.Car.DocCreateFullCarAnalysisInfoExceptWheel.md\#VM\_Managed\_DAFUL\_Car\_DocCreateFullCarAnalysisInfoExceptWheel\_AssemblyPath), 
[DocCreateFullCarAnalysisInfoExceptWheel.FrontSuspensionPath](VM.Managed.DAFUL.Car.DocCreateFullCarAnalysisInfoExceptWheel.md\#VM\_Managed\_DAFUL\_Car\_DocCreateFullCarAnalysisInfoExceptWheel\_FrontSuspensionPath), 
[DocCreateFullCarAnalysisInfoExceptWheel.RearSuspensionPath](VM.Managed.DAFUL.Car.DocCreateFullCarAnalysisInfoExceptWheel.md\#VM\_Managed\_DAFUL\_Car\_DocCreateFullCarAnalysisInfoExceptWheel\_RearSuspensionPath), 
[DocCreateFullCarAnalysisInfoExceptWheel.SteeringPath](VM.Managed.DAFUL.Car.DocCreateFullCarAnalysisInfoExceptWheel.md\#VM\_Managed\_DAFUL\_Car\_DocCreateFullCarAnalysisInfoExceptWheel\_SteeringPath), 
[DocCreateFullCarAnalysisInfoExceptWheel.BodyPath](VM.Managed.DAFUL.Car.DocCreateFullCarAnalysisInfoExceptWheel.md\#VM\_Managed\_DAFUL\_Car\_DocCreateFullCarAnalysisInfoExceptWheel\_BodyPath), 
[DocCreateFullCarAnalysisInfoExceptWheel.TestRigPath](VM.Managed.DAFUL.Car.DocCreateFullCarAnalysisInfoExceptWheel.md\#VM\_Managed\_DAFUL\_Car\_DocCreateFullCarAnalysisInfoExceptWheel\_TestRigPath), 
[DocCreateFullCarAnalysisInfoExceptWheel.BrakePath](VM.Managed.DAFUL.Car.DocCreateFullCarAnalysisInfoExceptWheel.md\#VM\_Managed\_DAFUL\_Car\_DocCreateFullCarAnalysisInfoExceptWheel\_BrakePath), 
[DocCreateFullCarAnalysisInfoExceptWheel.PowerTrainPath](VM.Managed.DAFUL.Car.DocCreateFullCarAnalysisInfoExceptWheel.md\#VM\_Managed\_DAFUL\_Car\_DocCreateFullCarAnalysisInfoExceptWheel\_PowerTrainPath), 
[DocCreateFullCarAnalysisInfoExceptWheel.OtherPath](VM.Managed.DAFUL.Car.DocCreateFullCarAnalysisInfoExceptWheel.md\#VM\_Managed\_DAFUL\_Car\_DocCreateFullCarAnalysisInfoExceptWheel\_OtherPath), 
[DocCreateFullCarAnalysisInfoExceptWheel.IsBreak](VM.Managed.DAFUL.Car.DocCreateFullCarAnalysisInfoExceptWheel.md\#VM\_Managed\_DAFUL\_Car\_DocCreateFullCarAnalysisInfoExceptWheel\_IsBreak), 
[DocCreateFullCarAnalysisInfoExceptWheel.IsPowerTrain](VM.Managed.DAFUL.Car.DocCreateFullCarAnalysisInfoExceptWheel.md\#VM\_Managed\_DAFUL\_Car\_DocCreateFullCarAnalysisInfoExceptWheel\_IsPowerTrain), 
[DocCreateFullCarAnalysisInfoExceptWheel.IsOther](VM.Managed.DAFUL.Car.DocCreateFullCarAnalysisInfoExceptWheel.md\#VM\_Managed\_DAFUL\_Car\_DocCreateFullCarAnalysisInfoExceptWheel\_IsOther), 
[DocCreateCarAnalysisInfo.GravityX](VM.Managed.DAFUL.Car.DocCreateCarAnalysisInfo.md\#VM\_Managed\_DAFUL\_Car\_DocCreateCarAnalysisInfo\_GravityX), 
[DocCreateCarAnalysisInfo.GravityY](VM.Managed.DAFUL.Car.DocCreateCarAnalysisInfo.md\#VM\_Managed\_DAFUL\_Car\_DocCreateCarAnalysisInfo\_GravityY), 
[DocCreateCarAnalysisInfo.GravityZ](VM.Managed.DAFUL.Car.DocCreateCarAnalysisInfo.md\#VM\_Managed\_DAFUL\_Car\_DocCreateCarAnalysisInfo\_GravityZ), 
[DocCreateCarAnalysisInfo.IconSize](VM.Managed.DAFUL.Car.DocCreateCarAnalysisInfo.md\#VM\_Managed\_DAFUL\_Car\_DocCreateCarAnalysisInfo\_IconSize), 
[DocCreateCarAnalysisInfo.IncrementTime](VM.Managed.DAFUL.Car.DocCreateCarAnalysisInfo.md\#VM\_Managed\_DAFUL\_Car\_DocCreateCarAnalysisInfo\_IncrementTime), 
[DocCreateCarAnalysisInfo.UseIncrementTime](VM.Managed.DAFUL.Car.DocCreateCarAnalysisInfo.md\#VM\_Managed\_DAFUL\_Car\_DocCreateCarAnalysisInfo\_UseIncrementTime), 
DocFromTemplateInfo.TemplatePath, 
DocCreateInfo.ModeChangeOperation, 
DocCreateInfo.ActiveMode, 
DocCreateInfo.KernelLengthUnit, 
DocCreateInfo.Unit, 
DocCreateInfo.DocumentName

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Car_DocCreateFullCarAnalysisInfo__ctor"></a> DocCreateFullCarAnalysisInfo\(\)

```csharp
public DocCreateFullCarAnalysisInfo()
```

## Properties

### <a id="VM_Managed_DAFUL_Car_DocCreateFullCarAnalysisInfo_FrontWheelPath"></a> FrontWheelPath

Gets or sets the front wheel path.

```csharp
public string FrontWheelPath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_DocCreateFullCarAnalysisInfo_RearWheelPath"></a> RearWheelPath

Gets or sets the rear wheel path.

```csharp
public string RearWheelPath { get; set; }
```

#### Property Value

 string

