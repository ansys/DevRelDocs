---
uid: Ans.DataProcessing.operators.mesh.point_cloud_search
---

# point_cloud_search Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

point_cloud_search()
point_cloud_search(search_domain: object, reference_domain: object, tolerance: object, exclusive_search: object, algorithm: object, config: OperatorConfig)
point_cloud_search(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `Ans_Dpf_PointCloudSearch_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### search_domain

**Type:** *LinkableInput*

### reference_domain

**Type:** *LinkableInput*

### tolerance

**Type:** *LinkableInput*

### exclusive_search

**Type:** *LinkableInput*

### algorithm

**Type:** *LinkableInput*

## Outputs

### search_indices

**Type:** *LinkableOutput*

### reference_indices

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
point_cloud_search()
```

#### Constructor

```python
point_cloud_search(search_domain, reference_domain, tolerance, exclusive_search, algorithm, config)
```

**Parameters:**

- `search_domain` (*object*)
- `reference_domain` (*object*)
- `tolerance` (*object*)
- `exclusive_search` (*object*)
- `algorithm` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
point_cloud_search(config)
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
