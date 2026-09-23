# Method TryGetViewModel<TViewModel\>
<a id="VM_ViewModels_Post_IAnalysisResultViewModel_TryGetViewModel__1_System_Guid___0__"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

## <a id="VM_ViewModels_Post_IAnalysisResultViewModel_TryGetViewModel__1_System_Guid___0__"></a> TryGetViewModel<TViewModel\>\(Guid, out TViewModel\)

```csharp
bool TryGetViewModel<TViewModel>(Guid id, out TViewModel viewModel) where TViewModel : class, IViewModel
```

### Parameters

`id` Guid

`viewModel` TViewModel

### Returns

 bool

### Type Parameters

`TViewModel` 

## <a id="VM_ViewModels_Post_IAnalysisResultViewModel_TryGetViewModel__1_System_String___0__"></a> TryGetViewModel<TViewModel\>\(string, out TViewModel\)

```csharp
bool TryGetViewModel<TViewModel>(string fullName, out TViewModel viewModel) where TViewModel : class, IViewModel
```

### Parameters

`fullName` string

`viewModel` TViewModel

### Returns

 bool

### Type Parameters

`TViewModel` 

## <a id="VM_ViewModels_Post_IAnalysisResultViewModel_TryGetViewModel__1_System_Int32___0__"></a> TryGetViewModel<TViewModel\>\(int, out TViewModel\)

```csharp
bool TryGetViewModel<TViewModel>(int partIndex, out TViewModel viewModel) where TViewModel : class, IViewModel
```

### Parameters

`partIndex` int

`viewModel` TViewModel

### Returns

 bool

### Type Parameters

`TViewModel` 