# plot_dependencies

<a id="compolyx.Model.plot_dependencies"></a>

## Model.plot_dependencies(path=None, parent=None, levels=3)

Generates a graph with all dependencies. The output is a .dot, .png, and .pdf file.

### Parameters
  - path: File path without file extension.
  - parent: Parent object.
  - levels: Depth levels to look for children.
### Output
  A .dot file which can be opened with Graphviz.
### Usage
  ```pycon
  >>> model.plot_dependencies(r'C:\tmp\hull_dependencies', model.element_sets['HULL'], 3)
  ```
