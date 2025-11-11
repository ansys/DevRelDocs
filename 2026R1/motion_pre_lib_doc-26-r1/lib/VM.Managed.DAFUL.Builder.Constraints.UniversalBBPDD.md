# Class UniversalBBPDD
<a id="VM_Managed_DAFUL_Builder_Constraints_UniversalBBPDD"></a>

Namespace: [VM.Managed.DAFUL.Builder.Constraints](VM.Managed.DAFUL.Builder.Constraints.md)  
Assembly: VMBldCP.dll  

```csharp
public class UniversalBBPDD : Connector<Universal, PropertyUniversal, OnePointPosition, TwoDirectionUniversal, NoneOrientation>, IBuilder
```

#### Inheritance

object ← 
[BuilderBase<Universal\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs) ← 
[BuilderSymmetric<Universal\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs) ← 
[BuilderNamed<Universal\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs) ← 
[Connector<Universal, PropertyUniversal, OnePointPosition, TwoDirectionUniversal, NoneOrientation\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs) ← 
[UniversalBBPDD](VM.Managed.DAFUL.Builder.Constraints.UniversalBBPDD.md)

#### Implements

IBuilder

#### Inherited Members

[Connector<Universal, PropertyUniversal, OnePointPosition, TwoDirectionUniversal, NoneOrientation\>.HookBeforeReplace\(Property\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[Connector<Universal, PropertyUniversal, OnePointPosition, TwoDirectionUniversal, NoneOrientation\>.OnPostBuild\(ObjectBase, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[Connector<Universal, PropertyUniversal, OnePointPosition, TwoDirectionUniversal, NoneOrientation\>.OnPostAddDoc\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[Connector<Universal, PropertyUniversal, OnePointPosition, TwoDirectionUniversal, NoneOrientation\>.BaseConnectable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[Connector<Universal, PropertyUniversal, OnePointPosition, TwoDirectionUniversal, NoneOrientation\>.ActionConnectable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[Connector<Universal, PropertyUniversal, OnePointPosition, TwoDirectionUniversal, NoneOrientation\>.AddToDoc](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[Connector<Universal, PropertyUniversal, OnePointPosition, TwoDirectionUniversal, NoneOrientation\>.BuildObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[BuilderNamed<Universal\>.OnPostBuild\(ObjectBase, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs), 
[BuilderNamed<Universal\>.CheckUnit\(Document3D, Document3D, string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs), 
[BuilderNamed<Universal\>.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs), 
[BuilderSymmetric<Universal\>.Build\(Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderSymmetric<Universal\>.Symmetric](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderSymmetric<Universal\>.CurrentSymmetric](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Universal\>.m\_bSuccess](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Universal\>.Build\(Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Universal\>.Build\(Document, List<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Universal\>.Validate\(IList<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Universal\>.Success\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Universal\>.OnPostBuild\(ObjectBase, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Universal\>.OnFinalBuild\(string, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Universal\>.OnObjectChangeBuild\(string, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Universal\>.OnPostAddDoc\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Universal\>.Parameters](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Universal\>.AddToDoc](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Universal\>.UseChangedObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Universal\>.SetPointKey](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Universal\>.BuildObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Universal\>.BuildDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Universal\>.UseInterface](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Universal\>.ErrorMessage](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Constraints_UniversalBBPDD__ctor"></a> UniversalBBPDD\(\)

```csharp
public UniversalBBPDD()
```

