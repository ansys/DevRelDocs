# PrimePlotter

<a id="ansys.meshing.prime.graphics.PrimePlotter"></a>

### *class* ansys.meshing.prime.graphics.PrimePlotter(use_trame=None, allow_picking=True)

Create a plotter for PyPrimeMesh models.

This plotter is a wrapper around the PyAnsys generic plotter
with additional functionality for PyPrimeMesh.

**Parameters:**

  **use_trame**

  Whether to use the Trame visualizer.

  **allow_picking**

  Whether to allow picking.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| [`PrimePlotter.add_model`](ansys.meshing.prime.graphics.PrimePlotter.add_model.md#ansys.meshing.prime.graphics.PrimePlotter.add_model)(model[, scope, update])            | Add a Prime model to the plotter.              |
| [`PrimePlotter.add_model_pd`](ansys.meshing.prime.graphics.PrimePlotter.add_model_pd.md#ansys.meshing.prime.graphics.PrimePlotter.add_model_pd)(model_pd)                 | Add a model to the plotter.                    |
| [`PrimePlotter.add_scope`](ansys.meshing.prime.graphics.PrimePlotter.add_scope.md#ansys.meshing.prime.graphics.PrimePlotter.add_scope)(model, scope[, update])            | Add a scope to the plotter.                    |
| [`PrimePlotter.get_scalar_colors`](ansys.meshing.prime.graphics.PrimePlotter.get_scalar_colors.md#ansys.meshing.prime.graphics.PrimePlotter.get_scalar_colors)(mesh_info) | Get the scalar colors for the mesh.            |
| [`PrimePlotter.plot`](ansys.meshing.prime.graphics.PrimePlotter.plot.md#ansys.meshing.prime.graphics.PrimePlotter.plot)(plottable_object[, scope, ...])                   | Add an object to the plotter.                  |
| [`PrimePlotter.plot_iter`](ansys.meshing.prime.graphics.PrimePlotter.plot_iter.md#ansys.meshing.prime.graphics.PrimePlotter.plot_iter)(plotting_list[, ...])              | Add a list of any type of object to the scene. |
| [`PrimePlotter.show`](ansys.meshing.prime.graphics.PrimePlotter.show.md#ansys.meshing.prime.graphics.PrimePlotter.show)([plottable_object, ...])                          | Show the plotted objects.                      |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`PrimePlotter.backend`](ansys.meshing.prime.graphics.PrimePlotter.backend.md#ansys.meshing.prime.graphics.PrimePlotter.backend)                      | Return the base plotter object.                                    |
| [`PrimePlotter.info_actor_map`](ansys.meshing.prime.graphics.PrimePlotter.info_actor_map.md#ansys.meshing.prime.graphics.PrimePlotter.info_actor_map) | Get the information actor map for the selected information widget. |
<!-- vale on -->