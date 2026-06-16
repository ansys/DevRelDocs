---
uid: Ans.DataProcessing.operators.mesh.mesh_to_pyvista
---

# *class* mesh_to_pyvista(mesh_scoping: object = None, coordinates: object = None, as_linear: object = None, mesh: object = None, vtk_updated: object = None, as_poly: object = None, as_modified_connectivity: object = None, config: OperatorConfig = None)

										Export a MeshedRegion to the pyVista format.

					The mesh type is auto-detected and controls which pins are respected:

					| Mesh has Elements | Mesh has Faces | Detected type | Pins `as_poly`, `as_modified_connectivity`, `as_linear` handled? |

					|-------------------|----------------|---------------|--------------------------------------------------------------------|

					| yes               | yes            | FVM Mesh      | No - the output is always built with the `as_poly=True` behavior.  |

					| no                | yes            | Face Mesh     | No - the output is always built with the `as_poly=False` behavior  |

					| yes               | no             | FEM Mesh      | Yes                                                                |

					For **FEM Mesh** only, the build behaviour depends on the input pins:

					| `as_poly`         | `as_modified_connectivity` | `vtk_updated` | `as_linear` | Notes                                                                        |

					|-------------------|----------------------------|---------------|-------------|------------------------------------------------------------------------------|

					| true              | any                        | false         | any         | `as_modified_connectivity` and `as_linear` ignored; offsets written to pin 3 |

					| true              | any                        | true          | any         | `as_modified_connectivity` and `as_linear` ignored; no pin 3                 |

					| false             | true                       | any           | true        | `vtk_updated` has no effect; quadratic elements are linearized               |

					| false             | true                       | any           | false       | `vtk_updated` has no effect; quadratic elements kept quadratic               |

					| false             | false                      | true          | true        | quadratic elements are linearized                                            |

					| false             | false                      | true          | false       | quadratic elements kept quadratic                                            |

					| false             | false                      | false         | true        | quadratic elements are linearized; offsets written to pin 3                  |

					| false             | false                      | false         | false       | quadratic elements kept quadratic; offsets written to pin 3                  |

					Output pins:



					| Pin | Content                                                             | Condition                                                    |

					|-----|---------------------------------------------------------------------|--------------------------------------------------------------|

					| 0   | Node coordinates                                                    | always                                                       |

					| 1   | Modified connectivity (no node-count prefix) 						| `as_modified_connectivity = true`                            |

					| 1   | Classic connectivity (legacy VTK flat format with node-count prefix)| `as_modified_connectivity = false`                           |

					| 2   | Cell types array                                                    | always 													   |

					| 3   | Legacy offsets array                                                | `vtk_updated = false` and `as_modified_connectivity = false` |

					| 4   | Offsets into modified connectivity (CSR-style, size = nCells+1)     | `as_modified_connectivity = true`                            |

available inputs: `mesh_scoping` (Scoping) (optional), `coordinates` (Field) (optional), `as_linear` (bool) (optional), `mesh` (MeshedRegion), `vtk_updated` (bool) (optional), `as_poly` (bool) (optional), `as_modified_connectivity` (bool) (optional)

available outputs: `nodes` (Field), `cells` (IList int  ,System.Collections.IEnumerable), `cell_types` (IList int  ,System.Collections.IEnumerable), `offsets` (IList int  ,System.Collections.IEnumerable), `offsets_concatenated_node_indices` (IList int  ,System.Collections.IEnumerable)

**DPF Framework Reference:** [mesh_to_pyvista operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_to_pyvista.md)

**Parameters:**

* **mesh_scoping**
* **coordinates**
* **as_linear**
* **mesh**
* **vtk_updated**
* **as_poly**
* **as_modified_connectivity**
* **config**

**Example:**

```python
op = mesh_to_pyvista()

op = mesh_to_pyvista(mesh_scoping=my_mesh_scoping,coordinates=my_coordinates,as_linear=my_as_linear,mesh=my_mesh,vtk_updated=my_vtk_updated,as_poly=my_as_poly,as_modified_connectivity=my_as_modified_connectivity)
```

## Inputs

### mesh_scoping

if mesh scoping is connected then the output vtk mesh is build on the subset of the input mesh scoped on it. If not set, the whole input mesh is converted to the final vtk mesh.

**Type:** *LinkableInput*

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

True if the VTK version employed by pyVista is > VTK 9. Default true.If false, an offset array to the cell connectivity is returned on pin 3.Incompatible with as_modified_connectivity=true.

**Type:** *LinkableInput*

### as_poly

Export elements as polyhedrons (cell-face-node representation). Default false.

**Type:** *LinkableInput*

### as_modified_connectivity

Returns VTK version>9 compatible connectivity representation consisting of an array of concatenated node indices for cells without node count headers and an offset array to it. Default false. Works only for FEM meshes with VTK version>9 and as poly=false.If as_linear is True, quadratic elements are linearized (dropping midside nodes)

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

### offsets_concatenated_node_indices

Offsets to concatenated cell connectivity without node count headers, type int vector

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
