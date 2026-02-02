#  Class DocCreateAnalysisInfo

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the analysis document information in [document create information].

```csharp
public class DocCreateAnalysisInfo : DocCreate3DInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
DocCreateInfo ← 
DocCreate3DInfo ← 
[DocCreateAnalysisInfo](VM.Managed.DocCreateAnalysisInfo.md)

#### Inherited Members

DocCreate3DInfo.IconSize, 
DocCreate3DInfo.IsAdvancedMode, 
DocCreate3DInfo.UseSymmetric, 
DocCreate3DInfo.SymmetricPlane, 
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

### <a id="VM_Managed_DocCreateAnalysisInfo__ctor"></a> DocCreateAnalysisInfo\(\)

```csharp
public DocCreateAnalysisInfo()
```

## Properties

### <a id="VM_Managed_DocCreateAnalysisInfo_GravityX"></a> GravityX

Gets or sets the X coordinate of gravity.

```csharp
public double GravityX { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DocCreateAnalysisInfo_GravityY"></a> GravityY

Gets or sets the gravity Y coordinate of gravity.

```csharp
public double GravityY { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DocCreateAnalysisInfo_GravityZ"></a> GravityZ

Gets or sets the gravity Z coordinate of gravity.

```csharp
public double GravityZ { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DocCreateAnalysisInfo_IncrementTime"></a> IncrementTime

Gets or sets the increment time.

```csharp
public double IncrementTime { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DocCreateAnalysisInfo_UseIncrementTime"></a> UseIncrementTime

Gets or sets the use increment time.

```csharp
public bool UseIncrementTime { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

