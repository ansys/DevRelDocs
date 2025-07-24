# Changelog

This file lists the changes introduced in the AVxcelerate Resource Manager API v0.1.0 released in 2025 R2.

The AVxcelerate Resource Manager API v0.1.0 is compatible with the AVX Architecture V2.

This API allows to perform CRUD (Create, Read, Update, and Delete) operations on resources such as queues, deployments, applications and app-runtime-configurations.

## Features

### Queues:
* You can create queues with the required storages, resource limits and environment variables
* Allowing to manage queues helps will help you configure different applications within resource limits and group the applications requiring same storage together.
* You can adjust the maximum number of workers that can concurrently run on a queue using the parameter 'maximum_allowed_worker_instances'

### Plugins:
 You can register a plugin with definition of container runtime.
For example: Docker Engine / Kubernetes

### Jobs:
* You can submit a resource-manager job by providing application details (name, version, image, environment variables, etc.) and track it to its completion.
* You can also check the status of the job and clean the resources the job has acquired.


