#  Class BuilderParamMotorBase

Namespace: [VM.CAD.Builders.DriveTrain](VM.CAD.Builders.DriveTrain.md)  
Assembly: VM.CAD.Builders.DriveTrain.dll  

```csharp
public abstract class BuilderParamMotorBase : BuilderParamColorGeom
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderParamBase ← 
BuilderParamColorGeom ← 
[BuilderParamMotorBase](VM.CAD.Builders.DriveTrain.BuilderParamMotorBase.md)

#### Derived

[BuilderParamMotorHousing](VM.CAD.Builders.DriveTrain.BuilderParamMotorHousing.md), 
[BuilderParamMotorRotor](VM.CAD.Builders.DriveTrain.BuilderParamMotorRotor.md), 
[BuilderParamMotorStator](VM.CAD.Builders.DriveTrain.BuilderParamMotorStator.md)

#### Inherited Members

BuilderParamColorGeom.Color, 
BuilderParamBase.ToXmlString\(\), 
BuilderParamBase.FinalizeParameter\(\), 
BuilderParamBase.SetTypeName\(\), 
BuilderParamBase.Key, 
BuilderParamBase.TypeName, 
BuilderParamBase.Transparency

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_CAD_Builders_DriveTrain_BuilderParamMotorBase__ctor"></a> BuilderParamMotorBase\(\)

```csharp
protected BuilderParamMotorBase()
```

## Properties

### <a id="VM_CAD_Builders_DriveTrain_BuilderParamMotorBase_Depth"></a> Depth

```csharp
public double Depth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_DriveTrain_BuilderParamMotorBase_RotateAxis"></a> RotateAxis

```csharp
public Vector RotateAxis { get; set; }
```

#### Property Value

 Vector

### <a id="VM_CAD_Builders_DriveTrain_BuilderParamMotorBase_StartPosition"></a> StartPosition

```csharp
public Vector StartPosition { get; set; }
```

#### Property Value

 Vector

