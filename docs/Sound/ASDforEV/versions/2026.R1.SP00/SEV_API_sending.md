# Sending Messages to ASDforEV

Here is the list of messages that can be sent to Ansys Sound: ASDforEV using this API.

## General Message

|Keyword|Data|Comments|
|-------|----|--------|
|**ALIVE**|empty|**ALIVE** \(with no DATA\) should be sent every 5 seconds so that ASDforEV can indicate that the CAN bus is still being read by the dedicated application|

## Vehicle Messages

|Keyword|Data|Comments|
|-------|----|--------|
|**Speed**|Value \(float\)|Vehicle speed in kph|
|**RPM**|Value \(float\)|Engine RPM|
|**Load**|Value \(float\)|Accelerator pedal load in %|
|**Acceleration**|Value \(float\)|Vehicle acceleration in g|
|**Torque**|Value \(float\)|Engine torque in N.m|
|**Brake**|Value \(float\)|Brake pedal position in %|

## Ambiance Messages

|Keyword|Data|Comments|
|-------|----|--------|
|**Ambiance1\_Activate**|Value \(float\)|This message sends the values that will control the activation of sound function Ambiance1.|
|**Ambiance1\_Angle**|Value \(float\)|This message sends the values that will control the azimuth angle of sound function Ambiance1.|

Similar messages are used for sound functions **Ambiance2** and **Ambiance 3**.

## SAF Messages

|Keyword|Data|Comments|
|-------|----|--------|
|**SAF\_Activate**|Value\(float\)|This message sends the values that will control the activation of the SAF sound function|
|**SAF\_Angle**|Value\(float\)|This message sends the values that will control the azimuth angle of the SAF sound function|
|**SAF\_Diffuseness**|Value\(float\)|This message sends the values that will control the spatialization diffuseness of the SAF sound function|

## ICE-ASD Messages

|Keyword|Data|Comments|
|-------|----|--------|
|**ICEASD\_Activate**|Value\(float\)|This message sends the values that will control the activation of the ICE-ASD sound function|
|**ICEASD\_RPM**|Value\(float\)|This message sends the values that will control the RPM used to pilot ICE-ASD pitch and gain|
|**ICEASD\_Speed**|Value\(float\)|This message sends the values that will control the speed used to pilot ICE-ASD gain|
|**ICEASD\_Load**|Value\(float\)|This message sends the values that will control the load used to pilot ICE-ASD gain|
|**ICEASD\_Acceleration**|Value\(float\)|This message sends the values that will control the acceleration used to switch between 2 ICE-ASD datasets, respectively dedicated to acceleration and deceleration phases|

## ADAS Messages

|Keyword|Data|Comments|
|-------|----|--------|
|**ADAS1\_Activate**|Value\(float\)|This message sends the values that will control the activation of sound function ADAS1.|
|**ADAS1\_Silence**|Value\(float\)|This message sends the values that will control the silence duration of sound function ADAS1.|
|**ADAS1\_Angle**|Value\(float\)|This message sends the values that will control the azimuth angle of sound function ADAS1.|

Similar messages are used for sound function **ADAS2** to sound function **ADAS5**.

## HMI Messages

|Keyword|Data|Comments|
|-------|----|--------|
|**HMI1\_Activate**|Value\(float\)|If **HMI1\_Activate on** was previously sent, this message sends the values that will control the activation of sound function HMI1.|
|**HMI1\_Silence**|Value\(float\)|If **HMI1\_Silence on** was previously sent, this message sends the values that will control the silence duration of sound function HMI1.|
|**HMI1\_Angle**|Value\(float\)|If **HMI1\_Angle on** was previously sent, this message sends the values that will control the azimuth angle of sound function HMI1.|

Similar messages are used for sound function **HMI2** to sound function **HMI15**.

## Other Messages

|Keyword|Data|Comments|
|-------|----|--------|
|**Mode**|Value \(float\)|This message sends driving mode values to be used in ASDforEV’s Vehicle data preprocessing|
|**Steering**|Value \(float\)|This message sends steering wheel position values to be used in ASDforEV’s Vehicle data preprocessing|
|**Traffic**|Value \(float\)|This message sends traffic level values to be used in ASDforEV’s Vehicle data preprocessing|
|**Lighting**|Value \(float\)|This message sends lighting values to be used in ASDforEV’s Vehicle data preprocessing|
|**Temperature**|Value \(float\)|This message sends exterior air temperature values to be used in ASDforEV’s Vehicle data preprocessing|
|**Rain**|Value \(float\)|This message sends rain values to be used in ASDforEV’s Vehicle data preprocessing|
|**OutLight**|Value \(float\)|This message sends exterior lighting level values to be used in ASDforEV’s Vehicle data preprocessing|
|**Wind**|Value \(float\)|This message sends wind speed values to be used in ASDforEV’s Vehicle data preprocessing|
|**Time**|Value \(float\)|This message sends time of day values to be used in ASDforEV’s Vehicle data preprocessing|

## Custom Messages

|Keyword|Data|Comments|
|-------|----|--------|
|**Custom1**|Value \(float\)|This message sends an additional custom parameter's values to be used in ASDforEV’s External data preprocessing|

Similar messages are used for 9 other custom signals, from **Custom2** to **Custom10**.
