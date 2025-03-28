# utility:server path

## Description

Returns the platform-specific path to a folder in the Dpf server

## Inputs


- **Pin 0** subpath (type: ['int32']) (optional: True): Subpath of the Dpf server. Supported values: 0 (default): root of the server, 1: "dpf/bin/platform", 2: "aisol/bin(dll)/platform", 3: "dpf/plugins", 4: "dpf/workflows".


## Outputs


- **Pin 0** path (type: ['string']): Path to the requested folder in the Dpf server


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: server_path
- **full name**: utility.server_path
- **internal name**: server_path
- **license**: None