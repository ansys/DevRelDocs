<a id="raregionsofinterestcollection"></a>

# RARegionsOfInterestCollection

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RARegionsOfInterestCollection"></a>

### *class* RARegionsOfInterestCollection

Rocky PrePost Scripting wrapper for the collection of Regions of Interest in a project.

This wrapper corresponds to the “Regions Of Interest” item in the project’s data tree. To
retrieve the [`RARegionsOfInterestCollection`](#generated.RARegionsOfInterestCollection) from a [`RAStudy`](RAStudy.md#generated.RAStudy), use:

> roi_collection = study.GetRegionsOfInterestCollection()

Instances of the [`RARegionsOfInterestCollection`](#generated.RARegionsOfInterestCollection) class act as regular Python lists, and
can be iterated on, accessed via index, etc:

**Methods:**

| [`AddCube`](#generated.RARegionsOfInterestCollection.AddCube)([name])         | Add a new Cube.                 |
|-------------------------------------------------------------------------------|---------------------------------|
| [`AddCylinder`](#generated.RARegionsOfInterestCollection.AddCylinder)([name]) | Add a new Cylinder.             |
| [`Clear`](#generated.RARegionsOfInterestCollection.Clear)()                   | Remove all items from the list. |
| [`New`](#generated.RARegionsOfInterestCollection.New)()                       | Add a new item.                 |
| [`Remove`](#generated.RARegionsOfInterestCollection.Remove)(item)             | Remove an item from the list.   |

<a id="generated.RARegionsOfInterestCollection.AddCube"></a>

#### AddCube(name: str | None = None)

Add a new Cube. Returns the newly created item.

<a id="generated.RARegionsOfInterestCollection.AddCylinder"></a>

#### AddCylinder(name: str | None = None)

Add a new Cylinder. Returns the newly created item.

<a id="generated.RARegionsOfInterestCollection.Clear"></a>

#### Clear()

Remove all items from the list.

<a id="generated.RARegionsOfInterestCollection.New"></a>

#### New()

Add a new item. Returns the newly created item.

<a id="generated.RARegionsOfInterestCollection.Remove"></a>

#### Remove(item: T)

Remove an item from the list.
