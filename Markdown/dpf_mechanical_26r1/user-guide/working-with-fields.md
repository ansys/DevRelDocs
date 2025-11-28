---
uid: user-guide.working-with-fields
---

# Working with Fields

Fields are the primary data containers in DPF. This guide covers creating, manipulating, and extracting data from fields.

## What is a Field?

A Field contains:
- **Data**: Numerical values (scalars, vectors, matrices)
- **Scoping**: Entity IDs (nodes, elements, etc.)
- **Support**: Time/mesh context

## Creating Fields

### From Results

```python
import Ans.DataProcessing as dpf

# Load model
model = dpf.Model(data_sources)

# Get stress field
stress_field = model.Results.Stress.GetOutput(0, dpf.LocationEnum.Elemental)

# Get displacement field
disp_field = model.Results.Displacement.GetOutput(0, dpf.LocationEnum.Nodal)
```

### Manual Creation

```python
# Create an empty field
field = dpf.Field()
field.Location = dpf.LocationEnum.Nodal
field.NumberOfComponents = 3  # Vector field

# Set scoping (node IDs)
scoping = dpf.Scoping()
scoping.SetIds([1, 2, 3, 4, 5])
field.Scoping = scoping

# Set data
data = [1.0, 0.0, 0.0,   # Node 1: [1, 0, 0]
        0.0, 1.0, 0.0,   # Node 2: [0, 1, 0]
        0.0, 0.0, 1.0,   # Node 3: [0, 0, 1]
        1.0, 1.0, 0.0,   # Node 4: [1, 1, 0]
        0.0, 1.0, 1.0]   # Node 5: [0, 1, 1]
field.Data = data
```

## Accessing Field Data

### Get All Data

```python
# Get all data as a list
data = field.Data
print(f"Total values: {len(data)}")

# Get number of entities
num_entities = field.ElementaryDataCount
print(f"Number of entities: {num_entities}")
```

### Get Data for Specific Entities

```python
# Get data for first entity
entity_data = field.GetEntityDataByIndex(0)
print(f"Entity 0 data: {entity_data}")

# Get data for entity by ID
entity_id = 100
entity_data = field.GetEntityData(entity_id)
```

### Iterate Over Field

```python
# Iterate through all entities
for i in range(field.ElementaryDataCount):
    entity_id = field.Scoping.GetId(i)
    data = field.GetEntityDataByIndex(i)
    print(f"Entity {entity_id}: {data}")
```

## Field Properties

### Component Count

```python
# Get number of components
num_comp = field.NumberOfComponents
# 1 = scalar, 3 = vector, 6 = symmetric tensor, 9 = full tensor
```

### Location

```python
# Get field location
location = field.Location
# LocationEnum.Nodal, LocationEnum.Elemental, etc.
```

### Scoping

```python
# Get entity IDs
scoping = field.Scoping
ids = scoping.Ids
print(f"Field defined on {scoping.Count} entities")
```

## Field Operations with Operators

### Compute Magnitude

```python
# Create norm operator
norm_op = dpf.Operator("norm")
norm_op.SetInput(0, field)
magnitude_field = norm_op.GetOutput(0, dpf.Field)
```

### Component Extraction

```python
# Extract X component (component 0)
comp_op = dpf.Operator("component_selector")
comp_op.SetInput(0, field)
comp_op.SetInput(1, 0)  # Component index
x_component = comp_op.GetOutput(0, dpf.Field)
```

### Field Math

```python
# Add two fields
add_op = dpf.Operator("add")
add_op.SetInput(0, field1)
add_op.SetInput(1, field2)
result = add_op.GetOutput(0, dpf.Field)

# Scale a field
scale_op = dpf.Operator("scale")
scale_op.SetInput(0, field)
scale_op.SetInput(1, 2.5)  # Multiplication factor
scaled_field = scale_op.GetOutput(0, dpf.Field)
```

## FieldsContainer

For multi-step results, use `FieldsContainer`:

```python
# Get all time steps
fields_container = model.Results.Displacement.GetOutput(dpf.LocationEnum.Nodal)

# Access individual fields
num_fields = fields_container.Count
print(f"Number of fields: {num_fields}")

# Get field for specific time step
field_at_step_5 = fields_container.GetField(5)

# Iterate through all fields
for i in range(fields_container.Count):
    field = fields_container.GetField(i)
    time_id = fields_container.GetTimeFreqCumulativeIndex(i)
    print(f"Field at time {time_id}")
```

## Best Practices

1. **Check field properties**: Always verify component count and location
2. **Use operators**: Prefer operators over manual data manipulation
3. **Scoping awareness**: Understand which entities your field represents
4. **Memory management**: Dispose large fields when done
5. **Batch processing**: Use FieldsContainer for multi-step operations

## Next Steps

- [Working with Meshes](working-with-meshes.md)
- [Operators and Workflows](operators-workflows.md)
- [Examples](../examples/index.md)
