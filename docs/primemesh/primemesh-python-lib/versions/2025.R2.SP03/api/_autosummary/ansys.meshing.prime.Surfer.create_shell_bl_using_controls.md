# create_shell_bl_using_controls

<a id="ansys.meshing.prime.Surfer.create_shell_bl_using_controls"></a>

#### Surfer.create_shell_bl_using_controls(part_id, shell_bl_control_ids, shell_bl_params)

Create ShellBL using data stored in controls.

* **Parameters:**

  **part_id**
  : Id of the part.

  **shell_bl_control_ids**
  : Ids of ShellBL control.

  **shell_bl_params**
  : Parameters related to ShellBL.

* **Returns:**

  [`CreateShellBLResults`](ansys.meshing.prime.CreateShellBLResults.md#ansys.meshing.prime.CreateShellBLResults)
  : Returns the CreateShellBLResults.

* **Return type:**

  [`CreateShellBLResults`](ansys.meshing.prime.CreateShellBLResults.md#ansys.meshing.prime.CreateShellBLResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> results = surfer.create_shell_bl_using_controls(part_id,
                                                    shell_bl_control_ids,
                                                    shell_bl_params)
```

<!-- !! processed by numpydoc !! -->
