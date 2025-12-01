# Class RevoluteBBPD
<a id="VM_Managed_DAFUL_Builder_Constraints_RevoluteBBPD"></a>

Namespace: [VM.Managed.DAFUL.Builder.Constraints](VM.Managed.DAFUL.Builder.Constraints.md)  
Assembly: VMBldCB.dll  

```csharp
public class RevoluteBBPD : Connector<Revolute, PropertyRevolute, OnePointPosition, OneDirection, NoneOrientation>, IBuilder
```

#### Inheritance

object ← 
[BuilderBase<Revolute\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs) ← 
[BuilderSymmetric<Revolute\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs) ← 
[BuilderNamed<Revolute\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs) ← 
[Connector<Revolute, PropertyRevolute, OnePointPosition, OneDirection, NoneOrientation\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs) ← 
[RevoluteBBPD](VM.Managed.DAFUL.Builder.Constraints.RevoluteBBPD.md)

#### Implements

IBuilder

#### Inherited Members

[Connector<Revolute, PropertyRevolute, OnePointPosition, OneDirection, NoneOrientation\>.HookBeforeReplace\(Property\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[Connector<Revolute, PropertyRevolute, OnePointPosition, OneDirection, NoneOrientation\>.OnPostBuild\(ObjectBase, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[Connector<Revolute, PropertyRevolute, OnePointPosition, OneDirection, NoneOrientation\>.OnPostAddDoc\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[Connector<Revolute, PropertyRevolute, OnePointPosition, OneDirection, NoneOrientation\>.BaseConnectable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[Connector<Revolute, PropertyRevolute, OnePointPosition, OneDirection, NoneOrientation\>.ActionConnectable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[Connector<Revolute, PropertyRevolute, OnePointPosition, OneDirection, NoneOrientation\>.AddToDoc](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[Connector<Revolute, PropertyRevolute, OnePointPosition, OneDirection, NoneOrientation\>.BuildObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/Connector.cs), 
[BuilderNamed<Revolute\>.OnPostBuild\(ObjectBase, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs), 
[BuilderNamed<Revolute\>.CheckUnit\(Document3D, Document3D, string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs), 
[BuilderNamed<Revolute\>.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs), 
[BuilderSymmetric<Revolute\>.Build\(Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderSymmetric<Revolute\>.Symmetric](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderSymmetric<Revolute\>.CurrentSymmetric](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Revolute\>.m\_bSuccess](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Revolute\>.Build\(Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Revolute\>.Build\(Document, List<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Revolute\>.Validate\(IList<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Revolute\>.Success\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Revolute\>.OnPostBuild\(ObjectBase, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Revolute\>.OnFinalBuild\(string, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Revolute\>.OnObjectChangeBuild\(string, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Revolute\>.OnPostAddDoc\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Revolute\>.Parameters](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Revolute\>.AddToDoc](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Revolute\>.UseChangedObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Revolute\>.SetPointKey](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Revolute\>.BuildObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Revolute\>.BuildDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Revolute\>.UseInterface](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Revolute\>.ErrorMessage](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Constraints_RevoluteBBPD__ctor"></a> RevoluteBBPD\(\)

```csharp
public RevoluteBBPD()
```

