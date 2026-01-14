# File dvs\_features.md

<a id="dvs__features_8md"></a>

![][Markdown]

## Source


```markdown
@defgroup group_dvs_features DVS Features
@ingroup dvs_main
@brief Description of various features of the DVS API
@ingroup group_dvs_features

***
## Delete Item API Overview

Sometimes solvers need to rewind to a previous timestep and begin writing new data for various reasons. The delete api facilitates this allowing users to make a call to delete specific timesteps or a collection of timesteps. This call is similar to the dvs_begin_update() and dvs_end_update() calls where all ranks must make the same call for each rank in parallel. The API calls for this are dvs_delete_item() (C API), DVS::IClient::delete_item() (C API), and delete_item() (Python API).

**Note:** Currently for the delete item api call to work the number of servers needs to match how the data was originally written. So if it was written using 3 servers everything should still be running with 3 servers when calling the delete item api. If the number of servers varies you will see inconsistent results on timesteps being fully deleted out of all caches.

Example Usage:
\code{.cpp}

#include <string>
#include <chrono>
#include <thread>

#include "dvs_client_interface.h"
#include "dvs_server_interface.h"
#include "dynamic_visualization_store_enums.h"

static void logging_function(void* user_data, const char* message)
{
    fprintf(stderr, message);
}

int main(int argc, char** argv)
{
  std::string server_uri = "grpc://localhost:12345/";
  DVS::IServer* server = DVS::CREATE_SERVER_INSTANCE(server_uri.c_str());
  // The server will listen by default to 127.0.0.1 only.
  // On linux, the server will by default use unix domain sockets and not TCP sockets,
  // so the above server_uri input will be not valid unless TCP sockets are explicitly
  // enabled. Also, SSL certificates won't be required.
  // The port is still a required input, since it is being used to generate the socket path.
  // The default unix domain socket path used will be "unix:/tmp/greeter{PORT}.sock". 
  // If the user wants the modify the default path /tmp/greeter, they can use the option
  // SERVER_USE_DOMAIN_SOCKET_PATH.
  // On Windows, if TCP sockets are not explicitly set, the connection will only
  // happen on localhost, but internally TCP sockets will still be used.
  // In this default scenario, certificates won't be used.
  // If the use of TCP sockets is explicitly enabled via the option SERVER_USE_TCP_SOCKETS=1
  // DVS will attempt to use SSL ceritificates. To disable the use of SSL certificates,
  // the option SERVER_DISABLE_TLS=1 needs to set. The SSL certificates are the user's 
  // responsibility.
  // If the user needs to allow connection from a different machine, or to let the server
  // listen to connections from all the network, the option SERVER_LISTEN_ALL_NETWORKS=1
  // can be used. This can be enabled only if TCP sockets are explicitly set. In this case
  // DVS will listen to 0.0.0.0 for connections, unless the user explicitly sets an hostname
  // via the option SERVER_HOST.
  // If TCP sockets and all networks are enabled,
  // the use of secret keys is enforced. The user can set a secret key via the 
  // SERVER_SECURITY_SECRET parameter.
  if (!server) {
    //Error creating server
    return -1;
  }
  std::string cache_uri = "hdf5://localhost/D:/my/cache/location";
  //Set a cache uri location if saving/caching data
  server->set_option("CACHE_URI", cache_uri.c_str());
  uint32_t server_number = 0; //Zero based server number
  uint32_t local_ranks = 1; //Number of local ranks for this specific server
  server->startup(server_number, local_ranks);

  //Turn on blocking for server and client side deduplication
  dvs_client_flags client_flags = dvs_client_flags::BLOCK_FOR_SERVER | dvs_client_flags::DEDUP;
  std::string shared_secret = ""; // Can use a shared secret to authenticate clients with server
  DVS::IClient* client = DVS::CREATE_CLIENT_INSTANCE(server, client_flags, shared_secret.c_str());
  if (!client) {
    //Error creating client
    return -2;
  }
  client->set_option("DVS_CLIENT_TIMEOUT_S", "30"); //Set the option for timing out the client after 30 seconds if the client doesn't connect to the server
  dvs_log_flags log_flags = dvs_log_flags::LOG_ALL; //Turn on all logging for debugging
  client->set_logger(new DVS::Logger(nullptr, log_flags, logging_function));

  std::string dataset_name = "my_dataset";
  uint32_t my_rank = 0; //Zero based rank number;
  uint32_t num_global_ranks = 1; //Number of global ranks across all servers
  uint32_t num_chunks = 1; //Number of chunks this rank is using, 1 if not using chunking

  //Initialize dataset
  client->begin_init(dataset_name.c_str(), my_rank, num_global_ranks, num_chunks);
  client->set_unit_system("SI");
  {
    //Add a part
    dvs_part_info part_info;
    part_info._id = 1;
    part_info._name = "Part 1";
    part_info._structured = 0;
    part_info._chunking = 0;
    part_info._metadata_num_pairs = 0;
    part_info._metadata_keys = nullptr;
    part_info._metadata_vals = nullptr;
    client->add_part_info(&part_info, 1);
  }
  {
    //Add a var
    dvs_var_info var_info;
    var_info._id = 1;
    var_info._name = "Var 1";
    var_info._type = dvs_var_type::SCALAR;
    var_info._location = dvs_var_location::NODE;
    var_info._unit = "";
    var_info._unit_label = "";
    var_info._metadata_num_pairs = 0;
    var_info._metadata_keys = nullptr;
    var_info._metadata_vals = nullptr;
    client->add_var_info(&var_info, 1);
  }
  client->end_init();

  //Delete all timesteps after 5.5 seconds
  //See the DVS Cache URI section on Query Stanza's for more information on filtering.
  //The delete item API only supports timestep.time objects currently.
  client->delete_item(my_rank, "/timestep.time/gte/5.5");
  DVS::DESTROY_CLIENT_INSTANCE(client);
  uint32_t num_pending = 1;
  uint32_t num_complete = 0;
  //Wait until the server finished before shutting it down or the write operations may not complete
  while (num_pending > 0) {
    dvs_ret error = server->get_timestep_count(num_pending, num_complete);
    if (error != DVS_NONE) {
      break;
    }
    std::this_thread::sleep_for(std::chrono::milliseconds(50));
  }
  DVS::DESTROY_SERVER_INSTANCE(server);
}

\endcode
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C]: https://img.shields.io/badge/language-C-blue (C)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)