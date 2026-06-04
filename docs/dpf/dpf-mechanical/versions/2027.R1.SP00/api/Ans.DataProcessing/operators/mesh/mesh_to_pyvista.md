---
uid: Ans.DataProcessing.operators.mesh.mesh_to_pyvista
---

# *class* mesh_to_pyvista(coordinates: object = None, as_linear: object = None, mesh: object = None, vtk_updated: object = None, as_poly: object = None, config: OperatorConfig = None)

Export a MeshedRegion in the pyVista format.

available inputs: `coordinates` (Field) (optional), `as_linear` (bool) (optional), `mesh` (MeshedRegion), `vtk_updated` (bool) (optional), `as_poly` (bool) (optional)

available outputs: `nodes` (Field), `cells` (IList int  ,System.Collections.IEnumerable), `cell_types` (IList int  ,System.Collections.IEnumerable), `offsets` (IList int  ,System.Collections.IEnumerable)

**DPF Framework Reference:** [mesh_to_pyvista operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_to_pyvista.md)

**Parameters:**

* **coordinates**
* **as_linear**
* **mesh**
* **vtk_updated**
* **as_poly**
* **config**

**Example:**

```python
op = mesh_to_pyvista()

op = mesh_to_pyvista(coordinates=my_coordinates,as_linear=my_as_linear,mesh=my_mesh,vtk_updated=my_vtk_updated,as_poly=my_as_poly)
```

## Inputs

### coordinates

Node coordinates. If not set, the node coordinates of the mesh are employed.

**Type:** *LinkableInput*

### as_linear

Export a linear version of the mesh (quadratic surface elements do no include midside nodes). If not set, defaults to true.

**Type:** *LinkableInput*

### mesh

mesh to export in pyVista format

**Type:** *LinkableInput*

### vtk_updated

True if the VTK version employed by pyVista is > VTK 9. Default true.

**Type:** *LinkableInput*

### as_poly

Export elements as polyhedrons (cell-face-node representation). Default false.

**Type:** *LinkableInput*

## Outputs

### nodes

Node coordinates double vector

**Type:** *LinkableOutput*

### cells

Cell connectivity int vector

**Type:** *LinkableOutput*

### cell_types

Cell types property int vector

**Type:** *LinkableOutput*

### offsets

If vtk_updated=false, offsets int vector

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
