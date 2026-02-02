# Class VectorBBPP
<a id="VM_Managed_DAFUL_Builder_Force_VectorBBPP"></a>

Namespace: [VM.Managed.DAFUL.Builder.Force](VM.Managed.DAFUL.Builder.Force.md)  
Assembly: VMBldFP.dll  

```csharp
public class VectorBBPP : Connector<Vector, PropertyVector, TwoPointPosition, NoneDirection, NoneOrientation>, IBuilder
```

#### Inheritance

object ← 
[BuilderBase<Vector\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs) ← 
[BuilderSymmetric<Vector\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs) ← 
[BuilderNamed<Vector\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs) ← 
[Connector<Vector, PropertyVector, TwoPointPosition, NoneDirection, NoneOrientation\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs) ← 
[VectorBBPP](VM.Managed.DAFUL.Builder.Force.VectorBBPP.md)

#### Implements

IBuilder

#### Inherited Members

[Connector<Vector, PropertyVector, TwoPointPosition, NoneDirection, NoneOrientation\>.HookBeforeReplace\(Property\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[Connector<Vector, PropertyVector, TwoPointPosition, NoneDirection, NoneOrientation\>.OnPostBuild\(ObjectBase, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[Connector<Vector, PropertyVector, TwoPointPosition, NoneDirection, NoneOrientation\>.OnPostAddDoc\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[Connector<Vector, PropertyVector, TwoPointPosition, NoneDirection, NoneOrientation\>.BaseConnectable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[Connector<Vector, PropertyVector, TwoPointPosition, NoneDirection, NoneOrientation\>.ActionConnectable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[Connector<Vector, PropertyVector, TwoPointPosition, NoneDirection, NoneOrientation\>.AddToDoc](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[Connector<Vector, PropertyVector, TwoPointPosition, NoneDirection, NoneOrientation\>.BuildObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[BuilderNamed<Vector\>.OnPostBuild\(ObjectBase, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs), 
[BuilderNamed<Vector\>.CheckUnit\(Document3D, Document3D, string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs), 
[BuilderNamed<Vector\>.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs), 
[BuilderSymmetric<Vector\>.Build\(Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderSymmetric<Vector\>.Symmetric](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderSymmetric<Vector\>.CurrentSymmetric](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Vector\>.m\_bSuccess](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Vector\>.Build\(Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Vector\>.Build\(Document, List<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Vector\>.Validate\(IList<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Vector\>.Success\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Vector\>.OnPostBuild\(ObjectBase, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Vector\>.OnFinalBuild\(string, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Vector\>.OnObjectChangeBuild\(string, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Vector\>.OnPostAddDoc\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Vector\>.Parameters](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Vector\>.AddToDoc](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Vector\>.UseChangedObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Vector\>.SetPointKey](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Vector\>.BuildObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Vector\>.BuildDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Vector\>.UseInterface](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Vector\>.ErrorMessage](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Force_VectorBBPP__ctor"></a> VectorBBPP\(\)

```csharp
public VectorBBPP()
```

