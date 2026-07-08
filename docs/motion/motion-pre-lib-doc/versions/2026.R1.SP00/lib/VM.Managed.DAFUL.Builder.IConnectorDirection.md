# Interface IConnectorDirection
<a id="VM_Managed_DAFUL_Builder_IConnectorDirection"></a>

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

 int

## Methods

### <a id="VM_Managed_DAFUL_Builder_IConnectorDirection_SetDirection_VM_Managed_DAFUL_Marker_VM_Managed_DAFUL_Marker_VM_Managed_DAFUL_Builder_PickedResult___System_Int32_"></a> SetDirection\(Marker, Marker, PickedResult\[\], int\)

```csharp
void SetDirection(Marker BM, Marker AM, PickedResult[] pickresult, int numberofpoint)
```

#### Parameters

`BM` [Marker](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Marker.cs)

`AM` [Marker](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Marker.cs)

`pickresult` [PickedResult](VM.Managed.DAFUL.Builder.PickedResult.md)\[\]

`numberofpoint` int

