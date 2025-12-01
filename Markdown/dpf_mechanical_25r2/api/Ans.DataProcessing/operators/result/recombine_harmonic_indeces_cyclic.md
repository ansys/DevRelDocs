---
uid: Ans.DataProcessing.operators.result.recombine_harmonic_indeces_cyclic
---

# recombine_harmonic_indeces_cyclic Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Add the fields corresponding to different load steps with the same frequencies to compute the response.   ///available inputs: fields_container (FieldsContainer)
            available outputs: fields_container (FieldsContainer)

recombine_harmonic_indeces_cyclic()
recombine_harmonic_indeces_cyclic(fields_container: object, config: OperatorConfig)
recombine_harmonic_indeces_cyclic(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
recombine_harmonic_indeces_cyclic()
```

#### Constructor

```python
recombine_harmonic_indeces_cyclic(fields_container, config)
```

**Parameters:**

- `fields_container` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
recombine_harmonic_indeces_cyclic(config)
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
