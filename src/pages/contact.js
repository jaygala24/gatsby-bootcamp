import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <a href="https://twitter.com/@jaygala24" target="_blank">
          @jaygala24
        </a>{" "}
        on Twitter!
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
