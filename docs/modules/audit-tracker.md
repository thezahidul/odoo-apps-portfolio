---
slug: /
title: Audit Tracker Manual
---


## User Manual — Application Configuration & Audit Log Monitoring

---

## 1 Overview

Advanced Audit Tracker is an Odoo application designed to monitor and record changes made to business data across selected Odoo applications.

The system helps organizations maintain visibility over who created, modified, or deleted records and when those actions occurred.

Administrators can configure audit tracking without manually selecting every technical model. By selecting an installed application, the system can automatically identify and display the related target models.

## 1.2 Key Features

- Application-based audit tracking
- Multiple application selection
- Automatic target model selection
- Create, Update, and Delete monitoring
- User-specific tracking
- Company-specific tracking
- Field-level change history
- Centralized audit event logs
- Application-based search and filtering
- Audit log grouping and review

---

# 2. Accessing the Audit Tracker

![step_1.png](/img/audit_tracker/step_1.png)

## Step 1 — Open Audit & Security

**Screenshot Reference: Step 1 — Odoo Home Dashboard**

From the Odoo home dashboard, locate the **Audit & Security** application icon.

Click the icon to open the Audit Tracker.

The application provides access to Audit Logs and Configuration.

**Expected Result:** The Audit & Security application opens successfully.

---

# 3. Opening Audit Rule Configuration

![step_2.png](/img/audit_tracker/step_2.png)

## Step 2 — Navigate to Audit Rules

**Screenshot Reference: Step 2 — Configuration Menu**

From the Audit & Security application:

1. Click **Configuration** in the top navigation.
2. Select **Audit Rules** from the dropdown menu.

The Audit Rules page displays existing tracking rules and provides the option to create new rules.

**Navigation Path:**

`Audit & Security → Configuration → Audit Rules`

## Step 3 — Create a New Audit Rule

![step _3_4.png](/img/audit_tracker/step__3_4.png)

**Screenshot Reference: Step 3 — Rule Name**

Click **New** to create an audit rule.

Enter a descriptive rule name in the Rule Name field.

For example:

`Account Track`

The name should clearly identify the purpose of the rule.

Other examples include:

- Sales Tracking
- Inventory Tracking
- Accounting Tracking
- Sales & Inventory Monitoring

**Recommended Practice:** Create meaningful names that make it easy to identify the business applications being monitored.

---

# 4. Application Selection

## Step 4 — Select Applications

**Screenshot Reference: Step 4 — Applications Dropdown**

Locate the **Applications** field under Target Configuration.

Click the selection field to display the installed Odoo modules available for tracking.

For example:

| Application | Description |
| --- | --- |
| Sales | Sales Orders and related business activities |
| Invoicing | Invoices, Journals, and Accounting Records |
| Inventory | Transfers, Stock Movements, and Warehouse Records |
| Barcode | Barcode-related operations |
| Discuss | Communication-related models |

Select the required application.

For this example, select **Invoicing**.

**Important:** The application list may include supporting Odoo modules in addition to primary business applications. Users should select only the applications they need to monitor.

Multiple applications can be selected within a single rule.

---

# 5. Configuring Automatic Model Tracking

![step_5_6_7_8.png](/img/audit_tracker/step_5_6_7_8.png)

## Step 5 — Review the Automatically Selected Target Models

**Screenshot Reference: Step 5 — Target Models**

After selecting an application, the Audit Tracker automatically identifies associated eligible target models.

The **Model Selection** field displays:

`Automatic`

The Target Models field is populated without requiring manual model selection.

For the Invoicing application, target models may include:

| Target Model | Purpose |
| --- | --- |
| Account | Accounting account configuration |
| Journal | Accounting journals |
| Journal Entry | Financial transactions |
| Journal Item | Individual accounting entry lines |
| Payments | Payment-related records |
| Tax | Tax configuration |
| Bank Statement | Bank statement records |
| Product | Shared product information |

The exact models depend on installed Odoo modules and the configured model-discovery rules.

### Automatic vs. Manual Model Selection

**Automatic Mode**

The system automatically identifies and selects eligible models associated with the selected applications.

This mode is recommended for most users.

**Manual Mode**

An administrator can manually select specific target models when more precise tracking is required.

This mode is recommended for advanced configurations.

