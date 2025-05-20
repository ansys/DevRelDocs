# Introduction

The Ansys OpenTD application programming interface (API) enables automation of numerous tasks typically handled interactively via the Ansys Thermal Desktop™ software's graphical user interface (GUI). OpenTD API gives you the tools to programmatically create, query, edit and delete models, interact with end users, run and control solutions, and manipulate results. You can use any .NET language to interact with OpenTD API (C#, VB.NET, F#, etc.) or any system that can load .NET assemblies such as MATLAB or Python.

Regardless of how you interact with OpenTD API, you will need to have at least an intermediate understanding of .NET object-oriented programming. If you are starting from scratch, we recommend learning C#, since it is the language that we support. There are many excellent books and internet tutorials available for learning C#. For the remainder of this guide, we will assume you have at least an intermediate knowledge of object-oriented programming and C#, and some familiarity with the .NET global assembly cache (GAC).

OpenTD API was installed beginning with TD 6.1, which was released in early 2019. (Preliminary versions of OpenTD API were called "TD API". )

We will now introduce OpenTD API concepts and syntax in a series of example programs. The latter programs build on concepts introduced in the earlier ones, so we recommend you try them in order.

## Authors

A dedicated team of engineers developed and maintains OpenTD API:

- Matthew D. Garrett
- Timothy D. Panczak
- Mark J. Schmidt
- Dave Wilkins
- Michael A. Madden
