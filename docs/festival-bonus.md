---
id: festival-bonus
title: Festival Bonus Management
sidebar_label: Festival Bonus
---

# Festival Bonus Management

## 1. Overview

The Festival Bonus Management module helps HR administrators configure, calculate, and manage employee festival bonuses in Odoo.

Users can create reusable bonus templates, define employee eligibility requirements, select calculation methods, add employees, review bonus amounts, and confirm festival bonus records.

### Key Features

- Reusable festival bonus templates
- Fixed amount or percentage-based bonus calculations
- Designation-wise bonus percentage configuration
- Minimum service eligibility
- Minimum and maximum bonus amount settings
- Accounting journal and account configuration
- Bulk employee selection with filters
- Automatic employee eligibility and bonus calculation
- Bonus confirmation and record tracking

---

# Part A — Festival Bonus Template Configuration

![step_1.png](Festival%20Bonus/step_1.png)

## Step 1 — Open Festival Bonus

From the Odoo Home Dashboard, click the **Festival Bonus** application icon.

**Result:** The Festival Bonus module opens.

![step_2_to_6.png](Festival%20Bonus/step_2_to_6.png)

## Step 2 — Open Bonus Templates

Navigate to:

**Festival Bonus → Configuration → Bonus Templates**

Open an existing template or click **New** to create a bonus template.

## Step 3 — Enter Template Name

Enter a descriptive name for the festival bonus template.

**Example:** `Eid-ul Fitr 2027`

## Step 4 — Select Salary Base

Select the salary component used for bonus calculation.

**Example:** `Basic Wage`

## Step 5 — Select Calculation Basis

Choose the applicable calculation basis.

**Example:** `Month Basis (Full Salary %)`

This setting defines how the bonus percentage is applied to the selected salary base.

## Step 6 — Set Minimum Service Requirement

Enter the minimum service period required for employee eligibility.

**Example:** `6 Months`

Employees who do not meet this requirement are identified as ineligible during bonus processing.

---

## Bonus Calculation Methods

The module provides three calculation options. Configure the method that matches the organization's festival bonus policy.

![conditional_step_7_to_8.png](Festival%20Bonus/conditional_step_7_to_8.png)

### Step 7 — If Enable Fixed Amount

If Enable **Use Fixed Amount** to configure a fixed monetary festival bonus.

### Step 8 — Enter Fixed Bonus Amount

Enter the fixed bonus value.

**Example:** `8,000.00`

The configured fixed amount is used for eligible employees, subject to the module's calculation rules.

![conditional_step_9_to_10.png](Festival%20Bonus/conditional_step_9_to_10.png)

### Step 9 — If Enable Designation-Wise Bonus

If Enable **Use Designation-wise Bonus %** to define different bonus percentages for employee categories.

### Step 10 — Configure Designation-Wise Rates

Under **Designation-Wise Bonus Percentage**, click **Add a line**.

Configure the following fields:

| Field | Description |
| --- | --- |
| Company | Applicable company |
| Department | Employee department |
| Employee Type | Employee category |
| Designation | Job position |
| Bonus Percentage | Applicable bonus rate |

**Example:** An Experienced Developer in the Management department receives a configured bonus rate of 20%.

![conditional_step_11_to_12.png](Festival%20Bonus/conditional_step_11_to_12.png)

### Step 11 — If Set Minimum Bonus Amount

Enter the **Minimum Bonus Amount** to configure the lower bonus limit.

**Example:** `5,000.00`

A value of `0.00` indicates that no positive minimum amount has been entered.

### Step 12 — If Set Maximum Bonus Amount

Enter the **Maximum Bonus Amount** to configure the upper bonus limit.

A value of `0.00` is shown in the screenshot. Its treatment depends on the module's calculation logic.

![step_13.png](Festival%20Bonus/step_13.png)

**Step 13 — If Configure Standard Bonus Percentage**

For a standard percentage-based bonus, leave Fixed Amount and Designation-Wise Bonus disabled.

Enter the required value in **Bonus Percentage (%)**.

**Example:** `40.00%`

The module uses the selected salary base and calculation basis when applying the percentage.

![step_14.png](Festival%20Bonus/step_14.png)

## Step 14 — Configure Accounting Settings

Under **Accounting Settings**, configure the journal and accounting accounts used for festival bonuses.

| Field | Example |
| --- | --- |
| Journal | Miscellaneous Operations |
| Expense Account | Salary Expenses |
| Payable Account | Salary Payable |

Review the configured calculation, eligibility, and accounting settings, then save the template.

**Result:** The Festival Bonus Template is ready for use in festival bonus records.

# Part B — Festival Bonus Processing

![step_15_to_16.png](Festival%20Bonus/step_15_to_16.png)

## Step 15 — Open Festival Bonus Records

Navigate to **Festival Bonus → Festival Bonus**.

Click **New** to create a festival bonus record.

## Step 16 — Enter Festival Bonus Name

Enter a descriptive name for the bonus record.

**Example:** `XYZ Group Eid Bonus 2027`

