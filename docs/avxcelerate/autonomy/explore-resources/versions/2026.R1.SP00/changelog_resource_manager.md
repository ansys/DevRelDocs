## Version 0.1.0: Initial release

v0.1.0 of the AVxcelerate Resource Manager REST API has been officially released as part of the 2025 R2 release.

The AVxcelerate Resource Manager REST API v0.1.0 is compatible with the AVX Architecture V2.

## Version 0.1.0: September 2025R2.2 release

New Features:

* "maximum_allowed_worker_instances" parameter:
It allows you to configure the maximum number of parallel running workers per queue. 

* Plugins:
You can register a plugin with definition of container runtime. For example: Docker Engine / Kubernetes.

* Jobs:
You can submit a resource-manager job by providing application details (name, version, image, environment variables, etc.) and track it to its completion.
You can also check the status of the job and clean the resources the job has acquired.

## Version 0.1.0: March 2026R1 release

New Features:

* Create and configure a queue. This feature can be used to create new queues, update existing queues and get details of existing queues.


* Configure maximum number of parallel running workers per queue.


* Python helper: The AVxcelerate python APIs are hosted as a python package on a cluster as part of the Explore service deployment. You can install the package using pip and it can be used to call AVx autonomy APIs without needing to make raw REST calls.