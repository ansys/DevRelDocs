# Which data can be represented

DPF works with physical and numerical data: quantities that vary across space, time, or other dimensions. While commonly used for simulation results, DPF can represent any data that follows a field pattern. Here are examples:

- The **density distribution** in a stable flow within a pipe, which is a scalar field over a region of space.
- The **deformation of a car** after a crash, which is a 3D vector field over a region of space.
- The **variation of plastic strain** at the midpoint of a bent bar during a fatigue analysis, which is a matrix field over a region of pseudo-time.
- The **global kinetic energy** of a dropped ball over time, which is a scalar field over a region of time.
- The **maximum deflection** of an airplane wing for different vibration modes, which is a 3D field over a region or set of frequencies.
- The **maximum pitch in decibels** of a car engine running at different regimes, which is a scalar field over a region of RPMs.

All of these examples share a common pattern: they associate data values with points in a region. In mathematics and physics, this pattern is called a **field**: a function that maps every location in a region to a corresponding data value.

## What is physical data

Physical data represents measurable quantities, whether from simulations, experiments, sensors, or custom sources. DPF structures this data as fields, allowing you to work with any quantity that varies across space, time, frequency, or custom parameters.

## Types of fields

DPF provides different field types based on what kind of data you need to store. The most common field type stores floating-point numbers and can be structured as scalars, vectors, or matrices:

### Field (floating-point data)

The standard **Field** stores double-precision floating-point values. This is the primary field type used for most simulation results. The data can be structured in different ways:

#### Scalar structure

A **scalar field** associates a single number with each point in a region.

**Structure:** One value per point

**Real-world examples:**
- Temperature distribution in a heated component
- Pressure distribution in a fluid flow
- Material density in a structure
- Energy values over time

**Visualization:** Think of a temperature map where each location has one temperature value.

```
Point 1 → 25.3°C
Point 2 → 28.7°C
Point 3 → 22.1°C
```

#### Vector structure

A **vector field** associates a directional quantity (with magnitude and direction) to each point in a region.

**Structure:** Multiple values per point (typically 3 for X, Y, Z components)

**Real-world examples:**
- Displacement of structures under load (3D movement)
- Velocity field in fluid dynamics (flow direction and speed)
- Force distribution across a surface
- Acceleration field in dynamic analysis

**Visualization:** Think of arrows showing direction and magnitude at each location.

```
Point 1 → [2.5, -1.2, 0.8] mm (X, Y, Z displacement)
Point 2 → [3.1, -0.9, 1.2] mm
Point 3 → [1.8, -1.5, 0.5] mm
```

#### Matrix (tensor) structure

A **matrix field** associates a multi-dimensional array of values with each point in a region.

**Structure:** Array of values per point (e.g., 3×3 or 6 components for stress/strain)

**Real-world examples:**
- Stress tensor (6 components: σx, σy, σz, τxy, τyz, τxz)
- Strain tensor in material analysis
- Elastic modulus variations in composites

**Visualization:** Think of multiple related values describing complex physical states.

```
Point 1 → [150, 120, 85, 30, 15, 20] MPa (σx, σy, σz, τxy, τyz, τxz)
Point 2 → [165, 132, 91, 35, 18, 24] MPa
Point 3 → [142, 115, 78, 28, 12, 18] MPa
```

### Other field types

Beyond the standard Field, DPF provides specialized field types for different data types:

**PropertyField** - Stores integer values:
- Material IDs or element type IDs
- Mesh connectivity information (which nodes belong to which elements)
- Element or node property indices
- Boolean flags represented as 0/1 integers

**StringField** - Stores text values:
- Material names or labels
- Result descriptions or units
- Custom annotations

**CustomTypeField** - Stores custom data types:
- Complex numbers for electromagnetic analysis
- Custom types defined by specialized plugins
- Any data type compatible with `numpy.dtype`

All of these field types follow the same organizational pattern: they associate data (whether floating-point, integer, text, or custom) with entities in a discretized region.

## Fields across different dimensions

Fields in DPF aren't limited to spatial regions. They can represent data across various dimensions:

### Spatial fields
Data varying across physical space (the mesh):
- **Example:** Deformation of a car body after a crash test
- **Region:** 3D mesh representing the car structure
- **Field Type:** Vector field (displacement has X, Y, Z components)

### Temporal fields
Data varying over time:
- **Example:** Kinetic energy of a dropped ball throughout its fall
- **Region:** Time steps from 0s to impact
- **Field Type:** Scalar field (energy is a single value at each time)

### Frequency fields
Data varying across vibration modes or frequencies:
- **Example:** Maximum deflection of an airplane wing at different resonant frequencies
- **Region:** Set of natural frequencies (e.g., 10 Hz, 25 Hz, 50 Hz)
- **Field Type:** Vector field (deflection magnitude and direction per frequency)

### Custom parametric fields
Data varying across custom parameters:
- **Example:** Maximum sound level of a car engine at different RPMs
- **Region:** Engine speed range (1000 RPM to 6000 RPM)
- **Field Type:** Scalar field (sound level in decibels at each RPM)

## Why this matters

Understanding what types of data can be represented helps you:
1. **Recognize** which DPF structures to use for your simulation results
2. **Plan** how to organize custom data for DPF processing
3. **Interpret** DPF output formats correctly
4. **Communicate** data requirements clearly when building workflows

In the next section, you'll learn how DPF represents this data internally using fields, scopings, supports, and collections.
