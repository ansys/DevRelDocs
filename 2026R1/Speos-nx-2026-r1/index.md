---
title: Speos NX API Documentation
---

# Speos NX API Documentation

Welcome to the Speos NX API documentation. This documentation provides comprehensive information about the Speos NX Python API.

## Getting Started

- [User Guide](articles/User-guide.md) - Learn how to get started with Speos NX automation
- [Usage Examples](articles/Usage-examples.md) - Explore practical examples

## API Reference

Browse the [API Reference](api/toc.yml) for detailed information about all classes, methods, and properties.

### Core Classes

- **Session** - The main entry point for Speos NX API
- **Part** - Represents a Speos for NX part
- **FeatureCollection** - Collection of Speos features

### Categories

- **Builders** - Classes for creating and configuring features
- **Sensors** - Sensor-related classes (Irradiance, Camera, LiDAR, etc.)
- **Sources** - Light source classes (Surface, Luminaire, Ray File, etc.)
- **Simulations** - Simulation configuration classes
- **Components** - Component-related classes (3D Texture, Optical Design Exchange, etc.)

## Quick Example

```python
import SpeosNX

# Get the Speos session
session = SpeosNX.Session.GetSession()

# Get the part collection
parts = session.Parts

# Load all parts with Speos features
parts.Load()

# Access features
features = parts.Work.Features
```
