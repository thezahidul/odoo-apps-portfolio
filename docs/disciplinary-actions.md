---
id: disciplinary-actions
title: HR Disciplinary Action Management
sidebar_label: Disciplinary Actions
---

## Module Setup and Configuration

![step_1.png](/img/disciplinary_actions/step_1.png)

**Step 1 — Activate the module.** Open **Apps**, search for **HR Disciplinary Action Management**, and click **Activate**.

![step_2.png](/img/disciplinary_actions/step_2.png)

**Step 2 — Open Settings.** From the Odoo home screen, click **Settings**.

![step_3.png](/img/disciplinary_actions/step_3.png)

**Step 3 — Open the user list.** In **Settings**, go to **Users & Companies → Users**.

![step_4_5_6.png](/img/disciplinary_actions/step_4_5_6.png)

*Insert Image 4 (`step_4_5_6.png`) here.*

**Step 4 — Enable developer mode.** Open the user record you want to configure, then add `?debug=1` to the URL as shown and reload the page.

**Step 5 — Assign administrator access.** In the **Access Rights** tab, scroll to **Extra Rights** and select **Disciplinary Administrator** for users who will administer the module.

**Step 6 — Assign employee access.** Select **Disciplinary Employee** for users who need employee-level access, then save the user record.

![step_7.png](/img/disciplinary_actions/step_7.png)

**Step 7 — Open the Disciplinary app.** Return to the Odoo home screen and click **Disciplinary**.

![step_8.png](/img/disciplinary_actions/step_8.png)

**Step 8 — Create an action category.** Go to **Configuration → Action Categories** and click **New**. Enter **Warning** as the **Category Name**, set **Code** to `W` and **Sequence** to `10`, keep **Active** selected, and save.

![step_9_10_11.png](/img/disciplinary_actions/step_9_10_11.png)

*Insert Image 7 (`step_9_10_11.png`) here.*

**Step 9 — Create an action type.** Go to **Configuration → Action Types** and click **New**. Enter **Written Warning** as the **Action Name**, `WW` as the **Code**, and `10` as the **Sequence**.

**Step 10 — Select the action category.** Set **Action Category** to **Warning**.

**Step 11 — Set the applicable severity.** Set **Applicable Severity** to **Minor**, keep **Active** selected, and save the action type.

![step_12_to_17.png](/img/disciplinary_actions/step_12_to_17.png)

*Insert Image 8 (`step_12_to_17.png`) here — Steps 12–17.*

**Step 12 — Open Violation Types.** In the **Disciplinary** app, go to **Configuration → Violation Types** and click **New**.

**Step 13 — Enter the violation name.** Set **Violation Name** to **Behavior Issue**.

**Step 14 — Set the defaults.** Select **Written Warning** as the **Default Disciplinary Action** and **Minor** as the **Default Severity**.

**Step 15 — Require a show cause notice.** Under **Process Requirements**, select **Show Cause Required**.

**Step 16 — Require an investigation.** Select **Investigation Required**.

**Step 17 — Require management approval.** Select **Management Approval Required**, then save the violation type.

**Step 18 —** Describe about that in description field.

![step_19_to_21.png](/img/disciplinary_actions/step_19_to_21.png)

*Insert Image 9 (`step_19_to_21.png`) here — Steps 19–21.*

**Step 19 — Create a case.** Open **Disciplinary Cases** and click **New**.

**Step 20 — Select the employee.** Choose the employee in the **Employee** field and verify the displayed department and job position.

**Step 21 — Check the initial status.** Confirm that the case is in **Draft**. The status bar shows the initial workflow before a violation type is selected.

![step_22_to_25.png](/img/disciplinary_actions/step_22_to_25.png)

*Insert Image 10 (`step_22_to_25.png`) here — Steps 22–25.*

**Step 22 — Enter the incident information.** Complete **Incident Date** and **Incident Location**, then select **Behavior Issue** as the **Violation Type**. Verify that **Severity** is **Minor** and **Proposed Disciplinary Action** is **Written Warning**.

**Step 23 — Check the updated workflow.** After selecting the violation type, verify that the status bar includes the show cause, employee response, and investigation stages.

**Step 24 — Describe the incident.** Open **Incident Details** and enter a factual summary in **Incident Description**.

**Step 25 — Add witnesses and evidence.** Open **Witnesses and Evidence** and record any available witness information or supporting evidence. Review the case details and click **Submit**.

![step_26_28.png](/img/disciplinary_actions/step_26_28.png)

*Insert Image 11 (`step_26_28.png`) here — Steps 26–28.*

**Step 26 — Start HR review.** Open the submitted case and click **Start Review**. Confirm that the case moves to **HR Review**.

**Step 27 — Create the show cause notice.** Click **Create Show Cause**, then complete the notice details and set the response deadline.

**Step 28 — Issue the notice.** Issue the completed notice and verify that the case moves to **Show Cause Issued**.

![step_29_30.png](/img/disciplinary_actions/step_29_30.png)

*Insert Image 12 (`step_29_30.png`) here — Steps 29–30.*

**Step 29 — Sign in as the employee.** Use the employee’s Odoo account to access the notice.

**Step 30 — Submit an explanation.** Go to **Disciplinary → Employee Responses**, open the record marked **Show Cause Issued**, and submit the explanation by the **Response Deadline**.

![step_31_to_33.png](/img/disciplinary_actions/step_31_to_33.png)

*Insert Image 13 (`step_31_to_33.png`) here — Steps 31–33.*

**Step 31 — Open the submitted response.** As an authorized reviewer, open the record in **Employee Responses** and confirm that its status is **Employee Responded**.

**Step 32 — Record the decision.** Read the explanation in the **Employee Response** tab, then click **Accept Explanation** or **Reject Explanation**.

**Step 33 — Check the HR review details.** Open the **HR Review** tab to verify the recorded review details.

![step_34_to_36.png](/img/disciplinary_actions/step_34_to_36.png)

*Insert Image 14 (`step_34_to_36.png`) here — Steps 34–37. The screenshot also contains marker 37.*

**Step 34 — Create an investigation.** Open the disciplinary case at **Response Reviewed** and click **Create Investigation**.

**Step 35 — Conduct the investigation.** At the **Investigation** stage, record the findings and recommendation in the linked investigation.

**Step 36 — Review the findings.** At the **Investigation Review** stage, check the investigation findings and recommendation.

**Step 37 — Submit for management approval.** Once the required review is complete, click **Submit for Management Approval**.

![step_37_to_40.png](/img/disciplinary_actions/step_37_to_40.png)

*Insert Image 15 (`step_37_to_40.png`) here — Steps 37–40.*

**Step 38 — Record the findings and evidence.** Open the **Findings & Evidence** tab and document the findings and supporting evidence.

**Step 39 — Enter the recommendation.** Open the **Recommendation** tab, select the recommended action, and enter the **Completion Date**. Use **Recommendation Notes** to explain the decision. The example shows **Verbal Warning**.

**Step 40 — Complete the investigation.** Click **Complete Investigation** and verify that the investigation status changes to **Completed**. After the investigation is reviewed and approved, return to the disciplinary case and click **Submit for Management Approval**.

![step_41_to_43.png](/img/disciplinary_actions/step_41_to_43.png)

**Step 41 — Verify management approval.** Open the disciplinary case and confirm that its status is **Management Approved**.

**Step 42 — Check the approval details.** Open the **Management Approval** tab and verify **Management Approved By**, **Management Approval Date**, and **Management Approval Notes**.

**Step 43 — Close the case.** Click **Close Case** and confirm that the case status changes to **Closed**.