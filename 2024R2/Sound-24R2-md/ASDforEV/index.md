# Introduction

Ansys Sound: ASDforEV can be directly driven using the Open Sound Control Protocol \(OSC\) over the UDP network protocol. Using the API described in this document, you can send data \(vehicle messages, ADAS data, etc.\) to Ansys Sound: ASDforEV to command the sounds produced.

This API document describes the driving parameters, also referred to as messages, which can be sent to or received from Ansys Sound: ASDforEV.

The API helps you to configure your external device to read data. If you do not have the resources to configure it, Ansys can provide help.

- [OSC Protocol](SEV_API_OSC_protocol.md)
- [Ansys Sound: ASDforEV API Messages](SEV_API_SEV_Driving.md)
  - [UDP Connection](SEV_API_UDP_connection.md)
    - [Sending Messages to ASDforEV](SEV_API_sending.md)
    - [Receiving Messages from ASDforEV](SEV_API_receiving.md)
