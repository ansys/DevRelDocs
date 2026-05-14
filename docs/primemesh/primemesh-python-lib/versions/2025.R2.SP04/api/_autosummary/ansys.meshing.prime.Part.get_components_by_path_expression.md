# get_components_by_path_expression

<a id="ansys.meshing.prime.Part.get_components_by_path_expression"></a>

#### Part.get_components_by_path_expression(path_expression)

Gets component names with the provided path expression.

* **Parameters:**

  **path_expression**
  : Path expression to determine component names that should be returned.

* **Returns:**

  `List`[[`str`](https://docs.python.org/3.11/library/stdtypes.html#str)]
  : Returns a list of component names.

* **Return type:**

  [`List`](https://docs.python.org/3.11/library/typing.html#typing.List)[[`str`](https://docs.python.org/3.11/library/stdtypes.html#str)]

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> results = part.get_components_by_path_expression(path_expression)
```

<!-- !! processed by numpydoc !! -->
