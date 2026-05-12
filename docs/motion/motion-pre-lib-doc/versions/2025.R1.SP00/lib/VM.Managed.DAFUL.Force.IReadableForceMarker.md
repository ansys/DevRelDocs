#  Interface IReadableForceMarker

Namespace: [VM.Managed.DAFUL.Force](VM.Managed.DAFUL.Force.md)  
Assembly: VMDFB.dll  

This interface is to represent the readable force marker.

```csharp
public interface IReadableForceMarker
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_Force_IReadableForceMarker_ReadableActionMarker_System_Boolean__System_Boolean__"></a> ReadableActionMarker\(ref bool, ref bool\)

Readables the action marker.

```csharp
void ReadableActionMarker(ref bool bReadablePos, ref bool bReadableOri)
```

#### Parameters

`bReadablePos` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b readable pos].

`bReadableOri` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b readable ori].

### <a id="VM_Managed_DAFUL_Force_IReadableForceMarker_ReadableBaseMarker_System_Boolean__System_Boolean__"></a> ReadableBaseMarker\(ref bool, ref bool\)

Readables the base marker.

```csharp
void ReadableBaseMarker(ref bool bReadablePos, ref bool bReadableOri)
```

#### Parameters

`bReadablePos` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b readable pos].

`bReadableOri` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b readable ori].

