## Postprocessing results

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
