> [!IMPORTANT]
> This repo is archived for now due to the SAP Gateway demo system being de-commissioned.

____

# UI5 Basic Template

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/boghyon/gitpod-ui5-basic)

A basic OpenUI5 application template for quick prototyping, bug reporting, and testing. Works seamlessly in Gitpod cloud development environments.

## Quick Start

### Prerequisites

You need credentials for the SAP Gateway Demo System (ES5). Get them here:
- [SAP Gateway Demo System Signup](https://developers.sap.com/tutorials/gateway-demo-signup.html)

### Setup

1. **Configure Gitpod User Variables**
   
   Go to [Gitpod User Variables](https://gitpod.io/user/variables?oldLogin=true) and add:
   - Variable: `UI5_ODATA_ES5_PROXY_USERNAME` --> Your SAP ES5 username
   - Variable: `UI5_ODATA_ES5_PROXY_PASSWORD` --> Your SAP ES5 password
   - Scope: `*/*` for all repositories

2. **Open in Gitpod**
   
   Click the badge at the top or use:
   ```
   https://gitpod.io/#https://github.com/boghyon/gitpod-ui5-basic
   ```
   
   Once the `npm install && npm start` are executed, the preview URL will be displayed in the terminal. Click on it to preview the application in a new tab.

## Authentication Notes

### Why Gitpod User Variables are Required

This template uses the SAP Gateway Demo System (ES5) which requires authentication. Gitpod's port forwarding doesn't support browser-based Basic Authentication prompts, so credentials must be pre-configured as user variables.

The `ui5-middleware-simpleproxy` automatically adds the authentication header to all backend requests using the configured username and password.
