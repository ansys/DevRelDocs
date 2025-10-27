# Class DocCreateFullCarAnalysisInfoExceptWheel
<a id="VM_Managed_DAFUL_Car_DocCreateFullCarAnalysisInfoExceptWheel"></a>

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The full car analysis document create information except wheel

```csharp
public abstract class DocCreateFullCarAnalysisInfoExceptWheel : DocCreateCarAnalysisInfo
```

#### Inheritance

object ← 
DocCreateInfo ← 
DocFromTemplateInfo ← 
[DocCreateCarAnalysisInfo](VM.Managed.DAFUL.Car.DocCreateCarAnalysisInfo.md) ← 
[DocCreateFullCarAnalysisInfoExceptWheel](VM.Managed.DAFUL.Car.DocCreateFullCarAnalysisInfoExceptWheel.md)

#### Derived

[DocCreateFullCarAnalysisInfo](VM.Managed.DAFUL.Car.DocCreateFullCarAnalysisInfo.md)

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_Car_DocCreateFullCarAnalysisInfoExceptWheel__ctor"></a> DocCreateFullCarAnalysisInfoExceptWheel\(\)

```csharp
protected DocCreateFullCarAnalysisInfoExceptWheel()
```

## Properties

### <a id="VM_Managed_DAFUL_Car_DocCreateFullCarAnalysisInfoExceptWheel_AssemblyPath"></a> AssemblyPath

Gets or sets the assembly path.

```csharp
public string AssemblyPath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_DocCreateFullCarAnalysisInfoExceptWheel_BodyPath"></a> BodyPath

Gets or sets the body path.

```csharp
public string BodyPath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_DocCreateFullCarAnalysisInfoExceptWheel_BrakePath"></a> BrakePath

Gets or sets the break path.

```csharp
public string BrakePath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_DocCreateFullCarAnalysisInfoExceptWheel_FrontSuspensionPath"></a> FrontSuspensionPath

Gets or sets the front suspension path.

```csharp
public string FrontSuspensionPath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_DocCreateFullCarAnalysisInfoExceptWheel_IsBreak"></a> IsBreak

Gets or sets a value indicating whether document has break or not.

```csharp
public bool IsBreak { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Car_DocCreateFullCarAnalysisInfoExceptWheel_IsOther"></a> IsOther

Gets or sets a value indicating whether document has other subsystem or not.

```csharp
public bool IsOther { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Car_DocCreateFullCarAnalysisInfoExceptWheel_IsPowerTrain"></a> IsPowerTrain

Gets or sets a value indicating whether document has powertrain or not.

```csharp
public bool IsPowerTrain { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Car_DocCreateFullCarAnalysisInfoExceptWheel_OtherPath"></a> OtherPath

Gets or sets the other path.

```csharp
public string OtherPath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_DocCreateFullCarAnalysisInfoExceptWheel_PowerTrainPath"></a> PowerTrainPath

Gets or sets the powertrain path.

```csharp
public string PowerTrainPath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_DocCreateFullCarAnalysisInfoExceptWheel_RearSuspensionPath"></a> RearSuspensionPath

Gets or sets the rear suspension path.

```csharp
public string RearSuspensionPath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_DocCreateFullCarAnalysisInfoExceptWheel_SteeringPath"></a> SteeringPath

Gets or sets the steering path.

```csharp
public string SteeringPath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_DocCreateFullCarAnalysisInfoExceptWheel_TestRigPath"></a> TestRigPath

Gets or sets the test rig path.

```csharp
public string TestRigPath { get; set; }
```

#### Property Value

 string

