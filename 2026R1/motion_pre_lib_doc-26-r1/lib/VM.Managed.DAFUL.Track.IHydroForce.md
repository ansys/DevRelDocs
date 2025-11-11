# Interface IHydroForce
<a id="VM_Managed_DAFUL_Track_IHydroForce"></a>

Namespace: [VM.Managed.DAFUL.Track](VM.Managed.DAFUL.Track.md)  
Assembly: VMDTrackBase.dll  

This interface is to represent the hydro force.

```csharp
public interface IHydroForce
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_Track_IHydroForce_HullBody"></a> HullBody

Gets the hull body

```csharp
IConnectable HullBody { get; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_Track_IHydroForce_HullReferenceFrame"></a> HullReferenceFrame

Gets the hull reference frame

```csharp
IMarker HullReferenceFrame { get; }
```

#### Property Value

 IMarker

### <a id="VM_Managed_DAFUL_Track_IHydroForce_HydroForceProperty"></a> HydroForceProperty

Gets the hydro force property.

```csharp
PropertyHydroForce HydroForceProperty { get; }
```

#### Property Value

 [PropertyHydroForce](VM.Managed.DAFUL.Track.PropertyHydroForce.md)

### <a id="VM_Managed_DAFUL_Track_IHydroForce_Water"></a> Water

Gets the water

```csharp
IWater Water { get; }
```

#### Property Value

 [IWater](VM.Managed.DAFUL.Track.IWater.md)

