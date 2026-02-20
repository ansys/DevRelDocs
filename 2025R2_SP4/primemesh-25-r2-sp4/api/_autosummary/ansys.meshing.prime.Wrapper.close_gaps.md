# close_gaps

<a id="ansys.meshing.prime.Wrapper.close_gaps"></a>

#### Wrapper.close_gaps(scope, params)

Close gaps.

Closing gaps creates patching surfaces within the face zonelets specified
by scope using gap size.

* **Parameters:**

  **scope**
  : Scope definition of the face zonelets.

  **params**
  : Wrapper providing close gap parameters.

* **Returns:**

  [`WrapperCloseGapsResult`](ansys.meshing.prime.WrapperCloseGapsResult.md#ansys.meshing.prime.WrapperCloseGapsResult)
  : Results from the wrapper for closing gaps.

* **Return type:**

  [`WrapperCloseGapsResult`](ansys.meshing.prime.WrapperCloseGapsResult.md#ansys.meshing.prime.WrapperCloseGapsResult)

### Examples

```pycon
>>> result = wrapper.close_gaps(scope, params)
```

<!-- !! processed by numpydoc !! -->
