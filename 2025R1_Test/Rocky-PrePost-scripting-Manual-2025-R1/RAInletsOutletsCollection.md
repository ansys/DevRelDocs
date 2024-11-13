<a id="rainletsoutletscollection"></a>

# RAInletsOutletsCollection

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAInletsOutletsCollection"></a>

### *class* RAInletsOutletsCollection

Rocky PrePost Scripting wrapper for the collection of particle inputs in a project.

This wrapper corresponds to the “Inputs” item in the project’s data tree. To retrieve the
[`RAInletsOutletsCollection`](#generated.RAInletsOutletsCollection) from a [`RAStudy`](RAStudy.md#generated.RAStudy), use:

```python
input_collection = study.GetParticleInputCollection()
```

Instances of the [`RAInletsOutletsCollection`](#generated.RAInletsOutletsCollection) class act as regular Python lists, and can be
iterated on, accessed via index, etc:

```python
input_1 = input_collection.New()
input_2 = input_collection[1]
del input_collection[0]
for input in input_collection:
    print(input.GetName())
```

Items in this list are of type [`RAParticleInlet`](RAParticleInlet.md#generated.RAParticleInlet).

**Methods:**

| [`AddContinuousInjection`](#generated.RAInletsOutletsCollection.AddContinuousInjection)()   | Add a new ContinuousInjection.              |
|---------------------------------------------------------------------------------------------|---------------------------------------------|
| [`AddCustomInput`](#generated.RAInletsOutletsCollection.AddCustomInput)()                   | Add a new CustomInput.                      |
| [`AddFluidInlet`](#generated.RAInletsOutletsCollection.AddFluidInlet)()                     | Add a new SPHInlet.                         |
| [`AddOutlet`](#generated.RAInletsOutletsCollection.AddOutlet)()                             | Add a new Outlet.                           |
| [`AddParticleInlet`](#generated.RAInletsOutletsCollection.AddParticleInlet)()               | Add a new ParticleInlet.                    |
| [`AddVolumetricInlet`](#generated.RAInletsOutletsCollection.AddVolumetricInlet)()           | Add a new VolumeFill.                       |
| [`Clear`](#generated.RAInletsOutletsCollection.Clear)()                                     | Remove all items from the list.             |
| [`GetParticleInput`](#generated.RAInletsOutletsCollection.GetParticleInput)(input_name)     | Get the particle input with the given name. |
| [`GetParticleInputNames`](#generated.RAInletsOutletsCollection.GetParticleInputNames)()     | Get the names of all particle inputs.       |
| [`New`](#generated.RAInletsOutletsCollection.New)()                                         | Add a new item.                             |
| [`Remove`](#generated.RAInletsOutletsCollection.Remove)(item)                               | Remove an item from the list.               |

<a id="generated.RAInletsOutletsCollection.AddContinuousInjection"></a>

#### AddContinuousInjection()

Add a new ContinuousInjection. Returns the newly created item.

<a id="generated.RAInletsOutletsCollection.AddCustomInput"></a>

#### AddCustomInput()

Add a new CustomInput. Returns the newly created item.

<a id="generated.RAInletsOutletsCollection.AddFluidInlet"></a>

#### AddFluidInlet()

Add a new SPHInlet. Returns the newly created item.

<a id="generated.RAInletsOutletsCollection.AddOutlet"></a>

#### AddOutlet()

Add a new Outlet. Returns the newly created item.

<a id="generated.RAInletsOutletsCollection.AddParticleInlet"></a>

#### AddParticleInlet()

Add a new ParticleInlet. Returns the newly created item.

<a id="generated.RAInletsOutletsCollection.AddVolumetricInlet"></a>

#### AddVolumetricInlet()

Add a new VolumeFill. Returns the newly created item.

<a id="generated.RAInletsOutletsCollection.Clear"></a>

#### Clear()

Remove all items from the list.

<a id="generated.RAInletsOutletsCollection.GetParticleInput"></a>

#### GetParticleInput(input_name)

Get the particle input with the given name.

* **Parameters:**
  **input_name** (*unicode*) – 
* **Return type:**
  [RAParticleInlet](RAParticleInlet.md#generated.RAParticleInlet)

<a id="generated.RAInletsOutletsCollection.GetParticleInputNames"></a>

#### GetParticleInputNames()

Get the names of all particle inputs.

* **Return type:**
  list(unicode)

<a id="generated.RAInletsOutletsCollection.New"></a>

#### New()

Add a new item. Returns the newly created item.

* **Return type:**
  ApiElementItem

<a id="generated.RAInletsOutletsCollection.Remove"></a>

#### Remove(item: T)

Remove an item from the list.
