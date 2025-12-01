---
uid: getting-started.installation
---

# Accessing DPF in Ansys Mechanical

This guide covers how to access and use DPF within Ansys Mechanical.

## DPF Integration in Mechanical

DPF is automatically available in Ansys Mechanical 2025 R2. No separate installation is required. DPF is exposed through IronPython using the underlying C# DLLs.

## Accessing DPF

### 1. Through the Mechanical Scripting Window

The Mechanical scripting window provides direct access to DPF:

1. Open Ansys Mechanical
2. Go to **View** → **Scripting**
3. The scripting window uses IronPython with DPF already loaded

```python
# DPF namespace is automatically available
import Ans.DataProcessing as dpf

# Access current model
model = ExtAPI.DataModel.Project.Model
```

### 2. Through Python Result Objects

When using Python Result objects in Mechanical:

```python
# In a Python Result object
import Ans.DataProcessing as dpf

# Access the current result file
result_path = this.ResultFileName

# Create DPF data sources
data_sources = dpf.DataSources()
data_sources.SetResultFilePath(result_path)

# Create DPF model
dpf_model = dpf.Model(data_sources)
```

### 3. Through Custom Extensions

For custom Mechanical extensions:

```python
import clr
import Ans.DataProcessing as dpf

# DPF assemblies are already loaded in Mechanical environment
# No need to manually add references
```

## DPF Assembly Locations

DPF assemblies are located in your Ansys installation:

- **Windows**: `C:\Program Files\ANSYS Inc\v261\aisol\bin\winx64`
- **Linux**: `/usr/ansys_inc/v261/aisol/bin/linx64`

Key assemblies (already loaded in Mechanical):
- `CS_DataProcessing.dll` - Main DPF namespace
- `Ans_Dpf_*.dll` - Various DPF components

**Note**: In Mechanical's scripting environment, these are automatically loaded. You don't need to manually add references.

## Verifying DPF Access

Test DPF access in the Mechanical scripting window:

```python
import Ans.DataProcessing as dpf

# Verify DPF is loaded
print("DPF loaded successfully: {0}".format(dpf))

# Try creating a basic object
scoping = dpf.Scoping()
print("Created scoping object: {0}".format(scoping))
```

If successful, you should see the module and object information printed.

## Troubleshooting

### Cannot Import DPF Module
- Verify you're using Ansys Mechanical 2025 R2 or later
- Ensure you're in the Mechanical scripting environment
- Check that Mechanical is properly installed

### Script Execution Errors
- Verify Python syntax is compatible with IronPython
- Check that you're using the Mechanical API correctly
- Ensure result files are accessible

### Access to Result Files
- Make sure the analysis has been solved
- Verify the result file path is correct
- Check file permissions

## Next Steps

Continue to [Hello DPF](hello-dpf.md) to run your first script.
