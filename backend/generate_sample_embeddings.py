from llm import vector_store
from langchain_core.documents import Document

docs = [
        Document(    
            page_content="""
                






Engagement Name
Cloud Services Category


DIR Customer Name

					






DATE
Introduction
Describe the cloud services to be delivered to [Department/Agency] with regard to [Application Name] and the characteristics of the associated services at a summary level. The statement of work (SOW) is unique and distinct for each engagement. 
Background
The [Department/Agency] seeks cloud services to [Explain customer business problem or reason for seeking cloud services].  Provide useful information regarding the Customer organization, engagement history, future plans or any other relevant information regarding the services to be acquired.
Scope
The goal of this SOW is to provide [Department/Agency] the ability to take advantage of rapidly developing offerings and changing pricing models in Cloud Services. The scope focuses on offering [type of cloud service e.g., IAAS, PAAS, Cloud Broker] for the following activities: 
[List all application activities requiring cloud services, e.g., Cloud Storage Services, Virtual Machines, etc.] 
Sample Content
	Engagement-Based Services
Scope of work
Engagement risks, assumptions and constraints
Roles and responsibilities
Detailed description of service
Acceptance criteria
Engagement completion criteria
Engagement schedules to be achieved by vendor

	Cloud Computing Services

The requirements focus on the [type of cloud service offering] and are divided into the following categories: 

General Cloud Computing Requirements – specifies general requirements for cloud services
Common Technical Requirements – specifies the technical requirements for enabling [type of cloud service] offering
Specific Application Technical Requirements – specifies the requirements for service offerings described in SOW
The [Department/Agency] retains ownership of any user created/loaded data and application(s) hosted on vendor’s infrastructure, and maintains right to request full copies of these at any time. 
General Cloud Computing Requirements

The Vendor shall provide a Cloud Computing solution that aligns to the following general cloud computing requirements as described in Table 1 below. [Agency should specify requirements such as: operating system, memory, storage, VPN, WAN, Processing speed, other software or software licenses required, additional services required such as active directory support, backups, and recovery services.]

Table 1: General Cloud Computing Requirement - Include as applicable; add others as needed.


Common Technical Requirements

The Vendor shall provide a solution that aligns to the following technical requirements as described in Tables 2-6 below. (List provided is not all inclusive)

Table 2:  Common Technical Requirements – Service Managing and Provisioning 
Include as applicable; add others as needed.



Table 3:  Common Technical Requirements – User/Admin/Cloud Broker Portal Requirements Include as applicable; add others as needed.


Table 4:  Common Technical Requirements – Integration Requirements 
Include as applicable; add others as needed. Customers should include third-party or custom software that require specific integration, operating system or platform requirements.


Table 5:  Common Technical Requirements – Data Center Facilities Requirements 
Include as applicable; add others as needed.


Table 6:  Common Technical Requirements – Compliance & Standards Requirements 
Include as applicable; add others as needed.



Specific Application Technical Requirements

The Vendor shall provide a solution that aligns to the following technical requirements as described in Table 7 below. (List provided is not all inclusive)

Table 7: Specific Application Technical Requirements - Include as applicable; add others as needed.



	Services
Sample Content 
(Example – at a minimum, Customers should consider the following items when developing their SOW)
Services must be provided on the dates specified. Any changes to the delivery date must have prior approval (in writing) by the Customer contract manager or designate. 
All services must be submitted in a format approved by the Customer contract manager. 
If the services cannot be provided within the scheduled time frame, the Vendor is required to contact the Customer contract manager in writing with a reason for the delay and the proposed revised schedule. The request for a revised schedule must include the impact on related tasks and the overall engagement. 
A request for a revised schedule must be reviewed and approved by the Customer contract manager before placed in effect. Contract Terms and Conditions may dictate penalties, costs, and other actions based on the facts related to the request for a revised schedule.

Reports
Sample Content (Example – at a minimum, Customers should consider the following items when developing their SOW)
Cloud Services vendors provide standard reports and may provide some custom reports. Customers should discuss their reporting requirements with the vendor prior to executing a purchase order. Table 8 contains a list of sample report deliverables that vendors may provide. 





Table 8: Sample Reports 
















		Service Levels
Cloud service levels will be provided and may vary from one cloud service provider to another or one cloud service to another. Customers should discuss their service level requirements with the vendor prior to executing a purchase order. Examples of service levels to be considered include: 

Security (as defined by customer)
Quality (as defined by customer)
Availability (data, system, and components)
Performance (transmission, response, or completion times)
Meantime to Resolution (MTR)
Incident Notification and Response
Business Continuity
ISO/ANSI Standards
IEEE standards
Reliability 
Previous System or Service Retired on Time

	Period of Performance
Specify the period of performance in which the Vendor will conduct and complete the work associated with the SOW. 
	Invoices
Describe the Vendor’s responsibilities for invoicing Customer including invoice content, frequency/schedule and instructions for submitting invoices.  Payments will be made in accordance with Appendix A, Purchase Orders, Invoices, and Payments, of the Contract.
Additional Customer Terms and Conditions
List any additional terms and conditions required by the Customer.  Customers may negotiate the terms and conditions of a SOW to suit their business needs so long as the SOW terms and conditions do not conflict or weaken the DIR master contract.
	Vendor Response

Sample Content (Example – at a minimum, Customers should consider the following items when developing their SOW)
All responses to this SOW must be  phrased in terms and language that can be easily understood by non-technical personnel (e.g., laypersons without subject matter expertise) 
All documents must be in formats (hard copy and electronic) as specified by the Customer - at a minimum, the formats must be in industry accepted standards (e.g., MS Word, MS PowerPoint, MS Project) 
The Vendor must demonstrate its knowledge and expertise related to the services in this SOW. 
Outline of capability to deliver the required services, including process, functional and technical expertise
Engagement plans for services or transition 
Agreed on SOW for services
	Pricing
The main purpose of this section is to detail the pricing for the cloud services.  Vendors should also provide a summary of any assumptions and exclusions.

Sample Pricing Sheet



	Response Submission Requirements
Sample Content
SOW schedule of events: deadline for questions, deadline for answering questions, response due date
Address for response submission
Number of copies
Mandatory response contents
            """,
            metadata={"id": 1, "fileName": "TEXAS_DIR_SOW"},
        ),
    ]

vector_store.add_documents(docs, ids=[doc.metadata["id"] for doc in docs])