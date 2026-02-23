# ShellBLControl

<a id="ansys.meshing.prime.ShellBLControl"></a>

### *class* ansys.meshing.prime.ShellBLControl(model, id, object_id, name)

ShellBLControl allows you to generate quad mesh on face zonelets.

ShellBLControl allows you to control generation of quad mesh on face zonelets. Controls include setting the edge scope, face scope and growth parameters.

* **Parameters:**

  **model**
  : Server model to create ShellBLControl object.

  **id**
  : Id of the ShellBLControl.

  **object_id**
  : Object id of the ShellBLControl.

  **name**
  : Name of the ShellBLControl.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [`ShellBLControl.get_edge_scope`](ansys.meshing.prime.ShellBLControl.get_edge_scope.md#ansys.meshing.prime.ShellBLControl.get_edge_scope)()                  | Gets the edge scope.                              |
| [`ShellBLControl.get_growth_params`](ansys.meshing.prime.ShellBLControl.get_growth_params.md#ansys.meshing.prime.ShellBLControl.get_growth_params)()         | Gets thin ShellBL parameters for ShellBL control. |
| [`ShellBLControl.get_surface_scope`](ansys.meshing.prime.ShellBLControl.get_surface_scope.md#ansys.meshing.prime.ShellBLControl.get_surface_scope)()         | Gets the surface scope.                           |
| [`ShellBLControl.set_edge_scope`](ansys.meshing.prime.ShellBLControl.set_edge_scope.md#ansys.meshing.prime.ShellBLControl.set_edge_scope)(entities)          | Sets the edge scope.                              |
| [`ShellBLControl.set_growth_params`](ansys.meshing.prime.ShellBLControl.set_growth_params.md#ansys.meshing.prime.ShellBLControl.set_growth_params)(params)   | Sets growth parameters for ShellBL control.       |
| [`ShellBLControl.set_surface_scope`](ansys.meshing.prime.ShellBLControl.set_surface_scope.md#ansys.meshing.prime.ShellBLControl.set_surface_scope)(entities) | Sets the face zonelet scope.                      |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------|---------------------------------|
| [`ShellBLControl.id`](ansys.meshing.prime.ShellBLControl.id.md#ansys.meshing.prime.ShellBLControl.id)       | Get the id of ShellBLControl.   |
| [`ShellBLControl.name`](ansys.meshing.prime.ShellBLControl.name.md#ansys.meshing.prime.ShellBLControl.name) | Get the name of ShellBLControl. |
<!-- vale on -->