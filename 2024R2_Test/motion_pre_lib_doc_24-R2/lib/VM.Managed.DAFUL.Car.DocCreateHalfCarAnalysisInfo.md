# Class DocCreateHalfCarAnalysisInfo

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The half car analysis document create information

```csharp
public class DocCreateHalfCarAnalysisInfo : DocCreateCarAnalysisInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
DocCreateInfo ← 
DocFromTemplateInfo ← 
[DocCreateCarAnalysisInfo](VM.Managed.DAFUL.Car.DocCreateCarAnalysisInfo.md) ← 
[DocCreateHalfCarAnalysisInfo](VM.Managed.DAFUL.Car.DocCreateHalfCarAnalysisInfo.md)

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

### DocCreateHalfCarAnalysisInfo\(\)

```csharp
public DocCreateHalfCarAnalysisInfo()
```

## Properties

### AssemblyPath

Gets or sets the assembly path.

```csharp
public string AssemblyPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### IsOther

Gets or sets a value indicating whether document has other subsystem or not.

```csharp
public bool IsOther { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSteering

Gets or sets a value indicating whether document has steering or not.

```csharp
public bool IsSteering { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OtherPath

Gets or sets the other path.

```csharp
public string OtherPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SteeringPath

Gets or sets the steering path.

```csharp
public string SteeringPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SuspensionPath

Gets or sets the suspension path.

```csharp
public string SuspensionPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TestRigPath

Gets or sets the test rig path.

```csharp
public string TestRigPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)


