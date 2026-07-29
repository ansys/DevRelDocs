# Options – Updating values

The following script sample shows you an example on how to update values.

```ironpython
import Dom.Optics
options.Colorimetry = Dom.Optics.ColorimetryStandard.CIE1964
options.CopySelectedInputFilesUnderDocumentFolder = False
options.IntensityResultViewingDirection = Dom.Optics.PropagationDirection.FromSensorLookingAtSource
options.NoInteropHealing = False
options.PrecisionAngle = 2
options.PrecisionLength = 4
options.PrecisionOther = 3
options.PresetsCustomFolder = r"C:\Presets"
options.ResultsAutomaticLaunchWhenSimulationEnds = True
options.ResultsDraw = False
options.ResultsDrawNullValuesAsTransparent = True
options.ResultsSoundWhenSimulationEnds = True
options.SimulationNumberOfThreads = 1
options.SimulationVRSensorMemoryManagement = False

SpeosSim.Options.Set(options)
```