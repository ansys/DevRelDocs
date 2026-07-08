# plot_iter

<a id="ansys.meshing.prime.graphics.PrimePlotter.plot_iter"></a>

#### PrimePlotter.plot_iter(plotting_list, name_filter=None, update=False, \*\*plotting_options)

Add a list of any type of object to the scene.

Allowed types are PyPrime models or any PyVista plottable object.

**Parameters:**

  **plotting_list**

  List of objects to plot.

  **name_filter**

  Regular expression with the desired name or names to include in the plotter.

  **update: bool, default: False**

  Whether to update the display.

  **\*\*plotting_options**

  Keyword arguments. For allowable keyword arguments, see the
    `Plotter.add_mesh` method.
    Options only applied to PyVista plottable objects.

**Return type:**

  [`None`](https://docs.python.org/3.11/library/constants.html#None)

<!-- !! processed by numpydoc !! -->
