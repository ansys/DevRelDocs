# Interface IHasOutputChannel
<a id="VM_Managed_DAFUL_Car_IHasOutputChannel"></a>

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDFullCar.dll  

The output channel interface

```csharp
public interface IHasOutputChannel
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_Car_IHasOutputChannel_OutputChannelInfos"></a> OutputChannelInfos

Gets or sets the output channel infos.

```csharp
OutputChannelInfo[] OutputChannelInfos { get; set; }
```

#### Property Value

 [OutputChannelInfo](VM.Managed.DAFUL.Car.OutputChannelInfo.md)\[\]

## Methods

### <a id="VM_Managed_DAFUL_Car_IHasOutputChannel_GetTotalIndex_System_Int32___"></a> GetTotalIndex\(int\[\]\)

Gets the total index.

```csharp
List<int> GetTotalIndex(int[] input)
```

#### Parameters

`input` int\[\]

The input.

#### Returns

 List<int\>