**Expected Result:** The selected application and its automatically resolved target models are displayed in the Audit Rule form.

---

# 6. Configuring Tracking Operations

## Step 6 — Enable Create Tracking

**Screenshot Reference: Step 6 — Track Create**

Enable **Track Create** to monitor newly created business records.

Example:

A user creates a new customer invoice.

The system can record:

- Acting user
- Date and time
- Target model
- Created record
- Create operation

## Step 7 — Enable Update Tracking

**Screenshot Reference: Step 7 — Track Update**

Enable **Track Update** to monitor modifications to existing records.

Example:

A user changes an invoice's editable information.

The Audit Tracker can record the modified fields and their previous and new values.

**Example of Field Change History:**

| Field | Previous Value | New Value |
| --- | --- | --- |
| Payment Reference | REF-001 | REF-002 |
| Description | Original Description | Updated Description |

Actual captured fields depend on the configured models and field filters.

## Step 8 — Enable Delete Tracking

**Screenshot Reference: Step 8 — Track Delete**

Enable **Track Delete** to monitor record deletion.

Example:

A user deletes an eligible draft business record.

The Audit Tracker can preserve an audit event identifying the deleted record and the user responsible for the operation.

**Important:** Delete Tracking records deletion events; it does not automatically restore deleted business records.

### Operation Summary

| Operation | Recommended Configuration |
| --- | --- |
| Track Create | Enabled |
| Track Update | Enabled |
| Track Delete | Enabled |

For complete basic CRUD monitoring, enable all three operations.

---

# 7. Configuring User Tracking Scope

![step_9_to_13.png](/img/audit_tracker/step_9_to_13.png)

## Step 9 — Select the User Scope

**Screenshot Reference: Step 9 — User Scope**

Open the **Scope & Exclusions** tab.

Under the Users section, locate **User Scope**.

The system provides three scope options.

| User Scope | Behavior |
| --- | --- |
| All Internal Users | Monitors applicable activities performed by internal users |
| Selected Users Only | Monitors only the specified users |
| All Except Excluded Users | Monitors applicable users except those explicitly excluded |

For this example, select:

`Selected Users Only`

## Step 10 — Select the Users to Monitor

**Screenshot Reference: Step 10 — Selected Users**

After choosing Selected Users Only, the **Selected Users** field becomes available.

Click the field and select the required user.

In the provided example:

`Administrator`

Only operations matching the selected user scope are eligible for logging under this rule.

**Important:** When Selected Users Only is enabled, at least one user must be selected.

If the organization wants to monitor all applicable internal users, select All Internal Users instead.

---

# 8. Configuring Company Tracking Scope

## Step 11 — Select the Company Scope

**Screenshot Reference: Step 11 — Company Scope**

Under the Companies section, locate **Company Scope**.

Two options are available.

| Company Scope | Behavior |
| --- | --- |
| All Applicable Companies | Tracks eligible activities across applicable companies |
| Selected Companies Only | Tracks activities associated with selected companies |

For this example, select:

`Selected Companies Only`

## Step 12 — Select the Company

**Screenshot Reference: Step 12 — Companies Field**

After selecting Selected Companies Only, the **Companies** field becomes available.

Choose the company that should be monitored.

In the provided example:

`My Company`

The rule will apply to matching operations associated with the selected company.

**Important:** If Selected Companies Only is enabled, at least one company must be selected.

Tracking a company's activities does not automatically grant users permission to view that company's audit records. Audit Log access remains subject to the configured security permissions.

---

# 9. Saving the Audit Rule

## Step 13 — Save the Configuration

**Screenshot Reference: Step 13 — Saved Audit Rule**

After completing the configuration, save the Audit Rule using the available save control.

Before saving, review the following information:

| Configuration | Example |
| --- | --- |
| Rule Name | Account Track |
| Application | Invoicing |
| Model Selection | Automatic |
| Target Models | Automatically populated |
| Track Create | Enabled |
| Track Update | Enabled |
| Track Delete | Enabled |
| User Scope | Selected Users Only |
| Selected User | Administrator |
| Company Scope | Selected Companies Only |
| Company | My Company |
| Active | Enabled |

Once saved successfully, the rule becomes available in the Audit Rules list.

