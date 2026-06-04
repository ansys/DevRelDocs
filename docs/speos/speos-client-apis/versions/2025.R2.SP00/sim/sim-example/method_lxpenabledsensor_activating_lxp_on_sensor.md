# LXPEnabledSensor – Activating the light expert on a sensor

When Light Expert is enabled in the definition of simulations, the LXP flag can be enabled on particular sensors.

This action is done handling **LXPEnabledSensor** object:

```ironpython
inverseSimulation = SIM.SimulationInverse.Create()
lxpSensor = SpeosSim.LXPEnabledSensor.Create() 
lxpSensor.LXPSensor.Set(radianceSensor)
lxpSensor.IsLXP = True
inverseSimulation.Sensors.Add(lxpSensor)
```