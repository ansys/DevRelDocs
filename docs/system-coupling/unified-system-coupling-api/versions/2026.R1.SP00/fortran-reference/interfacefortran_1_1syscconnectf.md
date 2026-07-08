# Interface fortran::syscconnectf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 83)

Provide an interface to connect to System Coupling.



## Members

* [syscconnectf](interfacefortran_1_1syscconnectf.md#interfacefortran_1_1syscconnectf_1a556dda14cfe0b77561b9deff6e0c9cd5)
* [syscconnectparallelf](interfacefortran_1_1syscconnectf.md#interfacefortran_1_1syscconnectf_1a8d918399632b17dc8e13486058566120)

## Public functions

<a id="interfacefortran_1_1syscconnectf_1a556dda14cfe0b77561b9deff6e0c9cd5"></a>
### Function syscconnectf

![][public]


```fortran
type(syscerrorf) function syscconnectf(schost, scport, participantname, buildinformation)
```


Provide a function to establish connection to System Coupling.

A participant must have obtained the host and port information from System Coupling prior to calling this function (e.g. via an input argument when participant application was started).





If using a support MPI distribution, this function should be called on all ranks that belong to the <code>MPI_COMM_WORLD</code> communicator.






**Parameters**:

* **scHost**: Name of the host on which System Coupling is running.
* **scPort**: Port number on which System Coupling is listening for participant connections.
* **participantName**: Name of this participant (e.g. "MAPDL-1").
* **buildInformation**: Information about the build of this participant solver.


**Returns**:

a <code>SyscErrorF</code> type that can be checked for any errors.



**Parameters**:

* schostcharacter(*), intent(in)
* scportinteger(kind=4), intent(in)
* participantnamecharacter(*), intent(in)
* buildinformationcharacter(*), intent(in), optional

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

<a id="interfacefortran_1_1syscconnectf_1a8d918399632b17dc8e13486058566120"></a>
### Function syscconnectparallelf

![][public]


```fortran
type(syscerrorf) function syscconnectparallelf(schost, scport, participantname, communicator, buildinformation)
```


Provide a function to establish connection to System Coupling and pass a custom MPI communicator.

A participant must have obtained the host and port information from System Coupling prior to calling this function (e.g. via an input argument when participant application was started).






**Parameters**:

* **scHost**: Name of the host on which System Coupling is running.
* **scPort**: Port number on which System Coupling is listening for participant connections.
* **participantName**: Name of this participant (e.g. "MAPDL-1").
* **communicator**: MPI communicator on which all API calls are made.
* **buildInformation**: Information about the build of this participant solver.


**Returns**:

a <code>SyscErrorF</code> type that can be checked for any errors.



**Parameters**:

* schostcharacter(*), intent(in)
* scportinteger(kind=4), intent(in)
* participantnamecharacter(*), intent(in)
* communicatorinteger(kind=4), intent(in)
* buildinformationcharacter(*), intent(in), optional

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)