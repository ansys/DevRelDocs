

# RAPointCloudCollection

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAPointCloudCollection"></a>

### *class* RAPointCloudCollection

Rocky PrePost Scripting wrapper for the collection of point clouds in a project.

This wrapper corresponds to the “Point Clouds” item in the project’s data tree. To retrieve the
[`RAPointCloudCollection`](#generated.RAPointCloudCollection) from a [`RAStudy`](RAStudy.md#generated.RAStudy), use:

```python
point_cloud_collection = study.GetPointCloudCollection()
```

Instances of the [`RAPointCloudCollection`](#generated.RAPointCloudCollection) class act as regular Python lists, and can be
iterated on, accessed via index, etc:

```python
point_cloud_1 = point_cloud_collection.New()
point_cloud_2 = point_cloud_collection[1]
del point_cloud_collection[0]
```

Items in this list are of type [`RAPointCloud`](RAPointCloud.md#generated.RAPointCloud).

**Methods:**

| [`Clear`](#generated.RAPointCloudCollection.Clear)()       | Remove all items from the list.   |
|------------------------------------------------------------|-----------------------------------|
| [`New`](#generated.RAPointCloudCollection.New)()           | Add a new item.                   |
| [`Remove`](#generated.RAPointCloudCollection.Remove)(item) | Remove an item from the list.     |

<a id="generated.RAPointCloudCollection.Clear"></a>

#### Clear()

Remove all items from the list.

<a id="generated.RAPointCloudCollection.New"></a>

#### New()

Add a new item. Returns the newly created item.

<a id="generated.RAPointCloudCollection.Remove"></a>

#### Remove(item: T)

Remove an item from the list.