This name helps identify the bonus batch in future records and reports.

![step_17.png](Festival%20Bonus/step_17.png)

## Step 17 — Select Bonus Template

Choose the previously configured bonus template.

**Example:** `Eid-ul Fitr 2027`

The configured calculation, eligibility, and accounting settings are populated in the festival bonus record.

Review the **Bonus Applicable Date** before proceeding.

![step_18_to_19.png](Festival%20Bonus/step_18_to_19.png)

## Step 18 — Open Employees Tab

Click the **Employees** tab to view the employee bonus details.

The table includes employee information, service duration, eligibility, salary amount, bonus percentage, and calculated bonus amount.

## Step 19 — Bulk Add Employees

Click **Bulk Add Employees** to open the employee selection wizard.

This option allows multiple employees to be added to the bonus record.

![step_20.png](Festival%20Bonus/step_20.png)

## Step 20 — Filter and Select Employees

Use the available filters to select the required employees.

| Filter | Purpose |
| --- | --- |
| Company | Select employees by company |
| Department | Filter by department |
| Designation | Filter by job position |
| Employee Type | Filter by employee category |
| Gender | Filter by gender |
| Religion | Filter by religion |

Review the selected employees and click **Add Employees**.

**Result:** The selected employees are added to the festival bonus record.

---

# Part C — Bonus Calculation & Confirmation

![step_21_to_22.png](Festival%20Bonus/step_21_to_22.png)

## Step 21 — Review Employee Eligibility and Bonus Amounts

After adding employees, review the calculated bonus information in the Employees tab.

The system displays:

| Column | Description |
| --- | --- |
| Employee | Employee name |
| Job Position | Employee designation |
| Joining Date | Employment joining date |
| Months | Completed service months |
| Days | Service duration in days |
| Eligibility | Eligibility status |
| Salary Amount | Salary value used in calculation |
| % | Applied bonus percentage |
| Bonus Amount | Calculated bonus |
| Adjusted | Adjustment indicator |

Employees meeting the minimum service requirement are marked **Eligible**.

Employees with insufficient service or missing joining dates are identified with eligibility messages.

The **Total Bonus** field summarizes the bonus amount for the record.

**Screenshot Example:**

**Total Bonus: 21,716.00**

Review the employee details and calculated amounts before confirming the record.

![step_21_to_22.png](Festival%20Bonus/step_21_to_22%201.png)

## Step 22 — Confirm Festival Bonus

After reviewing the bonus calculation, click **Confirm**.

The record moves from **Draft** to **Confirmed** status.

**Result:** The festival bonus record is confirmed.

Confirmation does not necessarily mean that salary payments or accounting entries have been posted.

![step_23.png](Festival%20Bonus/step_23.png)

## Step 23 — Review Confirmed Bonus Record

Navigate to **Festival Bonus → Festival Bonus** to view the confirmed record in the list.

The list displays the festival name, applicable date, template, bonus percentage, calculation basis, total bonus, and status.

### Example Confirmed Record

| Field | Value |
| --- | --- |
| Festival Name | XYZ Group Eid Bonus 2027 |
| Bonus Applicable Date | Nov 8 |
| Bonus Template | Eid-ul Fitr 2027 |
| Bonus Percentage | 40.00% |
| Calculation Basis | Month Basis (Full Salary %) |
| Total Bonus | 21,716.00 |
| Status | Confirmed |

---

# Complete Workflow Summary

```
Odoo Home Dashboard
        ↓
Open Festival Bonus
        ↓
Configuration → Bonus Templates
        ↓
Create / Configure Bonus Template
        ↓
Select Salary Base & Calculation Basis
        ↓
Set Minimum Service Requirement
        ↓
Choose Bonus Calculation Method
        ├── Fixed Amount
        ├── Designation-Wise Percentage
        └── Standard Percentage
        ↓
Configure Bonus Limits & Accounting
        ↓
Save Bonus Template
        ↓
Festival Bonus → New
        ↓
Enter Festival Bonus Name
        ↓
Select Bonus Template
        ↓
Open Employees Tab
        ↓
Bulk Add Employees
        ↓
Apply Employee Filters
        ↓
Review Eligibility & Bonus Calculation
        ↓
Review Total Bonus
        ↓
Confirm Festival Bonus
        ↓
Review Confirmed Record
```

---

# Important Notes for Users

**Bonus Calculation:** The calculation depends on the selected template, salary base, calculation basis, and applicable bonus rules.

**Employee Eligibility:** Employees must meet the configured minimum service requirement. Missing employment details may affect eligibility.

**Bonus Limits:** Minimum and maximum bonus values should be configured according to company policy.

**Employee Selection:** Review employee filters carefully before adding employees in bulk. Sensitive attributes, such as religion, should be used only when necessary and authorized under applicable policy and law.

**Accounting Settings:** Verify the Journal, Expense Account, and Payable Account before processing accounting-related activities.

**Confirmation:** Confirm the bonus only after reviewing employee eligibility and calculated bonus amounts.