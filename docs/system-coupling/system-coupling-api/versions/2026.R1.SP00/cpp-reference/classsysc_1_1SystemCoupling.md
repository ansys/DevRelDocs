---
title: "Class sysc::SystemCoupling"
---

![][C++]
![][public]

**Definition**: `SystemCoupling.hpp` (line 47)

Provide the main class for interacting with the System Coupling participant library.

For co-simulation, this class maintains the socket connection to the System Coupling solver. The coupling participant will need to provide host and port information for existing System Coupling server, as well as the name of this coupling participant.





For mapping, an instance of this class should be created to perform mapping.





There should only be one instance of this System Coupling class.

## Members

* [addCouplingInterface](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [addCouplingInterface](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [addInputParameter](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [addIntegerAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [addOutputParameter](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [addRealAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [addRegion](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [addStringAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [checkMeshValidity](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [checkMeshValidity](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [completeCouplingSetup](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [completeCouplingSetup](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [completeSetup](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [disconnect](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [doIteration](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [doTimeStep](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [fatalError](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getAddedCouplingInterface](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getAddedRegion](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getCurrentTimeStep](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getInputParameter](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getIntegerAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getIntegerAttributeValue](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getNumCouplingInterfaces](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getNumInputParameters](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getNumIntegerAttributes](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getNumOutputParameters](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getNumRealAttributes](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getNumRegions](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getNumStringAttributes](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getOutputParameter](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getParameterValue](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getRealAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getRealAttributeValue](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getRegion](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getSetupInfo](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getSolutionControl](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getStringAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [getStringAttributeValue](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [initializeAnalysis](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [operator=](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [operator=](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerDoesTargetDataExist](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerDoesTargetDataExist](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerInputComplexScalarDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerInputComplexScalarDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerInputComplexVectorDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerInputComplexVectorDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerInputScalarDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerInputScalarDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerInputScalarDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerInputScalarVariableAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerInputVectorDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerInputVectorDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerInputVectorDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerInputVectorVariableAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerOutputComplexScalarDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerOutputComplexScalarDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerOutputComplexVectorDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerOutputComplexVectorDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerOutputScalarDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerOutputScalarDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerOutputScalarDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerOutputScalarVariableAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerOutputVectorDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerOutputVectorDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerOutputVectorDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerOutputVectorVariableAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerPointCloudAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerPointCloudAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerPointCloudAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerRestartPointCreation](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerSurfaceMeshAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerSurfaceMeshAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerSurfaceMeshAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerTargetDataCreation](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerTargetDataCreation](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerVolumeMeshAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerVolumeMeshAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerVolumeMeshAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [registerZoneCountAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [setParameterValue](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [updateInputs](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [updateOutputs](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [writeResults](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [writeSetupFile](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)
* [~SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling)

## Public functions

<a id="classsysc_1_1SystemCoupling_1aa85c07a47dbf3cccce8049e8c8fe86cc"></a>
### Function SystemCoupling

![][public]

```cpp
sysc::SystemCoupling::SystemCoupling()
```

Provide a (default) constructor for the [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling) class for non-cosimulation mode.

This is a default constructor that will initialize the participant library in standalone (non-cosimulation) mode.





When running in parallel MPI environment, the parallel communication within the participant library will use MPI_COMM_WORLD communicator.



**Return type**: 

<a id="classsysc_1_1SystemCoupling_1a0381ca6fb1dcf81258ada4e95c354ab9"></a>
### Function SystemCoupling

![][public]

```cpp
sysc::SystemCoupling::SystemCoupling(std::size_t mpiCommunicator)
```

Provide a constructor for the [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling) class for non-cosimulation mode with a custom MPI communicator.

**Parameters**:

* **mpiCommunicator**: MPI communicator cast to std::size_t.

This will initialize the participant library in standalone mode and will use the provided MPI communicator for all parallel communication.



**Parameters**:

* std::size_t **mpiCommunicator**

**Return type**: 

<a id="classsysc_1_1SystemCoupling_1a9f7e98bb312a412ae7bc81f0a49afa1a"></a>
### Function SystemCoupling

![][public]

```cpp
sysc::SystemCoupling::SystemCoupling(const ParticipantInfo &participantInfo)
```

Provide a constructor for the [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling) class with a custom struct representing the default input parameters.

**Parameters**:

* **participantInfo**: The struct containing the attributes needed to connect to System Coupling: scHost, scPort, participantName, etc.



**Parameters**:

* const [ParticipantInfo](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ParticipantInfo) & **participantInfo**

**Return type**: 

<a id="classsysc_1_1SystemCoupling_1a28570e0829c5d0c2177d1b25b55b2da0"></a>
### Function SystemCoupling

![][public]

```cpp
sysc::SystemCoupling::SystemCoupling(const ParticipantInfo &participantInfo, std::size_t mpiCommunicator)
```

Provide a constructor for the [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling) class with an mpiCommunicator object set to non default.

**Parameters**:

* **participantInfo**: The struct containing the attributes needed to connect to System Coupling: scHost, scPort, participantName, etc.
* **mpiCommunicator**: MPI communicator cast to std::size_t.



**Parameters**:

* const [ParticipantInfo](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ParticipantInfo) & **participantInfo**
* std::size_t **mpiCommunicator**

**Return type**: 

<a id="classsysc_1_1SystemCoupling_1a68a64fa8efe499cc189979d44624d0f7"></a>
### Function SystemCoupling

![][public]

```cpp
sysc::SystemCoupling::SystemCoupling(const std::string &scHost, unsigned short scPort, const std::string &participantName, const std::string &buildInformation="Unknown")
```

Provide a constructor for the [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling) class for cosimulation mode.

Initializes the participant library in cosimulation mode. It establishes the connection to the System Coupling solver.





The participant solver must have obtained the host and port information from System Coupling prior to creating this object (e.g. via an input argument when participant application was started). Copy constructor and assignment operators are disabled to avoid copying the created object.






**Parameters**:

* **scHost**: Name of the host on which System Coupling is running.
* **scPort**: Port number on which System Coupling is listening for participant connections.
* **participantName**: Name of this participant (e.g. "MAPDL-1")
* **buildInformation**: Information about the build of this participant solver. This parameter is optional - default is "Unknown".



**Parameters**:

* const std::string & **scHost**
* unsigned short **scPort**
* const std::string & **participantName**
* const std::string & **buildInformation** = "Unknown" 

**Return type**: 

<a id="classsysc_1_1SystemCoupling_1a197f13843de7afcd2f84b85eaffa11ad"></a>
### Function SystemCoupling

![][public]

```cpp
sysc::SystemCoupling::SystemCoupling(const std::string &scHost, unsigned short scPort, const std::string &participantName, std::size_t mpiCommunicator, const std::string &buildInformation)
```

Provide a constructor for the [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling) class for cosimulation mode with a custom MPI communicator.

This constructor works the same way as the one above (see above), but it takes in one additional argument, which is the MPI communicator, cast as std::size_t.






**Parameters**:

* **scHost**: Name of the host on which System Coupling is running.
* **scPort**: Port number on which System Coupling is listening for participant connections.
* **participantName**: Name of this participant (e.g. "MAPDL-1")
* **mpiCommunicator**: MPI communicator cast to std::size_t.
* **buildInformation**: Information about the build of this participant solver. This parameter is optional - default is "Unknown".



**Parameters**:

* const std::string & **scHost**
* unsigned short **scPort**
* const std::string & **participantName**
* std::size_t **mpiCommunicator**
* const std::string & **buildInformation**

**Return type**: 

<a id="classsysc_1_1SystemCoupling_1ad17cf746d960d4911bac179e9bc733bc"></a>
### Function ~SystemCoupling

![][public]

```cpp
sysc::SystemCoupling::~SystemCoupling()
```







**Return type**: 

<a id="classsysc_1_1SystemCoupling_1a204a3a8145961af7bc28d2cfd58a4358"></a>
### Function completeSetup

![][public]

```cpp
void sysc::SystemCoupling::completeSetup(const sysc::SetupInfo &setupInfo)
```

Provide a function to notify System Coupling that setup can be completed.

After this function is called, coupled analysis setup can no longer be updated, i.e. regions and variables cannot be changed. Participant should also pass in [sysc::SetupInfo](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1SetupInfo) struct to provide additional information about the setup, such as whether steady or transient analysis is to be performed.





Once the setup is complete, any subsequent call to complete the setup will have no effect.



**Parameters**:

* const [sysc::SetupInfo](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1SetupInfo) & **setupInfo**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1ab47a6eaf83eae538e17290a5c2582b8e"></a>
### Function initializeAnalysis

![][public]

```cpp
void sysc::SystemCoupling::initializeAnalysis()
```

Provide a function to notify System Coupling that analysis initialization can be completed.

This function must be called after registering mesh and variable data access and prior to entering the coupled analysis loop.





If this function is called before the coupled analysis is complete, it will automatically complete the coupled analysis and assume steady analysis type.



**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a6ab306d83db2610887c8fb18c554eba6"></a>
### Function getCurrentTimeStep

![][public]

```cpp
sysc::TimeStep sysc::SystemCoupling::getCurrentTimeStep()
```

Provide a function to get current time step.

**Returns**:

Returns a time step struct, which contains time step number, start time, and time step size for the current coupling time step.

A default value (time step number 0, start time 0.0, time step size 0.0) is returned if this function is called outside the coupled analysis loop or if the analysis is steady.



**Return type**: [sysc::TimeStep](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1TimeStep)

<a id="classsysc_1_1SystemCoupling_1a0cb8cd28d752af2cfd0b4d27511ea306"></a>
### Function doIteration

![][public]

```cpp
bool sysc::SystemCoupling::doIteration()
```

Provide a function to check whether to do a coupling iteration.

This function returns true if another coupling iteration is required, otherwise it returns false.



**Return type**: bool

<a id="classsysc_1_1SystemCoupling_1a285a15756651ef5027191ca69dfab7e0"></a>
### Function doTimeStep

![][public]

```cpp
bool sysc::SystemCoupling::doTimeStep()
```

Provide a function to check whether to do a coupling time step.

This function returns true if another coupling time step is required, otherwise it returns false.





This function should be called to check if another coupling time step should be done. If the previous coupling time step is finished and another time step should be performed, then calling this function will tell System Coupling that the coupling participant is going to advance to the next time step (i.e. calling [doTimeStep()](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling) will cause [doIteration()](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling) to change from returning false to returning true, under the conditions described above).





This function only makes sense for transient analysis. It will always return false for steady analysis.



**Return type**: bool

<a id="classsysc_1_1SystemCoupling_1a9c768f6965f14e8ab3308c7df4144da7"></a>
### Function updateInputs

![][public]

```cpp
void sysc::SystemCoupling::updateInputs()
```

Provide a function to update the participants input variables.

Solution data for all input variables will be updated. Depending on the defined interfaces, data will be transferred from another coupling participant solver, or from the opposite side of the same-participant coupling interface.





When doing cosimulation, this function must be called from inside the coupled analysis loop. It tells System Coupling that the participant is about to begin its solver iterations. All input variable data will be up-to-date after returning from this function. If any local coupling interfaces are defined, all corresponding input variable data will also be updated.





When doing same-participant mapping only (without cosimulation), this function should be called whenever input data needs to be brought up-to-date.



**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a468e5e084477cdaca2adee6c50edf7e9"></a>
### Function updateOutputs

![][public]

```cpp
void sysc::SystemCoupling::updateOutputs(ConvergenceStatus status)
```

Provide a function to update the participants output variables.

This function must be called from inside the coupled analysis loop. It tells System Coupling that the participant has finished performing its solver iterations.






**Parameters**:

* **status**: Status of participant solver after its solver iteration(s). See ConvergenceStatus for details



**Parameters**:

* [ConvergenceStatus](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **status**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a4f15e4d02257cde7717b9fffae806311"></a>
### Function disconnect

![][public]

```cpp
void sysc::SystemCoupling::disconnect()
```

Provide a function to end the analysis and disconnect from System Coupling.





**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a9d5c081a6a43f86de3aef366d6527730"></a>
### Function fatalError

![][public]

```cpp
void sysc::SystemCoupling::fatalError(const std::string &errorMessage)
```

Provide a function to notify System Coupling about a fatal error.





**Parameters**:

* const std::string & **errorMessage**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1afd8d4beebb3a46d80c9f9fcddc385db2"></a>
### Function addRegion

![][public]

```cpp
void sysc::SystemCoupling::addRegion(const Region &region)
```

Provide a function to add a region that could be used in a coupled analysis.

**Parameters**:

* **region**: - [Region](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1Region) to be added.

If this region has already been added, then this call will have no effect.





If a different region with the same has already been added, then a runtime error will be thrown.





If the region name contains invalid characters, then a runtime error will be thrown.



**Parameters**:

* const [Region](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1Region) & **region**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a141ea7f0524e5e8dc7e051408477e9cb"></a>
### Function addInputParameter

![][public]

```cpp
void sysc::SystemCoupling::addInputParameter(Parameter parameter)
```

Provide a method to add an input parameter that could be used in a coupled analysis.

If this parameter has already been added as an input solver parameter, then this call will have no effect.





If a different parameter with the same name has already been added as an input parameter, then a runtime error will be thrown.





If a parameter with the same name has already been added as an output parameter, then a runtime error will be thrown.





If the parameter name contains invalid characters, a runtime error will be thrown.






**Parameters**:

* **parameter**: [Parameter](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1Parameter) whose values are provided by System Coupling and consumed by the participant.



**Parameters**:

* [Parameter](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1Parameter) **parameter**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1aefc367f59f86420aaaa425d7d24b071c"></a>
### Function addOutputParameter

![][public]

```cpp
void sysc::SystemCoupling::addOutputParameter(Parameter parameter)
```

Provide a method to add an output parameter that could be used in a coupled analysis.

If this parameter has already been added as an output solver parameter, then this call will have no effect.





If a different parameter with the same name has already been added as an output parameter, then a runtime error will be thrown.





If a parameter with the same name has already been added as an input parameter, then a runtime error will be thrown.





If the parameter name contains invalid characters, a runtime error will be thrown.






**Parameters**:

* **parameter**: [Parameter](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1Parameter) whose values are provided by System Coupling and consumed by the participant.



**Parameters**:

* [Parameter](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1Parameter) **parameter**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1ab298f64d5d97a11f59650605c062d38a"></a>
### Function addRealAttribute

![][public]

```cpp
void sysc::SystemCoupling::addRealAttribute(const RealAttribute &realAttribute)
```

Provide a method to add a real attribute that could be used in a coupled analysis.

If this attribute has already been added as a real attribute, then this call will have no effect.





If a different real attribute with the same name has already been added as a real attribute, then a runtime error will be thrown.





If the real attribute name contains invalid characters, a runtime error will be thrown.






**Parameters**:

* **realAttribute**: real attribute whose values are provided by System Coupling and consumed by the participant.



**Parameters**:

* const [RealAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1RealAttribute) & **realAttribute**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a85e574ea482ec764a16b7ee64beda3de"></a>
### Function addIntegerAttribute

![][public]

```cpp
void sysc::SystemCoupling::addIntegerAttribute(const IntegerAttribute &integerAttribute)
```

Provide a method to add an integer attribute that could be used in a coupled analysis.

If this attribute has already been added as an integer attribute, then this call will have no effect.





If a different integer attribute with the same name has already been added as an integer attribute, then a runtime error will be thrown.





If the integer attribute name contains invalid characters, a runtime error will be thrown.






**Parameters**:

* **integerAttribute**: integer attribute whose values are provided by System Coupling and consumed by the participant.



**Parameters**:

* const [IntegerAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1IntegerAttribute) & **integerAttribute**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1afe7e2a632aed3933b59dae2d0fbf8cb1"></a>
### Function addStringAttribute

![][public]

```cpp
void sysc::SystemCoupling::addStringAttribute(const StringAttribute &stringAttribute)
```

Provide a method to add a string attribute that could be used in a coupled analysis.

If this attribute has already been added as an string attribute, then this call will have no effect.





If a different string attribute with the same name has already been added as an string attribute, then a runtime error will be thrown.





If the string attribute name contains invalid characters, a runtime error will be thrown.






**Parameters**:

* **stringAttribute**: string attribute whose values are provided by System Coupling and consumed by the participant.



**Parameters**:

* const [StringAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1StringAttribute) & **stringAttribute**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1ae4c93f4502c9df950fddddab3aab5eec"></a>
### Function addCouplingInterface

![][public]

```cpp
void sysc::SystemCoupling::addCouplingInterface(const CouplingInterface &couplingInterface)
```

Provide a function to add a coupling interface.

**Parameters**:

* **couplingInterface**: - coupling interface to be added.

Data transfers will be automatically created. If a variable is defined as an output on all regions on one side of the interface and as an input on all regions on the opposite side of the interface, then the data transfer will be added for this variable.





If this coupling interface has already been added, then this call will have no effect.





If a different coupling interface with the same has already been added, then a runtime error will be thrown.





If the coupling interface name contains invalid characters, then a runtime error will be thrown.





See [sysc::CouplingInterface](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1CouplingInterface) for more details.



**Parameters**:

* const [CouplingInterface](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1CouplingInterface) & **couplingInterface**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1ae1f7fe88e678c07cde61acff8742b608"></a>
### Function addCouplingInterface

![][public]

```cpp
void sysc::SystemCoupling::addCouplingInterface(const CouplingInterface &couplingInterface, bool autoGenerateTransfers)
```

Provide a function to add a coupling interface.

**Parameters**:

* **couplingInterface**: - coupling interface to be added.
* **autoGenerateTransfers**: - flag whether to automatically create data transfers.

If this coupling interface has already been added, then this call will have no effect.





If a different coupling interface with the same has already been added, then a runtime error will be thrown.





If the coupling interface name contains invalid characters, then a runtime error will be thrown.





If autoGenerateTransfers is true, then the data transfers are generated automatically according to the following rule: if a variable is defined as an output on all regions on one side of the interface and as an input on all regions on the opposite side of the interface, then the data transfer will be added for this variable.





See [sysc::CouplingInterface](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1CouplingInterface) for more details.



**Parameters**:

* const [CouplingInterface](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1CouplingInterface) & **couplingInterface**
* bool **autoGenerateTransfers**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1aefb34bf071d430de2dd4f1be1dc74e84"></a>
### Function getParameterValue

![][public]

```cpp
double sysc::SystemCoupling::getParameterValue(const ParameterName &parameterName)
```

Provide a function to get a [Parameter](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1Parameter) value.

**Parameters**:

* **parameterName**: - name of the parameter.



**Parameters**:

* const [ParameterName](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) & **parameterName**

**Return type**: double

<a id="classsysc_1_1SystemCoupling_1aca0700c21a60e92e3b67c0e50a575133"></a>
### Function setParameterValue

![][public]

```cpp
void sysc::SystemCoupling::setParameterValue(const ParameterName &parameterName, double value)
```

Provide a function to set a [Parameter](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1Parameter) value.

**Parameters**:

* **parameterName**: - name of the parameter.
* **value**: - value of the parameter.



**Parameters**:

* const [ParameterName](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) & **parameterName**
* double **value**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a8ec3e49911120cd590ec285456de40ac"></a>
### Function getRealAttributeValue

![][public]

```cpp
double sysc::SystemCoupling::getRealAttributeValue(const AttributeName &attributeName)
```

Provide a function to get a [RealAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1RealAttribute) value.

**Parameters**:

* **attributeName**: - name of the real attribute.



**Parameters**:

* const [AttributeName](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) & **attributeName**

**Return type**: double

<a id="classsysc_1_1SystemCoupling_1a4c59f4d91ed51f811b9a8af91129250e"></a>
### Function getIntegerAttributeValue

![][public]

```cpp
int64_t sysc::SystemCoupling::getIntegerAttributeValue(const AttributeName &attributeName)
```

Provide a function to get an [IntegerAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1IntegerAttribute) value.

**Parameters**:

* **attributeName**: - name of the integer attribute.



**Parameters**:

* const [AttributeName](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) & **attributeName**

**Return type**: int64_t

<a id="classsysc_1_1SystemCoupling_1a5fc4695ae6b5bb6e7cd706cb976d3f40"></a>
### Function getStringAttributeValue

![][public]

```cpp
std::string sysc::SystemCoupling::getStringAttributeValue(const AttributeName &attributeName)
```

Provide a function to get a [StringAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1StringAttribute) value.

**Parameters**:

* **attributeName**: - name of the string attribute.



**Parameters**:

* const [AttributeName](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) & **attributeName**

**Return type**: std::string

<a id="classsysc_1_1SystemCoupling_1a60439772708be217b06f07f8554d5abd"></a>
### Function registerInputScalarDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerInputScalarDataAccess(InputScalarDataAccess *dataAccess)
```

Provide a function to register input scalar data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to sysc::InputScalarDataAccess prototype.



**Parameters**:

* [InputScalarDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a61c7be7c0e7ab939f27b49b015fbd8d0"></a>
### Function registerInputScalarDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerInputScalarDataAccess(OpaqueDataAccess opaqueDataAccess, InputScalarDataAccessWithPointer *dataAccess)
```

Provide a function to register input scalar data access.

**Parameters**:

* **opaqueDataAccess**: - a pointer that is passed into the callback function.
* **dataAccess**: - a pointer to the function that conforms to sysc::InputScalarDataAccessWithPointer prototype.



**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [InputScalarDataAccessWithPointer](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1aac58f07f6eaa259959f39eefa3a48275"></a>
### Function registerInputVectorDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerInputVectorDataAccess(InputVectorDataAccess *dataAccess)
```

Provide a function to register input vector data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to sysc::InputVectorDataAccess function prototype.



**Parameters**:

* [InputVectorDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a3c27f87e2afbd4fc4cd1a3936af119a4"></a>
### Function registerInputVectorDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerInputVectorDataAccess(OpaqueDataAccess opaqueDataAccess, InputVectorDataAccessWithPointer *dataAccess)
```

Provide a function to register input vector data access.

**Parameters**:

* **opaqueDataAccess**: - a pointer that is passed into the callback function.
* **dataAccess**: - a pointer to the function that conforms to sysc::InputVectorDataAccessWithPointer prototype.



**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [InputVectorDataAccessWithPointer](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1adeacbc3dfb240c3f389d344337839458"></a>
### Function registerOutputScalarDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerOutputScalarDataAccess(OutputScalarDataAccess *dataAccess)
```

Provide a function to register output scalar data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to sysc::OutputScalarDataAccess function prototype.



**Parameters**:

* [OutputScalarDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1ada68571b9d10213009b97e4701cba62a"></a>
### Function registerOutputScalarDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerOutputScalarDataAccess(OpaqueDataAccess opaqueDataAccess, OutputScalarDataAccessWithPointer *dataAccess)
```

Provide a function to register output scalar data access.

**Parameters**:

* **opaqueDataAccess**: - a pointer that is passed into the callback function.
* **dataAccess**: - a pointer to the function that conforms to sysc::OutputScalarDataAccessWithPointer prototype.



**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [OutputScalarDataAccessWithPointer](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1abb613dba476f0873e7d59585acb7d981"></a>
### Function registerOutputVectorDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerOutputVectorDataAccess(OutputVectorDataAccess *dataAccess)
```

Provide a function to register output vector data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to sysc::OutputVectorDataAccess function prototype.



**Parameters**:

* [OutputVectorDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1aedc414935e27b77ce784e7f1c5fc6a75"></a>
### Function registerOutputVectorDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerOutputVectorDataAccess(OpaqueDataAccess opaqueDataAccess, OutputVectorDataAccessWithPointer *dataAccess)
```

Provide a function to register output vector data access.

**Parameters**:

* **opaqueDataAccess**: - a pointer that is passed into the callback function.
* **dataAccess**: - a pointer to the function that conforms to sysc::OutputVectorDataAccessWithPointer prototype.



**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [OutputVectorDataAccessWithPointer](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1ae65892603ab7d6f24d3a1cbc80af7edb"></a>
### Function registerInputComplexScalarDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerInputComplexScalarDataAccess(InputComplexScalarDataAccess *dataAccess)
```

Provide a function to register input complex scalar data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to sysc::InputComplexScalarDataAccess prototype.



**Parameters**:

* [InputComplexScalarDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a878ad16bd59726553ee0a3de9d2bca06"></a>
### Function registerInputComplexScalarDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerInputComplexScalarDataAccess(OpaqueDataAccess opaqueDataAccess, InputComplexScalarDataAccessWithPointer *dataAccess)
```

Provide a function to register input complex scalar data access.

**Parameters**:

* **opaqueDataAccess**: - a pointer that is passed into the callback function.
* **dataAccess**: - a pointer to the function that conforms to sysc::InputComplexScalarDataAccess prototype.



**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [InputComplexScalarDataAccessWithPointer](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a58064b5079b01898a6951e366ea86331"></a>
### Function registerInputComplexVectorDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerInputComplexVectorDataAccess(InputComplexVectorDataAccess *dataAccess)
```

Provide a function to register input complex vector data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to InputComplexVectorDataAccess prototype.



**Parameters**:

* [InputComplexVectorDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1abdd59a061b86ef7cef6301652d98ec65"></a>
### Function registerInputComplexVectorDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerInputComplexVectorDataAccess(OpaqueDataAccess opaqueDataAccess, InputComplexVectorDataAccessWithPointer *dataAccess)
```

Provide a function to register input complex vector data access.

**Parameters**:

* **opaqueDataAccess**: - a pointer that is passed into the callback function.
* **dataAccess**: - a pointer to the function that conforms to InputComplexVectorDataAccess prototype.



**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [InputComplexVectorDataAccessWithPointer](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a6e31333c6867d5214565215c5de97ba2"></a>
### Function registerOutputComplexScalarDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerOutputComplexScalarDataAccess(OutputComplexScalarDataAccess *dataAccess)
```

Provide a function to register output complex scalar data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to OutputComplexScalarDataAccess prototype.



**Parameters**:

* [OutputComplexScalarDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a09a5b550343939ded20c225c4cd7c980"></a>
### Function registerOutputComplexScalarDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerOutputComplexScalarDataAccess(OpaqueDataAccess opaqueDataAccess, OutputComplexScalarDataAccessWithPointer *dataAccess)
```

Provide a function to register output complex scalar data access.

**Parameters**:

* **opaqueDataAccess**: - a pointer that is passed into the callback function.
* **dataAccess**: - a pointer to the function that conforms to OutputComplexScalarDataAccess prototype.



**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [OutputComplexScalarDataAccessWithPointer](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a6ccb2d4f3fe8a866648ffa1f310bc78f"></a>
### Function registerOutputComplexVectorDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerOutputComplexVectorDataAccess(OutputComplexVectorDataAccess *dataAccess)
```

Provide a function to register output complex vector data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to OutputComplexVectorDataAccess prototype.



**Parameters**:

* [OutputComplexVectorDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a85be3c843ee3b5e71f5e54fff61468aa"></a>
### Function registerOutputComplexVectorDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerOutputComplexVectorDataAccess(OpaqueDataAccess opaqueDataAccess, OutputComplexVectorDataAccessWithPointer *dataAccess)
```

Provide a function to register output complex vector data access.

**Parameters**:

* **opaqueDataAccess**: - a pointer that is passed into the callback function.
* **dataAccess**: - a pointer to the function that conforms to OutputComplexVectorDataAccess prototype.



**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [OutputComplexVectorDataAccessWithPointer](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1afb819aa4b19aa15dc552d73803352fb4"></a>
### Function registerSurfaceMeshAccess

![][public]

```cpp
void sysc::SystemCoupling::registerSurfaceMeshAccess(SurfaceMeshAccess *meshAccess)
```

Provide a function to register surface mesh access.

**Parameters**:

* **meshAccess**: - a pointer to the function that conforms to SurfaceMeshAccess function prototype. See SurfaceMeshAccess for details.



**Parameters**:

* [SurfaceMeshAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **meshAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a183340630be801da193518a69e183cd1"></a>
### Function registerSurfaceMeshAccess

![][public]

```cpp
void sysc::SystemCoupling::registerSurfaceMeshAccess(OpaqueDataAccess opaqueDataAccess, SurfaceMeshAccessWithPointer *meshAccess)
```

Provide a function to register surface mesh access.

**Parameters**:

* **opaqueDataAccess**: - a pointer that is passed into the callback function.
* **meshAccess**: - a pointer to the function that conforms to SurfaceMeshAccessWithPointer function prototype. See SurfaceMeshAccessWithPointer for details.



**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [SurfaceMeshAccessWithPointer](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **meshAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a11c8df8113a78dcb40b91534ce1f4b1c"></a>
### Function registerZoneCountAccess

![][public]

```cpp
void sysc::SystemCoupling::registerZoneCountAccess(OpaqueDataAccess opaqueDataAccess, ZoneCountAccess *zoneCountAccess)
```







**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [ZoneCountAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **zoneCountAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1adbd878be917e52aa1cf1ef26e152e677"></a>
### Function registerSurfaceMeshAccess

![][public]

```cpp
void sysc::SystemCoupling::registerSurfaceMeshAccess(OpaqueDataAccess opaqueDataAccess, SurfaceMeshMultiZoneAccess *dataAccess)
```







**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [SurfaceMeshMultiZoneAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1af12f29a1532884bc561c7bd5fe9efc97"></a>
### Function registerVolumeMeshAccess

![][public]

```cpp
void sysc::SystemCoupling::registerVolumeMeshAccess(OpaqueDataAccess opaqueDataAccess, VolumeMeshMultiZoneAccess *dataAccess)
```







**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [VolumeMeshMultiZoneAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a5b437d3878dde1d36d8bbfe0b68a1ea3"></a>
### Function registerInputScalarDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerInputScalarDataAccess(OpaqueDataAccess opaqueDataAccess, InputScalarDataMultiZoneAccess *dataAccess)
```







**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [InputScalarDataMultiZoneAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1ab71ebbabd746c3b1b0108f298443d38b"></a>
### Function registerOutputScalarDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerOutputScalarDataAccess(OpaqueDataAccess opaqueDataAccess, OutputScalarDataMultiZoneAccess *dataAccess)
```







**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [OutputScalarDataMultiZoneAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a630e6c6211338d8d2dd3dce15a897019"></a>
### Function registerInputVectorDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerInputVectorDataAccess(OpaqueDataAccess opaqueDataAccess, InputVectorDataMultiZoneAccess *dataAccess)
```







**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [InputVectorDataMultiZoneAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a76d36b21f00f091187e875e5dfb6f6d6"></a>
### Function registerOutputVectorDataAccess

![][public]

```cpp
void sysc::SystemCoupling::registerOutputVectorDataAccess(OpaqueDataAccess opaqueDataAccess, OutputVectorDataMultiZoneAccess *dataAccess)
```

Provide a function to register output vector data access.

**Parameters**:

* **opaqueDataAccess**: - a pointer that is passed into the callback function.
* **dataAccess**: - a pointer to the function that conforms to sysc::OutputVectorDataMultiZoneAccess prototype.



**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [OutputVectorDataMultiZoneAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a692aa29e269337e50d3b134f4628b7c0"></a>
### Function registerVolumeMeshAccess

![][public]

```cpp
void sysc::SystemCoupling::registerVolumeMeshAccess(VolumeMeshAccess *meshAccess)
```

Provide a function to register volume mesh access.

**Parameters**:

* **meshAccess**: - a pointer to the function that conforms to VolumeMeshAccess function prototype. See VolumeMeshAccess for details.



**Parameters**:

* [VolumeMeshAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **meshAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1ad6950fb23d3f98f17f023c29555743b8"></a>
### Function registerVolumeMeshAccess

![][public]

```cpp
void sysc::SystemCoupling::registerVolumeMeshAccess(OpaqueDataAccess opaqueDataAccess, VolumeMeshAccessWithPointer *meshAccess)
```

Provide a function to register volume mesh access.

**Parameters**:

* **opaqueDataAccess**: - a pointer that is passed into the callback function.
* **meshAccess**: - a pointer to the function that conforms to VolumeMeshAccessWithPointer function prototype. See VolumeMeshAccessWithPointer for details.



**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [VolumeMeshAccessWithPointer](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **meshAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a05632386db24345a895d5b504c52af5e"></a>
### Function registerPointCloudAccess

![][public]

```cpp
void sysc::SystemCoupling::registerPointCloudAccess(PointCloudAccess *pointCloudAccess)
```

Provide a function to register point cloud access.

**Parameters**:

* **pointCloudAccess**: - a pointer to the function that conforms to PointCloudAccess function prototype. See PointCloudAccess for details.



**Parameters**:

* [PointCloudAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **pointCloudAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a71eeb76fc93f4d9b8618d70ef5f66493"></a>
### Function registerPointCloudAccess

![][public]

```cpp
void sysc::SystemCoupling::registerPointCloudAccess(OpaqueDataAccess opaqueDataAccess, PointCloudAccessWithPointer *pointCloudAccess)
```

Provide a function to register point cloud access.

**Parameters**:

* **opaqueDataAccess**: - a pointer that is passed into the callback function.
* **pointCloudAccess**: - a pointer to the function that conforms to PointCloudAccessWithPointer function prototype.



**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [PointCloudAccessWithPointer](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **pointCloudAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a1e24a3be97eb868486fd6477f26356fd"></a>
### Function registerPointCloudAccess

![][public]

```cpp
void sysc::SystemCoupling::registerPointCloudAccess(OpaqueDataAccess opaqueDataAccess, PointCloudMultiZoneAccess *pointCloudAccess)
```

Provide a function to register point cloud access.

**Parameters**:

* **opaqueDataAccess**: - a pointer that is passed into the callback function.
* **pointCloudAccess**: - a pointer to the function that conforms to PointCloudMultiZoneAccess function prototype.



**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [PointCloudMultiZoneAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **pointCloudAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1aaae2fc4f2cee448f97e69fae2510c1ce"></a>
### Function registerRestartPointCreation

![][public]

```cpp
void sysc::SystemCoupling::registerRestartPointCreation(RestartPointCreation *restartPointCreation)
```

Provide a function to register a restart point creation callback.

**Parameters**:

* **restartPointCreation**: - a pointer to the function that conforms to RestartPointCreation function prototype. See RestartPointCreation for details.



**Parameters**:

* [RestartPointCreation](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **restartPointCreation**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a16f160af31ea38f0a502ff1f746b957b"></a>
### Function registerTargetDataCreation

![][public]

```cpp
void sysc::SystemCoupling::registerTargetDataCreation(TargetDataCreation *targetDataCreation)
```

Provide a function to register a target data creation callback.

**Parameters**:

* **targetDataCreation**: - a pointer to the function that conforms to TargetDataCreation function prototype. See TargetDataCreation for details.



**Parameters**:

* [TargetDataCreation](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **targetDataCreation**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a753caed2214ab353ae9a377e55c3c2d8"></a>
### Function registerTargetDataCreation

![][public]

```cpp
void sysc::SystemCoupling::registerTargetDataCreation(OpaqueDataAccess opaqueDataAccess, TargetDataCreationWithPointer *targetDataCreation)
```

Provide a function to register a target data creation callback.

**Parameters**:

* **opaqueDataAccess**: a pointer that is passed into the callback function.
* **targetDataCreation**: a pointer to the function that conforms to TargetDataCreationWithPointer function prototype.



**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [TargetDataCreationWithPointer](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **targetDataCreation**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a756e4452ee89f8eddf521a57d33d20e4"></a>
### Function registerDoesTargetDataExist

![][public]

```cpp
void sysc::SystemCoupling::registerDoesTargetDataExist(TargetDataExistenceChecker *doesTargetDataExist)
```

Provide a function to register a does target data exist callback.

**Parameters**:

* **doesTargetDataExist**: a pointer to the function that conforms to DoesTargetDataExist function prototype. See DoesTargetDataExist for details.



**Parameters**:

* [TargetDataExistenceChecker](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **doesTargetDataExist**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a96819f69d3044bc1f1a6f70c06da90cb"></a>
### Function registerDoesTargetDataExist

![][public]

```cpp
void sysc::SystemCoupling::registerDoesTargetDataExist(OpaqueDataAccess opaqueDataAccess, TargetDataExistenceCheckerWithPointer *doesTargetDataExist)
```

Provide a function to register a does target data exist callback.

**Parameters**:

* **opaqueDataAccess**: a pointer that is passed into the callback function.
* **doesTargetDataExist**: a pointer to the function that conforms to DoesTargetDataExistWithPointer function prototype.



**Parameters**:

* [OpaqueDataAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **opaqueDataAccess**
* [TargetDataExistenceCheckerWithPointer](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **doesTargetDataExist**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a3d0f96215b1b4609d46e0772c3e3578b"></a>
### Function writeSetupFile

![][public]
![][const]

```cpp
bool sysc::SystemCoupling::writeSetupFile(const SetupFileInfo &setupFileInfo) const
```

Provide a function to write the setup file.

This function can be used to generate a System Coupling setup file, which contains participant's setup information. It should be called after calling completeSetup.






**Parameters**:

* **setupFileInfo**: - struct containing the setup file info.


**Returns**:

True if the setup file was successfully written, and false otherwise.



**Parameters**:

* const [SetupFileInfo](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1SetupFileInfo) & **setupFileInfo**

**Return type**: bool

<a id="classsysc_1_1SystemCoupling_1ac9b3de74b577b71eccf44c901ba0d225"></a>
### Function writeResults

![][public]
![][const]

```cpp
void sysc::SystemCoupling::writeResults(const ResultsInfo &resultsInfo) const
```

Write results to a file.





**Parameters**:

* const [ResultsInfo](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ResultsInfo) & **resultsInfo**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1af1cac0616352ad6998eefad0593c8ffb"></a>
### Function getNumRegions

![][public]
![][const]

```cpp
std::size_t sysc::SystemCoupling::getNumRegions() const
```

Provide a function to return the number of regions.

**Returns**:

Number of regions.



**Return type**: std::size_t

<a id="classsysc_1_1SystemCoupling_1adb354cb78a277f08c87b59f97bcdd453"></a>
### Function getAddedRegion

![][public]
![][const]

```cpp
const Region& sysc::SystemCoupling::getAddedRegion(std::size_t index) const
```

Provide a function to return region information.

**Parameters**:

* **index**: - region index


**Returns**:

Reference to region information at specified index.



**Parameters**:

* std::size_t **index**

**Return type**: const [Region](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1Region) &

<a id="classsysc_1_1SystemCoupling_1ace4a88af60a1aa93a68fa4b071592413"></a>
### Function getSolutionControl

![][public]
![][const]

```cpp
SolutionControl sysc::SystemCoupling::getSolutionControl() const
```

Get solution control.





**Return type**: [SolutionControl](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1SolutionControl)

<a id="classsysc_1_1SystemCoupling_1a43ac90ab5f0cfd64fec354519d4f5b43"></a>
### Function getSetupInfo

![][public]
![][const]

```cpp
const SetupInfo& sysc::SystemCoupling::getSetupInfo() const
```

Get [SetupInfo](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1SetupInfo).





**Return type**: const [SetupInfo](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1SetupInfo) &

<a id="classsysc_1_1SystemCoupling_1a83c9856515b950fa453f36a29c3dd0ca"></a>
### Function getNumCouplingInterfaces

![][public]
![][const]

```cpp
std::size_t sysc::SystemCoupling::getNumCouplingInterfaces() const
```

Provide a function to return the number of coupling interfaces.

**Returns**:

Number of coupling interfaces.



**Return type**: std::size_t

<a id="classsysc_1_1SystemCoupling_1a8aab50ac4eedd188745852bb0cc94f6d"></a>
### Function getAddedCouplingInterface

![][public]
![][const]

```cpp
const CouplingInterface& sysc::SystemCoupling::getAddedCouplingInterface(std::size_t index) const
```

Provide a function to return coupling interface.

**Parameters**:

* **index**: - coupling interface index


**Returns**:

Reference to the coupling interface at specified index.



**Parameters**:

* std::size_t **index**

**Return type**: const [CouplingInterface](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1CouplingInterface) &

<a id="classsysc_1_1SystemCoupling_1aff74fa8017356c93a1ea5677a29103e5"></a>
### Function getInputParameter

![][public]
![][const]

```cpp
const Parameter& sysc::SystemCoupling::getInputParameter(std::size_t index) const
```

Provide a function to return input parameter information.

**Parameters**:

* **index**: - input parameter index


**Returns**:

Reference to input parameter information at specified index.



**Parameters**:

* std::size_t **index**

**Return type**: const [Parameter](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1Parameter) &

<a id="classsysc_1_1SystemCoupling_1acd9357a14b747921037daa0c24c9bc1b"></a>
### Function getOutputParameter

![][public]
![][const]

```cpp
const Parameter& sysc::SystemCoupling::getOutputParameter(std::size_t index) const
```

Provide a function to return output parameter information.

**Parameters**:

* **index**: - output parameter index


**Returns**:

Reference to output parameter information at specified index.



**Parameters**:

* std::size_t **index**

**Return type**: const [Parameter](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1Parameter) &

<a id="classsysc_1_1SystemCoupling_1a5043b933c85893f89b72c967922e0397"></a>
### Function getNumInputParameters

![][public]
![][const]

```cpp
std::size_t sysc::SystemCoupling::getNumInputParameters() const
```

Provide a function to return the number of input parameters.

**Returns**:

Number of input parameters.



**Return type**: std::size_t

<a id="classsysc_1_1SystemCoupling_1a6b0bc9b6b4c6155f573c94376e37ba8d"></a>
### Function getNumOutputParameters

![][public]
![][const]

```cpp
std::size_t sysc::SystemCoupling::getNumOutputParameters() const
```

Provide a function to return the number of output parameters.

**Returns**:

Number of output parameters.



**Return type**: std::size_t

<a id="classsysc_1_1SystemCoupling_1a7d91d3013cc5c826f91d42f6e8f5c6d8"></a>
### Function getNumRealAttributes

![][public]
![][const]

```cpp
std::size_t sysc::SystemCoupling::getNumRealAttributes() const
```

Provide a function to return the number of real attributes.

**Returns**:

Number of real attributes.



**Return type**: std::size_t

<a id="classsysc_1_1SystemCoupling_1aeeb32be00caa7d33c4ddd9b28f80a3a0"></a>
### Function getNumIntegerAttributes

![][public]
![][const]

```cpp
std::size_t sysc::SystemCoupling::getNumIntegerAttributes() const
```

Provide a function to return the number of integer attributes.

**Returns**:

Number of integer attributes.



**Return type**: std::size_t

<a id="classsysc_1_1SystemCoupling_1af757a39bdfd82702d7879af71ed835db"></a>
### Function getNumStringAttributes

![][public]
![][const]

```cpp
std::size_t sysc::SystemCoupling::getNumStringAttributes() const
```

Provide a function to return the number of string attributes.

**Returns**:

Number of string attributes.



**Return type**: std::size_t

<a id="classsysc_1_1SystemCoupling_1adac66a89bdba3cc298631045b659fba1"></a>
### Function getRealAttribute

![][public]
![][const]

```cpp
const RealAttribute& sysc::SystemCoupling::getRealAttribute(std::size_t index) const
```

Provide a function to return real attribute information.

**Parameters**:

* **index**: - real attribute index


**Returns**:

Reference to real attribute information at specified index.



**Parameters**:

* std::size_t **index**

**Return type**: const [RealAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1RealAttribute) &

<a id="classsysc_1_1SystemCoupling_1a47057e45b7637d4709138c5f64d7e0d4"></a>
### Function getIntegerAttribute

![][public]
![][const]

```cpp
const IntegerAttribute& sysc::SystemCoupling::getIntegerAttribute(std::size_t index) const
```

Provide a function to return integer attribute information.

**Parameters**:

* **index**: - integer attribute index


**Returns**:

Reference to integer attribute information at specified index.



**Parameters**:

* std::size_t **index**

**Return type**: const [IntegerAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1IntegerAttribute) &

<a id="classsysc_1_1SystemCoupling_1a6aff5352468a4c1065e167faa3a02ae2"></a>
### Function getStringAttribute

![][public]
![][const]

```cpp
const StringAttribute& sysc::SystemCoupling::getStringAttribute(std::size_t index) const
```

Provide a function to return string attribute information.

**Parameters**:

* **index**: - string attribute index


**Returns**:

Reference to string attribute information at specified index.



**Parameters**:

* std::size_t **index**

**Return type**: const [StringAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1StringAttribute) &

<a id="classsysc_1_1SystemCoupling_1a6d389ee7e0740e0348919cd3b7d956f7"></a>
### Function completeCouplingSetup

![][public]

```cpp
void sysc::SystemCoupling::completeCouplingSetup()
```

This function will be deprecated. Use [completeSetup()](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling) instead.





**Return type**: void

<a id="classsysc_1_1SystemCoupling_1ae07c136aa42d636df179cc7352065430"></a>
### Function completeCouplingSetup

![][public]

```cpp
void sysc::SystemCoupling::completeCouplingSetup(sysc::AnalysisType analysisType)
```

This function will be deprecated. Use [completeSetup()](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling) instead.





**Parameters**:

* [sysc::AnalysisType](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **analysisType**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a7f6ec98123d0c18a6fce5c51d9af5e28"></a>
### Function registerInputScalarVariableAccess

![][public]

```cpp
void sysc::SystemCoupling::registerInputScalarVariableAccess(InputScalarVariableAccess *dataAccess)
```

Deprecated - do not use.





**Parameters**:

* [InputScalarVariableAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a742d335b9842d2574d4522834154c3c7"></a>
### Function registerInputVectorVariableAccess

![][public]

```cpp
void sysc::SystemCoupling::registerInputVectorVariableAccess(InputVectorVariableAccess *dataAccess)
```

Deprecated - do not use.





**Parameters**:

* [InputVectorVariableAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a215a0a89ded36ecab1c4720c7c581b5e"></a>
### Function registerOutputScalarVariableAccess

![][public]

```cpp
void sysc::SystemCoupling::registerOutputScalarVariableAccess(OutputScalarVariableAccess *dataAccess)
```

Deprecated - do not use.





**Parameters**:

* [OutputScalarVariableAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1ab63d037d8a7545bd6b5a6f2b3e91c30f"></a>
### Function registerOutputVectorVariableAccess

![][public]

```cpp
void sysc::SystemCoupling::registerOutputVectorVariableAccess(OutputVectorVariableAccess *dataAccess)
```

Deprecated - do not use.





**Parameters**:

* [OutputVectorVariableAccess](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) * **dataAccess**

**Return type**: void

<a id="classsysc_1_1SystemCoupling_1a8c7d2613f81b8d9a5bd81db9dcbae8fd"></a>
### Function checkMeshValidity

![][public]

```cpp
MeshValidityStatus sysc::SystemCoupling::checkMeshValidity(const Region &region)
```

Deprecated. Use [sysc::SurfaceMesh::checkValidity](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SurfaceMesh) instead.





**Parameters**:

* const [Region](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1Region) & **region**

**Return type**: [MeshValidityStatus](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1MeshValidityStatus)

<a id="classsysc_1_1SystemCoupling_1ac6a85f6aae44d330b8042dc9296bd59b"></a>
### Function checkMeshValidity

![][public]

```cpp
MeshValidityStatus sysc::SystemCoupling::checkMeshValidity(const std::string &regionName)
```

Deprecated. Use [sysc::SurfaceMesh::checkValidity](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SurfaceMesh) instead.





**Parameters**:

* const std::string & **regionName**

**Return type**: [MeshValidityStatus](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1MeshValidityStatus)

<a id="classsysc_1_1SystemCoupling_1ab70a16b544c86e9681e9946f2ce3ec53"></a>
### Function getRegion

![][public]
![][const]

```cpp
const Region& sysc::SystemCoupling::getRegion(std::size_t index) const
```

Deprecated. Use [getAddedRegion()](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling) instead.





**Parameters**:

* std::size_t **index**

**Return type**: const [Region](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1Region) &

<a id="classsysc_1_1SystemCoupling_1a692355d68459adf3eddfaef350bf0c9c"></a>
### Function SystemCoupling

![][public]

```cpp
sysc::SystemCoupling::SystemCoupling(const SystemCoupling &)=delete
```

Delete the copy-constructor.





**Parameters**:

* const [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling) &

**Return type**: 

<a id="classsysc_1_1SystemCoupling_1a8d869edcfaaace05684e095add7d733b"></a>
### Function SystemCoupling

![][public]

```cpp
sysc::SystemCoupling::SystemCoupling(SystemCoupling &&)=default
```

Provide the move-constructor.





**Parameters**:

* [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling) &&

**Return type**: 

<a id="classsysc_1_1SystemCoupling_1af9e2480d475df72014f4b565f97d8c70"></a>
### Function operator=

![][public]

```cpp
SystemCoupling& sysc::SystemCoupling::operator=(const SystemCoupling &)=delete
```

Delete the copy-assign operator.





**Parameters**:

* const [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling) &

**Return type**: [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling) &

<a id="classsysc_1_1SystemCoupling_1a11c5ccef62c2719e4d0af87796311914"></a>
### Function operator=

![][public]

```cpp
SystemCoupling& sysc::SystemCoupling::operator=(SystemCoupling &&)=default
```

Provide the move-assign operator.





**Parameters**:

* [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling) &&

**Return type**: [SystemCoupling](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1SystemCoupling) &

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)