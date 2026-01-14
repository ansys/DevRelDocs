# File libuserd\_interface.h

<a id="libuserd__interface_8h"></a>

![][C++]

## Source


```cpp
/*
 *
 *  *************************************************************
 *   Copyright 2024 ANSYS, Inc.
 *   All Rights Reserved.
 *
 *        Restricted Rights Legend
 *
 *   Use, duplication, or disclosure of this
 *   software and its documentation by the
 *   Government is subject to restrictions as
 *   set forth in subdivision [(b)(3)(ii)] of
 *   the Rights in Technical Data and Computer
 *   Software clause at 52.227-7013.
 *  *************************************************************
 */

#ifndef LIBUSERD_INTERFACE_H
#define LIBUSERD_INTERFACE_H

#ifdef __cplusplus

#include <string>
#include <vector>
#include <map>
#include <array>

#include "libuserd_common.h"



/* TODO
 *  - Add support for structured data
 */


namespace libuserd {

    struct fileExtensions {
        std::string name;
        std::vector<std::string> file_1_extension;
        std::vector<std::string> file_2_extension;
    };

    // Forward declaration
    class ReaderInfo;
    class LibUserd;
    class Reader;

    class Query : public IQuery {

    public:
        size_t num_points() override;

        ErrorCode data(float* x, float* y) override;

    private:
        Query(const uint32_t id,
              const uint32_t reader_id,
              const std::string& name,
              const std::string& x_title,
              const std::string& y_title,
              const std::map<const std::string, std::string>& metadata);
        friend class Reader;
        uint32_t m_reader_id;
    };

    class Variable : public IVariable {

    public:

    private:
        Variable(const uint32_t _id,
            const std::string& _name,
            const std::string& _unit_label,
            const std::string& _unit_dims,
            const VariableLocation _location,
            const VariableType _type,
            const bool _time_varying,
            const bool _complex,
            const bool _interleave_flag,
            const uint32_t _number_of_components,
            const std::map<const std::string, std::string>& _metadata);

        friend class Reader;
    };

    class Part : public IPart {

    public:
        ErrorCode num_nodes(std::size_t& num_coords, int32_t rank = 0) override;

        ErrorCode nodes(float* xyz, int32_t rank = 0) override;

        ErrorCode num_elements(std::map<ElementType, std::size_t>& elements, int32_t rank = 0) override;

        ErrorCode element_conn(ElementType elem_type, uint32_t* connectivity, int32_t rank = 0) override;

        ErrorCode element_conn_nsided_size(ElementType elem_type, 
            size_t& nodes_per_polygon_size, size_t& nodes_size, int32_t rank = 0) override;

        ErrorCode element_conn_nsided(ElementType elem_type, uint32_t* nodes_per_polygon, uint32_t* nodes, int32_t rank = 0) override;

        ErrorCode element_conn_nfaced_size(ElementType elem_type, size_t& faces_per_element_size,
            size_t& nodes_per_face_size, size_t& indices_size, int32_t rank = 0) override;

        ErrorCode element_conn_nfaced(ElementType elem_type,
            uint32_t* faces_per_element, uint32_t* nodes_per_face, uint32_t* nodes, int32_t rank = 0) override;

        ErrorCode variable_values(IVariable* var, ElementType elem_type, 
            bool complex, uint32_t component, float* array, int32_t rank = 0) override;

        ErrorCode rigid_body_transform(struct RigidBodyTransform& transform) override;

    private:
        Part(const uint32_t index,
            const uint32_t id,
            const uint32_t reader_id,
            const std::string& name,
            const std::map<const std::string, std::string>& metadata,
            const PartHints hints);

        friend class Reader;
    };


    class ReaderInfo : public IReaderInfo {

    public:
        ErrorCode read_dataset(const std::string& file1, const std::string& file2, IReader*& reader) override;

        static bool get_userd_xtra_gui_values(int reader_id, Options& userd_options);

    private:
        ReaderInfo(const uint32_t id,
            const std::string name,
            const std::string description,
            const std::string file_labels[2],
            struct Options options);
        friend class LibUserd;
    };

    class Reader : public IReader {

    public:
        ErrorCode parts(std::vector<IPart*>& part_list) override;

        ErrorCode variables(std::vector<IVariable*>& variable_list) override;

        ErrorCode queries(std::vector<IQuery*>& query_list) override;
 
        ErrorCode get_number_of_time_sets(uint32_t & number_of_time_sets) override;

        ErrorCode timevalues(std::vector<float> & timevalues, uint32_t timeset_number = 0) override;

        ErrorCode set_timevalue(float timevalue, uint32_t timeset_number = 0) override;

        ErrorCode set_timestep(uint32_t timestep, uint32_t timeset_number = 0) override;

        ErrorCode variable_value(const IVariable* var, float& value, int32_t rank = 0) override;

        UpdateHints dynamic_update_check(UpdateHints changes_allowed) override;

        bool is_geometry_changing() override;

        const IReaderInfo* info() override;

        // static helper methods
        static ErrorCode get_geometry_info(int reader_id, int part_index, std::vector<int>& geoms_vector);
        static ErrorCode number_of_geometries(int reader_id, int part_index, int& number_of_geoms);

    private:
        Reader(ReaderInfo info);
        friend class ReaderInfo;

        ReaderInfo m_reader_info;   

        // Private helper methods
        ErrorCode get_meta_data_string();
        void parse_metatags(std::map<const std::string, std::string>& map, const char* section_name);
        ErrorCode get_part_hints(int reader_id, int part_index, PartHints& part_hints);

        std::map<const std::string, std::string> m_part_metatags;
        std::map<const std::string, std::string> m_var_metatags;
        std::map<const std::string, std::string> m_query_metatags;
    };



    class LibUserd : public ILibUserd {
    public:

        static LibUserd* library_interface();

        /*
         * These functions need to be called before initialize() is called.
         */

        ErrorCode set_reader_path(const std::string& path) override;
   
        ErrorCode set_message_handler(ErrorProc, void* userdata) override;

        ErrorCode initialize(int32_t number_of_ranks = 0) override;

        size_t get_available_reader_count() override;

        ErrorCode get_all_readers(std::vector<IReaderInfo*>& info) override;

        ErrorCode query_format(const std::string& name1, const std::string& name2, std::vector<IReaderInfo*>& reader_info) override;

        ErrorCode shutdown() override;

        static Reader* get_active_reader();

    private:
        LibUserd();
        LibUserd(const LibUserd&) = delete;
        static LibUserd* s_libuserd;

        std::vector<fileExtensions> m_reader_extensions;
        void initReaderExtensions();
        std::string processFilename(const std::string &filename);

        friend class ReaderInfo;
        static void set_active_reader(Reader* reader);
        static Reader* s_active_reader;
    };
}

#endif

#endif
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)