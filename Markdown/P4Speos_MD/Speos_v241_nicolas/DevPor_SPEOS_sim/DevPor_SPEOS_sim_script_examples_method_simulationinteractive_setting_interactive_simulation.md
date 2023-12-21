# SimulationInteractive – Setting an Interactive Simulation

The following script sample shows you an example on how to set an Interactive Simulation.

**GetInteractiveSimulationSettings** returns three Booleans:
 - DrawRays
 - DrawImpacts
 - ReportImpact

**SetInteractiveSimulationSettings** uses those three Booleans as parameters.

```
simulationSettings = interactiveSimulation.GetInteractiveSimulationSettings( )
for simulationSetting in simulationSettings:
print simulationSetting
interactiveSimulation.SetInteractiveSimulationSettings(True, True, False)
```