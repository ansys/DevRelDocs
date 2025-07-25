

# RACFDParametersList

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RACFDParametersList"></a>

### *class* RACFDParametersList

Rocky PrePost Scripting wrapper to manipulate the list of per-particle CFD parameters in a CFD coupling configuration.

To get the [`RACFDParametersList`](#generated.RACFDParametersList) from a CFD coupling wrapper (such as [`RAConstantOneWayCoupling`](RAConstantOneWayCoupling.md#generated.RAConstantOneWayCoupling),
`RAFluentOneWaySteadyCoupling`, or [`RAFluentTwoWayCoupling`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling)), use:

```python
parameters_list = coupling_process.GetCFDParametersList()
```

The [`RACFDParametersList`](#generated.RACFDParametersList) class acts as a regular Python list, with the usual methods to iterate
and access individual parameter sets. Note that it’s not possible to add and remove items from the
list, as they are added and removed automatically as Particles are added or removed from the project.

The items in the parameters list are of type [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters).

**Methods:**

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------|
| [`Clear`](#generated.RACFDParametersList.Clear)()                               | Overriden: Raises an error when called.             |
| [`GetParametersFor`](#generated.RACFDParametersList.GetParametersFor)(particle) | Get the set of CFD parameters for a given Particle. |
| [`New`](#generated.RACFDParametersList.New)()                                   | Overriden: Raises an error when called.             |
| [`Remove`](#generated.RACFDParametersList.Remove)(item)                         | Overriden: Raises an error when called.             |

<a id="generated.RACFDParametersList.Clear"></a>

#### Clear()

Overriden: Raises an error when called.

RACFDPerParticleParameters are created and removed automatically when Particles are added
or removed.

<a id="generated.RACFDParametersList.GetParametersFor"></a>

#### GetParametersFor(particle)

Get the set of CFD parameters for a given Particle.

* **Parameters:**
  **particle** ([*RAParticle*](RAParticle.md#generated.RAParticle) *or* *str*) – Either the PrePost Scripting wrapper for a Particle, or the name of the Particle.
* **Return type:**
  [RACFDPerParticleParameters](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)

<a id="generated.RACFDParametersList.New"></a>

#### New()

Overriden: Raises an error when called.

RACFDPerParticleParameters are created and removed automatically when Particles are added
or removed.

<a id="generated.RACFDParametersList.Remove"></a>

#### Remove(item)

Overriden: Raises an error when called.

RACFDPerParticleParameters are created and removed automatically when Particles are added
or removed.
