# Document migration GitHub action

## Setup and credentials

1. Copy the `github` folder to your local file system. Rename it to `.github`and push it into the root of Ansys repository.
2. On the GitHub administrative UI of the Ansys repository, navigate to Settings > Secrets and varaibles > Actions page.
3. On the "Secrets" tab scroll to the "Repository secrets" section.
4. Click on the "New repository secret" button and add the following secrets:
    * **Name:** BASIC_AUTH_PASSWORD_ACCEPT, **Secret:** [Copy the corresponding value from the `secrets.json` file]
    * **Name:** BASIC_AUTH_USERNAME_ACCEPT, **Secret:** [Copy the corresponding value from the `secrets.json` file]
    * **Name:** CLIENT_ID_ACCEPT, **Secret:** [Copy the corresponding value from the `secrets.json` file]
    * **Name:** CLIENT_ID_ACCEPT, **Secret:** [Copy the corresponding value from the `secrets.json` file]
5. On the Settings > Secrets and variables > Actions page, click on the "Variables" tab and scroll to the "Repository variables" section.
6. Click on the "New repository variable" button and add the following variable:
    * **Name:** BASE_URL_ACCEPT, **Value:** [Copy the corresponding value from the `vars.json` file]

## Usage

Once the GitHub action (the `.github` folder and its content) has been
committed to the repository and the credentials are also set, the script will
automatically detect any push or merge changes in the `.../versions/YYY.RX.SPXX`
product documentation directories in the `accept` branch (only in the `accept`
branch - if it does not exist yet, it needs to be created). If the `docfx.json`
file is present in the product directory, and it contains all required metadata
then the script will create a new migration job on the devportal and puts it
into a queue for later processing.

The devportal automatically runs migrations jobs from the queue in every 15
minutes. The list of migration jobs and their status can be monitored on the
Structure > Migrations > Migration jobs administrative page.
