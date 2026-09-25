# Namespace VM.Models.Post
<a id="VM_Models_Post"></a>

### Namespaces

 [VM.Models.Post.Bodies](VM.Models.Post.Bodies.md)

 [VM.Models.Post.ChartMathLib](VM.Models.Post.ChartMathLib.md)

 [VM.Models.Post.EntityTypes](VM.Models.Post.EntityTypes.md)

### Classes

 [EntityBase](VM.Models.Post.EntityBase.md)

Defines the base class for entities loaded from a result document.

 [GeneralMarker](VM.Models.Post.GeneralMarker.md)

Represents a coordinate-system marker loaded from or created in a result document.

 [ObjectBase](VM.Models.Post.ObjectBase.md)

Defines the base class implementing `IObject` for postprocessor object.

 [TransformationParameters](VM.Models.Post.TransformationParameters.md)

Provides the angle, position, rotation-axis, and rotation-type values for a transformation offset.

### Interfaces

 [IDataPart](VM.Models.Post.IDataPart.md)

Provides geometry, node, element, and transformation data for one finite-element part.

 [IFEProperty](VM.Models.Post.IFEProperty.md)

Represents a finite element property entity.

 [IHasGuid](VM.Models.Post.IHasGuid.md)

Defines an object that exposes a globally unique identifier.

 [IResultMarker](VM.Models.Post.IResultMarker.md)

Represents a marker result with the body, node, and parent information needed to read its values.

 [ISTFTParameters](VM.Models.Post.ISTFTParameters.md)

Carries the source signal and the window, frequency, and scaling settings that [`CreateSTFT(ISTFTParameters, IList<string>)`](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateSTFT.md) uses to build a Short-Time Fourier Transform (STFT) heat map.

The STFT splits the source signal into overlapping time windows and runs a Fast Fourier Transform (FFT) on each window, so the values set here decide the time range, window size, overlap, frequency axis, and value scaling of the result.

 [IVectorDisplay](VM.Models.Post.IVectorDisplay.md)

Represents a vector display definition associated with an entity and a vector characteristic.

 [IVectorDisplayAnimationBase](VM.Models.Post.IVectorDisplayAnimationBase.md)

Provides the common state used to render and update a vector display animation.

 [IVectorDisplayable](VM.Models.Post.IVectorDisplayable.md)

Identifies an entity that provides characteristics for vector display.

### Enums

 [ActionType](VM.Models.Post.ActionType.md)

Identifies the action role of a connector relative to a body.

 [AlignType](VM.Models.Post.AlignType.md)

Selects how curves are lined up by [`CreateAlign(IEnumerable<string>, AlignType)`](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateAlign.md).

`Zero` moves each curve so its first Y point starts at zero. `Curve` shifts every following curve so its first Y point matches the first Y point of the first selected curve.

 [AnalysisMethodEN](VM.Models.Post.AnalysisMethodEN.md)

Specifies the mean-stress correction method used in fatigue analysis.

 [AxisType](VM.Models.Post.AxisType.md)

Specifies the scale type used by a chart axis.

 [BehaviorType](VM.Models.Post.BehaviorType.md)

Specifies the physical behavior exported as acoustic raw data.

 [BodyType](VM.Models.Post.BodyType.md)

Identifies the body category used to filter bodies in a result file.

 [CalculusType](VM.Models.Post.CalculusType.md)

Specifies the calculus operation applied to curve data.

 [CategoryType](VM.Models.Post.CategoryType.md)

Identifies the category used to group and filter an entity through [`CategoryType`](VM.Models.Post.EntityBase.CategoryType.md).

 [ChartAxisType](VM.Models.Post.ChartAxisType.md)

Specifies whether a chart tracking operation displays one curve or multiple curves at the same time.

 [ColorSchemeType](VM.Models.Post.ColorSchemeType.md)

Specifies the color mapping used to display result values.

 [ConnectorType](VM.Models.Post.ConnectorType.md)

Identifies the connector category reported for a result connector.

 [CoordinateType](VM.Models.Post.CoordinateType.md)

Identifies one of the three local coordinate axes used by a general marker.

 [EntityType](VM.Models.Post.EntityType.md)

Identifies the kind of entity loaded from a result document, used to classify and filter entities exposed through [`IEntityBaseViewModel`](VM.ViewModels.Post.IEntityBaseViewModel.md).

 [ExtremalValueType](VM.Models.Post.ExtremalValueType.md)

