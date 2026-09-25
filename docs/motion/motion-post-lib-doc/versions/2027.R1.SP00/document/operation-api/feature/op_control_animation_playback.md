# Control Animation Playback
This feature covers loading frames with [`IOperationsDynamicAnalysisResultViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.md) or [`IOperationsEigenValueAnalysisResultViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.md), and playing, recording, stopping, and choosing a frame with [`IOperationsAnimation`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.md). The loaded frames give the animation view something to show and give recording something to capture.

## Loading
Use [`IOperationsDynamicAnalysisResultViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.md) or [`IOperationsEigenValueAnalysisResultViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.md) obtained from imported result data, see [Import File](op_import_file.md).

For a dynamic result, load a chosen number of frames with [`SetAnimationFrame(int)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.SetAnimationFrame.md), or load specific frames by their frame numbers with [`SetAnimationFrame(IEnumerable<int>)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.SetAnimationFrame.md). If no dynamic frames are loaded yet, calling [`PlayAnimation()`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.PlayAnimation.md) loads the full dynamic animation first and then starts playback.

For an eigenvalue result, choose a sampling time with [`TargetSamplingTime`](../../../lib/VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.TargetSamplingTime.md). Use [`GetSamplingTimes()`](../../../lib/VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.GetSamplingTimes.md) to see the available times. Then find a frequency with [`GetFrequencies()`](../../../lib/VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.GetFrequencies.md) or [`GetFrequency(int)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.GetFrequency.md), and turn it on with [`Enable`](../../../lib/VM.Operations.Post.Interfaces.IOperationsFrequencyViewModel.Enable.md). Activating a frequency loads its modeshape animation using the current Frame value, which defaults to 50. Setting `Frame` to another positive value reloads the modeshape animation using the new frame number.

## Playing
Start playback with `PlayAnimation()`. Playback moves through the loaded frames one by one and jumps back to the first frame after it reaches the last one.

> [!IMPORTANT]
> [`IOperationsAnimation`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.md) must be the active view before calling `PlayAnimation()`. Otherwise, playback does not start.

## Recording
Record loaded frames with [`RecordingAnimation(string, RecordingType, RecordingRangeType, int, IViewSpec[])`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.RecordingAnimation.md). If playback is already running, this operation stops it first. Otherwise, recording starts from the first loaded frame. Once every frame is captured, the result is written to a file in the chosen format.

> [!IMPORTANT]
> Animation frames must be loaded before calling `RecordingAnimation(string, RecordingType, RecordingRangeType, int, IViewSpec[])`. If no frames are loaded, no output file is created.

## Stopping
Stop playback with [`StopAnimation()`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.StopAnimation.md). The animation state changes to stopped.

## Managing the Current Frame
Move to a specific loaded frame with [`MoveToAnimationFrame(int)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.MoveToAnimationFrame.md), for either a dynamic or an eigenvalue result. The animation view then shows that frame.