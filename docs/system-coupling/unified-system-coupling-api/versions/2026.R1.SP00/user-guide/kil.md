# Known Issues and Limitations

## Parameter data from explicit data transfers

During a transient analysis, if a participant that performs implicit time-integration
receives parameter or variable data from a participant that performs explicit
time-integration, data for the **next** timestep will be provided and/or available
after `updateOutputs()` is called in the last iteration of a step. This includes
variable arrays registered with System Coupling via `registerInputScalarDataAccess`,
`registerInputVectorDataAccess` or similar functions or parameter values returned
with a call to `getParameterValue()

Example:

```python
# construct and register a vector field variable that will be coming from an
# explicit participant
displacement = np.array(3*numberElements)
sc.registerInputVectorDataAccess(getInputVector)
# ...
sc.doTimeStep():
  # parameter and field variables from explicit participants are available
  # prior to starting iterations
  temp = sc.getParameterValue("Temperature")
  d0 = displacement[0]
  # ...
  sc.doIteration():
    sc.updateInputs()
    # values of parameters and field variables from explicit participants will
    # not change during the iteration loop
    temp = sc.getParameterValue("Temperature")
    d0 = displacement[0]
    # ...
    sc.updateOutputs()
    # ISSUE: if no more iterations, parameters and field variables will be
    # updated with values from the **NEXT** timestep after updateOutputs
    temp = sc.getParameterValue("Temperature")
    d0 = displacement[0]
```
