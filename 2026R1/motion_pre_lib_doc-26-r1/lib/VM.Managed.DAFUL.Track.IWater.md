# Interface IWater
<a id="VM_Managed_DAFUL_Track_IWater"></a>

Namespace: [VM.Managed.DAFUL.Track](VM.Managed.DAFUL.Track.md)  
Assembly: VMDTrackBase.dll  

This interface is to represent the water.

```csharp
public interface IWater
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_Track_IWater_Density"></a> Density

Gets the density

```csharp
double Density { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Track_IWater_ReferenceFrame"></a> ReferenceFrame

Gets the reference frame

```csharp
Marker ReferenceFrame { get; }
```

#### Property Value

 [Marker](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Marker.cs)

### <a id="VM_Managed_DAFUL_Track_IWater_WaterContainerBody"></a> WaterContainerBody

Gets the water body

```csharp
IConnectable WaterContainerBody { get; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_Track_IWater_ZDirection"></a> ZDirection

Gets the z direction

```csharp
VectorBase ZDirection { get; }
```

#### Property Value

 VectorBase

