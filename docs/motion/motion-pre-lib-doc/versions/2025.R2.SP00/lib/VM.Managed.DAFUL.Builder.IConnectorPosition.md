#  Interface IConnectorPosition

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

```csharp
public interface IConnectorPosition
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_Builder_IConnectorPosition_NumberOfPoint"></a> NumberOfPoint

```csharp
int NumberOfPoint { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Managed_DAFUL_Builder_IConnectorPosition_SetPosition_VM_Managed_DAFUL_Marker_VM_Managed_DAFUL_Marker_VM_Managed_DAFUL_Builder_PickedResult___"></a> SetPosition\(Marker, Marker, PickedResult\[\]\)

```csharp
void SetPosition(Marker BM, Marker AM, PickedResult[] pickresult)
```

#### Parameters

`BM` Marker

`AM` Marker

`pickresult` [PickedResult](VM.Managed.DAFUL.Builder.PickedResult.md)\[\]

