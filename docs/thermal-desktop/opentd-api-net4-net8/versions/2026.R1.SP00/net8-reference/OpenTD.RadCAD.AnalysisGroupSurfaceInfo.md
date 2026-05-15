# Class AnalysisGroupSurfaceInfo

Namespace: [OpenTD.RadCAD](OpenTD.RadCAD.md)  
Assembly: OpenTD.dll  

Used to specify what sides of a surface are active in a radiation
analysis group.

```csharp
[MessagePackObject(true)]
public class AnalysisGroupSurfaceInfo
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisGroupSurfaceInfo](OpenTD.RadCAD.AnalysisGroupSurfaceInfo.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### AnalysisGroupSurfaceInfo\(string, Active\)

```csharp
public AnalysisGroupSurfaceInfo(string name, RcEntityData.Active activeSides)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`activeSides` [RcEntityData](OpenTD.RadCAD.RcEntityData.md).[Active](OpenTD.RadCAD.RcEntityData.Active.md)

## Properties

### ActiveSides

```csharp
public RcEntityData.Active ActiveSides { get; set; }
```

#### Property Value

 [RcEntityData](OpenTD.RadCAD.RcEntityData.md).[Active](OpenTD.RadCAD.RcEntityData.Active.md)

### Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

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

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.


