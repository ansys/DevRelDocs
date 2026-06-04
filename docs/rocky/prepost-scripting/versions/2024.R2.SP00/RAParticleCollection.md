# RAParticleCollection

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAParticleCollection"></a>

### *class* RAParticleCollection

Rocky PrePost Scripting wrapper for the collection of particles in a project.

This wrapper corresponds to the “Particles” item in the project’s data tree. To retrieve the
[`RAParticleCollection`](#generated.RAParticleCollection) from a [`RAStudy`](RAStudy.md#generated.RAStudy), use:

```python
particle_collection = study.GetParticleCollection()
```

Instances of the [`RAParticleCollection`](#generated.RAParticleCollection) class act as regular Python lists, and can be
iterated on, accessed via index, etc:

```python
particle_1 = particle_collection.New()
particle_2 = particle_collection[1]
del particle_collection[0]
for particle in particle_collection:
    particle.SetMaterial('My Particle Material')
```

Items in this list are of type [`RAParticle`](RAParticle.md#generated.RAParticle).

**Methods:**

| Name | Description |
|-----------------------------------------------------------------------------|------------------------------------------------------------------|
| [`Clear`](#generated.RAParticleCollection.Clear)()                          | Remove all items from the list.                                  |
| [`GetParticle`](#generated.RAParticleCollection.GetParticle)(particle_name) | Get a particle given its name.                                   |
| [`GetParticleNames`](#generated.RAParticleCollection.GetParticleNames)()    | Get a list of the names of all the particles in this collection. |
| [`New`](#generated.RAParticleCollection.New)()                              | Add a new item.                                                  |
| [`Remove`](#generated.RAParticleCollection.Remove)(item)                    | Remove an item from the list.                                    |

<a id="generated.RAParticleCollection.Clear"></a>

#### Clear()

Remove all items from the list.

<a id="generated.RAParticleCollection.GetParticle"></a>

#### GetParticle(particle_name: str)

Get a particle given its name.

<a id="generated.RAParticleCollection.GetParticleNames"></a>

#### GetParticleNames()

Get a list of the names of all the particles in this collection.

* **Return type:**
  list

<a id="generated.RAParticleCollection.New"></a>

#### New()

Add a new item. Returns the newly created item.

<a id="generated.RAParticleCollection.Remove"></a>

#### Remove(item: T)

Remove an item from the list.
