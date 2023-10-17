Sherlock Life Cycle Service- SherlockLifeCycleService.proto

Sherlock Life Cycle Service- SherlockLifeCycleService.proto

[Prev](ch01s05.xhtml) 

 

 [Next](ch01s07.xhtml)

* * *

Sherlock Life Cycle Service- SherlockLifeCycleService.proto
-----------------------------------------------------------

[Click here to return to the main index to Sherlock's APIs.](ch01s02.xhtml "Index to the Sherlock APIs")

The APIs in this section return the list of Life Cycle events for a given project as well as allow you to define different Life Cycle events and profiles. Clicking on the active links in the table below will take you to the selected API.

**Table 1.58. Index to Sherlock Life Cycle Service APIs**

**Method Name**

**Request Type**

**Response Type**

**Description**

_For display purposes, the strings in the first three columns are broken into multiple lines and should be read as continous. For example, the first string in column one should be interpreted as: **listLifeCycleEvents**_

addHarmonic Event

[.AddHarmonic EventRequest](ch01s06.xhtml#sherlock_ug_AddHarmonicEventRequest "AddHarmonicEventRequest")

[.AddHarmonic EventResponse](ch01s06.xhtml#sherlock_ug_AddHarmonicEventResponse "AddHarmonicEventResponse")

Define and add a new harmonic vibe Life Cycle event.

addHarmonic Profile

[.AddHarmonic ProfileRequest](ch01s06.xhtml#sherlock_ug_AddHarmonicEventRequest "AddHarmonicEventRequest")

[.AddHarmonic ProfileResponse](ch01s06.xhtml#sherlock_ug_AddHarmonicProfileResponse "AddHarmonicProfileResponse")

Define and add a new harmonic Life Cycle Event Profile. (This API is deprecated and will be removed in Sherlock 24.1.)

addHarmonic VibeProfiles

[.AddHarmonic VibeProfilesRequest](ch01s06.xhtml#sherlock_ug_AddHarmonicVibeProfilesRequest "AddHarmonicVibeProfilesRequest")

[.AddHarmonicVibe ProfilesResponse](ch01s06.xhtml#sherlock_ug_AddHarmonicVibeProfilesResponse "AddHarmonicVibeProfilesResponse")

Define and add new harmonic vibe life cycle event profiles.

addRandom VibeProfile

[.AddRandomVibe ProfileRequest](ch01s06.xhtml#sherlock_ug_AddRandomVibeProfileRequest "AddRandomVibeProfileRequest")

[.AddRandom VibeProfileResponse](ch01s06.xhtml#sherlock_ug_AddRandomVibeProfileResponse "AddRandomVibeProfileResponse")

Define and add a new random vibe lifecycle event profile. (This API is deprecated and will be removed in Sherlock 24.1.)

addRandom VibeProfiles

[.AddRandomVibe ProfilesRequest](ch01s06.xhtml#sherlock_ug_AddRandomVibeProfilesRequest "AddRandomVibeProfilesRequest")

[.AddRandomVibe ProfilesResponse](ch01s06.xhtml#sherlock_ug_AddHarmonicVibeProfilesRequest.HarmonicVibeProfile.Entry "AddHarmonicVibeProfilesRequest.HarmonicVibeProfile.Entry")

Define and add new random vibe life cycle event profiles.

addRandom VibeEvent

[.AddRandomVibe EventRequest](ch01s06.xhtml#sherlock_ug_AddRandomVibeEventRequest "AddRandomVibeEventRequest")

[.AddRandomVibe EventResponse](ch01s06.xhtml#sherlock_ug_AddRandomVibeEventRequest "AddRandomVibeEventRequest")

Define and add a new random vibe Life Cycle event.

addShockEvent

[.AddShock Event Request](ch01s06.xhtml#sherlock_ug_AddShockEventRequest "AddShockEventRequest")

[.AddShock Event Response](ch01s06.xhtml#sherlock_ug_AddShockEventResponse "AddShockEventResponse")

Define and add a new shock Life Cycle event.

addShock Profile

[.AddShock ProfileRequest](ch01s06.xhtml#sherlock_ug_AddShockProfileRequest "AddShockProfileRequest")

[.AddShock ProfileResponse](ch01s06.xhtml#sherlock_ug_AddShockProfileResponse "AddShockProfileResponse")

See note below.

**addShockProfile**: Define and add a new shock Life Cycle Event Profile. Keep in mind, the Pulse Duration and Load values defined in the Shock Profile Editor are relative values used solely within the editor to define the profile shape. A combination of all the primary pulse shapes is then used to define the pulse profile.

(This API is deprecated and will be removed in Sherlock 24.1.)

addShock Profiles

[.AddShock ProfilesRequest](ch01s06.xhtml#sherlock_ug_AddShockProfilesRequest "AddShockProfilesRequest")

[.AddShockProfiles Response](ch01s06.xhtml#sherlock_ug_AddShockProfilesResponse "AddShockProfilesResponse")

See note below.

**addShockProfiles**: Define and add new shock life cycle event profiles. Keep in mind, the Pulse Duration and Load values defined in the Shock Profile Editor are relative values used solely within the editor to define the profile shape. A combination of all the primary pulse shapes is then used to define the pulse profile.

addThermal Event

[.AddThermal EventRequest](ch01s06.xhtml#sherlock_ug_AddThermalEventRequest "AddThermalEventRequest")

[.AddThermal Event Response](ch01s06.xhtml#sherlock_ug_AddThermalEventResponse "AddThermalEventResponse")

Define and add a new thermal Life Cycle event.

addThermal Profile

[.AddThermal ProfileRequest](ch01s06.xhtml#sherlock_ug_AddThermalProfileRequest "AddThermalProfileRequest")

[.AddThermal Profile Response](ch01s06.xhtml#sherlock_ug_AddThermalProfileResponse "AddThermalProfileResponse")

Define and add a new thermal Life Cycle Event Profile.

addThermal Profiles

[.AddThermal ProfilesRequest](ch01s06.xhtml#sherlock_ug_AddThermalProfilesRequest.ThermalProfile "AddThermalProfilesRequest.ThermalProfile")

[.AddThermalProfiles Response](ch01s06.xhtml#sherlock_ug_AddThermalProfilesRequest "AddThermalProfilesRequest")

Define and add new thermal life cycle event profiles. (This API is deprecated and will be removed in Sherlock 24.1.)

createLifePhase

[.CreateLife PhaseRequest](ch01s06.xhtml#sherlock_ug_CreateLifePhaseRequest "CreateLifePhaseRequest")

[.CreateLife PhaseResponse](ch01s06.xhtml#sherlock_ug_CreateLifePhaseResponse "CreateLifePhaseResponse")

Define and add a new life phase.

deleteEvent

[.DeleteEvent Request](ch01s06.xhtml#sherlock_ug_DeleteEventRequest "DeleteEventRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Request to delete a life cycle event in a project.

deletePhase

[.DeletePhase Request](ch01s06.xhtml#sherlock_ug_DeletePhaseRequest "DeletePhaseRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Delete a life phase for a project

listAmplUnits

[.ListAmpl UnitsRequest](ch01s06.xhtml#sherlock_ug_ListAmplUnitsRequest "ListAmplUnitsRequest")

[.ListAmpl UnitsResponse](ch01s06.xhtml#sherlock_ug_ListAmplUnitsResponse "ListAmplUnitsResponse")

Returns a list of amplitude units when adding a random vibe profile.

listDurationUnits

[.ListDuration UnitsRequest](ch01s06.xhtml#sherlock_ug_ListDurationUnitsRequest "ListDurationUnitsRequest")

[.ListDuration UnitsResponse](ch01s06.xhtml#sherlock_ug_ListDurationUnitsResponse "ListDurationUnitsResponse")

Returns a list of duration units when adding a Life Cycle event.

listFreqUnits

[.ListFreq UnitsRequest](ch01s06.xhtml#sherlock_ug_ListFreqUnitsRequest "ListFreqUnitsRequest")

[.ListFreq UnitsResponse](ch01s06.xhtml#sherlock_ug_ListFreqUnitsResponse "ListFreqUnitsResponse")

Returns a list of frequency units.

listHarmonic Events

[.ListHarmonic EventsRequest](ch01s06.xhtml#sherlock_ug_ListHarmonicEventsRequest "ListHarmonicEventsRequest")

[.ListHarmonic EventsResponse](ch01s06.xhtml#sherlock_ug_ListHarmonicEventsResponse "ListHarmonicEventsResponse")

Returns a list of harmonic events defined for a project.

listHarmonic ProfileTypes

[.ListHarmonic ProfileTypes Request](ch01s06.xhtml#sherlock_ug_ListHarmonicProfileTypesRequest "ListHarmonicProfileTypesRequest")

[.ListHarmonic Profile TypesResponse](ch01s06.xhtml#sherlock_ug_ListHarmonicProfileTypesResponse "ListHarmonicProfileTypesResponse")

Returns a list of Harmonic Load Profile types.

listLifeCycle Events

[.ListLCEvents Request](ch01s06.xhtml#sherlock_ug_ListDurationUnitsRequest "ListDurationUnitsRequest")

[.ListLCEvents Response](ch01s06.xhtml#sherlock_ug_ListLCEventsResponse "ListLCEventsResponse")

Returns a list of Life Cycle phases and their events given a Sherlock project directory.

listLifeCycle States

[.ListLCStates Request](ch01s06.xhtml#sherlock_ug_ListLCStatesRequest "ListLCStatesRequest")

[.ListLCStates Response](ch01s06.xhtml#sherlock_ug_ListLCStatesResponse "ListLCStatesResponse")

Returns a list of Life Cycle states.

listLifeCycle Types

[.ListLCTypes Request](ch01s06.xhtml#sherlock_ug_ListLCTypesRequest "ListLCTypesRequest")

[.ListLCTypes Response](ch01s06.xhtml#sherlock_ug_ListLCTypesResponse "ListLCTypesResponse")

Returns a list of Life Cycle types.

listRandomVibe ProfileTypes

[.ListRandomVibe ProfileTypesRequest](ch01s06.xhtml#sherlock_ug_ListRandomVibeProfileTypesRequest "ListRandomVibeProfileTypesRequest")

[.ListRandomVibe ProfileTypesResponse](ch01s06.xhtml#sherlock_ug_ListRandomVibeProfileTypesResponse "ListRandomVibeProfileTypesResponse")

Returns a list of random vibe profile types.

listRandom VibeEvents

[.ListRandomVibe EventsRequest](ch01s06.xhtml#sherlock_ug_ListRandomVibeEventsRequest "ListRandomVibeEventsRequest")

[.ListRandom VibeEventsResponse](ch01s06.xhtml#sherlock_ug_ListRandomVibeEventsResponse "ListRandomVibeEventsResponse")

Returns a list of random vibe events defined for a project.

listShockEvents

[.ListShock EventsRequest](ch01s06.xhtml#sherlock_ug_ListShockEventsRequest "ListShockEventsRequest")

[.ListShock EventsResponse](ch01s06.xhtml#sherlock_ug_ListShockEventsResponse "ListShockEventsResponse")

Returns a list of shock events defined for a project.

listShock LoadUnits

[.List Shock LoadUnitsRequest](ch01s06.xhtml#sherlock_ug_ListShockLoadUnitsRequest "ListShockLoadUnitsRequest")

[.ListShock LoadUnits Response](ch01s06.xhtml#sherlock_ug_ListShockLoadUnitsResponse "ListShockLoadUnitsResponse")

Returns a list of Shock Load units.

listShockPulses

[.ListShock PulsesRequest](ch01s06.xhtml#sherlock_ug_ListShockPulsesRequest "ListShockPulsesRequest")

[.ListShock PulsesResponse](ch01s06.xhtml#sherlock_ug_ListShockPulsesResponse "ListShockPulsesResponse")

Returns a list of shock pulses.

listTempUnits

[.ListTemp UnitsRequest](ch01s06.xhtml#sherlock_ug_ListTempUnitsRequest "ListTempUnitsRequest")

[.ListTemp UnitsResponse](ch01s06.xhtml#sherlock_ug_ListTempUnitsResponse "ListTempUnitsResponse")

Returns a list of temperature units.

loadHarmonic Profile

[.LoadHarmonic ProfileRequest](ch01s06.xhtml#sherlock_ug_LoadHarmonicProfileRequest "LoadHarmonicProfileRequest")

[.LoadHarmonic ProfileResponse](ch01s06.xhtml#sherlock_ug_LoadHarmonicProfileResponse "LoadHarmonicProfileResponse")

Loads a harmonic profile from a .dat or .csv file

loadRandom VibeProfile

[.LoadRandom VibeProfileRequest](ch01s06.xhtml#sherlock_ug_LoadRandomVibeProfileRequest "LoadRandomVibeProfileRequest")

[.LoadRandom VibeProfileResponse](ch01s06.xhtml#sherlock_ug_LoadRandomVibeProfileResponse "LoadRandomVibeProfileResponse")

Loads a random vibe profile from a .dat or .csv file

loadShock ProfileDataset

[.LoadShockProfile DatasetRequest](ch01s06.xhtml#sherlock_ug_LoadShockProfileDatasetRequest "LoadShockProfileDatasetRequest")

[.LoadShockProfile DatasetResponse](ch01s06.xhtml#sherlock_ug_LoadShockProfileDatasetResponse "LoadShockProfileDatasetResponse")

Loads a shock profile using dataset from a .dat or .csv file

loadShock ProfilePulses

[.LoadShockProfile PulsesRequest](ch01s06.xhtml#sherlock_ug_LoadShockProfilePulsesRequest "LoadShockProfilePulsesRequest")

[.LoadShockProfile PulsesResponse](ch01s06.xhtml#sherlock_ug_LoadShockProfilePulsesResponse "LoadShockProfilePulsesResponse")

Loads a shock profile using pulses from a .dat or .csv file

loadThermal Profile

[.LoadThermal Profile Request](ch01s06.xhtml#sherlock_ug_LoadThermalProfileRequest "LoadThermalProfileRequest")

[.LoadThermal Profile Response](ch01s06.xhtml#sherlock_ug_LoadThermalProfileResponse "LoadThermalProfileResponse")

Loads a thermal profile from a .dat or .csv file

  

### Add Harmonic Event

In this section:

#### AddHarmonicEventRequest

Request to define and add a new harmonic vibe Life Cycle event.

**Table 1.59. AddHarmonicEventRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The name of the Life Cycle phase to add this event to.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the harmonic event.

description

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Description of the harmonic event.

duration

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Event duration length.

durationUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Event duration length units.

numOfCycles

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Number of cycles defined for this harmonic event.

cycleType

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The cycle type. For example: "COUNT", "DUTY CYCLE", "PER YEAR", "PER HOUR", etc.

sweepRate

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Sweep rate for the harmonic event

orientation

[string](ch01s11.xhtml "gRPC Scalar Value Types")

PCB orientation in the format of azimuth, elevation. Example: 30,15

profileType

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Harmonic load profile types. Example valid values are "Uniaxial" and "Triaxial".

loadDirection

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Load direction in the format of x,y,z. Example: 0,0,1

  

#### AddHarmonicEventResponse

Response from adding a harmonic vibe event.

**Table 1.60. AddHarmonicEventResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of validation errors.

  

#### Examples: Add Harmonic Event

##### Proto Request Example

{
  "project": "Tutorial Project",
  "phaseName": "On The Road",
  "eventName": "7 - New Harmonic Vibe",
  "description": "This is the addition of a new harmonic event",
  "duration": 15,
  "durationUnits": "ms",
  "numOfCycles": 100,
  "cycleType": "DUTY CYCLE",
  "sweepRate": 1,
  "orientation": "30,15",
  "profileType": "Uniaxial",
  "loadDirection": "0,0,1"
}

##### Request Response

![](../../graphics/gRPC/sherlock_ug_gRPC_7.png)

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.AddHarmonicEventRequest()

message.project = "Tutorial Project"
message.phaseName = "On The Road"
message.eventName = "7 - New Harmonic Vibe"
message.description = "This is the addition of a new harmonic event"
message.duration = 15
message.durationUnits = "ms"
message.numOfCycles = 100
message.cycleType = "DUTY CYCLE"
message.sweepRate = 1
message.orientation = "30,15"
message.profileType = "Uniaxial"
message.loadDirection = "0,0,1"

response = stub.addHarmonicEvent(message)

print(str(response))

### Add Harmonic Profile

In this section:

#### AddHarmonicProfileRequest

Request to define and add a new harmonic Life Cycle Event Profile.

**Table 1.61. AddHarmonicProfileRequest**

**Field**

**Type**

**Label**

**Description**

_For display purposes, the long string in column two is broken into multiple lines and should be read as continous. It should be interpreted as: **AddHarmonicProfileRequest.Entry**_

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The name of the Life Cycle phase this event is associated.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the harmonic event.

profileName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the harmonic profile.

freqUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Frequency Units.

loadUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Load units.

harmonicProfileEntries

[AddHarmonic ProfileRequest.Entry](ch01s06.xhtml#sherlock_ug_AddHarmonicProfileRequest.Entry "AddHarmonicProfileRequest.Entry")

repeated

  

#### AddHarmonicProfileRequest.Entry

**Table 1.62. AddHarmonicProfileRequest.Entry**

**Field**

**Type**

**Label**

**Description**

freq

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Frequency.

load

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Load.

  

#### AddHarmonicProfileResponse

Response from adding a harmonic profile.

**Table 1.63. AddHarmonicProfileResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of validation errors.

  

#### Examples: Add Harmonic Profile

##### Proto Request Example

{
  "project": "Tutorial Project",
  "phaseName": "On The Road",
  "eventName": "Test Harmonic API",
  "profileName": "Harmonic Profile - Script Creation",
  "freqUnits": "Hz",
  "loadUnits": "G",
  "harmonicProfileEntries": \[
    {
      "freq": 100.00,
      "load": 10.0
    },
    {
      "freq": 1000.00,
      "load": 10.0
    }
  \]
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.AddHarmonicProfileRequest()

message.project = "Tutorial Project"
message.phaseName = "On The Road"
message.eventName = "Test Harmonic API"
message.profileName = "Harmonic Profile - Script Creation"
message.freqUnits = "Hz"
message.loadUnits = "G"

entry1 = SherlockLifeCycleService\_pb2.AddHarmonicProfileRequest().Entry()
entry1.freq = 100.00
entry1.load = 10.0
entry2 = SherlockLifeCycleService\_pb2.AddHarmonicProfileRequest().Entry()
entry2.freq = 1000.00
entry2.load = 10.00

message.harmonicProfileEntries.extend(\[entry1, entry2\])

response = stub.addHarmonicProfile(message)

print(str(response))

### Add Harmonic Vibe Profiles

#### AddHarmonicVibeProfilesRequest

Request to define and add new harmonic vibe life cycle event profiles.

**Table 1.64. AddHarmonicVibeProfilesRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Sherlock project name.

harmonicVibeProfiles

See below ⇓

repeated

 

 

[AddHarmonicVibeProfilesRequest.HarmonicVibeProfile](ch01s06.xhtml#sherlock_ug_AddHarmonicVibeProfilesRequest.HarmonicVibeProfile "AddHarmonicVibeProfilesRequest.HarmonicVibeProfile")

  

#### AddHarmonicVibeProfilesRequest.HarmonicVibeProfile

**Table 1.65. AddHarmonicVibeProfilesRequest.HarmonicVibeProfile**

**Field**

**Type**

**Label**

**Description**

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

The name of the life cycle phase this event is associated.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Name of the harmonic event.

profileName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Name of the harmonic profile.

freqUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Frequency Units.

loadUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Load units.

harmonicVibeProfileEntries

See below ⇓

repeated

 

 

[AddHarmonicVibeProfilesRequest.HarmonicVibeProfile.Entry](ch01s06.xhtml#sherlock_ug_AddHarmonicVibeProfilesRequest.HarmonicVibeProfile.Entry "AddHarmonicVibeProfilesRequest.HarmonicVibeProfile.Entry")

triaxialAxis

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

If the harmonic profile type is "Triaxial", the axis this profile should be assigned to. Valid values are: x, y, z.

  

#### AddHarmonicVibeProfilesRequest.HarmonicVibeProfile.Entry

**Table 1.66. AddHarmonicVibeProfilesRequest.HarmonicVibeProfile.Entry**

**Field**

**Type**

**Label**

**Description**

freq

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Frequency.

load

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Load.

  

#### AddHarmonicVibeProfilesResponse

Response from adding harmonic vibe profiles.

**Table 1.67. AddHarmonicVibeProfilesResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

 

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of validation errors.

  

#### Example: Add Harmonic Vibe Profiles

##### Proto Request Example:

{
  "project": "Tutorial Project",
  "harmonicVibeProfiles": \[
    {
      "phaseName": "On The Road",
      "eventName": "5 - Harmonic Vibe",
      "profileName": "First Harmonic Profile",
      "freqUnits": "Hz",
      "loadUnits": "G",
      "harmonicVibeProfileEntries": \[
        {
          "freq": 100.0,
          "load": 10.0
        },
        {
          "freq": 1000.0,
          "load": 10.0
        }
      \],
      "triaxialAxis": "x"
    },
    {
      "phaseName": "On The Road",
      "eventName": "Test HV",
      "profileName": "Second Harmonic Profile",
      "freqUnits": "Hz",
      "loadUnits": "G",
      "harmonicVibeProfileEntries": \[
        {
          "freq": 100.0,
          "load": 10.0
        },
        {
          "freq": 1000.0,
          "load": 10.0
        }
      \],
      "triaxialAxis": "y"
    }
  \]
}

##### Python Example:

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

# Add Harmonic Event For Multiple Import

message = SherlockLifeCycleService\_pb2.AddHarmonicEventRequest()

message.project = "Tutorial Project"
message.phaseName = "On The Road"
message.eventName = "Test HV"
message.description = "Test Description"
message.duration = 2
message.durationUnits = "ms"
message.numOfCycles = 100
message.cycleType = "DUTY CYCLE"
message.sweepRate = 1
message.orientation = "1, 3"
message.profileType = "Uniaxial"
message.loadDirection = "0, 0, -1"

response = stub.addHarmonicEvent(message)

message = SherlockLifeCycleService\_pb2.AddHarmonicVibeProfilesRequest()
harmonicprofile1 = SherlockLifeCycleService\_pb2.AddHarmonicVibeProfilesRequest().HarmonicVibeProfile()
harmonicprofile2 = SherlockLifeCycleService\_pb2.AddHarmonicVibeProfilesRequest().HarmonicVibeProfile()
message.project = "Tutorial Project"

harmonicprofile1.phaseName = "On The Road"
harmonicprofile1.eventName = "5 - Harmonic Vibe"
harmonicprofile1.profileName = "First Harmonic Profile"
harmonicprofile1.freqUnits = "Hz"
harmonicprofile1.loadUnits = "G"
harmonicprofile1.triaxialAxis = "x"

harmonicprofile2.phaseName = "On The Road"
harmonicprofile2.eventName = "Test HV"
harmonicprofile2.profileName = "Second Harmonic Profile"
harmonicprofile2.freqUnits = "Hz"
harmonicprofile2.loadUnits = "G"
harmonicprofile2.triaxialAxis = "y"

entry1 = SherlockLifeCycleService\_pb2.AddHarmonicVibeProfilesRequest().HarmonicVibeProfile().Entry()
entry1.freq = 100.00
entry1.load = 10.0
entry2 = SherlockLifeCycleService\_pb2.AddHarmonicVibeProfilesRequest().HarmonicVibeProfile().Entry()
entry2.freq = 1000.00
entry2.load = 10.00

harmonicprofile1.harmonicVibeProfileEntries.extend(\[entry1, entry2\])
harmonicprofile2.harmonicVibeProfileEntries.extend(\[entry1, entry2\])

message.harmonicVibeProfiles.extend(\[harmonicprofile1, harmonicprofile2\])

response = stub.addHarmonicVibeProfiles(message)
print(str(response))

### Add Shock Event

In this section:

#### AddShockEventRequest

Request to define and add a new shock Life Cycle event.

**Table 1.68. AddShockEventRequest**

**Field**

**Type**

**Label**

**Description**

projectDir

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The full path to the Sherlock project directory.

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The name of the Life Cycle phase to add this event to.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the shock event.

description

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Description of the shock event.

duration

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Event duration length.

durationUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Event duration length units.

numOfCycles

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Number of cycles de ned for this shock event.

cycleType

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The cycle type. For example: "COUNT", "DUTY CYCLE", "PER YEAR", "PER HOUR", etc.

peakLoad

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Maximum load exerted in this event.

peakLoadUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Peak load units.

orientation

[string](ch01s11.xhtml "gRPC Scalar Value Types")

PCB orientation in the format of azimuth, elevation. Example: 30,15

loadDirection

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Load direction in the format of x,y,z. Example: 0,0,1

  

#### AddShockEventResponse

Response from adding a shock event.

**Table 1.69. AddShockEventResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of validation errors.

  

#### Examples: Add Shock Event

##### Proto Request Example

{
  "project": "Tutorial Project",
  "phaseName": "On The Road",
  "eventName": "Test Shock API",
  "description": "Test Description",
  "duration": 2,
  "durationUnits": "ms",
  "numOfCycles": 100,
  "cycleType": "DUTY CYCLE",
  "orientation": "5, 5",
  "loadDirection": "0, 0, -1"
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.AddShockEventRequest()

message.project = "Tutorial Project"
message.phaseName = "On The Road"
message.eventName = "Test Shock API"
message.description = "Test Description"
message.duration = 2
message.durationUnits = "ms"
message.numOfCycles = 100
message.cycleType = "DUTY CYCLE"
message.orientation = "5, 5"
message.loadDirection = "0, 0, -1"

response = stub.addShockEvent(message)

print(str(response))

### Add Shock Profile

In this section:

#### AddShockProfileRequest

Request to define and add a new shock Life Cycle Event Profile.

**Table 1.70. AddShockProfileRequest**

**Field**

**Type**

**Label**

**Description**

__For display purposes, the long string in column two is broken into multiple lines. It should be interpreted as:__ **_AddShockProfileRequest.Entry_**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The name of the life cycle phase this event is associated.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the shock event.

profileName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the shock profie.

duration

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Pulse duration.

durationUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Pulse duration unit.

sampleRate

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Sample rate.

sampleRateUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sample rate unit.

loadUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Load unit.

freqUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Frequency unit.

shockProfileEntries

[AddShockProfile Request.Entry](ch01s06.xhtml#sherlock_ug_AddShockProfileRequest.Entry "AddShockProfileRequest.Entry")

repeated

Primary shape entry for the shock profile.

  

#### AddShockProfileRequest.Entry

**Table 1.71. AddShockProfileRequest.Entry**

**Field**

**Type**

**Label**

**Description**

shape

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Shape of the shock profile.

load

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Load.

freq

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Frequency rate.

decay

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Decay rate.

  

#### AddShockProfileResponse

Response from adding a shock profile.

**Table 1.72. AddShockProfileResponse**

**Field**

**Type**

**Label**

**Description**

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of validation errors.

  

#### Examples: Add Shock Profile

##### Proto Request Example

{
  "project": "Tutorial Project",
  "phaseName": "Environmental",
  "eventName": "2 - Shopping Cart",
  "profileName": "addShockProfileTest",
  "duration": 12,
  "durationUnits": "ms",
  "sampleRate": 0.1,
  "sampleRateUnits": "min",
  "loadUnits": "G",
  "freqUnits": "HZ",
  "shockProfileEntries": \[
    {
      "shape": "FullSine",
      "load": 50.0,
      "freq": 50.0,
      "decay": 0.0
    },
    {
      "shape": "HalfSine",
      "load": 75.0,
      "freq": 75.0,
      "decay": 0.5
    }
  \]
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.AddShockProfileRequest()
message.project = "Tutorial Project"
message.phaseName = "Environmental"
message.eventName = "2 - Shopping Cart"
message.profileName = "addShockProfileTest"
message.duration = 12
message.durationUnits = "ms"
message.sampleRate = 0.1
message.sampleRateUnits = "min"
message.loadUnits = "G"
message.freqUnits = "HZ"
entry1 = SherlockLifeCycleService\_pb2.AddShockProfileRequest().Entry()
entry1.shape = "FullSine"
entry1.load = 50.0
entry1.freq = 50.0
entry1.decay = 0.0
entry2 = SherlockLifeCycleService\_pb2.AddShockProfileRequest().Entry()
entry2.shape = "HalfSine"
entry2.load = 75.0
entry2.freq = 75.0
entry2.decay = 0.5
message.shockProfileEntries.extend(\[entry1, entry2\])
response = stub.addShockProfile(message)

print(str(response))

### Add Shock Profiles

#### AddShockProfilesRequest

Request to define and add new shock life cycle event profiles.

**Table 1.73. AddShockProfilesRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Sherlock project name.

shockProfiles

See below ⇓

repeated

 

 

[AddShockProfilesRequest.ShockProfile](ch01s06.xhtml#sherlock_ug_AddShockProfilesRequest.ShockProfile "AddShockProfilesRequest.ShockProfile")

  

#### AddShockProfilesRequest.ShockProfile

**Table 1.74. AddShockProfilesRequest.ShockProfile**

**Field**

**Type**

**Label**

**Description**

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

The name of the life cycle phase this event is associated.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Name of the shock event.

profileName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Name of the shock profile.

duration

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Pulse duration.

durationUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Pulse duration unit.

sampleRate

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Sample rate.

sampleRateUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Sample rate unit.

loadUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Load unit.

freqUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Frequency unit.

shockProfileEntries

See below ⇓

repeated

Primary shape entry for the shock profile.

 

[AddShockProfilesRequest.ShockProfile.Entry](ch01s06.xhtml#sherlock_ug_AddShockProfilesRequest.ShockProfile.Entry "AddShockProfilesRequest.ShockProfile.Entry")

  

#### AddShockProfilesRequest.ShockProfile.Entry

**Table 1.75. AddShockProfilesRequest.ShockProfile.Entry**

**Field**

**Type**

**Label**

**Description**

shape

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Shape of the shock profile.

load

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Load.

freq

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Frequency rate.

decay

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Decay rate.

  

#### AddShockProfilesResponse

Response from adding shock profiles.

**Table 1.76. AddShockProfilesResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

 

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of validation errors.

  

#### Example: Add Shock Profiles

##### Proto Request Example:

{
  "project": "Tutorial Project",
  "shockProfiles": \[
    {
      "phaseName": "On The Road",
      "eventName": "2 - Pothole",
      "profileName": "First Shock Profile",
      "duration": 100,
      "durationUnits": "sec",
      "sampleRate": 1,
      "sampleRateUnits": "sec",
      "loadUnits": "in/s2",
      "freqUnits": "KHZ",
      "shockProfileEntries": \[
        {
          "shape": "Triangle",
          "load": 15.0,
          "freq": 10.0,
          "decay": 5.0
        },
        {
          "shape": "HalfSine",
          "load": 10.0,
          "freq": 100.0,
          "decay": 4.0
        }
      \]
    },
    {
      "phaseName": "On The Road",
      "eventName": "2 - Pothole",
      "profileName": "First Shock Profile",
      "duration": 100,
      "durationUnits": "ms",
      "sampleRate": 0.1,
      "sampleRateUnits": "ms",
      "loadUnits": "m/s2",
      "freqUnits": "HZ",
      "shockProfileEntries": \[
        {
          "shape": "Triangle",
          "load": 115.0,
          "freq": 101.0,
          "decay": 51.0
        },
        {
          "shape": "HalfSine",
          "load": 110.0,
          "freq": 1010.0,
          "decay": 41.0
        }
      \]
    }
  \]
}

##### Python Example:

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.AddShockProfilesRequest()
shockprofile1 = SherlockLifeCycleService\_pb2.AddShockProfilesRequest().ShockProfile()
shockprofile2 = SherlockLifeCycleService\_pb2.AddShockProfilesRequest().ShockProfile()
message.project = "Tutorial Project"

shockprofile1.phaseName = "On The Road"
shockprofile1.eventName =  "2 - Pothole"
shockprofile1.profileName = "First Shock Profile"
shockprofile1.duration = 100
shockprofile1.durationUnits = "sec"
shockprofile1.sampleRate = 1
shockprofile1.sampleRateUnits = "sec"
shockprofile1.loadUnits = "in/s2"
shockprofile1.freqUnits = "KHZ"

shockprofile2.phaseName = "On The Road"
shockprofile2.eventName =  "2 - Pothole"
shockprofile2.profileName = "Second Shock Profile"
shockprofile2.duration = 100
shockprofile2.durationUnits = "ms"
shockprofile2.sampleRate = .1
shockprofile2.sampleRateUnits = "ms"
shockprofile2.loadUnits = "m/s2"
shockprofile2.freqUnits = "HZ"


entry1 = SherlockLifeCycleService\_pb2.AddShockProfilesRequest().ShockProfile().Entry()
entry1.shape = "Triangle"
entry1.freq = 10.0
entry1.load = 15.00
entry1.decay = 5.0
entry2 = SherlockLifeCycleService\_pb2.AddShockProfilesRequest().ShockProfile().Entry()
entry2.shape = "HalfSine"
entry2.freq = 100.00
entry2.load = 10.00
entry2.decay = 4

shockprofile1.shockProfileEntries.extend(\[entry1, entry2\])

entry1 = SherlockLifeCycleService\_pb2.AddShockProfilesRequest().ShockProfile().Entry()
entry1.shape = "Sawtooth"
entry1.freq = 101.0
entry1.load = 115.00
entry1.decay = 51.0
entry2 = SherlockLifeCycleService\_pb2.AddShockProfilesRequest().ShockProfile().Entry()
entry2.shape = "Haversine"
entry2.freq = 1010.00
entry2.load = 110.00
entry2.decay = 41

shockprofile2.shockProfileEntries.extend(\[entry1, entry2\])

message.shockProfiles.extend(\[shockprofile1, shockprofile2\])

response = stub.addShockProfiles(message)
print(str(response))

### Add Random Vibe Event

In this section:

#### AddRandomVibeEventRequest

**Table 1.77. AddRandomVibeEventRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The name of the Life Cycle phase to add this event to.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the random vibe event.

description

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Description of the random vibe event.

duration

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Event duration length.

durationUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Event duration length units.

numOfCycles

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Number of cycles defined for this random vibe event.

cycleType

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The cycle type. For example: "COUNT", "DUTY CYCLE", "PER YEAR", "PER HOUR", etc.

orientation

[string](ch01s11.xhtml "gRPC Scalar Value Types")

PCB orientation in the format of azimuth, elevation. Example: 30,15

profileType

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Random load profile type. Example valid value is "Uniaxial".

loadDirection

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Load direction in the format of x,y,z. Example: 0,0,1

  

#### AddRandomVibeEventResponse

Response from adding a random vibe event.

**Table 1.78. AddRandomVibeEventResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of validation errors.

  

#### Examples: Add Random Vibe Event

##### Proto Request Example

{
  "project": "Tutorial Project",
  "phaseName": "Environmental",
  "eventName": "Test Random Vibe Event",
  "description": "Random Vibe Event Description",
  "duration": 100,
  "durationUnits": "ms",
  "numOfCycles": 100,
  "cycleType": "DUTY CYCLE",
  "orientation": "30,15",
  "profileType": "Uniaxial",
  "loadDirection": "0, 0, -1"
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.AddRandomVibeEventRequest()

message.project = "Tutorial Project"
message.phaseName = "Environmental"
message.eventName = "Test Random Vibe Event"
message.description = "100"
message.duration = 100
message.durationUnits = "ms"
message.numOfCycles = 100
message.cycleType = "DUTY CYCLE"
message.orientation = "30,15"
message.profileType = "Uniaxial"
message.loadDirection = "0, 0, -1"

response = stub.addRandomVibeEvent(message)

print(str(response))

### Add Random Vibe Profiles

#### AddRandomVibeProfilesRequest

Request to define and add new random vibe life cycle event profiles.

**Table 1.79. AddRandomVibeProfilesRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Sherlock project name.

randomVibeProfiles

See below ⇓

repeated

 

 

[AddRandomVibeProfilesRequest.RandomVibeProfile](ch01s06.xhtml#sherlock_ug_AddRandomVibeProfilesRequest.RandomVibeProfile "AddRandomVibeProfilesRequest.RandomVibeProfile")

  

#### Example: Add Random Vibe Profiles

##### Proto Request Example:

{
  "project": "Tutorial Project",
  "randomVibeProfiles": \[
    {
      "phaseName": "On The Road",
      "eventName": "1 - Vibration",
      "profileName": "First Random Vibe Profile",
      "freqUnits": "HZ",
      "amplUnits": "G2/Hz",
      "randomVibeProfileEntries": \[
        {
          "freq": 10,
          "ampl": 15
        },
        {
          "freq": 100,
          "ampl": 10
        }
      \]
    },
    {
      "phaseName": "Environmental",
      "eventName": "Test RV",
      "profileName": "Second Random Vibe Profile",
      "freqUnits": "HZ",
      "amplUnits": "G2/Hz",
      "randomVibeProfileEntries": \[
        {
          "freq": 100,
          "ampl": 150
        },
        {
          "freq": 1000,
          "ampl": 100
        }
      \]
    }
  \]
}

##### Python Example:

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

# Add random vibe event for multiple profile import

message = SherlockLifeCycleService\_pb2.AddRandomVibeEventRequest()

message.project = "Tutorial Project"
message.phaseName = "Environmental"
message.eventName = "Test RV"
message.description = "test description"
message.duration = 100
message.durationUnits = "ms"
message.numOfCycles = 100
message.cycleType = "DUTY CYCLE"
message.orientation = "30,15"
message.profileType = "Uniaxial"
message.loadDirection = "0, 0, -1"

response = stub.addRandomVibeEvent(message)

message = SherlockLifeCycleService\_pb2.AddRandomVibeProfilesRequest()
randomprofile1 = SherlockLifeCycleService\_pb2.AddRandomVibeProfilesRequest().RandomVibeProfile()
randomprofile2 = SherlockLifeCycleService\_pb2.AddRandomVibeProfilesRequest().RandomVibeProfile()

message.project = "Tutorial Project"
randomprofile1.phaseName = "On The Road"
randomprofile1.eventName = "1 - Vibration"
randomprofile1.profileName = "First Random Vibe Profile"
randomprofile1.freqUnits = "HZ"
randomprofile1.amplUnits = "G2/Hz"

randomprofile2.phaseName = "Environmental"
randomprofile2.eventName = "Test RV"
randomprofile2.profileName = "Second Random Vibe Profile"
randomprofile2.freqUnits = "HZ"
randomprofile2.amplUnits = "G2/Hz"


entry1 = SherlockLifeCycleService\_pb2.AddRandomVibeProfilesRequest().RandomVibeProfile().Entry()
entry1.freq = 10.0
entry1.ampl = 15.00
entry2 = SherlockLifeCycleService\_pb2.AddRandomVibeProfilesRequest().RandomVibeProfile().Entry()
entry2.freq = 100.00
entry2.ampl = 10.00

randomprofile1.randomVibeProfileEntries.extend(\[entry1, entry2\])

entry1 = SherlockLifeCycleService\_pb2.AddRandomVibeProfilesRequest().RandomVibeProfile().Entry()
entry1.freq = 100.0
entry1.ampl = 150.00
entry2 = SherlockLifeCycleService\_pb2.AddRandomVibeProfilesRequest().RandomVibeProfile().Entry()
entry2.freq = 1000.00
entry2.ampl = 100.00

randomprofile2.randomVibeProfileEntries.extend(\[entry1, entry2\])

message.randomVibeProfiles.extend(\[randomprofile1, randomprofile2\])

response = stub.addRandomVibeProfiles(message)
print(str(response))

#### AddRandomVibeProfilesRequest.RandomVibeProfile

**Table 1.80. AddRandomVibeProfilesRequest.RandomVibeProfile**

**Field**

**Type**

**Label**

**Description**

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

The name of the life cycle phase this event is associated.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Name of the random vibe event.

profileName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Name of the random vibe profile.

freqUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Frequency Units.

amplUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Amplitude units.

randomVibeProfileEntries

See below ⇓

repeated

 

 

[AddRandomVibeProfilesRequest.RandomVibeProfile.Entry](ch01s06.xhtml#sherlock_ug_AddRandomVibeProfilesRequest.RandomVibeProfile.Entry "AddRandomVibeProfilesRequest.RandomVibeProfile.Entry")

  

#### AddRandomVibeProfilesRequest.RandomVibeProfile.Entry

**Table 1.81. AddRandomVibeProfilesRequest.RandomVibeProfile.Entry**

**Field**

**Type**

**Label**

**Description**

freq

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Frequency.

ampl

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Amplitude.

  

#### AddRandomVibeProfilesResponse

Response from adding random vibe profiles.

**Table 1.82. AddRandomVibeProfilesResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

 

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of validation errors.

  

### Add Random Vibe Profile

In this section:

#### AddRandomVibeProfileRequest

Request to define and add a new random vibe life cycle event profile.

**Table 1.83. AddRandomVibeProfileRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The name of the life cycle phase this event is associated.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the random vibe event.

profileName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the random vibe profile.

freqUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Frequency units.

amplUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Amplitude units.

randomProfileEntries

[AddRandomProfileRequest.Entry](ch01s06.xhtml#sherlock_ug_AddRandomVibeProfileRequest.Entry "AddRandomVibeProfileRequest.Entry")

repeated

  

#### AddRandomVibeProfileRequest.Entry

**Table 1.84. AddRandomVibeProfileRequest.Entry**

**Field**

**Type**

**Label**

**Description**

freq

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Frequency.

ampl

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Amplitude.

  

#### AddRandomVibeProfileResponse

Response from adding a random vibe profile.

**Table 1.85. AddRandomVibeProfileResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of validation errors.

  

#### Examples: SherlockLifeCycleService.addRandomVibeProfile()

##### Proto Request Example

{
  "project": "Tutorial Project",
  "phaseName": "On The Road",
  "eventName": "1 - Vibration",
  "profileName": "Random Profile – Script Creation",
  "freqUnits": "Hz",
  "amplUnits": "G2/Hz",
  "randomVibeProfileEntries": \[
    {
      "freq": 10,
      "ampl": 15
    },
    {
      "freq": 100,
      "ampl": 10
    }
  \]
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.AddRandomProfileRequest()

message.project = "Tutorial Project"
message.phaseName = "On The Road"
message.eventName = "1 - Vibration"
message.profileName = "Random Profile - Script Creation"
message.freqUnits = "Hz"
message.amplUnits = "G2/Hz"

entry1 = SherlockLifeCycleService\_pb2.AddRandomProfileRequest().Entry()
entry1.freq = 10.0
entry1.ampl = 15.00
entry2 = SherlockLifeCycleService\_pb2.AddRandomProfileRequest().Entry()
entry2.freq = 100.00
entry2.ampl = 10.00

message.randomProfileEntries.extend(\[entry1, entry2\])

response = stub.addRandomProfile(message)

print(str(response))

### Add Thermal Event

In this section:

#### AddThermalEventRequest

Request to define and add a new thermal Life Cycle event.

**Table 1.86. AddThermalEventRequest**

**Field**

**Type**

**Label**

**Description**

projectDir

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The full path to the Sherlock project directory.

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The name of the Life Cycle phase to add this event to.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the thermal event.

description

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Description of the thermal event.

numOfCycles

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Number of cycles defined for this thermal event.

cycleType

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The cycle type. For example: "COUNT", "DUTY CYCLE", "PER YEAR", "PER HOUR", etc.

cycleState

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The Life Cycle state. For example: "OPERATING", "STORAGE".

  

#### AddThermalEventResponse

Response from adding a thermal event.

**Table 1.87. AddThermalEventResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of validation errors.

  

#### Examples: Add Thermal Event

##### Proto Request Example

{
  "project": "Tutorial Project",
  "phaseName": "On The Road",
  "eventName": "Test Thermal Event Creation API",
  "description": "Test Description",
  "numOfCycles": 99,
  "cycleType": "DUTY CYCLE",
  "cycleState": "STORAGE"
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.AddThermalEventRequest()

message.project = "Tutorial Project"
message.phaseName = "On The Road"
message.eventName = "Test Thermal Event Creation API"
message.description = "Test Description"
message.numOfCycles = 99
message.cycleType = "DUTY CYCLE"
message.cycleState = "STORAGE"

response = stub.addThermalEvent(message)

print(str(response))

### Add Thermal Profile

In this section:

#### AddThermalProfileRequest

Request to define and add a new thermal Life Cycle Event Profile.

**Table 1.88. AddThermalProfileRequest**

**Field**

**Type**

**Label**

**Description**

_For display purposes, the string in column two is broken into multiple lines and should be read as: **AddThermalProfileRequest.Entry**_

projectDir

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The full path to the Sherlock project directory.

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The name of the Life Cycle phase this event is associated.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the thermal event.

profileName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the thermal profile.

timeUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Time Units.

tempUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Temperature units.

thermalProfile Entries

[AddThermalProfile Request.Entry](ch01s06.xhtml#sherlock_ug_AddThermalProfileRequest.Entry "AddThermalProfileRequest.Entry")

repeated

  

#### AddThermalProfileRequest.Entry

**Table 1.89. AddThermalProfileRequest.Entry**

**Field**

**Type**

**Label**

**Description**

step

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the step.

type

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Profile step type. "HOLD" or "RAMP".

time

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Time duration of the step.

temp

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Temperature of the step.

  

#### AddThermalProfileResponse

Response from adding a thermal profile.

**Table 1.90. AddThermalProfileResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of validation errors.

  

#### Examples: Add Thermal Profile

##### Proto Request Example

{
  "project": "Tutorial Project",
  "phaseName": "Environmental",
  "eventName": "1 - Temp Cycle",
  "profileName": "addThermalProfileTest",
  "timeUnits": "hr",
  "tempUnits": "C",
  "thermalProfileEntries": \[
    {
      "step": "Min Temp",
      "type": "HOLD",
      "time": 12.0,
      "temp": 20.0
    },
    {
      "step": "Ramp",
      "type": "RAMP",
      "time": 12.0,
      "temp": 130.0
    },
    {
      "step": "Max Temp",
      "type": "HOLD",
      "time": 12.0,
      "temp": 130.0
    },
    {
      "step": "Ramp2",
      "type": "RAMP",
      "time": 12.0,
      "temp": 20.0
    }
  \]
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.AddThermalProfileRequest()
message.project = "Tutorial Project"
message.phaseName = "Environmental"
message.eventName = "1 - Temp Cycle"
message.profileName = "addThermalProfileTest"
message.timeUnits = "hr"
message.tempUnits = "C"
entry1 = SherlockLifeCycleService\_pb2.AddThermalProfileRequest().Entry()
entry1.step = "Min Temp"
entry1.time = 12.0
entry1.type = "HOLD"
entry1.temp = 20.0
entry2 = SherlockLifeCycleService\_pb2.AddThermalProfileRequest().Entry()
entry2.step = "Ramp"
entry2.time = 12.0
entry2.type = "RAMP"
entry2.temp = 130.0
entry3 = SherlockLifeCycleService\_pb2.AddThermalProfileRequest().Entry()
entry3.step = "Max Temp"
entry3.time = 12.0
entry3.type = "HOLD"
entry3.temp = 130.0
entry4 = SherlockLifeCycleService\_pb2.AddThermalProfileRequest().Entry()
entry4.step = "Ramp2"
entry4.time = 12.0
entry4.type = "RAMP"
entry4.temp = 20.0
message.thermalProfileEntries.extend(\[entry1, entry2, entry3, entry4\])
response = stub.addThermalProfile(message)

print(str(response))

### Add Thermal Profiles

#### AddThermalProfilesRequest

Request to define and add a new thermal life cycle event profiles.

**Table 1.91. AddThermalProfilesRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Sherlock project name.

thermalProfiles

See below ⇓

repeated

 

 

[AddThermalProfilesRequest.ThermalProfile](ch01s06.xhtml#sherlock_ug_AddThermalProfilesRequest.ThermalProfile "AddThermalProfilesRequest.ThermalProfile")

  

#### AddThermalProfilesRequest.ThermalProfile

**Table 1.92. AddThermalProfilesRequest.ThermalProfile**

**Field**

**Type**

**Label**

**Description**

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

The name of the life cycle phase this event is associated.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Name of the thermal event.

profileName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Name of the thermal profile.

timeUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Time Units.

tempUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Temperature units.

thermalProfileEntries

See below ⇓

repeated

 

 

[AddThermalProfilesRequest.ThermalProfile.Entry](ch01s06.xhtml#sherlock_ug_AddThermalProfilesRequest.ThermalProfile.Entry "AddThermalProfilesRequest.ThermalProfile.Entry")

  

#### AddThermalProfilesRequest.ThermalProfile.Entry

**Table 1.93. AddThermalProfilesRequest.ThermalProfile.Entry**

**Field**

**Type**

**Label**

**Description**

step

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Name of the step.

type

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Profile step type. "HOLD" or "RAMP".

time

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Time duration of the step.

temp

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Temperature of the step.

  

#### AddThermalProfilesResponse

Response from adding thermal profiles.

**Table 1.94. AddThermalProfilesResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

 

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of validation errors.

  

#### Example: Add Thermal Profiles

##### Proto Request Example:

{
  "project": "Tutorial Project",
  "thermalProfiles": \[
    {
      "phaseName": "Environmental",
      "eventName": "1 - Temp Cycle",
      "profileName": "First Thermal Profile",
      "timeUnits": "min",
      "tempUnits": "F",
      "thermalProfileEntries": \[
        {
          "step": "Min Temp",
          "type": "HOLD",
          "time": 15,
          "temp": 15
        },
        {
          "step": "Ramp Up",
          "type": "RAMP",
          "time": 25,
          "temp": 50
        },
        {
          "step": "Max Temp",
          "type": "HOLD",
          "time": 15,
          "temp": 50
        },
        {
          "step": "Ramp Down",
          "type": "RAMP",
          "time": 15,
          "temp": 15
        }
      \]
    },
    {
      "phaseName": "On The Road",
      "eventName": "4 - Thermal Shock",
      "profileName": "Second Thermal Profile",
      "timeUnits": "min",
      "tempUnits": "C",
      "thermalProfileEntries": \[
        {
          "step": "Min Temp",
          "type": "HOLD",
          "time": 15,
          "temp": 15
        },
        {
          "step": "Ramp Up",
          "type": "RAMP",
          "time": 25,
          "temp": 50
        },
        {
          "step": "Max Temp",
          "type": "HOLD",
          "time": 15,
          "temp": 50
        },
        {
          "step": "Ramp Down",
          "type": "RAMP",
          "time": 15,
          "temp": 15
        }
      \]
    }
  \]
}

##### Python Example:

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.AddThermalProfilesRequest()
thermalprofile1 = SherlockLifeCycleService\_pb2.AddThermalProfilesRequest().ThermalProfile()
thermalprofile2 = SherlockLifeCycleService\_pb2.AddThermalProfilesRequest().ThermalProfile()
message.project = "Tutorial Project"

thermalprofile1.phaseName = "Environmental"
thermalprofile1.eventName =  "1 - Temp Cycle"
thermalprofile1.profileName = "First Thermal Profile"
thermalprofile1.timeUnits = "min"
thermalprofile1.tempUnits = "F"

thermalprofile2.phaseName = "On The Road"
thermalprofile2.eventName =  "4 - Thermal Shock"
thermalprofile2.profileName = "Second Thermal Profile"
thermalprofile2.timeUnits = "min"
thermalprofile2.tempUnits = "C"

entry1 = SherlockLifeCycleService\_pb2.AddThermalProfilesRequest().ThermalProfile().Entry()
entry1.step = "Min Temp"
entry1.type = "HOLD"
entry1.time = 15
entry1.temp = 15
entry2 = SherlockLifeCycleService\_pb2.AddThermalProfilesRequest().ThermalProfile().Entry()
entry2.step = "Ramp Up"
entry2.type = "RAMP"
entry2.time = 25
entry2.temp = 50

entry3 = SherlockLifeCycleService\_pb2.AddThermalProfilesRequest().ThermalProfile().Entry()
entry3.step = "Max Temp"
entry3.type = "HOLD"
entry3.time = 15
entry3.temp = 50
entry4 = SherlockLifeCycleService\_pb2.AddThermalProfilesRequest().ThermalProfile().Entry()
entry4.step = "Ramp Down"
entry4.type = "RAMP"
entry4.time = 15
entry4.temp = 15

thermalprofile1.thermalProfileEntries.extend(\[entry1, entry2, entry3, entry4\])
thermalprofile2.thermalProfileEntries.extend(\[entry1, entry2, entry3, entry4\])

message.thermalProfiles.extend(\[thermalprofile1, thermalprofile2\])

response = stub.addThermalProfiles(message)
print(str(response))

### Create Life Phase

In this section:

#### CreateLifePhaseRequest

Request for creating a life phase.

**Table 1.95. CreateLifePhaseRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The name of new life phase.

description

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Description of new life phase.

duration

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Event duration length.

durationUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Event duration length units.

numOfCycles

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Number of cycles defined for new life phase.

cycleType

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The cycle type. For example: "COUNT", "DUTY CYCLE", "PER YEAR", "PER HOUR", etc.

  

#### CreateLifePhaseResponse

Response from creating a life phase.

**Table 1.96. CreateLifePhaseResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of error messages

  

#### Examples: Create Life Phase

##### Proto Request Example

{
  "project": "Tutorial Project",
  "phaseName": "createLifePhase Test",
  "description": "Test Life Phase Created",
  "duration": 100,
  "durationUnits": "ms",
  "numOfCycles": 100,
  "cycleType": "DUTY CYCLE"
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.CreateLifePhaseRequest()

message.project = "Tutorial Project"
message.phaseName = "createLifePhase Test"
message.description = "Test Life Phase Created"
message.duration = 100
message.durationUnits = "ms"
message.numOfCycles = 100
message.cycleType = "DUTY CYCLE"

response = stub.createLifePhase(message)

print(str(response))

### Delete Event

#### DeleteEventRequest

Request to delete a life cycle event in a project.

**Table 1.97. DeleteEventRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Sherlock project name.

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

The name of the life cycle phase from which to delete this event.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Name of the event to be deleted.

  

#### Examples: SherlockLifeCycleService.deleteEvent()

##### Proto Request Example

{
  "project": "Tutorial Project",
  "phaseName": "On The Road",
  "eventName": "4 – Thermal Shock"
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.DeleteEventRequest()

message.project = "Tutorial Project"
message.phaseName = "On The Road"
message.eventName = "4 - Thermal Shock"

response = stub.deleteEvent(message)

print(str(response))

### Delete Life Phase

In this section:

#### DeletePhaseRequest

Request for creating a life phase.

**Table 1.98. DeletePhaseRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Sherlock life phase name.

  

#### DeleteLifePhaseResponse

Response for deleting a life phase

**Table 1.99. DeleteLifePhaseResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code") 

  

#### Examples: SherlockLifeCycleService.deletePhase()

##### Proto Request Example

{
  "project": "Tutorial Project",
  "phaseName": "On The Road"
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.DeletePhaseRequest()

message.project = "Tutorial Project"
message.phaseName = "On The Road"

response = stub.deletePhase(message)

print(str(response))

### Events

Represents an event.

**Table 1.100. Events**

**Field**

**Type**

**Label**

**Description**

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

The name of the Life Cycle Phase associated with this event.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Event name.

  

### List Amplitude Units

In this section:

#### ListAmplUnitsRequest

Request for a list of amplitude units.

#### ListAmplUnitsResponse

Represents a list of amplitude units.

**Table 1.101. ListAmplUnitsResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

amplUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of amplitude of units.

  

#### Examples: List Amplitude Units

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.ListAmplUnitsRequest()

response = stub.listAmplUnits(message)

print(str(response))

### List Duration Units

In this section:

#### ListDurationUnitsRequest

Request for a list of duration units for event settings.

#### ListDurationUnitsResponse

Represents a list of duration units for event settings in Life Cycle.

**Table 1.102. ListDurationUnitsResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

durationUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of duration units.

  

#### Examples: List Duration Units

##### Proto Request Example

{ }

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.ListDurationUnitsRequest()

response = stub.listDurationUnits(message)

print(str(response))

### List Frequency Units

In this section:

#### ListFreqUnitsRequest

Request for a list of frequency units.

#### ListFreqUnitsResponse

Represents a list of frequency units.

**Table 1.103. ListFreqUnitsResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

freqUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of frequency units. For example: "HZ", "KHZ", "MHZ", "GHZ".

  

#### Examples: List Frequency Units

##### Proto Request Example

{ }

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.ListFreqUnitsRequest()

response = stub.listFreqUnits(message)

print(str(response))

### List Harmonic Events

In this section:

#### ListHarmonicEventsRequest

Request for a list of harmonic events defined for a project.

**Table 1.104. ListHarmonicEventsRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

  

#### ListHarmonicEventsResponse

Represents a list of harmonic events defined for a project.

**Table 1.105. ListHarmonicEventsResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

event

[Events](ch01s06.xhtml#sherlock_ug_api_events "Events")

repeated

List of harmonic events.

  

#### List Harmonic Events Example

##### Proto Request Example

{
  "project": "Tutorial Project"
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.ListHarmonicEventsRequest()

message.project = "Tutorial Project"

response = stub.listHarmonicEvents(message)

print(str(response))

### List Harmonic Profile Types

In this section:

#### ListHarmonicProfileTypesRequest

Request for a list of Harmonic load profile types.

#### ListHarmonicProfileTypesResponse

Represents a list of Harmonic load profile types.

**Table 1.106. ListHarmonicProfileTypesResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

types

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of Harmonic load profile types. "Uniaxial", "Triaxial".

  

#### Examples: List Harmonic Profile Types

##### Proto Request Example

{ }

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.ListHarmonicProfileTypesRequest()

response = stub.listHarmonicProfileTypes(message)

print(str(response))

### List Life Cyle Events

In this section:

#### ListLCEventsRequest

Request for a list of Life Cycle phases and events for a project.

**Table 1.107. ListLCEventsRequest**

**Field**

**Type**

**Label**

**Description**

projectDir

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The full path to the Sherlock project directory.

  

#### ListLCEventsResponse

Represents the Life Cycle phases and events for a Sherlock project.

**Table 1.108. ListLCEventsResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

lcPhases

[ListLCEventsResponse.LifeCyclePhase](ch01s06.xhtml#sherlock_ug_ListLCEventsResponse.LifeCyclePhase "ListLCEventsResponse.LifeCyclePhase")

repeated

  

#### ListLCEventsResponse.LifeCyclePhase

**Table 1.109. ListLCEventsResponse.LifeCyclePhase**

**Field**

**Type**

**Label**

**Description**

For display purposes, the long string in column two is broken into multiple lines. It should be interpreted as: **_ListLCEventsResponse.LifeCyclePhase.LifeCycleEvent_**

name

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Life cycle phase name.

description

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Life cycle phase description.

lcEvents

[ListLCEventsResponse .LifeCyclePhase.LifeCycleEvent](ch01s06.xhtml#sherlock_ug_ListLCEventsResponse.LifeCyclePhase.LifeCycleEvent "ListLCEventsResponse.LifeCyclePhase.LifeCycleEvent")

repeated

  

#### ListLCEventsResponse.LifeCyclePhase.LifeCycleEvent

**Table 1.110. ListLCEventsResponse.LifeCyclePhase.LifeCycleEvent**

**Field**

**Type**

**Label**

**Description**

name

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Life cycle event name.

description

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Life cycle event description.

type

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Life cycle type. For example: "Thermal Event", "Shock Event", "Random Vibe", "Harmonic Vibe".

  

#### Examples: List Life Cycle Events

##### Proto Request Example

{
  "project": "Tutorial Project"
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.ListLCEventsRequest()

message.project = "Tutorial Project"

response = stub.listLifeCycleEvents(message)

print(str(response))

### List Life Cycle States

In this section:

#### ListLCStatesRequest

Request for a list of Life Cycle states.

#### ListLCStatesResponse

**Table 1.111. ListLCStatesResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

states

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of Life Cycle states. For example: "Operating", "Storage".

  

#### Examples: List Cycle States

##### Proto Request Example

{ }

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.ListLCStatesRequest()

response = stub.listLifeCycleStates(message)

print(str(response))

### List Life Cycle Types

In this section:

#### ListLCTypesRequest

Request for a list of Life Cycle types.

#### ListLCTypesResponse

Represents a list of Life Cycle types.

**Table 1.112. ListLCTypesResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

types

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of Life Cycle types. For example, "DUTY CYCLE", "PER YEAR", "PER HOUR", etc.

  

#### Examples: List Life Cycle Types

##### Proto Request Example

{ }

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.ListLCTypesRequest()

response = stub.listLifeCycleTypes(message)

print(str(response))

### List Random Vibe Profile Types

In this section:

#### ListRandomVibeProfileTypesRequest

Request for a list of Random Vibe profile types.

#### ListRandomVibeProfileTypesResponse

Represents a list of Random Vibe profile types.

**Table 1.113. ListRandomVibeProfileTypesResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

types

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of Random Vibe profile types. Currently there is only one: "Uniaxial".

  

#### Examples: SherlockLifeCycleService.listRandomVibeProfileTypes()

##### Proto Request Example

{}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.ListRandomVibeProfileTypesRequest()

response = stub.listRandomVibeProfileTypes(message)
print(str(response))

### List Random Vibe Event

In this section:

#### ListRandomVibeEventsRequest

Request for a list of random vibe events defined for a project.

**Table 1.114. ListRandomVibeEventsRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

  

#### ListRandomVibeEventsResponse

Represents a list of random vibe events defined for a project.

**Table 1.115. ListRandomVibeEventsResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

event

[Events](ch01s06.xhtml#sherlock_ug_api_events "Events")

repeated

List of random vibe events.

  

#### List Random Vibe Events Example

##### Proto Request Example

{
  "project": "Tutorial Project"
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.ListRandomVibeEventsRequest()

message.project = "Tutorial Project"

response = stub.listRandomVibeEvents(message)

print(str(response))

### List Shock Events

In this section:

#### ListShockEventsRequest

Request for a list of shock events defined for a project.

**Table 1.116. ListShockEventsRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

  

#### ListShockEventsResponse

Represents a list of shock events defined for a project.

**Table 1.117. ListShockEventsResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

event

[Events](ch01s06.xhtml#sherlock_ug_api_events "Events")

repeated

List of shock events.

  

#### List Shock Events Example

##### Proto Request Example

{
  "project": "Tutorial Project"
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.ListShockEventsRequest()

message.project = "Tutorial Project"

response = stub.listShockEvents(message)

print(str(response))

### List Shock Load Units

In this section:

#### ListShockLoadUnitsRequest

Request for a list of Shock load units.

#### ListShockLoadUnitsResponse

Represents a list of Shock load units.

**Table 1.118. ListShockLoadUnitsResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

units

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of Shock load units. For example: "G", "m/s2", "mm/s2".

  

#### Examples: List Shock Load Units

##### Proto Request Example

{ }

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.ListShockLoadUnitsRequest()

response = stub.listShockLoadUnits(message)

print(str(response))

### List Shock Pulses

In this section:

#### ListShockPulsesRequest

Request for a list of shock pulses.

#### ListShockPulsesResponse

Represents a list of shock pulses.

**Table 1.119. ListShockPulsesResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

shockPulse

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of shock pulses. For example: "FullSine", "HalfSine", "Triangle", "Sawtooth", "FullSquare".

  

#### Examples: List Shock Pulses

##### Proto Request Example

{ }

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.ListShockPulsesRequest()

response = stub.listShockPulses(message)

print(str(response))

### List Temperature Units

In this section:

#### ListTempUnitsRequest

Request for a list of temperature units.

#### ListTempUnitsResponse

Represents a list of temperature units.

**Table 1.120. ListTempUnitsResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

tempUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of temperature units. For example: "C", "F", "K".

  

#### Examples: List Temp Units

##### Proto Request Example

{ }

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.ListTempUnitsRequest()

response = stub.listTempUnits(message)

print(str(response))

### Load Harmonic Profile

In this section:

#### LoadHarmonicProfileRequest

Request to load a harmonic Life Cycle Event Profile from a .dat or .csv file.

**Table 1.121. LoadHarmonicProfileRequest**

**Field**

**Type**

**Label**

**Description**

_For display purposes, the long string in column two is broken into multiple lines. It should be interpreted as: **LoadHarmonicProfileRequest.CSVProps**_

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The name of the Life Cycle phase this event is associated.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Harmonic event name.

filePath

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The full path for the .dat or .csv file.

harmonicCsvProps

[LoadHarmonicProfile Request.CSVProps](ch01s06.xhtml#sherlock_ug_LoadHarmonicProfileRequest.CSVProps "LoadHarmonicProfileRequest.CSVProps")

Properties for a .csv file load.

  

#### LoadHarmonicProfileRequest.CSVProps

.csv file properties. This is only required for a .csv file load.

**Table 1.122. LoadHarmonicProfileRequest.CSVProps**

**Field**

**Type**

**Label**

**Description**

profileName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the harmonic profile.

headerRowNumber

[int32](ch01s11.xhtml "gRPC Scalar Value Types")

Header row number in the .csv file.

columnDelim

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Delimiter to separate the columns.

numericFormat

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Numeric format.

freqColumn

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Frequency column name.

freqUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Frequency units.

loadColumn

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Load column name.

loadUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Load units.

  

#### LoadHarmonicProfileResponse

Response from loading a harmonic profile from a .dat or .csv file.

**Table 1.123. LoadHarmonicProfileResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of validation errors.

  

#### Examples: Load Harmonic Profile

##### Proto Request Example

{
  "project": "Tutorial Project",
  "phaseName": "On The Road",
  "eventName": "5 - Harmonic Vibe",
  "filePath": "C:\\\\Users\\\\jdoe\\\\Documents\\\\Default Profile.dat"
}

##### Proto Request Example (CSV)

{
  "project": "Tutorial Project",
  "phaseName": "On The Road",
  "eventName": "Test Harmonic API",
  "filePath": " C:\\\\Users\\\\jdoe\\\\Documents\\\\Default Profile.csv",
  "harmonicCsvProps": {
    "profileName": "Harmonic Profile - Script Test",
    "headerRowNumber": 0,
    "columnDelim": "Comma",
    "numericFormat": "English (United States)",
    "freqColumn": "Freq (HZ)",
    "freqUnits": "Hz",
    "loadColumn": "Load (G)",
    "loadUnits": "G"
  }
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.LoadHarmonicProfileRequest()
message.project = "Tutorial Project"
message.phaseName = "On The Road"
message.eventName = "Test Harmonic API"
message.filePath = "\\\\Default Profile.csv"

CSVProperties = SherlockLifeCycleService\_pb2.LoadHarmonicProfileRequest().CSVProps()
CSVProperties.profileName = "Harmonic Profile - Script Test"
CSVProperties.headerRowNumber = 0
CSVProperties.columnDelim = "Comma"
CSVProperties.numericFormat = "English (United States)"
CSVProperties.freqColumn = "Freq (HZ)"
CSVProperties.freqUnits = "Hz"
CSVProperties.loadColumn = "Load (G)"
CSVProperties.loadUnits = "G"

message.harmonicCsvProps.CopyFrom(CSVProperties)

response = stub.loadHarmonicProfile(message)

print(str(response))

### Load Random Vibe Profile

In this section:

#### LoadRandomVibeProfileRequest

Request to load a random vibe life cycle event profile from a .dat or .csv file.

**Table 1.124. LoadRandomVibeProfileRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The name of the life cycle phase this event is associated.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Random vibe event name.

filePath

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The full path for the .dat or .csv file.

randomVibeCsvProps

[LoadRandomVibeProfile Request.CSVProps](ch01s06.xhtml#sherlock_ug_LoadRandomVibeProfileRequest.CSVProps "LoadRandomVibeProfileRequest.CSVProps")

Properties for a CSV file load.

  

#### LoadRandomVibeProfileRequest.CSVProps

CSV file properties. This is only required for a CSV file load.

**Table 1.125. LoadRandomVibeProfileRequest.CSVProps**

**Field**

**Type**

**Label**

**Description**

profileName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the random vibe profile.

headerRowNumber

[int32](ch01s11.xhtml "gRPC Scalar Value Types")

Header row number in the .csv file.

columnDelim

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Delimiter to separate the columns.

numericFormat

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Numeric format.

freqColumn

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Frequency column name.

freqUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Frequency units.

amplColumn

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Amplitude column name.

amplUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Amplitude units.

  

#### LoadRandomVibeProfileResponse

Response from loading a random vibe profile from a .dat or .csv file.

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of validation errors.

#### SherlockLifeCycleService.loadRandomVibeProfile()

##### Proto Request Example

{
  "project": "Tutorial Project",
  "phaseName": "On The Road",
  "eventName": "1 - Vibration",
  "filePath": "C:\\\\Temp\\\\Random Vibe Profile.csv",
  "randomVibeCsvProps": {
    "profileName": "Random Vibe – Script Test",
    "headerRowNumber": 0,
    "columnDelim": "Comma",
    "numericFormat": "English (United States)",
    "freqColumn": "Freq (HZ)",
    "freqUnits": "Hz",
    "amplColumn": "Ampl (G2/Hz)",
    "amplUnits": "G2/Hz"
  }
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc
import os

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.LoadRandomVibeProfileRequest()
message.project = "Tutorial Project"
message.phaseName = "On The Road"
message.eventName = "1 - Vibration"
message.filePath = os.getcwd() + "\\\\Random Vibe Profile.csv"

CSVProperties = SherlockLifeCycleService\_pb2.LoadRandomVibeProfileRequest().CSVProps()
CSVProperties.profileName = "Random Vibe - Script Test"
CSVProperties.headerRowNumber = 0
CSVProperties.columnDelim = "Comma"
CSVProperties.numericFormat = "English (United States)"
CSVProperties.freqColumn = "Freq (HZ)"
CSVProperties.freqUnits = "Hz"
CSVProperties.amplColumn = "Ampl (G2/Hz)"
CSVProperties.amplUnits = "G2/Hz"

message.randomCsvProps.CopyFrom(CSVProperties)

response = stub.loadRandomVibeProfile(message)

print(str(response))

### Load Shock Profile Dataset

In this section:

#### LoadShockProfileDatasetRequest

Request to load a shock Life Cycle Event Profile using dataset (time and load) from a .dat or .csv file.

**Table 1.126. LoadShockProfileDatasetRequest**

**Field**

**Type**

**Label**

**Description**

_For display purposes, the long string in column two is broken into multiple lines. It should be interpreted as: **LoadShockProfileDatasetRequest.CSVProps**_

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The name of the Life Cycle phase this event is associated.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Shock event name.

lePath

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The full path for the .dat or .csv file.

shockDsCsvProps

[LoadShockProfile DatasetRequest.CSVProps](ch01s06.xhtml#sherlock_ug_LoadShockProfileDatasetRequest.CSVProps "LoadShockProfileDatasetRequest.CSVProps")

Properties for a .csv file load.

  

#### LoadShockProfileDatasetRequest.CSVProps

.csv file properties. This is only required for a .csv file load.

**Table 1.127. sherlock\_ug\_LoadShockProfileDatasetRequest.CSVProps**

**Field**

**Type**

**Label**

**Description**

profileName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the shock profile.

headerRowNumber

[int32](ch01s11.xhtml "gRPC Scalar Value Types")

Header row number in the .csv file.

columnDelim

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Delimiter to separate the columns.

numericFormat

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Numeric format.

timeColumn

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Time column name.

timeUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Time units.

loadColumn

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Load column name.

loadUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Load units.

  

#### LoadShockProfileDatasetResponse

Response from loading a shock profile using dataset from a .dat or .csv file.

**Table 1.128. LoadShockProfileDatasetResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of validation errors.

  

#### Examples: Load Shock Profile Dataset

##### Proto Request Example

{
  "project": "Tutorial",
  "phaseName": "Environmental",
  "eventName": "3 - Earthquake",
  "filePath": "C:\\\\Users\\\\jdoe\\\\Documents\\\\Full Sine Damped.csv",
  "shockDsCsvProps": {
    "profileName": "Shock Dataset",
    "headerRowNumber": 0,
    "columnDelim": "Comma",
    "numericFormat": "English (United States)",
    "timeColumn": "Time (ms)",
    "timeUnits": "ms",
    "loadColumn": "Load (G)",
    "loadUnits": "G"
  }
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.LoadShockProfileDatasetRequest()

message.project = "Tutorial Project"
message.phaseName = "Environmental"
message.eventName = "3 - Earthquake"
message.filePath = "C:\\\\Users\\\\jdoe\\\\Documents\\\\Full Sine Damped.csv"

CSVProperties = SherlockLifeCycleService\_pb2.LoadShockProfileDatasetRequest().CSVProps()
CSVProperties.profileName = "Shock Dataset"
CSVProperties.headerRowNumber = 0
CSVProperties.columnDelim = "Comma"
CSVProperties.numericFormat = "English (United States)"
CSVProperties.timeColumn = "Time (ms)"
CSVProperties.timeUnits = "ms"
CSVProperties.loadColumn = "Load (G)"
CSVProperties.loadUnits = "G"

message.shockDsCsvProps.CopyFrom(CSVProperties)

response = stub.loadShockProfileDataset(message)

print(str(response))

### Load Shock Profile Pulses

In this section:

#### LoadShockProfilePulsesRequest

Request to load a shock Life Cycle Event Profile using pulses from a .dat or .csv file.

**Table 1.129. LoadShockProfilePulsesRequest**

**Field**

**Type**

**Label**

**Description**

_For display purposes, the long string in column two is broken into multiple lines. It should be interpreted as: **LoadShockProfilePulsesRequest.CSVProps**_

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The name of the Life Cycle phase this event is associated.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Shock event name.

filePath

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The full path for the .dat or .csv file.

shockPulsesCsvProps

[LoadShockProfile PulsesRequest.CSVProps](ch01s06.xhtml#sherlock_ug_LoadShockProfilePulsesRequest.CSVProps "LoadShockProfilePulsesRequest.CSVProps")

Properties for a .csv file load.

  

#### LoadShockProfilePulsesRequest.CSVProps

.csv file properties. This is only required for a .csv file load.

**Table 1.130. LoadShockProfilePulsesRequest.CSVProps**

**Field**

**Type**

**Label**

**Description**

profileName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the shock profile.

headerRowNumber

[int32](ch01s11.xhtml "gRPC Scalar Value Types")

Header row number in the .csv file.

columnDelim

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Delimiter to separate the columns.

numericFormat

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Numeric format.

duration

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Pulse duration length.

durationUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Pulse duration time units.

sampleRate

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Sample rate.

sampleRateUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sample rate units.

shapeColumn

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Pulse shape column name.

loadColumn

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Load column name.

loadUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Load units.

freqColumn

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Frequency column name.

freqUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Frequency units.

decayColumn

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Decay column name.

  

#### LoadShockProfilePulsesResponse

Response from loading a shock profile using pulses from a .dat or .csv file.

**Table 1.131. LoadShockProfilePulsesResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of validation errors.

  

#### Examples: Load Shock Profile Pulses

##### Proto Request Example

{
  "project": "Tutorial Project",
  "phaseName": "Environmental",
  "eventName": "3 - Earthquake",
  "filePath": "C:\\\\Users\\\\jdoe\\\\Documents\\\\Sawtooth.csv",
  "shockPulsesCsvProps": {
    "profileName": "Shock Pulses",
    "headerRowNumber": 0,
    "columnDelim": "Comma",
    "numericFormat": "English (United States)",
    "duration": 20.0,
    "durationUnits": "ms",
    "sampleRate": 1.0,
    "sampleRateUnits": "sec",
    "shapeColumn": "Shape",
    "loadColumn": "Load (G)",
    "loadUnits": "G",
    "freqColumn": "Freq (Hz)",
    "freqUnits": "Hz",
    "decayColumn": "Decay"
  }
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.LoadShockProfilePulsesRequest()
message.project = "Tutorial Project"
message.phaseName = "Environmental"
message.eventName = "3 - Earthquake"
message.filePath = "\\\\Sawtooth.csv"

CSVProperties = SherlockLifeCycleService\_pb2.LoadShockProfilePulsesRequest().CSVProps()
CSVProperties.profileName = "Shock Pulses - Script Test"
CSVProperties.headerRowNumber = 0
CSVProperties.columnDelim = "Comma"
CSVProperties.numericFormat = "English (United States)"
CSVProperties.duration = 20.0
CSVProperties.durationUnits = "ms"
CSVProperties.sampleRate = 1.0
CSVProperties.sampleRateUnits = "sec"
CSVProperties.shapeColumn = "Shape"
CSVProperties.loadColumn = "Load (G)"
CSVProperties.loadUnits = "G"
CSVProperties.freqColumn = "Freq (Hz)"
CSVProperties.freqUnits = "HZ"
CSVProperties.decayColumn = "Decay"

message.shockPulsesCsvProps.CopyFrom(CSVProperties)

response = stub.loadShockProfilePulses(message)

print(str(response))

### Load Thermal Profile

In this section:

#### LoadThermalProfileRequest

Request to load a thermal Life Cycle Event Profile from a .dat or .csv file.

**Table 1.132. LoadThermalProfileRequest**

**Field**

**Type**

**Label**

**Description**

_For display purposes, the long string in column two is broken into multiple lines. It should be interpreted as: **LoadThermalProfileRequest.CSVProps**_

projectDir

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The full path to the Sherlock project directory.

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The name of the Life Cycle phase this event is associated.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Thermal event name.

filePath

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The full path for the .dat or .csv file.

csvProps

[LoadThermalProfileRequest .CSVProps](ch01s06.xhtml#sherlock_ug_LoadThermalProfileRequest.CSVProps "LoadThermalProfileRequest.CSVProps")

Properties for a .csv file load.

  

#### LoadThermalProfileRequest.CSVProps

.csv file properties. This is only required for a .csv file load.

**Table 1.133. LoadThermalProfileRequest.CSVProps**

**Field**

**Type**

**Label**

**Description**

profileName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the thermal profile.

headerRowNumber

[int32](ch01s11.xhtml "gRPC Scalar Value Types")

Header row number in the .csv file.

columnDelim

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Delimiter to separate the columns.

numericFormat

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Numeric format.

stepColumn

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Step column name.

typeColumn

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Step type column name.

timeColumn

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Time duration column name.

timeUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Time units column name.

tempColumn

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Temperature column name.

tempUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Temperature units column name.

  

#### LoadThermalProfileResponse

Response from loading a thermal profile from a .dat or .csv file.

**Table 1.134. LoadThermalProfileResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of validation errors.

  

#### Examples: Load Thermal Profile

##### Proto Request Example

{
  "project": "Tutorial Project", 
  "phaseName": "Environmental",
  "eventName": "5 - Fire",
  "filePath": "C:\\\\Users\\\\jdoe\\\\AppData\\\\Roaming\\\\Sherlock\\\\thermalProfiles\\\\Single Step.dat"
}

##### Proto Request Example (CSV)

{
  "project": "Tutorial Project",
  "phaseName": "Environmental",
  "eventName": "1 - Temp Cycle",
  "filePath": "C:\\\\Users\\\\aklara\\\\Desktop\\\\APIexamples\\\\SherlockLifeCycleService\\\\Thermal.csv",
  "csvProps": {
    "profileName": "Temperature Profile - Script Test",
    "headerRowNumber": 0,
    "columnDelim": "Comma",
    "numericFormat": "English (United States)",
    "stepColumn": "Step",
    "typeColumn": "Type",
    "timeColumn": "Time (min)",
    "timeUnits": "min",
    "tempColumn": "Temp (C)",
    "tempUnits": "C"
  }
}

##### Python Example

import SherlockLifeCycleService\_pb2
import SherlockLifeCycleService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLifeCycleService\_pb2\_grpc.SherlockLifeCycleServiceStub(channel)

message = SherlockLifeCycleService\_pb2.LoadThermalProfileRequest()
message.project = "Tutorial Project"
message.phaseName = "Environmental"
message.eventName = "1 - Temp Cycle"
message.filePath = "C:\\\\Users\\\\aklara\\\\Desktop\\\\APIexamples\\\\SherlockLifeCycleService\\\\Thermal.csv"

CSVProperties = SherlockLifeCycleService\_pb2.LoadThermalProfileRequest().CSVProps()
CSVProperties.profileName = "Temperature Profile - Script Test"
CSVProperties.headerRowNumber = 0
CSVProperties.columnDelim = "Comma"
CSVProperties.numericFormat = "English (United States)"
CSVProperties.stepColumn = "Step"
CSVProperties.typeColumn = "Type"
CSVProperties.timeColumn = "Time (min)"
CSVProperties.timeUnits = "min"
CSVProperties.tempColumn = "Temp (C)"
CSVProperties.tempUnits = "C"

message.csvProps.CopyFrom(CSVProperties)

response = stub.loadThermalProfile(message)

print(str(response))

### Methods with deprecated option

**Method Name**

**Option**

addHarmonicProfile

true

addRandomVibeProfile

true

addShockProfile

true

addThermalProfile

true

* * *

[Prev](ch01s05.xhtml) 

 

 [Next](ch01s07.xhtml)

Sherlock Layer Service-SherlockLayerService.proto 

[Home](index.xhtml)

 Sherlock Model Services- SherlockModelServices.proto