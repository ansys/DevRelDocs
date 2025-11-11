# Class AddPointloadToShaft
<a id="VM_Managed_DAFUL_Builder_GearTrain_AddPointloadToShaft"></a>

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class AddPointloadToShaft : AddPointEntityToShaft<PseudoPointLoad>, IBuilder
```

#### Inheritance

object ← 
[BuilderBase<PseudoPointLoad\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs) ← 
[BuilderSymmetric<PseudoPointLoad\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs) ← 
[BuilderNamed<PseudoPointLoad\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs) ← 
[AddPointEntityToShaft<PseudoPointLoad\>](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md) ← 
[AddPointloadToShaft](VM.Managed.DAFUL.Builder.GearTrain.AddPointloadToShaft.md)

#### Implements

IBuilder

#### Inherited Members

[AddPointEntityToShaft<PseudoPointLoad\>.m\_dOffset](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_dOffset), 
[AddPointEntityToShaft<PseudoPointLoad\>.m\_dReferPoint](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_dReferPoint), 
[AddPointEntityToShaft<PseudoPointLoad\>.m\_dWitdh](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_dWitdh), 
[AddPointEntityToShaft<PseudoPointLoad\>.m\_typeRef](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_typeRef), 
[AddPointEntityToShaft<PseudoPointLoad\>.CheckOnShaftSet\(Document\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_CheckOnShaftSet\_VM\_Managed\_Document\_), 
[AddPointEntityToShaft<PseudoPointLoad\>.CheckContainsEntity\(HiddenShaftSetDocument\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_CheckContainsEntity\_VM\_Managed\_DAFUL\_GearTrain\_HiddenShaftSetDocument\_), 
[AddPointEntityToShaft<PseudoPointLoad\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[AddPointEntityToShaft<PseudoPointLoad\>.InputArray](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_InputArray), 
[BuilderNamed<PseudoPointLoad\>.OnPostBuild\(ObjectBase, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs), 
[BuilderNamed<PseudoPointLoad\>.CheckUnit\(Document3D, Document3D, string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs), 
[BuilderNamed<PseudoPointLoad\>.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs), 
[BuilderSymmetric<PseudoPointLoad\>.Build\(Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderSymmetric<PseudoPointLoad\>.Symmetric](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderSymmetric<PseudoPointLoad\>.CurrentSymmetric](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<PseudoPointLoad\>.m\_bSuccess](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<PseudoPointLoad\>.Build\(Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<PseudoPointLoad\>.Build\(Document, List<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<PseudoPointLoad\>.Validate\(IList<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<PseudoPointLoad\>.Success\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<PseudoPointLoad\>.OnPostBuild\(ObjectBase, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<PseudoPointLoad\>.OnFinalBuild\(string, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<PseudoPointLoad\>.OnObjectChangeBuild\(string, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<PseudoPointLoad\>.OnPostAddDoc\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<PseudoPointLoad\>.Parameters](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<PseudoPointLoad\>.AddToDoc](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<PseudoPointLoad\>.UseChangedObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<PseudoPointLoad\>.SetPointKey](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<PseudoPointLoad\>.BuildObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<PseudoPointLoad\>.BuildDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<PseudoPointLoad\>.UseInterface](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<PseudoPointLoad\>.ErrorMessage](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddPointloadToShaft__ctor"></a> AddPointloadToShaft\(\)

```csharp
public AddPointloadToShaft()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddPointloadToShaft_CheckContainsEntity_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_"></a> CheckContainsEntity\(HiddenShaftSetDocument\)

```csharp
protected override bool CheckContainsEntity(HiddenShaftSetDocument hiddenDoc)
```

#### Parameters

`hiddenDoc` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddPointloadToShaft_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 bool

