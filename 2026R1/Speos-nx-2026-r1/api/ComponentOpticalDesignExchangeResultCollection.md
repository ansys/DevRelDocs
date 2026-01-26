---
uid: class_speos_n_x__2512_1_1_component_optical_design_exchange_result_collection
title: ComponentOpticalDesignExchangeResultCollection
---

# ComponentOpticalDesignExchangeResultCollection Class

**Namespace:** `SpeosNX_2512`

**Inherits from:** `object`

Represents the collection of results belonging to an Optical Design Exchange feature.

## Description



## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |

## Methods

### FindFromName

```python
FindFromName(self, name) -> '`ComponentOpticalDesignExchangeResultFeature`'
```

Finds the result feature from its name.

**Parameters:**
- `name`: : String.


**Returns:** The result feature.

**Parameters:**

- `name` (name)

### CreateResultBuilder

```python
CreateResultBuilder(self, featureToEdit) -> '`ComponentOpticalDesignExchangeResultBuilder`'
```

Creates a builder for an Optical Design Exchange Result.

**Parameters:**
- `featureToEdit`: the feature to be edited.


**Returns:** CODXResuiltBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)
