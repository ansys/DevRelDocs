# Welcome

The MI Scripting Toolkit for Python provides an interface for directly interacting with the Granta MI Service Layer.
Materials data in your Granta MI installation can be analyzed or transformed using Python, and the results imported
back into MI with full traceability, or extracted based on known record lists or search criteria.

The Streamlined API introduced in Version 2.0 builds on the existing Foundation API, providing wrappers for its
request-and-response based classes and resulting in a more intuitive user experience. Example Notebooks are provided
to help you get started, and all previous modules are still available and can be used alongside the new. For more
specific assistance, the documentation is searchable and arranged into groups of classes and functions associated
with Granta MI [Sessions](stream_api.md#session-level), [Databases & Tables](stream_api.md#dbtable-level), [Records](stream_api.md#record-level)
and [Attributes](stream_api.md#attribute-level).

More information on upgrading from earlier versions of the MI Scripting Toolkit can be found on the [Upgrading from earlier versions](upgrading.md#upgrading) page.

## System requirements

### Compatible operating system:

* Microsoft Windows 10 or 11, 64-bit (for installation via pip)
* Linux (for installation via either pip or conda)
  * CentOS 7
  * Debian 9
  * RHEL 7
  * SUSE Enterprise 15 SP3+
  * Ubuntu 20.04

For other Linux platforms, it is recommended to either use a compatible docker container or the conda packages.
Whilst the use of conda packages in other platforms is not tested, it is anticipated that they will function as
expected.

#### Note
Scripting Toolkit v3.3 is the last release to support CentOS, and Debian. In addition, in the next release RHEL 7
support will be upgraded to RHEL 8.5 or higher.

### Required packages:

* Granta MI 2023 R1 or later, with Service Layer Interface 22/04
* Python 3.8 64-bit or later

Installation instructions and more detailed requirements (such as package dependencies, or shared library names for Linux operating systems) can be found in the Installation Guide (provided with your installer from the Ansys Download Center, or downloaded from the [Granta MI Documentation Library](https://grantadesign.com/industry/support/granta-mi/documentation) ).
