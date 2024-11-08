#  Class HiddenCreateInfo

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the hidden document information in [document create information].

```csharp
public class HiddenCreateInfo : DocCreateAnalysisInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
DocCreateInfo ← 
DocCreate3DInfo ← 
DocCreateAnalysisInfo ← 
[HiddenCreateInfo](VM.Managed.DAFUL.HiddenCreateInfo.md)

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

### <a id="VM_Managed_DAFUL_HiddenCreateInfo__ctor"></a> HiddenCreateInfo\(\)

```csharp
public HiddenCreateInfo()
```

## Fields

### <a id="VM_Managed_DAFUL_HiddenCreateInfo_Assembly"></a> Assembly

The assembly

```csharp
public string Assembly
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_HiddenCreateInfo_IsRotation"></a> IsRotation

The is rotation

```csharp
public bool IsRotation
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_HiddenCreateInfo_UserControls"></a> UserControls

The usercontrols

```csharp
public List<HiddenCreateInfo.UserControlInfo> UserControls
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[HiddenCreateInfo](VM.Managed.DAFUL.HiddenCreateInfo.md).[UserControlInfo](VM.Managed.DAFUL.HiddenCreateInfo.UserControlInfo.md)\>

### <a id="VM_Managed_DAFUL_HiddenCreateInfo_ViewPlane"></a> ViewPlane

The view plane

```csharp
public string ViewPlane
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

