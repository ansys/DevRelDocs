# create_zones_from_labels

<a id="ansys.meshing.prime.lucid.Mesh.create_zones_from_labels"></a>

#### Mesh.create_zones_from_labels(label_expression=None, conversion_method=LabelToZoneMethod.SIMPLE)

Create zones from labels.

When exporting to various solvers, zones play a very important role.
Zones are where material properties and boundary conditions
can be set in respective solvers.

Zones allow downstream setting of boundary conditions or material properties.

Zone names in PyPrimeMesh are translated into equivalent concepts in the solver.
Currently, only one method is available to convert a zone to a label, and
only face zones are created.

The `create_zones_from_labels` method finds the entities by labels
and then adds them to zones with the same names as the labels.

If the `label_expression` parameter is not provided, all labels are
flattened to create zones. If overlaps occur, label names are combined, and
separate zones are created.

For example, if “LabelA” and “LabelB” have overlapping TopoFaces,
these zones are created: `"LabelA"`, `"LabelB"`, and
`"LabelA_LabelB"` for the overlap.

* **Parameters:**

  **label_expression**
  : Expression for the labels to convert to zones. The
    default is `None`.

  **conversion_method**
  : Method for converting the labels to zones. The default
    is `LabelToZoneMethod.SIMPLE`.

### Examples

```pycon
>>> from ansys.meshing.prime import lucid
>>> mesh_util = lucid.Mesh(model)
>>> mesh_util.create_zones_from_labels()
```

<!-- !! processed by numpydoc !! -->
