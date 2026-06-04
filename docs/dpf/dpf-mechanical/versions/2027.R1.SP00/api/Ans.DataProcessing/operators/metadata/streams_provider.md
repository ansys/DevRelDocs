---
uid: Ans.DataProcessing.operators.metadata.streams_provider
---

# *class* streams_provider(data_sources: object = None, config: OperatorConfig = None)

Create streams (cached file handles) based on provided data sources.

- When the data sources contain a single result key, an internal provider is instantiated for that namespace to create streams.

- When multiple result keys are present, streams are aggregated from each namespace-specific internal provider.

- Upstream data sources (if defined) are opened and attached to the output as upstream streams.

When the `permissive` configuration is enabled, the operator silently skips result files that cannot be opened or have unsupported namespaces, continuing with valid files.

If `permissive` is disabled (default), errors are thrown for invalid files.

Throws a runtime error if data sources are missing or if all result files are invalid.

available inputs: `data_sources` (DataSources)

available outputs: `streams_container` (StreamsContainer)

**DPF Framework Reference:** [streams_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/metadata/streams_provider.md)

**Parameters:**

* **data_sources**
* **config**

**Example:**

```python
op = streams_provider()

op = streams_provider(data_sources=my_data_sources)
```

## Inputs

### data_sources

**Type:** *LinkableInput*

## Outputs

### streams_container

Streams created from the input data sources, including aggregated streams across namespaces and any upstream streams.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
