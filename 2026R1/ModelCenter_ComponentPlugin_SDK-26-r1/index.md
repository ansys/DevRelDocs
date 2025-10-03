# Introduction

Welcome to the ModelCenter Component Plug-In Getting Started Guide. This document intends to help Plug-In developers who would like to extend the capabilities of ModelCenter by adding connections to external data and analysis tools like Excel and Databases.

To obtain access to the ModelCenter Component Plug-In SDK, please contact Ansys ModelCenter support.

## Definitions

**Builder UI** – The UI portion of the Plug-In which is responsible for allowing a user to edit a PACZ.

**Component** – A workflow element that has inputs, some black box execution, and produces outputs. Often used interchangeably with the term Analysis.

**Component Plug-In** – A Plug-In to the ModelCenter framework that implements a Runner and optionally a Builder UI.

**Driver** – A workflow element that "drives" or controls other sub-workflows. If this is what you want to do, you are in the wrong document.

**PACZ** – The standard file format for a harnessed external component. The PACZ may be stored compressed as a zip, or uncompressed as a set of files in a directory. The PACZ contains a common metadata definition, component.pacj, which sufficiently describes the instance so that it can be generically managed in an "app store" and jobs can be submitted without needing to instantiate the required plug-in.

**Runner** – The non-UI portion of the Plug-In which is responsible for batch execution.

**Workflow** – An automated set of Components, Drivers, and other control elements that together compute some type of engineering simulation.

