---
uid: Ans.DataProcessing.operators.metadata.element_types_provider
---

# element_types_provider Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

## Summary

Reads element types data from the result files contained in the streams or data sources.

available inputs: `solver_element_types_ids` (Int32, IList int, System.Collections.IEnumerable) (optional), `streams` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `element_types_data` (GenericDataContainer)

## Example

```python
op = element_types_provider()

op = element_types_provider(solver_element_types_ids=my_solver_element_types_ids,streams=my_streams,data_sources=my_data_sources)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### solver_element_types_ids

Element Type ids to recover used by the solver. If not set, all available element types to be recovered.

**Type:** *LinkableInput*

### streams

Result file container allowed to be kept open to cache data.

**Type:** *LinkableInput*

### data_sources

Result file path container, used if no streams are set.

**Type:** *LinkableInput*

## Outputs

### element_types_data

The generic_data_container has a class_name: ElementTypesProperties. It contains the following property fields: element_routine_number: Element routine number. E.g 186 for SOLID186, keyopts: Element type option keys, kdofs: DOF/node for this element type.This is a bit mapping, nodelm: Number of nodes for this element type, nodfor: Number of nodes per element having nodal forces, nodstr: Number of nodes per element having nodal stresses, new_gen_element: Element of new generation.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
element_types_provider()
```

#### Constructor

```python
element_types_provider(solver_element_types_ids, streams, data_sources, config)
```

**Parameters:**

- `solver_element_types_ids` (*object*)
- `streams` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
element_types_provider(config)
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
