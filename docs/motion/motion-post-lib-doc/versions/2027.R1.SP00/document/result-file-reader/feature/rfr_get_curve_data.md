# Get Curve Data
This feature covers curve-data operations provided by [`OutputReader`](../../../lib/VM.Post.API.OutputReader.OutputReader.md), including reading curve data and building new points from supplied curve arrays.

The resulting curve data stays available in memory for further curve processing.

## Getting
Get the characteristic names available for an entity with [`GetPlotCharacteristics(string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetPlotCharacteristics.md), and get the component names for a chosen characteristic with [`GetPlotComponents(string, string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetPlotComponents.md). Use a characteristic and component together to build the paths assigned to [`Paths`](../../../lib/VM.Models.OutputReader.PlotParameters.Paths.md), then pass those paths through [`GetCurves(PlotParameters)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetCurves.md) to read the corresponding curve data.

Read curve data with `GetCurves(PlotParameters)`. [`Target`](../../../lib/VM.Models.OutputReader.PlotParameters.Target.md) names the entity to read curve data from, and `Paths` lists the characteristic-and-component combinations to read. The returned dictionary maps each curve key to an array of [`Point2D`](../../../lib/VM.Point2D.md) values.

## Interpolating
Build a new set of points from X and Y arrays with [`InterpolationAkimaSpline(double[], double[], int, int, double, double)`](../../../lib/VM.Post.API.OutputReader.OutputReader.InterpolationAkimaSpline.md). The result includes [`InterpolationErrorType`](../../../lib/VM.Models.Post.InterpolationErrorType.md) together with the new X and Y arrays. Adjacent duplicate X values are removed before interpolation runs.