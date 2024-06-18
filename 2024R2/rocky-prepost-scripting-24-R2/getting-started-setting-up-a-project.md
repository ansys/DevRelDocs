# Setting up a project

Create a new project and set the study description and customer:

```python
project = app.CreateProject()
project.SaveProject('my_project.rocky')

study = project.GetStudy()
study.SetDescription('My Simulation')
study.SetCustomerName('My Customer')
```

Configure physics settings:

```python
physics = study.GetPhysics()
physics.SetEnableThermalModel(True)
physics.SetGravityStartTime(10, 's')
physics.SetRollingResistanceModel('type_3')
physics.SetNormalForceModel('damped_hertzian')
```

Create and configure materials and their interactions:

```python
material_collection = study.GetMaterialCollection()
material = material_collection.New()
material.SetUseBulkDensity(False)
material.SetName('My Material')
material.SetDensity(1000)

interactions = study.GetMaterialsInteractionCollection()
inter_1 = interactions.GetMaterialsInteraction('Default Particles', 'My Material')
inter_1.SetAdhesiveDistance(10, 'cm')
```

Create and configure conveyors, custom geometries, and inlets:

```python
conveyor = study.CreateReceivingConveyor()
conveyor.SetWidth(10)
conveyor.SetBeltSpeed(5, 'm/s')

custom = study.ImportCustomGeometries('my_geometry.stl')[0]
custom.SetBoundaryMass(100, 'kg')
custom.SetVerticalOffset(-10, 'cm')
custom.SetMaterial('My Material')

inlet = study.CreateInlet()
inlet.SetName('My Inlet')
inlet.SetGeometryType('circular')
inlet.SetCircularMinMaxRadius(1, 2, 'm')
```

Create and configure the particle sets used in the simulation and the particle inputs:

```python
particle_collection = study.GetParticleCollection()
particle = particle_collection.New()

particle.SetShape('polyhedron')
particle.SetNumberOfCorners(14)
particle.SetName('My Particle')
particle.SetBreakageModel('ab_t10')

inputs = study.GetParticleInputCollection()
input_1 = inputs.New()
input_1.SetName('My Input')
input_1.SetEntryPoint('My Inlet')

entries = input_1.GetInputPropertiesList()
entry = entries.New()
entry.SetParticle(particle)
entry.SetMassFlowRate(100, 'kg/s')
entry.SetTemperature(30, 'degC')
```

Configure domain settings:

```python
domain_settings = study.GetDomainSettings()
domain_settings.SetUseBoundaryLimits(False)
domain_settings.SetCoordinateLimitsMinValues([-2, -2, -2], 'm')
domain_settings.SetCoordinateLimitsMaxValues([2, 2, 2], 'm')
domain_settings.SetBoundariesDirections('XYZ')
domain_settings.SetPeriodicAtGeometryLimits(True)
```

Configure solver settings and start the simulation:

```python
solver = study.GetSimulatorRun()
solver.SetSimulationDuration(5, 's')
solver.SetOutputFrequency(1, 's')
solver.SetNumberOfProcessors(2)

# The script will block until the simulation finishes.
study.StartSimulation(skip_summary=True, delete_results=True)
```
