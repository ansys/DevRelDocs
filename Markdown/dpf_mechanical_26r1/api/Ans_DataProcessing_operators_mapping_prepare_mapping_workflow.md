---
uid: Ans.DataProcessing.operators.mapping.prepare_mapping_workflow
---

# prepare_mapping_workflow Class

**Namespace:** [Ans.DataProcessing.operators.mapping](Ans_DataProcessing_operators_mapping.md)

Generates a workflow that can map results from a support to another one.   ///available inputs: input_support (Field, MeshedRegion), output_support (Field, MeshedRegion), filter_radius (double), influence_box (double) (optional)
            available outputs: mapping_workflow (Workflow)

prepare_mapping_workflow()
prepare_mapping_workflow(input_support: object, output_support: object, filter_radius: object, influence_box: object, config: OperatorConfig)
prepare_mapping_workflow(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mapping` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
prepare_mapping_workflow()
```

#### Constructor

```python
prepare_mapping_workflow(input_support, output_support, filter_radius, influence_box, config)
```

**Parameters:**

- `input_support` (*object*)
- `output_support` (*object*)
- `filter_radius` (*object*)
- `influence_box` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
prepare_mapping_workflow(config)
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
