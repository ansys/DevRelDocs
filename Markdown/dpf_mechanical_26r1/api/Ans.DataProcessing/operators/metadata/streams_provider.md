---
uid: Ans.DataProcessing.operators.metadata.streams_provider
---

# streams_provider Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

## Summary

Create streams (cached file handles) based on provided data sources.

- When the data sources contain a single result key, an internal provider is instantiated for that namespace to create streams.

- When multiple result keys are present, streams are aggregated from each namespace-specific internal provider.

- Upstream data sources (if defined) are opened and attached to the output as upstream streams.

When the `permissive` configuration is enabled, the operator silently skips result files that cannot be opened or have unsupported namespaces, continuing with valid files.

If `permissive` is disabled (default), errors are thrown for invalid files.

Throws a runtime error if data sources are missing or if all result files are invalid.

available inputs: `data_sources` (DataSources)

available outputs: `streams_container` (StreamsContainer)

## Example

```python
op = streams_provider()

op = streams_provider(data_sources=my_data_sources)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### data_sources

**Type:** *LinkableInput*

## Outputs

### streams_container

Streams created from the input data sources, including aggregated streams across namespaces and any upstream streams.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
streams_provider()
```

#### Constructor

```python
streams_provider(data_sources, config)
```

**Parameters:**

- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
streams_provider(config)
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
