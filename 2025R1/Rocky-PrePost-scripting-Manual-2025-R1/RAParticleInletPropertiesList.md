# RAParticleInletPropertiesList

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAParticleInletPropertiesList"></a>

### *class* RAParticleInletPropertiesList

Rocky PrePost Scripting wrapper for the input entries list in a single Particle Input.

To get the [`RAParticleInletPropertiesList`](#generated.RAParticleInletPropertiesList) from a [`RAParticleInlet`](RAParticleInlet.md#generated.RAParticleInlet), use:

```python
input_properties_list = particle_input.GetInputPropertiesList()
```

[`RAParticleInletPropertiesList`](#generated.RAParticleInletPropertiesList) contains methods to add, remove and retrieve individual
input property entries. It corresponds to the list of entries on a Particle Input’s “Input” tab
on the Rocky UI.

The following examples add, remove and access individual entries in the input properties list:

```python
# Add new items
input_properties_1 = input_properties_list.New()

# Access and modify items
input_properties_2 = input_properties_list[0]
input_properties_2.SetParticle('Particle 1')

# Remove items
input_properties_list.Remove(input_properties_2)
del input_properties_list[0]
input_properties_list.Clear()
```

The [`RAParticleInletPropertiesList`](#generated.RAParticleInletPropertiesList) is a list of [`RAParticleInletProperties`](RAParticleInletProperties.md#generated.RAParticleInletProperties).

**Methods:**

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------|
| [`Clear`](#generated.RAParticleInletPropertiesList.Clear)()       | Remove all items from the list.   |
| [`New`](#generated.RAParticleInletPropertiesList.New)()           | Add a new item.                   |
| [`Remove`](#generated.RAParticleInletPropertiesList.Remove)(item) | Remove an item from the list.     |

<a id="generated.RAParticleInletPropertiesList.Clear"></a>

#### Clear()

Remove all items from the list.

<a id="generated.RAParticleInletPropertiesList.New"></a>

#### New()

Add a new item. Returns the newly created item.

<a id="generated.RAParticleInletPropertiesList.Remove"></a>

#### Remove(item: T)

Remove an item from the list.
