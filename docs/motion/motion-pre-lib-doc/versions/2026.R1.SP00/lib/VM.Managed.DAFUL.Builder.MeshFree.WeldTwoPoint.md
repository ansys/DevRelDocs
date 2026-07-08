# Class WeldTwoPoint
<a id="VM_Managed_DAFUL_Builder_MeshFree_WeldTwoPoint"></a>

Namespace: [VM.Managed.DAFUL.Builder.MeshFree](VM.Managed.DAFUL.Builder.MeshFree.md)  
Assembly: VMBldMeshFree.dll  

```csharp
public class WeldTwoPoint : WeldNPoint, IBuilder
```

#### Inheritance

object ← 
[BuilderBase<Weld\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs) ← 
[BuilderSymmetric<Weld\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs) ← 
[BuilderNamed<Weld\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs) ← 
[WeldNPoint](VM.Managed.DAFUL.Builder.MeshFree.WeldNPoint.md) ← 
[WeldTwoPoint](VM.Managed.DAFUL.Builder.MeshFree.WeldTwoPoint.md)

#### Implements

IBuilder

#### Inherited Members

[WeldNPoint.Validate\(IList<string\>\)](VM.Managed.DAFUL.Builder.MeshFree.WeldNPoint.md\#VM\_Managed\_DAFUL\_Builder\_MeshFree\_WeldNPoint\_Validate\_System\_Collections\_Generic\_IList\_System\_String\_\_), 
[WeldNPoint.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.MeshFree.WeldNPoint.md\#VM\_Managed\_DAFUL\_Builder\_MeshFree\_WeldNPoint\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[WeldNPoint.SetInputResultData\(\)](VM.Managed.DAFUL.Builder.MeshFree.WeldNPoint.md\#VM\_Managed\_DAFUL\_Builder\_MeshFree\_WeldNPoint\_SetInputResultData), 
[WeldNPoint.NoOfElements](VM.Managed.DAFUL.Builder.MeshFree.WeldNPoint.md\#VM\_Managed\_DAFUL\_Builder\_MeshFree\_WeldNPoint\_NoOfElements), 
[WeldNPoint.MaterialProperty](VM.Managed.DAFUL.Builder.MeshFree.WeldNPoint.md\#VM\_Managed\_DAFUL\_Builder\_MeshFree\_WeldNPoint\_MaterialProperty), 
[WeldNPoint.Color](VM.Managed.DAFUL.Builder.MeshFree.WeldNPoint.md\#VM\_Managed\_DAFUL\_Builder\_MeshFree\_WeldNPoint\_Color), 
[WeldNPoint.Radius](VM.Managed.DAFUL.Builder.MeshFree.WeldNPoint.md\#VM\_Managed\_DAFUL\_Builder\_MeshFree\_WeldNPoint\_Radius), 
[WeldNPoint.ActionBody](VM.Managed.DAFUL.Builder.MeshFree.WeldNPoint.md\#VM\_Managed\_DAFUL\_Builder\_MeshFree\_WeldNPoint\_ActionBody), 
[WeldNPoint.BaseBody](VM.Managed.DAFUL.Builder.MeshFree.WeldNPoint.md\#VM\_Managed\_DAFUL\_Builder\_MeshFree\_WeldNPoint\_BaseBody), 
[WeldNPoint.Points](VM.Managed.DAFUL.Builder.MeshFree.WeldNPoint.md\#VM\_Managed\_DAFUL\_Builder\_MeshFree\_WeldNPoint\_Points), 
[WeldNPoint.Directions](VM.Managed.DAFUL.Builder.MeshFree.WeldNPoint.md\#VM\_Managed\_DAFUL\_Builder\_MeshFree\_WeldNPoint\_Directions), 
[WeldNPoint.Ranges](VM.Managed.DAFUL.Builder.MeshFree.WeldNPoint.md\#VM\_Managed\_DAFUL\_Builder\_MeshFree\_WeldNPoint\_Ranges), 
[BuilderNamed<Weld\>.OnPostBuild\(ObjectBase, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs), 
[BuilderNamed<Weld\>.CheckUnit\(Document3D, Document3D, string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs), 
[BuilderNamed<Weld\>.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs), 
[BuilderSymmetric<Weld\>.Build\(Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderSymmetric<Weld\>.Symmetric](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderSymmetric<Weld\>.CurrentSymmetric](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Weld\>.m\_bSuccess](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Weld\>.Build\(Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Weld\>.Build\(Document, List<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Weld\>.Validate\(IList<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Weld\>.Success\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Weld\>.OnPostBuild\(ObjectBase, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Weld\>.OnFinalBuild\(string, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Weld\>.OnObjectChangeBuild\(string, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Weld\>.OnPostAddDoc\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Weld\>.Parameters](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Weld\>.AddToDoc](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Weld\>.UseChangedObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Weld\>.SetPointKey](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Weld\>.BuildObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Weld\>.BuildDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Weld\>.UseInterface](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<Weld\>.ErrorMessage](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_MeshFree_WeldTwoPoint__ctor"></a> WeldTwoPoint\(\)

```csharp
public WeldTwoPoint()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_MeshFree_WeldTwoPoint_Number"></a> Number

```csharp
public Variable Number { get; set; }
```

#### Property Value

 Variable

## Methods

### <a id="VM_Managed_DAFUL_Builder_MeshFree_WeldTwoPoint_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Builder_MeshFree_WeldTwoPoint_SetInputResultData"></a> SetInputResultData\(\)

```csharp
protected override bool SetInputResultData()
```

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Builder_MeshFree_WeldTwoPoint_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` IList<string\>

#### Returns

 bool

