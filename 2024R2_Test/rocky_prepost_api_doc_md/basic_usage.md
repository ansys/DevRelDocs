---
title: Basic Scripting using API:PrePost
author: Melanie Guyot
author email: melanie.guyot@ansys.com
summary: Ansys Rocky Prepost API
description: Ansys Rocky Prepost API
date: 2023-10-27
version: 2024 R1
status: unpublished
access control: internal
product: Ansys Rocky Prepost API
product collection: Fluids
programming language: C++
physics: Fluids
---


Rocky’s API:PrePost provides lower-level access to Rocky’s data structures and simulation results.
The API can be used to configure and simulate a project from scratch, analyze and export simulation
results and perform computations that go beyond Rocky’s standard feature set.

This page provides a basic guide/tutorial of the API:PrePost from the point of view of setting up
your project and exploring simulation results. For a more complete reference to the classes available
in scripting see the [Class Reference](api_reference.md).

#### NOTE
Not all Rocky scripting capabilities are currently documented in this scripting manual; there are
additional classes and functions available for some Rocky post-processing features that are
documented in the Rocky code itself. These can be accessed via the Python Shell.

#### NOTE
If the project already has simulation results, then using these API methods to change parameters
that affect those results might cause errors. In these cases, it might be necessary to call
study.DeleteResults() before making changes. (See also the topic “I cannot change my setup
parameters during processing” in the Rocky User Manual.)

## Setting Up a Project

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

## Post-Processing Results

The simulation entities that provide results (such as particles, conveyors, and custom geometries)
have methods in their API wrappers to retrieve the geometry, properties (grid functions), curves, etc.

Get the positions of the particles at a given timestep:

```python
study = app.GetStudy()
particles = study.GetParticles()
for particle in particles.IterParticles(time_step=10):
    print(particle.x, particle.y, particle.z)

# Sample output:
# (-5.833559188701166, 0.7380019118190704, 0.19294910836680973)
# (-5.1383928383823845, 0.6290253809025952, -0.14368919420973403)
```

Get individual properties (grid functions) and curves:

```python
particles.GetGridFunction('Absolute Translational Velocity').GetArray(time_step=10)

# Sample output:
# array([ 2.56413788,  4.46129788,  3.96977314,  3.47665254 ])

# GetY() returns the curve's image.
particles.GetCurve('Particles Count').GetY()

# Sample output:
# array([  0,   1,   2,   3,   4,   6,   6,   7,   8,   9,  11 ])
```

Create and modify user processes, and retrieve their results:

```python
# Get the collection of user processes.
project = app.GetProject()
user_processes = project.GetUserProcessCollection()

# Create and configure a Cube on the Particles.
cube = user_processes.CreateCubeProcess(particles)
cube.SetCenter(1.0, 2.0, 3.0, 'm')
cube.SetSize(2.0, 2.0, 2.0)

# Create and configure an Eulerian Statistics on the Cube.
eulerian = user_processes.CreateEulerianStatistics(cube)
eulerian.SetDivisions((2, 2, 1))

# Retrieve a property on the Eulerian Statistics.
eulerian.GetGridFunction('Number of Particles').GetArray(time_step=10)

# Sample output. The Grid Function has 4 elements because the Eulerian Statistics has 2x2x1 = 4 blocks.
# array([ 0.,  2.,  3.,  0.])
```
