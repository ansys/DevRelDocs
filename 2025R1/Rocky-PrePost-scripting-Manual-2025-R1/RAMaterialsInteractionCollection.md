# RAMaterialsInteractionCollection

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAMaterialsInteractionCollection"></a>

### *class* RAMaterialsInteractionCollection

Rocky PrePost Scripting wrapper for the collection of materials interactions in a project.

This wrapper corresponds to the “Materials Interactions” item on the project’s data tree. Retrieve
the [`RAMaterialsInteractionCollection`](#generated.RAMaterialsInteractionCollection) from a [`RAStudy`](RAStudy.md#generated.RAStudy) via:

```python
interaction_collection = RAMaterialCollection.GetMaterialsInteractionCollection()
```

Instances of the [`RAMaterialsInteractionCollection`](#generated.RAMaterialsInteractionCollection) class act as regular Python lists and can be
iterated on, individual materials accessed via index, etc:

```python
interaction_1 = interaction_collection[3]
for interaction in interaction_collection:
    interaction.SetAdhesiveFraction(80, '%')
interaction_2 = interaction_collection.GetMaterialsInteraction('Default Particles', 'Default Boundaries')
```

Note that individual interactions can’t be created or removed by the user: they are created and
removed as necessary as new materials are created or removed.

Items in this list are of type [`RAMaterialsInteraction`](RAMaterialsInteraction.md#generated.RAMaterialsInteraction).

**Methods:**

| [`Clear`](#generated.RAMaterialsInteractionCollection.Clear)()                                                           | Unused: Materials Interactions are automatically deleted when Materials are created.   |
|--------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`GetMaterialsInteraction`](#generated.RAMaterialsInteractionCollection.GetMaterialsInteraction)(material_1, material_2) | Get the materials interaction for the given pair of materials.                         |
| [`New`](#generated.RAMaterialsInteractionCollection.New)()                                                               | Unused: Materials Interactions are automatically created when Materials are created.   |
| [`Remove`](#generated.RAMaterialsInteractionCollection.Remove)(item)                                                     | Unused: Materials Interactions are automatically deleted when Materials are created.   |

<a id="generated.RAMaterialsInteractionCollection.Clear"></a>

#### Clear()

Unused: Materials Interactions are automatically deleted when Materials are created.

<a id="generated.RAMaterialsInteractionCollection.GetMaterialsInteraction"></a>

#### GetMaterialsInteraction(material_1, material_2)

Get the materials interaction for the given pair of materials.

For both material_1 and material_2 parameters, the parameter can be either an instance
of [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial) or the material’s name.

<a id="generated.RAMaterialsInteractionCollection.New"></a>

#### New()

Unused: Materials Interactions are automatically created when Materials are created.

<a id="generated.RAMaterialsInteractionCollection.Remove"></a>

#### Remove(item)

Unused: Materials Interactions are automatically deleted when Materials are created.
