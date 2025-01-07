# import_cad

<a id="ansys.meshing.prime.FileIO.import_cad"></a>

#### FileIO.import_cad(file_name, params)

Import a CAD file from disk.

Supported CAD file formats on Windows are:

\*.scdoc \*.scdocx \*.dsco \*.fmd \*.agdb \*.pmdb \*.meshdat \*.mechdat \*.dsdb \*.cmdb
\*.sat \*.sab \*.dwg \*.dxf \*.model \*.exp \*.CATPart \*.CATProduct \*.cgr \*.3dxml
\*.prt\* \*.asm\* \*.iges \*.igs \*.ipt \*.iam \*.jt \*.prt \*.x_t \*.x_b \*.par \*.psm
\*.asm \*.sldprt \*.sldasm \*.step \*.stp \*.stl \*.plmxml \*.tgf

Supported CAD file formats on Linux are:

\*.fmd \*.agdb \*.pmdb \*.meshdat \*.mechdat \*.dsdb \*.cmdb \*.sat \*.sab
\*.CATPart \*.CATProduct \*.iges \*.igs \*.jt \*.x_t \*.x_b \*.step \*.stp
\*.stl \*.plmxml \*.tgf

Refer **Reading and writing files** section in **User guide** for a
comprehensive list of supported formats.

* **Parameters:**
  **file_name**
  : Path to the CAD file on disk.

  **params**
  : Parameters for importing the CAD file.
* **Returns:**
  :

  [`ImportCadResults`](ansys.meshing.prime.ImportCadResults.md#ansys.meshing.prime.ImportCadResults)
  : Results from importing the CAD file.
* **Return type:**
  [`ImportCadResults`](ansys.meshing.prime.ImportCadResults.md#ansys.meshing.prime.ImportCadResults)

### Examples

```pycon
>>> import ansys.meshing.prime as prime
>>> prime_client = prime.launch_prime()
>>> model = prime_client.model
>>> file_io = prime.FileIO(model=model)
>>> params = prime.ImportCadParams(model=model)
>>> results = file_io.import_cad("/tmp/my_cad.x_t", params=params)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-fileio-import-cad"></a>

## Examples using FileIO.import_cad

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to use topology-based connection to generate conformal surface mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a mid-surfaced bracket for a structural analysis</div>
</div>
* [Mesh a mid-surfaced bracket for a structural analysis](../../examples/gallery_examples/gallery/01_bracket_scaffold.md#sphx-glr-examples-gallery-examples-gallery-01-bracket-scaffold-py)

<!-- thumbnail-parent-div-close --></div>
