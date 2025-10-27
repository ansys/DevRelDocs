# Class DocCreateChainedInfo
<a id="VM_Managed_DAFUL_Chained_DocCreateChainedInfo"></a>

Namespace: [VM.Managed.DAFUL.Chained](VM.Managed.DAFUL.Chained.md)  
Assembly: VMDChainedBase.dll  

This class is to represent the chained document information in [document create information].

```csharp
public class DocCreateChainedInfo : DocCreateAnalysisInfo
```

#### Inheritance

object ← 
DocCreateInfo ← 
DocCreate3DInfo ← 
[DocCreateAnalysisInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/DocCreate3DInfo.cs) ← 
[DocCreateChainedInfo](VM.Managed.DAFUL.Chained.DocCreateChainedInfo.md)

#### Inherited Members

[DocCreateAnalysisInfo.GravityX](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/DocCreate3DInfo.cs), 
[DocCreateAnalysisInfo.GravityY](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/DocCreate3DInfo.cs), 
[DocCreateAnalysisInfo.GravityZ](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/DocCreate3DInfo.cs), 
[DocCreateAnalysisInfo.IncrementTime](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/DocCreate3DInfo.cs), 
[DocCreateAnalysisInfo.UseIncrementTime](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/DocCreate3DInfo.cs), 
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

