
## Features 

This API allows to perform CRUD (Create, Read, Update, and Delete) operations on resources such as queues, deployments, applications, app-runtime-configs.

### Queues:
User can create queues with the required storages, resource limits and environment variables
Allowing to manage queues helps user to configure different applications within resource limits and group the applications requiring same storages together.

### Plugins:
User can register a plugin with definition of container runtime.
Example, Docker Engine / Kubernetes

### Jobs:
User can submit a resource-manager job by providing application details (name, version, image, environment variables, etc.) & track it to its completion.
User can also check the status of the job and clean the resources job has acquired.

## Introduction

The AVxcelerate python APIs are hosted as a python package on a cluster as part of the Explore service deployment. The developers can install the package using pip and use it to call AVx autonomy APIs without needing to make raw REST calls.

PyPi Regsitry URL:

The python package is hosted as PyPi compliant registry on each deployed cluster. The registry URL is like this:

https://BASE_URL/pypi

For example, for AFT deployment:

<https://explore.azure-aft.apps.frisbeedev.com/pypi>

## Usage Example

Pre-requisites:

We assume that on the system is running with the **Ubuntu 22.04** version, and that the following tools are already installed:

- python 3.10
- pip 25.1
- uv 0.6

And we assume that you are using AVx Autonomy Toolchain version **25R2.1**

Step 1: Create virtual environment

```bash
$ python -m venv .venv 
``` 

Step 2: Activate the virtual environment

```bash
$ source .venv/bin/activate  
```

Step 3: Install python packages:

- ansys-api-avxcelerate-autonomy
- ansys-avxcelerate-autonomy

```bash
$ pip install ansys-api-avxcelerate-autonomy ansys-avxcelerate-autonomy --extra-index-url [https://explore-service.traefik.me:9081/pypi](https://explore-service.traefik.me:9081/v1/pypi)
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

base_url = "<https://explore.aws-stage.apps.frisbeedev.com>"

configuration = Configuration(host=f"{base_url}/api/explore/v1")

async with ApiClient(configuration) as api_client:

session = AuthClientSession(base_url=f"{base_url}/api/explore/v1/")

provider = TokenProvider(f"{base_url}/auth")

session.set_provider(provider)

provider.login()

api_client.rest_client.pool_manager = session

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

