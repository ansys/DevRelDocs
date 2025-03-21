---
category: compression
plugin: core
license: any_dpf_supported_increments
---

# compression:kMeans clustering

## Description

Apply kMeans clustering to group data depending on the data's non-linearity.

## Inputs


- **Pin 0** clusters_number (type: ['int32']) (optional: True): number of the clusters (dafault is 3)

- **Pin 1** formula (type: ['string']) (optional: True): formula ('dist'/'dotprod'), default is 'dist'

- **Pin 2** fields_container (type: ['fields_container']) (optional: False): an iunput fields container containing the data which will be used for the clustering

- **Pin 3** component_number (type: ['int32']) (optional: True): component number as an int (default is 0), ex '0' for X-displacement, '1' for Y-displacement,...


## Outputs


- **Pin 0** scoping_clusters (type: ['scopings_container']): Scopings container with the space scoping (entities' ids) corresponding to each of k-clusters


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: compression
- **plugin**: core
- **scripting name**: kmeans_clustering
- **full name**: compression.kmeans_clustering
- **internal name**: kmeans_operator
- **license**: any_dpf_supported_increments