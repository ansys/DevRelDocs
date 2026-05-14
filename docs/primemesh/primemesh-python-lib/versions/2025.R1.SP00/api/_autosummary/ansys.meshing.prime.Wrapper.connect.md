# connect

<a id="ansys.meshing.prime.Wrapper.connect"></a>

#### Wrapper.connect(wrapper_part, target_labels, source_parts, source_labels)

Perform a label-controlled connection.

This method performs a label-controlled connection of wrapper part face zonelets to
face zonelets of source parts.

* **Parameters:**

  **wrapper_part**
  : Wrapper part.

  **target_labels**
  : List of target zonelet labels to connect.

  **source_parts**
  : List of source parts to connect with.

  **source_labels**
  : List of source zonelet labels to connect.

### Examples

```pycon
>>> wrapper.connect(wrapper_part, target_labels, source_parts, source_labels)
```

<!-- !! processed by numpydoc !! -->
