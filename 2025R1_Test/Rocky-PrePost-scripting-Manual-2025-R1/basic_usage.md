# Introduction

Rocky’s PrePost Scripting provides lower-level access to Rocky’s data structures and simulation results.
The API can be used to configure and simulate a project from scratch, analyze and export simulation
results and perform computations that go beyond Rocky’s standard feature set.

This page provides a basic guide/tutorial of the PrePost Scripting from the point of view of setting up
your project and exploring simulation results. For a more complete reference to the classes available
in scripting see the [Class Reference](api_reference.md).

**_NOTE:_**

Not all Rocky scripting capabilities are currently documented in this scripting manual; there are
additional classes and functions available for some Rocky post-processing features that are
documented in the Rocky code itself. These can be accessed via the Python Shell.

**_NOTE:_**

If the project already has simulation results, then using these API methods to change parameters
that affect those results might cause errors. In these cases, it might be necessary to call
study.DeleteResults() before making changes. (See also the topic “I cannot change my setup
parameters during processing” in the Rocky User Manual.)
