# Class ApplicationHandler

Namespace: [VM.Operations.Post.Models](VM.Operations.Post.Models.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public class ApplicationHandler : IOperationsApplicationHandler, IOperationsBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ApplicationHandler](VM.Operations.Post.Models.ApplicationHandler.md)

#### Implements

[IOperationsApplicationHandler](VM.Operations.Post.Interfaces.IOperationsApplicationHandler.md), 
[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Constructors

### ApplicationHandler\(\)

Initializes a new instance of the ApplicationHandler class.

```csharp
public ApplicationHandler()
```

## Methods

### AddDocument\(IList<string\>\)

Import the result

```csharp
public void AddDocument(IList<string> filepath)
```

#### Parameters

`filepath` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the path of result to open

### AddPlotView\(\)

Add a plot view

```csharp
public IOperationsLine2DViewModelBase AddPlotView()
```

#### Returns

 [IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md)

The instance of plot view

### DurabilityAnalysis\(IDurabilityAnalysisParameter\)

```csharp
public bool DurabilityAnalysis(IDurabilityAnalysisParameter parameter)
```

#### Parameters

`parameter` IDurabilityAnalysisParameter

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExportImage\(IChartViewModel, string, ImageFormat, double?, double?\)

Export the image

```csharp
public void ExportImage(IChartViewModel lineViewModel, string filepath, ImageFormat format, double? width = null, double? height = null)
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
[Obsolete]
public void ExportImage(IChartViewModel lineViewModel, string filepath, ExportType exportType, double? width = null, double? height = null)
```

#### Parameters

`lineViewModel` IChartViewModel

The target plot view

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of the file with curve data.​

`exportType` ExportType

`width` [double](https://learn.microsoft.com/dotnet/api/system.double)?

Gets or sets the size of width to export image​

`height` [double](https://learn.microsoft.com/dotnet/api/system.double)?

Gets or sets  the size of height to export image​

### GetActiveAnimationView\(\)

Get active animation view

```csharp
public IOperationsAnimationViewModel GetActiveAnimationView()
```

#### Returns

 [IOperationsAnimationViewModel](VM.Operations.Post.Interfaces.IOperationsAnimationViewModel.md)

### GetActivePlotView\(\)

Get active plot view​

```csharp
public IOperationsLine2DViewModelBase GetActivePlotView()
```

#### Returns

 [IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md)

The instance of active plot view​

### GetDocument\(string\)

Get the instance of target document by the path of result​

```csharp
public IResultDocumentViewModel GetDocument(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of the result to access​

#### Returns

 IResultDocumentViewModel

The instance of target document​

### ImportNumeric\(IChartViewModel, string, List<INumericParameter\>\)

Import a numeric data.​

```csharp
public void ImportNumeric(IChartViewModel lineViewModel, string filepath, List<INumericParameter> targets)
```

#### Parameters

`lineViewModel` IChartViewModel

The target plot view of the curve to import a numeric data​

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of the file with curve data​

`targets` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<INumericParameter\>

Characteristics to import a numeric data​

### ImportPythonScripts\(string\)

Import the python script

```csharp
public void ImportPythonScripts(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of the file with python operation script​

### LoadingAnimation\(\)

```csharp
public void LoadingAnimation()
```

### RemoveDocument\(string\)

Remove a document.​

```csharp
public void RemoveDocument(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of the result to remove​

### RemoveView\(string\)

Remove a view

```csharp
public void RemoveView(string viewName)
```

#### Parameters

`viewName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the view to remove​


