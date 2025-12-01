---
uid: Ans.DataProcessing.operators.math.eim_solver
---

# eim_solver Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

eim_solver()
eim_solver(mode_shapes_fc: object, initial_sensors: object, n_max: object, minimum_sensor_distance: object, restrict_n_max: object, coords: object, config: OperatorConfig)
eim_solver(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_PointCloudSearch_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### mode_shapes_fc

**Type:** *LinkableInput*

### initial_sensors

**Type:** *LinkableInput*

### n_max

**Type:** *LinkableInput*

### minimum_sensor_distance

**Type:** *LinkableInput*

### restrict_n_max

**Type:** *LinkableInput*

### coords

**Type:** *LinkableInput*

## Outputs

### ED_sorted

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
eim_solver()
```

#### Constructor

```python
eim_solver(mode_shapes_fc, initial_sensors, n_max, minimum_sensor_distance, restrict_n_max, coords, config)
```

**Parameters:**

- `mode_shapes_fc` (*object*)
- `initial_sensors` (*object*)
- `n_max` (*object*)
- `minimum_sensor_distance` (*object*)
- `restrict_n_max` (*object*)
- `coords` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
eim_solver(config)
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
