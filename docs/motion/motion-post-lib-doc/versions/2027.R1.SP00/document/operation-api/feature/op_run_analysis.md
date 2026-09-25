# Run an Analysis
This feature covers running a fatigue analysis with [`DurabilityAnalysis`](../../../lib/VM.API.Post.Operations.DurabilityAnalysis.md) and calculating sound pressure with [`IOperationsAnimation`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.md).

## Fatigue
Run a fatigue analysis with [`RunFatigueAnalysis(IDurabilityAnalysisParameter)`](../../../lib/VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysis.md). This operation writes the fatigue analysis files and then updates the fatigue result that belongs to [`ResultDocumentViewModel`](../../../lib/VM.ViewModels.Post.IAnalysisResultViewModel.ResultDocumentViewModel.md).

> [!IMPORTANT]
> The active view returned by [`GetActiveView()`](../../../lib/VM.Operations.Post.Interfaces.IPage.GetActiveView.md) must be [`IOperationsAnimation`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.md) before calling this method. Otherwise, the fatigue operation cannot run.
> Activate the required `IOperationsAnimation` with [`Activate()`](../../../lib/VM.Operations.Post.Interfaces.IView.Activate.md), see [Manage View](op_manage_view.md).

Once `RunFatigueAnalysis(IDurabilityAnalysisParameter)` finishes, use [`SetFatiguePath(string, string)`](../../../lib/VM.API.Post.Operations.DurabilityAnalysis.SetFatiguePath.md) to pick which fatigue result to use next.

To see the analysis result as a contour, see [Manage a Contour](op_manage_contour.md).

## Sound Pressure
Calculate sound pressure data with [`CreateSoundPressure(IList<string>, IList<string>, double, double, double, double, double, double, int, int, bool)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.CreateSoundPressure.md) on `IOperationsAnimation`. This operation creates one curve for each requested microphone position, see [Manage a Curve](op_manage_curve.md).

> [!IMPORTANT]
> The supplied body and coordinate system names must identify entities that already exist. If a name cannot be matched, no sound pressure data is created.