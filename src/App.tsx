import { CheckboxBaseUI, InputBaseUI, SelectBaseUI } from "./components/baseui";

function App() {
  return (
    <div className="w-[1320px] m-auto py-10">

      <h1 className="text-3xl font-bold">
        Qual lib Headless UI devemos utilizar?
      </h1>

      <section className="mt-10 mb-20">
        <h2 className="text-xl font-bold">BaseUI</h2>

        <div className="flex flex-row mt-5 gap-8 border border-zinc-100 rounded-lg p-6 bg-gray-50">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4 pb-2 text-primary-90 border-zinc-300 border-b">Input</h3>
            <div className="space-y-4">
              <InputBaseUI />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-4 pb-2 border-zinc-300 border-b">Checkbox</h3>
            <div className="space-y-4">
              <CheckboxBaseUI />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-4 pb-2 border-zinc-300 border-b">Select</h3>
            <div className="space-y-4">
              <SelectBaseUI />
            </div>
          </div>
        </div>

      </section>

      <section className="mt-10 mb-20">
          <h2 className="text-xl font-bold">Radix</h2>

      </section>

      <section className="mt-10 mb-20">
        <h2 className="text-xl font-bold">React Aria</h2>

      </section>

      <section className="mt-10 mb-20">
        <h2 className="text-xl font-bold">Shadcn</h2>

      </section>
    </div>
  )
}

export default App
