# File dynamic\_scene\_graph.proto

<a id="dynamic__scene__graph_8proto"></a>

![][C]

## Source


```cpp
// *****************************************
// Copyright 2022-2024 ANSYS, Inc.
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

//@ingroup grpc
// Dynamic scene graph gRPC service definition

package ensightservice;

//@defgroup DSG DynamicSceneGraphService
//@ingroup grpc
//@brief The dynamic scene graph gRPC service
//
// The dynamic scene graph gRPC service provides a mechanism by which a client
// application can attach to a running EnSight session and read the current scene
// geometry.  The API allows the client application to track the client scene
// graph state.  It supports both complete and incremental updates.   For incremental
// updates, the EnSight client tracks the remote scene graph state specific to each
// active scene stream.
//
// The EnSight distribution includes a simple example client written in Python.  The
// renderer in the example client is not complete (e.g. it does not support all of 
// the texturing modes or two sided lighting), but it does demonstrate how a client
// should interpret the various messages that constitute a scene update operation.
// This example is located in the same directory (ensightXXX/site_preferences/extensions/grpc) 
// as this .proto file and is named dynamic_scene_graph_example_client.py.  To
// run the example client (Windows example, ANSYS 2021 R1 distribution), first start 
// EnSight with the following command line:
// \code{.unparsed}
// ensight.bat -grpc_server 12345
// \endcode
// Then in another shell window run the Python script using the EnSight Python
// interpreter:
// \code{.unparsed}
// cpython.bat dynamic_scene_graph_example_client.py
// \endcode
// Load some data into the EnSight session and then select "Update" from the
// example client GUI menus to initiate a scene refresh.  By default, the example
// client will send a SceneClientCommand (SceneClientCommand::ClientCommandType::INIT)
// message and EnSight will respond with a sequence of update messages.  If the File->Allow push updates
// option is enabled in the sample client, it will allow EnSight to push scene graph updates
// in asynchronous fashion.  An EnSight initiated scene update can be started from the Python 
// interpreter in the EnSight client using this code fragment:
// \code{.python}
// import enspyqtgui_int
// enspyqtgui_int.dynamic_scene_graph_command("dynamicscenegraph://localhost/client/update")
// \endcode
// This update will be seen by all current dynamic scene graph sessions that have the 
// allow_spontaneous flag set in their SceneClientCommand INIT messages.
//
// EnSight will export all of the geometry visible in the viewport 0 as the scene
// contents.  Individual parts may have the metadata tag "ENS_DSG_HINTS" set to a 
// string.  If the string contains the substring "HIDE", that part will not be
// included in the export, even if it is visible in viewport 0.
//
// @section entities Overview of the dynamic scene graph API entities
// <hr>
//
// The gRPC API update commands define a collection of entities that describe the
// scene graph. These entities refer to each other using entity IDs.  The IDs are
// a proxy for pointers.  An individual entity can be updated (one SceneUpdateCommand 
// message for each update message) or destroyed by SceneUpdateCommand messages.
// All addressable entities have a 64bit "id" associated with them.  An "update" command 
// is used to create an entity and to update its attributes.  
//
// An incremental update will only send updates for the entities that have changed
// since the previous update.  If an entity no longer exists after this update, the
// entity ID will be sent in a DeleteID command.
//
// The currently defined entities are:
//
// Entity | Description
// ------ | -----------
// Scene | Top of the tree of entities.  It may contain View and Variable entities.
// View | Contains timestep and camera information for a tree of geometry. It may contain Group and Part entities.
// Group | Child of a View or another Group.  It may contain Part and Group entities.  Includes a 4x4 matrix transform and arbitrary attributes.
// Part | Child of a Group, parent to Geom entities.  Defines a "mesh" and display attributes.
// Geom | Child of a Part.  Storage for the arrays that define a block of a geometry. Note: a single Geom will have connectivity defining either be LINES or TRIANGLES, not both. Includes: Coordinates, Connectivity, current variable data, edge flags 
// Variable | Defines variable display properties: Nodal, Elemental, ranges, interpolation, etc.  Child of a Scene.
//
// The View, Group, Part, Geom and Variable entities all include a hash field.  This string
// is unique to the contents of the update message.  Thus, if two messages of the same type
// have the same hash, they can be considered to have identical contents.
//
// @subsection updateprocess The entity update gRPC message sequence
// <hr>
//
// The update process is initiated by the client application unless a SceneClientCommand message 
// has enabled spontaneous updates.  A spontaneous update starts with step 2.
//
// 1. Client sends a SceneClientCommand (SceneClientCommand::ClientCommandType::INIT)
// message to the EnSight gRPC service of the type SceneClientInit. This triggers 
// the update sequence.
//
// 2. EnSight sends a SceneUpdateCommand UpdateSceneBegin (SceneUpdateCommand::SceneUpdateCommandType::UPDATE_SCENE_BEGIN) 
// message to the client.
//
// 3. EnSight sends a series of SceneUpdateCommand messages to the client.  These messages
// can be of these types (DeleteID, UpdatePart, UpdateGroup, UpdateGeom, UpdateVariable, UpdateView).
// Note there should be no assumption about the order of these messages.
//
// 4. EnSight sends a final SceneUpdateCommand UpdateSceneEnd (SceneUpdateCommand::SceneUpdateCommandType::UPDATE_SCENE_END) 
// message to the client, signifying the end of a scene graph update.
//
// @subsection entitydiagram Entity relationship diagram
// <hr>
//
// \image html ./dynamic_scene_graph_service_entities.svg
//
service DynamicSceneGraphService {
    //@addtogroup DSG

    // @brief Start a new dynamic scene graph stream
    //
    // This gRPC call opens a bi-directional stream between the client application and the
    // EnSight gRPC server. The client application can make requests for updates to the
    // current scene graph by sending SceneClientCommand messages. The EnSight server
    // responds with a series of SceneUpdateCommand messages.
    // @param SceneClientCommand A stream of SceneClientCommand objects
    // @return SceneUpdateCommand A stream of SceneUpdateCommand messages from the EnSight client
    rpc GetSceneStream (stream SceneClientCommand) returns (stream SceneUpdateCommand) {};

    // @brief Get the server version of the dynamic scene graph stream
    // @param versionrequest dummy argument
    // @return VersionReply the API version currently supported by the server
    rpc GetAPIVersion (VersionRequest) returns (VersionReply) {};

}


// @brief Request for the server API version
//
// Dummy argument for the GetAPIVersion rpc
message VersionRequest {
}

// @brief The server API version
//
// This command returns the version number of the DynamicSceneGraphService that the server
// supports.  The number is defined in this .proto file as VersionEnumType::CURRENT_VERSION.
// The protocol passes this value as an int32 so that the client can receive the value
// properly and then compare it to its own value of the VersionEnumType::CURRENT_VERSION enum
// generated by the version of the proto file it had compiled.
message VersionReply {
    // @brief version number
    //
    // The version type is used to determine the version number the protocol corresponds to.
    enum VersionEnumType {
        UNDEFINED = 0;            // No version number specified
        CURRENT_VERSION = 101;    // Current version of the .proto file/protocol 
    }
    int32 version = 1;    // The API version number as an integer.  It should be the value VersionEnumType::CURRENT_VERSION.
}

// @brief Request by the client for an EnSight scene update
//
// This SceneClientCommand sub message is sent by the client at startup or whenever the client 
// would like a scene update.  The server will respond by starting a scene update command sequence, 
// beginning  with a SceneUpdateCommand message, UpdateSceneBegin sub command.  The update sequence
// will end with a SceneUpdateCommand message, UpdateSceneEnd sub command.
//
// This message also informs the server what the maximum size of a block of data should be (in bytes). 
// It also can be used to enable "spontaneous" scene updates that can be started by the EnSight server
// at any time. If the client would like the server to rebroadcast the entire scene, it should
// set the allow_incremental_updates flag to false, suppressing state cache tracking by the server.
message SceneClientInit {
    bool allow_spontaneous = 1;         // If true, EnSight is allowed to spontaneously start a scene update. If false, updates can only be initiated by the client via this message.
    bool allow_incremental_updates = 2; // If true, EnSight is allowed/encouraged to send the minimal number of update packets. If false, the client must re-send the entire scene.
    int32 maximum_chunk_size = 3;       // Sets the maximum payload blocksize in bytes in a single UpdateGeom message (0=unrestricted payload size).
    bool include_temporal_geometry = 4; // If true, request that the current temporal geometry be sent.  If false, the current static view is sent
}

// @brief Update a parameter in the EnSight session
//
// Message from client to change some EnSight session state.  This command is currently unimplemented.  The
// intent is that this message would be sent from the VR environment to interact with the EnSight session (e.g. load data, clip plane motion)
message SceneClientUpdate {
    // To be defined
}

// @brief Aggregate command sent by a dynamic scene graph client
//
// This command represents a union of two different base commands: SceneClientInit and SceneClientUpdate.  To 
// use the message, set the command_type to the type of the message and fill in the appropriate ClientCommand
// sub-message.
message SceneClientCommand {
    // The type of the ClientCommand oneof that has been set
    enum ClientCommandType {
        INIT = 0;      // Initial command to be sent. Can be sent repeatedly to reset session parameters or request a scene update
        UPDATE = 1;    // Undefined at present, but used to send interaction information from VR1 back to EnSight
    }
    ClientCommandType command_type = 1;  // The command type
    // message union
    oneof ClientCommand {
        SceneClientInit init = 2;  //  Init a session/request a scene graph update
        SceneClientUpdate update = 3;   // Modify an EnSight session 
    }
}

// @brief Begin an update sequence
//
// Sent to mark the start of an update operation, the scene will not be complete until UpdateSceneEnd is received
message UpdateSceneBegin {
    bool reset = 1;   // If true, scene being updated will replace the current scene, client deletes all existing entity definitions. If false, this is an incremental update to be merged into existing scene entities
    uint64 id = 2;    // The scene entity id
}

// @brief End an update sequence
//
// Sent when the entire scene as been defined and can now be rendered
message UpdateSceneEnd {
    uint64 id = 1;  // The scene entity id
}

// @brief Delete a list of entities.
message DeleteID {
    repeated uint64 ids = 1 [packed=true];   // A list of entity ids that have been deleted (and non longer exist in the cache)
}

// @brief Update a View entity
//
// Scenes contain a collection of View entities that provide camera definitions and 
// have groups (leading to Parts entities) as children.  A View also provides a timeline 
// over which its children should be considered visible.  The timeline contains
// two time values.  Children of the View are considered visible at some time t, 
// if: `timeline[0] <= t < timeline[1]`.  
message UpdateView {
    uint64 id = 1;                // View entity id.
    uint64 parent_id = 2;         // Scene entity id.
    repeated float timeline = 3;  // Start and end time these children are to be displayed, two values.
    repeated float lookat = 4;    // X,Y,Z of the view lookat point.
    repeated float lookfrom = 5;  // X,Y,Z of the view lookfrom point.
    repeated float upvector = 6;  // NX,NY,NZ of the view up vector.
    float fieldofview = 7;        // The field of view angle in degrees.
    float aspectratio = 8;        // Display rectangle aspect ratio (dx/dy).
    repeated float nearfar = 9;   // The distance from the lookfrom point to the near and far clipping planes.

    string hash = 10;             // hash for this message payload
} 


// @brief Update a Part entity
//
// Sent to update part rendering attributes.  Parts have Geom entity children that define 
// the bulk data arrays.
//
// The material name needs additional work.  If 'steel' or 'glass' are specified, are we expecting the client 
// to come up with shaders for those materials, or just informing that fill_color and shininess parameters 
// are steel-like or glass-like.  General thinking is to use common namespaces (e.g. granta, etc)
// for known material specifications and namespace prefixed JSON for others (e.g. ensight:{json payload}
message UpdatePart {
    // The rendering mode is actually a bit field, defining what should be rendered.
    enum RenderingMode {
        NODES = 0;        // render the nodes of the connectivity (spheres)
        CONNECTIVITY = 1; // render the elements defined by the connectivity, triangles or lines. Note: if edgeflags are specified and the connectivity is triangle, element boundaries are to be outlined
    }

    // Define the location of normals
    enum ShadingMode {
        ELEMENTAL = 0;   // Normals are specified per element face (e.g. one normal per triangle).
        NODAL = 1;       // Normals are specified per node.
    }

    // 2D texture options for tex coords outside [0,1]
    enum TextureWrapMode {
        REPEAT = 0;        // Like GL_REPEAT
        CLAMP = 1;         // Like GL_CLAMP_TO_BORDER, except values outside [0,1] get the usual part color/lighting/color by var in DECAL mode, and killed in REPLACE or MODULATE mode.
        CLAMP_TEXTURE = 2; // Like GL_CLAMP_TO_EDGE
    }
    // 2D texture options for combining texture color with part color, lighting, color by var
    enum TextureApplyMode {
        REPLACE = 0;       // 2D texture color replaces all other color.  No lighting.  Same as DECAL unless wrap mode is CLAMP.
        DECAL = 1;         // 2D texture color replaces all other color.  No lighting.
        MODULATE = 2;      // Color as usual with part color, lighting, color by var, etc.  Then multiply by the 2D texture color.
    }
    // 2D texture interpolation
    enum TextureSampleMode {
        NEAREST = 0;       // Like GL_NEAREST
        LINEAR = 1;        // Like GL_LINEAR
    }

    uint64 id = 1;           // The Part entity id
    uint64 parent_id = 2;    // Parent Group id

    string name = 3;                  // The name of the Part
    repeated float matrix4x4 = 4;     // Rigid body motion

    repeated float fill_color = 5;    // Base color for the part (rgba).  If color_variableid is not set, draw the part with this RGB.  Even if color_variableid is set, combine RGB from color_variableid with A in fill_color.
    repeated float line_color = 6;    // Used for rendering line connectivity and element boundaries if edgeflags are specified
    RenderingMode render = 7;         // What to aspect of the mesh to render
    ShadingMode shading = 8;          // Defines the location of the normals.  If normals are specified per-element, triangles should be shaded as "flat"

    float ambient = 9;                // OpenGL style ambient coloring factor: GL_AMBIENT
    float diffuse = 10;               // OpenGL style diffuse coloring rgb: GL_DIFFUSE 
    float specular_shine = 11;        // OpenGL style specular factor: GL_SHININESS
    float specular_intensity = 12;    // OpenGL style specular factor: GL_SPECULAR
    string material_name = 13;        // The material name specification
    float node_size_default = 14;     // If node rendering is specified, the base size of each node
    uint64 color_variableid = 15;     // per-node or per-element coloring specification
    uint64 alpha_variableid = 16;     // If this is set, transparency varies over the part, and comes from the alpha channel for alpha_variableid.  It supercedes the alpha value in fill_color.
    uint64 node_size_variableid = 17; // If the 'render' variable has 'NODES' set, the size of rendered points can vary by the value of a variable, multiplied by the node_size_default.
    uint64 displacement_variableid = 18;  // if this is set, the vector variable should be added to the coordinate variable to generate the final coordinate.

    uint64 texture_id = 19;                     // 2D texture to apply.
    TextureWrapMode texture_wrap_mode = 20;     // 2D texture wrapping options
    TextureApplyMode texture_apply_mode = 21;   // 2D texture color blending options
    TextureSampleMode texture_sample_mode = 22; // 2D texture sampling options

    string hash = 23;                 // hash for this message payload

    // could specify a projected plane for tex coords, then sometimes would not need to send the TEX_COORDINATES update
    // TBD: "control" variables (e.g. clip plane position, etc) that can be modified in the VR environment
    // TBD: attributes specific to certain types of parts, like animation options on particle traces
    // TBD: mirroring/instancing.  perhaps add an array of transformation matrices, or just the mirror plane/rotational axis parameters
}


// @brief Update a Group entity
//
// Sent to update a group entity.  The group is a simple entity serving as the basic "tree"
// node.
//
// The attributes are open for various uses, but several attribute key values have already been
// defined:
//
// [EnSight Units]: https://nexusdemo.ensight.com/docs/python/html/ENS_UNITSSchema.html#TOC-ENS_UNITS_SYSTEM "EnSight Units System"
//
// Attribute | Value
// --------- | -----
// ENS_OBJ_TYPE | The EnSight object type associated with this Group entity (e.g. "ENS_PART", "ENS_CASE", "ENS_VAR").
// ENS_OBJ_ID | The EnSight object ID associated with the Group entity.
// ENS_UNITS_SYSTEM | The unit system for the a specific ENS_CASE.  Encoded in JSON.  An example would be: '{"system":"SI","label":"Metric SI","M":"kg","L":"m","T":"s","K":"K","Q":"A","D":"rad","I":"cd","A":"mol"}'.  See also [EnSight Units].
// ENS_CASE_DATAFORMAT | The EnSight data reader used to load this portion of the tree.  An example would be: 'Fluent'.
message UpdateGroup{
    uint64 id = 1;         // The Group entity id
    uint64 parent_id = 2;  // Parent Group or View id
    string name = 3;       // The name of the Group
    repeated float matrix4x4 = 4;         // A 4x4 transformation matrix 
    map<string,string> attributes = 5;    // General attributes associated with this Group

    string hash = 6;       // hash for this message payload
}

// @brief Update a Geom entity
// 
// The geom entity holds the physical arrays used for rendering.
// It contains a coordinate array and connectivity that is relative to the coordinate array
// for this geom.  The connectivity can be triangles, lines or empty (points).
// If triangles, optional edgeflags specify the "line" representation of the triangles (for element outlining)
// Otherwise, the geom object can hold the data payloads for other variables tagged via their variable id.
// The use of these variables is dictated by fields in the Part entity that note the use of specific
// variables for other purposes (e.g. normals, coloring, node size, etc).
// Multiple UpdateGeom packets are send to fill in an entire array, limited by the size specified 
// in the init command.  All Geom packets for a specific array will include the full size of the
// target array (in base type units, uint32 or float) and an offset where the payload of a specific
// UpdateGeom packet should be stored in the array.
message UpdateGeom {
    // The type of array the Geom represents
    enum ArrayType {
        COORDINATES = 0;    // x1,y1,z1,x2,y2,z2 ...
        TRIANGLES = 1;      // 3*uint32 per triangle (zero based)
        LINES = 2;          // 2*uint32 per line segment (zero based)
        EDGEFLAGS = 3;      // uint32 per element (only used with triangles)
        ELEM_VARIABLE = 4;  // per element 1D variable values from the variable_id
        NODE_VARIABLE = 5;  // per node 1D variable values from the variable_id
        ELEM_NORMALS = 6;   // x1,y1,z1,x2,y2,z2 ...  
        NODE_NORMALS = 7;   // x1,y1,z1,x2,y2,z2 ...
        TEX_COORDINATES = 8;// 2*float, always per vertex, u1,v1,u2,v2 ...
    }

    uint64 id = 1;         // The Geom entity id
    uint64 parent_id = 2;  // Parent Part entity id

    ArrayType payload_type = 3;  // The type of the array represented by this entity
    uint64 variable_id = 4;      // If the ArrayType is VARIABLE, this is the associated entity id of a Variable 

    repeated float flt_array = 5 [packed=true];     // Used when payload_type is VARIABLE or COORDINATES
    repeated uint32 int_array = 6 [packed=true];    // Used when payload_type is TRIANGLES, LINES or EDGEFLAGS
    uint64 chunk_offset = 7;      // The offset in "elements" (floats, uint32, etc) of the array represented by this Geom
    uint64 total_array_size = 8;  // The total size in "elements" (floats, uint32, etc) of the array represented by this Geom

    string hash = 9;        // hash for this message payload
}


// @brief A "knot" point in the palette for the Variable
//
// This message maps a variable value to a specific color.
message VariableLevel {
    float value = 1;   // The variable value the color is associated with
    float red = 2;     // Red   [0, 1]
    float green = 3;   // Green [0, 1]
    float blue = 4;    // Blue  [0, 1]
    float alpha = 5;   // Alpha [0, 1]
}

// @brief Update a Variable entity
//
// General meta data about a variable, and about how to color by that variable.
// All parts colored by a the same variable in EnSight use the same palette, same var range, etc.
//
// The attributes are open for various uses, but several attribute key values have already been
// defined:
//
// [EnSight Units]: https://nexusdemo.ensight.com/docs/python/html/ENS_UNITSSchema.html#TOC-ENS_UNITS_SYSTEM "EnSight Units System"
//
// Attribute | Value
// --------- | -----
// ENS_OBJ_TYPE | The EnSight object type associated with this Group entity (e.g. "ENS_PART", "ENS_CASE", "ENS_VAR").
// ENS_OBJ_ID | The EnSight object ID associated with the Group entity.
// ENS_UNITS_DIMS | The unit dimensionality for the a specific ENS_VAR.  An example for a pressure variable would be: 'M/LTT'.  See also [EnSight Units].
message UpdateVariable {
    // @brief Declare where a variable is defined to exist
    //
    // Variables can located at each node or element of the mesh.
    enum VarLocation {
        NODAL = 0;        // The variable is specified per mesh node
        ELEMENTAL = 1;    // The variable is specified per mesh element (e.g. triangle)
    }

    // @brief Declare the variable dimension
    //
    // Variables can either be a single float (SCALAR) per observed location or
    // a 3 float vector (VECTOR).
    enum VarDimension {
        SCALAR = 0;       // The variable has one value per location
        VECTOR = 1;       // The variable has three values per location
    }

    // @brief Palette interpolation options
    //
    // Specify if palette interpolation should be linear or stepwise.
    enum PaletteInterpolation {
        CONTINUOUS = 0;   // The interpolation of the variable palette is linear
        BANDED = 1;       // The interpolation of the variable palette is a step function
    }

    // @brief Undefined interpretation
    //
    // EnSight has a special float value indicating that the variable is undefined for a vertex or element.
    // Options for drawing these elements are in the UndefinedDisplay enum.  The value that means 'undefined' is
    // given below in undefined_value.  By default, the undefined value is -1.2345e-10.
    enum UndefinedDisplay {
        AS_ZERO = 0;            // Draw 'undefined' as 0.0
        AS_INVISIBLE = 1;       // Don't draw any pixels where the variable value is undefined.
        USE_PART_COLOR = 2;     // Draw 'undefined' areas using the 'fill_color' value on the part
        USE_UNDEF_COLOR = 3;    // Draw 'undefined' areas using a color given below in undefined_color
    }

    uint64 id = 1;              // The Variable entity id
    uint64 parent_id = 2;       // The parent scene id

    string name = 3;            // The name of the variable
    VarLocation location = 4;   // The location of the variable
    VarDimension dimension = 5; // The dimensionality of the variable
    float undefined_value = 6;  // The float value that should be interpreted as "Undefined"

    PaletteInterpolation pal_interp = 7;      // How the color palette specified by levels should be interpolated
    repeated VariableLevel levels = 8;        // The color and var value at palette levels.  Lowest to highest.
    uint32 sub_levels = 9;                    // The number of "sub-levels" that might be used with BANDED interpolation. The total number of bands is (levels-1)*(sub_levels+1). The color in each level is used on the band at and above the level value, except for the last level's color, which is use on the band below it. Linearly interpolate in RGB space to get the colors of the bands between levels.
    UndefinedDisplay undefined_display = 10;  // How should the undefined values be displayed.
    repeated float undefined_color = 11;      // If undefined_display==USE_UNDEF_COLOR, rgb in [0,1] given here
    bytes texture = 12;                       // rgba pixel values (rrggbbaa 4 bytes/pixel) in [0,255].  For the color_variableid, use only the rgb portion of this texture. For the alpha_variableid, use only the 'a' portion of this texture.  levels[0].value should map to tex coord==0 for banded, 0.5 texel for continuous levels[levels.size()-1].value should map to tex coord==1 for banded, 1 - 0.5 texel for continuous.
    map<string,string> attributes = 13;       // General attributes associated with this Variable

    string hash = 14;                         // hash for this message payload
}


// @brief Update a Texture entity
//
// Sent to update a 2D texture.  
message UpdateTexture {
    // @brief Define the imaging format of a texture
    //
    // Texture images are always a single byte per component, but images can be
    // RGB (three components) or RGBA (four components) per pixel. RGBA are the
    // red, blue, green and alpha channels of the image.
    enum TextureFormat {
        RGB = 0;
        RGBA = 1;
    }
    uint64        id = 1;                // texture entity id
    uint64        parent_id = 2;         // scene entity id
    TextureFormat format = 3;            // RGB or RGBA
    uint32        width = 4;             // texture width.  not generally a power of 2
    uint32        height = 5;            // texture height.  not generally a power of 2
    bytes         texels = 6;            // packed RGB or RGBA values depending on 'format', in range [0,255]

    string        hash = 7;              // hash for this message payload
}


// @brief Aggregate command sent by EnSight to a client
//
// This command represents a union of a number of different commands: UpdateSceneBegin, 
// UpdateSceneEnd, DeleteID, UpdatePart, UpdateGroup, UpdateGeom, UpdateVariable and 
// UpdateView.  To use the message, set the command_type to the type of the message 
// and fill in the appropriate UpdateCommand sub-message.
message SceneUpdateCommand {
    // @brief Specify the specific command type
    //
    // SceneUpdateCommand object can represent many different sub-commands, but
    // packed into a common message.  The SceneUpdateCommandType is the specific
    // sub-command type of the base message.
    enum SceneUpdateCommandType {
        UPDATE_SCENE_BEGIN = 0;  // Marks the beginning of a scene update
        UPDATE_SCENE_END = 1;  // Marks the completion of a scene update
        DELETE_ID = 2; // Tell the client to delete an entity ID that was defined in a previous scene update
        UPDATE_PART = 3;   // Create/update a Part entity
        UPDATE_GROUP = 4;  // Create/update a Group entity
        UPDATE_GEOM = 5;  // Create/update a Geom entity
        UPDATE_VARIABLE = 6;  // Create/update a Variable entity
        UPDATE_VIEW = 7;  // Create/update a View entity
        UPDATE_TEXTURE = 8;  // Create/update a Texture entity
    }
    SceneUpdateCommandType command_type = 1;   // The update command type

    // @brief The union of the sub-command messages
    //
    // Each SceneUpdateCommand message can be one of the types defined by the
    // command_type.  These are represented via a union message construct.
    oneof UpdateCommand { 
        UpdateSceneBegin scene_begin = 2;  // Begin a scene update 
        UpdateSceneEnd scene_end = 3;  // End a scene update
        DeleteID delete_id = 4;  // Delete a collection of entities from the cache
        UpdatePart update_part = 5;  // Update a Part entity
        UpdateGroup update_group = 6; // Update a Group entity
        UpdateGeom update_geom = 7; // Update a Geom entity
        UpdateVariable update_variable = 8; // Update a Variable entity
        UpdateView update_view = 9; // Update a View entity
        UpdateTexture update_texture = 10; // Update a Texture entity
    }
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C]: https://img.shields.io/badge/language-C-blue (C)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)