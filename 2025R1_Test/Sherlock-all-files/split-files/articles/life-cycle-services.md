# Sherlock Life Cycle Service- SherlockLifeCycleService.proto

[Click here to return to the main index to Sherlock's APIs.](introduction.md
"Index to the Sherlock APIs")

The APIs in this section return the list of Life Cycle events for a given
project as well as allow you to define different Life Cycle events and
profiles. Clicking on the active links in the table below will take you to the
selected API.

Table 1.81. Index to Sherlock Life Cycle Service APIs

Method Name| Request Type| Response Type| Description  
---|---|---|---  
For display purposes, the strings in the first three columns are broken into
multiple lines and should be read as continous. For example, the first string
in column one should be interpreted as: addHarmonicEvent  
addHarmonic Event| [.AddHarmonic
EventRequest](life-cycle-services.md#sherlock_ug_AddHarmonicEventRequest
"AddHarmonicEventRequest")| [.AddHarmonic
EventResponse](life-cycle-services.md#sherlock_ug_AddHarmonicEventResponse
"AddHarmonicEventResponse")| Define and add a new harmonic vibe Life Cycle
event.  
addHarmonic VibeProfiles| [.AddHarmonic
VibeProfilesRequest](ch01s06s02.md#sherlock_ug_AddHarmonicVibeProfilesRequest
"AddHarmonicVibeProfilesRequest")| [.AddHarmonicVibe
ProfilesResponse](ch01s06s02s04.md "AddHarmonicVibeProfilesResponse")|
Define and add new harmonic vibe life cycle event profiles.  
addRandom VibeProfiles| [.AddRandomVibe
ProfilesRequest](ch01s06s06.md#sherlock_ug_AddRandomVibeProfilesRequest
"AddRandomVibeProfilesRequest")| [.AddRandomVibe
ProfilesResponse](ch01s06s02s03.md
"AddHarmonicVibeProfilesRequest.HarmonicVibeProfile.Entry")| Define and add
new random vibe life cycle event profiles.  
addRandom VibeEvent| [.AddRandomVibe
EventRequest](ch01s06s05.md#sherlock_ug_AddRandomVibeEventRequest
"AddRandomVibeEventRequest")| [.AddRandomVibe
EventResponse](ch01s06s05.md#sherlock_ug_AddRandomVibeEventRequest
"AddRandomVibeEventRequest")| Define and add a new random vibe Life Cycle
event.  
addShockEvent| [.AddShock Event
Request](ch01s06s03.md#sherlock_ug_AddShockEventRequest
"AddShockEventRequest")| [.AddShock Event Response](ch01s06s03s02.md
"AddShockEventResponse")| Define and add a new shock Life Cycle event.  
addShock Profiles| [.AddShock
ProfilesRequest](ch01s06s04.md#sherlock_ug_AddShockProfilesRequest
"AddShockProfilesRequest")| [.AddShockProfiles Response](ch01s06s04s04.md
"AddShockProfilesResponse")| See note below.  
addShockProfiles: Define and add new shock life cycle event profiles. Keep in
mind, the Pulse Duration and Load values defined in the Shock Profile Editor
are relative values used solely within the editor to define the profile shape.
A combination of all the primary pulse shapes is then used to define the pulse
profile.  
addThermal Event| [.AddThermal
EventRequest](ch01s06s07.md#sherlock_ug_AddThermalEventRequest
"AddThermalEventRequest")| [.AddThermal Event Response](ch01s06s07s02.md
"AddThermalEventResponse")| Define and add a new thermal Life Cycle event.  
addThermal Profiles| [.AddThermal
ProfilesRequest](ch01s06s08.md#sherlock_ug_AddThermalProfilesRequest
"AddThermalProfilesRequest")| [.AddThermal ProfilesResponse
](ch01s06s08s04.md "AddThermalProfilesResponse")| Define and add new thermal
life cycle event profiles.  
createLifePhase| [.CreateLife
PhaseRequest](ch01s06s09.md#sherlock_ug_CreateLifePhaseRequest
"CreateLifePhaseRequest")| [.CreateLife PhaseResponse](ch01s06s09s02.md
"CreateLifePhaseResponse")| Define and add a new life phase.  
deleteEvent| [.DeleteEvent
Request](ch01s06s10.md#sherlock_ug_DeleteEventRequest "DeleteEventRequest")|
[.ReturnCode](ch01s04s04.md "Return Code")| Request to delete a life cycle
event in a project.  
deletePhase| [.DeletePhase
Request](ch01s06s11.md#sherlock_ug_DeletePhaseRequest "DeletePhaseRequest")|
[.ReturnCode](ch01s04s04.md "Return Code")| Delete a life phase for a
project  
listAmplUnits| [.ListAmpl
UnitsRequest](ch01s06s13.md#sherlock_ug_ListAmplUnitsRequest
"ListAmplUnitsRequest")| [.ListAmpl UnitsResponse](ch01s06s13s02.md
"ListAmplUnitsResponse")| Returns a list of amplitude units when adding a
random vibe profile.  
listDurationUnits| [.ListDuration
UnitsRequest](ch01s06s14.md#sherlock_ug_ListDurationUnitsRequest
"ListDurationUnitsRequest")| [.ListDuration UnitsResponse](ch01s06s14s02.md
"ListDurationUnitsResponse")| Returns a list of duration units when adding a
Life Cycle event.  
listFreqUnits| [.ListFreq
UnitsRequest](ch01s06s15.md#sherlock_ug_ListFreqUnitsRequest
"ListFreqUnitsRequest")| [.ListFreq UnitsResponse](ch01s06s15s02.md
"ListFreqUnitsResponse")| Returns a list of frequency units.  
listHarmonic Events| [.ListHarmonic
EventsRequest](ch01s06s16.md#sherlock_ug_ListHarmonicEventsRequest
"ListHarmonicEventsRequest")| [.ListHarmonic
EventsResponse](ch01s06s16s02.md "ListHarmonicEventsResponse")| Returns a
list of harmonic events defined for a project.  
listHarmonic ProfileTypes| [.ListHarmonic ProfileTypes
Request](ch01s06s17.md#sherlock_ug_ListHarmonicProfileTypesRequest
"ListHarmonicProfileTypesRequest")| [.ListHarmonic Profile
TypesResponse](ch01s06s17s02.md "ListHarmonicProfileTypesResponse")| Returns
a list of Harmonic Load Profile types.  
listLifeCycle Events| [.ListLCEvents
Request](ch01s06s14.md#sherlock_ug_ListDurationUnitsRequest
"ListDurationUnitsRequest")| [.ListLCEvents Response](ch01s06s18s02.md
"ListLCEventsResponse")| Returns a list of Life Cycle phases and their events
given a Sherlock project directory.  
listLifeCycle States| [.ListLCStates
Request](ch01s06s19.md#sherlock_ug_ListLCStatesRequest
"ListLCStatesRequest")| [.ListLCStates Response](ch01s06s19s02.md
"ListLCStatesResponse")| Returns a list of Life Cycle states.  
listLifeCycle Types| [.ListLCTypes
Request](ch01s06s20.md#sherlock_ug_ListLCTypesRequest "ListLCTypesRequest")|
[.ListLCTypes Response](ch01s06s20s02.md "ListLCTypesResponse")| Returns a
list of Life Cycle types.  
listRandomVibe ProfileTypes| [.ListRandomVibe
ProfileTypesRequest](ch01s06s21.md#sherlock_ug_ListRandomVibeProfileTypesRequest
"ListRandomVibeProfileTypesRequest")| [.ListRandomVibe
ProfileTypesResponse](ch01s06s21s02.md
"ListRandomVibeProfileTypesResponse")| Returns a list of random vibe profile
types.  
listRandom VibeEvents| [.ListRandomVibe
EventsRequest](ch01s06s22.md#sherlock_ug_ListRandomVibeEventsRequest
"ListRandomVibeEventsRequest")| [.ListRandom
VibeEventsResponse](ch01s06s22s02.md "ListRandomVibeEventsResponse")|
Returns a list of random vibe events defined for a project.  
listShockEvents| [.ListShock
EventsRequest](ch01s06s23.md#sherlock_ug_ListShockEventsRequest
"ListShockEventsRequest")| [.ListShock EventsResponse](ch01s06s23s02.md
"ListShockEventsResponse")| Returns a list of shock events defined for a
project.  
listShock LoadUnits| [.List Shock
LoadUnitsRequest](ch01s06s24.md#sherlock_ug_ListShockLoadUnitsRequest
"ListShockLoadUnitsRequest")| [.ListShock LoadUnits
Response](ch01s06s24s02.md "ListShockLoadUnitsResponse")| Returns a list of
Shock Load units.  
listShockPulses| [.ListShock
PulsesRequest](ch01s06s25.md#sherlock_ug_ListShockPulsesRequest
"ListShockPulsesRequest")| [.ListShock PulsesResponse](ch01s06s25s02.md
"ListShockPulsesResponse")| Returns a list of shock pulses.  
listTempUnits| [.ListTemp
UnitsRequest](ch01s06s26.md#sherlock_ug_ListTempUnitsRequest
"ListTempUnitsRequest")| [.ListTemp UnitsResponse](ch01s06s26s02.md
"ListTempUnitsResponse")| Returns a list of temperature units.  
loadHarmonic Profile| [.LoadHarmonic
ProfileRequest](ch01s06s27.md#sherlock_ug_LoadHarmonicProfileRequest
"LoadHarmonicProfileRequest")| [.LoadHarmonic
ProfileResponse](ch01s06s27s03.md "LoadHarmonicProfileResponse")| Loads a
harmonic profile from a .dat or .csv file.  
loadRandom VibeProfile| [.LoadRandom
VibeProfileRequest](ch01s06s28.md#sherlock_ug_LoadRandomVibeProfileRequest
"LoadRandomVibeProfileRequest")| [.LoadRandom
VibeProfileResponse](ch01s06s28s03.md "LoadRandomVibeProfileResponse")|
Loads a random vibe profile from a .dat or .csv file.  
loadShock ProfileDataset| [.LoadShockProfile
DatasetRequest](ch01s06s29.md#sherlock_ug_LoadShockProfileDatasetRequest
"LoadShockProfileDatasetRequest")| [.LoadShockProfile
DatasetResponse](ch01s06s29s03.md "LoadShockProfileDatasetResponse")| Loads
a shock profile using dataset from a .dat or .csv file.  
loadShock ProfilePulses| [.LoadShockProfile
PulsesRequest](ch01s06s30.md#sherlock_ug_LoadShockProfilePulsesRequest
"LoadShockProfilePulsesRequest")| [.LoadShockProfile
PulsesResponse](ch01s06s30s03.md "LoadShockProfilePulsesResponse")| Loads a
shock profile using pulses from a .dat or .csv file.  
loadThermal Profile| [.LoadThermal Profile
Request](ch01s06s31.md#sherlock_ug_LoadThermalProfileRequest
"LoadThermalProfileRequest")| [.LoadThermal Profile
Response](ch01s06s31s03.md "LoadThermalProfileResponse")| Loads a thermal
profile from a .dat or .csv file.  
  
  

## Add Harmonic Event

Links:

### AddHarmonicEventRequest

Request to define and add a new harmonic vibe Life Cycle event.

Table 1.82. AddHarmonicEventRequest

Field| Type| Label| Description  
---|---|---|---  
project| [string](scalar-values.md "gRPC Scalar Value Types")|  | Sherlock project name.  
phaseName| [string](scalar-values.md "gRPC Scalar Value Types")|  | The name of the Life Cycle phase to add this event to.  
eventName| [string](scalar-values.md "gRPC Scalar Value Types")|  | Name of the harmonic event.  
description| [string](scalar-values.md "gRPC Scalar Value Types")|  | Description of the harmonic event.  
duration| [double](scalar-values.md "gRPC Scalar Value Types")|  | Event duration length.  
durationUnits| [string](scalar-values.md "gRPC Scalar Value Types")|  | Event duration length units.  
numOfCycles| [double](scalar-values.md "gRPC Scalar Value Types")|  | Number of cycles defined for this harmonic event.  
cycleType| [string](scalar-values.md "gRPC Scalar Value Types")|  | The cycle type. For example: "COUNT", "DUTY CYCLE", "PER YEAR", "PER HOUR", etc.  
sweepRate| [double](scalar-values.md "gRPC Scalar Value Types")|  | Sweep rate for the harmonic event.  
orientation| [string](scalar-values.md "gRPC Scalar Value Types")|  | PCB orientation in the format of azimuth, elevation. Example: 30,15.  
profileType| [string](scalar-values.md "gRPC Scalar Value Types")|  | Harmonic load profile types. Example valid values are "Uniaxial" and "Triaxial".  
loadDirection| [string](scalar-values.md "gRPC Scalar Value Types")|  | Load direction in the format of x,y,z. Example: 0,0,1.  
  
  

### AddHarmonicEventResponse

Response from adding a harmonic vibe event.

Table 1.83. AddHarmonicEventResponse

Field| Type| Label| Description  
---|---|---|---  
returnCode| [ReturnCode](ch01s04s04.md "Return Code")|  | Status code of response.  
errors| [string](scalar-values.md "gRPC Scalar Value Types")| repeated| List of
validation errors.  
  
  

### Examples: Add Harmonic Event

#### Proto Request Example

    
    
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

#### Request Response

![image](/graphics/gRPC/sherlock_ug_gRPC_7.png)
![](/graphics/gRPC/sherlock_ug_gRPC_6.png)  
---  
  
#### Python Example

For a Python example, refer to the online [PySherlock
Reference](https://sherlock.docs.pyansys.com/version/stable/api/index.md).

* * *

[Prev](ch01s05s19s03.md) |   / [Contents](index.md) / [Home](../../index.htm)|  [Next](ch01s06s02.md)  
---|---|---

