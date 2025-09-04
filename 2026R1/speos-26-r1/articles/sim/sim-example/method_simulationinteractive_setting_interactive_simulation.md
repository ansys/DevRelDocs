# SimulationInteractive – Setting an interactive simulation

The following script sample shows you an example on how to set an Interactive Simulation.

**GetInteractiveSimulationSettings** returns three Booleans:
 - DrawRays
 - DrawImpacts
 - ReportImpact

**SetInteractiveSimulationSettings** uses those three Booleans as parameters.

```ironpython
simulationSettings = interactiveSimulation.GetInteractiveSimulationSettings( )
for simulationSetting in simulationSettings:
print simulationSetting
interactiveSimulation.SetInteractiveSimulationSettings(True, True, False)
```