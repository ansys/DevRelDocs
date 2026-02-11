# <a id="OpenTDDemos_Robot_Arm"></a> Class Arm

Namespace: [OpenTDDemos.Robot](OpenTDDemos.Robot.md)  
Assembly: OpenTDDemos.dll  

```csharp
public class Arm
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Arm](OpenTDDemos.Robot.Arm.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTDDemos_Robot_Arm__ctor_OpenTD_ThermalDesktop_"></a> Arm\(ThermalDesktop\)

```csharp
public Arm(ThermalDesktop tdInstance)
```

#### Parameters

`tdInstance` ThermalDesktop

## Properties

### <a id="OpenTDDemos_Robot_Arm_AttachedObjectHandles"></a> AttachedObjectHandles

```csharp
public List<string> AttachedObjectHandles { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTDDemos_Robot_Arm_BaseTrans"></a> BaseTrans

```csharp
public Matrix3d BaseTrans { get; }
```

#### Property Value

 Matrix3d

### <a id="OpenTDDemos_Robot_Arm_ElbowPitchDeg"></a> ElbowPitchDeg

```csharp
public double ElbowPitchDeg { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTDDemos_Robot_Arm_Handle"></a> Handle

```csharp
public string Handle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTDDemos_Robot_Arm_LocalTrans"></a> LocalTrans

```csharp
public Transformation LocalTrans { get; }
```

#### Property Value

 Transformation

### <a id="OpenTDDemos_Robot_Arm_LowerArmLength"></a> LowerArmLength

```csharp
public Dimensional<ModelLength> LowerArmLength { get; }
```

#### Property Value

 Dimensional<ModelLength\>

### <a id="OpenTDDemos_Robot_Arm_LowerArmWidth"></a> LowerArmWidth

```csharp
public Dimensional<ModelLength> LowerArmWidth { get; }
```

#### Property Value

 Dimensional<ModelLength\>

### <a id="OpenTDDemos_Robot_Arm_ShoulderPitchDeg"></a> ShoulderPitchDeg

```csharp
public double ShoulderPitchDeg { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTDDemos_Robot_Arm_ShoulderYawDeg"></a> ShoulderYawDeg

```csharp
public double ShoulderYawDeg { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTDDemos_Robot_Arm_UpperArmLength"></a> UpperArmLength

```csharp
public Dimensional<ModelLength> UpperArmLength { get; }
```

#### Property Value

 Dimensional<ModelLength\>

### <a id="OpenTDDemos_Robot_Arm_UpperArmWidth"></a> UpperArmWidth

```csharp
public Dimensional<ModelLength> UpperArmWidth { get; }
```

#### Property Value

 Dimensional<ModelLength\>

## Methods

### <a id="OpenTDDemos_Robot_Arm_Delete"></a> Delete\(\)

```csharp
public void Delete()
```

### <a id="OpenTDDemos_Robot_Arm_Update"></a> Update\(\)

```csharp
public void Update()
```

### <a id="OpenTDDemos_Robot_Arm_UpdateFromTD"></a> UpdateFromTD\(\)

```csharp
public void UpdateFromTD()
```

