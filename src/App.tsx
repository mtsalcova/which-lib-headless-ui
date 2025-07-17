import { CheckboxBaseUI, InputBaseUI, SelectBaseUI } from "./components/baseui";
import {
  Checkbox as CheckboxShadcn,
  Select as SelectShadcn,
  Input as InputShadcn,
} from "./components/shadcn";

type SectionProps = {
  from: string;
  Input?: () => React.ReactNode;
  Checkbox?: () => React.ReactNode;
  Select?: () => React.ReactNode;
};

const Section = ({ from, Input, Checkbox, Select }: SectionProps) => (
  <section className="mt-10 mb-20">
    <h2 className="text-xl font-bold">{from}</h2>

    <div className="flex flex-row mt-5 gap-8 border border-zinc-100 rounded-lg p-6 bg-gray-50">
      <div className="flex-1">
        <h3 className="text-lg font-bold mb-4 pb-2 text-primary-90 border-zinc-300 border-b">
          Input
        </h3>
        <div className="space-y-4">{Input ? <Input /> : null}</div>
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-medium mb-4 pb-2 border-zinc-300 border-b">
          Checkbox
        </h3>
        <div className="space-y-4">{Checkbox ? <Checkbox /> : null}</div>
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-medium mb-4 pb-2 border-zinc-300 border-b">
          Select
        </h3>
        <div className="space-y-4">{Select ? <Select /> : null}</div>
      </div>
    </div>
  </section>
);

function App() {
  return (
    <div className="w-[1320px] m-auto py-10">
      <h1 className="text-3xl font-bold">
        Qual lib Headless UI devemos utilizar?
      </h1>

      <Section
        from="Base UI"
        Input={InputBaseUI}
        Checkbox={CheckboxBaseUI}
        Select={SelectBaseUI}
      />
      <Section from="Radix" />
      <Section from="React Aria" />
      <Section
        from="Shadcn"
        Input={InputShadcn}
        Checkbox={CheckboxShadcn}
        Select={SelectShadcn}
      />
    </div>
  );
}

export default App;
