import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How do I add money to my PayFlex wallet?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Navigate to the "Wallet" section, select "Add Money," choose your payment method, and follow the instructions.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What are the benefits of using PayFlex over traditional payment methods?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          PayFlex offers convenience, security, rewards, and accessibility compared to traditional methods.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How do I link my bank account to PayFlex?


          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Go to "Bank Accounts," select "Link Account," enter your details, and complete the process.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What security measures does PayFlex have in place to protect my transactions?


          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          PayFlex uses encryption, two-factor authentication, and fraud monitoring to secure transactions.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How do I pay my bills using PayFlex?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In the "Bills" section, select "Pay Bill," choose the bill, enter the amount, and follow the instructions.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Can I transfer money from my PayFlex wallet to my bank account?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, go to "Wallet," select "Transfer Money," choose your bank account, enter the amount, and complete the transfer.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What is PayFlex's refund policy?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Refunds are processed according to the merchant's policy; contact customer support for assistance.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How do I contact PayFlex customer support?


          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
Go to "Help," select "Contact Us," and follow the instructions to reach customer support.


          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What should I do if I forget my PayFlex password?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Select "Forgot Password" on the login screen, verify your identity, and reset your password.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How do I change my PayFlex account password?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Go to "Settings," select "Change Password," enter your current and new password, and follow the instructions.

          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </Box>
  );
};

export default FAQ;