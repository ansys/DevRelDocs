---
uid: user-guide.core-concepts
title: Core Concepts
---

# Understanding DPF in Ansys Mechanical

Learn the fundamental concepts behind the Data Processing Framework as used in Ansys Mechanical.

## What is DPF?

DPF (Data Processing Framework) is a modern infrastructure for accessing and processing simulation data in Ansys Mechanical. It provides:

- **Efficient data access**: Optimized for large simulation datasets
- **Flexible processing**: Chain operations using operators
- **Integrated with Mechanical**: Available in scripting window and Python Results
- **IronPython interface**: Python syntax using underlying C# DLLs

## Key Concepts

### Model

The `Model` is the entry point to your simulation data in DPF. In Mechanical, you typically create it from the current solution's result file:

```python
import Ans.DataProcessing as dpf

# Get result file from Mechanical solution
solution = ExtAPI.DataModel.Project.Model.Analyses[0].Solution
result_file = solution.ResultFileName

# Create DPF data sources and model
data_sources = dpf.DataSources()
data_sources.SetResultFilePath(result_file)
dpf_model = dpf.Model(data_sources)
```

The Model provides access to:
- Mesh information
- Results data
- Metadata (time steps, result types, etc.)

### Fields

A `Field` is the fundamental data container in DPF. It contains:
- **Data**: Numerical values (scalars, vectors, matrices)
- **Scoping**: Which entities the data applies to
- **Support**: Spatial/temporal context

```python
# Get a field from results (in Mechanical scripting window)
displacement = dpf_model.Results.Displacement.GetOutput(0, dpf.LocationEnum.Nodal)
```

### Operators

`Operators` are processing units that transform data. They follow a functional programming pattern:
- Take inputs (fields, meshes, parameters)
- Perform operations
- Produce outputs (fields, meshes, etc.)

```python
# Create an operator
norm_op = dpf.Operator("norm")
norm_op.SetInput(0, displacement)
norm_field = norm_op.GetOutput(0, dpf.Field)
```

### Workflows

A `Workflow` chains multiple operators together for complex processing in Mechanical:

```python
workflow = dpf.Workflow()
workflow.AddOperator(op1)
workflow.AddOperator(op2)
workflow.Connect(op1, 0, op2, 0)
result = workflow.GetOutput(0, dpf.Field)
```

## DPF in Mechanical Architecture

```
┌─────────────────────┐
│ Ansys Mechanical UI │
│ (User Interface)    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Python Scripting   │
│  IronPython (.NET)  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   DPF C# DLLs      │
│ (CS_DataProcessing) │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   DPF Core Engine   │
│  Data Processing    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Result Files (.rst)│
│  Solver Output      │
└─────────────────────┘
```

## Data Flow in Mechanical

1. **Solve**: Run analysis in Mechanical to generate result file (.rst)
2. **Access**: Use DPF to connect to the result file
3. **Query**: Request specific results (stress, displacement, etc.)
4. **Process**: Use operators to transform data
5. **Display**: Show results in Python Result object or extract values

## Typical Mechanical Workflow

```python
import Ans.DataProcessing as dpf

# 1. Access Mechanical model
model = ExtAPI.DataModel.Project.Model
solution = model.Analyses[0].Solution

# 2. Create DPF model from result file
data_sources = dpf.DataSources()
data_sources.SetResultFilePath(solution.ResultFileName)
dpf_model = dpf.Model(data_sources)

# 3. Extract result field
stress = dpf_model.Results.Stress.GetOutput(0, dpf.LocationEnum.Elemental)

# 4. Process with operator (von Mises equivalent)
vm_op = dpf.Operator("eqv")
vm_op.SetInput(0, stress)
vm_stress = vm_op.GetOutput(0, dpf.Field)

# 5. Get values
max_stress = max(vm_stress.Data)
print("Max von Mises: {0:.2f}".format(max_stress))
```

## Next Steps

- [Data Model](data-model.md) - Detailed data structure overview
- [Working with Fields](working-with-fields.md) - Practical field operations
- [Examples](../examples/index.md) - See concepts in action
