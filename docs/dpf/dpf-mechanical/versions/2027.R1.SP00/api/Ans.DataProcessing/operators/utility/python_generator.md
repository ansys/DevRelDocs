---
uid: Ans.DataProcessing.operators.utility.python_generator
---

# *class* python_generator(dll_source_path: object = None, output_path: object = None, load_symbol: object = None, library_key: object = None, config: OperatorConfig = None)

Generates .py file with specifications for loaded plugin(s).

available inputs: `dll_source_path` (string), `output_path` (string), `load_symbol` (string) (optional), `library_key` (string) (optional)

available outputs:

**DPF Framework Reference:** [python_generator operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/python_generator.md)

**Parameters:**

* **dll_source_path**
* **output_path**
* **load_symbol**
* **library_key**
* **config**

**Example:**

```python
op = python_generator()

op = python_generator(dll_source_path=my_dll_source_path,output_path=my_output_path,load_symbol=my_load_symbol,library_key=my_library_key)
```

## Inputs

### dll_source_path

**Type:** *LinkableInput*

### output_path

**Type:** *LinkableInput*

### load_symbol

**Type:** *LinkableInput*

### library_key

**Type:** *LinkableInput*

## Outputs

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
