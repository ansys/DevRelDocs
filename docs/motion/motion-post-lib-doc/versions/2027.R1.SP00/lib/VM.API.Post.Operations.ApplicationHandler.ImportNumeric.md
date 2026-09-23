# Method ImportNumeric
<a id="VM_API_Post_Operations_ApplicationHandler_ImportNumeric_VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_System_String_System_Collections_Generic_List_VM_ViewModels_Post_INumericParameter__"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_ApplicationHandler_ImportNumeric_VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_System_String_System_Collections_Generic_List_VM_ViewModels_Post_INumericParameter__"></a> ImportNumeric\(IOperationsLine2DViewModelBase, string, List<INumericParameter\>\)

Imports numeric data from a file.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the ImportNumeric function of the Chart class instead.", true)]
public void ImportNumeric(IOperationsLine2DViewModelBase lineViewModel, string filepath, List<INumericParameter> targets)
```

### Parameters

`lineViewModel` [IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md)

The target plot view that receives the imported curve data.

`filepath` string

The path to the file containing the imported curves. Supported file formats include `*.txt`, `*.csv`, `*.out`, and `*.rsp`.

`targets` List<[INumericParameter](VM.ViewModels.Post.INumericParameter.md)\>

A list of [`INumericParameter`](VM.ViewModels.Post.INumericParameter.md) objects that specify the parameters for the curves to be created.

### Remarks

This method is obsolete. Use [ImportNumeric\(string, List<INumericParameter\>\)](VM.Operations.Post.Interfaces.IOperationsChartViewModel.ImportNumeric.md) instead.
