---
uid: Ans.DataProcessing.operators.utility.merge_collections
---

# merge_collections Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Merges a set of collections into a unique one.

available inputs: `collections1` (AnyCollection), `collections2` (AnyCollection)

available outputs: `merged_collections` (AnyCollection)

## Example

```python
op = merge_collections()

op = merge_collections(collections1=my_collections1,collections2=my_collections2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### collections1

a vector of collections to merge or collections from pin 0 to ...

**Type:** *LinkableInput*

### collections2

a vector of collections to merge or collections from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### merged_collections

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
merge_collections()
```

#### Constructor

```python
merge_collections(collections1, collections2, config)
```

**Parameters:**

- `collections1` (*object*)
- `collections2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_collections(config)
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
