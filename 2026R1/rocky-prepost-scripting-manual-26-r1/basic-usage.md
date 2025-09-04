

# Introduction

Rocky’s PrePost Scripting provides lower-level access to Rocky’s data structures and simulation results.
The API can be used to configure and simulate a project from scratch, analyze and export simulation
results and perform computations that go beyond Rocky’s standard feature set.

This page provides a basic guide/tutorial of the PrePost Scripting from the point of view of setting up
your project and exploring simulation results. For a more complete reference to the classes available
in scripting see the [Class Reference](prepost-scripting-reference.md).

> **Note:** Not all Rocky scripting capabilities are currently documented in this scripting
> manual. There are additional classes and functions available for some Rocky post-processing
> features that are documented in the Rocky code itself. These can be accessed via the Python Shell.

---
> **Note:** If the project already has simulation results, then using these API methods to
> change parameters that affect those results might cause errors. In these cases, it might be
> necessary to call study.DeleteResults() before making changes. (See also the topic “I cannot
> change my setup parameters during processing” in the Rocky User Manual.)

---
> **Important:** Some input parameters are blocked in Rocky UI after saving a project for restart. These parameters can be changed by the user through PrePost Scripting (via script or Python Shell). However, changing blocked parameters trough PrePost Scripting is not advisable as it may cause problems in your simulation.