**Expected Result:** The Audit Rule is stored and the configured tracking settings remain visible when the rule is reopened.

---

# 10. Reviewing Existing Audit Rules

![step_15.png](/img/audit_tracker/step_15.png)

## Step 14 — Open the Audit Rules List

**Screenshot Reference: Step 14 — Audit Rules List View**

Navigate to:

`Audit & Security → Configuration → Audit Rules`

The list displays the existing Audit Rules.

In the provided screenshots, the following examples are configured:

- Sales
- Inventory
- Account Track

The Audit Rule List includes:

| Column | Description |
| --- | --- |
| Name | Audit Rule name |
| Applications | Selected application or applications |
| Model Selection | Automatic or Manual |
| Target Models | Configured target models |
| Track Create | Create monitoring status |
| Track Update | Update monitoring status |
| Track Delete | Delete monitoring status |
| Active | Whether the rule is enabled |

Administrators can use this page to review configurations and open a rule to make adjustments.

**Recommended Practice:** Periodically review existing rules to avoid unnecessary tracking and ensure the intended applications remain monitored.

---

# 11. Viewing Audit Event Logs

## Step 15 — Open Audit Logs

**Screenshot Reference: Audit Logs Navigation**

From the top navigation, click **Audit Logs**.

This opens the Audit Event Logs page.

**Navigation Path:**

`Audit & Security → Audit Logs`

The Audit Event Logs page provides a centralized history of captured operations.

### Audit Log Information

| Column | Description |
| --- | --- |
| Timestamp | Date and time of the operation |
| User | User responsible for the operation |
| Application | Classified business application |
| Operation | Create, Update, or Delete |
| Model Technical Name | Odoo model affected |
| Record ID | Technical record identifier |
| Record Display Name | Name of the business record |

Example:

| Application | Operation | Model |
| --- | --- | --- |
| Sales | Create | `sale.order` |
| Sales | Update | `sale.order.line` |
| Sales | Delete | `sale.order.line` |
| Products / Shared | Create | `product.product` |

Click an Audit Event to view its details and available field-change history.

---

# 12. Searching, Filtering, and Grouping Audit Logs

![step_16.png](/img/audit_tracker/step_16.png)

## Step 16 — Use Audit Log Filters

**Screenshot Reference: Step 16 — Search, Filter & Group By**

Click the search dropdown on the Audit Event Logs page.

The search interface provides operation filters, application filters, and grouping options.

### A. Filter by Operation

Select the required operation:

| Filter | Result |
| --- | --- |
| Creates | Displays Create events |
| Updates | Displays Update events |
| Deletes | Displays Delete events |

### B. Filter by Application

Select the required application:

| Filter | Result |
| --- | --- |
| Sales | Displays events classified as Sales |
| Inventory | Displays events classified as Inventory |
| Accounting | Displays events classified as Accounting |
| Purchase | Displays events classified as Purchase |
| Products / Shared | Displays events classified as shared product activities |

Available filters depend on the installed version and configuration.

### C. Group Audit Events

Use the **Group By** section to organize records.

Available options shown in the screenshots:

- Application
- User
- Model
- Operation
- Date

**Example: Group By Application**

The system groups audit records according to their application classification.

```
Audit Event Logs
│
├── Sales
│   ├── Sales Order Created
│   ├── Sales Order Updated
│   └── Sales Order Line Deleted
│
└── Products / Shared
    ├── Product Created
    └── Product Updated
```

**Note:** Product Models may be classified as Products / Shared because those models are used by multiple business applications. This classification does not necessarily identify which application screen originally initiated the change.

---

# 13. Recommended Configuration Examples

## Example A — Sales Activity Monitoring

| Setting | Configuration |
| --- | --- |
| Rule Name | Sales |
| Application | Sales |
| Model Selection | Automatic |
| Create Tracking | Enabled |
| Update Tracking | Enabled |
| Delete Tracking | Enabled |
| User Scope | All Internal Users |
| Company Scope | All Applicable Companies |
| Active | Yes |

**Purpose:** Monitor eligible Sales Orders and related Sales Models.

## Example B — Inventory Activity Monitoring

