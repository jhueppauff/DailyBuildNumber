# DailyBuildNumber

This App demonstrates the Power off Serverless Computing. The Backend is Powered by Azure Functions.
The Frontend is servered by and React/Typescript Client running on top of Azure Storage (Static Website Feature).

## How to Build

To build the Azure Function download the latest Azure Function SDK Tools (v2).
Use either Visual Studio or Visual Studio Code to Build the Function.

To build the Frontend you need npmjs.
Run ```npm run build```

## How to Deploy

- Use the Arm template to create a function app and storage account in Azure or create them by yourself.
- Deploy the WebClient to the $web blob container in the Storage Account
- Deploy the Function Code to the Function

