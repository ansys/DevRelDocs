# Method ImportNumeric
<div align="right"><a href="/lib/VM.API.Post.Operations.ApplicationHandler.ImportNumeric.md" download="VM.API.Post.Operations.ApplicationHandler.ImportNumeric.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_API_Post_Operations_ApplicationHandler_ImportNumeric_VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_System_String_System_Collections_Generic_List_VM_ViewModels_Post_INumericParameter__"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_ApplicationHandler_ImportNumeric_VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_System_String_System_Collections_Generic_List_VM_ViewModels_Post_INumericParameter__"></a> ImportNumeric\(IOperationsLine2DViewModelBase, string, List<INumericParameter\>\)

Imports numeric data from a file.

```csharp
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
