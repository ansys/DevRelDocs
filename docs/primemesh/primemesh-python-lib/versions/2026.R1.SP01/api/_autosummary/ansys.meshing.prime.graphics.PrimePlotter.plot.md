# plot

<a id="ansys.meshing.prime.graphics.PrimePlotter.plot"></a>

#### PrimePlotter.plot(plottable_object, scope=None, name_filter=None, update=False, \*\*plotting_options)

Add an object to the plotter.

Allowed types are PyPrime models or any PyVista plottable object.

**Parameters:**

  **plottable_object**

  Object to add to the plotter.

  **scope**

  Scope to plot.

  **name_filter**

  Regular expression with the desired name or names to include in the plotter.

  **update: bool, default: False**

  Whether to update the display. Required when any mesh is updated.

  **\*\*plotting_options**

  Keyword arguments. For allowable keyword arguments, see the
    `Plotter.add_mesh` method.
    Options only applied to PyVista plottable objects.

### Examples

```pycon
>>> import pyvista as pv
>>> from ansys.meshing.prime.graphics import PrimePlotter
>>> import ansys.meshing.prime as prime
>>> model = prime.launch_prime().model
>>> prime.lucid.Mesh(model).read(prime.examples.download_block_model_fmd())
>>> scope = prime.ScopeDefinition(model, label_expression="my_group")
>>> plotter = PrimePlotter()
>>> # pyvista sphere with plotting options added for opacity and color
>>> plotter.plot(plottable_object=pv.Sphere(radius=2.0), opacity=0.5, color="red")
>>> plotter.plot(plottable_object=model, scope=scope)
>>> plotter.show()
```

<!-- !! processed by numpydoc !! -->
