# Options – Retrieving values

The following script sample shows you an example on how to retrieve different values.

```ironpython
options = SpeosSim.Options.Get()

Colorimetry = options.Colorimetry
CopySelectedInputFilesUnderDocumentFolder = options.CopySelectedInputFilesUnderDocumentFolder
IntensityResultViewingDirection = options.IntensityResultViewingDirection
NoInteropHealing = options.NoInteropHealing
PrecisionAngle = options.PrecisionAngle
PrecisionLength = options.PrecisionLength
PrecisionOther = options.PrecisionOther
PresetsCustomFolder = options.PresetsCustomFolder
ResultsAutomaticLaunchWhenSimulationEnds = options.ResultsAutomaticLaunchWhenSimulationEnds
ResultsDraw = options.ResultsDraw
ResultsDrawNullValuesAsTransparent = options.ResultsDrawNullValuesAsTransparent
ResultsSoundWhenSimulationEnds = options.ResultsSoundWhenSimulationEnds
SimulationNumberOfThreads = options.SimulationNumberOfThreads
SimulationVRSensorMemoryManagement = options.SimulationVRSensorMemoryManagement
```