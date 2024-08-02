# SherlockLifeCycleService.proto

Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="-AddHarmonicEventRequest"></a>

## AddHarmonicEventRequest

Request to define and add a new harmonic vibe life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase to add this event to. |
| eventName | [string](#string) |  | Name of the harmonic event. |
| description | [string](#string) |  | Description of the harmonic event. |
| duration | [double](#double) |  | Event duration length. |
| durationUnits | [string](#string) |  | Event duration length units. |
| numOfCycles | [double](#double) |  | Number of cycles defined for this harmonic event. |
| cycleType | [string](#string) |  | The cycle type. For example: &#34;COUNT&#34;, &#34;DUTY CYCLE&#34;, &#34;PER YEAR&#34;, &#34;PER HOUR&#34;, etc. |
| sweepRate | [double](#double) |  | Sweep rate for the harmonic event |
| orientation | [string](#string) |  | PCB orientation in the format of azimuth, elevation. Example: &#34;30,15&#34;. |
| profileType | [string](#string) |  | Harmonic load profile types. Example valid values are &#34;Uniaxial&#34; and &#34;Triaxial&#34;. |
| loadDirection | [string](#string) |  | Load direction in the format of x,y,z. Example: &#34;0,0,1&#34;. |






<a name="-AddHarmonicEventResponse"></a>

## AddHarmonicEventResponse

Response from adding a harmonic vibe life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-AddHarmonicVibeProfilesRequest"></a>

## AddHarmonicVibeProfilesRequest

Request to define and add new harmonic vibe life cycle event profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| harmonicVibeProfiles | [AddHarmonicVibeProfilesRequest.HarmonicVibeProfile](#AddHarmonicVibeProfilesRequest-HarmonicVibeProfile) | repeated | List of harmonic vibe life cycle event profiles for a specified project. |






<a name="-AddHarmonicVibeProfilesRequest-HarmonicVibeProfile"></a>

## AddHarmonicVibeProfilesRequest.HarmonicVibeProfile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Name of the harmonic event. |
| profileName | [string](#string) |  | Name of the harmonic profile. |
| freqUnits | [string](#string) |  | Frequency units. |
| loadUnits | [string](#string) |  | Load units. |
| harmonicVibeProfileEntries | [AddHarmonicVibeProfilesRequest.HarmonicVibeProfile.Entry](#AddHarmonicVibeProfilesRequest-HarmonicVibeProfile-Entry) | repeated | List of frequency and load values for a harmonic vibe life cycle phase. |
| triaxialAxis | [string](#string) |  | If the harmonic profile type is &#34;Triaxial&#34;, the axis this profile should be assigned to. Valid values are: x, y, z. |






<a name="-AddHarmonicVibeProfilesRequest-HarmonicVibeProfile-Entry"></a>

## AddHarmonicVibeProfilesRequest.HarmonicVibeProfile.Entry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| freq | [double](#double) |  | Frequency. |
| load | [double](#double) |  | Load. |






<a name="-AddHarmonicVibeProfilesResponse"></a>

## AddHarmonicVibeProfilesResponse

Response from adding harmonic vibe life cycle event profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-AddRandomVibeEventRequest"></a>

## AddRandomVibeEventRequest

Request to define and add a new random vibe life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase to add this event to. |
| eventName | [string](#string) |  | Name of the random vibe event. |
| description | [string](#string) |  | Description of the random vibe event. |
| duration | [double](#double) |  | Event duration length. |
| durationUnits | [string](#string) |  | Event duration length units. |
| numOfCycles | [double](#double) |  | Number of cycles defined for this random vibe event. |
| cycleType | [string](#string) |  | The cycle type. For example: &#34;COUNT&#34;, &#34;DUTY CYCLE&#34;, &#34;PER YEAR&#34;, &#34;PER HOUR&#34;, etc. |
| orientation | [string](#string) |  | PCB orientation in the format of azimuth, elevation. Example: &#34;30,15&#34;. |
| profileType | [string](#string) |  | Random load profile type. Example valid value is &#34;Uniaxial&#34;. |
| loadDirection | [string](#string) |  | Load direction in the format of x,y,z. Example: &#34;0,0,1&#34;. |






<a name="-AddRandomVibeEventResponse"></a>

## AddRandomVibeEventResponse

Response from adding a random vibe life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-AddRandomVibeProfilesRequest"></a>

## AddRandomVibeProfilesRequest

Request to define and add new random vibe life cycle event profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| randomVibeProfiles | [AddRandomVibeProfilesRequest.RandomVibeProfile](#AddRandomVibeProfilesRequest-RandomVibeProfile) | repeated | List of random vibe life cycle event profiles for a specified project. |






<a name="-AddRandomVibeProfilesRequest-RandomVibeProfile"></a>

## AddRandomVibeProfilesRequest.RandomVibeProfile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Name of the random vibe event. |
| profileName | [string](#string) |  | Name of the random vibe profile. |
| freqUnits | [string](#string) |  | Frequency units. |
| amplUnits | [string](#string) |  | Amplitude units. |
| randomVibeProfileEntries | [AddRandomVibeProfilesRequest.RandomVibeProfile.Entry](#AddRandomVibeProfilesRequest-RandomVibeProfile-Entry) | repeated | List of frequency and amplitude values for a random vibe life cycle event. |






<a name="-AddRandomVibeProfilesRequest-RandomVibeProfile-Entry"></a>

## AddRandomVibeProfilesRequest.RandomVibeProfile.Entry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| freq | [double](#double) |  | Frequency. |
| ampl | [double](#double) |  | Amplitude. |






<a name="-AddRandomVibeProfilesResponse"></a>

## AddRandomVibeProfilesResponse

Response from adding random vibe profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-AddShockEventRequest"></a>

## AddShockEventRequest

Request to define and add a new shock life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase to add this event to. |
| eventName | [string](#string) |  | Name of the shock event. |
| description | [string](#string) |  | Description of the shock event. |
| duration | [double](#double) |  | Event duration length. |
| durationUnits | [string](#string) |  | Event duration length units. |
| numOfCycles | [double](#double) |  | Number of cycles defined for this shock event. |
| cycleType | [string](#string) |  | The cycle type. For example: &#34;COUNT&#34;, &#34;DUTY CYCLE&#34;, &#34;PER YEAR&#34;, &#34;PER HOUR&#34;, etc. |
| orientation | [string](#string) |  | PCB orientation in the format of azimuth, elevation. Example: 30,15 |
| loadDirection | [string](#string) |  | Load direction in the format of x,y,z. Example: 0,0,1 |






<a name="-AddShockEventResponse"></a>

## AddShockEventResponse

Response from adding a shock life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-AddShockProfilesRequest"></a>

## AddShockProfilesRequest

Request to define and add new shock life cycle event profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| shockProfiles | [AddShockProfilesRequest.ShockProfile](#AddShockProfilesRequest-ShockProfile) | repeated | List of shock life cycle event profiles for a specified project. |






<a name="-AddShockProfilesRequest-ShockProfile"></a>

## AddShockProfilesRequest.ShockProfile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Name of the shock event. |
| profileName | [string](#string) |  | Name of the shock profile. |
| duration | [double](#double) |  | Pulse duration. |
| durationUnits | [string](#string) |  | Pulse duration unit. |
| sampleRate | [double](#double) |  | Sample rate. |
| sampleRateUnits | [string](#string) |  | Sample rate unit. |
| loadUnits | [string](#string) |  | Load unit. |
| freqUnits | [string](#string) |  | Frequency unit. |
| shockProfileEntries | [AddShockProfilesRequest.ShockProfile.Entry](#AddShockProfilesRequest-ShockProfile-Entry) | repeated | Primary shape entry for the shock profile. |






<a name="-AddShockProfilesRequest-ShockProfile-Entry"></a>

## AddShockProfilesRequest.ShockProfile.Entry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shape | [string](#string) |  | Shape of the shock profile. |
| load | [double](#double) |  | Load. |
| freq | [double](#double) |  | Frequency rate. |
| decay | [double](#double) |  | Decay rate. |






<a name="-AddShockProfilesResponse"></a>

## AddShockProfilesResponse

Response from adding shock life cycle event profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-AddThermalEventRequest"></a>

## AddThermalEventRequest

Request to define and add a new thermal life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase to add this event to. |
| eventName | [string](#string) |  | Name of the thermal event. |
| description | [string](#string) |  | Description of the thermal event. |
| numOfCycles | [double](#double) |  | Number of cycles defined for this thermal event. |
| cycleType | [string](#string) |  | The cycle type. For example: &#34;COUNT&#34;, &#34;DUTY CYCLE&#34;, &#34;PER YEAR&#34;, &#34;PER HOUR&#34;, etc. |
| cycleState | [string](#string) |  | The life cycle state. For example: &#34;OPERATING&#34;, &#34;STORAGE&#34;. |






<a name="-AddThermalEventResponse"></a>

## AddThermalEventResponse

Response from adding a thermal life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-AddThermalProfilesRequest"></a>

## AddThermalProfilesRequest

Request to define and add a new thermal life cycle event profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| thermalProfiles | [AddThermalProfilesRequest.ThermalProfile](#AddThermalProfilesRequest-ThermalProfile) | repeated | List of thermal life cycle event profiles for a specified project. |






<a name="-AddThermalProfilesRequest-ThermalProfile"></a>

## AddThermalProfilesRequest.ThermalProfile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Name of the thermal event. |
| profileName | [string](#string) |  | Name of the thermal profile. |
| timeUnits | [string](#string) |  | Time units. |
| tempUnits | [string](#string) |  | Temperature units. |
| thermalProfileEntries | [AddThermalProfilesRequest.ThermalProfile.Entry](#AddThermalProfilesRequest-ThermalProfile-Entry) | repeated | List of step entries for a life cycle event and/or phase. |






<a name="-AddThermalProfilesRequest-ThermalProfile-Entry"></a>

## AddThermalProfilesRequest.ThermalProfile.Entry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| step | [string](#string) |  | Name of the step. |
| type | [string](#string) |  | Profile step type. &#34;HOLD&#34; or &#34;RAMP&#34;. |
| time | [double](#double) |  | Time duration of the step. |
| temp | [double](#double) |  | Temperature of the step. |






<a name="-AddThermalProfilesResponse"></a>

## AddThermalProfilesResponse

Response from adding thermal profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-CreateLifePhaseRequest"></a>

## CreateLifePhaseRequest

Request for creating a life phase.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of new life phase. |
| description | [string](#string) |  | Description of new life phase. |
| duration | [double](#double) |  | Event duration length. |
| durationUnits | [string](#string) |  | Event duration length units. |
| numOfCycles | [double](#double) |  | Number of cycles defined for new life phase. |
| cycleType | [string](#string) |  | The cycle type. For example: &#34;COUNT&#34;, &#34;DUTY CYCLE&#34;, &#34;PER YEAR&#34;, &#34;PER HOUR&#34;, etc. |






<a name="-CreateLifePhaseResponse"></a>

## CreateLifePhaseResponse

Response from creating a life phase.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of error messages. |






<a name="-DeleteEventRequest"></a>

## DeleteEventRequest

Request to delete a life cycle event in a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase from which to delete this event. |
| eventName | [string](#string) |  | Name of the event to be deleted. |






<a name="-DeleteLifePhaseResponse"></a>

## DeleteLifePhaseResponse

Response for deleting a life phase


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |






<a name="-DeletePhaseRequest"></a>

## DeletePhaseRequest

Request for deleting a life phase


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | Sherlock life phase name. |






<a name="-Events"></a>

## Events

Represents an event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Event name. |






<a name="-ListAmplUnitsRequest"></a>

## ListAmplUnitsRequest

Request for a list of amplitude units.






<a name="-ListAmplUnitsResponse"></a>

## ListAmplUnitsResponse

Represents a list of amplitude units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| amplUnits | [string](#string) | repeated | List of amplitude units. |






<a name="-ListDurationUnitsRequest"></a>

## ListDurationUnitsRequest

Request for a list of duration units for event settings.






<a name="-ListDurationUnitsResponse"></a>

## ListDurationUnitsResponse

Represents a list of duration units for event settings in life cycle.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| durationUnits | [string](#string) | repeated | List of duration units. |






<a name="-ListFreqUnitsRequest"></a>

## ListFreqUnitsRequest

Request for a list of frequency units.






<a name="-ListFreqUnitsResponse"></a>

## ListFreqUnitsResponse

Represents a list of frequency units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| freqUnits | [string](#string) | repeated | List of frequency units. For example: &#34;HZ&#34;, &#34;KHZ&#34;, &#34;MHZ&#34;, &#34;GHZ&#34;. |






<a name="-ListHarmonicEventsRequest"></a>

## ListHarmonicEventsRequest

Request for a list of harmonic events defined for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |






<a name="-ListHarmonicEventsResponse"></a>

## ListHarmonicEventsResponse

Represents a list of harmonic events defined for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| event | [Events](#Events) | repeated | List of harmonic events. |






<a name="-ListHarmonicProfileTypesRequest"></a>

## ListHarmonicProfileTypesRequest

Request for a list of harmonic load profile types.






<a name="-ListHarmonicProfileTypesResponse"></a>

## ListHarmonicProfileTypesResponse

Represents a list of harmonic load profile types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| types | [string](#string) | repeated | List of harmonic load profile types. &#34;Uniaxial&#34;, &#34;Triaxial&#34;. |






<a name="-ListLCEventsRequest"></a>

## ListLCEventsRequest

Request for a list of life cycle phases and events for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |






<a name="-ListLCEventsResponse"></a>

## ListLCEventsResponse

Represents the life cycle phases and events for a Sherlock project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| lcPhases | [ListLCEventsResponse.LifeCyclePhase](#ListLCEventsResponse-LifeCyclePhase) | repeated | List of LifeCyclePhases for a specified project. |






<a name="-ListLCEventsResponse-LifeCyclePhase"></a>

## ListLCEventsResponse.LifeCyclePhase



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Life cycle phase name. |
| description | [string](#string) |  | Life cycle phase description. |
| lcEvents | [ListLCEventsResponse.LifeCyclePhase.LifeCycleEvent](#ListLCEventsResponse-LifeCyclePhase-LifeCycleEvent) | repeated | List of LifeCycleEvents for a project phase. |






<a name="-ListLCEventsResponse-LifeCyclePhase-LifeCycleEvent"></a>

## ListLCEventsResponse.LifeCyclePhase.LifeCycleEvent



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Life cycle event name. |
| description | [string](#string) |  | Life cycle event description. |
| type | [string](#string) |  | Life cycle type. For example: &#34;Thermal Event&#34;, &#34;Shock Event&#34;, &#34;Random Vibe&#34;, &#34;Harmonic Vibe&#34;. |






<a name="-ListLCStatesRequest"></a>

## ListLCStatesRequest

Request for a list of life cycle states.






<a name="-ListLCStatesResponse"></a>

## ListLCStatesResponse

Represents a list of life cycle states.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| states | [string](#string) | repeated | List of life cycle states. For example: &#34;Operating&#34;, &#34;Storage&#34;. |






<a name="-ListLCTypesRequest"></a>

## ListLCTypesRequest

Request for a list of life cycle types.






<a name="-ListLCTypesResponse"></a>

## ListLCTypesResponse

Represents a list of life cycle types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| types | [string](#string) | repeated | List of life cycle types. For example, &#34;DUTY CYCLE&#34;, &#34;PER YEAR&#34;, &#34;PER HOUR&#34;, etc. |






<a name="-ListRandomVibeEventsRequest"></a>

## ListRandomVibeEventsRequest

Request for a list of random vibe events defined for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |






<a name="-ListRandomVibeEventsResponse"></a>

## ListRandomVibeEventsResponse

Represents a list of random vibe events defined for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| event | [Events](#Events) | repeated | List of random vibe events. |






<a name="-ListRandomVibeProfileTypesRequest"></a>

## ListRandomVibeProfileTypesRequest

Request for a list of random vibe profile types.






<a name="-ListRandomVibeProfileTypesResponse"></a>

## ListRandomVibeProfileTypesResponse

Represents a list of random vibe profile types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| types | [string](#string) | repeated | List of random vibe profile types. Currently there is only one: &#34;Uniaxial&#34;. |






<a name="-ListShockEventsRequest"></a>

## ListShockEventsRequest

Request for a list of shock events defined for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |






<a name="-ListShockEventsResponse"></a>

## ListShockEventsResponse

Represents a list of shock events defined for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| event | [Events](#Events) | repeated | List of shock events. |






<a name="-ListShockLoadUnitsRequest"></a>

## ListShockLoadUnitsRequest

Request for a list of shock load units.






<a name="-ListShockLoadUnitsResponse"></a>

## ListShockLoadUnitsResponse

Represents a list of shock load units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| units | [string](#string) | repeated | List of shock load units. For example: &#34;G&#34;, &#34;m/s2&#34;, &#34;mm/s2&#34;. |






<a name="-ListShockPulsesRequest"></a>

## ListShockPulsesRequest

Request for a list of shock Pulses.






<a name="-ListShockPulsesResponse"></a>

## ListShockPulsesResponse

Represents a list of shock Pulses.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| shockPulse | [string](#string) | repeated | List of shock pulses. For example: &#34;FullSine&#34;, &#34;HalfSine&#34;, &#34;Triangle&#34;, &#34;Sawtooth&#34;, &#34;FullSquare&#34;. |






<a name="-ListTempUnitsRequest"></a>

## ListTempUnitsRequest

Request for a list of temperature units.






<a name="-ListTempUnitsResponse"></a>

## ListTempUnitsResponse

Represents a list of temperature units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| tempUnits | [string](#string) | repeated | List of temperature units. For example: &#34;C&#34;, &#34;F&#34;, &#34;K&#34;. |






<a name="-LoadHarmonicProfileRequest"></a>

## LoadHarmonicProfileRequest

Request to load a harmonic life cycle event profile from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Harmonic event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| harmonicCsvProps | [LoadHarmonicProfileRequest.CSVProps](#LoadHarmonicProfileRequest-CSVProps) |  | Properties for a .csv file load. |
| triaxialAxis | [string](#string) |  | If the harmonic profile type is &#34;Triaxial&#34;, the axis this profile should be assigned to. Valid values are: x, y, z. |






<a name="-LoadHarmonicProfileRequest-CSVProps"></a>

## LoadHarmonicProfileRequest.CSVProps

.csv file properties. This is only required for a .csv file load.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| profileName | [string](#string) |  | Name of the harmonic profile. |
| headerRowNumber | [int32](#int32) |  | Header row number in the .csv file. |
| columnDelim | [string](#string) |  | Delimiter to separate the columns. |
| numericFormat | [string](#string) |  | Numeric format. |
| freqColumn | [string](#string) |  | Frequency column name. |
| freqUnits | [string](#string) |  | Frequency units. |
| loadColumn | [string](#string) |  | Load column name. |
| loadUnits | [string](#string) |  | Load units. |






<a name="-LoadHarmonicProfileResponse"></a>

## LoadHarmonicProfileResponse

Response from loading a harmonic vibe life cycle event profile from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-LoadRandomVibeProfileRequest"></a>

## LoadRandomVibeProfileRequest

Request to load a random vibe life cycle event profile from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Random vibe event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| randomVibeCsvProps | [LoadRandomVibeProfileRequest.CSVProps](#LoadRandomVibeProfileRequest-CSVProps) |  | Properties for a .csv file load. |






<a name="-LoadRandomVibeProfileRequest-CSVProps"></a>

## LoadRandomVibeProfileRequest.CSVProps

.csv file properties. This is only required for a .csv file load.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| profileName | [string](#string) |  | Name of the random vibe profile. |
| headerRowNumber | [int32](#int32) |  | Header row number in the .csv file. |
| columnDelim | [string](#string) |  | Delimiter to separate the columns. |
| numericFormat | [string](#string) |  | Numeric format. |
| freqColumn | [string](#string) |  | Frequency column name. |
| freqUnits | [string](#string) |  | Frequency units. |
| amplColumn | [string](#string) |  | Amplitude column name. |
| amplUnits | [string](#string) |  | Amplitude units. |






<a name="-LoadRandomVibeProfileResponse"></a>

## LoadRandomVibeProfileResponse

Response from loading a random vibe life cycle event profile from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-LoadShockProfileDatasetRequest"></a>

## LoadShockProfileDatasetRequest

Request to load a shock life cycle event profile using the dataset (time and load) from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Shock event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| shockDsCsvProps | [LoadShockProfileDatasetRequest.CSVProps](#LoadShockProfileDatasetRequest-CSVProps) |  | Properties for a .csv file load. |






<a name="-LoadShockProfileDatasetRequest-CSVProps"></a>

## LoadShockProfileDatasetRequest.CSVProps

.csv file properties. This is only required for a .csv file load.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| profileName | [string](#string) |  | Name of the shock profile. |
| headerRowNumber | [int32](#int32) |  | Header row number in the .csv file. |
| columnDelim | [string](#string) |  | Delimiter to separate the columns. |
| numericFormat | [string](#string) |  | Numeric format. |
| timeColumn | [string](#string) |  | Time column name. |
| timeUnits | [string](#string) |  | Time units. |
| loadColumn | [string](#string) |  | Load column name. |
| loadUnits | [string](#string) |  | Load units. |






<a name="-LoadShockProfileDatasetResponse"></a>

## LoadShockProfileDatasetResponse

Response from loading a shock profile using the dataset from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-LoadShockProfilePulsesRequest"></a>

## LoadShockProfilePulsesRequest

Request to load a shock life cycle event profile using pulses from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Shock event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| shockPulsesCsvProps | [LoadShockProfilePulsesRequest.CSVProps](#LoadShockProfilePulsesRequest-CSVProps) |  | Properties for a .csv file load. |






<a name="-LoadShockProfilePulsesRequest-CSVProps"></a>

## LoadShockProfilePulsesRequest.CSVProps

.csv file properties. This is only required for a .csv file load.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| profileName | [string](#string) |  | Name of the shock profile. |
| headerRowNumber | [int32](#int32) |  | Header row number in the .csv file. |
| columnDelim | [string](#string) |  | Delimiter to separate the columns. |
| numericFormat | [string](#string) |  | Numeric format. |
| duration | [double](#double) |  | Pulse duration length. |
| durationUnits | [string](#string) |  | Pulse duration time units. |
| sampleRate | [double](#double) |  | Sample rate. |
| sampleRateUnits | [string](#string) |  | Sample rate units. |
| shapeColumn | [string](#string) |  | Pulse shape column name. |
| loadColumn | [string](#string) |  | Load column name. |
| loadUnits | [string](#string) |  | Load units. |
| freqColumn | [string](#string) |  | Frequency column name. |
| freqUnits | [string](#string) |  | Frequency units. |
| decayColumn | [string](#string) |  | Decay column name. |






<a name="-LoadShockProfilePulsesResponse"></a>

## LoadShockProfilePulsesResponse

Response from loading a shock profile using pulses from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-LoadThermalProfileRequest"></a>

## LoadThermalProfileRequest

Request to load a thermal life cycle event profile from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Thermal event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| csvProps | [LoadThermalProfileRequest.CSVProps](#LoadThermalProfileRequest-CSVProps) |  | Properties for a .csv file load. |






<a name="-LoadThermalProfileRequest-CSVProps"></a>

## LoadThermalProfileRequest.CSVProps

.csv file properties. This is only required for .csv file load.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| profileName | [string](#string) |  | Name of the thermal profile. |
| headerRowNumber | [int32](#int32) |  | Header row number in the .csv file. |
| columnDelim | [string](#string) |  | Delimiter to separate the columns. |
| numericFormat | [string](#string) |  | Numeric format. |
| stepColumn | [string](#string) |  | Step column name. |
| typeColumn | [string](#string) |  | Step type column name. |
| timeColumn | [string](#string) |  | Time duration column name. |
| timeUnits | [string](#string) |  | Time units column name. |
| tempColumn | [string](#string) |  | Temperature column name. |
| tempUnits | [string](#string) |  | Temperature units column name. |






<a name="-LoadThermalProfileResponse"></a>

## LoadThermalProfileResponse

Response from loading a thermal profile from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |





 

 

 


<a name="-SherlockLifeCycleService"></a>

## SherlockLifeCycleService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| addHarmonicEvent | [.AddHarmonicEventRequest](#AddHarmonicEventRequest) | [.AddHarmonicEventResponse](#AddHarmonicEventResponse) | Define and add a new harmonic vibe life cycle event. |
| addHarmonicVibeProfiles | [.AddHarmonicVibeProfilesRequest](#AddHarmonicVibeProfilesRequest) | [.AddHarmonicVibeProfilesResponse](#AddHarmonicVibeProfilesResponse) | Define and add new harmonic vibe life cycle event profiles. |
| addRandomVibeProfiles | [.AddRandomVibeProfilesRequest](#AddRandomVibeProfilesRequest) | [.AddRandomVibeProfilesResponse](#AddRandomVibeProfilesResponse) | Define and add new random vibe life cycle event profiles. |
| addRandomVibeEvent | [.AddRandomVibeEventRequest](#AddRandomVibeEventRequest) | [.AddRandomVibeEventResponse](#AddRandomVibeEventResponse) | Define and add a new random vibe life cycle event. |
| addShockEvent | [.AddShockEventRequest](#AddShockEventRequest) | [.AddShockEventResponse](#AddShockEventResponse) | Define and add a new shock life cycle event. |
| addShockProfiles | [.AddShockProfilesRequest](#AddShockProfilesRequest) | [.AddShockProfilesResponse](#AddShockProfilesResponse) | Define and add new shock life cycle event profiles. Keep in mind, the pulse duration and load values defined in the Shock Profile Editor are relative values used solely within the editor to define the profile shape. A combination of all the primary pulse shapes is then used to define the pulse profile. |
| addThermalEvent | [.AddThermalEventRequest](#AddThermalEventRequest) | [.AddThermalEventResponse](#AddThermalEventResponse) | Define and add a new thermal life cycle event. |
| addThermalProfiles | [.AddThermalProfilesRequest](#AddThermalProfilesRequest) | [.AddThermalProfilesResponse](#AddThermalProfilesResponse) | Define and add new thermal life cycle event profiles. |
| createLifePhase | [.CreateLifePhaseRequest](#CreateLifePhaseRequest) | [.CreateLifePhaseResponse](#CreateLifePhaseResponse) | Define and add a new life phase. |
| deleteEvent | [.DeleteEventRequest](#DeleteEventRequest) | [.ReturnCode](#ReturnCode) | Delete a life cycle event. |
| listAmplUnits | [.ListAmplUnitsRequest](#ListAmplUnitsRequest) | [.ListAmplUnitsResponse](#ListAmplUnitsResponse) | Returns a list of amplitude units when adding a random vibe profile. |
| listDurationUnits | [.ListDurationUnitsRequest](#ListDurationUnitsRequest) | [.ListDurationUnitsResponse](#ListDurationUnitsResponse) | Returns a list of duration units when adding a life cycle event. |
| listFreqUnits | [.ListFreqUnitsRequest](#ListFreqUnitsRequest) | [.ListFreqUnitsResponse](#ListFreqUnitsResponse) | Returns a list of frequency units. |
| listHarmonicEvents | [.ListHarmonicEventsRequest](#ListHarmonicEventsRequest) | [.ListHarmonicEventsResponse](#ListHarmonicEventsResponse) | Returns a list of harmonic events defined for a project. |
| listHarmonicProfileTypes | [.ListHarmonicProfileTypesRequest](#ListHarmonicProfileTypesRequest) | [.ListHarmonicProfileTypesResponse](#ListHarmonicProfileTypesResponse) | Returns a list of harmonic load Profile types. |
| listLifeCycleEvents | [.ListLCEventsRequest](#ListLCEventsRequest) | [.ListLCEventsResponse](#ListLCEventsResponse) | Returns a list of life cycle phases and their events given a Sherlock project directory. |
| listLifeCycleStates | [.ListLCStatesRequest](#ListLCStatesRequest) | [.ListLCStatesResponse](#ListLCStatesResponse) | Returns a list of life cycle states. |
| listLifeCycleTypes | [.ListLCTypesRequest](#ListLCTypesRequest) | [.ListLCTypesResponse](#ListLCTypesResponse) | Returns a list of life cycle types. |
| listRandomVibeProfileTypes | [.ListRandomVibeProfileTypesRequest](#ListRandomVibeProfileTypesRequest) | [.ListRandomVibeProfileTypesResponse](#ListRandomVibeProfileTypesResponse) | Returns a list of random vibe profile types. |
| listRandomVibeEvents | [.ListRandomVibeEventsRequest](#ListRandomVibeEventsRequest) | [.ListRandomVibeEventsResponse](#ListRandomVibeEventsResponse) | Returns a list of random vibe events defined for a project. |
| listShockEvents | [.ListShockEventsRequest](#ListShockEventsRequest) | [.ListShockEventsResponse](#ListShockEventsResponse) | Returns a list of shock events defined for a project. |
| listShockLoadUnits | [.ListShockLoadUnitsRequest](#ListShockLoadUnitsRequest) | [.ListShockLoadUnitsResponse](#ListShockLoadUnitsResponse) | Returns a list of shock load units. |
| listShockPulses | [.ListShockPulsesRequest](#ListShockPulsesRequest) | [.ListShockPulsesResponse](#ListShockPulsesResponse) | Returns a list of shock pulses. |
| listTempUnits | [.ListTempUnitsRequest](#ListTempUnitsRequest) | [.ListTempUnitsResponse](#ListTempUnitsResponse) | Returns a list of temperature units. |
| loadHarmonicProfile | [.LoadHarmonicProfileRequest](#LoadHarmonicProfileRequest) | [.LoadHarmonicProfileResponse](#LoadHarmonicProfileResponse) | Loads a harmonic profile from a .dat or .csv file. |
| loadRandomVibeProfile | [.LoadRandomVibeProfileRequest](#LoadRandomVibeProfileRequest) | [.LoadRandomVibeProfileResponse](#LoadRandomVibeProfileResponse) | Loads a random vibe profile from a .dat or .csv file. |
| loadShockProfileDataset | [.LoadShockProfileDatasetRequest](#LoadShockProfileDatasetRequest) | [.LoadShockProfileDatasetResponse](#LoadShockProfileDatasetResponse) | Loads a shock profile using dataset from a .dat or .csv file. |
| loadShockProfilePulses | [.LoadShockProfilePulsesRequest](#LoadShockProfilePulsesRequest) | [.LoadShockProfilePulsesResponse](#LoadShockProfilePulsesResponse) | Loads a shock profile using pulses from a .dat or .csv file. |
| loadThermalProfile | [.LoadThermalProfileRequest](#LoadThermalProfileRequest) | [.LoadThermalProfileResponse](#LoadThermalProfileResponse) | Loads a thermal profile from a .dat or .csv file. |
| deletePhase | [.DeletePhaseRequest](#DeletePhaseRequest) | [.ReturnCode](#ReturnCode) | Delete a life phase for a project. |

 



<a name="SherlockModelService-proto"></a>
<p align="right"><a href="#top">Top</a></p>

