# About grid functions / properties

Rocky’s PrePost Scripting provides Grid Functions or Properties that are retrieved by its
respective name (a string parameter) as shown in the following example:

```python
study = app.GetStudy()
particle = study.GetElement('Particles')
particle_size = particle.GetGridFunction('Particle Size')
```

The following documentation provides details about some particular Grid Functions or
Properties.

<a id="stress-tensor"></a>

## Stress Tensor

The Stress Tensor Grid Function is available when the contacts collection is activated.

```python
study = app.GetStudy()
particle = study.GetElement('Particles')
stress_tensor = particle.GetGridFunction('Stress Tensor')
```

The Stress Tensor array can be retrieved by:

```python
stress_tensor = particle.GetGridFunction('Stress Tensor')
stress_tensor.GetArray(time_step=1)

# Sample output:
# array([[0., 0., 0., 0., 0., 0., 0., 0., 0.],
#   [0., 0., 0., 0., 0., 0., 0., 0., 0.],
#   [0., 0., 0., 0., 0., 0., 0., 0., 0.]])
```

The retrieved array has the structure of N x 9 elements where N is the number of particles
present in the respective time_step. Each 9 element array list represents the particle Stress
Tensor components in the following order: σXX, σXY, σXZ, σYX, σYY, σYZ, σZX, σZY,
σZZ.
