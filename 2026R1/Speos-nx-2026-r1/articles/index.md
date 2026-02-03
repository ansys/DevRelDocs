---
_layout: landing
---

# Introduction

This document provides you a complete documentation of the Speos for NX library for Python.

Refer to [Changelog](articles/changelog.md) to see what's new in the latest version.

## Main features

- **Optical properties**: Optical properties define how light rays interact with geometries.

- **Sources**: Sources are light sources propagating rays in an optical system.

- **Sensors**: Sensors integrate rays coming from the source to analyze the optical result in the optical system.

- **Simulation**: Simulations give life to the optical system to generate the results, by propagating rays between sources and sensors.

The Speos for NX library is intricately linked to the GUI, ensuring that functionalities accessible in the GUI has a corresponding automation function. As the automation functions are directly derived from the GUI, they perfectly align with the actions you would have to perform in the software such as creating new Speos objects, editing existing ones, and modifying parameters.

## Understanding the Doxygen class documentation

The documentation provides a representation of the Speos for NX library in doxygen format. Each class has the following structure:

### The class inheritance diagram

Graph that shows all parents of the current class.

### Public member functions

List of functions that is available with the class, each function item has a brief description.

### Public static attributes

List of static attributes. A static attribute is an unique variable that is shared among all instances of a class.

### Properties

- List of properties that is available with the class. A property is a class attribute that encapsulates accessors. Each properties item has a brief description.
- List of properties that the class inherits from its parents.

### Detailed description

Detailed description of the class.

### Additional inherited members

List of functions that the class inherits from its parents.

### Member function documentation

Detailed documentation of each functions such as parameters' type, return value, range of value.

### Property documentation

Detailed documentation of each properties such as its accessing privilege, type, range, prerequisite and detailed description.

## Next steps

- [Getting Started](articles/getting_started.md) - Learn how to set up and use the SpeosNX API
- [Usage Examples](articles/usage_examples.md) - See practical code examples
- [Classes](articles/classes/index.md) - Browse the complete API reference
