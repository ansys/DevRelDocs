#  Interface IConnectorDirection

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

```csharp
public interface IConnectorDirection
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_Builder_IConnectorDirection_NumberOfDirection"></a> NumberOfDirection

```csharp
int NumberOfDirection { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Managed_DAFUL_Builder_IConnectorDirection_SetDirection_VM_Managed_DAFUL_Marker_VM_Managed_DAFUL_Marker_VM_Managed_DAFUL_Builder_PickedResult___System_Int32_"></a> SetDirection\(Marker, Marker, PickedResult\[\], int\)

```csharp
void SetDirection(Marker BM, Marker AM, PickedResult[] pickresult, int numberofpoint)
```

#### Parameters

`BM` Marker

`AM` Marker

`pickresult` [PickedResult](VM.Managed.DAFUL.Builder.PickedResult.md)\[\]

`numberofpoint` [int](https://learn.microsoft.com/dotnet/api/system.int32)

