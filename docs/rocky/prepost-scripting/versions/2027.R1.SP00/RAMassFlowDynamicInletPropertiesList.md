

# RAMassFlowDynamicInletPropertiesList

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAMassFlowDynamicInletPropertiesList"></a>

### *class* RAMassFlowDynamicInletPropertiesList

Rocky PrePost Scripting wrapper for the input entries list in a single MassFlowDynamicInlet.

To get the [`RAMassFlowDynamicInletPropertiesList`](#generated.RAMassFlowDynamicInletPropertiesList) from a
[`RAMassFlowDynamicInlet`](RAMassFlowDynamicInlet.md#generated.RAMassFlowDynamicInlet), use:

```python
input_properties_list = mass_flow_dynamic_inlet.GetInputPropertiesList()
```

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

**Methods:**

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------|
| [`Clear`](#generated.RAMassFlowDynamicInletPropertiesList.Clear)()       | Remove all items from the list.   |
| [`New`](#generated.RAMassFlowDynamicInletPropertiesList.New)()           | Add a new item.                   |
| [`Remove`](#generated.RAMassFlowDynamicInletPropertiesList.Remove)(item) | Remove an item from the list.     |

<a id="generated.RAMassFlowDynamicInletPropertiesList.Clear"></a>

#### Clear()

Remove all items from the list.

<a id="generated.RAMassFlowDynamicInletPropertiesList.New"></a>

#### New()

Add a new item. Returns the newly created item.

<a id="generated.RAMassFlowDynamicInletPropertiesList.Remove"></a>

#### Remove(item: T)

Remove an item from the list.
