import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="/inheritedprops"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Inherited props</h3>
            <p className="mt-4 text-xl">
              Loop inherited props
            </p>
          </a>

          <a
            href="/loopreverse"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Loop Reverse</h3>
            <p className="mt-4 text-xl">
              Loop reverse
            </p>
          </a>

          <a
            href="/loopfunction"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Loop Function</h3>
            <p className="mt-4 text-xl">
              A loop object
            </p>
          </a>

          <a
            href="/loopprop"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">React Spring Loop</h3>
            <p className="mt-4 text-xl">
              Loop Prop
            </p>
          </a>

          <a
            href="/cancel"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Cancel</h3>
            <p className="mt-4 text-xl">
              Cancel animate
            </p>
          </a>

          <a
            href="/trans_rot_scal"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Transformacion con Configs</h3>
            <p className="mt-4 text-xl">
              Rotacion X, Y y escala
            </p>
          </a>
          <a
            href="/trans_rot_scal_presets"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Transformacion con Configs y Presets</h3>
            <p className="mt-4 text-xl">
              Rotacion X, Y y escala, y PRESETS
            </p>
          </a>
          <a
            href="/usechain"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Uso de UseChain</h3>
            <p className="mt-4 text-xl">
              UseChain permite hacer dos animaciones continuas y entrelazadas
            </p>
          </a>
          <a
            href="/nav"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Adaptacion para Nav</h3>
            <p className="mt-4 text-xl">
              Adaptación para Navegador
            </p>
          </a>
          <a
            href="/usesprings"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Springs</h3>
            <p className="mt-4 text-xl">
              loop de listas
            </p>
          </a>
          <a
            href="/usesprings_01"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Transition</h3>
            <p className="mt-4 text-xl">
              Transition
            </p>
          </a>
          <a
            href="/useEffect_01"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Use Effect</h3>
            <p className="mt-4 text-xl">
              Uso de UseEffect para retrasar animaciones
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
