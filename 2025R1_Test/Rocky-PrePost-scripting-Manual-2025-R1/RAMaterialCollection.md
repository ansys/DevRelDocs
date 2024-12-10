# RAMaterialCollection

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAMaterialCollection"></a>

### *class* RAMaterialCollection

Rocky PrePost Scripting wrapper for the collection of materials in a project.

This wrapper corresponds to the “Materials” item on the project’s data tree. Retrieve the
[`RAMaterialCollection`](#generated.RAMaterialCollection) from a [`RAStudy`](RAStudy.md#generated.RAStudy) via:

```python
material_collection = study.GetMaterialCollection()
```

Instances of the [`RAMaterialCollection`](#generated.RAMaterialCollection) class act as regular Python lists and can be
iterated on, individual materials accessed and deleted via index, etc:

```python
material_1 = material_collection.AddSolidMaterial()
material_2 = material_collection.AddFluidMaterial()
material_2 = material_collection[3]
del material_collection[2]
```

Items in this list are of type [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial) and [`RAFluidMaterial`](RAFluidMaterial.md#generated.RAFluidMaterial).

**Methods:**

| [`Clear`](#generated.RAMaterialCollection.Clear)()                                                         | Remove all items from the list.                                                                                   |
|------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| [`GetBulkSolidFraction`](#generated.RAMaterialCollection.GetBulkSolidFraction)()                           | Get the value of "Bulk Solid Fraction".                                                                           |
| [`GetDefaultMaterials`](#generated.RAMaterialCollection.GetDefaultMaterials)()                             | Deprecated: Use [`GetDefaultSolidMaterials()`](#generated.RAMaterialCollection.GetDefaultSolidMaterials) instead. |
| [`GetDefaultSolidMaterials`](#generated.RAMaterialCollection.GetDefaultSolidMaterials)()                   | Get a list with the default solid materials, in order of Particle, Belt and Boundary.                             |
| [`GetFluidMaterial`](#generated.RAMaterialCollection.GetFluidMaterial)(material_name)                      | Get the fluid material with the given name.                                                                       |
| [`GetMaterial`](#generated.RAMaterialCollection.GetMaterial)(material_name)                                | Deprecated: Use [`GetSolidMaterial()`](#generated.RAMaterialCollection.GetSolidMaterial) instead.                 |
| [`GetMaterialsInteractionCollection`](#generated.RAMaterialCollection.GetMaterialsInteractionCollection)() | Get the study's Materials Interaction Collection.                                                                 |
| [`GetSolidMaterial`](#generated.RAMaterialCollection.GetSolidMaterial)(material_name)                      | Get the solid material with the given name.                                                                       |
| [`New`](#generated.RAMaterialCollection.New)()                                                             | Deprecated: Use `Add{Solid, Fluid}Material()` instead.                                                            |
| [`Remove`](#generated.RAMaterialCollection.Remove)(item)                                                   | Remove an item from the list.                                                                                     |
| [`SetBulkSolidFraction`](#generated.RAMaterialCollection.SetBulkSolidFraction)(value)                      | Set the value of "Bulk Solid Fraction".                                                                           |

<a id="generated.RAMaterialCollection.Clear"></a>

#### Clear()

Remove all items from the list.

<a id="generated.RAMaterialCollection.GetBulkSolidFraction"></a>

#### GetBulkSolidFraction()

Get the value of “Bulk Solid Fraction”.

<a id="generated.RAMaterialCollection.GetDefaultMaterials"></a>

#### GetDefaultMaterials()

Deprecated: Use [`GetDefaultSolidMaterials()`](#generated.RAMaterialCollection.GetDefaultSolidMaterials) instead.

<a id="generated.RAMaterialCollection.GetDefaultSolidMaterials"></a>

#### GetDefaultSolidMaterials()

Get a list with the default solid materials, in order of Particle, Belt and Boundary.

<a id="generated.RAMaterialCollection.GetFluidMaterial"></a>

#### GetFluidMaterial(material_name: str)

Get the fluid material with the given name.

<a id="generated.RAMaterialCollection.GetMaterial"></a>

#### GetMaterial(material_name: str)

Deprecated: Use [`GetSolidMaterial()`](#generated.RAMaterialCollection.GetSolidMaterial) instead.

<a id="generated.RAMaterialCollection.GetMaterialsInteractionCollection"></a>

#### GetMaterialsInteractionCollection()

Get the study’s Materials Interaction Collection.

<a id="generated.RAMaterialCollection.GetSolidMaterial"></a>

#### GetSolidMaterial(material_name: str)

Get the solid material with the given name.

<a id="generated.RAMaterialCollection.New"></a>

#### New()

Deprecated: Use `Add{Solid, Fluid}Material()` instead.

<a id="generated.RAMaterialCollection.Remove"></a>

#### Remove(item: T)

Remove an item from the list.

<a id="generated.RAMaterialCollection.SetBulkSolidFraction"></a>

#### SetBulkSolidFraction(value: Union[str, float])

Set the value of “Bulk Solid Fraction”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.
