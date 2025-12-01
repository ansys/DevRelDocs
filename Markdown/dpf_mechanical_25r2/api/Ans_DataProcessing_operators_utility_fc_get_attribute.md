---
uid: Ans.DataProcessing.operators.utility.fc_get_attribute
---

# fc_get_attribute Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Uses the FieldsContainer APIs to return a given attribute of the fields container in input.   ///available inputs: fields_container (FieldsContainer), property_name (string), property_identifier (string, Int32) (optional)
            available outputs: property (Scoping ,IList int  ,TimeFreqSupport ,LabelSpace ,Field ,System.Collections.IEnumerable)

fc_get_attribute()
fc_get_attribute(fields_container: object, property_name: object, property_identifier: object, config: OperatorConfig)
fc_get_attribute(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
fc_get_attribute()
```

#### Constructor

```python
fc_get_attribute(fields_container, property_name, property_identifier, config)
```

**Parameters:**

- `fields_container` (*object*)
- `property_name` (*object*)
- `property_identifier` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
fc_get_attribute(config)
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
