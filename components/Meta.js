import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <link rel="canonical" href="https://happyevent.netlify.app/" />
      <meta
        property="og:title"
        content="Party planners in Mumbai | Happy Event Planners | Mumbai"
      />
      <meta
        property="og:description"
        content="Welcome to Happy events &amp; party planners. We are here to make your events awesome &amp; memorable."
      />
      <meta property="og:image" content="" />
      <meta property="og:image:width" content="2500" />
      <meta property="og:image:height" content="1330" />
      <meta property="og:url" content="https://happyevent.netlify.app/" />
      <meta property="og:site_name" content="Happy Event Planners" />
      <meta property="og:type" content="website" />
      <meta name="fb_admins_meta_tag" content="Happyevents" />
      <meta
        name="google-site-verification"
        content="TgMZ2YJs8m8z1aD2JXJiVrlInu4bY0aZCR8PeXacrIg"
      />
      <meta
        name="keywords"
        content="Event, In, Mumbai, Party, Planners, Dombivili, Happy, Akshatha Poojary"
      />
      <meta property="fb:admins" content="Happyevents" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Party planners in Mumbai | Happy Event Planners | Mumbai"
      />
      <meta
        name="twitter:description"
        content="Welcome to Happy events &amp; party planners. We are here to make your events awesome &amp; memorable."
      />
      <meta name="twitter:image" content="" />

      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Party planners in Mumbai | Happy Event Planners | Mumbai",
  keywords: "Event, In, Mumbai, Party, Planners, Dombivili, Happy, | Akshatha Poojary",
  description:
    "Welcome to Happy events &amp; party planners. We are here to make your events awesome &amp; memorable.",
};

export default Meta;
