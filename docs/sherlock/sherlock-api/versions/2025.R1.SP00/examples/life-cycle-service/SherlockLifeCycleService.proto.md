# SherlockLifeCycleService.proto

Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

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
| cycleType | [string](#string) |  | The cycle type. For example: "COUNT", "DUTY CYCLE", "PER YEAR", "PER HOUR", etc. |
| sweepRate | [double](#double) |  | Sweep rate for the harmonic event |
| orientation | [string](#string) |  | PCB orientation in the format of azimuth, elevation. Example: "30,15". |
| profileType | [string](#string) |  | Harmonic load profile types. Example valid values are "Uniaxial" and "Triaxial". |
| loadDirection | [string](#string) |  | Load direction in the format of x,y,z. Example: "0,0,1". |

## AddHarmonicEventResponse

Response from adding a harmonic vibe life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

## AddHarmonicVibeProfilesRequest

Request to define and add new harmonic vibe life cycle event profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| harmonicVibeProfiles | [AddHarmonicVibeProfilesRequest.HarmonicVibeProfile](#addharmonicvibeprofilesrequest.harmonicvibeprofile) | repeated | List of harmonic vibe life cycle event profiles for a specified project. |

## AddHarmonicVibeProfilesRequest.HarmonicVibeProfile




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Name of the harmonic event. |
| profileName | [string](#string) |  | Name of the harmonic profile. |
| freqUnits | [string](#string) |  | Frequency units. |
| loadUnits | [string](#string) |  | Load units. |
| harmonicVibeProfileEntries | [AddHarmonicVibeProfilesRequest.HarmonicVibeProfile.Entry](#addharmonicvibeprofilesrequest.harmonicvibeprofile.entry) | repeated | List of frequency and load values for a harmonic vibe life cycle phase. |
| triaxialAxis | [string](#string) |  | If the harmonic profile type is "Triaxial", the axis this profile should be assigned to. Valid values are: x, y, z. |

## AddHarmonicVibeProfilesRequest.HarmonicVibeProfile.Entry




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| freq | [double](#double) |  | Frequency. |
| load | [double](#double) |  | Load. |

## AddHarmonicVibeProfilesResponse

Response from adding harmonic vibe life cycle event profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

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
| cycleType | [string](#string) |  | The cycle type. For example: "COUNT", "DUTY CYCLE", "PER YEAR", "PER HOUR", etc. |
| orientation | [string](#string) |  | PCB orientation in the format of azimuth, elevation. Example: "30,15". |
| profileType | [string](#string) |  | Random load profile type. Example valid value is "Uniaxial". |
| loadDirection | [string](#string) |  | Load direction in the format of x,y,z. Example: "0,0,1". |

## AddRandomVibeEventResponse

Response from adding a random vibe life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

## AddRandomVibeProfilesRequest

Request to define and add new random vibe life cycle event profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| randomVibeProfiles | [AddRandomVibeProfilesRequest.RandomVibeProfile](#addrandomvibeprofilesrequest.randomvibeprofile) | repeated | List of random vibe life cycle event profiles for a specified project. |

## AddRandomVibeProfilesRequest.RandomVibeProfile




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Name of the random vibe event. |
| profileName | [string](#string) |  | Name of the random vibe profile. |
| freqUnits | [string](#string) |  | Frequency units. |
| amplUnits | [string](#string) |  | Amplitude units. |
| randomVibeProfileEntries | [AddRandomVibeProfilesRequest.RandomVibeProfile.Entry](#addrandomvibeprofilesrequest.randomvibeprofile.entry) | repeated | List of frequency and amplitude values for a random vibe life cycle event. |

## AddRandomVibeProfilesRequest.RandomVibeProfile.Entry




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| freq | [double](#double) |  | Frequency. |
| ampl | [double](#double) |  | Amplitude. |

## AddRandomVibeProfilesResponse

Response from adding random vibe profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

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
| cycleType | [string](#string) |  | The cycle type. For example: "COUNT", "DUTY CYCLE", "PER YEAR", "PER HOUR", etc. |
| orientation | [string](#string) |  | PCB orientation in the format of azimuth, elevation. Example: 30,15 |
| loadDirection | [string](#string) |  | Load direction in the format of x,y,z. Example: 0,0,1 |

## AddShockEventResponse

Response from adding a shock life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

## AddShockProfilesRequest

Request to define and add new shock life cycle event profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| shockProfiles | [AddShockProfilesRequest.ShockProfile](#addshockprofilesrequest.shockprofile) | repeated | List of shock life cycle event profiles for a specified project. |

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
| shockProfileEntries | [AddShockProfilesRequest.ShockProfile.Entry](#addshockprofilesrequest.shockprofile.entry) | repeated | Primary shape entry for the shock profile. |

## AddShockProfilesRequest.ShockProfile.Entry




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shape | [string](#string) |  | Shape of the shock profile. |
| load | [double](#double) |  | Load. |
| freq | [double](#double) |  | Frequency rate. |
| decay | [double](#double) |  | Decay rate. |

## AddShockProfilesResponse

Response from adding shock life cycle event profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

## AddThermalEventRequest

Request to define and add a new thermal life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase to add this event to. |
| eventName | [string](#string) |  | Name of the thermal event. |
| description | [string](#string) |  | Description of the thermal event. |
| numOfCycles | [double](#double) |  | Number of cycles defined for this thermal event. |
| cycleType | [string](#string) |  | The cycle type. For example: "COUNT", "DUTY CYCLE", "PER YEAR", "PER HOUR", etc. |
| cycleState | [string](#string) |  | The life cycle state. For example: "OPERATING", "STORAGE". |

## AddThermalEventResponse

Response from adding a thermal life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

## AddThermalProfilesRequest

Request to define and add a new thermal life cycle event profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| thermalProfiles | [AddThermalProfilesRequest.ThermalProfile](#addthermalprofilesrequest.thermalprofile) | repeated | List of thermal life cycle event profiles for a specified project. |

## AddThermalProfilesRequest.ThermalProfile




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Name of the thermal event. |
| profileName | [string](#string) |  | Name of the thermal profile. |
| timeUnits | [string](#string) |  | Time units. |
| tempUnits | [string](#string) |  | Temperature units. |
| thermalProfileEntries | [AddThermalProfilesRequest.ThermalProfile.Entry](#addthermalprofilesrequest.thermalprofile.entry) | repeated | List of step entries for a life cycle event and/or phase. |

## AddThermalProfilesRequest.ThermalProfile.Entry




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| step | [string](#string) |  | Name of the step. |
| type | [string](#string) |  | Profile step type. "HOLD" or "RAMP". |
| time | [double](#double) |  | Time duration of the step. |
| temp | [double](#double) |  | Temperature of the step. |

## AddThermalProfilesResponse

Response from adding thermal profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

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
| cycleType | [string](#string) |  | The cycle type. For example: "COUNT", "DUTY CYCLE", "PER YEAR", "PER HOUR", etc. |

## CreateLifePhaseResponse

Response from creating a life phase.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of error messages. |

## DeleteEventRequest

Request to delete a life cycle event in a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase from which to delete this event. |
| eventName | [string](#string) |  | Name of the event to be deleted. |

## DeleteLifePhaseResponse

Response for deleting a life phase


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |

## DeletePhaseRequest

Request for deleting a life phase


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | Sherlock life phase name. |

## Events

Represents an event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Event name. |

## ListAmplUnitsRequest

Request for a list of amplitude units.


## ListAmplUnitsResponse

Represents a list of amplitude units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| amplUnits | [string](#string) | repeated | List of amplitude units. |

## ListDurationUnitsRequest

Request for a list of duration units for event settings.


## ListDurationUnitsResponse

Represents a list of duration units for event settings in life cycle.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| durationUnits | [string](#string) | repeated | List of duration units. |

## ListFreqUnitsRequest

Request for a list of frequency units.


## ListFreqUnitsResponse

Represents a list of frequency units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| freqUnits | [string](#string) | repeated | List of frequency units. For example: "HZ", "KHZ", "MHZ", "GHZ". |

## ListHarmonicEventsRequest

Request for a list of harmonic events defined for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |

## ListHarmonicEventsResponse

Represents a list of harmonic events defined for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| event | [Events](#events) | repeated | List of harmonic events. |

## ListHarmonicProfileTypesRequest

Request for a list of harmonic load profile types.


## ListHarmonicProfileTypesResponse

Represents a list of harmonic load profile types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| types | [string](#string) | repeated | List of harmonic load profile types. "Uniaxial", "Triaxial". |

## ListLCEventsRequest

Request for a list of life cycle phases and events for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |

## ListLCEventsResponse

Represents the life cycle phases and events for a Sherlock project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| lcPhases | [ListLCEventsResponse.LifeCyclePhase](#listlceventsresponse.lifecyclephase) | repeated | List of LifeCyclePhases for a specified project. |

## ListLCEventsResponse.LifeCyclePhase




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Life cycle phase name. |
| description | [string](#string) |  | Life cycle phase description. |
| lcEvents | [ListLCEventsResponse.LifeCyclePhase.LifeCycleEvent](#listlceventsresponse.lifecyclephase.lifecycleevent) | repeated | List of LifeCycleEvents for a project phase. |

## ListLCEventsResponse.LifeCyclePhase.LifeCycleEvent




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Life cycle event name. |
| description | [string](#string) |  | Life cycle event description. |
| type | [string](#string) |  | Life cycle type. For example: "Thermal Event", "Shock Event", "Random Vibe", "Harmonic Vibe". |

## ListLCStatesRequest

Request for a list of life cycle states.


## ListLCStatesResponse

Represents a list of life cycle states.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| states | [string](#string) | repeated | List of life cycle states. For example: "Operating", "Storage". |

## ListLCTypesRequest

Request for a list of life cycle types.


## ListLCTypesResponse

Represents a list of life cycle types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| types | [string](#string) | repeated | List of life cycle types. For example, "DUTY CYCLE", "PER YEAR", "PER HOUR", etc. |

## ListRandomVibeEventsRequest

Request for a list of random vibe events defined for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |

## ListRandomVibeEventsResponse

Represents a list of random vibe events defined for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| event | [Events](#events) | repeated | List of random vibe events. |

## ListRandomVibeProfileTypesRequest

Request for a list of random vibe profile types.


## ListRandomVibeProfileTypesResponse

Represents a list of random vibe profile types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| types | [string](#string) | repeated | List of random vibe profile types. Currently there is only one: "Uniaxial". |

## ListShockEventsRequest

Request for a list of shock events defined for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |

## ListShockEventsResponse

Represents a list of shock events defined for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| event | [Events](#events) | repeated | List of shock events. |

## ListShockLoadUnitsRequest

Request for a list of shock load units.


## ListShockLoadUnitsResponse

Represents a list of shock load units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| units | [string](#string) | repeated | List of shock load units. For example: "G", "m/s2", "mm/s2". |

## ListShockPulsesRequest

Request for a list of shock Pulses.


## ListShockPulsesResponse

Represents a list of shock Pulses.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| shockPulse | [string](#string) | repeated | List of shock pulses. For example: "FullSine", "HalfSine", "Triangle", "Sawtooth", "FullSquare". |

## ListTempUnitsRequest

Request for a list of temperature units.


## ListTempUnitsResponse

Represents a list of temperature units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| tempUnits | [string](#string) | repeated | List of temperature units. For example: "C", "F", "K". |

## LoadHarmonicProfileRequest

Request to load a harmonic life cycle event profile from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Harmonic event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| harmonicCsvProps | [LoadHarmonicProfileRequest.CSVProps](#loadharmonicprofilerequest.csvprops) |  | Properties for a .csv file load. |
| triaxialAxis | [string](#string) |  | If the harmonic profile type is "Triaxial", the axis this profile should be assigned to. Valid values are: x, y, z. |

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

## LoadHarmonicProfileResponse

Response from loading a harmonic vibe life cycle event profile from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

## LoadRandomVibeProfileRequest

Request to load a random vibe life cycle event profile from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Random vibe event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| randomVibeCsvProps | [LoadRandomVibeProfileRequest.CSVProps](#loadrandomvibeprofilerequest.csvprops) |  | Properties for a .csv file load. |

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

## LoadRandomVibeProfileResponse

Response from loading a random vibe life cycle event profile from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

## LoadShockProfileDatasetRequest

Request to load a shock life cycle event profile using the dataset (time and load) from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Shock event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| shockDsCsvProps | [LoadShockProfileDatasetRequest.CSVProps](#loadshockprofiledatasetrequest.csvprops) |  | Properties for a .csv file load. |

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

## LoadShockProfileDatasetResponse

Response from loading a shock profile using the dataset from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

## LoadShockProfilePulsesRequest

Request to load a shock life cycle event profile using pulses from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Shock event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| shockPulsesCsvProps | [LoadShockProfilePulsesRequest.CSVProps](#loadshockprofilepulsesrequest.csvprops) |  | Properties for a .csv file load. |

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

## LoadShockProfilePulsesResponse

Response from loading a shock profile using pulses from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

## LoadThermalProfileRequest

Request to load a thermal life cycle event profile from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Thermal event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| csvProps | [LoadThermalProfileRequest.CSVProps](#loadthermalprofilerequest.csvprops) |  | Properties for a .csv file load. |

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

## LoadThermalProfileResponse

Response from loading a thermal profile from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |



## SherlockLifeCycleService



| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| addHarmonicEvent | [.AddHarmonicEventRequest](#addharmoniceventrequest) | [.AddHarmonicEventResponse](#addharmoniceventresponse) | Define and add a new harmonic vibe life cycle event. |
| addHarmonicVibeProfiles | [.AddHarmonicVibeProfilesRequest](#addharmonicvibeprofilesrequest) | [.AddHarmonicVibeProfilesResponse](#addharmonicvibeprofilesresponse) | Define and add new harmonic vibe life cycle event profiles. |
| addRandomVibeProfiles | [.AddRandomVibeProfilesRequest](#addrandomvibeprofilesrequest) | [.AddRandomVibeProfilesResponse](#addrandomvibeprofilesresponse) | Define and add new random vibe life cycle event profiles. |
| addRandomVibeEvent | [.AddRandomVibeEventRequest](#addrandomvibeeventrequest) | [.AddRandomVibeEventResponse](#addrandomvibeeventresponse) | Define and add a new random vibe life cycle event. |
| addShockEvent | [.AddShockEventRequest](#addshockeventrequest) | [.AddShockEventResponse](#addshockeventresponse) | Define and add a new shock life cycle event. |
| addShockProfiles | [.AddShockProfilesRequest](#addshockprofilesrequest) | [.AddShockProfilesResponse](#addshockprofilesresponse) | Define and add new shock life cycle event profiles.<br>Keep in mind, the pulse duration and load values defined in the Shock Profile Editor<br>are relative values used solely within the editor to define the profile shape. <br>A combination of all the primary pulse shapes is then used to define the pulse profile. |
| addThermalEvent | [.AddThermalEventRequest](#addthermaleventrequest) | [.AddThermalEventResponse](#addthermaleventresponse) | Define and add a new thermal life cycle event. |
| addThermalProfiles | [.AddThermalProfilesRequest](#addthermalprofilesrequest) | [.AddThermalProfilesResponse](#addthermalprofilesresponse) | Define and add new thermal life cycle event profiles. |
| createLifePhase | [.CreateLifePhaseRequest](#createlifephaserequest) | [.CreateLifePhaseResponse](#createlifephaseresponse) | Define and add a new life phase. |
| deleteEvent | [.DeleteEventRequest](#deleteeventrequest) | [.ReturnCode](#returncode) | Delete a life cycle event. |
| listAmplUnits | [.ListAmplUnitsRequest](#listamplunitsrequest) | [.ListAmplUnitsResponse](#listamplunitsresponse) | Returns a list of amplitude units when adding a random vibe profile. |
| listDurationUnits | [.ListDurationUnitsRequest](#listdurationunitsrequest) | [.ListDurationUnitsResponse](#listdurationunitsresponse) | Returns a list of duration units when adding a life cycle event. |
| listFreqUnits | [.ListFreqUnitsRequest](#listfrequnitsrequest) | [.ListFreqUnitsResponse](#listfrequnitsresponse) | Returns a list of frequency units. |
| listHarmonicEvents | [.ListHarmonicEventsRequest](#listharmoniceventsrequest) | [.ListHarmonicEventsResponse](#listharmoniceventsresponse) | Returns a list of harmonic events defined for a project. |
| listHarmonicProfileTypes | [.ListHarmonicProfileTypesRequest](#listharmonicprofiletypesrequest) | [.ListHarmonicProfileTypesResponse](#listharmonicprofiletypesresponse) | Returns a list of harmonic load Profile types. |
| listLifeCycleEvents | [.ListLCEventsRequest](#listlceventsrequest) | [.ListLCEventsResponse](#listlceventsresponse) | Returns a list of life cycle phases and their events given a Sherlock project directory. |
| listLifeCycleStates | [.ListLCStatesRequest](#listlcstatesrequest) | [.ListLCStatesResponse](#listlcstatesresponse) | Returns a list of life cycle states. |
| listLifeCycleTypes | [.ListLCTypesRequest](#listlctypesrequest) | [.ListLCTypesResponse](#listlctypesresponse) | Returns a list of life cycle types. |
| listRandomVibeProfileTypes | [.ListRandomVibeProfileTypesRequest](#listrandomvibeprofiletypesrequest) | [.ListRandomVibeProfileTypesResponse](#listrandomvibeprofiletypesresponse) | Returns a list of random vibe profile types. |
| listRandomVibeEvents | [.ListRandomVibeEventsRequest](#listrandomvibeeventsrequest) | [.ListRandomVibeEventsResponse](#listrandomvibeeventsresponse) | Returns a list of random vibe events defined for a project. |
| listShockEvents | [.ListShockEventsRequest](#listshockeventsrequest) | [.ListShockEventsResponse](#listshockeventsresponse) | Returns a list of shock events defined for a project. |
| listShockLoadUnits | [.ListShockLoadUnitsRequest](#listshockloadunitsrequest) | [.ListShockLoadUnitsResponse](#listshockloadunitsresponse) | Returns a list of shock load units. |
| listShockPulses | [.ListShockPulsesRequest](#listshockpulsesrequest) | [.ListShockPulsesResponse](#listshockpulsesresponse) | Returns a list of shock pulses. |
| listTempUnits | [.ListTempUnitsRequest](#listtempunitsrequest) | [.ListTempUnitsResponse](#listtempunitsresponse) | Returns a list of temperature units. |
| loadHarmonicProfile | [.LoadHarmonicProfileRequest](#loadharmonicprofilerequest) | [.LoadHarmonicProfileResponse](#loadharmonicprofileresponse) | Loads a harmonic profile from a .dat or .csv file. |
| loadRandomVibeProfile | [.LoadRandomVibeProfileRequest](#loadrandomvibeprofilerequest) | [.LoadRandomVibeProfileResponse](#loadrandomvibeprofileresponse) | Loads a random vibe profile from a .dat or .csv file. |
| loadShockProfileDataset | [.LoadShockProfileDatasetRequest](#loadshockprofiledatasetrequest) | [.LoadShockProfileDatasetResponse](#loadshockprofiledatasetresponse) | Loads a shock profile using dataset from a .dat or .csv file. |
| loadShockProfilePulses | [.LoadShockProfilePulsesRequest](#loadshockprofilepulsesrequest) | [.LoadShockProfilePulsesResponse](#loadshockprofilepulsesresponse) | Loads a shock profile using pulses from a .dat or .csv file. |
| loadThermalProfile | [.LoadThermalProfileRequest](#loadthermalprofilerequest) | [.LoadThermalProfileResponse](#loadthermalprofileresponse) | Loads a thermal profile from a .dat or .csv file. |
| deletePhase | [.DeletePhaseRequest](#deletephaserequest) | [.ReturnCode](#returncode) | Delete a life phase for a project. |


Back to [Top](#table-of-contents)

