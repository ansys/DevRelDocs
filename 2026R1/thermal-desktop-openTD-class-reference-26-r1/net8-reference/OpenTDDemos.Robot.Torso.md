# <a id="OpenTDDemos_Robot_Torso"></a> Class Torso

Namespace: [OpenTDDemos.Robot](OpenTDDemos.Robot.md)  
Assembly: OpenTDDemos.dll  

```csharp
public class Torso
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Torso](OpenTDDemos.Robot.Torso.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTDDemos_Robot_Torso__ctor_OpenTD_ThermalDesktop_"></a> Torso\(ThermalDesktop\)

```csharp
public Torso(ThermalDesktop tdInstance)
```

#### Parameters

`tdInstance` ThermalDesktop

## Properties

### <a id="OpenTDDemos_Robot_Torso_AttachedObjectHandles"></a> AttachedObjectHandles

```csharp
public List<string> AttachedObjectHandles { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTDDemos_Robot_Torso_BaseTrans"></a> BaseTrans

```csharp
public Matrix3d BaseTrans { get; }
```

#### Property Value

 Matrix3d

### <a id="OpenTDDemos_Robot_Torso_Handle"></a> Handle

```csharp
public string Handle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTDDemos_Robot_Torso_Height"></a> Height

```csharp
public Dimensional<ModelLength> Height { get; }
```

#### Property Value

 Dimensional<ModelLength\>

### <a id="OpenTDDemos_Robot_Torso_LocalTrans"></a> LocalTrans

```csharp
public Transformation LocalTrans { get; }
```

#### Property Value

 Transformation

### <a id="OpenTDDemos_Robot_Torso_WaistPitchDeg"></a> WaistPitchDeg

```csharp
public double WaistPitchDeg { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTDDemos_Robot_Torso_WaistYawDeg"></a> WaistYawDeg

```csharp
public double WaistYawDeg { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTDDemos_Robot_Torso_Width"></a> Width

```csharp
public Dimensional<ModelLength> Width { get; }
```

#### Property Value

 Dimensional<ModelLength\>

## Methods

### <a id="OpenTDDemos_Robot_Torso_Delete"></a> Delete\(\)

```csharp
public void Delete()
```

### <a id="OpenTDDemos_Robot_Torso_Update"></a> Update\(\)

```csharp
public void Update()
```

### <a id="OpenTDDemos_Robot_Torso_UpdateFromTD"></a> UpdateFromTD\(\)

```csharp
public void UpdateFromTD()
```

