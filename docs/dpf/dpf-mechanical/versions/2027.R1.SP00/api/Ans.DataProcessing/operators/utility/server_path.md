---
uid: Ans.DataProcessing.operators.utility.server_path
---

# *class* server_path(subpath: object = None, config: OperatorConfig = None)

Returns the platform-specific path to a folder in the Dpf server

available inputs: `subpath` (Int32) (optional)

available outputs: `path` (string)

**DPF Framework Reference:** [server_path operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/server_path.md)

**Parameters:**

* **subpath**
* **config**

**Example:**

```python
op = server_path()

op = server_path(subpath=my_subpath)
```

## Inputs

### subpath

Subpath of the Dpf server. Supported values: 0 (default): root of the server, 1: "dpf/bin/platform", 2: "aisol/bin(dll)/platform", 3: "dpf/plugins", 4: "dpf/workflows".

**Type:** *LinkableInput*

## Outputs

### path

Path to the requested folder in the Dpf server

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
