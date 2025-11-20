# Class BuilderParamShaft
<a id="VM_Managed_DAFUL_BuilderParamShaft"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDBallPlacing.dll  

The class for shaft builder.

```csharp
public class BuilderParamShaft : BuilderParamColorGeom
```

#### Inheritance

object ← 
[BuilderParamBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs) ← 
[BuilderParamColorGeom](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamColorGeom.cs) ← 
[BuilderParamShaft](VM.Managed.DAFUL.BuilderParamShaft.md)

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_BuilderParamShaft__ctor"></a> BuilderParamShaft\(\)

```csharp
public BuilderParamShaft()
```

## Properties

### <a id="VM_Managed_DAFUL_BuilderParamShaft_BallDiameter"></a> BallDiameter

Gets and sets the ball diameter.

```csharp
public double BallDiameter { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_BuilderParamShaft_IsRight"></a> IsRight

Gets or sets a value indicating whether screw is right handed.

```csharp
public bool IsRight { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_BuilderParamShaft_Lead"></a> Lead

Gets and sets the lead.

```csharp
public double Lead { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_BuilderParamShaft_Position"></a> Position

Gets and sets the position.

```csharp
public Vector Position { get; set; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_BuilderParamShaft_ShaftChamperAngle"></a> ShaftChamperAngle

Gets and sets the shaft champer angle.

```csharp
public double ShaftChamperAngle { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_BuilderParamShaft_ShaftConformity"></a> ShaftConformity

Gets and sets the shaft conformity.

```csharp
public double ShaftConformity { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_BuilderParamShaft_ShaftContactAngle"></a> ShaftContactAngle

Gets and sets the shaft contact angle.

```csharp
public double ShaftContactAngle { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_BuilderParamShaft_ShaftLength"></a> ShaftLength

Gets and sets the shaft length.

```csharp
public double ShaftLength { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_BuilderParamShaft_ShaftOuterRadius"></a> ShaftOuterRadius

Gets and sets the shaft outer radius.

```csharp
public double ShaftOuterRadius { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_BuilderParamShaft_ShaftPCD"></a> ShaftPCD

Gets and sets the shaft PCD.

```csharp
public double ShaftPCD { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_BuilderParamShaft_ShaftScrewEndLength"></a> ShaftScrewEndLength

Gets and sets the shaft screw end length.

```csharp
public double ShaftScrewEndLength { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_BuilderParamShaft_ShaftScrewStartAngle"></a> ShaftScrewStartAngle

Gets and sets the shaft screw start angle.

```csharp
public double ShaftScrewStartAngle { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_BuilderParamShaft_ShaftScrewStartLength"></a> ShaftScrewStartLength

Gets and sets the shaft screw start length.

```csharp
public double ShaftScrewStartLength { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_BuilderParamShaft_ShaftShoulderRadius"></a> ShaftShoulderRadius

Gets and sets the shaft shoulder radius.

```csharp
public double ShaftShoulderRadius { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_BuilderParamShaft_ShaftShoulderType"></a> ShaftShoulderType

Gets and sets the shaft shoulder type.

```csharp
public int ShaftShoulderType { get; set; }
```

#### Property Value

 int

### <a id="VM_Managed_DAFUL_BuilderParamShaft_ShaftStartArcAngle"></a> ShaftStartArcAngle

Gets and sets the shaft start arc angle.

```csharp
public double ShaftStartArcAngle { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_BuilderParamShaft_XAxis"></a> XAxis

Gets and sets the x-axis.

```csharp
public Vector XAxis { get; set; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_BuilderParamShaft_ZAxis"></a> ZAxis

Gets and sets the z-axis.

```csharp
public Vector ZAxis { get; set; }
```

#### Property Value

 Vector

