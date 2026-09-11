# MAPDL Operators

## Overview

This page is dedicated to the **DPF plugin for MAPDL operators**. The plugin exposes a collection of operators that provide access to simulation data produced by the ANSYS Mechanical APDL (MAPDL) solver, as well as post-processing operations specific to the MAPDL result format (`.rst`, `.rth`, etc.).

These operators cover a broad range of capabilities, from reading raw nodal and elemental result data, to assembling fields and applying MAPDL-specific averaging and transformation rules. It includes:

- Supported minimum MAPDL versions
- Known limitations when reading older result file formats
- Element types supported by DPF
- Verified KEYOPT configurations per element
- General Result-Type Limitations for Older Files
- Element types which are Beta-supported

---

## 1. Supported MAPDL Versions

### Minimum supported MAPDL versions

The `mapdlOperators` plugin supports:

- **MAPDL 14.5 and newer** for standard structural results

### Notes for older versions

| Version range    | Status                                 |
| ---------------- | -------------------------------------- |
| 14.5 and earlier | Reading of file is blocked by default* |

*Versions older than 14.5 requires to pass the following option in the stream on the pin 200 to activate the reading of the files.
```cpp
ansys::dpf::DataTree datatree;
datatree.makeDoubleAttribute("OverrideMinimumVersion", 10.0);
streamProvider.connect(200, datatree);
```

---

## 2. Supported Element Types

Below is the element-by-element specification for Solid element types supported by DPF, including KEYOPTs.

### Definition of a "Supported" Element Type

- The mesh elements can be read and converted into their corresponding DPF element shape
- Element results available for a given element type can be read; These results are also expected to conform to the MAPDL element documentation.
- Supported also indicates that these functionalities have been tested and validated in accordance with Ansys Quality procedures.

### SOLID87

**Element description:** SOLID87 is a 3D 10-node tetrahedral thermal solid element with one degree of freedom (temperature) at each node. It is suited for irregular meshes and steady-state or transient thermal analyses.

**Documentation MAPDL:** [SOLID87](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v261/en/ans_elem/Hlp_E_SOLID87.html)

#### Supported Results
- **TEMP** (Temperature)
- **TG** (Thermal Gradient)
- **TF** (Thermal Flux)
- **ENF_HEAT** (Elemental nodal heat)

#### Shell Layers
This element cannot have shell layers

#### Supported KEYOPTs

| Value         | Description                       | Supported |
| ------------- | --------------------------------- | --------- |
| **keyopt(1)** | Specific heat matrix              |           |
| 0             | Consistent specific heat matrix   | Yes       |
| 1             | Diagonalized specific heat matrix | Yes       |
| **keyopt(5)** | Surface convection matrix         |           |
| 0             | Diagonalized convection matrix    | Yes       |
| 1             | Consistent convection matrix      | Yes       |

---

### SOLID90

**Element description:** SOLID90 is a 3D 20-node thermal solid element with one degree of freedom (temperature) at each node. It is suitable for steady-state or transient thermal analyses and curved boundaries.

**Documentation MAPDL:** [SOLID90](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v261/en/ans_elem/Hlp_E_SOLID90.html)

#### Supported Results
- **TEMP** (Temperature)
- **TG** (Thermal Gradient)
- **TF** (Thermal Flux)
- **ENF_HEAT** (Elemental nodal heat)

#### Shell Layers
This element cannot have shell layers

#### Supported KEYOPTs

| Value         | Description                       | Supported |
| ------------- | --------------------------------- | --------- |
| **keyopt(1)** | Specific heat matrix              |           |
| 0             | Consistent specific heat matrix   | Yes       |
| 1             | Diagonalized specific heat matrix | Yes       |

---

### SHELL131

**Element description:** SHELL131 is a 3D 4-node layered thermal shell element with up to 32 temperature degrees of freedom at each node. It provides in-plane and through-thickness thermal conduction capability for 3D steady-state or transient thermal analysis.

**Documentation MAPDL:** [SHELL131](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v261/en/ans_elem/Hlp_E_SHELL131.html)

#### Supported Results
- **TEMP** (Temperature)
- **TG** (Thermal Gradient)
- **TF** (Thermal Flux)
- **ENF_HEAT** (Elemental nodal heat)

#### Shell Layers
This element can have shell layers

#### Supported KEYOPTs

| Value          | Description                                                                               | Supported     |
| -------------- | ----------------------------------------------------------------------------------------- | ------------- |
| **keyopt(2)**  | Film coefficient evaluation (if any)                                                      |               |
| 0              | Evaluate at average film temperature, (TS+TB)/2 (default)                                 | Yes           |
| 1              | Evaluate at element surface temperature, TS                                               | Yes           |
| 2              | Evaluate at fluid bulk temperature, TB                                                    | Yes           |
| 3              | Evaluate at differential temperature, \|TS-TB\|                                           | Yes           |
| **keyopt(3)**  | Temperature variation through layer                                                       |               |
| 0              | Quadratic temperature variation through layer (maximum layers = 15) (default)             | Not supported |
| 1              | Linear temperature variation through layer (maximum layers = 31)                          | Not supported |
| 2              | No temperature variation through layer (1 layer only)                                     | Yes           |
| **keyopt(4)**  | Number of layers (match SECDATA commands or leave blank to default)                       |               |
| 1              | 1 layer                                                                                   | Yes           |
| >1             | More than 1 layer                                                                         | Not supported |
| **keyopt(6)**  | Application                                                                               |               |
| 0              | Thermal shell application (default)                                                       | Yes           |
| 1              | Paint application                                                                         | Not supported |
| **keyopt(15)** | Specific heat matrix                                                                      |               |
| 0              | Program determines whether to use a diagonal or consistent specific heat matrix (default) | Yes           |
| 1              | Use a diagonal specific heat matrix                                                       | Yes           |
| 2              | Use a consistent specific heat matrix                                                     | Yes           |

