import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>⚖.co.ua - First emoji law domain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="What is a emoji domain and how it works" />
        <p className="description">
          n emoji domain is a web domain that includes one or more emojis in its URL. This means that instead of using traditional alphanumeric characters, such as letters and numbers, the domain name includes emojis like 😊, 🌍, or 🎉. For example, a website's domain could be "example.com" or "😊.com."

Emoji domains became possible with the introduction of Internationalized Domain Names (IDNs), which allow domain names to include characters from various scripts and languages, including emojis. However, not all emojis are supported in domain names, and there are limitations and restrictions on their usage depending on the domain registrar and the domain name system (DNS) infrastructure.

Emoji domains can be eye-catching and memorable, especially for brands or websites targeting younger audiences or aiming for a playful and modern image. However, they can also pose technical challenges and may not be universally supported across all platforms and browsers.
        </p>
      </main>

      <Footer />
    </div>
  )
}
