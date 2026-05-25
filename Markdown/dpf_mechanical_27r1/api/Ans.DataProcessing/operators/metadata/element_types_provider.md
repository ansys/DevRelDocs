---
uid: Ans.DataProcessing.operators.metadata.element_types_provider
---

# *class* element_types_provider(solver_element_types_ids: object = None, streams: object = None, data_sources: object = None, output_type: object = None, config: OperatorConfig = None)

Reads element types data from the result files contained in the streams or data sources.

- If the output is a GenericDataContainer, its class_name is ElementTypesProperties and it contains the following property fields:

  - element_routine_number: Element routine number. E.g 186 for SOLID186.

  - keyopts: Element type option keys.

  - kdofs: DOF/node for this element type. This is a bit mapping.

  - nodelm: Number of nodes for this element type.

  - nodfor: Number of nodes per element having nodal forces.

  - nodstr: Number of nodes per element having nodal stresses.

  - new_gen_element: Element of new generation.

- If the output is a PropertyField, it contains the 200 possible ElementTypesProperties for each solver element type id. These properties are in the order documented in ansys/customize/include/echprm.inc and have the meaning documented in ansys/customize/include/elccmt.inc.

available inputs: `solver_element_types_ids` (Int32, IList int, System.Collections.IEnumerable) (optional), `streams` (StreamsContainer) (optional), `data_sources` (DataSources), `output_type` (Int32) (optional)

available outputs: `element_types_data` (GenericDataContainer ,PropertyField)

**DPF Framework Reference:** [element_types_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/metadata/element_types_provider.md)

**Parameters:**

* **solver_element_types_ids**
* **streams**
* **data_sources**
* **output_type**
* **config**

**Example:**

```python
op = element_types_provider()

op = element_types_provider(solver_element_types_ids=my_solver_element_types_ids,streams=my_streams,data_sources=my_data_sources,output_type=my_output_type)
```

## Inputs

### solver_element_types_ids

Element Type ids to recover used by the solver. If not set, all available element types are recovered.

**Type:** *LinkableInput*

### streams

Result file container allowed to be kept open to cache data.

**Type:** *LinkableInput*

### data_sources

Result file path container, used if no streams are set.

**Type:** *LinkableInput*

### output_type

Get the output as a GenericDataContainer (pin value 1, default) or as a PropertyField (pin value 2).

**Type:** *LinkableInput*

## Outputs

### element_types_data

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
