# <a id="OpenTDDemos_Robot_LowerBody"></a> Class LowerBody

Namespace: [OpenTDDemos.Robot](OpenTDDemos.Robot.md)  
Assembly: OpenTDDemos.dll  

```csharp
public class LowerBody
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LowerBody](OpenTDDemos.Robot.LowerBody.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTDDemos_Robot_LowerBody__ctor_OpenTD_ThermalDesktop_"></a> LowerBody\(ThermalDesktop\)

```csharp
public LowerBody(ThermalDesktop tdInstance)
```

#### Parameters

`tdInstance` ThermalDesktop

## Properties

### <a id="OpenTDDemos_Robot_LowerBody_AttachedObjectHandles"></a> AttachedObjectHandles

```csharp
public List<string> AttachedObjectHandles { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTDDemos_Robot_LowerBody_BaseTrans"></a> BaseTrans

```csharp
public Matrix3d BaseTrans { get; }
```

#### Property Value

 Matrix3d

### <a id="OpenTDDemos_Robot_LowerBody_Handle"></a> Handle

```csharp
public string Handle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTDDemos_Robot_LowerBody_LocalTrans"></a> LocalTrans

```csharp
public Transformation LocalTrans { get; }
```

#### Property Value

 Transformation

### <a id="OpenTDDemos_Robot_LowerBody_PedestalHeight"></a> PedestalHeight

```csharp
public Dimensional<ModelLength> PedestalHeight { get; }
```

#### Property Value

 Dimensional<ModelLength\>

## Methods

### <a id="OpenTDDemos_Robot_LowerBody_Delete"></a> Delete\(\)

```csharp
public void Delete()
```

### <a id="OpenTDDemos_Robot_LowerBody_Update"></a> Update\(\)

```csharp
public void Update()
```

### <a id="OpenTDDemos_Robot_LowerBody_UpdateFromTD"></a> UpdateFromTD\(\)

```csharp
public void UpdateFromTD()
```

