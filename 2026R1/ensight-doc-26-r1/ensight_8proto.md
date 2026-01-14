# File ensight.proto

<a id="ensight_8proto"></a>

![][C++]

## Source


```cpp
// *****************************************
// Copyright 2020-2022 ANSYS, Inc.
// All Rights Reserved.
//
//        Restricted Rights Legend
//
// Use, duplication, or disclosure of this
// software and its documentation by the
// Government is subject to restrictions as
// set forth in subdivision [(b)(3)(ii)] of
// the Rights in Technical Data and Computer
// Software clause at 52.227-7013.
// *****************************************

syntax = "proto3";

import "google/protobuf/empty.proto";

//@ingroup grpc
// gRPC service definition for the EnSight Application

package ensightservice;

//@defgroup EnSightService EnSightService
//@ingroup grpc
//@brief The core EnSight gRPC service
//
// The remote EnSight command and control functions provided by the EnSight core.
// They provide access to the EnSight Python interpreter, scene geometry (via glTF blobs),
// the generated image stream and the internal event queue. Custom, special purpose 
// interfaces exist for other applications.  Most of these calls require the complete
// attention of the EnSight core to perform their operations and thus will block until 
// the EnSight core becomes available.  Calls that do not block in this fashion are
// marked "(non-blocking)" in their description.
service EnSightService {
    //@addtogroup EnSightService

   // Run a Python command string in the EnSight Python interpreter
   // @return PythonReply the result of the string
   rpc RunPython (PythonRequest) returns (PythonReply) {}

   // Render an image of the current scene
   // @return RenderReply the rendered image
   rpc RenderImage (RenderRequest) returns (RenderReply) {}

   // Return current scene geometry representation
   // @return GeometryReply the current scene geometry in glTF format
   rpc GetGeometry (GeometryRequest) returns (GeometryReply) {}

   // Shutdown EnSight session - possibly deprecated
   // @return ExitReply an acknowledgment from the EnSight server
   rpc Exit (ExitRequest) returns (ExitReply) {}

   // Shutdown EnSight session
   // @return no return value
   rpc ExitCleanly (google.protobuf.Empty) returns (google.protobuf.Empty) {}

   // Enable a filtered stream of callback events from the EnSight session (non-blocking)
   //
   // EnSight supports a callback registration system that can associate a callback with
   // with any attribute change in the client.  This is the ensight.objs.addcallback()
   // Python call.  For example:
   // ~~~~~~~~~~~~~~~{.py}
   // ensight.objs.addcallback(ensight.objs.core, None, prefix+"PARTLIST_CHANGED", 
   //                          attrs=['PARTS'], flags=ensight.objs.EVENTMAP_FLAG_COMP_GLOBAL)
   // ~~~~~~~~~~~~~~~
   // will register a callback event associated with any changes in the ensight.objs.core.PARTS
   // attribute.  When this happens, EnSight will emit an event with the string 
   // "prefix+'PARTLIST_CHANGED'".  The gRPC interface enables a stream of these event strings
   // to be returned to the calling application in EventReply messages.  It also provides a 
   // simple prefix filter, so that only messages that start with the specific prefix will be 
   // returned on the event stream.  This prefix is passed in the EventStreamRequest message.
   // @return EventReply a stream of EventReply messages for each emitted event
   rpc GetEventStream (EventStreamRequest) returns (stream EventReply) {}

   // Subscribe to the EnSight event stream via reverse gRPC connection (non-blocking)
   //
   // Some gRPC clients have demonstrated problems maintaining a continuous EventReply 
   // stream.  For these clients, it is possible for the client to reverse the gRPC 
   // connection so EnSight will make gRPC calls back to the client.  In this case,
   // the client application will start an \ref EnSightSubscription service and inform
   // EnSight of how to connect to it via SubscribeEventOptions.  EnSight will then
   // make PublishEvent calls with the EventReply messages
   // it would have used in the GetEventStream() configuration.
   rpc SubscribeEvents (SubscribeEventOptions) returns (GenericResponse) {}

   // Subscribe to the EnSight image stream via reverse gRPC connection (non-blocking)
   //
   // Some gRPC clients have demonstrated problems maintaining a continuous ImageReply 
   // stream.  For these clients, it is possible for the client to reverse the gRPC 
   // connection so EnSight will make gRPC calls back to the client.  In this case,
   // the client application will start an \ref EnSightSubscription service and inform
   // EnSight of how to connect to it via SubscribeImageOptions.  EnSight will then
   // make PublishImage calls with a short lived (single image frame) ImageReply message
   // stream it would have used in the GetEventStream() configuration.  EnSight will
   // make a separate PublishImage call for every frame of imagery it generates.
   rpc SubscribeImages (SubscribeImageOptions) returns (GenericResponse) {}

   // Discontinue a previous established stream subscription (non-blocking)
   //
   // This call will cause EnSight to stop making gRPC calls to the client gRPC server
   // associated with the prefix string.  It can be used to stop a SubscribeEvents() or 
   // SubscribeImages() call.
   rpc Unsubscribe (Prefix) returns (GenericResponse) {}

   // Enable a stream of rendered images from the EnSight session (non-blocking)
   //
   // A stream of the images rendered by EnSight.
   // @return ImageReply a stream of ImageReply messages for each image rendered
   rpc GetImageStream (ImageStreamRequest) returns (stream ImageReply) {}

   // An interface to save an image or animation
   // @return AnimSaveReply
   rpc AnimSave (AnimSaveRequest) returns (AnimSaveReply) {}

   // An interface to query the progress an animation being saved
   // @return AnimQueryProgressReply describing progress toward completion
   rpc AnimQueryProgress (AnimQueryProgressRequest) returns (AnimQueryProgressReply) {}

}

//@defgroup EnSightSubscription EnSightSubscription
//@ingroup grpc
//@brief Client-side, reverse gRPC service
//
// Definition of the client-side, reverse gRPC service that EnSight 
// will connect to in response to a stream subscription request.
service EnSightSubscription {
    //@addtogroup EnSightSubscription

    // Publish a single image (possibly in chucks) to the remote server
    // @param ImageReply  The stream of ImageReply objects
    // @return GenericResponse
    rpc PublishImage(stream ImageReply) returns (GenericResponse) {}

    // Publish an event to the remote server
    // @return GenericResponse
    rpc PublishEvent(EventReply) returns (GenericResponse) {}

}


// The generic return value for an EnSightSubscription rpc call
message GenericResponse {
  string str = 1;  // Generic return string
}

// The prefix to be Unsubscribe
message Prefix {
  string prefix = 1;  // The subscription prefix passed in SubscribeEventOptions or SubscribeImageOptions
}


// The event subscription options 
message SubscribeEventOptions {
  // @brief Subscription channel type
  // Presently, only image subscriptions are supported
  enum ChannelType {
    GRPC = 0;  // EnSight should use gRPC PublishEvent() to send the events back to the client
  }
  string prefix = 1; // A unique prefix string (perhaps a GUID) used to identify this stream (used by Unsubscribe())
  ChannelType type = 2;  // The EventReply transport mechanism (GRPC)
  // @brief various type specific options
  //
  // For type=ChannelType::GRPC, 'uri' map key contains the URI for the server launched by the client (required).  'num_retries' map
  // key is the number of times EnSight should attempt to connect before failing the operation.  'shared_secret' map
  // key is the shared secret that the client gRPC server is expecting to see to authenticate a connection.
  map<string, string> options = 3;
}


// The image subscription  options
message SubscribeImageOptions {
  // @brief Image channel type
  // The image subscription can be via gRPC protocol or via shared memory transport
  enum ChannelType {
    GRPC = 0; // EnSight should use gRPC PublishImage() calls to send images back to the client
    SHARED_MEM = 1;  // EnSight should use a \ref SharedMemoryImageStream to send images back to the client
  }
  string prefix = 1; // A unique prefix string (perhaps a GUID) used to identify this stream (used by Unsubscribe())
  ChannelType type = 2;  // Select GRPC or SHARED_MEM transport
  bool flip_vertical = 3; // If true, flip the image over the X axis before sending the image
  bool chunk = 4; // Set to send images in 1MB chunks to speed up large (>1MB) image transfers (see ImageStreamRequest and ImageReply)
  // @brief various type specific options
  //
  // For type=GRPC, 'uri' map key contains the URI for the server launched by the client (required).  'num_retries' map
  // key is the number of times EnSight should attempt to connect before failing the operation.  'shared_secret' map
  // key is the shared secret that the client gRPC server is expecting to see to authenticate a connection.
  //
  // For type=SHARED_MEM, 'filename' map key contains the name of local file to be used
  // as the memory mapped shared memory block (required).
  map<string, string> options = 5; 
}

// A string to execute in the EnSight Python interpreter and execution options
message PythonRequest {
   // @brief Specify the execution type and return value for the Python command
   enum CmdType {
      EXEC_NO_RESULT = 0;  // Run the command with exec() with no return value
      EXEC_RETURN_PYTHON = 1;  // Run the string using eval() and return the resulting Python object via Python repr()
      EXEC_RETURN_JSON = 2;  // Run the string using eval() and return the resulting Python object encoded via json
   }
   CmdType type = 1; // Specify how the string should be executed and what the return value should be
   string command = 2;  // UTF8 encoded string to be exec() or eval() by the EnSight Python interpreter
}

// The result of executing a Python string in EnSight
message PythonReply {
   string value = 1;  // UTF8 encoded string, the repr() or json representation of the evaluated expression depending on the PythonRequest::CmdType specified
   int32 error = 2; // If error < 0 an error occurred
}

// Control options for a single image render request
message RenderRequest {
   // @brief Specify the return type of the rendering request
   enum RenderType {
      IMAGE_PNG = 0; // The returned image will be encoded into the PNG image file format and returned as an array of bytes.
      IMAGE_RAW = 1; // The returned value be in raw binary bytes: RGBRGBRGB... width*height*3 bytes total
   }
   RenderType type = 1; // Select the format the returned image should be in.
   int32 image_width = 2; // The desired image width in pixels
   int32 image_height = 3;  // The desired image height in pixels
   int32 image_aa_passes = 4;  // The number of anti-aliasing passes to be applied
   bool include_highlighting = 5;  // If true, any dynamic overlay will be included in the rendered image
}

// The returned, rendered image
message RenderReply {
   bytes value = 1;  // An array of byte representing the image.  See RenderRequest::RenderType for the specific format.
}


// Request that an image or animation be saved.  
// If saving an animation, and format is an image format like png, save multiple images 
// and insert an index like "_0003" into the file name before the extension.
// If saving one frame in an animation format, a one-frame movie will be written.
// Valid anim formats: .mp4, .avi, .mov
// Valid image formats: .png, .tif/.tiff, .jpg/.jpeg, .ppm
// 
// Format  Option name    Value                             Notes
// mp4:    Quality        Best|High|Medium|Low              default: High
//         Type           0|1                               default: 1       1 for H.264, 0 for non-H.264
// avi:    Compression    MJPEG|RAW|MPEG4V2                 default: MPEG4V2
//         BitRate        (a value between 0 and 80000)     default: 20000   kbits/sec   
// mov:    BitRate        (a value between 0 and 80000)     default: 20000   kbits/sec  
// png:    Compression    None|Fast|Best|Default            default: Default  (zlib compression setting)
// tif:    Compression    None|PackBits|Deflate             default: PackBits
// jpg:    Quality        (a value between 0 and 100)       default: 75
// ppm:    Format         Binary|Ascii                      default: Binary
message AnimSaveRequest {
   string id = 1;                          // Handle used to query progress or cancel a save.  Any unique string, provided by the caller.
   string filename = 2;                    // Name of file to save.  Format determined from file extension.  Defaults to .mp4 or .png with no file extension.  UTF8 encoding.  Existing files are overwritten.
   map<string, string> format_options = 3; // Options specific to certain formats, as (option_name, value) pairs
   uint32 width = 4;                       // Image width.  0 means current window width.
   uint32 height = 5;                      // Image height.  0 means current window height.
   uint32 aa_passes = 6;                   // Num anti-aliasing passes.  0 uses EnSight default 4-pass antialiasing.
   bool   white_background = 7;            // If True, set background to white, and change text and misc colors to black as necessary.  Restore all, after save.  If False, leave all colors as they are.
   int32  start_frame = 8;                 // First frame to save.  0-based.  -1 special value that means the current timestep
   int32  num_frames = 9;                  // Num frames to save.  -1 special value that means all timesteps.  num_frames > num timesteps  allows multiple cycles through time.
   float  fps = 10;                        // Frames/sec.  Ignored if saving an image.
}
// Reply to request to save an image or animation
message AnimSaveReply {
}

// Query the progress of an animation being saved.  This can be called while AnimSaveRequest is in progress
message AnimQueryProgressRequest {
   string id = 1;                     // Handle for the save operation, same as in the request
   bool   cancel = 2;                 // If True, request cancellation of the save.  
}
// Reply to query of animation progress
message AnimQueryProgressReply {
   // @brief The current status of the animation rendering operation
   enum Status {
        IN_PROGRESS = 0;        // Saving
        COMPLETE = 1;           // Successfully completed.  
        CANCEL_REQUESTED = 2;   // Cancellation requested, but not yet cancelled
        CANCELLED = 3;          // Cancellation completed
        WRITE_ERROR = 4;        // Animation could not be saved - file not writable, output size too big, ...
   }
   string    id = 1;                  // Handle for the save operation, same as in the request
   uint32    num_frames_finished = 2; // Is 0 at first, will be equal to num_frames when finished.
   uint32    num_frames = 3;          // Same as num_frames in request, unless num_frames in request == -1.
   Status    status = 4;              // If 'cancel' is True in the request, but the anim had already completed or errored out, returned status is COMPLETE or ERROR
   string    error_msg = 5;           // If the status==WRITE_ERROR, the error message
}


// Control options for a geometry pull request
message GeometryRequest {
   // @brief select the format of the geometry reqquest
   enum GeometryType {
      GEOMETRY_GLB = 0;  // The returned geometry is returned as an in-memory glTF encoded file
   }
   GeometryType type = 1;  // The format the geometry data should be returned in.
}

// The returned geometry request payload
message GeometryReply {
   bytes value = 1;  // a binary array containing the geometry in the format specified by GeometryRequest::GeometryType
}

// Request that the EnSight server shut down
message ExitRequest {
}

// The value returned by an ExitRequest rpc call
// Note: it is not uncommon for the ExitRequest call to return a gRPC error due to shutdown race conditions.
message ExitReply {
}

// @brief Request the start of an image stream
//
// This message dictates the form of the ImageReply messages.  One can have the images flipped vertically
// and can optionally chunk an entire image frame into multiple ImageReply messages.  Empirical measurements
// demonstrate that gRPC can transfer smaller blocks of pixels faster that larger blocks. If the chunk option
// is enabled, the ImageReply messages will contain 1MB of pixel data maximum.  The client must
// concatenate the pixel data from consecutive ImageReply messages until it receives a message
// with the final flag set.  At that point, all of the pixel data for a complete image frame has
// been received.
message ImageStreamRequest {
   bool flip_vertical = 1;  // If true, flip the image over the X axis before sending the image
   bool chunk = 2; // Set to send images in 1MB chunks to speed up large (>1MB) image transfers
}

// @brief An image frame message
//
// These messages can contain the pixel data for an entire image or some portion of the image. An
// image frame can be broken up into multiple ImageReply messages.  If the client receives an 
// ImageReply message with the final flag set to false, it must continue reading messages,
// concatenating the pixels data until it receives an ImageReply with the final flag set to
// true.
message ImageReply {
   int32 width = 1;  // The width of the image in pixels
   int32 height = 2; // The height of the image in pixels
   // @brief the pixel compression, if any
   enum CompressionType {
      NONE = 0;  // The data are in raw-binary uncompressed format
   }
   CompressionType compression = 3; // The compression scheme used for the pixel data payload
   bytes pixels = 4;  // The pixel data in RGBRGBRGB... form, width*height*3 bytes
   bool final = 5;  // If the ImageStreamRequest chunk is true, this is the final message in an image frame
}

// Specify the prefix that should be used to set the filter prefix
message EventStreamRequest {
   string prefix = 1;   // Specify that only the events that begin with this prefix should be included in the event stream
}

// A filtered event
message EventReply {
   string tag = 1;  // The string associated with the EnSight event callback.  It will begin with the prefix passed in the EventStreamRequest message
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)