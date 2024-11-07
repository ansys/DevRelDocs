# Welcome

The MI Scripting Toolkit provides an interface for directly interacting with the Granta MI Service Layer.
Materials data in your Granta MI installation can be analyzed or transformed using Python, and the results imported
back into MI with full traceability, or extracted based on known record lists or search criteria.

The Streamlined API introduced in Version 2.0 builds on the existing Foundation API, providing wrappers for its
request-and-response based classes and resulting in a more intuitive user experience. Example Notebooks are provided
to help you get started, and all previous modules are still available and can be used alongside the new. For more
specific assistance, the documentation is searchable and arranged into groups of classes and functions associated
with Granta MI [Sessions](stream_api.md#session-level), [Databases & Tables](stream_api.md#dbtable-level), [Records](stream_api.md#record-level)
and [Attributes](stream_api.md#attribute-level).

More information on upgrading from earlier versions of the MI Scripting Toolkit can be found on the [Upgrading from earlier versions](upgrading.md#upgrading) page.

<a id="system-requirements"></a>

## System requirements

<a id="supported-operating-systems"></a>

### Supported operating systems:

* Microsoft Windows 10 or 11, 64-bit (for installation via pip)
* Linux (for installation via either pip or conda):
  * RHEL 8.6 and RHEL 9.3
  * Rocky 8.9 and Rocky 9.3
  * SUSE Enterprise 15 SP3
  * Ubuntu 20.04 and 22.04

The wheel provided for installation via pip on Linux is a ‘manylinux’ wheel and is compatible with
any manylinux 2.28-compliant Linux platform. This typically means that the platform must be based on
`glibc>=2.28`. The use of MI Scripting Toolkit on other Linux platforms that meet this threshold is
not supported or tested, but it is anticipated that it will function as expected.

For Linux platforms that do not meet this requirement, it is recommended to either use a compatible
docker container or the conda packages. Whilst the use of conda packages in other platforms is not
tested, it is anticipated that they will function as expected.

<a id="required-packages"></a>

### Required packages:

* Granta MI 2023 R1 or later, with Service Layer Interface 22/04
* Python 3.10 64-bit or later

Installation instructions and more detailed requirements (such as package dependencies, or shared
library names for Linux operating systems) can be found in the MI Scripting Toolkit Installation
Guide (provided with your installer from the Ansys Download Center, or downloaded from the
[Granta MI Documentation](https://ansyshelp.ansys.com/account/secured?returnurl=/Views/Secured/prod_page.html?pn=Granta%20MI&pid=Granta_MI&lang=en) ).
