---
uid: Ans.DataProcessing.operators.math.nvh_curve_fitting_solver
---

# nvh_curve_fitting_solver Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

nvh_curve_fitting_solver()
nvh_curve_fitting_solver(frf_fc: object, frequency_start: object, frequency_end: object, analysis_order: object, config: OperatorConfig)
nvh_curve_fitting_solver(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_PointCloudSearch_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### frf_fc

**Type:** *LinkableInput*

### frequency_start

**Type:** *LinkableInput*

### frequency_end

**Type:** *LinkableInput*

### analysis_order

**Type:** *LinkableInput*

## Outputs

### frequencies

**Type:** *LinkableOutput*

### damping

**Type:** *LinkableOutput*

### filtered_frf

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
nvh_curve_fitting_solver()
```

#### Constructor

```python
nvh_curve_fitting_solver(frf_fc, frequency_start, frequency_end, analysis_order, config)
```

**Parameters:**

- `frf_fc` (*object*)
- `frequency_start` (*object*)
- `frequency_end` (*object*)
- `analysis_order` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
nvh_curve_fitting_solver(config)
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
