# File ensight\_grpc.py

<a id="ensight__grpc_8py"></a>

![][Python]

## Classes

* [ensight\_grpc::EnSightGRPC](classensight__grpc_1_1_en_sight_g_r_p_c.md#classensight__grpc_1_1_en_sight_g_r_p_c)
* [ensight\_grpc::EnSightSubServicer](classensight__grpc_1_1_en_sight_sub_servicer.md#classensight__grpc_1_1_en_sight_sub_servicer)

## Namespaces

* [ensight\_grpc](namespaceensight__grpc.md#namespaceensight__grpc)

## Source


```python
import grpc
import os, os.path
import platform
import random
import subprocess
import sys
import threading
import uuid
from concurrent import futures

# these modules are the result of running protoc on the .proto file
import ensight_pb2
import ensight_pb2_grpc
import dynamic_scene_graph_pb2
import dynamic_scene_graph_pb2_grpc

# Shared memory interface
import ensight_grpc_shmem





class EnSightGRPC(object):
    
    def __init__(self, port=12345, host='127.0.0.1', version='',
        grpc_use_tcp_sockets: bool = False, grpc_allow_network_connections: bool = False,
        grpc_disable_tls: bool = False, grpc_uds_pathname: str = None):
        self._host = host
        self._port = port
        self._pid = None
        self._channel = None
        self._stub = None
        self._dsg_stub = None
        self._version = version
        self._security_token = str(random.randint(0, 1000000))
        self._grpc_use_tcp_sockets = grpc_use_tcp_sockets
        self._grpc_allow_network_connections = grpc_allow_network_connections
        self._grpc_disable_tls = grpc_disable_tls
        self._grpc_uds_pathname = grpc_uds_pathname
        # Streaming APIs
        # Images
        self._image_stream = None
        self._image_thread = None
        self._image = None
        self._image_number = 0
        self._shmem_client = None
        self._shmem_filename = None
        # Event (strings)
        self._event_stream = None
        self._event_thread = None
        self._events = list()
        self._prefix = None
        self._sub_service = None
        self._event_callback = None


    
    def host(self):
        return self._host

    
    def port(self):
        return self._port

    
    def set_security_token(self, n):
        self._security_token = n

    
    def security_token(self):
        return self._security_token

    @property
    def grpc_use_tcp_sockets(self) -> bool:
        """Get whether to use Unix Domain Sockets or TCP Sockets for gRPC"""
        return self._grpc_use_tcp_sockets

    @grpc_use_tcp_sockets.setter
    def grpc_use_tcp_sockets(self, use_sockets: bool) -> None:
        """Set whether to use Unix Domain Sockets or TCP Sockets for gRPC"""
        self._grpc_use_tcp_sockets = use_sockets

    @property
    def grpc_allow_network_connections(self) -> bool:
        """Get whether to allow listening on all networks if using TCP Sockets for gRPC"""
        return self._grpc_use_tcp_sockets

    @grpc_allow_network_connections.setter
    def grpc_allow_network_connections(self, allow: bool) -> None:
        """Set whether to allow listening on all networks if using TCP Sockets for gRPC"""
        self._grpc_allow_network_connections = allow

    @property
    def grpc_disable_tls(self) -> bool:
        """Get whether to use TLS for TCP Sockets for gRPC"""
        return self._grpc_disable_tls

    @grpc_disable_tls.setter
    def grpc_disable_tls(self, disable_tls: bool) -> None:
        """Set whether to use TLS for TCP Sockets for gRPC"""
        self._grpc_disable_tls = disable_tls

    @property
    def grpc_uds_pathname(self) -> str:
        """Get the pathname for the UDS file if not using the default for gRPC"""
        return self._grpc_uds_pathname

    @grpc_uds_pathname.setter
    def grpc_uds_pathname(self, uds_pathname: str) -> None:
        """Set the pathname for the UDS file if not using the default for gRPC"""
        self._grpc_uds_pathname = uds_pathname


    
    def shutdown(self):
        # remove any subscription services we may have started
        self.unsubscribe()
        # if we launched EnSight, shut it down.
        if self._pid is not None:
            _ = self.stop_server()
        # shutdown any shared memory client
        if self._shmem_client is not None:
            ensight_grpc_shmem.stream_destroy(self._shmem_client)
            self._shmem_client = None
        # destroy any shared memory file we generated
        if self._shmem_filename is not None:
            try:
                os.remove(self._shmem_filename)
            except Exception as e:
                print("Unable to delete shared memory file: {}".format(str(e)))
            self._shmem_filename = None

    
    def start_server(self):
        if self._pid is not None:
            return self._pid

        my_env = os.environ.copy()
        exe = f'ensight{self._version}'
        cmd = [exe, '-batch', '-grpc_server', str(self._port)]
        if self._security_token:
            cmd.append("-security")
            cmd.append(self._security_token)
        if self._grpc_use_tcp_sockets:
            cmd.append("-grpc_use_tcp_sockets")
        if self._grpc_allow_network_connections:
            cmd.append("-grpc_allow_network_connections")
        if self._grpc_disable_tls:
            cmd.append("-grpc_disable_tls")
        if self._grpc_uds_pathname and (self._grpc_uds_pathname != ""):
            cmd.append("-grpc_uds_pathname")
            cmd.append(self._grpc_uds_pathname)
        if platform.system() == 'Windows':
            DETACHED_PROCESS = 0x00000008
            cmd[0] += ".bat"
            cmd.append('-minimize_console')
            self._pid = subprocess.Popen(cmd, creationflags=DETACHED_PROCESS,
                                         close_fds=True, env=my_env).pid
        else:
            self._pid = subprocess.Popen(cmd, close_fds=True, env=my_env).pid
        return self._pid

    
    def stop_server(self):
        response = None
        # if we are connected and we started the server, we will emit the 'exit' message
        if (self._pid is not None) and self.is_connected():
            response = self._stub.Exit(ensight_pb2.ExitRequest(), metadata=self.metadata())
        self._stub = None
        self._dsg_stub = None
        self._channel.close()
        self._channel = None
        self._pid = None
        return response

    
    def is_connected(self):
        return self._channel is not None

    
    def connect(self, timeout=15.0, options=None):
        if self._channel is not None:
            return

        def_options = [
                ("grpc.max_receive_message_length", -1),
                ("grpc.max_send_message_length", -1),
                ("grpc.testing.fixed_reconnect_backoff_ms", 1100),
            ]
        if options:
            def_options.extend(options)


        address = "undefined"
        if self._grpc_use_tcp_sockets:
            # Using TCP Sockets
            address = f"{self._host}:{self._port}"
        else:
            if sys.platform == "win32":
                # Using WNUA
                address = f"127.0.0.1:{self._port}"
            else:
                # Using Unix Domain Sockets
                if self._grpc_uds_pathname != None and self._grpc_uds_pathname != "":
                    address = "unix:"+self._grpc_uds_pathname+".sock"
                else:
                    address = "unix:/tmp/greeter.sock"

        if (self._grpc_use_tcp_sockets and self._grpc_disable_tls) or (not self._grpc_use_tcp_sockets):
            self._channel = grpc.insecure_channel(address, options=def_options)
        else:
            root_certificates = None
            private_key = None
            certificate_chain = None
      
            # TLS setup using environment variables
            client_cert = ""
            client_key = ""
            ca_cert = ""

            ansys_cert_folder = os.environ.get("ANSYS_GRPC_CERTIFICATES", None)
            if ansys_cert_folder != None:
                client_cert = os.path.join(ansys_cert_folder, "client.crt")
                client_key = os.path.join(ansys_cert_folder, "client.key")
                ca_cert = os.path.join(ansys_cert_folder, "ca.crt")
            else:
                client_cert = os.environ.get("GRPC_CLIENT_CERT", "certs/client.crt")
                client_key = os.environ.get("GRPC_CLIENT_KEY", "certs/client.key")
                ca_cert = os.environ.get("GRPC_CA_CERT", "certs/ca.crt")

            if not (client_cert and client_key and ca_cert):
                raise RuntimeError("Either ANSYS_GRPC_CERTIFICATES or (GRPC_CLIENT_CERT, GRPC_CLIENT_KEY, and GRPC_CA_CERT) environment variables must be set for TLS.")

            with open(client_cert, 'rb') as f:
                certificate_chain = f.read()
            with open(client_key, 'rb') as f:
                private_key = f.read()
            with open(ca_cert, 'rb') as f:
                root_certificates = f.read()

            creds = grpc.ssl_channel_credentials(root_certificates=root_certificates,
                private_key=private_key, certificate_chain=certificate_chain)
            self._channel = grpc.secure_channel(address, creds, options=def_options)

        try:
            grpc.channel_ready_future(self._channel).result(timeout=timeout)
        except grpc.FutureTimeoutError:
            self._channel = None
            return
        self._stub = ensight_pb2_grpc.EnSightServiceStub(self._channel)
        self._dsg_stub = dynamic_scene_graph_pb2_grpc.DynamicSceneGraphServiceStub(self._channel)
    


    
    def metadata(self):
        ret = list()
        if self._security_token is not None:
            s = self._security_token
            if type(s) == str:
                 s = s.encode("utf-8")
            ret.append( (b'shared_secret', s) )
        return ret

    
    def render(self, width=640, height=480, aa=1, raw=False, highlighting=False):
        self.connect()
        ret_type = ensight_pb2.RenderRequest.IMAGE_PNG
        if raw:
            ret_type = ensight_pb2.RenderRequest.IMAGE_RAW
        try:
            response = self._stub.RenderImage(
                ensight_pb2.RenderRequest(type=ret_type, image_width=width,
                                          image_height=height, image_aa_passes=aa,
                                          include_highlighting=highlighting),
                metadata=self.metadata())
        except:
            raise IOError("gRPC connection dropped")
        return response.value

    
    def geometry(self):
        self.connect()
        try:
            response = self._stub.GetGeometry(
                ensight_pb2.GeometryRequest(type=ensight_pb2.GeometryRequest.GEOMETRY_GLB),
                metadata=self.metadata())
        except:
            raise IOError("gRPC connection dropped")
        return response.value

    
    def command(self, command_string, do_eval=True, json=False, raw_eval=False):
        self.connect()
        flags = ensight_pb2.PythonRequest.EXEC_RETURN_PYTHON
        if json:
            flags = ensight_pb2.PythonRequest.EXEC_RETURN_JSON
        if not do_eval:
            flags = ensight_pb2.PythonRequest.EXEC_NO_RESULT
        try:
            response = self._stub.RunPython(ensight_pb2.PythonRequest(type=flags,
                                                                      command=command_string),
                                            metadata=self.metadata())
        except:
            raise IOError("gRPC connection dropped")
        if response.error < 0:
            raise RuntimeError("Remote execution error")
        if flags == ensight_pb2.PythonRequest.EXEC_NO_RESULT:
            return None
        elif flags == ensight_pb2.PythonRequest.EXEC_RETURN_PYTHON:
            if not raw_eval:
                return eval(response.value)
        return response.value

    
    def image_stream_enable(self, flip_vertical=False):
        if self._image_stream is not None:
            return
        self.connect()
        self._image_stream = self._stub.GetImageStream(
            ensight_pb2.ImageStreamRequest(flip_vertical=flip_vertical, chunk=True),
            metadata=self.metadata())
        self._image_thread = threading.Thread(target=self.poll_images)
        self._image_thread.daemon = True
        self._image_thread.start()

    
    def get_image(self):
        return self._image, self._image_number

    
    def put_image(self, the_image):
        self._image = the_image
        self._image_number += 1

    
    def poll_images(self):
        try:
            while self._stub is not None:
                if self._shmem_client is not None:
                    img = ensight_grpc_shmem.stream_lock(self._shmem_client)
                    if type(img) is dict:
                        the_image = dict(pixels=img['pixeldata'],
                                         width=img['width'],
                                         height=img['height'])
                        self.put_image(the_image)
                        ensight_grpc_shmem.stream_unlock(self._shmem_client)

                if self._image_stream is not None:
                    img = self._image_stream.next()
                    buffer = img.pixels

                    while not img.final:
                        img = self._image_stream.next()
                        buffer += img.pixels

                    the_image = dict(pixels=buffer, width=img.width, height=img.height)
                    self.put_image(the_image)
        except:
            # signal that the gRPC connection has broken
            self._image_stream = None
            self._image_thread = None
            self._image = None

    
    def image_stream_is_enabled(self):
        return self._image_stream is not None

    
    def prefix(self):
        # prefix URIs will have the format:  "grpc://{uuid}/{callbackname}?enum={}&uid={}"
        if self._prefix is None:
            self._prefix = "grpc://" + str(uuid.uuid1()) + "/"
        return self._prefix

    
    def event_stream_enable(self, callback = None, prefix = None):
        if self._event_stream is not None:
            return
        self._event_callback = callback
        self.connect()
        pfx = prefix
        if pfx is None:
            pfx = self.prefix()
        self._event_stream = self._stub.GetEventStream(
            ensight_pb2.EventStreamRequest(prefix=pfx), metadata=self.metadata())
        self._event_thread = threading.Thread(target=self.poll_events)
        self._event_thread.daemon = True
        self._event_thread.start()

    
    def dynamic_scene_graph_stream(self, client_cmds):
        self.connect()
        return self._dsg_stub.GetSceneStream(client_cmds, metadata=self.metadata())

    
    def event_stream_is_enabled(self):
        return self._event_stream is not None

    
    def get_event(self):
        try:
            return self._events.pop(0)
        except IndexError:
            return None

    
    def put_event(self, evt):
        if self._event_callback:
            self._event_callback(evt.tag)
            return
        self._events.append(evt)

    
    def poll_events(self):
        try:
            while self._stub is not None:
                evt = self._event_stream.next()
                self.put_event(evt)
        except:
            # signal that the gRPC connection has broken
            self._event_stream = None
            self._event_thread = None

    
    def start_sub_service(self):
        try:
            if self._sub_service is not None:
                return
            self._sub_service = EnSightSubServicer(parent=self)
            self._sub_service.start()
        except:
            self._sub_service = None

    
    def subscribe_events(self):
        self.start_sub_service()
        self.connect()
        conn_type = ensight_pb2.SubscribeEventOptions.GRPC
        options = dict(uri=self._sub_service._uri)
        event_options = ensight_pb2.SubscribeEventOptions(prefix=self.prefix(), type=conn_type,
                                                          options=options)
        _ = self._stub.SubscribeEvents(event_options, metadata=self.metadata())

    
    def subscribe_images(self, flip_vertical=False, use_shmem=True):
        self.connect()
        if use_shmem:
            try:
                # we need a shared memory file
                self._shmem_filename = self.find_filename()
                if self._shmem_filename is not None:
                    conn_type = ensight_pb2.SubscribeImageOptions.SHARED_MEM
                    options = dict(filename=self._shmem_filename)
                    image_options = ensight_pb2.SubscribeImageOptions(prefix=self.prefix(),
                                                                      type=conn_type,
                                                                      options=options,
                                                                      flip_vertical=flip_vertical,
                                                                      chunk=False)
                    test = self._stub.SubscribeImages(image_options, metadata=self.metadata())
                    # start the local server
                    self._shmem_client = ensight_grpc_shmem.stream_create(self._shmem_filename)
                    # turn on the polling thread
                    self._image_thread = threading.Thread(target=self.poll_images)
                    self._image_thread.daemon = True
                    self._image_thread.start()
                    return
            except Exception as e:
                print("Unable to subscribe to an image stream via shared memory: {}".format(str(e)))

        self.start_sub_service()
        conn_type = ensight_pb2.SubscribeImageOptions.GRPC
        options = dict(uri=self._sub_service._uri)
        image_options = ensight_pb2.SubscribeImageOptions(prefix=self.prefix(),
                                                          type=conn_type,
                                                          options=options,
                                                          flip_vertical=flip_vertical,
                                                          chunk=True)
        _ = self._stub.SubscribeImages(image_options, metadata=self.metadata())

    
    def unsubscribe(self):
        if self.is_connected():
            if self._sub_service is not None:
                prefix = ensight_pb2.Prefix(prefix=self.prefix())
                self._stub.Unsubscribe(prefix, metadata=self.metadata())
                self._sub_service = None

    
    @classmethod
    def find_filename(cls, size=1024*1024*25):
        for i in range(100):
            filename = os.path.join(os.getcwd(), "shmem_{}.bin".format(os.getpid()+i))
            if not os.path.exists(filename):
                try:
                    tmp = open(filename, "wb")
                    tmp.write(b'\0'*size)  # 25MB
                    tmp.close()
                    return filename
                except:
                    pass
        return None



class EnSightSubServicer(ensight_pb2_grpc.EnSightSubscriptionServicer):

    def __init__(self, parent=None):
        self._server = None
        self._uri = ""
        self._parent = parent

    def PublishEvent(self, request, context):
        if self._parent is not None:
            self._parent.put_event(request)
        return ensight_pb2.GenericResponse(str='Event Published')

    def PublishImage(self, request_iterator, context):
        img = request_iterator.next()
        buffer = img.pixels
        while not img.final:
            img = request_iterator.next()
            buffer += img.pixels
        the_image = dict(pixels=buffer, width=img.width, height=img.height)
        if self._parent is not None:
            self._parent.put_image(the_image)
        return ensight_pb2.GenericResponse(str='Image Published')

    def start(self):
        self._server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
        ensight_pb2_grpc.add_EnSightSubscriptionServicer_to_server(
            self, self._server)
        # Start the server on localhost with a random port
        port = self._server.add_insecure_port('localhost:0')
        self._uri = 'localhost:' + str(port)
        self._server.start()


```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)