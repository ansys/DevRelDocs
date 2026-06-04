---
uid: Ans.DataProcessing.operators.utility.ints_to_scoping
---

# *class* ints_to_scoping(ids: object = None, location: object = None, upper_bound: object = None, config: OperatorConfig = None)

Creates a scoping from integer data. Converts single integers, integer vectors, or existing scopings into a properly formatted DPF scoping.

available inputs: `ids` (Int32, IList int, Scoping, System.Collections.IEnumerable), `location` (string) (optional), `upper_bound` (Int32, Scoping) (optional)

available outputs: `scoping` (Scoping)

**DPF Framework Reference:** [ints_to_scoping operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/ints_to_scoping.md)

**Parameters:**

* **ids**
* **location**
* **upper_bound**
* **config**

**Example:**

```python
op = ints_to_scoping()

op = ints_to_scoping(ids=my_ids,location=my_location,upper_bound=my_upper_bound)
```

## Inputs

### ids

Integer ID(s) for the scoping: single int, vector of ints, or existing scoping

**Type:** *LinkableInput*

### int_or_vector_int

Deprecated alias of: ids

**Type:** *LinkableInput*

### location

Location string for the scoping (e.g., 'Nodal', 'Elemental'). Default is empty

**Type:** *LinkableInput*

### upper_bound

Upper bound for creating a range scoping. Creates IDs from pin 0 value to this upper bound (inclusive)

**Type:** *LinkableInput*

## Outputs

### scoping

Generated scoping with the specified IDs and location

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
