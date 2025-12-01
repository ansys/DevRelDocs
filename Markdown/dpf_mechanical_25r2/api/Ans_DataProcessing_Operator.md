---
uid: Ans.DataProcessing.Operator
---

# Operator Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Object used to create, transform and stream the data              
            '''''''''''''_________                
            "input1"  -> |operator| ->  "output1"
            "input2"  -> |''''''''| ->  "output2"		            
            '''''''''''''|________|

Operator(name: str)
Operator(name: str, input: object, config: OperatorConfig)
Operator(name: str, input: object, input2: object, config: OperatorConfig)
Operator(name: str, input: object, input2: object, input3: object, config: OperatorConfig)
Operator(name: str, input: object, input2: object, input3: object, input4: object, config: OperatorConfig)
Operator(id: Int64)
Operator(name: str, config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
Operator(name)
```

**Parameters:**

- `name` (*str*)

#### Constructor

```python
Operator(name, input, config)
```

**Parameters:**

- `name` (*str*)
- `input` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
Operator(name, input, input2, config)
```

**Parameters:**

- `name` (*str*)
- `input` (*object*)
- `input2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
Operator(name, input, input2, input3, config)
```

**Parameters:**

- `name` (*str*)
- `input` (*object*)
- `input2` (*object*)
- `input3` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
Operator(name, input, input2, input3, input4, config)
```

**Parameters:**

- `name` (*str*)
- `input` (*object*)
- `input2` (*object*)
- `input3` (*object*)
- `input4` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
Operator(id)
```

**Parameters:**

- `id` (*int*)

#### Constructor

```python
Operator(name, config)
```

**Parameters:**

- `name` (*str*)
- `config` (*OperatorConfig*)

## Methods

#### GetOutputAsFieldsContainer

```python
result = obj.GetOutputAsFieldsContainer(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *FieldsContainer*

#### GetOutputAsScopingsContainer

```python
result = obj.GetOutputAsScopingsContainer(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *ScopingsContainer*

#### GetOutputAsMaterialsContainer

```python
result = obj.GetOutputAsMaterialsContainer(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *MaterialsContainer*

#### GetOutputAsField

```python
result = obj.GetOutputAsField(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *Field*

#### GetOutputAsScoping

```python
result = obj.GetOutputAsScoping(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *Scoping*

#### GetOutputAsString

```python
result = obj.GetOutputAsString(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *str*

#### GetOutputAsByteArray

```python
result = obj.GetOutputAsByteArray(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *Byte[]*

#### GetOutputAsInt

```python
result = obj.GetOutputAsInt(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *int*

#### GetOutputAsDouble

```python
result = obj.GetOutputAsDouble(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *float*

#### GetOutputAsBool

```python
result = obj.GetOutputAsBool(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *bool*

#### GetOutputAsTimeFreqSupport

```python
result = obj.GetOutputAsTimeFreqSupport(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *TimeFreqSupport*

#### GetOutputAsMeshesContainer

```python
result = obj.GetOutputAsMeshesContainer(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *MeshesContainer*

#### GetOutputAsMeshedRegion

```python
result = obj.GetOutputAsMeshedRegion(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *MeshedRegion*

#### GetOutputAsStreamsContainer

```python
result = obj.GetOutputAsStreamsContainer(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *StreamsContainer*

#### GetOutputAsResultInfo

```python
result = obj.GetOutputAsResultInfo(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *ResultInfo*

#### GetOutputAsDataSources

```python
result = obj.GetOutputAsDataSources(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *DataSources*

#### GetOutputAsPropertyField

```python
result = obj.GetOutputAsPropertyField(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *PropertyField*

#### GetOutputAsDataTree

```python
result = obj.GetOutputAsDataTree(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *DataTree*

#### GetOutputAsWorkflow

```python
result = obj.GetOutputAsWorkflow(i)
```

**Parameters:**

- `i` (*int* (optional))

**Returns:** *Workflow*
