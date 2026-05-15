# Class DbObject

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Base class for objects stored in the AutoCAD database
and uniquely-identified by AutoCAD handles.

```csharp
[DataContract]
public class DbObject : OpenTDObject, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[DbObject](OpenTD.DbObject.md)

#### Derived

[Orbit](OpenTD.RadCAD.Orbit.md), 
[TdDbEntityData](OpenTD.TdDbEntityData.md)

## Implements

[IUpdatable](OpenTD.IUpdatable.md)

## Inherited Members

[OpenTDObject.SetFrom\(OpenTDObject\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_SetFrom\_OpenTD\_OpenTDObject\_), 
[OpenTDObject.Update\(\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_Update), 
[OpenTDObject.UpdateFromTD\(\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_UpdateFromTD), 
[OpenTDObject.UpdateIn\(ThermalDesktop\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_UpdateIn\_OpenTD\_ThermalDesktop\_), 
[OpenTDObject.CreateIn\(ThermalDesktop\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_CreateIn\_OpenTD\_ThermalDesktop\_), 
[OpenTDObject.TdProxy](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_TdProxy), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### DbObject\(\)

```csharp
public DbObject()
```

### DbObject\(string\)

```csharp
public DbObject(string _Handle)
```

#### Parameters

`_Handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### Handle

```csharp
[DataMember]
public string Handle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TypeName

```csharp
[DataMember]
public string TypeName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### CreateIn\(ThermalDesktop\)

Creates the TD entity in the specified TD instance.

```csharp
public override void CreateIn(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

### Equals\(object\)

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object to compare with the current object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

[true](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool) if the specified object  is equal to the current object; otherwise, [false](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool).

### GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### SetFrom\(DbObject\)

```csharp
public void SetFrom(DbObject x)
```

#### Parameters

`x` [DbObject](OpenTD.DbObject.md)

### Update\(\)

Updates the TD entity with the latest client data.

```csharp
public override void Update()
```

### UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public override void UpdateFromTD()
```

## Operators

### operator ==\(DbObject, DbObject\)

```csharp
public static bool operator ==(DbObject first, DbObject second)
```

#### Parameters

`first` [DbObject](OpenTD.DbObject.md)

`second` [DbObject](OpenTD.DbObject.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \!=\(DbObject, DbObject\)

```csharp
public static bool operator !=(DbObject first, DbObject second)
```

#### Parameters

`first` [DbObject](OpenTD.DbObject.md)

`second` [DbObject](OpenTD.DbObject.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


