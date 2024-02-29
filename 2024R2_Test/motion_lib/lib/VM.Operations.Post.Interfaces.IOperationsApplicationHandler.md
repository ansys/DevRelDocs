# <a id="VM_Operations_Post_Interfaces_IOperationsApplicationHandler"></a> Interface IOperationsApplicationHandler

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsApplicationHandler : IOperationsBase
```

#### Implements

[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsApplicationHandler_AddDocument_System_Collections_Generic_IList_System_String__"></a> AddDocument\(IList<string\>\)

Import the result.

```csharp
void AddDocument(IList<string> filepath)
```

#### Parameters

`filepath` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The list of the path of result to open.

### <a id="VM_Operations_Post_Interfaces_IOperationsApplicationHandler_AddPlotView"></a> AddPlotView\(\)

Add a plot view.

```csharp
IOperationsLine2DViewModelBase AddPlotView()
```

#### Returns

 [IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md)

The instance of plot view.

### <a id="VM_Operations_Post_Interfaces_IOperationsApplicationHandler_DurabilityAnalysis_VM_ViewModels_Post_IDurabilityAnalysisParameter_"></a> DurabilityAnalysis\(IDurabilityAnalysisParameter\)

```csharp
bool DurabilityAnalysis(IDurabilityAnalysisParameter parameter)
```

#### Parameters

`parameter` IDurabilityAnalysisParameter

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Operations_Post_Interfaces_IOperationsApplicationHandler_ExportImage_VM_ViewModels_Post_IChartViewModel_System_String_SciChart_Core_ExportType_System_Double_System_Double_"></a> ExportImage\(IChartViewModel, string, ExportType, double, double\)

Export the image

```csharp
void ExportImage(IChartViewModel lineViewModel, string filepath, ExportType exportType, double width, double height)
```

#### Parameters

`lineViewModel` IChartViewModel

The target plot view of the curve with import numeric​.

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of the file with curve data.​

`exportType` ExportType

Provides values for ExportType with Png, Jpeg, Bmp, Xps.​

`width` [double](https://learn.microsoft.com/dotnet/api/system.double)

Gets or sets the size of width to export image​.

`height` [double](https://learn.microsoft.com/dotnet/api/system.double)

Gets or sets  the size of height to export image​.

### <a id="VM_Operations_Post_Interfaces_IOperationsApplicationHandler_GetActiveAnimationView"></a> GetActiveAnimationView\(\)

Get active animation view

```csharp
IOperationsAnimationViewModel GetActiveAnimationView()
```

#### Returns

 [IOperationsAnimationViewModel](VM.Operations.Post.Interfaces.IOperationsAnimationViewModel.md)

The instance of active animation view​.

### <a id="VM_Operations_Post_Interfaces_IOperationsApplicationHandler_GetActivePlotView"></a> GetActivePlotView\(\)

Get active plot view​.

```csharp
IOperationsLine2DViewModelBase GetActivePlotView()
```

#### Returns

 [IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md)

The instance of active plot view​.

### <a id="VM_Operations_Post_Interfaces_IOperationsApplicationHandler_GetDocument_System_String_"></a> GetDocument\(string\)

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

### <a id="VM_Operations_Post_Interfaces_IOperationsApplicationHandler_ImportNumeric_VM_ViewModels_Post_IChartViewModel_System_String_System_Collections_Generic_List_VM_ViewModels_Post_INumericParameter__"></a> ImportNumeric\(IChartViewModel, string, List<INumericParameter\>\)

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

### <a id="VM_Operations_Post_Interfaces_IOperationsApplicationHandler_ImportPythonScripts_System_String_"></a> ImportPythonScripts\(string\)

Import the python script.

```csharp
void ImportPythonScripts(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of the file with python operation script​.

### <a id="VM_Operations_Post_Interfaces_IOperationsApplicationHandler_LoadingAnimation"></a> LoadingAnimation\(\)

```csharp
void LoadingAnimation()
```

### <a id="VM_Operations_Post_Interfaces_IOperationsApplicationHandler_RemoveDocument_System_String_"></a> RemoveDocument\(string\)

Remove a document.​

```csharp
void RemoveDocument(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of the result to remove​.

### <a id="VM_Operations_Post_Interfaces_IOperationsApplicationHandler_RemoveView_System_String_"></a> RemoveView\(string\)

Remove a view.

```csharp
void RemoveView(string viewName)
```

#### Parameters

`viewName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the view to remove.​

