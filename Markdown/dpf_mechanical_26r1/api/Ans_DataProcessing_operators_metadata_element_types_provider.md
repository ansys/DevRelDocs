---
uid: Ans.DataProcessing.operators.metadata.element_types_provider
---

# element_types_provider Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

Reads element types data from the result files contained in the streams or data sources.
            - If the output is a GenericDataContainer, its class_name is ElementTypesProperties and it contains the following property fields:
              - element_routine_number: Element routine number. E.g 186 for SOLID186.
              - keyopts: Element type option keys.
              - kdofs: DOF/node for this element type. This is a bit mapping.
              - nodelm: Number of nodes for this element type.
              - nodfor: Number of nodes per element having nodal forces.
              - nodstr: Number of nodes per element having nodal stresses.
              - new_gen_element: Element of new generation.
            - If the output is a PropertyField, it contains the 200 possible ElementTypesProperties for each solver element type id. These properties are in the order documented in ansys/customize/include/echprm.inc and have the meaning documented in ansys/customize/include/elccmt.inc.   ///available inputs: solver_element_types_ids (Int32, IList int, System.Collections.IEnumerable) (optional), streams (StreamsContainer) (optional), data_sources (DataSources), output_type (Int32) (optional)
            available outputs: element_types_data (GenericDataContainer ,PropertyField)

element_types_provider()
element_types_provider(solver_element_types_ids: object, streams: object, data_sources: object, output_type: object, config: OperatorConfig)
element_types_provider(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
element_types_provider()
```

#### Constructor

```python
element_types_provider(solver_element_types_ids, streams, data_sources, output_type, config)
```

**Parameters:**

- `solver_element_types_ids` (*object*)
- `streams` (*object*)
- `data_sources` (*object*)
- `output_type` (*object*)
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
