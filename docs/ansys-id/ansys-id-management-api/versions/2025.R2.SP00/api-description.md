
## Overview

The AnsysID API provides robust management of key entities, including Accounts, Users, Groups, GroupMembers, GroupOwners, Roles, UserRoles, and Activities, along with various operations for each.

**Accounts:** Create, update, delete, and retrieve account information.

**Users:** Manage user profiles by adding, modifying, deleting, and retrieving user data and add user to accounts.

**Groups:** Create, update, delete, Get Group Details, and list groups, Add, update, Delete, Get Group Members and Group Owners

**Roles:** Define roles with specific permissions, including creation, modification, and deletion, Add or delete Customer roles for users

**Activities:** Log and retrieve user actions to monitor interactions and generate reports.

**Personal Access Token:** Create, Update, Delete and Get Personal Access Tokens

This comprehensive functionality ensures efficient operations, security, and accountability, enhancing collaboration and governance within the system.

|**Role Type**|**Role Name**|**Role Description & Access**|
|:--|:--|:--|
|Administrative|Ansys Administrator|Edit and View at customer level Can be added only through an Azure AD group membership and available to AnsysID as federation groups|
|Administrative|Ansys Viewer|View only of ALL customers Can be added only through an Azure AD group membership and available to AnsysID as federation groups|
|Support|Ansys Support Coordinator|Edit and View at customer level Can be added only on the CRM side (not on the Ansys ID side) and available to AnsysID as datasync from CRM|
|Customer|Customer Administrator|Edit and View at customer level can be added by an Ansys Support Coordinator or an Ansys Administrator.|
|Customer|Customer Viewer|View at customer level Can be added by an Ansys Support Coordinator or an Ansys Administrator.|
|Customer|Member|View only at customer level Can be added by an Ansys Support Coordinator, a Customer Administrator, Group Administrator (when adding to a specific group), or an Ansys Administrator.|

## Prerequisites

Before using the AnsysID API, ensure you have the following:

API credentials (Client ID and Client Secret) Stakeholders Approvals for the Application to access/modify Accounts and Users data. Familiarity with RESTful APIs and OAuth 2.0 Users need certain roles to perform different operation. Global Roles (Ansys Administrator & Ansys Viewer) can only be provided to Ansys Users or Service Account (only for testing) using service now AD Group Request. Only Customer Roles can be added to user through API.

## How to

To use the AnsysID API:

- Get access token by using Generate Access Token for Test Users, refer Postman Collection.
- Choose the appropriate environment. Refer to the Environments tab.
- Make API requests to for required operation for Account, User, Groups or Roles.

## Authentication models

The AnsysID API uses authentication using authorization bearer token generated using AnsysID B2C. Prerequisites o authenticate using Azure AD B2C :

- Request the EAS Integration team to register your application for the AnsysID API resource access in the Azure AD B2C tenant
- Request a client secret for your application

AnsysID API support following three flows to obtain access_token.

### 1. Authorization code flow

**Get an authorization code** The authorization code flow begins with the client directing the user to the /authorize endpoint. This is the interactive part of the flow, where the user takes action. In this request, the client indicates in the scope parameter the permissions that it needs to acquire from the user. The following examples (with line breaks for readability) show how to acquire an authorization code.

```
GET https://{tenant}.b2clogin.com/{tenant}.onmicrosoft.com/{policy}/oauth2/v2.0/authorize?
client_id={client_id}
&response_type=code
&redirect_uri={redirect_uri}
&response_mode=query
&scope=openid offline_access
```

At this point, the user is asked to complete the user flow's workflow. This might involve the user entering their username and password, signing in with a social identity, signing up for the directory, or any other number of steps. User actions depend on how the user flow is defined.

**Get an access token** Now that the authorization code is acquired, the code can be redeemed for a token to the intended resource by sending a POST request to the /token endpoint.

```
POST https://{tenant}.b2clogin.com/{tenant}.onmicrosoft.com/{policy}/oauth2/v2.0/token HTTP/1.1

Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code
&client_id={client_id}
&scope=openid offline_access
&code={code}
```

### 2. Client Credentials flow

The client credentials flow is an OAuth 2.0 authentication method where a client application uses its own credentials (client ID and secret) to obtain an access token from the authorization server. This flow is ideal for server-to-server interactions, enabling the application to access protected resources without user involvement.

```
POST https://{tenant}.b2clogin.com/{tenant}.onmicrosoft.com/{policy}/oauth2/v2.0/token HTTP/1.1
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id=<your-client-id>
&client_secret=<your-client-secret>
&scope=https://graph.microsoft.com/.default
```

### 3. Password Flow

The password flow is an OAuth 2.0 authentication method where a user provides their username and password directly to the client application, which then exchanges these credentials for an access token from the authorization server. This flow is suitable for trusted applications, allowing users to authenticate seamlessly, but it requires a secure implementation to protect user credentials.

```
POST https://{tenant}.b2clogin.com/{tenant}.onmicrosoft.com/{policy}/oauth2/v2.0/token HTTP/1.1
Content-Type: application/x-www-form-urlencoded

grant_type=password
&client_id={client_id}
&username={username}
&password={password}
&scope=https://{tenant}.onmicrosoft.com/{api}/{scope}
&response_type=token
```

