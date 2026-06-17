---
uid: Ans.DataProcessing.operators.utility.csharp_generator
---

# *class* csharp_generator(dll_source_path: object = None, output_path: object = None, load_symbol: object = None, library_key: object = None, config: OperatorConfig = None)

Generates a C# wrapper file (.cs) containing a class for each public operator

found in a loaded plugin DLL.

The DLL is loaded using the given `load_symbol` and `library_key`.

All non-private operators discovered in the plugin are written to the single

file at `output_path`.

> **Note:** Operators whose exposure property is set to `private` are silently

> excluded from the generated output.

Inputs & outputs of each operator are represented as typed `LinkableInput<T>`

and `LinkableOutput<T>` properties on the generated class.

available inputs: `dll_source_path` (string), `output_path` (string), `load_symbol` (string) (optional), `library_key` (string)

available outputs:

**DPF Framework Reference:** [csharp_generator operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/csharp_generator.md)

**Parameters:**

* **dll_source_path**
* **output_path**
* **load_symbol**
* **library_key**
* **config**

**Example:**

```python
op = csharp_generator()

op = csharp_generator(dll_source_path=my_dll_source_path,output_path=my_output_path,load_symbol=my_load_symbol,library_key=my_library_key)
```

## Inputs

### dll_source_path

Path to the plugin DLL to load.

**Type:** *LinkableInput*

### output_path

Path where the .cs wrapper file will be written.

**Type:** *LinkableInput*

### load_symbol

Symbol name used to load operators from the DLL. Defaults to "LoadOperators".

**Type:** *LinkableInput*

### library_key

Key used to identify the plugin library when loading.

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
