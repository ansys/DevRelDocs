---
uid: Ans.DataProcessing.operators.result.poynting_vector_surface
---

# poynting_vector_surface Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Compute the Poynting Vector surface integral   ///available inputs: fields_containerA (FieldsContainer), fields_containerB (FieldsContainer), fields_containerC (FieldsContainer), fields_containerD (FieldsContainer), meshed_region (MeshedRegion) (optional), int32 (Int32) (optional)
            available outputs: fields_container (FieldsContainer)

poynting_vector_surface()
poynting_vector_surface(fields_containerA: object, fields_containerB: object, fields_containerC: object, fields_containerD: object, meshed_region: object, int32: object, config: OperatorConfig)
poynting_vector_surface(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
poynting_vector_surface()
```

#### Constructor

```python
poynting_vector_surface(fields_containerA, fields_containerB, fields_containerC, fields_containerD, meshed_region, int32, config)
```

**Parameters:**

- `fields_containerA` (*object*)
- `fields_containerB` (*object*)
- `fields_containerC` (*object*)
- `fields_containerD` (*object*)
- `meshed_region` (*object*)
- `int32` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
poynting_vector_surface(config)
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
