# Getting started

<a id="getting-started"></a>

<a id="introduction"></a>

## Introduction

MI Scripting Toolkit provides a clean and intuitive Python interface for working with Granta MI. The package provides:

* Searching for records in Granta MI using the same powerful criteria as in MI Explore.
* Importing and exporting most Granta MI attribute types as native Python objects, allowing data to be analyzed and
  reported on using the Python data analytics ecosystem, or provided to external systems.
* Exporting data to FEA material card formats.

The [Example notebooks](./../notebooks/index.md) contain fully documented example code covering these use cases, and can be used as starting
points for your own code. For more advanced users, the [API reference](./../api/index.md) provides more detailed guidance. Finally, the
[User guide](./../user_guide/index.md) contains additional information on the package structure, performance optimization, and authentication.

<a id="installation"></a>

## Installation

<!-- server_requirements -->

To use MI Scripting Toolkit 4.2, your Granta MI server must be running 2023 R1 or later, which includes Service Layer
Interface 22/04.

<!-- server_requirements_end -->

MI Scripting Toolkit can be installed using either the `pip` or `conda` package managers. See the links below for
detailed installation instructions and client requirements:

* [Installation with pip (recommended)](pip.md)
* [Installation with conda](conda.md)

<a id="quick-code"></a>

## Quick code

Once you’ve installed MI Scripting Toolkit using the installation instructions above, use the code below to connect to Granta MI,
find a record by name, and export an attribute value:

```default
>>> from GRANTA_MIScriptingToolkit import granta as mpy

>>> mi = mpy.connect("http://my.server.name/mi_servicelayer", autologon=True)
>>> database = mi.get_db("MI Training")
>>> record = database.search_for_records_by_name("Aluminum, 7075, wrought, T73")[0]
>>> attribute = record.attributes["Young's modulus"]

>>> print(f"'{record.name}' has a modulus of {attribute.value["low"]}-{attribute.value["high"]} {attribute.unit}")
'Aluminum, 7075, wrought, T73' has a modulus of 10-11 10^6 psi
```

For more examples see the [Example notebooks](./../notebooks/index.md).