---

### SHELL132

**Element description:** SHELL132 is a 3D 8-node layered thermal shell element with up to 32 temperature degrees of freedom at each node. It provides in-plane and through-thickness thermal conduction capability for 3D steady-state or transient thermal analysis.

**Documentation MAPDL:** [SHELL132](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v261/en/ans_elem/Hlp_E_SHELL132.html)

#### Supported Results
- **TEMP** (Temperature)
- **TG** (Thermal Gradient)
- **TF** (Thermal Flux)
- **ENF_HEAT** (Elemental nodal heat)

#### Shell Layers
This element can have shell layers

#### Supported KEYOPTs

| Value          | Description                                                                               | Supported     |
| -------------- | ----------------------------------------------------------------------------------------- | ------------- |
| **keyopt(2)**  | Film coefficient evaluation (if any)                                                      |               |
| 0              | Evaluate at average film temperature, (TS+TB)/2 (default)                                 | Yes           |
| 1              | Evaluate at element surface temperature, TS                                               | Yes           |
| 2              | Evaluate at fluid bulk temperature, TB                                                    | Yes           |
| 3              | Evaluate at differential temperature, \|TS-TB\|                                           | Yes           |
| **keyopt(3)**  | Temperature variation through layer                                                       |               |
| 0              | Quadratic temperature variation through layer (maximum layers = 15) (default)             | Not supported |
| 1              | Linear temperature variation through layer (maximum layers = 31)                          | Not supported |
| 2              | No temperature variation through layer (1 layer only)                                     | Yes           |
| **keyopt(4)**  | Number of layers (match SECDATA commands or leave blank to default)                       |               |
| 1              | 1 layer                                                                                   | Yes           |
| >1             | More than 1 layer                                                                         | Not supported |
| **keyopt(6)**  | Application                                                                               |               |
| 0              | Thermal shell application (default)                                                       | Yes           |
| 1              | Paint application                                                                         | Not supported |
| **keyopt(15)** | Specific heat matrix                                                                      |               |
| 0              | Program determines whether to use a diagonal or consistent specific heat matrix (default) | Yes           |
| 1              | Use a diagonal specific heat matrix                                                       | Yes           |
| 2              | Use a consistent specific heat matrix (default)                                           | Yes           |

---

### SHELL181

**Element description:** 4-node shell element with six degrees of freedom at each node (translations and rotations). It is well-suited for linear, large rotation, and/or large strain nonlinear applications. It supports plasticity, hyperelasticity, stress stiffening, creep, large deflection, and large strain capabilities. It also supports layered composite materials for modeling laminated structures.

