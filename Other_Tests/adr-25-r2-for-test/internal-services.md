---
access: private
---

# Internal services

In addition to the external services specified in the JSON file specified by the --remote_session_config
option, websocketserver support the notation of internal, built-in services.  Two such services 
are currently defined: 'ensight' and 'envision'.  The --local_session command line option
specifies the number of each of these services websocketserver will make available.  For 
example: --local_session ensight 2 will make two instances of EnSight available.  The local
session is created by launching the associated application on the local computer and the
vnc server will be made available over the websocket protocol as per the external services
described previously.


