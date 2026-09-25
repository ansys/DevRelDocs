# Interface IOperationsChartViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsChartViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides legend access and numeric-file import operations for a chart view.

```csharp
public interface IOperationsChartViewModel : IView, IHasGuid
```

## Properties

 [Legend](VM.Operations.Post.Interfaces.IOperationsChartViewModel.Legend.md\#VM\_Operations\_Post\_Interfaces\_IOperationsChartViewModel\_Legend)

Gets [`IOperationsLegendModifier`](VM.Operations.Post.Interfaces.IOperationsLegendModifier.md) used by this chart.

## Methods

 [ImportNumeric\(string, List<INumericParameter\>\)](VM.Operations.Post.Interfaces.IOperationsChartViewModel.ImportNumeric.md\#VM\_Operations\_Post\_Interfaces\_IOperationsChartViewModel\_ImportNumeric\_System\_String\_System\_Collections\_Generic\_List\_VM\_ViewModels\_Post\_INumericParameter\_\_)

Imports curve data from a numeric file and adds the resulting curves to the chart.
