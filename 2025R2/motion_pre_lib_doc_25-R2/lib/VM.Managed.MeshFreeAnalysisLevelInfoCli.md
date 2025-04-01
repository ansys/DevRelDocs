# Class MeshFreeAnalysisLevelInfoCli

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the information of meshfree analysis level.

```csharp
public class MeshFreeAnalysisLevelInfoCli
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MeshFreeAnalysisLevelInfoCli](VM.Managed.MeshFreeAnalysisLevelInfoCli.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### MeshFreeAnalysisLevelInfoCli\(\)

```csharp
public MeshFreeAnalysisLevelInfoCli()
```

## Methods

### MeshFreeNodeInformation\(VectorBase, double, int, ref List<double\>, ref List<uint\>\)

```csharp
public static bool MeshFreeNodeInformation(VectorBase vecBoundary, double dVolume, int nMaxLevel, ref List<double> lstNodeDistance, ref List<uint> lstNodeCount)
```

#### Parameters

`vecBoundary` [VectorBase](VM.Managed.VectorBase.md)

`dVolume` [double](https://learn.microsoft.com/dotnet/api/system.double)

`nMaxLevel` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`lstNodeDistance` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

`lstNodeCount` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


