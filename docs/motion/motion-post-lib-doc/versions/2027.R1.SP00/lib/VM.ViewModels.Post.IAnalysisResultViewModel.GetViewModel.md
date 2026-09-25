# Method GetViewModel
<a id="VM_ViewModels_Post_IAnalysisResultViewModel_GetViewModel_System_String_"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

## <a id="VM_ViewModels_Post_IAnalysisResultViewModel_GetViewModel_System_String_"></a> GetViewModel\(string\)

```csharp
IEntityBaseViewModel GetViewModel(string name)
```

### Parameters

`name` string

### Returns

 [IEntityBaseViewModel](VM.ViewModels.Post.IEntityBaseViewModel.md)

## <a id="VM_ViewModels_Post_IAnalysisResultViewModel_GetViewModel_System_Int32_"></a> GetViewModel\(int\)

```csharp
IEntityBaseViewModel GetViewModel(int partIndex)
```

### Parameters

`partIndex` int

### Returns

 [IEntityBaseViewModel](VM.ViewModels.Post.IEntityBaseViewModel.md)

## <a id="VM_ViewModels_Post_IAnalysisResultViewModel_GetViewModel__1_System_Guid_"></a> GetViewModel<TViewModel\>\(Guid\)

```csharp
TViewModel GetViewModel<TViewModel>(Guid id) where TViewModel : class, IViewModel
```

### Parameters

`id` Guid

### Returns

 TViewModel

### Type Parameters

`TViewModel` 