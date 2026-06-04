# Interface IOperationsHeatMapSTFTViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsHeatMapSTFTViewModel : IOperationsLine2DViewModelBase, IOperationsBase
```

#### Implements

[IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md), 
[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Properties

### IsWaterfallType

Get or Set the type to change from STFT2D or STFT3D.

```csharp
bool IsWaterfallType { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### STFT2DViewModel

Get the value of STFT 2D viewmodel.

```csharp
IHeatMapSTFTView2DViewModel STFT2DViewModel { get; }
```

#### Property Value

 IHeatMapSTFTView2DViewModel

### STFT3DViewModel

Get the value of STFT 3D viewmodel.

```csharp
IHeatMapSTFTView3DViewModel STFT3DViewModel { get; }
```

#### Property Value

 IHeatMapSTFTView3DViewModel

## Methods

### ExportAllDataSeries\(\)

Export all curves on active view.

```csharp
void ExportAllDataSeries()
```


