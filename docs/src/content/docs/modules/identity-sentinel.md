---
title: Identity Sentinel
description: Identity Sentinel is a module to detect personally identifiable information in posts.
---

Identity Sentinel is a module to detect personally identifiable information in posts, and either flag the post or redact the information. You define the amount of generic PII you want to detect to trigger action. Sensitive PII will always warrant action, no matter how many times it is detected.

## PII Categories

### Generic

* Name
* Phone number
* Organization
* Physical address
* Email address
* IP address

### Sensitive

#### Azure Information

* Azure DocumentDB Auth Key
* Azure IAAS Database Connection String and Azure SQL Connection String
* Azure IoT Connection String
* Azure Publish Setting Password
* Azure Redis Cache Connection String
* Azure SAS
* Azure Service Bus Connection String
* Azure Storage Account Key
* Azure Storage Account Key (Generic)
* SQL Server Connection String

#### Financial Accounts

* ABA routing number
* SWIFT code
* Credit card number
* IBAN code

#### Argentina

* Argentina National Identity (DNI) Number

#### Austria

* Austria identity card
* Austria tax identification number
* Austria Value Added Tax (VAT) number

#### Australia

* Australia bank account number
* Australian business number
* Australia Company Number
* Australia driver's license
* Australia medical account number
* Australia passport number
* Australia tax file number

#### Belgium

* Belgium national number
* Belgium Value Added Tax (VAT) number

#### Brazil

* Brazil legal entity number (CNPJ)
* Brazil CPF number
* Brazil National ID Card (RG)

#### Canada

* Canada bank account number
* Canada driver's license number
* Canada health service number
* Canada passport number
* Canada Personal Health Identification Number (PHIN)
* Canada social insurance number

#### Chile

* Chile identity card number

#### China

* China Resident Identity Card (PRC) number

#### European Union (EU)

* EU debit card number
* EU driver's license number
* EU GPS coordinates
* EU national identification number
* EU passport number
* EU Social Security Number (SSN) or equivalent ID
* EU Tax Identification Number (TIN)

#### France

* France driver's license number
* France health insurance number
* France national ID card (CNI)
* France passport number
* France Social Security Number (INSEE)
* France tax identification number (Numéro SPI)
* France Value Added Tax (VAT) number

#### Germany

* German Driver's License Number
* Germany Identity Card Number
* Germany passport number
* Germany Tax Identification Number
* Germany Value Added Tax Number

#### Hong Kong

* Hong Kong Identity Card (HKID) Number

#### Hungary

* Hungary Personal Identification Number
* Hungary Tax identification Number
* Hungary Value Added Tax Number

#### India

* India Permanent Account Number (PAN)
* India Unique Identification (Aadhaar) Number

#### Indonesia

* Indonesia Identity Card (KTP) Number

#### Ireland

* Ireland Personal Public Service (PPS) Number

#### Israel

* Israel National ID
* Israel Bank Account Number

#### Italy

* Italy Driver's License ID
* Italy Fiscal Code
* Italy Value Added Tax Number

#### Japan

* Japan Bank Account Number
* Japan Driver's License Number
* Japan "My Number" (personal)
* Japan "My Number" (corporate)
* Japan Resident Registration Number
* Japan Residence Card Number
* Japan Social Insurance Number (SIN)
* Japan Passport Number

#### Luxembourg

* Luxembourg National Identification Number (Natural persons)
* Luxembourg National Identification Number (Non-natural persons)

#### Malta

* Malta Identity Card Number
* Malta Tax Identification Number

#### New Zealand

* New Zealand Bank Account Number
* New Zealand Driver's License Number
* New Zealand Inland Revenue Number
* New Zealand Ministry of Health Number
* New Zealand Social Welfare Number

#### Philippines

* Philippines Unified Multi-Purpose ID Number

#### Portugal

* Portugal Citizen Card Number
* Portugal Tax Identification Number

#### Singapore

* Singapore National Registration ID Card (NRIC) Number

#### South Africa

* South Africa Identification Number

#### South Korea

* South Korea Resident Registration Number

#### Spain

* Spain DNI
* Spain Social Security Number (SSN)
* Spain Tax Identification Number

#### Switzerland

* Swiss Social Security Number AHV

#### Taiwan

* Taiwan National ID
* Taiwan Resident Certificate (ARC/TARC)
* Taiwan Passport Number

#### United Kingdom

* U.K. Driver's License Number
* U.K. Electoral Roll Number
* U.K. National Health Service (NHS) Number
* U.K. National Insurance Number (NINO)
* U.K. or U.S. Passport Number
* U.K. Unique Taxpayer Reference Number

#### United States

* U.S. Social Security Number (SSN)
* U.S. Driver's License Number
* U.S. or U.K. Passport Number
* U.S. Individual Taxpayer Identification Number (ITIN)
* U.S. Drug Enforcement Agency (DEA) Number
* U.S. Bank Account Number
