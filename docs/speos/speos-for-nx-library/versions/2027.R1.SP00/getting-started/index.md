# Getting Started

This section provides information on how to get started with the SpeosNX Python API.

## Prerequisites

Before using the SpeosNX API, ensure you have:

1. **Siemens Designcenter NX** installed with Speos integration.
2. **Python** environment configured.
3. The **SPEOS_NX_DIR** environment variable set correctly.

## Basic setup

To use the SpeosNX API in your Python scripts, follow these steps.

### 1. Import required modules

```python
import os
import sys

# NXOpen Python
import NXOpen
```

### 2. Retrieve NX Session

```python
MyNXSession = NXOpen.Session.GetSession()
```

### 3. Import SpeosNX

```python
# Add path to import SpeosNX
sys.path.append(os.environ["SPEOS_NX_DIR"] + "\\application")
NXVersion = NXOpen.Session.GetSession().GetEnvironmentVariableValue("UGII_VERSION")[1:]
module_name = "SpeosNX_" + NXVersion
SpeosNX = __import__(module_name)
```

### 4. Initialize the session

```python
# Set load option
MyNXSession.Parts.LoadOptions.PartLoadOption = NXOpen.LoadOptions.LoadOption.FullyLoad
MyNXSession.Parts.LoadOptions.ComponentsToLoad = NXOpen.LoadOptions.LoadComponents.LastSet

# Open .prt file
basePart1, partLoadStatus1 = MyNXSession.Parts.OpenActiveDisplay("./assembly1.prt", NXOpen.DisplayPartOption.AllowAdditional)
partLoadStatus1.Dispose()

# Switch to NX Modeling
MyNXSession.ApplicationSwitchImmediate("UG_APP_GATEWAY")

# Switch to Speos
MyNXSession.ApplicationSwitchImmediate("SPEOS_MAIN_APP")

# Load SpeosNX
Session = SpeosNX.Session.GetSession()
PartCollection = Session.Parts
Work = PartCollection.Work
FeatureCollection = Work.Features
PartCollection.Load()
```

## Core concepts

### Session

The Session object is the entry point to the SpeosNX API. It provides access to all parts and features.

### Parts and features

- **Part**: Represents a Speos for NX part.
- **FeatureCollection**: Contains all Speos features in a part.
- **Feature**: Base class for all Speos simulation features.

### Builders

Builders are used to create and configure Speos objects:

- **SourceBuilder**: Create light sources.
- **SensorBuilder**: Create sensors.
- **SimulationBuilder**: Create and configure simulations.

## Next steps

- [User Guide](../user-guide/index.md) - Deep dive into advanced features and workflows
- [Usage Examples](../examples/index.md) - See practical code examples
- [Classes](../api-reference/index.md) - Browse the complete API reference
