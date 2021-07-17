import React from "react";
import TopImage from "../components/TopImage";
import ContactForm from "../components/Contact"
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <TopImage title="CONTACT US" />
      <ContactForm/>
    </Layout>
  );
};

export default Contact;
