## Version 0.1.0: Initial release

v0.1.0 of the AVxcelerate Explore REST API has been officially released as part of the 2025 R2 release. 

The AVxcelerate Explore REST API v0.1.0 is compatible with the AVX Architecture V2.

### Features

* Jobs: 
You can perform the following operations related to jobs:
  * Create a new job as per provided parameters
  * Get a single or multiple jobs by their IDs
  * Kill a running job
  * Restart a completed or killed job
  * Clone a job
  
 * Post Job Sessions:

   * This REST API allows you to create a post job session for a job and returns the relative URL to access the session.
   * The session can then be used to perform various post-processing operations such as: viewing results, analyzing data etc.


* Python helper:    
The AVx python APIs are hosted as a python package on a cluster as part of the Explore service deployment. The developers can install the package using pip and use it to call AVx autonomy APIs without the need to make raw REST calls.