For both methods, include the obtained access token in the Authorization header of your API requests:

### Use the token

Now that we've successfully acquired an access token, token can be used in requests in back-end web APIs by including it in the Authorization header:

```
GET User/Details
Host: https://iam.ansys.com/
Authorization: Bearer <access-token>
```


## Data mapping

AnsysId API data establishes relationships between crucial entities for data integrity and efficient querying. The major entities used in the system are User, Account, Role, and Group. Following are a brief datil about them.

**User:** This entity stores personal information about users, such as id (primary key), firstname, lastname, email (unique key), and other identifying details. The email uniquely identifies each user, ensuring that no two users can have the same identifier.

**Account:** This table contains details about customer accounts, including an id (primary key), accountname, account number (unique key), and description. The association of a user with these accounts are kept in AccountUsers entity. The userid and accountid acts as a foreign key, linking each account back to the corresponding user in the User table. This relationship ensures that each user is associated with a valid account.

**Role:** The Role entity defines various roles that can be assigned to users within an account. It contains an id (primary key) , roletype and rolename. The roles can be classified into three type of roles administrative, support and customer. The assication of a role to a user withing an account is stored as Userroles that has reference to the userid and accountid as a foreign key.

**Group:** This entity represent logical grouping, which can include multiple users. It has an id (primary key) and groupname. Additionally the group is also associated with a customer account with accountid foreign key. A junction table GroupMember is used to manage the membership of users in groups.

**Personal access token** A user's personal access token can also be generated and validated which can serve as an authentication medium for allowing user to authenticate and access specific resources within an application without needing to repeatedly enter their credentials. This token enhances security by enabling fine-grained access control and can be easily revoked if necessary.

By establishing these relationships, we ensure that the database maintains referential integrity.

This structured approach allows for complex queries, enabling developers to retrieve comprehensive information about users, their accounts, roles, and group memberships efficiently. Overall, understanding these relationships is fundamental to designing effective relational databases, facilitating better data management and analysis in applications.

![data mapping](/sites/default/files/2025-07/data-mapping.png)


## Postman collection

A Postman collection is available to help you quickly get started with the AnsysID API. The collection includes pre-configured requests for common operations on User, Accounts, Groups, GroupMembers, GroupOwners, Activities & Roles. To use the Postman collection:

If you have access to [https://eas-ansys.postman.co/](https://eas-ansys.postman.co/). You can access the "Ansys EAS - External" workspace. As an alternate, request the EAS Integration team member to download the latest collection file: Ansys ID Test Scripts.postman_collection.json Import the collection into your local Postman desktop/cloud instance. Set up your environment variables (see Environments section) Ansys ID QA & Ansys ID Prod Run the authentication request (Generate Access Token for Test Users) to obtain an access token Use the provided requests to interact with the API further.

## Environments

The AnsysID API is available in three environments:

- DEV
- QA
- PROD

Each environment has its base URL and may have different rate limits or features. Use the appropriate environment URL when making API requests:

|Environment|AnsysID API|AnsysId API HealthCheck|
|:--|:-:|:-:|
|DEV|[https://ansysidapidev.azurewebsites.net/swagger](https://ansysidapidev.azurewebsites.net/swagger)|[https://ansysidapidev.azurewebsites.net/health](https://ansysidapidev.azurewebsites.net/health)|
|TEST|[https://test.iam.ansys.com/swagger](https://test.iam.ansys.com/swagger)|[https://test.iam.ansys.com/health](https://test.iam.ansys.com/health)|
|PROD|[https://iam.ansys.com/swagger](https://iam.ansys.com/swagger)|[https://iam.ansys.com/health](https://iam.ansys.com/health)|

Set up environment variables in your API client or Postman collection to easily switch between environments. Use the correct Azure AD B2C configurations for each environment.

## Flow diagram

![flow diagram](/sites/default/files/2025-07/flow-diagram.png)


## Additional documentation

Swagger API Documentation: [https://iam.ansys.com/swagger/index.html](https://iam.ansys.com/swagger/index.html)

1. [AnsysID API Details](https://ansys.sharepoint.com/:p:/r/sites/EnterpriseDataManagementTeam/Shared%20Documents/Cloud%20Platforms%20and%20Services_/AnsysID%20Portal/AnsysID%20Portal.pptx?d=wa6b1e5133128487591319a62d55274b8&csf=1&web=1&e=1DWewi)
    
2. [DR Plan](https://ansys.sharepoint.com/:w:/r/sites/EnterpriseDataManagementTeam/Shared%20Documents/Cloud%20Platforms%20and%20Services_/AnsysID%20Portal/DR%20plan/AnsysID%20WebApi%20Recovery%20Plan.docx?d=w0810de05af554d90988ff4d9ed1205c7&csf=1&web=1&e=T904B7)
    
3. [STC Pre Briefing AnsysID Group Mgmt](https://ansys.sharepoint.com/:v:/r/sites/EnterpriseDataManagementTeam/Shared%20Documents/Cloud%20Platforms%20and%20Services_/Ansys%20ID%20Meeting%20Presentations/STC%20Pre-Planning%20briefing%20%E2%80%93%20Ansys%20ID,%20User%20and%20Group%20Mgmt,%20Service%20Status%20Dashboard.mp4?csf=1&web=1&e=cBMiL7)