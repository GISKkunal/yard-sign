import React, {useState, useEffect} from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import Logo from "src/component/Logo";
import { useNavigate } from 'react-router-dom';
import ApiConfig from "src/config/APICongig"; 
import Axios from "axios";

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
function RiskNotice() {
    const classes = useStyles();
    const navigate = useNavigate();
    const html =
    '<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c1{border-right-style:solid;padding-top:0pt;border-top-width:0pt;border-right-width:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.15;border-left-width:0pt;border-top-style:solid;background-color:transparent;border-left-style:solid;border-bottom-width:0pt;border-bottom-style:solid;orphans:2;widows:2;text-align:left;padding-right:0pt;height:11pt}.c2{border-right-style:solid;padding-top:0pt;border-top-width:0pt;border-right-width:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.15;border-left-width:0pt;border-top-style:solid;background-color:transparent;border-left-style:solid;border-bottom-width:0pt;border-bottom-style:solid;orphans:2;widows:2;text-align:left;padding-right:0pt}.c8{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c6{color:#ffffff;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:1pt;font-family:"Arial";font-style:normal}.c7{color:#ffffff;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c5{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left;height:11pt}.c0{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c4{background-color:transparent;font-size:13pt;color:#ffffff;font-weight:700}.c3{background-color:transparent;max-width:451.4pt;padding:72pt 72pt 72pt 72pt}.c9{color:#ffffff}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c3 doc-content"><p class="c2"><span class="c4">Privacy Policy</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">Before registering for a transaction, users should have a clear understanding of the risks involved and make an objective judgement based on their own financial situation, funding sources, and risk tolerance as a rational person. Users should also carefully determine their investment objectives, investment quotas, and financial products.</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">Given the characteristics of internet-based transactions and products, OLYMPUS cannot fully guarantee the authenticity, sufficiency, timeliness, reliability, completeness, and validity of transaction-related information related to digital assets, whether implicitly or explicitly. All information, data, and files are for reference purposes only. By using OLYMPUS, users acknowledge and accept the inherent risks associated with trading. Users bear the risks arising from the exchange, and OLYMPUS is not responsible for any losses incurred due to investment risks.</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">OLYMPUS is committed to adhering to various countries&#39; laws and regulations and does not want to serve certain customers, such as those from local jurisdictions that prohibit digital asset-related activities or those listed on international sanctions lists. As a responsible corporate citizen, OLYMPUS may be required by law enforcement agencies to provide information and will provide assistance where permitted by law. Therefore, our platform only welcomes customers who comply with the law. We value your business and request that you act legally and ethically on our platform.</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">Privacy Policy</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">When you visit OLYMPUS or become an OLYMPUS customer, we collect device-related information, server log information, and other anonymous information types. We use customer data to provide services. We understand that customers are concerned about the use and confidentiality of their personal information. When you register and use your OLYMPUS account, we collect your personal and financial information, which we use to maintain your account, provide customer service, and enhance your customer experience. We use aggregated personal and non-personal information to improve OLYMPUS, monitor and protect the security of our services.</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">Unless required by law or agreed upon by you, we will not sell, rent, or trade your personal information to any third party, as specified in our privacy policy. If you have any questions or concerns about our compliance with this privacy policy, please contact us.</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">Disclaimer</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">All products, services, and content on the OLYMPUS website or App are provided &quot;as is&#39; &#39; without any express or implied guarantees, including but not limited to implied guaranties of merchantability, fitness for a particular purpose, ownership, non-infringement, and accuracy. OLYMPUS is not responsible for the accuracy or reliability of any information or content, nor does it make any statement or guarantee for the completeness or accuracy of the content provided by third parties on the website. You are responsible for evaluating the accuracy, reliability, timeliness, and completeness of any information provided on the website. OLYMPUS does not undertake the obligation to update the information on the website.</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">By using our services and information on the website, you agree to indemnify OLYMPUS against any liability, loss, claim, and expense, including attorney fees related to your breach of these terms of use or use of the services and information provided on the website.</span></p><p class="c2"><span class="c9"><br>&mdash;---------------------------------------------------------------------------------<br></span><span class="c7">Risk Advisory for OLYMPUS Users</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">Dear Valued User,</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">We would like to bring to your attention that trading derivatives on digital currency platforms such as Huobi and Binance carries a high level of risk. Therefore, it is essential to exercise caution when engaging in such activities.</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">At OLYMPUS, we provide quantitative tool services to assist users in their trading activities. However, it is important to note that any related transactions are solely the responsibility of the users themselves. By using our quantitative trading tools, users acknowledge and agree to the associated risks.</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c9">It is important to understand that any losses or risks incurred by users on digital currency platforms such as Huobi and Binance are not attributable to OLYMPUS. We encourage all users to exercise due diligence and invest wisely.<br><br>&mdash;--------------------------------------------------------------------------------------------<br></span><span class="c7">OLYMPUS Trade Function User Activation Service Agreement</span></p><p class="c1"><span class="c0"></span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">By activating the OLYMPUS Trade Function, an annual activation fee of 100 USDT is required, and refunds will not be granted.</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">Before activation, it is important to carefully read and comply with the &quot;User Service Agreement.&quot; It is essential to fully understand the contents of each clause, particularly the disclaimer, compensation statement, and corresponding clauses.</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">Your purchase or acceptance of gifts, as well as any use of this service, such as logging in and viewing, implies that you have read and agreed to be bound by this agreement.</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">Thank you for choosing OLYMPUS as your digital currency trading platform.</span></p><p class="c5"><span class="c8"></span></p></body></html>';
        const [data, setData] = useState({})
        const getSingleStaticContent = async () => {
             try {
                 const res = await Axios({
                     method: "GET",
                     url: ApiConfig.getSingleStaticContent,
                     params: {
                        type: "risk-warning"
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
    return (
        <Box className={classes.mainBox}>
        <Box onClick={()=>{navigate("/")}}>
          <img src="/images/logo.svg" />
        </Box>
        <Box><Typography className={classes.mainHeading}>Risk Warning</Typography></Box>
      {data && <Box className={classes.content}>
  
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </Box>}  
      </Box>
    );
}

export default RiskNotice;
