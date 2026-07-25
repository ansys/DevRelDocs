---
uid: Ans.DataProcessing.operators.math.accumulation_per_scoping
---

# *class* accumulation_per_scoping(fields_container: object = None, mesh_scoping: object = None, streams_container: object = None, data_sources: object = None, scopings_container: object = None, config: OperatorConfig = None)

For each scoping in the input scopings container, computes the entity-wise sum of the input fields container values over that scoping, and the percentage of that sum relative to a master sum.

The sum is computed independently for each field in the container; the output contains one output field per input field, regardless of the container label (time, complex, or other).

The master sum is computed by summing all entity values of the input fields container restricted to the master scoping when provided, or of the full input fields container otherwise.

For cyclic and multistage models, the master scoping and the input scopings container are first expanded to the full mesh.

When a master scoping is provided, each scoping in the input scopings container is intersected with it before accumulation.

Each output field contains one entity per scoping plus one master entity:

- entity id $0$ holds the master sum (or $100\%$ for the percentage output).

- entity ids $1$ to $N$ hold the sum (or percentage of the master sum) for the $N$ scopings of the input scopings container, in the same order.

The percentage is set to $0$ when the master sum is below machine epsilon.

available inputs: `fields_container` (FieldsContainer), `mesh_scoping` (Scoping) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources) (optional), `scopings_container` (ScopingsContainer)

available outputs: `accumulation_per_scoping` (FieldsContainer), `accumulation_per_scoping_percentage` (FieldsContainer)

**DPF Framework Reference:** [accumulation_per_scoping operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/math/accumulation_per_scoping.md)

**Parameters:**

* **fields_container**
* **mesh_scoping**
* **streams_container**
* **data_sources**
* **scopings_container**
* **config**

**Example:**

```python
op = accumulation_per_scoping()

op = accumulation_per_scoping(fields_container=my_fields_container,mesh_scoping=my_mesh_scoping,streams_container=my_streams_container,data_sources=my_data_sources,scopings_container=my_scopings_container)
```

## Inputs

### fields_container

Fields container containing the values to accumulate per scoping.

**Type:** *LinkableInput*

### mesh_scoping

Master scoping. When provided, each scoping in the input scopings container is intersected with it, and the master sum is computed over this scoping. When omitted, the master sum is computed over the full input fields container and no intersection is performed.

**Type:** *LinkableInput*

### streams_container

Streams describing the source result file. Required when no data sources is provided. Used to detect cyclic and multistage models and expand the scopings accordingly. Takes precedence over the data sources when both are provided.

**Type:** *LinkableInput*

### data_sources

Data sources describing the source result file. Required when no streams is provided. Used to detect cyclic and multistage models and expand the scopings accordingly.

**Type:** *LinkableInput*

### scopings_container

Scopings container. The sum of the input fields container is computed over each scoping it contains. Must contain at least one scoping.

**Type:** *LinkableInput*

## Outputs

### accumulation_per_scoping

Fields container with one field per input field. Each field holds the master sum at entity id $0$ and the per-scoping sums at entity ids $1$ to $N$, following the order of the input scopings container.

**Type:** *LinkableOutput*

### accumulation_per_scoping_percentage

Fields container with the same layout as the accumulation output. Entity id $0$ is $100$, entity ids $1$ to $N$ contain the per-scoping sum expressed as a percentage of the master sum, or $0$ when the master sum is below machine epsilon.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
