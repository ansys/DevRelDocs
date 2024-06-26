<!-- DO NOT EDIT. -->
<!-- THIS FILE WAS AUTOMATICALLY GENERATED BY SPHINX-GALLERY. -->
<!-- TO MAKE CHANGES, EDIT THE SOURCE PYTHON FILE: -->
<!-- "examples\gallery_examples\misc\example_template.py" -->
<!-- LINE NUMBERS ARE GIVEN BELOW. -->

<a id="sphx-glr-examples-gallery-examples-misc-example-template-py"></a>

<a id="ref-how-to-add-an-example-reference-key"></a>

# Adding a new example

**Summary**: This example demonstrates how to add new examples and serves as a template
that you can use in their creation.

A block comment must be included at the top of any new example. Each example
must have a reference tag in this format:

`.. _ref_my_example:`

The `.. _ref_` is necessary. Everything that follows is your reference tag.
Keep all references in snake case.

This section should give a brief overview of what the example is about and/or demonstrates.
The title should be changed to reflect the topic your example covers.

New examples should be added as Python scripts to:

`pyprimemesh/examples/gallery`

#### NOTE
Avoid creating new folders unless absolutely necessary. If in doubt, put the example
in the folder closest to what it is doing and its precise location can be advised
on in the pull request. If you *must* create a new folder, make sure to add a
`README.txt` file containing a reference, a title, and a single sentence describing the folder.
Otherwise, the new folder is ignored by Sphinx.

Example file names should be in the format:

`example_name.py`

#### NOTE
Supporting input files for the example, such as CAD or mesh file assets, must be either original
content or have appropriate licensing and ownership permissions from their respective owners. If
the input files are used within the example script provided they must be capable of running in
the CI pipeline. This means that only files that can be read using the native file formats and
CAD readers can be used in the scripted examples.

The recommended data formats to be included in the example are:

* .pmdat
* .fmd
* .scdoc or .dsco (supported on Windows OS)

Supporting input files should be added in:

[Github Example Data Repository](https://github.com/ansys/example-data/tree/master/pyprimemesh)

Referencing files as enum and creating download function in:

`pyprimemesh/examples.py`

Also adding download function to:

`pyprimemesh/examples/__init__.py`

After this preamble is the first code block:

<!-- GENERATED FROM PYTHON SOURCE LINES 62-79 -->
```default
import ansys.meshing.prime as prime
from ansys.meshing.prime.graphics import Graphics

# Start Ansys Prime Server instance and get client model
prime_client = prime.launch_prime()
model = prime_client.model

# Your code goes here...
mesh_util = prime.lucid.Mesh(model=model)

# For Windows OS users scdoc is also available:
# mixing_elbow = prime.examples.download_elbow_scdoc()
mixing_elbow = prime.examples.download_elbow_fmd()
mesh_util.read(mixing_elbow)
print(model)
```

```pytb
Traceback (most recent call last):
  File "D:\PyPrimeMesh\doc_test\pyprimemesh\examples\misc\example_template.py", line 67, in <module>
    prime_client = prime.launch_prime()
                   ^^^^^^^^^^^^^^^^^^^^
  File "D:\PyPrimeMesh\doc_test\pyprimemesh\src\ansys\meshing\prime\internals\launcher.py", line 242, in launch_prime
    return Client(server_process=server, ip=ip, port=port, timeout=timeout)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "D:\PyPrimeMesh\doc_test\pyprimemesh\src\ansys\meshing\prime\internals\client.py", line 66, in __init__
    self._comm = GRPCCommunicator(
                 ^^^^^^^^^^^^^^^^^
  File "D:\PyPrimeMesh\doc_test\pyprimemesh\src\ansys\meshing\prime\internals\grpc_communicator.py", line 89, in __init__
    raise ConnectionError(
ConnectionError: Failed to connect to Server in given timeout of 20.0 secs
```

<!-- GENERATED FROM PYTHON SOURCE LINES 80-99 -->

## Create sections

You can break up code blocks in titled sections that provide descriptive text.
When Sphinx is used to generate the documentation, this content is interpreted
as ReStructured Text (RST).

#### NOTE
You only need to create the Python (PY) files for the example. The
`sphinx-gallery` extension automatically generates the Jupyter
notebook, the HTML files for the documentation, and the demo script.

Sections can contain any information that you may have regarding the example,
such as step-by-step comments and information on motivations. In the generated
Jupyter notebook, this text is translated into a markdown cell.

As in Jupyter notebooks, if code is left unassigned at the end of a code block
(as with `model` in the previous block), the output is generated and
printed to the screen according to its `__repr__`.  Otherwise, you can use
`print()` to output the `__str__`.

<!-- GENERATED FROM PYTHON SOURCE LINES 99-108 -->
```default
# more code...
mesh_util.surface_mesh(min_size=5, max_size=20)
mesh_util.volume_mesh(
    volume_fill_type=prime.VolumeFillType.POLY,
    prism_surface_expression="* !inlet !outlet",
    prism_layers=3,
)
```

<!-- GENERATED FROM PYTHON SOURCE LINES 109-113 -->

## Render graphics

If you display graphics, the result is auto-generated and
rendered on the page:

<!-- GENERATED FROM PYTHON SOURCE LINES 113-116 -->
```default
display = Graphics(model)
display()
```

<!-- GENERATED FROM PYTHON SOURCE LINES 117-123 -->

## Make a pull request

Once your example is complete and you’ve verified builds locally, you can make a
pull request (PR).  Branches containing examples should be prefixed with doc/
as per the branch-naming conventions found in the [Contribute](../../../contributing/index.md#ref-index-contributing)
topic in the *PyAnsys Developer’s Guide*.

<!-- GENERATED FROM PYTHON SOURCE LINES 125-128 -->

## Stop Ansys Prime Server

<!-- GENERATED FROM PYTHON SOURCE LINES 128-129 -->
```default
prime_client.exit()
```

**Total running time of the script:** (0 minutes 20.085 seconds)

<a id="sphx-glr-download-examples-gallery-examples-misc-example-template-py"></a>
