# Interface IConnectorOrientation
<a id="VM_Managed_DAFUL_Builder_IConnectorOrientation"></a>

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

 int

## Methods

### <a id="VM_Managed_DAFUL_Builder_IConnectorOrientation_SetOrientation_VM_Managed_DAFUL_Marker_VM_Managed_DAFUL_Marker_VM_Managed_DAFUL_Builder_PickedResult___System_Int32_System_Int32_"></a> SetOrientation\(Marker, Marker, PickedResult\[\], int, int\)

```csharp
void SetOrientation(Marker BM, Marker AM, PickedResult[] pickResult, int nNumOfPoint, int nNumOfDirection)
```

#### Parameters

`BM` [Marker](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Marker.cs)

`AM` [Marker](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Marker.cs)

`pickResult` [PickedResult](VM.Managed.DAFUL.Builder.PickedResult.md)\[\]

`nNumOfPoint` int

`nNumOfDirection` int

