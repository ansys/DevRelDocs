# <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel"></a> Interface IOperationsHeatMapSTFTViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsHeatMapSTFTViewModel
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel_IsWaterfallType"></a> IsWaterfallType

Get or Set the type to change from STFT2D or STFT3D.

```csharp
bool IsWaterfallType { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel_STFT2DViewModel"></a> STFT2DViewModel

Get the value of STFT 2D viewmodel.

```csharp
IHeatMapSTFTView2DViewModel STFT2DViewModel { get; }
```

#### Property Value

 IHeatMapSTFTView2DViewModel

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel_STFT3DViewModel"></a> STFT3DViewModel

Get the value of STFT 3D viewmodel.

```csharp
IHeatMapSTFTView3DViewModel STFT3DViewModel { get; }
```

#### Property Value

 IHeatMapSTFTView3DViewModel

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel_ExportAllDataSeries"></a> ExportAllDataSeries\(\)

Export all curves on active view.

```csharp
void ExportAllDataSeries()
```

