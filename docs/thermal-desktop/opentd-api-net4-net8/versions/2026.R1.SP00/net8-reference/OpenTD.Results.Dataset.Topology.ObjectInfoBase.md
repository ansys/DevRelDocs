# Class ObjectInfoBase

Namespace: [OpenTD.Results.Dataset.Topology](OpenTD.Results.Dataset.Topology.md)  
Assembly: OpenTD.Results.dll  

Base class for classes that contain topology information for an entity.
Implements the <xref href="OpenTD.Results.Dataset.Topology.IObjectInfoBase" data-throw-if-not-resolved="false"></xref>

```csharp
public class ObjectInfoBase : IObjectInfoBase
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ObjectInfoBase](OpenTD.Results.Dataset.Topology.ObjectInfoBase.md)

#### Derived

[IFaceInfo](OpenTD.Results.Dataset.Topology.IFaceInfo.md), 
[PathInfo](OpenTD.Results.Dataset.Topology.PathInfo.md)

## Implements

[IObjectInfoBase](OpenTD.Results.Dataset.Topology.IObjectInfoBase.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ObjectInfoBase\(SindaName\)

```csharp
public ObjectInfoBase(SindaName sindaName)
```

#### Parameters

`sindaName` [SindaName](OpenTD.Results.Dataset.Topology.SindaName.md)

## Properties

### ItemIdentifier

```csharp
public ItemIdentifier ItemIdentifier { get; }
```

#### Property Value

 [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

#### See Also

[ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

### SindaName

```csharp
public SindaName SindaName { get; }
```

#### Property Value

 [SindaName](OpenTD.Results.Dataset.Topology.SindaName.md)

#### See Also

[SindaName](OpenTD.Results.Dataset.Topology.SindaName.md)

## See Also

[IObjectInfoBase](OpenTD.Results.Dataset.Topology.IObjectInfoBase.md)


