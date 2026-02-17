# <a id="OpenTDDemos_Robot_Head"></a> Class Head

Namespace: [OpenTDDemos.Robot](OpenTDDemos.Robot.md)  
Assembly: OpenTDDemos.dll  

```csharp
public class Head
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Head](OpenTDDemos.Robot.Head.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTDDemos_Robot_Head__ctor_OpenTD_ThermalDesktop_"></a> Head\(ThermalDesktop\)

```csharp
public Head(ThermalDesktop tdInstance)
```

#### Parameters

`tdInstance` ThermalDesktop

## Properties

### <a id="OpenTDDemos_Robot_Head_AttachedObjectHandles"></a> AttachedObjectHandles

```csharp
public List<string> AttachedObjectHandles { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTDDemos_Robot_Head_BaseTrans"></a> BaseTrans

```csharp
public Matrix3d BaseTrans { get; }
```

#### Property Value

 Matrix3d

### <a id="OpenTDDemos_Robot_Head_Handle"></a> Handle

```csharp
public string Handle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTDDemos_Robot_Head_LocalTrans"></a> LocalTrans

```csharp
public Transformation LocalTrans { get; }
```

#### Property Value

 Transformation

### <a id="OpenTDDemos_Robot_Head_NeckYawDeg"></a> NeckYawDeg

```csharp
public double NeckYawDeg { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="OpenTDDemos_Robot_Head_Delete"></a> Delete\(\)

```csharp
public void Delete()
```

### <a id="OpenTDDemos_Robot_Head_Update"></a> Update\(\)

```csharp
public void Update()
```

### <a id="OpenTDDemos_Robot_Head_UpdateFromTD"></a> UpdateFromTD\(\)

```csharp
public void UpdateFromTD()
```

