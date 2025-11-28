---
uid: Ans.DataProcessing.operators.utility.change_shell_layers
title: change_shell_layers
---

# change_shell_layers Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Extract the requested shell layers from the input fields. If the fields contain only one layer and the permissive configuration input is set to true then it returns the input fields. If permissive configuration input is set to false, any change which should not be permitted won't be achieved and the corresponding field in the output will be empty. If permissive configuration input is set to true (default), carefully check the result.   ///available inputs: fields_container (FieldsContainer, Field), e_shell_layer (Int32), mesh (MeshedRegion, MeshesContainer) (optional), merge (bool) (optional)
            available outputs: fields_container (FieldsContainer ,Field)

change_shell_layers()
change_shell_layers(fields_container: object, e_shell_layer: object, mesh: object, merge: object, config: OperatorConfig)
change_shell_layers(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
change_shell_layers()
```

#### Constructor

```python
change_shell_layers(fields_container, e_shell_layer, mesh, merge, config)
```

**Parameters:**

- `fields_container` (*object*)
- `e_shell_layer` (*object*)
- `mesh` (*object*)
- `merge` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
change_shell_layers(config)
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
