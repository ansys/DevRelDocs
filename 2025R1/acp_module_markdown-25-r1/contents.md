# The ACP scripting interface

Ansys Composite PrepPost (ACP) is a preprocessor that enables engineers to define and visualize layered composite structures. It lets you create complex layups by providing the ability to model thin structures as shells and advanced solid modeling capabilities, such as extruding shell models to solid models and mapping layup information onto existing solid models. The preprocessor uses a ply-based approach, meaning the layup definition is independent of small geometry and mesh changes. ACP can be used with many third-party applications through the Composite CAE H5 interface.

The ACP APIs (from the scripting interface) empower you to easily perform the following tasks:

* Automate layup definitions
* Parameterize the layup model
* Interact with third-party Python packages

To use the key features of ACP through its APIs, begin with [Getting started](getting_started_acp.md).

Table of contents:

* [Getting started](getting_started_acp.md)
  * [Basic scripting](getting_started_acp.md#basic-scripting)
  * [Advanced scripting](getting_started_acp.md#advanced-scripting)
* [The Python object tree](python_object_tree.md)
* [Classes](classes.md)
  * [Database class](db_database.md)
  * [Material classes](classes_materialdata.md)
  * [Model classes](classes_model.md)
  * [Solid model classes](classes_solid_model.md)
  * [Scene classes](classes_scene.md)
  * [Plot classes](classes_plot.md)
