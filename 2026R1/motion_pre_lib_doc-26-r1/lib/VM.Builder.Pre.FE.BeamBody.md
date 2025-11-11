# Class BeamBody
<a id="VM_Builder_Pre_FE_BeamBody"></a>

Namespace: [VM.Builder.Pre.FE](VM.Builder.Pre.FE.md)  
Assembly: VM.Builder.Pre.FE.dll  

```csharp
public class BeamBody : IBuilder
```

#### Inheritance

object ← 
[BeamBody](VM.Builder.Pre.FE.BeamBody.md)

#### Implements

IBuilder

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Builder_Pre_FE_BeamBody__ctor"></a> BeamBody\(\)

```csharp
public BeamBody()
```

## Properties

### <a id="VM_Builder_Pre_FE_BeamBody_EndPoint"></a> EndPoint

```csharp
public PointBase EndPoint { get; }
```

#### Property Value

 PointBase

### <a id="VM_Builder_Pre_FE_BeamBody_MeshFilePath"></a> MeshFilePath

```csharp
public string MeshFilePath { get; set; }
```

#### Property Value

 string

### <a id="VM_Builder_Pre_FE_BeamBody_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 string

### <a id="VM_Builder_Pre_FE_BeamBody_NoOfBeamNodes"></a> NoOfBeamNodes

```csharp
public int NoOfBeamNodes { get; set; }
```

#### Property Value

 int

### <a id="VM_Builder_Pre_FE_BeamBody_NoOfCircularNodes"></a> NoOfCircularNodes

```csharp
public int NoOfCircularNodes { get; set; }
```

#### Property Value

 int

### <a id="VM_Builder_Pre_FE_BeamBody_NodalBody"></a> NodalBody

```csharp
public NodalBody NodalBody { get; }
```

#### Property Value

 NodalBody

### <a id="VM_Builder_Pre_FE_BeamBody_Parameters"></a> Parameters

```csharp
public PickedResult[] Parameters { get; set; }
```

#### Property Value

 [PickedResult](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/PickedResult.cs)\[\]

### <a id="VM_Builder_Pre_FE_BeamBody_Radius"></a> Radius

```csharp
public double Radius { get; set; }
```

#### Property Value

 double

### <a id="VM_Builder_Pre_FE_BeamBody_StartPoint"></a> StartPoint

```csharp
public PointBase StartPoint { get; }
```

#### Property Value

 PointBase

### <a id="VM_Builder_Pre_FE_BeamBody_YDirection"></a> YDirection

```csharp
public DirectionBase YDirection { get; }
```

#### Property Value

 DirectionBase

