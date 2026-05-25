---
uid: Ans.DataProcessing.operators.utility.merge_collections
---

# *class* merge_collections(collections1: object = None, collections2: object = None, config: OperatorConfig = None)

Merges a set of collections into a unique one.

available inputs: `collections1` (AnyCollection), `collections2` (AnyCollection)

available outputs: `merged_collections` (AnyCollection)

**DPF Framework Reference:** [merge_collections operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_collections.md)

**Parameters:**

* **collections1**
* **collections2**
* **config**

**Example:**

```python
op = merge_collections()

op = merge_collections(collections1=my_collections1,collections2=my_collections2)
```

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

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
