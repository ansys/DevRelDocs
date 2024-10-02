#  Class AnalysisParameterEigenvalue

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the eigenvalue analysis parameter.

```csharp
public class AnalysisParameterEigenvalue
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisParameterEigenvalue](VM.Managed.AnalysisParameterEigenvalue.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_AnalysisParameterEigenvalue__ctor"></a> AnalysisParameterEigenvalue\(\)

```csharp
public AnalysisParameterEigenvalue()
```

## Properties

### <a id="VM_Managed_AnalysisParameterEigenvalue_EigenParameter"></a> EigenParameter

Gets or sets the parameter.

```csharp
public EigenvalueAnalysisParameter EigenParameter { get; set; }
```

#### Property Value

 [EigenvalueAnalysisParameter](VM.Managed.EigenvalueAnalysisParameter.md)

### <a id="VM_Managed_AnalysisParameterEigenvalue_OwnerLinkContainer"></a> OwnerLinkContainer

Gets the owner.

```csharp
public LinkContainer OwnerLinkContainer { set; }
```

#### Property Value

 LinkContainer

### <a id="VM_Managed_AnalysisParameterEigenvalue_TypeForAnalysis"></a> TypeForAnalysis

Gets or sets the analysis type.

```csharp
public AnalysisParameterEigenvalue.AnalysisType TypeForAnalysis { get; set; }
```

#### Property Value

 [AnalysisParameterEigenvalue](VM.Managed.AnalysisParameterEigenvalue.md).[AnalysisType](VM.Managed.AnalysisParameterEigenvalue.AnalysisType.md)

## Methods

### <a id="VM_Managed_AnalysisParameterEigenvalue_SetModified"></a> SetModified\(\)

Set modified flag.

```csharp
protected void SetModified()
```

