import Link from 'next/link'
import Head from 'next/head'



function FirstPost({ data }) {
    return (
        <>
        <Head>
            <meta property="og:title" content={'Test Page @' + data.time + "!"}/>
            <meta property="og:site_name" content="Test Web"/>
            <meta property="og:url" content="http://localhost:3000/posts/first-post"/>
            <meta property="og:description" content={data.time}/>
            <meta property="og:type" content="article"/>
            <meta property="og:image" content="https://smallseotools.com/asets/images/form_subcribe_footer.png"/>
          </Head>
          <h1>First Post</h1>
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
        </>
      )
  }
  
  // This gets called on every request
  export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`)
    // const data = await res.json()
  
    // // Pass data to the page via props
    // return { props: { data } }
    const data = {
        time: new Date().toDateString()
    }

    return {props: {data}}
  }
  
  export default FirstPost