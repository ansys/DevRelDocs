---
uid: Ans.DataProcessing.operators.logic.identical_generic_data_containers
title: identical_generic_data_containers
---

# identical_generic_data_containers Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

Takes two generic data containers and compares them. Supported types: Field, FieldsContainer, Mesh, MeshesContainer, PropertyField, PropertyFieldsContainer, Scoping, ScopingsContainer, StringFieldstandard types (double, int, string, vector of int, doubles, string)Note: all inputs related to fields, mesh, and so on are passed to each property check.   ///available inputs: generic_data_containerA (GenericDataContainer), generic_data_containerB (GenericDataContainer), double_value (double), double_tolerance (double) (optional), compare_auxiliary (bool)
            available outputs: included (bool), message (string)

identical_generic_data_containers()
identical_generic_data_containers(generic_data_containerA: object, generic_data_containerB: object, double_value: object, double_tolerance: object, compare_auxiliary: object, config: OperatorConfig)
identical_generic_data_containers(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
identical_generic_data_containers()
```

#### Constructor

```python
identical_generic_data_containers(generic_data_containerA, generic_data_containerB, double_value, double_tolerance, compare_auxiliary, config)
```

**Parameters:**

- `generic_data_containerA` (*object*)
- `generic_data_containerB` (*object*)
- `double_value` (*object*)
- `double_tolerance` (*object*)
- `compare_auxiliary` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
identical_generic_data_containers(config)
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
