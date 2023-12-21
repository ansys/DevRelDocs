# LXPEnabledSensor – Activating the Light Expert on a Sensor

When Light Expert is enabled in the definition of simulations, the LXP flag can be enabled on particular sensors.

This action is done handling **LXPEnabledSensor** object:

```
inverseSimulation = SIM.SimulationInverse.Create()
lxpSensor = SpeosSim.LXPEnabledSensor.Create() 
lxpSensor.LXPSensor.Set(radianceSensor)
lxpSensor.IsLXP = True
inverseSimulation.Sensors.Add(lxpSensor)
```