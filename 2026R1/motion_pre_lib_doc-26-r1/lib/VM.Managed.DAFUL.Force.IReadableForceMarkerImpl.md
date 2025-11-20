# Class IReadableForceMarkerImpl
<a id="VM_Managed_DAFUL_Force_IReadableForceMarkerImpl"></a>

Namespace: [VM.Managed.DAFUL.Force](VM.Managed.DAFUL.Force.md)  
Assembly: VMDFB.dll  

This class is to represent the readable force marker.

```csharp
public class IReadableForceMarkerImpl
```

#### Inheritance

object ← 
[IReadableForceMarkerImpl](VM.Managed.DAFUL.Force.IReadableForceMarkerImpl.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Force_IReadableForceMarkerImpl__ctor"></a> IReadableForceMarkerImpl\(\)

```csharp
public IReadableForceMarkerImpl()
```

## Methods

### <a id="VM_Managed_DAFUL_Force_IReadableForceMarkerImpl_ReadableActionMarker_VM_Managed_DAFUL_Marker_System_Boolean__System_Boolean__"></a> ReadableActionMarker\(Marker, ref bool, ref bool\)

Readables the action marker.

```csharp
public static void ReadableActionMarker(Marker actionMarker, ref bool bReadablePos, ref bool bReadableOri)
```

#### Parameters

`actionMarker` [Marker](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Marker.cs)

The action marker.

`bReadablePos` bool

if set to <code>true</code> [b readable pos].

`bReadableOri` bool

if set to <code>true</code> [b readable ori].

### <a id="VM_Managed_DAFUL_Force_IReadableForceMarkerImpl_ReadableBaseMarker_VM_Managed_DAFUL_Marker_System_Boolean__System_Boolean__"></a> ReadableBaseMarker\(Marker, ref bool, ref bool\)

Readables the base marker.

```csharp
public static void ReadableBaseMarker(Marker baseMarker, ref bool bReadablePos, ref bool bReadableOri)
```

#### Parameters

`baseMarker` [Marker](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Marker.cs)

The base marker.

`bReadablePos` bool

if set to <code>true</code> [b readable pos].

`bReadableOri` bool

if set to <code>true</code> [b readable ori].