Specifies the scope used to calculate an extremal result value.

 [FFTType](VM.Models.Post.FFTType.md)

Specifies the value represented by a Fast Fourier Transform result.

 [FFTWindowType](VM.Models.Post.FFTWindowType.md)

Specifies the window function used for a Fast Fourier Transform.

 [FatigueAnalysisType](VM.Models.Post.FatigueAnalysisType.md)

Specifies the fatigue-analysis curve type.

 [FilteringType](VM.Models.Post.FilteringType.md)

Specifies the frequency range passed by a filtering operation.

 [FrequencyAxisType](VM.Models.Post.FrequencyAxisType.md)

Specifies the chart axis that supplies frequency values.

 [GeneralMarkerType](VM.Models.Post.GeneralMarkerType.md)

Specifies the coordinate-system representation used by a general marker.

 [ImageFormat](VM.Models.Post.ImageFormat.md)

Specifies the image format used when exporting a captured view.

 [InterpolationErrorType](VM.Models.Post.InterpolationErrorType.md)

Reports the result of an interpolation operation.

 [LabelFormatType](VM.Models.Post.LabelFormatType.md)

Specifies the numeric format used for chart labels.

 [Layout](VM.Models.Post.Layout.md)

Specifies a predefined corner position for information overlays displayed in an animation view.

 [LegendPlacementType](VM.Models.Post.LegendPlacementType.md)

Specifies where a chart legend is placed.

 [LineStyleType](VM.Models.Post.LineStyleType.md)

Specifies the dash pattern used to render a curve or chart grid line.

 [MeanStressCorrection](VM.Models.Post.MeanStressCorrection.md)

Specifies the mean-stress correction used for stress-life fatigue analysis.

 [ParentType](VM.Models.Post.ParentType.md)

Identifies the parent entity kind associated with a result marker.

 [PlasticityCorrection](VM.Models.Post.PlasticityCorrection.md)

Specifies the plasticity correction used for strain-life fatigue analysis.

 [PointType](VM.Models.Post.PointType.md)

Specifies the marker shape used to render points on a curve.

 [RecordingRangeType](VM.Models.Post.RecordingRangeType.md)

Specifies the visible area captured for an animation recording.

 [RecordingType](VM.Models.Post.RecordingType.md)

Specifies the file format used to record animation frames.

 [RotationTypes](VM.Models.Post.RotationTypes.md)

Specifies how angular offsets are converted into a reference orientation.

 [STFTScaleType](VM.Models.Post.STFTScaleType.md)

Specifies the scale used to display Short-Time Fourier Transform values.

 [ScaleType](VM.Models.Post.ScaleType.md)

Specifies the scale used to display signal values.

 [SeriesType](VM.Models.Post.SeriesType.md)

Selects how a curve is drawn on a 2D chart through [`SeriesType`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.SeriesType.md).

Each value changes the shape used to show the data points, such as a connected line, bars, single points, or stacked columns. When `Point` is selected, the connecting line is hidden so only the point markers appear.

 [ShellDirectionType](VM.Models.Post.ShellDirectionType.md)

Specifies which surface of a shell supplies stress or strain result values.

 [SignType](VM.Models.Post.SignType.md)

Selects the sign applied to the absolute-value curve created by [`CreateAbsolute(IEnumerable<string>, SignType)`](VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.CreateAbsolute.md).

The absolute transform first takes the absolute value of each Y point. `Positive` keeps those values as they are, and `Negative` flips them to make every point negative.

 [SignalProcessingType](VM.Models.Post.SignalProcessingType.md)

Specifies the signal-processing operation applied to curve data.

 [SimpleMathType](VM.Models.Post.SimpleMathType.md)

Specifies the arithmetic operation used to create calculated curve data.

 [SmoothingType](VM.Models.Post.SmoothingType.md)

Specifies the algorithm used to smooth curve data.

 [TransformationType](VM.Models.Post.TransformationType.md)

Specifies how a following camera responds to target motion.

 [VectorDisplayType](VM.Models.Post.VectorDisplayType.md)

Specifies how vector values are displayed in the animation.

 [WeightingType](VM.Models.Post.WeightingType.md)

Specifies the frequency weighting curve applied to signal data.
