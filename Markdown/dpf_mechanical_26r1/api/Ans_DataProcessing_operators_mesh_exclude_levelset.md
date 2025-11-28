---
uid: Ans.DataProcessing.operators.mesh.exclude_levelset
---

# exclude_levelset Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

Takes two level sets and excludes the second one from the first.   ///available inputs: fieldA (Field), fieldB (Field)
            available outputs: field (Field)

exclude_levelset()
exclude_levelset(fieldA: object, fieldB: object, config: OperatorConfig)
exclude_levelset(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
exclude_levelset()
```

#### Constructor

```python
exclude_levelset(fieldA, fieldB, config)
```

**Parameters:**

- `fieldA` (*object*)
- `fieldB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
exclude_levelset(config)
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
