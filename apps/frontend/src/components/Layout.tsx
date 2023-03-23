import { ReactNode } from "react";
import {FaGithub}from "react-icons/fa"
import Head from "next/head";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="flex p-3">
        <div className="flex-1">
          <Link className="btn-ghost btn text-xl normal-case" href="/">
            <span>Chantilly</span>
          </Link>
        </div>

        <div className="flex flex-wrap">
          <div className="btn-disabled btn">🦊 Coming Soon</div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {

  const resources = [
    {
      name: "Report a bug",
      href: "https://github.com/vyper-protocol/chantilly/issues"
    },
    {
      name: "Contribute",
      href: "https://github.com/vyper-protocol/chantilly"
    }
  ]

  return (
    // <footer className="footer footer-center max-h-24 bg-base-300 py-4 px-8 text-base-content md:max-h-20">
    //   <div className="pb-2">
    //     <div className="text-xl">Chantilly | <FaGithub size="20px" /></div> 
    //   </div>
    // </footer>
    <footer className="bg-base-200 text-base-content mt-8 flex w-full flex-col items-start justify-center space-y-8 p-10 md:flex-row md:space-y-0 md:space-x-12">
			<div className="flex items-center space-x-2 md:flex-col md:items-start">
				<p>
					<span className="text-xl font-bold">Chantilly</span>
					<br />
					Chantilly is a developer-focused tool for fast evm smart contracts prototyping.
				</p>
			</div>
			<div className="flex space-x-8">
				<div className="flex flex-col">
					<span className="footer-title">Resources</span>
          {resources.map((m, i) => (
						<Link key={i} className="bg-base-200 text-base-content hover:text-warning" href={m.href}>
							{m.name}
						</Link>
					))}
				</div>
			</div>
		</footer>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between" data-theme="light">
        <Header />
        <main className="my-4 flex grow justify-center">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
