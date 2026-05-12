#  Interface IConnectorOrientation

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

```csharp
public interface IConnectorOrientation
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_Builder_IConnectorOrientation_NumberOfOrientation"></a> NumberOfOrientation

```csharp
int NumberOfOrientation { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Managed_DAFUL_Builder_IConnectorOrientation_SetOrientation_VM_Managed_DAFUL_Marker_VM_Managed_DAFUL_Marker_VM_Managed_DAFUL_Builder_PickedResult___System_Int32_System_Int32_"></a> SetOrientation\(Marker, Marker, PickedResult\[\], int, int\)

```csharp
void SetOrientation(Marker BM, Marker AM, PickedResult[] pickResult, int nNumOfPoint, int nNumOfDirection)
```

#### Parameters

`BM` Marker

`AM` Marker

`pickResult` [PickedResult](VM.Managed.DAFUL.Builder.PickedResult.md)\[\]

`nNumOfPoint` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nNumOfDirection` [int](https://learn.microsoft.com/dotnet/api/system.int32)

