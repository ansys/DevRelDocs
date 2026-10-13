# DirectSImulationSettings – Setting a direct simulation

The following script sample shows you an example on how to set a Direct Simulation.

**GetDirectSimulationSettings** returns a **DirectSimulationSettings** object that allows you to modify simulation settings.

The **DirectSimulationSettings** object includes four main methods:
 - SetPropagationErrorAnalysis\(*bool propagationErrorAnalysis*\)
 - SetDispersion\(*bool dispersion*\)
 - SetFastTransmissionGathering\(*bool fastTransmissionGathering*\)
 - SetAutomaticSaveFrequency\(*int directTemporarySave*\)

**SetDirectSimulationSettings** applies the changes made with the **GetDirectSimulationSettings** function.

```ironpython
directSetting = simuDir.GetDirectSimulationSettings()
directSetting.SetPropagationErrorAnalysis(False)
directSetting.SetDispersion(True)
directSetting.SetFastTransmissionGathering(False)
directSetting.SetAutomaticSaveFrequency(1800)
simuDir.SetDirectSimulationSettings(directSetting)
```