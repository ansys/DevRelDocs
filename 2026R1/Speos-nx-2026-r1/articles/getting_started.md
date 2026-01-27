---
uid: getting-started
title: Getting Started
---

# Getting Started

This section provides information on how to get started with the SpeosNX Python API.

## Prerequisites

Before using the SpeosNX API, ensure you have:

1. **Siemens NX** installed with Speos integration
2. **Python** environment configured
3. **SPEOS_NX_DIR** environment variable set correctly

## Basic Setup

To use the SpeosNX API in your Python scripts, follow these steps:

### 1. Import Required Modules

```python
import os
import sys

# NXOpen Python
import NXOpen
```

### 2. Add SpeosNX to Python Path

```python
# Add path to import SpeosNX
sys.path.append(os.environ["SPEOS_NX_DIR"] + "\\application")
import SpeosNX
```

### 3. Initialize the Session

```python
# Set load option
MyNXSession = NXOpen.Session.GetSession()
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

## Core Concepts

### Session

The `Session` object is the entry point to the SpeosNX API. It provides access to all parts and features.

### Parts and Features

- **Part**: Represents a Speos For NX part
- **FeatureCollection**: Contains all Speos features in a part
- **Feature**: Base class for all Speos simulation features

### Builders

Builders are used to create and configure Speos objects:

- **SourceBuilder**: Create light sources
- **SensorBuilder**: Create sensors
- **SimulationBuilder**: Create and configure simulations

## Next Steps

- [User Guide](getting_started_user_guide.md) - Detailed user guide
- [Usage Examples](usage_examples.md) - See practical code examples
- [Classes](classes/index.md) - Browse the complete API reference
