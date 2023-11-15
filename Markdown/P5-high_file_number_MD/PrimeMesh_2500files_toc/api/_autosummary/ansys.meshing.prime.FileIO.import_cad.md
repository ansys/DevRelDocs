# ansys.meshing.prime.FileIO.import_cad

#### FileIO.import_cad(file_name, params)

Import a CAD file from disk.

Supported CAD file formats on Windows are:

\*.scdoc \*.fmd \*.agdb \*.pmdb \*.meshdat \*.mechdat \*.dsdb \*.cmdb \*.sat \*.sab
\*.dwg \*.dxf \*.model \*.exp \*.CATPart \*.CATProduct \*.cgr \*.3dxml \*.prt\* \*.asm\*
\*.iges \*.igs \*.ipt \*.iam \*.jt \*.prt \*.x_t \*.x_b \*.par \*.psm \*.asm \*.sldprt
\*.sldasm \*.step \*.stp \*.stl \*.plmxml \*.tgf

Supported CAD file formats on Linux are:

\*.fmd \*.agdb \*.pmdb \*.meshdat \*.mechdat \*.dsdb \*.cmdb \*.sat \*.sab
\*.CATPart \*.CATProduct \*.iges \*.igs \*.jt \*.x_t \*.x_b \*.step \*.stp
\*.stl \*.plmxml \*.tgf

See the documentation for a comprehensive list of supported formats.

* **Parameters:**
  **file_name**
  : Path to the CAD file on disk.

  **params**
  : Parameters for importing the CAD file.
* **Returns:**
  [`ImportCadResults`](ansys.meshing.prime.ImportCadResults.md#ansys.meshing.prime.ImportCadResults)
  : Results from importing the CAD file.
* **Return type:**
  [`ImportCadResults`](ansys.meshing.prime.ImportCadResults.md#ansys.meshing.prime.ImportCadResults)

### Examples

```pycon
>>> import ansys.meshing.prime as prime
>>> # connect client to server and get model from it
>>> client = prime.Client(ip="localhost", port=50060)
>>> model = client.model
>>> file_io = prime.FileIO(model=model)
>>> params = ImportCadParams(model=model)
>>> results = file_io.import_cad(
                "/tmp/my_cad.x_t", params=params)
```

<!-- !! processed by numpydoc !! -->