| Setting | Configuration |
| --- | --- |
| Rule Name | Inventory |
| Application | Inventory |
| Model Selection | Automatic |
| Create Tracking | Enabled |
| Update Tracking | Enabled |
| Delete Tracking | Enabled |
| User Scope | All Internal Users |
| Company Scope | All Applicable Companies |
| Active | Yes |

**Purpose:** Monitor eligible Inventory Transfers, Stock Movements, and other selected Inventory Models.

## Example C — Accounting Activity Monitoring

| Setting | Configuration |
| --- | --- |
| Rule Name | Account Track |
| Application | Invoicing |
| Model Selection | Automatic |
| Create Tracking | Enabled |
| Update Tracking | Enabled |
| Delete Tracking | Enabled |
| User Scope | Selected Users Only |
| Selected User | Administrator |
| Company Scope | Selected Companies Only |
| Selected Company | My Company |
| Active | Yes |

**Purpose:** Monitor eligible accounting-related record operations performed by the Administrator in My Company.

---

# 14. Understanding Important Settings

## Track All Fields

When Track All Fields is enabled, the Audit Tracker attempts to capture supported field modifications according to its tracking rules.

Sensitive or excluded fields should remain protected.

## Active

The Active switch controls whether the Audit Rule participates in monitoring.

An inactive rule should not capture new events under that rule.

Previously recorded Audit Events remain part of the existing history, subject to retention policies.

## Model Selection

Automatic Mode is intended to simplify configuration.

Manual Mode provides more advanced control over monitored models.

## User and Company Scope

User Scope determines whose activities match the rule.

Company Scope determines which business companies match the rule.

Both conditions must be satisfied for an operation to match the configured scope.

---

# 15. Troubleshooting

| Issue | Recommended Action |
| --- | --- |
| Audit & Security is not visible | Contact the system administrator to verify application/menu access |
| Audit Rules menu is missing | Verify Audit Manager permissions |
| New button is not available | Verify Create permission for Audit Rules |
| Application is missing | Confirm the application is installed and eligible for selection |
| Target Models are empty | Verify Automatic Mode and selected applications |
| No Audit Events appear | Check that the rule is active, the model is included, and the operation is enabled |
| A specific user's events are missing | Review User Scope and selected/excluded users |
| A company's events are missing | Review Company Scope and permissions |
| Product activity appears under Products / Shared | This may be expected for shared product models |
| Old and New Values are missing | Check supported fields, field filters, and the type of operation |

---

# 16. Best Practices

For effective Audit Tracking:

1. Enable tracking only for applications relevant to organizational monitoring.
2. Use descriptive Audit Rule names.
3. Prefer Automatic Model Selection for standard configuration.
4. Review automatically selected models before enabling broad monitoring.
5. Restrict Audit Rule configuration to authorized administrators.
6. Apply User and Company Scopes carefully.
7. Review Audit Logs regularly.
8. Avoid exposing confidential information in audit records.
9. Keep unnecessary high-volume tracking disabled where possible.
10. Test major rule changes before applying them to production.

---

# 17. End-to-End Workflow Summary

```
Odoo Home Dashboard
        ↓
Step 1: Open Audit & Security
        ↓
Step 2: Configuration → Audit Rules
        ↓
Step 3: Create a New Audit Rule
        ↓
Step 4: Select Applications
        ↓
Step 5: Review Automatic Target Models
        ↓
Step 6: Enable Create Tracking
        ↓
Step 7: Enable Update Tracking
        ↓
Step 8: Enable Delete Tracking
        ↓
Step 9: Configure User Scope
        ↓
Step 10: Select Users (if required)
        ↓
Step 11: Configure Company Scope
        ↓
Step 12: Select Companies (if required)
        ↓
Step 13: Save the Audit Rule
        ↓
Step 14: Review Audit Rules
        ↓
Step 15: Open Audit Event Logs
        ↓
Step 16: Search, Filter & Group Audit Events
```

---

# 18. Conclusion

Advanced Audit Tracker provides a centralized solution for monitoring supported record changes across selected Odoo applications.

Its application-based configuration reduces the need for users to understand Odoo's technical model structure, while User and Company Scopes provide flexibility over which activities are monitored.

The Audit Event Logs interface allows authorized personnel to review operations and organize recorded activities through search filters and grouping.

By following the steps in this guide, administrators can configure audit monitoring and review recorded events using the existing Odoo interface.
