# Interface IOperationsApplicationHandler

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsApplicationHandler : IOperationsBase
```

#### Implements

[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Methods

### AddDocument\(IList<string\>\)

Import the result.

```csharp
void AddDocument(IList<string> filepath)
```

#### Parameters

`filepath` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the path of result to open.

### AddPlotView\(\)

Add a plot view.

```csharp
IOperationsLine2DViewModelBase AddPlotView()
```

#### Returns

 [IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md)

The instance of plot view.

### DurabilityAnalysis\(IDurabilityAnalysisParameter\)

```csharp
bool DurabilityAnalysis(IDurabilityAnalysisParameter parameter)
```

#### Parameters

`parameter` IDurabilityAnalysisParameter

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExportImage\(IChartViewModel, string, ImageFormat, double?, double?\)

Export the image

```csharp
void ExportImage(IChartViewModel lineViewModel, string filepath, ImageFormat format, double? width = null, double? height = null)
```

#### Parameters

`lineViewModel` IChartViewModel

The target plot view

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of the file with curve data.​

`format` ImageFormat

Provides values for ImageFormat with Png, Jpeg, Bmp.​

`width` [double](https://learn.microsoft.com/dotnet/api/system.double)?

Gets or sets the size of width to export image​

`height` [double](https://learn.microsoft.com/dotnet/api/system.double)?

Gets or sets  the size of height to export image​

### ExportImage\(IChartViewModel, string, ExportType, double?, double?\)

Export the image

```csharp
void ExportImage(IChartViewModel lineViewModel, string filepath, ExportType format, double? width = null, double? height = null)
```

#### Parameters

`lineViewModel` IChartViewModel

The target plot view

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of the file with curve data.​

`format` ExportType

Provides values for ExportType with Png, Jpeg, Bmp.​

`width` [double](https://learn.microsoft.com/dotnet/api/system.double)?

Gets or sets the size of width to export image​

`height` [double](https://learn.microsoft.com/dotnet/api/system.double)?

Gets or sets  the size of height to export image​

### GetActiveAnimationView\(\)

Get active animation view

```csharp
IOperationsAnimationViewModel GetActiveAnimationView()
```

#### Returns

 [IOperationsAnimationViewModel](VM.Operations.Post.Interfaces.IOperationsAnimationViewModel.md)

The instance of active animation view​.

### GetActivePlotView\(\)

Get active plot view​.

```csharp
IOperationsLine2DViewModelBase GetActivePlotView()
```

#### Returns

 [IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md)

The instance of active plot view​.

### GetDocument\(string\)

Get the instance of target document by the path of result​.

```csharp
IResultDocumentViewModel GetDocument(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of the result to access.​

#### Returns

 IResultDocumentViewModel

The instance of target document​.

### ImportNumeric\(IChartViewModel, string, List<INumericParameter\>\)

Import a numeric data.​

```csharp
void ImportNumeric(IChartViewModel lineViewModel, string filepath, List<INumericParameter> targets)
```

#### Parameters

`lineViewModel` IChartViewModel

The target plot view of the curve to import a numeric data​.

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of the file with curve data​.

`targets` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<INumericParameter\>

Characteristics to import a numeric data​.

### ImportPythonScripts\(string\)

Import the python script.

```csharp
void ImportPythonScripts(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of the file with python operation script​.

### LoadingAnimation\(\)

Loaded animation in active view.

```csharp
void LoadingAnimation()
```

### RemoveDocument\(string\)

Remove a document.​

```csharp
void RemoveDocument(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of the result to remove​.

### RemoveView\(string\)

Remove a view.

```csharp
void RemoveView(string viewName)
```

#### Parameters

`viewName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the view to remove.​


