---
uid: Ans.DataProcessing.operators.result.beam_tr_shear_stress
---

# beam_tr_shear_stress Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

beam_tr_shear_stress()
beam_tr_shear_stress(time_scoping: object, mesh_scoping: object, data_sources: object, integration_point: object, unit_system: object, config: OperatorConfig)
beam_tr_shear_stress(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### time_scoping

time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files. To get all data for all time/freq sets, connect an int with value -1.

**Type:** *LinkableInput*

### mesh_scoping

elements scoping required in output.

**Type:** *LinkableInput*

### streams_container

result file container allowed to be kept open to cache data

**Type:** *LinkableInput*

### data_sources

result file path container, used if no streams are set

**Type:** *LinkableInput*

### integration_point

integration point where the result will be read from. Default value: 0 (first integration point).

**Type:** *LinkableInput*

### unit_system

(LSDyna) Unit System ID (int), semicolon-separated list of base unit strings (str) or UnitSystem instance

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
beam_tr_shear_stress()
```

#### Constructor

```python
beam_tr_shear_stress(time_scoping, mesh_scoping, data_sources, integration_point, unit_system, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `mesh_scoping` (*object*)
- `data_sources` (*object*)
- `integration_point` (*object*)
- `unit_system` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
beam_tr_shear_stress(config)
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
