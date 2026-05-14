## Introduction

The AVxcelerate Post Controller REST API v0.1.0 is compatible with the AVX Architecture V2.

This REST API allows you to manage post processing jobs

## Features

### Download concrete scenario files

It is possible to download concrete scenario files of simulation jobs

To do this, you need to provides a list of *sample_ids* to generate concrete scenario files for those samples. 

* If 'samples' is empty or not provided, no concrete file is included. 
* If 'samples' is specified, than all the concrete files will be included for these samples in the zip.


You can also specify what kind of documents you want to download:

* Scenario files
* Asset files

 If the parameter: *"filter_by_asset_declaration"* is empty or not provided, all the "common" asset data will be provided.


