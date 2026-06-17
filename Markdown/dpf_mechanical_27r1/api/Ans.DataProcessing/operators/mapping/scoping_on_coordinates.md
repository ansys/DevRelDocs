---
uid: Ans.DataProcessing.operators.mapping.scoping_on_coordinates
---

# *class* scoping_on_coordinates(coordinates: object = None, mesh: object = None, config: OperatorConfig = None)

Finds the Elemental scoping of a set of coordinates.

available inputs: `coordinates` (Field), `mesh` (MeshedRegion)

available outputs: `scoping` (Scoping)

**DPF Framework Reference:** [scoping_on_coordinates operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mapping/scoping_on_coordinates.md)

**Parameters:**

* **coordinates**
* **mesh**
* **config**

**Example:**

```python
op = scoping_on_coordinates()

op = scoping_on_coordinates(coordinates=my_coordinates,mesh=my_mesh)
```

## Inputs

### coordinates

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

## Outputs

### scoping

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
