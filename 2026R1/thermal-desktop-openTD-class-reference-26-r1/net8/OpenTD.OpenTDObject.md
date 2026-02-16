# <a id="OpenTD_OpenTDObject"></a> Class OpenTDObject

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Base class for client-side objects linked to entities in a TD instance.

```csharp
public abstract class OpenTDObject : IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md)

#### Derived

[DbObject](OpenTD.DbObject.md), 
[LogicObject](OpenTD.LogicObject.md), 
[MeasureMappingTolerances](OpenTD.MeasureMappingTolerances.md), 
[UniqueNameObject](OpenTD.UniqueNameObject.md)

#### Implements

[IUpdatable](OpenTD.IUpdatable.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_OpenTDObject__ctor"></a> OpenTDObject\(\)

```csharp
public OpenTDObject()
```

## Fields

### <a id="OpenTD_OpenTDObject_TdProxy"></a> TdProxy

```csharp
protected ITdCommander TdProxy
```

#### Field Value

 ITdCommander

## Methods

### <a id="OpenTD_OpenTDObject_CreateIn_OpenTD_ThermalDesktop_"></a> CreateIn\(ThermalDesktop\)

Creates the TD entity in the specified TD instance.

```csharp
public abstract void CreateIn(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

### <a id="OpenTD_OpenTDObject_SetFrom_OpenTD_OpenTDObject_"></a> SetFrom\(OpenTDObject\)

```csharp
public void SetFrom(OpenTDObject x)
```

#### Parameters

`x` [OpenTDObject](OpenTD.OpenTDObject.md)

### <a id="OpenTD_OpenTDObject_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public abstract void Update()
```

### <a id="OpenTD_OpenTDObject_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public abstract void UpdateFromTD()
```

### <a id="OpenTD_OpenTDObject_UpdateIn_OpenTD_ThermalDesktop_"></a> UpdateIn\(ThermalDesktop\)

Updates the TD entity corresponding to this object in the
specified TD instance, if possible.

```csharp
public void UpdateIn(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md)

