import { CardDemo } from "@/components/CardDemo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <CardDemo />
      </div>

      <div className="mt-8 mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-center">
        <a
          href="https://www.uniflash.io/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            UniFlash{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <img src="/uniflash.png" alt="uniflash" />
            </span>
          </h2>
          <p className="flex-col items-center text-sm opacity-50">
          Decentralized Application for Trading. Smooth experience within your browser, without generating dynamic links for enhanced privacy.
          </p>
        </a>

        <a
          href="https://reflect.evereth.net/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            EverETH Reflect{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <img src="/reflect.png" alt="" />
            </span>
          </h2>
          <p className="flex-col items-center text-sm opacity-50">
          Dividend protocol running on Binance Chain that pays holders rewards in ETH through a transaction fee reward system.
          </p>
        </a>

        <a
          href="https://dividends.evereth.net/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            EETH Dividends{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <img src="/EETH.png" alt="uniflash" />
            </span>
          </h2>
          <p className="flex-col items-center text-sm opacity-50">
          Consistent Monthly Dividend Payouts for the EETH token holders Powered by the EverETH products revenue.
          </p>
        </a>

      </div>
    </main>
  );
}
