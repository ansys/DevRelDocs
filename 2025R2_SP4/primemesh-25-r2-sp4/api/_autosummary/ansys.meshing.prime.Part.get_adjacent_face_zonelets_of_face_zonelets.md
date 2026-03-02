# get_adjacent_face_zonelets_of_face_zonelets

<a id="ansys.meshing.prime.Part.get_adjacent_face_zonelets_of_face_zonelets"></a>

#### Part.get_adjacent_face_zonelets_of_face_zonelets(face_zonelets)

Gets the adjacent facezonelets for the provided facezonelet ids.

* **Parameters:**

  **face_zonelets**
  : Ids of facezonelets.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Returns the list of adjacent facezonelet ids.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> face_zonelets_of_face_zonelet = part.get_adjacent_face_zonelets_of_face_zonelets(face_zonelets)
```

<!-- !! processed by numpydoc !! -->
