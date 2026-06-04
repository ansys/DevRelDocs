# Class OpenTDObject

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Base class for client-side objects linked to entities in a TD instance.

```csharp
[DataContract]
public abstract class OpenTDObject : IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md)

#### Derived

[DbObject](OpenTD.DbObject.md), 
[LogicObject](OpenTD.LogicObject.md), 
[MeasureMappingTolerances](OpenTD.MeasureMappingTolerances.md), 
[UniqueNameObject](OpenTD.UniqueNameObject.md)

## Implements

[IUpdatable](OpenTD.IUpdatable.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### OpenTDObject\(\)

```csharp
public OpenTDObject()
```

## Fields

### TdProxy

```csharp
protected ITdCommander TdProxy
```

#### Field Value

 ITdCommander

## Methods

### CreateIn\(ThermalDesktop\)

Creates the TD entity in the specified TD instance.

```csharp
public abstract void CreateIn(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

### SetFrom\(OpenTDObject\)

```csharp
public void SetFrom(OpenTDObject x)
```

#### Parameters

`x` [OpenTDObject](OpenTD.OpenTDObject.md)

### Update\(\)

Updates the TD entity with the latest client data.

```csharp
public abstract void Update()
```

### UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public abstract void UpdateFromTD()
```

### UpdateIn\(ThermalDesktop\)

Updates the TD entity corresponding to this object in the
specified TD instance, if possible.

```csharp
public void UpdateIn(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md)