**Documentation MAPDL:** [SHELL181](https://ansyshelp.ansys.com/account/secured?returnurl=/Views/Secured/corp/v261/en/ans_elem/Hlp_E_SHELL181.html)

#### Supported Results
- **U** (Displacements)
- **ROT** (Rotations)
- **S** (Stress)
- **EPEL** (Elastic Strain)
- **EPPL** (Plastic Strain)
- **ETH** (Thermal Strain)
- **EPCR** (Creep Strain)
- **ETH_SWL** (Swelling Strain)
- **ENF_FORCE** (Element nodal forces)
- **ENF_MOMENT** (Element nodal moments)
- **RF_FORCE** (Reaction forces)
- **RF_MOMENT** (Reaction moments)

#### Shell Layers
This element can have shell layers

#### Supported KEYOPTs

| Value          | Description                                                                                                                                               | Supported |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| **keyopt(1)**  |                                                                                                                                                           |           |
| 0              | Bending and membrane stiffness (default)                                                                                                                  | Yes       |
| 1              | Membrane stiffness only                                                                                                                                   | Yes       |
| 2              | Stress/strain evaluation only                                                                                                                             | Yes       |
| **keyopt(3)**  |                                                                                                                                                           |           |
| 0              | Reduced integration with hourglass control (default)                                                                                                      | Yes       |
| 2              | Full integration with incompatible modes                                                                                                                  | Yes       |
| **keyopt(4)**  |                                                                                                                                                           |           |
| 0              | Shell normal orientation calculated from element connectivity (default)                                                                                   | Yes       |
| 1              | Shell normal orientation controlled by the z coordinate direction of a local coordinate system                                                            | Yes       |
| **keyopt(5)**  |                                                                                                                                                           |           |
| 0              | Standard shell formulation (default)                                                                                                                      | Beta      |
| 1              | Advanced curved-shell formulation                                                                                                                         | Beta      |
| 2              | Simplified curved-shell formulation                                                                                                                       | Yes       |
| **keyopt(8)**  |                                                                                                                                                           |           |
| 0              | For multi-layer elements, store data for bottom of bottom layer and top of top layer. For single-layer elements, store data for TOP and BOTTOM (Default). | Yes       |
| 1              | Store data for TOP and BOTTOM, for all layers (multi-layer elements).                                                                                     | Beta      |
| 2              | Store data for TOP, BOTTOM, and MID for all layers. Applies to single- and multi-layer elements.                                                          | Beta      |
| **keyopt(9)**  |                                                                                                                                                           |           |
| 0              | No user subroutine to define initial thickness (default)                                                                                                  | Yes       |
| 1              | Read initial thickness data from user subroutine UTHICK                                                                                                   | Beta      |
| **keyopt(10)** |                                                                                                                                                           |           |
| 0              | Thickness normal stress (Sz) output option: Sz not modified (default, Sz = 0).                                                                            | Yes       |
| 1              | Recover and output Sz from applied pressure load.                                                                                                         | Beta      |
| **keyopt(11)** |                                                                                                                                                           |           |
| 0              | Default element x axis (x0) orientation:  First parametric direction at the element centroid (default).                                                   | Yes       |
| 1              | Pointing from element node I to element node J.                                                                                                           | Beta      |

---

### SOLID185

**Element description:** 8-node linear structural solid, supporting plasticity, hyperelasticity, stress stiffening, creep, large deformation, and mixed u-P formulations

**Documentation MAPDL:**  [SOLID185](https://ansyshelp.ansys.com/account/secured?returnurl=/Views/Secured/corp/v261/en/ans_elem/Hlp_E_SOLID185.html)

#### Supported Results
- **U** (Displacements)
- **ROT** (Rotations)
- **S** (Stress)
- **EPEL** (Elastic Strain)
- **EPPL** (Plastic Strain)
- **ETH** (Thermal Strain)
- **EPCR** (Creep Strain)
- **ETH_SWL** (Swelling Strain)
- **ENF_FORCE** (Element nodal forces)
- **ENF_MOMENT** (Element nodal moments)
- **RF_FORCE** (Reaction forces)
- **RF_MOMENT** (Reaction moments)

#### Shell Layers
This element can have shell layers

#### Supported KEYOPTs

| Value          | Description                                                 | Supported |
| -------------- | ----------------------------------------------------------- | --------- |
| **keyopt(2)**  |                                                             |           |
| 0              | Full integration with B̄ method (default)                    | Yes       |
| 1              | Uniform reduced integration with hourglass control          | Yes       |
| 2              | Enhanced strain formulation                                 | Yes       |
| 3              | Simplified enhanced strain formulation                      | Yes       |
| **keyopt(3)**  |                                                             |           |
| 0              | Structural Solid (default) — nonlayered                     | Yes       |
| 1              | Layered Solid (not applicable to SOLID185 Structural Solid) | Beta      |
| **keyopt(6)**  |                                                             |           |
| 0              | Use pure displacement formulation (default)                 | Yes       |
| 1              | Use mixed u-P formulation                                   | Yes       |
| **keyopt(15)** |                                                             |           |
| 0              | Do not include PML absorbing condition (default)            | Yes       |
| 1              | Include PML absorbing condition                             | Beta      |
| **keyopt(16)** |                                                             |           |
| 0              | Steady-state analysis disabled (default)                    | Yes       |
| 1              | Enable steady-state analysis                                | Beta      |
| **keyopt(17)** |                                                             |           |
| 0              | Basic element solution (default)                            | Yes       |
| 1              | Surface solution for faces with nonzero pressure            | Beta      |


---

### SOLID186

**Element description:** 20-node quadratic solid element; supports irregular shapes, hyperelasticity, plasticity, creep, stress stiffening, and large deformation.

**Documentation MAPDL:**  [SOLID186](https://ansyshelp.ansys.com/account/secured?returnurl=/Views/Secured/corp/v261/en/ans_elem/Hlp_E_SOLID186.html)

#### Supported Results
- **U** (Displacements)
- **ROT** (Rotations)
- **S** (Stress)
- **EPEL** (Elastic Strain)
- **EPPL** (Plastic Strain)
- **ETH** (Thermal Strain)
- **EPCR** (Creep Strain)
- **ETH_SWL** (Swelling Strain)
- **ENF_FORCE** (Element nodal forces)
- **ENF_MOMENT** (Element nodal moments)
- **RF_FORCE** (Reaction forces)
- **RF_MOMENT** (Reaction moments)

#### Shell Layers
This element can have shell layers

#### Supported KEYOPTs

| Value          | Description                                                                        | Supported |
| -------------- | ---------------------------------------------------------------------------------- | --------- |
| **keyopt(2)**  |                                                                                    |           |
| 0              | Uniform reduced integration (default)                                              | Yes       |
| 1              | Full integration                                                                   | Yes       |
| 2              | Enhanced strain formulation                                                        | Yes       |
| 3              | Simplified enhanced strain formulation                                             | Yes       |
| **keyopt(3)**  |                                                                                    |           |
| 0              | Homogeneous Structural Solid (default) — nonlayered                                | Yes       |
| 1              | Layered Structural Solid (not applicable to SOLID186 Homogeneous Structural Solid) | Beta      |
| **keyopt(6)**  |                                                                                    |           |
| 0              | Use pure displacement formulation (default)                                        | Yes       |
| 1              | Use mixed u-P formulation                                                          | Yes       |
| **keyopt(15)** |                                                                                    |           |
| 0              | Do not include PML absorbing condition (default)                                   | Yes       |
| 1              | Include PML absorbing condition                                                    | Beta      |
| **keyopt(16)** |                                                                                    |           |
| 0              | Steady-state analysis disabled (default)                                           | Yes       |
| 1              | Enable steady-state analysis                                                       | Beta      |
| **keyopt(17)** |                                                                                    |           |
| 0              | Basic element solution (default)                                                   | Yes       |
| 1              | Surface solution for faces with nonzero pressure                                   | Beta      |

---

### SOLID187

**Element description:** 10-node tetrahedral solid. The element has a quadratic displacement behavior and is well suited to modeling irregular meshes. It supports plasticity, hyperelasticity, creep, stress stiffening, large deflection, large strain, and mixed formulation capability for simulating deformations of nearly incompressible elastoplastic materials and fully incompressible hyperelastic materials.

**Documentation MAPDL:**  [SOLID187](https://ansyshelp.ansys.com/account/secured?returnurl=/Views/Secured/corp/v261/en/ans_elem/Hlp_E_SOLID187.html)

#### Supported Results
- **U** (Displacements)
- **ROT** (Rotations)
- **S** (Stress)
- **EPEL** (Elastic Strain)
- **EPPL** (Plastic Strain)
- **ETH** (Thermal Strain)
- **EPCR** (Creep Strain)
- **ETH_SWL** (Swelling Strain)
- **ENF_FORCE** (Element nodal forces)
- **ENF_MOMENT** (Element nodal moments)
- **RF_FORCE** (Reaction forces)
- **RF_MOMENT** (Reaction moments)

#### Shell Layers
This element cannot have shell layers

#### Supported KEYOPTs

| Value          | Description                                                                                                                                            | Supported |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| **keyopt(6)**  |                                                                                                                                                        |           |
| 0              | Use pure displacement formulation (default)                                                                                                            | Yes       |
| 1              | Use mixed u-P formulation, hydrostatic pressure is constant in an element (recommended for hyperelastic materials)                                     | Yes       |
| 2              | Use mixed u-P formulation, hydrostatic pressure is interpolated linearly in an element (recommended for nearly incompressible elastoplastic materials) | Yes       |
| **keyopt(15)** |                                                                                                                                                        |           |
| 0              | Do not include PML absorbing condition (default)                                                                                                       | Beta      |
| 1              | Include PML absorbing condition                                                                                                                        | Beta      |
| **keyopt(16)** |                                                                                                                                                        |           |
| 0              | Steady-state analysis disabled (default)                                                                                                               | Beta      |
| 1              | Enable steady-state analysis                                                                                                                           | Beta      |
| **keyopt(17)** |                                                                                                                                                        |           |
| 0              | Basic element solution (default)                                                                                                                       | Beta      |
| 1              | Surface solution for faces with nonzero pressure                                                                                                       | Beta      |

---

### SOLID278

**Element description:** SOLID278 has a 3D thermal conduction capability. The element has eight nodes with a single degree of freedom, temperature, at each node. The element is applicable to a 3D, steady-state or transient thermal analysis.

**Documentation MAPDL:** [SOLID278](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v261/en/ans_elem/Hlp_E_SOLID278.html)

#### Supported Results
- **TEMP** (Temperature)
- **TG** (Thermal Gradient)
- **TF** (Thermal Flux)
- **ENF_HEAT** (Elemental nodal heat)

#### Shell Layers
This element can have shell layers

#### Supported KEYOPTs

| Value          | Description                                                                           | Supported |
| -------------- | ------------------------------------------------------------------------------------- | --------- |
| **keyopt(2)**  | Evaluation of film coefficient                                                        |           |
| 0              | Evaluate film coefficient (if any) at average film temperature, (TS + TB)/2 (default) | Yes       |
| 1              | Evaluate film coefficient at element surface temperature, TS                          | Yes       |
| 2              | Evaluate film coefficient at fluid bulk temperature, TB                               | Yes       |
| 3              | Evaluate film coefficient at differential temperature TS - TB                         | Yes       |
| **keyopt(3)**  | Layer construction                                                                    |           |
| 0              | Homogeneous solid (default) - nonlayered                                              | Yes       |
| 1              | Layered solid                                                                         | Beta      |
| 2              | Layered solid with through-the-thickness degrees of freedom                           | Beta      |
| **keyopt(6)**  | Number of material layers per interpolation layer (valid only when keyopt(3) = 2)     |           |
| 1              | Single material layer per interpolation layer (default for keyopt(3) = 2)             | Beta      |
| n              | n material layers per interpolation layer                                             | Beta      |
| **keyopt(8)**  | Material layer data storage (layered forms)                                           |           |
| 0              | Store data for bottom of bottom layer and top of top layer (default)                  | Beta      |
| 1              | Store top and bottom data for all layers                                              | Beta      |
| **keyopt(9)**  | Element-level matrix form                                                             |           |
| 0              | Symmetric (default)                                                                   | Yes       |
| 1              | Nonsymmetric                                                                          | Yes       |
| **keyopt(11)** | Mass transport effects (valid for homogeneous form, keyopt(3) = 0)                    |           |
| 0              | Do not include mass transport in the analysis (default)                               | Yes       |
| 1              | Include mass transport with Diffusive Flux (Dflux) Neumann boundary condition         | Yes       |
| 2              | Include mass transport with Total Flux (Tflux) Neumann boundary condition             | Yes       |
| **keyopt(13)** | Film coefficient matrix                                                               |           |
| 0              | Program determines whether to use a diagonal or consistent film coefficient matrix    | Yes       |
| 1              | Use a diagonal film coefficient matrix (default)                                      | Yes       |
| 2              | Use a consistent film coefficient matrix                                              | Yes       |
| **keyopt(15)** | Specific heat matrix                                                                  |           |
| 0              | Program determines whether to use a diagonal or consistent specific heat matrix       | Yes       |
| 1              | Use a diagonal specific heat matrix                                                   | Yes       |
| 2              | Use a consistent specific heat matrix                                                 | Yes       |
| **keyopt(16)** | Evaluation of material properties (valid for homogeneous form, keyopt(3) = 0)         |           |
| 0              | Evaluate material properties at centroid (default)                                    | Yes       |
| 1              | Evaluate material properties at each integration point                                | Yes       |

---

### SOLID279

**Element description:** SOLID279 is a higher order 3D 20-node solid element that exhibits quadratic thermal behavior. The element is defined by 20 nodes with a temperature degree of freedom at each node.

**Documentation MAPDL:** [SOLID279](https://ansyshelp.ansys.com/account/secured?returnurl=/Views/Secured/corp/v261/en/ans_elem/Hlp_E_SOLID279.html)

#### Supported Results
- **TEMP** (Temperature)
- **TG** (Thermal Gradient)
- **TF** (Thermal Flux)
- **ENF_HEAT** (Elemental nodal heat)

#### Shell Layers
This element can have shell layers

#### Supported KEYOPTs

| Value          | Description                                                                                                                                   | Supported |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| **keyopt(2)**  | Evaluation of film coefficient                                                                                                                |           |
| 0              | Evaluate film coefficient (if any) at average film temperature, (TS + TB)/2 (default)                                                         | Yes       |
| 1              | Evaluate film coefficient at element surface temperature, TS                                                                                  | Yes       |
| 2              | Evaluate film coefficient at fluid bulk temperature, TB                                                                                       | Yes       |
| 3              | Evaluate film coefficient at differential temperature TS - TB                                                                                 | Yes       |
| **keyopt(3)**  | Layer construction                                                                                                                            |           |
| 0              | Homogeneous solid (default) - nonlayered                                                                                                      | Yes       |
| 1              | Layered solid                                                                                                                                 | Beta      |
| 2              | Layered solid with through-the-thickness degrees of freedom                                                                                   | Beta      |
| **keyopt(6)**  | Number of material layers per interpolation layer (valid only when keyopt(3) = 2)                                                             |           |
| 1              | Single material layer per interpolation layer (default for keyopt(3) = 2)                                                                     | Beta      |
| n              | n material layers per interpolation layer                                                                                                     | Beta      |
| **keyopt(8)**  | Material layer data storage (layered forms)                                                                                                   |           |
| 0              | Store data for bottom of bottom layer and top of top layer (default)                                                                          | Beta      |
| 1              | Store top and bottom data for all layers                                                                                                      | Beta      |
| **keyopt(9)**  | Element-level matrix form                                                                                                                     |           |
| 0              | Symmetric (default)                                                                                                                           | Yes       |
| 1              | Nonsymmetric                                                                                                                                  | Yes       |
| **keyopt(13)** | Film coefficient matrix                                                                                                                       |           |
| 0              | Program determines whether to use a diagonal or consistent film coefficient matrix (default)                                                  | Yes       |
| 1              | Use a diagonal film coefficient matrix                                                                                                        | Yes       |
| 2              | Use a consistent film coefficient matrix                                                                                                      | Yes       |
| **keyopt(15)** | Specific heat matrix                                                                                                                          |           |
| 0              | Program determines whether to use a diagonal or consistent specific heat matrix                                                               | Yes       |
| 1              | Use a diagonal specific heat matrix                                                                                                           | Yes       |
| 2              | Use a consistent specific heat matrix (default)                                                                                               | Yes       |
| **keyopt(16)** | Evaluation of material properties (except density and specific heat, always at integration points; valid for homogeneous form, keyopt(3) = 0) |           |
| 0              | Evaluate material properties at centroid (default)                                                                                            | Yes       |
| 1              | Evaluate material properties at each integration point                                                                                        | Yes       |

---

### SHELL281

**Element description:** 8-node shell element with six degrees of freedom at each node (translations and rotations). It is well-suited for linear, large rotation, and/or large strain nonlinear applications. The element provides quadratic shape functions for improved accuracy. It supports plasticity, hyperelasticity, stress stiffening, creep, large deflection, and large strain capabilities. It also supports layered composite materials for modeling laminated structures.

**Documentation MAPDL:** [SHELL281](https://ansyshelp.ansys.com/account/secured?returnurl=/Views/Secured/corp/v261/en/ans_elem/Hlp_E_SHELL281.html)

#### Supported Results
- **U** (Displacements)
- **ROT** (Rotations)
- **S** (Stress)
- **EPEL** (Elastic Strain)
- **EPPL** (Plastic Strain)
- **ETH** (Thermal Strain)
- **EPCR** (Creep Strain)
- **ETH_SWL** (Swelling Strain)
- **ENF_FORCE** (Element nodal forces)
- **ENF_MOMENT** (Element nodal moments)
- **RF_FORCE** (Reaction forces)
- **RF_MOMENT** (Reaction moments)

#### Shell Layers
This element can have shell layers

#### Supported KEYOPTs

| Value          | Description                                                                                                                                               | Supported |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| **keyopt(1)**  |                                                                                                                                                           |           |
| 0              | Bending and membrane stiffness (default)                                                                                                                  | Yes       |
| 1              | Membrane stiffness only                                                                                                                                   | Beta      |
| 2              | Stress/strain evaluation only                                                                                                                             | Yes       |
| **keyopt(4)**  |                                                                                                                                                           |           |
| 0              | Shell normal orientation calculated from element connectivity (default)                                                                                   | Yes       |
| 1              | Shell normal orientation controlled by the z coordinate direction of a local coordinate system                                                            | Yes       |
| **keyopt(5)**  |                                                                                                                                                           |           |
| 0              | Advanced curved shell formulation (default)                                                                                                               | Yes       |
| 1              | Simplified curved shell formulation                                                                                                                       | Yes       |
| **keyopt(8)**  |                                                                                                                                                           |           |
| 0              | For multi-layer elements, store data for bottom of bottom layer and top of top layer. For single-layer elements, store data for TOP and BOTTOM (default). | Beta      |
| 1              | Store data for TOP and BOTTOM, for all layers (multi-layer elements).                                                                                     | Yes       |
| 2              | Store data for TOP, BOTTOM, and MID for all layers. Applies to single- and multi-layer elements.                                                          | Yes       |
| **keyopt(9)**  |                                                                                                                                                           |           |
| 0              | No user subroutine to provide initial thickness (default)                                                                                                 | Yes       |
| 1              | Read initial thickness data from user subroutine UTHICK                                                                                                   | Beta      |
| **keyopt(10)** |                                                                                                                                                           |           |
| 0              | Thickness normal stress (Sz) output option: Sz not modified (default, Sz = 0).                                                                            | Yes       |
| 1              | Recover and output Sz from applied pressure load.                                                                                                         | Yes       |
| **keyopt(11)** |                                                                                                                                                           |           |
| 0              | Default element x axis (x0) orientation: First parametric direction at the four in-plane integration points (default).                                    | Beta      |
| 1              | Pointing from element node I to element node J.                                                                                                           | Beta      |

---

### SOLID291

**Element description:** SOLID291 is a 3D 10-node tetrahedral thermal solid element with one degree of freedom (temperature) at each node. It is suited for irregular meshes and steady-state or transient thermal analyses.

**Documentation MAPDL:** [SOLID291](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v261/en/ans_elem/Hlp_E_SOLID291.html)

#### Supported Results
- **TEMP** (Temperature)
- **TG** (Thermal Gradient)
- **TF** (Thermal Flux)
- **ENF_HEAT** (Elemental nodal heat)

#### Shell Layers
This element cannot have shell layers

#### Supported KEYOPTs

| Value          | Description                                                                                                               | Supported |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- | --------- |
| **keyopt(2)**  | Evaluation of film coefficient                                                                                            |           |
| 0              | Evaluate film coefficient (if any) at average film temperature, (TS + TB)/2 (default)                                     | Yes       |
| 1              | Evaluate film coefficient at element surface temperature, TS                                                              | Yes       |
| 2              | Evaluate film coefficient at fluid bulk temperature, TB                                                                   | Yes       |
| 3              | Evaluate film coefficient at differential temperature \|TS - TB\|                                                         | Yes       |
| **keyopt(11)** | Specific heat matrix and material properties integration                                                                  |           |
| 0              | Specific heat matrix with 4 integration points; material properties follow keyopt(16) (default)                           | Yes       |
| 1              | Specific heat matrix with 11 integration points; material properties evaluated at all integration points                  | Yes       |
| 2              | Specific heat matrix with 11 integration points; material properties evaluated at centroid                                | Yes       |
| **keyopt(13)** | Film coefficient matrix                                                                                                   |           |
| 0              | Program determines whether to use a diagonal or consistent film coefficient matrix (default)                              | Yes       |
| 1              | Use a diagonal film coefficient matrix                                                                                    | Yes       |
| 2              | Use a consistent film coefficient matrix                                                                                  | Yes       |
| **keyopt(15)** | Specific heat matrix                                                                                                      |           |
| 0              | Program determines whether to use a diagonal or consistent specific heat matrix                                           | Yes       |
| 1              | Use a diagonal specific heat matrix                                                                                       | Yes       |
| 2              | Use a consistent specific heat matrix (default)                                                                           | Yes       |
| **keyopt(16)** | Valid only for keyopt(11) = 0. Evaluation of material properties (except density and specific heat at integration points) |           |
| 0              | Evaluate material properties at centroid (default)                                                                        | Yes       |
| 1              | Evaluate material properties at each integration point                                                                    | Yes       |

---

## 3. General Result-Type Limitations for Older Version Files

Users should expect limitations for RST files created before MAPDL 14.5, especially regarding the following areas.

### 3.1 Section of Shell Elements Definition

- Section of Shell elements cannot be defined using real constants

### 3.2 FSplit Command is not supported

- Result files generated using the option /config,fsplit are not supported

### 3.3 Analysis Type Detection

- Result files generated before MAPDL 2024 R1 for transient analyses are incorrectly assigned as static. Reading
  the inertial and damping components of the element nodal forces is not supported on these files.

### 3.4 Support of Elements with dropped Mid-side Nodes

- Some elements can drop one or all their mid-side nodes. DPF only supports officially elements with all mid-side nodes dropped. If only one node is dropped, DPF will write a zero value at this node in the corresponding result field. This kind of situation will cause a difference with the MAPDL PRESOL command result value which will not write any zero.

---

## 4. Elements supported in "Beta"

### Definition of a "Beta" Element Type

- Element can be read into DPF Mesh
- Most common results and KEYOPTS can be read
- All results and keyopts have not yet been tested and validated in accordance with Ansys Quality procedures.
- Missing Results or Errors can occur and need to be reported for bug correction

Here is a list of the elements which are in Beta:

- SOLID5
- COMBIN14
- MASS21
- FLUID30
- LINK31
- LINK33
- SHELL43
- SOLID45
- PLANE55
- SOLID70
- MASS71
- PLANE77
- SOLID98
- FLUID116
- SOLID122
- SOLID123
- SURF151
- SURF152
- SURF153
- SURF154
- TARGE169
- TARGE170
- CONTA173
- CONTA172
- CONTA174
- CONTA175
- CONTA177
- PRETS179
- LINK180
- PLANE182
- PLANE183
- MPC184
- BEAM188
- BEAM189
- SOLSH190
- INTER195
- FOLLW201
- SHELL208
- SHELL209
- COMBI214
- FLUID220
- FLUID221
- PLANE222
- PLANE223
- SOLID225
- SOLID226
- SOLID227
- SOLID231
- SOLID232
- SOLID236
- SOLID237
- FLUID243
- FLUID244
- SURF251
- SURF252
- SOLID272
- SOLID273
- SOLID285
- PIPE288
- PIPE289
- PLANE292
- PLANE293
- SHELL294

## 5. Supported File Types and Results

This section describes the MAPDL result file formats supported by DPF, the types of data that can be read from each, and the associated operators. For detailed binary file format specifications, refer to the [MAPDL Programmer's Guide - Format of Binary Data Files](https://ansyshelp.ansys.com/account/secured?returnurl=/Views/Secured/corp/v261/en/ans_prog/Hlp_P_INT1_2.html).

### Supported MAPDL File Formats

| File Extension | Description                           |
| -------------- | ------------------------------------- |
| `.rst`         | Structural results file               |
| `.rth`         | Thermal results file                  |
| `.rfrq`        | Reduced Complex Displacement file     |
| `.rdsp`        | Reduced Displacement File             |
| `.mode`        | Modal analysis file                   |
| `.rstp`        | Prestress results file                |
| `.cms`         | Component mode synthesis results file |
| `.sub`         | Substructure Matrices File            |
| `.dsub`        | Substructure Displacement File        |

### 5.1 Supported MAPDL Elemental Results

**Description:** Supported elemental result types from multiple analyses including structural, thermal, electrical, and magnetic analyses.

| Result                             | Comp         | Description                             | Supported | Shell Layers | Location       | Operator internal name                                | Scripting name                          |
| ---------------------------------- | ------------ | --------------------------------------- | --------- | ------------ | -------------- | ----------------------------------------------------- | --------------------------------------- |
| S[*](#mapdl-stress-strain-note)    | COMP / blank | Stress components (X, Y, Z, XY, YZ, XZ) | Yes       | Yes          | ElementalNodal | `"S","SX",…`                                          | stress, stress_X                        |
| EPEL[*](#mapdl-stress-strain-note) | COMP / blank | Elastic strain components               | Yes       | Yes          | ElementalNodal | `"EPEL","EPELX",…`                                    | elastic_strain                          |
| EPEL[*](#mapdl-stress-strain-note) | PRIN         | Principal elastic strains               | Yes       | Yes          | ElementalNodal | `"EPEL1","EPEL2","EPEL3","EPEL_intensity","EPEL_EQV"` | elastic_strain_principal_X              |
| EPTH[*](#mapdl-stress-strain-note) | COMP / blank | Thermal strain components               | Yes       | Yes          | ElementalNodal | `"ETH","ETHX",…`                                      | thermal_strain                          |
| EPPL[*](#mapdl-stress-strain-note) | COMP / blank | Plastic strain components               | Yes       | Yes          | ElementalNodal | `"EPPL","EPPLX",…`                                    | plastic_strain                          |
| EPPL[*](#mapdl-stress-strain-note) | PRIN         | Principal plastic strains               | Yes       | Yes          | ElementalNodal | `"EPPL1","EPPL2","EPPL3","EPPL_intensity","EPPL_EQV"` | plastic_strain_principal_X              |
| EPCR[*](#mapdl-stress-strain-note) | COMP / blank | Creep strain components                 | Yes       | Yes          | ElementalNodal | `"EPCR"`                                              | creep_strain                            |
| EPSW[*](#mapdl-stress-strain-note) | –            | Swelling strain                         | Yes       | Yes          | ElementalNodal | `"ETH_SWL"`                                           | swelling_strains                        |
| ENL                                | –            | Nonlinear items (SEPL, SRAT, …)         | Yes       | Yes          | ElementalNodal | `"ENL_SEPL","ENL_SRAT","ENL_HPRES"`,...               | eqv_stress_parameter, stress_ratio, ... |
| SEND                               | –            | Elastic strain energy density           | Beta      | No         | ElementalNodal | `"ENL_ELENG"`                                         | elastic_strain_energy_density           |
| PLASTIC                            | –            | Plastic strain energy density           | Yes       | No          | ElementalNodal | `"ENL_PLWK"`                                          | plastic_strain_energy_density           |
| CREEP                              | –            | Creep strain energy density             | Beta      | No         | ElementalNodal | `"ENL_CRWK"`                                          | creep_strain_energy_density             |
| SVAR                               | 1…N          | State variables                         | Yes       | No          | ElementalNodal | `"ESV"`                                               | state_variable                          |
| GKS                                | X, XY, XZ    | Gasket stress                           | Yes       | No           | ElementalNodal | `"GKS"`                                               | gasket_stress                           |
| CONT                               | STAT         | Contact status                          | Yes       | No           | ElementalNodal | `"ECT_STAT"`                                          | contact_status                          |
| PENE                               | –            | Contact penetration                     | Yes       | No           | ElementalNodal | `"ECT_PENE"`                                          | contact_penetration                     |
| PRES                               | –            | Contact pressure                        | Yes       | No           | ElementalNodal | `"ECT_PRES"`                                          | contact_pressure                        |
| SFRIC                              | –            | Contact friction stress                 | Yes       | No           | ElementalNodal | `"ECT_SFRIC"`                                         | contact_friction_stress                 |
| GAP                                | –            | Contact gap distance                    | Yes       | No           | ElementalNodal | `"ECT_GAP"`                                           | contact_gap_distance                    |
| FLUX                               | –            | Heat flux at contact surface            | Yes       | No           | ElementalNodal | `"ECT_FLUX"`                                          | contact_surface_heat_flux               |
| TG                                 | X, Y, Z      | Thermal gradient                        | Yes       | Yes          | ElementalNodal | `"TG"`                                                | temperature_grad                        |
| TF                                 | X, Y, Z      | Thermal flux                            | Yes       | Yes          | ElementalNodal | `"TF"`                                                | heat_flux                               |
| EF                                 | X, Y, Z      | Electric field                          | Yes       | Yes           | ElementalNodal | `"EF"`                                                | electric_field                          |
| D                                  | X, Y, Z      | Electric flux density                   | Yes       | Yes           | ElementalNodal | `"EFD"`                                               | electric_flux_density                   |
| H                                  | X, Y, Z      | Magnetic field intensity                | Yes       | Yes           | ElementalNodal | `"MF"`                                                | magnetic_field                          |
| B                                  | X, Y, Z      | Magnetic flux density                   | Yes       | Yes           | ElementalNodal | `"MFD"`                                               | magnetic_flux_density                   |
| VOLU                               | –            | Element volume                          | Yes       | No           | Elemental      | `"element::volume"`                                   | elements_volume                         |
| CENT                               | X, Y, Z      | Element centroid                        | Yes       | No           | Elemental      | `"centroid"`                                          | element_centroids                       |
| SMISC                              | snum         | Summable miscellaneous element data     | Yes       | No          | Elemental      | `"SMISC"`                                             | smisc                                   |
| NMISC                              | snum         | Non‑summable miscellaneous element data | Yes       | No          | Elemental      | `"NMISC"`                                             | nmisc                                   |
| KENE                               | –            | Kinetic energy                          | Yes       | No           | Elemental      | `"ENG_KE"`                                            | kinetic_energy                          |
| JS                                 | X, Y, Z      | Source current density                  | Yes       | No           | Elemental      | `"ECD"`                                               | current_density                         |
| SENE                               | –            | Strain energy density                   | Yes       | No           | Elemental      | `"ENG_SE"`                                            | stiffness_matrix_energy                 |
| BFE [***](#mapdl-bfe-note)         | –            | Structural Temperature                  | Yes       | Yes          | ElementalNodal | `"BFE"`                                               | structural_temperature                  |
| F [**](#mapdl-enf-note)            | X, Y, Z      | Element Nodal Forces                    | Yes       | No          | ElementalNodal | `"ENF"`                                               | element_nodal_forces                    |
| M [**](#mapdl-enf-note)            | X, Y, Z      | Element Nodal Moments                   | Yes       | No          | ElementalNodal | `"ENF_Moment"`                                        | element_nodal_moments                   |
| HEAT [**](#mapdl-enf-note)         | –            | Element Nodal Heat                      | Yes       | No           | ElementalNodal | `"ENF_Heat"`                                          | element_nodal_heat                      |

<a id="mapdl-stress-strain-note"></a>
* MAPDL stresses and strains are typically stored on corner nodes only for 2nd order elements.

<a id="mapdl-enf-note"></a>
** ENF Results are stored on corner nodes and mid-side nodes for 2nd order elements.

<a id="mapdl-bfe-note"></a>
*** BFE result storage is sometimes only on corner nodes and sometimes also on mid-side nodes, it depends on the element type.

For more details, you can refer to the [MAPDL Programmer's Guide - Format of Binary Data Files](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v261/en/ans_prog/Hlp_P_INT1_2.html)

**Extending Results to mid-side nodes:** `extend_to_mid_nodes` operator needs to be used to extend results at the mid-side nodes (only for quadratic elements). Eligible operators such as `Stress` have an input pin `extend_to_mid_nodes` (pin 28) which can be set to `True` to extend results at the mid-side nodes.

### 5.2 Supported MAPDL Nodal Results

**Description:** Supported nodal result types from multiple analyses including structural, thermal, electrical, magnetic, and fluid analyses.

| Result | Comp    | Description                                         | Supported | Operator internal name | Scripting name                       |
| ------ | ------- | --------------------------------------------------- | --------- | ---------------------- | ------------------------------------ |
| U      | X, Y, Z | X, Y, or Z structural displacement                  | Yes       | `"U"`                  | displacement                         |
| U      | COMP    | X, Y, and Z structural displacements and vector sum | Yes       | `"UX", "UY", "UZ"`     | displacement_X                       |
| ROT    | X, Y, Z | X, Y, or Z structural rotation                      | Yes       | `"ROT"`                | rotation                             |
| ROT    | COMP    | X, Y, and Z structural rotations and vector sum     | Yes       | `"ROTX","ROTY","ROTZ"` | rotation_X                           |
| TEMP   | –       | Temperature                                         | Yes       | `"TEMP"`               | temperature                          |
| PRES   | –       | Pressure                                            | Yes       | `"pressure"`           | pressure                             |
| VOLT   | –       | Electric potential                                  | Yes       | `"VOLT"`               | electric_potential                   |
| MAG    | –       | Magnetic scalar potential                           | Yes       | `"MAG"`                | magnetic_scalar_potential            |
| V      | X, Y, Z | Fluid velocity component                            | Yes       | `"FV"`                 | fluid_velocity                       |
| V      | COMP    | Fluid velocity components and vector sum            | Yes       | `"FVX","FVY","FVZ"`    | fluid_velocity_X, ...                |
| A      | X, Y, Z | Magnetic vector potential component                 | Yes       | `"MVP"`                | magnetic_vector_potential            |
| VEL    | X, Y, Z | Structural transient velocity                       | Yes       | `"V"`                  | velocity                             |
| VEL    | COMP    | Velocity components and sum                         | Yes       | `"VX","VY","VZ"`       | velocity_X, ...                      |
| ACC    | X, Y, Z | Structural transient acceleration                   | Yes       | `"A"`                  | acceleration                         |
| ACC    | COMP    | Acceleration components and sum                     | Yes       | `"AX","AY","AZ"`       | acceleration_X, ...                  |
| OMG    | X, Y, Z | Rotational velocity                                 | Yes       | `"OMG"`                | nodal_rotational_velocity            |
| OMG    | COMP    | Rotational velocity and vector sum                  | Yes       | `"OMGX","OMGY","OMGZ"` | nodal_rotational_velocity_X, ...     |
| DMG    | X, Y, Z | Rotational acceleration                             | Yes       | `"DMG"`                | nodal_rotational_acceleration        |
| DMG    | COMP    | Rotational acceleration and vector sum              | Yes       | `"DMGX","DMGY","DMGZ"` | nodal_rotational_acceleration_X, ... |

---