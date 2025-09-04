#  Class DocCreateChainedInfo

Namespace: [VM.Managed.DAFUL.Chained](VM.Managed.DAFUL.Chained.md)  
Assembly: VMDChainedBase.dll  

This class is to represent the chained document information in [document create information].

```csharp
public class DocCreateChainedInfo : DocCreateAnalysisInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
DocCreateInfo ← 
DocCreate3DInfo ← 
DocCreateAnalysisInfo ← 
[DocCreateChainedInfo](VM.Managed.DAFUL.Chained.DocCreateChainedInfo.md)

#### Inherited Members

DocCreateAnalysisInfo.GravityX, 
DocCreateAnalysisInfo.GravityY, 
DocCreateAnalysisInfo.GravityZ, 
DocCreateAnalysisInfo.IncrementTime, 
DocCreateAnalysisInfo.UseIncrementTime, 
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

### <a id="VM_Managed_DAFUL_Chained_DocCreateChainedInfo__ctor"></a> DocCreateChainedInfo\(\)

```csharp
public DocCreateChainedInfo()
```

## Properties

### <a id="VM_Managed_DAFUL_Chained_DocCreateChainedInfo_WorkingPlane"></a> WorkingPlane

Gets or sets the working plane.

```csharp
public Plane WorkingPlane { get; set; }
```

#### Property Value

 Plane

