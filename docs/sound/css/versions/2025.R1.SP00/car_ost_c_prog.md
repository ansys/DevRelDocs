# C++ Program

## Main program

```c++
// Car Sound Simulator_UDP_Console.cpp : MAIN program for "cmd" Windows application. #include "stdafx.h"
#include <winsock.h>
#pragma comment(lib, "ws2_32.lib")
#include <stdio.h> #include <stdlib.h>
#include "../Car Sound Simulator_UDP_Util/Car Sound Simulator_UDP_Util.h"
    /*
    This program must be lauched with some arguments in this order IP address, port, key, data(s):
    IP adresse = destination address to send message port = destination port to send message
    key = key name of message to send
    data(s) = data to send with ' ' as separation
    */
    int
    main(int argc, char *argv[])
{
    // We must have at least address, port, key, data arguments if (argc < 5)
    {
printf("Argument error !\nExpected : IP address, port, key, data(s)\nSample 1 : 192.168.0.50 6666 SPEED 3.4\nSample 2 : 192.168.0.50 6666 OUTPUT_TYPE Stereo\nSample 3 : 192.168.0.50 6666 TRAFIC_INIT 1 2 0.4 0.6 0.8\nSample 4 : 192.168.0.50 6666 CRISSEMENT .2 .3
.4 .5 ");
return -1;
    }
    char *l_hostname = argv[1];
    int l_port = atoi(argv[2]);
    char *l_name = argv[3];
    int l_countData = argc - 4;
    std::vector<std::string> l_data;
    for (int l_ii = 0; l_ii < l_countData; l_ii++)
        l_data.push_back(argv[4 + l_ii]);
    // Create socket connection WSADATA WSAData;
    WSAStartup(MAKEWORD(1, 0), &WSAData);
#include "GeneCARS_UDP_Util.h" #include "../OSC_Util/libOSC/OSC-client.h" #define MAX_SIZE_MSG 600
    bool CreatePacket(char *p_name, std::vector<std::string> &p_data, char **l_packet, int &l_sizePacket)
    {
        // Format type(s), we muste have a string as ",sif" ... where 's' indicates a string, 'i' an int and 'f' a float according to the p_data specified
        char l_types[MAX_SIZE_MSG];
        memset(&l_types[0], 0, MAX_SIZE_MSG);
        int l_curTypesPos = 0;
        l_types[l_curTypesPos++] = ',';
        for (std::vector<std::string>::iterator l_it = p_data.begin(); l_it != p_data.end(); l_it++)
        {
            // int ?
            int l_int = atoi((*l_it).c_str());
            if (l_int != 0 || (l_int == 0 && (*l_it).compare("0") == 0))
            {
                l_types[l_curTypesPos++] = 'i';
                continue;
            }
            // float ?
            double l_double = atof((*l_it).c_str());
            if (l_double != 0 || (l_double == 0 && (*l_it).compare("0.0") == 0 || (*l_it).compare(".0") == 0))
            {
                l_types[l_curTypesPos++] = 'f';
                continue;
            }
            // String l_types[l_curTypesPos++] = 's';
        }
        // Format the type string
        char *l_typesEffectif = new char[l_curTypesPos + 1];
        memset(&l_typesEffectif[0], 0, l_curTypesPos + 1);
        memcpy(&l_typesEffectif[0], &l_types[0], l_curTypesPos);
        // Create OSC packet OSCbuf myBuf; OSCbuf *b = &myBuf;
        char bytes[MAX_SIZE_MSG];
        // write key value
        OSC_initBuffer(b, MAX_SIZE_MSG, bytes);
        // if (OSC_writeAddress(b, "/"))
        if (OSC_writeAddressAndTypes(b, p_name, l_typesEffectif))
            // write all data according to their type
            for (int l_ii = 1; l_ii < l_curTypesPos; l_ii++) // skip first char ','
            {
                if ('s' == l_typesEffectif[l_ii])
                {
                    if (OSC_writeStringArg(b, (char *)p_data[l_ii - 1].c_str()))
                        return false;
                }
                else if ('i' == l_typesEffectif[l_ii])
                {
                    int l_int = atoi(p_data[l_ii - 1].c_str());
                    if (OSC_writeIntArg(b, l_int))
                        return false;
                }
                else if ('f' == l_typesEffectif[l_ii])
                {
                    float l_double = (float)atof(p_data[l_ii - 1].c_str());
                    if (OSC_writeFloatArg(b, l_double))
                        return false;
                }
            }
        if (0 == OSC_isBufferDone(b))
            return false;
        l_sizePacket = OSC_packetSize(b);
        *l_packet = new char[l_sizePacket + 1];
        memcpy(*l_packet, OSC_getPacket(b), l_sizePacket);
        return true;
    }
```
