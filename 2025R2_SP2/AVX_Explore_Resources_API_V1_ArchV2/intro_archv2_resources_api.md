## Introduction

The AVxcelerate Resource Manager REST API v0.1.0 is compatible with the AVX Architecture V2.

This REST API allows to perform CRUD (Create, Read, Update, and Delete) operations on resources such as queues, deployments, applications and app-runtime-configurations.

## Features

### Queues

* You can create queues with the required storages, resource limits and environment variables
* Allowing to manage queues helps will help you configure different applications within resource limits and group the applications requiring same storage together.
* You can adjust the maximum number of workers that can concurrently run on a queue using the parameter 'maximum_allowed_worker_instances'

### Plugins

 You can register a plugin with definition of container runtime.
For example: Docker Engine / Kubernetes

### Jobs

* You can submit a resource-manager job by providing application details (name, version, image, environment variables, etc.) and track it to its completion.
* You can also check the status of the job and clean the resources the job has acquired.

## Python helper

The AVxcelerate python APIs are hosted as a python package on a cluster as part of the Explore service deployment. The developers can install the package using pip and use it to call AVx autonomy APIs without needing to make raw REST calls.

### PyPi Regsitry URL:

The python package is hosted as PyPi compliant registry on each deployed cluster. The registry URL is like this:

https://explore.{{ domain }}/api/explore/pypi

## Usage example

Pre-requisites:

We assume that on the system is running with the **Ubuntu 22.04** version, and that the following tools are already installed:

- python 3.10
- pip 25.1
- uv 0.6

And we assume that you are using AVx Autonomy Toolchain version **25R2.2**

Step 1: Create virtual environment

```bash
$ python -m venv .venv 


Step 2: Activate the virtual environment

```bash
$ source .venv/bin/activate  
```

Step 3: Install python packages:

- ansys-api-avxcelerate-autonomy
- ansys-avxcelerate-autonomy

```bash
$ pip install ansys-api-avxcelerate-autonomy ansys-avxcelerate-autonomy --extra-index-url https://explore.{{ domain }}/api/explore/pypi
```

Step 4: Use ansys-api-avxcelerate-autonomy and ansys-avxcelerate-autonomy in your python code


```python
import asyncio
from ansys.api.avxcelerate.autonomy.explore_service.v1.api.jobs_api import JobsApi
from ansys.api.avxcelerate.autonomy.explore_service.v1.api_client import ApiClient
from ansys.api.avxcelerate.autonomy.explore_service.v1.configuration import Configuration
from ansys.api.avxcelerate.autonomy.explore_service.v1.exceptions import NotFoundException
from ansys.api.avxcelerate.autonomy.explore_service.v1.models.explore_job_read import ExploreJobRead
from ansys.avxcelerate.autonomy.utils.auth_client_session import AuthClientSession
from ansys.avxcelerate.autonomy.utils.token_provider import TokenProvider

async def main():
    base_url = "https://explore.{{ domain }}"
    configuration = Configuration(host=f"{base_url}/api/explore/v1")
    async with ApiClient(configuration) as api_client:
        session = AuthClientSession(base_url=f"{base_url}/api/explore/v1/")
        provider = TokenProvider(f"{base_url}/auth")
        session.set_provider(provider)
        provider.login()
        api_client.rest_client.pool_manager =  session
        jobs_api = JobsApi(api_client)
        job_id = "exp-dec894b2-647c-4ca5-b516-cdfc18c58fdd"
        try:
            job: ExploreJobRead = await jobs_api.get_job(job_id)
            print(job)
        except NotFoundException:
            print("No job found against this id")
        except Exception as ex:
            print(str(ex))
            print("Couldn't get job against this job id")

asyncio.run(main())
```

## Optimize available resource through worker management

### 1. Introduction: worker management in simulation jobs

If you submit a large number of simulation jobs, this will trigger the creation of workers that are queued and launched simultaneously. 

This creation of many worker instances (referred to as containers in Kubernetes) can overload the cluster. As a result, the cluster’s resources may become depleted, which could lead to failures or even a complete system crash.


### 2. Cluster Resource Usage Optimization

To prevent this issue, you can set a limit on the maximum number of worker instances that can be created during a simulation job. 

This limit is controlled by the *maximum_allowed_worker_instances* parameter, which can be set when creating or updating a queue via the Resource Manager REST API. 

Once this limit is configured, the system will only launch up to the specified number of workers at the same time; any additional jobs will remain in a waiting state until sufficient worker capacity becomes available.

### Example

* If The *maximum_allowed_worker_instances* parameter is set to 10 for the queue named *local*. 
* Two jobs are created: 
   
   a. Job (1) with 10 worker instances 
   
   b. Job (2) with 8 worker instances

If Job (1) is created first, it will allocate 10 worker instances, using up all available capacity. As a result, Job (2) will be paused at the *Simulation Step*, and a warning will appear under the *Simulation Step* indicating that no worker instances can be created.

Once Job (1) has finished, then capacity becomes available. Job (2) can then allocate 8 worker instances, the warning disappears, and the simulation proceeds. 

Note: The AVxcelerate toolchain does not support partial allocation of worker instances. If a job requests 10 workers, it will only begin when all 10 worker instances are available.

### Additional Containers

While worker instances are the primary consumers of cluster resources, there are two additional containers that are created when a job is submitted:

 1. Simulation Controller Instance (created on the *simulation-controller-queue*): Manages the job and its associated workers.

 2. Post Controller Instance (created on the *post-controller-queue*): Launched when the visualization tab is opened in the UI and is responsible for data analysis.

When estimating the resources needed for a job, consider that each job will run one simulation controller instance, the specified number of worker instances, and potentially one post controller instance.

Note: By default, there is no limit on the number of simulation controller and post controller instances that can be created. This means that *n* concurrent jobs will result in *n* controller instances, which can consume significant resources. To manage this, you can set the *maximum_allowed_worker_instances* parameter for these queues to control the number of controller instances created.

## Configuring maximum number of parallel running workers per queue

Through the Resource REST API, and the *maximum_allowed_worker_instances* parameter you are able to configure the maximum number of parallel running workers per job. 



Set a limit to the following parameter:
```bash
 "maximum_allowed_worker_instances"
 ``` 

See below screenshot as an example:

![Alt text](./screen-1.png)

Note: The resource manager allocates the job that has the requested amount of workers or less. 

In the example below, only 3 workers are available, so the job that requires 4 workers, appears as 'pending'

![Alt text](./screen-2.png)

## Download concrete scenario files

It is possible to download the concrete scenario files from the REST API. 

User provides list of sample_ids to generate concrete scenario files for those samples. If 'samples' is empty or not provided, no concrete file is included. But, if samples is specified, include all the concrete files (i.e., those files that are generated for each sample) for these samples in the zip.


User can also specify what kind of documents Example: scenario files or asset files, he/she wants to download. If param "filter_by_asset_declaration" is empty or not provided, all the "common" asset data will be provided.




Added filtering based on types listed in asset_declaration.

If param "filter_by_asset_declaration" is empty or not provided, all the "common" asset data will be provided.

If 'samples' is empty or not provided, no concrete file is included. But, if samples is specified, include all the concrete files (i.e., those files that are generated for each sample) for these samples in the zip.

