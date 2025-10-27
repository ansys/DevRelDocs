# Class SolidRoller
<a id="VM_Managed_DAFUL_Builder_Roller_SolidRoller"></a>

Namespace: [VM.Managed.DAFUL.Builder.Roller](VM.Managed.DAFUL.Builder.Roller.md)  
Assembly: VMBldRoller.dll  

```csharp
public abstract class SolidRoller : BuilderBase<BodyRoller>, IBuilder
```

#### Inheritance

object ← 
[BuilderBase<BodyRoller\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs) ← 
[SolidRoller](VM.Managed.DAFUL.Builder.Roller.SolidRoller.md)

#### Derived

[SolidRollerCenter](VM.Managed.DAFUL.Builder.Roller.SolidRollerCenter.md), 
[SolidRollerDouble](VM.Managed.DAFUL.Builder.Roller.SolidRollerDouble.md), 
[SolidRollerFlat](VM.Managed.DAFUL.Builder.Roller.SolidRollerFlat.md), 
[SolidRollerGeneral](VM.Managed.DAFUL.Builder.Roller.SolidRollerGeneral.md), 
[SolidRollerSingle](VM.Managed.DAFUL.Builder.Roller.SolidRollerSingle.md)

#### Implements

IBuilder

#### Inherited Members

[BuilderBase<BodyRoller\>.m\_bSuccess](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<BodyRoller\>.Build\(Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<BodyRoller\>.Build\(Document, List<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<BodyRoller\>.Validate\(IList<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<BodyRoller\>.Success\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<BodyRoller\>.OnPostBuild\(ObjectBase, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<BodyRoller\>.OnFinalBuild\(string, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<BodyRoller\>.OnObjectChangeBuild\(string, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<BodyRoller\>.OnPostAddDoc\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<BodyRoller\>.Parameters](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<BodyRoller\>.AddToDoc](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<BodyRoller\>.UseChangedObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<BodyRoller\>.SetPointKey](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<BodyRoller\>.BuildObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<BodyRoller\>.BuildDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<BodyRoller\>.UseInterface](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<BodyRoller\>.ErrorMessage](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidRoller__ctor"></a> SolidRoller\(\)

```csharp
protected SolidRoller()
```

## Fields

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidRoller_m_TreadRadius"></a> m\_TreadRadius

```csharp
protected double m_TreadRadius
```

#### Field Value

 double

## Properties

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidRoller_AddToDoc"></a> AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidRoller_Color"></a> Color

```csharp
public string Color { get; set; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidRoller_GetCurrentBuilder"></a> GetCurrentBuilder\(\)

```csharp
protected virtual Builder GetCurrentBuilder()
```

#### Returns

 Builder

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidRoller_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidRoller_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override sealed bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 bool

