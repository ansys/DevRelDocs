# Namespace VM.Operations.Post.Interfaces
<a id="VM_Operations_Post_Interfaces"></a>

### Interfaces

 [IOperationAnalysisResult](VM.Operations.Post.Interfaces.IOperationAnalysisResult.md)

Provides operations for reading and changing an analysis result used by an animation or chart. Implemented by [`IOperationsDynamicAnalysisResultViewModel`](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.md) for a dynamic analysis result and [`IOperationsEigenValueAnalysisResultViewModel`](VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.md) for an eigenvalue analysis result.

 [IOperationsAnimation](VM.Operations.Post.Interfaces.IOperationsAnimation.md)

Provides animation-view properties and operations for camera control, playback, recording, entity visibility, coordinate systems, and result display settings.

 [IOperationsAxisViewModelBase](VM.Operations.Post.Interfaces.IOperationsAxisViewModelBase.md)

Provides title text and font settings for a chart axis.

 [IOperationsCSYSViewModel](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.md)

Provides configuration for a coordinate system created with [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md).

 [IOperationsCalculusLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsCalculusLineDataSeriesViewModel.md)

Provides the calculus operation applied to a calculated curve.

 [IOperationsChartViewModel](VM.Operations.Post.Interfaces.IOperationsChartViewModel.md)

Provides legend access and numeric-file import operations for a chart view.

 [IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md)

Provides display, component, range, and legend settings for contour data created with [`IOperationAnalysisResult`](VM.Operations.Post.Interfaces.IOperationAnalysisResult.md).

 [IOperationsCustomAxisViewModel](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.md)

Defines scale, label-format, font, range, and unit settings for a custom chart axis.

 [IOperationsDynamicAnalysisResultViewModel](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.md)

Provides frame, vector-display, and expression operations for a dynamic analysis result through [`IOperationAnalysisResult`](VM.Operations.Post.Interfaces.IOperationAnalysisResult.md).

 [IOperationsEigenValueAnalysisResultViewModel](VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.md)

Provides sampling-time, frequency, and mode-shape frame operations for an eigenvalue analysis result through [`IOperationAnalysisResult`](VM.Operations.Post.Interfaces.IOperationAnalysisResult.md).

 [IOperationsElementViewModel](VM.Operations.Post.Interfaces.IOperationsElementViewModel.md)

Provides the operation for changing the identifier of an element in finite-element result data.

 [IOperationsFEBody](VM.Operations.Post.Interfaces.IOperationsFEBody.md)

Provides deformation, fatigue, property, and finite-element selection operations for a finite-element body.

 [IOperationsFFTLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsFFTLineDataSeriesViewModel.md)

Provides the time range, window, scale, result, and sample-count settings used to regenerate a calculated FFT curve.

 [IOperationsFrequencyViewModel](VM.Operations.Post.Interfaces.IOperationsFrequencyViewModel.md)

Provides the enabled state for an eigenvalue frequency and controls its mode-shape animation.

 [IOperationsHeatMapBaseViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.md)

Provides legend range, legend appearance, and curve export operations for a heat-map view.

 [IOperationsHeatMapSTFTDataViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.md)

Provides the source, scaling, legend, and export settings used to calculate Short-Time Fourier Transform (STFT) heat-map data.

 [IOperationsHeatMapSTFTViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.md)

Provides access to the 2D heat-map and 3D waterfall representations of a Short-Time Fourier Transform (STFT).

 [IOperationsHeatmapLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsHeatmapLineDataSeriesViewModel.md)

Provides interval and harmonic settings for a heat-map curve.

 [IOperationsHeatmapNumericAxis2DViewModel](VM.Operations.Post.Interfaces.IOperationsHeatmapNumericAxis2DViewModel.md)

Provides label-formatting and manual range settings for a numeric axis in a 2D STFT heat map.

 [IOperationsInterpolationLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsInterpolationLineDataSeriesViewModel.md)

Provides the generated-point setting for an interpolated curve.

 [IOperationsLegendModifier](VM.Operations.Post.Interfaces.IOperationsLegendModifier.md)

Provides appearance, filtering, and placement settings for the legend rendered by a chart.

 [IOperationsLine2DViewModel](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.md)

Provides 2D chart display settings and operations that create transformed curve data.

 [IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md)

Provides chart appearance, curve management, lookup, and export operations shared by 2D chart views.

 [IOperationsLineDataSeriesAxisViewModel](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesAxisViewModel.md)

Defines the public axis-information contract used by curve source settings, carrying source-file and result-path metadata that identifies target, characteristic, component, and coordinate-system data for a curve.

 [IOperationsLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.md)

Provides source-axis settings and axis-data creation operations for a curve.

 [IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)

Provides the name, line appearance, point appearance, and rendering type for a curve.

 [IOperationsLineDisplayViewModel](VM.Operations.Post.Interfaces.IOperationsLineDisplayViewModel.md)

Provides color and width settings for line-style vector display.

 [IOperationsNodeViewModel](VM.Operations.Post.Interfaces.IOperationsNodeViewModel.md)

Provides the operation for changing a node identifier in finite-element result data.

 [IOperationsPointDisplayViewModel](VM.Operations.Post.Interfaces.IOperationsPointDisplayViewModel.md)

Provides symbol-size settings for a point-style vector display.

 [IOperationsPythonExpressionViewModel](VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.md)

Provides the name and formula for a Python expression that produces a curve from a dynamic analysis result.

 [IOperationsSignalProcessingLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.md)

Provides signal-processing settings for a calculated curve created from an existing curve.

 [IOperationsSimpleMathLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsSimpleMathLineDataSeriesViewModel.md)

Provides the mathematical operation and interpolation count for a calculated curve based on existing curves.

 [IOperationsTransformLineDataSeriesViewModel](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.md)

Provides transform settings for a calculated curve.

 [IOperationsVectorDisplayBaseViewModel](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md)

Provides settings for a vector display created with a dynamic analysis result.

 [IOperationsVectorDisplayViewModel](VM.Operations.Post.Interfaces.IOperationsVectorDisplayViewModel.md)

Provides color, scale, and logarithmic display settings for a vector display.

 [IPage](VM.Operations.Post.Interfaces.IPage.md)

Enables creating, finding, activating, and closing [`IView`](VM.Operations.Post.Interfaces.IView.md) through the Operation API.

 [IView](VM.Operations.Post.Interfaces.IView.md)

Represents an animation or chart view that can be activated, arranged, and exported through the Operation API.

 [IViewSpec](VM.Operations.Post.Interfaces.IViewSpec.md)

Defines the camera position, target, and up direction applied to an animation view.
