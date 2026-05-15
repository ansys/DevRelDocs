# Introduction

Sherlock utilizes gRPC- a high performance, open-source, universal RPC (Remote
Procedure Call) framework. This allows users with programming experience to
access some of Sherlock's internal functions, making it easier, for example,
to integrate Sherlock's capabilities with other applications.

The gRPC framework makes these APIs accessible to a broad range of users. When
Sherlock developers create a new API, they only need to define the service
once in a Sherlock `.proto` file. The gRPC framework automatically generates
the clients and servers required to support over a dozen computer languages.

This chapter includes all the information you need to set up and start using
the APIs. Previous experience using gRPC is not required, but the information
in this chapter assumes you have some programming experience in one of the
following languages: Android Java, C#/.NET, C++, Dart, Go, Java, Kotlin"/JVM,
Node, Objective-C, PHP, Python, Ruby, or Web.

**Note** 
Python client-side scripts have been generated and are included with your
Sherlock installation. To use them, see the section *Pre-Generated Python Scripts* in [Getting started](./getting-started.md).

**Note** 
In some cases, after a Sherlock API gRPC request is sent, a response is
received before other required operations are complete. This can cause
unexpected behavior when you are scripting multiple commands where one must
finish before the next one begins. The workaround is to add a delay after any
API call that must finish before the next API call is initiated.




