# Class BuilderParamRoller
<a id="VM_CAD_Builders_Links_BuilderParamRoller"></a>

Namespace: [VM.CAD.Builders.Links](VM.CAD.Builders.Links.md)  
Assembly: VM.CAD.Builders.Links.dll  

```csharp
public class BuilderParamRoller : BuilderParamTransform
```

#### Inheritance

object ← 
[BuilderParamBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs) ← 
[BuilderParamColorGeom](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamColorGeom.cs) ← 
[BuilderParamTransform](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamTransform.cs) ← 
[BuilderParamRoller](VM.CAD.Builders.Links.BuilderParamRoller.md)

#### Inherited Members

[BuilderParamTransform.Transform](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamTransform.cs), 
[BuilderParamColorGeom.Color](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamColorGeom.cs), 
[BuilderParamBase.ToXmlString\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs), 
[BuilderParamBase.FinalizeParameter\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs), 
[BuilderParamBase.SetTypeName\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs), 
[BuilderParamBase.Key](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs), 
[BuilderParamBase.TypeName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs), 
[BuilderParamBase.Transparency](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_CAD_Builders_Links_BuilderParamRoller__ctor"></a> BuilderParamRoller\(\)

```csharp
public BuilderParamRoller()
```

## Properties

### <a id="VM_CAD_Builders_Links_BuilderParamRoller_Axis"></a> Axis

```csharp
public Vector Axis { get; set; }
```

#### Property Value

 Vector

### <a id="VM_CAD_Builders_Links_BuilderParamRoller_CenterPosition"></a> CenterPosition

```csharp
public Vector CenterPosition { get; set; }
```

#### Property Value

 Vector

### <a id="VM_CAD_Builders_Links_BuilderParamRoller_Cylinders"></a> Cylinders

```csharp
public List<BuilderParamCylinder> Cylinders { get; set; }
```

#### Property Value

 List<[BuilderParamCylinder](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamCylinder.cs)\>

### <a id="VM_CAD_Builders_Links_BuilderParamRoller_Profile"></a> Profile

```csharp
public List<Vector> Profile { get; set; }
```

#### Property Value

 List<Vector\>

