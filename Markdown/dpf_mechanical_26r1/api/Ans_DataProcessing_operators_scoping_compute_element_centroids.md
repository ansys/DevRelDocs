---
uid: Ans.DataProcessing.operators.scoping.compute_element_centroids
title: compute_element_centroids
---

# compute_element_centroids Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

Computes the element centroids of the mesh. It also outputs the element measure.   ///available inputs: element_scoping (Scoping) (optional), mesh (MeshedRegion)
            available outputs: centroids (Field), measure (Field)

compute_element_centroids()
compute_element_centroids(element_scoping: object, mesh: object, config: OperatorConfig)
compute_element_centroids(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
compute_element_centroids()
```

#### Constructor

```python
compute_element_centroids(element_scoping, mesh, config)
```

**Parameters:**

- `element_scoping` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
compute_element_centroids(config)
```

**Parameters:**

- `config` (*OperatorConfig*)

## Methods

## Properties

#### inputs

**Type:** *InputSpec*

```python
# Get or set the property
value = obj.inputs
obj.inputs = new_value
```

#### outputs

**Type:** *OutputSpec*

```python
# Get or set the property
value = obj.outputs
obj.outputs = new_value
```

#### defaultConfig

**Type:** *Config*

```python
# Get the property (read-only)
value = obj.defaultConfig
```
