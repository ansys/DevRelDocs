# Entra ID app registration setup guide

This guide walks through creating the Azure Entra ID (formerly Azure Active
Directory) app registration that the sync script uses to read security group
membership via the Microsoft Graph API.

**Next step:** When the app is registered and consented, continue with [Ansys ID Portal sync — setup and usage guide](index.md) to install dependencies and run the sync.

You will need:
  - An account in your Azure tenant with one of these roles:
      - Global Administrator, or
      - Application Administrator, or
      - Cloud Application Administrator
  - Access to the Azure Portal at https://portal.azure.com


---

## What is a service principal / app registration?

When a script or automated process needs to access Azure resources, it cannot
log in as a human user. Instead, you create an **App Registration**, which is
essentially an identity for the application itself. The app registration has:

  - A **Client ID**   — like a username for the application
  - A **Client Secret** — like a password for the application

Together these allow the script to authenticate to Azure and call the
Microsoft Graph API to read group membership, without any human needing
to be logged in.

The process of granting the app permission to read specific data (such as
group members) is called **assigning API permissions**, and because the
script runs without a logged-in user, those permissions must be granted as
**Application permissions** (not Delegated permissions).

A tenant administrator must explicitly **grant admin consent** to approve
those permissions before they take effect.


---

## Open the Azure Portal

1. Go to https://portal.azure.com and sign in with your administrator account.
2. In the top search bar, type **Entra ID** and select
   **Microsoft Entra ID** from the results.


---

## Create the app registration

1. In the left-hand menu, click **App registrations**.
2. Click **+ New registration** at the top.
3. Fill in the form:
   - **Name:** Enter a descriptive name, e.g. `Ansys Sync Service`
     (this is just a display name — it does not need to match anything
     in the script).
   - **Supported account types:** Select
     **Accounts in this organizational directory only (Single tenant)**.
   - **Redirect URI:** Leave blank.
4. Click **Register**.

You are now on the **Overview** page of your new app registration.
Leave this page open — you will need values from it in the next steps.


---

## Note the client ID

On the Overview page you will see:

  - **Application (client) ID** — a GUID that looks like
    `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

Copy this value. This is what you will supply to the script as
`--entra-client-id` (or enter at the prompt).


---

## Create a client secret

1. In the left-hand menu of your app registration, click
   **Certificates & secrets**.
2. Click **+ New client secret**.
3. Fill in the form:
   - **Description:** e.g. `Ansys Sync Script`
   - **Expires:** Choose an expiry period appropriate for your organisation.
     Common choices are 12 months or 24 months.
     **Note:** When the secret expires the script will stop working.
     Set a calendar reminder to rotate it before the expiry date.
4. Click **Add**.
5. The secret **Value** is now shown in the table. **Copy it immediately** —
   Azure will never show the full value again after you leave this page.
   If you lose it you will need to delete it and create a new one.

This value is what you will supply to the script as `--entra-client-secret`
(or enter at the prompt).

**Keep this value secure.** Anyone who has both the Client ID and the Client
Secret can authenticate as this application against your Azure tenant.


---

## Assign API permissions

The script needs two Microsoft Graph API permissions to read group membership:

  - **Group.Read.All** — allows the app to find the security group by name
    and read its basic properties.
  - **User.Read.All** — allows the app to read each member's profile,
    including their primary email (mail) attribute.

Both must be granted as **Application permissions** (not Delegated).

1. In the left-hand menu, click **API permissions**.
2. Click **+ Add a permission**.
3. In the panel that appears, click **Microsoft Graph**.
4. Click **Application permissions**.
5. In the search box, type `Group.Read` and expand **Group**.
   Check the box next to **Group.Read.All**.
6. Clear the search box, type `User.Read` and expand **User**.
   Check the box next to **User.Read.All**.
7. Click **Add permissions**.

You will now see both permissions listed, but they will show a status of
**Not granted for [your tenant]** with a warning icon. This is expected —
an administrator must explicitly approve them in the next step.


---

## Grant admin consent

Application permissions (as opposed to permissions a user grants to
themselves) require a tenant administrator to explicitly approve them.
This is a one-time step.

1. On the **API permissions** page, click the button
   **Grant admin consent for [your tenant name]**.
2. A confirmation dialog will appear — click **Yes**.
3. Both permissions should now show a green checkmark and the status
   **Granted for [your tenant name]**.

If you do not see this button, your account does not have sufficient
privileges to grant consent. Ask your Global Administrator or a user with
the Privileged Role Administrator role to complete this step.


---

## Verify the setup

At this point your app registration is complete. As a final check,
confirm the following on the Overview page:

  - **Application (client) ID:** as documented in **Note the client ID**
  - **Directory (tenant) ID:** this is your tenant's GUID — it is NOT
    needed by the script (the script uses --entra-domain instead) but
    is useful to have for troubleshooting
  - **Client secret:** from **Create a client secret**, stored securely

And on the API permissions page:

  - Microsoft Graph / Group.Read.All / Application / Granted ✓
  - Microsoft Graph / User.Read.All  / Application / Granted ✓


---

## Confirm the target security group exists

The script reads the group by its **Display Name** — the name shown in
the Entra ID groups list.

1. In the left-hand menu of Microsoft Entra ID, click **Groups**.
2. Search for the group you intend to sync.
3. Confirm:
   - The group exists and the display name is exactly as you will pass
     to `--entra-group` (spelling and capitalisation must match).
   - The group type is **Security** (not Microsoft 365).
   - All members of the group have a **primary email address** set on
     their user profile. To check a user's primary email:
       a. Go to **Users**, find the user, open their profile.
       b. Look for the **Email** field under Contact information.
       c. This must be populated — if it is blank the user will be
          skipped by the script with a warning.


---

## Rotating the client secret (annual maintenance)

Client secrets expire. Before expiry:

1. Go to the app registration → **Certificates & secrets**.
2. Click **+ New client secret**, create a new one, copy the value.
3. Update the `--entra-client-secret` value in your Task Scheduler
   action (or wherever you store it).
4. Verify the script runs successfully with the new secret.
5. Delete the old (expiring) secret from the Certificates & secrets page.

Rotating secrets in this order (create new → update script → verify →
delete old) ensures there is no gap in service.


---

## Summary of values needed by the script

After completing this guide you will have:

  Value                  Where to find it
  ---------------------  -------------------------------------------------
  --entra-domain         Your tenant's domain, e.g. contoso.onmicrosoft.com
                         Visible in Entra ID → Overview → Primary domain
  --entra-client-id      Application (client) ID from the app registration
                         Overview page
  --entra-client-secret  The secret value from **Create a client secret**
  --entra-group          The exact Display Name of the security group
                         from Entra ID → Groups