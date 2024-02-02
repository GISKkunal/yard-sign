import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Logo from "src/component/Logo";
import ApiConfig from "src/config/APICongig";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  mainBox: {
    maxWidth: "100%",
    minHeight: "100vh",
    backgroundImage: `url(/images/login/loginBackground.png)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "30px 60px",
    "@media (max-width: 600px)": {
      padding: "40px 30px",
    },
    display: "flex",
    flexDirection: "column",
    gap: "26px",
  },
  content: {
    background: "#0B1426",
    borderRadius: "20px",
    padding: "33px 26px",
  },
  mainHeading: {
    fontFamily: "'Noto Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "56px",
    color: "#151515",
  },
  text: {
    fontFamily: "'Noto Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#D9D9D9",
  },
}));
function PrivacyPolicy() {
  const classes = useStyles();
  const [data, setData] = useState({})
  const navigate = useNavigate();
 const getSingleStaticContent = async () => {
      try {
          const res = await Axios({
              method: "GET",
              url: ApiConfig.getSingleStaticContent,
              params: {
                type: "user-agreement"
              }
          });
  
          if (res.data.statusCode === 200) {
            setData(res.data.result[0]);

          }
      } catch (error) {
          console.log("error")
      }
  }
  useEffect(()=>{getSingleStaticContent()},[])
  const html =
    '<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c0{border-right-style:solid;padding-top:0pt;border-top-width:0pt;border-right-width:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.15;border-left-width:0pt;border-top-style:solid;background-color:transparent;border-left-style:solid;border-bottom-width:0pt;border-bottom-style:solid;orphans:2;widows:2;text-align:left;padding-right:0pt}.c2{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c7{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c5{text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c8{background-color:transparent;max-width:451.4pt;padding:72pt 72pt 72pt 72pt}.c6{color:#ffffff;font-weight:400}.c1{color:#1E92AA;font-weight:700}.c4{color:#ffffff}.c3{height:11pt}.c9{background-color:transparent}.title{padding-top:0pt;color:#ffffff;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#ffffff;font-size:11pt;font-family:"Arial"}p{margin:0;color:#ffffff;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#ffffff;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#ffffff;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c8 doc-content"><p class="c0"><span class="c1">Terms of Service Agreement<br><br></span></p><p class="c0"><span class="c2">Before registering as a user of OLYMPUS (hereinafter referred to as &quot;the Service&quot;), please carefully read this &quot;User Service Agreement&quot; (hereinafter referred to as &quot;Agreement&quot;) to ensure that you fully understand its terms. Please read and choose whether to accept or reject this Agreement. By agreeing and clicking to confirm the terms of this Agreement and completing the registration process, you can become an officially&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; registered user of OLYMPUS and enjoy the various services provided. Your registration, login, and use of the Service will be considered as acceptance of this Agreement, and you agree to be bound by its terms. If you do not agree to this Agreement, or if you have any questions about its terms, please immediately stop the user registration process and choose not to use the Service.</span></p><p class="c0 c3"><span class="c2"></span></p><p class="c0"><span class="c2">This Agreement outlines the rights and obligations between OLYMPUS and its users. &quot;Users&quot; refer to individuals and entities who register, log in, and use the Service. OLYMPUS reserves the right to update this Agreement at any time. Once the updated terms are announced, they will replace the original terms without prior notice. Users can check the latest version of the Agreement on the homepage of the OLYMPUS website. If a user does not accept the modified terms after they have been updated, they must immediately stop using the Service provided by OLYMPUS. The user&#39;s continued use of the Service provided by OLYMPUS will be considered as acceptance of the modified Agreement.</span></p><p class="c0 c3"><span class="c2"></span></p><p class="c0"><span class="c1 c9">1.Account registration </span><span class="c5 c1">for OLYMPUS</span></p><p class="c0"><span class="c2">1.Users must register an &quot;OLYMPUS&quot; account before accessing the service. The account can be registered by providing a mobile phone number or email address that has not been previously associated with an &quot;OLYMPUS&quot; account, and a mobile phone number that has not been blocked by &quot;OLYMPUS&quot; as per this agreement. Email registration is also accepted.</span></p><p class="c0"><span class="c2">2.In case the registration applicant has a history of being banned by &quot;OLYMPUS&quot; or is suspected of false registration, using another person&#39;s identity, or engaging in other prohibited activities, &quot;OLYMPUS&quot; reserves the right to reject their registration application.</span></p><p class="c0"><span class="c2">3.By using the binding registration method of &quot;OLYMPUS&quot; account, users agree to allow their mobile phone number or email address, and mobile device identification code to be used during the registration process.</span></p><p class="c0"><span class="c4">4.During the registration and usage of the service, &quot;OLYMPUS&quot; will collect personal information that can be used to identify the user. This information will be used to contact the user when necessary and to provide a better experience.<br><br></span><span class="c1 c5">2.Account Security for OLYMPUS</span></p><p class="c0"><span class="c2">1.After successfully registering and becoming an &quot;OLYMPUS&quot; user, the user will receive a username and password, which can be used to log in to &quot;OLYMPUS&quot; at any time.</span></p><p class="c0"><span class="c2">2.The user is solely responsible for the security of their username and password and all activities carried out under their account.</span></p><p class="c0"><span class="c2">3.The user should keep their password safe and not share it with others. Any losses incurred due to improper password storage will be the user&#39;s responsibility.</span></p><p class="c0"><span class="c2">4.In the event of a password leak or any threat to the security of the user&#39;s password, the user must immediately contact the &quot;OLYMPUS&quot; customer service staff to avoid any potential legal consequences. Otherwise, the user will be held responsible for any negative outcomes that may arise.</span></p><p class="c0"><span class="c1">3.User Declaration and Commitments for OLYMPUS</span></p><p class="c0"><span class="c2">1.The user declares and guarantees that they have full legal capacity as a civil subject and are capable of entering into contracts.</span></p><p class="c0"><span class="c2">2.Users are required to provide accurate information, such as their mobile phone number or email address, during the registration process and ensure that it is valid and secure. This enables the &quot;OLYMPUS&quot; staff to contact the users using the provided information. </span></p><p class="c0"><span class="c2"><br>Additionally, users must promptly update their registration information when changes occur.</span></p><p class="c0 c3"><span class="c2"></span></p><p class="c0"><span class="c5 c1">4.Service Content for OLYMPUS</span></p><p class="c0"><span class="c2">1.The OLYMPUS Intelligent Trading Robot is a commission-based trading software offered by an international organisation. This software is available for purchase. Through the use of OLYMPUS, users can establish their own trading strategies and commission OLYMPUS to execute the inquiry and trading of trading assets.</span></p><p class="c0"><span class="c4">2.OLYMPUS&#39;s technical team will regularly update and maintain the software based on user needs. Free online consultations and offline debugging will also be provided for any market-related software use problems.<br><br></span><span class="c5 c1">5.Termination of Services by OLYMPUS</span></p><p class="c0 c3"><span class="c2"></span></p><p class="c0"><span class="c2">OLYMPUS reserves the right to terminate services provided to users under the following circumstances:</span></p><p class="c0"><span class="c2">(1) If the user violates the relevant provisions of the service agreement, OLYMPUS has the right to terminate the provision of services to the user. If the user registers again directly or indirectly, or in the name of another person and it is discovered that false information has been provided, OLYMPUS has the right to unilaterally terminate the provision of services to the user directly;</span></p><p class="c0"><span class="c2">(2) If OLYMPUS discovers that the data or information provided by the user contains false content, OLYMPUS has the right to terminate the provision of services to the user at any time;</span></p><p class="c0"><span class="c2">(3) If the terms of service are terminated or updated, users expressly refuse to accept the new terms of service;</span></p><p class="c0"><span class="c4">(4) Other situations where OLYMPUS believes that service termination is necessary.<br><br><br></span><span class="c5 c1">6.Service Changes and Interruptions by OLYMPUS</span></p><p class="c0 c3"><span class="c2"></span></p><p class="c0"><span class="c2">1.As the software is dependent on the network&#39;s operating characteristics and third-party trading platforms, users must agree that OLYMPUS may change or interrupt some or all of the network services. OLYMPUS will not be held responsible for any user or third-party damages arising from such changes or interruptions.</span></p><p class="c0"><span class="c2">2.OLYMPUS needs to periodically or irregularly check or update the software provided. If such an activity causes a reasonable interruption of the software operation service, OLYMPUS will not be held responsible for it.</span></p><p class="c0"><span class="c2">3.If the OLYMPUS software generates abnormal transactions during its operation, OLYMPUS will not be held responsible for any resulting damages.</span></p><p class="c0"><span class="c2">4.In the event that a user experiences delays due to software testing or updates, OLYMPUS may, upon the user&#39;s request, compensate by extending the validity period of the software.</span></p><p class="c0"><span class="c5 c1">7.Disclaimer and Compensation Statement by OLYMPUS</span></p><p class="c0 c3"><span class="c2"></span></p><p class="c0"><span class="c2">1.This software is a trading assistant software and does not guarantee profits. Trading involves risks, and investments should be made with caution.</span></p><p class="c0"><span class="c2">2.Users should carefully consider the purchase of this software before making any transactions. Once purchased, the software is non-refundable.</span></p><p class="c0"><span class="c2">3.Users expressly agree that they bear all risks involved in the use of OLYMPUS and any consequences that may arise from such use.</span></p><p class="c0"><span class="c4">4.Users agree to protect and maintain the interests of OLYMPUS and other users. If a user engages in illegal, false, improper, or infringing activities that violate any terms under this agreement, the user agrees to bear liability for any damages caused to OLYMPUS and any other third parties.<br><br><br></span><span class="c1">8.Privacy Statement by OLYMPUS</span></p><p class="c0"><span class="c2">When a user registers for an OLYMPUS account, personal registration information is required.</span></p><p class="c0"><span class="c2">Information Use:</span></p><p class="c0"><span class="c2">1.OLYMPUS will not sell or lend users&#39; personal information to anyone without the user&#39;s prior permission.</span></p><p class="c0"><span class="c2">2.OLYMPUS does not allow any third party to collect, edit, sell, or disseminate users&#39; personal information by any means. If a user engages in the aforementioned activities, OLYMPUS has the right to immediately terminate the service agreement with the user and seize their account.</span></p><p class="c0"><span class="c2">3.In order to serve users, OLYMPUS may use users&#39; personal information to provide services, including but not limited to sending product and service information to users, or sharing information with OLYMPUS partners so that they can provide services to users.</span></p><p class="c0"><span class="c2">Information Disclosure: The user&#39;s personal information will be partially or fully disclosed under the following circumstances:</span></p><p class="c0"><span class="c2">(1) Disclosure to a third party with the user&#39;s consent.</span></p><p class="c0"><span class="c2">(2) Disclosure to third parties or administrative or judicial institutions in accordance with relevant provisions of the law or the requirements of administrative or judicial institutions.</span></p><p class="c0"><span class="c2">(3) If the user violates relevant laws or website policies of the local government and legal affairs department, their information needs to be disclosed to a third party.</span></p><p class="c0"><span class="c2">(4) In order to provide the products and services requested by the user, the user&#39;s personal information must be shared with a third party.</span></p><p class="c0"><span class="c2">(5) Other disclosures deemed appropriate by OLYMPUS in accordance with the law or website policy.</span></p><p class="c0"><span class="c2">(6) When users use the digital asset information provided by OLYMPUS, OLYMPUS will strictly fulfil the relevant confidentiality agreement.</span></p><p class="c0"><span class="c4"><br></span><span class="c1">9.Other</span></p><p class="c0"><span class="c2">OLYMPUS Quantification reminds users to pay attention to the clauses in this agreement that exempt OLYMPUS Quantification liability and limit user rights. Users should carefully read and consider the risks independently.</span></p><p class="c0 c3"><span class="c2"></span></p><p class="c0"><span class="c2">The final interpretation right of this agreement belongs to OLYMPUS, and reserves the right to all interpretation and modification.</span></p><p class="c0 c3"><span class="c2"></span></p><p class="c0"><span class="c2">This agreement shall be effective from March 17, 2023, and supersedes all previous agreements or understandings between the user and OLYMPUS.</span></p><p class="c0 c3"><span class="c2"></span></p><p class="c0"><span class="c2">&mdash;---------------------------------------------------------------------------------------------</span></p><p class="c3 c7"><span class="c5 c6"></span></p></body></html>';

  return (
    <Box className={classes.mainBox}>
    <Box>
      <img src="/images/logo.svg" />
    </Box>
    <Box><Typography className={classes.mainHeading}>User Service Agreement</Typography></Box>
  {data && <Box className={classes.content}>

      <div dangerouslySetInnerHTML={{ __html: data.description }} />
    </Box>}  
  </Box>
  );
}

export default PrivacyPolicy;
