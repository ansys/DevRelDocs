# ExportFluentCaseParams

<a id="ansys.meshing.prime.ExportFluentCaseParams"></a>

### *class* ansys.meshing.prime.ExportFluentCaseParams(model=None, cff_format=None, json_data=None, \*\*kwargs)

Parameters to export fluent case file.

* **Parameters:**
  **model: Model**
  : Model to create a `ExportFluentCaseParams` object with default parameters.

  **cff_format: bool, optional**
  : Option to specify whether to export Fluent case file in CFF format (.cas.h5) or legacy format (.cas, .cas.gz).

  **json_data: dict, optional**
  : JSON dictionary to create a `ExportFluentCaseParams` object with provided parameters.

### Examples

```pycon
>>> export_fluent_case_params = prime.ExportFluentCaseParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| Name | Description |
| [`ExportFluentCaseParams.print_default`](ansys.meshing.prime.ExportFluentCaseParams.print_default.md#ansys.meshing.prime.ExportFluentCaseParams.print_default)()       | Print the default values of `ExportFluentCaseParams` object.   |
| [`ExportFluentCaseParams.set_default`](ansys.meshing.prime.ExportFluentCaseParams.set_default.md#ansys.meshing.prime.ExportFluentCaseParams.set_default)([cff_format]) | Set the default values of the `ExportFluentCaseParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| Name | Description |
| [`ExportFluentCaseParams.cff_format`](ansys.meshing.prime.ExportFluentCaseParams.cff_format.md#ansys.meshing.prime.ExportFluentCaseParams.cff_format)   | Option to specify whether to export Fluent case file in CFF format (.cas.h5) or legacy format (.cas, .cas.gz).   |

<a id="examples-using-exportfluentcaseparams"></a>

## Examples using ExportFluentCaseParams

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to create a contact patch for use with wrapping to avoid meshing into a narrow contact region between two objects.">  <div class="sphx-glr-thumbnail-title">Create a contact patch for wrapping between a wheel and ground interface</div>
</div>
* [Create a contact patch for wrapping between a wheel and ground interface](../../examples/gallery_examples/gallery/10_wheel_ground_contact_patch.md#sphx-glr-examples-gallery-examples-gallery-10-wheel-ground-contact-patch-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
