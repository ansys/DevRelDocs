#  Class DocCreateCarAnalysisInfo

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The car analysis document create information

```csharp
public class DocCreateCarAnalysisInfo : DocFromTemplateInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
DocCreateInfo ← 
DocFromTemplateInfo ← 
[DocCreateCarAnalysisInfo](VM.Managed.DAFUL.Car.DocCreateCarAnalysisInfo.md)

#### Derived

[DocCreateFullCarAnalysisInfoExceptWheel](VM.Managed.DAFUL.Car.DocCreateFullCarAnalysisInfoExceptWheel.md), 
[DocCreateHalfCarAnalysisInfo](VM.Managed.DAFUL.Car.DocCreateHalfCarAnalysisInfo.md), 
[DocCreateTireTestrigAnalysisInfo](VM.Managed.DAFUL.Car.DocCreateTireTestrigAnalysisInfo.md)

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_Car_DocCreateCarAnalysisInfo__ctor"></a> DocCreateCarAnalysisInfo\(\)

```csharp
public DocCreateCarAnalysisInfo()
```

## Properties

### <a id="VM_Managed_DAFUL_Car_DocCreateCarAnalysisInfo_GravityX"></a> GravityX

Gets or sets the X coordinate of gravity.

```csharp
public double GravityX { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_DocCreateCarAnalysisInfo_GravityY"></a> GravityY

Gets or sets the gravity Y coordinate of gravity.

```csharp
public double GravityY { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_DocCreateCarAnalysisInfo_GravityZ"></a> GravityZ

Gets or sets the gravity Z coordinate of gravity.

```csharp
public double GravityZ { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_DocCreateCarAnalysisInfo_IconSize"></a> IconSize

Gets or sets the icon size.

```csharp
public double IconSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_DocCreateCarAnalysisInfo_IncrementTime"></a> IncrementTime

Gets or sets the increment time.

```csharp
public double IncrementTime { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_DocCreateCarAnalysisInfo_UseIncrementTime"></a> UseIncrementTime

Gets or sets the use increment time.

```csharp
public bool UseIncrementTime { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

